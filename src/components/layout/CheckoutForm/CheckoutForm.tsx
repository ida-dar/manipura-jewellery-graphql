import { useState } from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from 'src/utils/routes';

import _countries from '../../../data/countries.json';

import Header from 'src/components/common/Header/Header';
import InputComponent from 'src/components/common/Input/Input';
import { NextInputs, Select, Wrapper } from './CheckoutFormCSS';

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

  const [formFields, setFormFields] = useState(defaultForm);
  const { firstName, lastName, email, tel, street, city, zip } = formFields;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetValues = () => {
    setFormFields(defaultForm);
  };

  return (
    <Wrapper>
      <p>
        If you already have an account with us, please login at the{' '}
        <Link to={`${process.env.PUBLIC_URL}${appRoutes.LOGIN}`}>login page</Link>.
      </p>

      {/* Account data */}
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
        placeholder="+48 123456789"
        value={tel}
        onChange={handleChange}
        required
      />

      {/* Payment data */}
      <Header text="Payment data" textAlign="left" />

      {/* Shipping data */}
      <Header text="Shipping data" textAlign="left" />
      <InputComponent
        id="street"
        name="street"
        type="text"
        placeholder="*Street"
        required
        value={street}
        onChange={handleChange}
      />
      <InputComponent id="city" name="city" type="text" placeholder="*City" required value={city} onChange={handleChange} />
      <InputComponent
        id="company"
        name="company"
        type="text"
        placeholder="Company (optional)"
        value={city}
        onChange={handleChange}
      />
      <NextInputs>
        <InputComponent
          id="zip"
          name="zip"
          type="text"
          placeholder="*Post Code"
          value={email}
          onChange={handleChange}
          pattern="^\s*?\d{5}(?:[-\s]\d{4})?\s*?$"
          required
          margin="10px 10px 10px 0"
        />
        <Select>
          {_countries.map((el) => (
            <option key={el.code} value={el.code}>
              {el.name}
            </option>
          ))}
        </Select>
      </NextInputs>
    </Wrapper>
  );
};

export default CheckoutForm;
