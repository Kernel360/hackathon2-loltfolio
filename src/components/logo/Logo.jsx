import { Text, LogoText } from './../common';
import { fontSize, color } from '../../theme';

const Logo = () => {
  return (
    <LogoText>
      <Text
        $width={'234px'}
        $height={'68px'}
        $fontSize={`${fontSize.xxxxl}px
  `}
        $color={color.mainColor}
      >
        Loltfolio
      </Text>
    </LogoText>
  );
};

export { Logo };
