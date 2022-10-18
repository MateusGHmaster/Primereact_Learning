import React, { useRef, useState } from 'react';
import logo from './logo.png';
import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast"

function App() {

    const [input, setInput] = useState('');

    const toastRef: any = useRef(null);
    const onButtonClick = () => {
        if (input.length > 0) {
            toastRef.current.show({severity:'success', summary: 'Successo!', detail:'Há um texto mínimo a ser submetido.', life: 3000});
        } else {
            toastRef.current.show({severity:'error', summary: 'Falha!', detail:'Não foi atingido a quantidade mínima de caracteres, para realizar uma submnissão.', life: 3000});
        }
    }

    return (

    <div className="App">

        <Toast ref={toastRef} />

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <InputText placeholder="Insert Prime Text" value={input} onChange={(e) => setInput(e.target.value)} />
            <p>{input}</p>
            <Button icon="pi pi-check" label='Submit' onClick={onButtonClick}/>
            <p>
            PrimeReact Teste Code
            </p>
        </header>
    </div>

    );
}

export default App;
