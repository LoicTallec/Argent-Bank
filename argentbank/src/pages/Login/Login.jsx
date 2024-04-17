import React, { useState } from 'react';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    
  };



  // Affichage du formulaire et du message d'erreur
  return (
    <div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
    </div>
  );
};

export default LoginForm;