import React, { useState } from "react";
import { Option } from "./Option";

const buttonsAttributes = [
  {
    disabled: false,
    className: "minus",
    text: "-"
  },
  {
    disabled: false,
    className: "plus",
    text: "+"
  }
]

const Options = (props) => {

  const options = props.categoryOptions;
  const itemsSelected = props.itemsSelected;
  const setItemsSelected = props.setItemsSelected;

  const [totalOptionItems, setTotalOptionItems] = useState(0);

  const incrementOpionsQuantity = (className) => {
    setTotalOptionItems(totalOptionItems + 1);

    switch (className) {
      case "option food":
        setItemsSelected({ ...itemsSelected, food: "escolheu" })
        break;
      case "option drink":
        setItemsSelected({ ...itemsSelected, drink: "escolheu" })
        break;
      case "option dessert":
        setItemsSelected({ ...itemsSelected, dessert: "escolheu" })
        break;
      default:
        break;
    }
  }

  const decrementOptionsQuantity = (qty, className) => {

    if (totalOptionItems <= 1) {
      setTotalOptionItems(0);
      switch (className) {
        case "option food":
          setItemsSelected({ ...itemsSelected, food: "n tem" })
          break;
        case "option drink":
          setItemsSelected({ ...itemsSelected, drink: "n tem" })
          break;
        case "option dessert":
          setItemsSelected({ ...itemsSelected, dessert: "n tem" })
          break;
        default:
          break;
      }

    }
    if (qty > 1) {
      setTotalOptionItems(totalOptionItems - qty)

    } else {
      setTotalOptionItems(totalOptionItems - 1)
      console.log("dec antes total", totalOptionItems);
    }
  }

  return (
    <ul className="options">
      <h2>{totalOptionItems}</h2>
      {options.map((option, index) => (
        <Option
          key={index}
          buttonsAttributes={buttonsAttributes}
          optionInfo={option}

          incrementOpionsQuantity={incrementOpionsQuantity}
          decrementOptionsQuantity={decrementOptionsQuantity}
          totalItems={totalOptionItems}
        />
      ))}
    </ul>
  )
}

export { Options }