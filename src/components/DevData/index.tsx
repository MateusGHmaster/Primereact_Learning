import React, { useRef, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

export default function DevData () {

    const [input, setInput] = useState('');
    const [dropSelection, setDropSelection] = useState('');

    const senioritySelectItems = [
        {label: 'Junior', value: 'JR'},
        {label: 'Mid Level', value: 'ML'},
        {label: 'Senior', value: 'SR'}
    ];


    return (

        <div className='p-3 border-3 border-round-lg border-solid border-bluegray-800 w-50rem h-60rem m-2 surface-overlay'>
            <div className='flex align-items-center gap-3 mb-5'>
                <div className='text-900 text-base'>Please, insert your name:</div>
                <InputText placeholder={'Your name...'} value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className='flex align-items-center gap-3'>
                <div className='text-900 text-base'>Select your seniority level:</div>
                <Dropdown value={dropSelection} options={senioritySelectItems} onChange={(e) => setDropSelection(e.value)} placeholder='Selecione'/>
            </div>
        </div>

    );

}