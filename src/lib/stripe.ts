import { loadStripe } from '@stripe/stripe-js';
import type { Stripe } from '@stripe/stripe-js';

// Aqui você deve usar sua chave pública do Stripe (este é um valor de exemplo)
const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripePublicKey);
  }
  return stripePromise;
};

export async function createCheckoutSession(planId: string) {
  try {
    // Simula uma chamada à API para criar uma sessão de checkout
    // Normalmente, você chamaria seu backend para criar a sessão de checkout
    // e retornaria os dados

    // Mockup para simulação
    return {
      id: `cs_test_${Math.random().toString(36).substring(2, 15)}`,
      clientSecret: `seti_test_${Math.random().toString(36).substring(2, 15)}`,
      planId,
      amount: planId === 'basic' ? 8900 : planId === 'standard' ? 15900 : 24900,
      currency: 'brl',
    };
  } catch (error) {
    console.error('Erro ao criar sessão de checkout:', error);
    throw new Error('Não foi possível criar a sessão de pagamento');
  }
} 