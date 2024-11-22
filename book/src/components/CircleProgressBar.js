import React from 'react'
import '../styles/modules/CircleProgressBar.scss'

const CircleProgressBar = ({ progress, todayPage, goalPage }) => {
  const circleRadius = 18 // Circle radius
  const circumference = 2 * Math.PI * circleRadius // Circle circumference
  const progressOffset = circumference - (progress / 100) * circumference

  return (
    <div className="circle-progress-container">
      <svg className="circle-progress" width="100" height="100">
        <circle
          className="circle-background"
          cx="50"
          cy="50"
          r={circleRadius}
        />
        <circle
          className="circle-foreground"
          cx="50"
          cy="50"
          r={circleRadius}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
        />
      </svg>
      <div className="circle-text">
        {todayPage}/{goalPage}
      </div>
    </div>
  )
}

export default CircleProgressBar
