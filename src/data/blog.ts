export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'NR-12: Tudo o que você precisa saber sobre segurança em máquinas',
    slug: 'nr-12-seguranca-maquinas',
    excerpt: 'Entenda os principais requisitos da NR-12 e como adequar suas máquinas e equipamentos para garantir a segurança dos trabalhadores.',
    content: `
      <h2>O que é a NR-12?</h2>
      <p>A Norma Regulamentadora nº 12 (NR-12) estabelece requisitos mínimos para a prevenção de acidentes e doenças do trabalho nas fases de projeto e utilização de máquinas e equipamentos, e ainda à sua fabricação, importação, comercialização, exposição e cessão a qualquer título.</p>
      
      <h2>Principais Requisitos</h2>
      <p>A NR-12 abrange diversos aspectos relacionados à segurança em máquinas e equipamentos:</p>
      <ul>
        <li>Arranjo físico e instalações</li>
        <li>Instalações e dispositivos elétricos</li>
        <li>Dispositivos de partida, acionamento e parada</li>
        <li>Sistemas de segurança</li>
        <li>Dispositivos de parada de emergência</li>
        <li>Meios de acesso permanentes</li>
        <li>Componentes pressurizados</li>
        <li>Transportadores de materiais</li>
        <li>Aspectos ergonômicos</li>
        <li>Riscos adicionais</li>
        <li>Manutenção, inspeção, preparação, ajuste, reparo e limpeza</li>
        <li>Sinalização</li>
        <li>Manuais</li>
        <li>Procedimentos de trabalho e segurança</li>
        <li>Capacitação</li>
      </ul>

      <h2>Por que adequar à NR-12?</h2>
      <p>A adequação à NR-12 traz diversos benefícios para a empresa:</p>
      <ul>
        <li><strong>Prevenção de acidentes:</strong> Reduz significativamente o risco de acidentes de trabalho</li>
        <li><strong>Conformidade legal:</strong> Evita multas e interdições por parte dos órgãos fiscalizadores</li>
        <li><strong>Proteção jurídica:</strong> Demonstra que a empresa adota medidas de segurança adequadas</li>
        <li><strong>Produtividade:</strong> Ambientes seguros tendem a ser mais produtivos</li>
        <li><strong>Imagem corporativa:</strong> Demonstra compromisso com a segurança dos colaboradores</li>
      </ul>

      <h2>Como a Maggi Engenharia pode ajudar?</h2>
      <p>Nossa equipe de engenheiros especializados realiza a análise completa das suas máquinas e equipamentos, identificando as não conformidades e propondo soluções técnicas para adequação à NR-12.</p>
      <p>Oferecemos desde a elaboração do inventário de máquinas até a implementação das medidas de proteção, incluindo a emissão de ART (Anotação de Responsabilidade Técnica).</p>
    `,
    author: 'Eng. Danilo Maggi',
    date: '2024-01-15',
    category: 'Segurança do Trabalho',
    readTime: '8 min',
    featured: true
  },
  {
    title: 'eSocial SST: Como se adequar às novas exigências',
    slug: 'esocial-sst-adequacao',
    excerpt: 'Saiba como transmitir corretamente os eventos de SST ao eSocial e evite penalidades para sua empresa.',
    content: `
      <h2>O que é o eSocial SST?</h2>
      <p>O eSocial é o Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas. No que diz respeito à Saúde e Segurança do Trabalho (SST), o sistema recebe informações sobre riscos ocupacionais, exames médicos e acidentes de trabalho.</p>
      
      <h2>Eventos de SST no eSocial</h2>
      <p>Existem três eventos principais relacionados à SST que devem ser transmitidos ao eSocial:</p>
      <ul>
        <li><strong>S-2210 - Comunicação de Acidente de Trabalho:</strong> Deve ser enviado até o primeiro dia útil seguinte ao da ocorrência do acidente</li>
        <li><strong>S-2220 - Monitoramento da Saúde do Trabalhador:</strong> Informações sobre os exames médicos ocupacionais (ASOs)</li>
        <li><strong>S-2240 - Condições Ambientais do Trabalho - Agentes Nocivos:</strong> Informações sobre a exposição a agentes nocivos</li>
      </ul>

      <h2>Prazos e Penalidades</h2>
      <p>O não cumprimento dos prazos estabelecidos para envio dos eventos pode gerar multas significativas para a empresa. Por isso, é fundamental manter um sistema de gestão eficiente que garanta o envio correto e pontual de todas as informações.</p>

      <h2>Documentos Necessários</h2>
      <p>Para transmitir corretamente os eventos de SST, a empresa precisa ter em dia:</p>
      <ul>
        <li>PGR - Programa de Gerenciamento de Riscos</li>
        <li>PCMSO - Programa de Controle Médico de Saúde Ocupacional</li>
        <li>LTCAT - Laudo Técnico das Condições Ambientais do Trabalho</li>
        <li>ASOs atualizados de todos os colaboradores</li>
      </ul>

      <h2>Como podemos ajudar</h2>
      <p>A Maggi Engenharia oferece gestão completa de SST integrada ao eSocial, garantindo que sua empresa esteja sempre em conformidade com as exigências legais.</p>
    `,
    author: 'Equipe Técnica',
    date: '2024-01-10',
    category: 'Documentação',
    readTime: '6 min',
    featured: true
  },
  {
    title: 'Trabalho em Altura: Requisitos da NR-35',
    slug: 'trabalho-altura-nr35',
    excerpt: 'Conheça as exigências da NR-35 para trabalho em altura e como implementar um sistema de proteção eficiente.',
    content: `
      <h2>O que é considerado trabalho em altura?</h2>
      <p>Segundo a NR-35, é considerado trabalho em altura toda atividade executada acima de 2 metros do nível inferior, onde haja risco de queda. Isso inclui atividades em telhados, plataformas, escadas, andaimes, entre outros.</p>
      
      <h2>Requisitos da NR-35</h2>
      <p>A norma estabelece requisitos mínimos e as medidas de proteção para o trabalho em altura:</p>
      <ul>
        <li>Planejamento, organização e execução seguros</li>
        <li>Análise de Risco antes de qualquer atividade</li>
        <li>Sistemas de proteção contra quedas</li>
        <li>Equipamentos de Proteção Individual adequados</li>
        <li>Capacitação e treinamento dos trabalhadores</li>
        <li>Procedimentos de emergência e resgate</li>
      </ul>

      <h2>Sistemas de Linha de Vida</h2>
      <p>Os sistemas de linha de vida são fundamentais para garantir a segurança dos trabalhadores em altura. Podem ser:</p>
      <ul>
        <li><strong>Linha de vida horizontal:</strong> Permite movimentação ao longo de uma área</li>
        <li><strong>Linha de vida vertical:</strong> Para deslocamento vertical, como em escadas</li>
        <li><strong>Pontos de ancoragem:</strong> Para posições fixas de trabalho</li>
      </ul>

      <h2>Treinamento Obrigatório</h2>
      <p>Todo trabalhador que execute atividades em altura deve realizar treinamento teórico e prático, com carga horária mínima de 8 horas. O treinamento deve ser realizado a cada 2 anos ou quando houver mudança de procedimentos.</p>

      <h2>Nossos Serviços</h2>
      <p>Oferecemos projeto, instalação e certificação de sistemas de linha de vida, além de treinamentos completos conforme a NR-35.</p>
    `,
    author: 'Eng. Danilo Maggi',
    date: '2024-01-05',
    category: 'Segurança do Trabalho',
    readTime: '7 min',
    featured: false
  },
  {
    title: 'PGR: O novo programa que substituiu o PPRA',
    slug: 'pgr-programa-gerenciamento-riscos',
    excerpt: 'Entenda o que é o PGR, suas diferenças em relação ao PPRA e como implementar na sua empresa.',
    content: `
      <h2>O que é o PGR?</h2>
      <p>O Programa de Gerenciamento de Riscos (PGR) é um documento que integra o gerenciamento de riscos ocupacionais à gestão da empresa. Ele substituiu o antigo PPRA (Programa de Prevenção de Riscos Ambientais) a partir de janeiro de 2022.</p>
      
      <h2>Diferenças entre PGR e PPRA</h2>
      <p>O PGR traz uma abordagem mais ampla e integrada:</p>
      <ul>
        <li>Considera todos os riscos ocupacionais, não apenas os ambientais</li>
        <li>Exige a elaboração do Inventário de Riscos</li>
        <li>Requer um Plano de Ação com medidas de prevenção</li>
        <li>Deve estar integrado ao GRO (Gerenciamento de Riscos Ocupacionais)</li>
      </ul>

      <h2>Estrutura do PGR</h2>
      <p>O PGR deve conter, no mínimo:</p>
      <ul>
        <li><strong>Inventário de Riscos:</strong> Identificação dos perigos e avaliação dos riscos</li>
        <li><strong>Plano de Ação:</strong> Medidas de prevenção e controle dos riscos</li>
      </ul>

      <h2>Quem precisa elaborar o PGR?</h2>
      <p>Todas as empresas que possuem empregados regidos pela CLT devem elaborar e implementar o PGR. Microempreendedores Individuais (MEI) e empresas sem exposição a riscos podem estar dispensados, conforme critérios específicos.</p>

      <h2>Atualização do PGR</h2>
      <p>O PGR deve ser revisado sempre que houver:</p>
      <ul>
        <li>Mudanças nas instalações físicas</li>
        <li>Alteração de processos ou atividades</li>
        <li>Identificação de novos riscos</li>
        <li>Ocorrência de acidentes ou doenças ocupacionais</li>
      </ul>

      <h2>Como podemos ajudar</h2>
      <p>Elaboramos o PGR completo da sua empresa, incluindo o levantamento de riscos, avaliações quantitativas quando necessário, e o plano de ação com cronograma de implementação.</p>
    `,
    author: 'Equipe Técnica',
    date: '2023-12-20',
    category: 'Documentação',
    readTime: '6 min',
    featured: false
  },
  {
    title: 'Laudo de Insalubridade: Quando é necessário?',
    slug: 'laudo-insalubridade-quando-necessario',
    excerpt: 'Saiba quando sua empresa precisa de um laudo de insalubridade e como ele é elaborado.',
    content: `
      <h2>O que é Insalubridade?</h2>
      <p>Insalubridade é a condição de trabalho que expõe o trabalhador a agentes nocivos à saúde, acima dos limites de tolerância estabelecidos pelas normas técnicas.</p>
      
      <h2>Agentes Insalubres</h2>
      <p>Os principais agentes que podem caracterizar insalubridade são:</p>
      <ul>
        <li><strong>Agentes físicos:</strong> Ruído, calor, frio, radiações, pressões anormais</li>
        <li><strong>Agentes químicos:</strong> Poeiras, fumos, gases, vapores, produtos químicos</li>
        <li><strong>Agentes biológicos:</strong> Vírus, bactérias, fungos, parasitas</li>
      </ul>

      <h2>Graus de Insalubridade</h2>
      <p>O adicional de insalubridade é calculado sobre o salário mínimo:</p>
      <ul>
        <li><strong>Grau Mínimo:</strong> 10%</li>
        <li><strong>Grau Médio:</strong> 20%</li>
        <li><strong>Grau Máximo:</strong> 40%</li>
      </ul>

      <h2>Quando elaborar o Laudo?</h2>
      <p>O laudo de insalubridade deve ser elaborado:</p>
      <ul>
        <li>Quando há atividades com potencial exposição a agentes nocivos</li>
        <li>Para fundamentar o pagamento ou não do adicional</li>
        <li>Em processos trabalhistas</li>
        <li>Para atender fiscalização do Ministério do Trabalho</li>
        <li>Para subsidiar o LTCAT e PPP</li>
      </ul>

      <h2>Como é feito o Laudo?</h2>
      <p>A elaboração envolve:</p>
      <ul>
        <li>Visita técnica ao local de trabalho</li>
        <li>Identificação dos agentes nocivos</li>
        <li>Avaliações quantitativas (medições)</li>
        <li>Comparação com limites de tolerância</li>
        <li>Conclusão técnica fundamentada</li>
        <li>Emissão de ART</li>
      </ul>

      <h2>Nossos Serviços</h2>
      <p>Elaboramos laudos de insalubridade e periculosidade com avaliações quantitativas, sempre emitidos por engenheiros habilitados e com ART.</p>
    `,
    author: 'Eng. Danilo Maggi',
    date: '2023-12-15',
    category: 'Documentação',
    readTime: '5 min',
    featured: false
  },
  {
    title: 'CIPA: Importância e como implementar na sua empresa',
    slug: 'cipa-importancia-implementacao',
    excerpt: 'Descubra a importância da CIPA para a segurança dos trabalhadores e como constituir uma comissão eficiente.',
    content: `
      <h2>O que é a CIPA?</h2>
      <p>A Comissão Interna de Prevenção de Acidentes (CIPA) é um grupo de trabalhadores que tem como objetivo a prevenção de acidentes e doenças decorrentes do trabalho, de modo a tornar compatível permanentemente o trabalho com a preservação da vida e a promoção da saúde do trabalhador.</p>
      
      <h2>Quem deve constituir a CIPA?</h2>
      <p>A obrigatoriedade de constituição da CIPA depende do grau de risco da atividade e do número de empregados, conforme o Quadro I da NR-5. Empresas que não se enquadram no dimensionamento devem designar um representante.</p>

      <h2>Composição da CIPA</h2>
      <p>A CIPA é composta por representantes dos empregados e do empregador:</p>
      <ul>
        <li><strong>Representantes dos empregados:</strong> Eleitos pelos trabalhadores em votação secreta</li>
        <li><strong>Representantes do empregador:</strong> Indicados pela empresa</li>
      </ul>

      <h2>Atribuições da CIPA</h2>
      <p>Entre as principais atribuições estão:</p>
      <ul>
        <li>Identificar riscos no ambiente de trabalho</li>
        <li>Elaborar mapa de riscos</li>
        <li>Propor medidas de prevenção</li>
        <li>Participar da implementação das medidas de segurança</li>
        <li>Divulgar informações sobre segurança</li>
        <li>Colaborar na análise de acidentes</li>
        <li>Organizar a SIPAT anualmente</li>
      </ul>

      <h2>Treinamento dos Cipeiros</h2>
      <p>Os membros da CIPA devem receber treinamento com carga horária de 20 horas, antes da posse, abordando temas como:</p>
      <ul>
        <li>Estudo do ambiente e condições de trabalho</li>
        <li>Metodologia de investigação de acidentes</li>
        <li>Noções sobre acidentes e doenças ocupacionais</li>
        <li>Legislação trabalhista e previdenciária</li>
        <li>Princípios de higiene do trabalho</li>
      </ul>

      <h2>Como podemos ajudar</h2>
      <p>Oferecemos assessoria completa para constituição e funcionamento da CIPA, além de treinamentos para os membros da comissão.</p>
    `,
    author: 'Equipe Técnica',
    date: '2023-12-10',
    category: 'Segurança do Trabalho',
    readTime: '6 min',
    featured: false
  }
];

// Helper functions
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);

export const getRecentPosts = (limit: number = 3) => 
  [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);

export const getPostsByCategory = (category: string) => 
  blogPosts.filter(post => post.category === category);

export const getCategories = () => 
  [...new Set(blogPosts.map(post => post.category))];

export const getPostBySlug = (slug: string) => 
  blogPosts.find(post => post.slug === slug);

export const getRelatedPosts = (currentSlug: string, limit: number = 3) => {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);
};
