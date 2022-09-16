import Product from '@modules/products/models/Product';

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  Product.sync(/*{ alter: isDev, force: true }*/);
};

export default dbInit;
