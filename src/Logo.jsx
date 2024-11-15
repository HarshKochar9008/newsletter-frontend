import React from 'react';
import './Logo.css';

function Logo() {
    return (
        <div className="logo-container">
            <div className="grid">
                {Array(9).fill().map((_, index) => (
                    <div key={index} className="grid-box"></div>
                ))}
            </div>
            <span className="logo-text">Crowdfund.</span>
        </div>
    );
}

export default Logo;
