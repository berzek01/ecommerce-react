import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Listado de Juegos'} />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado por Categoria '} />}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer greeting={'Detalle'} />}></Route>
            <Route path='/cart' element={<Cart greeting={'Detalle'} />}></Route>
            <Route path='*' element={<h1>404 :( Not Found</h1>}></Route>
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
