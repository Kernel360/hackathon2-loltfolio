import React from 'react';
import * as S from '../style';

const AchievementLabel = ({ username }) => {
  return (
    <S.Margin $margin={['0px 0px 24px 0px']}>
      <S.Text
        $color="#b49254"
        $fontSize="32px"
        $fontWeight="700"
        $textShadow="1px 1px 2px darkgray"
        $lineHeight="150%"
      >
        {username ? `${username}의 업적` : 'Username의 업적'}
      </S.Text>
    </S.Margin>
  );
};

export { AchievementLabel };
