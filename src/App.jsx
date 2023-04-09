import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Formulario from './components/Formulario'
import PostsPorSubcategoria from './paginas/PostsPorSubcategoria'
import ListaCategorias from './components/ListaCategorias'
import ListaPosts from './components/ListaPosts'
import Post from './paginas/Post'
import ListaSubcategorias from './components/ListaSubcategorias'
import ListaLojas from './components/ListaLojas'
import ListaReceitas from './components/ListaReceitas'
import LojasPorSubcategoria from './paginas/LojasPorSubcategoria'
import Loja from './paginas/Loja'
import Sobre from './paginas/Sobre'
import Receita from './paginas/Receita'
import ReceitasPorSubcategoria from './paginas/ReceitasPorSubcategoria'


function App() {

  return (
  <>
    <Router>
      <Cabecalho/>
      <Switch>
        <Route exact path='/posts'>
          <ListaCategorias origem='posts'/>     
          <ListaSubcategorias origem='posts'/>
          <ListaPosts/>
        </Route>
        <Route exact path='/categorias/:categoriaTitle'>
          <ListaCategorias origem='posts'/>     
          <ListaSubcategorias origem='posts'/>
        </Route>
        <Route exact path='/posts/subcategorias/:subcategoriaTitle'>
          <PostsPorSubcategoria/>
        </Route>
        <Route exact path='/posts/:id'>
          <Post/>
        </Route>
        <Route exact path='/editarPost/:id'>
          <Formulario/>
        </Route>
        <Route exact path='/lojas'>
          <ListaCategorias origem='lojas'/>         
          <ListaSubcategorias origem='lojas'/>
          <ListaLojas/>
        </Route>
        <Route exact path='/lojas/subcategorias/:subcategoriaTitle'>
          <LojasPorSubcategoria/>
        </Route>
        <Route exact path='/lojas/:id'>
          <Loja/>
        </Route>
        <Route exact path='/loja/nova'>
          <Formulario isNew/>
        </Route>
        <Route exact path='/editarLoja/:id'>
          <Formulario/>
        </Route>
        <Route exact path='/receitas'>
          <ListaCategorias origem='receitas'/>         
          <ListaSubcategorias origem='receitas'/>
          <ListaReceitas/>
        </Route>
        <Route exact path='/receitas/subcategorias/:subcategoriaTitle'>
          <ReceitasPorSubcategoria/>
        </Route>
        <Route exact path='/receitas/:id'>
          <Receita/>
        </Route>
        <Route exact path='/receitas/nova'>
          <Formulario isNew/>
        </Route>
        <Route exact path='/editarReceita/:id'>
          <Formulario/>
        </Route>
        <Route exact path='/sobre'>
          <Sobre/>
        </Route>
        <Route exact path='/post/novo'>
          <Formulario isNew/>
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
