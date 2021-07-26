import React, { useEffect } from 'react';
import CommentCard from './CommentCard';

const InfiniteScrollList = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  console.log('infinitescrolllist');
  return <CommentCard />;
};

export default InfiniteScrollList;
