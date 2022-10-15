import { useState } from 'react';
import { forgotPassword } from 'src/utils/firebase/firebase';

import { Row } from 'src/assets/Flexbox';
import Header from 'src/components/common/Header/Header';
import ButtonComponent from 'src/components/common/Button/Button';
import InputComponent from 'src/components/common/Input/Input';
import MessageComponent, { TYPES } from 'src/components/common/Message/Message';
import { Emailinfo, Form } from './ForgotPasswordCSS';

const ForgotPassword = () => {
  const defaultForm = {
    email: '' as string,
  };

  const [formFields, setFormFields] = useState(defaultForm);
  const [emailSent, setEmailSent] = useState(false);
  const { email } = formFields;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetValues = () => {
    setFormFields(defaultForm);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    try {
      const resp = await forgotPassword(email);
      console.log('resp', resp, email);
      setEmailSent(true);
      resetValues();
    } catch (e) {
      console.log('Error:', e);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row justify="center" direction="column" align="center">
        <Header text="Reset your password" />
        <Emailinfo>
          Enter your e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.
        </Emailinfo>
        <InputComponent
          name="email"
          type="email"
          placeholder="E-Mail Address"
          value={email}
          onChange={handleChange}
          required
        />
        {emailSent && (
          <MessageComponent
            messageType={TYPES.success}
            message="E-mail sent successfuly. Please check your mail and spam folder."
          />
        )}
        <ButtonComponent type="submit" text="Continue" />
      </Row>
    </Form>
  );
};

export default ForgotPassword;
