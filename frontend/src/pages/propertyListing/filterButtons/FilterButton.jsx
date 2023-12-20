import React, { useState } from "react";
import styles from "./filter.module.css";

const CustomDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const restOptions = options.slice(1);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer} onClick={handleToggleDropdown}>
      <div
        className={`${styles.selectedOption} ${
          selectedValue !== options[0] ? styles.redbackground : ""
        }`}
      >
        <p
          className={`${styles.selectedValue} ${
            selectedValue !== options[0] ? styles.redbackground : ""
          }`}
        >
          {selectedValue}
        </p>
      </div>

      {isOpen && (
        <ul className={styles.dropdownOptions}>
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
