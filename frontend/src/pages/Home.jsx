import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [userEmail, setUserEmail] = useState();
  const [userUsername, setUserUsername] = useState();
  const navigate = useNavigate();

  // check if there's a token, log in else redirect to log in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = parseJwt(token);
      if (decodedToken && decodedToken.user) {
        setUserEmail(decodedToken.user.email);
        setUserUsername(decodedToken.user.username);
      }
    } else {
      navigate('/');
    }
  }, [])

   // Function to parse JWT token
   const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/')
  };

  return (
    <div>
    <Navbar userUsername={userUsername} handleLogout={handleLogout} />
    <div>
      {/* Your main content here */}
    </div>
  </div>
  )
}

export default Home;