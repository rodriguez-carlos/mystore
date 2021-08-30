import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className="App-main">
        <ItemListContainer 
          greeting="Products" 
        />
      </main>
    </div>
  );
}

export default App;
