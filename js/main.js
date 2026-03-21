document.addEventListener('DOMContentLoaded', () => {

  // --- Scroll reveal (IntersectionObserver) ---
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));


  // --- Mouse-following gradient ---
  document.querySelectorAll('.mouse-glow').forEach(section => {
    const overlay = section.querySelector('.glow-overlay');
    if (!overlay) return;

    section.addEventListener('mousemove', (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlay.style.background =
        `radial-gradient(600px circle at ${x}px ${y}px, rgba(180, 120, 60, 0.04), transparent 70%)`;
    });
  });


  // --- Parallax (subtle background shift on scroll) ---
  const parallaxSections = document.querySelectorAll('.parallax-bg');

  if (parallaxSections.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      parallaxSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const offset = (scrollY - sectionTop) * 0.15;
        section.style.setProperty('--parallax-y', `${offset}px`);
      });
    }, { passive: true });
  }

});
