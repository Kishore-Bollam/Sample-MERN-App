const express = require("express");
const app = express()
 app.use(express.json());
 app.get("/",(req , res) =>{
  res.send("<h1>hello world</h1>")
 })
 const products = [
    {
        id:1,
        name:"i phone",
        cost:50000
    },
    {
        id:2,
        name:"samsung",
        cost:30000
    },
    {
      id:3,
      name:"mi",
      cost:20000
    },
    {
     id :4,
     name:"oppo",
     cost:15000
    }
 ]
  app.get("/products/:id " , (req , res)=>{
    const newdata = products.filter(item => item.id.toString() === req.params.id)
     return res.send(newdata)
  })
  app.post("/addproducts", (req ,res)=>{
    const {id, name} = req.body;
    console.log(id , name);
    return res.send("data stored");
  })
app.listen(5000 , () => console.log("server started...."))