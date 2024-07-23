import { Container, Flex } from '../common';
import { Header } from '../header';
import { TypeDescriptionCard } from '../typeDescriptionCard';
import UserInfo from '../userInfo/UserInfo';
import AchievementWrapper from '../achievement/AchievementWrapper';

const imageUrl =
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg';
const title = '자연은, 언제나 자신이 받은 것 이상으로 베푼다네.';
const description =
  '이 유형은 아군 정글에서 미니언을 처치하여 팀 자원을 적극적으로 활용하는 플레이 스타일을 의미합니다. 이 유형은 안정적인 성장과 게임의 리소스를 최대한 활용하여 팀의 전반적인 골드와 경험치를 증가시키는 전략을 사용합니다.';

const MainPage = () => {
  return (
    <Container>
      <Flex $width="100%" $direction={'column'} $align={'center'}>
        <Header />
        <Flex $width="100%">
          <TypeDescriptionCard
            imgSrc={imageUrl}
            title={title}
            description={description}
          />
          <Flex $direction={'column'}>
            <UserInfo $direction={'column'} />
            <AchievementWrapper />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export { MainPage };
