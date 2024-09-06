import Bar from '../ProgesBar/ProgesBar.tsx';
import Categories from '../categories/categories.tsx';
import Modal from '../modal/modal.tsx';
import "./planerScreen.css";
import { useState } from 'react'


interface PlanerProps {
  budget: number;
}

function Planer({ budget }: PlanerProps) { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Bar budget={budget} /> 
      <div id='more-button'>
        <button onClick={handleOpenModal}>+</button>
      </div>
      <Categories />
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
}

export default Planer;
