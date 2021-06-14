import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
}) => {
  // destructure
  const {
    title,
    description,
    price,
    categories,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    brands,
    color,
    brand,
  } = values;

  return (
    <form onSubmit={handleSubmit} className='mx-5 white-color'>
      <div className='md-form form-group '>
        <label>Title</label>
        <input
          type='text'
          name='title'
          className='form-control white-color'
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className='md-form form-group'>
        <label>Description</label>
        <textarea
          type='text'
          name='description'
          className='form-control md-textarea white-color'
          value={description}
          onChange={handleChange}
        />
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className=' md-form form-group'>
            <label>Quantity</label>
            <input
              type='number'
              name='quantity'
              className='form-control white-color'
              value={quantity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className=' md-form form-group '>
            <label>Price</label>
            <input
              type='number'
              name='price'
              className='form-control white-color'
              value={price}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* 
        <div className='md-form form-group col-md-6'>
          <label>Shipping</label>
          <select
            name='shipping'
            className='form-control'
            onChange={handleChange}
          >
            <option>Please select</option>
            <option value='No'>No</option>
            <option value='Yes'>Yes</option>
          </select>
        </div> */}

      <div className='input-group my-5'>
        <div className='input-group-prepend no-border'>
          <label
            className='input-group-text white-color light-dark-bg-color '
            // htmlFor='inputGroupSelect01'
          >
            Shipping
          </label>
        </div>
        <select
          className='browser-default dark-bg-color white-color custom-select'
          // id='inputGroupSelect01'
          name='shipping'
          onChange={handleChange}
        >
          <option selected>Please select</option>
          <option value='No'>No</option>
          <option value='Yes'>Yes</option>
        </select>
      </div>

      {/* <div className='md-form form-group'>
        <label>Color</label>
        <select name='color' className='form-control' onChange={handleChange}>
          <option>Please select</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div> */}

      <div className='input-group my-5'>
        <div className='input-group-prepend no-border'>
          <label className='input-group-text white-color light-dark-bg-color '>
            Color
          </label>
        </div>
        <select
          className='browser-default dark-bg-color white-color custom-select'
          name='color'
          onChange={handleChange}
        >
          <option selected>Please select</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* <div className='md-form form-group'>
        <label>Brand</label>
        <select name='brand' className='form-control' onChange={handleChange}>
          <option>Please select</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div> */}

      <div className='input-group my-5'>
        <div className='input-group-prepend no-border'>
          <label className='input-group-text white-color light-dark-bg-color '>
            Brand
          </label>
        </div>
        <select
          className='browser-default dark-bg-color white-color custom-select'
          name='brand'
          onChange={handleChange}
        >
          <option selected>Please select</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* <div className='md-form form-group'>
        <label>Category</label>
        <select
          name='category'
          className='form-control'
          onChange={handleCatagoryChange}
        >
          <option>Please select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div> */}

      <div className='input-group my-5'>
        <div className='input-group-prepend no-border'>
          <label className='input-group-text white-color light-dark-bg-color '>
            Category
          </label>
        </div>
        <select
          className='browser-default dark-bg-color white-color custom-select'
          name='category'
          onChange={handleCatagoryChange}
        >
          <option selected>Please select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      {showSub && (
        <div>
          <Select
            mode='multiple'
            style={{ width: '100%' }}
            placeholder='Select Sub Categories'
            value={subs}
            className='input-group-text '
            size='large'
            onChange={(value) => setValues({ ...values, subs: value })}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option
                  key={s._id}
                  className='white-color dark-bg-color'
                  value={s._id}
                >
                  {s.name}
                </Option>
              ))}
          </Select>
        </div>
      )}

      <br />
      <button className='btn btn-info mb-5'>Save</button>
    </form>
  );
};

export default ProductCreateForm;
