import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { schema, uischema } from './schema';
import QuillEditorControl from './QuillEditor';

const customRenderers = [
  ...materialRenderers,
  {
    tester: (uischema) => {
      const scope = uischema.scope;
      let score = -1;

      // Check if the scope is defined and ends with 'text'
      if (scope && /text$/.test(scope)) {
        score = 10;
      }

      console.log(`Testing scope: ${scope}, Score: ${score}`);

      return score;
    },
    renderer: QuillEditorControl
  },
];

const MyForm = () => {
  const [formData, setFormData] = useState(null);

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'updated_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          setFormData(json);
        } catch (error) {
          alert('Failed to load JSON: Invalid JSON format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const loadFromUrl = async () => {
    try {
      const response = await fetch('https://dsra.theodi.org/json/checkpoints.json');
      const json = await response.json();
      setFormData(json);
    } catch (error) {
      alert('Failed to load JSON from URL.');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <p>
          <strong>Warning:</strong> This tool does not save state. Please download your changes and re-upload them to edit again later.
        </p>
        <p>
          <strong>How to use:</strong><br/>Upload your json file containing the data sharing risk assessments data (the latest version in the live tool can be downloaded <a href="https://dsra.theodi.org/json/checkpoints.json" target="_blank">here</a>)<br/>Make your changes<br/>Click download to save your changes<br/>
        </p>
        <button onClick={handleDownload} disabled={!formData}>Download</button>
        <input
          type="file"
          accept=".json"
          onChange={handleUpload}
          style={{ marginLeft: '10px' }}
        />
      </div>

      {formData ? (
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={formData}
          renderers={customRenderers}
          cells={materialCells}
          onChange={({ data, errors }) => {
            console.log(data, errors);
            setFormData(data); // Update the form data state
          }}
        />
      ) : (
        <p>No data loaded. Please load data from the live tool or upload a JSON file.</p>
      )}
    </div>
  );
};

export default MyForm;
