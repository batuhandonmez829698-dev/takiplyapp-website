// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        
        // Simulate form submission
        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate counters when stats section is visible
            if (entry.target.classList.contains('stats')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .screenshot, .about-content, .contact-info, .sector-card');
    animatedElements.forEach(el => observer.observe(el));
});

// Lazy loading for images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Chat Widget
let isChatOpen = false;
let hasSeenMessage = false;

document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWidget = document.getElementById('chat-widget');
    const chatClose = document.getElementById('chat-close');
    const chatBody = document.getElementById('chat-body');
    
    if (chatToggle && chatWidget && chatClose) {
        // Toggle chat
        chatToggle.addEventListener('click', function() {
            isChatOpen = !isChatOpen;
            chatWidget.classList.toggle('active', isChatOpen);
            
            if (isChatOpen) {
                hasSeenMessage = true;
                chatToggle.querySelector('.chat-badge').style.display = 'none';
                
                // Simulate typing effect
                setTimeout(() => {
                    simulateTyping();
                }, 500);
            }
        });
        
        // Close chat
        chatClose.addEventListener('click', function() {
            isChatOpen = false;
            chatWidget.classList.remove('active');
        });
        
        // Show badge after 3 seconds
        setTimeout(() => {
            if (!hasSeenMessage) {
                chatToggle.querySelector('.chat-badge').style.display = 'flex';
                chatToggle.querySelector('.chat-badge').classList.add('pulse');
            }
        }, 3000);
        
        // Close chat when clicking outside
        document.addEventListener('click', function(e) {
            if (isChatOpen && !chatWidget.contains(e.target) && !chatToggle.contains(e.target)) {
                isChatOpen = false;
                chatWidget.classList.remove('active');
            }
        });
        
        // Keyboard support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isChatOpen) {
                isChatOpen = false;
                chatWidget.classList.remove('active');
            }
        });
        
        // Mobile touch support
        let startY = 0;
        chatBody.addEventListener('touchstart', function(e) {
            startY = e.touches[0].clientY;
        });
        
        chatBody.addEventListener('touchmove', function(e) {
            const currentY = e.touches[0].clientY;
            const diffY = startY - currentY;
            
            if (diffY > 50) {
                // Swipe up - close chat
                isChatOpen = false;
                chatWidget.classList.remove('active');
            }
        });
    }
});

