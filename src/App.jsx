import { useState , useEffect } from 'react'
import Personajes from './Personajes';

function App() {
   const [characters, setCharacters] = useState([]);
   const [info, setInfo] = useState ({});
  // enlace a api
const initialUrl= "https://apisimpsons.fly.dev/api/personajes?limit=8";
   

  // obtenner los personajes
   function fetchCharacters(url) {
    fetch(url) 
     .then(respuesta => respuesta.json())
     .then(datos => {
      setCharacters(datos.docs);
      setInfo({
      hasPrevPage: datos.hasPrevPage,
      hasNextPage: datos.hasNextPage,
      prevPage: datos.prevPage,
      nextPage: datos.nextPage
    });
      
   })
    .catch(error => console.log(error));
   }

   useEffect(() => {
    fetchCharacters(initialUrl)
   }, [])

   const prev = () => {
    fetchCharacters(`${initialUrl}?limit=8&page=2
    =${info.prevPage}`);
   } 

   const next = () => {
    fetchCharacters(`${initialUrl}?limit=8&page=2
    =${info.nextPage}`);
   } 

  
  
  return(  
  <>
    {info.hasPrevPage ? <button onClick={prev}>Anterior</button> : <></>}
    {info.hasNextPage ? <button onClick={next}>Proxima</button> : <></>}
   <Personajes personajes={characters}/>
  </>
  )
  
 
}

export default App;
