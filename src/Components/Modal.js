import React from 'react';
import './Modal.css';
import DragAndDropBox from './DragAndDropBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import SelectionMenu from './SelectionMenu';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
      <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="modal-close" onClick={onClose}>
                  <DisabledByDefaultIcon className='icon' fontSize="large" />
              </span>
              <div className='title'>
                  <h1>Document Upload</h1>
              </div>
              <div className='row'>
                  <div className='column'>
                      <SelectionMenu />
                  </div>

              </div>
              <div className='row'>
                  <div className='column'>
                      <div className="line-separator" />
                  </div>
              </div>
              <div className='row'>
                    <div className='column'>
                        <h2>Select a manifest that you'd like to import</h2>
              <DragAndDropBox fontSize="large" />
                    </div>

              </div>
          </div>
      </div>
  );
};

export default Modal;
