import React from "react";

const ListGroup = (props) => {
  const { textPropterty, valuePropterty, items, onItemSelect, selectedItem } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valuePropterty]}
          onClick={() => onItemSelect(item)}
          className={item === selectedItem ? "list-group-item active" : "list-group-item"}
        >
          {item[textPropterty]}
        </li>
      ))}
      ;
    </ul>
  );
};

// these props we can pass from ListGroup used is fakeMovies component as well
// we just here as default one
ListGroup.defaultProps = {
  textPropterty: "name",
  valuePropterty: "_id",
};

export default ListGroup;
