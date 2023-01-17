import React, { useState } from 'react';
import { SpeachToText } from './components/SpeachToText';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:3001/api', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setResponse(data.message.text);
  };

  return (
    <div>
      <div>{response && <p>{response}</p>}</div>

      <SpeachToText handleChange={setMessage} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
