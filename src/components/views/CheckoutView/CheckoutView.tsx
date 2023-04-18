import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { selectCartItems, selectCartTotal } from 'src/redux/cart/cartSelector';
import { useAppSelector } from 'src/utils/hooks';
import { appRoutes } from 'src/utils/routes';
import { CartItem } from 'src/interfaces';

import { Row } from 'src/assets/Flexbox';
import CheckoutCart from 'src/components/layout/CheckoutCart/CheckoutCart';
import ButtonComponent from 'src/components/common/Button/Button';
import Header from 'src/components/common/Header/Header';
import CheckoutForm from 'src/components/layout/CheckoutForm/CheckoutForm';
import { Form, Textarea } from './CheckoutViewCSS';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { selectCurrUser } from 'src/redux/user/userSelector';
import { StripeCardElement, StripeCardNumberElement } from '@stripe/stripe-js';
import PopUp from 'src/components/features/PopUp/PopUp';

type HandleChangeEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>;

export enum FORM_TYPES {
  ACCOUNT_DATA = 'accountData',
  SHIPPING_DATA = 'shippingData',
  ORDER_INFO = 'orderInfo',
}

const CheckoutView = () => {
  const cartItems = useAppSelector(selectCartItems);

  const defaultForm = {
    // account
    accountData: {
      firstName: '' as string,
      lastName: '' as string,
      email: '' as string,
      phone: '' as string,
    },
    // address
    shippingData: {
      street: '' as string,
      city: '' as string,
      country: 'PL' as string,
      postcode: '' as string,
      company: '' as string,
    },
    // order
    orderInfo: {
      comments: '' as string,
    },
  };

  const errors = {
    valid: true as boolean,
    error: '' as any,
  };

  const stripe = useStripe();
  const elements = useElements();
  const amount = useAppSelector<number>(selectCartTotal);
  const currUser = useAppSelector(selectCurrUser);
  const [formFields, setFormFields] = useState(defaultForm);
  const [error, setError] = useState(errors);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [paymentPending, setPaymentPending] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>('');

  const handleChange = (e: HandleChangeEvent, form: string): void => {
    const { name, value } = e.target;

    if (form === FORM_TYPES.ACCOUNT_DATA) {
      setFormFields((prevState: any) => {
        prevState.accountData[name] = value;
        return { ...prevState };
      });
    } else if (form === FORM_TYPES.SHIPPING_DATA) {
      setFormFields((prevState: any) => {
        prevState.shippingData[name] = value;
        return { ...prevState };
      });
    } else if (form === FORM_TYPES.ORDER_INFO) {
      setFormFields((prevState: any) => {
        prevState.orderInfo[name] = value;
        return { ...prevState };
      });
    }
  };

  const resetValues = () => {
    setFormFields(defaultForm);
    elements?.getElement('card')?.clear();
  };

  const closeModal = () => setOpenModal(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // reset errors and modal in case of second click on submit button
    setError({
      valid: true,
      error: '',
    });
    setOpenModal(false);

    try {
      if (
        !_.values(formFields.accountData).every(_.isEmpty) &&
        !_.values(_.omit(formFields.shippingData, ['company'])).every(_.isEmpty)
      ) {
        if (!stripe && !elements) {
          return;
        } else {
          setPaymentPending(true);
          const resp = await fetch('https://5zfcaeaj3gzefxheryhe2mublq0fdshk.lambda-url.eu-west-2.on.aws', {
            method: 'post',
            headers: {
              Origin: '*',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': '*',
              'Access-Control-Allow-Methods': 'POST, OPTIONS',
            },
            body: JSON.stringify({ formFields, amount: amount * 100 }),
          }).then((res) => res.json());

          const {
            paymentIntent: { client_secret, metadata },
          } = resp;

          setCustomerName(metadata.email);

          console.log(resp);

          const paymentResult = await stripe?.confirmCardPayment(client_secret, {
            payment_method: {
              card: elements?.getElement('card') as StripeCardElement | StripeCardNumberElement,
              billing_details: {
                name: currUser ? currUser.displayName : metadata.name,
              },
            },
          });

          if (paymentResult?.error) {
            setError({
              valid: false,
              error: paymentResult?.error?.message,
            });
          } else {
            if (paymentResult?.paymentIntent.status === 'succeeded') {
              setError({
                valid: true,
                error: '',
              });
            }
            setPaymentPending(false);
            setOpenModal(!openModal);
            resetValues();
          }
        }
      } else {
        setError({
          valid: false,
          error: `Following form fields are empty:
            ${Object.entries(formFields.accountData).map((key, val) => {
              key[1] === '';
              return key[0].toUpperCase();
            })}
            ${Object.entries(_.omit(formFields.shippingData, ['company'])).map((key, val) => {
              key[1] === '';
              return key[0].toUpperCase();
            })}
          `,
        });
        setOpenModal(!openModal);
      }
    } catch (err) {
      setError({
        valid: false,
        error: err,
      });
      setOpenModal(!openModal);
      console.log(err);
    }
  };

  return (
    <Row>
      {cartItems.length ? (
        <Form onSubmit={handleSubmit}>
          <Row lg={5} align="center" alignContent="center" direction="column">
            <CheckoutForm form={formFields} handleChange={handleChange} />
          </Row>
          <Row lg={5} align="center" alignContent="center" direction="column">
            <CheckoutCart cartItems={cartItems as CartItem[]} />
            <Textarea
              id="comments"
              name="comments"
              value={formFields.orderInfo.comments}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e, FORM_TYPES.ORDER_INFO)}
              placeholder="Add Comments About Your Order"
            />
            <ButtonComponent
              text="Confirm order"
              width="100%"
              reverseColors
              textTransform="uppercase"
              type="submit"
              disabled={paymentPending}
            />
          </Row>
        </Form>
      ) : (
        <Row lg={10} textAlign="center" direction="column" justify="center">
          <Header text="Nothing in cart" />
          <Link to={`${process.env.PUBLIC_URL}${appRoutes.HOME}`}>
            <ButtonComponent width={250} text="Return to homepage" />
          </Link>
        </Row>
      )}
      {error.valid === false && typeof error.error !== 'string' && (
        <PopUp
          content={[
            'There was an error while processing your request. Please try again or contact as at ' +
            <a href="mailto:test.account@mail.com">test.account@mail.com</a>,
          ]}
        />
      )}
      {error.valid === false && typeof error.error === 'string' && (
        <PopUp open={openModal} closeModal={closeModal} content={error.error} />
      )}
      {error.valid && error.error === '' && customerName !== '' && (
        <PopUp
          open={openModal}
          closeModal={closeModal}
          content={[`Payment done successfuly. We have sent order confirmation to ` + <strong>{customerName}</strong>]}
        />
      )}
    </Row>
  );
};

export default CheckoutView;
