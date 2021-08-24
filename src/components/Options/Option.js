const Option = (props) => {
  const options = props.options;

  return (
    <ul class="options">
      {options.map((option) => (
        <li class="option food" onclick="selectOption(this, this.className)">
          <img src={option.img} class="image" alt="porcao-batata-frita" />
          <h2>{option.name}</h2>
          <p>{option.description}</p>
          <div class="price-area">
            <strong>R$ {option.price}</strong>
            <ion-icon name="checkmark-circle" class="checkmark"></ion-icon>
          </div>
        </li>
      ))}
    </ul>
  )
}

export { Option }