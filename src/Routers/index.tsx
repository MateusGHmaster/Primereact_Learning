import { Toast } from 'primereact';
import { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokeDevInfo from '../components/PokeDevInfo';

export default function AppRoutes () {

    

    return (
    
                <Routes>
                    <Route path='/' element={<PokeDevInfo />}/>
                </Routes>
        
    );

}