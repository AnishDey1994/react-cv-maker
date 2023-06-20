import React, { useState } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import './jsonEditor.css';

function JSONEditor(props) {
  const initialJsonData = props.jsonData;

  const [jsonData, setJsonData] = useState(initialJsonData);
  const [editedData, setEditedData] = useState(initialJsonData);
  const [jsonError, setJsonError] = useState(false);

  const handleJsonChange = (data) => {
    setEditedData(data.jsObject);
    setJsonError(data.error);
  };

  const handleSave = () => { };

  const handleView = () => {
    setJsonData(editedData);
    props.viewCv(editedData);
  };

  // const handleReset = () => {
  //   setEditedData(jsonData);
  //   setJsonError(true);
  // };

  return (
    <div className="json-editor-wrapper">
      <div className={`json-editor-validation-error ${jsonError && 'errorVisible'}`}>
        {jsonError && `Invalid JSON format!! Line: ${jsonError.line}, ${jsonError.reason}`}
      </div>
      <div className="json-editor-heading">CV Editor</div>
      <JSONInput
        id="json-editor"
        placeholder={jsonData}
        locale={locale}
        height="500px"
        width="100%"
        onBlur={handleJsonChange}
      />
      <div className="json-editor-buttons">
        <button className={`json-editor-reset-button ${jsonError && 'disabled'}`} onClick={handleView} disabled={jsonError && true}>
          View
        </button>
        <button className="json-editor-save-button disabled" onClick={handleSave} disabled={true} title="Coming soon">
          Save
        </button>
      </div>
    </div>
  );
}

export default JSONEditor;
