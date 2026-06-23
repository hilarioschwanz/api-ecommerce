import express from 'express';
import cors from 'cors';
import router from './routes';
import { env } from './config/env';

const app = express();

app.use(cors());
app.use(express.json());

// Encaminhamento para a versão 1 da API
app.use('/api/v1', router);

// Middleware centralizado de tratamento de erros
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Erro interno do servidor.'
  });
});

export default app;
