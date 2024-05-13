import React, { useState } from 'react';

import RootRequest from './RootRequest';
import GetAssetRequest from './GetAssetRequest';
import CreateAssetRequest from './CreateAssetRequest';
import UpdateAssetStatusRequest from './UpdateAssetStatusRequest';
import DeleteAssetRequest from './DeleteAssetRequest';

function App() {
  const [requestType, setRequestType] = useState('');

  const requestComponents: { [key: string]: React.ReactNode } = {
    root: <RootRequest />,
    getAsset: <GetAssetRequest />,
    createAsset: <CreateAssetRequest />,
    updateAssetStatus: <UpdateAssetStatusRequest />,
    deleteAsset: <DeleteAssetRequest />,
  };

  return (
    <div className="App">
      <select title='Dropbox requests' value={requestType} onChange={e => setRequestType(e.target.value)}>
        <option value="">Select a request</option>
        <option value="root">Root</option>
        <option value="getAsset">Get Asset</option>
        <option value="createAsset">Create Asset</option>
        <option value="updateAssetStatus">Update Asset Status</option>
        <option value="deleteAsset">Delete Asset</option>
      </select>

      {requestComponents[requestType]}
    </div>
  );
}

export default App;