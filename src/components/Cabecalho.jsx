import React from 'react'
import imagePosts from '../assets/img/posts.png'
import imageNewPost from '../assets/img/write.png'
import imageNewProduct from '../assets/img/shopping.png'
import imageNewRecipe from '../assets/img/recipe-book.png'
import '../assets/css/componentes/cabecalho.css'
import { Link } from 'react-router-dom'

const Cabecalho = () => {
  return (
    <div className='cabecalho'>
      <Link to='/posts'>
        <img className='cabecalho__logo' src={imagePosts} alt ='Logo'/>
      </Link>
      <Link to="/post/novo">
        <img className='cabecalho__logo' src={imageNewPost} alt ='Logo' />
      </Link>
      <Link to="/produtos">
        <img className='cabecalho__logo' src={imageNewProduct} alt ='Logo' />
      </Link>
      <Link to="/receitas">
        <img className='cabecalho__logo' src={imageNewRecipe} alt ='Logo' />
      </Link>
    </div>
  )
}

export default Cabecalho