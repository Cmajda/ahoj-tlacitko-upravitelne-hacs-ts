import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('ahoj-tlacitko-upravitelne-hacs-ts')
export class AhojTlacitkoUpravitelneHacsTsScript extends LitElement {
  @property({ type: String }) private header = '';
  @property({ type: String }) private entity = '';
  @property({ type: String }) private name = '';
  @property({ type: Object }) private state?: any;
  @property({ type: String }) private status = '';

  static styles = css`
    /* vaše styly */
  `;

  render() {
    let content;
    if (!this.state) {
      content = html` <p class="error">${this.entity} is unavailable.</p> `;
    } else {
      content = html`
        <dl class="dl">
          <dt class="dt">${this.name}</dt>
          <dd class="dd" @click="${this.doToggle}">
            <span class="toggle ${this.status}">
              <span class="button"></span>
            </span>
            <span class="value">${this.status}</span>
          </dd>
        </dl>
      `;
    }
    return html`
      <ha-card header="${this.header}">
        <div class="card-content">${content}</div>
      </ha-card>
    `;
  }

  private doToggle() {
    if (this.hass && this.entity) {
      this.hass.callService('input_boolean', 'toggle', {
        entity_id: this.entity,
      });
    }
  }

  setConfig(config: any) {
    this.header = config.header === '' ? '' : config.header;
    this.entity = config.entity;
    if (this.hass) {
      this.hass = this.hass;
    }
  }

  set hass(hass: any) {
    this.hass = hass;
    this.state = hass.states[this.entity];
    if (this.state) {
      this.status = this.state.state;
      let fn = this.state.attributes.friendly_name;
      this.name = fn ? fn : this.entity;
    }
  }
}
