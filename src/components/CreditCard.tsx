import React from 'react';
import Image from 'next/image';

interface CreditCardProps {
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCVC: string;
  cardBrand: string;
  isFlipped: boolean;
  animate?: boolean;
}

export default function CreditCard({
  cardNumber = '•••• •••• •••• ••••',
  cardName = 'SEU NOME',
  cardExpiry = 'MM/AA',
  cardCVC = '•••',
  cardBrand = 'visa',
  isFlipped = false,
  animate = false,
}: CreditCardProps) {
  // Função para formatar o número do cartão
  const formatCardNumber = (number: string) => {
    if (!number || number === '•••• •••• •••• ••••') return '•••• •••• •••• ••••';
    const formatted = number.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
    return formatted || '•••• •••• •••• ••••';
  };

  // Mapeamento de logos de bandeiras de cartão
  const brandLogo: Record<string, string> = {
    visa: '/visa-logo.svg',
    mastercard: '/mastercard-logo.svg',
    amex: '/amex-logo.svg',
    discover: '/discover-logo.svg',
    unknown: '/card-chip.svg',
  };

  const logo = brandLogo[cardBrand] || brandLogo.unknown;

  return (
    <div className="perspective-1000 w-full max-w-[420px] h-[240px] mx-auto my-5">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d 
          ${isFlipped ? 'rotate-y-180' : ''} 
          ${animate ? 'animate-pulse' : ''}`}
      >
        {/* Frente do cartão */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-xl p-6 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl border border-gray-700 
            ${cardNumber && !isFlipped && animate ? 'animate-float' : ''}`}
        >
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-md flex items-center justify-center">
              <div className={`w-8 h-5 bg-gold rounded-sm ${animate ? 'animate-pulse' : ''}`} />
            </div>
            {cardBrand !== 'unknown' && (
              <div className="h-10 w-16 relative">
                <span className={`text-white font-medium ${animate ? 'animate-bounce' : ''}`}>
                  {cardBrand.toUpperCase()}
                </span>
              </div>
            )}
          </div>

          <div className="mt-8">
            <p className={`text-xl text-white tracking-widest font-medium transition-all duration-300 
              ${cardNumber ? 'text-opacity-100' : 'text-opacity-50'} 
              ${animate && cardNumber ? 'scale-105 text-yellow-300' : ''}`}
            >
              {formatCardNumber(cardNumber)}
            </p>
          </div>

          <div className="mt-6 flex justify-between">
            <div>
              <p className="text-xs text-gray-400 mb-1">NOME DO TITULAR</p>
              <p className={`text-sm text-white tracking-wider uppercase font-medium 
                ${animate && cardName ? 'animate-pulse text-yellow-300' : ''}`}
              >
                {cardName || 'SEU NOME'}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">VALIDADE</p>
              <p className={`text-sm text-white tracking-wider font-medium 
                ${animate && cardExpiry ? 'animate-pulse text-yellow-300' : ''}`}
              >
                {cardExpiry || 'MM/AA'}
              </p>
            </div>
          </div>
        </div>

        {/* Verso do cartão */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl border border-gray-700">
          <div className="w-full h-12 bg-gray-800 mt-5" />
          
          <div className="px-6 mt-5">
            <div className="flex justify-end">
              <div className={`bg-gray-700 h-10 w-[80%] flex items-center justify-end px-4 
                ${animate && isFlipped ? 'bg-yellow-800' : ''}`}
              >
                <span className={`text-white ${animate && isFlipped ? 'text-yellow-300 animate-pulse' : ''}`}>
                  {cardCVC || '•••'}
                </span>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-xs text-gray-400 text-center">
                Este cartão é propriedade do banco emissor. O uso está sujeito aos termos e condições do acordo com o titular do cartão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 