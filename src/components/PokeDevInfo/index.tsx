import PokeCharacterField from './PokeCharacterField';
import PokeDevDataField from './PokeDevDataField';
import PokePreferenceField from './PokePreferenceField';


export default function PokeDevInfo() {

    return (

        <div className='flex flex-wrap justify-content-evenly'>
            <PokePreferenceField />
            <PokeDevDataField />
            <PokeCharacterField />
        </div>

    );

}