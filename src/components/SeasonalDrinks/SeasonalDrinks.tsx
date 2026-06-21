import { useEffect, useRef } from 'react';
import './SeasonalDrinks.scss';

const drinks = [
  {
    id: 1,
    name: 'Garden Earl',
    description: 'Lavender-infused earl grey with oat milk and a touch of honey',
    ingredients: ['Lavender', 'Earl Grey', 'Oat Milk', 'Honey'],
    price: '6.50',
    season: 'Spring',
  },
  {
    id: 2,
    name: 'Botanical Cold Brew',
    description: '24-hour steeped cold brew with rosemary and citrus zest',
    ingredients: ['Cold Brew', 'Rosemary', 'Citrus', 'Tonic'],
    price: '7.00',
    season: 'Summer',
  },
  {
    id: 3,
    name: 'Forest Floor',
    description: 'Mushroom mocha with lion\'s mane, dark chocolate and maple',
    ingredients: ['Mushroom', 'Cacao', 'Maple', 'Oat Milk'],
    price: '8.00',
    season: 'Autumn',
  },
  {
    id: 4,
    name: 'Glass House',
    description: 'Matcha latte with vanilla bean, served in our signature glass',
    ingredients: ['Matcha', 'Vanilla', 'Oat Milk', 'Honey'],
    price: '7.50',
    season: 'Winter',
  },
];

const SeasonalDrinks = () => {
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
    <section ref={sectionRef} className="seasonal-drinks section" id="menu">
      <div className="container">
        <div className="seasonal-drinks__header reveal">
          <span className="seasonal-drinks__label">Seasonal Drinks</span>
          <h2 className="seasonal-drinks__title">
            Crafted with the<br />
            <span className="gold-accent">rhythm of seasons</span>
          </h2>
        </div>

        <div className="seasonal-drinks__grid">
          {drinks.map((drink, index) => (
            <div
              key={drink.id}
              className="seasonal-drinks__card reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="seasonal-drinks__card-steam">
                <div className="seasonal-drinks__steam-line" />
                <div className="seasonal-drinks__steam-line" />
                <div className="seasonal-drinks__steam-line" />
              </div>

              <div className="seasonal-drinks__card-cup">
                <svg viewBox="0 0 80 60" className="seasonal-drinks__cup-svg">
                  <path d="M10 10 L15 55 L65 55 L70 10 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <ellipse cx="40" cy="10" rx="30" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <span className="seasonal-drinks__season">{drink.season}</span>
              <h3 className="seasonal-drinks__name">{drink.name}</h3>
              <p className="seasonal-drinks__description">{drink.description}</p>

              <div className="seasonal-drinks__ingredients">
                {drink.ingredients.map((ingredient) => (
                  <span key={ingredient} className="seasonal-drinks__ingredient">
                    {ingredient}
                  </span>
                ))}
              </div>

              <div className="seasonal-drinks__price">
                <span className="seasonal-drinks__currency">$</span>
                <span className="seasonal-drinks__amount">{drink.price}</span>
              </div>

              <div className="seasonal-drinks__orbit">
                <div className="seasonal-drinks__orbit-ring" />
                {drink.ingredients.map((_, i) => (
                  <div
                    key={i}
                    className="seasonal-drinks__orbit-dot"
                    style={{
                      '--angle': `${(i * 360) / drink.ingredients.length}deg`,
                      '--delay': `${i * 0.5}s`,
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalDrinks;
