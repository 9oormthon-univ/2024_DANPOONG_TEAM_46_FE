import React from 'react';
import '../styles/modules/_progress-bar.scss';

const ProgressBar = ({ progress, colors = ['#7545fd', '#ab2ff6', '#f36dff', '#45dcfd', '#456dfd', '#0061d4'] }) => {
  const progressIndex = Math.floor(progress / (100 / colors.length)) % colors.length;
  const progressColor = colors[progressIndex];

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: progressColor,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
