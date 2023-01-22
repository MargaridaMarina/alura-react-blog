import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaSubcategorias from '../components/ListaSubcategorias'
import Post from './Post'

const PostsPorSubcategoria = () => {
  const { id } = useParams()

  const [postsPorSubcategorias, setpostsPorSubcategorias] = useState([])

  useEffect(() => {
    async function buscarDados() {
      const res = await http.get(`/posts/subcategorias/${id}`)
      const data = await res.data
      setpostsPorSubcategorias(data)
    }
    buscarDados();
  }, [id])

  return (
    <>
      <ListaCategorias />
      <ListaSubcategorias />
      <ul className="lista-categorias container flex">
        {
          postsPorSubcategorias.map(({
            subcategoria,
            titulo,
            descricao,
            imagem,
            id,
            texto
          }) => (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={id}
            >
              <Post
                subcategoria={subcategoria}
                titulo={titulo}
                descricao={descricao}
                imagem={imagem}
                id={id}
                texto={texto}
              />
            </li>
          ))
        }
      </ul>

    </>
  )
}

export default PostsPorSubcategoria