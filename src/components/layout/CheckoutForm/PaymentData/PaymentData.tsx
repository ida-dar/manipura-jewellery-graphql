import { CardElement } from '@stripe/react-stripe-js';
import Header from 'src/components/common/Header/Header';

const PaymentData = () => {
  const cardStyle = {
    style: {
      margin: '32px',
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <>
      <Header text="Payment data" textAlign="left" />
      <CardElement id="card-element" options={cardStyle} />
    </>
  );
};

export default PaymentData;
