import { Flex, Container as SContainer } from '../common/index';
import { Logo } from '../logo';
import { SearchBar } from '../searchBar';
import * as S from '../style';

const SearchPage = () => {
  return (
    <S.Container
      $width="1440px"
      $height="100vh"
      $display="flex"
      $justify="center"
      $align="center"
    >
      <S.Flex
        $direction="column"
        $justify="center"
        $align="center"
        $margin="0 0 10% 0"
      >
        <S.MainImg src="/public/images/Bee_Happy.png" />
        <Logo />
        <SearchBar />
      </S.Flex>
    </S.Container>
  );
};

export default SearchPage;
