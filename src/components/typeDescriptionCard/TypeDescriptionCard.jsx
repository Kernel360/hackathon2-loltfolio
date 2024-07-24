import { fontSize } from '@/theme';
import * as S from '../style';
import { getCharacter } from '../../utils';
import { MATCH_INFO_LIST_ONE } from '../../constants';

const imgSrc =
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg';
const title = '자연은, 언제나 자신이 받은 것 이상으로 베푼다네.';
const description =
  '이 유형은 아군 정글에서 미니언을 처치하여 팀 자원을 적극적으로 활용하는 플레이 스타일을 의미합니다. 이 유형은 안정적인 성장과 게임의 리소스를 최대한 활용하여 팀의 전반적인 골드와 경험치를 증가시키는 전략을 사용합니다.';

const TypeDescriptionCard = props => {
  console.log('TypeDescriptionCard');
  const { matchInfoList, puuid } = props;

  getCharacter(MATCH_INFO_LIST_ONE, puuid);

  return (
    <S.Card $width={'275px'}>
      <S.Flex $direction={'column'} $align={'center'}>
        <S.Img src={imgSrc} $width={'275px'} $height={'477px'} />
        <S.Padding $padding={['24px', '0px', '24px', '0px']}>
          <S.Text
            $fontSize={'24px'}
            $lineHeight={'150%'}
            $textAlign={'center'}
            $fontWeight={400}
          >
            {title}
          </S.Text>
        </S.Padding>
        <S.Text $lineHeight={'150%'} $fontSize={fontSize.m}>
          {description}
        </S.Text>
      </S.Flex>
    </S.Card>
  );
};

export { TypeDescriptionCard };
