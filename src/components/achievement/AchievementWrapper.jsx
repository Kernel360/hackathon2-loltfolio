import { AchievementCard, AchievementLabel } from '../achievement';
import * as S from '../style';
import { getCardInfoList } from '../../utils/getCardInfo.js';
import { getStaticItemImageUrl } from '../../apis/getStaticImage.js';

const AchievementWrapper = ({ username, matchInfoList, puuid }) => {
  const cardInfoList = getCardInfoList(matchInfoList, puuid);

  return (
    <S.Container $width="850px" $height="590px">
      <AchievementLabel username={username} />
      <S.Flex $wrap="wrap" $gap="16px 16px">
        {cardInfoList.map(cardInfo => {
          const { cardName, cardDescription, itemId } = cardInfo;
          const itemUrl = getStaticItemImageUrl(itemId);
          return (
            <AchievementCard
              key={itemId}
              img={itemUrl}
              title={cardName}
              desc={cardDescription}
            />
          );
        })}
      </S.Flex>
    </S.Container>
  );
};

export { AchievementWrapper };
