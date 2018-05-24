import React from 'react';
import styled from 'styled-components';
import BackgroundColorContainer from '../components/BackgroundColorContainer';

const VideoWrapper = styled.iframe`
  width: 100vw;
  height: calc(100vw/1.77777778);
`;

const Video = props => (
  <BackgroundColorContainer bg="primaryHighlight" color="white">
    <VideoWrapper
      width="560"
      height="315"
      src={`${props.location}?rel=0&amp;showinfo=0`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="Tax Prom Video"
    />
  </BackgroundColorContainer>
);

export default Video;
