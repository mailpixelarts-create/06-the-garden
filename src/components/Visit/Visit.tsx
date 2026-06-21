import { useEffect, useRef, useState } from 'react';
import './Visit.scss';

const Visit = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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
    <section ref={sectionRef} className="visit section" id="visit">
      <div className="container">
        <div className="visit__header reveal">
          <span className="visit__label">Visit Us</span>
          <h2 className="visit__title">
            Find your place<br />
            <span className="gold-accent">in the garden</span>
          </h2>
        </div>

        <div className="visit__content">
          <div className="visit__map-container reveal">
            <div className="visit__map">
              <div className="visit__map-grid">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="visit__map-line" />
                ))}
              </div>
              <div className="visit__map-pin">
                <div className="visit__map-pin-dot" />
                <div className="visit__map-pin-ring" />
                <div className="visit__map-pin-ring visit__map-pin-ring--2" />
              </div>
              <div className="visit__map-label">
                <span>THE GARDEN</span>
                <span>Botanical Café</span>
              </div>
            </div>
          </div>

          <div
            className={`visit__card reveal ${isHovered ? 'visit__card--hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="visit__card-content">
              <h3 className="visit__card-title">Opening Hours</h3>
              <div className="visit__card-hours">
                <div className="visit__card-row">
                  <span>Monday — Friday</span>
                  <span>7:00 AM — 8:00 PM</span>
                </div>
                <div className="visit__card-row">
                  <span>Saturday</span>
                  <span>8:00 AM — 9:00 PM</span>
                </div>
                <div className="visit__card-row">
                  <span>Sunday</span>
                  <span>8:00 AM — 6:00 PM</span>
                </div>
              </div>

              <div className="visit__card-divider" />

              <h3 className="visit__card-title">Location</h3>
              <p className="visit__card-address">
                42 Botanical Lane<br />
                The Glasshouse Quarter<br />
                London, SW1A 1AA
              </p>

              <div className="visit__card-divider" />

              <h3 className="visit__card-title">Contact</h3>
              <div className="visit__card-contact">
                <a href="tel:+442012345678" className="visit__card-link">
                  +44 (0) 20 1234 5678
                </a>
                <a href="mailto:hello@thegarden.cafe" className="visit__card-link">
                  hello@thegarden.cafe
                </a>
              </div>

              <a href="#" className="visit__card-btn">
                Reserve a Table
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="visit__card-glass-effect" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
