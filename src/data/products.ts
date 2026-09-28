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
    id: 'ferramentas',
    name: 'Ferramentas e Acessórios',
    description: 'Ferramentas manuais e acessórios para montagem, instalação, marcenaria e manutenção.',
    image: '/images/ferramentas.webp',
    imageAlt: 'Parede de ferramentas na loja Fixnova',
  },
  {
    id: 'ferragens',
    name: 'Ferragens para Móveis',
    description: 'Puxadores, suportes e ferragens que unem função, acabamento e durabilidade ao móvel.',
    image: '/images/ferragens.webp',
    imageAlt: 'Mostruário de ferragens na loja Fixnova',
  },
  {
    id: 'parafusos',
    name: 'Parafusos',
    description: 'Diversos tipos, cabeças e medidas para madeira, metal e montagem de móveis.',
    image: '/images/parafusos.webp',
    imageAlt: 'Nichos de parafusos na loja Fixnova',
  },
  {
    id: 'fixadores',
    name: 'Fixadores',
    description: 'Soluções de fixação para diferentes materiais, cargas e aplicações.',
    image: '/images/fixadores.webp',
    imageAlt: 'Variedade de fixadores e parafusos sobre superfície clara',
  },
  {
    id: 'porcas-arruelas',
    name: 'Porcas e Arruelas',
    description: 'Complementos essenciais para uma montagem firme, segura e bem acabada.',
    image: '/images/porcas-arruelas.webp',
    imageAlt: 'Porcas sextavadas e parafusos de aço',
  },
];
