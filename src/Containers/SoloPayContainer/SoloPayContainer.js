import React, { useState } from "react";
import SoloPay from "../../Components/SoloPay/SoloPay";

const SoloPayContainer = () => {
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
      {items.map((elem, i) => {
        <SoloPay />;
      })}
    </div>
  );
};

export default SoloPayContainer;
