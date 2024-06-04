import styled from 'styled-components'
import Input from '../Input'
import { useState } from 'react'
import { livros } from './dadosPesquisa'


const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa () {
    const [livroPesquisado, setLivroPesquisado] = useState([])
    return (
        <PesquisaContainer>
            <Titulo>Sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro na nossa estante </SubTitulo>
            <Input 
                placeholder="Procure sua próxima leitura" 
                onChange = {evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(l => l.nome.includes(textoDigitado))
                    setLivroPesquisado(resultadoPesquisa)
                }}
                />
            {livroPesquisado.map(l => (
                <Resultado>
                    <p>{l.nome}</p>
                    <img src={l.src} alt="capa"/> 
                </Resultado>

            ) )}
        </PesquisaContainer>

    )

}

export default Pesquisa