import { site } from '../config/site';
import { Hexagon } from './ui/Hexagon';
import { Icon } from './ui/Icon';
import './About.css';

const highlights = ['Ferramentas e acessórios', 'Ferragens para móveis', 'Parafusos e fixadores'];

export function About() {
  return (
    <section id="sobre" className="section about" aria-labelledby="sobre-title">
      <div className="container about__inner">
        <div className="about__media" data-reveal>
          <div className="about__frame">
            <img
              src="/images/sobre.webp"
              alt="Fachada da loja Fixnova Parafusos"
              loading="lazy"
              decoding="async"
              width={1000}
              height={1120}
            />
          </div>
          <Hexagon className="about__hex" size={180} />
          <div className="about__badge">
            <Icon name="pin" size={18} />
            <span>
              {site.address.city} – {site.address.state}
            </span>
          </div>
        </div>

        <div className="about__content">
          <header className="section-heading" data-reveal>
            <span className="eyebrow">Sobre a Fixnova</span>
            <h2 id="sobre-title">
              Especialista em ferramentas e <span className="text-orange">ferragens</span>
            </h2>
          </header>

          <div className="about__text" data-reveal data-reveal-delay="100">
            <p>
              A <strong>Fixnova Parafusos</strong> é uma loja especializada em ferramentas e ferragens para móveis em
              Nova Serrana – MG. Reunimos ferramentas, acessórios, ferragens, parafusos, porcas, arruelas e
              fixadores para atender profissionais, empresas e quem busca o produto certo para o seu projeto.
            </p>
            <p>
              Nosso compromisso é oferecer um atendimento próximo e técnico, ajudando cada cliente a encontrar o
              produto adequado para a sua aplicação.
            </p>
          </div>

          <ul className="about__list" data-reveal data-reveal-delay="180">
            {highlights.map((h) => (
              <li key={h}>
                <span className="about__list-hex" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>

          <p className="about__tagline" data-reveal data-reveal-delay="240">
            {site.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
