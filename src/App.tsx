import React from "react";
import { useDispatch } from "react-redux";

import { getData } from "./components/api/api";
import { List } from "./components/List";
import { setListData } from "./store";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const loadData = () => {
    const data = getData().slice(0, 3);

    dispatch(setListData(data));
  };

  loadData();

  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
