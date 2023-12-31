const prices = {
  porsche: { standard: 66, platinum: 966 },
  fendt: { standard: 54, platinum: 945 },
  eicher: { standard: 58, platinum: 958 },
};

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
    this.innerHTML = `
      <button type="button">Kup za ${prices[sku][edition]} PLN</button>
    `;
    this.querySelector("button").addEventListener("click", () => {
      alert("Dziękujemy! ❤️");
    });
  }
}
window.customElements.define("checkout-buy", CheckoutBuy);
