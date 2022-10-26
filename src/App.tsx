import 'primereact/resources/themes/md-light-indigo/theme.css';  //theme
import 'primereact/resources/primereact.min.css';               //core css
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import './App.css';
import PokeDevInfo from './components/PokeDevInfo';

function App() {

    return (

        <div className='App'>
            <header className='App-header'>
                <PokeDevInfo />
            </header>

        </div>

    );
}

export default App;
