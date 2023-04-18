// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  User,
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  sendPasswordResetEmail,
  signInWithPopup,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { Product, UserData } from 'src/interfaces';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAp2NdYIYWo6LojSvpLMAKuQ-4bfWZvoj8',
  authDomain: 'styled-components-web-app.firebaseapp.com',
  projectId: 'styled-components-web-app',
  storageBucket: 'styled-components-web-app.appspot.com',
  messagingSenderId: '774350076259',
  appId: '1:774350076259:web:c9399cc3d753bca227bb56',
};

/*
Initialize Firebase
*/
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

/*
Initialize Firebase Authentication and get a reference to the service
*/
export const auth = getAuth();
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const signInWithGooglePopup = (): any => signInWithPopup(auth, provider);

/*
Initialize Cloud Firestore and get a reference to the service
*/
export const db = getFirestore();

// Unnecessary code, was needed only for uploading data from js file to Firestore, left for future reference
// type ObjToAdd = {
//   title: string;
// };

// export const addCollectionAndDocs = async <T extends ObjToAdd>(key: string, objects: T[]) => {
//   const collRef = collection(db, key);
//   const batch = writeBatch(db);

//   objects.forEach((el: any) => {
//     const docRef = doc(collRef);
//     batch.set(docRef, el);
//   });

//   await batch.commit();
//   console.log('done');
// };

export const getCollectionAndDocs = async (dbName: string) => {
  const collRef = collection(db, dbName);
  const q = query(collRef);

  const querySnapshot = await getDocs(q);
  const collMap = querySnapshot.docs.map((docSnapshot) => {
    const finalObj = {
      id: docSnapshot.id, // get product id given by Firebase
      data: docSnapshot.data() as Product, // get the rest of products data
    };
    return finalObj;
  });
  return collMap;
};

// User auth
type UserInfo = {
  displayName?: string;
  uid?: string;
};

export const createUserDocFromAuth = async (
  userAuth: User,
  userInfo = {} as UserInfo
): Promise<void | QueryDocumentSnapshot> => {
  if (!userAuth) return;
  // with google sign in with popup the following error appears: 'TypeError: can't access property "indexOf", n is undefined'. The user gets correctly logged in only after page reload. The workaround is to pass the user uid from user object from the signInWithGooglePopup request
  let uid = userInfo.uid ? userInfo.uid : userAuth.uid;

  const docRef = doc(db, 'users', uid);
  const userSnapshot = await getDoc(docRef);

  if (!userSnapshot.exists()) {
    const created = new Date();
    const { displayName, email } = userAuth;
    const user = {
      displayName,
      email,
      created,
      ...userInfo,
    } as UserData;

    try {
      await setDoc(docRef, user);
    } catch (e) {
      console.log('Firebase error: ', e);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const registerUser = async (email: string, password: string): Promise<UserCredential | undefined> => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = async (email: string, password: string): Promise<UserCredential | undefined> => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const forgotPassword = async (email: string) => sendPasswordResetEmail(auth, email);

export const logoutUser = async (): Promise<void> => await signOut(auth);

export const authStateListener = (cb: NextOrObserver<User>) => onAuthStateChanged(auth, cb);

export const getCurrUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
