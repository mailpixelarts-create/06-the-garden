import { useEffect, useRef, useState } from 'react';
import './Hero.scss';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="hero__fog" />

      <div className="hero__light-rays">
        <div className="hero__light-ray hero__light-ray--1" />
        <div className="hero__light-ray hero__light-ray--2" />
        <div className="hero__light-ray hero__light-ray--3" />
      </div>

      <div className="hero__leaves">
        <svg className="hero__leaf hero__leaf--1" viewBox="0 0 120 160">
          <path d="M60 10 Q90 40 85 90 Q80 130 60 150 Q40 130 35 90 Q30 40 60 10Z" fill="#7E9879" opacity="0.3" />
          <path d="M60 10 Q60 80 60 150" stroke="#244534" strokeWidth="1" fill="none" opacity="0.4" />
        </svg>
        <svg className="hero__leaf hero__leaf--2" viewBox="0 0 120 160">
          <path d="M60 10 Q90 40 85 90 Q80 130 60 150 Q40 130 35 90 Q30 40 60 10Z" fill="#244534" opacity="0.2" />
        </svg>
        <svg className="hero__leaf hero__leaf--3" viewBox="0 0 120 160">
          <path d="M60 10 Q90 40 85 90 Q80 130 60 150 Q40 130 35 90 Q30 40 60 10Z" fill="#B79A65" opacity="0.15" />
        </svg>
      </div>

      <div
        className="hero__content"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * -10}px, ${(mousePos.y - 0.5) * -10}px)`,
        }}
      >
        <div className="hero__tag">
          <span className="hero__tag-line" />
          <span className="hero__tag-text">Luxury Botanical Café</span>
        </div>
        <h1 className="hero__title">
          <span className="hero__title-line">THE</span>
          <span className="hero__title-line hero__title-line--accent">GARDEN</span>
        </h1>
        <p className="hero__subtitle">
          Where architecture, plants, water reflections<br />
          and artisan coffee coexist.
        </p>
        <div className="hero__cta">
          <a href="#menu" className="hero__btn hero__btn--primary">
            Explore Menu
          </a>
          <a href="#story" className="hero__btn hero__btn--secondary">
            Our Story
          </a>
        </div>
      </div>

      <div className="hero__coffee-steam">
        <div
          className="hero__steam steam--1"
          style={{
            transform: `translateX(${(mousePos.x - 0.5) * 20}px)`,
          }}
        />
        <div
          className="hero__steam steam--2"
          style={{
            transform: `translateX(${(mousePos.x - 0.5) * 30}px)`,
          }}
        />
        <div
          className="hero__steam steam--3"
          style={{
            transform: `translateX(${(mousePos.x - 0.5) * 25}px)`,
          }}
        />
      </div>

      <div className="hero__scroll-indicator">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      <div className="hero__glass-roof" />
    </section>
  );
};

export default Hero;
