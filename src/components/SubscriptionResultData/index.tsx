
interface Props {
    inputResult: string;
    seniorityResult: string;
    pokemonResult: string;
    characterResult: string;
}

export default function SubscriptionResultData ({ inputResult, seniorityResult, pokemonResult, characterResult }: Props) {

    return (

        <div className='p-3 border-3 border-round-lg border-solid border-bluegray-800 w-50rem h-60rem m-2 surface-overlay flex align-items-center justify-content-center'>
            <div className='text-bluegray-800 text-base'>Subscription data result: </div>
            <div className='text-bluegray-800 text-base'>&ensp;{inputResult} {seniorityResult} {pokemonResult} {characterResult}</div>
        </div>

    );

}
