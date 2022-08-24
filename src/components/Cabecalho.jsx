import React from 'react'
import imageHome from '../assets/img/casa8.png'
import imageNewPost from '../assets/img/write3.png'
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