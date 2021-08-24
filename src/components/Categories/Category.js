import { Option } from "../Options/Option";

const Category = (props) => {
  return (
    <div class="category">
      <h1>{props.category.categoryTitle}</h1>
      <Option options={props.category.categoryOptions} />
    </div>
  )
}

export { Category }