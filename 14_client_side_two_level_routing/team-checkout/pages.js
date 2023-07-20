const routes = {
  "/checkout/cart": () => `
    <a href="/">&lt; Strona domowa</a> -
    <a href="/checkout/pay">Płatność &gt;</a>
    <h1>🛒 Koszyk</h1>
    <a href="/product/eicher">
      Eicher Diesel 215/16<br>
      <img src="https://mi-fr.org/img/eicher.svg" width="100">
    </a>`,
  "/checkout/pay": () => `
    <a href="/checkout/cart">&lt; Koszyk</a> -
    <a href="/checkout/success">Kup teraz &gt;</a>
    <h1>💵 Płatność</h1>`,
  "/checkout/success": () => `
    <a href="/">&lt; Strona domowa &gt;</a>
	<h1>🥳 Sukces</h1>`
};

class CheckoutPages extends HTMLElement {
  connectedCallback() {
    console.log("checkout-pages connectedCallback");
    this.render(window.location);
    this.unlisten = window.appHistory.listen(location => {
      console.log("checkout-pages appHistory.listen");
      this.render(location);
    });
  }
  render(location) {
    console.log("Zmiana adresu (drugi poziom / checkout)");
    const route = routes[location.pathname];
    if (route) {
      this.innerHTML = route();
    }
  }
  disconnectedCallback() {
    console.log("checkout-pages disconnectedCallback");
    this.unlisten();
  }
}

window.customElements.define("checkout-pages", CheckoutPages);
