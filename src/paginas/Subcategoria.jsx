import React from "react";
import { useParams } from "react-router-dom";
import ListaPost from "../components/ListaPost";

const Subcategoria = () => {
  const { subcategoria } = useParams()
  console.log('Subcategorias', subcategoria)
  return(
    <ListaPost url={`/posts?subcategoria=${subcategoria}`}/>  
  )
}

export default Subcategoria