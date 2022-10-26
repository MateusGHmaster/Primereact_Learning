import { Dropdown } from 'primereact/dropdown';

interface Props {
    character: string;
    onChangeCharacter: (value: string) => void;
}

export default function PokeCharacterField ({ character, onChangeCharacter }: Props) {

    const senioritySelectItems = [
        {label: 'Ash Ketchum', value: 'Ash Ketchum'},
        {label: 'Misty', value: 'Misty'},
        {label: 'Jessie', value: 'Jessie'},
        {label: 'James', value: 'James'},
        {label: 'Meowth', value: 'Meowth'},
        {label: 'Brock', value: 'Brock'},
        {label: 'May', value: 'May'},
        {label: 'Max', value: 'Max'},
        {label: 'Dawn', value: 'Dawn'},
        {label: 'Iris', value: 'Iris'},
        {label: 'Cilan', value: 'Cilan'},
        {label: 'Serena', value: 'Serena'},
        {label: 'Clemont', value: 'Clemont'},
        {label: 'Bonnie', value: 'Bonnie'},
        {label: 'Lana', value: 'Lana'},
        {label: 'Klawe', value: 'Klawe'},
        {label: 'Lilie', value: 'Lilie'},
        {label: 'Sophocles', value: 'Sophocles'},
        {label: 'Mallow', value: 'Mallow'},
        {label: 'Rotom Pokédex', value: 'Rotom Pokédex'},
        {label: 'Goh', value: 'Goh'}
    ];


    return (

        <div className='pokefield p-3 border-3 border-round-lg border-solid border-bluegray-800 w-50rem h-60rem -mt-6 surface-overlay'>
            <div style={{fontFamily:'Pokemon'}} className='floating-label border-3 border-round-lg border-solid border-bluegray-800 text-white absolute w-15rem'>Your character preference</div>
            <div className='pokefield flex align-items-center justify-content-center gap-3'>
                <div className='text-bluegray-800 text-base'>Choose one of the main characters:</div>
                <Dropdown value={character} options={senioritySelectItems} onChange={(e) => onChangeCharacter(e.value)} placeholder='Selecione'/>
            </div>
        </div>

    );

}