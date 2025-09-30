import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/otp');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Register with Neo Bank!</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Phone Number:</label>
            <input type="tel" id="mobile" name="mobile" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <button type="submit" className="submit-button">Next</button>
        </form>
      </header>
    </div>
  );
}

export default Register;