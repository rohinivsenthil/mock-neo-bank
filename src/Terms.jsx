import React, { useState } from 'react';
import './Terms.css';
import { useNavigate } from 'react-router-dom';

function Terms() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCreateAccount = () => {
    navigate('/congrats');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Terms and Conditions</h2>
        <div className="terms-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="terms-actions">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I agree to the terms and conditions
          </label>
          {isChecked && (
            <button className="create-account-button" onClick={handleCreateAccount}>
              Create Account
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default Terms;