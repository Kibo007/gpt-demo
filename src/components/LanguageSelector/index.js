import styles from './Layout.module.css';

const languageOptions = [
  { label: 'Croatian', value: 'hr-HR' },
  { label: 'Cambodian', value: 'km-KH' },
  { label: 'Deutsch', value: 'de-DE' },
  { label: 'English', value: 'en-AU' },
  { label: 'Farsi', value: 'fa-IR' },
  { label: 'Français', value: 'fr-FR' },
  { label: 'Italiano', value: 'it-IT' },
  { label: '普通话 (中国大陆) - Mandarin', value: 'zh' },
  { label: 'Portuguese', value: 'pt-BR' },
  { label: 'Español', value: 'es-MX' },
  { label: 'Svenska - Swedish', value: 'sv-SE' },
];

export const LanguageSelector = ({ setLang, lang }) => {
  const changeLang = (event) => {
    setLang(event.target.value);
  };

  return (
    <div className={styles.languageSelector}>
      <label htmlFor="language">Language: </label>
      <select
        className={styles.select}
        form="speech-recognition-form"
        id="language"
        value={lang}
        onChange={changeLang}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
