import React from 'react';
import { createContext, useState } from 'react';
import _products from '../data/products.json';

interface Props {
  children: React.ReactNode;
}

interface Product {
  name: string;
  descr: string;
  price: number;
  categories: string[];
  img: string;
}

const initialState = {
  products: [] as Product[],
  setProducts: (() => null) as React.Dispatch<React.SetStateAction<Product[]>>,
};

export const ProdContext = createContext(initialState);

const ProductStore = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>(_products);
  const value = { products, setProducts };

  return <ProdContext.Provider value={value}>{children}</ProdContext.Provider>;
};

export default ProductStore;
