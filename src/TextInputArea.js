import './TextInputArea.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Paper, TextField } from '@material-ui/core';
import LanguageSelector from './LanguageSelector';

export default function TexrtInputArea(props) {
  const [message, setMessage] = useState(props.message);

  const handleChange = (event) => {
    console.log('handleChange', event.target.value);
    setMessage(event.target.value);
  };

  const handleBlur = (event) => {
    console.log('handleBlur', event.target.value);
    props.onMessageChange(event.target.value);
  };

  return (
    <Paper variant="outlined">
      <div>
        <LanguageSelector onLanguageChange={props.onLanguageChange}></LanguageSelector>
      </div>
      <Box mx={1} my={2}>
        <TextField
          className="input-area"
          label="Input"
          multiline
          rows={20}
          variant="outlined"
          value={message}
          onChange={handleChange}
          autoFocus
          onBlur={handleBlur}
        />
      </Box>
    </Paper>

  );
}

TexrtInputArea.propTypes = {
  message: PropTypes.string,
  onMessageChange: PropTypes.func,
  onLanguageChange: PropTypes.func
};

TexrtInputArea.defaultProps = {
  message: ''
};
