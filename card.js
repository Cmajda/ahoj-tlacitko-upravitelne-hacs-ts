var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define("card.styles", ["require", "exports", "lit"], function (require, exports, lit_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styles = void 0;
    exports.styles = (0, lit_1.css) `
  .error {
    color: red;
  }
  .dl {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .dt {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }
  .dd {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, auto) minmax(0, 2fr));
    margin: 0;
  }
  .toggle {
    padding: 0.6em;
    border: grey;
    border-radius: 50%;
  }
  .toggle.on {
    background-color: green;
  }
  .toggle.off {
    background-color: red;
  }
  .button {
    display: block;
    border: outset 0.2em;
    border-radius: 50%;
    border-color: silver;
    background-color: silver;
    width: 1.4em;
    height: 1.4em;
  }
  .value {
    padding-left: 0.5em;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }
`;
});
define("card", ["require", "exports", "lit", "card.styles", "lit/decorators/state"], function (require, exports, lit_2, card_styles_1, state_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AhojTlacitkoUpravitelneHacsTsScript = void 0;
    class AhojTlacitkoUpravitelneHacsTsScript extends lit_2.LitElement {
        constructor() {
            super(...arguments);
            // internal reactive states
            this._header = lit_2.nothing;
            this._entity = '';
            this._name = '';
            this._state = undefined;
            this._status = '';
        }
        // lifecycle interface
        setConfig(config) {
            this._header = config.header === "" ? lit_2.nothing : config.header;
            this._entity = config.entity;
            // call set hass() to immediately adjust to a changed entity
            // while editing the entity in the card editor
            if (this._hass) {
                this.hass = this._hass;
            }
        }
        set hass(hass) {
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
                content = (0, lit_2.html) ` <p class="error">${this._entity} is unavailable.</p> `;
            }
            else {
                content = (0, lit_2.html) `
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
            return (0, lit_2.html) `
      <ha-card header="${this._header}">
        <div class="card-content">${content}</div>
      </ha-card>
    `;
        }
        // event handling
        doToggle() {
            if (this._hass && this._entity) {
                this._hass.callService("input_boolean", "toggle", {
                    entity_id: this._entity,
                });
            }
        }
        // card configuration
        static getConfigElement() {
            return document.createElement("ahoj-tlacitko-upravitelne-hacs-ts-editor");
        }
        static getStubConfig() {
            return {
                entity: "input_boolean.tcts",
                header: "",
            };
        }
    }
    exports.AhojTlacitkoUpravitelneHacsTsScript = AhojTlacitkoUpravitelneHacsTsScript;
    // declarative part
    AhojTlacitkoUpravitelneHacsTsScript.styles = card_styles_1.styles;
    __decorate([
        (0, state_1.state)(),
        __metadata("design:type", Object)
    ], AhojTlacitkoUpravitelneHacsTsScript.prototype, "_header", void 0);
    __decorate([
        (0, state_1.state)(),
        __metadata("design:type", String)
    ], AhojTlacitkoUpravitelneHacsTsScript.prototype, "_entity", void 0);
    __decorate([
        (0, state_1.state)(),
        __metadata("design:type", String)
    ], AhojTlacitkoUpravitelneHacsTsScript.prototype, "_name", void 0);
    __decorate([
        (0, state_1.state)(),
        __metadata("design:type", Object)
    ], AhojTlacitkoUpravitelneHacsTsScript.prototype, "_state", void 0);
    __decorate([
        (0, state_1.state)(),
        __metadata("design:type", String)
    ], AhojTlacitkoUpravitelneHacsTsScript.prototype, "_status", void 0);
});
define("editor", ["require", "exports", "lit", "lit/decorators/state"], function (require, exports, lit_3, state_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AhojTlacitkoUpravitelneHacsTsEditor = void 0;
    class AhojTlacitkoUpravitelneHacsTsEditor extends lit_3.LitElement {
        constructor() {
            super(...arguments);
            this._config = { header: '', entity: '' };
        }
        // Specifikujte typ pro parametr
        setConfig(config) {
            this._config = config;
        }
        render() {
            return (0, lit_3.html) `
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
        handleChangedEvent(changedEvent) {
            const target = changedEvent.target;
            // this._config is readonly, copy needed
            const newConfig = { ...this._config };
            if (target.id === "header") {
                newConfig.header = target.value;
            }
            else if (target.id === "entity") {
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
    exports.AhojTlacitkoUpravitelneHacsTsEditor = AhojTlacitkoUpravitelneHacsTsEditor;
    AhojTlacitkoUpravitelneHacsTsEditor.styles = (0, lit_3.css) `
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
    __decorate([
        (0, state_2.state)(),
        __metadata("design:type", Object)
    ], AhojTlacitkoUpravitelneHacsTsEditor.prototype, "_config", void 0);
});
define("index", ["require", "exports", "card", "editor"], function (require, exports, card_1, editor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    customElements.define("ahoj-tlacitko-upravitelne-hacs-ts", card_1.AhojTlacitkoUpravitelneHacsTsScript);
    customElements.define("ahoj-tlacitko-upravitelne-hacs-ts-editor", editor_1.AhojTlacitkoUpravitelneHacsTsEditor);
    window.customCards = window.customCards || [];
    window.customCards.push({
        type: "ahoj-tlacitko-upravitelne-hacs-ts",
        name: "toggle card with TypeScript",
        description: "Turn an entity on and off",
    });
});
