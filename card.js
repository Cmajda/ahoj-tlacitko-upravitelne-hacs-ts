/*! For license information please see card.js.LICENSE.txt */
(()=>{"use strict";const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),i=new WeakMap;class r{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const n=this.t;if(t&&void 0===e){const t=void 0!==n&&1===n.length;t&&(e=i.get(n)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(n,e))}return e}toString(){return this.cssText}}const s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,n))(t)})(e):e;var o;const a=window,l=a.trustedTypes,p=l?l.emptyScript:"",d=a.reactiveElementPolyfillSupport,c={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},h=(e,t)=>t!==e&&(t==t||e==e),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:h},f="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const i=this._$Ep(n,t);void 0!==i&&(this._$Ev.set(i,n),e.push(i))})),e}static createProperty(e,t=u){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||u}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Ep(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var n;const i=null!==(n=this.shadowRoot)&&void 0!==n?n:this.attachShadow(this.constructor.shadowRootOptions);return((n,i)=>{t?n.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=u){var i;const r=this.constructor._$Ep(e,n);if(void 0!==r&&!0===n.reflect){const s=(void 0!==(null===(i=n.converter)||void 0===i?void 0:i.toAttribute)?n.converter:c).toAttribute(t,n.type);this._$El=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=i.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:c;this._$El=r,this[r]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var y;_[f]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:_}),(null!==(o=a.reactiveElementVersions)&&void 0!==o?o:a.reactiveElementVersions=[]).push("1.6.3");const m=window,g=m.trustedTypes,b=g?g.createPolicy("lit-html",{createHTML:e=>e}):void 0,v="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,C="?"+w,S=`<${C}>`,P=document,x=()=>P.createComment(""),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,A=Array.isArray,O="[ \t\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,N=/>/g,I=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),$=/'/g,M=/"/g,D=/^(?:script|style|textarea|title)$/i,R=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),L=R(1),H=(R(2),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),B=new WeakMap,z=P.createTreeWalker(P,129,null,!1);function j(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(t):t}const V=(e,t)=>{const n=e.length-1,i=[];let r,s=2===t?"<svg>":"",o=k;for(let t=0;t<n;t++){const n=e[t];let a,l,p=-1,d=0;for(;d<n.length&&(o.lastIndex=d,l=o.exec(n),null!==l);)d=o.lastIndex,o===k?"!--"===l[1]?o=T:void 0!==l[1]?o=N:void 0!==l[2]?(D.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=I):void 0!==l[3]&&(o=I):o===I?">"===l[0]?(o=null!=r?r:k,p=-1):void 0===l[1]?p=-2:(p=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?I:'"'===l[3]?M:$):o===M||o===$?o=I:o===T||o===N?o=k:(o=I,r=void 0);const c=o===I&&e[t+1].startsWith("/>")?" ":"";s+=o===k?n+S:p>=0?(i.push(a),n.slice(0,p)+v+n.slice(p)+w+c):n+w+(-2===p?(i.push(void 0),t):c)}return[j(e,s+(e[n]||"<?>")+(2===t?"</svg>":"")),i]};class U{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,s=0;const o=e.length-1,a=this.parts,[l,p]=V(e,t);if(this.el=U.createElement(l,n),z.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=z.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith(v)||t.startsWith(w)){const n=p[s++];if(e.push(t),void 0!==n){const e=i.getAttribute(n.toLowerCase()+v).split(w),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?W:"?"===t[1]?G:"@"===t[1]?Z:J})}else a.push({type:6,index:r})}for(const t of e)i.removeAttribute(t)}if(D.test(i.tagName)){const e=i.textContent.split(w),t=e.length-1;if(t>0){i.textContent=g?g.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],x()),z.nextNode(),a.push({type:2,index:++r});i.append(e[t],x())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(w,e+1));)a.push({type:7,index:r}),e+=w.length-1}r++}}static createElement(e,t){const n=P.createElement("template");return n.innerHTML=e,n}}function q(e,t,n=e,i){var r,s,o,a;if(t===H)return t;let l=void 0!==i?null===(r=n._$Co)||void 0===r?void 0:r[i]:n._$Cl;const p=E(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==p&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===p?l=void 0:(l=new p(e),l._$AT(e,n,i)),void 0!==i?(null!==(o=(a=n)._$Co)&&void 0!==o?o:a._$Co=[])[i]=l:n._$Cl=l),void 0!==l&&(t=q(e,l._$AS(e,t.values),l,i)),t}class K{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:i}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:P).importNode(n,!0);z.currentNode=r;let s=z.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new Y(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new Q(s,this,e)),this._$AV.push(t),l=i[++a]}o!==(null==l?void 0:l.index)&&(s=z.nextNode(),o++)}return z.currentNode=P,r}v(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Y{constructor(e,t,n,i){var r;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cp=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),E(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==H&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>A(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==F&&E(this._$AH)?this._$AA.nextSibling.data=e:this.$(P.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=U.createElement(j(i.h,i.h[0]),this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(n);else{const e=new K(r,this),t=e.u(this.options);e.v(n),this.$(t),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new U(e)),t}T(e){A(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new Y(this.k(x()),this.k(x()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class J{constructor(e,t,n,i,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const r=this.strings;let s=!1;if(void 0===r)e=q(this,e,t,0),s=!E(e)||e!==this._$AH&&e!==H,s&&(this._$AH=e);else{const i=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=q(this,i[n+o],t,o),a===H&&(a=this._$AH[o]),s||(s=!E(a)||a!==this._$AH[o]),a===F?e=F:e!==F&&(e+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}s&&!i&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class W extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}const X=g?g.emptyScript:"";class G extends J{constructor(){super(...arguments),this.type=4}j(e){e&&e!==F?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class Z extends J{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=q(this,e,t,0))&&void 0!==n?n:F)===H)return;const i=this._$AH,r=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==F&&(i===F||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class Q{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const ee=m.litHtmlPolyfillSupport;var te,ne;null==ee||ee(U,Y),(null!==(y=m.litHtmlVersions)&&void 0!==y?y:m.litHtmlVersions=[]).push("2.8.0");class ie extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{var i,r;const s=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:t;let o=s._$litPart$;if(void 0===o){const e=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;s._$litPart$=o=new Y(t.insertBefore(x(),e),e,void 0,null!=n?n:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return H}}ie.finalized=!0,ie._$litElement$=!0,null===(te=globalThis.litElementHydrateSupport)||void 0===te||te.call(globalThis,{LitElement:ie});const re=globalThis.litElementPolyfillSupport;null==re||re({LitElement:ie}),(null!==(ne=globalThis.litElementVersions)&&void 0!==ne?ne:globalThis.litElementVersions=[]).push("3.3.3");const se=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){customElements.define(e,t)}}})(e,t),oe=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function ae(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):oe(e,t)}var le;null===(le=window.HTMLSlotElement)||void 0===le||le.prototype.assignedElements,console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var pe=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},de=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ce=class extends ie{constructor(){super(...arguments),this.header="",this.entity="",this.name="",this.status=""}render(){let e;return e=this.state?L`
        <dl class="dl">
          <dt class="dt">${this.name}</dt>
          <dd class="dd" @click="${this.doToggle}">
            <span class="toggle ${this.status}">
              <span class="button"></span>
            </span>
            <span class="value">${this.status}</span>
          </dd>
        </dl>
      `:L` <p class="error">${this.entity} is unavailable.</p> `,L`
      <ha-card header="${this.header}">
        <div class="card-content">${e}</div>
      </ha-card>
    `}doToggle(){this.hass&&this.entity&&this.hass.callService("input_boolean","toggle",{entity_id:this.entity})}setConfig(e){this.header=e.header||"",this.entity=e.entity||"",this.hass&&(this.hass=this.hass)}set hass(e){if(this.hass=e,this.state=e.states[this.entity],this.state){this.status=this.state.state;let e=this.state.attributes.friendly_name;this.name=e||this.entity}}};ce.styles=((e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1]),e[0]);return new r(i,e,n)})`
    /* vaše styly */
  `,pe([ae({type:String}),de("design:type",Object)],ce.prototype,"header",void 0),pe([ae({type:String}),de("design:type",Object)],ce.prototype,"entity",void 0),pe([ae({type:String}),de("design:type",Object)],ce.prototype,"name",void 0),pe([ae({type:Object}),de("design:type",Object)],ce.prototype,"state",void 0),pe([ae({type:String}),de("design:type",Object)],ce.prototype,"status",void 0),ce=pe([se("ahoj-tlacitko-upravitelne-hacs-ts")],ce);const he=!(window.ShadyDOM&&window.ShadyDOM.inUse);let ue,fe;function _e(e){ue=(!e||!e.shimcssproperties)&&(he||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(fe=window.ShadyCSS.cssBuild);const ye=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?ue=window.ShadyCSS.nativeCss:window.ShadyCSS?(_e(window.ShadyCSS),window.ShadyCSS=void 0):_e(window.WebComponents&&window.WebComponents.flags);const me=ue;class ge{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function be(e){return ve(function(e){let t=new ge;t.start=0,t.end=e.length;let n=t;for(let i=0,r=e.length;i<r;i++)if(e[i]===Se){n.rules||(n.rules=[]);let e=n,t=e.rules[e.rules.length-1]||null;n=new ge,n.start=i+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[i]===Pe&&(n.end=i+1,n=n.parent||t);return t}(e=e.replace(xe.comments,"").replace(xe.port,"")),e)}function ve(e,t){let n=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let i=e.previous?e.previous.end:e.parent.start;n=t.substring(i,e.start-1),n=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(n),n=n.replace(xe.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=n.trim();e.atRule=0===r.indexOf(Oe),e.atRule?0===r.indexOf(Ae)?e.type=Ce.MEDIA_RULE:r.match(xe.keyframesRule)&&(e.type=Ce.KEYFRAMES_RULE,e.keyframesName=e.selector.split(xe.multipleSpaces).pop()):0===r.indexOf(Ee)?e.type=Ce.MIXIN_RULE:e.type=Ce.STYLE_RULE}let i=e.rules;if(i)for(let e,n=0,r=i.length;n<r&&(e=i[n]);n++)ve(e,t);return e}function we(e,t,n=""){let i="";if(e.cssText||e.rules){let n=e.rules;if(n&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(Ee)}(n))for(let e,r=0,s=n.length;r<s&&(e=n[r]);r++)i=we(e,t,i);else i=t?e.cssText:function(e){return function(e){return e.replace(xe.mixinApply,"").replace(xe.varApply,"")}(e=function(e){return e.replace(xe.customProp,"").replace(xe.mixinProp,"")}(e))}(e.cssText),i=i.trim(),i&&(i="  "+i+"\n")}return i&&(e.selector&&(n+=e.selector+" "+Se+"\n"),n+=i,e.selector&&(n+=Pe+"\n\n")),n}const Ce={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Se="{",Pe="}",xe={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Ee="--",Ae="@media",Oe="@",ke=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Te=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Ne=/@media\s(.*)/,Ie=new Set;function $e(e){const t=e.textContent;if(!Ie.has(t)){Ie.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function Me(e){return e.hasAttribute("shady-unscoped")}function De(e,t){return e?("string"==typeof e&&(e=be(e)),t&&Le(e,t),we(e,me)):""}function Re(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=be(e.textContent)),e.__cssRules||null}function Le(e,t,n,i){if(!e)return;let r=!1,s=e.type;if(i&&s===Ce.MEDIA_RULE){let t=e.selector.match(Ne);t&&(window.matchMedia(t[1]).matches||(r=!0))}s===Ce.STYLE_RULE?t(e):n&&s===Ce.KEYFRAMES_RULE?n(e):s===Ce.MIXIN_RULE&&(r=!0);let o=e.rules;if(o&&!r)for(let e,r=0,s=o.length;r<s&&(e=o[r]);r++)Le(e,t,n,i)}function He(e,t){let n=e.indexOf("var(");if(-1===n)return t(e,"","","");let i=function(e,t){let n=0;for(let i=t,r=e.length;i<r;i++)if("("===e[i])n++;else if(")"===e[i]&&0==--n)return i;return-1}(e,n+3),r=e.substring(n+4,i),s=e.substring(0,n),o=He(e.substring(i+1),t),a=r.indexOf(",");return-1===a?t(s,r.trim(),"",o):t(s,r.substring(0,a).trim(),r.substring(a+1).trim(),o)}window.ShadyDOM&&window.ShadyDOM.wrap;const Fe="css-build";function Be(e){return""!==function(e){if(void 0!==fe)return fe;if(void 0===e.__cssBuild){const t=e.getAttribute(Fe);if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===Fe)return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}(e)}function ze(e,t){for(let n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function je(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():""}const Ve=/;\s*/m,Ue=/^\s*(initial)|(inherit)\s*$/,qe=/\s*!important/,Ke="_-_";class Ye{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Je=null;class We{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Ye}detectMixin(e){return function(e){const t=Te.test(e)||ke.test(e);return Te.lastIndex=0,ke.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],n=e.querySelectorAll("style");for(let e=0;e<n.length;e++){const i=n[e];Me(i)?he||($e(i),i.parentNode.removeChild(i)):(t.push(i.textContent),i.parentNode.removeChild(i))}return t.join("").trim()}(e.content);if(t){const n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){let n=Re(e);return this.transformRules(n,t),e.textContent=De(n),n}transformCustomStyle(e){let t=Re(e);return Le(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)})),e.textContent=De(t),t}transformRules(e,t){this._currentElement=t,Le(e,(e=>{this.transformRule(e)})),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(ke,((e,n,i,r)=>this._produceCssProperties(e,n,i,r,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const n={};let i=!1;return Le(t,(t=>{i=i||t===e,i||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))})),n}_consumeCssProperties(e,t){let n=null;for(;n=Te.exec(e);){let i=n[0],r=n[1],s=n.index,o=s+i.indexOf("@apply"),a=s+i.length,l=e.slice(0,o),p=e.slice(a),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let c=this._atApplyToCssProperties(r,d);e=`${l}${c}${p}`,Te.lastIndex=s+c.length}return e}_atApplyToCssProperties(e,t){e=e.replace(Ve,"");let n=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){let r,s,o;this._currentElement&&(i.dependants[this._currentElement]=!0);const a=i.properties;for(r in a)o=t&&t[r],s=[r,": var(",e,Ke,r],o&&s.push(",",o.replace(qe,"")),s.push(")"),qe.test(a[r])&&s.push(" !important"),n.push(s.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){let n=Ue.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let n,i,r=e.split(";"),s={};for(let e,o,a=0;a<r.length;a++)e=r[a],e&&(o=e.split(":"),o.length>1&&(n=o[0].trim(),i=o.slice(1).join(":"),t&&(i=this._replaceInitialOrInherit(n,i)),s[n]=i));return s}_invalidateMixinEntry(e){if(Je)for(let t in e.dependants)t!==this._currentElement&&Je(t)}_produceCssProperties(e,t,n,i,r){if(n&&He(n,((e,t)=>{t&&this._map.get(t)&&(i=`@apply ${t};`)})),!i)return e;let s=this._consumeCssProperties(""+i,r),o=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(s,!0),l=a,p=this._map.get(t),d=p&&p.properties;d?l=Object.assign(Object.create(d),a):this._map.set(t,l);let c,h,u=[],f=!1;for(c in l)h=a[c],void 0===h&&(h="initial"),d&&!(c in d)&&(f=!0),u.push(`${t}${Ke}${c}: ${h}`);return f&&this._invalidateMixinEntry(p),p&&(p.properties=l),n&&(o=`${e};${o}`),`${o}${u.join("; ")};`}}We.prototype.detectMixin=We.prototype.detectMixin,We.prototype.transformStyle=We.prototype.transformStyle,We.prototype.transformCustomStyle=We.prototype.transformCustomStyle,We.prototype.transformRules=We.prototype.transformRules,We.prototype.transformRule=We.prototype.transformRule,We.prototype.transformTemplate=We.prototype.transformTemplate,We.prototype._separator=Ke,Object.defineProperty(We.prototype,"invalidCallback",{get:()=>Je,set(e){Je=e}});const Xe=We,Ge={},Ze="_applyShimCurrentVersion",Qe="_applyShimNextVersion",et="_applyShimValidatingVersion",tt=Promise.resolve();function nt(e){let t=Ge[e];t&&function(e){e[Ze]=e[Ze]||0,e[et]=e[et]||0,e[Qe]=(e[Qe]||0)+1}(t)}function it(e){return e[Ze]===e[Qe]}let rt,st=null,ot=window.HTMLImports&&window.HTMLImports.whenReady||null;function at(e){requestAnimationFrame((function(){ot?ot(e):(st||(st=new Promise((e=>{rt=e})),"complete"===document.readyState?rt():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&rt()}))),st.then((function(){e&&e()})))}))}const lt="__seenByShadyCSS",pt="__shadyCSSCachedStyle";let dt=null,ct=null;class ht{constructor(){this.customStyles=[],this.enqueued=!1,at((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&ct&&(this.enqueued=!0,at(ct))}addCustomStyle(e){e[lt]||(e[lt]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[pt])return e[pt];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const n=e[t];if(n[pt])continue;const i=this.getStyleForCustomStyle(n);if(i){const e=i.__appliedElement||i;dt&&dt(e),n[pt]=e}}return e}}ht.prototype.addCustomStyle=ht.prototype.addCustomStyle,ht.prototype.getStyleForCustomStyle=ht.prototype.getStyleForCustomStyle,ht.prototype.processStyles=ht.prototype.processStyles,Object.defineProperties(ht.prototype,{transformCallback:{get:()=>dt,set(e){dt=e}},validateCallback:{get:()=>ct,set(e){let t=!1;ct||(t=!0),ct=e,t&&this.enqueueDocumentValidation()}}});const ut=new Xe;class ft{constructor(){this.customStyleInterface=null,ut.invalidCallback=nt}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{ut.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()}))})}prepareTemplate(e,t){if(this.ensure(),Be(e))return;Ge[t]=e;let n=ut.transformTemplate(e,t);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&ut.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&ze(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,n="",i="";return t?t.indexOf("-")>-1?n=t:(i=t,n=e.getAttribute&&e.getAttribute("is")||""):(n=e.is,i=e.extends),{is:n,typeExtension:i}}(e),n=Ge[t];if((!n||!Be(n))&&n&&!it(n)){(function(e){return!it(e)&&e[et]===e[Qe]})(n)||(this.prepareTemplate(n,t),function(e){e[et]=e[Qe],e._validating||(e._validating=!0,tt.then((function(){e[Ze]=e[Qe],e._validating=!1})))}(n));let i=e.shadowRoot;if(i){let e=i.querySelector("style");e&&(e.__cssRules=n._styleAst,e.textContent=De(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new ft;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,i){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>je(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:me,nativeShadow:he,cssBuild:fe,disableRuntime:ye},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=ut,window.JSCompiler_renameProperty=function(e,t){return e};let _t,yt,mt=/(url\()([^)]*)(\))/g,gt=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function bt(e,t){if(e&&gt.test(e))return e;if("//"===e)return e;if(void 0===_t){_t=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",_t="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),_t)try{return new URL(e,t).href}catch(t){return e}return yt||(yt=document.implementation.createHTMLDocument("temp"),yt.base=yt.createElement("base"),yt.head.appendChild(yt.base),yt.anchor=yt.createElement("a"),yt.body.appendChild(yt.anchor)),yt.base.href=t,yt.anchor.href=e,yt.anchor.href||e}function vt(e,t){return e.replace(mt,(function(e,n,i,r){return n+"'"+bt(i.replace(/["']/g,""),t)+"'"+r}))}function wt(e){return e.substring(0,e.lastIndexOf("/")+1)}const Ct=!window.ShadyDOM||!window.ShadyDOM.inUse,St=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,Ct&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})());let Pt=window.Polymer&&window.Polymer.rootPath||wt(document.baseURI||window.location.href),xt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Et=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,At=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Ot=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,kt=window.Polymer&&window.Polymer.legacyOptimizations||!1,Tt=window.Polymer&&window.Polymer.legacyWarnings||!1,Nt=window.Polymer&&window.Polymer.syncInitialRender||!1,It=window.Polymer&&window.Polymer.legacyUndefined||!1,$t=window.Polymer&&window.Polymer.orderedComputed||!1,Mt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Dt=window.Polymer&&window.Polymer.fastDomIf||!1,Rt=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Lt=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Ht=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Ft=0;function Bt(){}Bt.prototype.__mixinApplications,Bt.prototype.__mixinSet;const zt=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=Ft++;return function(i){let r=i.__mixinSet;if(r&&r[n])return i;let s=t,o=s.get(i);if(!o){o=e(i),s.set(i,o);let t=Object.create(o.__mixinSet||r||null);t[n]=!0,o.__mixinSet=t}return o}};let jt={},Vt={};function Ut(e,t){jt[e]=Vt[e.toLowerCase()]=t}function qt(e){return jt[e]||Vt[e.toLowerCase()]}class Kt extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=qt(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,i){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=bt(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=wt(t)}return this.__assetpath}register(e){if(e=e||this.id){if(At&&void 0!==qt(e))throw Ut(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Ut(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}Kt.prototype.modules=jt,customElements.define("dom-module",Kt);const Yt="link[rel=import][type~=css]",Jt="include",Wt="shady-unscoped";function Xt(e){return Kt.import(e)}function Gt(e){const t=vt((e.body?e.body:e).textContent,e.baseURI),n=document.createElement("style");return n.textContent=t,n}function Zt(e){const t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...Qt(t[e]));return n}function Qt(e){const t=Xt(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...tn(t));const n=t.querySelector("template");n&&e.push(...en(n,t.assetpath)),t._styles=e}return t._styles}function en(e,t){if(!e._styles){const n=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let r=i[e],s=r.getAttribute(Jt);s&&n.push(...Zt(s).filter((function(e,t,n){return n.indexOf(e)===t}))),t&&(r.textContent=vt(r.textContent,t)),n.push(r)}e._styles=n}return e._styles}function tn(e){const t=[],n=e.querySelectorAll(Yt);for(let e=0;e<n.length;e++){let i=n[e];if(i.import){const e=i.import,n=i.hasAttribute(Wt);if(n&&!e._unscopedStyle){const t=Gt(e);t.setAttribute(Wt,""),e._unscopedStyle=t}else e._style||(e._style=Gt(e));t.push(n?e._unscopedStyle:e._style)}}return t}function nn(e){let t=Xt(e);if(t&&void 0===t._cssText){let e=function(e){let t="",n=tn(e);for(let e=0;e<n.length;e++)t+=n[e].textContent;return t}(t),n=t.querySelector("template");n&&(e+=function(e,t){let n="";const i=en(e,t);for(let e=0;e<i.length;e++){let t=i[e];t.parentNode&&t.parentNode.removeChild(t),n+=t.textContent}return n}(n,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const rn=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function sn(e){return e.indexOf(".")>=0}function on(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function an(e,t){return 0===e.indexOf(t+".")}function ln(e,t){return 0===t.indexOf(e+".")}function pn(e,t,n){return t+n.slice(e.length)}function dn(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let i=e[n].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function cn(e){return Array.isArray(e)?dn(e).split("."):e.toString().split(".")}function hn(e,t,n){let i=e,r=cn(t);for(let e=0;e<r.length;e++){if(!i)return;i=i[r[e]]}return n&&(n.path=r.join(".")),i}function un(e,t,n){let i=e,r=cn(t),s=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++)if(i=i[r[e]],!i)return;i[s]=n}else i[t]=n;return r.join(".")}const fn={},_n=/-[a-z]/g,yn=/([A-Z])/g;function mn(e){return fn[e]||(fn[e]=e.indexOf("-")<0?e:e.replace(_n,(e=>e[1].toUpperCase())))}function gn(e){return fn[e]||(fn[e]=e.replace(yn,"-$1").toLowerCase())}let bn=0,vn=0,wn=[],Cn=0,Sn=!1,Pn=document.createTextNode("");new window.MutationObserver((function(){Sn=!1;const e=wn.length;for(let t=0;t<e;t++){let e=wn[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}wn.splice(0,e),vn+=e})).observe(Pn,{characterData:!0});const xn={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},En={run:e=>(Sn||(Sn=!0,Pn.textContent=Cn++),wn.push(e),bn++),cancel(e){const t=e-vn;if(t>=0){if(!wn[t])throw new Error("invalid async handle: "+e);wn[t]=null}}},An=En,On=zt((e=>class extends e{static createProperties(e){const t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let i=this.__data[e],r=this._shouldPropertyChange(e,t,i);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),r}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,An.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,i){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,i)}_attributeToProperty(e,t,n){if(!this.__serializing){const i=this.__dataAttributes,r=i&&i[e]||e;this[r]=this._deserializeValue(t,n||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){const i=this._serializeValue(t);"class"!==n&&"name"!==n&&"slot"!==n||(e=rn(e)),void 0===i?e.removeAttribute(n):e.setAttribute(n,""===i&&window.trustedTypes?window.trustedTypes.emptyScript:i)}_serializeValue(e){return"boolean"==typeof e?e?"":void 0:null!=e?e.toString():void 0}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),kn={};let Tn=HTMLElement.prototype;for(;Tn;){let e=Object.getOwnPropertyNames(Tn);for(let t=0;t<e.length;t++)kn[e[t]]=!0;Tn=Object.getPrototypeOf(Tn)}const Nn=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,In=zt((e=>{const t=On(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(mn(e[t]))}static attributeNameForProperty(e){return gn(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){this.hasAttribute(e)||this._valueToNodeAttribute(this,t,e)}_serializeValue(e){if("object"==typeof e){if(e instanceof Date)return e.toString();if(e){if(Nn(e))return e;try{return JSON.stringify(e)}catch(e){return""}}}return super._serializeValue(e)}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch(t){n=e}break;case Array:try{n=JSON.parse(e)}catch(t){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){!function(e,t){if(!kn[t]){let n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),$n={"dom-if":!0,"dom-repeat":!0};let Mn=!1,Dn=!1;const Rn=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(t,n,i)=>{const r=n.getAttribute(i);e&&i.startsWith("on-")?t.setAttribute(i,e.createScript(r,i)):t.setAttribute(i,r)}})();function Ln(e){let t=e.getAttribute("is");if(t&&$n[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){const{name:t}=n.attributes[0];Rn(e,n,t),n.removeAttribute(t)}}return e}function Hn(e,t){let n=t.parentInfo&&Hn(e,t.parentInfo);if(!n)return e;for(let e=n.firstChild,i=0;e;e=e.nextSibling)if(t.parentIndex===i++)return e}function Fn(e,t,n,i){i.id&&(t[i.id]=n)}function Bn(e,t,n){if(n.events&&n.events.length)for(let i,r=0,s=n.events;r<s.length&&(i=s[r]);r++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function zn(e,t,n,i){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=i)}const jn=zt((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=Boolean(t),n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let i=!1,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(r,t,n)||i,function(e){(function(){if(!Mn){Mn=!0;const e=document.createElement("textarea");e.placeholder="a",Dn=e.placeholder===e.textContent}return Dn})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}(r),r.firstChild&&this._parseTemplateChildNodes(r,t,n),r.hasAttributes&&r.hasAttributes()&&(i=this._parseTemplateNodeAttributes(r,t,n)||i),i||n.noted}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName)for(let i,r=e.firstChild,s=0;r;r=i){if("template"==r.localName&&(r=Ln(r)),i=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=i;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,i=n.nextSibling,e.removeChild(n),n=i;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:s,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&s++}}static _parseTemplateNestedTemplate(e,t,n){let i=e,r=this._parseTemplate(i,t);return(r.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),n.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,n){let i=!1,r=Array.from(e.attributes);for(let s,o=r.length-1;s=r[o];o--)i=this._parseTemplateNodeAttribute(e,t,n,s.name,s.value)||i;return i}static _parseTemplateNodeAttribute(e,t,n,i,r){return"on-"===i.slice(0,3)?(e.removeAttribute(i),n.events=n.events||[],n.events.push({name:i.slice(3),value:r}),!0):"id"===i&&(n.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let n=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,i=t.content||e.content,r=document.importNode(i,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let s=r.nodeList=new Array(n.length);r.$={};for(let e,i=0,o=n.length;i<o&&(e=n[i]);i++){let n=s[i]=Hn(r,e);Fn(0,r.$,n,e),zn(0,n,e,t),Bn(this,n,e)}return r}_addMethodEventListenerToNode(e,t,n,i){let r=function(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}(i=i||e,0,n);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}));let Vn=0;const Un=[],qn={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Kn="__computeInfo",Yn=/[A-Z]/;function Jn(e,t,n){let i=e[t];if(i){if(!e.hasOwnProperty(t)&&(i=e[t]=Object.create(e[t]),n))for(let e in i){let t=i[e],n=i[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}}else i=e[t]={};return i}function Wn(e,t,n,i,r,s){if(t){let o=!1;const a=Vn++;for(let l in n){let p=t[r?on(l):l];if(p)for(let t,d=0,c=p.length;d<c&&(t=p[d]);d++)t.info&&t.info.lastRun===a||r&&!Gn(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,n,i,t.info,r,s),o=!0)}return o}return!1}function Xn(e,t,n,i,r,s,o,a){let l=!1,p=t[o?on(i):i];if(p)for(let t,d=0,c=p.length;d<c&&(t=p[d]);d++)t.info&&t.info.lastRun===n||o&&!Gn(i,t.trigger)||(t.info&&(t.info.lastRun=n),t.fn(e,i,r,s,t.info,o,a),l=!0);return l}function Gn(e,t){if(t){let n=t.name;return n==e||!(!t.structured||!an(n,e))||!(!t.wildcard||!ln(n,e))}return!0}function Zn(e,t,n,i,r){let s="string"==typeof r.method?e[r.method]:r.method,o=r.property;s?s.call(e,e.__data[o],i[o]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function Qn(e,t,n){let i=on(t);return i!==t&&(ei(e,gn(i)+"-changed",n[t],t),!0)}function ei(e,t,n,i){let r={value:n,queueProperty:!0};i&&(r.path=i),rn(e).dispatchEvent(new CustomEvent(t,{detail:r}))}function ti(e,t,n,i,r,s){let o=(s?on(t):t)!=t?t:null,a=o?hn(e,o):e.__data[t];o&&void 0===a&&(a=n[t]),ei(e,r.eventName,a,o)}function ni(e,t,n,i,r){let s=e.__data[t];xt&&(s=xt(s,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,s)}const ii=(e,t,n)=>{let i=0,r=t.length-1,s=-1;for(;i<=r;){const o=i+r>>1,a=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(a<0)i=o+1;else{if(!(a>0)){s=o;break}r=o-1}}s<0&&(s=r+1),t.splice(s,0,e)},ri=(e,t,n,i,r)=>{const s=t[r?on(e):e];if(s)for(let t=0;t<s.length;t++){const o=s[t];o.info.lastRun===Vn||r&&!Gn(e,o.trigger)||(o.info.lastRun=Vn,ii(o.info,n,i))}};function si(e,t,n,i,r){let s=hi(e,t,n,0,r);if(s===Un)return!1;let o=r.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,s,!0):(e[o]=s,!1)}function oi(e,t,n,i,r,s,o){n.bindings=n.bindings||[];let a={kind:i,target:r,parts:s,literal:o,isCompound:1!==s.length};if(n.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||gn(r)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let n=0;n<a.parts.length;n++){let i=a.parts[n];i.compoundIndex=n,ai(e,t,a,i,l)}}function ai(e,t,n,i,r){if(!i.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let s=i.dependencies,o={index:r,binding:n,part:i,evaluator:e};for(let n=0;n<s.length;n++){let i=s[n];"string"==typeof i&&(i=bi(i),i.wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:li,info:o,trigger:i})}}}function li(e,t,n,i,r,s,o){let a=o[r.index],l=r.binding,p=r.part;if(s&&p.source&&t.length>p.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let i=n[t];t=pn(p.source,l.target,t),a._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(a)}else{let o=r.evaluator._evaluateBinding(e,p,t,n,i,s);o!==Un&&function(e,t,n,i,r){if(r=function(e,t,n,i){if(n.isCompound){let r=e.__dataCompoundStorage[n.target];r[i.compoundIndex]=t,t=r.join("")}return"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t)),t}(t,r,n,i),xt&&(r=xt(r,n.target,n.kind,t)),"attribute"==n.kind)e._valueToNodeAttribute(t,r,n.target);else{let i=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[qn.READ_ONLY]&&t[qn.READ_ONLY][i]||t._setPendingProperty(i,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,r)}}(e,a,l,p,o)}}function pi(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,r=new Array(i.length);for(let e=0;e<i.length;e++)r[e]=i[e].literal;let s=t.target;n[s]=r,t.literal&&"property"==t.kind&&("className"===s&&(e=rn(e)),e[s]=t.literal)}}function di(e,t,n){if(n.listenerEvent){let i=n.parts[0];e.addEventListener(n.listenerEvent,(function(e){!function(e,t,n,i,r){let s,o=e.detail,a=o&&o.path;a?(i=pn(n,i,a),s=o&&o.value):s=e.currentTarget[n],s=r?!s:s,t[qn.READ_ONLY]&&t[qn.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,s,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties()}(e,t,n.target,i.source,i.negate)}))}}function ci(e,t,n,i,r,s){s=t.static||s&&("object"!=typeof s||s[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:s};for(let r,s=0;s<t.args.length&&(r=t.args[s]);s++)r.literal||e._addPropertyEffect(r.rootProperty,n,{fn:i,info:o,trigger:r});return s&&e._addPropertyEffect(t.methodName,n,{fn:i,info:o}),o}function hi(e,t,n,i,r){let s=e._methodHost||e,o=s[r.methodName];if(o){let i=e._marshalArgs(r.args,t,n);return i===Un?Un:o.apply(s,i)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const ui=[],fi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",_i="(?:("+fi+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",yi=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?("+fi+"\\s*(?:\\(\\s*(?:(?:"+_i+"(?:,\\s*"+_i+")*)?)\\)\\s*)?)(?:]]|}})","g");function mi(e){let t="";for(let n=0;n<e.length;n++)t+=e[n].literal||"";return t}function gi(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:ui};return t[2].trim()?function(e,t){return t.args=e.map((function(e){let n=bi(e);return n.literal||(t.static=!1),n}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e):e}return null}function bi(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=on(t),n.structured=sn(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function vi(e,t,n){let i=hn(e,n);return void 0===i&&(i=t[n]),i}function wi(e,t,n,i){const r={indexSplices:i};It&&!e._overrideLegacyUndefined&&(t.splices=r),e.notifyPath(n+".splices",r),e.notifyPath(n+".length",t.length),It&&!e._overrideLegacyUndefined&&(r.indexSplices=[])}function Ci(e,t,n,i,r,s){wi(e,t,n,[{index:i,addedCount:r,removed:s,object:t,type:"splice"}])}const Si=zt((e=>{const t=jn(In(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return qn}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Pi.length){let e=Pi[Pi.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[qn.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==qn.READ_ONLY);let i=Jn(this,t,!0)[e];i||(i=this[t][e]=[]),i.push(n)}_removePropertyEffect(e,t,n){let i=Jn(this,t,!0)[e],r=i.indexOf(n);r>=0&&i.splice(r,1)}_hasPropertyEffect(e,t){let n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,qn.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,qn.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,qn.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,qn.COMPUTE)}_setPendingPropertyOrPath(e,t,n,i){if(i||on(Array.isArray(e)?e[0]:e)!==e){if(!i){let n=hn(this,e);if(!(e=un(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return function(e,t,n){let i=e.__dataLinkedPaths;if(i){let r;for(let s in i){let o=i[s];ln(s,t)?(r=pn(s,o,t),e._setPendingPropertyOrPath(r,n,!0,!0)):ln(o,t)&&(r=pn(o,s,t),e._setPendingPropertyOrPath(r,n,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||("className"===t&&(e=rn(e)),e[t]=n)}_setPendingProperty(e,t,n){let i=this.__dataHasPaths&&sn(e),r=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[qn.NOTIFY]&&this[qn.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[qn.READ_ONLY]&&this[qn.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let i,r=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,n,i){let r=e[qn.COMPUTE];if(r)if($t){Vn++;const s=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const n=e[qn.COMPUTE];let i,{counts:r,ready:s,total:o}=function(e){const t=e[Kn],n={},i=e[qn.COMPUTE],r=[];let s=0;for(let e in t){const i=t[e];s+=n[e]=i.args.filter((e=>!e.literal)).length+(i.dynamicFn?1:0)}for(let e in i)t[e]||r.push(e);return{counts:n,ready:r,total:s}}(e);for(;i=s.shift();){t.set(i,t.size);const e=n[i];e&&e.forEach((e=>{const t=e.info.methodInfo;--o,0==--r[t]&&s.push(t)}))}if(0!==o){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),o=[];for(let e in t)ri(e,r,o,s,i);let a;for(;a=o.shift();)si(e,"",t,0,a)&&ri(a.methodInfo,r,o,s,i);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let s=t;for(;Wn(e,r,s,n,i);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),Wn(this,this[qn.REFLECT],t,n,r),Wn(this,this[qn.OBSERVE],t,n,r),i&&function(e,t,n,i,r){let s,o,a=e[qn.NOTIFY],l=Vn++;for(let o in t)t[o]&&(a&&Xn(e,a,l,o,n,i,r)||r&&Qn(e,o,n))&&(s=!0);s&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,i,t,n,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[qn.PROPAGATE]&&Wn(this,this[qn.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,i){const r=(t,i)=>{Wn(this,e.propertyEffects,t,n,i,e.nodeList);for(let r=e.firstChild;r;r=r.nextSibling)this._runEffectsForTemplate(r,t,n,i)};e.runEffects?e.runEffects(r,t,i):r(t,i)}linkPaths(e,t){e=dn(e),t=dn(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=dn(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:""};wi(this,hn(this,e,n),n.path,t)}get(e,t){return hn(t||this,e)}set(e,t,n){n?un(n,e,t):this[qn.READ_ONLY]&&this[qn.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:""},i=hn(this,e,n),r=i.length,s=i.push(...t);return t.length&&Ci(this,i,n.path,r,t.length,[]),s}pop(e){let t={path:""},n=hn(this,e,t),i=Boolean(n.length),r=n.pop();return i&&Ci(this,n,t.path,n.length,0,[r]),r}splice(e,t,n,...i){let r,s={path:""},o=hn(this,e,s);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?o.splice(t):o.splice(t,n,...i),(i.length||r.length)&&Ci(this,o,s.path,t,i.length,r),r}shift(e){let t={path:""},n=hn(this,e,t),i=Boolean(n.length),r=n.shift();return i&&Ci(this,n,t.path,0,0,[r]),r}unshift(e,...t){let n={path:""},i=hn(this,e,n),r=i.unshift(...t);return t.length&&Ci(this,i,n.path,0,t.length,[]),r}notifyPath(e,t){let n;if(1==arguments.length){let i={path:""};t=hn(this,e,i),n=i.path}else n=Array.isArray(e)?dn(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var n;this._addPropertyEffect(e,qn.READ_ONLY),t&&(this["_set"+(n=e,n[0].toUpperCase()+n.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let i={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,qn.OBSERVE,{fn:Zn,info:i,trigger:{name:e}}),n&&this._addPropertyEffect(t,qn.OBSERVE,{fn:Zn,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let n=gi(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");ci(this,n,qn.OBSERVE,hi,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,qn.NOTIFY,{fn:ti,info:{eventName:gn(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,qn.REFLECT,{fn:ni,info:{attrName:t}})}_createComputedProperty(e,t,n){let i=gi(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");const r=ci(this,i,qn.COMPUTE,si,e,n);Jn(this,Kn)[e]=r}_marshalArgs(e,t,n){const i=this.__data,r=[];for(let s=0,o=e.length;s<o;s++){let{name:o,structured:a,wildcard:l,value:p,literal:d}=e[s];if(!d)if(l){const e=ln(o,t),r=vi(i,n,e?t:o);p={path:e?t:o,value:r,base:e?hn(i,o):r}}else p=a?vi(i,n,o):i[o];if(It&&!this._overrideLegacyUndefined&&void 0===p&&e.length>1)return Un;r[s]=p}return r}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),i=this.__preBoundTemplateInfo==n;if(!i)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t)if(n=Object.create(n),n.wasPreBound=i,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,i=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=i,i?i.nextSibling=n:t.firstChild=n}else this.__templateInfo=n;else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),Pi.push(this);let n=super._stampTemplate(e,t);if(Pi.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,function(e,t){let{nodeList:n,nodeInfoList:i}=t;if(i.length)for(let t=0;t<i.length;t++){let r=i[t],s=n[t],o=r.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];pi(s,n),di(s,e,n)}s.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:n,nextSibling:i,parent:r}=t;n?n.nextSibling=i:r&&(r.firstChild=i),i?i.previousSibling=n:r&&(r.lastChild=n),t.nextSibling=t.previousSibling=null;let s=t.childNodes;for(let e=0;e<s.length;e++){let t=s[e];rn(rn(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,i){let r=t._parseTemplateNode.call(this,e,n,i);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=mi(t)||" ",oi(this,n,i,"text","textContent",t),r=!0)}return r}static _parseTemplateNodeAttribute(e,n,i,r,s){let o=this._parseBindings(s,n);if(o){let t=r,s="property";Yn.test(r)?s="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),s="attribute");let a=mi(o);return a&&"attribute"==s&&("class"==r&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(r)),e.setAttribute(r,a)),"attribute"==s&&"disable-upgrade$"==t&&e.setAttribute(r,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===s&&(r=mn(r)),oi(this,n,i,s,r,o,a),!0}return t._parseTemplateNodeAttribute.call(this,e,n,i,r,s)}static _parseTemplateNestedTemplate(e,n,i){let r=t._parseTemplateNestedTemplate.call(this,e,n,i);const s=e.parentNode,o=i.templateInfo,a="dom-if"===s.localName,l="dom-repeat"===s.localName;Mt&&(a||l)&&(s.removeChild(e),(i=i.parentInfo).templateInfo=o,i.noted=!0,r=!1);let p=o.hostProps;if(Dt&&a)p&&(n.hostProps=Object.assign(n.hostProps||{},p),Mt||(i.parentInfo.noted=!0));else{let e="{";for(let t in p)oi(this,n,i,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}return r}static _parseBindings(e,t){let n,i=[],r=0;for(;null!==(n=yi.exec(e));){n.index>r&&i.push({literal:e.slice(r,n.index)});let s=n[1][0],o=Boolean(n[2]),a=n[3].trim(),l=!1,p="",d=-1;"{"==s&&(d=a.indexOf("::"))>0&&(p=a.substring(d+2),a=a.substring(0,d),l=!0);let c=gi(a),h=[];if(c){let{args:e,methodName:n}=c;for(let t=0;t<e.length;t++){let n=e[t];n.literal||h.push(n)}let i=t.dynamicFns;(i&&i[n]||c.static)&&(h.push(n),c.dynamicFn=!0)}else h.push(a);i.push({source:a,mode:s,negate:o,customEvent:l,signature:c,dependencies:h,event:p}),r=yi.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,n,i,r,s){let o;return o=t.signature?hi(e,n,i,0,t.signature):n!=t.source?hn(e,t.source):s&&sn(n)?hn(e,n):e.__data[n],t.negate&&(o=!o),o}}})),Pi=[],xi=[];function Ei(e){xi.push(e)}const Ai=zt((e=>{const t=On(e);function n(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const n=e.properties;n&&(t=function(e){const t={};for(let n in e){const i=e[n];t[n]="function"==typeof i?{type:i}:i}return t}(n))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){Ei(this.prototype);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=n(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r})),Oi=window.ShadyCSS&&window.ShadyCSS.cssBuild,ki=zt((e=>{const t=Ai(Si(e));function n(e,t,n,i){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,i)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===n.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===n.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,i[n.observer]),e._addPropertyToAttributeMap(t)}return class extends t{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):kt||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)n(this.prototype,t,e[t],e)}static createObservers(e,t){const n=this.prototype;for(let i=0;i<e.length;i++)n._createMethodObserver(e[i],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof e&&(e=e()),this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!At||Ot)&&(t=Kt.import(e,"template"),At&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=wt(e.url);else{const e=Kt.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Pt,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let i=t[n];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=i)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return vt(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const n=this.importPath;(function(e,t,n,i){if(!Oi){const r=t.content.querySelectorAll("style"),s=en(t),o=function(e){let t=Xt(e);return t?tn(t):[]}(n),a=t.content.firstElementChild;for(let n=0;n<o.length;n++){let r=o[n];r.textContent=e._processStyleText(r.textContent,i),t.content.insertBefore(r,a)}let l=0;for(let t=0;t<s.length;t++){let n=s[t],o=r[l];o!==n?(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)):l++,n.textContent=e._processStyleText(n.textContent,i)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),Ht&&Oi&&St){const n=t.content.querySelectorAll("style");if(n){let t="";Array.from(n).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}})(this,t,e,n?bt(n):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=rn(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Nt&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=bt(this.importPath)),bt(e,t)}static _parseTemplateContent(e,n,i){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,i)}static _addTemplatePropertyEffect(e,n,i){return!Tt||n in this._properties||i.info.part.signature&&i.info.part.signature.static||i.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,i)}}}));class Ti{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,Ni.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Ni.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,n){return e instanceof Ti?e._cancelAsync():e=new Ti,e.setConfig(t,n),e}}let Ni=new Set;const Ii=function(e){Ni.add(e)},$i=function(){const e=Boolean(Ni.size);return Ni.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e};let Mi="string"==typeof document.head.style.touchAction,Di="__polymerGestures",Ri="__polymerGesturesHandled",Li="__polymerGesturesTouchAction",Hi=["mousedown","mousemove","mouseup","click"],Fi=[0,1,4,2],Bi=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function zi(e){return Hi.indexOf(e)>-1}let ji=!1;function Vi(e){if(!zi(e)&&"touchend"!==e)return Mi&&ji&&Et?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){ji=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Ui=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const qi=[],Ki={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Yi={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ji(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let n=e.getRootNode();if(e.id){let i=n.querySelectorAll(`label[for = '${e.id}']`);for(let e=0;e<i.length;e++)t.push(i[e])}}catch(e){}}return t}let Wi=function(e){let t=e.sourceCapabilities;var n;if((!t||t.firesTouchEvents)&&(e[Ri]={skip:!0},"click"===e.type)){let t=!1,i=tr(e);for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)qi.push(i[e]);else if(n=i[e],Ki[n.localName]){let n=Ji(i[e]);for(let e=0;e<n.length;e++)t=t||qi.indexOf(n[e])>-1}if(i[e]===Zi.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Xi(e){let t=Ui?["click"]:Hi;for(let n,i=0;i<t.length;i++)n=t[i],e?(qi.length=0,document.addEventListener(n,Wi,!0)):document.removeEventListener(n,Wi,!0)}function Gi(e){let t=e.type;if(!zi(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Bi&&(t=Fi[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let Zi={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Qi(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function er(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){Zi.mouse.mouseIgnoreJob||Xi(!0),Zi.mouse.target=tr(e)[0],Zi.mouse.mouseIgnoreJob=Ti.debounce(Zi.mouse.mouseIgnoreJob,xn.after(2500),(function(){Xi(),Zi.mouse.target=null,Zi.mouse.mouseIgnoreJob=null}))}),!!ji&&{passive:!0});const tr=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],nr={},ir=[];function rr(e){const t=tr(e);return t.length>0?t[0]:e.target}function sr(e){let t,n=e.type,i=e.currentTarget[Di];if(!i)return;let r=i[n];if(r){if(!e[Ri]&&(e[Ri]={},"touch"===n.slice(0,5))){let t=e.changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(Zi.touch.id=t.identifier),Zi.touch.id!==t.identifier)return;Mi||"touchstart"!==n&&"touchmove"!==n||function(e){let t=e.changedTouches[0],n=e.type;if("touchstart"===n)Zi.touch.x=t.clientX,Zi.touch.y=t.clientY,Zi.touch.scrollDecided=!1;else if("touchmove"===n){if(Zi.touch.scrollDecided)return;Zi.touch.scrollDecided=!0;let n=function(e){let t="auto",n=tr(e);for(let e,i=0;i<n.length;i++)if(e=n[i],e[Li]){t=e[Li];break}return t}(e),i=!1,r=Math.abs(Zi.touch.x-t.clientX),s=Math.abs(Zi.touch.y-t.clientY);e.cancelable&&("none"===n?i=!0:"pan-x"===n?i=s>r:"pan-y"===n&&(i=r>s)),i?e.preventDefault():pr("track")}}(e)}if(t=e[Ri],!t.skip){for(let n,i=0;i<ir.length;i++)n=ir[i],r[n.name]&&!t[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let i,s=0;s<ir.length;s++)i=ir[s],r[i.name]&&!t[i.name]&&(t[i.name]=!0,i[n](e))}}}function or(e){ir.push(e);for(let t=0;t<e.emits.length;t++)nr[e.emits[t]]=e}function ar(e,t){Mi&&e instanceof HTMLElement&&En.run((()=>{e.style.touchAction=t})),e[Li]=t}function lr(e,t,n){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,rn(e).dispatchEvent(i),i.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function pr(e){let t=function(e){for(let t,n=0;n<ir.length;n++){t=ir[n];for(let n,i=0;i<t.emits.length;i++)if(n=t.emits[i],n===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function dr(e,t,n,i){t&&lr(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:function(e){return pr(e)}})}function cr(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),r=Math.abs(e.y-n);return i>=5||r>=5}function hr(e,t,n){if(!t)return;let i,r=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],o=s.x-e.x,a=s.y-e.y,l=0;r&&(i=s.x-r.x,l=s.y-r.y),lr(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:o,dy:a,ddx:i,ddy:l,sourceEvent:n,hover:function(){return function(e,t){let n=document.elementFromPoint(e,t),i=n;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let r=i;if(i=i.shadowRoot.elementFromPoint(e,t),r===i)break;i&&(n=i)}return n}(n.clientX,n.clientY)}})}function ur(e,t,n){let i=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),s=rr(n||t);!s||Yi[s.localName]&&s.hasAttribute("disabled")||(isNaN(i)||isNaN(r)||i<=25&&r<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=rr(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),i=e.pageX,r=e.pageY;return!(i>=n.left&&i<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(t))&&(e.prevent||lr(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}or({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){er(this.info)},mousedown:function(e){if(!Gi(e))return;let t=rr(e),n=this;Qi(this.info,(function(e){Gi(e)||(dr("up",t,e),er(n.info))}),(function(e){Gi(e)&&dr("up",t,e),er(n.info)})),dr("down",t,e)},touchstart:function(e){dr("down",rr(e),e.changedTouches[0],e)},touchend:function(e){dr("up",rr(e),e.changedTouches[0],e)}}),or({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,er(this.info)},mousedown:function(e){if(!Gi(e))return;let t=rr(e),n=this,i=function(e){let i=e.clientX,r=e.clientY;cr(n.info,i,r)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&pr("tap"),n.info.addMove({x:i,y:r}),Gi(e)||(n.info.state="end",er(n.info)),t&&hr(n.info,t,e),n.info.started=!0)};Qi(this.info,i,(function(e){n.info.started&&i(e),er(n.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=rr(e),n=e.changedTouches[0],i=n.clientX,r=n.clientY;cr(this.info,i,r)&&("start"===this.info.state&&pr("tap"),this.info.addMove({x:i,y:r}),hr(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=rr(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),hr(this.info,t,n))}}),or({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Gi(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Gi(e)&&ur(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){ur(this.info,e.changedTouches[0],e)}});const fr=zt((e=>class extends e{_addEventListenerToNode(e,t,n){(function(e,t,n){return!!nr[t]&&(function(e,t,n){let i=nr[t],r=i.deps,s=i.name,o=e[Di];o||(e[Di]=o={});for(let t,n,i=0;i<r.length;i++)t=r[i],Ui&&zi(t)&&"click"!==t||(n=o[t],n||(o[t]=n={_count:0}),0===n._count&&e.addEventListener(t,sr,Vi(t)),n[s]=(n[s]||0)+1,n._count=(n._count||0)+1);e.addEventListener(t,n),i.touchAction&&ar(e,i.touchAction)}(e,t,n),!0)})(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){(function(e,t,n){return!!nr[t]&&(function(e,t,n){let i=nr[t],r=i.deps,s=i.name,o=e[Di];if(o)for(let t,n,i=0;i<r.length;i++)t=r[i],n=o[t],n&&n[s]&&(n[s]=(n[s]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(t,sr,Vi(t)));e.removeEventListener(t,n)}(e,t,n),!0)})(e,t,n)||super._removeEventListenerFromNode(e,t,n)}})),_r=/:host\(:dir\((ltr|rtl)\)\)/g,yr=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,mr=/:dir\((?:ltr|rtl)\)/,gr=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),br=[];let vr=null,wr="";function Cr(){wr=document.documentElement.getAttribute("dir")}function Sr(e){e.__autoDirOptOut||e.setAttribute("dir",wr)}function Pr(){Cr(),wr=document.documentElement.getAttribute("dir");for(let e=0;e<br.length;e++)Sr(br[e])}const xr=zt((e=>{gr||vr||(Cr(),vr=new MutationObserver(Pr),vr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=In(e);class n extends t{static _processStyleText(e,n){return e=t._processStyleText.call(this,e,n),!gr&&mr.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(_r,':host([dir="$1"])'),t=t.replace(yr,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(vr&&vr.takeRecords().length&&Pr(),br.push(this),Sr(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=br.indexOf(this);e>-1&&br.splice(e,1)}}}return n.__activateDir=!1,n}));function Er(){document.body.removeAttribute("unresolved")}function Ar(e,t,n){return{index:e,removed:t,addedCount:n}}"interactive"===document.readyState||"complete"===document.readyState?Er():window.addEventListener("DOMContentLoaded",Er);const Or=0,kr=1,Tr=2,Nr=3;function Ir(e,t){return function(e,t,n,i,r,s){let o,a=0,l=0,p=Math.min(n-t,s-r);if(0==t&&0==r&&(a=function(e,t,n){for(let i=0;i<n;i++)if(!$r(e[i],t[i]))return i;return n}(e,i,p)),n==e.length&&s==i.length&&(l=function(e,t,n){let i=e.length,r=t.length,s=0;for(;s<n&&$r(e[--i],t[--r]);)s++;return s}(e,i,p-a)),r+=a,s-=l,(n-=l)-(t+=a)==0&&s-r==0)return[];if(t==n){for(o=Ar(t,[],0);r<s;)o.removed.push(i[r++]);return[o]}if(r==s)return[Ar(t,[],n-t)];let d=function(e){let t=e.length-1,n=e[0].length-1,i=e[t][n],r=[];for(;t>0||n>0;){if(0==t){r.push(Tr),n--;continue}if(0==n){r.push(Nr),t--;continue}let s,o=e[t-1][n-1],a=e[t-1][n],l=e[t][n-1];s=a<l?a<o?a:o:l<o?l:o,s==o?(o==i?r.push(Or):(r.push(kr),i=o),t--,n--):s==a?(r.push(Nr),t--,i=a):(r.push(Tr),n--,i=l)}return r.reverse(),r}(function(e,t,n,i,r,s){let o=s-r+1,a=n-t+1,l=new Array(o);for(let e=0;e<o;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let n=1;n<o;n++)for(let s=1;s<a;s++)if($r(e[t+s-1],i[r+n-1]))l[n][s]=l[n-1][s-1];else{let e=l[n-1][s]+1,t=l[n][s-1]+1;l[n][s]=e<t?e:t}return l}(e,t,n,i,r,s));o=void 0;let c=[],h=t,u=r;for(let e=0;e<d.length;e++)switch(d[e]){case Or:o&&(c.push(o),o=void 0),h++,u++;break;case kr:o||(o=Ar(h,[],0)),o.addedCount++,h++,o.removed.push(i[u]),u++;break;case Tr:o||(o=Ar(h,[],0)),o.addedCount++,h++;break;case Nr:o||(o=Ar(h,[],0)),o.removed.push(i[u]),u++}return o&&c.push(o),c}(e,0,e.length,t,0,t.length)}function $r(e,t){return e===t}function Mr(e){return"slot"===e.localName}let Dr=class{static getFlattenedNodes(e){const t=rn(e);return Mr(e)?t.assignedNodes({flatten:!0}):Array.from(t.childNodes).map((e=>Mr(e)?rn(e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Mr(this._target)?this._listenSlots([this._target]):rn(this._target).children&&(this._listenSlots(rn(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Mr(this._target)?this._unlistenSlots([this._target]):rn(this._target).children&&(this._unlistenSlots(rn(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,En.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=Ir(t,this._effectiveNodes);for(let t,i=0;i<n.length&&(t=n[i]);i++)for(let n,i=0;i<t.removed.length&&(n=t.removed[i]);i++)e.removedNodes.push(n);for(let i,r=0;r<n.length&&(i=n[r]);r++)for(let n=i.index;n<i.index+i.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Mr(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Mr(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};const Rr=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=$i()}while(e||t)},Lr=Element.prototype,Hr=Lr.matches||Lr.matchesSelector||Lr.mozMatchesSelector||Lr.msMatchesSelector||Lr.oMatchesSelector||Lr.webkitMatchesSelector,Fr=function(e,t){return Hr.call(e,t)};class Br{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Dr(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(rn(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=rn(t).parentNode||rn(t).host;return t===this.node}getOwnerRoot(){return rn(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?rn(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=rn(this.node).assignedSlot;for(;t;)e.push(t),t=rn(t).assignedSlot;return e}importNode(e,t){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return rn(n).importNode(e,t)}getEffectiveChildNodes(){return Dr.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let i,r=0,s=t.length;r<s&&(i=t[r]);r++)i.nodeType===Node.ELEMENT_NODE&&Fr(i,e)&&n.push(i);return n}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function zr(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}class jr{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Br.prototype.cloneNode,Br.prototype.appendChild,Br.prototype.insertBefore,Br.prototype.removeChild,Br.prototype.replaceChild,Br.prototype.setAttribute,Br.prototype.removeAttribute,Br.prototype.querySelector,Br.prototype.querySelectorAll,Br.prototype.parentNode,Br.prototype.firstChild,Br.prototype.lastChild,Br.prototype.nextSibling,Br.prototype.previousSibling,Br.prototype.firstElementChild,Br.prototype.lastElementChild,Br.prototype.nextElementSibling,Br.prototype.previousElementSibling,Br.prototype.childNodes,Br.prototype.children,Br.prototype.classList,Br.prototype.textContent,Br.prototype.innerHTML;let Vr=Br;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Br.prototype).forEach((t=>{"activeElement"!=t&&(e.prototype[t]=Br.prototype[t])})),zr(e.prototype,["classList"]),Vr=e,Object.defineProperties(jr.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&Ur(e).getOwnerRoot(),n=this.path;for(let e=0;e<n.length;e++){const i=n[e];if(Ur(i).getOwnerRoot()===t)return i}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let n=0;n<t.length;n++){let i=t[n];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}(Br.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),zr(Br.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),function(e,t){for(let n=0;n<t.length;n++){let i=t[n];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(e){this.node[i]=e},configurable:!0})}}(Br.prototype,["textContent","innerHTML","className"]);const Ur=function(e){if((e=e||document)instanceof Vr)return e;if(e instanceof jr)return e;let t=e.__domApi;return t||(t=e instanceof Event?new jr(e):new Vr(e),e.__domApi=t),t},qr=window.ShadyDOM,Kr=window.ShadyCSS;function Yr(e,t){return rn(e).getRootNode()===t}const Jr="disable-upgrade",Wr=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]},Xr=(zt((e=>{const t=ki(e);let n=Wr(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return n.call(this).concat(Jr)}_initializeProperties(){this.hasAttribute(Jr)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,n,i){e==Jr?this.__isUpgradeDisabled&&null==n&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,rn(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,n,i)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}})),"disable-upgrade");let Gr=window.ShadyCSS;const Zr=zt((e=>{const t=fr(ki(e)),n=Oi?t:xr(t),i=Wr(n),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends n{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,n){(this.__dataAttributes&&this.__dataAttributes[e]||e===Xr)&&this.attributeChangedCallback(e,t,n,null)}setAttribute(e,t){if(Lt&&!this._legacyForceObservedAttributes){const n=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,n,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(Lt&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return Lt&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],Ei(this.prototype)),this.__observedAttributes):i.call(this).concat(Xr)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,n,i){t!==n&&(e==Xr?this.__isUpgradeDisabled&&null==n&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,rn(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,n,i),this.attributeChanged(e,t,n)))}attributeChanged(e,t,n){}_initializeProperties(){if(kt&&this.hasAttribute(Xr))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Lt&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,n=e.length;t<n;t++){const n=e[t];this.__attributeReaction(n.name,null,n.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!e||!t)return e||t;let n=Object.getOwnPropertyNames(t);for(let i,r=0;r<n.length&&(i=n[r]);r++){let n=Object.getOwnPropertyDescriptor(t,i);n&&Object.defineProperty(e,i,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n=n||{},t=null==t?{}:t;let i=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});i.detail=t;let r=n.node||this;return rn(r).dispatchEvent(i),i}listen(e,t,n){e=e||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),r=i.get(e);r||(r={},i.set(e,r));let s=t+n;r[s]||(r[s]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e=e||this;let i=this.__boundListeners&&this.__boundListeners.get(e),r=t+n,s=i&&i[r];s&&(this._removeEventListenerFromNode(e,t,s),i[r]=null)}setScrollDirection(e,t){ar(t||this,r[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=rn(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Ur(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Ur(this).getEffectiveChildNodes()}queryDistributedElements(e){return Ur(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n,i=0;n=e[i];i++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Ur(t).getDistributedNodes():[]}getContentChildren(e){let t=this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}));return t}isLightDescendant(e){const t=this;return t!==e&&rn(t).contains(e)&&rn(t).getRootNode()===rn(e).getRootNode()}isLocalDescendant(e){return this.root===rn(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!qr||!Kr)return null;if(!qr.handlesDynamicScoping)return null;const n=Kr.ScopingShim;if(!n)return null;const i=n.scopeForNode(e),r=rn(e).getRootNode(),s=e=>{if(!Yr(e,r))return;const t=Array.from(qr.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const s=t[e];if(!Yr(s,r))continue;const o=n.currentScopeForNode(s);o!==i&&(""!==o&&n.unscopeNode(s,o),n.scopeNode(s,i))}};if(s(e),t){const t=new MutationObserver((e=>{for(let t=0;t<e.length;t++){const n=e[t];for(let e=0;e<n.addedNodes.length;e++){const t=n.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&s(t)}}}));return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Gr.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=Ti.debounce(this._debouncers[e],n>0?xn.after(n):En,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?xn.run(e.bind(this),t):~En.run(e.bind(this))}cancelAsync(e){e<0?En.cancel(~e):xn.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let e in t)n[e]=t[e];return n}elementMatches(e,t){return Fr(t||this,e)}toggleAttribute(e,t){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(t=!n.hasAttribute(e)),t?(rn(n).setAttribute(e,""),!0):(rn(n).removeAttribute(e),!1)}toggleClass(e,t,n){n=n||this,1==arguments.length&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,i){i=i||this,this.transform("translate3d("+e+","+t+","+n+")",i)}arrayDelete(e,t){let n;if(Array.isArray(e)){if(n=e.indexOf(t),n>=0)return e.splice(n,1)}else if(n=hn(this,e).indexOf(t),n>=0)return this.splice(e,n,1);return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return s.prototype.is="",s})),Qr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},es={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},ts=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},es);function ns(e,t,n,i){!function(e,t,n){const i=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let s=0;s<r.length;s++){let o=r[s];if(!(o in n))if(i)t[o]=e[o];else{let n=Object.getOwnPropertyDescriptor(e,o);n&&(n.configurable=!0,Object.defineProperty(t,o,n))}}}(t,e,i);for(let e in Qr)t[e]&&(n[e]=n[e]||[],n[e].push(t[e]))}function is(e,t,n){t=t||[];for(let i=e.length-1;i>=0;i--){let r=e[i];r?Array.isArray(r)?is(r,t):t.indexOf(r)<0&&(!n||n.indexOf(r)<0)&&t.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return t}function rs(e,t){for(const n in t){const i=e[n],r=t[n];e[n]=!("value"in r)&&i&&"value"in i?Object.assign({value:i.value},r):r}}const ss=Zr(HTMLElement);function os(e,t,n){let i;const r={};class s extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(i)for(let e,t=0;t<i.length;t++)e=i[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(i)for(let e=0;e<i.length;e++)rs(t,i[e].properties);return rs(t,e.properties),t}static get observers(){let t=[];if(i)for(let e,n=0;n<i.length;n++)e=i[n],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=r.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=s.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),kt&&o(e);const t=Object.getPrototypeOf(this);let n=r.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=r.registered,n)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();const e=r.listeners;if(e)for(let t=0;t<e.length;t++){const n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){const e=r.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=r.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=r.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=r.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let i=r.attributeChanged;if(i)for(let r=0;r<i.length;r++)i[r].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;i=is(n,null,e),s.prototype.behaviors=e?e.concat(n):i}const o=t=>{i&&function(e,t,n){for(let i=0;i<t.length;i++)ns(e,t[i],n,ts)}(t,i,r),ns(t,e,r,es)};return kt||o(s.prototype),s.generatedFrom=e,s}const as=function(e){let t;return t="function"==typeof e?e:as.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};function ls(e,t,n,i,r){let s;r&&(s="object"==typeof n&&null!==n,s&&(i=e.__dataTemp[t]));let o=i!==n&&(i==i||n==n);return s&&o&&(e.__dataTemp[t]=n),o}as.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(ss):ss;return n=os(e,n,e.behaviors),n.is=n.prototype.is=e.is,n};const ps=zt((e=>class extends e{_shouldPropertyChange(e,t,n){return ls(this,e,t,n,!0)}})),ds=zt((e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return ls(this,e,t,n,this.mutableData)}}));ps._mutablePropertyChange=ls;let cs=null;function hs(){return cs}hs.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:hs,writable:!0}});const us=Si(hs),fs=ps(us),_s=Si(class{});function ys(e,t){for(let n=0;n<t.length;n++){let i=t[n];if(Boolean(e)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),rn(rn(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const e=i.__polymerReplaced__;e&&rn(rn(e).parentNode).replaceChild(i,e)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}class ms extends _s{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(e=>{e.model=this,n(e)}));else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,t,n)}}_showHideChildren(e){ys(e,this.children)}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}ms.prototype.__dataHost,ms.prototype.__templatizeOptions,ms.prototype._methodHost,ms.prototype.__templatizeOwner,ms.prototype.__hostProps;const gs=ps(ms);function bs(e){let t=e.__dataHost;return t&&t._methodHost||t}function vs(e,t){return function(e,n,i){t.call(e.__templatizeOwner,n.substring(6),i[n])}}function ws(e,t){return function(e,n,i){t.call(e.__templatizeOwner,e,n,i[n])}}function Cs(e,t,n){if(At&&!bs(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:ms)._parseTemplate(e),r=i.templatizeInstanceClass;r||(r=function(e,t,n){let i=n.mutableData?gs:ms;Cs.mixin&&(i=Cs.mixin(i));let r=class extends i{};return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(e),function(e,t,n,i){let r=n.hostProps||{};for(let t in i.instanceProps){delete r[t];let n=i.notifyInstanceProp;n&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ws(0,n)})}if(i.forwardHostProp&&t.__dataHost)for(let t in r)n.hasHostProps||(n.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,n){e.__dataHost._setPendingPropertyOrPath("_host_"+t,n[t],!0,!0)}})}(r,e,t,n),r}(e,i,n),i.templatizeInstanceClass=r);const s=bs(e);!function(e,t,n,i){let r=n.forwardHostProp;if(r&&t.hasHostProps){const s="template"==e.localName;let o=t.templatizeTemplateClass;if(!o){if(s){let e=n.mutableData?fs:us;class i extends e{}o=t.templatizeTemplateClass=i}else{const n=e.constructor;class i extends n{}o=t.templatizeTemplateClass=i}let a=t.hostProps;for(let e in a)o.prototype._addPropertyEffect("_host_"+e,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:vs(0,r)}),o.prototype._createNotifyingProperty("_host_"+e);Tt&&i&&function(e,t,n){const i=n.constructor._properties,{propertyEffects:r}=e,{instanceProps:s}=t;for(let e in r)if(!(i[e]||s&&s[e])){const t=r[e];for(let n=0;n<t.length;n++){const{part:i}=t[n].info;if(!i.signature||!i.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,n,i)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),s)!function(e,t){cs=e,Object.setPrototypeOf(e,t.prototype),new t,cs=null}(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);const n=t.hostProps;for(let t in n)if(t="_host_"+t,t in e){const n=e[t];delete e[t],e.__data[t]=n}}}}(e,i,n,s);let o=class extends r{};return o.prototype._methodHost=s,o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=i.hostProps,o}let Ss=!1;function Ps(){if(kt&&!Ct){if(!Ss){Ss=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const xs=fr(ds(Si(HTMLElement)));customElements.define("dom-bind",class extends xs{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),At)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,n,i){this.mutableData=!0}connectedCallback(){Ps()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){rn(rn(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});const Es=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class As{constructor(e,t){Ts(e,t);const n=t.reduce(((t,n,i)=>t+Os(n)+e[i+1]),e[0]);this.value=n.toString()}toString(){return this.value}}function Os(e){if(e instanceof As)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const ks=function(e,...t){Ts(e,t);const n=document.createElement("template");let i=t.reduce(((t,n,i)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof As)return Os(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(n)+e[i+1]),e[0]);return Es&&(i=Es.createHTML(i)),n.innerHTML=i,n},Ts=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")},Ns=ki(HTMLElement),Is=ds(Ns);class $s extends Is{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Rt,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Ps()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=rn(rn(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=Cs(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(e,t){let n=this.__instances;for(let i,r=0;r<n.length&&(i=n[r]);r++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if((i=this.as)===(r=t)||an(i,r)||ln(i,r)){let i=e[this.itemsIndexAs];t==this.as&&(this.items[i]=n);let r=pn(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,t);this.notifyPath(r,n)}var i,r}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)0===e.indexOf(t[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=Ti.debounce(this.__renderDebouncer,t>0?xn.after(t):En,e.bind(this)),Ii(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Rr()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),n=this.__calculateLimit(t.length);this.__updateInstances(e,n,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame((()=>{this.__chunkingId=null,this.__continueChunking()}))),this._setRenderedItemCount(this.__instances.length),Rt&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;return this.__filterFn&&(t=t.filter(((t,n,i)=>this.__filterFn(e[t],n,i)))),this.__sortFn&&t.sort(((t,n)=>this.__sortFn(e[t],e[n]))),t}__calculateLimit(e){let t=e;const n=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),i=Math.max(t-n,0),this.__chunkCount=i||1):(i=Math.min(Math.max(e-n,0),this.__chunkCount),t=Math.min(n+i,e)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,n){const i=this.__itemsIdxToInstIdx={};let r;for(r=0;r<t;r++){let t=this.__instances[r],s=n[r],o=e[s];i[s]=r,t?(t._setPendingProperty(this.as,o),t._setPendingProperty(this.indexAs,r),t._setPendingProperty(this.itemsIndexAs,s),t._flushProperties()):this.__insertInstance(o,r,s)}for(let e=this.__instances.length-1;e>=r;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const n=rn(t.root);for(let e=0;e<t.children.length;e++){let i=t.children[e];n.appendChild(i)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,n){let i={};return i[this.as]=e,i[this.indexAs]=t,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(e,t,n){const i=this.__stampInstance(e,t,n);let r=this.__instances[t+1],s=r?r.children[0]:this;return rn(rn(this).parentNode).insertBefore(i.root,s),this.__instances[t]=i,i}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),i=n.indexOf("."),r=i<0?n:n.substring(0,i);if(r==parseInt(r,10)){let e=i<0?"":n.substring(i+1);this.__handleObservedPaths(e);let s=this.__itemsIdxToInstIdx[r],o=this.__instances[s];if(o){let n=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(n,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let n;for(;t;)if(n=t.__dataHost?t:t.__templatizeInstance){if(n.__dataHost==e)return n;t=n.__dataHost}else t=rn(t).parentNode;return null}(this.template,e)}}customElements.define($s.is,$s);class Ms extends Ns{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Ti.debounce(this.__renderDebouncer,En,(()=>this.__render())),Ii(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=rn(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||rn(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Ps()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:rn(e).querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!rn(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=rn(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length&&rn(this).previousSibling!==t[t.length-1])for(let n,i=0;i<t.length&&(n=t[i]);i++)rn(e).insertBefore(n,this)}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){Rr()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),Rt&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const Ds=Dt?class extends Ms{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(At&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=t._bindTemplate(this.__template,!0);n.runEffects=(e,t,n)=>{let i=this.__syncInfo;if(this.if)i&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(i.changedProps,t)),e(t,n);else if(this.__instance)if(i||(i=this.__syncInfo={runEffects:e,changedProps:{}}),n)for(const e in t){const t=on(e);i.changedProps[t]=this.__dataHost[t]}else Object.assign(i.changedProps,t)},this.__instance=t._stampTemplate(this.__template,n),rn(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,ys(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends Ms{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Cs(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[on(e)]=!0))}})),this.__instance=new this.__ctor,rn(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=rn(e[0]).parentNode;if(t){t=rn(t);for(let n,i=0;i<e.length&&(n=e[i]);i++)t.removeChild(n)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(Ds.is,Ds);let Rs=zt((e=>{let t=ki(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty("items",this)){let n=t.base||[],i=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),i){let e=Ir(n,i);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let n=0;n<e.length;n++){let i=e[n];t.forEach(((e,n)=>{e<i.index||(e>=i.index+i.removed.length?t.set(n,e+i.addedCount-i.removed.length):t.set(n,-1))}));for(let e=0;e<i.addedCount;e++){let n=i.index+e;t.has(this.items[n])&&t.set(this.items[n],n)}}this.__updateLinks();let n=0;t.forEach(((e,i)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,t.delete(i)):n++}))}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)}))}else this.__selectedMap.forEach((e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)}))}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((n,i)=>{t==e++&&this.deselect(i)}))}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let n;this.__selectedMap.delete(e),this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})),Ls=Rs(Ns);class Hs extends Ls{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Hs.is,Hs);const Fs=new ht;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){Fs.processStyles(),ze(e,t)},styleElement(e){Fs.processStyles()},styleDocument(e){Fs.processStyles(),ze(document.body,e)},getComputedStyleValue:(e,t)=>je(e,t),flushCustomStyles(){},nativeCss:me,nativeShadow:he,cssBuild:fe,disableRuntime:ye}),window.ShadyCSS.CustomStyleInterface=Fs;const Bs="include",zs=window.ShadyCSS.CustomStyleInterface;class js extends HTMLElement{constructor(){super(),this._style=null,zs.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(Bs);return t&&(e.removeAttribute(Bs),e.textContent=function(e){let t=e.trim().split(/\s+/),n="";for(let e=0;e<t.length;e++)n+=nn(t[e]);return n}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}let Vs;window.customElements.define("custom-style",js),Vs=ps._mutablePropertyChange,Boolean,Zr(HTMLElement).prototype;const Us=as({_template:ks`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){Us.instance||(Us.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),this.timeout)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});Us.instance=null,Us.requestAvailability=function(){Us.instance||(Us.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(Us.instance):document.addEventListener("load",(function(){document.body.appendChild(Us.instance)}))};class qs{constructor(e){qs[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return qs.types[e]&&qs.types[e][t]}set value(e){var t=this.type,n=this.key;t&&n&&(t=qs.types[t]=qs.types[t]||{},null==e?delete t[n]:t[n]=e)}get list(){if(this.type){var e=qs.types[this.type];return e?Object.keys(e).map((function(e){return Ks[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}qs[" "]=function(){},qs.types={};var Ks=qs.types;as({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,n){var i=new qs({type:e,key:t});return void 0!==n&&n!==i.value?i.value=n:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new qs({type:this.type,key:e}).value}});let Ys=null;const Js={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){Ys=new qs({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return Ys&&Ys.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}};if(as({_template:ks`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[Js],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){Us.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=Ur(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(Ur(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;return this.allowedPattern?e=new RegExp(this.allowedPattern):"number"===this.inputElement.type&&(e=/[0-9.,e-]/),e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput)),this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,n=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&n)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var n=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(n)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+n+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=Js.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}}),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}const Ws=ks`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;Ws.setAttribute("style","display: none;"),document.head.appendChild(Ws.content);const Xs={attached:function(){this.fire("addon-attached")},update:function(e){}};as({_template:ks`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[Xs],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}});const Gs=ks`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Gs.setAttribute("style","display: none;"),document.head.appendChild(Gs.content);var Zs=document.createElement("style");Zs.textContent="[hidden] { display: none !important; }",document.head.appendChild(Zs);const Qs=ks`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Qs.setAttribute("style","display: none;"),document.head.appendChild(Qs.content);const eo=ks`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;eo.setAttribute("style","display: none;"),document.head.appendChild(eo.content);const to=ks`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;to.setAttribute("style","display: none;"),document.head.appendChild(to.content),as({_template:ks`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return mn(this.attrForValue)},get _inputElement(){return Ur(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;t||0===t||"number"===e.type&&!e.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){var t;this.autoValidate&&e&&(t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t),this._handleValue(e)},_onIronInputValidate:function(e){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t,n=0;t=this._addons[n];n++)t.update(e)},_computeInputContentClass:function(e,t,n,i,r){var s="input-content";if(e)r&&(s+=" label-is-hidden"),i&&(s+=" is-invalid");else{var o=this.querySelector("label");t||r?(s+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",i?s+=" is-invalid":n&&(s+=" label-is-highlighted")):(o&&(this.$.labelAndInputContainer.style.position="relative"),i&&(s+=" is-invalid"))}return n&&(s+=" focused"),s},_computeUnderlineClass:function(e,t){var n="underline";return t?n+=" is-invalid":e&&(n+=" is-highlighted"),n},_computeAddOnContentClass:function(e,t){var n="add-on-content";return t?n+=" is-invalid":e&&(n+=" is-highlighted"),n}}),as({_template:ks`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[Xs],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}});const no={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};var io={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},ro={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},so={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},oo=/[a-z0-9*]/,ao=/U\+/,lo=/^arrow/,po=/^space(bar)?/,co=/^escape$/;function ho(e,t){var n="";if(e){var i=e.toLowerCase();" "===i||po.test(i)?n="space":co.test(i)?n="esc":1==i.length?t&&!oo.test(i)||(n=i):n=lo.test(i)?i.replace("arrow",""):"multiply"==i?"*":i}return n}function uo(e,t){return n=t,i=e.hasModifiers,(n.key?ho(n.key,i):n.detail&&n.detail.key?ho(n.detail.key,i):(s="",(r=n.keyIdentifier)&&(r in io?s=io[r]:ao.test(r)?(r=parseInt(r.replace("U+","0x"),16),s=String.fromCharCode(r).toLowerCase()):s=r.toLowerCase()),s||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):ro[e]),t}(n.keyCode)||""))===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey);var n,i,r,s}function fo(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var n=t.split(":"),i=n[0],r=n[1];return i in so?(e[so[i]]=!0,e.hasModifiers=!0):(e.key=i,e.event=r||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const _o={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var n=fo(t),i=0;i<n.length;++i)if(uo(n[i],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var n=e[0].hasModifiers;return n===t[0].hasModifiers?0:n?-1:1}))},_addKeyBinding:function(e,t){fo(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],n=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,n]),this.keyEventTarget.addEventListener(e,n)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,n,i;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],n=e[1],i=e[2],t.removeEventListener(n,i)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var n=0;n<e.length;n++){var i=e[n][0],r=e[n][1];if(uo(i,t)&&(this._triggerKeyHandler(i,r,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,n){var i=Object.create(e);i.keyboardEvent=n;var r=new CustomEvent(e.event,{detail:i,cancelable:!0});this[t].call(this,r),r.defaultPrevented&&n.preventDefault()}},yo={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}},mo={NextLabelID:1,NextAddonID:1,NextInputID:1},go={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!Ns&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e?e+" "+t:t},_onAddonAttached:function(e){var t=Ur(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var n="paper-input-add-on-"+mo.NextAddonID++;t.id=n,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,n)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){yo._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(e){try{var t=this.inputElement.selectionStart;this.value=e,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch(t){this.value=e}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var e,t=Ur(this.root).querySelector("label");t?(t.id?e=t.id:(e="paper-input-label-"+mo.NextLabelID++,t.id=e),this._ariaLabelledBy=e):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+mo.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement;e instanceof HTMLElement&&e!==document.body&&e!==document.documentElement||this._focusableElement.focus()}}};as({is:"paper-input",_template:ks`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[[yo,_o,go],no],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});var bo=function(e,t,n,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,n,o):r(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let vo=class extends ie{constructor(){super(...arguments),this.config={}}render(){return L`
      <div>
        <ha-config-section>
          <div class="card-config">
            <paper-input
              label="Header"
              .value=${this.config.header||""}
              @value-changed=${this._handleHeaderChanged}
            ></paper-input>
            <paper-input
              label="Entity"
              .value=${this.config.entity||""}
              @value-changed=${this._handleEntityChanged}
            ></paper-input>
          </div>
        </ha-config-section>
      </div>
    `}_handleHeaderChanged(e){const t=e.target;this.config={...this.config,header:t.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config}}))}_handleEntityChanged(e){const t=e.target;this.config={...this.config,entity:t.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config}}))}};bo([ae({type:Object}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],vo.prototype,"config",void 0),vo=bo([se("my-card-editor")],vo),window.customCards=window.customCards||[],window.customCards.push({type:"custom:ahoj-tlacitko-upravitelne-hacs-ts",name:"Toggle card with TypeScript",description:"Turn an entity on and off"})})();