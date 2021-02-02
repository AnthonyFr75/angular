import * as express from 'express';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import Product from './model/product';
import * as bodyParser from 'body-parser';

const app = express();
const port = 3000;
const uri =
    "mongodb+srv://??:??@cluster0.idw05.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('ok'))
    .catch(() => console.log('error'));

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/products", (req, res) => {
  Product.find().then((documents) => {
    res.status(200).json({
      message: "Products fetched successfully!",
      products: documents
    });
  });
});

app.post("/product", (req, res) => {
  const product = new Product({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    rating: req.body.rating,
    warranty_years: req.body.warranty_years,
    available: req.body.available
  });
  product.save().then(createdProduct => {
    res.status(201).json({
      message: "Products added successfully",
      productId: createdProduct._id
    });
  });
});

app.put("/product/:id", (req, res) => {
  const product = new Product({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    rating: req.body.rating,
    warranty_years: req.body.warranty_years,
    available: req.body.available
  });
  Product.updateOne({ _id: req.body.id }, product).then(() => {
    res.status(200).json({message: "Update successful !"})
  });
});

app.delete("/product/:id", (req, res) => {
  Product.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({message: "Product Deleted !"});
  });
});

app.listen(port);
