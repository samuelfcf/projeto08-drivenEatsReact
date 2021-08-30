import React from "react";

import { Category } from "../components/Categories/Category";

const categories = [
  {
    categoryTitle: "Primeiro, seu prato",
    categoryOptions: [
      {
        img: "assets/batatafrita.webp",
        alt: "batata frita",
        name: "Batata Frita",
        description: "Batata sequinha e crocante",
        price: "11,90",
        className: "option food",
      },
      {
        img: "assets/pizza.jpg",
        alt: "pizza",
        name: "Pizza marguerita",
        description: "Molho, queijo, tomate e manjericão",
        price: "45,99",
        className: "option food",
      },
      {
        img: "assets/saladinha.jpeg",
        alt: "salada",
        name: "Saladinha",
        description: "Folhas verdes, cenoura e pepino",
        price: "19,99",
        className: "option food",
      },
      {
        img: "assets/frango_yin_yang.svg",
        alt: "frango",
        name: "Frango Yin Yans",
        description: "Um pouco de batata, um pouco de salada",
        price: "25,90",
        className: "option food",
      },
    ]
  },
  {
    categoryTitle: "Segundo, sua bebida",
    categoryOptions: [
      {
        img: "assets/sucomaracuja.jpeg",
        alt: "suco maracuja",
        name: "Suco de maracujá",
        description: "Da fruta 350ml",
        price: "3,99",
        className: "option drink",
      },
      {
        img: "assets/agua.jpg",
        alt: "garrafa de agua",
        name: "Águinha Gelada",
        description: "Garrafa 500ml",
        price: "2,00",
        className: "option drink",
      },
      {
        img: "assets/uva.jpg",
        alt: "suco de uva",
        name: "Suco de uva",
        description: "Da fruta 350ml",
        price: "5,90",
        className: "option drink",
      },
      {
        img: "assets/coquinha_gelada.svg",
        alt: "lata de coca-cola",
        name: "Coquinha Gelada",
        description: "Lata 350ml",
        price: "4,50",
        className: "option drink",
      },
    ]
  },
  {
    categoryTitle: "Por fim, sua sobremesa",
    categoryOptions: [
      {
        img: "assets/moussemaracuja.jpg",
        alt: "mousse maracuja",
        name: "Mousse Maracujá",
        description: "Apenas mousse",
        price: "3,90",
        className: "option dessert",
      },
      {
        img: "assets/brigadeirao.jpg",
        alt: "brigadeirao",
        name: "Brigadeirão",
        description: "Esse é top",
        price: "4,90",
        className: "option dessert",
      },
      {
        img: "assets/pave.jpg",
        alt: "pave",
        name: "Pavê de chocolate",
        description: "Pacumê",
        price: "5,25",
        className: "option dessert",
      },
      {
        img: "assets/pudim.svg",
        alt: "pudim",
        name: "Pudim",
        description: "Apenas pudim",
        price: "3,00",
        className: "option dessert",
      }
    ]
  }
]

const Content = ({ itemsSelected, setItemsSelected, }) => {
  return (
    <main className="content">
      <ul>
      </ul>
      {categories.map((category, index) => (
        <Category key={index}
          category={category}
          itemsSelected={itemsSelected}
          setItemsSelected={setItemsSelected} />
      ))}
    </main>
  )
}

export { Content }