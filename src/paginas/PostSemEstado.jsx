import http from "../api/api";
import '../assets/css/post.css'
import { Link } from "react-router-dom";
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
        id: id,
        subcategoria_title: subcategoria,
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

  export default PostSemEstado;