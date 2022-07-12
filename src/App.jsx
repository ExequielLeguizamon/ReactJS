import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import Cart from './containers/Cart/Cart'
import ContextProvider from './Context/ContextProvider';

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}> </Route>
          <Route path='/category/:categoryId' element={<ItemListContainer />}> </Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}> </Route>
          <Route path='/containers/Cart' element={<Cart />}></Route>
          <Route path='*' element={<NotFound />}> </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}



export default App;