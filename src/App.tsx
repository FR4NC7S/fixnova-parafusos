import { About } from './components/About';
import { CtaBand } from './components/CtaBand';
import { Differentials } from './components/Differentials';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Instagram } from './components/Instagram';
import { Location } from './components/Location';
import { Products } from './components/Products';
import { WhatsAppButton } from './components/WhatsAppButton';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Products />
        <About />
        <Differentials />
        <CtaBand />
        <Location />
        <Instagram />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
