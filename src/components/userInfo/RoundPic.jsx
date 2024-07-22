import * as S from './UserInfo.style';

const RoundPic = props => {
  const psrc = props.picSrc;
  return <S.UserProfileImg src={psrc} />;
};

export default RoundPic;
