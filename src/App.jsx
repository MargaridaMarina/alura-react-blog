import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Formulario from './components/Formulario'
import PostsPorSubcategoria from './paginas/PostsPorSubcategoria'
import ListaCategorias from './components/ListaCategorias'
import ListaPost from './components/ListaPost'
import Posts from './paginas/Posts'
import Sobre from './paginas/Sobre'
import ListaSubcategorias from './components/ListaSubcategorias'

function App() {

  return (
  <>
    <Router>
      <Cabecalho/>
      <Switch>
        <Route exact path='/posts'>
          <ListaCategorias/>
          <ListaPost/>
        </Route>
        {/* <Route path='/sobre'>
          <Sobre/>
        </Route> */}
        <Route path='/categorias/:categoriaTitle'>
          <ListaCategorias/>
          <ListaSubcategorias/>
          <ListaPost/>
        </Route>
        <Route path='/posts/subcategorias/:subcategoriaTitle'>
          <PostsPorSubcategoria/>
        </Route>
        <Route path='/posts/:id'>
          <Posts/>
        </Route>
        <Route path='/post/novo'>
          <Formulario isNew/>
        </Route>
        <Route path='/editarpost/:id'>
          <Formulario/>
        </Route>
        <Route>
          <Pagina404/>
        </Route>
      </Switch>
    </Router>
  </>
  )
}

export default App
