import styled from 'styled-components';

const getMargin = marginList => {
  switch (marginList?.length ?? 0) {
    case 1:
      return `${marginList[0]}`;
    case 2:
      return `${marginList[0]} ${marginList[1]}`;
    case 3:
      return `${marginList[0]} ${marginList[1]} ${marginList[2]}`;
    case 4:
      return `${marginList[0]} ${marginList[1]} ${marginList[2]} ${marginList[3]}`;
    default:
      return '0px';
  }
};

const Margin = styled.div`
  padding: ${props => getMargin(props.$margin)};
  box-sizing: border-box;
`;

export { Margin };
