import React, { useState } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

import data from '../config.json';
import './jsonEditor.css';

function JSONEditor() {
  const initialJsonData = data

  const [jsonData, setJsonData] = useState(initialJsonData);
  const [editedData, setEditedData] = useState(initialJsonData);
  const [isValidJson, setIsValidJson] = useState(true);

  const handleJsonChange = (data) => {
    setEditedData(data.json);
    setIsValidJson(true);
  };

  const handleSave = () => {
    try {
      JSON.parse(JSON.stringify(editedData));
      setJsonData(editedData);
      console.log('Saved JSON data:', editedData);
    } catch (error) {
      setIsValidJson(false);
      console.error('Invalid JSON format:', error);
    }
  };

  const handleReset = () => {
    setEditedData(jsonData);
    setIsValidJson(true);
  };

  return (
    <div className="json-editor-container">
      <h2 className="json-editor-heading">JSON Editor</h2>
      {!isValidJson && (
        <p className="json-editor-validation-error">Invalid JSON format!</p>
      )}
      <JSONInput
        id="json-editor"
        placeholder={jsonData}
        locale={locale}
        height="500px"
        width="100%"
        onChange={handleJsonChange}
      />
      <div className="json-editor-buttons">
        <button className="json-editor-save-button" onClick={handleSave}>
          Save
        </button>
        <button className="json-editor-reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default JSONEditor;
