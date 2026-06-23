import { Router } from 'express';
import { productRoutes } from './product.routes';

const router = Router();

// Endpoint de Diagnóstico (Healthcheck)
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', uptime: process.uptime() });
});

// Divisão de Domínios
router.use('/products', productRoutes);

export default router;
