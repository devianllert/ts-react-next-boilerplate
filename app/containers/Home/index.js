import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import Layout from 'components/Layout';
import Features from 'components/Features';
import Showcases from 'components/Showcases';

import saga from './saga';
import reducer from './reducer';
import { getShowcases } from './actions';
import { selectShowcases } from './selectors';

export function Home() {
  useInjectSaga({ key: 'showcases', saga });
  useInjectReducer({ key: 'showcases', reducer });

  const showcases = useSelector(selectShowcases());
  const dispatch = useDispatch();

  const onGetShowcases = () => dispatch(getShowcases());

  return (
    <Layout>
      <Features />

      <Showcases onGetShowcases={onGetShowcases} data={showcases} />
    </Layout>
  );
}

export default Home;
