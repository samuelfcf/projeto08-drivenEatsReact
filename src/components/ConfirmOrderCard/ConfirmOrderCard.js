import { Button } from "../../shared/Button";

const ConfirmOrderCard = () => {

  const buttonsAttributes = [
    {
      disabled: false,
      className: "confirm-order-button",
      text: "Tudo certo, pode pedir!"
    },
    {
      disabled: false,
      className: "cancel",
      text: "Cancelar"
    }
  ];

  return (
    <div className="confirm-order-card">
      <h2>Confirme seu pedido</h2>
      <div className="order-itens">
        <div className="order food-field">
          <p>qqqwe</p>
          <p>qweqweq</p>
        </div>
        <div className="order drink-field">
          <p>qweqweqw</p>
          <p>qweqwe</p>
        </div>
        <div className="order dessert-field">
          <p>qweqwe</p>
          <p>qweqwe</p>
        </div>

        <div className="order price-field">
          <p>TOTAL</p>
          <p>qweqweqw</p>
        </div>

        {buttonsAttributes.map((buttonAttribute) => (
          <Button attributes={buttonAttribute} />
        ))}
      </div>
    </div>
  );
}

export { ConfirmOrderCard }