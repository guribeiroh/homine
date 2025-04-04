import Link from 'next/link';

interface PlanDetails {
  id: string;
  name: string;
  price: number;
  interval: string;
}

interface ConfirmationSuccessProps {
  planDetails: PlanDetails;
  orderNumber: string;
}

export default function ConfirmationSuccess({
  planDetails,
  orderNumber,
}: ConfirmationSuccessProps) {
  return (
    <div className="max-w-md mx-auto w-full">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-2">
          Assinatura Confirmada
        </h1>

        <p className="text-gray-400 mb-8">
          Obrigado pela sua assinatura! Você receberá um email com os detalhes da sua assinatura.
        </p>

        <div className="bg-card rounded-xl border border-border p-6 w-full mb-8">
          <h3 className="text-sm font-medium text-gray-400 mb-4">DETALHES DA ASSINATURA</h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Número do pedido</span>
              <span className="font-medium">{orderNumber}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Plano</span>
              <span className="font-medium">{planDetails.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Valor</span>
              <span className="font-medium">
                R${planDetails.price.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Método de pagamento</span>
              <span className="font-medium">•••• 4242</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Link
            href="/"
            className="bg-white text-black py-3 px-6 rounded-lg font-medium text-center transition-all hover:bg-gray-100"
          >
            Voltar para a página inicial
          </Link>
          
          <div className="flex items-center justify-center mt-4">
            <div className="h-5 w-5 bg-secondary rounded-full flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <span className="text-sm text-gray-400">
              Um recibo foi enviado para seu email
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 