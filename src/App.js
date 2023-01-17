import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <textarea value={message} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <div>{response && <p>{response}</p>}</div>
    </div>
  );
};

export default App;
