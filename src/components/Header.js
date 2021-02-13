import React from 'react'; /* IMPORTE COMO SE FOSSE UM COMPONENTE, INVOQUE LÁ EM BAIXO { LOGO } */

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 class="left">G.Petry</h1>

        <nav class="middle">
          <ul>
            <li><a href="#">Sobre mim</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Fale comigo</a></li>
          </ul>
        </nav>

        <div class="right">
          <div class="outer button">
            <button>Blog</button>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;