import React, { useState } from 'react';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(() => {
    // Check if the preloader has already been shown in this session
    return !sessionStorage.getItem('preloader_shown');
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem('preloader_shown', 'true');
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen relative bg-black text-white">
      {loading && <Preloader onComplete={handleLoadingComplete} />}

      {!loading && (
        <div>
          <Navbar />
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;