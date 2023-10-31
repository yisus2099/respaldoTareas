import React, {useState} from "react"; // Primero importamos React y useState juntos

function Tarea({ texto }) {//Creamos la función y nuestro componente que pide un valor inicial que es texto
    //Declaramos una constante con un valor de un arreglo con dos variables booleanas
    const [completada, setCompletada] = useState(false);//Establecemos como valor inicial false y lo mandamos a useState para que se renderize inicialmente con ese valor

    const manejarCambio = () => {//Creamos una función que se encarga de cambiar el valor de true a false o viceversa
        setCompletada(!completada); //Cambia al valor contrario de completada, true o false
        console.log(`Tarea completada: ${texto}`); //Imprimimos en consola tarea completada y el texto que metimos como valor inicial
    };//Termina la función

    return(//Sigue la estructura del componente
        <div> {/*Creamos un div*/}
            <input //Declaramos nuestro campo para que el usuario interactue
            type="checkbox" //Indicamos que sea de tipo checkbox para que el input sea de dar click
            checked={completada} //Se sincroniza el valor de input a la variable completada
            onChange={manejarCambio}//Cuando cambia el valor del input se llama a la funcion manejarCambio
            />{/*Termina el input*/}

        {/*Declaramos span para cambiar el estilo de texto*/}
        <span style={{ textDecoration: completada ? 'line-through': 'none'}}> {/*Si completada es true al texto se le aplica el estilo line-through 
         y en el caso de que sea false no se aplica el estilo*/}
            {texto} {/*Ponemos el texto que se envio como parámetro*/}
        </span> {/*Termina Span*/}
        </div> //Termina el div
    ); //Termina la estructura del componente
}//Termina el componente o función

export default Tarea;//Exportamos nuestro componente para que otros archivos puedan usarlo