/**
 * Categorias de produtos exibidas na seção "Produtos".
 *
 * Para editar: altere, remova ou adicione itens nesta lista.
 * - image: caminho a partir da pasta /public (ex.: '/images/minha-foto.webp')
 * - message: texto enviado no WhatsApp ao clicar em "Consultar"
 */
export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Enquadramento opcional da foto (CSS object-position), ex.: 'center 30%'. */
  imagePosition?: string;
  message?: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'parafusos',
    name: 'Parafusos',
    description: 'Diversos tipos, cabeças e medidas para madeira, metal e montagem de móveis.',
    image: '/images/parafusos.webp',
    imageAlt: 'Parafusos metálicos de rosca soberba em close',
  },
  {
    id: 'porcas-arruelas',
    name: 'Porcas e Arruelas',
    description: 'Complementos essenciais para uma fixação firme, segura e bem acabada.',
    image: '/images/porcas-arruelas.webp',
    imageAlt: 'Porcas sextavadas e parafusos de aço',
  },
  {
    id: 'fixadores',
    name: 'Fixadores',
    description: 'Soluções de fixação para diferentes materiais, cargas e aplicações.',
    image: '/images/fixadores.webp',
    imageAlt: 'Variedade de fixadores e parafusos sobre superfície clara',
  },
  {
    id: 'ferragens',
    name: 'Ferragens',
    description: 'Ferragens para móveis e acabamentos que unem função e durabilidade.',
    image: '/images/ferragens.webp',
    imageAlt: 'Puxadores metálicos pretos instalados em portas de móvel',
    imagePosition: 'center 35%',
  },
  {
    id: 'ferramentas',
    name: 'Ferramentas e Acessórios',
    description: 'Ferramentas e acessórios para montagem, instalação e manutenção.',
    image: '/images/ferramentas.webp',
    imageAlt: 'Alicates e ferramentas manuais organizados em suporte',
  },
];
