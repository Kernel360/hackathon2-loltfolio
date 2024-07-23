import { fontSize, color } from '../../theme';
import * as S from '../style';

const Logo = () => {
  return (
    <S.LogoText>
      <S.Text
        $width={'234px'}
        $height={'68px'}
        $fontSize={`${fontSize.xxxxl}px
  `}
        $color={color.mainColor}
      >
        Loltfolio
      </S.Text>
    </S.LogoText>
  );
};

export { Logo };
