import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export default function InputTable({investVal, symbol, onChangeInitial}) {
    
    const [investInput, setInvestInput] = useState(investVal)
    const [isEditing, setIsEditing] = useState(false);
    const [numberAfterChange, setNumberAfterChange] = useState([]);


    function handleChange(event){
        setIsEditing((editing) => !editing);
        setInvestInput(event.target.value)

        if(isEditing){
          onChangeInitial(symbol,investInput)
        }
        const newNumber = event.target.value;
        setNumberAfterChange(newNumber);
        // console.log(test)
        // console.log(test[0])

    }

    const handleButtonClick = () => {
      onChangeInitial(numberAfterChange)
    }

    // let x = calculateInvestmentResults(onChangeInitial)
    // console.log(x) 


  return (
    <ol className="input-group">
      <input type="number" value={investInput} onChange={handleChange} onClick={handleButtonClick}/>
      
    </ol>
  );
}
