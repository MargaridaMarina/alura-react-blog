import React, { useEffect, useState } from "react";
import http from "../api/api";
import '../assets/css/post.css'
import { useParams, Link } from "react-router-dom";
import Botao from '../components/Botao'

const Post = () => {

  const { id } = useParams()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [markdown, setMarkdown] = useState('')
  const [categoria, setCategoria] = useState('')

  useEffect(() => {
    async function buscarDados() {
      const res = await http.get(`/posts/${id}`)
      const data = await res.data

      setTitulo(data.title)
      setDescricao(data.metadescription)
      setMarkdown(data.markdown)
      setCategoria(data.category)
    }
    buscarDados();
  }, [id])

  if (Object.keys({titulo, categoria, markdown, descricao}).length === 0){
    // TODO: fix empty state
    return "carregando"
  }

  const httpRequestMethod = (method, url) => {
    return method(url, {
        title: titulo,
        metadescription: descricao,
        markdown: markdown,
        category: categoria
      })
  }

  const deletarPost = (ev)=> {
    httpRequestMethod(http.delete, `posts/${id}`).then( () => {
      window.location.pathname = `/`;
    })
  }
  
  const renderActionButtons = () => (
    <div>
      <Botao>
        <Link to={`/editarpost/${id}`}>Editar</Link>
      </Botao>
      <Botao onClick={deletarPost}> Deletar </Botao>
    </div>
  )


  return (
    <main className="container flex flex--centro">
      <article className={`cartao-post cartao-post--${categoria}`}>
        <p className="cartao__categoria">
          {categoria}
        </p>
        <h2 className="cartao__titulo">
          {titulo}
        </h2>
        <p className="cartao__descricao">
          {descricao}
        </p>
        <p className="cartao__texto">
          {markdown}
        </p>
        {renderActionButtons()}
      </article>
    </main>
  )
}

export default Post
