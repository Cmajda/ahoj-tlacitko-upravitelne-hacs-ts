import { css, html, LitElement } from "lit";
import { state } from "lit/decorators/state";

// Definujte typ pro konfiguraci
interface Config {
  header: string;
  entity: string;
}

export class AhojTlacitkoUpravitelneHacsTsEditor extends LitElement {
  @state() private _config: Config = { header: '', entity: '' };

  // Specifikujte typ pro parametr
  setConfig(config: Config) {
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
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="header" .value="${this._config.header}"></input>
                </div>
                <div class="row">
                    <label class="label cell" for="entity">Entity:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="entity" .value="${this._config.entity}"></input>
                </div>
            </form>
        `;
  }

  // Typ pro event parameter
  handleChangedEvent(changedEvent: Event) {
    const target = changedEvent.target as HTMLInputElement;
    // this._config is readonly, copy needed
    const newConfig = { ...this._config };
    if (target.id === "header") {
      newConfig.header = target.value;
    } else if (target.id === "entity") {
      newConfig.entity = target.value;
    }
    const messageEvent = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(messageEvent);
  }
}
