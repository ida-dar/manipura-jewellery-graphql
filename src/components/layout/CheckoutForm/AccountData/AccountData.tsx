import { ChangeEvent } from 'react';
import InputComponent from 'src/components/common/Input/Input';
import Header from 'src/components/common/Header/Header';
import { NextInputs } from '../CheckoutFormCSS';
import { FORM_TYPES } from '../../../views/CheckoutView/CheckoutView';

type Form = {
  accountData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
};

interface PropTypes {
  form: Form;
  handleChange: (e: ChangeEvent<HTMLInputElement>, form: string) => void;
}

const AccountData = ({ form, handleChange }: PropTypes) => {
  return (
    <>
      <Header text="Account data" textAlign="left" />
      <NextInputs>
        <InputComponent
          id="firstName"
          name="firstName"
          type="text"
          placeholder="*First Name"
          required
          value={form.accountData.firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, FORM_TYPES.ACCOUNT_DATA)}
          margin="10px 10px 10px 0"
        />
        <InputComponent
          id="lastName"
          name="lastName"
          type="text"
          placeholder="*Last Name"
          required
          value={form.accountData.lastName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, FORM_TYPES.ACCOUNT_DATA)}
          margin="10px 0 10px 10px"
        />
      </NextInputs>
      <InputComponent
        id="email"
        name="email"
        type="email"
        placeholder="*E-Mail Address"
        value={form.accountData.email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, FORM_TYPES.ACCOUNT_DATA)}
        required
      />
      <InputComponent
        id="phone"
        name="phone"
        type="phone"
        placeholder="+48123456789"
        value={form.accountData.phone}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, FORM_TYPES.ACCOUNT_DATA)}
        required
      />
    </>
  );
};

export default AccountData;
