import { site, whatsappLink } from '../config/site';
import { productCategories } from '../data/products';
import { Hexagon } from './ui/Hexagon';
import { Icon } from './ui/Icon';
import './Hero.css';

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/images/hero-1440.webp"
          srcSet="/images/hero-1080.webp 1080w, /images/hero-1440.webp 1440w"
          sizes="100vw"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      {/* Composição hexagonal inspirada no ícone do logotipo */}
      <div className="hero__hex" aria-hidden="true">
        <Hexagon className="hero__hex-a" size={560} />
        <Hexagon className="hero__hex-b" size={430} />
        <Hexagon className="hero__hex-c" size={150} filled />
        <span className="hero__hex-tick hero__hex-tick--1">M6</span>
        <span className="hero__hex-tick hero__hex-tick--2">M8</span>
        <span className="hero__hex-tick hero__hex-tick--3">M10</span>
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow hero-in" style={{ animationDelay: '0.1s' }}>
          <span className="hero__eyebrow-hex" />
          {site.address.city} – {site.address.state}
        </p>

        <h1 id="hero-title" className="hero__title hero-in" style={{ animationDelay: '0.2s' }}>
          A loja do <span className="text-orange">profissional</span>
          <br />
          serranense
        </h1>

        <p className="hero__text hero-in" style={{ animationDelay: '0.35s' }}>
          Ferramentas, ferragens para móveis, parafusos e fixadores para profissionais, empresas e projetos de
          todos os tamanhos
        </p>

        <div className="hero__actions hero-in" style={{ animationDelay: '0.5s' }}>
          <a
            className="btn btn--primary btn--lg"
            href={whatsappLink('Olá! Vim pelo site e gostaria de solicitar um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={20} />
            Solicitar orçamento
          </a>
          <a className="btn btn--ghost btn--lg" href="#produtos">
            Ver produtos
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>

      <div className="hero__bar hero-in" style={{ animationDelay: '0.7s' }}>
        <div className="container hero__bar-inner">
          <ul className="hero__categories" aria-label="Principais categorias">
            {productCategories.map((c) => (
              <li key={c.id}>{c.name}</li>
            ))}
          </ul>
          <a href="#produtos" className="hero__scroll" aria-label="Rolar para produtos">
            <Icon name="arrowDown" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
