interface PlanDetails {
  id: string;
  name: string;
  price: number;
  interval: string;
  features: string[];
}

interface CheckoutSummaryProps {
  planDetails: PlanDetails;
}

export default function CheckoutSummary({ planDetails }: CheckoutSummaryProps) {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-medium">Resumo do pedido</h3>
        
        <div className="mt-4 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Plano</span>
            <span className="font-medium">{planDetails.name}</span>
          </div>
          
          <div className="border-t border-border my-4"></div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Subtotal</span>
            <span className="font-medium">R${planDetails.price.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Taxas</span>
            <span className="font-medium">R$0.00</span>
          </div>
          
          <div className="border-t border-border my-4"></div>
          
          <div className="flex justify-between text-lg">
            <span className="font-medium">Total</span>
            <span className="font-bold">R${planDetails.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary p-6">
        <h4 className="font-medium text-sm text-white/80">Inclui:</h4>
        <ul className="mt-3 space-y-2">
          {planDetails.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white mr-2 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="mt-6 bg-white/10 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Garantia de satisfação</p>
              <p className="text-xs text-gray-400 mt-0.5">Cancele a qualquer momento nos primeiros 14 dias</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 