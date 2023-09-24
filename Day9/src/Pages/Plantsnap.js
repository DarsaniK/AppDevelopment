import React from 'react';

function PlantSnap() {
  return (
    <div>
      <h1>My React App with PlantSnap Integration</h1>
      <p>This is my React app content.</p>
      
      {/* Embed PlantSnap using an iframe */}
      <iframe
        title="PlantSnap"
        src="https://www.plantsnap.com/"
        width="100%"
        height="500px" // You can adjust the height as needed
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default PlantSnap;
