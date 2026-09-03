import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from '../legal.module.css';

export const metadata = {
  title: 'LGPD — Proteção de Dados — DocFlow',
  description: 'Saiba como o DocFlow se adequa à Lei Geral de Proteção de Dados (LGPD) e protege os dados dos seus clientes e dos clientes dos seus clientes.',
};

export default function LGPDPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} /> Voltar para o início
          </Link>
          <h1 className={styles.title}>LGPD e Proteção de Dados</h1>
          <p className={styles.lastUpdated}>Última atualização: 1 de janeiro de 2026</p>
        </div>
      </header>

      <main className={styles.content}>
        <div className={styles.highlight}>
          <p>
            O DocFlow foi construído com proteção de dados por design (<em>privacy by design</em>).
            Esta página explica como nos adequamos à LGPD e como ajudamos o seu negócio a fazer o mesmo.
          </p>
        </div>

        <h2>1. Nosso Compromisso com a LGPD</h2>
        <p>
          A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) é o marco legal brasileiro que
          regula o tratamento de dados pessoais. O DocFlow está comprometido com a plena conformidade
          com a LGPD em todas as suas operações, tanto no tratamento dos dados dos nossos usuários
          quanto na forma como os documentos gerados tratam os dados dos clientes dos nossos usuários.
        </p>

        <h2>2. Papéis e Responsabilidades</h2>
        <p>No contexto da LGPD, existem diferentes papéis no tratamento de dados:</p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Papel</th>
                <th>Quem</th>
                <th>Responsabilidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Controlador</strong></td>
                <td>DocFlow</td>
                <td>Decisões sobre o tratamento de dados dos usuários da plataforma</td>
              </tr>
              <tr>
                <td><strong>Controlador</strong></td>
                <td>Seu negócio (Usuário)</td>
                <td>Decisões sobre o tratamento de dados dos seus clientes</td>
              </tr>
              <tr>
                <td><strong>Operador</strong></td>
                <td>DocFlow</td>
                <td>Processamento de dados dos clientes do Usuário inseridos nos documentos</td>
              </tr>
              <tr>
                <td><strong>Titular</strong></td>
                <td>Pessoa física</td>
                <td>Proprietário dos dados pessoais</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.highlight}>
          <p>
            <strong>Responsabilidade compartilhada:</strong> Quando você (Usuário) insere dados de
            seus clientes nos documentos gerados pelo DocFlow, você atua como Controlador desses
            dados. O DocFlow atua como Operador, processando os dados exclusivamente para gerar o
            documento solicitado.
          </p>
        </div>

        <h2>3. Princípios que Seguimos</h2>
        <p>O DocFlow adota todos os princípios previstos no Art. 6º da LGPD:</p>
        <ul>
          <li>
            <strong>Finalidade:</strong> Tratamos dados apenas para propósitos legítimos, específicos
            e informados ao titular. Não utilizamos dados para finalidades não autorizadas.
          </li>
          <li>
            <strong>Adequação:</strong> O tratamento é compatível com as finalidades informadas,
            considerando o contexto de geração de documentos profissionais.
          </li>
          <li>
            <strong>Necessidade:</strong> Coletamos apenas os dados estritamente necessários para a
            geração do documento solicitado. Não exigimos dados excessivos.
          </li>
          <li>
            <strong>Livre acesso:</strong> Garantimos a consulta facilitada e gratuita sobre os dados
            pessoais tratados.
          </li>
          <li>
            <strong>Qualidade dos dados:</strong> Mantemos os dados atualizados e permitimos correções
            pelo titular a qualquer momento.
          </li>
          <li>
            <strong>Transparência:</strong> Disponibilizamos informações claras e acessíveis sobre
            o tratamento de dados.
          </li>
          <li>
            <strong>Segurança:</strong> Adotamos medidas técnicas e administrativas para proteger os
            dados contra acessos não autorizados e situações acidentais.
          </li>
          <li>
            <strong>Prevenção:</strong> Implementamos medidas preventivas contra danos aos titulares
            decorrentes do tratamento de dados.
          </li>
          <li>
            <strong>Não discriminação:</strong> Os dados pessoais nunca são utilizados para fins
            discriminatórios, ilícitos ou abusivos.
          </li>
          <li>
            <strong>Responsabilização:</strong> Documentamos e demonstramos a adoção de medidas
            eficazes de proteção de dados.
          </li>
        </ul>

        <h2>4. Como Protegemos os Dados nos Documentos</h2>
        <p>
          Quando nossos algoritmos de IA geram documentos para o seu negócio, incorporamos
          automaticamente cláusulas de proteção de dados quando aplicável:
        </p>
        <ul>
          <li>
            <strong>Cláusulas de consentimento:</strong> Nos documentos que envolvem coleta de dados
            pessoais (como fichas de anamnese e contratos), incluímos cláusulas de consentimento
            claro e específico para o tratamento dos dados.
          </li>
          <li>
            <strong>Finalidade explícita:</strong> Cada documento especifica para quais finalidades
            os dados coletados serão utilizados.
          </li>
          <li>
            <strong>Direitos do titular:</strong> Incluímos informações sobre os direitos do titular
            dos dados conforme a LGPD.
          </li>
          <li>
            <strong>Período de retenção:</strong> Quando aplicável, os documentos indicam por quanto
            tempo os dados serão armazenados.
          </li>
        </ul>

        <h2>5. Medidas Técnicas de Segurança</h2>
        <p>Implementamos as seguintes medidas para proteger seus dados:</p>

        <h3>5.1 Criptografia</h3>
        <ul>
          <li>Comunicações protegidas por TLS 1.3 (HTTPS);</li>
          <li>Dados armazenados com criptografia AES-256;</li>
          <li>Senhas protegidas com hash bcrypt (fator de custo ≥ 12).</li>
        </ul>

        <h3>5.2 Controle de acesso</h3>
        <ul>
          <li>Autenticação multifator disponível;</li>
          <li>Sessões com expiração automática;</li>
          <li>Controle de acesso baseado em função (RBAC) internamente.</li>
        </ul>

        <h3>5.3 Monitoramento</h3>
        <ul>
          <li>Logs de acesso auditáveis;</li>
          <li>Alertas automáticos para atividades suspeitas;</li>
          <li>Testes de penetração semestrais.</li>
        </ul>

        <h2>6. Processamento por IA</h2>
        <p>
          O DocFlow utiliza modelos de inteligência artificial para gerar documentos. É importante
          saber como seus dados interagem com essa tecnologia:
        </p>
        <ul>
          <li>
            Os dados fornecidos no wizard de criação são enviados ao modelo de IA exclusivamente
            para a geração do documento solicitado.
          </li>
          <li>
            <strong>Não utilizamos seus dados para treinar modelos de IA.</strong> Seus dados não
            são incorporados ao treinamento do modelo e não influenciam documentos gerados para
            outros usuários.
          </li>
          <li>
            Os dados são transmitidos de forma criptografada e descartados pelo provedor de IA
            após o processamento, conforme contrato de processamento de dados (DPA) firmado com
            o provedor.
          </li>
        </ul>

        <div className={styles.highlight}>
          <p>
            <strong>Transparência sobre IA:</strong> Cada documento gerado é claramente identificado
            como criado com auxílio de inteligência artificial. Recomendamos a revisão humana antes
            do uso, especialmente para documentos de maior complexidade jurídica.
          </p>
        </div>

        <h2>7. Incidentes de Segurança</h2>
        <p>
          Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos
          titulares, o DocFlow se compromete a:
        </p>
        <ol>
          <li>Comunicar a Autoridade Nacional de Proteção de Dados (ANPD) em até 2 dias úteis;</li>
          <li>Notificar os titulares afetados em prazo razoável;</li>
          <li>Descrever a natureza dos dados afetados;</li>
          <li>Informar as medidas adotadas para reverter ou mitigar os efeitos do incidente;</li>
          <li>Indicar os riscos relacionados ao incidente.</li>
        </ol>

        <h2>8. Direitos dos Titulares</h2>
        <p>
          Conforme o Art. 18 da LGPD, todo titular de dados pessoais pode exercer os
          seguintes direitos:
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Direito</th>
                <th>Descrição</th>
                <th>Como exercer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Confirmação</td>
                <td>Saber se tratamos seus dados</td>
                <td>E-mail para dpo@docflow.com.br</td>
              </tr>
              <tr>
                <td>Acesso</td>
                <td>Obter cópia dos dados</td>
                <td>Painel da conta ou e-mail</td>
              </tr>
              <tr>
                <td>Correção</td>
                <td>Corrigir dados incompletos ou errados</td>
                <td>Painel da conta</td>
              </tr>
              <tr>
                <td>Eliminação</td>
                <td>Excluir dados desnecessários</td>
                <td>E-mail para dpo@docflow.com.br</td>
              </tr>
              <tr>
                <td>Portabilidade</td>
                <td>Transferir dados para outro serviço</td>
                <td>E-mail para dpo@docflow.com.br</td>
              </tr>
              <tr>
                <td>Revogação</td>
                <td>Revogar consentimento dado</td>
                <td>Painel da conta ou e-mail</td>
              </tr>
              <tr>
                <td>Oposição</td>
                <td>Opor-se a tratamento específico</td>
                <td>E-mail para dpo@docflow.com.br</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Prazo de resposta: até <strong>15 dias úteis</strong>, conforme regulamentação da ANPD.
        </p>

        <h2>9. Retenção e Eliminação de Dados</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tipo de dado</th>
                <th>Período de retenção</th>
                <th>Motivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dados da conta</td>
                <td>Enquanto a conta estiver ativa + 30 dias</td>
                <td>Prestação do serviço</td>
              </tr>
              <tr>
                <td>Documentos gerados</td>
                <td>Enquanto a conta estiver ativa + 6 meses</td>
                <td>Disponibilidade para o usuário</td>
              </tr>
              <tr>
                <td>Dados fiscais</td>
                <td>5 anos após a transação</td>
                <td>Obrigação tributária (CTN Art. 173)</td>
              </tr>
              <tr>
                <td>Logs de acesso</td>
                <td>6 meses</td>
                <td>Marco Civil da Internet (Art. 15)</td>
              </tr>
              <tr>
                <td>Dados de marketing</td>
                <td>Até revogação do consentimento</td>
                <td>Consentimento do titular</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>10. Contato do Encarregado (DPO)</h2>
        <p>
          Nosso Encarregado de Proteção de Dados está disponível para esclarecer dúvidas,
          receber reclamações e atender solicitações dos titulares:
        </p>
        <ul>
          <li><strong>Nome:</strong> Equipe de Proteção de Dados — DocFlow</li>
          <li><strong>E-mail:</strong> dpo@docflow.com.br</li>
          <li><strong>Endereço:</strong> Av. Paulista, 1000, sala 501, São Paulo — SP, CEP 01310-100</li>
        </ul>
        <p>
          Caso não esteja satisfeito com a resposta do DocFlow, você pode apresentar reclamação
          junto à <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong> pelo site{' '}
          <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">
            www.gov.br/anpd
          </a>.
        </p>
      </main>
    </div>
  );
}
