import styled from 'styled-components';

export const List = styled.ul`
  padding-left: ${p => p.theme.space[5]}px;
  width: 70%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
`;
