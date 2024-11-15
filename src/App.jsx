/* Frontend - App.js */
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Logo from './Logo';

function App() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/signup', formData);
            alert('Signed up successfully!');
        } catch (err) {
            alert('Failed to sign up');
        }
    };

    return (
        <div className="container">
          <Logo />
            {/* Header with logo and user account icon */}
            <header className="header">
                <div className="logo">Crowdfund.</div>
                <div className="user-icon">
                    <img src="path/to/user-icon.jpg" alt="User Icon" />
                    <span>Kate B.</span>
                </div>
            </header>
            
            <div className="signup-form">
                <h2>Sign Up for Free</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <button type="submit">Sign up</button>
                </form>
                <p className="terms">
                    By clicking 'Sign up' I agree to the <a href="/terms-of-service">Terms of Service</a>.
                </p>
            </div>

            {/* Footer with contact and social media links */}
            <footer className="footer">
                <div className="footer-links">
                    <a href="/contact">Contact</a>
                    <a href="/help">Help</a>
                    <a href="/terms-of-use">Terms of Use</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
                <div className="social-media">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
