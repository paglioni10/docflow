import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Política de Privacidade — DocFlow',
  description: 'Política de Privacidade da plataforma DocFlow. Saiba como coletamos, usamos e protegemos seus dados pessoais.',
};

export default function PrivacidadePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} /> Voltar para o início
          </Link>
          <h1 className={styles.title}>Política de Privacidade</h1>
          <p className={styles.lastUpdated}>Última atualização: 1 de janeiro de 2025</p>
        </div>
      </header>

      <main className={styles.content}>
        <div className={styles.highlight}>
          <p>
            A sua privacidade é importante para nós. Esta Política descreve como o DocFlow coleta,
            utiliza, armazena e protege os seus dados pessoais.
          </p>
        </div>

        <h2>1. Quem Somos</h2>
        <p>
          O DocFlow é uma plataforma de geração de documentos operacionais por inteligência artificial,
          operada por DocFlow Tecnologia LTDA, inscrita no CNPJ sob o nº XX.XXX.XXX/0001-XX,
          com sede na Av. Paulista, 1000, sala 501, São Paulo — SP, CEP 01310-100.
        </p>
        <p>
          Para fins da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), atuamos como
          <strong> Controladora</strong> dos dados pessoais que você nos fornece ao utilizar a Plataforma.
        </p>

        <h2>2. Dados que Coletamos</h2>

        <h3>2.1 Dados fornecidos por você</h3>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Dado</th>
                <th>Quando coletamos</th>
                <th>Finalidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nome completo</td>
                <td>Cadastro na plataforma</td>
                <td>Identificação do usuário</td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>Cadastro e login</td>
                <td>Autenticação e comunicações</td>
              </tr>
              <tr>
                <td>CPF/CNPJ</td>
                <td>Geração de documentos</td>
                <td>Inserção nos documentos gerados</td>
              </tr>
              <tr>
                <td>Endereço</td>
                <td>Geração de documentos</td>
                <td>Inserção nos documentos gerados</td>
              </tr>
              <tr>
                <td>Dados do negócio</td>
                <td>Wizard de criação</td>
                <td>Personalização dos documentos</td>
              </tr>
              <tr>
                <td>Dados de pagamento</td>
                <td>Contratação de plano</td>
                <td>Processamento de cobranças</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2.2 Dados coletados automaticamente</h3>
        <ul>
          <li><strong>Dados de acesso:</strong> endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo de permanência.</li>
          <li><strong>Cookies:</strong> utilizamos cookies essenciais para o funcionamento da plataforma e cookies analíticos para melhorar a experiência (veja a seção 7).</li>
          <li><strong>Dados de uso:</strong> funcionalidades utilizadas, documentos gerados, ações realizadas na plataforma.</li>
        </ul>

        <h2>3. Como Utilizamos seus Dados</h2>
        <p>Seus dados pessoais são utilizados para as seguintes finalidades:</p>
        <ul>
          <li><strong>Prestação do serviço:</strong> gerar documentos personalizados, processar pagamentos, gerenciar sua conta;</li>
          <li><strong>Comunicação:</strong> enviar notificações sobre documentos, atualizações da plataforma e, com seu consentimento, comunicações de marketing;</li>
          <li><strong>Melhoria do serviço:</strong> analisar padrões de uso para aprimorar funcionalidades, corrigir bugs e otimizar a experiência;</li>
          <li><strong>Segurança:</strong> prevenir fraudes, detectar atividades suspeitas e proteger a integridade da plataforma;</li>
          <li><strong>Cumprimento legal:</strong> atender obrigações legais, regulatórias e requisições de autoridades competentes.</li>
        </ul>

        <h2>4. Base Legal para o Tratamento</h2>
        <p>O tratamento dos seus dados pessoais é realizado com base nas seguintes hipóteses da LGPD:</p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Base Legal (Art. 7º LGPD)</th>
                <th>Aplicação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Execução de contrato (Art. 7º, V)</td>
                <td>Prestação do serviço contratado</td>
              </tr>
              <tr>
                <td>Consentimento (Art. 7º, I)</td>
                <td>Comunicações de marketing</td>
              </tr>
              <tr>
                <td>Legítimo interesse (Art. 7º, IX)</td>
                <td>Melhoria do serviço e segurança</td>
              </tr>
              <tr>
                <td>Cumprimento de obrigação legal (Art. 7º, II)</td>
                <td>Obrigações fiscais e regulatórias</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>5. Compartilhamento de Dados</h2>
        <p>Seus dados podem ser compartilhados com:</p>
        <ul>
          <li><strong>Processadores de pagamento:</strong> para viabilizar cobranças e reembolsos (ex: Stripe, PagSeguro);</li>
          <li><strong>Provedores de infraestrutura:</strong> serviços de hospedagem e armazenamento em nuvem (ex: Vercel, AWS);</li>
          <li><strong>Provedores de IA:</strong> para processamento de linguagem natural na geração de documentos (ex: Google Gemini). Apenas dados necessários para a geração são transmitidos;</li>
          <li><strong>Autoridades públicas:</strong> quando exigido por lei, regulamento ou ordem judicial.</li>
        </ul>

        <div className={styles.highlight}>
          <p>
            <strong>Jamais vendemos seus dados pessoais.</strong> O compartilhamento ocorre apenas
            na medida estritamente necessária para a prestação do serviço.
          </p>
        </div>

        <h2>6. Armazenamento e Segurança</h2>
        <p>
          Seus dados são armazenados em servidores seguros com criptografia em trânsito (TLS 1.3)
          e em repouso (AES-256). Implementamos medidas técnicas e organizacionais adequadas,
          incluindo:
        </p>
        <ul>
          <li>Controle de acesso baseado em função (RBAC);</li>
          <li>Monitoramento contínuo de acessos;</li>
          <li>Backups criptografados regulares;</li>
          <li>Política interna de segurança da informação;</li>
          <li>Testes periódicos de vulnerabilidade.</li>
        </ul>
        <p>
          Os dados são retidos pelo período necessário para cumprir as finalidades descritas nesta
          Política ou conforme exigido por lei. Dados de conta são mantidos enquanto a conta estiver
          ativa. Após o encerramento, os dados são anonimizados ou excluídos em até 30 dias, exceto
          quando a retenção for exigida por obrigação legal.
        </p>

        <h2>7. Cookies</h2>
        <p>Utilizamos os seguintes tipos de cookies:</p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Finalidade</th>
                <th>Duração</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Essenciais</td>
                <td>Funcionamento da plataforma, sessão do usuário</td>
                <td>Sessão</td>
              </tr>
              <tr>
                <td>Analíticos</td>
                <td>Estatísticas de uso e melhoria da experiência</td>
                <td>12 meses</td>
              </tr>
              <tr>
                <td>Preferências</td>
                <td>Salvar preferências do usuário (tema, idioma)</td>
                <td>12 meses</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
          A desativação de cookies essenciais pode comprometer o funcionamento da plataforma.
        </p>

        <h2>8. Seus Direitos</h2>
        <p>
          Nos termos da LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
        </p>
        <ul>
          <li><strong>Acesso:</strong> solicitar uma cópia dos dados que possuímos sobre você;</li>
          <li><strong>Correção:</strong> solicitar a correção de dados incompletos ou desatualizados;</li>
          <li><strong>Eliminação:</strong> solicitar a exclusão dos seus dados pessoais;</li>
          <li><strong>Portabilidade:</strong> solicitar a transferência dos seus dados para outro prestador;</li>
          <li><strong>Revogação do consentimento:</strong> revogar o consentimento a qualquer momento;</li>
          <li><strong>Oposição:</strong> se opor ao tratamento de dados com base em legítimo interesse;</li>
          <li><strong>Informação:</strong> saber com quem seus dados foram compartilhados.</li>
        </ul>
        <p>
          Para exercer qualquer desses direitos, entre em contato pelo e-mail
          <strong> privacidade@docflow.com.br</strong>. Responderemos em até 15 dias úteis.
        </p>

        <h2>9. Transferência Internacional</h2>
        <p>
          Alguns dos nossos provedores de serviço podem estar localizados fora do Brasil. Nestes
          casos, garantimos que a transferência internacional de dados ocorre em conformidade com
          o Capítulo V da LGPD, adotando cláusulas contratuais padrão e verificando que o país
          de destino oferece nível adequado de proteção de dados.
        </p>

        <h2>10. Alterações nesta Política</h2>
        <p>
          Esta Política pode ser atualizada periodicamente. Alterações significativas serão
          comunicadas por e-mail ou notificação na plataforma. A data da última atualização está
          indicada no topo deste documento.
        </p>

        <h2>11. Contato do Encarregado (DPO)</h2>
        <p>
          Para questões relacionadas à proteção de dados, entre em contato com nosso Encarregado
          de Proteção de Dados:
        </p>
        <ul>
          <li><strong>E-mail:</strong> dpo@docflow.com.br</li>
          <li><strong>Endereço:</strong> Av. Paulista, 1000, sala 501, São Paulo — SP, CEP 01310-100</li>
        </ul>
      </main>
    </div>
  );
}
