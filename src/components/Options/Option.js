const Option = (props) => {
  const {
    name,
    img,
    description,
    price
  } = props

  return (
    <li className="option food" onclick="selectOption(this, this.className)">
      <img src={img} className="image" alt="" />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="price-area">
        <strong>R$ {price}</strong>
        <ion-icon name="checkmark-circle" class="checkmark"></ion-icon>
      </div>
    </li>
  );
}

export { Option }