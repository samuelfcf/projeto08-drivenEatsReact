import React, { useState } from "react"
import { Button } from "../../shared/Button"

const Option = ({ buttonsAttributes, optionInfo, id, incrementOptionsQuantity, decrementOptionsQuantity }) => {

  const {
    name,
    className,
    img,
    alt,
    description,
    price,
  } = optionInfo;

  const [minusButtonAttributes, plusButtonAttribute] = buttonsAttributes;

  const [selected, setSelected] = useState(className);
  const [isHidden, setIsHidden] = useState("hidden");
  const [qty, setQty] = useState(1);

  const convertPriceStringToNumber = (price) => {
    const priceWithDot = price.replace(/,/, '.');
    const priceNumber = Number(priceWithDot);

    return priceNumber;
  }

  const incrementThisItem = (event, className, name, price, qty, isIncreasing, id) => {
    event.stopPropagation();
    const priceNumber = convertPriceStringToNumber(price);

    setQty(qty + 1);
    incrementOptionsQuantity(className, name, priceNumber, qty, isIncreasing, id);
  }

  const decrementThisItem = (event, itemClassName) => {
    event.stopPropagation();
    decrementOptionsQuantity(1, itemClassName);

    if (qty <= 1) {
      setSelected(itemClassName)
      setIsHidden("hidden")
      setQty(1);
    }
    setQty(qty - 1);
  }

  const selectThisItem = (event, itemClassName, name, price, qty, isIncreasing, id) => {
    event.stopPropagation();
    const priceNumber = convertPriceStringToNumber(price)

    if (selected === className) {
      setSelected(`${className} selected`);
      setIsHidden("");
      incrementOptionsQuantity(itemClassName, name, priceNumber, qty, isIncreasing, id);
    } else {
      setSelected(className);
      setIsHidden("hidden");
      setQty(1);
      decrementOptionsQuantity(qty, itemClassName);
    }
  }

  return (
    <li id={id} className={selected} onClick={(event) => selectThisItem(event, className, name, price, qty, false, id)}>
      <img src={img} className="image" alt={alt} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="price-area">
        <strong>R$ {price}</strong>
        <div className={isHidden}>
          <Button key={0} attributes={minusButtonAttributes} onClick={(event) => decrementThisItem(event, className)} />
          <strong>{qty}</strong>
          <Button key={1} attributes={plusButtonAttribute} onClick={(event) => incrementThisItem(event, className, name, price, qty, true, id)} />
        </div>
      </div>
    </li>
  );
}

export { Option }