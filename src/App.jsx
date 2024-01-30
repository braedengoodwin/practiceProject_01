import { useState } from "react";
import InputTable from "./components/InputTable";
import OutputTable from "./components/OutputTable";

function App() {
  
  const [changeInitialNum, setChangeInitialNum] = useState({
    initialInvestment: {}, 
    annualInvestment: {},
    expectedReturn: {},
    duration: {}
  });

  

  function handleInitialNumChange(symbol, newVal){
    setChangeInitialNum((prevVal) => {
      return {
        ...prevVal,
        [symbol]: newVal
      }
    })

  }

  return (
    <main>
      <div id="user-input">
        <label>
          {"Initial Investment "}
          <InputTable 
            investVal={changeInitialNum.initialInvestment}
            onChangeInitial={(newVal) => handleInitialNumChange("initialInvestment", newVal)}
            symbol="initialInvestment"
          />
        </label>
        <label>
          {"Annual Investment "}
          <InputTable 
            investVal={changeInitialNum.annualInvestment}
            onChangeInitial={(newVal) => handleInitialNumChange("annualInvestment", newVal)}
            symbol = "annualInvestment"
          />
        </label>
        <label>
          {"Expected Return"}
          <InputTable 
            investVal={changeInitialNum.expectedReturn}
            onChangeInitial={(newVal) => handleInitialNumChange("expectedReturn", newVal)}
            symbol = "expectedReturn"
          />
        </label>
        <label>
          {"Duration"}
          <InputTable 
            investVal={changeInitialNum.duration}
            onChangeInitial={(newVal) => handleInitialNumChange("duration", newVal)}
            symbol = "duration"
          />
        </label>
      </div>
      <OutputTable/>
    </main>
  );
}

export default App;
