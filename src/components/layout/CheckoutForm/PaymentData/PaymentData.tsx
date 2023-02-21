import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement, StripeCardNumberElement } from '@stripe/stripe-js/types/stripe-js';
import { selectCartTotal } from 'src/redux/cart/cartSelector';
import { selectCurrUser } from 'src/redux/user/userSelector';
import { useAppSelector } from 'src/utils/hooks';
import Header from 'src/components/common/Header/Header';

const PaymentData = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useAppSelector(selectCartTotal);
  const currUser = useAppSelector(selectCurrUser);
  const [isPendingPayment, setPendngPayment] = useState(false);

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

  const paymentHandler = async (e: any) => {
    e.preventDefault();

    if (!stripe && !elements) {
      return;
    }

    setPendngPayment(true);

    const resp = await fetch('https://5zfcaeaj3gzefxheryhe2mublq0fdshk.lambda-url.eu-west-2.on.aws', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = resp;

    const paymentResult = await stripe?.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements?.getElement('card') as StripeCardElement | StripeCardNumberElement,
        billing_details: {
          name: currUser ? currUser.displayName : 'Guest',
        },
      },
    });

    setPendngPayment(false);

    if (paymentResult?.error) {
      alert(paymentResult?.error);
    } else {
      if (paymentResult?.paymentIntent.status === 'succeeded') {
        alert('done!');
      }
    }
  };

  return (
    <>
      <Header text="Payment data" textAlign="left" />
      <CardElement id="card-element" options={cardStyle} />
    </>
  );
};

export default PaymentData;
