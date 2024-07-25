import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as S from '../style';
import { Header } from '../header';
import { TypeDescriptionCard } from '../typeDescriptionCard';
import UserInfo from '../userInfo/UserInfo';
import { AchievementWrapper } from '../achievement/index.js';
import { getFetchWithSuspense } from '../../apis/getFetchWithSuspense';
import {
  MATCH_COUNT_LENGTH,
  API_KEY,
  MATCH_INFO_LIST,
} from '../../constants/index.js';

//페이지 컴포넌트로부터 메인 컨텐츠 분리
const MainContent = () => {
  //params에서 gameName,tagLine 받아와서 api호출 후 puuid가져오기
  const { gameName, tagLine } = useParams();
  const [matchInfoList, setMatchInfoList] = useState([...MATCH_INFO_LIST]);
  //const [matchInfoList, setMatchInfoList] = useState([]);

  const getIdUrl = `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${API_KEY}`;
  const { puuid } = getFetchWithSuspense(getIdUrl).read();
  const getMatchIdListUrl = `/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${MATCH_COUNT_LENGTH}&api_key=${API_KEY}`;
  const matchIdList = getFetchWithSuspense(getMatchIdListUrl).read();

  useEffect(() => {
    const fetchMatchInfo = async () => {
      const fetchPromises = matchIdList.map(matchId => {
        const getMatchInfoUrl = `/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`;
        return axios.get(getMatchInfoUrl).then(response => response.data);
      });

      try {
        const results = await Promise.all(fetchPromises);
        console.log(results);
        setMatchInfoList([...results]);
      } catch (error) {
        console.error('Error fetching match info:', error);
      }
    };

    // fetchMatchInfo(); waterfall 해결. API 호출 방지를 위해 미사용.
  }, [matchIdList]);

  if (matchInfoList.length === 0) {
    return <h1>loading match info list</h1>;
  }

  return (
    <S.Flex $width="100%" $justify={'center'} $gap={'48px'}>
      <Suspense fallback={<h1>TypeDescriptionCard Loading</h1>}>
        <TypeDescriptionCard matchInfoList={matchInfoList} puuid={puuid} />
      </Suspense>
      <S.Flex $direction={'column'} $gap={'64px'}>
        <Suspense fallback={<h1>loading main content</h1>}>
          <UserInfo
            $direction={'column'}
            gameName={gameName}
            tagLine={tagLine}
            puuid={puuid}
          />
        </Suspense>
        <AchievementWrapper
          username={gameName}
          matchInfoList={matchInfoList}
          puuid={puuid}
        />
      </S.Flex>
    </S.Flex>
  );
};

//메인 페이지
const MainPage = () => {
  return (
    <S.Container $width={'100vw'}>
      <S.Flex
        $width="100%"
        $direction={'column'}
        $align={'center'}
        $gap={'64px'}
      >
        <Header />
        <Suspense fallback={<h1>loading main content</h1>}>
          <MainContent />
        </Suspense>
      </S.Flex>
    </S.Container>
  );
};

export { MainPage };
