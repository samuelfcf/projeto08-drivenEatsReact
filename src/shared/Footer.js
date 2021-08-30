import { Button } from "./Button";

const Footer = ({ itemsSelected }) => {

  console.log(itemsSelected)

  let funcButao = true;
  let classN = "finalize-order-button"
  let text = "Selecione os 3 itens para fechar o pedido"

  if (itemsSelected.foods.length !== 0 && itemsSelected.drinks.length !== 0 && itemsSelected.desserts.length !== 0) {
    funcButao = false
    classN = "finalize-order-button button-on"
    text = "Fechar pedido"
  }

  const buttonConfirmOrderAttributes = {
    funcButao: funcButao,
    className: classN,
    text: text,
  }

  const sendOrderToZap = () => {
    let foodsText = "";
    let drinksText = "";
    let dessertsText = "";

    let orderTotalCost = 0.00;

    const { foods, drinks, desserts } = itemsSelected;
    console.log(foods, drinks, desserts)

    foods.forEach((food) => {
      if (food.name) {
        foodsText += `${food.name} (${food.qtyThisOne}x), `
        orderTotalCost += (food.qtyThisOne) * (food.price)
      }
    });
    drinks.forEach((drink) => {
      if (drink.name) {
        drinksText += `${drink.name} (${drink.qtyThisOne}x), `
        orderTotalCost += (drink.qtyThisOne) * (drink.price)
      }
    });
    desserts.forEach((dessert) => {
      if (dessert.name) {
        dessertsText += `${dessert.name} (${dessert.qtyThisOne}x), `
        orderTotalCost += (dessert.qtyThisOne) * (dessert.price)
      }
    });

    const msgZap = `
    Olá, gostaria de fazer o pedido:
    - Pratos: ${foodsText}
    - Bebidas: ${drinksText}
    - Sobremesas: ${dessertsText}
    Total: R$ ${orderTotalCost.toFixed(2)}`
    console.log(msgZap)
    //window.open(`https://wa.me/5588996756917?text=${encodeURIComponent(msgZap)}`, '_blank');
  }

  return (
    <footer>
      <Button
        attributes={buttonConfirmOrderAttributes}
        onClick={sendOrderToZap}
      />
    </footer>
  );
}

export { Footer }

/* Olá, gostaria de fazer o pedido:
- Prato: Frango Yin Yang (2x)
- Bebida: Coquinha Gelada
- Sobremesa: Pudim
Total: R$ 27.70 */