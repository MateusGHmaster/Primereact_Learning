import logo from '../../assets/logo.png';

export default function Title () {

    return (

        <div style={{fontFamily:'Pokemon'}} className='flex justify-content-between align-items-center gap-10 text-6xl mb-7'>
            <div className='page-title'>Welcome</div>
            <img src={logo} className='App-logo mb-5' alt='logo' />
            <div className='page-title'>PokéDev!</div>
        </div>

    );

}