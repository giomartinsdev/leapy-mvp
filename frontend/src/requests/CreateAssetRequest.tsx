import React, { useState } from 'react';
import useInput from '../useInput';

const CreateAssetRequest = () => {
  const asset_code = useInput('');
  const description = useInput('');
  const status_code = useInput('');
  const [responseText, setResponseText] = useState(''); 


  const handleCreateClient = async () => {
    const response = await fetch('http://localhost:3000/addAsset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        asset_code: asset_code.value,
        description: description.value,
        status_code: status_code.value,
      }),
    });
    const data = await response.text();
    setResponseText(data);
  };

  return (
    <div>
      <input {...asset_code} placeholder="Codigo do ativo" />
      <input {...description} placeholder="Descrição" />
      <input {...status_code} placeholder="Codigo de status do ativo" />
      <button onClick={handleCreateClient}>Criar novo ativo</button>
      <p>{responseText}</p>
    </div>
  );
};

export default CreateAssetRequest;