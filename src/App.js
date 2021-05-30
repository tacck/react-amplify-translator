import './App.css';
import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TextInputArea from './TextInputArea';
import TexrtResultArea from './TextResultArea';
import { indigo } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';

function App() {
  const translate = (message) => {
    if (message === '' || fromLanguage === '' || toLanguage === '') {
      setMessage('');
      return;
    }
    console.log('translate', message);
    setMessage(message);
  };
  const [message, setMessage] = useState('');
  const [fromLanguage, setFromLanguage] = useState('');
  const [toLanguage, setToLanguage] = useState('');

  return (
    <Container maxWidth="lg">
      <div className="App">
        <header style={{ color: 'white', backgroundColor: indigo[600] }}>
          <Typography variant="h3">Translator</Typography>
        </header>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextInputArea
            message=""
            onMessageChange={(m) => { translate(m); }}
            onLanguageChange={(l) => { setFromLanguage(l); }} />
        </Grid>

        <Grid item xs={6}>
          <TexrtResultArea
            message={message}
            onLanguageChange={(l) => { setToLanguage(l); }} />
        </Grid>
      </Grid>
    </Container >
  );
}

export default App;
