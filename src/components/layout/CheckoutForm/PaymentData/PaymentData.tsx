import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Header from 'src/components/common/Header/Header';

const PaymentData = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e: any) => {
    e.preventDefault();

    console.log(stripe);

    if (!stripe && !elements) {
      return;
    }

    const resp = await fetch('/amplify/backend/function/createPaymentIntent/src/index.js', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());

    console.log(resp);
  };

  return (
    <form onSubmit={paymentHandler}>
      <Header text="Payment data" textAlign="left" />
      <CardElement />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentData;
