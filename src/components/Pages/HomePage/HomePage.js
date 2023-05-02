import React from 'react'
import s from './HomePage.module.css'
import foto from './imagesHomePage/foto.png'
import Work from '../../Work/Work';
import Post from '../../Post/Post';
import {Link} from 'react-router-dom'



function HomePage({newPosts, newWorks, getDateToDisplay}) {


  return (
    <div className={s.wrapper_home}>

      <div className={s.wrapper_about_me}>
        <div className={s.container_about_me}>
          <h2>Hi, I am John,</h2>
          <h2>Creative Technologist</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <button>Download Resume</button>
        </div>
        <div className={s.container_foto}>
          <img src={foto} alt='foto'/>
        </div>
      </div>

      <div className={s.wrapper_posts}>
        <div>
          <div className={s.post_navigation}>
            <p>Recent posts</p>
            <Link to ='/blog'>
            <a>View all</a>
            </Link>
          </div>
          <div className={s.container_posts}>
            {
            newPosts.map(el => <Post getDateToDisplay={getDateToDisplay} key={el.id} {...el}/>  
           )}
          </div>
       
        </div>   
      </div>


      <div className={s.wrapper_works}>
        <div className={s.container_title}>Featured works</div>
        {
          newWorks.map(el => <Work key={el.id} 
                                   {...el}
          />)
        }
      </div>
    </div>
  )
}

export default HomePage