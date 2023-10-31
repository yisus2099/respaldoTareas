import logo from './logo.svg'; //Importamos el logo
import './App.css'; //Importamos los estilos del archivo App.css
import Tarea from './tarea'; //Importamos nuestro componente Tarea

function App() {//Iniciamos nuestro componente principal App
  return (//Definimos la estrucutra
    <div className="App">{/*Creamos un div y le asignamos la clase App*/}
      <h1>Lista de Tareas</h1>{/*Ponemos nuestro titulo*/}
      <Tarea texto="Hacer la compra"/>{/*Ponemos el compoente Tarea con el texto Hacer la compra*/}
      <Tarea texto="Estudiar React"/>{/*Ponemos el compoente Tarea con el texto Estudiar React*/}
      <Tarea texto="Pasear al perro"/>{/*Ponemos el compoente Tarea con el texto Pasear al perro*/}
      <p>Jesús Alejandro Torres Ramírez - 21550341</p>{/*Ponemos mi nombre aquí para que no se repita con cada vez
      que utilizamos el componente*/}
    </div> //Terminamos el div
  );//Terminamos la estructura del componente
}//Carramos el componente

export default App;//Exportamos el componente para que pueda ser utilizado en otros archivos
