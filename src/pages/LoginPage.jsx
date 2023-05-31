import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useState, createContext, useContext} from 'react'

export default function LoginPage(){
    let [password, setPassword] = useState(null)
    let [email, setEmail] = useState(null)
    let [dis, setDis] = useState(false)
    let disAbled = createContext(dis);
    let navigate = useNavigate();
    function fazer_cadastro(e){
        setDis(!dis);
        e.preventDefault();
        const dados = {email: email, password: password};
        console.log(dados);
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", dados);
        requisicao.then(resposta => {
            console.log(resposta.data);
            navigate('/hoje');});
        requisicao.catch(resposta => {
            alert(resposta.response.data.message);
            setDis(dis);})
    }
    return(
        <>
            <Logo><img src="https://imagepng.org/wp-content/uploads/2017/10/quadrado-preto-1.png"/></Logo>
            <Forms>
                <input disabled={useContext(disAbled)} placeholder='email'data-test="email-input" onChange={(e) => setEmail(e.target.value)}/>
                <input disabled={useContext(disAbled)} type='password' placeholder='senha' data-test="password-input" onChange={(e) => setPassword(e.target.value)}/>
                <button disabled={useContext(disAbled)} onClick={(e) => fazer_cadastro(e)} data-test="login-btn">Entrar</button>
            </Forms>
            <ToLink><Link to="/cadastro" data-test="signup-link">Não tem uma conta? Cadastre-se!</Link></ToLink>
        </>
    )
}

const Logo = styled.div`
    width: 100%;
    padding: 30px 0px;
    text-align: center;
    height: auto;
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