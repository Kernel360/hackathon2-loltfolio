import styled from 'styled-components';

const Button = styled.button`
  display: ${props => (props?.$display ? props.$display : 'block')};
  justify-content: ${props => (props?.$justify ? props.$justify : 'start')};
  align-items: ${props => (props?.$align ? props.$align : 'start')};
  width: ${props => (props?.$width ? `${props.$width}` : 'auto')};
  height: ${props =>
    props?.$height !== undefined ? `${props.$height}` : 'auto'};
  border: ${props => (props?.$border ? props.$border : 'none')};
  border-radius: ${props =>
    props?.$radius !== undefined ? `${props.$radius}` : '0px'};
  background-color: ${props =>
    props?.$backgroundColor
      ? props.$backgroundColor
      : props.theme.color.backgroundColor};
  color: ${props =>
    props?.$color ? props.$color : props.theme.color.fontColor};
  font-size: ${props =>
    props?.$fontSize ? `${props.$fontSize}` : `${props.theme.fontSize.m}px`};
  font-weight: ${props =>
    props?.$fontWeight ? props.$fontWeight : props.theme.fontWeight.medium};
  cursor: ${props => (props?.$cursor ? props.$cursor : 'pointer')};
`;

export { Button };
