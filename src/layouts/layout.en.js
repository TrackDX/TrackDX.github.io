import React from 'react';
import Layout from './layout';
import messages from '../data/messages/en';

const LayoutEn = (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
);

export default LayoutEn