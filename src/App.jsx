import { useState, useEffect } from 'react'
import './App.css'
import logo from "./image/logo.png"
import api from './services/api';
import {convertToMinutes} from './utils/convertToMinutes';
import {BsTrashFill} from 'react-icons/bs'
import {BsTrash} from 'react-icons/bs'
import {toast} from 'react-toastify';

 function App() {
  const [search, setSearch] = useState("");
  const [albums, setAlbums] = useState([])
  
 

   async function handleSearch(){
      try {
        const response = await api.get('/album', {
          params: {keyword: search}
        })



        if(!response.data.data.length) {
          toast.warn('Nenhum album foi encontrado!')
          return;
        }
        setAlbums(response.data.data);

        toast.success('Albuns filtrados com sucesso!')

      } catch (error) {
        console.log(error)
      }
    }

    async function handleDeleteAlbum(id){
      try {
        await api.delete(`/album/${id}`); alert("Album deletado com sucesso!")
        return handleSearch()
      } catch (error) {
        console.log(error)
      }
    }

    async function handleDeleteSong(id){
      try {
        await api.delete(`/track/${id}`); alert("Faixa deletada com sucesso!")
        return handleSearch()
      } catch (error) {
        console.log(error)
      }
    }

    function handleKeyPressed(event) {
      if(event.keyCode === 13) return handleSearch();      
    }

  return (
   <>
        <nav>
        <img src={logo} alt="Logo da banda sertaneja Tião Carreiro" />
        <h1>Discografia</h1>
       </nav>
   
   <div className="container" onKeyUp={handleKeyPressed}>
      <main className="body">
         <div className="input-group">
          <p className="information" >Digite uma palavra chave</p>
          <input
           className='input'
            value={search}
             onChange={event => setSearch(event.target.value)}
              type="text"
               placeholder='Album / Ano do Album / Faixa' />
         </div>
         <button onClick={handleSearch}>Procurar</button>
      </main>
        {
          albums.map(album => (
            <div className="album-wrapper" key={album.id}>
            <div className="album-name"><span>Álbum: {album.name}, {album.year}  </span> <a className= "delete-album" onClick={() => handleDeleteAlbum(album.id)}><BsTrashFill></BsTrashFill></a> </div><br />
            
            <div className="songs-group">

                <p className="number">N°</p>
                <p className="song">Faixa</p>
                <p className="duration">Duração</p>
            </div>
              <div className="songs">
                
                {
                album.tracks.map(track => (
                  <div className="song" key={track.id}>
                  <p className="number">{track.number}</p>
                  <p className="song">{track.title}</p>
                  <p className="duration">{convertToMinutes(track.duration)} min</p>
                  <a className= 'delete-song' onClick={() => handleDeleteSong(track.id)}><BsTrash></BsTrash></a>
                </div>
                ))

                }

            </div>

         </div>
          ))
        }
         
      
       
   </div>
   
   </>
   )
}

export default App

