import { useEffect, useState } from 'react';
import { getRedirectResult, UserCredential } from 'firebase/auth';
import { signInWithGoogleRedirect, loginUser, auth, createUserDocFromAuth } from 'src/utils/firebase/firebase';
import { appRoutes } from 'src/utils/routes';

import { Row } from 'src/assets/Flexbox';
import { Link } from './LoginFormCSS';
import InputComponent from 'src/components/common/Input/Input';
import { Header } from 'src/components/common/AccountHeader/AccountHeader';
import ButtonComponent from 'src/components/common/Button/Button';
import MessageComponent, { TYPES } from 'src/components/common/Message/Message';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginForm = () => {
  const defaultForm = {
    email: '' as string,
    password: '' as string,
  };

  const errors = {
    valid: true,
    error: '',
  };

  const [formFields, setFormFields] = useState(defaultForm);
  const [loginError, setLoginError] = useState(errors);
  const { email, password } = formFields;

  useEffect(() => {
    const getRedirectSignInData = async () => {
      const resp: UserCredential | null = await getRedirectResult(auth);
      if (resp) {
        await createUserDocFromAuth(resp.user);
      } else {
        setLoginError({
          valid: true,
          error: 'Login was unsuccessful. Please try again.',
        });
      }
    };

    getRedirectSignInData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetValues = () => {
    setFormFields(defaultForm);
    setLoginError({
      valid: true,
      error: '',
    });
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithGoogleRedirect();
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;

    try {
      await loginUser(email, password);
      resetValues();
    } catch (e: any) {
      if (e.code.includes('auth/user-not-found')) {
        setLoginError({
          valid: false,
          error: 'User not found. Please register or try again.',
        });
      } else {
        setLoginError({
          valid: false,
          error: 'Login was unsuccessful. Please try again.',
        });
      }
      console.log('Login error', e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Row justify="center" direction="column">
        <Header>Returning customer</Header>
        <InputComponent
          name="email"
          type="email"
          placeholder="E-Mail Address"
          value={email}
          onChange={handleChange}
          required
        />
        <InputComponent
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <Link to={`${process.env.PUBLIC_URL}${appRoutes.FORGOT_PASSWORD}`}>Forgot password</Link>
        {!loginError.valid && <MessageComponent messageType={TYPES.error} message={loginError.error} />}
        <div>
          <ButtonComponent width={212} text="Login" type="submit" />
          <ButtonComponent
            width={212}
            text="Login with"
            icon={<FontAwesomeIcon icon={faGoogle} />}
            onClick={loginWithGoogle}
          />
        </div>
      </Row>
    </form>
  );
};

export default LoginForm;
