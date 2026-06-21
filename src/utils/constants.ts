export const SITE_NAME = 'THE GARDEN';
export const SITE_TAGLINE = 'Luxury Botanical Café';
export const SITE_DESCRIPTION =
  'A sanctuary where architecture, plants, water reflections and artisan coffee coexist.';

export const COLORS = {
  forest: '#244534',
  sage: '#7E9879',
  cream: '#F7F4EE',
  stone: '#D9D5CE',
  glass: 'rgba(255, 255, 255, 0.08)',
  gold: '#B79A65',
} as const;

export const FONTS = {
  display: "'DM Serif Display', serif",
  body: "'Inter', sans-serif",
  mono: "'Space Mono', monospace",
} as const;

export const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Ritual', href: '#ritual' },
  { label: 'Visit', href: '#visit' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'Newsletter', href: '#' },
  { label: 'Press', href: '#' },
] as const;

export const SEASONAL_DRINKS = [
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
    description: "Mushroom mocha with lion's mane, dark chocolate and maple",
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
] as const;

export const GALLERY_ITEMS = [
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
] as const;

export const SUSTAINABILITY_STATS = [
  { id: 1, value: 95, suffix: '%', label: 'Locally Sourced' },
  { id: 2, value: 12000, suffix: '+', label: 'Trees Planted' },
  { id: 3, value: 0, suffix: '', label: 'Waste to Landfill', display: 'Zero' },
  { id: 4, value: 100, suffix: '%', label: 'Renewable Energy' },
] as const;

export const CHEF_SELECTIONS = [
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
] as const;
