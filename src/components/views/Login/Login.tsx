import { useContext } from 'react';
import { Col } from 'src/assets/Flexbox';
import LoginForm from 'src/components/features/LoginForm';
import RegisterForm from 'src/components/features/RegisterForm';
import { UserContext } from 'src/store/UserStore';
import AccountView from '../AccountView/AccountView';
import { LoginContainer } from './LoginCSS';

const Login = () => {
  const { currUser } = useContext(UserContext);
  return (
    <LoginContainer lg={11} md={10} sm={12} justify="space-between" align="start">
      {currUser ? (
        <AccountView />
      ) : (
        <>
          <Col lg={6} md={12} sm={12}>
            <RegisterForm />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <LoginForm />
          </Col>
        </>
      )}
    </LoginContainer>
  );
};

export default Login;
