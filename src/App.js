import './App.css'
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola esto es el ItemListConteiner de Luciano" />
    </>
  );
}

export default App;
