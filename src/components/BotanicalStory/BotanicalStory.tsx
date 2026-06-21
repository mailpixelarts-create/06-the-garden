import { useEffect, useRef } from 'react';
import './BotanicalStory.scss';

const BotanicalStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="botanical-story section" id="story">
      <div className="container">
        <div className="botanical-story__header reveal">
          <span className="botanical-story__label">Our Story</span>
          <h2 className="botanical-story__title">
            A sanctuary where<br />
            <span className="gold-accent">nature and craft</span> unite
          </h2>
        </div>

        <div className="botanical-story__grid">
          <div className="botanical-story__stack reveal">
            <div className="botanical-story__image-card botanical-story__image-card--1">
              <div className="botanical-story__image-mask">
                <div className="botanical-story__image" />
              </div>
            </div>
            <div className="botanical-story__image-card botanical-story__image-card--2">
              <div className="botanical-story__image-mask botanical-story__image-mask--organic">
                <div className="botanical-story__image botanical-story__image--alt" />
              </div>
            </div>
          </div>

          <div className="botanical-story__content">
            <div className="botanical-story__quote reveal">
              <svg className="botanical-story__quote-mark" viewBox="0 0 40 30">
                <path d="M0 30V18C0 8 4 2 12 0l2 4c-6 2-8 6-8 12h6v14H0zm26 0V18C26 8 30 2 38 0l2 4c-6 2-8 6-8 12h6v14H26z" fill="currentColor" />
              </svg>
              <p>
                Born from a vision to create a space where the boundaries between indoors
                and outdoors dissolve, THE GARDEN is more than a café — it is a living,
                breathing ecosystem of calm.
              </p>
            </div>

            <div className="botanical-story__text reveal">
              <p>
                Nestled within a restored Victorian glasshouse, every detail has been
                considered — from the rare botanical specimens that canopy our dining
                room to the single-origin beans that travel from forest to cup.
              </p>
            </div>

            <div className="botanical-story__details reveal">
              <div className="botanical-story__detail">
                <span className="botanical-story__detail-number">2019</span>
                <span className="botanical-story__detail-label">Established</span>
              </div>
              <div className="botanical-story__detail">
                <span className="botanical-story__detail-number">47</span>
                <span className="botanical-story__detail-label">Plant Species</span>
              </div>
              <div className="botanical-story__detail">
                <span className="botanical-story__detail-number">12</span>
                <span className="botanical-story__detail-label">Origin Countries</span>
              </div>
            </div>

            <div className="botanical-story__leaf-decoration">
              <svg viewBox="0 0 100 40">
                <path d="M0 20 Q25 5 50 20 Q75 35 100 20" stroke="#7E9879" strokeWidth="1" fill="none" opacity="0.4" />
                <path d="M0 25 Q25 10 50 25 Q75 40 100 25" stroke="#244534" strokeWidth="0.5" fill="none" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotanicalStory;
