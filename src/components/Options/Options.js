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

  const [totalOptionItems, setTotalOptionItems] = useState(itemsSelected);

  const incrementOpionsQuantity = (className, name, price, qty, inc, id) => {
    setTotalOptionItems(totalOptionItems + 1);

    let foods = "foods";
    let drinks = "drinks";
    let desserts = "desserts";
    if (inc) {
      switch (className) {
        case "option food":
          setItemsSelected({ ...itemsSelected, foods: [...itemsSelected.foods, itemsSelected.foods[id].qtyThisOne = qty + 1] });
          break;
        case "option drink":
          setItemsSelected({ ...itemsSelected, drinks: [...itemsSelected.drinks, itemsSelected.drinks[id].qtyThisOne = qty + 1] });
          break;
        case "option dessert":
          setItemsSelected({ ...itemsSelected, desserts: [...itemsSelected.desserts, itemsSelected.desserts[id].qtyThisOne = qty + 1] });
          break;
        default:
          break;
      }
    }
    else {
      switch (className) {
        case "option food":
          setItemsSelected({ ...itemsSelected, foods: [...itemsSelected[foods], { name: name, price: price, qtyThisOne: qty }] });
          break;
        case "option drink":
          setItemsSelected({ ...itemsSelected, drinks: [...itemsSelected[drinks], { name: name, price: price, qtyThisOne: qty }] });
          break;
        case "option dessert":
          setItemsSelected({ ...itemsSelected, desserts: [...itemsSelected[desserts], { name: name, price: price, qtyThisOne: qty }] });
          break;
        default:
          break;
      }
    }
  }

  const decrementOptionsQuantity = (qty, className) => {
    if (totalOptionItems <= 1) {
      setTotalOptionItems(0);
    }

    if (qty > 1) {
      setTotalOptionItems(totalOptionItems - qty)

    } else {
      setTotalOptionItems(totalOptionItems - 1)
    }
  }

  return (
    <ul className="options">
      {options.map((option, index) => (
        <Option
          key={index}
          id={index}
          buttonsAttributes={buttonsAttributes}
          optionInfo={option}

          incrementOptionsQuantity={incrementOpionsQuantity}
          decrementOptionsQuantity={decrementOptionsQuantity}
          totalItems={totalOptionItems}
        />
      ))}
    </ul>
  )
}

export { Options }