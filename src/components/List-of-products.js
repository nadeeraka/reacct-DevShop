import React, { useState, useEffect, Fragment } from "react";
import uuid from "uuid";

const Products = ({ name, price, model, id, img }) => {
  const [Items, setItems] = useState({ id: "", name: "", price: 0 });
  const [Price, setPrice] = useState(0);
  const [Name, setName] = useState([]);
  const [Count, setCount] = useState(0);

  const totel = () => {
    let count = 0;
    const price = Number(Items.price);
    const newPrice = Price + price;
    let names = Items.name;

    let NewName = [...Name, names];

    setName(NewName);
    setPrice(newPrice);
    count = Count + 1;
    setCount(count);
  };

  const onClick = e => {
    totel();
    e.preventDefault();
  };
  return (
    <Fragment>
      <div className="card rm">
        <img src="../dist/img/w.jpg" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center">Product name {name}</h5>
          <p className="card-text">Model: {model}</p>
          <p className="card-text">price: ${price}</p>
          <p className="card-text">product id {id}</p>
          <form onSubmit={onClick}>
            <button
              className="btn btn-success"
              type="submit"
              onClick={e => setItems({ id, name, price })}
            >
              Buy
            </button>
          </form>
        </div>
        {
          Price
          //console.log(Items)}
        }{" "}
        and
        {Count} and{" "}
        {Name.length && Name.map(res => <li key={uuid()}>{res}</li>)}
      </div>
    </Fragment>
  );
};

export default Products;
