import './App.css'
import ItemListContainer from './components/ItemListContainer';
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
