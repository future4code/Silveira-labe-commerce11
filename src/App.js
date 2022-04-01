
import React from "react";
import produtosList from "./data/produtos.json"
import Carrinho from "./components/Carrinho/Carrinho";
import Filtro from "./components/Filtro/Filtro";
import Home from "./components/Home/Home";
import { GlobalStyle, PageContainer } from "./styled";



const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const Container = styled.div`
  height: 100vh;
  display: flex;
  
`

const Filtro = styled.div`
  
   border: 1px solid black;
   padding: 8px;
   height: 300px;
   display: flex;
   flex-direction: column;
`

const Carrinho = styled.div`
  height: 300px;
  border: 1px solid black;
  padding: 8px;

`
onChangePesquisa = (event) => {
  this.setState({
    pesquisa: event.target.value
  })
}
onChangeFiltroMinimo = (event) => {
  this.setState({
    filtroMinimo: event.target.value
  })
}
onChangeFiltroMaximo = (event) => {
  this.setState({
    filtroMaximo: event.target.value
  })
}
onChangeOrdenacao = (event) => {
  this.setState({
    ordenacao: event.target.value
  })
}

filtrarProdutos = () => {


class App extends React.Component {

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Filtro
       
          pesquisa={this.state.pesquisa}
          onChangePesquisa={this.onChangePesquisa}
          valorMinimo={this.state.filtroMinimo}
          onChangeFiltroMinimo={this.onChangeFiltroMinimo}
          valorMaximo={this.state.filtroMaximo}
          onChangeFiltroMaximo={this.onChangeFiltroMaximo}
        />
        <Home />
        <Carrinho>
          <h3>Carrinho</h3>
          <p>1x Item</p>
          <p>Total</p>
         </Carrinho>

      </Container>
    );

    }
  }
export default App;
