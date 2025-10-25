import React from 'react';

const Video = () => {

  const videoPath = process.env.PUBLIC_URL + "/videos/video01.mp4";
  const videoPathWebm = process.env.PUBLIC_URL + "/videos/video01.webm";

  return (
    <div className='video'>
      <video width="100%" autoPlay muted loop playsInline>
        <source src={videoPath} type="video/mp4" />
        <source src={videoPathWebm} type="video/webm" />
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>
    </div>
  );
};

export default Video;