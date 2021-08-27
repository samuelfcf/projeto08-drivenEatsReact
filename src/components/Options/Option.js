import React, { useState } from "react"
import { Button } from "../../shared/Button"

const Option = (props) => {

  const {
    id,
    name,
    className,
    img,
    alt,
    description,
    price
  } = props;

  const [minusButtonAttributes, plusButtonAttribute] = props.buttonsAttributes;

  const [selected, setSelected] = useState(className);
  const [quantity, setQuantity] = useState(1);
  const [isHiden, setIsHidden] = useState("hidden")

  const incrementItem = (event) => {
    event.stopPropagation();
    setQuantity(quantity + 1);
    setSelected(`${className} selected`);
  }

  const decrementItem = (event) => {
    event.stopPropagation();

    if (quantity <= 1) {
      setSelected(className)
      setIsHidden("hidden")
      return;
    }

    setQuantity(quantity - 1)
  }

  const selectItem = () => {

    if (selected === className) {
      setSelected(`${className} selected`);
      setIsHidden("");
    } else {
      setSelected(className);
      setQuantity(0)
      setIsHidden("hidden");
    }
  }

  return (
    <li key={id} className={selected} onClick={selectItem}>
      <img src={img} className="image" alt={alt} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="price-area">
        <strong>R$ {price}</strong>
        <div className={isHiden}>
          <Button key={0} attributes={minusButtonAttributes} onClick={(event) => decrementItem(event)} />
          <strong>{quantity}</strong>
          <Button key={1} attributes={plusButtonAttribute} onClick={(event) => incrementItem(event)} />
        </div>
      </div>
    </li>
  );
}

export { Option }