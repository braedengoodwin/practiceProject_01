import { useState } from "react";

export default function InputTable({investVal, symbol, onChangeInitial}) {
    
    const [investInput, setInvestInput] = useState(investVal)
    const [isEditing, setIsEditing] = useState(false);

    
    function handleChange(event){
        setIsEditing((editing) => !editing);
        setInvestInput(event.target.value)

        if(isEditing){
            onChangeInitial(symbol,investInput)
        }
        let test = [symbol, event.target.value]
        // console.log(event.target.value)
        // console.log(symbol)
        // console.log(investInput)
        console.log(test)
        console.log(test[0])
        
    }

  return (
    <ol className="input-group">
      <input type="number" value={investInput} onChange={handleChange} />
      
    </ol>
  );
}
