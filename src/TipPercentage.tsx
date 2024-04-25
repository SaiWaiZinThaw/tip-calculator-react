import React, { useState, ChangeEvent } from "react";

interface TipPercentageProps {
  onTipSelect: (percentage: number) => void;
  setCustomTip: (value: string) => void;
  setTipPercentage: (percentage: number) => void;
}

const TipPercentage: React.FC<TipPercentageProps> = ({
  onTipSelect,

  setTipPercentage,
}) => {
  const [customTipValue, setCustomTipValue] = useState("");

  const handleCustomTipInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCustomTipValue(value);
    // Update the custom tip value in the parent component
    // Update the tip percentage in the parent component
    setTipPercentage(parseFloat(value) / 100);
  };

  return (
    <div className="pb-12">
      <p className="text-DarkGrayishCyan lg:text-md text-sm lg:text-md mb-4">
        Select Tip %
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 auto-rows-fr auto-cols-fr">
        {[5, 10, 15, 20, 50].map((percentage) => (
          <button
            key={percentage}
            onClick={() => onTipSelect(percentage / 100)}
            className="w-[130px] h-[55px] rounded-lg bg-VeryDarkCyan text-white text-xl hover:bg-[#67e1cb] hover:text-VeryDarkCyan active:scale-110 duration-300"
          >
            {percentage}%
          </button>
        ))}
        <input
          value={customTipValue}
          onChange={handleCustomTipInputChange}
          type="number"
          className="w-[130px] h-[55px] bg-gray-100 rounded-lg text-xl text-end p-2 placeholder-DarkGrayishCyan placeholder:text-center"
          placeholder="Custom"
        />
      </div>
    </div>
  );
};

export default TipPercentage;
