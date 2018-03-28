const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
  name: String,
  description: String,
  price: String,
  image: String,
});

const user = mongoose.model('product', productSchema);


module.exports = user;