import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import http from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import SubCategoria from './SubCategoria'

const Categoria = () => {
    const { id } = useParams()
    const { url, path } = useRouteMatch()

    const [postsPorCategoria, setPostsPorCategoria] = useState([])

    useEffect(() => {
        async function buscarDados() {
          const res = await http.get(`/posts/categorias/${id}`)
          console.log({res})
          const data = await res.data
          if (data) {
            setPostsPorCategoria(data)
          } else {
            console.error('Empty data')
          }
        }
        buscarDados();
      }, [id])

    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina"></h2>
        </div>

        <ListaCategorias/>
        <ul className="lista-categorias container flex">
            {
                postsPorCategoria.map((postPorCategoria)=>(
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${""}`}  key={postPorCategoria.id}>
                        <Link to={`${url}/${postPorCategoria.id}`}>
                            {JSON.stringify(postPorCategoria)}
                            
                        </Link>
                    </li>
                ))
            }
        </ul>
    
        </>
    )
}

export default Categoria