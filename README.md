# Barber Club - Checkout Premium

Um checkout sofisticado e elegante para assinatura de barbearia com UI/UX moderna, focado em conversão e experiência premium.

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/) - Framework React com App Router
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Stripe](https://stripe.com/) - Processamento de pagamentos
- [Supabase](https://supabase.com/) - Backend-as-a-Service (BaaS)
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [React Hot Toast](https://react-hot-toast.com/) - Notificações elegantes

## 🏗️ Estrutura do Projeto

```
/
├── public/               # Arquivos estáticos
├── src/                  # Código fonte
│   ├── app/              # Rotas da aplicação (App Router)
│   │   ├── plans/        # Página de seleção de planos
│   │   ├── checkout/     # Página de checkout
│   │   └── confirmation/ # Página de confirmação
│   ├── components/       # Componentes reutilizáveis
│   ├── lib/              # Bibliotecas e serviços
│   └── utils/            # Utilitários
├── .env.local            # Variáveis de ambiente (local)
├── next.config.js        # Configuração do Next.js
└── tailwind.config.js    # Configuração do Tailwind CSS
```

## 📋 Recursos

- Design monocromático black & white premium
- Micro-interações elegantes e modernas
- Validação de formulário em tempo real
- Integração transparente com o Stripe
- Estado de loading elegante
- Interface responsiva para desktop e mobile
- Modo escuro por padrão

## 🚀 Começando

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/barber-club-checkout.git
cd barber-club-checkout
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env.local` baseado no `.env.example`
   - Adicione suas chaves de API do Stripe e Supabase

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🔧 Configuração

### Stripe

1. Crie uma conta no [Stripe](https://dashboard.stripe.com/register)
2. Obtenha sua chave pública de teste e adicione ao arquivo `.env.local`
3. Configure produtos e preços no painel do Stripe

### Supabase

1. Crie uma conta no [Supabase](https://supabase.com/)
2. Crie um novo projeto
3. Obtenha a URL e a chave anônima do projeto e adicione ao arquivo `.env.local`
4. Configure a tabela de usuários e assinaturas conforme o modelo do projeto

## 📱 Páginas

- **Página de Planos**: Apresentação dos planos de assinatura disponíveis
- **Página de Checkout**: Formulário de pagamento e resumo do pedido
- **Página de Confirmação**: Confirmação de assinatura bem-sucedida

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

## 📄 Licença

Este projeto está licenciado sob a licença MIT.
