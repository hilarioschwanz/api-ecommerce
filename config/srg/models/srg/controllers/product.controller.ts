import { Request, Response, NextFunction } from 'express';
import { ProductMockDB } from '../models/product.model';

export class ProductController {
  
  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.status(200).json({ success: true, data: ProductMockDB });
    } catch (error) {
      next(error);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const product = ProductMockDB.find(p => p.id === id);
      
      if (!product) {
        res.status(404).json({ success: false, message: 'Produto não encontrado.' });
        return;
      }
      
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, description, price, stock, category } = req.body;
      
      const newProduct = {
        id: String(ProductMockDB.length + 1),
        name,
        description,
        price,
        stock,
        category,
        createdAt: new Date()
      };
      
      ProductMockDB.push(newProduct);
      res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      next(error);
    }
  }
}
