import React from 'react';

const CategoryForm = ({ handleSubmit, name, setName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-row p-2 m-2 '>
        <div className=' w-100 p-2 '>
          <div className='md-form input-group mb-3'>
            <input
              type='text'
              className='form-control light-color'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter New Category '
              aria-label='Enter New Category '
              required
              aria-describedby='MaterialButton-addon2'
            />
            <div className='input-group-append'>
              <button
                className='btn btn-md blue-bg-color m-0 px-3'
                type='submit'
                id='MaterialButton-addon2'
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CategoryForm;
