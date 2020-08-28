import React from "react";
import "../videoFooter/VideoFooter.css";
import dvd from "../../assets/dvd.png";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

/**
 * @author
 * @function VideoFooter
 **/

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p> {song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className="videoFooter_record" src={dvd} />
    </div>
  );
};

export default VideoFooter;
