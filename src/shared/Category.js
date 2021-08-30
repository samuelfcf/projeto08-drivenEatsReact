import { Options } from "../components/Options/Options"

const Category = ({ category, itemsSelected, setItemsSelected }) => {

  const { categoryTitle, categoryOptions } = category;

  return (
    <div className="category">
      <h1>{categoryTitle}</h1>
      <Options
        categoryOptions={categoryOptions}
        itemsSelected={itemsSelected}
        setItemsSelected={setItemsSelected} />
    </div>
  )
}

export { Category }