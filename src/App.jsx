import { useState } from "react";
import "./App.css";
const convertRomanToNumber = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const romanConvert = function (string) {
  const stringArray = string.split("");
  console.log(stringArray);
  const checker = stringArray.filter((value) => {
    return convertRomanToNumber[value] === undefined;
  });

  if (checker === undefined) {
    return undefined;
  } else {
    const defind = stringArray.reduce(
      (acc, value) => {
        if (
          convertRomanToNumber[value] / convertRomanToNumber[acc.checker] >=
          5
        ) {
          acc.sum -= convertRomanToNumber[acc.checker];
          acc.sum +=
            convertRomanToNumber[value] - convertRomanToNumber[acc.checker];
        } else {
          acc.sum += convertRomanToNumber[value];
        }
        return { sum: acc.sum, checker: value };
      },
      {
        sum: 0,
        checker: "",
      }
    );
    return defind.sum;
  }
};

function App() {
  const [number, setNumber] = useState("0");
  function romanInput(event) {
    const value = event.target.value;
    if (value.length !== 0) {
      const result = romanConvert(value);
      if (!result) {
        setNumber("Enter only roman number..");
      } else {
        setNumber(String(result));
      }
    } else {
      setNumber("0");
    }
  }
  return (
    <div className="main">
      <div className="main-2">
        <div>
          <table>
            <tr>
              <td>Roman</td>
              <td>Meaning</td>
            </tr>
            <tr>
              <td>I</td>
              <td>1</td>
            </tr>
            <tr>
              <td>V</td>
              <td>5</td>
            </tr>
            <tr>
              <td>X</td>
              <td>10</td>
            </tr>
            <tr>
              <td>L</td>
              <td>50</td>
            </tr>
            <tr>
              <td>C</td>
              <td>100</td>
            </tr>
            <tr>
              <td>D</td>
              <td>500</td>
            </tr>
            <tr>
              <td>M</td>
              <td>1000</td>
            </tr>
          </table>
        </div>
        <div>
          <h2>Rules of roman</h2>
          <h3>I before V and X is mean V or X - 1</h3>
          <h3>X before L and C is mean V or X - 10</h3>
          <h3>C before D and M is mean V or X - 100</h3>
        </div>
      </div>
      <div>
        <h1>{number}</h1>
        <label>Enter roman number:</label>
        <input onChange={romanInput} />
      </div>
    </div>
  );
}

export default App;
