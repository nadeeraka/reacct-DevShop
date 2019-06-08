import React, { Fragment, useContext, useState } from "react";
import { DataContext } from "../api/context-api";
import Products from "./List-of-products";
import uuid from "uuid";
const Shop = () => {
  const [Data, setData] = useContext(DataContext);
  return (
    <Fragment>
      <div className="">
        <h2>List of products </h2>

        <div className="container main">
          <div className="row">
            <div className="col-md-3">
              {Data.map(result => (
                <li className="mb-3" key={uuid()}>
                  <Products
                    name={result.name}
                    price={result.price}
                    model={result.model}
                    img={result.img}
                    id={result.id}
                  />
                </li>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shop;
