import React from 'react';
import { AchievementCard } from './AchievementCard.jsx';
import * as S from '../style';

const AchievementContainer = () => {
  return (
    <S.Flex $wrap="wrap" $gap="16px 16px">
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
    </S.Flex>
  );
};

export { AchievementContainer };
