import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Menu, Leaf, Factory, Droplets, Recycle, FlaskConical, MapPin, Mail, Phone } from 'lucide-react';
import './styles.css';

const services = [
  ['Environmental Compliance', 'Practical support for organisations navigating environmental requirements, licensing and ongoing compliance.'],
  ['Environmental Management', 'Clear, commercially focused environmental management for operational sites and complex facilities.'],
  ['Monitoring & Assessment', 'Structured environmental assessment and monitoring to help clients understand risk, impact and performance.'],
  ['Regulatory Support', 'Support for facilities engaging with regulators and local authorities on environmental matters.'],
];

const sectors = [
  { icon: Factory, title: 'Manufacturing', text: 'Environmental support for operational and industrial facilities.' },
  { icon: FlaskConical, title: 'Food & Drink', text: 'Practical environmental input across production and processing environments.' },
  { icon: FlaskConical, title: 'Pharmaceutical', text: 'Technical consultancy for complex, highly regulated sites.' },
  { icon: Recycle, title: 'Waste', text: 'Environmental management for waste and resource-intensive operations.' },
  { icon: Droplets, title: 'Licensed Facilities', text: 'Support for EPA and local-authority licensed facilities.' },
  { icon: MapPin, title: 'Local Authority', text: 'Clear environmental advice aligned with statutory requirements.' },
];

function App() {
  return (
    <div className="site">
      <div className="concept-bar">SPECULATIVE WEBSITE CONCEPT BY DESIGNOVATION — NOT AN OFFICIAL PP ENVIRONMENTAL WEBSITE</div>
      <header className="header">
        <a className="brand" href="#top" aria-label="PP Environmental Consultants">
          <span className="brand-mark"><Leaf size={19} strokeWidth={1.8} /></span>
          <span><strong>PP</strong> ENVIRONMENTAL <small>CONSULTANTS</small></span>
        </a>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#sectors">Sectors</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="menu"><Menu size={23} /></button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">ENVIRONMENTAL CONSULTANCY · WATERFORD</p>
            <h1>Clear thinking for<br/><em>complex environments.</em></h1>
            <p className="lede">Specialist environmental consultancy supporting industry, licensed facilities and organisations across the South East.</p>
            <a className="button" href="#contact">Explore the approach <ArrowUpRight size={17}/></a>
          </div>
          <div className="hero-visual">
            <div className="orb orb-a"></div><div className="orb orb-b"></div>
            <div className="visual-card">
              <span>01 / 04</span>
              <div className="visual-lines"></div>
              <p>ENVIRONMENTAL<br/>PERFORMANCE<br/><strong>BY DESIGN.</strong></p>
            </div>
          </div>
        </section>

        <section className="intro section-grid">
          <div className="section-label">01 / THE STUDIO</div>
          <div className="intro-main">
            <h2>Technical expertise.<br/><span>Practical advice.</span></h2>
            <p>PP Environmental Consultants provides specialist environmental support to businesses operating in demanding, regulated environments. The proposition here is simple: make complex environmental requirements easier to understand, manage and act on.</p>
          </div>
        </section>

        <section id="services" className="dark-section">
          <div className="section-grid">
            <div className="section-label">02 / SERVICES</div>
            <div className="content-wide">
              <div className="section-head"><h2>What we help<br/><span>clients navigate.</span></h2><p>Focused environmental consultancy for businesses where compliance, operations and environmental performance intersect.</p></div>
              <div className="service-grid">
                {services.map(([title, text], i) => <article className="service" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={19}/></article>)}
              </div>
            </div>
          </div>
        </section>

        <section id="sectors" className="section-grid sectors-section">
          <div className="section-label">03 / SECTORS</div>
          <div className="content-wide"><div className="section-head"><h2>Built around<br/><span>real operations.</span></h2><p>Environmental challenges look different from one facility to the next. The experience is shaped around the operational context.</p></div>
          <div className="sector-grid">{sectors.map(({icon: Icon, title, text}) => <article className="sector-card" key={title}><Icon size={27} strokeWidth={1.5}/><h3>{title}</h3><p>{text}</p></article>)}</div></div>
        </section>

        <section id="approach" className="approach dark-section">
          <div className="section-grid">
            <div className="section-label">04 / APPROACH</div>
            <div className="content-wide approach-wrap">
              <div><p className="eyebrow">THE PP APPROACH</p><h2>Understand.<br/>Advise.<br/><span>Act.</span></h2></div>
              <div className="steps">
                <div><span>01</span><h3>Understand the operation</h3><p>Start with the site, the process and the environmental context.</p></div>
                <div><span>02</span><h3>Translate complexity</h3><p>Turn technical and regulatory requirements into clear priorities.</p></div>
                <div><span>03</span><h3>Support confident decisions</h3><p>Give teams practical guidance they can use in the real world.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-grid">
          <div className="section-label">05 / CONTACT</div>
          <div className="contact-main"><p className="eyebrow">WATERFORD · IRELAND</p><h2>Let’s talk about<br/><span>your environment.</span></h2><p>For environmental consultancy, compliance and support for complex facilities, get in touch.</p><div className="contact-links"><a href="mailto:peter@ppenvironmental.ie"><Mail size={19}/>peter@ppenvironmental.ie</a><a href="tel:+353872788682"><Phone size={19}/>+353 (0)87 278 8682</a></div></div>
        </section>
      </main>

      <footer className="footer"><div><div className="footer-brand">PP ENVIRONMENTAL <span>CONSULTANTS</span></div><p>Specialist environmental consultancy for industry, licensed facilities and organisations across the South East.</p></div><div className="footer-right"><span>Speculative concept by Designovation</span><a href="https://designovation.ie/" target="_blank">designovation.ie <ArrowUpRight size={15}/></a></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
