import React from 'react';

import { Provider } from 'react-redux';

import Head from 'next/head';
import App, { AppProps } from 'next/app';
import { Store } from 'redux';

import withReduxStore from '../utils/with-redux-store';
import { appWithTranslation } from '../utils/with-i18next';

import 'typeface-metropolis';
import '@typefaces-pack/typeface-inter';

class Srr extends App<AppProps & { reduxStore: Store }> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>react-next-boilerplate</title>
        </Head>

        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    );
  }
}

export default appWithTranslation(withReduxStore(Srr));
