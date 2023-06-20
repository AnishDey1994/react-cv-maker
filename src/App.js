import React, { useState, useRef } from 'react';

import JSONEditor from './jsonEditor/jsonEditor';
import ViewCv from './viewCv/viewCv';
import ReactToPrint from 'react-to-print';

import data from './config.json';
import './App.css';

const App = () => {
  const printableRef = useRef(null);
  const initialJsonData = data;

  const [jsonData, setJsonData] = useState(initialJsonData);
  const [isEditMode, setEditMode] = useState(false);

  const handleViewCV = (editedJson) => {
    setEditMode(!isEditMode);
    setJsonData(editedJson);
  }

  return (
    <div className="App">
      {!isEditMode ?
        <div className='appButtonController'>
          <button className="cvEditButton" onClick={() => setEditMode(!isEditMode)}>
            {isEditMode ? 'View' : 'Edit'}
          </button>
          <ReactToPrint
            trigger={() => <button className="cvPrintButton" >Print</button>}
            content={() => printableRef.current}
          />
        </div>
        : null}
      {
        isEditMode ?
          <JSONEditor jsonData={jsonData} viewCv={(editedJson) => handleViewCV(editedJson)} />
          : <div ref={printableRef} className='printable-div'><ViewCv jsonData={jsonData} /></div>
      }

    </div>
  );
}

export default App;
