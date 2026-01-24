export interface Service {
  title: string;
  slug: string;
  icon: string;
  category: string;
  description: string;
  shortDescription: string;
  content: string;
  benefits: string[];
  related: string[];
}

export const services: Record<string, Service> = {
  'adequacao-nr12': {
    title: 'Adequação NR-12',
    slug: 'adequacao-nr12',
    icon: 'shield-check',
    category: 'Segurança do Trabalho',
    description: 'Adequação de máquinas e equipamentos conforme a Norma Regulamentadora NR-12',
    shortDescription: 'Garantimos a segurança das suas máquinas e equipamentos conforme as exigências da NR-12, protegendo seus colaboradores e sua empresa.',
    content: `
      <h2>O que é a NR-12?</h2>
      <p>A Norma Regulamentadora NR-12 estabelece requisitos mínimos para a prevenção de acidentes e doenças do trabalho nas fases de projeto e utilização de máquinas e equipamentos. Nossa equipe especializada garante que suas máquinas estejam em total conformidade.</p>
      
      <h2>Serviços de Adequação</h2>
      <ul>
        <li>Inventário de máquinas e equipamentos</li>
        <li>Análise de riscos (APR/HRN)</li>
        <li>Projeto de adequação mecânica e elétrica</li>
        <li>Instalação de dispositivos de segurança</li>
        <li>Elaboração de procedimentos operacionais</li>
        <li>Treinamento de operadores</li>
        <li>Emissão de ART (Anotação de Responsabilidade Técnica)</li>
      </ul>

      <h2>Por que Adequar?</h2>
      <p>A adequação à NR-12 evita multas, interdições, acidentes de trabalho e processos trabalhistas. Além disso, demonstra o compromisso da empresa com a segurança dos colaboradores.</p>
    `,
    benefits: [
      'Conformidade legal garantida',
      'Redução de acidentes de trabalho',
      'Evita multas e interdições',
      'Proteção jurídica da empresa',
      'Aumento da produtividade'
    ],
    related: ['linha-de-vida-nr35', 'laudos-tecnicos', 'treinamento-sst']
  },

  'estruturas-metalicas': {
    title: 'Estruturas Metálicas',
    slug: 'estruturas-metalicas',
    icon: 'building',
    category: 'Engenharia Estrutural',
    description: 'Projeto, fabricação e montagem de estruturas metálicas para diversos segmentos',
    shortDescription: 'Soluções completas em estruturas metálicas, desde o projeto até a montagem, com qualidade e segurança certificadas.',
    content: `
      <h2>Estruturas Metálicas de Alta Performance</h2>
      <p>Desenvolvemos projetos de estruturas metálicas para galpões industriais, coberturas, mezaninos, plataformas, escadas e estruturas especiais. Nossa equipe combina tecnologia avançada com experiência comprovada.</p>
      
      <h2>Nossos Serviços</h2>
      <ul>
        <li>Projeto estrutural completo</li>
        <li>Cálculo estrutural com software especializado</li>
        <li>Detalhamento para fabricação</li>
        <li>Acompanhamento de fabricação</li>
        <li>Supervisão de montagem</li>
        <li>Laudos de inspeção</li>
        <li>Reforço de estruturas existentes</li>
      </ul>

      <h2>Aplicações</h2>
      <p>Galpões industriais, centros de distribuição, estruturas para painéis solares, passarelas, plataformas de acesso, mezaninos e estruturas especiais sob medida.</p>
    `,
    benefits: [
      'Projetos otimizados',
      'Rapidez na execução',
      'Versatilidade de aplicações',
      'Durabilidade superior',
      'Custo-benefício competitivo'
    ],
    related: ['maquinas-personalizadas', 'laudos-tecnicos', 'pericia-tecnica']
  },

  'gestao-sst-esocial': {
    title: 'Gestão SST / E-Social',
    slug: 'gestao-sst-esocial',
    icon: 'clipboard-list',
    category: 'Segurança do Trabalho',
    description: 'Gestão completa de Saúde e Segurança do Trabalho integrada ao eSocial',
    shortDescription: 'Gerenciamos toda a documentação de SST da sua empresa, garantindo conformidade com o eSocial e legislação vigente.',
    content: `
      <h2>Gestão Integrada de SST</h2>
      <p>Oferecemos gestão completa de Saúde e Segurança do Trabalho, com envio de eventos ao eSocial, elaboração e atualização de documentos, e acompanhamento contínuo das obrigações legais.</p>
      
      <h2>Serviços de Gestão</h2>
      <ul>
        <li>Transmissão de eventos SST ao eSocial (S-2210, S-2220, S-2240)</li>
        <li>Elaboração e gestão de PGR, PCMSO, LTCAT</li>
        <li>Controle de ASOs e exames ocupacionais</li>
        <li>Gestão de EPIs e treinamentos</li>
        <li>Monitoramento de prazos e vencimentos</li>
        <li>Relatórios gerenciais</li>
        <li>Suporte técnico especializado</li>
      </ul>

      <h2>Benefícios da Gestão Integrada</h2>
      <p>Evite multas e penalidades, mantenha sua empresa em dia com todas as obrigações de SST e tenha tranquilidade para focar no seu negócio.</p>
    `,
    benefits: [
      'Conformidade com eSocial',
      'Redução de riscos trabalhistas',
      'Controle centralizado',
      'Relatórios automatizados',
      'Suporte técnico dedicado'
    ],
    related: ['pgr-pcmso-ltcat', 'treinamento-sst', 'adequacao-nr12']
  },

  'laudos-tecnicos': {
    title: 'Laudos Técnicos de Engenharia',
    slug: 'laudos-tecnicos',
    icon: 'document-text',
    category: 'Documentação Técnica',
    description: 'Elaboração de laudos técnicos para diversas finalidades com responsabilidade técnica',
    shortDescription: 'Laudos técnicos elaborados por engenheiros especializados, com ART e validade legal para todas as finalidades.',
    content: `
      <h2>Laudos Técnicos Especializados</h2>
      <p>Elaboramos laudos técnicos de engenharia para diversas finalidades, sempre com o rigor técnico necessário e responsabilidade profissional. Todos os laudos são acompanhados de ART.</p>
      
      <h2>Tipos de Laudos</h2>
      <ul>
        <li>Laudo de estabilidade estrutural</li>
        <li>Laudo de inspeção predial</li>
        <li>Laudo de reforma (NBR 16.280)</li>
        <li>Laudo de instalações elétricas</li>
        <li>Laudo de máquinas e equipamentos</li>
        <li>Laudo de insalubridade e periculosidade</li>
        <li>Laudo de ruído ocupacional</li>
        <li>Laudo de ergonomia (AET)</li>
      </ul>

      <h2>Processo de Elaboração</h2>
      <p>Realizamos vistoria técnica, coleta de dados, análises necessárias e elaboração do documento com todas as informações técnicas, conclusões e recomendações.</p>
    `,
    benefits: [
      'Validade legal garantida',
      'ART inclusa',
      'Engenheiros especializados',
      'Entrega no prazo',
      'Suporte pós-entrega'
    ],
    related: ['pericia-tecnica', 'pgr-pcmso-ltcat', 'adequacao-nr12']
  },

  'linha-de-vida-nr35': {
    title: 'Linha de Vida NR-35',
    slug: 'linha-de-vida-nr35',
    icon: 'link',
    category: 'Segurança do Trabalho',
    description: 'Projeto, instalação e certificação de sistemas de linha de vida conforme NR-35',
    shortDescription: 'Sistemas de proteção contra quedas projetados e instalados conforme as normas técnicas, garantindo a segurança em trabalhos em altura.',
    content: `
      <h2>Sistemas de Linha de Vida</h2>
      <p>Projetamos e instalamos sistemas de linha de vida horizontais e verticais, ancoragens e outros dispositivos de proteção contra quedas, em conformidade com a NR-35 e normas técnicas aplicáveis.</p>
      
      <h2>Serviços Oferecidos</h2>
      <ul>
        <li>Projeto de sistema de linha de vida</li>
        <li>Cálculo estrutural de ancoragens</li>
        <li>Fornecimento de materiais certificados</li>
        <li>Instalação por equipe especializada</li>
        <li>Ensaios e testes de carga</li>
        <li>Emissão de laudo técnico e ART</li>
        <li>Treinamento de usuários</li>
        <li>Inspeção e manutenção periódica</li>
      </ul>

      <h2>Aplicações</h2>
      <p>Coberturas industriais, fachadas de edifícios, torres de telecomunicação, pontes rolantes, silos, tanques e qualquer local onde haja trabalho em altura.</p>
    `,
    benefits: [
      'Projeto personalizado',
      'Materiais certificados',
      'Instalação profissional',
      'Documentação completa',
      'Manutenção programada'
    ],
    related: ['adequacao-nr12', 'treinamento-sst', 'laudos-tecnicos']
  },

  'mao-de-obra': {
    title: 'Mão de Obra Especializada',
    slug: 'mao-de-obra',
    icon: 'users',
    category: 'Recursos Humanos',
    description: 'Fornecimento de profissionais qualificados para projetos de engenharia',
    shortDescription: 'Disponibilizamos profissionais qualificados e treinados para atuar em projetos de engenharia, montagem e manutenção industrial.',
    content: `
      <h2>Profissionais Qualificados</h2>
      <p>Fornecemos mão de obra especializada para diversos segmentos da indústria, com profissionais treinados, documentação em dia e supervisão técnica.</p>
      
      <h2>Categorias Profissionais</h2>
      <ul>
        <li>Engenheiros (civil, mecânico, elétrico, segurança)</li>
        <li>Técnicos de segurança do trabalho</li>
        <li>Soldadores qualificados</li>
        <li>Montadores industriais</li>
        <li>Caldeireiros</li>
        <li>Eletricistas industriais</li>
        <li>Mecânicos de manutenção</li>
        <li>Supervisores e encarregados</li>
      </ul>

      <h2>Diferenciais</h2>
      <p>Todos os profissionais passam por processo seletivo rigoroso, treinamentos específicos e possuem documentação completa (ASO, treinamentos NRs, etc.).</p>
    `,
    benefits: [
      'Profissionais qualificados',
      'Documentação em dia',
      'Flexibilidade de contratação',
      'Supervisão técnica',
      'Substituição garantida'
    ],
    related: ['treinamento-sst', 'gestao-sst-esocial', 'estruturas-metalicas']
  },

  'maquinas-personalizadas': {
    title: 'Máquinas Personalizadas',
    slug: 'maquinas-personalizadas',
    icon: 'cog',
    category: 'Engenharia Mecânica',
    description: 'Projeto e fabricação de máquinas e equipamentos sob medida',
    shortDescription: 'Desenvolvemos máquinas e equipamentos personalizados para atender às necessidades específicas do seu processo produtivo.',
    content: `
      <h2>Soluções Sob Medida</h2>
      <p>Projetamos e fabricamos máquinas e equipamentos especiais, desenvolvidos especificamente para otimizar seu processo produtivo, aumentar a eficiência e reduzir custos operacionais.</p>
      
      <h2>Processo de Desenvolvimento</h2>
      <ul>
        <li>Levantamento de requisitos e necessidades</li>
        <li>Estudo de viabilidade técnica</li>
        <li>Projeto conceitual e detalhado</li>
        <li>Simulações e análises</li>
        <li>Fabricação e montagem</li>
        <li>Testes e comissionamento</li>
        <li>Treinamento de operadores</li>
        <li>Assistência técnica</li>
      </ul>

      <h2>Exemplos de Aplicação</h2>
      <p>Dispositivos de montagem, gabaritos de soldagem, transportadores, alimentadores, dosadores, misturadores, embaladores e muito mais.</p>
    `,
    benefits: [
      'Projeto exclusivo',
      'Adequado às suas necessidades',
      'Aumento de produtividade',
      'Redução de custos',
      'Suporte técnico contínuo'
    ],
    related: ['estruturas-metalicas', 'adequacao-nr12', 'laudos-tecnicos']
  },

  'pericia-tecnica': {
    title: 'Perícia Técnica',
    slug: 'pericia-tecnica',
    icon: 'search',
    category: 'Documentação Técnica',
    description: 'Perícias técnicas judiciais e extrajudiciais em engenharia',
    shortDescription: 'Realizamos perícias técnicas com imparcialidade e rigor metodológico, fornecendo pareceres fundamentados para processos judiciais e extrajudiciais.',
    content: `
      <h2>Perícia Técnica Especializada</h2>
      <p>Nossa equipe de peritos é capacitada para realizar perícias técnicas em diversas áreas da engenharia, sempre com imparcialidade, fundamentação técnica e cumprimento dos prazos judiciais.</p>
      
      <h2>Áreas de Atuação</h2>
      <ul>
        <li>Perícia em acidentes de trabalho</li>
        <li>Perícia em estruturas e construções</li>
        <li>Perícia em máquinas e equipamentos</li>
        <li>Perícia em instalações elétricas</li>
        <li>Perícia em incêndios</li>
        <li>Avaliação de imóveis</li>
        <li>Assistência técnica (quesitos)</li>
        <li>Pareceres técnicos</li>
      </ul>

      <h2>Metodologia</h2>
      <p>Seguimos rigorosa metodologia de trabalho, com vistoria detalhada, coleta de evidências, análises técnicas fundamentadas e elaboração de laudo pericial completo.</p>
    `,
    benefits: [
      'Peritos cadastrados',
      'Imparcialidade garantida',
      'Fundamentação técnica sólida',
      'Cumprimento de prazos',
      'Defesa em audiências'
    ],
    related: ['laudos-tecnicos', 'estruturas-metalicas', 'adequacao-nr12']
  },

  'pgr-pcmso-ltcat': {
    title: 'PGR - PCMSO - LTCAT - Laudos',
    slug: 'pgr-pcmso-ltcat',
    icon: 'folder',
    category: 'Segurança do Trabalho',
    description: 'Elaboração de documentos obrigatórios de Saúde e Segurança do Trabalho',
    shortDescription: 'Elaboramos todos os documentos obrigatórios de SST: PGR, PCMSO, LTCAT, laudos de insalubridade, periculosidade e ergonômico.',
    content: `
      <h2>Documentação Completa de SST</h2>
      <p>Oferecemos a elaboração completa de toda a documentação de Saúde e Segurança do Trabalho exigida pela legislação, com reconhecimento dos riscos, medidas de controle e planos de ação.</p>
      
      <h2>Documentos Elaborados</h2>
      <ul>
        <li><strong>PGR</strong> - Programa de Gerenciamento de Riscos</li>
        <li><strong>PCMSO</strong> - Programa de Controle Médico de Saúde Ocupacional</li>
        <li><strong>LTCAT</strong> - Laudo Técnico das Condições Ambientais do Trabalho</li>
        <li><strong>Laudo de Insalubridade</strong></li>
        <li><strong>Laudo de Periculosidade</strong></li>
        <li><strong>AET</strong> - Análise Ergonômica do Trabalho</li>
        <li><strong>PPP</strong> - Perfil Profissiográfico Previdenciário</li>
      </ul>

      <h2>Integração com eSocial</h2>
      <p>Todos os documentos são elaborados considerando as exigências do eSocial, facilitando a transmissão dos eventos de SST.</p>
    `,
    benefits: [
      'Conformidade legal',
      'Integração com eSocial',
      'Equipe multidisciplinar',
      'Atualização periódica',
      'Suporte técnico incluso'
    ],
    related: ['gestao-sst-esocial', 'laudos-tecnicos', 'treinamento-sst']
  },

  'prevencao-combate-incendio': {
    title: 'Prevenção e Combate a Incêndio',
    slug: 'prevencao-combate-incendio',
    icon: 'fire',
    category: 'Segurança',
    description: 'Projetos e laudos de prevenção e combate a incêndio conforme normas do Corpo de Bombeiros',
    shortDescription: 'Elaboramos projetos de prevenção e combate a incêndio, AVCB/CLCB e treinamento de brigada, garantindo a segurança da sua edificação.',
    content: `
      <h2>Segurança Contra Incêndio</h2>
      <p>Oferecemos soluções completas em prevenção e combate a incêndio, desde o projeto até a obtenção do AVCB/CLCB junto ao Corpo de Bombeiros, além de treinamento de brigada de emergência.</p>
      
      <h2>Serviços Oferecidos</h2>
      <ul>
        <li>Projeto de Prevenção e Combate a Incêndio (PPCI)</li>
        <li>Dimensionamento de sistemas (hidrantes, sprinklers, alarme)</li>
        <li>Sinalização de emergência</li>
        <li>Plano de Emergência</li>
        <li>Obtenção de AVCB/CLCB</li>
        <li>Treinamento de brigada de incêndio</li>
        <li>Inspeção e manutenção de equipamentos</li>
        <li>Regularização de edificações</li>
      </ul>

      <h2>Importância</h2>
      <p>Além de ser obrigatório por lei, um bom sistema de prevenção e combate a incêndio protege vidas, patrimônio e garante a continuidade dos negócios.</p>
    `,
    benefits: [
      'Projeto aprovado pelo CB',
      'Obtenção de AVCB/CLCB',
      'Brigada treinada',
      'Equipamentos certificados',
      'Renovação facilitada'
    ],
    related: ['treinamento-sst', 'laudos-tecnicos', 'adequacao-nr12']
  },

  'treinamento-sst': {
    title: 'Treinamento SST',
    slug: 'treinamento-sst',
    icon: 'academic-cap',
    category: 'Capacitação',
    description: 'Treinamentos de Saúde e Segurança do Trabalho conforme Normas Regulamentadoras',
    shortDescription: 'Capacitamos seus colaboradores nos treinamentos obrigatórios de SST, com instrutores qualificados e certificação válida.',
    content: `
      <h2>Capacitação em SST</h2>
      <p>Oferecemos treinamentos de Saúde e Segurança do Trabalho conforme as exigências das Normas Regulamentadoras, com instrutores qualificados, material didático atualizado e certificação válida em todo território nacional.</p>
      
      <h2>Treinamentos Disponíveis</h2>
      <ul>
        <li><strong>NR-10</strong> - Segurança em Instalações Elétricas (básico e SEP)</li>
        <li><strong>NR-11</strong> - Operador de Empilhadeira</li>
        <li><strong>NR-12</strong> - Segurança em Máquinas e Equipamentos</li>
        <li><strong>NR-18</strong> - Segurança na Construção Civil</li>
        <li><strong>NR-33</strong> - Espaço Confinado</li>
        <li><strong>NR-35</strong> - Trabalho em Altura</li>
        <li><strong>Brigada de Incêndio</strong></li>
        <li><strong>CIPA</strong> - Comissão Interna de Prevenção de Acidentes</li>
        <li><strong>Primeiros Socorros</strong></li>
      </ul>

      <h2>Modalidades</h2>
      <p>Treinamentos presenciais (in company ou em nossa sede), semipresenciais e EAD, conforme permitido pela legislação.</p>
    `,
    benefits: [
      'Instrutores qualificados',
      'Certificação válida',
      'Material didático incluso',
      'Treinamento in company',
      'Reciclagens programadas'
    ],
    related: ['adequacao-nr12', 'linha-de-vida-nr35', 'prevencao-combate-incendio']
  }
};

// Helper function to get all services as array
export const getServicesArray = () => Object.values(services);

// Helper function to get services by category
export const getServicesByCategory = (category: string) => 
  Object.values(services).filter(s => s.category === category);

// Get unique categories
export const getCategories = () => 
  [...new Set(Object.values(services).map(s => s.category))];

// Get featured services for homepage (first 6)
export const getFeaturedServices = () => Object.values(services).slice(0, 6);
