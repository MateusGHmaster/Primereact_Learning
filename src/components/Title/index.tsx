import React from 'react';
import logo from '../../assets/logo.png';
import '../../App.css';
import '../../fonts/PokemonSolid.ttf';

export default function Title () {

    return (

        <div style={{fontFamily:'Pokemon'}} className='flex justify-content-between align-items-center gap-10 text-6xl text-bluegray-800 font-Pokemon'>
            <div>Welcome</div>
            <img src={logo} className='App App-logo mb-5' alt='logo' />
            <div>PokéDev!</div>
        </div>

    );

}