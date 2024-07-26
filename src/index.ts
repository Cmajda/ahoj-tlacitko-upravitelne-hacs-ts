import { AhojTlacitkoUpravitelneHacsTsScript } from "./card";
import { AhojTlacitkoUpravitelneHacsTsEditor } from "./editor";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

customElements.define("ahoj-tlacitko-upravitelne-hacs-ts", AhojTlacitkoUpravitelneHacsTsScript);
customElements.define(
  "ahoj-tlacitko-upravitelne-hacs-ts-editor",
  AhojTlacitkoUpravitelneHacsTsEditor
);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ahoj-tlacitko-upravitelne-hacs-ts",
  name: "toggle card with TypeScript",
  description: "Turn an entity on and off",
});