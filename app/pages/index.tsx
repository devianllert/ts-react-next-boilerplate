import React from 'react';

import Home from '../containers/Home';

const IndexPage = () => {
  return <Home />;
};

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default IndexPage;
