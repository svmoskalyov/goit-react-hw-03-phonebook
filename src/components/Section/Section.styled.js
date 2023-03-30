import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
`;
