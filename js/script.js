// Dados dinâmicos
const servicesData = [
    {
        icon: 'fas fa-palette',
        title: 'Design Gráfico',
        description: 'Criação de identidade visual, logos, banners, materiais impressos e ilustrações digitais personalizadas.'
    },
    {
        icon: 'fas fa-code',
        title: 'Desenvolvimento Web',
        description: 'Sites responsivos, landing pages, e-commerces e sistemas web sob medida para seu negócio.'
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Apps Mobile',
        description: 'Aplicativos Android nativos ou híbridos com design intuitivo e alta performance.'
    },
    {
        icon: 'fas fa-desktop',
        title: 'Sistemas Desktop',
        description: 'Soluções personalizadas para Windows e Linux que automatizam e otimizam seus processos.'
    },
    {
        icon: 'fas fa-search',
        title: 'SEO',
        description: 'Otimização para mecanismos de busca para aumentar sua visibilidade online.'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Marketing Digital',
        description: 'Estratégias digitais para aumentar sua presença online e atrair mais clientes.'
    }
];

const portfolioData = [
    {
        title: 'Identidade Visual - Restaurante',
        category: 'design',
        image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        title: 'Site Institucional - Clínica',
        category: 'web',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        title: 'App de Delivery',
        category: 'mobile',
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        title: 'Sistema de Gestão',
        category: 'desktop',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        title: 'Redesign de Marca',
        category: 'design',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
    },
    {
        title: 'Loja Virtual',
        category: 'web',
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
];

const testimonialsData = [
    {
        quote: 'A CreativeDev transformou a nossa empresa, dando uma identidade que nos diferência no mercado.',
        author: 'Geraldo Catamassa',
        position: 'AgroPec'
    },
    {
        quote: 'A CreativeDev transformou nossa presença online com um site incrível, medou a forma como nós apresentamos para nossos clientes nesse mundo diginal.',
        author: 'Zaida Premogy',
        position: 'Sócia Gerente e Consultora Sênior, ZAVA Consultoria'
    }
];

const contactInfo = [
    {
        icon: 'fas fa-map-marker-alt',
        title: 'Endereço',
        content: 'Av. Eduardo Mondlane, Nampula'
    },
    {
        icon: 'fas fa-phone-alt',
        title: 'Telefone',
        content: '84 028 6033  &  84 693 5587'
    },
    {
        icon: 'fas fa-envelope',
        title: 'Email',
        content: ''
    },
    {
        icon: 'fas fa-clock',
        title: 'Horário',
        content: 'Seg-Sex: 9h às 18h'
    }
];

const footerData = {
    about: "Especializada em design gráfico e desenvolvimento de software, a CreativeDev transforma ideias em soluções digitais impactantes.",
    services: [
        'Design Gráfico',
        'Desenvolvimento Web',
        'Aplicativos Mobile',
        'Sistemas Desktop',
        'SEO',
        'Marketing Digital'
    ],
    links: [
        { text: 'Início', href: '#home' },
        { text: 'Serviços', href: '#services' },
        { text: 'Portfólio', href: '#portfolio' },
        { text: 'Sobre', href: '#about' },
        { text: 'Contato', href: '#contact' }
    ]
};

// Gerar conteúdo dinâmico
document.addEventListener('DOMContentLoaded', () => {
    // Gerar serviços
    const servicesGrid = document.querySelector('.services-grid');
    servicesData.forEach(service => {
        servicesGrid.innerHTML += `
            <div class="service-card fade-in">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <div class="service-content">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            </div>
        `;
    });

    // Gerar portfólio
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioData.forEach(item => {
        portfolioGrid.innerHTML += `
            <div class="portfolio-item fade-in" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}" class="portfolio-img">
                <div class="portfolio-overlay">
                    <h3 class="portfolio-title">${item.title}</h3>
                    <span class="portfolio-category">${getCategoryName(item.category)}</span>
                </div>
            </div>
        `;
    });

    // Gerar depoimentos
    const testimonialsContainer = document.querySelector('.testimonials-container');
    testimonialsData.forEach(testimonial => {
        testimonialsContainer.innerHTML += `
            <div class="testimonial fade-in">
                <div class="testimonial-content">
                    <div class="quote-icon">
                        <i class="fas fa-quote-left"></i>
                    </div>
                    <p>${testimonial.quote}</p>
                </div>
                <div class="testimonial-author">
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.position}</p>
                </div>
            </div>
        `;
    });

    // Gerar contatos
    const contactInfoContainer = document.querySelector('.contact-info');
    contactInfo.forEach(contact => {
        contactInfoContainer.innerHTML += `
            <div class="contact-item fade-in">
                <div class="contact-icon">
                    <i class="${contact.icon}"></i>
                </div>
                <div class="contact-text">
                    <h4>${contact.title}</h4>
                    <p>${contact.content}</p>
                </div>
            </div>
        `;
    });

    // Gerar rodapé
    const footerGrid = document.querySelector('.footer-grid');
    footerGrid.innerHTML = `
        <div class="footer-col">
            <h4>CreativeDev</h4>
            <p>${footerData.about}</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
        
        <div class="footer-col">
            <h4>Serviços</h4>
            <ul class="footer-links">
                ${footerData.services.map(service => `<li><a href="#services">${service}</a></li>`).join('')}
            </ul>
        </div>
        
        <div class="footer-col">
            <h4>Links Rápidos</h4>
            <ul class="footer-links">
                ${footerData.links.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
            </ul>
        </div>
        
        <div class="footer-col">
            <h4>Newsletter</h4>
            <p>Assine para receber nossas novidades e dicas.</p>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Seu Email" required>
                </div>
                <button type="submit" class="btn">Assinar</button>
            </form>
        </div>
    `;

    // Atualizar ano no rodapé
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.innerHTML = navMenu.classList.contains('active') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Filtros do portfólio
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe active apenas ao botão clicado
            button.classList.add('active');

            const filter = button.dataset.filter;

            // Filtra os itens do portfólio
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }

    // Observer para animações
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// Helper function
function getCategoryName(category) {
    const categories = {
        'design': 'Design Gráfico',
        'web': 'Desenvolvimento Web',
        'mobile': 'Aplicativo Mobile',
        'desktop': 'Sistema Desktop'
    };
    return categories[category] || category;
}