import React from 'react';
import { AchievementLabel } from './AchievementLabel.jsx';
import { AchievementContainer } from './AchievementContainer.jsx';
import * as S from '../style';

const AchievementWrapper = ({ username }) => {
  return (
    <S.Container $width="850px" $height="590px" $border={'1px solid blue'}>
      <AchievementLabel username={username} />
      <AchievementContainer />
    </S.Container>
  );
};

export { AchievementWrapper };
