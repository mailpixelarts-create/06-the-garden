# THE GARDEN — Luxury Botanical Café

A sanctuary where architecture, plants, water reflections and artisan coffee coexist.

## Overview

THE GARDEN is a luxury botanical café hidden inside a glass botanical conservatory. This project features a stunning web experience built with modern web technologies, showcasing Scandinavian calm meets botanical architecture.

## Brand Identity

- **Colors**: Forest `#244534`, Sage `#7E9879`, Cream `#F7F4EE`, Stone `#D9D5CE`, Gold `#B79A65`
- **Typography**: Display=Canela, Body=Suisse International, Numbers=Neue Montreal Mono
- **Aesthetic**: Morning light, Rain on glass, Natural textures, Editorial minimalism

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: SCSS
- **Animation**: GSAP (GreenSock Animation Platform)
- **Smooth Scroll**: Lenis
- **Text Splitting**: SplitType
- **3D Graphics**: Three.js (basic)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd 06-the-garden

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Loader/          # Seed-to-bloom loading animation
│   ├── Navigation/      # Glass navigation with scroll effects
│   ├── Hero/            # Full-screen greenhouse with fog & light
│   ├── BotanicalStory/  # Image stack with organic masks
│   ├── SeasonalDrinks/  # Bloom-up cards with orbit ingredients
│   ├── GardenGallery/   # Masonry grid with parallax & light leaks
│   ├── SignatureCoffee/ # Detailed coffee presentation
│   ├── GreenhouseArchitecture/ # 3D greenhouse with scroll rotation
│   ├── SlowRitual/      # Step-by-step coffee ritual
│   ├── ChefSelection/   # Menu items with hover effects
│   ├── Sustainability/  # Animated counters & growing vines
│   ├── Visit/           # Interactive map with glass card
│   ├── Footer/          # Studio credits
│   └── Cursor/          # Custom cursor follower
├── hooks/
│   ├── useLenis.ts      # Smooth scroll initialization
│   ├── useScrollTrigger.ts # Scroll-based animations
│   └── useSplitType.ts  # Text splitting for animations
├── animations/
│   ├── hero.ts          # Hero section animations
│   ├── loader.ts        # Loading sequence
│   ├── sections.ts      # General section reveals
│   ├── gallery.ts       # Gallery masonry animations
│   └── cursor.ts        # Cursor interactions
├── styles/
│   ├── variables.scss   # SCSS variables & mixins
│   ├── global.scss      # Global styles
│   └── animations.scss  # Keyframe animations
├── utils/
│   └── constants.ts     # Site constants & data
├── App.tsx              # Main application
└── main.tsx             # Entry point
```

## Features

- **Loader Animation**: Seed sprouts, stem grows, leaves unfold, logo appears
- **Glass Navigation**: Transparent nav that blurs on scroll
- **Hero Section**: Morning fog, light rays, floating leaves, cursor-reactive steam
- **Botanical Story**: Stacked images with organic masks and quotes
- **Seasonal Drinks**: Cards that bloom upward with orbiting ingredient dots
- **Gallery**: Masonry grid with organic clipping masks and light leaks
- **3D Greenhouse**: SVG model that rotates on scroll
- **Sustainability**: Animated counters with growing vines and leaf particles
- **Custom Cursor**: Smooth follower with hover states

## Performance

- Lazy-loaded sections with Intersection Observer
- Optimized GSAP animations
- Responsive design for all screen sizes
- Smooth scrolling with Lenis

## Credits

- **Studio**: A LOOKBOOK Studio Experience
- **Copyright**: © Norman James
- **Made with**: ❤️ by Empathy Studio

## License

All rights reserved. This is a demonstration project.
