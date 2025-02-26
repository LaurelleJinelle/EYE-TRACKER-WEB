import { useEffect } from 'react';
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
    <div>
      <h1>Eye Tracker Home</h1>
      <p>Look around and see the gaze data in the console!</p>
    </div>
  );
}

export default Home;
