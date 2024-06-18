import React from 'react';
import NewsList from '../components/NewsList';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="video-background">
        <div className="video-foreground">
          <iframe
            src="https://www.youtube.com/embed/Y1BmjPeatI4?autoplay=1&mute=1&loop=1&playlist=Y1BmjPeatI4"
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
      <NewsList />
    </div>
  );
};

export default HomePage;
