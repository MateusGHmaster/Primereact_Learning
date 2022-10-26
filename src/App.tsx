import 'primereact/resources/themes/md-light-indigo/theme.css';  //theme
import 'primereact/resources/primereact.min.css';               //core css
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import './App.css';
import PokeDevInfo from './components/PokeDevInfo';
import AppRoutes from './Routers';
import { BrowserRouter } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

function App() {
    const toastRef: any = useRef();

    return (
        <BrowserRouter>
            <Toast ref={toastRef} />
            <div className='App'>
                <header className='App-header'>
                    <AppRoutes />
                </header>
            </div>
        </BrowserRouter>

    );
}

export default App;
