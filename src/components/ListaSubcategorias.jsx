import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import http from "../api/api";
import '../assets/css/blog.css'

const ListaSubcategorias = () => {
  const { id } = useParams()
  const [subcategorias, setSubcategorias] = useState([])
  

  useEffect(()=>{
    http.get(`/subcategorias/categorias/${id}`)
    .then(res => {
      console.log('oq vem', res.data)
      setSubcategorias(res.data)
    })
    .catch(err => {
      console.log({err})
    })
  }, [])

  return(
    <ul className="lista-categorias container flex">
      {
        subcategorias.map((subcategoria) => (
          <Link to={`/posts/subcategorias/${subcategoria.id}`} key={subcategoria.id}>
            <li className={`lista-categorias__categoria lista-categorias__subcategoria--${subcategoria.categoria_id}`} key={subcategoria.id}>
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default ListaSubcategorias