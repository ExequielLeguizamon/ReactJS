import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer'

function App() {

  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting = "¡Bienvenidxs!"/>
    </div>
  );
}

export default App;