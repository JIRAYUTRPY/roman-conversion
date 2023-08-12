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
const intToRoman = function (input) {
  let sArray = [];
  let n = input;
  while (n > 0) {
    if (n / convertRomanToNumber.M >= 1) {
      sArray.push("M");
      n -= convertRomanToNumber.M;
      continue;
    } else if (n >= convertRomanToNumber.C) {
      if (n / convertRomanToNumber.M >= 0.9) {
        sArray.push("CM");
        n -= 900;
        continue;
      } else if (
        n / convertRomanToNumber.D >= 0.8 &&
        n / convertRomanToNumber.D < 1
      ) {
        sArray.push("CD");
        n -= 400;
        continue;
      } else if (n / convertRomanToNumber.D >= 1) {
        sArray.push("D");
        n -= convertRomanToNumber.D;
        continue;
      } else {
        sArray.push("C");
        n -= convertRomanToNumber.C;
        continue;
      }
    }
    if (n / convertRomanToNumber.C >= 1) {
      sArray.push("C");
      n -= convertRomanToNumber.C;
      continue;
    } else if (n >= convertRomanToNumber.X) {
      if (n / convertRomanToNumber.C >= 0.9) {
        sArray.push("XC");
        n -= 90;
        continue;
      } else if (
        n / convertRomanToNumber.L >= 0.8 &&
        n / convertRomanToNumber.L < 1
      ) {
        sArray.push("XL");
        n -= 40;
        continue;
      } else if (n / convertRomanToNumber.L >= 1) {
        sArray.push("L");
        n -= convertRomanToNumber.L;
        continue;
      } else {
        sArray.push("X");
        n -= convertRomanToNumber.X;
        continue;
      }
    }
    if (n / convertRomanToNumber.X >= 1) {
      sArray.push("X");
      n -= convertRomanToNumber.X;
      continue;
    } else if (n >= convertRomanToNumber.I) {
      if (n / convertRomanToNumber.X >= 0.9) {
        sArray.push("IX");
        n -= 9;
        continue;
      } else if (
        n / convertRomanToNumber.V >= 0.8 &&
        n / convertRomanToNumber.V < 1
      ) {
        sArray.push("IV");
        n -= 4;
        continue;
      } else if (n / convertRomanToNumber.V >= 1) {
        sArray.push("V");
        n -= convertRomanToNumber.V;
        continue;
      } else {
        sArray.push("I");
        n -= 1;
        continue;
      }
    }
  }
  return sArray.join("");
};
function App() {
  const [number, setNumber] = useState("0");
  const [roman, setRoman] = useState("-");
  function romanInput(event) {
    const value = event.target.value;
    if (value.length !== 0) {
      const result = romanConvert(value);
      if (!result) {
        setNumber("Enter only roman number");
      } else {
        setNumber(String(result));
      }
    } else {
      setNumber("0");
    }
  }
  function numberInput(event) {
    const number = Number(event.target.value);
    if (number !== 0 && number <= 10000) {
      const result = intToRoman(number);
      setRoman(result);
    } else if (number > 10000) {
      setRoman("Number too heavy");
    } else {
      setRoman("-");
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
      <div className="input-number">
        <h1>{number}</h1>
        <div>
          <label>Enter roman number:</label>
          <input onChange={romanInput} />
        </div>
      </div>
      <div className="input-number">
        <h1>{roman}</h1>
        <div>
          <label>Enter number:</label>
          <input onChange={numberInput} />
        </div>
      </div>
    </div>
  );
}

export default App;
