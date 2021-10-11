import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <CartContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <NavBar />
            </header>
            <Switch>
              <div>
                <main className="App-main">
                  <Route exact path="/">
                    <ItemListContainer 
                      greeting="Welcome"
                    />
                  </Route>
                  <Route exact path="/category/:categoryId">
                    <ItemListContainer />
                  </Route>
                  <Route exact path={`/product/:paramId`}>
                    <ItemDetailContainer />
                  </Route>
                  <Route exact path="/cart" >
                    <CartContainer
                      greeting="Shopping Cart"
                    />
                  </Route>
                </main>
              </div>
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeContextProvider>
    </CartContextProvider>
  );
}

export default App;
