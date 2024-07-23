import React from 'react';
import AchievementLabel from './AchievementLabel.jsx';
import { Container } from '../common/index.js';
import AchievementContainer from './AchievementContainer.jsx';

const AchievementWrapper = () => {
  return (
    <Container $width="850px" $height="590px" $border={'1px solid blue'}>
      <AchievementLabel />
      <AchievementContainer />
    </Container>
  );
};

export default AchievementWrapper;
