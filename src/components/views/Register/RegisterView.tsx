import { useContext, useState } from 'react';
import { appRoutes } from 'src/utils/routes';
import { UserContext } from 'src/store/UserStore';
import { User, UserCredential } from 'firebase/auth';
import { registerUser, createUserDocFromAuth } from 'src/utils/firebase/firebase';

import { Row } from 'src/assets/Flexbox';
import { Link } from './RegisterViewCSS';
import { Header } from 'src/components/common/AccountHeader/AccountHeader';
import InputComponent from 'src/components/common/Input/Input';
import ButtonComponent from 'src/components/common/Button/Button';
import MessageComponent, { TYPES } from 'src/components/common/Message/Message';

const RegisterView = () => {
  const defaultForm = {
    firstName: '' as string,
    lastName: '' as string,
    email: '' as string,
    password: '' as string,
    passwordConfirm: '' as string,
  };

  const errors = {
    valid: true,
    error: '',
  };

  const [formFields, setFormFields] = useState(defaultForm);
  const [matchedPasswords, setMatchedPasswords] = useState(false);
  const [registrationError, setRegistrationError] = useState(errors);
  const { firstName, lastName, email, password, passwordConfirm } = formFields;

  const { setCurrUser } = useContext(UserContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetValues = () => {
    setFormFields(defaultForm);
    setRegistrationError({
      valid: true,
      error: '',
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    if (password !== passwordConfirm) {
      setMatchedPasswords(true);
      return;
    }
    try {
      const resp: UserCredential | undefined = await registerUser(email, password);
      const displayName = `${firstName} ${lastName}`;
      await createUserDocFromAuth(resp?.user as User, { displayName });
      resetValues();
      setCurrUser(resp?.user as User);
    } catch (e: any) {
      if (e.code.includes('auth/email-already-in-use')) {
        setRegistrationError({
          valid: false,
          error: 'User with given email address is already registered. Please try again.',
        });
      } else {
        setRegistrationError({
          valid: false,
          error: 'Registration was unsuccessful. Please try again.',
        });
      }
      console.log('Registration error:', e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Row lg={5} justify="center" wrap="wrap" textAlign="center">
        <Header>Create Account</Header>
        <p>
          If you already have an account with us, please login at the{' '}
          <Link to={`${process.env.PUBLIC_URL}${appRoutes.ACCOUNT}`}>login page</Link>.
        </p>
        <InputComponent
          name="firstName"
          type="text"
          placeholder="First Name"
          required
          value={firstName}
          onChange={handleChange}
        />
        <InputComponent
          name="lastName"
          type="text"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={handleChange}
        />
        <InputComponent name="email" type="email" placeholder="E-Mail" required value={email} onChange={handleChange} />
        <InputComponent
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
        />
        <InputComponent
          name="passwordConfirm"
          type="password"
          placeholder="Password Confirm"
          required
          value={passwordConfirm}
          onChange={handleChange}
        />
        {matchedPasswords && (
          <MessageComponent messageType={TYPES.warning} message={'Your passwords do not match. Please review.'} />
        )}
        {!registrationError.valid && <MessageComponent messageType={TYPES.error} message={registrationError.error} />}
        <ButtonComponent width={450} type="submit" text="Continue" />
        <Link to={`${process.env.PUBLIC_URL}${appRoutes.HOME}`} margin={24}>
          Return to Store
        </Link>
      </Row>
    </form>
  );
};

export default RegisterView;
