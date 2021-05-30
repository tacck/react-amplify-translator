import { Box, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function LanguageSelector(props) {
  const [language, setLanguage] = useState(props.language);
  const langs = [
    {
      name: 'English',
      value: 'en'
    },
    {
      name: 'Japanese',
      value: 'ja'
    }
  ];

  const handleChange = (event) => {
    setLanguage(event.target.value);
    props.onLanguageChange(event.target.value);
  };

  return (
    <Box m={2}>
      <Select
        labelId="language"
        value={language}
        onChange={handleChange}
        label="Age"
      >
        {
          langs.map(i => (
            <MenuItem key={i.value} value={i.value}>{i.name}</MenuItem>
          )
          )
        }
      </Select>
    </Box>
  );
}

LanguageSelector.propTypes = {
  language: PropTypes.string,
  onLanguageChange: PropTypes.func
};

LanguageSelector.defaultProps = {
  language: ''
};
