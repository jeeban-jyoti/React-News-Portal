import React, { useEffect } from 'react';

const YouTubeBackground = ({ videoId }) => {
  useEffect(() => {
    // Load the YouTube IFrame API
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('background-video', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          mute: 1,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    };
  }, [videoId]);

  return (
    <div className="video-background">
      <div id="background-video"></div>
    </div>
  );
};

export default YouTubeBackground;
