import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Factory, Droplets, Recycle, FlaskConical, MapPin, Mail, Phone } from 'lucide-react';
import './styles.css';

const siteImage = 'https://ppenvironmental.ie/wp-content/uploads/2020/02/pp-environmental-header-scaled-2000x850.jpg';
const siteAssets = {
  food: 'https://ppenvironmental.ie/wp-content/uploads/2020/02/food-and-drink.svg',
  pharma: 'https://ppenvironmental.ie/wp-content/uploads/2020/02/pharma.svg',
  metal: 'https://ppenvironmental.ie/wp-content/uploads/2020/02/metal.svg',
  compliance: 'https://ppenvironmental.ie/wp-content/uploads/2020/02/compliance.svg',
  csr: 'https://ppenvironmental.ie/wp-content/uploads/2020/02/corporate-responsibility.svg',
  closure: 'https://ppenvironmental.ie/wp-content/uploads/2020/02/site-closure.svg',
};

const services = [
  ['Compliance / licence management', 'Support for companies licensed by the EPA or Local Authority, including reporting, environmental management systems, surveys and licence reviews.', siteAssets.compliance],
  ['Corporate social responsibility', 'Practical support around energy, carbon, waste, plastics and environmental performance.', siteAssets.csr],
  ['Site closure / licence transfer', 'Experienced support through EPA licence transfers, closures, surrender applications and associated environmental issues.', siteAssets.closure],
];

const sectors = [
  { icon: siteAssets.food, title: 'Food, Drink & Milk', text: 'Environmental support for production, processing and wastewater operations.' },
  { icon: siteAssets.pharma, title: 'Pharmaceutical', text: 'Technical support for highly regulated manufacturing environments.' },
  { icon: siteAssets.metal, title: 'Metals', text: 'Environmental management across emissions, drainage, monitoring and compliance.' },
  { icon: Recycle, title: 'Waste', text: 'Support for waste management, resource use and environmental obligations.' },
];

function App() {
  return (
    <div className="site">
      <div className="concept-bar">SPECULATIVE WEBSITE CONCEPT BY DESIGNOVATION — NOT AN OFFICIAL PP ENVIRONMENTAL WEBSITE</div>
      <header className="header">
        <a className="brand" href="#top" aria-label="Peter Pearson Environmental Consultants">
          <img className="brand-logo" style={{ width: '190px', height: 'auto', display: 'block' }} src="/peter-pearson-logo.svg" alt="Peter Pearson Environmental Consultants — To protect and preserve" />
        </a>
        <nav className="nav">
          <a href="#services">Services</a><a href="#sectors">Sectors</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-image" style={{ backgroundImage: `url(${siteImage})` }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="eyebrow">ENVIRONMENTAL CONSULTANCY · WATERFORD · IRELAND</p>
            <h1>Environmental<br/><em>expertise in action.</em></h1>
            <p className="lede">Environmental management assistance for manufacturing companies, EPA and Local Authority licensed facilities across Ireland.</p>
            <a className="button button-light" href="#services">Explore services <ArrowUpRight size={17}/></a>
          </div>
          <div className="hero-caption"><span>PP ENVIRONMENTAL CONSULTANTS</span><span>EST. 2009 · WATERFORD</span></div>
        </section>

        <section className="intro section-grid">
          <div className="section-label">01 / THE CONSULTANCY</div>
          <div className="intro-main">
            <p className="eyebrow">PRACTICAL ENVIRONMENTAL MANAGEMENT</p>
            <h2>Complex requirements.<br/><span>Clear direction.</span></h2>
            <p>PP Environmental Consultants provides specialist environmental management assistance to manufacturing companies and licensed facilities. The consultancy helps organisations navigate complex and changing environmental legislation while identifying practical routes towards better performance in nature, energy, water and waste.</p>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="section-grid">
            <div className="section-label">02 / SERVICES</div>
            <div className="content-wide">
              <div className="section-head"><h2>Environmental<br/><span>management.</span></h2><p>A tighter, more visual presentation of the core services already offered by PP Environmental Consultants.</p></div>
              <div className="service-grid">
                {services.map(([title, text, image], i) => <article className="service-card" key={title}>
                  <div className="service-image"><img src={image} alt="" /></div>
                  <div className="service-number">0{i + 1}</div>
                  <div className="service-copy"><h3>{title}</h3><p>{text}</p></div>
                  <ArrowUpRight className="card-arrow" size={19}/>
                </article>)}
              </div>
            </div>
          </div>
        </section>

        <section id="sectors" className="sectors-section">
          <div className="section-grid">
            <div className="section-label">03 / SECTORS</div>
            <div className="content-wide">
              <div className="section-head"><h2>Built around<br/><span>real operations.</span></h2><p>Experience across the sectors where environmental compliance and operational performance meet.</p></div>
              <div className="sector-grid">
                {sectors.map(({ icon: Icon, title, text }) => <article className="sector-card" key={title}>
                  <div className="sector-icon">{typeof Icon === 'string' ? <img src={Icon} alt="" /> : <Icon size={29} strokeWidth={1.8}/>}</div>
                  <h3>{title}</h3><p>{text}</p>
                </article>)}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience dark-section">
          <div className="experience-image" style={{ backgroundImage: `url(${siteImage})` }}></div>
          <div className="experience-overlay"></div>
          <div className="section-grid experience-inner">
            <div className="section-label">04 / EXPERIENCE</div>
            <div className="experience-copy">
              <p className="eyebrow">ESTABLISHED IN WATERFORD</p>
              <h2>25 years of<br/><span>environmental management.</span></h2>
              <p>Peter Pearson has over 25 years of environmental management experience, including 20 years as an Environmental Consultant and five years as Energy & Environment Manager with Waterford Crystal.</p>
              <div className="experience-meta"><span>2009</span><small>PP Environmental established</small><span>25+</span><small>years environmental management experience</small></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-grid">
          <div className="section-label">05 / CONTACT</div>
          <div className="contact-main"><p className="eyebrow">WATERFORD · IRELAND</p><h2>Let’s talk about<br/><span>your environment.</span></h2><p>For environmental consultancy, compliance and support for complex facilities, get in touch.</p><div className="contact-links"><a href="mailto:peter@ppenvironmental.ie"><Mail size={19}/>peter@ppenvironmental.ie</a><a href="tel:+353872788682"><Phone size={19}/>+353 (0)87 278 8682</a></div></div>
        </section>
      </main>

      <footer className="footer"><div><div className="footer-brand">PP ENVIRONMENTAL <span>CONSULTANTS</span></div><p>Specialist environmental consultancy for industry, licensed facilities and organisations across Ireland.</p></div><div className="footer-right"><span>Speculative concept by Designovation</span><a href="https://designovation.ie/" target="_blank" rel="noreferrer">designovation.ie <ArrowUpRight size={15}/></a></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
