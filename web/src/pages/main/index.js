import React from 'react'
import { Link } from 'react-router-dom'

import * as Styled from './styles'
import Logo from '../../assets/images/logo.png'
import TeacherYoga from '../../assets/images/main/ProfessoraDeYoga.png'
import Personal from '../../assets/images/main/Personal.png'
import StrongMen from '../../assets/images/main/StrongMen.png'
import ShoeWheight from '../../assets/images/main/sapatos.png'

function Main() {

  return (
    <>
      <Styled.MainContainer>
        <Styled.Main>

          <div>
            <img src={Logo} alt="" />

            <div className="title">
              <h1>Actius</h1>
              <p>A ação para uma vida saudável</p>
            </div>
          </div>

          <Link to="/about">Ver mais</Link>

        </Styled.Main>

        <Styled.ContainerOurTime>
          <h1>Nosso time</h1>

          <Styled.ContentOurTime>
            <div className="block-content">
              <img src={Personal} alt="" />

              <div>
                <h1>Fabio Vicelino</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum similique a adipisci deleniti vero hic, asperiores perspiciatis ipsam voluptates et totam dolor dolorum praesentium quaerat facere possimus id unde?</p>
              </div>
            </div>

            <div className="block-content">
              <img src={TeacherYoga} alt="" />

              <div>
                <h1>Luiza Cornela</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum similique a adipisci deleniti vero hic, asperiores perspiciatis ipsam voluptates et totam dolor dolorum praesentium quaerat facere possimus id unde?</p>
              </div>
            </div>

            <div className="block-content">
              <img src={StrongMen} alt="" />

              <div>
                <h1>Mario Barcela</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum similique a adipisci deleniti vero hic, asperiores perspiciatis ipsam voluptates et totam dolor dolorum praesentium quaerat facere possimus id unde?</p>
              </div>
            </div>
          </Styled.ContentOurTime>
        </Styled.ContainerOurTime>

        <Styled.AdProduct>
          <div>
            <h1>15%</h1>
            <h3>DE DESCONTO EM SUPLEMENTOS DA LINHA NATURAL</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum nesciunt molestiae quis voluptate rem dolore velit necessitatibus, maiores quibusdam maxime ratione minus recusandae magnam nisi optio mollitia ex non?</p>
            <button>Compre Agora</button>
          </div>
        </Styled.AdProduct>

        <Styled.ContainerFeedback>
          <h1>Feedback</h1>

          <Styled.ContentFeedback>
            <div className="block-feedback">
              <div>
                <img src="" alt="" />
              </div>

              <h3>Werick Nalyson</h3>
              <span>Fortaleza, CE</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, animi tenetur. Deserunt eos voluptas debitis expedita numquam impedit eius delectus. Repellat perspiciatis eum asperiores quo fugit esse nihil illo aspernatur.</p>
            </div>

            <div className="block-feedback">
              <div>
                <img src="" alt="" />
              </div>

              <h3>Leandro Lima</h3>
              <span>Fortaleza, CE</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, animi tenetur. Deserunt eos voluptas debitis expedita numquam impedit eius delectus. Repellat perspiciatis eum asperiores quo fugit esse nihil illo aspernatur.</p>
            </div>

            <div className="block-feedback">
              <div>
                <img src="" alt="" />
              </div>

              <h3>Rodrigo Vieira</h3>
              <span>Fortaleza, CE</span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, animi tenetur. Deserunt eos voluptas debitis expedita numquam impedit eius delectus. Repellat perspiciatis eum asperiores quo fugit esse nihil illo aspernatur.</p>
            </div>
          </Styled.ContentFeedback>
        </Styled.ContainerFeedback>

        <Styled.ContainerContact>
          <div className="contact-left">
            <img src={ShoeWheight} alt="" width="280rem" />
          </div>
          <div className="contact-right">
            <h1>Contact-nos</h1>

            <form action="">
              <div className="input-group">
                  <input name="name" placeholder="Digite seu nome" />
                  <input type="email" name="email" placeholder="Digite seu email" />
              </div>

              <textarea name="message" placeholder="Digite sua mensagem" ></textarea>

              <div className="button-contact">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </Styled.ContainerContact>

      </Styled.MainContainer>
    </>
  )
}










export default Main


  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await api.get('/users/address')
  //         .then(response => {
  //           console.log(response.data);
  //         });
  //     } catch (error) {
  //       if (error.response.status === 404) {
  //         console.log("Nenhum endereço encontrado");
  //       }
  //     }
  //   })()
  // }, []);




