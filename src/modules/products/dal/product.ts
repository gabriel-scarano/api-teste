import { Op } from 'sequelize';
import IError from '../interfaces/errorInterface';
import Product, { ProductInput, ProductOutput } from '../models/Product';
import { GetAllProductsFilters } from './types';

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
  const product = await Product.create(payload);
  product.message = 'Success';
  product.status = 200;
  return product;
};

export const update = async (id: string, payload: Partial<ProductInput>): Promise<ProductOutput | IError> => {
  const product = await Product.findByPk(id);

  if (!product) {
    return { message: 'Product not found in database', status: 404 };
  }

  const updatedProduct = await (product as Product).update(payload);
  return updatedProduct;
};

export const getById = async (id: string): Promise<ProductOutput | IError> => {
  const product = await Product.findByPk(id);

  if (!product) {
    return { message: 'Product not found in database', status: 404 };
  }

  return product;
};

export const deleteById = async (id: string): Promise<boolean> => {
  const deletedProductCount = await Product.destroy({
    where: { id },
  });

  return !!deletedProductCount;
};

export const getAll = async (filters?: GetAllProductsFilters): Promise<ProductOutput[]> => {
  return Product.findAll({
    where: {
      ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
    },
    ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
  });
};
