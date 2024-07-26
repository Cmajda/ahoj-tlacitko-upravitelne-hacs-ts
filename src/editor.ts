import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('my-card-editor')
export class AhojTlacitkoUpravitelneHacsTsEditor extends LitElement {
  @property({ type: Object }) config: any = {};

  render() {
    return html`
      <div>
        <ha-config-section>
          <div class="card-config">
            <paper-input
              label="Header"
              .value=${this.config.header}
              @value-changed=${this._handleHeaderChanged}
            ></paper-input>
            <paper-input
              label="Entity"
              .value=${this.config.entity}
              @value-changed=${this._handleEntityChanged}
            ></paper-input>
          </div>
        </ha-config-section>
      </div>
    `;
  }

  private _handleHeaderChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    this.config = { ...this.config, header: target.value };
    this.requestUpdate();
  }

  private _handleEntityChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    this.config = { ...this.config, entity: target.value };
    this.requestUpdate();
  }
}
