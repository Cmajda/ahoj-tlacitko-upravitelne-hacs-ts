import { html, LitElement, css } from "lit";
import { state, customElement, property } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";

interface Config {
  type: string;
  header: string;
  entity: string;
}

@customElement("ahoj-tlacitko-upravitelne-hacs-ts-editor")
export class AhojTlacitkoUpravitelneHacsTsEditor extends LitElement {
  @state() private _config: Config = { type: 'custom:ahoj-tlacitko-upravitelne-hacs-ts', header: '', entity: '' };
  @property({ attribute: false }) public hass!: HomeAssistant;

  public setConfig(config: Config): void {
    this._config = config;
  }

  static styles = css`
    .table {
      display: table;
    }
    .row {
      display: table-row;
    }
    .cell {
      display: table-cell;
      padding: 0.5em;
    }
  `;

  render() {
    return html`
      <form class="table">
        <div class="row">
          <label class="label cell" for="header">Header:</label>
          <input
            @input="${this._handleChangedEvent}"
            class="value cell"
            id="header"
            .value="${this._config.header}"
          ></input>
        </div>
        <div class="row">
          <label class="label cell" for="entity">Entity:</label>
          <ha-entity-picker
            .hass="${this.hass}"
            .value="${this._config.entity}"
            @value-changed="${this._handleEntityChanged}"
            class="value cell"
            id="entity"
          ></ha-entity-picker>
        </div>
      </form>
    `;
  }

  private _handleChangedEvent(event: Event) {
    const target = event.target as HTMLInputElement;
    const newConfig = { ...this._config };

    if (target.id === "header") {
      newConfig.header = target.value;
    }

    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: newConfig }, bubbles: true, composed: true }));
  }

  private _handleEntityChanged(event: CustomEvent) {
    const newConfig = { ...this._config };
    newConfig.entity = event.detail.value;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: newConfig }, bubbles: true, composed: true }));
  }
}
