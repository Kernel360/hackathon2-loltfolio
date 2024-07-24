import { fontSize } from '@/theme';
import * as S from '../style';
import { getCharacter } from '../../utils';
import { MATCH_INFO_LIST_ONE, MATCH_INFO_LIST } from '../../constants';
import { getStaticChampionImageUrl } from '../../apis';

const TypeDescriptionCard = props => {
  const { matchInfoList, puuid } = props;
  const character = getCharacter(MATCH_INFO_LIST, puuid); //api연결 시 MATCH_INFO_LIST가 아닌 props에서 받아온 matchInfoList 활용
  const { line = '', categoryDescription = '', characterId } = character;
  const imageUrl = getStaticChampionImageUrl(characterId);

  return (
    <S.Card $width={'275px'}>
      <S.Flex $direction={'column'} $align={'center'}>
        <S.Img src={imageUrl} $width={'275px'} $height={'477px'} />
        <S.Padding $padding={['24px', '0px', '24px', '0px']}>
          <S.Text
            $fontSize={'24px'}
            $lineHeight={'150%'}
            $textAlign={'center'}
            $fontWeight={400}
          >
            {line}
          </S.Text>
        </S.Padding>
        <S.Text $lineHeight={'150%'} $fontSize={fontSize.m}>
          {categoryDescription}
        </S.Text>
      </S.Flex>
    </S.Card>
  );
};

export { TypeDescriptionCard };
