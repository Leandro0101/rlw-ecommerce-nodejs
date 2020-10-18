import React from 'react'
import { useState } from 'react'
import { FaShoppingCart, FaBell, FaBars, FaUser, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import * as Styled from './styles'

function Menu(props) {
  const [showMenu, setShowMenu] = useState(false);

  const NavLink = ({ ...rest }) => {
    console.log(Link);
    return <Link {...rest} onClick={() => setShowMenu(!showMenu)} />
  }

  return (
    <>
      <Styled.Nav>

        <Styled.BackMenu show={showMenu} onClick={() => setShowMenu(!showMenu)}></Styled.BackMenu>

        <div className="actions">
          <ul>
            <li className="item">
              <button onClick={() => setShowMenu(!showMenu)} className="bars"><FaBars size={22} /></button>
            </li>
            <li className="item">
              <FaShoppingCart size={22} color="var(--color-box-primary)" />

              <ul>
                <li>Opção 1</li>
                <li>Opção 2</li>
              </ul>
            </li>
            <li className="item">
              <FaBell size={22} color="var(--color-box-primary)" />

              <ul>
                <div className="notification">
                  <h5>Notificações</h5>

                  <div className="content">
                    <div className="notification-item">
                      <h6>Imperdível venha já</h6>
                      <p>Olá cara, venha já Olá cara, venha já Olá cara, venha já Olá cara, venha já Olá cara, venha já Olá cara, venha já Olá cara, venha já</p>
                    </div>
                    <div className="notification-item">
                      <h6>Imperdível venha já</h6>
                      <p>Olá cara, venha já...</p>
                    </div>
                    <div className="notification-item">
                      <h6>Imperdível venha já</h6>
                      <p>Olá cara, venha já...</p>
                    </div>
                    <div className="notification-item">
                      <h6>Imperdível venha já</h6>
                      <p>Olá cara, venha já...</p>
                    </div>
                  </div>

                  <footer>
                    <button>Marcar todas como lidas</button>
                    <a href="">Ver todas</a>
                  </footer>
                </div>
              </ul>

            </li>
            <li className="item">
              <FaUser size={22} color="var(--color-box-primary)" />
            </li>
          </ul>
        </div>

      </Styled.Nav>

      <Styled.NavNavigation show={showMenu}>
        <div className="div-logo">
          <h1>Actius</h1>
        </div>

        <div className="links">
          <NavLink to="/">Página Inicial</NavLink>
          <NavLink to="#">Produtos</NavLink>
          <NavLink to="#">Contato</NavLink>
          <NavLink to="/about">Quem somos</NavLink>
        </div>

        <div className="sociais">
          <Link>
            <FaFacebook size={25} />
          </Link>
          <Link>
            <FaTwitter size={22} />
          </Link>
          <Link>
            <FaInstagram size={22} />
          </Link>
        </div>
      </Styled.NavNavigation>

      {props.children}
    </>
  )
}

export default Menu;
