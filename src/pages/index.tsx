import type { NextPage } from 'next';
import styled from 'styled-components';
import { Header } from '../common/header';

const StyledHome = styled.div`
  font-size: 2rem;
`;

const Index: NextPage = () => (
  <>
    <Header />
    <StyledHome>Hello world</StyledHome>
  </>
);

export default Index;
