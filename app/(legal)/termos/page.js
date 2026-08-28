import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Termos de Uso — DocFlow',
  description: 'Termos de Uso da plataforma DocFlow. Leia antes de utilizar nossos serviços de geração de documentos por inteligência artificial.',
};

export default function TermosPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} /> Voltar para o início
          </Link>
          <h1 className={styles.title}>Termos de Uso</h1>
          <p className={styles.lastUpdated}>Última atualização: 1 de janeiro de 2025</p>
        </div>
      </header>

      <main className={styles.content}>
        <div className={styles.highlight}>
          <p>
            Ao utilizar a plataforma DocFlow, você concorda com os termos descritos neste documento.
            Leia atentamente antes de prosseguir.
          </p>
        </div>

        <h2>1. Aceitação dos Termos</h2>
        <p>
          Estes Termos de Uso (&quot;Termos&quot;) regem o acesso e a utilização da plataforma DocFlow,
          disponível em docflow.com.br, incluindo todos os seus recursos, funcionalidades,
          conteúdos e serviços (&quot;Plataforma&quot;), operada por DocFlow Tecnologia LTDA,
          inscrita no CNPJ sob o nº XX.XXX.XXX/0001-XX (&quot;DocFlow&quot;, &quot;nós&quot; ou &quot;nosso&quot;).
        </p>
        <p>
          Ao criar uma conta, acessar ou utilizar a Plataforma, você (&quot;Usuário&quot;, &quot;você&quot; ou &quot;seu&quot;)
          declara ter lido, compreendido e concordado com estes Termos e com a nossa
          Política de Privacidade. Caso não concorde, não utilize a Plataforma.
        </p>

        <h2>2. Descrição do Serviço</h2>
        <p>
          O DocFlow é uma plataforma de tecnologia que utiliza inteligência artificial para auxiliar
          na geração de documentos operacionais e comerciais para pequenos negócios, incluindo, mas
          não se limitando a:
        </p>
        <ul>
          <li>Contratos de prestação de serviço</li>
          <li>Termos de responsabilidade</li>
          <li>Propostas comerciais</li>
          <li>Políticas de cancelamento</li>
          <li>Fichas de anamnese</li>
          <li>Contratos de matrícula</li>
        </ul>

        <div className={styles.highlight}>
          <p>
            <strong>Importante:</strong> O DocFlow é uma ferramenta de apoio à gestão documental.
            Os documentos gerados pela plataforma <strong>não substituem consultoria jurídica
            profissional</strong>. Recomendamos que documentos de alta complexidade ou risco sejam
            revisados por um advogado.
          </p>
        </div>

        <h2>3. Cadastro e Conta</h2>
        <h3>3.1 Elegibilidade</h3>
        <p>
          Para utilizar a Plataforma, você deve ter pelo menos 18 anos de idade ou ser emancipado
          nos termos da legislação brasileira, e possuir capacidade jurídica para celebrar contratos vinculantes.
        </p>
        <h3>3.2 Veracidade das informações</h3>
        <p>
          Ao se cadastrar, você se compromete a fornecer informações verdadeiras, completas e atualizadas.
          É sua responsabilidade manter seus dados de acesso em sigilo e notificar o DocFlow
          imediatamente em caso de uso não autorizado da sua conta.
        </p>
        <h3>3.3 Responsabilidade da conta</h3>
        <p>
          Você é responsável por todas as atividades realizadas em sua conta. O DocFlow não se
          responsabiliza por perdas decorrentes de uso não autorizado quando causado por negligência
          do Usuário na proteção de suas credenciais.
        </p>

        <h2>4. Planos e Pagamento</h2>
        <h3>4.1 Modalidades</h3>
        <p>O DocFlow oferece as seguintes modalidades de acesso:</p>
        <ul>
          <li><strong>Avulso:</strong> Compra unitária de documentos, sem assinatura mensal.</li>
          <li><strong>Starter:</strong> Plano mensal com limite de documentos por mês.</li>
          <li><strong>Pro:</strong> Plano mensal com documentos ilimitados e recursos avançados.</li>
          <li><strong>Equipe:</strong> Plano mensal para múltiplos usuários com gestão centralizada.</li>
        </ul>
        <h3>4.2 Cobrança</h3>
        <p>
          Os valores e condições de pagamento de cada plano estão disponíveis na página de preços
          da Plataforma. Os pagamentos são processados por intermediadores de pagamento terceirizados
          e podem ser realizados via cartão de crédito, PIX ou boleto bancário.
        </p>
        <h3>4.3 Cancelamento e reembolso</h3>
        <p>
          Planos mensais podem ser cancelados a qualquer momento. O acesso permanece ativo até o
          final do período já pago. Não há reembolso proporcional para períodos não utilizados.
          Documentos avulsos, uma vez gerados, não são passíveis de reembolso.
        </p>

        <h2>5. Propriedade Intelectual</h2>
        <h3>5.1 Da Plataforma</h3>
        <p>
          Todo o conteúdo da Plataforma — incluindo código-fonte, design, textos, logotipos,
          marcas e algoritmos de IA — é propriedade exclusiva do DocFlow ou de seus licenciadores,
          protegido pela legislação brasileira de propriedade intelectual.
        </p>
        <h3>5.2 Dos documentos gerados</h3>
        <p>
          Os documentos gerados pela Plataforma a partir das informações fornecidas pelo Usuário
          são de propriedade do Usuário. O DocFlow não reivindica propriedade sobre o conteúdo
          dos documentos gerados e não os utilizará para fins comerciais próprios.
        </p>

        <h2>6. Limitação de Responsabilidade</h2>
        <p>O DocFlow <strong>não se responsabiliza por</strong>:</p>
        <ul>
          <li>Consequências legais decorrentes do uso dos documentos gerados sem revisão jurídica adequada;</li>
          <li>Informações incorretas ou incompletas fornecidas pelo Usuário durante a geração do documento;</li>
          <li>Indisponibilidade temporária da Plataforma por motivos técnicos, manutenção ou força maior;</li>
          <li>Perdas financeiras ou danos indiretos relacionados ao uso ou impossibilidade de uso da Plataforma;</li>
          <li>Alterações na legislação que possam impactar cláusulas dos documentos previamente gerados.</li>
        </ul>

        <h2>7. Uso Aceitável</h2>
        <p>Ao utilizar a Plataforma, você concorda em <strong>não</strong>:</p>
        <ul>
          <li>Utilizar o serviço para fins ilícitos ou fraudulentos;</li>
          <li>Gerar documentos com cláusulas abusivas, discriminatórias ou que violem a legislação vigente;</li>
          <li>Realizar engenharia reversa, descompilar ou tentar acessar o código-fonte da Plataforma;</li>
          <li>Compartilhar credenciais de acesso com terceiros;</li>
          <li>Utilizar bots, scrapers ou ferramentas automatizadas para acessar a Plataforma;</li>
          <li>Sobrecarregar intencionalmente os servidores ou a infraestrutura da Plataforma.</li>
        </ul>

        <h2>8. Modificações nos Termos</h2>
        <p>
          O DocFlow reserva-se o direito de modificar estes Termos a qualquer momento. Alterações
          significativas serão comunicadas por e-mail ou por notificação na Plataforma com, no
          mínimo, 15 dias de antecedência. O uso continuado após a data de vigência das alterações
          constitui aceitação dos novos Termos.
        </p>

        <h2>9. Rescisão</h2>
        <p>
          O DocFlow pode suspender ou encerrar sua conta a qualquer momento, com ou sem aviso
          prévio, caso identifique violação destes Termos. Nesse caso, o acesso à Plataforma será
          revogado e os dados do Usuário serão tratados conforme a Política de Privacidade.
        </p>

        <h2>10. Disposições Gerais</h2>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o
          foro da Comarca de São Paulo, Estado de São Paulo, para dirimir quaisquer controvérsias
          decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
        </p>
        <p>
          A invalidade de qualquer cláusula destes Termos não afetará a validade das demais
          disposições, que permanecerão em pleno vigor e efeito.
        </p>

        <h2>11. Contato</h2>
        <p>
          Em caso de dúvidas sobre estes Termos, entre em contato conosco:
        </p>
        <ul>
          <li><strong>E-mail:</strong> juridico@docflow.com.br</li>
          <li><strong>Endereço:</strong> Av. Paulista, 1000, sala 501, São Paulo — SP, CEP 01310-100</li>
        </ul>
      </main>
    </div>
  );
}
