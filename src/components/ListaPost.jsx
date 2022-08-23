import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../api/api";


const ListaPost = () => {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    http.get(`/posts`)
    .then(res => setPosts(res.data))
  }, [])

  return(
    <section className="posts container">
      {posts.map((post)=>(
        <Link className={`cartao-posts cartao-post--${post.category}`}  to={`/posts/${post._id}`} key={post.id}>
          <article >
            <h3 className="cartao-post__titulo">
              {post.title}
            </h3>
            <p className="cartao-post__meta">
              {post.metadescription}
            </p>
            <img className="cartao-post__image" src={post.image} alt={post.metadescription}/>
          </article>
        </Link>
      ))}
    </section>
  )
}

export default ListaPost