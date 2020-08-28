import React from "react";
import "./App.css";
import Video from "./components/video/Video";

function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
