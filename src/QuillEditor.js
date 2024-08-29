import React, { forwardRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { FormControl, InputLabel, Box } from '@mui/material';

const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

const QuillEditorControl = forwardRef((props, ref) => {
  const { data, handleChange, path, label, required } = props;

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel shrink required={required}>
          {label}
        </InputLabel>
        <ReactQuill
          ref={ref}
          value={data || ''}
          onChange={(value) => handleChange(path, value)}
          modules={modules}
          className="quill-editor"
          style={{ height: 'auto', minHeight: '150px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </FormControl>
    </Box>
  );
});

export default withJsonFormsControlProps(QuillEditorControl);
