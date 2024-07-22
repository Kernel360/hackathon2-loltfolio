import { useRef } from 'react';
import { Flex } from './../common';
import { SearchBar } from '../searchBar';
import { Logo } from '../logo';

const Header = () => {
  return (
    <Flex $gap={'24px'} $align="center">
      <Logo />
      <SearchBar />
    </Flex>
  );
};

export { Header };
