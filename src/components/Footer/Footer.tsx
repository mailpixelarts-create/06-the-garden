import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top-line" />

      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-the">THE</span>
              <span className="footer__logo-garden">GARDEN</span>
            </div>
            <p className="footer__tagline">
              A sanctuary where architecture, plants,<br />
              water reflections and artisan coffee coexist.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__column-title">Explore</h4>
              <a href="#story" className="footer__link">Our Story</a>
              <a href="#menu" className="footer__link">Menu</a>
              <a href="#gallery" className="footer__link">Gallery</a>
              <a href="#ritual" className="footer__link">The Ritual</a>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Visit</h4>
              <a href="#visit" className="footer__link">Reservations</a>
              <a href="#" className="footer__link">Private Events</a>
              <a href="#" className="footer__link">Gift Cards</a>
              <a href="#" className="footer__link">Careers</a>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Connect</h4>
              <a href="#" className="footer__link">Instagram</a>
              <a href="#" className="footer__link">Newsletter</a>
              <a href="#" className="footer__link">Press</a>
              <a href="#" className="footer__link">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__credits">
            <p className="footer__studio">
              A <span className="footer__studio-name">LOOKBOOK</span> Studio Experience
            </p>
            <p className="footer__copyright">
              © {currentYear} Norman James. All rights reserved.
            </p>
            <p className="footer__made">
              Made with <span className="footer__heart">❤️</span> by <span className="footer__empathy">Empathy Studio</span>
            </p>
          </div>

          <div className="footer__leaf">
            <svg viewBox="0 0 40 50" fill="none">
              <path
                d="M20 0 Q35 15 30 35 Q25 48 20 50 Q15 48 10 35 Q5 15 20 0Z"
                fill="#7E9879"
                opacity="0.3"
              />
              <path
                d="M20 5 Q20 25 20 48"
                stroke="#244534"
                strokeWidth="0.5"
                fill="none"
                opacity="0.4"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
