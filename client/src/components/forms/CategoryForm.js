import React from 'react';

const CategoryForm = ({ handleSubmit, name, setName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className=' card form-group p-5 m-5'>
        {/* <label>Name</label>
        <input
          type='text'
          className='form-control'
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus
          required
        /> */}
        <div className='md-form  m-1'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            required
            id='inputValidationEx'
            className='form-control validate'
          />
          <label
            for='inputValidationEx'
            // data-error='wrong'
            // data-success='right'
          >
            Category Name
          </label>
        </div>

        {/* <button className='btn btn-outline-primary'>Save</button> */}
        {/* <button type='button' class='btn  btn-success waves-effect  my-2'>
          <i class='mr-2 far fa-save'></i>
          Save
        </button> */}

        <button type='button' class='btn  btn-outline-default waves-effect'>
          <i class='far fa-save pr-2' aria-hidden='true'></i>Save
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
