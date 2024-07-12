import React, { useState, useEffect } from 'react';
import './LoginSignup.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthError, selectIsAuthenticated, selectIsProfileComplete } from '../../Content/reducers';
import { loginUser, signupUser } from '../../Content/actions';

export const LoginSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isProfileComplete = useSelector(selectIsProfileComplete);
  const authError = useSelector(selectAuthError);

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    emailError: '',
    passwordError: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      if (isProfileComplete) {
        navigate('/home');
      } else {
        navigate('/profile');
      }
    }
  }, [isAuthenticated, isProfileComplete, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear previous error when user starts typing
    setFormErrors({
      ...formErrors,
      [`${name}Error`]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    if (isLogin) {
      dispatch(loginUser(formData));
    } else {
      dispatch(signupUser(formData));
    }
  };

  const isFormValid = () => {
    let valid = true;

    // Email validation
    if (!formData.email.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        emailError: 'Email is required',
      }));
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        emailError: 'Email is invalid',
      }));
      valid = false;
    }

    // Password validation (minimum 6 characters)
    if (!formData.password.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: 'Password is required',
      }));
      valid = false;
    } else if (formData.password.length < 6) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: 'Password must be at least 6 characters',
      }));
      valid = false;
    }

    return valid;
  };

  return (
    <div className="login-signup-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.emailError && <div className="error-message">{formErrors.emailError}</div>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {formErrors.passwordError && <div className="error-message">{formErrors.passwordError}</div>}
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      {authError && <div className="error-message">{authError}</div>}
      <p className='message'>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign up here' : 'Login here'}
        </span>
      </p>
    </div>
  );
};
