import { whatsappLink } from '../config/site';
import { productCategories } from '../data/products';
import { Icon } from './ui/Icon';
import { SectionHeading } from './ui/SectionHeading';
import './Products.css';

/** Cards da última linha incompleta ficam mais largos (a grade se adapta a qualquer quantidade). */
function cardSizeClass(index: number, total: number): string {
  const leftover = total % 3;
  if (leftover === 0 || index < total - leftover) return '';
  return leftover === 1 ? 'product-card--full' : 'product-card--wide';
}

export function Products() {
  const total = productCategories.length;
  return (
    <section id="produtos" className="section products" aria-labelledby="produtos-title">
      <div className="container">
        <div className="products__head">
          <SectionHeading
            id="produtos-title"
            eyebrow="Produtos"
            title={
              <>
                Soluções completas em <span className="text-orange">fixação</span>
              </>
            }
          />
          <p className="products__intro" data-reveal data-reveal-delay="100">
            Conheça as principais linhas da Fixnova. Consulte nossa equipe para modelos, medidas e disponibilidade.
          </p>
        </div>

        <ul className="products__grid">
          {productCategories.map((cat, i) => (
            <li
              key={cat.id}
              className={`product-card ${cardSizeClass(i, total)}`}
              data-reveal data-reveal-delay={String((i % 3) * 90)}>
              <div className="product-card__media">
                <img
                  src={cat.image}
                  alt={cat.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  style={cat.imagePosition ? { objectPosition: cat.imagePosition } : undefined}
                />
              </div>
              <div className="product-card__body">
                <span className="product-card__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <a
                  className="product-card__cta"
                  href={whatsappLink(cat.message ?? `Olá! Gostaria de consultar produtos da linha: ${cat.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar ${cat.name}`}
                >
                  Consultar
                  <Icon name="arrow" size={18} />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="products__help" data-reveal>
          <div className="products__help-icon" aria-hidden="true">
            <Icon name="search" size={26} />
          </div>
          <div className="products__help-text">
            <h3>Não encontrou o modelo ou medida que procura?</h3>
            <p>Fale com nossa equipe e consulte a disponibilidade</p>
          </div>
          <a
            className="btn btn--primary"
            href={whatsappLink('Olá! Não encontrei no site o modelo/medida que procuro. Podem me ajudar?')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={20} />
            Consultar disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
