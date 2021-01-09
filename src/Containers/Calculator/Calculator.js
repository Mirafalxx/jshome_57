import React, { useState } from "react";
import EqualPayContainer from "../EqualPayContainer/EqualPayContainer";
import SoloPayContainer from "../SoloPayContainer/SoloPayContainer";

const Calculator = () => {
  const [mode, setMode] = useState("equalPay");
  const changePaymentMode = (e) => {
    setMode(e.target.value);
  };
  return (
    <div>
      <p>
        <input
          type="radio"
          name="options"
          value="equalPay"
          onChange={changePaymentMode}
          checked={mode === "equalPay"}
        />
        Поровну оплатить
      </p>
      <p>
        <input
          type="radio"
          name="options"
          value="soloPay"
          onChange={changePaymentMode}
          checked={mode === "soloPay"}
        />
        Индивидуально оплатить
      </p>
      {mode === "equalPay" && <EqualPayContainer />}
      {mode === "soloPay" && <SoloPayContainer />}
    </div>
  );
};

export default Calculator;
