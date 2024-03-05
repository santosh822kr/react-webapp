import { useContext, useState } from 'react';
import './login.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navitage = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: 'LOGIN', payload: user });
        navitage('/');
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm' onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type='email'
          className='loginInput'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          className='loginInput'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='loginButton' type='submit'>
          Login
        </button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
