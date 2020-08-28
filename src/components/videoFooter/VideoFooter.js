import React from "react";
import "../videoFooter/VideoFooter.css";
import dvd from "../../assets/dvd.png";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

/**
 * @author
 * @function VideoFooter
 **/

const VideoFooter = (props) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@mimianaman</h3>
        <p>this is the description</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p> hey guys whatsapp</p>
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
