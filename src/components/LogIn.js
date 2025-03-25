import { useState } from "react";
import UserIcon from "./icons/UserIcon";
import "./LogIn.css";

const LogIn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openLogIn = () => setIsOpen(true);
  const closeLogIn = () => setIsOpen(false);

  return (
    <div className="login-container">
      <button className="login-btn-open" onClick={openLogIn}>
        <UserIcon /> <span>My Account</span>
      </button>
      {isOpen && (
        <div className="login-box">
          <div className="login-content">
            <h2>Login or Create an Account</h2>
            <button className="login-btn-close" onClick={closeLogIn}>
              X
            </button>
            <form className="login-form">
              <div>
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>

            <div className="login-socials">
              <p>Or log in with:</p>
              <button className="login-social-btn">Login with Google</button>
              <button className="login-social-btn">Login with Facebook</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
