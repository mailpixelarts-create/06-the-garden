import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initGalleryAnimations = () => {
  const gallery = document.querySelector('.garden-gallery__masonry');
  if (!gallery) return;

  gsap.utils.toArray('.garden-gallery__item').forEach((item: any, i: number) => {
    gsap.fromTo(
      item,
      {
        clipPath: 'circle(0% at 50% 50%)',
      },
      {
        clipPath: 'circle(100% at 50% 50%)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  gsap.utils.toArray('.garden-gallery__image').forEach((image: any) => {
    gsap.to(image, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: image.closest('.garden-gallery__item'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });

  gsap.utils.toArray('.garden-gallery__light-leak').forEach((leak: any) => {
    gsap.fromTo(
      leak,
      { opacity: 0, x: -50 },
      {
        opacity: 0.3,
        x: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: leak.closest('.garden-gallery__item'),
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
};
