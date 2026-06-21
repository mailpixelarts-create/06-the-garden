import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initSectionAnimations = () => {
  gsap.utils.toArray('.reveal').forEach((element: any) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  gsap.utils.toArray('.botanical-story__image-card').forEach((card: any, i: number) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        rotation: i % 2 === 0 ? -3 : 3,
      },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  gsap.utils.toArray('.seasonal-drinks__card').forEach((card: any, i: number) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  gsap.utils.toArray('.garden-gallery__item').forEach((item: any, i: number) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: i * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
};

export const initParallaxAnimations = () => {
  gsap.utils.toArray('[data-parallax]').forEach((element: any) => {
    const speed = element.dataset.parallax || 0.2;
    gsap.to(element, {
      y: () => -ScrollTrigger.maxScroll(window) * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });
};
