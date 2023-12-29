import './Personajes.css'
import './index.css'

function Personajes( { personajes } ) {
    
    console.log(personajes)
    return (
    <div className='padre'>
        { personajes.map((personaje, indice) => (
            <div key={indice} className="cards">
                <div className='card'>
                <h3>{personaje.Nombre}</h3>
                <img src={personaje.Imagen} ></img>
                   <div>
                    <hr />
                    <p>Ocupacion: {personaje.Ocupacion}</p>
                    <p>Género: {personaje.Genero}</p>
                   </div>
                </div>
            </div>
        ) )}
    </div>
  );
}


export default Personajes;