
import React from 'react';
import '../App.css';
import Alert from 'react-bootstrap/Alert';

const AlertElement = () => {

  return [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  ));
    
}

export default AlertElement;
