import React from "react";
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

const Options = ({ categoryOptions, itemsSelected, setItemsSelected }) => {

  const options = categoryOptions;

  const incrementOpionsQuantity = (className, name, price, qty, isIncreased, id) => {

    if (isIncreased) {
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
          setItemsSelected({ ...itemsSelected, foods: [...itemsSelected.foods, { name: name, price: price, qtyThisOne: qty }] });
          break;
        case "option drink":
          setItemsSelected({ ...itemsSelected, drinks: [...itemsSelected.drinks, { name: name, price: price, qtyThisOne: qty }] });
          break;
        case "option dessert":
          setItemsSelected({ ...itemsSelected, desserts: [...itemsSelected.desserts, { name: name, price: price, qtyThisOne: qty }] });
          break;
        default:
          break;
      }
    }
  }

  const decrementOptionsQuantity = (className, qty, isDecreased, id) => {

    if (isDecreased) {
      switch (className) {
        case "option food":
          setItemsSelected({ ...itemsSelected, foods: [...itemsSelected.foods, itemsSelected.foods[id] = { ...itemsSelected.foods[id], qtyThisOne: qty - 1 }] });
          break;
        case "option drink":
          setItemsSelected({ ...itemsSelected, drinks: [...itemsSelected.drinks, itemsSelected.drinks[id].qtyThisOne = qty - 1] });
          break;
        case "option dessert":
          setItemsSelected({ ...itemsSelected, desserts: [...itemsSelected.desserts, itemsSelected.desserts[id].qtyThisOne = qty - 1] });
          break;
        default:
          break;
      }
    }
    else {
      switch (className) {
        case "option food":
          setItemsSelected({ ...itemsSelected, foods: [] });
          break;
        case "option drink":
          setItemsSelected({ ...itemsSelected, drinks: [] });
          break;
        case "option dessert":
          setItemsSelected({ ...itemsSelected, desserts: [] });
          break;
        default:
          break;
      }
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
        />
      ))}
    </ul>
  )
}

export { Options }