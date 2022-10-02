/* APP ROUTES */

export interface Links {
  [key: string]: string;
}

export const appRoutes = {
  HOME: '/',
  ACCOUNT: '/account',
  ACCOUNT_REGISTER: '/account/register',
  ACCOUNT_VIEW: {
    ACCOUNT_DATA: 'account/data',
    ORDERS: 'account/orders',
  },
  CART: '/cart',
  NOT_FOUND: '*',
  PRODUCTS: {
    JEWELLERY: '/jewellery',
    NECKLACES: '/necklaces',
    BRACELETS: '/bracelets',
    EARRINGS: '/earrings',
    RINGS: '/rings',
  },
  FOOTER: {
    CONTACT: '/contact',
    FAQ: '/faq',
    TERMS_CONDITIONS: 'terms-conditions',
    ABOUT: '/about',
  },
};
