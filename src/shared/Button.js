const Button = (props) => {

  const {
    disabled,
    className,
    text
  } = props.attributes

  return (
    <button disabled={disabled} className={className} onClick={props.onClick}>{text}</button>
  )
}

export { Button }