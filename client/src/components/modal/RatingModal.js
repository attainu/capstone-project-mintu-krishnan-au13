import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { StarOutlined } from '@ant-design/icons';
import { useHistory, useParams } from 'react-router-dom';

const RatingModal = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [modalVisible, setModalVisible] = useState(false);

  let history = useHistory();
  let { slug } = useParams();

  const handleModal = () => {
    if (user && user.token) {
      setModalVisible(true);
    } else {
      toast.info('Login to review');
      history.push({
        pathname: '/login',
        state: { from: `/product/${slug}` },
      });
    }
  };

  return (
    <>
      {/* <div onClick={handleModal}>
        <StarOutlined className='text-danger' /> <br />
        {user ? 'Leave rating' : 'Login to leave rating'}
      </div> */}

      <button
        onClick={handleModal}
        className='btn btn-outline-warning btn-rounded'
      >
        <i className='fas fa-star ' aria-hidden='true'></i>
      </button>

      <Modal
        title='Leave your rating'
        centered
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
          toast.success('Thanks for your review');
        }}
        onCancel={() => setModalVisible(false)}
      >
        {children}
      </Modal>
    </>
  );
};

export default RatingModal;
