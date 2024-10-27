"use client"

import React, { useState } from 'react'
import CircleProgressBar from './CircleProgressBar';
import '../(tabs)/dashboard/dashboard.css'

const Slider = () => {
  const [percentange, setPercentage] = useState(35);
    return (
    <div>
      <CircleProgressBar percentange='68' circleWidth="200"/>
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={percentange}
        onChange={(ev) => setPercentage(ev.target.value)}
      />
    </div>
  )
}

export default Slider
