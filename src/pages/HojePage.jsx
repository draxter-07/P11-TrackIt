import Top from './Top.jsx'
import Bottom from './Bottom.jsx'
import styled from 'styled-components'
import Check from './assets/check.svg'
import { useState, useEffect } from 'react'
import day from 'dayjs'
import axios from 'axios'
import utc from 'dayjs/plugin/utc'

export default function HabsPage(){
    let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    day.extend(utc)
    let daydata = day.utc();
    let month = daydata.$M + 1;
    let realday = daydata.$D;
    let weekday = dias[daydata.$W];
    let [colorStatus, setColorStatus] = useState('#BABABA');
    let [progressStatus, setProgressStatus] = useState('Nenhum hábito concluído ainda');
    let [dones, setDones] = useState(0);
    const Status = styled.div`
        color: ${colorStatus};
        font-size: 20px;
        height: auto;
    `
    const config = {headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTIxMiwiaWF0IjoxNjg1OTcwNjYwfQ.w06JFqYh-lD2KQL_WxR8CFzofXS0FEr-OubI_K84Iew"}}
    let [habs, setHabs] = useState([]);
    useEffect(() => {
		const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
		requisicao.then(resposta => {
			setHabs(resposta.data);
            console.log(resposta.data);
		});
	}, []);
    function marcarHab(e){
        let id = e.target.id;
        const requis = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/' + id + '/check', {});
        requis.then(resposta =>
            console.log(resposta.data))
    }
    function desmarcarHab(e){}
    function feitoButton(prop){
        let color = '#BABABA'
        let cliq = marcarHab;
        if (prop.status == true){
            color = green;
            cliq = desmarcarHab;
        }
        const Bu = button.styled`
            width: 50px;
            height: 50px;
            border-radius: 5px;
            border: none;
            background: ${color};
        `
        return(
            <Bu id={prop.id} onClick={(e) => cliq(e)}><img src={Check}/></Bu>
        )
    }
    for (let a = 0; habs.length; a++){
        if (habs[a].done == true){
            setDones = dones + 1;
        }
    }
    if (habs.length == 0){
        return(
            <>
            <Top/>
            <All>
                <Data>
                    {weekday + ', ' + realday + '/' + month}
                </Data>
                <Status>
                    {progressStatus}
                </Status>
            </All>
            <Bottom/>
            </>)
    }
    else{
        setColorStatus('green');
        setProgressStatus(Math.round((dones/habs.length)*100));
    }
    return(
        <>
        <Top/>
        <All>
            <Data>
            {weekday + ', ' + realday + '/' + month}
            </Data>
            <Status>
                {progressStatus}
            </Status>
        {habs.map(habi =>
            <Hab>
            <Lado>
                {habi.name}
                <Info>
                    Sequência atual: {habi.currentSequence} dia(s)
                    <br/>
                    Seu recorde: {habi.highestSequence} dia(s)
                </Info>
            </Lado>
            <feitoButton id={habi.id} status={habi.done}/>
            </Hab>
        )}    
        </All>
        <Bottom/>
        </>
    )
}

const All = styled.div`
    box-sizing: border-box;
    background: #E5E5E5;
    padding: 90px 10px;
    color: #666666;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
` 
const Hab = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    background: white;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
    margin: 15px 0px 0px 0px;
`
const Lado = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    color: #666666;
    font-size: 20px;
`
const Info =styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 10px 0px 0px 0px;
    color: #666666;
    font-size: 13px;
`
const Data = styled.div`
    color: #126BA5;
    font-size: 23px;
    height: auto;
    margin: 0px 0px 5px 0px;
`