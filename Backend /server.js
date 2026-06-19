const express=require("express");
const cors=require("cors");
const mysql=require("mysql2");

const app=express();

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"ecommerce"
});

db.connect(err=>{
if(err){
console.log(err);
}
else{
console.log("MySQL Connected");
}
});

app.get("/products",(req,res)=>{
db.query(
"SELECT * FROM products",
(err,result)=>{
if(err) throw err;
res.json(result);
});
});

app.post("/orders",(req,res)=>{

const {userId,totalAmount}=req.body;

db.query(
"INSERT INTO orders(userId,totalAmount) VALUES(?,?)",
[userId,totalAmount],
(err,result)=>{
if(err) throw err;
res.json({
message:"Order Created"
});
});
});

app.listen(5000,()=>{
console.log("Server Running");
});
