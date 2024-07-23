import React from 'react';
import AchievementCard from './AchievementCard.jsx';
import { Flex } from '../common/index.js';

const AchievementContainer = () => {
  return (
    <Flex $wrap="wrap" $gap="16px 16px">
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
    </Flex>
  );
};

export default AchievementContainer;
