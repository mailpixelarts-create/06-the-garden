import { useEffect, useRef } from 'react';
import './ChefSelection.scss';

const selections = [
  {
    id: 1,
    name: 'Garden Toast',
    description: 'Sourdough, avocado, poached egg, microgreens, hollandaise',
    price: '16.00',
    category: 'Brunch',
  },
  {
    id: 2,
    name: 'Forest Mushroom Bowl',
    description: 'Wild mushrooms, quinoa, truffle oil, parmesan crisp, herb salad',
    price: '18.00',
    category: 'Mains',
  },
  {
    id: 3,
    name: 'Botanical Salad',
    description: 'Edible flowers, goat cheese, candied walnuts, citrus vinaigrette',
    price: '14.00',
    category: 'Starters',
  },
  {
    id: 4,
    name: 'Greenhouse Granola',
    description: 'House-made granola, Greek yogurt, seasonal compote, honeycomb',
    price: '12.00',
    category: 'Brunch',
  },
  {
    id: 5,
    name: 'Garden Club Sandwich',
    description: 'Free-range chicken, bacon, lettuce, tomato, herb aioli',
    price: '17.00',
    category: 'Mains',
  },
  {
    id: 6,
    name: 'Conservatory Cake',
    description: 'Pistachio and rose cake with cream cheese frosting',
    price: '9.00',
    category: 'Sweet',
  },
];

const ChefSelection = () => {
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
    <section ref={sectionRef} className="chef-selection section">
      <div className="container">
        <div className="chef-selection__header reveal">
          <span className="chef-selection__label">Chef's Selection</span>
          <h2 className="chef-selection__title">
            Garden to table,<br />
            <span className="gold-accent">crafted with care</span>
          </h2>
        </div>

        <div className="chef-selection__grid">
          {selections.map((item, index) => (
            <div
              key={item.id}
              className="chef-selection__item reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="chef-selection__item-header">
                <span className="chef-selection__item-category">{item.category}</span>
                <span className="chef-selection__item-price">
                  <span className="chef-selection__currency">$</span>
                  {item.price}
                </span>
              </div>
              <h3 className="chef-selection__item-name">{item.name}</h3>
              <p className="chef-selection__item-description">{item.description}</p>
              <div className="chef-selection__item-line" />
            </div>
          ))}
        </div>

        <div className="chef-selection__cta reveal">
          <a href="#" className="chef-selection__btn">
            View Full Menu
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChefSelection;
