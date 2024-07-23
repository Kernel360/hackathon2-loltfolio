import RoundPic from './RoundPic';
import * as S from '../style';

const UserInfo = () => {
  return (
    <S.Flex $width="70%" $justify="space-between">
      <div>
        <S.Flex>
          <div>
            <S.UserNameP>Hide on bush</S.UserNameP>
          </div>
          <div>
            <S.UserTagP>#KR1</S.UserTagP>
          </div>
        </S.Flex>
        <div>
          <S.UserNickNameP>다재다능한 암살자 요릭</S.UserNickNameP>
        </div>
      </div>
      <S.Flex $width="500px" $justify="space-evenly">
        <RoundPic
          picSrc={
            'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2acb7715797d4183b09fdbfb902ff52a0aa4e0cf-496x560.jpg?auto=format&fit=fill&q=80&w=356'
          }
        />
        <RoundPic
          picSrc={
            'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/dde9ede0cd3013a28dc29b98d25caf3e4b79348f-496x560.jpg?auto=format&fit=fill&q=80&w=356'
          }
        />
        <RoundPic
          picSrc={
            'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6d9fd040ceab41dbe755f4ac1f6e11aa82548c1e-496x560.jpg?auto=format&fit=fill&q=80&w=356'
          }
        />
      </S.Flex>
    </S.Flex>
  );
};

export default UserInfo;
