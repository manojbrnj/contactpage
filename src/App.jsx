import { useState } from 'react';
import './App.css';
import ContactPage from './component/ContactPage';
import Hero from './component/Hero';
import Navigation from './component/Navigation';
import Images from './component/Images';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navigation></Navigation>
      <Hero></Hero>
      <div className="last">
        <ContactPage></ContactPage>
        <Images></Images>
      </div>
    </div>
  );
}

export default App;
