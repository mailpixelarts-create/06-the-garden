import { useEffect, useRef } from 'react';
import './GardenGallery.scss';

const galleryItems = [
  { id: 1, type: 'large', title: 'The Glasshouse' },
  { id: 2, type: 'tall', title: 'Morning Light' },
  { id: 3, type: 'wide', title: 'Botanical Corner' },
  { id: 4, type: 'normal', title: 'Coffee Art' },
  { id: 5, type: 'tall', title: 'Water Feature' },
  { id: 6, type: 'normal', title: 'Pastry Display' },
  { id: 7, type: 'wide', title: 'The Garden View' },
  { id: 8, type: 'normal', title: 'Evening Glow' },
  { id: 9, type: 'large', title: 'Greenhouse Bar' },
  { id: 10, type: 'normal', title: 'Leaf Detail' },
  { id: 11, type: 'tall', title: 'Stone Path' },
  { id: 12, type: 'wide', title: 'Rooftop Garden' },
];

const GardenGallery = () => {
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
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="garden-gallery section" id="gallery">
      <div className="container">
        <div className="garden-gallery__header reveal">
          <span className="garden-gallery__label">Gallery</span>
          <h2 className="garden-gallery__title">
            Moments captured in<br />
            <span className="gold-accent">glass and green</span>
          </h2>
        </div>

        <div className="garden-gallery__masonry">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`garden-gallery__item garden-gallery__item--${item.type} reveal`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="garden-gallery__image-mask">
                <div
                  className="garden-gallery__image"
                  style={{ background: getGradient(index) }}
                />
                <div className="garden-gallery__light-leak" />
              </div>
              <div className="garden-gallery__item-overlay">
                <span className="garden-gallery__item-number">
                  {String(item.id).padStart(2, '0')}
                </span>
                <h3 className="garden-gallery__item-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getGradient(index: number): string {
  const gradients = [
    'linear-gradient(135deg, #244534 0%, #7E9879 100%)',
    'linear-gradient(135deg, #D9D5CE 0%, #F7F4EE 100%)',
    'linear-gradient(135deg, #7E9879 0%, #B79A65 100%)',
    'linear-gradient(135deg, #F7F4EE 0%, #D9D5CE 100%)',
    'linear-gradient(135deg, #244534 0%, #B79A65 100%)',
    'linear-gradient(135deg, #B79A65 0%, #7E9879 100%)',
    'linear-gradient(135deg, #D9D5CE 0%, #7E9879 100%)',
    'linear-gradient(135deg, #F7F4EE 0%, #244534 100%)',
    'linear-gradient(135deg, #7E9879 0%, #244534 100%)',
    'linear-gradient(135deg, #B79A65 0%, #D9D5CE 100%)',
    'linear-gradient(135deg, #244534 0%, #D9D5CE 100%)',
    'linear-gradient(135deg, #7E9879 0%, #F7F4EE 100%)',
  ];
  return gradients[index % gradients.length];
}

export default GardenGallery;
