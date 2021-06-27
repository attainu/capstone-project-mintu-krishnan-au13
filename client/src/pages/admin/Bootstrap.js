import React from 'react';

const Bootstrap = () => {
  return (
    <div>
      <div class='d-flex justify-content-center align-items-center vh-100'>
        <div
          class='spinner-grow text-info'
          role='status'
          style={{ width: '3rem', height: '3rem' }}
        >
          <span class='sr-only'>Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Bootstrap;
