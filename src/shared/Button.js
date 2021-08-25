const Button = (props) => {

  const {
    disabled,
    className,
    text
  } = props.attributes

  return (
    <button disabled={disabled} className={className}>{text}</button>
  )
}

export { Button }