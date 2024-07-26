import { AhojTlacitkoUpravitelneHacsTsScript } from "./card";
import { AhojTlacitkoUpravitelneHacsTsEditor } from "./editor";

customElements.define(
  "ahoj-tlacitko-upravitelne-hacs-ts",
  AhojTlacitkoUpravitelneHacsTsScript
);
customElements.define(
  "ahoj-tlacitko-upravitelne-hacs-ts-editor",
  AhojTlacitkoUpravitelneHacsTsEditor
);

declare global {
  interface Window {
    customCards: Array<{
      type: string;
      name: string;
      description: string;
    }>;
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "custom:ahoj-tlacitko-upravitelne-hacs-ts",
  name: "Toggle card with TypeScript",
  description: "Turn an entity on and off",
});
