import { useEffect, useRef, useState } from 'react';
import './Sustainability.scss';

const stats = [
  { id: 1, value: 95, suffix: '%', label: 'Locally Sourced' },
  { id: 2, value: 12000, suffix: '+', label: 'Trees Planted' },
  { id: 3, value: 0, suffix: '', label: 'Waste to Landfill', display: 'Zero' },
  { id: 4, value: 100, suffix: '%', label: 'Renewable Energy' },
];

const Sustainability = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (!hasAnimated.current) {
              hasAnimated.current = true;
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      if (stat.display) {
        setCounters((prev) => {
          const next = [...prev];
          next[index] = 1;
          return next;
        });
        return;
      }

      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), stat.value);
        setCounters((prev) => {
          const next = [...prev];
          next[index] = current;
          return next;
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  };

  return (
    <section ref={sectionRef} className="sustainability section">
      <div className="sustainability__vines">
        <svg className="sustainability__vine sustainability__vine--1" viewBox="0 0 200 600">
          <path
            d="M100 0 Q120 100 80 200 Q40 300 100 400 Q160 500 100 600"
            stroke="#7E9879"
            strokeWidth="2"
            fill="none"
            className="sustainability__vine-path"
          />
          <circle cx="80" cy="200" r="8" fill="#7E9879" opacity="0.3" className="sustainability__vine-leaf" />
          <circle cx="100" cy="400" r="10" fill="#244534" opacity="0.2" className="sustainability__vine-leaf" />
        </svg>
        <svg className="sustainability__vine sustainability__vine--2" viewBox="0 0 200 600">
          <path
            d="M100 0 Q60 150 120 250 Q180 350 100 500 Q50 550 100 600"
            stroke="#B79A65"
            strokeWidth="1.5"
            fill="none"
            className="sustainability__vine-path"
          />
          <circle cx="120" cy="250" r="6" fill="#B79A65" opacity="0.3" className="sustainability__vine-leaf" />
        </svg>
      </div>

      <div className="container">
        <div className="sustainability__header reveal">
          <span className="sustainability__label">Sustainability</span>
          <h2 className="sustainability__title">
            Rooted in<br />
            <span className="gold-accent">responsibility</span>
          </h2>
          <p className="sustainability__subtitle">
            Every decision we make considers its impact on the planet.
            From bean to cup, from seed to plate, sustainability is not an add-on — it's our foundation.
          </p>
        </div>

        <div className="sustainability__stats">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="sustainability__stat reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="sustainability__stat-value">
                {stat.display
                  ? stat.display
                  : counters[index].toLocaleString()}
                <span className="sustainability__stat-suffix">{stat.suffix}</span>
              </div>
              <span className="sustainability__stat-label">{stat.label}</span>

              <div className="sustainability__leaf-particles">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="sustainability__leaf-particle"
                    style={{
                      '--tx': `${(Math.random() - 0.5) * 60}px`,
                      '--ty': `${-30 - Math.random() * 40}px`,
                      '--tx2': `${(Math.random() - 0.5) * 120}px`,
                      '--ty2': `${-80 - Math.random() * 60}px`,
                      animationDelay: `${index * 0.3 + i * 0.2}s`,
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sustainability__commitments reveal">
          <div className="sustainability__commitment">
            <span className="sustainability__commitment-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <span>Carbon Neutral Since 2022</span>
          </div>
          <div className="sustainability__commitment">
            <span className="sustainability__commitment-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <span>Compostable Packaging Only</span>
          </div>
          <div className="sustainability__commitment">
            <span className="sustainability__commitment-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span>Direct Trade Partnerships</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
