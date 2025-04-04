import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPlanById } from '@/lib/plans';
import CheckoutClient from './CheckoutClient';

export const metadata: Metadata = {
  title: 'HOMINE | Checkout',
  description: 'Finalize sua assinatura premium na HOMINE e comece a transformar seu visual hoje mesmo.',
};

type PageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
};

export default function CheckoutPage({ searchParams }: PageProps) {
  const planId = searchParams.plan as string;
  
  // Se não houver um plano selecionado, redirecionar para a página de planos
  if (!planId) {
    redirect('/plans');
  }
  
  const plan = getPlanById(planId);
  
  // Se o plano não existir, redirecionar para a página de planos
  if (!plan) {
    redirect('/plans');
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Finalizar assinatura</h1>
          
          <CheckoutClient plan={plan} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 