import React, { useEffect, useState } from "react";
import http from "../api/api";
import '../assets/css/post.css'
import { useParams, Link } from "react-router-dom";
import Botao from '../components/Botao';
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

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

  const renderMarkdown = () => {
    return (
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{markdown}</ReactMarkdown>
    )
  }

  return (
    <main className="container flex flex--centro">
      <article className={`cartao-post cartao-post--${categoria}`}>
        <h2 className="cartao__titulo">
          {titulo}
        </h2>
        <p className="cartao__descricao">
          {descricao}
        </p>
        <div>
          {renderMarkdown()}
        </div>
        {renderActionButtons()}
      </article>
    </main>
  )
}

export default Post
