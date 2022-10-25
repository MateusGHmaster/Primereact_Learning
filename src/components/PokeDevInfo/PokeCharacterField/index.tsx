import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

export default function PokeCharacterField () {

    const [input, setInput] = useState('');
    const [dropSelection, setDropSelection] = useState('');

    const senioritySelectItems = [
        {label: 'Ash Ketchum', value: 'AK'},
        {label: 'Misty', value: 'MY'},
        {label: 'Jessie', value: 'JS'},
        {label: 'James', value: 'JM'},
        {label: 'Meowth', value: 'MW'},
        {label: 'Brock', value: 'BC'},
        {label: 'May', value: 'MY'},
        {label: 'Max', value: 'MX'},
        {label: 'Dawn', value: 'DW'},
        {label: 'Iris', value: 'IR'},
        {label: 'Cilan', value: 'CL'},
        {label: 'Serena', value: 'SR'},
        {label: 'Clemont', value: 'EL'},
        {label: 'Bonnie', value: 'BN'},
        {label: 'Lana', value: 'LA'},
        {label: 'Klawe', value: 'KW'},
        {label: 'Lilie', value: 'LL'},
        {label: 'Sophocles', value: 'SC'},
        {label: 'Mallow', value: 'ML'},
        {label: 'Rotom Pokédex', value: 'RP'},
        {label: 'Goh', value: 'GH'}
    ];


    return (

        <div className='pokefield p-3 border-3 border-round-lg border-solid border-bluegray-800 w-50rem h-60rem m-2 surface-overlay'>
            <div style={{fontFamily:'Pokemon'}} className='floating-label border-3 border-round-lg border-solid border-bluegray-800 text-white absolute w-15rem'>Your character preference</div>
            <div className='pokefield flex align-items-center justify-content-center gap-3'>
                <div className='text-bluegray-800 text-base'>Choose one of the main characters:</div>
                <Dropdown value={dropSelection} options={senioritySelectItems} onChange={(e) => setDropSelection(e.value)} placeholder='Selecione'/>
            </div>
        </div>

    );

}