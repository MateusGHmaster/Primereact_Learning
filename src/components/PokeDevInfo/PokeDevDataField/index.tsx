import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

interface Props {
    input: string;
    userInputName: (value: string) => void;
    seniority: string;
    senioritySelection: (value: string) => void;
}

export default function PokeDevDataField ({ input, userInputName, seniority, senioritySelection }: Props) {

    const senioritySelectItems = [
        {label: 'Junior', value: 'Junior'},
        {label: 'Mid Level', value: 'Mid Level'},
        {label: 'Senior', value: 'Senior'}
    ];


    return (

        <div className='p-3 border-3 border-round-lg border-solid border-bluegray-800 w-50rem h-60rem m-2 surface-overlay'>
            <div style={{fontFamily:'Pokemon'}} className='floating-label border-3 border-round-lg border-solid border-bluegray-800 text-white absolute w-6rem'>Your data</div>
            <div className='flex align-items-center justify-content-center gap-3 mb-5'>
                <div className='text-bluegray-800 text-base'>Please, insert your name:</div>
                <InputText placeholder={'Your name...'} value={input} onChange={(e) => userInputName(e.target.value)} />
            </div>
            <div className='flex align-items-center gap-3'>
                <div className='text-bluegray-800 text-base'>Select your seniority level:</div>
                <Dropdown value={seniority} options={senioritySelectItems} onChange={(e) => senioritySelection(e.value)} placeholder='Selecione'/>
            </div>
        </div>

    );

}