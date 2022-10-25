import 'primereact/resources/themes/md-light-indigo/theme.css';  //theme
import 'primereact/resources/primereact.min.css';               //core css
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import './App.css';
import PokeDevInfo from './components/PokeDevInfo';
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Icon } from '@iconify/react';
import Title from './components/Title';
import background from './assets/background.png';

function App() {

    const toastRef: any = useRef();

    return (

        <div className='App'>
            {/* <img src={background} className='bg-auto' /> */}
            <header className='App-header'>
                <Toast ref={toastRef} />
                <Title />
                <PokeDevInfo />
                <Button className='mt-5 bg-bluegray-800 w-2 pr-1' label='Submit' onClick={() => {}}>
                    <Icon icon='mdi:pokeball' className='absolute' />
                </Button>
            </header>

        </div>

    );
}

export default App;
