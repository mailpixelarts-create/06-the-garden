import { useEffect, useRef, useState } from 'react';
import './GreenhouseArchitecture.scss';

const GreenhouseArchitecture = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      setRotation(scrollProgress * 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="greenhouse section">
      <div className="container">
        <div className="greenhouse__header reveal">
          <span className="greenhouse__label">Architecture</span>
          <h2 className="greenhouse__title">
            A glass cathedral<br />
            <span className="gold-accent">of botanical beauty</span>
          </h2>
        </div>

        <div className="greenhouse__content">
          <div className="greenhouse__3d reveal">
            <div
              className="greenhouse__model"
              style={{ transform: `rotateY(${rotation}deg)` }}
            >
              <svg viewBox="0 0 400 300" className="greenhouse__svg">
                <defs>
                  <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.12)" />
                  </linearGradient>
                  <linearGradient id="frameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#244534" />
                    <stop offset="100%" stopColor="#1a3326" />
                  </linearGradient>
                </defs>

                {/* Base */}
                <rect x="50" y="240" width="300" height="20" rx="2" fill="#D9D5CE" />

                {/* Front face */}
                <path d="M70 240 L70 120 L200 50 L330 120 L330 240" fill="url(#glassGrad)" stroke="url(#frameGrad)" strokeWidth="3" />

                {/* Glass panels */}
                <line x1="135" y1="240" x2="135" y2="85" stroke="url(#frameGrad)" strokeWidth="2" />
                <line x1="200" y1="240" x2="200" y2="50" stroke="url(#frameGrad)" strokeWidth="2" />
                <line x1="265" y1="240" x2="265" y2="85" stroke="url(#frameGrad)" strokeWidth="2" />

                {/* Horizontal beams */}
                <line x1="70" y1="180" x2="330" y2="180" stroke="url(#frameGrad)" strokeWidth="2" />
                <line x1="70" y1="130" x2="330" y2="130" stroke="url(#frameGrad)" strokeWidth="2" />

                {/* Roof peak */}
                <path d="M70 120 L200 50 L330 120" fill="none" stroke="url(#frameGrad)" strokeWidth="3" />

                {/* Glass reflections */}
                <path d="M100 200 L100 140 L135 120 L135 200" fill="rgba(255,255,255,0.1)" />
                <path d="M155 200 L155 95 L200 65 L200 200" fill="rgba(255,255,255,0.08)" />
                <path d="M215 200 L215 95 L265 120 L265 200" fill="rgba(255,255,255,0.1)" />
                <path d="M280 200 L280 140 L320 160 L320 200" fill="rgba(255,255,255,0.06)" />

                {/* Plants inside */}
                <circle cx="120" cy="210" r="15" fill="#7E9879" opacity="0.6" />
                <circle cx="150" cy="200" r="20" fill="#244534" opacity="0.5" />
                <circle cx="250" cy="205" r="18" fill="#7E9879" opacity="0.5" />
                <circle cx="280" cy="215" r="12" fill="#B79A65" opacity="0.4" />
                <circle cx="200" cy="195" r="25" fill="#244534" opacity="0.4" />

                {/* Light beams */}
                <path d="M150 50 L120 240 L180 240 Z" fill="rgba(183, 154, 101, 0.05)" />
                <path d="M250 50 L220 240 L280 240 Z" fill="rgba(183, 154, 101, 0.05)" />
              </svg>

              <div className="greenhouse__reflection" />
            </div>
          </div>

          <div className="greenhouse__details">
            <div className="greenhouse__detail reveal">
              <span className="greenhouse__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
              </span>
              <div>
                <h4 className="greenhouse__detail-title">Victorian Framework</h4>
                <p className="greenhouse__detail-text">
                  Original 1892 wrought iron structure, meticulously restored
                </p>
              </div>
            </div>

            <div className="greenhouse__detail reveal">
              <span className="greenhouse__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </span>
              <div>
                <h4 className="greenhouse__detail-title">Tempered Glass</h4>
                <p className="greenhouse__detail-text">
                  847 individual glass panels, each hand-cut to specification
                </p>
              </div>
            </div>

            <div className="greenhouse__detail reveal">
              <span className="greenhouse__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <div>
                <h4 className="greenhouse__detail-title">Climate Control</h4>
                <p className="greenhouse__detail-text">
                  Passive ventilation maintains perfect growing conditions year-round
                </p>
              </div>
            </div>

            <div className="greenhouse__detail reveal">
              <span className="greenhouse__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </span>
              <div>
                <h4 className="greenhouse__detail-title">Three Levels</h4>
                <p className="greenhouse__detail-text">
                  Ground floor café, mezzanine lounge, rooftop garden terrace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenhouseArchitecture;
