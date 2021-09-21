import React from 'react';
import '../App.css';

const ShadowElement = () => {

    return (
      <>
        <div>
          <div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
          <div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
          <div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
          <div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
        </div>
      </>    
    );
    
}

export default ShadowElement;
