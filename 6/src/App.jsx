import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// BEGIN (write your solution here)
const Factorial = ({ value }) => {
  const factorial = (number) => {
    if (number <= 0) return 1;
    return number * factorial(number - 1);
  };

  return <div>{`Factorial of ${value} is ${factorial(value)}`}</div>;
};

const App = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState(0);

  const handleLangSwitch = (e) => {
    const lang = e.target.dataset.testid;
    i18n.changeLanguage(lang);
  };

  const getClassName = (currLang) => (
    i18n.language === currLang
      ? 'btn btn-primary'
      : 'btn btn-outline-primary'
  );

  return (
    <div className="App">
      <div className="btn-group mb-3" role="group">
        <button
          type="button"
          data-testid="en"
          className={getClassName('en')}
          onClick={handleLangSwitch}
        >
          {t('languages.en')}
        </button>
        <button
          type="button"
          data-testid="ru"
          className={getClassName('ru')}
          onClick={handleLangSwitch}
        >
          {t('languages.ru')}
        </button>
      </div>
      <br />
      <div className="btn-group mb-3" role="group">
        {[1, 5, 10, 20].map((number) => (
          <button
            key={number}
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setValue(number)}
          >
            {`${t('factorial')} ${number}`}
          </button>
        ))}
      </div>
      <Factorial value={value} />
    </div>
  );
};
// END

export default App;

