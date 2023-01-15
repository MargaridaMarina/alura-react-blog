import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import http from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import Subcategoria from './Subcategoria'

const PostsPorSubcategoria = () => {
    const { id } = useParams()
    const { url, path } = useRouteMatch()
    
    const [postsPorSubcategoria, setPostsPorSubcategoria] = useState([])

    useEffect(() => {
        async function buscarDados() {
          const res = await http.get(`/posts/categorias/${id}`)
          console.log('Res', {res})
          const data = await res.data
          console.log('Data', data)
          if (data) {
            setPostsPorSubcategoria(data)
          } else {
            console.error('Empty data')
          }
        }
        buscarDados();
      }, [id])

    return(
        <>
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {
                postsPorSubcategoria.map((postPorSubcategoria) => (
                    <li
                    className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
                    key={postPorSubcategoria.id}
                    >
                        <Link to={`${url}/${postPorSubcategoria.id}`}>
                            {postPorSubcategoria}
                        </Link>
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default PostsPorSubcategoria