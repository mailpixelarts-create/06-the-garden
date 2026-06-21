import gsap from 'gsap';

export const initHeroAnimations = () => {
  const tl = gsap.timeline({ delay: 3.5 });

  tl.fromTo(
    '.hero__tag',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  )
    .fromTo(
      '.hero__title-line',
      { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0 0 0% 0)',
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      },
      '-=0.4'
    )
    .fromTo(
      '.hero__subtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(
      '.hero__cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(
      '.hero__scroll-indicator',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.2'
    );

  gsap.to('.hero__fog', {
    opacity: 0.6,
    duration: 2,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1,
  });
};

export const initHeroParallax = () => {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const heroRect = hero.getBoundingClientRect();
    if (heroRect.bottom < 0) return;

    gsap.to('.hero__content', {
      y: scrollY * 0.3,
      opacity: 1 - scrollY / 600,
      ease: 'none',
    });

    gsap.to('.hero__light-rays', {
      y: scrollY * 0.2,
      ease: 'none',
    });

    gsap.to('.hero__leaves', {
      y: scrollY * 0.15,
      ease: 'none',
    });
  });
};
