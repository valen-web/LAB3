import './App.css';
import { useState } from 'react';
import Define from './components/define/define';
import Planer from './components/plannerScreen/planerScreen';
import Nav from './components/nav/nav';

function App() {
  const [showPlaner, setShowPlaner] = useState(false);
  const [budget, setBudget] = useState(0); // Estado para el presupuesto

  const handleShowPlaner = () => {
    setShowPlaner(true);
  };

  const handleSetBudget = (value) => {
    setBudget(value); // Actualiza el presupuesto
  };

  return (
    <>
      <Nav />
      {showPlaner ? (
        <Planer budget={budget} />
      ) : (
        <Define onGoClick={handleShowPlaner} onBudgetChange={handleSetBudget} />
      )}
    </>
  );
}

export default App;
