const Option = (props) => {

  const {
    id,
    name,
    className,
    img,
    alt,
    description,
    price
  } = props

  return (
    <li key={id} className={className}>
      <img src={img} className="image" alt={alt} />
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