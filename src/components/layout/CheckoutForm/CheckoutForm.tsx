import { useState } from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from 'src/utils/routes';
import { selectCurrUser } from 'src/redux/user/userSelector';
import { useAppSelector } from 'src/utils/hooks';

import { Wrapper } from './CheckoutFormCSS';
import AccountData from './AccountData/AccountData';
import ShippingData from './ShippingData/ShippingData';
import PaymentData from './PaymentData/PaymentData';

const CheckoutForm = ({ form, handleChange }: any) => {
  const currUser = useAppSelector(selectCurrUser);

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
        <AccountData form={form} handleChange={handleChange} />
      </>

      {/* Payment data */}
      <>
        <PaymentData />
      </>

      {/* Shipping data */}
      <>
        <ShippingData form={form} handleChange={handleChange} />
      </>
    </Wrapper>
  );
};

export default CheckoutForm;
