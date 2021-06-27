import React from 'react';

const PageNotFound = () => {
  return (
    <header>
      <div className='view vh-100 grey lighten-3'>
        <div className='mask'>
          <div className='container h-100'>
            <div className='row align-items-center h-100'>
              <div className='col-md-6'>
                <h1
                  className='mb-4'
                  style={{ fontSize: '5rem', fontWeight: '700' }}
                >
                  Page <span className='text-warning'>Not</span>
                  <br />
                  <span className='cyan-text'>Found</span>.
                </h1>
              </div>

              <div className='col-md-6'>
                <img
                  src='https://mdbootstrap.com/img/illustrations/hiker-man-colour.svg'
                  alt=''
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageNotFound;
