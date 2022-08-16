import { useState, useEffect } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import http from '../../api/api'
import { useParams, Link } from "react-router-dom";


const Formulario = ({ isNew, isUpdate }) => {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [markdown, setMarkdown] = useState('')
  const [categoria, setCategoria] = useState('')

  const[post, setPost] = useState({})

  const { id } = useParams()
  useEffect(() => {
    async function buscarDados() {
      const res = await http.get(`/posts/${id}`)
      const data = await res.data
      setPost(data)
    }
    buscarDados();
  },[])

  const criarPost = () => {
    http
      .post('posts', {
        title: titulo,
        metadescription: descricao,
        markdown: markdown,
        category: categoria
      })
      .then(res => console.log(res))
  }

  const salvarPost = ()=> {
    http
      .put(`posts/${id}`, {
        title: titulo,
        metadescription: descricao,
        markdown: markdown,
        category: categoria
      })
      .then(res => console.log(res))
  }

  const renderActionButtons = () => {
    if (isNew) {
      return (
        <Botao onClick={criarPost}>
          <Link to="/">Criar</Link>
        </Botao>
      )
    }

    return (
      <div>
        <Botao onClick={salvarPost}>
          Salvar
        </Botao>
        <Botao>
          <Link to={`/posts/${id}`}>
            Cancelar
          </Link>
        </Botao>
      </div>
    )

  }


  return (
    <section className="formulario">
      <form onSubmit={(ev) => ev.preventDefault()}>
        <CampoTexto
          obrigatorio={true}
          label="Título"
          placeholder="Digite o título do post"
          valor={post.title}
          onChange={valor => setTitulo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Descrição"
          placeholder="Digite uma breve descrição do post"
          valor={post.metadescription}
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
          obrigatorio={true}
          label="Texto"
          placeholder="Digite o texto do post"
          valor={post.markdown}
          onChange={valor => setMarkdown(valor)}
        />
        { renderActionButtons() }
      </form>
    </section>
  )
}

export default Formulario
