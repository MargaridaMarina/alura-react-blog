import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaSubcategorias from '../components/ListaSubcategorias'
import Post from './Post'

const PostsPorSubcategoria = () => {
  const { subcategoriaTitle } = useParams()
  const [postsPorSubcategorias, setpostsPorSubcategorias] = useState([])

  useEffect(() => {
    async function buscarDados() {
      const res = await http.get(`/posts/subcategorias/${subcategoriaTitle}`)
      const data = await res.data
      console.log('data', data)
      setpostsPorSubcategorias(data)
    }
    buscarDados();
  }, [subcategoriaTitle])

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
              className={`lista-categorias__categoria lista-categorias__categoria--${subcategoriaTitle}`}
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