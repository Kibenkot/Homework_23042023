import React from 'react'
import s from './Post.module.css'


function Post({getDateToDisplay,title, date, tagss, description }) {
  return (
    <div className={s.wrapper_post}>  
                <div className={s.post_item}>
                <h3>{title}</h3>
                <div className={s.container_date_theme}>
                    <div className={s.date}>
                    {getDateToDisplay(date)}
                    </div>
                    <div className={s.theme}>
                        {`${tagss[0]}, ${tagss[1]}`}
                    </div>
                </div>
                <p>{description}</p>
            </div>
             
    </div>
  )
}

export default Post