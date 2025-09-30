import './Otp.css';
import { useNavigate } from 'react-router-dom';

function Otp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/kyc');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Let's Verify your Number</h2>
        <form className="otp-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="otp">Enter OTP:</label>
            <input type="text" id="otp" name="otp" maxLength="6" required />
          </div>
          <div className="button-group">
            <button type="button" className="submit-button">Resend</button>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default Otp;