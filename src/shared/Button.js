const Button = (props) => {
  const {
    disableButton,
    className,
    text
  } = props.attributes

  return (
    <button button disabled={disableButton} className={className} onClick={props.onClick} >{text}</button>
  )
}

export { Button }