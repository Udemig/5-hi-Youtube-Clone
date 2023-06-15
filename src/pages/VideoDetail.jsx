import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { options } from '../utils/constants';

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

  return <div>{params.videoId}</div>;
};

export default VideoDetail;
