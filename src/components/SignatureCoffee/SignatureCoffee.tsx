import { useEffect, useRef } from 'react';
import './SignatureCoffee.scss';

const SignatureCoffee = () => {
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
    <section ref={sectionRef} className="signature-coffee section">
      <div className="container">
        <div className="signature-coffee__layout">
          <div className="signature-coffee__visual reveal">
            <div className="signature-coffee__cup-container">
              <svg viewBox="0 0 200 220" className="signature-coffee__cup-svg">
                <defs>
                  <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7E9879" />
                    <stop offset="100%" stopColor="#244534" />
                  </linearGradient>
                </defs>
                <ellipse cx="100" cy="180" rx="60" ry="15" fill="rgba(36, 69, 52, 0.1)" />
                <path d="M40 60 L50 170 L150 170 L160 60 Z" fill="url(#cupGradient)" />
                <ellipse cx="100" cy="60" rx="60" ry="18" fill="#244534" />
                <ellipse cx="100" cy="60" rx="50" ry="14" fill="#1a3326" />
                <path d="M160 80 Q190 80 190 110 Q190 140 160 140" fill="none" stroke="#7E9879" strokeWidth="4" />
                <ellipse cx="100" cy="60" rx="45" ry="12" fill="url(#latteArt)">
                </ellipse>
              </svg>

              <div className="signature-coffee__steam">
                <div className="signature-coffee__steam-line" />
                <div className="signature-coffee__steam-line" />
                <div className="signature-coffee__steam-line" />
              </div>
            </div>

            <div className="signature-coffee__badge">
              <span className="signature-coffee__badge-text">House Blend</span>
            </div>
          </div>

          <div className="signature-coffee__content">
            <span className="signature-coffee__label reveal">Signature Blend</span>
            <h2 className="signature-coffee__title reveal">
              The Garden<br />
              <span className="gold-accent">Reserve</span>
            </h2>
            <p className="signature-coffee__description reveal">
              Our signature blend is a carefully curated medley of beans from Ethiopia,
              Colombia, and Guatemala. Each origin is selected for its unique character —
              bright citrus notes from Yirgacheffe, caramel sweetness from Huila, and
              dark chocolate depth from Antigua.
            </p>

            <div className="signature-coffee__notes reveal">
              <h4 className="signature-coffee__notes-title">Tasting Notes</h4>
              <div className="signature-coffee__notes-list">
                <div className="signature-coffee__note">
                  <span className="signature-coffee__note-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  <div>
                    <span className="signature-coffee__note-label">Top</span>
                    <span className="signature-coffee__note-value">Bergamot, Jasmine</span>
                  </div>
                </div>
                <div className="signature-coffee__note">
                  <span className="signature-coffee__note-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                  </span>
                  <div>
                    <span className="signature-coffee__note-label">Body</span>
                    <span className="signature-coffee__note-value">Caramel, Brown Sugar</span>
                  </div>
                </div>
                <div className="signature-coffee__note">
                  <span className="signature-coffee__note-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8" />
                    </svg>
                  </span>
                  <div>
                    <span className="signature-coffee__note-label">Finish</span>
                    <span className="signature-coffee__note-value">Dark Chocolate, Walnut</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="signature-coffee__meta reveal">
              <div className="signature-coffee__meta-item">
                <span className="signature-coffee__meta-value">2100m</span>
                <span className="signature-coffee__meta-label">Altitude</span>
              </div>
              <div className="signature-coffee__meta-item">
                <span className="signature-coffee__meta-value">Washed</span>
                <span className="signature-coffee__meta-label">Process</span>
              </div>
              <div className="signature-coffee__meta-item">
                <span className="signature-coffee__meta-value">Light</span>
                <span className="signature-coffee__meta-label">Roast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureCoffee;
