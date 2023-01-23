import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'
import Formulario from './components/Formulario'
import PostsPorSubcategoria from './paginas/PostsPorSubcategoria'
import ListaCategorias from './components/ListaCategorias'
import ListaSubcategorias from './components/ListaSubcategorias'
import ListaPost from './components/ListaPost'

function App() {

  return (
  <>
    <Router>
      <Cabecalho/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/sobre'>
          <Sobre/>
        </Route>
        <Route path='/categorias/:categoriaTitle'>
          <ListaCategorias/>
          <ListaSubcategorias/>
          <ListaPost/>
        </Route>
        <Route path='/posts/subcategorias/:subcategoriaTitle'>
          <PostsPorSubcategoria/>
        </Route>
        <Route path='/posts/:id'>
          <Post/>
        </Route>
        <Route path='/novopost'>
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
