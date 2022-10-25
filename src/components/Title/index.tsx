import logo from '../../assets/logo.png';

export default function Title () {

    return (

        <div style={{fontFamily:'Pokemon'}} className='flex justify-content-between align-items-center gap-10 text-6xl text-bluegray-800 mb-7'>
            <div>Welcome</div>
            <img src={logo} className='App-logo mb-5' alt='logo' />
            <div>PokéDev!</div>
        </div>

    );

}