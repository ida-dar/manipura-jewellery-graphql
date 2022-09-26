import { Col, Row } from 'src/assets/Flexbox';
import LoginForm from 'src/components/features/LoginForm';
import RegisterForm from 'src/components/features/RegisterForm';

const Login = () => {
  return (
    <Row lg={11} md={10} sm={12} wrap="wrap" justify="space-between" align="start">
      <Col lg={6} md={12} sm={12}>
        <RegisterForm />
      </Col>
      <Col lg={6} md={12} sm={12}>
        <LoginForm />
      </Col>
    </Row>
  );
};

export default Login;
