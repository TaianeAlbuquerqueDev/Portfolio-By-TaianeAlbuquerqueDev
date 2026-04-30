class CardTech extends HTMLElement {
  connectedCallback() {
    const nome  = this.getAttribute('nome');
    const icone = this.getAttribute('icone');

    this.innerHTML = `
      <div class="card h-100 text-center p-3" style="width: 10rem;">
        <img src="${icone}" alt="Icone ${nome}" style="height: 60px; object-fit: contain;">
        <div class="card-body p-2">
          <h6 class="card-title mb-0">${nome}</h6>
        </div>
      </div>
    `;
  }
}

customElements.define('card-tech', CardTech);