import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CommentCardSkeleton from './CommentCardSkeleton';

const InfiniteScrollList = () => {
  const [comments, setComments] = useState();
  const [page, setPage] = useState(2);

  useEffect(() => {
    const apiCall = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10');
      setComments(Array.from(data));
    };
    apiCall();
  }, []);

  const [isFetching, setIsFetching] = useState(false);

  // const handleScrollThrottle = (callback, wait) => {
  //   // callback: 실행 대상인 함수
  //   let waiting = true; // true로 주어서 콜백함수가
  //   // 처음 한번은 바로 실행되도록 함
  //   return () => {
  //     if (waiting) {
  //       callback();
  //       waiting = false; // false로 바꿔 실행되지 않도록 한다.
  //       setTimeout(() => {
  //         // wait만큼 시간이 지난 후,
  //         waiting = true; // true로 바뀌면서 다시 실행됨.
  //       }, wait);
  //     }
  //   };
  // };

  const handleScroll = () => {
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const { clientHeight } = document.documentElement;

    // console.log('clientHeight: ', clientHeight);
    // console.log('offsetHeight: ', document.documentElement.offsetHeight);
    // console.log('scrollTop: ', scrollTop);
    // console.log('scrollHeight: ', scrollHeight);

    if (clientHeight + scrollTop >= scrollHeight / 2) {
      console.log('scroll handling');
      setIsFetching(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchMorePages = () => {
    setTimeout(async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`);
      setComments(comments.concat(data));
      setIsFetching(false);
    }, 500);
  };

  useEffect(() => {
    if (!isFetching || page >= 51) return;
    setPage(page + 1);
    fetchMorePages();
  }, [isFetching]);

  if (!comments) return <div>setting data!!!!</div>;

  return (
    <>
      {comments.map((comment) => (
        <StyledCard key={comment.id}>
          <div>
            <b>Comment Id</b> {comment.id}
          </div>
          <StyledEmail>
            <b>Email</b> {comment.email}
          </StyledEmail>
          <div>
            <b>Comment</b>
            <br />
            <p>{comment.body}</p>
          </div>
        </StyledCard>
      ))}

      {isFetching &&
        Array(5)
          .fill(0)
          .map((_, i) => <CommentCardSkeleton />)}
    </>
  );
};

const StyledCard = styled.div`
  width: 500px;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 20px;
  font-size: 18px;
  margin-bottom: 14px;
`;

const StyledEmail = styled.div`
  margin: 12px 0;
`;

export default InfiniteScrollList;
