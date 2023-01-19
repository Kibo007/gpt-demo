require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Openai = require('openai');

const { Configuration, OpenAIApi } = Openai;

const app = express();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANISATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/api', async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: message,
    max_tokens: 4000,
    temperature: 0,
  });

  if (response.data?.choices) {
    res.json({
      message: response.data?.choices[0],
    });
  }
});

module.exports = app;
