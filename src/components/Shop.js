import React, { Fragment, useContext, useState } from "react";
import { DataContext } from "../api/context-api";
import Products from "./List-of-products";
import uuid from "uuid";
const Shop = () => {
  const value = useContext(DataContext);
  return (
    <Fragment>
      <div className="">
        <h2>List of products </h2>
        <ul>
          {value.map(result => (
            <li key={uuid()}>
              <Products
                name={result.name}
                price={result.price}
                model={result.model}
              />
            </li>
          ))}{" "}
        </ul>
      </div>
    </Fragment>
  );
};

export default Shop;
