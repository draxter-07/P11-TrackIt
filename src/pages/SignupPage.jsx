import styled from "styled-components"
import { Link } from 'react-router-dom'

export default function SignupPage(){
    return(
        <>
            <Logo><img src="https://imagepng.org/wp-content/uploads/2017/10/quadrado-preto-1.png"/></Logo>
            <Forms>
                <input placeholder='email' data-test="email-input"/>
                <input placeholder='senha' data-test="password-input"/>
                <input placeholder='nome' data-test="user-name-input"/>
                <input placeholder='foto' data-test="user-image-input"/>
                <button data-test="signup-btn">Cadastrar</button>
            </Forms>
            <ToLink><Link to="/" data-test="login-link">Já tem uma conta? Faça login!</Link></ToLink>
        </>
    )
}

const Logo = styled.div`
    width: 100%;
    padding: 30px 0px;
    text-align: center;
    img{
        width: 50%;
    }
`
const Forms = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 303px;
        padding: 10px;
        margin: 0px 0px 5px 0px;
        opacity: 0.5;
    }
    button{
        width: 303px;
        background: #52B6FF;
        border-radius: 4.63636px;
        color: white;
        border: none;
        padding: 10px;
    }
`
const ToLink = styled.div`
    margin: 20px 0px 0px 0px;
    text-align: center;
    font-size: 13.98px;
    *{
        color: #52B6FF;
    }
`