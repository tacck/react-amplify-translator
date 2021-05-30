import './App.css';
import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { indigo } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';

import TextInputArea from './TextInputArea';
import TexrtResultArea from './TextResultArea';

import Predictions from '@aws-amplify/predictions';

function App() {
  const translate = async (message) => {
    if (message === '' || fromLanguage === '' || toLanguage === '') {
      setMessage('');
      return;
    }

    const result = await Predictions.convert({
      translateText: {
        source: {
          text: message,
          language: fromLanguage
          // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
        },
        targetLanguage: toLanguage
      }
    });
    setMessage(result.text);
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
    </Container>
  );
}

export default App;
