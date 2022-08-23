import { useState, useEffect } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import http from '../../api/api'
import { useParams, Link } from "react-router-dom";


const Formulario = ({ isNew }) => {
  const { id } = useParams()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [markdown, setMarkdown] = useState('')
  const [categoria, setCategoria] = useState('')
  const [imagem, setImagem] = useState('')

  useEffect(() => {
    async function buscarDados() {
      const res = await http.get(`/posts/${id}`)
      const data = await res.data

      setTitulo(data.title)
      setDescricao(data.metadescription)
      setMarkdown(data.markdown)
      setCategoria(data.category)
      setImagem(data.image)
    }
    buscarDados();
  }, [id])

  const httpRequestMethod = (method, url) => {
    return method(url, {
        title: titulo,
        metadescription: descricao,
        markdown: markdown,
        category: categoria,
        image: imagem
      })
  }

  const criarPost = () => {
    httpRequestMethod(http.post, "posts").then( () => {
      window.location.pathname = "/";
    })
  }

  const salvarPost = (ev)=> {
    httpRequestMethod(http.put, `posts/${id}`).then( () => {
      window.location.pathname = `posts/${id}`;
    })
  }
  
  const renderActionButtons = () => (
    isNew
    ? ( 
      <Botao onClick={criarPost}>
        Criar
      </Botao>
    ) : (
      <div>
        <Botao onClick={salvarPost}> Salvar </Botao>

        <Link to={`/posts/${id}`}>
          <Botao> Cancelar </Botao>
        </Link>
      </div>
    )
  )

  return (
    <section className="formulario">
      <form onSubmit={(ev) => ev.preventDefault()}>
        <CampoTexto
          obrigatorio={true}
          label="Título"
          placeholder="Digite o título do post"
          valor={titulo}
          onChange={valor => setTitulo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite a url da imagem"
          valor={imagem}
          onChange={valor => setImagem(valor)}
        />        
        <CampoTexto
          obrigatorio={true}
          label="Descrição"
          placeholder="Digite uma breve descrição do post"
          valor={descricao}
          onChange={valor => setDescricao(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Categoria"
          placeholder="Digite aqui a categoria do post"
          valor={categoria}
          onChange={valor => setCategoria(valor)}
        />
        <CampoTexto
          classe="markdown"
          obrigatorio={true}
          label="Texto"
          placeholder="Digite o texto do post"
          valor={markdown}
          onChange={valor => setMarkdown(valor)}
        />
        {renderActionButtons()}
      </form>
    </section>
  )
}

export default Formulario
