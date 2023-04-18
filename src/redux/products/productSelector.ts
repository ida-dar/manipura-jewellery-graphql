import { createSelector } from '@reduxjs/toolkit';
import { Product } from 'src/interfaces';
import { ProdState } from 'src/utils/reduxUtils/reduxTypes';

/* selector */
const selectProductsReducer = (state: { products: ProdState }): ProdState => state.products;

export const selectProductsSlice = createSelector(
  [selectProductsReducer],
  (productSlices: { products: any }) => productSlices.products
);

export const productsLoading = createSelector([selectProductsReducer], (productsSlice) => productsSlice.pending);

export const selectProducts = createSelector([selectProductsSlice], (products: Product[]) =>
  products.reduce((acc: any, products: any) => {
    const prod = {
      id: products.id,
      ...products.data,
    };
    acc.push(prod);
    return acc;
  }, [])
);
