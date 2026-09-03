/* ==========================================
   DocFlow — Mock Data
   ========================================== */

export const businessTypes = [
  {
    id: "clinica",
    name: "Clínica de Estética",
    icon: "💆",
    description: "Clínicas de estética, dermatologia, micropigmentação",
  },
  {
    id: "academia",
    name: "Academia / Fitness",
    icon: "🏋️",
    description: "Academias, estúdios de pilates, crossfit, personal trainer",
  },
  {
    id: "petshop",
    name: "Pet Shop / Veterinária",
    icon: "🐾",
    description: "Pet shops, clínicas veterinárias, banho e tosa",
  },
  {
    id: "consultoria",
    name: "Consultoria / TI",
    icon: "💻",
    description: "Consultoria empresarial, desenvolvimento de software, design",
  },
  {
    id: "reformas",
    name: "Reformas / Construção",
    icon: "🔨",
    description: "Empresas de reforma, construção civil, manutenção",
  },
  {
    id: "barbearia",
    name: "Barbearia / Salão",
    icon: "✂️",
    description: "Barbearias, salões de beleza, cabeleireiros",
  },
  {
    id: "alimentacao",
    name: "Alimentação",
    icon: "🍽️",
    description: "Restaurantes, confeitarias, food trucks, catering",
  },
  {
    id: "educacao",
    name: "Educação / Cursos",
    icon: "📚",
    description: "Escolas de idiomas, cursos livres, tutores particulares",
  },
];

export const documentTypes = [
  {
    id: "contrato-servico",
    name: "Contrato de Prestação de Serviço",
    shortName: "Contrato",
    subtitle: "Serviços",
    icon: "📄",
    color: "#3B82F6",
    description: "Contrato completo para prestação de serviço com cláusulas de pagamento, prazo e rescisão",
    businessTypes: ["clinica", "academia", "consultoria", "reformas", "barbearia", "alimentacao", "educacao", "petshop"],
  },
  {
    id: "termo-responsabilidade",
    name: "Termo de Responsabilidade e Consentimento",
    shortName: "Termo",
    subtitle: "Responsab.",
    icon: "📋",
    color: "#34D399",
    description: "Termo de consentimento informado e responsabilidade do cliente",
    businessTypes: ["clinica", "academia", "barbearia", "petshop"],
  },
  {
    id: "proposta-comercial",
    name: "Proposta Comercial",
    shortName: "Proposta",
    subtitle: "Comercial",
    icon: "📊",
    color: "#34D399",
    description: "Proposta comercial profissional com escopo, valores e condições",
    businessTypes: ["consultoria", "reformas", "educacao", "alimentacao"],
  },
  {
    id: "politica-cancelamento",
    name: "Política de Cancelamento e Reembolso",
    shortName: "Política",
    subtitle: "Cancelamento",
    icon: "🔄",
    color: "#FBBF24",
    description: "Regras claras de cancelamento, multa e reembolso",
    businessTypes: ["clinica", "academia", "educacao", "alimentacao", "petshop", "barbearia"],
  },
  {
    id: "recibo-pagamento",
    name: "Recibo de Pagamento",
    shortName: "Recibo",
    subtitle: "Pagamento",
    icon: "🧾",
    color: "#F87171",
    description: "Recibo formal de pagamento para quem não emite nota fiscal",
    businessTypes: ["clinica", "academia", "consultoria", "reformas", "barbearia", "alimentacao", "educacao", "petshop"],
  },
  {
    id: "ficha-cadastro",
    name: "Ficha de Cadastro de Cliente",
    shortName: "Anamnese",
    subtitle: "Clínica",
    icon: "📝",
    color: "#A78BFA",
    description: "Ficha de cadastro e anamnese do cliente conforme LGPD",
    businessTypes: ["clinica", "academia", "petshop", "barbearia"],
  },
];

