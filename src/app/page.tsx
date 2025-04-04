import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  // Redirecionar para a página de planos
  redirect('/plans');
  
  // Este código nunca será executado devido ao redirecionamento acima
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow container mx-auto py-12">
        <h1>Página Inicial</h1>
      </div>
      <Footer />
    </main>
  );
}
