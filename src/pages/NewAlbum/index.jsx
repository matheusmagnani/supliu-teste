import React,{useState} from 'react';
import logo from "/src/image/logo.png";
import "./styles.css"
import {IoAddCircle} from 'react-icons/io5'
import api from '../../services/api'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function NewAlbum() {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const navigation = useNavigate();
  

  async function handleCreateAlbum(){
    try{
      await api.post('/album', {
        name: name,
        year: year,
      });
         

      toast.success('Álbum criado com sucesso!');
      navigation('/');
    }
    catch(error){
      toast.error('Ocorreu um erro ao criar seu álbum')
      console.log(error)
    }
  }

  return (
    <>
      <nav>
        <img src={logo} alt="Logo da banda sertaneja Tião Carreiro" />
        <h1>Criar Novo Álbum</h1>
      </nav>
      <div className="container">
        <form className="new-album" action="">
          <span className="album-name">Nome:</span>
          <input value={name} onChange={event => setName(event.target.value)} className="input-name" type="text" /> 
          <span className="year-album">Ano:</span>
          <input value={year} onChange={event => setYear(event.target.value)} className="input-year" type="text" />
          <a onClick={handleCreateAlbum} title="Criar novo Album"className="add-album"> <IoAddCircle></IoAddCircle> </a>
        </form>
      </div>
 </>
 )
}

export default NewAlbum;