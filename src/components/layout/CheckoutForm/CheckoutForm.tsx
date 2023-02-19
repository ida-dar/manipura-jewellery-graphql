import { useState } from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from 'src/utils/routes';
import { selectCurrUser } from 'src/redux/user/userSelector';
import { useAppSelector } from 'src/utils/hooks';

import { Wrapper } from './CheckoutFormCSS';
import AccountData from './AccountData/AccountData';
import ShippingData from './ShippingData/ShippingData';
import PaymentData from './PaymentData/PaymentData';

const CheckoutForm = () => {
  const defaultForm = {
    // account
    firstName: '' as string,
    lastName: '' as string,
    email: '' as string,
    // address
    tel: '' as string,
    street: '' as string,
    city: '' as string,
    zip: '' as string,
  };

  const errors = {
    valid: true,
    error: '',
  };
  const currUser = useAppSelector(selectCurrUser);
  const [formFields, setFormFields] = useState(defaultForm);
  const { firstName, lastName, email, tel, street, city, zip } = formFields;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetValues = () => {
    setFormFields(defaultForm);
  };

  return (
    <Wrapper>
      {!currUser && (
        <p>
          If you already have an account with us, please login at the{' '}
          <Link to={`${process.env.PUBLIC_URL}${appRoutes.LOGIN}`}>login page</Link>.
        </p>
      )}

      {/* Account data */}
      <>
        <AccountData firstName={firstName} lastName={lastName} email={email} tel={tel} handleChange={handleChange} />
      </>

      {/* Payment data */}
      <>
        <PaymentData />
      </>

      {/* Shipping data */}
      <>
        <ShippingData street={street} city={city} zip={zip} handleChange={handleChange} />
      </>
    </Wrapper>
  );
};

export default CheckoutForm;
