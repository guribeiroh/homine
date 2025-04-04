import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlanCard from '@/components/PlanCard';
import { PLANS } from '@/lib/plans';

export const metadata: Metadata = {
  title: 'HOMINE | Escolha seu plano',
  description: 'Escolha o plano que melhor se adapta às suas necessidades e comece a transformar seu visual hoje mesmo.',
};

export default function PlansPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Escolha seu plano de assinatura
              </h1>
              
              <p className="text-lg text-gray-400 mb-8">
                Assinatura flexível para você agendar seus cortes e barbas sempre que quiser, sem complicações.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PLANS.map((plan) => (
                <PlanCard 
                  key={plan.id}
                  id={plan.id}
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  period="month"
                />
              ))}
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto text-center">
              <p className="text-sm text-gray-400 mb-8">
                Todos os planos incluem acesso a agendamento prioritário pelo aplicativo, produtos premium e atendimento exclusivo.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Cancele a qualquer momento</p>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Pagamento seguro</p>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Garantia de satisfação</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6 text-center">O que nossos clientes dizem</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-gray-800 mb-4"></div>
                    <p className="text-sm text-gray-300 mb-3">
                      &quot;Melhor investimento que fiz no meu visual. Atendimento impecável e resultado incrível.&quot;
                    </p>
                    <p className="text-sm font-medium">Rafael S.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-gray-800 mb-4"></div>
                    <p className="text-sm text-gray-300 mb-3">
                      &quot;A conveniência da assinatura e a qualidade do serviço fazem valer cada centavo.&quot;
                    </p>
                    <p className="text-sm font-medium">Marcelo T.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-gray-800 mb-4"></div>
                    <p className="text-sm text-gray-300 mb-3">
                      &quot;Economizo tempo e dinheiro com o plano premium. Recomendo a todos.&quot;
                    </p>
                    <p className="text-sm font-medium">André L.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 