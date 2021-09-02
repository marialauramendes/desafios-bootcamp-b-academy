function Button ({ kind, children }){
  return (
    <button className={`${kind}`} >{children}</button>
  )
}

export { Button }