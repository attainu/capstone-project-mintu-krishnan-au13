const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'User must have an email!'],
      index: true,
      unique: true,
    },
    role: {
      type: String,
      default: 'subscriber',
    },
    picture: {
      type: String,
    },
    cart: {
      type: Array,
      default: [],
    },
    address: {
      type: String,
    },
    wishlist: [
      {
        type: ObjectId,
        ref: 'Product',
        required: [true, 'Wishlist must belong to a Product!'],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
