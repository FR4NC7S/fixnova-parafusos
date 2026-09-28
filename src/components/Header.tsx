import { useEffect, useState } from 'react';
import logo from '../assets/logo-fixnova-negativo.png';
import { nav, whatsappLink } from '../config/site';
import { Icon } from './ui/Icon';
import './Header.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Com o menu mobile aberto: trava a rolagem, fecha com Esc e ao voltar para tela larga
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const desktop = window.matchMedia('(min-width: 921px)');
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'header--solid' : ''} ${open ? 'header--open' : ''}`}>
        <div className="container header__inner">
          <a href="#inicio" className="header__logo" onClick={close} aria-label="Fixnova Parafusos – início">
            <img src={logo} alt="Fixnova Parafusos" width={989} height={240} />
          </a>

          <nav className="header__nav" aria-label="Menu principal">
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            className="btn btn--primary btn--sm header__cta"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={18} />
            Falar com a Fixnova
          </a>

          <button
            type="button"
            className="header__toggle"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={26} />
          </button>
        </div>
      </header>

      {/* Fica fora do <header>: o backdrop-filter do header limitaria um filho com position: fixed */}
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Menu mobile">
          <ul>
            {nav.map((item, i) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  <span className="mobile-menu__index">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="btn btn--primary btn--block"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          <Icon name="whatsapp" size={20} />
          Falar com a Fixnova
        </a>
      </div>
    </>
  );
}
