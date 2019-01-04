import styled from '@emotion/styled';
import { Box, Heading } from '@rebass/emotion';

export const AppContainer = styled(Box)`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const AppHeader = styled(Heading)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 2vmin);
  color: white;
`;

export const List = styled.ul`
  list-style-type: katakana;
  text-align: left;
  padding: 0;
`;
