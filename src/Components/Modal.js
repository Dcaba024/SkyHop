import React from 'react';
import './Modal.css';
import DragAndDropBox from './DragAndDropBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import SelectionMenu from './SelectionMenu';
import SplitSchedule from './SplitSchedule';
import Location from './Location';
import Client from './Client';
import TestingCenter from './TestingCenter';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


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
                      <h2>Select a manifest that you'd like to import</h2>
                          <DragAndDropBox fontSize="large" />
                  </div>
                  <div className='column'>
                    <SplitSchedule/>
                    <div className="line" />
                    <Location/>
                    <Client/>
                    <TestingCenter number={1}/>
                    <TestingCenter number={2}/>
                    <TestingCenter number={3}/>
                    <TestingCenter number={4}/>
                  </div>

              </div>
              <div className='row'>
                  <div className='column'>
                      <div className="line-separator" />
                  </div>
              </div>
              <div className='row submit'>
                    
                   <h2>Data in thhe import file is correct. Please press Continue to import</h2>
                     


              </div>
              <div className='row submit'>
                        
                    
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button variant="contained" className='button-round'  style={{ marginRight: '8px' }}>Continue Import</Button>
                        <Button variant="outlined" className='button-round'>Cancel</Button>
                        
                        </ButtonGroup>
                                </div>      
          </div>
      </div>
  );
};

export default Modal;
