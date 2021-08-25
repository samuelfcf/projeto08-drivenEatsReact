import { Button } from "./Button";

const Footer = () => {

  const buttonConfirmOrderAttributes = {
    disabled: true,
    className: "finalize-order-button",
    text: "Selecione os 3 itens para fechar o pedido"
  }

  return (
    <footer>
      <Button attributes={buttonConfirmOrderAttributes} />
    </footer>
  );
}

export { Footer }