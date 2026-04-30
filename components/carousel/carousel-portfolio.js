class CarouselPortfolio extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6"></button>
        </div>

        <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
            <img src="../images/0.jpeg" class="d-block w-100" style="height: 450px; object-fit: contain; background-color: #ffffff; padding: 20px;">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <img src="../images/1.jpeg" class="d-block w-100" style="height: 450px; object-fit: contain; background-color: #ffffff; padding: 20px;">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div class="carousel-item">
            <img src="../images/2.jpeg" class="d-block w-100" style="height: 450px; object-fit: contain; background-color: #ffffff; padding: 20px;">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div class="carousel-item">
            <img src="../images/3.jpeg" class="d-block w-100" style="height: 450px; object-fit: contain; background-color: #ffffff; padding: 20px;">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div class="carousel-item">
            <img src="../images/4.jpeg" class="d-block w-100" style="height: 450px; object-fit: contain; background-color: #ffffff; padding: 20px;">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div class="carousel-item">
            <img src="../images/5.jpeg" class="d-block w-100" style="height: 450px; object-fit: contain; background-color: #ffffff; padding: 20px;">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div class="carousel-item">
            <img src="../images/6.jpeg" class="d-block w-100" style="height: 450px; object-fit: contain; background-color: #ffffff; padding: 20px;">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>

        </div> 

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" sty>
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>
    `;
    }
}

customElements.define('carousel-portfolio', CarouselPortfolio);