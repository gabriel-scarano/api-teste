import { Request, Response, Router } from 'express';
import * as productController from '../controllers';
import { CreateProductDTO, FiltersProductsDTO, UpdateProductDTO } from '../dto/product.dto';

const productsRouter = Router();

productsRouter.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await productController.getById(id);
  return res.status(result.status).send(result);
});
productsRouter.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload: UpdateProductDTO = req.body;

  const result = await productController.update(id, payload);
  return res.status(result.status).send(result);
});
productsRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await productController.deleteById(id);
  return res.status(204).send({
    success: result,
  });
});
productsRouter.post('/', async (req: Request, res: Response) => {
  const payload: CreateProductDTO = req.body;
  const result = await productController.create(payload);
  return res.status(result.status).send(result);
});
productsRouter.get('/', async (req: Request, res: Response) => {
  const filters: FiltersProductsDTO = req.query;
  const results = await productController.getAll(filters);
  return res.status(200).send(results);
});

export default productsRouter;
