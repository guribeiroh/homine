import Link from 'next/link';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PlanCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
}

export default function PlanCard({
  id,
  name,
  price,
  description,
  features,
  isPopular = false,
}: PlanCardProps) {
  return (
    <div
      className={`card group relative flex flex-col ${
        isPopular ? 'border-white' : 'border-border'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 right-4 bg-white text-black text-xs font-medium px-3 py-1 rounded-full">
          Mais popular
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>

        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">R${price}</span>
        </div>

        <ul className="mt-6 space-y-3 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span
                className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5 ${
                  feature.included ? 'bg-white' : 'bg-gray-800'
                }`}
              >
                {feature.included ? (
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
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
              <span className={`ml-3 text-sm ${feature.included ? 'text-white' : 'text-gray-500'}`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={`/checkout?plan=${id}`}
          className={`mt-8 w-full flex items-center justify-center py-3 px-5 rounded-lg transition-all duration-200 ${
            isPopular
              ? 'bg-white text-black hover:bg-gray-200'
              : 'bg-secondary text-white hover:bg-secondary/80'
          }`}
        >
          Escolher plano
        </Link>
      </div>
    </div>
  );
} 