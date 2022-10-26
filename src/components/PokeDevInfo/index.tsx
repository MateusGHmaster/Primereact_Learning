import { Button } from 'primereact/button';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import SubscriptionResultData from '../SubscriptionResultData';
import Title from '../Title';
import PokeCharacterField from './PokeCharacterField';
import PokeDevDataField from './PokeDevDataField';
import PokePreferenceField from './PokePreferenceField';

import { useNavigate } from 'react-router-dom';


export default function PokeDevInfo() {

    const [input, setInput] = useState('');
    const [dropCharacter, setDropCharacter] = useState('');
    const [dropSeniority, setDropSeniority] = useState('');
    const [dropPokemon, setDropPokemon] = useState('');

    const navigate = useNavigate();

    return (
        <>
            <Title />
            <div className='flex flex-wrap justify-content-between gap-3 mb-6'>
                <PokePreferenceField pokemon={dropPokemon} onChangePokemon={(value) => setDropPokemon(value)}/>
                <PokeDevDataField input={input} userInputName={(value) => setInput(value)} seniority={dropSeniority} senioritySelection={(value) => setDropSeniority(value)} />
                <PokeCharacterField character={dropCharacter} onChangeCharacter={(value) => setDropCharacter(value)} />
            </div>
            {/* <SubscriptionResultData inputResult={input} seniorityResult={dropSeniority} pokemonResult={dropPokemon} characterResult={dropCharacter}/> */}
            <Button className='mt-2 bg-bluegray-800 w-2 pr-1' label='Submit' onClick={() => {
                navigate("/heiahieha")
            }}>
                    <Icon icon='mdi:pokeball' className='absolute' />
            </Button>
        </>
    );

}