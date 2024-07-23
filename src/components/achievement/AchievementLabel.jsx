import React from 'react';
import { Text } from '../common/index.js';
import { Margin } from '../common/Margin.jsx';

const AchievementLabel = () => {
  return (
    <Margin $margin={['0px 0px 24px 0px']}>
      <Text
        $color="#b49254"
        $fontSize="32px"
        $fontWeight="700"
        $textShadow="1px 1px 2px darkgray"
        $lineHeight="150%"
      >
        Username의 업적
      </Text>
    </Margin>
  );
};

export default AchievementLabel;
