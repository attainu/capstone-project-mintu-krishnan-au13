import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: 'SEARCH_QUERY',
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };

  return (
    <form className='d-flex align-items-center ' onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type='search'
        value={text}
        className='form-control mr-sm-2'
        placeholder='What are you looking for?'
      />
      <SearchOutlined
        onClick={handleSubmit}
        style={{
          cursor: 'pointer',
          backgroundColor: 'yellow',
          color: 'black',
          fontSize: '1rem',
          padding: '10px',
          marginLeft: '-10px',
          border: 'solid 1px',
        }}
      />
    </form>
  );
};

export default Search;
