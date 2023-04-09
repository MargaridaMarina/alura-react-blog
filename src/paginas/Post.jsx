import React, { useEffect, useState } from "react";
import http from "../api/api";
import '../assets/css/post.css'
import { useParams } from "react-router-dom";
import PostSemEstado from "./PostSemEstado";


const Post = () => {
  const { id } = useParams()
  
  const [titulo, setTitulo] = useState('')
  const [imagem, setImagem] = useState('')
  const [descricao, setDescricao] = useState('')
  const [texto, setTexto] = useState('')
  const [subcategoria, setSubcategoria] = useState('')
  const [categoria, setCategoria] = useState('')


  useEffect(() => {
    async function buscarDados() {
      const res = await http.get(`/posts/${id}`)
      const data = await res.data
      console.log('data post', data)
      setTitulo(data.title)
      setImagem(data.image)
      setDescricao(data.description)
      setTexto(data.text)
      setSubcategoria(data.subcategory_title)
      setCategoria(data.category_title)
    }
    buscarDados();
  }, [id])

  if (Object.keys({ titulo, imagem, descricao, texto, subcategoria, categoria }).length === 0) {
    // TODO: fix empty state
    return "carregando"
  }

  return (
    <>
      <PostSemEstado
        titulo={titulo}
        imagem={imagem}
        descricao={descricao}
        texto={texto}
        subcategoria={subcategoria}
        categoria={categoria}
      />
    </>
    
  )
}

export default Post