export const wizardForms = {
  "contrato-servico": {
    steps: [
      {
        title: "Dados da Empresa",
        fields: [
          { id: "empresa_nome", label: "Qual o nome da sua empresa?", type: "text", placeholder: "Ex: Studio Bella Estética", required: true },
          { id: "empresa_cnpj", label: "CNPJ (se tiver)", type: "text", placeholder: "Ex: 12.345.678/0001-90", required: false },
          { id: "empresa_tipo", label: "Tipo de registro", type: "select", options: ["MEI", "ME", "LTDA", "Autônomo (CPF)"], required: true },
          { id: "empresa_endereco", label: "Endereço comercial", type: "text", placeholder: "Rua, número, cidade - UF", required: true },
        ],
      },
      {
        title: "Detalhes do Serviço",
        fields: [
          { id: "servico_descricao", label: "Descreva o serviço que será prestado", type: "textarea", placeholder: "Ex: Serviço de limpeza de pele com extração...", required: true },
          { id: "servico_prazo", label: "O serviço tem prazo definido?", type: "select", options: ["Sim, tem prazo", "Não, prazo indeterminado", "Por demanda"], required: true },
          { id: "servico_prazo_dias", label: "Se sim, quantos dias?", type: "number", placeholder: "30", required: false, condition: { field: "servico_prazo", value: "Sim, tem prazo" } },
        ],
      },
      {
        title: "Pagamento",
        fields: [
          { id: "pagamento_valor", label: "Qual o valor do serviço?", type: "text", placeholder: "Ex: R$ 500,00", required: true },
          { id: "pagamento_forma", label: "Forma de pagamento aceita", type: "select", options: ["PIX", "Cartão de crédito", "Boleto", "Dinheiro", "Múltiplas formas"], required: true },
          { id: "pagamento_parcelamento", label: "Aceita parcelamento?", type: "select", options: ["Não", "Sim, em até 3x", "Sim, em até 6x", "Sim, em até 12x"], required: true },
        ],
      },
      {
        title: "Cancelamento",
        fields: [
          { id: "cancelamento_permite", label: "Permite cancelamento pelo cliente?", type: "select", options: ["Sim, com aviso prévio", "Sim, sem restrição", "Não permite"], required: true },
          { id: "cancelamento_aviso", label: "Com quantos dias de antecedência?", type: "number", placeholder: "7", required: false },
          { id: "cancelamento_multa", label: "Cobra multa por cancelamento?", type: "select", options: ["Não", "Sim, 10% do valor", "Sim, 20% do valor", "Sim, 50% do valor"], required: false },
        ],
      },
    ],
  },
};

export const mockDocuments = [
  {
    id: "doc-001",
    title: "Contrato de Prestação de Serviço",
    type: "contrato-servico",
    client: "Maria Silva",
    status: "signed",
    createdAt: "2026-06-15",
    signedAt: "2026-06-18",
  },
  {
    id: "doc-002",
    title: "Termo de Responsabilidade — Limpeza de Pele",
    type: "termo-responsabilidade",
    client: "Ana Oliveira",
    status: "pending",
    createdAt: "2026-06-20",
    signedAt: null,
  },
  {
    id: "doc-003",
    title: "Proposta Comercial — Desenvolvimento Web",
    type: "proposta-comercial",
    client: "Tech Solutions LTDA",
    status: "draft",
    createdAt: "2026-06-22",
    signedAt: null,
  },
  {
    id: "doc-004",
    title: "Contrato de Matrícula — Plano Anual",
    type: "contrato-servico",
    client: "João Santos",
    status: "signed",
    createdAt: "2026-06-10",
    signedAt: "2026-06-12",
  },
  {
    id: "doc-005",
    title: "Recibo de Pagamento — Consultoria",
    type: "recibo-pagamento",
    client: "Pedro Mendes",
    status: "signed",
    createdAt: "2026-06-25",
    signedAt: "2026-06-25",
  },
  {
    id: "doc-006",
    title: "Política de Cancelamento — Studio Fit",
    type: "politica-cancelamento",
    client: "",
    status: "draft",
    createdAt: "2026-06-26",
    signedAt: null,
  },
  {
    id: "doc-007",
    title: "Termo de Consentimento — Micropigmentação",
    type: "termo-responsabilidade",
    client: "Carla Ferreira",
    status: "pending",
    createdAt: "2026-06-27",
    signedAt: null,
  },
  {
    id: "doc-008",
    title: "Proposta Comercial — Reforma Residencial",
    type: "proposta-comercial",
    client: "Roberto Lima",
    status: "expired",
    createdAt: "2026-05-01",
    signedAt: null,
  },
];

