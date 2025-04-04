import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConfirmationSuccess from '@/components/ConfirmationSuccess';
import { getPlanById } from '@/lib/plans';

export const metadata: Metadata = {
  title: 'HOMINE | Assinatura Confirmada',
  description: 'Sua assinatura foi confirmada com sucesso. Bem-vindo à HOMINE!',
};

type PageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
};

export default function ConfirmationPage({ searchParams }: PageProps) {
  const planId = searchParams.plan as string;
  
  // Se não houver um plano, redirecionar para a página de planos
  if (!planId) {
    redirect('/plans');
  }
  
  const plan = getPlanById(planId);
  
  // Se o plano não existir, redirecionar para a página de planos
  if (!plan) {
    redirect('/plans');
  }
  
  // Gerar um número de pedido fictício
  const orderNumber = `ORD-${Math.floor(Math.random() * 9000) + 1000}-${new Date().getFullYear()}`;
  
  // Formatar o plano para o componente de confirmação
  const planDetails = {
    id: plan.id,
    name: plan.name,
    price: plan.price,
    interval: plan.interval,
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <ConfirmationSuccess 
            planDetails={planDetails} 
            orderNumber={orderNumber} 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 