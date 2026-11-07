export const companyConfig = {
  name: "RyoTech",
  legalName: "RyoTech Tecnologia LTDA",
  tagline: "Tecnologia que resolve problemas reais.",
  description:
    "A RyoTech é uma empresa de tecnologia especializada em inteligência artificial, automação, análise de dados e desenvolvimento de sites e aplicativos.",
  shortDescription:
    "Inteligência artificial, automação, dados e software sob medida para empresas que querem crescer com eficiência.",
  email: "ryotech08@gmail.com",
  instagram: "https://www.instagram.com/ryote.ch/",
  url: "https://ryotech.com.br",
  location: "Brasil · Atendimento remoto",
  founded: "2024",
};

export const metadataConfig = {
  title: {
    default: "RyoTech | IA, Automação, Dados e Desenvolvimento",
    template: "%s | RyoTech",
  },
  description: companyConfig.description,
  keywords: [
    "RyoTech",
    "inteligência artificial",
    "automação de processos",
    "análise de dados",
    "desenvolvimento de sites",
    "desenvolvimento de aplicativos",
    "consultoria de tecnologia",
    "transformação digital",
  ],
  url: companyConfig.url,
};

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Cases", href: "/cases" },
  { label: "Tecnologias", href: "/tecnologias" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: companyConfig.instagram,
  },
];

export const footerLinks = [
  { label: "Serviços", href: "/servicos" },
  { label: "Cases", href: "/cases" },
  { label: "Sobre", href: "/sobre" },
  { label: "Processo", href: "/processo" },
  { label: "Contato", href: "/contato" },
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Termos de Uso", href: "/termos" },
];
