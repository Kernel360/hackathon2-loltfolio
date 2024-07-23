import { Flex, Container as SContainer } from '../common/index';
import { Logo } from '../logo';
import { SearchBar } from '../searchBar';
import * as S from './SearchPage.style';

const SearchPage = () => {
  return (
    <SContainer
      $width="1440px"
      $height="100vh"
      $display="flex"
      $justify="center"
      $align="center"
    >
      <Flex
        $direction="column"
        $justify="center"
        $align="center"
        $margin="0 0 10% 0"
      >
        <S.mainImg src="/public/images/Bee_Happy.png" />
        <Logo />
        <SearchBar />
      </Flex>
    </SContainer>
  );
};

export default SearchPage;
