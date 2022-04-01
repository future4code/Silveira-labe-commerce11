import React from "react";
import { FiltroContainer, LabelContainer } from "./styled";


import styled from "styled-components"

export const FiltroContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 50vw;
    max-width: 300px;
    align-items: center;
    padding: 20px;
    margin: 10px;
`

export const LabelContainer = styled.label`
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    input {
        width: 150px;
    }
`

class Filtro extends React.Component {
    render() {
        return (
            <FiltroContainer>
                <h2>Filtros</h2>
                <div>
                    <LabelContainer htmlFor="">
                        Valor mínimo:
                        <input type={"number"} value={this.props.valorMinimo} onChange={this.props.onChangeFiltroMinimo} />
                    </LabelContainer>
                    <LabelContainer htmlFor="">
                        Valor máximo:
                        <input type={"number"} value={this.props.valorMaximo} onChange={this.props.onChangeFiltroMaximo} />
                    </LabelContainer>
                    <LabelContainer htmlFor="">
                        Busca por nome:
                        <input id={""} type={"text"} name={""} value={this.props.pesquisa} onChange={this.props.onChangePesquisa}/>
                    </LabelContainer>
                </div>
            </FiltroContainer>
        );
    }
}

export default Filtro;
