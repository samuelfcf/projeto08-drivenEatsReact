import { Category } from "../components/Categories/Category";

const categories = [
  {
    categoryTitle: "Primeiro, seu prato",
    categoryOptions: [
      {
        img: "assets/batatafrita.webp",
        name: "Batata Frita",
        description: "Batata sequinha e crocante",
        price: "11,90"
      },
      {
        img: "assets/pizza.jpg",
        name: "Pizza marguerita",
        description: "Molho, queijo, tomate e manjericão",
        price: "45,99"
      },
      {
        img: "assets/saladinha.jpeg",
        name: "Saladinha",
        description: "Folhas verdes, cenoura e pepino",
        price: "19,99"
      },
      {
        img: "assets/frango_yin_yang.svg",
        name: "Frango Yin Yans",
        description: "Um pouco de batata, um pouco de salada",
        price: "25,90"
      },
    ]
  },
  {
    categoryTitle: "Segundo, sua bebida",
    categoryOptions: [
      {
        img: "assets/sucomaracuja.jpeg",
        name: "Suco de maracujá",
        description: "Da fruta 350ml",
        price: "3,99"
      },
      {
        img: "assets/agua.jpg",
        name: "Águinha Gelada",
        description: "Garrafa 500ml",
        price: "2,00"
      },
      {
        img: "assets/uva.jpg",
        name: "Suco de uva",
        description: "Da fruta 350ml",
        price: "5,90"
      },
      {
        img: "assets/coquinha_gelada.svg",
        name: "Coquinha Gelada",
        description: "Lata 350ml",
        price: "4,50"
      },
    ]
  },
  {
    categoryTitle: "Por fim, sua sobremesa",
    categoryOptions: [
      {
        img: "assets/moussemaracuja.jpg",
        name: "Mousse Maracujá",
        description: "Apenas mousse",
        price: "3,90"
      },
      {
        img: "assets/brigadeirao.jpg",
        name: "Brigadeirão",
        description: "Esse é top",
        price: "4,90"
      },
      {
        img: "assets/pave.jpg",
        name: "Pavê de chocolate",
        description: "Pacumê",
        price: "5,25"
      },
      {
        img: "assets/pudim.svg",
        name: "Pudim",
        description: "Apenas pudim",
        price: "3,00"
      }
    ]
  }
]

const Content = () => {
  return (
    <main>
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </main>
  )
}

export { Content }