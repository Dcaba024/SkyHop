import React, { useState } from 'react';
import './DropdownMenu.css'; // Create a CSS file for styling if needed
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Import an arrow icon from Material-UI

const DropdownMenu = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const [selectedOption, setSelectedOption] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleMenu}>
        <ArrowDropDownIcon className={`dropdown-icon ${isMenuOpen ? 'open' : ''}`} />
        {selectedOption ? selectedOption : 'Select an option'}
      </div>
      {isMenuOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className={option === selectedOption ? 'selected' : ''}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
