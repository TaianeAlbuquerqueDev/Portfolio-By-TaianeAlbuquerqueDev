class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark minha-nav" >
        <div class="container">
          <a class="navbar-brand logo" href="#">Meu Portfólio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item ">
                <a class="nav-link" href="https://github.com/TaianeAlbuquerqueDev" target="_blank">GitHub</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="mailto:taiane.albuquerque.1994@gmail.com" target="_blank">Email</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="https://www.linkedin.com/in/taiane-albuquerque-78b029175" target="_blank">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
    }
}

customElements.define('nav-bar', Navbar);
