import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <BrowserRouter>
    
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}> </Route>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}> </Route>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}> </Route>
        <Route path='*' element={<NotFound/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;