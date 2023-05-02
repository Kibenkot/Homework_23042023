import React from 'react'
import s from './Footer.module.css'
import fb from '../Footer/imagesFooter/fb.png'
import vector from '../Footer/imagesFooter/vector.png'
import insta from '../Footer/imagesFooter/insta.png'
import linkedin from '../Footer/imagesFooter/linkedin.png'


function Footer() {
  return (
    <div className={s.wrapper}>
        <div className={s.container_imgs}>
            <img src={fb} alt='fb'/>
            <img src={insta} alt='insta'/>
            <img src={vector} alt='vector'/>
            <img src={linkedin} alt='linkedin'/>
        </div>
        <div>
            <p>Copyright ©2020 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer