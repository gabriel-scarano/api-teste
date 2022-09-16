import * as service from '../services/productService';
import { CreateProductDTO, FiltersProductsDTO, UpdateProductDTO } from '../dto/product.dto';
import * as mapper from './mapper';
import IProduct from '../interfaces/product.interface';

export const create = async (payload: CreateProductDTO): Promise<IProduct> => {
  return mapper.toProduct(await service.create(payload));
};

export const update = async (id: string, payload: UpdateProductDTO): Promise<IProduct> => {
  return mapper.toProduct(await service.update(id, payload));
};
export const getById = async (id: string): Promise<IProduct> => {
  return mapper.toProduct(await service.getById(id));
};
export const deleteById = async (id: string): Promise<boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};
export const getAll = async (filters: FiltersProductsDTO): Promise<IProduct[]> => {
  return (await service.getAll(filters)).map(mapper.toProduct);
};
