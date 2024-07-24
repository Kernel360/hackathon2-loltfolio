import { forwardRef } from 'react';
import searchIcon from '/public/search.png';
import * as S from '../style';

const SearchBar = forwardRef((props, ref) => {
  const { onClick = () => {} ,onKeyUp=e=>{}} = props;
  // 검색 버튼 클릭시, 입력후 엔터 시에 이벤트 핸들러 함수

  return (
    <S.Box
      $width={'492px'}
      $height={'44px'}
      $border={'1px solid #C3D4E9'}
      $radius={'70px'}
    >
      <S.Padding $width={'100%'} $padding={['10px', '10px', '10px', '3%']}>
        <S.Flex $width={'100%'} $align="center" $justify={'space-between'}>
          <S.Input
            type="search"
            name=""
            id=""
            placeholder="Search something here"
            $width={'350px'}
            $height={'20px'}
            ref={ref}
            
            onKeyUp={e => onKeyUp(e)}
            
          />
          <S.Button $width={'24px'} $height={'24px'} onClick={onClick}>
            <S.Img
              src={searchIcon}
              alt=""
              srcSet=""
              $width={'24px'}
              $height={'24px'}
            />
          </S.Button>
        </S.Flex>
      </S.Padding>
    </S.Box>
  );
});

SearchBar.displayName = 'SearchBar';

export { SearchBar };
