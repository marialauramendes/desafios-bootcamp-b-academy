import styled from "styled-components"

function Container ({children}) {
  return (
    <Div>{children}</Div>
  )
}
const Div = styled.div`
  display: grid;
  width: 100%;
  min-height: calc(100vh - 80px);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "header header header"
    "nav nav nav"
    "aside  main main"
    "footer footer footer";
  background-color: #E5E5E5;
  border-radius: 10px;
  padding-top:30px;
  padding-bottom:30px;

`
export { Container }