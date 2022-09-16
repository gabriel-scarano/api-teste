interface IProduct {
  id: string;
  name: string;
  ncm: string;
  cest: string;
  origem: string;
  estoque: string;
  idGrupo: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  message: string;
  status: number;
}

export default IProduct;
