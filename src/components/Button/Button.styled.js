import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  width: max-content;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => {
    return p.disabled ? p.theme.colors.muted : p.theme.colors.primary;
  }};
  color: ${p => p.theme.colors.white};
  cursor: pointer;

  :hover:not(:disabled) {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
