import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
/*import ItemListContainer from './containers/ItemListContainer/ItemListContainer'*/;

function App() {

  return (
    <div className='container'>
      <NavBar/>
      {/*<ItemListContainer greeting = "¡Bienvenidxs!"/>*/}
      <ItemDetailContainer/>
    </div>
  );
}



export default App;