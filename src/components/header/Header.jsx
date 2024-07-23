import { SearchBar } from '../searchBar';
import { Logo } from '../logo';
import * as S from '../style';

const Header = () => {
  return (
    <S.Flex $gap={'24px'} $align="center">
      <Logo />
      <SearchBar />
    </S.Flex>
  );
};

export { Header };
