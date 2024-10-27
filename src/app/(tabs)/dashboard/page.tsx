import React from 'react';
import './dashboard.css'
import CircleProgressBar from '../../components/CircleProgressBar';
import Link from 'next/link';

const Dashboard = () => {
  const emPercentage = 60, m3percentage = 70, etPercentage = 66, tomPercentage = 56, smPercentage = 80;

  return (
      <div className="card-container">
        <div className="card-row1">
          <Link href={'/courses/em'}>
            <CircleProgressBar percentage={emPercentage} text="EM" />
          </Link>
          <Link href={'/courses/m3'}>
            <CircleProgressBar percentage={m3percentage} text="M3" />
          </Link>
          <Link href={'/courses/et'}>
            <CircleProgressBar percentage={etPercentage} text="ET" />
          </Link>
        </div>
        <div className="card-row2">
          <Link href={'/courses/tom1'}>
            <CircleProgressBar percentage={tomPercentage} text="TOM-1" />
          </Link>
          <Link href={'/courses/sm'}>
            <CircleProgressBar percentage={smPercentage} text="SM" />
          </Link>
        </div>
      </div>
  )
}

export default Dashboard
