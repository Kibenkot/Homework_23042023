import React from 'react'
import s from './ContactsPage.module.css'
import {FaPhoneAlt} from 'react-icons/fa'
import {FaSkype} from 'react-icons/fa'
import {MdLocalPostOffice} from 'react-icons/md'
import {RiHome2Fill} from 'react-icons/ri'



function ContactsPage() {
  return (
    <div className={s.wrapper_contacts}>
      <div className={s.container_contacts}>
        <div className={s.container_logo}>
          <img className={s.img_contacts} src='https://bilimedu.kz/uploads/contact-bg.png' alt='img_contacts'/>
        </div>
        <div className={s.container_info}>
          <h1>My contacts:</h1>
          <div className={s.phone}>
          <FaPhoneAlt className={s.icon} />
          <p>+6103902652522</p>
          </div>
          <div className={s.skype}>
            <FaSkype className={s.icon} />
            <p>BradshawJohn.info</p>
          </div>
          <div className={s.mail}>
            <MdLocalPostOffice className={s.icon}/>
            <p>j.bradshaw@gmail.com</p>
          </div>
          <div className={s.address}>
            <RiHome2Fill className={s.icon}/>
            <p>775 Westminster Avenue Brooklyn, NY 11230</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactsPage