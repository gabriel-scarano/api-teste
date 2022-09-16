import IProduct from '../interfaces/product.interface';
import { ProductOutput } from '../models/Product';

export const toProduct = (product: ProductOutput): IProduct => {
  return {
    id: product.id,
    name: product.name,
    ncm: product.ncm,
    cest: product.cest,
    origem: product.origem,
    estoque: product.estoque,
    idGrupo: product.idGrupo,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
    deletedAt: product.deletedAt,
    message: product.message,
    status: product.status,
  };
};
