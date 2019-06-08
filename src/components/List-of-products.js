import React from "react";

const style = ";";

const Products = ({ name, price, model, id, img }) => (
  <div class="card rm">
    <img src="../dist/img/w.jpg" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title text-center">Product name {name}</h5>
      <p class="card-text">Model: {model}</p>
      <p class="card-text">price: ${price}</p>
      <p class="card-text">product id {id}</p>
      <button className="btn btn-success">Buy</button>
    </div>
  </div>
);

export default Products;
