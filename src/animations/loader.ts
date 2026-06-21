import gsap from 'gsap';

export const initLoaderAnimations = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    '.loader__seed',
    { scale: 0, rotation: -45, opacity: 0 },
    { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
  )
    .fromTo(
      '.seed-stem',
      { strokeDashoffset: 30 },
      { strokeDashoffset: 0, duration: 0.8, ease: 'power2.out' },
      '+=0.2'
    )
    .fromTo(
      '.stem-path',
      { strokeDashoffset: 200 },
      { strokeDashoffset: 0, duration: 1, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(
      '.branch-path',
      { strokeDashoffset: 200 },
      {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
      },
      '-=0.6'
    )
    .fromTo(
      '.leaf',
      { scale: 0, rotation: -90, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.15,
      },
      '-=0.3'
    )
    .fromTo(
      '.loader__logo',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.2'
    )
    .fromTo(
      '.loader__progress-bar',
      { width: '0%' },
      { width: '100%', duration: 2, ease: 'power1.inOut' },
      0
    );

  return tl;
};

export const animateLoaderExit = (onComplete: () => void) => {
  const tl = gsap.timeline({
    onComplete,
  });

  tl.to('.loader__logo', {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: 'power2.in',
  })
    .to(
      '.loader__leaves',
      {
        scale: 0,
        rotation: 90,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
      },
      '-=0.2'
    )
    .to(
      '.loader__stem',
      {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      },
      '-=0.2'
    )
    .to(
      '.loader__seed',
      {
        scale: 0,
        rotation: 45,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      },
      '-=0.1'
    )
    .to('.loader', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
    });

  return tl;
};
