import React, { useState } from 'react';
import { RecordButton } from './components/RecordButton';
import { SpeachText } from './components/SpeachText';
import { ResponseAi } from './components/ResponseAi';
import { LanguageSelector } from './components/LanguageSelector';
import { SpeakButton } from './components/SpeakButton';
import { Layout, Row } from './components/Layout';
import './App.css';

const App = () => {
  const [speachText, setSpeachText] = useState('');
  const [response, setResponse] = useState('');
  const [lang, setLang] = useState('en-AU');
  const [isResponseLoading, setIsResponseLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsResponseLoading(true);
      const res = await fetch('http://localhost:3001/api', {
        method: 'POST',
        body: JSON.stringify({ message: speachText }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setIsResponseLoading(false);
      setResponse(data.message.text);
    } catch (error) {
      setIsResponseLoading(false);
      console.log(error);
    }
  };

  return (
    <Layout>
      <Row>
        <RecordButton
          handleChange={setSpeachText}
          handleSubmit={handleSubmit}
          lang={lang}
        />
        <SpeakButton text={response} lang={lang} />
      </Row>

      <SpeachText speachText={speachText} />
      <ResponseAi response={response} loading={isResponseLoading} />
      <LanguageSelector setLang={setLang} lang={lang} />
    </Layout>
  );
};

export default App;
