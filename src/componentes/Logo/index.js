import styled from 'styled-components'
import logo from '../../imagens/logo.svg'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`
const LogoImagem = styled.img`
  margin-right: 10px;
`

function Logo(){
    return (
        <LogoContainer>
          <LogoImagem
            src={logo} 
            alt='logo' 
            className='logo-img' />
          <p><strong>Site</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo