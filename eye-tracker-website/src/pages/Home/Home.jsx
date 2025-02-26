import React, { useEffect } from 'react';
import webgazer from 'webgazer';

function Home() {
  useEffect(() => {
    webgazer.setGazeListener((data) => {
      if (data) {
        console.log(`X: ${data.x}, Y: ${data.y}`);
      }
    }).begin();
    
    return () => {
      webgazer.end();
    };
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl text-gray-800 font-bold mb-4">Eye Tracker Home</h1>
        <p className="text-gray-600">Look around and see the gaze data in the console!</p>
      </div>
    </div>
  );
}

export default Home;
