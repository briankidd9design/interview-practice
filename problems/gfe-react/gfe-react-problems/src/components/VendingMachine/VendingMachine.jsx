import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./vendingMachine.css";

// Create a vending machine application with React that takes in a list of items and a list of coins.
// The vending machine should allow the user insert coins and to select an item.
// The vending machine should return the item if the user has inserted enough money.
// If the user has not inserted enough money, the vending machine should return the coins that were inserted.
// The vending machine should also return the item and any remaining change if the user has inserted more money than the item costs

function VendingMachine() {
  const [insertedMoney, setInsertedMoney] = useState("");
  const [feedback, setFeedback] = useState("");
  const testdata = {
    items: [
      {
        name: "Candy",
        price: 1.0,
      },
      {
        name: "Soda",
        price: 1.5,
      },
      {
        name: "Chips",
        price: 2.0,
      },
      {
        name: "Sandwhich",
        price: 4.0,
      },
    ],
    coins: [
      {
        name: "Nickel",
        value: 0.05,
      },
      {
        name: "Dime",
        value: 0.1,
      },
      {
        name: "Quarter",
        value: 0.25,
      },
    ],
  };

  function vendItem(price, name) {
    setFeedback(" ");
    if (insertedMoney === "") {
      setFeedback(`No money has been inserted`);
      return;
    }
    const insertedNum = parseFloat(insertedMoney);
    if (price === insertedNum) {
      setFeedback(`${name} vended`);
      setInsertedMoney("");
    } else if (price > insertedNum) {
      setFeedback(
        `Insufficient Money, please insert $${(price - insertedMoney).toFixed(
          2
        )} more`
      );
    } else {
      setFeedback(
        `${name} vended: Your change: $${(insertedNum - price).toFixed(2)}`
      );
    }
  }

  function moneyAdder(value) {
    setFeedback(" ");
    // let totalMoneyInserted = 0;
    // const runningTotal = [];
    // runningTotal.push(value);
    // for (let i = 0; i < runningTotal.length; i++) {
    //   totalInserted += runningTotal[i];
    // }

    // let totalInserted = parseFloat(value + insertedMoney);
    // // totalInserted = totalInserted.toFixed(2);
    // setInsertedMoney(totalInserted);
    // console.log(totalInserted);

    const currentMoney = parseFloat(insertedMoney) || 0;
    const coinValue = parseFloat(value);

    // Add the values and round to 2 decimal places to fix floating point precision
    const totalInserted = Math.round((currentMoney + coinValue) * 100) / 100;

    setInsertedMoney(totalInserted);
  }

  return (
    <>
      <div className="vending-machine">
        <div className="vending-machine-top">
          <h1>Vending Machine</h1>
          <ul className="vending-items">
            {testdata.items.map((item) => (
              <li key={item.name}>
                <button
                  className="vending-buttons"
                  onClick={() => vendItem(item.price, item.name)}
                >
                  {" "}
                  <span> {item.name}</span> <span>${item.price} </span>
                </button>
              </li>
            ))}
          </ul>

          <input
            id="moneyInsert"
            aria-label="Insert money to purchase item"
            type="text"
            placeholder="Insert money"
            value={`${insertedMoney}`}
            onChange={(e) => setInsertedMoney(e.target.value)}
            readOnly
          />
        </div>
        <p className="feedback">{feedback}</p>

        <ul className="coin-selector">
          {testdata.coins.map((coin) => (
            <li key={coin.name}>
              <button className="coin" onClick={() => moneyAdder(coin.value)}>
                {coin.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default VendingMachine;
