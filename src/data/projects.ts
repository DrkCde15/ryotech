import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "dw-ecommerce-scrapy",
    title: "Data Warehouse - E-commerce",
    shortDescription:
      "Data Warehouse para análise de dados de e-commerce utilizando Scrapy, PostgreSQL e Airflow com pipeline ETL robusto.",
    description:
      "Projeto de Data Warehouse para análise de dados de e-commerce utilizando Scrapy para web scraping de múltiplos sites (Amazon, Americanas, KaBuM, books.toscrape.com), PostgreSQL como banco de dados e Apache Airflow para orquestração do pipeline ETL completo.",
    problem:
      "A necessidade de coletar dados de produtos de múltiplos e-commerces, armazená-los de forma estruturada e disponibilizá-los para análise comparativa de preços, volumes e categorias.",
    solution:
      "Arquitetura ETL desacoplada com spiders Scrapy gerando arquivos JSON/Parquet, StoragePipeline realizando UPSERT com deduplicação e colunas CDC no PostgreSQL, e TransformPipeline aplicando incremental loading para construir staging, dimensões e marts.",
    technologies: ["Python", "Scrapy", "PostgreSQL", "Apache Airflow", "ETL", "Data Warehouse", "Podman", "dbt", "Streamlit"],
    category: ["Data Engineering", "Data Warehouse", "ETL", "Scraping"],
    featured: true,
    github: "https://github.com/DrkCde15/dw-ecommerce-scrapy",
    demo: "",
    architecture: {
      title: "Arquitetura ETL Desacoplada",
      description: "Arquitetura com separação clara entre Extract, Load e Transform.",
      steps: [
        "Extract: Spiders Scrapy coletam dados e exportam para JSON/Parquet",
        "Load: StoragePipeline carrega arquivos → raw.* com UPSERT, deduplicação e CDC",
        "Transform: TransformPipeline aplica incremental UPSERT para staging e marts",
        "Validate: Quality tests executam em cada estágio do pipeline",
        "Orchestrate: Airflow DAG com trigger_rule e retry_exponential_backoff",
      ],
    },
    challenges: [
      { title: "Desacoplamento ETL", description: "Separar spiders do banco de dados para garantir que o scraping e o load sejam independentes." },
      { title: "Incremental Loading", description: "Migrar de if_exists=replace para ON CONFLICT DO UPDATE para evitar perda de dados históricos." },
      { title: "Qualidade em Pipeline", description: "Implementar validation tests em cada estágio (extract, transform, load) e não apenas post-hoc." },
    ],
    results: [
      { label: "Fontes de scraping", value: "7 spiders" },
      { label: "Tabelas no DW", value: "34+" },
      { label: "Quality tests", value: "14/14" },
    ],
    pipeline: {
      title: "Pipeline ETL Completo",
      steps: [
        { name: "Scrape", description: "Spiders coletam dados de e-commerces" },
        { name: "Extract", description: "Arquivos JSON/Parquet exportados" },
        { name: "Load", description: "StoragePipeline UPSERT + dedup + CDC" },
        { name: "Transform", description: "Incremental UPSERT staging → marts" },
        { name: "Validate", description: "Quality tests por estágio" },
      ],
    },
    implementation:
      "Implementado em Python com Scrapy para web scraping e pandas para transformação. Apache Airflow orquestra o fluxo com DAGs que incluem trigger_rule='all_success' e retry_exponential_backoff=True. PostgreSQL armazena dados brutos e transformados com colunas CDC (updated_at, deleted_at, _extract_ts). Data lineage rastreia a origem dos dados.",
  },
  {
    slug: "datawarehouse-api-pipeline",
    title: "API → Data Warehouse Pipeline",
    shortDescription:
      "Pipeline ETL completo que extrai dados de APIs externas, transforma e carrega em Data Warehouse PostgreSQL com esquema estrela.",
    description:
      "Pipeline ETL completo que extrai dados de APIs externas (CoinGecko, Open Library), transforma e carrega em um Data Warehouse PostgreSQL com esquema estrela (staging, dimensões, fatos), orquestrado por Apache Airflow em containers Podman.",
    problem:
      "A necessidade de automatizar a coleta de dados de APIs externas (CoinGecko, Open Library) e armazená-los em um repositório estruturado para análise.",
    solution:
      "Pipeline automatizado com Apache Airflow orquestrando a extração via Python, transformação dos dados e carga no PostgreSQL Data Warehouse com modelagem estrela.",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "REST APIs", "ETL", "Data Warehouse", "Podman", "CoinGecko API", "Open Library API"],
    category: ["Data Engineering", "Data Warehouse", "ETL", "API"],
    featured: true,
    github: "https://github.com/DrkCde15/DataWarehouse",
    demo: "",
    architecture: {
      title: "Arquitetura Star Schema",
      description: "Data Warehouse com modelagem dimensional estrela completa.",
      steps: [
        "Camada Staging: Dados brutos das APIs (CoinGecko, Open Library)",
        "Camada Dimensão: dim_coins, dim_date, dim_entities",
        "Camada Fato: fact_coin_daily com métricas de mercado",
        "Camada Analytics: Views de agregação e resumos",
        "Camada Metadata: Controle ETL e lineage",
      ],
    },
    challenges: [
      { title: "Paginação de APIs", description: "Implementar tratamento de paginação múltiplos tipos (offset, page, cursor, link)." },
      { title: "Upsert de Dados", description: "Garantir idempotência com conflict_columns para evitar duplicatas." },
      { title: "Múltiplas Fontes", description: "Orquestrar DAGs diferentes para cada fonte de dados com parâmetros dinâmicos." },
    ],
    results: [
      { label: "Fontes de dados", value: "2 APIs" },
      { label: "Tabelas staging", value: "5" },
      { label: "Testes", value: "42" },
    ],
    pipeline: {
      title: "Pipeline de Extração e Carga",
      steps: [
        { name: "API Call", description: "Requisição à API com paginação" },
        { name: "Transform", description: "Limpeza, normalização e modelagem estrela" },
        { name: "Load", description: "Inserção em PostgreSQL com upsert" },
        { name: "Analytics", description: "Views de agregação e relatórios" },
      ],
    },
    implementation:
      "Pipeline desenvolvido em Python com clientes API genéricos e loaders específicos para cada fonte. Apache Airflow gerencia DAGs com parâmetros dinâmicos para endpoints, paginação e tabelas-alvo.",
  },
  {
    slug: "dag-manager",
    title: "DAG Manager",
    shortDescription:
      "Dashboard full-stack para monitorar e gerenciar DAGs em múltiplas instâncias Apache Airflow simultaneamente.",
    description:
      "Dashboard full-stack (FastAPI + Streamlit) para monitorar e gerenciar DAGs em múltiplas instâncias Apache Airflow simultaneamente, com sincronização automática, autenticação por sessão e deploy via Docker/Podman.",
    problem:
      "A necessidade de monitorar e gerenciar DAGs em múltiplas instâncias Apache Airflow (locais e remotas) a partir de um único painel unificado.",
    solution:
      "Implementação de dashboard full-stack com FastAPI como backend e Streamlit como frontend, permitindo monitoramento multi-instância, trigger de DAGs, visualização de logs e health checks.",
    technologies: ["Python", "FastAPI", "Streamlit", "Apache Airflow", "SQLite", "PostgreSQL", "Docker", "Podman", "SQLAlchemy"],
    category: ["Data Engineering", "Airflow", "Dashboard", "Cloud"],
    featured: false,
    github: "https://github.com/DrkCde15/DAG-Manager",
    demo: "",
    architecture: {
      title: "Arquitetura Multi-Instância",
      description: "Dashboard com backend FastAPI e frontend Streamlit para gerenciamento consolidado.",
      steps: [
        "FastAPI Backend: REST API para gerenciar instâncias e DAGs",
        "Streamlit Frontend: Dashboard interativo para visualização",
        "SQLite: Banco de dados local para configurações",
        "Airflow Integration: Conexão com instâncias locais e remotas",
        "Auto-Sync: Sincronização automática a cada 5 minutos",
      ],
    },
    challenges: [
      { title: "Multi-Instância", description: "Suportar conexões simultâneas com diferentes instâncias Airflow (locais e HTTPS)." },
      { title: "Autenticação", description: "Implementar session auth compatível com Airflow 2.10+ (CSRF)." },
    ],
    results: [
      { label: "Instâncias suportadas", value: "N simultâneas" },
      { label: "API endpoints", value: "15+" },
      { label: "Sync interval", value: "5 min" },
    ],
    pipeline: {
      title: "Pipeline de Monitoramento",
      steps: [
        { name: "Instance Config", description: "Registro de instâncias Airflow" },
        { name: "Auto-Sync", description: "Busca DAGs a cada 5 minutos" },
        { name: "Dashboard", description: "Métricas consolidadas em Streamlit" },
        { name: "Trigger", description: "Execução de DAGs pelo dashboard" },
        { name: "Logs", description: "Visualização de logs de execução" },
      ],
    },
    implementation:
      "Desenvolvido em Python com FastAPI e SQLAlchemy async. Backend expõe 15+ endpoints REST para CRUD de instâncias, listagem de DAGs, triggers e recuperação de logs. Frontend Streamlit oferece dashboard consolidado com health checks. Compatível com Airflow 2.9+ e 2.10+.",
  },
  {
    slug: "datareport-engine-etfs-b3",
    title: "DataReport ETFs B3",
    shortDescription:
      "Relatório automatizado de cotações de ETFs da B3 com ELT, Data Lake, quality checks e geração de PDF.",
    description:
      "Gere relatórios automatizados de cotações de ETFs da B3. Extrai dados via API (brapi.dev) ou offline, valida qualidade, calcula métricas financeiras e gera relatórios PDF profissionais com Data Lake (ELT).",
    problem:
      "A necessidade de monitorar cotações de ETFs da B3, validar qualidade dos dados e gerar relatórios financeiros automatizados sem intervenção manual.",
    solution:
      "Sistema ELT com CLI que extrai dados de ETFs via API ou modo offline, armazena em Data Lake com Parquet, aplica quality checks e gera relatórios PDF com gráficos e KPIs.",
    technologies: ["Python", "Pandas", "PyArrow", "Matplotlib", "ReportLab", "Click", "PyYAML", "Data Lake", "Parquet", "Data Quality", "B3 API"],
    category: ["Data Analysis", "ETL", "Data Quality", "Financial Data"],
    featured: false,
    github: "https://github.com/DrkCde15/datareport-engine-etfs-B3",
    demo: "",
    architecture: {
      title: "Arquitetura ELT",
      description: "Pipeline Extract → Load → Transform com Data Lake.",
      steps: [
        "Extract: API B3 ou dados estáticos offline (31 ETFs)",
        "Load: Armazenamento em Data Lake com arquivos Parquet",
        "Transform: Quality checks, KPIs e análise financeira",
        "Visualize: Gráficos de performance e volume",
        "Report: Geração de PDF profissional com ReportLab",
      ],
    },
    challenges: [
      { title: "Data Quality Scoring", description: "Implementar score de qualidade com dimensões ponderadas (completeness, validity, uniqueness, consistency)." },
      { title: "Modo Offline", description: "Garantir funcionamento sem API com dados estáticos de referência e fallback automático." },
    ],
    results: [
      { label: "ETFs monitorados", value: "31" },
      { label: "Categorias", value: "5" },
      { label: "Quality dimensions", value: "4" },
    ],
    pipeline: {
      title: "Pipeline ELT de ETFs",
      steps: [
        { name: "Extract", description: "Coleta via API B3 ou dados offline" },
        { name: "Load", description: "Armazenamento em Data Lake (Parquet)" },
        { name: "Transform", description: "Quality checks e cálculo de KPIs" },
        { name: "Report", description: "Geração de PDF com gráficos" },
      ],
    },
    implementation:
      "Implementado como ferramenta CLI em Python com Click. Utiliza brapi.dev para dados de cotação ou dados estáticos para modo offline. Data Lake armazena dados em Parquet organizados por data. Quality checks verificam nulos, duplicatas, schema e validade. Relatório final renderizado com ReportLab.",
  },
  {
    slug: "pyspark-data-pipeline",
    title: "PySpark Data Pipeline",
    shortDescription:
      "Pipeline de transformação de dados em larga escala utilizando PySpark.",
    description:
      "Pipeline de processamento de dados em escala utilizando PySpark para transformações complexas em grandes volumes de dados.",
    problem:
      "A necessidade de processar grandes volumes de dados que excedem a capacidade de processamento de um único nó, exigindo processamento distribuído.",
    solution:
      "Implementação de pipeline de dados com PySpark para processamento distribuído, permitindo transformações eficientes em grandes conjuntos de dados.",
    technologies: ["Python", "PySpark", "Data Transformation"],
    category: ["Data Engineering", "Big Data"],
    featured: false,
    github: "",
    demo: "",
    architecture: {
      title: "Arquitetura PySpark",
      description: "Arquitetura de processamento distribuído com PySpark.",
      steps: [
        "Ingestão de dados em formato distribuído",
        "Transformações com DataFrames PySpark",
        "Persistência dos resultados em camada de destino",
      ],
    },
    challenges: [{ title: "Otimização de Performance", description: "Ajustar particionamento e caching para maximizar a performance do cluster." }],
    results: [{ label: "Volume processado", value: "TB-scale" }, { label: "Tempo de processamento", value: "Otimizado" }],
    pipeline: {
      title: "Pipeline PySpark",
      steps: [
        { name: "Read", description: "Leitura de dados em formato distribuído" },
        { name: "Transform", description: "Aplicação de transformações com PySpark" },
        { name: "Write", description: "Persistência dos resultados" },
      ],
    },
    implementation:
      "Pipeline desenvolvido com PySpark utilizando DataFrames e Spark SQL para transformações em larga escala. Configuração de cluster para processamento distribuído com otimização de partições e cache.",
  },
  {
    slug: "databricks-lakehouse",
    title: "Databricks Lakehouse",
    shortDescription:
      "Lakehouse corporativo com arquitetura medallion utilizando Databricks e PySpark.",
    description:
      "Implementação de arquitetura Lakehouse em Databricks seguindo o padrão medallion (bronze, silver, gold) com PySpark e SQL para processamento e análise de dados.",
    problem:
      "Necessidade de unificar os benefícios de Data Lakes e Data Warehouses em uma única plataforma, com capacidade de processar dados brutos e estruturados.",
    solution:
      "Implementação de Lakehouse na plataforma Databricks com arquitetura medallion, utilizando PySpark para processamento e SQL para análises na camada de apresentação.",
    technologies: ["Databricks", "PySpark", "SQL", "Lakehouse", "Medallion Architecture"],
    category: ["Data Engineering", "Data Warehouse", "Cloud"],
    featured: false,
    github: "",
    demo: "",
    architecture: {
      title: "Arquitetura Medallion",
      description: "Arquitetura em camadas com separação progressiva da qualidade dos dados.",
      steps: [
        "Camada Bronze: Dados brutos sem transformação",
        "Camada Silver: Dados limpos e validados",
        "Camada Gold: Dados agregados e prontos para consumo",
      ],
    },
    challenges: [
      { title: "Qualidade Progressiva", description: "Garantir que cada camada aplique as regras de qualidade adequadas." },
      { title: "Performance de Queries", description: "Otimizar queries na camada gold para análises rápidas." },
    ],
    results: [{ label: "Camadas de dados", value: "3 níveis" }, { label: "Tempo de query", value: "< 1s" }],
    pipeline: {
      title: "Pipeline Lakehouse",
      steps: [
        { name: "Bronze", description: "Ingestão de dados brutos" },
        { name: "Silver", description: "Limpeza e validação" },
        { name: "Gold", description: "Agregação e modelagem para análise" },
      ],
    },
    implementation:
      "Implementado na plataforma Databricks com notebooks PySpark para processamento das camadas bronze e silver. A camada gold utiliza SQL para criação de views e tabelas agregadas. A arquitetura segue o padrão medallion com Delta Lake para controle de versionamento.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allCategories = ["All", "Data Engineering", "Data Warehouse", "ETL", "Data Analysis", "Big Data", "Cloud", "Scraping", "API", "Dashboard", "Financial Data"];
