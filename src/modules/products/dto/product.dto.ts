import { Optional } from 'sequelize';

export type CreateProductDTO = {
  name: string;
  ncm: string;
  cest?: string;
  origem: string;
  estoque: string;
  idGrupo?: string;
};

export type UpdateProductDTO = Optional<CreateProductDTO, 'name'>;

export type FiltersProductsDTO = {
  isDeleted?: boolean;
  includeDeleted?: boolean;
};
