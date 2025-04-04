// Definição dos planos disponíveis
export interface PlanFeature {
  name: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: 'month';
  features: PlanFeature[];
  isPopular?: boolean;
  stripePriceId?: string; // ID do preço no Stripe
}

export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Básico',
    description: 'Ideal para quem quer começar a cuidar do visual',
    price: 89,
    interval: 'month',
    features: [
      { name: '1 corte de cabelo por mês', included: true },
      { name: '1 barba por mês', included: true },
      { name: 'Produtos premium', included: false },
      { name: 'Acesso prioritário', included: false },
      { name: 'Tratamentos faciais', included: false },
      { name: 'Bebida cortesia', included: true },
    ],
    stripePriceId: 'price_basic_monthly',
  },
  {
    id: 'standard',
    name: 'Padrão',
    description: 'Nosso plano mais popular para cuidados completos',
    price: 159,
    interval: 'month',
    features: [
      { name: '2 cortes de cabelo por mês', included: true },
      { name: '2 barbas por mês', included: true },
      { name: 'Produtos premium', included: true },
      { name: 'Acesso prioritário', included: false },
      { name: 'Tratamentos faciais', included: false },
      { name: 'Bebida cortesia', included: true },
    ],
    isPopular: true,
    stripePriceId: 'price_standard_monthly',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Experiência VIP para quem exige o melhor',
    price: 249,
    interval: 'month',
    features: [
      { name: 'Cortes ilimitados', included: true },
      { name: 'Barbas ilimitadas', included: true },
      { name: 'Produtos premium', included: true },
      { name: 'Acesso prioritário', included: true },
      { name: 'Tratamentos faciais', included: true },
      { name: 'Bebida cortesia', included: true },
    ],
    stripePriceId: 'price_premium_monthly',
  },
];

// Função auxiliar para encontrar um plano pelo ID
export function getPlanById(id: string): Plan | undefined {
  return PLANS.find((plan) => plan.id === id);
}

// Função auxiliar para formatar preço
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
} 