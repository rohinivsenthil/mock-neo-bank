import React, { useState } from 'react';
import './Account.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Account() {
  const [cardCreated, setCardCreated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the user is returning from the card activation page
  React.useEffect(() => {
    if (location.state?.cardCreated) {
      setCardCreated(true);
    }
  }, [location.state]);

  const handleViewDetails = () => {
  };

  const handleCreateCard = () => {
    navigate('/card');
  };

  const handleViewCard = () => {
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Your Account!</h2>
        <div className="account-actions">
          <button className="account-button" onClick={handleViewDetails}>
            View Account Details
          </button>
          {cardCreated ? (
            <button className="account-button" onClick={handleViewCard}>
              View Card
            </button>
          ) : (
            <button className="account-button" onClick={handleCreateCard}>
              Create a Card
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default Account;