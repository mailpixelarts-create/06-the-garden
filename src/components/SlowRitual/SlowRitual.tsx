import { useEffect, useRef } from 'react';
import './SlowRitual.scss';

const rituals = [
  {
    id: 1,
    step: '01',
    title: 'Select Your Origin',
    description: 'Choose from our curated collection of single-origin beans, each with its own story of terroir and craft.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="20" />
        <path d="M24 4c0 11.046-8.954 20-20 20" strokeDasharray="4 4" />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 2,
    step: '02',
    title: 'Watch the Pour',
    description: 'Our baristas perform the pour-over ritual with precision, each movement intentional and meditative.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 36V20c0-6.627 5.373-12 12-12s12 5.373 12 12v16" />
        <path d="M8 36h32M24 8V4M20 4h8" />
        <circle cx="24" cy="24" r="6" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    id: 3,
    step: '03',
    title: 'Savor the Moment',
    description: 'Take time to appreciate the aroma, the warmth, the way light plays through the glass around you.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4v8M4 24h8M36 24h8M24 36v8" />
        <circle cx="24" cy="24" r="12" />
        <circle cx="24" cy="24" r="4" />
        <path d="M24 12v4M24 32v4M12 24h4M32 24h4" />
      </svg>
    ),
  },
];

const SlowRitual = () => {
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
    <section ref={sectionRef} className="slow-ritual section" id="ritual">
      <div className="slow-ritual__bg-pattern" />

      <div className="container">
        <div className="slow-ritual__header reveal">
          <span className="slow-ritual__label">The Ritual</span>
          <h2 className="slow-ritual__title">
            Slow down.<br />
            <span className="gold-accent">Taste deeply.</span>
          </h2>
          <p className="slow-ritual__subtitle">
            In a world that moves too fast, we invite you to experience coffee
            the way it was meant to be — with intention, presence, and care.
          </p>
        </div>

        <div className="slow-ritual__steps">
          {rituals.map((ritual, index) => (
            <div
              key={ritual.id}
              className="slow-ritual__step reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="slow-ritual__step-icon">
                {ritual.icon}
              </div>
              <span className="slow-ritual__step-number">{ritual.step}</span>
              <h3 className="slow-ritual__step-title">{ritual.title}</h3>
              <p className="slow-ritual__step-description">{ritual.description}</p>

              {index < rituals.length - 1 && (
                <div className="slow-ritual__step-connector">
                  <svg viewBox="0 0 100 20">
                    <path
                      d="M0 10 Q25 0 50 10 Q75 20 100 10"
                      stroke="#B79A65"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="slow-ritual__quote reveal">
          <blockquote>
            "Coffee is a ritual, not a rush. Every cup is an invitation to pause."
          </blockquote>
          <cite>— Head Barista, THE GARDEN</cite>
        </div>
      </div>
    </section>
  );
};

export default SlowRitual;
