import dotenv from 'dotenv';
dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/ecommerce',
  jwtSecret: process.env.JWT_SECRET || 'chave_secreta_padrao',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || ''
};
