import styled from 'styled-components';

const Card = styled.div`
  position: ${props => (props?.$position ? props.$position : 'relative')};
  width: ${props => (props?.$width ? props.$width : 'auto')};
  height: ${props => (props?.$height ? props.$height : 'auto')};
  border: ${props => (props?.$border ? props.$border : 'none')};
  border-radius: ${props => (props?.$radius ? props.$radius : '0px')};
  background-color: ${props =>
    props?.$backgroundColor ? props.$backgroundColor : 'transparent'};
  color: ${props =>
    props?.$color ? props.$color : props.theme.color.fontColor};
  text-align: ${props => (props?.$textAlign ? props.$textAlign : 'start')};
`;

export { Card };
