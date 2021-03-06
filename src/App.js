import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';

import InfiniteScrollList from './components/InfiniteScrollList';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <InfiniteScrollList />
    </>
  );
};

export default App;
