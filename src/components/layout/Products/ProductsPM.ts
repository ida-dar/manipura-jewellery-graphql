import { Component } from 'react';
import products from '../../../data/products.json';

class ProductsPM extends Component {
  _products = [];

  constructor(props: any) {
    super(props);
    this._products = JSON.parse(JSON.stringify(products));
  }

  get products() {
    return this._products;
  }
}

export default ProductsPM;
