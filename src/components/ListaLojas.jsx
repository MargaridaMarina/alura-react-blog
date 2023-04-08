import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../api/api";
import '../assets/css/componentes/cartao.css'

const ListaLojas = () => {

  const [lojas, setLojas] = useState([])

  useEffect(()=>{
    http.get(`/lojas`)
    .then(res => {
      setLojas(res.data)
      console.log('RESPOSTA', res.data)
    })
  }, [])

  return(
    <section className="posts container flex">
      {lojas.map((loja)=>(
        <Link className={`cartao-posts cartao-post--${loja.category_title}`}  to={`/Lojas/${loja.id}`}  key={loja.id}>
          <article>
            <h3 className="cartao-post__titulo">
              {loja.title}
            </h3>
            <p className="cartao-post__meta">
              {loja.description}
            </p>
            <img className="cartao-post__image" src={loja.image} alt={loja.description}/>
          </article>
        </Link>
      ))}
    </section>
  )
}

export default ListaLojas