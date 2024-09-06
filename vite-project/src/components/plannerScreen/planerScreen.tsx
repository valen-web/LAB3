import Bar from '../ProgesBar/ProgesBar.tsx';
import Categories from '../categories/categories.tsx';
import Modal from '../modal/modal.tsx';
import "./planerScreen.css";
import { useState } from 'react'

// Define las props que recibe el componente Planer
interface PlanerProps {
  budget: number;
}

function Planer({ budget }: PlanerProps) { // Tipar la prop `budget`
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Bar budget={budget} /> {/* Pasar el presupuesto a Bar */}
      <div id='more-button'>
        <button onClick={handleOpenModal}>+</button>
      </div>
      <Categories />
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
}

export default Planer;
