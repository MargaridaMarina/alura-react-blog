import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../api/api";
import '../assets/css/componentes/cartao.css'

const ListaReceitas = () => {

  const [Receitas, setReceitas] = useState([])

  useEffect(()=>{
    http.get(`/receitas`)
    .then(res => {
      setReceitas(res.data)
    })
  }, [])

  return(
    <section className="posts container flex">
      {Receitas.map((receita)=>(
        <Link className={`cartao-posts cartao-post--${receita.category_title}`}  to={`/Receitas/${receita.id}`}  key={receita.id}>
          <article>
            <h3 className="cartao-post__titulo">
              {receita.title}
            </h3>
            <p className="cartao-post__meta">
              {receita.description}
            </p>
            <img className="cartao-post__image" src={receita.image} alt={receita.description}/>
          </article>
        </Link>
      ))}
    </section>
  )
}

export default ListaReceitas