import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CommentCardSkeleton from './CommentCardSkeleton';

const InfiniteScrollList = () => {
  const [page, setPage] = useState(2);
  const [info, setInfo] = useState();

  useEffect(() => {
    const apiCall = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10');
      setInfo(Array.from(data));
    };
    apiCall();
  }, []);

  const [isFetching, setIsFetching] = useState(false);

  function handleScroll() {
    // const scrollHeight = document.documentElement.offsetHeight;
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const { clientHeight } = document.documentElement;

    if (clientHeight + scrollTop !== scrollHeight || isFetching) return;
    setIsFetching(true);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function fetchMoreListItems() {
    setTimeout(async () => {
      setPage(page + 1);
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`);
      setInfo(info.concat(data));
      setIsFetching(false);
    }, 1000);
  }

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  if (!info) return <div>setting data!!!!</div>;
  // if (info) {
  //   console.log(info);
  // }

  return (
    <>
      {/* <ul className="list-group mb-2">
        {info.map((i) => (
          <li className="list-group-item">
            <div>Comment ID {i.id}</div>
            <div>Email {i.email}</div>
          </li>
        ))}
      </ul> */}
      {info.map((i) => (
        <StyledCard>
          <div>
            <b>Comment Id</b> {i.id}
          </div>
          <StyledEmail>
            <b>Email</b> {i.email}
          </StyledEmail>
          <div>
            <b>Comment</b>
            <br />
            <p>{i.body}</p>
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
