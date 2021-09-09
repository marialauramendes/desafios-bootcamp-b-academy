function Toast ({message, toast}){
  return(
    <div id="toast" className={toast ? 'show' : 'hide'}>{message}</div>
  )
}

export { Toast }