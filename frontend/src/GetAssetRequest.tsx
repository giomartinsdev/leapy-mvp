import React, { useState } from 'react';
import useInput from './useInput';

const GetAssetRequest = () => {
  const assetCode = useInput('');
  const [responseText, setResponseText] = useState(''); 

  const handleGetAsset = async () => {
    const response = await fetch(`http://localhost:3000/getAsset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: assetCode.value
      })
    });
    const data = await response.text();
    setResponseText(data);
  };

  return (
    <div>
      <input {...assetCode} placeholder="assetId" />
      <button onClick={handleGetAsset}>Get Client</button>
      <p>{responseText}</p>
    </div>
  );
};

export default GetAssetRequest;