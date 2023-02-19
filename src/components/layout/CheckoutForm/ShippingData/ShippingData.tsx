import { ChangeEvent } from 'react';
import InputComponent from 'src/components/common/Input/Input';
import Header from 'src/components/common/Header/Header';
import { NextInputs, Select } from '../CheckoutFormCSS';
import _countries from '../../../../data/countries.json';

interface PropTypes {
  street: string;
  city: string;
  zip: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ShippingData = ({ street, city, zip, handleChange }: PropTypes): any => {
  return (
    <>
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
      <InputComponent
        id="city"
        name="city"
        type="text"
        placeholder="*City"
        required
        value={street}
        onChange={handleChange}
      />
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
          value={zip}
          onChange={handleChange}
          pattern="^\s*?\d{5}(?:[-\s]\d{4})?\s*?$"
          required
          margin="10px 10px 10px 0"
        />
        <Select>
          {_countries.map((el) => (
            <option key={el.code} value={el.code} selected={el.code === 'PL'}>
              {el.name}
            </option>
          ))}
        </Select>
      </NextInputs>
    </>
  );
};

export default ShippingData;
