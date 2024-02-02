import { useState } from "react";

export default function OutputTable({years, interests, valEndOfYear, annInv, totalInvest}){
    const yearCells = years.map((year, index) => (
        <tr key={index}>{year+1}
            <td>col2</td>
            <td>col2</td>
            <td>col2</td>
            <td key={year}>{totalInvest+1}</td>
        </tr>

      ));
      

    const newYears = [...years+1]
    let yearNew = newYears.pop()

    const inter = [...interests]
    let newInter = inter.pop()
    console.log(newInter)

    const valEOY = [...valEndOfYear]
    let newValEOY = valEOY.pop()
    console.log(newValEOY)

    const ai = [annInv]
    let newAi = ai.pop()
    console.log(newAi)

    
    return(
        <table id="result">
            <thead id="thead">
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>interest (Year) </th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
               {yearCells}
               
              
            </tbody>
        </table>
    )
}