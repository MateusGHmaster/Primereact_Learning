import 'primereact/resources/themes/md-light-indigo/theme.css';  //theme
import 'primereact/resources/primereact.min.css';               //core css
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import './App.css';
import DevData from './components/DevData';
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Icon } from '@iconify/react';
import Title from './components/Title';

function App() {

    const toastRef: any = useRef();

    return (

        <div className='App'>
            <header className='App-header'>
                <Toast ref={toastRef} />
                <Title />
                <DevData />
                <Button className='mt-5 bg-bluegray-800' label='Submit' onClick={() => {}}>
                    <Icon icon='mdi:pokeball' className='ml-1' />
                </Button>
            </header>

        </div>

    );
}

export default App;
