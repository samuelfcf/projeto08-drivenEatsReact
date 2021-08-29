import React, { useState } from "react"
import { Button } from "../../shared/Button"

const Option = (props) => {

  const {
    name,
    className,
    img,
    alt,
    description,
    price,
  } = props.optionInfo;

  const [selected, setSelected] = useState(className);
  const [isHidden, setIsHidden] = useState("hidden");
  const [qty, setQty] = useState(1);

  const incrementThisItem = (event, className) => {
    event.stopPropagation();
    setQty(qty + 1);
    props.incrementOpionsQuantity(className);
  }

  const decrementThisItem = (event, className) => {
    event.stopPropagation();
    props.decrementOptionsQuantity(1, className);

    if (qty <= 1) {
      setSelected(className)
      setIsHidden("hidden")
      setQty(1);
    }
    setQty(qty - 1);
  }

  const selectThisItem = (event, classs) => {
    event.stopPropagation();

    if (selected === className) {
      setSelected(`${className} selected`);
      setIsHidden("");
      props.incrementOpionsQuantity(classs);
    } else {
      setSelected(className);
      setIsHidden("hidden");
      setQty(1);
      props.decrementOptionsQuantity(qty, classs);
    }
  }

  const [minusButtonAttributes, plusButtonAttribute] = props.buttonsAttributes;

  return (
    <li className={selected} onClick={(event) => selectThisItem(event, className)}>
      <img src={img} className="image" alt={alt} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{props.totalOptionItems}</p>
      <div className="price-area">
        <strong>R$ {price}</strong>
        <div className={isHidden}>
          <Button key={0} attributes={minusButtonAttributes} onClick={(event) => decrementThisItem(event, className)} />
          <strong>{qty}</strong>
          <Button key={1} attributes={plusButtonAttribute} onClick={(event) => incrementThisItem(event, className)} />
        </div>
      </div>
    </li>
  );
}

export { Option }