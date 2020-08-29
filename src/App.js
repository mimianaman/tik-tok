import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./App.css";
import Video from "./components/video/Video";

function App() {
  const [videos, setVideos] = useState([]);

  //useEffect fies once when the component loads but never again after//
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
