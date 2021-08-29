import { Button } from "./Button";

const Footer = ({ itemsSelected }) => {
  let funcButao = false;
  let classN = "finalize-order-button"
  let text = "Selecione os 3 itens para fechar o pedido"

  if (itemsSelected.food === "escolheu" && itemsSelected.drink === "escolheu" && itemsSelected.dessert === "escolheu") {
    funcButao = true
    classN = "finalize-order-button button-on"
    text = "Fechar pedido"
  }

  const buttonConfirmOrderAttributes = {
    funcButao: funcButao,
    className: classN,
    text: text
  }

  return (
    <footer>
      <Button attributes={buttonConfirmOrderAttributes} />
    </footer>
  );
}

export { Footer }