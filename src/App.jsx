import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'
import PostCategoria from './paginas/PostCategoria'
import Formulario from './components/Formulario'

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
        <Route path='/categorias/:id'>
          <PostCategoria/>
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
