import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const aoDigitado = (evento) => {
        props.onChange(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <textarea className={props.classe} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}`}/>
        </div>
    )
}

export default CampoTexto