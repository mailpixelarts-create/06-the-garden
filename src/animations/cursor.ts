import gsap from 'gsap';

export const initCursorAnimations = () => {
  const cursor = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor__dot');

  if (!cursor || !cursorDot) return;

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(cursorDot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'power2.out',
    });
  });

  const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
        scale: 1.5,
        borderColor: '#B79A65',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(cursorDot, {
        scale: 1.5,
        backgroundColor: '#B79A65',
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        scale: 1,
        borderColor: '#244534',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(cursorDot, {
        scale: 1,
        backgroundColor: '#244534',
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
};
