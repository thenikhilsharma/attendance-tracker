import React from 'react'
import { CircularProgress } from '@mui/material'
import '../(tabs)/dashboard/dashboard.css'

const CircleProgressBar = ({percentage, text}) => {
  return (
    <div className='progress-bar-card'>
      <CircularProgress variant={"determinate"} thickness={3} size={120} value={percentage} />
      <div className="progress-text-bg">
        <h2 className='progress-subject-text'>{text}</h2>
      </div>
    </div>
  )
}

export default CircleProgressBar