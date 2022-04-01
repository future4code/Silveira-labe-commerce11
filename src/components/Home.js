import React from "react"
import styled from "styled-components"

const HomeContainer = styled.div`
    height: 100%;
    flex-grow: 1;
`



class Home extends React.Component {
    render() {
        return (
            <HomeContainer>
                <p>Quantidade de produtos</p>
                <label>Ordenação:</label>
                <select>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </select>       
            </HomeContainer>
        )
    }
}

export default Home;