import React from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CommentCardSkeleton = () => {
  return (
    <SkeletonTheme color="#bfbfbf" highlightColor="#919191">
      <StyledCardSkeleton>
        <div>
          {/* <b>Comment Id</b>1 */}
          <Skeleton width={100} style={{ marginRight: 12 }} /> <Skeleton width={16} />
        </div>
        <div>
          {/* <b>Email</b> Eliseo@gardner.biz */}
          <Skeleton width={45} style={{ marginRight: 12 }} /> <Skeleton width={145} />
        </div>
        <div>
          {/* <b>Comment</b> */}
          <Skeleton width={81} />
          <br />
          {/* <p>
            laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem
            quasi reiciendis et nam sapiente accusantium
          </p> */}
          <Skeleton />
          <Skeleton width={200} />
        </div>
      </StyledCardSkeleton>
    </SkeletonTheme>
  );
};

const StyledCardSkeleton = styled.div`
  width: 500px;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 20px;
  font-size: 18px;
  margin-bottom: 14px;

  & > div:nth-child(2) {
    margin: 12px 0;
  }
`;

export default CommentCardSkeleton;
