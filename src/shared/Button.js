const Button = (props) => {
  const {
    funcButao,
    className,
    text
  } = props.attributes

  return (
    <button button disabled={funcButao} className={className} onClick={props.onClick} >{text}</button>
  )
}

export { Button }