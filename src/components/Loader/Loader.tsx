import { useEffect, useRef } from 'react';
import './Loader.scss';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const seedRef = useRef<HTMLDivElement>(null);
  const stemRef = useRef<HTMLDivElement>(null);
  const leavesRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = [
      { el: seedRef.current, delay: 0 },
      { el: stemRef.current, delay: 600 },
      { el: leavesRef.current, delay: 1200 },
      { el: logoRef.current, delay: 1800 },
    ];

    tl.forEach(({ el, delay }) => {
      if (el) {
        setTimeout(() => el.classList.add('active'), delay);
      }
    });

    const exitTimer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add('exit');
      }
      setTimeout(onComplete, 800);
    }, 3200);

    return () => clearTimeout(exitTimer);
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loader">
      <div className="loader__content">
        <div ref={seedRef} className="loader__seed">
          <svg viewBox="0 0 60 60" className="seed-svg">
            <ellipse cx="30" cy="35" rx="8" ry="12" fill="#244534" />
            <path d="M30 23 Q30 10 30 5" stroke="#7E9879" strokeWidth="2" fill="none" className="seed-stem" />
          </svg>
        </div>

        <div ref={stemRef} className="loader__stem">
          <svg viewBox="0 0 100 200" className="stem-svg">
            <path d="M50 200 Q50 150 50 100 Q50 60 50 20" stroke="#7E9879" strokeWidth="3" fill="none" className="stem-path" />
            <path d="M50 140 Q70 130 85 120" stroke="#7E9879" strokeWidth="2" fill="none" className="branch-path" />
            <path d="M50 100 Q30 90 15 85" stroke="#7E9879" strokeWidth="2" fill="none" className="branch-path" />
            <path d="M50 60 Q65 50 75 40" stroke="#7E9879" strokeWidth="2" fill="none" className="branch-path" />
          </svg>
        </div>

        <div ref={leavesRef} className="loader__leaves">
          <svg viewBox="0 0 200 200" className="leaves-svg">
            <g className="leaf leaf-1">
              <path d="M100 80 Q120 60 140 70 Q130 90 100 80Z" fill="#7E9879" />
              <path d="M100 80 Q110 75 130 75" stroke="#244534" strokeWidth="1" fill="none" />
            </g>
            <g className="leaf leaf-2">
              <path d="M100 80 Q80 60 60 70 Q70 90 100 80Z" fill="#244534" />
              <path d="M100 80 Q90 75 70 75" stroke="#7E9879" strokeWidth="1" fill="none" />
            </g>
            <g className="leaf leaf-3">
              <path d="M100 80 Q110 50 130 40 Q120 65 100 80Z" fill="#B79A65" opacity="0.8" />
            </g>
            <g className="leaf leaf-4">
              <path d="M100 80 Q90 50 70 40 Q80 65 100 80Z" fill="#7E9879" opacity="0.7" />
            </g>
          </svg>
        </div>

        <div ref={logoRef} className="loader__logo">
          <span className="logo-the">THE</span>
          <span className="logo-garden">GARDEN</span>
          <span className="logo-tagline">Botanical Sanctuary</span>
        </div>
      </div>

      <div className="loader__progress">
        <div className="loader__progress-bar" />
      </div>
    </div>
  );
};

export default Loader;
