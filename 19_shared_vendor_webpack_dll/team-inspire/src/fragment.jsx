import React from "react";
import ReactDOM from "react-dom";
import Recommendations from "./Recommendations";
import "./fragment.css";

class InspireRecommendations extends HTMLElement {
  static get observedAttributes() {
    return ["sku"];
  }
  connectedCallback() {
    this.setAttribute("data-version", `Zespół Inspiracji (React v${React.version})`);
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const sku = this.getAttribute("sku");
    ReactDOM.render(<Recommendations sku={sku} />, this);
  }
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.el);
  }
}
window.customElements.define(
  "inspire-recommendations",
  InspireRecommendations
);

console.log(`Zespół Inspiracji - React v${React.version}`);
