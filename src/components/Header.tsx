import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-border py-4">
      <div className="container mx-auto flex items-center justify-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8 flex items-center justify-center">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
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
          </div>
          <span className="text-xl font-medium">HOMINE</span>
        </Link>
      </div>
    </header>
  );
} 