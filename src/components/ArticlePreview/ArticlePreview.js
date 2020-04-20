import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  width: 100%;
  height: 340px;
  object-fit: cover;
`;

const PreviewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  z-index: 999;
  left: 0;
  bottom: 35px;
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;

  h2,
  p {
    margin: 5px;
  }
`;

const Preview = ({ title, excerpt, image }) => (
  <PreviewWrapper>
    <StyledImage fluid={image} />
    <PreviewInfoLabel>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default Preview;
