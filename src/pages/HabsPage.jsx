import Top from './comps/Top.jsx'
import Bottom from './comps/Bottom.jsx'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function HabsPage(){
    let [diasClique, setDiasClique] = useState([['Domingo', 0], ['Segunda', 0], ['Terça', 0], ['Quarta', 0], ['Quinta', 0], ['Sexta', 0], ['Sábado', 0]])
    let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let [selectDays, setSelectDays] = useState([])
    let [createArea, setCreateArea] = useState('none');
    let [newHabName, setNewHabName] = useState('')
    //let [habs = [['hábito', ['Segunda', 'Terça']]];
    let [habs, setHabs] = useState([]);
    let navigate = useNavigate();
    const config = {headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTIxMiwiaWF0IjoxNjg1NjQyNDY2fQ.keMLdCZJAj8WcPHKEwR8Vosrs1ZnFHtwjdfYpmw61ew"}}
    useEffect(() => {
		const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
		requisicao.then(resposta => {
			setHabs(resposta.data);
            console.log(resposta.data)
		});
	}, []);

    const CreateHab = styled.div`
        width: 100%;
        padding: 15px;
        height: auto;
        background: white; 
        margin: 0px 0px 15px;  
        border-radius: 5px;
        display: ${createArea};
        input{
            box-sizing: border-box;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            width: 100%;
            padding: 10px;
            opacity: 0.5;
        }
    ` 
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
    const MyHabs = styled.div`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        height: auto;
        color: #126BA5;
        margin: 0px 0px 20px;
        button{
            width: 30px;
            height: 25px;
            background: #52B6FF;
            border-radius: 4.63636px;
            padding: 1px;
            color: white;
            border: none;
            text-align: center;
            margin: 0px;
        }
    `
    const Dias = styled.div`
        display: flex;
        flex-direction: row;
        height: auto;
        margin: 15px 0px 0px 0px;
    `
    const Botoes = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: 30px;
        margin: 15px 0px 0px;
        & :nth-child(1){
            color: #52B6FF;
            background: white;
            border: none;
            font-weight: bold;
            margin: 0px 5px 0px 0px;
        }
        & :nth-child(2){
            background: #52B6FF;
            width: 84px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `
    const Hab = styled.div`
        width: 100%;
        padding: 15px;
        height: auto;
        background: white; 
        margin: 0px 0px 15px;  
        border-radius: 5px;
        font-size: 20px;
    `
    function criar_hab(){
        setCreateArea('inline');
    }
    function criar_hab_save(){
        let select_days_num = [];
        for (let a = 0; a < selectDays.length; a++){
            select_days_num.push(dias.indexOf(selectDays[a][0]))
        }
        const body = {name: newHabName, days: select_days_num}
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
        requisicao.then(resposta=> {
            console.log(resposta.data)
        });
        navigate('/habitos')
    }
    function criar_hab_cancel(){
        setCreateArea('none');
    }
    function select_day(e){
        let id = e.target.id;
        let new_set = [...selectDays];
        new_set.push(id);
        setSelectDays(new_set);
        let new2_set = [...diasClique];
        for (let a = 0; a < new2_set.length; a++){
            if (new2_set[a][0] == id){
                new2_set[a][1] = 1
            }
        }
        setDiasClique(new2_set)
    }
    function deselect_day(e){
        let id = e.target.id;
        let new_set = [];
        for (let a = 0; a < selectDays.length; a++){
            if (selectDays[a] != id){
                new_set.push(selectDays[a])
            }
        }
        setSelectDays(new_set);
        let new2_set = [...diasClique];
        for (let a = 0; a < new2_set.length; a++){
            if (new2_set[a][0] == id){
                new2_set[a][1] = 0;
            }
        }
        setDiasClique(new2_set)
    }
    function ButtonDaysCreateHab(prop){
        let backcolor = "#FFFFFF"
        let color = '#D5D5D5'
        if (prop.clicked == 1){
            color = '#FFFFFF'
            backcolor = '#D5D5D5'
        }
        const But = styled.button`
            box-sizing: border-box;
            background: ${backcolor};
            border: 1px solid ${color};
            color; ${color};
            border-radius: 5px;
            opacity: 0.5;
            width: 30px;
            margin: 0px 5px 0px 0px;
            height: 30px;`
        if (prop.clicked == 1){
            return(
                <But id={prop.day} onClick={(e) => deselect_day(e)} data-test="habit-day">{prop.day[0]}</But>
            )
        }
        return(
            <But id={prop.day} onClick={(e) => select_day(e)} data-test="habit-day">{prop.day[0]}</But>
        )
    }
    function ButtonDaysHab(prop){
        let backcolor = "#FFFFFF"
        let color = '#D5D5D5'
        for(let a = 0; a < habs[prop.index].days.length; a++){
            if (habs[prop.index][1][a] == prop.day){
                color = '#FFFFFF'
                backcolor = '#D5D5D5'
            }
        }
        const But = styled.button`
            box-sizing: border-box;
            background: ${backcolor};
            border: 1px solid ${color};
            color; ${color};
            border-radius: 5px;
            opacity: 0.5;
            width: 30px;
            margin: 0px 5px 0px 0px;
            height: 30px;`
        return(
            <But disabled data-test="habit-day">{prop.day[0]}</But>
        )
    }
    if (habs.length == 0){
        return(
        <>
            <Top/>
            <All>
                <MyHabs>
                    Meus Hábitos
                    <button data-test="habit-create-btn" onClick={criar_hab}>+</button>
                </MyHabs>
                <CreateHab data-test="habit-create-container">
                    <input placeholder="nome do hábito" data-test="habit-name-input" onChange={(e) => setNewHabName(e.target.value)}></input>
                    <Dias>
                        {diasClique.map((info)=>
                            <ButtonDaysCreateHab day={info[0]} clicked={info[1]}/>
                        )}
                    </Dias>
                    <Botoes>
                        <button data-test="habit-create-cancel-btn" onClick={criar_hab_cancel}>Cancelar</button>
                        <button data-test="habit-create-save-btn" onClick={criar_hab_save}>Salvar</button>
                    </Botoes>
                </CreateHab>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </All>
            <Bottom/>
        </>
            )
    }
    return(
        <>
        <Top/>
        <All>
            <MyHabs>
                Meus Hábitos
                <button data-test="habit-create-btn" onClick={criar_hab}>+</button>
            </MyHabs>
            <CreateHab data-test="habit-create-container">
                <input placeholder="nome do hábito" data-test="habit-name-input" onChange={(e) => setNewHabName(e.target.value)}></input>
                <Dias>
                    {diasClique.map((info)=>
                        <ButtonDaysCreateHab day={info[0]} clicked={info[1]}/>
                    )}
                </Dias>
                <Botoes>
                    <button data-test="habit-create-cancel-btn" onClick={criar_hab_cancel}>Cancelar</button>
                    <button data-test="habit-create-save-btn" onClick={criar_hab_save}>Salvar</button>
                </Botoes>
            </CreateHab>
            {habs.map((habito)=>
                <Hab>
                    {habito.name}
                    <Dias>
                        {dias.map((dia)=>
                            <ButtonDaysHab day={dia} index={habs.indexOf(habito)}/>
                        )}
                    </Dias>
                </Hab>
            )}
        </All>
        <Bottom/>
        </>
    )
}