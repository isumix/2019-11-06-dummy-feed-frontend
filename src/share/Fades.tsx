import styled from 'styled-components/macro';

const Fade = styled.div`
  overflow: hidden;
  position: relative;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

export const FadeRight = styled(Fade)`
  white-space: nowrap;
  :before {
    background: linear-gradient(-90deg, ${({theme: {textBGColor}}) => textBGColor}, transparent 15px);
  }
`;

export const FadeBottom = styled(Fade)`
  :before {
    background: linear-gradient(360deg, ${({theme: {textBGColor}}) => textBGColor} 5px, transparent 20px);
  }
`;
