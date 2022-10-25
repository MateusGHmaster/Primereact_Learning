import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

export default function PokePreferenceField () {

    const [dropSelection, setDropSelection] = useState('');

    const senioritySelectItems = [
        {label: 'Normal', value: 'NM'},
        {label: 'Fighting', value: 'FT'},
        {label: 'Flying', value: 'FL'},
        {label: 'Poison', value: 'PS'},
        {label: 'Ground', value: 'GR'},
        {label: 'Rock', value: 'RC'},
        {label: 'Bug', value: 'BG'},
        {label: 'Ghost', value: 'GH'},
        {label: 'Steel', value: 'ST'},
        {label: 'Fire', value: 'FR'},
        {label: 'Water', value: 'WT'},
        {label: 'Grass', value: 'GR'},
        {label: 'Eletric', value: 'EL'},
        {label: 'Psychic', value: 'PS'},
        {label: 'Ice', value: 'IC'},
        {label: 'Dragon', value: 'DG'},
        {label: 'Dark', value: 'DK'},
        {label: 'Fairy', value: 'FR'}
    ];


    return (

        <div className='pokefield p-3 border-3 border-round-lg border-solid border-bluegray-800 w-50rem h-60rem m-2 surface-overlay'>
            <div style={{fontFamily:'Pokemon'}} className='floating-label border-3 border-round-lg border-solid border-bluegray-800 text-white absolute w-14rem'>Your Pokémon preference</div>
            <div className='flex align-items-center justify-content-center gap-3'>
                <div className='pokefield text-bluegray-800 text-base'>Select your prefered Pokémon type:</div>
                <Dropdown value={dropSelection} options={senioritySelectItems} onChange={(e) => setDropSelection(e.value)} placeholder='Selecione'/>
            </div>
        </div>

    );

}