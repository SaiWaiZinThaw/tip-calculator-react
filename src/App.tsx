import { useState, ChangeEvent } from "react";
import BillInput from "./BillInput";
import TipPercentage from "./TipPercentage";

const App = () => {
  const [bill, setBill] = useState("");
  const [ppl, setPpl] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0.15); // Default tip percentage
  const [customTip, setCustomTip] = useState(""); // State for custom tip input

  const billInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBill(event.target.value);
  };

  const pplInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPpl(event.target.value);
  };

  const tipPerBtnHandler = (per: number) => {
    const billAmount = parseFloat(bill);
    const peopleCount = parseInt(ppl);

    if (isNaN(billAmount) || isNaN(peopleCount) || peopleCount === 0) {
      return "0.00";
    }

    return ((billAmount * per) / peopleCount).toFixed(2);
  };

  const calculateTotalPerPerson = () => {
    const billAmount = parseFloat(bill);
    const tipAmount = parseFloat(tipPerBtnHandler(tipPercentage)); // Use selected tip percentage
    const peopleCount = parseInt(ppl);

    if (
      isNaN(billAmount) ||
      isNaN(tipAmount) ||
      isNaN(peopleCount) ||
      peopleCount === 0
    ) {
      return "0.00";
    }

    const totalAmount = tipAmount + billAmount / peopleCount;
    return totalAmount.toFixed(2);
  };

  const resetHandler = () => {
    setBill("");
    setPpl("");
  };

  // Function to handle selecting predefined tip percentages
  const onTipSelect = (percentage: number) => {
    setTipPercentage(percentage);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center font-spaceMono bg-LightGrayishCyan overflow-x-hidden">
      <header className="p-10">
        <h1 className="tracking-[10px] break-words w-[100px] text-xl text-DarkGrayishCyan">
          SPLITTER
        </h1>
      </header>
      <div className="lg:w-[1100px] w-full bg-white rounded-2xl flex lg:flex-row flex-col items-center justify-between lg:px-10 mb-10">
        <div className="lg:basis-6/12 p-12 lg:w-auto w-full">
          <BillInput bill={bill} billInputHandler={billInputHandler} />
          <TipPercentage
            onTipSelect={onTipSelect}
            setCustomTip={setCustomTip}
            setTipPercentage={setTipPercentage}
          />
          <div className="">
            <div className="flex items-start justify-between">
              <p className="text-DarkGrayishCyan lg:text-md text-sm lg:text-md mb-2">
                Number of People
              </p>
              <p
                id="errorText"
                className="text-red-500 text-xs text-end hidden"
              >
                Can't be zero
              </p>
            </div>
            <label className="relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-10 before:bg-[url('/images/icon-person.svg')] before:bg-no-repeat"></label>
            <input
              id="numOfPeople"
              value={ppl}
              onChange={pplInputHandler}
              type="number"
              className="bg-gray-100 text-lg py-3 px-5 w-full text-end rounded-lg border-2 border-solid border-gray-100 focus:border-StrongCyan focus:border-2 focus:border-solid focus:shadow-sm focus:shadow-VeryDarkCyan focus:outline-none caret-StrongCyan"
            />
          </div>
        </div>
        <div className="lg:basis-6/12 bg-VeryDarkCyan rounded-xl p-10 flex flex-col items-center w-full">
          <div className="w-full p-10 lg:p-0">
            <div className="flex items-start justify-between pb-10">
              <div>
                <span className="text-white block">Tip Amount</span>
                <span className="text-GrayishCyan text-sm lg:text-md block">
                  / person{" "}
                </span>
              </div>
              <span id="tipsAmount" className="text-4xl text-StrongCyan">
                ${tipPerBtnHandler(tipPercentage)}
              </span>
            </div>
            <div className="flex items-start justify-between pb-40">
              <div>
                <span className="text-white block">Total</span>
                <span className="text-GrayishCyan text-sm lg:text-md block">
                  / person
                </span>
              </div>
              <span id="total" className="text-4xl text-StrongCyan">
                ${calculateTotalPerPerson()}
              </span>
            </div>
          </div>
          <button
            id="reset"
            onClick={resetHandler}
            className="bg-StrongCyan w-[400px] h-[45px] hover:bg-[#67e1cb] text-VeryDarkCyan text-xl rounded-lg block active:scale-110 duration-300"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
