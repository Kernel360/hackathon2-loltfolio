import { Flex as SFlex } from '../common/Flex.style';
import RoundPic from './RoundPic';
import * as S from './UserInfo.style';

const UserInfo = () => {
  return (
    <SFlex $width="70%" $justify="space-between">
      <div>
        <SFlex>
          <div>
            <S.UserNameP>Hide on bush</S.UserNameP>
          </div>
          <div>
            <S.UserTagP>#KR1</S.UserTagP>
          </div>
        </SFlex>
        <div>
          <S.UserNickNameP>다재다능한 암살자 요릭</S.UserNickNameP>
        </div>
      </div>
      <SFlex $width="500px" $justify="space-evenly">
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
      </SFlex>
    </SFlex>
  );
};

export default UserInfo;
