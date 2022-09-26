import { NavLink } from 'react-router-dom';
import { Row } from 'src/assets/Flexbox';
import { Header } from 'src/components/common/AccountHeader/AccountHeader';
import ButtonComponent from 'src/components/common/Button/Button';
import { appRoutes } from 'src/utils/routes';

const RegisterForm = () => {
  return (
    <Row justify="center" alignContent="start" wrap="wrap" textAlign="center">
      <Header>New customer</Header>
      <p>
        By creating an account you will be able to shop faster, be up to date on order's status and keep track of the ones
        previously made.
      </p>
      <NavLink to={`${process.env.PUBLIC_URL}${appRoutes.ACCOUNT_REGISTER}`}>
        <ButtonComponent text="Continue" />
      </NavLink>
    </Row>
  );
};

export default RegisterForm;
