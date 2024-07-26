import { html, LitElement } from "lit";
import { state, customElement, property } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";
import { styles } from "./card.styles";

interface Config extends LovelaceCardConfig {
  header: string;
  entity: string;
}

@customElement("ahoj-tlacitko-upravitelne-hacs-ts")
export class AhojTlacitkoUpravitelneHacsTsScript extends LitElement {
  @state() private _header = "";
  @state() private _entity = "";
  @state() private _name = "";
  @state() private _state?: any;
  @state() private _status = "";
  @property({ attribute: false }) private _hass?: HomeAssistant;

  public setConfig(config: Config): void {
    this._header = config.header === "" ? "" : config.header;
    this._entity = config.entity;
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    this._state = hass.states[this._entity];
    if (this._state) {
      this._status = this._state.state;
      let fn = this._state.attributes.friendly_name;
      this._name = fn ? fn : this._entity;
    }
  }

  render() {
    let content;
    if (!this._state) {
      content = html`<p class="error">${this._entity} is unavailable.</p>`;
    } else {
      content = html`
        <dl class="dl">
          <dt class="dt">${this._name}</dt>
          <dd class="dd" @click="${this.doToggle}">
            <span class="toggle ${this._status}">
              <span class="button"></span>
            </span>
            <span class="value">${this._status}</span>
          </dd>
        </dl>
      `;
    }
    return html`
      <ha-card header="${this._header}">
        <div class="card-content">${content}</div>
      </ha-card>
    `;
  }

  doToggle() {
    if (this._hass && this._entity) {
      this._hass.callService("input_boolean", "toggle", {
        entity_id: this._entity,
      });
    }
  }

  static getConfigElement() {
    return document.createElement("ahoj-tlacitko-upravitelne-hacs-ts-editor");
  }

  static getStubConfig() {
    return {
      type: "custom:ahoj-tlacitko-upravitelne-hacs-ts",
      entity: "input_boolean.tcts",
      header: "",
    };
  }

  static styles = styles;
}
