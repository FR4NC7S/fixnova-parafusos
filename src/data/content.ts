import type { IconName } from '../components/ui/Icon';

/** Diferenciais (seção "Por que a Fixnova"). */
export const differentials: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'grid',
    title: 'Variedade de produtos',
    text: 'Parafusos, fixadores, ferragens e ferramentas reunidos em um só lugar.',
  },
  {
    icon: 'chat',
    title: 'Atendimento especializado',
    text: 'Orientação para encontrar a peça, o modelo e a medida adequados ao seu projeto.',
  },
  {
    icon: 'layers',
    title: 'Soluções para diferentes aplicações',
    text: 'Opções para móveis, manutenção, montagem e projetos de diferentes portes.',
  },
  {
    icon: 'pin',
    title: 'Atendimento local em Nova Serrana',
    text: 'Loja física no Centro, com atendimento próximo para profissionais e empresas.',
  },
];

/**
 * Mosaico da seção "Instagram".
 * Para usar fotos reais dos posts: coloque as imagens em /public/images/instagram/,
 * troque "image" pelo caminho da foto e preencha "url" com o link do post.
 * Itens sem imagem ({}) aparecem como bloco com o ícone da Fixnova.
 */
export interface InstagramPost {
  image?: string;
  alt?: string;
  url?: string;
}

export const instagramPosts: InstagramPost[] = [
  { image: '/images/parafusos.webp', alt: 'Parafusos' },
  {},
  { image: '/images/ferragens.webp', alt: 'Ferragens para móveis' },
  { image: '/images/porcas-arruelas.webp', alt: 'Porcas e parafusos' },
  {},
  { image: '/images/ferramentas.webp', alt: 'Ferramentas' },
];
