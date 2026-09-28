/**
 * Dados institucionais da Fixnova.
 * Tudo que aparece no site (telefone, endereço, horários, redes) sai daqui.
 */

const address = {
  street: 'Rua Cel. Martinho Ferreira do Amaral, 339',
  district: 'Centro',
  city: 'Nova Serrana',
  state: 'MG',
  zip: '35520-122',
};

const fullAddress = `${address.street} - ${address.district}, ${address.city} - ${address.state}, ${address.zip}`;

export const site = {
  name: 'Fixnova Parafusos',
  tagline: 'Ferramentas e ferragens para móveis',
  address,
  fullAddress,

  phone: {
    display: '(37) 3225-0177',
    href: 'tel:+553732250177',
  },

  /**
   * Número usado no botão flutuante e nos botões "Consultar".
   * Formato: DDI + DDD + número, só dígitos.
   * ATENÇÃO: confirme se este é o número do WhatsApp da loja.
   */
  whatsappNumber: '553732250177',

  hours: {
    days: 'Segunda a sexta',
    time: '07:00 às 18:00',
  },

  instagram: {
    handle: '@fixnovaparafusos',
    url: 'https://www.instagram.com/fixnovaparafusos/',
  },

  maps: {
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(`Fixnova Parafusos, ${fullAddress}`)}&output=embed`,
    openUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
  },
} as const;

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
] as const;

/** Monta o link do WhatsApp com mensagem pronta. */
export function whatsappLink(message = 'Olá! Vim pelo site e gostaria de falar com a Fixnova.'): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
