const prices = {
  porsche: 66,
  fendt: 54,
  eicher: 58,
};

class CheckoutBuy extends HTMLElement {
  connectedCallback() {
    const sku = this.getAttribute("sku");
    this.innerHTML = `
      <button type="button">Kup za ${prices[sku]} PLN</button>
    `;
    this.querySelector("button").addEventListener("click", () => {
      alert("Dziękujemy! ❤");
    });
  }
}
window.customElements.define("checkout-buy", CheckoutBuy);

console.log("Kod JavaScript Zespołu Zakupów jest gotowy.");
