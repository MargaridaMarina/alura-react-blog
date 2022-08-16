import React, { useEffect, useState } from "react";
import http from "../api/api";
import '../assets/css/post.css'
import { useParams, Link } from "react-router-dom";
import Botao from '../components/Botao'

const Post = () => {

  const { id } = useParams()
  const[post, setPost] = useState({})

  useEffect(() => {
    async function buscarDados() {
      const res = await http.get(`/posts/${id}`)
      const data = await res.data
      console.log({data})
      setPost(data)
    }
    buscarDados();
  },[id])

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">
          {post.title}
        </h2>
        <p className="cartao__descricao">
          {post.metadescription}
        </p>
        <p className="cartao__texto">
          {post.markdown}
        </p>
        <Botao>
          <Link to={`/editarpost/${id}`}>Editar</Link>
        </Botao>
      </article>
    </main>
  )
}

export default Post
