import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-speech-kit', () => {
  return {
    useSpeechRecognition: () => {
      return {
        supported: true,
      };
    },
    useSpeechSynthesis: () => {
      return {};
    },
  };
});

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Recording/i);
  expect(linkElement).toBeInTheDocument();
});
