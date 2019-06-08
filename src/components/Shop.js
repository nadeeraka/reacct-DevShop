import React, { Fragment, useContext } from "react";
import { DataContext } from "../api/context-api";
const Shop = () => {
  const value = useContext(DataContext);
  return (
    <Fragment>
      <div className="">
        <h2>List of products</h2>
        {value}
      </div>
    </Fragment>
  );
};

export default Shop;
