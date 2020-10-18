import styled from 'styled-components'

export const BackMenu = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  width: 100vw;
  height: 100vh;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  transition: 0.4s;
  display:  ${props => props.show ? 'block' : 'none' };
  z-index: -1;
`

export const Nav = styled.nav`
  width: 100%;
  background-color: transparent;
  padding: 1.2rem;
  display: flex;
  position: fixed;
  z-index: 999999999;

  button.bars {
    background: transparent;
    border: 0;
    color: var(--color-box-primary);
    outline: none;
  }

  div.actions {
    width: 100%;
    margin-left: auto;

    ul {
      list-style-type: none;
      display: flex;

      li.item {
        position: relative;
        margin-left: auto;
        background-color: #fff;
        border-radius: 50%;
        padding: 1rem;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);
        -moz-box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);
        box-shadow: 0px 0px 10px 0px rgba(55,54,61,0.62);

        + li {
          margin-left: 1.2rem;
        }

        ul {
          background-color: #fff;
          display: none;
          position: absolute;
          right: 0;
          min-width: 24rem;
          z-index: 1;
          margin-top: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.4rem;
          overflow: hidden;

          h5, h6 {
            font-family: futura, sans-serif;
            font-weight: 700;
          }

          h5 {
            background-color: #f2f2f2;
            padding: 0.8rem 1rem 0.8rem 1rem;
          }

          div.content {
            padding: 0rem 1rem 0rem 1rem;
            max-height: 20rem;
            overflow-y: scroll;

            .notification-item {
              padding: 1rem;
              background-color: var(--color-background);
              border-radius: 0.2rem;

              + .notification-item {
                margin-top: 0.4rem;
              }

              p {
                max-width: 24rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
          footer {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid #ccc;
            padding: 1rem;
            margin-top: 1rem;

            button {
              border: none;
              background-color: transparent;
              color: var(--color-text-primary);
            }

            a {
              text-decoration: none;
              border: 1px solid currentcolor;
              padding: 0.4rem 0.8rem 0.4rem 0.8rem;
            }
          }
        }
      }

      li.item:hover ul {
        display: block;
      }
    }
  }
`

export const NavNavigation = styled.div`
  z-index: 999999999;
  min-width: 20rem;
  background-color: #fff;
  height: 100vh;
  position: fixed;
  opacity: ${props => props.show ? '1' : '0' };
  transition: 0.4s;
  transform: ${props => props.show ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)' };

  .div-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0.5rem 1rem 0.5rem;
  }

  .links {
    width: 100%;
    display: flex;
    flex-direction: column;

    a {
      width: 100%;
      padding: 1rem 0.5rem 1rem 0.5rem;
      text-decoration: none;
      color: var(--color-text-primary);

      :nth-child(1),
      + a {
        border-top: 1px solid var(--color-text-base2);
      }

      :nth-child(4) {
        border-bottom: 1px solid var(--color-text-base2);
      }

      + a {
        /* border-top: 1px solid var(--color-text-primary); */
      }

      :hover {
        background-color: var(--color-text-primary);
        color: #fff;
      }
    }
  }

  .sociais {
    width: 100%;
    padding: 1rem 0.5rem 1rem 0.5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 1rem;

    a {
      color: var(--color-text-primary);
      border-radius: 50%;
      padding: 0.8rem;
      background-color: var(--color-text-base2);

      + a {
        margin-left: 0.4rem;
      }
    }
  }
`
