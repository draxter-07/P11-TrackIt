import { createContext, useState } from 'react'

export default function data(entry){
    let [info, setInfo] = useState('');
    const loginData = createContext(info);
}