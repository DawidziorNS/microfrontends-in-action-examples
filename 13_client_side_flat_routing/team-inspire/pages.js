class InspireHome extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>Witaj na stronie domowej!</h1>
      <strong>Oto trzy traktory:</strong>
      <ul>
        <li><a href="/product/eicher">Eicher</a></li>
        <li><a href="/product/porsche">Porsche</a></li>
        <li><a href="/product/fendt">Fendt</a></li>
      </ul>
    `;
  }
}

window.customElements.define("inspire-home", InspireHome);
