import { fontSize } from '@/theme';
import * as S from '../style';

const TypeDescriptionCard = props => {
  const { imgSrc, title, description } = props;

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
