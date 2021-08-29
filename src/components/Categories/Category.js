import { Options } from "../Options/Options";

const Category = (props) => {

  const { categoryTitle, categoryOptions } = props.category;
  const itemsSelected = props.itemsSelected;
  const setItemsSelected = props.setItemsSelected;

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