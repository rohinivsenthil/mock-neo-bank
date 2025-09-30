import React, { useState } from 'react';
import './Kyc.css';
import { useNavigate } from 'react-router-dom';

function Kyc() {
  const [passportDone, setPassportDone] = useState(false);
  const [photoCheckDone, setPhotoCheckDone] = useState(false);
  const navigate = useNavigate();

  const handlePassportClick = () => {
    setPassportDone(true);
  };

  const handlePhotoCheckClick = () => {
    setPhotoCheckDone(true);
  };

  const handleContinue = () => {
    if (passportDone && photoCheckDone) {
      navigate('/terms');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Perform a KYC Check</h2>
        <div className="kyc-actions">
          <button
            className={`kyc-button ${passportDone ? 'done' : ''}`}
            onClick={handlePassportClick}
          >
            {passportDone ? '✔ Passport/License Uploaded' : 'Upload Passport/License'}
          </button>
          <button
            className={`kyc-button ${photoCheckDone ? 'done' : ''}`}
            onClick={handlePhotoCheckClick}
          >
            {photoCheckDone ? '✔ Photo Check Done' : 'Perform Photo Check'}
          </button>
        </div>
        <button
          className="continue-button"
          onClick={handleContinue}
          disabled={!passportDone || !photoCheckDone}
        >
          Continue
        </button>
      </header>
    </div>
  );
}

export default Kyc;