function simulateTyping() {
    const message = "Merhaba! Yakında aktif olacak. Size nasıl yardımcı olabilirim?";
    const messageElement = document.querySelector('.bot-message p');
    
    if (messageElement) {
        messageElement.textContent = '';
        let i = 0;
        
        const typeInterval = setInterval(() => {
            if (i < message.length) {
                messageElement.textContent += message.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }
}

// Sector Modal Functions
const sectorData = {
    'devre-tatil': {
        title: 'Devre Tatil',
        subtitle: 'Satış ekipleri ve rezervasyon yönetimi',
        icon: 'fas fa-plane-departure',
        analysis: 'Devre tatil sektörü, yüksek değerli satışlar ve uzun satış döngüleri ile karakterizedir. Müşteriler genellikle büyük yatırımlar yapmakta ve detaylı bilgi gerektirmektedir.',
        benefits: [
            'Yüksek komisyon oranları',
            'Tekrarlayan müşteri potansiyeli',
            'Sezonsal bonus fırsatları',
            'Uluslararası satış imkanları'
        ],
        challenges: [
            'Uzun satış döngüleri',
            'Yüksek müşteri beklentileri',
            'Sezonsal dalgalanmalar',
            'Rekabetçi fiyatlandırma'
        ],
        solutions: [
            'Müşteri ilişkileri yönetimi',
            'Detaylı ürün bilgisi',
            'Esnek ödeme seçenekleri',
            'Müşteri referansları'
        ]
    },
    'emlak-satis': {
        title: 'Emlak Satış',
        subtitle: 'Gayrimenkul danışmanlığı ve satış yönetimi',
        icon: 'fas fa-home',
        analysis: 'Emlak sektörü, büyük değerli işlemler ve uzun vadeli müşteri ilişkileri gerektirir. Müşteriler genellikle yaşamlarının en büyük yatırımını yapmaktadır.',
        benefits: [
            'Yüksek komisyon gelirleri',
            'Uzun vadeli müşteri ilişkileri',
            'Referans ağı oluşturma',
            'Portföy çeşitlendirme'
        ],
        challenges: [
            'Piyasa dalgalanmaları',
            'Uzun satış süreçleri',
            'Müşteri güveni oluşturma',
            'Rekabetçi ortam'
        ],
        solutions: [
            'Piyasa analizi ve raporlama',
            'Müşteri segmentasyonu',
            'Dijital pazarlama stratejileri',
            'Müşteri referansları'
        ]
    },
    'otomotiv-satis': {
        title: 'Otomotiv Satış',
        subtitle: 'Araç satışı ve finansman çözümleri',
        icon: 'fas fa-car',
        analysis: 'Otomotiv sektörü, hızlı satış döngüleri ve çeşitli finansman seçenekleri ile karakterizedir. Müşteriler hem araç hem de hizmet satın alır.',
        benefits: [
            'Hızlı satış döngüleri',
            'Çeşitli ürün yelpazesi',
            'Finansman gelirleri',
            'Servis hizmetleri'
        ],
        challenges: [
            'Fiyat rekabeti',
            'Stok yönetimi',
            'Müşteri memnuniyeti',
            'Teknoloji değişimleri'
        ],
        solutions: [
            'Stok optimizasyonu',
            'Müşteri segmentasyonu',
            'Finansman çözümleri',
            'Satış sonrası hizmetler'
        ]
    },
    'finansal-hizmetler': {
        title: 'Finansal Hizmetler',
        subtitle: 'Kredi, yatırım ve sigorta ürünleri',
        icon: 'fas fa-chart-line',
        analysis: 'Finansal hizmetler sektörü, karmaşık ürünler ve yüksek güven gerektiren işlemler ile karakterizedir. Müşteriler finansal danışmanlık arar.',
        benefits: [
            'Yüksek değerli ürünler',
            'Tekrarlayan gelirler',
            'Uzun vadeli ilişkiler',
            'Çeşitli ürün yelpazesi'
        ],
        challenges: [
            'Regülasyonlar',
            'Güven oluşturma',
            'Karmaşık ürünler',
            'Rekabetçi ortam'
        ],
        solutions: [
            'Müşteri eğitimi',
            'Risk analizi',
            'Kişiselleştirilmiş çözümler',
            'Sürekli takip'
        ]
    },
    'telekomunikasyon': {
        title: 'Telekomünikasyon',
        subtitle: 'İnternet, telefon ve dijital hizmetler',
        icon: 'fas fa-wifi',
        analysis: 'Telekomünikasyon sektörü, hızlı teknoloji değişimleri ve yüksek müşteri hacmi ile karakterizedir. Müşteriler sürekli hizmet kalitesi arar.',
        benefits: [
            'Yüksek müşteri hacmi',
            'Tekrarlayan gelirler',
            'Çeşitli hizmet paketleri',
            'Dijital dönüşüm fırsatları'
        ],
        challenges: [
            'Teknoloji değişimleri',
            'Müşteri memnuniyeti',
            'Fiyat rekabeti',
            'Altyapı yatırımları'
        ],
        solutions: [
            'Müşteri segmentasyonu',
            'Hizmet kalitesi takibi',
            'Dijital çözümler',
            'Müşteri eğitimi'
        ]
    },
    'b2b-satis': {
        title: 'B2B Satış',
        subtitle: 'Kurumsal müşteri yönetimi ve satış',
        icon: 'fas fa-building',
        analysis: 'B2B satış sektörü, karmaşık karar süreçleri ve uzun vadeli iş ilişkileri gerektirir. Müşteriler genellikle büyük hacimli alımlar yapar.',
        benefits: [
            'Yüksek değerli sözleşmeler',
            'Uzun vadeli ilişkiler',
            'Büyük hacimli satışlar',
            'Stratejik ortaklıklar'
        ],
        challenges: [
            'Uzun karar süreçleri',
            'Çoklu karar vericiler',
            'Karmaşık ihtiyaçlar',
            'Rekabetçi teklifler'
        ],
        solutions: [
            'Müşteri haritalama',
            'İhtiyaç analizi',
            'Değer önerisi geliştirme',
            'İlişki yönetimi'
        ]
    },
    'e-ticaret': {
        title: 'E-ticaret',
        subtitle: 'Online satış ve dijital pazarlama',
        icon: 'fas fa-shopping-cart',
        analysis: 'E-ticaret sektörü, hızlı büyüme ve dijital dönüşüm ile karakterizedir. Müşteriler online deneyim ve hızlı teslimat arar.',
        benefits: [
            'Hızlı büyüme potansiyeli',
            'Düşük operasyon maliyetleri',
            'Geniş müşteri tabanı',
            'Dijital pazarlama fırsatları'
        ],
        challenges: [
            'Dijital rekabet',
            'Müşteri güveni',
            'Lojistik zorlukları',
            'Teknoloji güncellemeleri'
        ],
        solutions: [
            'Dijital pazarlama',
            'Müşteri deneyimi optimizasyonu',
            'Lojistik çözümleri',
            'Veri analizi'
        ]
    },
    'satis-danismanligi': {
        title: 'Satış Danışmanlığı',
        subtitle: 'Satış stratejileri ve ekip yönetimi',
        icon: 'fas fa-users',
        analysis: 'Satış danışmanlığı sektörü, stratejik düşünce ve ekip yönetimi becerileri gerektirir. Müşteriler satış performansını artırmak ister.',
        benefits: [
            'Yüksek danışmanlık ücretleri',
            'Çeşitli sektör deneyimi',
            'Stratejik düşünce',
            'Ekip geliştirme'
        ],
        challenges: [
            'Müşteri beklentileri',
            'Sürekli öğrenme',
            'Performans ölçümü',
            'Rekabetçi ortam'
        ],
        solutions: [
            'Satış metodolojileri',
            'Ekip eğitimi',
            'Performans takibi',
            'Müşteri referansları'
        ]
    }
};

function openSectorModal(sectorId) {
    console.log('openSectorModal called with:', sectorId);
    const sector = sectorData[sectorId];
    console.log('Sector found:', sector);
    if (!sector) {
        console.log('Sector not found!');
        return;
    }
    
    // Update modal content
    document.getElementById('modal-icon').className = sector.icon;
    document.getElementById('modal-title').textContent = sector.title;
    document.getElementById('modal-subtitle').textContent = sector.subtitle;
    document.getElementById('modal-analysis').textContent = sector.analysis;
    
    // Update benefits
    const benefitsList = document.getElementById('modal-benefits');
    benefitsList.innerHTML = '';
    sector.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });
    
    // Update challenges
    const challengesList = document.getElementById('modal-challenges');
    challengesList.innerHTML = '';
    sector.challenges.forEach(challenge => {
        const li = document.createElement('li');
        li.textContent = challenge;
        challengesList.appendChild(li);
    });
    
    // Update solutions
    const solutionsList = document.getElementById('modal-solutions');
    solutionsList.innerHTML = '';
    sector.solutions.forEach(solution => {
        const li = document.createElement('li');
        li.textContent = solution;
        solutionsList.appendChild(li);
    });
    
    // Show modal
    document.getElementById('sector-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSectorModal() {
    document.getElementById('sector-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('sector-modal');
    if (e.target === modal) {
        closeSectorModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSectorModal();
    }
});

// Make functions global
window.openSectorModal = openSectorModal;
window.closeSectorModal = closeSectorModal;