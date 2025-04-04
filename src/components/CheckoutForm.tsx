import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import CreditCard from './CreditCard';
import PaymentSuccess from './PaymentSuccess';

type PlanDetails = {
  id: string;
  name: string;
  price: number;
  interval: string;
};

interface CheckoutFormProps {
  planDetails: PlanDetails;
}

export default function CheckoutForm({ planDetails }: CheckoutFormProps) {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipcode: '',
  });
  
  // Estado para controlar a exibição da animação de sucesso
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  // Estados para o cartão animado
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    brand: 'unknown',
  });
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  // Estados para controlar as animações adicionais
  const [isCardNumberFilled, setIsCardNumberFilled] = useState(false);
  const [isExpiryFilled, setIsExpiryFilled] = useState(false);
  const [isCvcFilled, setIsCvcFilled] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);

  useEffect(() => {
    // Aqui você faria uma chamada para seu backend para criar uma intent de pagamento
    // e receber o clientSecret
    // Por enquanto, apenas simulamos isso
    const fetchClientSecret = async () => {
      // Simulação - em produção, você chamaria sua API
      setTimeout(() => {
        setClientSecret('fake_client_secret_' + planDetails.id);
      }, 500);
    };

    fetchClientSecret();
  }, [planDetails.id]);

  // Efeito para animar o cartão quando os campos são preenchidos
  useEffect(() => {
    if (isCardNumberFilled || isExpiryFilled || isCvcFilled) {
      setAnimateCard(true);
      
      // Reset da animação após 1 segundo
      const timer = setTimeout(() => {
        setAnimateCard(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isCardNumberFilled, isExpiryFilled, isCvcFilled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'zipcode') {
      // Remove qualquer caractere não numérico
      const numericValue = value.replace(/\D/g, '');
      
      // Formata o CEP (adiciona hífen após os primeiros 5 dígitos)
      if (numericValue.length <= 5) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
      } else {
        const formattedZipcode = `${numericValue.slice(0, 5)}-${numericValue.slice(5, 8)}`;
        setFormData((prev) => ({ ...prev, [name]: formattedZipcode }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Função para lidar com os dados do cartão vindos do CardElement
  const handleCardChange = (event: {
    empty: boolean;
    complete: boolean;
    error: { message: string } | undefined;
    brand: string;
    value: unknown;
  }) => {
    const { empty, complete, error, brand } = event;
    
    if (error) {
      setError(error.message);
    } else {
      setError(null);
    }

    // Atualiza a bandeira do cartão
    if (brand) {
      setCardData(prev => ({ ...prev, brand: brand }));
    }

    // Simula o preenchimento do número do cartão
    // Como não temos acesso direto ao número através da API do Stripe,
    // usamos a informação de complete para atualizar a UI
    if (!empty && complete) {
      // Define o número de cartão simulado com base na bandeira
      let simulatedNumber = '';
      switch(brand) {
        case 'visa':
          simulatedNumber = '4242 4242 4242 4242';
          setIsCardNumberFilled(true);
          break;
        case 'mastercard':
          simulatedNumber = '5555 5555 5555 4444';
          setIsCardNumberFilled(true);
          break;
        case 'amex':
          simulatedNumber = '3782 822463 10005';
          setIsCardNumberFilled(true);
          break;
        case 'discover':
          simulatedNumber = '6011 1111 1111 1117';
          setIsCardNumberFilled(true);
          break;
        default:
          simulatedNumber = '•••• •••• •••• ••••';
          break;
      }
      
      // Atualiza o estado do cartão com os dados simulados
      setCardData(prev => ({
        ...prev,
        number: simulatedNumber,
        expiry: '12/25', // Simulação de data
        cvc: '•••'
      }));
      
      // Atualiza o estado de preenchimento para animação
      setIsExpiryFilled(true);
    } else {
      setCardData(prev => ({
        ...prev,
        number: '',
        expiry: '',
      }));
      setIsCardNumberFilled(false);
      setIsExpiryFilled(false);
    }
  };

  // Função para detectar o foco nos campos do cartão
  const handleCardFocus = (e: React.FocusEvent<HTMLElement>) => {
    const elementType = e.target.getAttribute('data-element-type') || '';
    
    // Vira o cartão quando o foco estiver no campo de CVC
    if (elementType.includes('cvc')) {
      setIsCardFlipped(true);
      // Se o CVC estiver sendo preenchido, ativa a animação
      if (!isCvcFilled) {
        setIsCvcFilled(true);
      }
    } else {
      setIsCardFlipped(false);
      // Detecta qual campo está sendo preenchido
      if (elementType.includes('cardNumber')) {
        setIsCardNumberFilled(true);
      } else if (elementType.includes('expiry')) {
        setIsExpiryFilled(true);
      }
    }
  };

  // Função que será chamada após a animação de sucesso ser concluída
  const handleSuccessAnimationComplete = () => {
    router.push(`/confirmation?plan=${planDetails.id}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    setIsLoading(true);
    setError(null);

    try {
      // Em uma implementação real, você enviaria o formData e o paymentMethod para seu backend
      // que processaria o pagamento com o Stripe

      // Simulação de processamento
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mostra a animação de sucesso antes de redirecionar
      setIsLoading(false);
      toast.success('Pagamento processado com sucesso!');
      setShowSuccessAnimation(true);
      
      // O redirecionamento será feito após a conclusão da animação
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      setError('Ocorreu um erro ao processar seu pagamento. Por favor, tente novamente.');
      toast.error('Erro ao processar pagamento');
      setIsLoading(false);
    }
  };

  return (
    <>
      {showSuccessAnimation && (
        <PaymentSuccess onAnimationComplete={handleSuccessAnimationComplete} />
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6 animate-in">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Nome completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={(e) => {
                handleChange(e);
                setCardData(prev => ({ ...prev, name: e.target.value }));
              }}
              className="input-field"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Telefone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-300">
              CEP
            </label>
            <input
              id="zipcode"
              name="zipcode"
              type="text"
              required
              autoComplete="postal-code"
              value={formData.zipcode}
              onChange={handleChange}
              className="input-field"
              placeholder="00000-000"
              maxLength={9}
              pattern="[0-9]{5}-[0-9]{3}|[0-9]{8}"
              inputMode="numeric"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="card" className="block text-sm font-medium text-gray-300">
              Cartão de crédito
            </label>
            
            {/* Cartão de crédito animado */}
            <CreditCard 
              cardNumber={cardData.number}
              cardName={cardData.name || formData.name}
              cardExpiry={cardData.expiry}
              cardCVC={cardData.cvc}
              cardBrand={cardData.brand}
              isFlipped={isCardFlipped}
              animate={animateCard}
            />
            
            <div className="border border-input rounded-lg p-4 bg-transparent transition-all duration-150">
              <CardElement
                onFocus={handleCardFocus}
                onChange={handleCardChange}
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#FFFFFF',
                      '::placeholder': {
                        color: '#9CA3AF',
                      },
                      iconColor: '#FFFFFF',
                    },
                    invalid: {
                      color: '#EF4444',
                    },
                  },
                  hidePostalCode: true,
                }}
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
            {error}
          </div>
        )}

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <div
              className="h-4 w-4 bg-white rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-black"
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
            <span className="ml-2 text-xs text-gray-400">
              Pagamento seguro via Stripe
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary w-full"
          disabled={!stripe || isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processando...
            </div>
          ) : (
            `Pagar R$${planDetails.price.toFixed(2)}`
          )}
        </button>
      </form>
    </>
  );
} 