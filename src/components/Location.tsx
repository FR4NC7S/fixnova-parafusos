import { site, whatsappLink } from '../config/site';
import { Icon } from './ui/Icon';
import { SectionHeading } from './ui/SectionHeading';
import './Location.css';

export function Location() {
  const { address, phone, hours } = site;

  return (
    <section id="localizacao" className="section location" aria-labelledby="localizacao-title">
      <div className="container">
        <SectionHeading
          id="localizacao-title"
          eyebrow="Localização e contato"
          title={
            <>
              Venha até a <span className="text-orange">Fixnova</span>
            </>
          }
          text="Estamos no Centro de Nova Serrana. Visite a loja ou fale com a nossa equipe."
        />

        <div className="location__grid">
          <div id="contato" className="location__card" data-reveal>
            <h3 className="location__name">{site.name}</h3>

            <ul className="location__info">
              <li>
                <span className="location__icon" aria-hidden="true">
                  <Icon name="pin" />
                </span>
                <div>
                  <span className="location__label">Endereço</span>
                  <address>
                    {address.street}
                    <br />
                    {address.district}, {address.city} – {address.state}
                    <br />
                    CEP {address.zip}
                  </address>
                </div>
              </li>
              <li>
                <span className="location__icon" aria-hidden="true">
                  <Icon name="phone" />
                </span>
                <div>
                  <span className="location__label">Telefone</span>
                  <a href={phone.href} className="location__link">
                    {phone.display}
                  </a>
                </div>
              </li>
              <li>
                <span className="location__icon" aria-hidden="true">
                  <Icon name="clock" />
                </span>
                <div>
                  <span className="location__label">Horário de atendimento</span>
                  <p>
                    {hours.days}, das {hours.time}
                  </p>
                </div>
              </li>
            </ul>

            <div className="location__actions">
              <a className="btn btn--primary" href={site.maps.openUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" size={18} />
                Abrir localização
              </a>
              <a className="btn btn--ghost" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} />
                WhatsApp
              </a>
              <a className="btn btn--ghost" href={phone.href}>
                <Icon name="phone" size={18} />
                Ligar
              </a>
            </div>
          </div>

          <div className="location__map" data-reveal data-reveal-delay="120">
            <iframe
              title={`Mapa: ${site.name} – ${site.fullAddress}`}
              src={site.maps.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
