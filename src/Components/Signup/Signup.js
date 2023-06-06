import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { firebase } = useContext(FirebaseContext);



  const handleSubmit = (e) => {
    e.preventDefault();

    // checking of null validation
    if (!username || !email || !phone || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Basic email format validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Password check
    if (password.length < 6) {
      setError('Password should be at least 6 characters long');
      return;
    }

    setError('');

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({ displayName: username })
          .then(() => {
            firebase
              .firestore()
              .collection('users')
              .add({
                id: result.user.uid,
                username: username,
                phone: phone,
              })
              .then(() => {
                history.push('/login');
              });
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            name="phone"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        {error && <p className="error">{error}</p>}
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
