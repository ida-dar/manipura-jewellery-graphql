import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRedirectResult, UserCredential } from 'firebase/auth';

import { auth, createUserDocFromAuth } from 'src/utils/firebase/firebase';
import { appRoutes } from 'src/utils/routes';
import { useAppDispatch } from 'src/utils/hooks';
import { emailSignIn, googleSignIn } from 'src/redux/user/userActions';

import { Row } from 'src/assets/Flexbox';
import { Form, Link } from './LoginFormCSS';
import InputComponent from 'src/components/common/Input/Input';
import Header from 'src/components/common/Header/Header';
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

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formFields, setFormFields] = useState(defaultForm);
  const [loginError, setLoginError] = useState(errors);
  const { email, password } = formFields;

  useEffect(() => {
    const getRedirectSignInData = async () => {
      const resp: UserCredential | null = await getRedirectResult(auth);
      if (resp) {
        await createUserDocFromAuth(resp.user);
        navigate(-3); // if set to "-1" it redirects to google login page
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

  const loginWithGoogle = () => {
    try {
      dispatch(googleSignIn());
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;

    try {
      const user = { email: email, password: password };
      dispatch(emailSignIn(user));
      resetValues();
      navigate(-1); // redirect to previous page, e.g. watched product
    } catch (e: any) {
      if (e.code?.includes('auth/user-not-found')) {
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
    <>
      <Form onSubmit={onSubmit}>
        <Row justify="space-between" direction="column">
          <Header text="Returning customer" />
          <InputComponent
            id="email"
            name="email"
            type="email"
            placeholder="E-Mail Address"
            value={email}
            onChange={handleChange}
          />
          <InputComponent
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <Link to={`${process.env.PUBLIC_URL}${appRoutes.FORGOT_PASSWORD}`}>Forgot password</Link>
          {!loginError.valid && <MessageComponent messageType={TYPES.error} message={loginError.error} />}
          <Row justify="space-between" lg={12}>
            <ButtonComponent width={200} margin="12px 12px 12px 0" text="Login" type="submit" />
            <ButtonComponent
              width={200}
              margin="12px 0 12px 12px"
              text="Login with"
              icon={<FontAwesomeIcon icon={faGoogle} />}
              onClick={loginWithGoogle}
            />
          </Row>
        </Row>
      </Form>
    </>
  );
};

export default LoginForm;
