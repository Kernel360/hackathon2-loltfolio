import styled from 'styled-components';

const Img = styled.img`
  width: ${props => (props?.$width ? `${props.$width}` : 'auto')};
  height: ${props =>
    props?.$height !== undefined ? `${props.$height}` : 'auto'};
`;

export { Img };
