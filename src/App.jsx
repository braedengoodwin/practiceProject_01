import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";
import InputTable from "./components/InputTable";
import OutputTable from "./components/OutputTable";

function App() {
  
  const [changeInitialNum, setChangeInitialNum] = useState({
    initialInvestment: 0, 
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  function handleInitialNumChange(symbol, newVal){
    setChangeInitialNum((prevVal) => {
      
      return {
        ...prevVal,
        [symbol]: newVal 
         
      }
    })
  }
 
  let newIntialInv = Number(changeInitialNum.initialInvestment)
  let newAnn = Number(changeInitialNum.annualInvestment)
  const totalInvest = newIntialInv + newAnn
  
  console.log(totalInvest)

  let x = calculateInvestmentResults(changeInitialNum)

  let years = x.map(item => item.year)
  let interests = x.map(item => item.interest)
  let valEndOfYear = x.map(item => item.valueEndOfYear)
  let annInv = x.map(item => item.annualInvestment)
 
  // console.log(interests)
  // console.log(valEndOfYear)
  // console.log(annInv)

 
  


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
      <OutputTable years={years} interests={interests} valEndOfYear={valEndOfYear} annIn={annInv} totalInvest={totalInvest}/>
    </main>
  );
}

export default App;
