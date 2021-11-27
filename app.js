const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(express.json());// express >4.16

const categories = [
  {
    id: 1,
    name: "Pizza",
    description: "Pizza Pro",
    imagePath: "https://firebasestorage.googleapis.com/v0/b/pizza-dffae.appspot.com/o/dishes%2F1636649676624?alt=media&token=d40152e7-86ef-43cd-a02e-2a5b5f7e1c38"
  },
  {
    id: 2,
    name: "Gà rán",
    description: "Gà rán Pro",
    imagePath: "https://firebasestorage.googleapis.com/v0/b/pizza-dffae.appspot.com/o/dishes%2F1635942680676?alt=media&token=e5ac821c-a18b-474b-a11b-29a4d0d87c2c"
  },
  {
    id: 3,
    name: "Mỳ ý",
    description: "Mỳ ý Pro",
    imagePath: "https://firebasestorage.googleapis.com/v0/b/pizza-dffae.appspot.com/o/dishes%2F1635940527044?alt=media&token=9fb22c5f-7a08-454f-8517-d541e56c4339"
  },
]

app.get('/api/categories', (req, res)=>{
  res.status(201).send(categories)
})

app.route('/api/category').post((req, res)=>{
  const category = req.body;
  categories.push(category)
  res.status(200).send(category)
})

app.route('/api/category').put((req, res)=>{
  const category = req.body;
  for(let i = 0; i<categories.length; i++){
    if(categories[i].id === category.id){
      categories[i].name = category.name,
      categories[i].description = category.description
    }
  }
  res.status(200).send(category)
})

app.route('/api/category').delete((req, res)=>{
  const id = req.query;
  categories.splice(categories.findIndex(e => e.id === id), 1)
  res.status(200).send(id)
})

app.listen(8000, () => {
  console.log('Server started!');
});

