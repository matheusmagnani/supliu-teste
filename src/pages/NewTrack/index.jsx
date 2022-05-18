import React, {useState} from 'react';
import logo from "/src/image/logo.png";
import "./styles.css"
import {IoAddCircle} from 'react-icons/io5'
import { useParams, useRoutes } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import api from '../../services/api'
import {convertToSeconds} from '../../utils/convertToMinutes'

function NewTrack() {
  const {albumId} = useParams();
  const [number, setNumber] = useState('')
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const navigation = useNavigate()

  
async function handleCreateTrack(){
  try {
    await api.post('/track',{
      album_id: Number(albumId),
      number: Number(number),
      title: title,
      duration: convertToSeconds(duration),
    });
  
    toast.success('Faixa criada com sucesso!');
      navigation('/');

  } catch (error) {
    console.log(error);
    toast.error('Ocorreu um erro ao criar sua Faixa')
  }

}

  return (
    <>
      <nav>
        <img src={logo} alt="Logo da banda sertaneja Tião Carreiro" />
        <h1>Criar Nova Faixa</h1>
      </nav>
      <div className="container">
        <form className="new-track" action="">
        <span className="song-number">N°:</span>
        <input value={number} onChange={event=> setNumber(event.target.value)} className="input-number" type="number" /> 
          <span className="song-name">Nome:</span>
          <input value={title} onChange={event=> setTitle(event.target.value)} className="input-song" type="text" /> 
          <span className="duration-song">Duração:</span>
          <input placeholder="00:00" value={duration} onChange={event=> setDuration(event.target.value)} className="input-duration" type="text" />
          <a title="Criar Nova Faixa" onClick={handleCreateTrack} className="add-song"> <IoAddCircle></IoAddCircle> </a>
        </form>
      </div>
 </>
 )
}

export default NewTrack