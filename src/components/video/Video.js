import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "../videoFooter/VideoFooter";
import VideoSidebar from "../videoSidebar/VideoSidebar";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <>
      <div className="video">
        <video
          loop
          onClick={onVideoPress}
          ref={videoRef}
          // controls
          className="video__player"
          src="https://v16m.tiktokcdn.com/1bae434c80025ef19c365af96ae01608/5f497772/video/tos/useast2a/tos-useast2a-ve-0068c001/b3c9048084c6429385d6b7664023ab5b/?a=1233&amp;br=3262&amp;bt=1631&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=202008281529270101890730170416704D&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=Mzw8bW52cTZxdTMzZzczM0ApNTw8NzxpNjszNzY4ZTNmO2c2Z2wzajNnb29fLS1fMTZzczFhLjAwLl5iLi8uNjBfNWI6Yw%3D%3D&amp;vl=&amp;vr="
        ></video>
        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar likes={likes} messages={messages} shares={shares} />
      </div>
    </>
  );
};

export default Video;
