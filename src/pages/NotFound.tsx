import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Button } from '../components/shared';

export function NotFound() {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <div className="grid gap-5 place-items-center">
      <h1 className="text-2xl">Oops!</h1>
      <h1 className="sm:text-6xl font-bold text-2xl !text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600">
        404 🐒
      </h1>
      <p>Sorry, an unexpected error has occurred. You can try going:</p>
      <div className="flex items-center gap-2">
        <button className="bg-secondary" onClick={handleGoBack}>
          Back
        </button>
        <p>or</p>
        <button className="bg-accent2" onClick={() => navigate('/')}>
          Home
        </button>
      </div>
    </div>
  );
}
