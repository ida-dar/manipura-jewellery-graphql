import { Col } from 'src/assets/Flexbox';
import LoginForm from 'src/components/features/LoginForm';
import RegisterForm from 'src/components/features/RegisterForm';
import { LoginContainer } from './LoginCSS';

const Login = () => {
  return (
    <LoginContainer lg={11} md={10} sm={12} justify="space-between" align="start">
      <Col lg={6} md={12} sm={12}>
        <RegisterForm />
      </Col>
      <Col lg={6} md={12} sm={12}>
        <LoginForm />
      </Col>
    </LoginContainer>
  );
};

export default Login;
