import iconFixnova from '../assets/icone-fixnova.png';
import { site } from '../config/site';
import { instagramPosts } from '../data/content';
import { Icon } from './ui/Icon';
import './Instagram.css';

export function Instagram() {
  return (
    <section className="section instagram" aria-labelledby="instagram-title">
      <div className="container">
        <div className="instagram__head">
          <header className="section-heading" data-reveal>
            <span className="eyebrow">Instagram</span>
            <h2 id="instagram-title">
              Novidades e <span className="text-orange">produtos</span>
            </h2>
            <p>Acompanhe lançamentos, produtos e dicas no nosso perfil.</p>
          </header>

          <a
            className="instagram__handle"
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            data-reveal-delay="100"
          >
            <Icon name="instagram" size={26} />
            <span>{site.instagram.handle}</span>
            <Icon name="external" size={18} />
          </a>
        </div>

        <ul className="instagram__grid">
          {instagramPosts.map((post, i) => (
            <li key={i} data-reveal data-reveal-delay={String((i % 6) * 60)}>
              <a
                className={`insta-tile ${post.image ? '' : 'insta-tile--empty'}`}
                href={post.url ?? site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={post.alt ?? `Ver publicação no Instagram ${site.instagram.handle}`}
              >
                {post.image ? (
                  <img src={post.image} alt={post.alt ?? ''} loading="lazy" decoding="async" />
                ) : (
                  <img className="insta-tile__logo" src={iconFixnova} alt="" loading="lazy" width={435} height={382} />
                )}
                <span className="insta-tile__hover" aria-hidden="true">
                  <Icon name="instagram" size={28} />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="instagram__cta" data-reveal>
          <a className="btn btn--primary" href={site.instagram.url} target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" size={18} />
            Seguir {site.instagram.handle}
          </a>
        </div>
      </div>
    </section>
  );
}
