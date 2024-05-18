import React from 'react';

const RootRequest = () => {
  
  const handleRoot = async () => {
    const response = await fetch('http://localhost:3000/');
    const data = await response.text();
    console.log(data);
  };

  return <button onClick={handleRoot}>Root</button>;
};

export default RootRequest;