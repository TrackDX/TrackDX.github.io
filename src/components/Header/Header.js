import React from 'react'
import Logo from '../Logo/Logo';
import SelectLanguage from '../LanguageSelector/LanguageSelector';
import './Header.css';
import Nav from '../Nav/Nav';

const Header = (props) => (
  <div className="header">
    <div className="header-left">
      <Logo title={props.title}/>
    </div>
    <div className="header-right">
      <Nav />
      <SelectLanguage langs={props.langs} />
    </div>
  </div>
)

export default Header;
