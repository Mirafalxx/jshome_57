import React, { useState } from "react";

const SoloPay = (props) => {
  const [items, setItems] = useState([{ name: "", price: "" }]);
  const addItem = () => {
    setItems([...items, { name: "", price: "" }]);
  };

  const onChangeName = (e, i) => {
    const itemsCopy = [...items];
    const itemCopy = { ...itemsCopy[i] };
    itemCopy.name = e.target.value;
    itemsCopy[i] = itemCopy;
    setItems(itemsCopy);
  };
  const removePerson = (i) => {
    const copyItems = [...items];
    copyItems.splice(i, 1);
    setItems(copyItems);
  };

  return (
    <div>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <input
              type="text"
              value={item.name}
              placeholder="name"
              onChange={(e) => onChangeName(e, i)}
            />
            &nbsp;
            <input
              type="number"
              value={item.price}
              placeholder="price"
              onChange={(e) => onChangeName(e, i)}
            />
            KGS
            <button onClick={() => removePerson(i)}>&times;</button>
          </div>
        );
      })}

      <button onClick={addItem}>Добавить</button>
    </div>
  );
};

export default SoloPay;
