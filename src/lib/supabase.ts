import { createClient } from '@supabase/supabase-js';

// Essas variáveis devem ser definidas no arquivo .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Cria um cliente do Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Estrutura da tabela "subscriptions"
export interface Subscription {
  id: string;
  user_id: string;
  plan_id: string;
  status: 'active' | 'canceled' | 'past_due';
  created_at: string;
  current_period_end: string;
  stripe_customer_id: string;
  stripe_subscription_id: string;
}

// Estrutura da tabela "users"
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  created_at: string;
} 