import React from 'react';
import './Modal.css';
import DragAndDropBox from './DragAndDropBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>
          <DisabledByDefaultIcon className='icon' fontSize="large"/>
        </span>
        <DragAndDropBox fontSize="large"/>
      </div>
    </div>
  );
};

export default Modal;
