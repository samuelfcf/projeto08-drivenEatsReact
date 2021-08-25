import { Options } from "../Options/Options";

const Category = (props) => {

  const { categoryTitle, categoryOptions } = props.category

  return (
    <div className="category">
      <h1>{categoryTitle}</h1>
      <Options categoryOptions={categoryOptions} />
    </div>
  )
}

export { Category }