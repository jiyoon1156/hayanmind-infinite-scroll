import React from 'react';
// import InfiniteScrollList from './components/InfiniteScrollList';
import GlobalStyle from './GlobalStyle';
import CommentCard from './components/CommentCard';

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <InfiniteScrollList /> */}
      <CommentCard />
    </>
  );
};

export default App;
