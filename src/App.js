import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Pokedex from './views/Pokedex';

function App() {
  return (
    <Provider store={store}>
        <Pokedex />
      </Provider>
  );
}

export default App;
