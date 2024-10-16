import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig'; 
import { Link, useNavigate } from 'react-router-dom';  
import { doc, setDoc } from 'firebase/firestore';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log("User signed up:", userCredential);
        // Store user info in Firestore
        await setDoc(doc(db, 'users', userCredential.user.uid), { name, city, email });
      })
      .catch((error) => {
        setError(error.message);  // Show error message
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default SignUp;