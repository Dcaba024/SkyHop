import React, { useState } from 'react';
import './App.css';
import Modal from './Components/Modal';


function App() {
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div>
      <h1>Dylan's SkyHop Project</h1>


      {!showModal ? (
        <button onClick={handleFileUpload}>Upload File</button>
      ) : (
        <Modal isOpen={showModal} onClose={handleCloseModal}/>
      )}
    </div>
  );
}

export default App;
