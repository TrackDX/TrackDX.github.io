import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import './LanguageSelector.css'

const SelectLanguage = (props) => {
  console.log(props.langs)
  const lastIndex = props.langs.length - 1; 
  const links = props.langs.map((lang, index) =>
    <Link to={lang.link} key={lang.langKey}>
      <li className={`${lang.selected ? 'active' : ''}`} selected={lang.selected}>
        <FormattedMessage id={lang.langKey} />
      </li>
      {index < lastIndex ? '/' : ''}
    </Link>
  );

  return (
    <section className="language-selector">
      <ul>
        {links}
      </ul>
    </section>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
