import React, { useState } from "react";
import EqualPay from "../../Components/EqualPay/Equal/EqualPay";
import BillList from "../../Components/EqualPay/BillList";

const EqualPayContainer = () => {
  const [showBill, setShowBill] = useState(false);
  const [input, setInput] = useState({
    people: "",
    amout: "",
    tip: "",
    delivery: "",
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [equalPay, setEqualPay] = useState(0);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: parseFloat(value) });
  };
  const computeTotalPrice = () => {
    const { people, amout, tip, delivery } = input;
    const tipPercent = (amout * tip) / 100;
    const bill = Math.ceil((amout + tipPercent + delivery) / people);
    setShowBill(true);
    setTotalPrice(Math.ceil(amout + tipPercent));
    setEqualPay(bill);
  };
  return (
    <div>
      <EqualPay
        placeholder="people"
        value={input.people}
        name="people"
        change={handleChange}
      />
      <EqualPay
        placeholder="amout"
        value={input.amout}
        name="amout"
        change={handleChange}
      />
      <EqualPay
        placeholder="tip"
        value={input.tip}
        name="tip"
        change={handleChange}
      />
      <EqualPay
        placeholder="delivery"
        value={input.delivery}
        name="delivery"
        change={handleChange}
      />
      <button onClick={computeTotalPrice}>Расчитать</button>
      {showBill && (
        <BillList total={totalPrice} human={input.people} everyPay={equalPay} />
      )}
    </div>
  );
};

export default EqualPayContainer;
