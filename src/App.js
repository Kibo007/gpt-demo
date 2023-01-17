import React, { useState } from 'react';
import { RecordButton } from './components/RecordButton';
import { SpeachText } from './components/SpeachText';
import { ResponseAi } from './components/ResponseAi';
import { LanguageSelector } from './components/LanguageSelector';
import { Layout } from './components/Layout';
import './App.css';

const App = () => {
  const [speachText, setSpeachText] = useState('');
  const [response, setResponse] = useState('');
  const [lang, setLang] = useState('en-AU');

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:3001/api', {
      method: 'POST',
      body: JSON.stringify({ message: speachText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setResponse(data.message.text);
  };

  return (
    <Layout>
      <RecordButton
        handleChange={setSpeachText}
        handleSubmit={handleSubmit}
        lang={lang}
      />
      <SpeachText speachText={speachText} />
      <ResponseAi response={response} />
      <LanguageSelector setLang={setLang} lang={lang} />
    </Layout>
  );
};

export default App;
