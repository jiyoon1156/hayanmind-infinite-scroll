import React from 'react';
import styled from 'styled-components';

const CommentCard = () => {
  return (
    <StyledCard>
      <div>
        <b>Comment Id</b> 1
      </div>
      <StyledEmail>
        <b>Email</b> Eliseo@gardner.biz
      </StyledEmail>
      <div>
        <b>Comment</b>
        <br />
        <p>
          laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi
          reiciendis et nam sapiente accusantium
        </p>
      </div>
    </StyledCard>
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
`;

const StyledEmail = styled.div`
  margin: 12px 0;
`;

export default CommentCard;
