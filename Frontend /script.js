let cart=[];

const products=[
{id:1,name:"Laptop",price:50000},
{id:2,name:"Mobile",price:20000},
{id:3,name:"Headphones",price:3000}
];

const productDiv=document.getElementById("products");

products.forEach(product=>{
productDiv.innerHTML+=`
<div class="product">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart(${product.id})">
Add To Cart
</button>
</div>
`;
});

function addToCart(id){
const product=products.find(p=>p.id===id);
cart.push(product);
displayCart();
}

function displayCart(){
const cartList=document.getElementById("cart");
cartList.innerHTML="";

cart.forEach(item=>{
cartList.innerHTML+=`
<li>${item.name} - ₹${item.price}</li>
`;
});
}

function checkout(){
alert("Order Placed Successfully");
cart=[];
displayCart();
}
