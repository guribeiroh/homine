'use client';

import { Elements } from '@stripe/react-stripe-js';
import { getStripe } from '@/lib/stripe';
import { Plan } from '@/lib/plans';
import CheckoutForm from '@/components/CheckoutForm';
import CheckoutSummary from '@/components/CheckoutSummary';

interface CheckoutClientProps {
  plan: Plan;
}

export default function CheckoutClient({ plan }: CheckoutClientProps) {
  // Convertendo o plano para o formato esperado pelo componente de resumo
  const planSummary = {
    id: plan.id,
    name: plan.name,
    price: plan.price,
    interval: plan.interval,
    features: plan.features.filter(f => f.included).map(f => f.name),
  };
  
  // Convertendo o plano para o formato esperado pelo componente de formulário
  const planDetails = {
    id: plan.id,
    name: plan.name,
    price: plan.price,
    interval: plan.interval,
  };
  
  // Faria uma chamada para obter um client secret do backend
  // aqui simulamos isso apenas para fins de demonstração
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <Elements stripe={getStripe()}>
          <CheckoutForm planDetails={planDetails} />
        </Elements>
      </div>
      
      <div>
        <CheckoutSummary planDetails={planSummary} />
      </div>
    </div>
  );
} 