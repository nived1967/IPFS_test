import React, { useState } from 'react';
import UploadFile from './UploadFile';
import DownloadFile from './DownloadFile';

const App = () => {
    const [hashValue, setHashValue] = useState(null);

    const handleFileUpload = (hashValue) => {
        setHashValue(hashValue);
    };

    return (
        <div>
            <h1>Upload and Download File</h1>
            <UploadFile onFileUpload={handleFileUpload} />
            {hashValue && <DownloadFile hashValue={hashValue} />}
        </div>
    );
};

export default App;
