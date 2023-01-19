import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { SpeakButton } from './index';
import { useSpeechSynthesis } from 'react-speech-kit';

jest.mock('react-speech-kit', () => {
  const speak = jest.fn();
  const cancel = jest.fn();
  return {
    useSpeechSynthesis: () => {
      return {
        speak,
        cancel,
        speaking: false,
        voices: [
          { lang: 'en-US', name: 'English (US)' },
          { lang: 'fr-FR', name: 'Français' },
        ],
      };
    },
  };
});

describe('SpeakButton', () => {
  let text = 'Hello, World!';
  let lang = 'en-US';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    render(<SpeakButton text={text} lang={lang} />);
    expect(screen.getByText(/Read AI response/i)).toBeInTheDocument();
  });

  it('should call speak when button is clicked', () => {
    render(<SpeakButton text={text} lang={lang} />);
    fireEvent.click(screen.getByRole('button'));
    expect(useSpeechSynthesis().speak).toHaveBeenCalled();
  });
});
