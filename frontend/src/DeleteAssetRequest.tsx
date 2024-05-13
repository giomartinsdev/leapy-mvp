import React, { useState } from 'react';
import useInput from './useInput';

const DeleteClientRequest = () => {
  const assetCode = useInput('');
  const [responseText, setResponseText] = useState(''); 

  const handleDeleteClient = async () => {
    const response = await fetch(`http://localhost:3000/delAsset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        asset_code: assetCode.value,
      }),
    });
    const data = await response.text();
    setResponseText(data);
  };

  return (
    <div>
      <input {...assetCode} placeholder="Asset Code" />
      <button onClick={handleDeleteClient}>Delete Client</button>
      <p>{responseText}</p>
    </div>
  );
};

export default DeleteClientRequest;