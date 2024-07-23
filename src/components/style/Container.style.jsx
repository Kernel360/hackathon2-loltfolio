import styled from 'styled-components';

const Container = styled.div`
  position: ${props => (props?.$position ? props.$position : 'relative')};
  display: ${props => (props?.$display ? props.$display : 'block')};
  flex-direction: ${props => (props?.$direction ? props.$direction : 'row')};
  justify-content: ${props => (props?.$justify ? props.$justify : 'start')};
  align-items: ${props => (props?.$align ? props.$align : 'start')};
  width: ${props => (props?.$width ? props.$width : 'auto')};
  height: ${props => (props?.$height ? props.$height : 'auto')};
  border: ${props => (props?.$border ? props.$border : 'none')};
  border-radius: ${props => (props?.$radius ? props.$radius : 0)};
  background-color: ${props =>
    props?.$backgroundColor
      ? props.$backgroundColor
      : props?.theme.color.backgroundColor};
  font-size: ${props =>
    props?.$fontSize ? props.$fontSize : `${props.theme.fontSize.m}px`};
  font-weight: ${props =>
    props?.$fontWeight ? props.$fontWeight : props.theme.fontWeight.medium};
`;

export { Container };
