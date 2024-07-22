import styled from 'styled-components';

const Text = styled.span`
  position: ${props => (props?.$position ? props.$position : 'relative')};
  top: ${props => (props?.$top ? props.$top : 'auto')};
  bottom: ${props => (props?.$bottom ? props.$bottom : 'auto')};
  left: ${props => (props?.$left ? props.$left : 'auto')};
  right: ${props => (props?.$right ? props.$right : 'auto')};
  display: ${props => (props?.$display ? props.$display : 'block')};
  width: ${props =>
    props?.$width !== undefined ? `${props.$width}` : 'fit-content'};
  height: ${props =>
    props?.$height !== undefined ? `${props.$height}` : 'auto'};
  line-height: ${props => (props?.$lineHeight ? props.$lineHeight : '100%')};
  font-size: ${props =>
    props?.$fontSize ? props.$fontSize : `${props.theme.fontSize.s}px`};
  font-weight: ${props =>
    props?.$fontWeight ? props.$fontWeight : props.theme.fontWeight.bold};
  color: ${props =>
    props?.$color ? props.$color : props.theme.color.fontColor};
  text-decoration-line: ${props =>
    props?.$decorationLine ? props?.$decorationLine : 'none'};
  background-color: ${props =>
    props?.$backgroundColor ? props.$backgroundColor : 'transparent'};
  text-shadow: ${props => (props?.$textShadow ? props.$textShadow : 'none')};
`;

const LogoText = styled.span`
  font-family: 'AbhayaLibreSemiBold';
`;

export { Text, LogoText };
