import sequelizeConnection from '@config/db/config';
import { Optional, Model, DataTypes } from 'sequelize';

interface ProductAttributes {
  id: string;
  name: string;
  ncm: string;
  cest?: string;
  origem: string;
  estoque: string;
  idGrupo?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  message?: string;
  status?: number;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductInput extends Optional<ProductAttributes, 'id'> {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductOutput extends Required<ProductAttributes> {}

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
  public id!: string;
  public name!: string;
  public ncm!: string;
  public cest!: string;
  public origem!: string;
  public estoque!: string;
  public idGrupo!: string;
  public message!: string;
  public status!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    ncm: {
      type: DataTypes.STRING,
    },
    cest: {
      type: DataTypes.STRING,
    },
    origem: {
      type: DataTypes.STRING,
    },
    estoque: {
      type: DataTypes.STRING,
    },
    idGrupo: {
      type: DataTypes.UUID,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  },
);

export default Product;
