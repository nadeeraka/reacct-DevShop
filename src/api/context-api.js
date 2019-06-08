import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = props => {
  const [Data, setData] = useState([
    {
      id: 2343,
      name: "Dell",
      model: "i5 3000 series",
      price: "$300"
    },
    {
      id: 2344,
      name: "HP",
      model: "i3 A series",
      price: "$200"
    },
    {
      id: 2345,
      name: "Intel",
      model: "i7 ",
      price: "$700"
    },
    {
      id: 2346,
      name: "Sony",
      model: "i5 VIAO series",
      price: "$500"
    }
  ]);
  return (
    <DataContext.Provider value={[Data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
