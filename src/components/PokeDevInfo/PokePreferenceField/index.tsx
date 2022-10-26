import { Dropdown } from 'primereact/dropdown';

interface Props {
    pokemon: string;
    onChangePokemon: (value: string) => void;
}

export default function PokePreferenceField ({ pokemon, onChangePokemon }: Props) {

    const senioritySelectItems = [
        {label: 'Normal', value: 'Normal'},
        {label: 'Fighting', value: 'Fighting'},
        {label: 'Flying', value: 'Flying'},
        {label: 'Poison', value: 'Poison'},
        {label: 'Ground', value: 'Ground'},
        {label: 'Rock', value: 'Rock'},
        {label: 'Bug', value: 'Bug'},
        {label: 'Ghost', value: 'Ghost'},
        {label: 'Steel', value: 'Steel'},
        {label: 'Fire', value: 'Fire'},
        {label: 'Water', value: 'Water'},
        {label: 'Grass', value: 'Grass'},
        {label: 'Eletric', value: 'Eletric'},
        {label: 'Psychic', value: 'Psychic'},
        {label: 'Ice', value: 'Ice'},
        {label: 'Dragon', value: 'Dragon'},
        {label: 'Dark', value: 'Dark'},
        {label: 'Fairy', value: 'Fairy'}
    ];


    return (

        <div className='pokefield p-3 border-3 border-round-lg border-solid border-bluegray-800 w-50rem h-60rem -mt-6 surface-overlay'>
            <div style={{fontFamily:'Pokemon'}} className='floating-label border-3 border-round-lg border-solid border-bluegray-800 text-white absolute w-14rem'>Your Pokémon preference</div>
            <div className='flex align-items-center justify-content-center gap-3'>
                <div className='pokefield text-bluegray-800 text-base'>Select your prefered Pokémon type:</div>
                <Dropdown value={pokemon} options={senioritySelectItems} onChange={(e) => onChangePokemon(e.value)} placeholder='Selecione'/>
            </div>
        </div>

    );

}