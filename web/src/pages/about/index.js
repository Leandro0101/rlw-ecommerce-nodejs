import React from 'react'

import Header from '../../Components/Header'

import about1 from '../../assets/imagens/about1.png'
import about2 from '../../assets/imagens/about2.png'
import './styles.css'

function About() {
  return (
    <div className="container-fluid">
      <Header title="Sobre nós" />

      <section className="section-about row mt-2">
        <div className="bio col-md-6">
          <h1>ESTAMOS A NOVE ANOS NO MERCADO</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            autem quis, corrupti dolorem neque accusamus aut blanditiis quos hic
            praesentium repudiandae non, ipsum enim expedita eum. Incidunt
            quidem earum commodi?
          </p>
        </div>

        <div className="image col-md-6 row">
          <div className="img">
            <div className="color-top"></div>
            <img className="img-fluid" src={about1} alt="" />
          </div>
          <div className="img">
            <div className="color-top"></div>
            <img className="img-fluid" src={about2} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
