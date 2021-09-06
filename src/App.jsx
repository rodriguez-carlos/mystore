import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
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
            <Route exact path={`/product/:paramId`}>
              <ItemDetailContainer />
            </Route>
          </main>
        </Switch>
        <footer>

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
