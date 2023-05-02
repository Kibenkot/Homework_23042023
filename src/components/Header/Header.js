import React from 'react'
import s from './Header.module.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'
import {useLocation} from 'react-router-dom'


function Header() {

  const [isTopMenu, setTopMenu] = useState(false)
  const {pathname} = useLocation()

  // console.log('Location----', window.location);

  return (
    <div className={s.header_wrapper}>
       <div className={s.logo}></div>
       <div className={isTopMenu ? [s.menu_wrapper, s.active].join(' ') : [s.menu_wrapper]}>
            <a className={pathname === '/' ? [s.menu_a, s.color].join(' ') : [s.menu_a]} href='/'>Home</a>
            <a className={pathname === '/works' ? [s.menu_a, s.color].join(' ') : [s.menu_a]} href='/works'>Works</a>
            <a className={pathname === '/blog' ? [s.menu_a, s.color].join(' ') : [s.menu_a]} href='/blog'>Blog</a>
            <a className={pathname === '/contact' ? [s.menu_a, s.color].join(' ') : [s.menu_a]} href='/contact'>Contact</a>
       </div>
            <div onClick={()=>setTopMenu(!isTopMenu)} className={s.mobile_btn}>
              {
                isTopMenu ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35} />
              }
            </div>
    </div>
  )
}

export default Header