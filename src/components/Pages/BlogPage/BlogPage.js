import React from 'react'
import s from './BlogPage.module.css'
import Post from '../../Post/Post'



function BlogPage({postsBlog, getDateToDisplay}) {
  return (
    <div className={s.wrapper_blog}>
      <div className={s.container_title}>
        <h2>Blog</h2>
      </div>
      <div className={s.container_blogs}>
      {
        postsBlog.map(el => <Post key={el.id} {...el} getDateToDisplay={getDateToDisplay} />)
      }
      </div>
    </div>
  )
}

export default BlogPage