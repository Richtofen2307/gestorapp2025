import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="not-found-container">
      <img 
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExanpoN204NHRtZDZpbm8wdnZ3ODc2dTFwcmIzZWU2ODk2NTY4bWphaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ZteuxS3YQny98Na/giphy.gif" 
        alt="Not Found" 
        className="not-found-gif"
      />
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <button onClick={() => navigate('/')} className="home-button">
        Go Home
      </button>
    </div>
  );
};

export default NotFound;

