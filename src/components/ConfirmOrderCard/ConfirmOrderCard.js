const ConfirmOrderCard = () => {
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

        <button className="confirm-order-button" >Tudo certo, pode pedir!</button>
        <button className="cancel" >Cancelar</button>
      </div>
    </div>
  );
}

export { ConfirmOrderCard }