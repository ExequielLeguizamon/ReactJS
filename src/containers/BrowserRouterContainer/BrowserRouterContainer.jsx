import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Cart from '../Cart/Cart';
import NotFound from '../../components/NotFound/NotFound';
import Order from '../../components/Order/Order';


const BrowserRouterContainer = () => {
    return (
      <BrowserRouter className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}> </Route>
          <Route path='/category/:categoryId' element={<ItemListContainer />}> </Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}> </Route>
          <Route path='/containers/Cart' element={<Cart />}></Route>
          <Route path="/order/:orderId" element={<Order />} />
          <Route path='*' element={<NotFound />}> </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default BrowserRouterContainer;