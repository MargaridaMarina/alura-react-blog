import React from 'react'
import imageHome from '../assets/img/margarida.jpg'
import imageNewPost from '../assets/img/write2.png'
import '../assets/css/componentes/cabecalho.css'
import { Link } from 'react-router-dom'

const Cabecalho = () => {
  return (
    <div className='cabecalho'>
      <Link to='/'>
        <img className='cabecalho__logo' src={imageHome} alt ='Logo'/>
        {/* <h1 className='cabecalho__titulo'></h1> */}
      </Link>
      <Link to="/novopost">
      <img className='cabecalho__new_post' src={imageNewPost} alt ='Logo' />
      </Link>
    </div>
  )
}

export default Cabecalho