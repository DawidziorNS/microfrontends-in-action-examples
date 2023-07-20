class CheckoutBuy extends HTMLElement {
  static get observedAttributes() {
    return ["sku", "edition"];
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const sku = this.getAttribute("sku");
    const edition = this.getAttribute("edition") || "standard";
    this.innerHTML = `<div>Kup ${sku} (${edition})</div>`;
  }
}
window.customElements.define("checkout-buy", CheckoutBuy);

class CheckoutMinicart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>Testowy Minikoszyk</div>`;
  }
}
window.customElements.define("checkout-minicart", CheckoutMinicart);

class InspireRecommendations extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>Testowe Polecane Produkty</div>`;
  }
}
window.customElements.define(
  "inspire-recommendations",
  InspireRecommendations
);
