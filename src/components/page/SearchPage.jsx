import { useRef, useEffect } from 'react';
import { Logo } from '../logo';
import { SearchBar } from '../searchBar';
import * as S from '../style';
import { useAxios } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  // useRef, onClick, onKeydown
  const inputRef = useRef(null);
  const { data, getAxios, isLoading, isError } = useAxios();
  const navigate = useNavigate();

  //버튼 클릭 시 -> searchBar에 입력된 아이디,태그 입력값을 axios로 보내는 함수
  const onClick = () => {
    if (!inputRef.current) {
      return;
    }

    // 입력된 아이디,태그 parsing
    const searchBarInputValue = inputRef.current.value;

    const [gameName, tagLine] = searchBarInputValue.split('#');
    console.log(gameName, tagLine);

    //아이디,태그 입력값을 이용해 회원있는지 확인하는 lol api 호출
    const url = `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
    getAxios(url);
  };

  // 엔터키 입력 시 -> searchBar에 입력된 아이디,태그 입력값을 axios로 보내는 함수
  const onEnterKeyUp = e => {
    if (e.key === 'Enter') {
      // 입력된 아이디,태그 parsing
      const searchBarInputValue = inputRef.current.value;

      const [gameName, tagLine] = searchBarInputValue.split('#');

      //아이디,태그 입력값을 이용해 회원있는지 확인하는 lol api 호출
      const url = `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
      getAxios(url);
    }
  };

  //getAxios로 받은 data가 있으면 페이지 이동
  useEffect(() => {
    if (data && !isLoading && !isError) {
      navigate(`/${data.gameName}/${data.tagLine}`);
    } else if (isError) {
      console.log('error: wrong input');
      alert('잘못된 입력');
    }
  }, [data, isLoading, isError, navigate]); //배열 요소 값 바뀔 때만 실행

  return (
    <S.Container
      $width="100vw"
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
        <SearchBar ref={inputRef} onClick={onClick} onKeyUp={onEnterKeyUp} />
      </S.Flex>
    </S.Container>
  );
};

export default SearchPage;
