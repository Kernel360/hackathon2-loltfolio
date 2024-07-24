import * as S from '../style';
import { Header } from '../header';
import { TypeDescriptionCard } from '../typeDescriptionCard';
import UserInfo from '../userInfo/UserInfo';
import { AchievementWrapper } from '../achievement/index.js';
import { useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { getFetchWithSuspense } from '../../apis/getFetchWithSuspense';

const imageUrl =
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg';
const title = '자연은, 언제나 자신이 받은 것 이상으로 베푼다네.';
const description =
  '이 유형은 아군 정글에서 미니언을 처치하여 팀 자원을 적극적으로 활용하는 플레이 스타일을 의미합니다. 이 유형은 안정적인 성장과 게임의 리소스를 최대한 활용하여 팀의 전반적인 골드와 경험치를 증가시키는 전략을 사용합니다.';

//페이지 컴포넌트로부터 메인 컨텐츠 분리
const MainContent = () => {
  //params에서 gameName,tagLine 받아와서 api호출 후 puuid가져오기
  const { gameName, tagLine } = useParams();
  const url = `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${import.meta.env.VITE_RIOT_KEY}`;
  const response = getFetchWithSuspense(url).read();
  const puuid = response.puuid;

  return (
    <S.Flex $width="100%" $justify={'center'} $gap={'48px'}>
      <TypeDescriptionCard
        imgSrc={imageUrl}
        title={title}
        description={description}
      />
      <S.Flex $direction={'column'} $gap={'64px'}>
        <UserInfo $direction={'column'} />
        <AchievementWrapper username="" />
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
