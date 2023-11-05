"use client"

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen((prevValue) => !prevValue);
  }

  const opts = {
    width: "300",
    height: "250"
  }

  const Player = () => {
    return(
      <div className="fixed bottom-2 right-2">
      {
        isPlayerReady &&
        <button onClick={handleToggleOpen} className="text-color-primary bg-color-secondary float-right px-3 mb-1">
        X
      </button>
      }
      
      <YouTube
        videoId={youtubeId}
        onReady={(e) => {
          e.target.pauseVideo();
          setIsPlayerReady(true);
        }}
        onError={(e) => alert('Video is broken please try another!')}
        opts={opts}
      />
    </div>
    )
  }

  const OpenTrailerButton = () => {
    return(
      <button onClick={handleToggleOpen} className="bg-color-primary text-color-dark px-3 py-1 fixed bottom-10 right-10 shadow-xl hover:bg-color-accent transition-all">
        Watch Trailer
      </button>
    )
  }

  return isOpen ? <Player /> : <OpenTrailerButton />
}

export default VideoPlayer;