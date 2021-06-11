import React from 'react';

const CategoryForm = ({ handleSubmit, name, setName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-row p-2 m-2 '>
        {/* <label>Name</label>
        <input
          type='text'
          className='form-control'
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus
          required
        /> */}

        <div className=' w-100 p-2 '>
          <div className='md-form input-group mb-3'>
            <input
              type='text'
              class='form-control light-color'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter New Category '
              aria-label='Enter New Category '
              required
              aria-describedby='MaterialButton-addon2'
            />
            <div class='input-group-append'>
              <button
                class='btn btn-md blue-bg-color m-0 px-3'
                type='submit'
                id='MaterialButton-addon2'
              >
                Save
              </button>
            </div>
          </div>
        </div>

        {/* <div className='d-flex'>
          <div className='col-7'>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              required
              placeholder='Enter Category Name'
              className='form-control '
            />
          </div>
          <div className='col'>
            <button type='submit' class='btn btn-default waves-effect'>
              Save
            </button>
          </div>

        </div> */}
      </div>
    </form>
  );
};

export default CategoryForm;
