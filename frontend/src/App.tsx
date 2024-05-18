import React, { useState } from 'react';
import './App.css';
import RootRequest from './requests/RootRequest';
import GetAssetRequest from './requests/GetAssetRequest';
import CreateAssetRequest from './requests/CreateAssetRequest';
import UpdateAssetStatusRequest from './requests/UpdateAssetStatusRequest';
import DeleteAssetRequest from './requests/DeleteAssetRequest';

function App() {
  const [requestType, setRequestType] = useState('');

  const renderRequestComponent = () => {
    switch (requestType) {
      case 'root':
        return <RootRequest />;
      case 'getAsset':
        return <GetAssetRequest />;
      case 'createAsset':
        return <CreateAssetRequest />;
      case 'updateAssetStatus':
        return <UpdateAssetStatusRequest />;
      case 'deleteAsset':
        return <DeleteAssetRequest />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerenciamento de Ativos</h1>
        <select 
          className="request-select" 
          title="Dropbox requests" 
          value={requestType} 
          onChange={e => setRequestType(e.target.value)}
        >
          <option value="">Selecione um tipo de ação</option>
          <option value="root">Debug</option>
          <option value="getAsset">Buscar dados do ativo</option>
          <option value="createAsset">Criar novo ativo</option>
          <option value="updateAssetStatus">Atualizar status do ativo</option>
          <option value="deleteAsset">Deletar ativo</option>
        </select>
      </header>

      <main className="App-main">
        {renderRequestComponent()}
      </main>
    </div>
  );
}

export default App;