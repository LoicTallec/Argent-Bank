import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import './login.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Veuillez remplir tous les champs');
      return;
    } 

    try {
      dispatch(logIn({ email, password, rememberMe }));
      setTimeout(() => {
        navigate('/Profile');
      }, 500)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className='login-page'>

        <form className='login' onSubmit={handleSubmit}>
          <figure className='login-top'>
            <FontAwesomeIcon icon={faCircleUser} />
            <h1>Sign In</h1>
          </figure>
          
          <div className='form-group'>
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='form-check'>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label>Remember Me</label>
            
          </div>
          <button type="submit" className='login-button'>Sign In</button>
        </form>
    </main>
  );
};

export default LoginForm;