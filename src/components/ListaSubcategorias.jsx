import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
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

  return(
    <ul className="lista-categorias container flex">
      {
        subcategorias.map((subcategoria) => (
          <Link to={`/posts/subcategorias/${subcategoria.title}`} key={subcategoria.id}>
            <li className={`lista-categorias__categoria lista-categorias__subcategoria--${subcategoria.title}`} key={subcategoria.id}>
              {subcategoria.title}
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default ListaSubcategorias