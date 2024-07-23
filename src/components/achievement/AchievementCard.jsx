import React from 'react';
import { color, fontSize } from '../../theme/index.js';
import * as S from '../style';
const imageDefault = 'https://sonobel.com.br/assets/img/loader.gif';
const AchievementCard = ({ img, title, desc }) => {
  return (
    <S.Card
      $width="200px"
      $height="250px"
      $radius="10px"
      $border="1px solid #e7e7e7"
      $boxShadow="1px 1px 10px lightgray"
    >
      <S.Padding $padding={['28px', '26px', '29px', '26px']}>
        <S.Flex $direction="column" $width="100%" $align="center">
          <S.Card $radius="10px" $overflow="hidden">
            <S.Img
              $width="128px"
              $height="128px"
              src={img ? img : imageDefault}
            />
          </S.Card>
          <S.Padding $padding={['4px', '0px', '8px', '0px']}>
            <S.Text
              $fontSize={`${fontSize.l}px`}
              $color={color.mainColor}
              $lineHeight="150%"
              $fontWeight="700"
              $textShadow="1px 1px 1px lightgrey"
            >
              {title ? title : 'Loading...'}
            </S.Text>
          </S.Padding>
          <S.Text
            $fontWeight={700}
            $color={color.cardFontColor}
            $textShadow="1px 1px 2px lightgray"
          >
            {desc ? desc : 'Loading...'}
          </S.Text>
        </S.Flex>
      </S.Padding>
    </S.Card>
  );
};

export { AchievementCard };
