import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import http from "../api/api";
import '../assets/css/blog.css'

const ListaSubcategorias = () => {
  const { categoriaTitle } = useParams()
  
  const [subcategorias, setSubcategorias] = useState([])
  
  useEffect(()=>{
    http.get(`/subcategorias/categorias/${categoriaTitle}`)
    .then(res => {
      console.log('oq vem', res)
      setSubcategorias(res.data)
    })
    .catch(err => {
      console.log({err})
    })
  }, [categoriaTitle])
  if (!subcategorias || subcategorias.length == 0) return<></>;
  return(
    <ul className="lista-categorias container flex">
      {
        subcategorias.map((subcategoria) => (
          <Link to={`/posts/subcategorias/${subcategoria.title}`} key={subcategoria.id}>
            <li className={`lista-categorias__subcategoria lista-categorias__subcategoria--${subcategoria.id}`} key={subcategoria.id}>
              {subcategoria.title}
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default ListaSubcategorias