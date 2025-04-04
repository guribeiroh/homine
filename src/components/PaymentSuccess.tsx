import React, { useEffect, useState, useMemo } from 'react';

interface PaymentSuccessProps {
  onAnimationComplete: () => void;
}

export default function PaymentSuccess({ onAnimationComplete }: PaymentSuccessProps) {
  const [currentStep, setCurrentStep] = useState(0);
  
  const messages = useMemo(() => [
    { 
      text: "Preparando as lâminas...", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M6 9L15 18M8 6L18 16M14 4L20 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      delay: 1000 
    },
    { 
      text: "Afiando a navalha...", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M4 4L20 20M10 4H14C18 4 20 6 20 10V14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 14V10C4 8.4 4.5 7.1 5.4 6.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ), 
      delay: 1000 
    },
    { 
      text: "Aquecendo a toalha...", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M3 6L21 6M3 12H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 3V6M16 3V6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 21C5.34315 21 4 19.6569 4 18V12H20V18C20 19.6569 18.6569 21 17 21H7Z" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      delay: 1000 
    },
    { 
      text: "Sua cadeira está reservada!", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M6 19V12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12V19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 19H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 19V21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 19V21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 6V4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ), 
      delay: 1200 
    }
  ], []);
  
  useEffect(() => {
    if (currentStep < messages.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, messages[currentStep].delay);
      
      return () => clearTimeout(timer);
    } else {
      // Quando todas as mensagens forem exibidas, chama a função de conclusão
      // Aumentado para 4 segundos para dar tempo de ler a mensagem final
      const finalTimer = setTimeout(() => {
        onAnimationComplete();
      }, 4000);
      
      return () => clearTimeout(finalTimer);
    }
  }, [currentStep, onAnimationComplete, messages]);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <div className="flex flex-col items-center justify-center mb-2">
              <svg 
                width="80" 
                height="80" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2"
              >
                {/* Fundo branco */}
                <rect width="32" height="32" rx="8" fill="white" />
                
                {/* Letra H */}
                <path 
                  d="M11 9V23M21 9V23M11 16H21" 
                  stroke="black" 
                  strokeWidth="2.5"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-xl font-medium">HOMINE</h3>
            </div>
          </div>
          
          <div className="mb-6">
            <svg 
              className="w-20 h-20 mx-auto animate-bounce" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
              <path 
                d="M8 12L11 15L16 9" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="animate-pulse"
              />
            </svg>
          </div>
          
          <div className="mb-8">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-center space-x-2 transition-all duration-500 ease-in-out ${
                    index <= currentStep ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="text-2xl">{message.icon}</span>
                  <span className="text-lg text-gray-300">{message.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {currentStep >= messages.length && (
            <div className="animate-fade-in mt-6">
              <p className="text-xl font-medium text-white mb-3">
                Bem-vindo à HOMINE! Seu visual nunca mais será o mesmo!
              </p>
              <p className="text-gray-400">
                Estamos te redirecionando para a confirmação...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 