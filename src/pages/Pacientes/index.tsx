import { useEffect } from 'react';
import './index.css';
import QuoteCard from '../../components/ui/QuoteCard';
import { WhatsAppIcon } from '../../components/ui/svg/WhatsAppIcon';

export default function PacientesPage() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nav = document.getElementById('mainNav');
    const handleScroll = () => {
      if (window.scrollY > 40) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get('nome');
    const tel = formData.get('tel');
    const email = formData.get('email');
    const servico = formData.get('servico');
    const msg = formData.get('msg');

    const texto = `Olá! Vim pelo site da Claramente 🌿
      *Nome:* ${nome}
      *Telefone:* ${tel || 'não informado'}
      *E-mail:* ${email}
      *Serviço:* ${servico || 'não especificado'}
      *Mensagem:* ${msg || 'sem mensagem'}`
    ;

    const url = `https://wa.me/+5511982829179?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen w-full min-w-screen overflow-x-hidden bg-white text-[#2D1B4E]">
      {/* Navbar */}
      <nav 
        id="mainNav"
        className="fixed top-0 left-0 right-0 z-100 px-6 md:px-10 py-4 md:py-5 flex items-center justify-between transition-all duration-400"
      >
        <a href="/" className="claramente-font text-white text-2xl tracking-[0.06em]">
          Claramente
        </a>
        <ul className="hidden lg:flex nav-links gap-9 items-center">
          <li><a href="#sobre" className="nav-link">Sobre</a></li>
          <li><a href="#servicos" className="nav-link">Serviços</a></li>
          <li><a href="#abordagem" className="nav-link">Abordagem</a></li>
          <li><a href="#depoimentos" className="nav-link">Depoimentos</a></li>
          <li>
            <a href="#contato" className="nav-cta">
              Agendar Consulta
            </a>
          </li>
        </ul>
        <div className="hamburger lg:hidden flex flex-col gap-1 cursor-pointer" id="hamburger">
          <span className="w-6 h-0.5 bg-white rounded"></span>
          <span className="w-6 h-0.5 bg-white rounded"></span>
          <span className="w-6 h-0.5 bg-white rounded"></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero w-screen min-w-screen min-h-screen bg-gradient-to-br from-[#3D2470] via-[#6B4FA0] to-[#A08BC8] relative overflow-hidden flex items-center pt-24 pb-12 px-6 md:px-10 lg:pt-32 lg:pb-16">
        <div className="hero-bg-circles absolute inset-0 pointer-events-none hidden lg:block">
          <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[rgba(120,191,160,0.18)] to-transparent"></div>
          <div className="absolute bottom-[-120px] left-[-60px] w-[600px] h-[600px] rounded-full bg-gradient-to-t from-[rgba(255,255,255,0.06)] to-transparent"></div>
        </div>

        <div className="w-full flex items-center justify-center relative z-10">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Content */}
            <div className="text-white max-w-xl mx-auto lg:mx-0">
              <div className="hero-eyebrow inline-flex items-center justify-center lg:justify-start gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-semibold text-sm tracking-[0.35em] uppercase mb-6">
                Clínica de Psicologia — Itaquaquecetuba
              </div>

              <div className="sm:hidden mt-8 mb-10">
                <div className="hero-card-float relative mx-auto w-full max-w-[260px] px-4 py-4">
                  <div className="absolute top-3 right-3 hero-card-badge text-[0.65rem] px-2 py-1">
                    Disponível
                  </div>
                  <div className="hero-card-icon mx-auto">
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="hero-card-title text-center text-[1.2rem] leading-tight mb-2 whitespace-nowrap sm:whitespace-normal">Cuide da sua mente hoje</div>
                  <div className="hero-card-sub text-center text-[0.9rem]">
                    Um primeiro passo pode mudar tudo. Agende sua consulta e comece sua jornada.
                  </div>
                </div>
              </div>

              <h1 className="hero-title claramente-font text-[2.1rem] sm:text-[2.6rem] md:text-4xl lg:text-[4.75rem] font-light leading-[1.02] mb-6 text-center lg:text-start whitespace-nowrap sm:whitespace-normal max-w-full overflow-hidden text-ellipsis">
                Um espaço para cuidar da sua saúde <em className="italic text-[#A8D8C4]">mental</em>
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-start font-light text-white/80 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Atendimento humanizado, acolhedor e profissional. Aqui você encontra um lugar seguro para se reconectar consigo mesmo e florescer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-center justify-center lg:justify-start mb-10">
                <a 
                  href="https://wa.me/+5511982829179" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto justify-center"
                >
                  <i className="h-5 w-5">
                    <WhatsAppIcon fill='currentcolor'/>
                  </i>
                  Agendar pelo WhatsApp
                </a>
                <a href="#servicos" className="btn-outline w-full sm:w-auto text-center">
                  Ver serviços
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                <div className="rounded-3xl bg-white/10 p-4 text-center">
                  <div className="claramente-font text-3xl font-semibold text-[#A8D8C4]">+5</div>
                  <div className="text-xs text-white/75 font-light mt-2 leading-5">Anos de<br />experiência</div>
                </div>
                <div className="rounded-3xl bg-white/10 p-4 text-center">
                  <div className="claramente-font text-3xl font-semibold text-[#A8D8C4]">+300</div>
                  <div className="text-xs text-white/75 font-light mt-2 leading-5">Pacientes<br />atendidos</div>
                </div>
                <div className="rounded-3xl bg-white/10 p-4 text-center">
                  <div className="claramente-font text-3xl font-semibold text-[#A8D8C4]">100%</div>
                  <div className="text-xs text-white/75 font-light mt-2 leading-5">Atendimento<br />humanizado</div>
                </div>
              </div>
            </div>

            {/* Hero Card Desktop */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="hero-card-float relative">
                <div className="absolute top-5 right-5 hero-card-badge">
                  Disponível
                </div>
                <div className="hero-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="hero-card-title">Cuide da sua<br />mente hoje</div>
                <div className="hero-card-sub">
                  Um primeiro passo pode mudar tudo. Agende sua consulta e comece sua jornada.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-6 md:px-10 bg-[#F7F4FA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Visual - Placeholder */}
            <div className="fade-up hidden lg:block">
              <div className="about-img-wrap h-96 rounded-3xl bg-gradient-to-br from-[#A08BC8] to-[#6B4FA0] flex items-center justify-center text-center p-10">
                <div className="text-white/70">
                  <div className="text-4xl mb-4">🧠</div>
                  <div className="claramente-font text-2xl font-light italic">
                    "Clareza para a sua jornada"
                  </div>
                </div>
              </div>
              <div className="about-badge">
                <div className="about-badge-num">CRP</div>
                <div className="about-badge-text">Profissional<br />certificada</div>
              </div>
            </div>

            {/* Text Content */}
            <div className="fade-up">
              <div className="section-eyebrow">Sobre a Clínica</div>
              <h2 className="section-title text-center lg:text-start">
                Um lugar onde você é <em className="italic">bem-vindo</em>
              </h2>
              <p className="section-lead text-center lg:text-start">
                A Claramente é uma clínica de psicologia criada com o propósito de oferecer atendimento humanizado e de qualidade. Acreditamos que cada pessoa tem uma história única e merece ser ouvida com atenção, empatia e respeito.
              </p>
              <p className="section-lead mt-4 text-center lg:text-start">
                Nossa missão é proporcionar um espaço seguro e acolhedor onde você possa se expressar livremente e encontrar o equilíbrio emocional que tanto busca.
              </p>

              {/* Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <div className="value-item text-start">
                  <div className="text-2xl mb-2">🌿</div>
                  <div className="value-title">Acolhimento</div>
                  <div className="value-desc">Cada sessão começa com escuta ativa e sem julgamentos.</div>
                </div>
                <div className="value-item text-start">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="value-title">Ética</div>
                  <div className="value-desc">Sigilo absoluto e conduta profissional em todo atendimento.</div>
                </div>
                <div className="value-item text-start">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="value-title">Personalização</div>
                  <div className="value-desc">Abordagem adaptada às necessidades únicas de cada paciente.</div>
                </div>
                <div className="value-item text-start">
                  <div className="text-2xl mb-2">💜</div>
                  <div className="value-title">Humanização</div>
                  <div className="value-desc">Atendimento que coloca o ser humano sempre em primeiro lugar.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12 mb-16">
            <div>
              <div className="section-eyebrow fade-up">Serviços</div>
              <h2 className="section-title fade-up text-center lg:text-start">O que <em className="italic">oferecemos</em></h2>
            </div>
            <p className="section-lead fade-up max-w-xs lg:max-w-xs text-center lg:text-end mx-auto lg:mx-0">
              Atendimento especializado para diferentes fases e necessidades da vida.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`fade-up service-card ${service.highlight ? 'highlight' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d={service.icon} />
                  </svg>
                </div>
                <h3 className="service-name text-start">{service.name}</h3>
                <p className="service-desc text-start">{service.description}</p>
                <a 
                  href="https://wa.me/551198282179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  Agendar consulta
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="abordagem" className="py-24 px-6 md:px-10 bg-[#F7F4FA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Steps */}
            <div className="fade-up">
              <div className="section-eyebrow">Nossa Abordagem</div>
              <h2 className="section-title text-center lg:text-start">Como funciona o <em className="italic">processo</em></h2>
              <p className="section-lead text-center lg:text-start">Um caminho cuidadoso, respeitoso e adaptado à sua realidade.</p>

              <div className="approach-steps mt-10">
                {steps.map((step, index) => (
                  <div key={index} className="step-item">
                    <div className="step-num">{String(index + 1).padStart(2, '0')}</div>
                    <div>
                      <div className="step-title text-start">{step.title}</div>
                      <p className="step-desc text-start">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Card */}
            <div className="fade-up flex justify-center items-center mt-10 lg:mt-0">
              <div className="fade-up">
                <QuoteCard
                  quote="Não existe um roteiro único para a saúde mental. Cada jornada é construída com cuidado, no tempo certo de cada pessoa."
                  signature="Equipe Claramente"
                  className="quote-card-custom"
                />
                <div className="approach-tag z-100">🌿 Abordagem Humanista</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="section-eyebrow fade-up">Depoimentos</div>
            <h2 className="section-title fade-up text-center lg:text-start">O que nossos pacientes <em className="italic">dizem</em></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="fade-up testimonial-card"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="testimonial-stars mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#78BFA0]">★</span>
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-tag">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band py-24 px-6 md:px-10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="claramente-font text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Pronto para dar o<br />primeiro <em className="italic text-[#A8D8C4]">passo</em>?
          </h2>
          <p className="text-lg font-light text-white/75 mb-10">
            Agendar sua primeira sessão é mais simples do que você imagina. Estamos aqui para receber você com cuidado e atenção.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="https://wa.me/+5511982829179"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sage"
            >
              <i className="h-5 w-5">
                <WhatsAppIcon fill='#ffffff'/>
              </i>
              Falar pelo WhatsApp
            </a>
            <a href="#contato" className="btn-white">
              Enviar mensagem
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-6 md:px-10 bg-[#F7F4FA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="fade-up contact-form">
              <h3 className="claramente-font text-2xl font-light mb-8">Envie uma mensagem</h3>
              <form onSubmit={handleForm} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group text-start">
                    <label htmlFor="nome">Nome</label>
                    <input 
                      type="text" 
                      id="nome"
                      name="nome"
                      placeholder="Seu nome completo" 
                      required 
                    />
                  </div>
                  <div className="form-group text-start">
                    <label htmlFor="tel">Telefone</label>
                    <input 
                      type="tel" 
                      id="tel"
                      name="tel"
                      placeholder="(11) 99999-9999" 
                    />
                  </div>
                </div>

                <div className="form-group text-start">
                  <label htmlFor="email">E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="seu@email.com" 
                    required 
                  />
                </div>

                <div className="form-group text-start">
                  <label htmlFor="servico">Serviço de interesse</label>
                  <select id="servico" name="servico" defaultValue="">
                    <option value="">Selecione um serviço</option>
                    <option>Psicoterapia Individual</option>
                    <option>Terapia de Casal</option>
                    <option>Terapia Infantil</option>
                    <option>Consulta Online</option>
                    <option>Orientação Parental</option>
                    <option>Gestão de Ansiedade</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div className="form-group text-start">
                  <label htmlFor="msg">Mensagem</label>
                  <textarea 
                    id="msg"
                    name="msg"
                    placeholder="Conte um pouco sobre o que está buscando..."
                  ></textarea>
                </div>

                <button type="submit" className="form-submit">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Enviar mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="fade-up contact-info">
              <div className="section-eyebrow">Contato</div>
              <h2 className="section-title text-center lg:text-start">Fale <em className="italic">conosco</em></h2>
              <p className="section-lead text-center lg:text-start">
                Estamos prontos para atender você. Escolha o canal de sua preferência e entre em contato.
              </p>

              <div className="contact-cards mt-10">
                <a 
                  href="https://wa.me/+5511982829179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card whatsapp"
                >
                  <div className="contact-card-icon">
                    <WhatsAppIcon fill="#25D366"/>
                  </div>
                  <div>
                    <div className="contact-card-label text-start">WhatsApp</div>
                    <div className="contact-card-value">(11) 9828-2179</div>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/claramente_itaqua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card instagram"
                >
                  <div className="contact-card-icon">
                    <svg viewBox="0 0 24 24" fill="url(#igGrad)">
                      <defs>
                        <linearGradient id="igGrad" x1="0" y1="1" x2="1" y2="0">
                          <stop offset="0%" stopColor="#f09433" />
                          <stop offset="25%" stopColor="#e6683c" />
                          <stop offset="50%" stopColor="#dc2743" />
                          <stop offset="75%" stopColor="#cc2366" />
                          <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.33.015 7.052.072 3.584.27.271 3.578.072 7.052.015 8.33 0 8.756 0 12s.015 3.67.072 4.948c.198 3.478 3.511 6.79 6.985 6.989 1.278.057 1.704.072 4.948.072s3.67-.015 4.948-.072c3.478-.198 6.79-3.511 6.989-6.985.057-1.278.072-1.704.072-4.948s-.015-3.67-.072-4.948c-.198-3.478-3.511-6.79-6.985-6.989C15.67.015 15.244 0 12 0z" />
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zM18.406 4.595a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-card-label text-start">Instagram</div>
                    <div className="contact-card-value">@claramente_itaqua</div>
                  </div>
                </a>

                <div className="contact-card location" style={{ cursor: 'default' }}>
                  <div className="contact-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#6B4FA0" strokeWidth="1.5">
                      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-card-label text-start">Localização</div>
                    <div className="contact-card-value">Itaquaquecetuba — SP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <div className="wa-float">
        <div className="wa-tooltip">💬 Fale conosco agora!</div>
        <a 
          href="https://wa.me/+5511982829179" 
          target="_blank" 
          rel="noopener noreferrer"
          className="wa-btn"
          aria-label="Abrir WhatsApp"
        >
          <WhatsAppIcon fill="white" />
        </a>
      </div>

    </div>
  );
}

// Data
const services = [
  {
    name: 'Psicoterapia Individual',
    description: 'Atendimento personalizado para adultos, focado em autoconhecimento, saúde emocional e desenvolvimento pessoal. Presencial ou online.',
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
    highlight: false,
  },
  {
    name: 'Terapia de Casal',
    description: 'Um espaço seguro para casais trabalharem a comunicação, resolverem conflitos e fortalecerem os laços afetivos com orientação profissional.',
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.995 5.995 0 10-11.936 0',
    highlight: true,
  },
  {
    name: 'Terapia Infantil',
    description: 'Abordagem lúdica e acolhedora para crianças e adolescentes, trabalhando o desenvolvimento emocional, comportamental e social.',
    icon: 'M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z',
    highlight: false,
  },
  {
    name: 'Consulta Online',
    description: 'Atendimento psicológico pelo computador ou celular, com a mesma qualidade e sigilo do presencial. Agende de onde você estiver.',
    icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3',
    highlight: false,
  },
  {
    name: 'Gestão de Ansiedade',
    description: 'Acompanhamento especializado para transtornos de ansiedade, pânico e estresse, com técnicas baseadas em evidências científicas.',
    icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
    highlight: false,
  },
  {
    name: 'Orientação Parental',
    description: 'Suporte especializado a pais e responsáveis para lidar com desafios do desenvolvimento e fortalecer os vínculos familiares.',
    icon: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0a.75.75 0 100-1.5.75.75 0 000 1.5zM12 15a.75.75 0 100-1.5.75.75 0 000 1.5zm-.75 0a.75.75 0 100-1.5.75.75 0 000 1.5zM17.25 15a.75.75 0 100-1.5.75.75 0 000 1.5z',
    highlight: false,
  },
];

const steps = [
  {
    title: 'Primeiro contato',
    description: 'Entre em contato pelo WhatsApp ou formulário. Vamos agendar uma sessão inicial sem compromisso para conhecer sua história.',
  },
  {
    title: 'Avaliação personalizada',
    description: 'Nas primeiras sessões, fazemos uma escuta profunda para entender suas necessidades e definir os objetivos terapêuticos.',
  },
  {
    title: 'Acompanhamento contínuo',
    description: 'Sessões regulares com técnicas baseadas em evidências, evoluindo no seu ritmo e revisando os objetivos ao longo da jornada.',
  },
  {
    title: 'Transformação e autonomia',
    description: 'O objetivo final é que você desenvolva ferramentas próprias e conquiste o bem-estar emocional de forma duradoura.',
  },
];

const testimonials = [
  {
    text: '"A terapia mudou minha forma de ver a vida. Me sinto muito mais leve e capaz de lidar com os desafios do dia a dia. Recomendo de coração."',
    name: 'Mariana S.',
    service: 'Psicoterapia Individual',
  },
  {
    text: '"Levei minha filha para terapia infantil e foi transformador. Ela se abriu de um jeito que eu não esperava. A profissional é incrível e muito dedicada."',
    name: 'Rodrigo P.',
    service: 'Terapia Infantil',
  },
  {
    text: '"Fizemos terapia de casal e foi essencial para fortalecer nossa relação. Um ambiente super acolhedor e uma profissional muito competente e empática."',
    name: 'Ana & Carlos',
    service: 'Terapia de Casal',
  },
];
