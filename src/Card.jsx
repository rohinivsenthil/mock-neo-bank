import React, { useState } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card() {
  const [cardType, setCardType] = useState('');
  const [mailingAddress, setMailingAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/card/activate'); // Navigate to the activate card screen
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Create a New Card!</h2>
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardType">Select Card Type:</label>
            <select
              id="cardType"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              required
            >
              <option value="">-- Select --</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mailingAddress">Mailing Address:</label>
            <input
              type="text"
              id="mailingAddress"
              value={mailingAddress}
              onChange={(e) => setMailingAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Next</button>
        </form>
      </header>
    </div>
  );
}

export default Card;