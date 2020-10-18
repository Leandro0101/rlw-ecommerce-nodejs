import styled from 'styled-components'

import Background from '../../assets/images/main/Background.png'
import BgPromotion from '../../assets/images/main/Promotion.png'

export const MainContainer = styled.div`
  width: 100%;
  height: 80vh;
  background: url(${Background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  `

export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;

    img {
      width: 15rem;
      margin-left: auto;
    }

    .title {
      margin-left: 2rem;

      h1 {
        font-size: 3.8rem;
        font-family: futura, sans-serif;
        font-weight: 700;
        font-style: italic;
        color: var(--color-text-primary);
      }

      p {
        font-family: futura, sans-serif;
        font-weight: 700;
        font-style: italic;
        color: var(--color-text-primary);

      }
    }
  }

  a {
    transition: 0.2s;
    padding: 0.8rem 2rem 0.8rem 2rem;
    font-family: futura, sans-serif;
    font-weight: 700;
    color: var(--color-text-primary);
    border-radius: 0.8rem;
    margin: auto;
    border: 0;
    margin-top: 2rem;
    text-decoration: none;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);
    -moz-box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);
    box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);

    :hover {
      transition: 0.5s;
      color: var(--color-text-base);
      background-color: var(--color-box-secoundary);
    }
  }

  `

export const ContainerOurTime = styled.div`
  width: 100%;
  padding: 10%;
  min-height: 80vh;
  background-color: var(--color-box-secoundary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    font-family: futura, sans-serif;
    font-weight: 700;
    color: var(--color-text-base2);
  }
  `

export const ContentOurTime = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  .block-content {
    max-width: 50rem;
    /* max-height:150px; */
    width: 100%;
    background-color: var(--color-box-primary);
    border-radius: 0.8rem;
    overflow: hidden;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);
    -moz-box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);
    box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);

    img {
      width: 100%;
    }

    div {
      padding: 0.8rem 2rem 0.8rem 2rem;

      h1 {
        font-size: 2rem;
        font-family: futura, sans-serif;
        font-weight: 700;
        color: var(--color-text-primary);
        text-align: center;
        margin-top: 1rem;
      }

      p {
        font-family: futura, sans-serif;
        text-align: justify;
        color: var(--color-text-base2);
        margin-top: 1.2rem;
        font-size: 1.2rem;
      }
    }
  }
`

export const AdProduct = styled.div`
  width: 100%;
  /* height: 80vh; */
  background-image: url(${BgPromotion});
  background-size: cover;
  background-repeat: no-repeat;

  div {
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10%;

    h1, h3, p, button {
      font-family: futura, sans-serif;
      color: var(--color-text-base2);
    }

    h1 {
      font-weight: 700;
      font-size: 8rem;
      font-style: italic;
    }

    h3 {
      max-width: 30rem;
    }

    p {
      margin-top: 1.6rem;
    }

    button {
      transition: 0.2s;
      border: 0;
      width: 20rem !important;
      padding: 0.8rem 2rem 0.8rem 2rem;
      background-color: var(--color-box-secoundary);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);
      -moz-box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);
      box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);
      border-radius: 0.4rem;
      margin-top: 0.2rem;

      :hover {
        transition: 0.5s;
        opacity: 0.6;
      }
    }
  }
`

export const ContainerFeedback = styled.div`
  width: 100%;
  padding: 10%;
  min-height: 80vh;
  background-color: var(--color-box-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    font-family: futura, sans-serif;
    font-weight: 700;
    color: var(--color-text-base2);
  }
`

export const ContentFeedback = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin-top: 3rem;
  align-items: center;
  justify-content: center;

  .block-feedback {
    max-width: 50rem;
    width: 100%;
    text-align: center;
    border-radius: 0.8rem;
    overflow: hidden;

    div {
      margin: auto;
      border-radius: 100%;
      max-width: 100%;
      width: 12rem;
      height: 12rem;
      background-color: var(--color-box-secoundary);
    }

    h3, span, p {
      font-family: futura, sans-serif;
    }

    h3 {
      font-size: 2rem;
      color: var(--color-text-base2);
      margin-top: 2rem;
    }

    span {
      color: #aaa;
      font-size: 1rem;
    }

    p {
      font-size: 1.2rem;
      text-align: justify;
      color: #ccc;
      margin-top: 1.2rem;
    }
  }
`

export const ContainerContact = styled.div`
  width: 100%;
  padding: 10%;
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .contact-left {
    display: flex;
    align-items:center;
    justify-content: center;
  }

  .contact-right {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 3rem;
      font-family: futura, sans-serif;
      font-weight: 700;
      font-style: italic;
      color: var(--color-text-primary);
    }

    form {
      width: 100%;
      margin-top: 2rem;

      .input-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
      }

      input, textarea {
        width: 100%;
        border-radius: 0.4rem;
        border: 0;
        padding: 1rem 1rem 1rem 0.6rem;
        background-color: var(--color-box-primary);
        -webkit-box-shadow: 2px 2px 5px 0px rgba(39,40,41,0.66);
        -moz-box-shadow: 2px 2px 5px 0px rgba(39,40,41,0.66);
        box-shadow: 2px 2px 5px 0px rgba(39,40,41,0.66);
      }

      textarea {
        min-height: 8rem;
        margin-top: 1.4rem;
        resize: none;
      }

      .button-contact {
        text-align: right;

        button {
          border-radius: 0.4rem;
          padding: 0.4rem 2rem 0.4rem 2rem;
          font-family: futura, sans-serif;
          margin-top: 1rem;
          border: none;
          font-weight: 700;
          color: var(--color-text-primary);
          background-color: #fff;
          -webkit-box-shadow: 2px 2px 5px 0px rgba(39,40,41,0.66);
          -moz-box-shadow: 2px 2px 5px 0px rgba(39,40,41,0.66);
          box-shadow: 2px 2px 5px 0px rgba(39,40,41,0.66);

          :hover {
            transition: 0.5s;
            color: var(--color-text-base);
            background-color: var(--color-box-secoundary);
          }
        }
      }
    }
  }
`
