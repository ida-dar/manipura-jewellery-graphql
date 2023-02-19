import { ChangeEvent } from 'react';
import InputComponent from 'src/components/common/Input/Input';
import Header from 'src/components/common/Header/Header';
import { NextInputs } from '../CheckoutFormCSS';

interface PropTypes {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AccountData = ({ firstName, lastName, email, tel, handleChange }: PropTypes) => {
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
          value={firstName}
          onChange={handleChange}
          margin="10px 10px 10px 0"
        />
        <InputComponent
          id="lastName"
          name="lastName"
          type="text"
          placeholder="*Last Name"
          required
          value={lastName}
          onChange={handleChange}
          margin="10px 0 10px 10px"
        />
      </NextInputs>
      <InputComponent
        id="email"
        name="email"
        type="email"
        placeholder="*E-Mail Address"
        value={email}
        onChange={handleChange}
        required
      />
      <InputComponent
        id="tel"
        name="tel"
        type="tel"
        placeholder="+48123456789"
        value={tel}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default AccountData;
