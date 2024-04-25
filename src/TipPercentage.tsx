import React, { useState } from "react";
import TipPercentage from "./TipPercentage";

const ParentComponent = () => {
  const [customTip, setCustomTip] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);

  const handleTipSelect = (percentage) => {
    // Your logic to handle tip selection
    console.log("Selected tip percentage:", percentage);
  };

  return (
    <div>
      {/* Example of using the TipPercentage component */}
      <TipPercentage
        onTipSelect={handleTipSelect}
        setCustomTip={setCustomTip}
        setTipPercentage={setTipPercentage}
        customTip={customTip}
      />
    </div>
  );
};

export default ParentComponent;
