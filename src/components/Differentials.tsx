import { differentials } from '../data/content';
import { Icon } from './ui/Icon';
import { SectionHeading } from './ui/SectionHeading';
import './Differentials.css';

export function Differentials() {
  return (
    <section className="section differentials" aria-labelledby="diferenciais-title">
      <div className="container">
        <SectionHeading
          id="diferenciais-title"
          eyebrow="Por que a Fixnova"
          title={
            <>
              Mais que produtos, <span className="text-orange">a solução certa</span>
            </>
          }
          align="center"
        />

        <ul className="differentials__grid">
          {differentials.map((d, i) => (
            <li key={d.title} className="diff-card" data-reveal data-reveal-delay={String(i * 90)}>
              <div className="diff-card__icon" aria-hidden="true">
                <Icon name={d.icon} size={26} />
              </div>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
