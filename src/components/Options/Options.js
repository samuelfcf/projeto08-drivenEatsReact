import { Option } from "./Option";

const Options = (props) => {

  const options = props.categoryOptions;

  return (
    <ul className="options">
      {options.map((option, index) => (
        <Option
          key={index}
          id={index}
          name={option.name}
          img={option.img}
          description={option.description}
          price={option.price} />
      ))}
    </ul>
  )
}

export { Options }