// SelectionMenu.js
import React, { useState } from 'react';
import './SelectionMenu.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SelectionMenu = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const defaultOption = 'Select Import Name: '; // Set your default option here

  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  return (
    <div className="custom-select">
      <div
        className={`select-container ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="selected-value">
          {selectedOption}
          <ArrowDropDownIcon className="dropdown-icon" />
        </div>
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

export default SelectionMenu;
