// ===== SHARED ANIMATION JS =====
// FasTrack Japanese Language Centre
// Developed by Foisal - Copyright 2026

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if(window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if(!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  }
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  // Observe all animatable elements
  const animElements = document.querySelectorAll(
    '.feature-card, .course-card, .culture-card, .team-card, .info-card, .achievement-item'
  );
  
  animElements.forEach((el, i) => {
    el.classList.add('hidden');
    el.style.transitionDelay = `${i * 0.1}s`;
    observer.observe(el);
  });
});

// ===== PARTICLES GENERATION =====
function generateParticles() {
  const container = document.getElementById('particles');
  if(!container) return;
  
  for(let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 6 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 10;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      background: hsla(${Math.random()*60+340}, 80%, 60%, ${Math.random()*0.4+0.1});
      box-shadow: 0 0 ${size*3}px hsla(${Math.random()*60+340}, 80%, 60%, 0.5);
    `;
    
    container.appendChild(particle);
  }
}

// ===== CURSOR EFFECT =====
function initCursor() {
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(220,20,60,0.8);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease, width 0.3s ease, height 0.3s ease, background 0.3s ease;
    box-shadow: 0 0 10px rgba(220,20,60,0.5);
  `;
  
  const cursorDot = document.createElement('div');
  cursorDot.style.cssText = `
    position: fixed;
    width: 5px;
    height: 5px;
    background: rgba(220,20,60,1);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.05s ease;
    box-shadow: 0 0 8px rgba(220,20,60,0.8);
  `;
  
  document.body.appendChild(cursor);
  document.body.appendChild(cursorDot);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  
  document.addEventListener('mousedown', () => {
    cursor.style.width = '35px';
    cursor.style.height = '35px';
    cursor.style.background = 'rgba(220,20,60,0.15)';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.background = 'transparent';
  });
  
  // Hide default cursor
  document.body.style.cursor = 'none';
  
  const links = document.querySelectorAll('a, button');
  links.forEach(link => {
    link.style.cursor = 'none';
    link.addEventListener('mouseenter', () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.background = 'rgba(220,20,60,0.1)';
      cursor.style.borderColor = 'rgba(255,215,0,0.8)';
    });
    link.addEventListener('mouseleave', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.background = 'transparent';
      cursor.style.borderColor = 'rgba(220,20,60,0.8)';
    });
  });
}

// ===== SMOOTH SCROLL =====
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== LOADING ANIMATION =====
function showLoader() {
  const loader = document.createElement('div');
  loader.id = 'pageLoader';
  loader.innerHTML = `
    <div style="
      position:fixed; inset:0; 
      background:#050010; 
      z-index:99999; 
      display:flex; 
      flex-direction:column;
      align-items:center; 
      justify-content:center;
      gap:20px;
    ">
      <div style="
        font-size:3rem;
        color:#dc143c;
        text-shadow:0 0 30px #dc143c;
        animation:pulse 1s ease infinite;
      ">⛩️</div>
      <div style="
        font-family:'Noto Sans JP',sans-serif;
        color:white;
        font-size:1.5rem;
        font-weight:700;
      ">FasTrack Japanese</div>
      <div style="
        color:rgba(255,255,255,0.5);
        font-size:0.9rem;
        letter-spacing:3px;
      ">読み込み中...</div>
      <div style="
        width:200px;
        height:3px;
        background:rgba(255,255,255,0.1);
        border-radius:5px;
        overflow:hidden;
      ">
        <div id="loaderBar" style="
          height:100%;
          width:0;
          background:linear-gradient(90deg,#dc143c,#ff4500);
          border-radius:5px;
          transition:width 0.1s ease;
          box-shadow:0 0 10px rgba(220,20,60,0.8);
        "></div>
      </div>
    </div>
  `;
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0%,100% { transform:scale(1) rotate(0deg); }
      50% { transform:scale(1.2) rotate(10deg); }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(loader);
  
  let progress = 0;
  const bar = document.getElementById('loaderBar');
  const interval = setInterval(() => {
    progress += Math.random() * 20;
    if(progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => loader.remove(), 500);
      }, 300);
    }
    if(bar) bar.style.width = progress + '%';
  }, 80);
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', () => {
  generateParticles();
  smoothScroll();
  
  // Only show cursor effect on desktop
  if(window.innerWidth > 768) {
    initCursor();
  }
  
  // Scroll indicator hide on scroll
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if(scrollIndicator) {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 200) {
        scrollIndicator.style.opacity = '0';
      } else {
        scrollIndicator.style.opacity = '0.7';
      }
    });
  }
});

// Show loader
showLoader();

console.log(`
╔═══════════════════════════════════╗
║   FasTrack Japanese Language      ║
║   Centre - 5D Animated Website    ║
╠═══════════════════════════════════╣
║   Developed by: Foisal            ║
║   Copyright: 2026                 ║
║   Location: Rajshahi, BD          ║
╚═══════════════════════════════════╝
`);
