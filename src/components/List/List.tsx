import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListData, setListData } from "../../store";
import { getData } from "../api/api";
import { ListItem } from "../ListItem";

import "./List.css";

export const List = () => {
  const dispatch = useDispatch();
  const list = useSelector(getListData);
  const [showAll, setShowAll] = useState(true);

  const handlerShowMore = () => {
    dispatch(setListData(getData()));
    setShowAll(false);
  };

  return (
    <ul className="List">
      {list?.map((person: Person) => (
        <ListItem person={person} key={person.nickname} />
      ))}
      {showAll && (
        <li className="List__button">
          <button onClick={handlerShowMore} className="List__showMoreButton">
            View All
          </button>
        </li>
      )}
    </ul>
  );
};
