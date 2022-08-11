import './Botao.css'

const Botao = (props) => {
  return (<button className='botao' onClick={props.onClick}>
    {props.text}
  </button>)
}

export default Botao