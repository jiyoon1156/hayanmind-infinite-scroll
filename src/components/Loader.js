import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <LoaderWrapper>
      <StyledLoader />
    </LoaderWrapper>
  );
};

const rotation = keyframes`
 from {transform: rotate(0deg);}
  to {transform: rotate(720deg);}
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StyledLoader = styled.div`
  display: inline-block;
  width: 48px;
  height: 4px;
  background: #be90d4;
  -webkit-animation: ${rotation} 1.5s linear infinite;
  animation: ${rotation} 1.5s linear infinite;
`;

export default Loader;
