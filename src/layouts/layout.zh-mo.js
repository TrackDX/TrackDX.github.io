import React from 'react';
import Layout from './layout';
import messages from '../data/messages/zh-mo';

const LayoutZHMO = (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
);

export default LayoutZHMO