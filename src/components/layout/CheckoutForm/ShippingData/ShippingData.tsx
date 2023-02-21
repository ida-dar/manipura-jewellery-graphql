import { ChangeEvent } from 'react';
import InputComponent from 'src/components/common/Input/Input';
import Header from 'src/components/common/Header/Header';
import { NextInputs, Select } from '../CheckoutFormCSS';
import _countries from '../../../../data/countries.json';

type Form = {
  shippingData: {
    street: string;
    city: string;
    country: string;
    postcode: string;
    company: string;
  };
};

interface PropTypes {
  form: Form;
  handleChange: (e: ChangeEvent<HTMLInputElement>, form: string) => void;
}

const ShippingData = ({ form, handleChange }: PropTypes): any => {
  return (
    <>
      <Header text="Shipping data" textAlign="left" />
      <InputComponent
        id="street"
        name="street"
        type="text"
        placeholder="*Street"
        required
        value={form.shippingData.street}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'shippingData')}
      />
      <InputComponent
        id="city"
        name="city"
        type="text"
        placeholder="*City"
        required
        value={form.shippingData.city}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'shippingData')}
      />
      <InputComponent
        id="company"
        name="company"
        type="text"
        placeholder="Company (optional)"
        value={form.shippingData.company}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'shippingData')}
      />
      <NextInputs>
        <InputComponent
          id="postcode"
          name="postcode"
          type="text"
          placeholder="*Post Code"
          value={form.shippingData.postcode}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'shippingData')}
          pattern="^\s*?\d{5}(?:[-\s]\d{4})?\s*?$"
          required
          margin="10px 10px 10px 0"
        />
        <Select id="country" name="country" onChange={(e: any) => handleChange(e, 'shippingData')}>
          {_countries.map((el) => (
            <option key={el.code} value={el.name} selected={el.code === 'PL'}>
              {el.name}
            </option>
          ))}
        </Select>
      </NextInputs>
    </>
  );
};

export default ShippingData;
