import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { useTranslation } from 'utils/with-i18next';
import Spiner from 'components/Spiner';

const Container = styled('div')`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 1024px;
  text-align: center;
`;

const ButonGetApi = styled('button')`
  margin: 0;
  padding: 0 3.5rem;
  height: 2.81rem;
  line-height: 2.8rem;
  font-size: 16px;
  font-weight: 300;
  border-radius: 7px;
  background-color: #09d3ac;
  box-shadow: 0 4px 14px 0 rgba(9, 211, 172, 0.35);
  color: white;
  cursor: pointer;
  border: none;
  margin-bottom: 55px;
`;

const ShowcasesRow = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(0, 300px);
`;

const ShowcasesItem = styled('div')`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  height: auto;
  color: #757575;
`;

const ImgSrc = styled('img')`
  width: 100%;
`;

const Title = styled('h3')`
  width: 100%;
`;

const LinkShoucase = styled('a')`
  width: 100%;
  text-decoration: none;
  color: #09d3ac;

  &:hover {
    text-decoration: underline;
  }
`;

export function Showcases(props) {
  const { t } = useTranslation('common');
  const { data, onGetShowcases } = props;

  const { loading, showcases } = data;

  if (loading) {
    return <Spiner />;
  }

  return (
    <Container id="exampleGetApi">
      <ButonGetApi onClick={onGetShowcases}>{t('phrases.getShowcases')}</ButonGetApi>

      <ShowcasesRow>
        {showcases &&
          showcases.length &&
          showcases.map(item => (
            <ShowcasesItem key={item.link}>
              <ImgSrc src={item.src} alt={item.title} />

              <Title>{item.title}</Title>

              <LinkShoucase href={item.link} target="_blank">
                {item.link}
              </LinkShoucase>
            </ShowcasesItem>
          ))}
      </ShowcasesRow>
    </Container>
  );
}

Showcases.propTypes = {
  data: PropTypes.object,
  onGetShowcases: PropTypes.func,
};

export default Showcases;