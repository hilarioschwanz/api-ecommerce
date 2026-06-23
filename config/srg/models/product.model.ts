export interface IProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  imageUrl?: string;
  createdAt?: Date;
}

// Simulação de uma coleção/tabela de base de dados para testes iniciais
export const ProductMockDB: IProduct[] = [
  { id: '1', name: 'Smartphone Pro', description: '128GB, Preto', price: 999.99, stock: 15, category: 'Eletrónicos' },
  { id: '2', name: 'Auscultadores Wireless', description: 'Cancelamento de ruído', price: 199.99, stock: 40, category: 'Áudio' }
];
