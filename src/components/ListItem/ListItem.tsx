import { useState } from "react";
import { UserCard } from "../UserCard";

import "./ListItem.css";

interface ListItemProps {
  person: Person;
}

export const ListItem = ({ person }: ListItemProps) => {
  const [showCard, setShowCard] = useState(false);

  const handlerShowCard = () => {
    setShowCard(!showCard);
  };

  return (
    <li className="ListItem__item">
      <div className="ListItem__person">
        <img
          className="ListItem__foto"
          src={`foto/${person.photo}`}
          alt={person.name}
        />
        <div className="ListItem__info">
          <span>{person.name}</span>
          <span>{person.nickname}</span>
        </div>
      </div>

      <button className="ListItem__button" onClick={handlerShowCard}>
        View
      </button>

      {showCard && <UserCard person={person} />}
    </li>
  );
};
