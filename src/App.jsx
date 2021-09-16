import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <Switch>
            <main className="App-main">
              <Route exact path="/">
                <ItemListContainer 
                  greeting="Products" 
                />
              </Route>
              <Route exact path="/category/:categoryId">
                <ItemListContainer 
                
                />
              </Route>
              <Route exact path={`/product/:paramId`}>
                <ItemDetailContainer />
              </Route>
              <Route exact path="/contact" >
                <h1>Contact page under construction.</h1>
              </Route>
              <Route exact path="/cart" >
                <h1>Cart page under construction.</h1>
              </Route>
            </main>
          </Switch>
          <footer>

          </footer>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
