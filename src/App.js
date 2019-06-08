import React from "react";
import "./App.css";
import Shop from "./components/Shop";
import { DataProvider } from "./api/context-api";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Shop />
      </div>
    </DataProvider>
  );
}

export default App;
