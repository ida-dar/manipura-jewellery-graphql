import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { Product } from 'src/interfaces/Product.interface';
import { getCollectionAndDocs } from 'src/utils/firebase/firebase';
// import { addCollectionAndDocs } from 'src/utils/firebase/firebase'; // Unnecessary, was needed only for uploading data from js file to Firestore, left for a future reference

interface Props {
  children: React.ReactNode;
}

const initialState = {
  products: [] as Product[],
  setProducts: (() => null) as React.Dispatch<React.SetStateAction<Product[]>>,
};

export const ProdContext = createContext(initialState);

const ProductStore = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const value = { products, setProducts };

  // Unnecessary code, was needed only for uploading data from js file to Firestore, left for a future reference
  // useEffect(() => {
  //   addCollectionAndDocs('products', _products);
  // }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await getCollectionAndDocs();
      setProducts(data);
    };

    getData();
  }, []);

  return <ProdContext.Provider value={value}>{children}</ProdContext.Provider>;
};

export default ProductStore;
