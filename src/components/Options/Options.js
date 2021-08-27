import React, { useState } from "react";
import { Option } from "./Option";

const Options = (props) => {

  const options = props.categoryOptions;

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

  return (
    <ul className="options">
      {options.map((option, index) => (
        <Option
          key={index}
          id={index}
          className={option.className}
          name={option.name}
          img={option.img}
          alt={option.alt}
          description={option.description}
          price={option.price}
          buttonsAttributes={buttonsAttributes} />
      ))}
    </ul>
  )
}

export { Options }