import React from "react";
import { directive } from "@babel/types";

const Products = ({ name, price, model }) => (
  <div>
    <h3>{name}</h3>
    <p>{model}</p>
    <p>{price}</p>
  </div>
);

export default Products;
