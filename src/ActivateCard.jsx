import React, { useState } from 'react';
import './ActivateCard.css';
import { useNavigate } from 'react-router-dom';

function ActivateCard() {
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account', { state: { cardCreated: true } }); // Pass cardCreated state
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Activate Your Card!</h2>
        <form className="activate-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="pin">Set 4-Digit PIN:</label>
            <input
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength="4"
              required
            />
          </div>
          <button type="submit" className="submit-button">Activate</button>
        </form>
      </header>
    </div>
  );
}

export default ActivateCard;