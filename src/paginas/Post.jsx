import React, { useEffect, useState } from "react";
import http from "../api/api";
import '../assets/css/post.css'
import { useParams, Link } from "react-router-dom";
import Botao from '../components/Botao';
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

const PostSemEstado = ({
  subcategoria,
  titulo,
  descricao,
  imagem,
  id,
  texto
}) => {
  
  const renderActionButtons = () => (
    <div>
      <Botao>
        <Link to={`/editarpost/${id}`}>Editar</Link>
      </Botao>
      <Botao onClick={deletarPost}> Deletar </Botao>
    </div>
  )

  const rendertexto = () => {
    return (
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{texto}</ReactMarkdown>
    )
  }

  const httpRequestMethod = (method, url) => {
    return method(url, {
      title: titulo,
      image: imagem,
      description: descricao,
      text: texto,
      subcategoria_id: subcategoria,
    })
  }

  const deletarPost = (ev) => {
    httpRequestMethod(http.delete, `posts/${id}`).then(() => {
      window.location.pathname = `/`;
    })
  }

  return (
    <main className="container flex flex--centro">
      <article className={`cartao-post cartao-post--${subcategoria}`}>
        <h2 className="cartao__titulo">
          {titulo}
        </h2>
        <p className="cartao__descricao">
          {descricao}
        </p>
        <img className="cartao__imagem" src={imagem} alt={descricao} />
        <div>
          {rendertexto()}
        </div>
        {renderActionButtons()}
      </article>
    </main>
  )
}


const Post = () => {
  const { id } = useParams()
  const [titulo, setTitulo] = useState('')
  const [imagem, setImagem] = useState('')
  const [descricao, setDescricao] = useState('')
  const [texto, setTexto] = useState('')
  const [subcategoria, setSubcategoria] = useState('')

  useEffect(() => {
    async function buscarDados() {
      const res = await http.get(`/posts/${id}`)
      const data = await res.data
      console.log('data post', data)
      setTitulo(data.title)
      setImagem(data.image)
      setDescricao(data.description)
      setTexto(data.text)
      setSubcategoria(data.subcategoria_id)
    }
    buscarDados();
  }, [id])

  if (Object.keys({ titulo, imagem, descricao, texto, subcategoria }).length === 0) {
    // TODO: fix empty state
    return "carregando"
  }

  return (
    <PostSemEstado
      titulo={titulo}
      imagem={imagem}
      descricao={descricao}
      texto={texto}
      subcategoria={subcategoria}
    />
  )



}

export default Post
