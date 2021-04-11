import React, {useState} from "react"
import { Link,} from "gatsby"

import { FaBars} from 'react-icons/fa'
import { MdClose} from 'react-icons/md'
import {menuData} from '../data/MenuData';

import './styles/Header.css'

const Header = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <nav className="NavbarItems">
      <Link href="/" className="logo-link">
        <h1 className="navbar-logo">TRAVELETER</h1>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {clicked ? <MdClose css={`color: #077BF1`}/> : <FaBars css={`color: #F26A2E`}/>}
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {
          menuData.map((item, index) =>  {
            return (
              <li key={index}>
                <Link className="nav-links" to={item.link}>
                  {item.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Header
