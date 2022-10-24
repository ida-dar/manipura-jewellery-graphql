import { FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { appRoutes, Links } from 'src/utils/routes';
import { Col, Row } from 'src/assets/Flexbox';
import {
  Contact,
  Developer,
  FooterContainer,
  Form,
  NavLinkConatiner,
  NavLinks,
  Newsletter,
  Payments,
  RightsReserved,
  Svg,
} from './FooterCSS';
import ButtonComponent from 'src/components/common/Button/Button';
import InputComponent from 'src/components/common/Input/Input';
import Logo from 'src/components/common/Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faGooglePay, faApplePay, faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currYear = new Date().getFullYear();

  const links: Links[] = [
    {
      path: appRoutes.FOOTER.CONTACT,
      name: 'Contact',
    },
    {
      path: appRoutes.FOOTER.FAQ,
      name: "FAQ's",
    },
    {
      path: appRoutes.FOOTER.TERMS_CONDITIONS,
      name: 'Terms & Conditions',
    },
    {
      path: appRoutes.FOOTER.ABOUT,
      name: 'About us',
    },
  ];

  const paymentForms = [
    { name: 'Apple Pay', icon: faApplePay },
    { name: 'PayPal', icon: faPaypal },
    { name: 'Google Pay', icon: faGooglePay },
    { name: 'Mastercard', icon: faCcMastercard },
    { name: 'Visa', icon: faCcVisa },
  ];

  const defaultForm = {
    email: '' as string,
  };

  const [newsletter, setNewsletter] = useState(defaultForm);
  const { email } = newsletter;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewsletter({ ...defaultForm, [name]: value });
  };

  const newsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    try {
    } catch (e: any) {
      console.log('Login error', e);
    }
  };

  return (
    <FooterContainer>
      <Col align="center">
        <NavLink to={`${process.env.PUBLIC_URL}/`}>
          <Logo addDecoration />
        </NavLink>
      </Col>
      <Contact>
        <a href="tel:+48123456789">+(48) 123 456 789</a>
        <a href="mailto:test.account@mail.com">test.account@mail.com</a>
      </Contact>
      <Newsletter>
        {newsletter.email
          ? `You subscribed to our newsletter. Please check your email.`
          : `Subscribe now to our newsletter. Don't miss out on news, events and discounts!`}
      </Newsletter>
      <Form onSubmit={(e) => newsletterSubmit(e)}>
        <Row wrap="wrap" justify="center" alignContent="center" align="center" sm={10}>
          <InputComponent
            id="newsletter"
            name="newsletter"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <ButtonComponent type="submit" text="Submit" reverseColors />
        </Row>
      </Form>
      <NavLinkConatiner>
        <Row wrap="wrap" justify="center" alignContent="center">
          {links.map((link) => (
            <NavLinks key={link.path} to={`${process.env.PUBLIC_URL}${link.path}`}>
              <span>{link.name}</span>
              <Svg
                className="link__graphic link__graphic--stroke link__graphic--arc"
                width="100%"
                height="18"
                viewBox="0 0 59 18"
              >
                <path d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842" pathLength="1"></path>
              </Svg>
            </NavLinks>
          ))}
        </Row>
      </NavLinkConatiner>
      <Payments>
        {paymentForms.map((p, i) => (
          <FontAwesomeIcon icon={p.icon} key={i} title={p.name} />
        ))}
      </Payments>
      <RightsReserved>
        @{currYear} Manipura. All rights reserved | developed by <Developer>ID</Developer>
      </RightsReserved>
    </FooterContainer>
  );
};

export default Footer;
