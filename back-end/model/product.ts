import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: String,
  type: String,
  phone: String,
  price: Number,
  rating: Number,
  warranty_years: Number,
  available: Boolean
});

export default model('Product', productSchema);
