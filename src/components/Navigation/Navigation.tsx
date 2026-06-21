import { useState, useEffect } from 'react';
import './Navigation.scss';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Ritual', href: '#ritual' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''} ${isMenuOpen ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__logo">
          <span className="nav__logo-the">THE</span>
          <span className="nav__logo-garden">GARDEN</span>
        </a>

        <div className="nav__links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <a href="#visit" className="nav__reserve-btn">
            Reserve a Table
          </a>
        </div>

        <button
          className="nav__menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="nav__menu-line" />
          <span className="nav__menu-line" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="nav__mobile-menu">
          <div className="nav__mobile-links">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="nav__mobile-link"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#visit" className="nav__mobile-cta" onClick={() => setIsMenuOpen(false)}>
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
