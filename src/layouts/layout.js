import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header/Header'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from "gatsby"
import { FormattedMessage, IntlProvider } from 'react-intl';
import 'intl';
import './layout.css'
import Footer from '../components/Footer/Footer';
import Copywrite from '../components/Copyright/Copywrite';

const Layout = ({ children, location, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              keywords
              languages {
                defaultLangKey
                langs
              }      
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname;
        const { languages, title, keywords } = data.site.siteMetadata;
        const { langs, defaultLangKey } = languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
        return (
          <IntlProvider
            locale={langKey}
            messages={i18nMessages}
          >
            <div>
              <Helmet
                title={title}
                meta={[
                  { name: 'description', content: <FormattedMessage id="description" />},
                  { name: 'keywords', content: keywords },
                ]}
              />
              <Header title={title} langs={langsMenu} />
              <div>
                {children}
              </div>
              <Footer />
              <Copywrite />
            </div>
          </IntlProvider>
        )
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
