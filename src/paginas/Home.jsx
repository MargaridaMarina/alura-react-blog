import React from 'react'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina"></h2>
      </div>
      <ListaCategorias url={'/categorias'}/>
      <ListaPost url={'/posts'}/>
    </main>
  )
}

export default Home
