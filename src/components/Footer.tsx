import logo from '../assets/logo-fixnova-negativo.png';
import { nav, site } from '../config/site';
import { Icon } from './ui/Icon';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#inicio" aria-label="Fixnova Parafusos – voltar ao início">
            <img src={logo} alt="Fixnova Parafusos" width={989} height={240} loading="lazy" />
          </a>
          <p>Parafusos, fixadores, ferragens e ferramentas em Nova Serrana – MG.</p>
          <a className="footer__social" href={site.instagram.url} target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" size={20} />
            {site.instagram.handle}
          </a>
        </div>

        <nav className="footer__col" aria-label="Links rápidos">
          <h2 className="footer__title">Links rápidos</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__title">Contato</h2>
          <ul className="footer__contact">
            <li>
              <Icon name="phone" size={18} />
              <a href={site.phone.href}>{site.phone.display}</a>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <a href={site.maps.openUrl} target="_blank" rel="noopener noreferrer">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} – {site.address.state}
                <br />
                CEP {site.address.zip}
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__title">Horário de atendimento</h2>
          <ul className="footer__contact">
            <li>
              <Icon name="clock" size={18} />
              <span>
                {site.hours.days}
                <br />
                {site.hours.time}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>{site.fullAddress}</p>
        </div>
      </div>
    </footer>
  );
}
