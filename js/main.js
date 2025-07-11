// Main application module
const App = (() => {
  // DOM Elements
  const DOM = {
    // Navigation
    hamburger: document.querySelector('.hamburger'),
    navMenu: document.querySelector('.nav-menu'),
    navLinks: document.querySelectorAll('.nav-link'),
    
    // Sections
    sections: document.querySelectorAll('section'),
    
    // Theme toggle
    themeToggle: document.querySelector('.theme-toggle'),
    html: document.documentElement,
    
    // Loader
    loader: document.querySelector('.loader'),
    
    // Contact form
    contactForm: document.getElementById('contactForm'),
    
    // Scroll to top button (will be created dynamically)
  };

  // State
  const state = {
    currentTheme: localStorage.getItem('theme') || 'light',
    lastScrollPosition: 0,
    services: [
      {
        icon: 'fas fa-paint-brush',
        title: 'Design Gráfico',
        description: 'Criação de identidade visual, logos, materiais impressos e digitais que comunicam sua marca de forma única.'
      },
      {
        icon: 'fas fa-code',
        title: 'Desenvolvimento Web',
        description: 'Sites e sistemas web responsivos, otimizados e com as melhores tecnologias do mercado.'
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Aplicativos Mobile',
        description: 'Desenvolvimento de apps nativos e híbridos para iOS e Android com excelente experiência do usuário.'
      },
      {
        icon: 'fas fa-desktop',
        title: 'Sistemas Desktop',
        description: 'Soluções personalizadas para Windows, macOS e Linux que atendem às necessidades do seu negócio.'
      },
      {
        icon: 'fas fa-search-dollar',
        title: 'SEO & Marketing',
        description: 'Aumente sua visibilidade online com nossas estratégias de marketing digital e otimização para buscadores.'
      },
      {
        icon: 'fas fa-server',
        title: 'Hospedagem & Cloud',
        description: 'Soluções de hospedagem e infraestrutura em nuvem para manter seu projeto sempre online e seguro.'
      }
    ],
    portfolioItems: [
      {
        image: 'https://source.unsplash.com/random/600x400/?webdesign,1',
        title: 'Site Corporativo',
        category: 'web',
        client: 'Empresa X'
      },
      {
        image: 'https://source.unsplash.com/random/600x400/?app,1',
        title: 'App de Delivery',
        category: 'mobile',
        client: 'Restaurante Y'
      },
      {
        image: 'https://source.unsplash.com/random/600x400/?branding,1',
        title: 'Identidade Visual',
        category: 'design',
        client: 'Startup Z'
      },
      {
        image: 'https://source.unsplash.com/random/600x400/?software,1',
        title: 'Sistema ERP',
        category: 'desktop',
        client: 'Indústria A'
      },
      {
        image: 'https://source.unsplash.com/random/600x400/?webdesign,2',
        title: 'Loja Virtual',
        category: 'web',
        client: 'Comércio B'
      },
      {
        image: 'https://source.unsplash.com/random/600x400/?app,2',
        title: 'App Fitness',
        category: 'mobile',
        client: 'Academia C'
      }
    ],
    testimonials: [
      {
        quote: "A CreativeDev transformou nossa presença online. Nosso site agora converte muito mais e reflete perfeitamente nossa marca.",
        name: "Carlos Silva",
        role: "CEO, Empresa X",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        quote: "O aplicativo desenvolvido superou nossas expectativas. A equipe foi profissional e entregou antes do prazo!",
        name: "Ana Oliveira",
        role: "Diretora, Startup Y",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        quote: "Trabalhamos com várias agências antes, mas a CreativeDev foi a única que realmente entendeu nossa visão.",
        name: "Roberto Santos",
        role: "Gerente, Comércio Z",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
      }
    ],
    contactInfo: [
      {
        icon: 'fas fa-map-marker-alt',
        title: 'Endereço',
        content: 'Av. Paulista, 1000<br>São Paulo - SP, 01310-000'
      },
      {
        icon: 'fas fa-phone-alt',
        title: 'Telefone',
        content: '<a href="tel:+5511999999999">(11) 99999-9999</a>'
      },
      {
        icon: 'fas fa-envelope',
        title: 'Email',
        content: '<a href="mailto:contato@creativedev.com.br">contato@creativedev.com.br</a>'
      },
      {
        icon: 'fas fa-clock',
        title: 'Horário',
        content: 'Seg-Sex: 9h às 18h<br>Sáb: 9h às 13h'
      }
    ]
  };

  // Methods
  const methods = {
    // Initialize the app
    init() {
      // Set initial theme
      methods.setTheme(state.currentTheme);
      
      // Initialize components
      methods.initNav();
      methods.initScroll();
      methods.initThemeToggle();
      methods.initServices();
      methods.initPortfolio();
      methods.initTestimonials();
      methods.initContact();
      methods.initFooter();
      methods.initLoader();
      methods.initCurrentYear();
      methods.initScrollToTop();
      
      // Initialize animations
      methods.initAnimations();
      
      console.log('App initialized');
    },
    
    // Navigation
    initNav() {
      // Hamburger menu toggle
      DOM.hamburger.addEventListener('click', () => {
        DOM.hamburger.classList.toggle('active');
        DOM.navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
      });
      
      // Close menu when clicking on a link
      DOM.navLinks.forEach(link => {
        link.addEventListener('click', () => {
          DOM.hamburger.classList.remove('active');
          DOM.navMenu.classList.remove('active');
          document.body.classList.remove('no-scroll');
        });
      });
      
      // Highlight active nav link on scroll
      window.addEventListener('scroll', methods.highlightNavLink);
    },
    
    highlightNavLink() {
      let current = '';
      
      DOM.sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
        }
      });
      
      DOM.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    },
    
    // Smooth scrolling
    initScroll() {
      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
    },
    
    // Theme toggle
    initThemeToggle() {
      DOM.themeToggle.addEventListener('click', () => {
        const newTheme = state.currentTheme === 'light' ? 'dark' : 'light';
        methods.setTheme(newTheme);
      });
    },
    
    setTheme(theme) {
      state.currentTheme = theme;
      DOM.html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      
      // Update toggle button state
      const moonIcon = DOM.themeToggle.querySelector('.fa-moon');
      const sunIcon = DOM.themeToggle.querySelector('.fa-sun');
      
      if (theme === 'dark') {
        moonIcon.style.opacity = '0';
        sunIcon.style.opacity = '1';
      } else {
        moonIcon.style.opacity = '1';
        sunIcon.style.opacity = '0';
      }
    },
    
    // Services section
    initServices() {
      const servicesGrid = document.querySelector('.services-grid');
      
      if (!servicesGrid) return;
      
      servicesGrid.innerHTML = state.services.map(service => `
        <div class="service-card" role="listitem">
          <div class="service-icon">
            <i class="${service.icon}" aria-hidden="true"></i>
          </div>
          <div class="service-content">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          </div>
        </div>
      `).join('');
    },
    
    // Portfolio section
    initPortfolio() {
      const portfolioGrid = document.querySelector('.portfolio-grid');
      const filterButtons = document.querySelectorAll('.filter-btn');
      
      if (!portfolioGrid) return;
      
      // Render all portfolio items initially
      methods.renderPortfolioItems('all');
      
      // Filter buttons functionality
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          // Update aria-selected
          filterButtons.forEach(btn => btn.setAttribute('aria-selected', 'false'));
          button.setAttribute('aria-selected', 'true');
          
          // Filter items
          const filter = button.dataset.filter;
          methods.renderPortfolioItems(filter);
        });
      });
    },
    
    renderPortfolioItems(filter) {
      const portfolioGrid = document.querySelector('.portfolio-grid');
      let itemsToRender = state.portfolioItems;
      
      if (filter !== 'all') {
        itemsToRender = state.portfolioItems.filter(item => item.category === filter);
      }
      
      portfolioGrid.innerHTML = itemsToRender.map(item => `
        <div class="portfolio-item" data-category="${item.category}" role="listitem">
          <img src="${item.image}" alt="${item.title}" class="portfolio-img" loading="lazy">
          <div class="portfolio-overlay">
            <h3 class="portfolio-title">${item.title}</h3>
            <p class="portfolio-category">${item.client}</p>
          </div>
        </div>
      `).join('');
    },
    
    // Testimonials section
    initTestimonials() {
      const testimonialsContainer = document.querySelector('.testimonials-carousel');
      
      if (!testimonialsContainer) return;
      
      testimonialsContainer.innerHTML = state.testimonials.map(testimonial => `
        <div class="testimonial" role="listitem">
          <div class="quote-icon">
            <i class="fas fa-quote-left" aria-hidden="true"></i>
          </div>
          <div class="testimonial-content">
            <p>"${testimonial.quote}"</p>
            <div class="testimonial-author">
              <img src="${testimonial.image}" alt="${testimonial.name}" loading="lazy">
              <div>
                <h4>${testimonial.name}</h4>
                <p>${testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    },
    
    // Contact section
    initContact() {
      const contactInfoContainer = document.querySelector('.contact-info');
      
      if (!contactInfoContainer) return;
      
      // Render contact info
      contactInfoContainer.innerHTML = state.contactInfo.map(info => `
        <div class="contact-item" role="listitem">
          <div class="contact-icon">
            <i class="${info.icon}" aria-hidden="true"></i>
          </div>
          <div class="contact-text">
            <h4>${info.title}</h4>
            <p>${info.content}</p>
          </div>
        </div>
      `).join('');
      
      // Form submission
      if (DOM.contactForm) {
        DOM.contactForm.addEventListener('submit', methods.handleFormSubmit);
      }
    },
    
    handleFormSubmit(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(DOM.contactForm);
      const data = Object.fromEntries(formData);
      
      // Simple validation
      if (!data.name || !data.email || !data.message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Show success message
      alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
      
      // Reset form
      DOM.contactForm.reset();
    },
    
    // Footer
    initFooter() {
      const footerGrid = document.querySelector('.footer-grid');
      
      if (!footerGrid) return;
      
      footerGrid.innerHTML = `
        <div class="footer-col">
          <h4>CreativeDev</h4>
          <p>Transformando ideias em soluções digitais inovadoras desde 2018.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Links Rápidos</h4>
          <ul class="footer-links" role="list">
            <li><a href="#home">Início</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Serviços</h4>
          <ul class="footer-links" role="list">
            <li><a href="#">Design Gráfico</a></li>
            <li><a href="#">Desenvolvimento Web</a></li>
            <li><a href="#">Aplicativos Mobile</a></li>
            <li><a href="#">Sistemas Desktop</a></li>
            <li><a href="#">Marketing Digital</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>Assine nossa newsletter para receber atualizações.</p>
          <form class="newsletter-form">
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Seu email" required>
            </div>
            <button type="submit" class="btn btn-primary">Assinar</button>
          </form>
        </div>
      `;
    },
    
    // Loader
    initLoader() {
      // Simulate loading (in a real app, you'd wait for all assets to load)
      setTimeout(() => {
        DOM.loader.classList.add('loaded');
        
        // Remove loader from DOM after animation completes
        setTimeout(() => {
          DOM.loader.remove();
        }, 500);
      }, 1500);
    },
    
    // Current year in footer
    initCurrentYear() {
      const yearElement = document.getElementById('currentYear');
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
      }
    },
    
    // Scroll to top button
    initScrollToTop() {
      // Create button
      const scrollToTopBtn = document.createElement('button');
      scrollToTopBtn.className = 'scroll-to-top';
      scrollToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
      scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
      document.body.appendChild(scrollToTopBtn);
      
      // Show/hide based on scroll position
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.classList.add('show');
        } else {
          scrollToTopBtn.classList.remove('show');
        }
      });
      
      // Scroll to top on click
      scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    },
    
    // Animations
    initAnimations() {
      // Intersection Observer for scroll animations
      const observerOptions = {
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      // Observe elements with animation classes
      document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right').forEach(el => {
        observer.observe(el);
      });
    }
  };

  // Public API
  return {
    init: methods.init
  };
})();

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', App.init);

// Fallback for older browsers (loaded via nomodule attribute)
window.initApp = App.init;