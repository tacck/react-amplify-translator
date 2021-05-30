import './TextInputArea.css';
import React from 'react';
import PropTypes from 'prop-types';

import { Box, Paper, TextField } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import LanguageSelector from './LanguageSelector';

export default function TexrtResultArea(props) {

  return (
    <Paper variant="outlined" >
      <div>
        <LanguageSelector onLanguageChange={props.onLanguageChange}></LanguageSelector>
      </div>
      <Box mx={1} my={2}>
        <TextField
          style={{ backgroundColor: grey[200] }}
          className="input-area input-area-readonly"
          label="Result"
          multiline
          rows={20}
          variant="outlined"
          aria-readonly
          value={props.message}
        />
      </Box>
    </Paper>
  );
}

TexrtResultArea.propTypes = {
  message: PropTypes.string,
  onLanguageChange: PropTypes.func
};

TexrtResultArea.defaultProps = {
  message: ''
};
