import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../api/api";
import '../assets/css/blog.css'

const ListaCategorias = () => {

  const [categorias, setCategorias] = useState([])
  
  useEffect(()=>{
    http.get(`/categorias`)
    .then(res => 
      {
      setCategorias(res.data)}
      )
  }, [])

  return(
    <ul className="lista-categorias container flex">
      {
        categorias.map((categoria) => (
          <Link to={`/categorias/${categoria.id}`} key={categoria.id}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.title}`}>
              {categoria.title}
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default ListaCategorias