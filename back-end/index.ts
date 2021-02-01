import * as express from 'express';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import Product from './model/product';

const port = 3000;
const uri =
    "mongodb+srv://???:???@cluster0.idw05.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
    .then((result) => console.log('ok'))
    .catch((error) => console.log('error'));

/*const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));*/
const app = express();

app.get("/product", (req, res, next) => {
  Product.find().then((documents) => {
    res.status(200).json({
      message: "Products fetched successfully!",
      posts: documents
    });
  });
});

app.post("/product", (req, res, next) => {
  const product = new Product({
    name: 'String',
    type: 'String',
    phone: 'String',
    price: 2,
    rating: 1,
    warranty_years: 5,
    available: true
  });
  product.save().then(createdProduct => {
    res.status(201).json({
      message: "Products added successfully",
      postId: createdProduct._id
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
