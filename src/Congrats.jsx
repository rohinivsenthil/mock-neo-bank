import React from 'react';
import './Congrats.css';
import { useNavigate } from 'react-router-dom';

function Congrats() {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/account'); // Replace '/account' with the actual account home route
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Congratulations!</h2>
        <h3>You have successfully created your account.</h3>
        <button className="home-button" onClick={handleGoToHome}>
          Go to Account Home
        </button>
      </header>
    </div>
  );
}

export default Congrats;