export const statusLabels = {
  draft: { label: "Rascunho", color: "#94A3B8" },
  pending: { label: "Aguardando Assinatura", color: "#FBBF24" },
  signed: { label: "Assinado", color: "#34D399" },
  expired: { label: "Vencido", color: "#F87171" },
};

export const pricingPlans = [
  {
    id: "avulso",
    name: "Avulso",
    price: "19",
    period: "/documento",
    description: "Sem mensalidade — pague apenas quando precisar",
    features: [
      "1 documento por compra",
      "Todos os tipos de documento",
      "Editor online",
      "Exportação em PDF",
    ],
    highlighted: false,
  },
  {
    id: "starter",
    name: "Starter",
    price: "59",
    period: "/mês",
    description: "Para quem gera documentos regularmente",
    features: [
      "5 documentos por mês",
      "Todos os tipos de documento",
      "Editor online",
      "Histórico de documentos",
      "Exportação em PDF",
    ],
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "117",
    period: "/mês",
    description: "Para negócios que precisam de tudo",
    features: [
      "Documentos ilimitados",
      "Todos os tipos de documento",
      "Editor online avançado",
      "Assinatura digital inclusa",
      "Histórico completo",
      "Suporte prioritário",
    ],
    highlighted: true,
  },
  {
    id: "equipe",
    name: "Equipe",
    price: "237",
    period: "/mês",
    description: "Para times e empresas maiores",
    features: [
      "Tudo do Pro",
      "Múltiplos usuários",
      "Templates personalizados",
      "Painel administrativo",
      "API de integração",
    ],
    highlighted: false,
  },
];

