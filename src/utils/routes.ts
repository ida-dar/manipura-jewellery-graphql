/* APP ROUTES */

export interface Links {
  [key: string]: string;
}

export const appRoutes = {
  HOME: '/',
  LOGIN: '/login',
  ACCOUNT: '/account',
  ACCOUNT_REGISTER: '/account/register',
  ACCOUNT_VIEW: {
    ACCOUNT_DATA: '/account/data',
    ORDERS: '/account/orders',
  },
  FORGOT_PASSWORD: '/account/forgotten',
  CHECKOUT: '/checkout',
  NOT_FOUND: '*',
  PRODUCTS: {
    JEWELLERY: '/products/jewellery',
    NECKLACES: '/products/necklaces',
    BRACELETS: '/products/bracelets',
    EARRINGS: '/products/earrings',
    RINGS: '/products/rings',
  },
  SINGLE_PRODUCT: '/product/:name',
  FOOTER: {
    CONTACT: '/contact',
    FAQ: '/faq',
    TERMS_CONDITIONS: '/terms-conditions',
    ABOUT: '/about',
  },
};
