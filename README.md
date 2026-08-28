# 📄 DocFlow

> **Gerador e Gestor de Documentos Operacionais para Pequenos Negócios**

DocFlow é um SaaS que utiliza inteligência artificial para gerar documentos profissionais — contratos, propostas, termos de responsabilidade e mais — personalizados para cada tipo de negócio.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🎯 O Problema

Milhões de pequenos negócios no Brasil operam sem documentação formal:

- **Custo de advogado:** R$ 500–2.000 por documento
- **Modelos genéricos:** Desatualizados e juridicamente frágeis
- **Complexidade:** O empreendedor não sabe o que adaptar

O resultado: academias sem contrato de matrícula, clínicas sem termo de responsabilidade, consultores sem proposta comercial.

## 💡 A Solução

DocFlow resolve isso com um fluxo simples:

1. **Escolha e responda** — Selecione o tipo de documento e responda perguntas simples
2. **IA gera o documento** — Documento personalizado com cláusulas específicas para o seu negócio
3. **Edite e envie** — Revise, exporte PDF ou envie para assinatura digital

---

## 🚀 Features

| Feature | Descrição |
|---------|-----------|
| 🤖 **Geração por IA** | Documentos gerados do zero por inteligência artificial |
| ✏️ **Editor Online** | Edite o documento direto na plataforma |
| ✍️ **Assinatura Digital** | Envie para o cliente assinar digitalmente |
| 📊 **Dashboard** | Todos os documentos em um só lugar |
| 📥 **Exportação PDF** | Exporte com formatação profissional |
| 🔒 **Conforme LGPD** | Cláusulas de proteção de dados incluídas |

## 📋 Segmentos Atendidos

- Clínicas de Estética
- Academias / Fitness
- Pet Shops
- Consultorias / TI
- Reformas / Construção
- Barbearias / Salões
- Alimentação
- Educação / Cursos

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI:** React 19 + CSS Modules
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Fonte:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- **IA:** Gemini API *(integração futura)*
- **Deploy:** Vercel

## 📁 Estrutura do Projeto

```
docflow/
├── app/
│   ├── page.js                    # Landing page
│   ├── layout.js                  # Root layout
│   ├── globals.css                # Design system
│   ├── login/page.js              # Página de login
│   ├── cadastro/page.js           # Página de cadastro
│   └── dashboard/
│       ├── layout.js              # Dashboard layout (sidebar)
│       ├── page.js                # Dashboard principal
│       ├── documentos/page.js     # Lista de documentos
│       ├── novo/page.js           # Wizard de criação
│       └── editor/[id]/page.js    # Editor de documento
├── components/
│   ├── landing/                   # Componentes da landing page
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── HowItWorks.js
│   │   ├── Features.js
│   │   ├── Segments.js
│   │   ├── Pricing.js
│   │   └── Footer.js
│   └── ui/                        # Componentes base
│       ├── Button.js
│       ├── Card.js
│       ├── Input.js
│       ├── Badge.js
│       └── Logo.js
├── contexts/
│   └── AuthContext.js             # Contexto de autenticação (simulado)
└── data/
    └── mock.js                    # Dados mockados
```

## 🏃‍♂️ Getting Started

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/docflow.git
cd docflow

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | Servidor de produção |
| `npm run lint` | Lint do código |

---

## 📸 Screenshots

### Landing Page
Hero com tagline, CTAs e segmentos atendidos. Seções de recursos, planos e footer.

### Dashboard
Painel com estatísticas, atalhos para criação de documentos e lista de documentos recentes.

### Editor
Editor rich text com toolbar, exportação PDF e envio para assinatura digital.

---

## 🗺️ Roadmap

- [x] Landing page completa
- [x] Sistema de autenticação (simulado)
- [x] Dashboard funcional
- [x] Wizard multi-step de criação
- [x] Editor de documentos com toolbar
- [ ] Integração com Gemini API para geração real
- [ ] Backend real com banco de dados
- [ ] Assinatura digital real
- [ ] Painel administrativo
- [ ] App mobile (React Native)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com ☕ e IA por <a href="https://github.com/seu-usuario">seu nome</a>
</p>
