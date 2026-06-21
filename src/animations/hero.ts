import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function createHeroAnimation() {
  const tl = gsap.timeline();

  // Glass roof SVG lines draw in
  tl.fromTo('.hero__roof-line', {
    strokeDashoffset: 2000,
  }, {
    strokeDashoffset: 0,
    duration: 2,
    ease: 'power2.inOut',
    stagger: 0.3,
  });

  // Light rays fade in and sway
  tl.fromTo('.hero__ray', {
    opacity: 0,
    scaleY: 0,
  }, {
    opacity: 0.6,
    scaleY: 1,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.2,
    transformOrigin: 'top center',
  }, '-=1.5');

  // Leaves drift in from scattered positions
  tl.fromTo('.hero__leaf', {
    opacity: 0,
    y: -40,
    rotation: () => gsap.utils.random(-30, 30),
    scale: 0.6,
  }, {
    opacity: 1,
    y: 0,
    rotation: '+=10',
    scale: 1,
    duration: 1.2,
    ease: 'power2.out',
    stagger: {
      each: 0.1,
      from: 'random',
    },
  }, '-=1');

  // Mist layers fade in
  tl.fromTo('.hero__mist-layer', {
    opacity: 0,
  }, {
    opacity: 1,
    duration: 2,
    ease: 'power1.inOut',
    stagger: 0.4,
  }, '-=1.5');

  // Tag line
  tl.fromTo('.hero__tag', {
    opacity: 0,
    y: 20,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=1');

  // Tag lines extend
  tl.fromTo('.hero__tag-line', {
    scaleX: 0,
  }, {
    scaleX: 1,
    duration: 0.6,
    ease: 'power2.out',
  }, '-=0.6');

  // Title lines reveal with clip-path
  tl.fromTo('.hero__title-line', {
    opacity: 0,
    y: 60,
    clipPath: 'inset(0 0 100% 0)',
  }, {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    duration: 1,
    ease: 'power3.out',
    stagger: 0.15,
  }, '-=0.4');

  // Divider leaf spins in
  tl.fromTo('.hero__divider', {
    opacity: 0,
    scale: 0,
    rotation: -180,
  }, {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
  }, '-=0.5');

  // Subtitle
  tl.fromTo('.hero__subtitle', {
    opacity: 0,
    y: 20,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.4');

  // CTA buttons
  tl.fromTo('.hero__actions .hero__btn', {
    opacity: 0,
    y: 20,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.15,
  }, '-=0.3');

  // Scroll indicator
  tl.fromTo('.hero__scroll-indicator', {
    opacity: 0,
  }, {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  }, '-=0.2');

  return tl;
}

export function createHeroParallax() {
  // Content parallax on scroll
  gsap.to('.hero__content', {
    y: -80,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '60% top',
      scrub: 1,
    },
  });

  // Light rays parallax
  gsap.to('.hero__light-rays', {
    y: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });

  // Leaves slower parallax
  gsap.to('.hero__leaves', {
    y: -30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
    },
  });

  // Mist fades out
  gsap.to('.hero__mist', {
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: '30% top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  // Ambient continuous animations
  // Leaf gentle sway
  gsap.utils.toArray<HTMLElement>('.hero__leaf').forEach((leaf, i) => {
    gsap.to(leaf, {
      rotation: `+=${gsap.utils.random(-5, 5)}`,
      y: `+=${gsap.utils.random(-8, 8)}`,
      duration: gsap.utils.random(3, 5),
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: i * 0.2,
    });
  });

  // Light ray subtle sway
  gsap.utils.toArray<HTMLElement>('.hero__ray').forEach((ray, i) => {
    gsap.to(ray, {
      rotation: gsap.utils.random(-2, 2),
      opacity: gsap.utils.random(0.3, 0.7),
      duration: gsap.utils.random(4, 7),
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: i * 1.5,
    });
  });

  // Mist drift
  gsap.utils.toArray<HTMLElement>('.hero__mist-layer').forEach((layer, i) => {
    gsap.to(layer, {
      x: gsap.utils.random(-20, 20),
      duration: gsap.utils.random(8, 12),
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: i * 2,
    });
  });

  // Scroll thumb animation
  gsap.fromTo('.hero__scroll-thumb', {
    top: '-12px',
  }, {
    top: '40px',
    opacity: 0,
    duration: 2.5,
    ease: 'power1.inOut',
    repeat: -1,
  });
}
