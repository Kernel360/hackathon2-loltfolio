import styled from 'styled-components';

const getPadding = paddingList => {
  switch (paddingList?.length ?? 0) {
    case 1:
      return `${paddingList[0]}`;
    case 2:
      return `${paddingList[0]} ${paddingList[1]}`;
    case 3:
      return `${paddingList[0]} ${paddingList[1]} ${paddingList[2]}`;
    case 4:
      return `${paddingList[0]} ${paddingList[1]} ${paddingList[2]} ${paddingList[3]}`;
    default:
      return '0px';
  }
};

const Padding = styled.div`
  height: 100%;
  padding: ${props => getPadding(props.$padding)};
  box-sizing: border-box;
`;

export { Padding };
