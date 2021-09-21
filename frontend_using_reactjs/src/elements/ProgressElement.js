
import React from 'react';
import '../App.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressElement = () => {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} />; 
}

export default ProgressElement;
