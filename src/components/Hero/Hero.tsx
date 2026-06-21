import { useEffect, useRef } from 'react';
import { createHeroAnimation, createHeroParallax } from '../../animations/hero';
import './Hero.scss';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      createHeroAnimation();
      createHeroParallax();
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__botanical">
        <div className="hero__light-rays">
          <div className="hero__ray hero__ray--1" />
          <div className="hero__ray hero__ray--2" />
          <div className="hero__ray hero__ray--3" />
        </div>

        <div className="hero__leaves">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`hero__leaf hero__leaf--${i + 1}`}>
              <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 5 Q45 20 42 45 Q40 65 30 75 Q20 65 18 45 Q15 20 30 5Z" 
                      className="hero__leaf-shape" />
                <path d="M30 5 Q30 40 30 75" className="hero__leaf-vein" />
              </svg>
            </div>
          ))}
        </div>

        <div className="hero__mist">
          <div className="hero__mist-layer hero__mist-layer--1" />
          <div className="hero__mist-layer hero__mist-layer--2" />
          <div className="hero__mist-layer hero__mist-layer--3" />
        </div>

        <div className="hero__glass-roof">
          <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
            <path d="M0 200 L600 50 L1200 200" className="hero__roof-line" />
            <path d="M0 200 L400 80 L800 200" className="hero__roof-line hero__roof-line--2" />
          </svg>
        </div>
      </div>

      <div className="hero__content">
        <div className="hero__tag">
          <div className="hero__tag-line" />
          <span>Luxury Botanical Café</span>
          <div className="hero__tag-line" />
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">THE</span>
          <span className="hero__title-line hero__title-line--accent">GARDEN</span>
        </h1>

        <div className="hero__divider">
          <div className="hero__divider-leaf">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2 Q18 8 17 14 Q16 18 12 22 Q8 18 7 14 Q6 8 12 2Z" 
                    stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <p className="hero__subtitle">
          Where architecture, plants, water reflections<br />
          and artisan coffee coexist.
        </p>

        <div className="hero__actions">
          <a href="#menu" className="hero__btn hero__btn--primary">
            <span>Explore Menu</span>
          </a>
          <a href="#story" className="hero__btn hero__btn--secondary">
            <span>Our Story</span>
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
      </div>
    </section>
  );
}
