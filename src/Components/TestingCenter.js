// TestingCenter.js
import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './TestingCenter.css';

const TestingCenter = ({ number }) => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const defaultOption = 'Select Import Name: ';

  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  return (
    <div className="test-select">
      <label>Testing Center {number}</label>
      <div
        className={`testing-container ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="testing-value">
          {selectedOption}
          <div className="icon-container">
            <ArrowDropDownIcon className="dropdown-icon" />
          </div>
        </div>
            <AccessTimeIcon className='clock-icon' />
        <div className={`options ${isMenuOpen ? 'visible' : ''}`}>
          {[defaultOption, ...options].map((option) => (
            <div
              key={option}
              onClick={() => handleOptionChange(option)}
              className={`option ${option === selectedOption ? 'selected' : ''}`}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestingCenter;
