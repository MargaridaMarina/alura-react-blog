import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = (props) => {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [markdown, setMarkdown] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPostCadastrado({
            titulo,
            descricao,
            imagem,
            markdown
        })
        setTitulo('')
        setDescricao('')
        setImagem('')
        setMarkdown('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                {/* <h2>Preencha os dados para criar o card do colaborador</h2> */}
                <CampoTexto 
                    obrigatorio={true} 
                    label="Titulo" 
                    placeholder="Digite o título do artigo"
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Descricao" 
                    placeholder="Digite uma breve descrição do artigo" 
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                />
                <Botao 
                    texto="Cancel"
                />
                <Botao 
                    texto="Save"
                />
            </form>
        </section>
    )
}

export default Formulario