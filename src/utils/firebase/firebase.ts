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
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, Firestore, query, getDocs } from 'firebase/firestore';

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
export const auth = getAuth(app);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

/*
Initialize Cloud Firestore and get a reference to the service
*/
export const db = getFirestore(app);

// Unnecessary code, was needed only for uploading data from js file to Firestore, left for a future reference
// export const addCollectionAndDocs = async (key: string, objects: any) => {
//   const collRef = collection(db, key);
//   const batch = writeBatch(db);

//   objects.forEach((el: any) => {
//     const docRef = doc(collRef);
//     batch.set(docRef, el);
//   });

//   await batch.commit();
//   console.log('done');
// };

export const getCollectionAndDocs = async () => {
  const collRef = collection(db, 'products');
  const q = query(collRef);

  const querySnapshot = await getDocs(q);
  const collMap = querySnapshot.docs.reduce((acc: any, docSnapshot: any) => {
    const { ...rest } = docSnapshot.data();
    const obj = {
      id: docSnapshot.id,
      ...rest,
    };
    acc.push(obj);
    return acc;
  }, []);

  return collMap;
};

// User auth
export const createUserDocFromAuth = async (userAuth: User, userInfo: any = {}) => {
  if (!userAuth) return;

  const docRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(docRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const created = new Date();
    const user: User = {
      displayName,
      email,
      created,
      ...userInfo,
    };

    try {
      await setDoc(docRef, user);
    } catch (e) {
      console.log('Firebase error: ', e);
    }
  }
  return docRef;
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

export const logoutUser = async (): Promise<void> => signOut(auth);

export const authStateListener = (cb: NextOrObserver<User>) => onAuthStateChanged(auth, cb);
