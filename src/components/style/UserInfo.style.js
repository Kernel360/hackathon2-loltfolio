import styled from 'styled-components';
import { theme } from '../../theme/index.js';

// export const userNameDiv = styled.div`
//   width: fit-con;
// `;

export const UserNameP = styled.p`
  font-weight: ${theme.fontWeight.extraBold};
  font-size: ${theme.fontSize.xxxl}px;
  margin: 0 20px 0 0;
`;

export const UserTagP = styled.p`
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSize.xxxl}px;
`;

export const UserNickNameP = styled.p`
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSize.xl}px;
  text-align: start;
`;

export const UserFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserProfileImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 500px;
`;
