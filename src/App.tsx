import React, { useRef, useState } from 'react';
import logo from './logo.png';
import './App.css';

import "primereact/resources/themes/md-dark-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";               //core css
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast"

function App() {

    const [input, setInput] = useState('');

    const toastRef: any = useRef();
    const onButtonClick = () => {
        if (input.length > 0) {
            toastRef.current.show({severity:'success', summary: 'Successo!', detail:'Há um texto mínimo a ser submetido.', life: 3000});
        } else {
            toastRef.current.show({severity:'error', summary: 'Falha!', detail:'Não foi atingido a quantidade mínima de caracteres, para realizar uma submissão.', life: 3000});
        }
    }

    return (

        <div className="App">

            <Toast ref={toastRef} />

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <span className="p-float-label mb-5">
                    <InputText value={input} onChange={(e) => setInput(e.target.value)} />
                    <label htmlFor="input_txt" className="p-component">Primereact Text</label>
                </span>
                <Button icon="pi pi-check" label='Submit' onClick={onButtonClick}/>
            </header>
        </div>

    );
}

export default App;
