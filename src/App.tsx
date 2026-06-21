import { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import BotanicalStory from './components/BotanicalStory/BotanicalStory';
import SeasonalDrinks from './components/SeasonalDrinks/SeasonalDrinks';
import GardenGallery from './components/GardenGallery/GardenGallery';
import SignatureCoffee from './components/SignatureCoffee/SignatureCoffee';
import GreenhouseArchitecture from './components/GreenhouseArchitecture/GreenhouseArchitecture';
import SlowRitual from './components/SlowRitual/SlowRitual';
import ChefSelection from './components/ChefSelection/ChefSelection';
import Sustainability from './components/Sustainability/Sustainability';
import Visit from './components/Visit/Visit';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import { useLenis } from './hooks/useLenis';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <BotanicalStory />
        <SeasonalDrinks />
        <GardenGallery />
        <SignatureCoffee />
        <GreenhouseArchitecture />
        <SlowRitual />
        <ChefSelection />
        <Sustainability />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
