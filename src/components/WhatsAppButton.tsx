import { useEffect, useState } from 'react';
import { whatsappLink } from '../config/site';
import { Icon } from './ui/Icon';
import './WhatsAppButton.css';

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      className={`whatsapp-fab ${visible ? 'whatsapp-fab--visible' : ''}`}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Fixnova pelo WhatsApp"
    >
      <Icon name="whatsapp" size={30} />
      <span className="whatsapp-fab__label">Fale Conosco</span>
    </a>
  );
}
