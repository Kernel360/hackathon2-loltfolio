import { forwardRef } from 'react';
import { Box, Button, Flex, Img, Input, Padding } from './../common';
import searchIcon from '/public/search.png';

const SearchBar = forwardRef((props, ref) => {
  const { onClick = () => {}, onKeyDown = e => {} } = props;
  // 검색 버튼 클릭시, 입력후 엔터 시에 이벤트 핸들러 함수

  return (
    <Box
      $width={'492px'}
      $height={'44px'}
      $border={'1px solid #C3D4E9'}
      $radius={'70px'}
    >
      <Padding $width={'100%'} $padding={['10px', '10px', '10px', '3%']}>
        <Flex $width={'100%'} $align="center" $justify={'space-between'}>
          <Input
            type="search"
            name=""
            id=""
            placeholder="Search something here"
            $width={'350px'}
            $height={'20px'}
            ref={ref}
            onKeyDown={e => onKeyDown(e)}
          />
          <Button $width={'24px'} $height={'24px'} onClick={onClick}>
            <Img
              src={searchIcon}
              alt=""
              srcSet=""
              $width={'24px'}
              $height={'24px'}
            />
          </Button>
        </Flex>
      </Padding>
    </Box>
  );
});

export { SearchBar };
