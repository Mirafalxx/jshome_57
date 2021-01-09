import React from "react";

const BillList = (props) => {
  return (
    <div>
      <h4>Общая Сумма :{props.total}</h4>
      <h4>Количество человек :{props.human}</h4>
      <h4>Каждый платит по :{props.everyPay}</h4>
    </div>
  );
};

export default BillList;