export const mockGeneratedContract = `
<h1 style="text-align: center; color: #1E293B; margin-bottom: 8px;">CONTRATO DE PRESTAÇÃO DE SERVIÇO</h1>
<p style="text-align: center; color: #64748B; margin-bottom: 32px;">N° DOC-2026-0047</p>

<p style="margin-bottom: 16px;">Pelo presente instrumento particular, as partes abaixo qualificadas resolvem celebrar o presente <strong>Contrato de Prestação de Serviço</strong>, que será regido pelas seguintes cláusulas e condições:</p>

<h2 style="color: #1E293B; margin: 24px 0 12px;">1. DAS PARTES</h2>

<p style="margin-bottom: 12px;"><strong>CONTRATANTE:</strong> Maria Silva, inscrita no CPF sob o nº XXX.XXX.XXX-XX, residente na Rua das Flores, 123, São Paulo - SP.</p>

<p style="margin-bottom: 12px;"><strong>CONTRATADA:</strong> Studio Bella Estética, inscrita no CNPJ sob o nº 12.345.678/0001-90, com sede na Av. Paulista, 1000, sala 501, São Paulo - SP, neste ato representada por sua titular, Juliana Costa.</p>

<h2 style="color: #1E293B; margin: 24px 0 12px;">2. DO OBJETO</h2>

<p style="margin-bottom: 12px;">O presente contrato tem por objeto a prestação dos seguintes serviços pela CONTRATADA à CONTRATANTE:</p>

<ul style="margin-left: 24px; margin-bottom: 16px;">
  <li style="margin-bottom: 6px;">Limpeza de pele profunda com extração</li>
  <li style="margin-bottom: 6px;">Hidratação facial com ácido hialurônico</li>
  <li style="margin-bottom: 6px;">Peeling químico superficial</li>
</ul>

<h2 style="color: #1E293B; margin: 24px 0 12px;">3. DO PRAZO</h2>

<p style="margin-bottom: 12px;">O presente contrato terá vigência de <strong>90 (noventa) dias</strong>, com início em 26/06/2026 e término em 24/09/2026, podendo ser renovado por acordo mútuo entre as partes.</p>

<h2 style="color: #1E293B; margin: 24px 0 12px;">4. DO VALOR E PAGAMENTO</h2>

<p style="margin-bottom: 12px;">Pela prestação dos serviços descritos na Cláusula 2, a CONTRATANTE pagará à CONTRATADA o valor total de <strong>R$ 1.500,00 (mil e quinhentos reais)</strong>, nas seguintes condições:</p>

<ul style="margin-left: 24px; margin-bottom: 16px;">
  <li style="margin-bottom: 6px;">Entrada de R$ 500,00 no ato da assinatura</li>
  <li style="margin-bottom: 6px;">2 parcelas de R$ 500,00, com vencimento nos dias 15 dos meses subsequentes</li>
</ul>

<p style="margin-bottom: 12px;">O pagamento poderá ser realizado via PIX, cartão de crédito ou boleto bancário.</p>

<h2 style="color: #1E293B; margin: 24px 0 12px;">5. DO CANCELAMENTO</h2>

<p style="margin-bottom: 12px;">A CONTRATANTE poderá cancelar o presente contrato mediante aviso prévio de <strong>7 (sete) dias</strong>, ficando sujeita ao pagamento de multa de <strong>20% (vinte por cento)</strong> sobre o valor total do contrato.</p>

<p style="margin-bottom: 12px;">A CONTRATADA poderá cancelar o contrato em caso de inadimplência da CONTRATANTE por período superior a 30 dias, sem incidência de multa.</p>

<h2 style="color: #1E293B; margin: 24px 0 12px;">6. DAS OBRIGAÇÕES DA CONTRATADA</h2>

<ul style="margin-left: 24px; margin-bottom: 16px;">
  <li style="margin-bottom: 6px;">Prestar os serviços com qualidade e profissionalismo</li>
  <li style="margin-bottom: 6px;">Utilizar produtos de primeira qualidade e dentro do prazo de validade</li>
  <li style="margin-bottom: 6px;">Garantir ambiente higienizado e adequado</li>
  <li style="margin-bottom: 6px;">Informar previamente sobre quaisquer riscos do procedimento</li>
</ul>

<h2 style="color: #1E293B; margin: 24px 0 12px;">7. DAS OBRIGAÇÕES DA CONTRATANTE</h2>

<ul style="margin-left: 24px; margin-bottom: 16px;">
  <li style="margin-bottom: 6px;">Efetuar os pagamentos nas datas acordadas</li>
  <li style="margin-bottom: 6px;">Comparecer aos agendamentos no horário marcado</li>
  <li style="margin-bottom: 6px;">Informar sobre alergias, condições de saúde e medicamentos em uso</li>
  <li style="margin-bottom: 6px;">Seguir as orientações pós-procedimento</li>
</ul>

<h2 style="color: #1E293B; margin: 24px 0 12px;">8. DO FORO</h2>

<p style="margin-bottom: 12px;">As partes elegem o foro da Comarca de São Paulo - SP para dirimir quaisquer dúvidas ou litígios decorrentes do presente contrato.</p>

<p style="margin-bottom: 24px;">E por estarem de acordo, as partes assinam o presente instrumento em 2 (duas) vias de igual teor e forma.</p>

<p style="margin-bottom: 8px;">São Paulo, 26 de Junho de 2026.</p>

<div style="display: flex; justify-content: space-between; margin-top: 48px;">
  <div style="text-align: center; width: 45%;">
    <div style="border-top: 1px solid #334155; padding-top: 8px;">
      <p><strong>CONTRATANTE</strong></p>
      <p style="color: #64748B;">Maria Silva</p>
    </div>
  </div>
  <div style="text-align: center; width: 45%;">
    <div style="border-top: 1px solid #334155; padding-top: 8px;">
      <p><strong>CONTRATADA</strong></p>
      <p style="color: #64748B;">Studio Bella Estética</p>
    </div>
  </div>
</div>
`;
