import React, { useState } from 'react';
import useInput from '../useInput';

const UpdateClientRequest = () => {
  const newValue = useInput('');
  const assetCode = useInput('');
  const [responseText, setResponseText] = useState(''); 

  const handleUpdateClient = async () => {
    const response: Response = await fetch(`http://localhost:3000/updAsset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        column: "status_code",
        value: newValue.value,
        asset_code: assetCode.value,
      }),
    });
    const data = await response.text();
    setResponseText(data);
  };

  return (
    <div>
      <input {...assetCode} placeholder="Codigo do ativo" />
      <input {...newValue} placeholder="Novo codigo de status" />
      <button onClick={handleUpdateClient}>Atualizar dados do ativo</button>
      <p>{responseText}</p> 
    </div>
  );
};

export default UpdateClientRequest;