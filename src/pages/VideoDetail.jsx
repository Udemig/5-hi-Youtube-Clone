import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { options } from '../utils/constants';
import ReactPlayer from 'react-player';
const VideoDetail = () => {
  const params = useParams();

  useEffect(() => {
    // videonun i,dsine göre detaylarının bilgisni çek
    axios
      .get(
        `https://youtube138.p.rapidapi.com/video/details/?id=${params.videoId}`,
        options
      )
      .then((res) => console.log(res));
  }, []);

  return (
    <div>
      {/* <ReactPlayer
        url={`https://www.youtube.com/watch?v=${"state'den gelen id"}`}
      /> */}
    </div>
  );
};

export default VideoDetail;
