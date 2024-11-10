import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClick = (path) => {
        navigate(path);
        setIsOpen(false);
    }

    return (
        <div className="dropdown-container">
            <div className="dropdown-title" onClick={toggleDropdown}>
                <h3>Категории</h3>
                <span className="dropdown-arrow">&#9660;</span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {options.map((option, index) => (
                        <li key={index} className="dropdown-item" onClick={() => handleClick(option.link)}>
                            <button type="button" className="dropdown-button">{option.name}</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;