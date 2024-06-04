import { Titulo } from '../Titulo'
import {livros} from '../UltimosLancamentos/dadosPesquisa'
import styled from 'styled-components'
import livro from '../../imagens/livro2.png'
import CardRecomendacao from '../CardRecomendacao'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor='#EB9B00'
                tamanho='36px'>
                    ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map ( livro => 
                    <img src={livro.src} alt="capa" />
                  )}

            </NovosLivrosContainer>

            <CardRecomendacao
                titulo="Talvez você se interesse por esse livro"
                subtitulo="Uma breve história do universo"
                descricao="Uma explicação simples sobre a origem de tudo o que conhecemos."
                imagem = {livro}
            />

        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos