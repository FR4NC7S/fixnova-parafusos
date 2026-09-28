import { whatsappLink } from '../config/site';
import { Hexagon } from './ui/Hexagon';
import { Icon } from './ui/Icon';
import './CtaBand.css';

export function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-band__pattern" aria-hidden="true" />
      <Hexagon className="cta-band__hex cta-band__hex--1" size={340} strokeWidth={1.5} />
      <Hexagon className="cta-band__hex cta-band__hex--2" size={200} strokeWidth={1.5} />

      <div className="container cta-band__inner" data-reveal>
        <div>
          <h2 id="cta-title">Precisando encontrar o produto certo?</h2>
          <p>Entre em contato com a Fixnova e consulte nossa equipe</p>
        </div>
        <a
          className="btn btn--primary btn--lg cta-band__btn"
          href={whatsappLink('Olá! Preciso de ajuda para encontrar um produto.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="whatsapp" size={20} />
          Solicitar atendimento
        </a>
      </div>
    </section>
  );
}
