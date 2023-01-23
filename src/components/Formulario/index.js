import { useState, useEffect } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import http from '../../api/api'
import { useParams, Link } from "react-router-dom";


const Formulario = ({ isNew }) => {
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

      setTitulo(data.title)
      setImagem(data.image)
      setDescricao(data.description)
      setTexto(data.text)
      setSubcategoria(data.subcategoria_title)
      
    }
    buscarDados();
  }, [id])

  const httpRequestMethod = (method, url) => {
    return method(url, {
        title: titulo,
        image: imagem,
        description: descricao,
        text: texto,
        subcategoria_title: subcategoria,
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
          label="Subcategoria"
          placeholder="Digite aqui a subcategoria do post"
          valor={subcategoria}
          onChange={valor => setSubcategoria(valor)}
        />
        <CampoTexto
          classe="texto"
          obrigatorio={true}
          label="Texto"
          placeholder="Digite o texto do post"
          valor={texto}
          onChange={valor => setTexto(valor)}
        />
        {renderActionButtons()}
      </form>
    </section>
  )
}

export default Formulario
