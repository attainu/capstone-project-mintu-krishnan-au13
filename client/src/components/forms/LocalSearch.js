import React from 'react';

const LocalSearch = ({ keyword, setKeyword }) => {
  const handleSearchChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <div className='card mt-3 dark-bg-color'>
      {/* <input
        type='search'
        placeholder='Filter'
        value={keyword}
        onChange={handleSearchChange}
        className='form-control  e-s-color'
      /> */}

      <form className='form-inline d-flex justify-content-center md-form form-sm'>
        <input
          className='form-control light-color form-control-sm mr-3 w-75'
          type='search'
          value={keyword}
          onChange={handleSearchChange}
          placeholder='Search'
          aria-label='Search'
        />
        <i className='fas fa-search blue-color' aria-hidden='true'></i>
      </form>
    </div>
  );
};

export default LocalSearch;
