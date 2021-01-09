import React from "react";

const EqualPay = (props) => {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={props.change}
        type="number"
      />
    </div>
  );
};

export default EqualPay;
