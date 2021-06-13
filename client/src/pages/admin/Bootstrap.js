import React from 'react';

import WiderAdminDash from '../../components/UI/WiderAdminDash';
import Admin from '../../components/UI/Admin';

const Bootstrap = () => {
  return (
    <Admin page={8}>
      <WiderAdminDash>
        <div className='row'>
          <div className='col-lg-4 col-md-6 mb-4 '>
            <div
              className='card card-cascade narrower mb-4 text-center dark-bg-color'
              style={{ marginTop: '28px' }}
            >
              <div className='view view-cascade'>
                <img
                  src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
                  className='card-img-top'
                  alt=''
                />
                <a>
                  <div className='mask rgba-white-slight'></div>
                </a>
              </div>

              <div className='card-body card-body-cascade'>
                <h5 className='pink-text'>
                  <i className='fab fa-product-hunt'></i> Culinary
                </h5>

                <h4 className='card-title white-color'>
                  Cheat day inspirations
                </h4>

                <p className='card-text light-color'>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                </p>

                <a type='button' className='btn-floating btn-small btn-tw'>
                  <i className='far fa-edit'></i>
                </a>

                <a
                  type='button'
                  className='btn-floating btn-small btn-dribbble'
                >
                  <i className='far fa-trash-alt'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </WiderAdminDash>
    </Admin>
  );
};

export default Bootstrap;
