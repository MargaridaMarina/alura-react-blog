import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import http from '../../api/api'
import { Link } from 'react-router-dom'

const Formulario = props => {

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  // const [imagem, setImagem] = useState('')
  const [markdown, setMarkdown] = useState('')
  const [categoria, setCategoria] = useState('')

  const criarPost = () => {
    http
      .post('posts', {
        title: titulo,
        metadescription: descricao,
        // image: imagem,
        markdown: markdown,
        category: categoria
      })
      .then(res => console.log(res))
  }

  const aoSubmeterForm = (evento) => {
    evento.preventDefault()
  }

  // const selecionarArquivo = (evento) => {
  //     if (evento.target.files?.length) {
  //       setImagem(evento.target.files[0])
  //     } else {
  //       setImagem(null)
  //     }
  //   }

  return (
    <section className="formulario">
      <form onSubmit={aoSubmeterForm}>
        {/* <h2>Preencha para criar o post</h2> */}
        <CampoTexto
          obrigatorio={true}
          label="Título"
          placeholder="Digite o título do post"
          valor={titulo}
          onChange={valor => setTitulo(valor)}
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
        {/* <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    onChange={selecionarArquivo} 
                /> */}
        <CampoTexto
          obrigatorio={true}
          label="Texto"
          placeholder="Digite o texto do post"
          valor={markdown}
          onChange={valor => setMarkdown(valor)}
        />
        <Botao onClick={criarPost}>
          <Link to="/">Criar</Link>
        </Botao>
      </form>
    </section>
  )
}

export default Formulario
