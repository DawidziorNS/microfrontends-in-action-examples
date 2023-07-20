class CheckoutCart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="/">&lt; Strona domowa</a> -
      <a href="/checkout/pay">Płatność &gt;</a>
      <h1>🛒 Koszyk</h1>
      <a href="/product/eicher">
        Eicher Diesel 215/16<br>
        <img src="https://mi-fr.org/img/eicher.svg" width="100">
      </a>`;
  }
}
window.customElements.define("checkout-cart", CheckoutCart);

class CheckoutPay extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="/checkout/cart">&lt; Koszyk</a> -
      <a href="/checkout/success">Kup teraz &gt;</a>
      <h1>💵 Płatność</h1>`;
  }
}
window.customElements.define("checkout-pay", CheckoutPay);

class CheckoutSuccess extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="/">&lt; Strona domowa &gt;</a>
      <h1>🥳 Sukces</h1>`;
  }
}
window.customElements.define("checkout-success", CheckoutSuccess);
