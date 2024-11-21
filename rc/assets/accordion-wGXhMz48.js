import{r as b,a as y}from"./lit-element-vV9fql9z.js";import"./lit-html-paDGiEfB.js";import{n as e}from"./property-CzN8u98o.js";import{b as n}from"./property-types-CkH-zh1n.js";import{i as l,s as h,u as r}from"./static-DLZyqU8Z.js";import{e as f}from"./class-map-2iHk_WiG.js";import{g as p}from"./custom-element-scope-Dp4Dg8bo.js";const S=".dss-decorative-icon{height:24px;width:24px;min-width:24px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;border-radius:var(--dss-radius-xs);background-color:var(--color-primary-50);color:var(--color-primary-500);font-size:var(--icon-size-sm)}.dss-decorative-icon--md{height:32px;width:32px;min-width:32px;font-size:var(--icon-size-md);border-radius:var(--dss-radius-xs)}.dss-decorative-icon--lg{height:40px;width:40px;min-width:40px;font-size:var(--icon-size-lg);border-radius:var(--dss-radius-sm)}.dss-decorative-icon--xl{height:48px;width:48px;min-width:48px;font-size:var(--icon-size-xl);border-radius:var(--dss-radius-sm)}.dss-decorative-icon--disabled{background-color:var(--color-neutral-50);color:var(--color-neutral-500)}.dss-decorative-icon--success{background-color:var(--color-green-50);color:var(--color-green-500)}.dss-decorative-icon--error{background-color:var(--color-red-50);color:var(--color-red-500)}.dss-decorative-icon--info{background-color:var(--color-blue-50);color:var(--color-blue-500)}",m=":host{width:100%;height:-moz-fit-content;height:fit-content}.dss-accordion{width:100%}.dss-accordion--box{border:var(--dss-border-width-sm) solid var(--color-neutral-100);border-radius:var(--dss-radius-sm);background-color:var(--color-white)}.dss-accordion--inner{border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-100)}.dss-accordion-header{display:grid;grid-template-columns:1fr var(--dss-spacing-lg);padding:0 var(--dss-spacing-sm);gap:var(--dss-spacing-tiny);height:48px;align-items:center}.dss-accordion-header__info{display:flex;justify-content:space-between;align-items:center}.dss-accordion-header__action{display:flex;justify-content:flex-end;align-items:center}.dss-accordion-title{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs)}.dss-accordion-title__icon{box-sizing:border-box;width:24px;height:24px;display:flex;justify-content:center;align-items:center;background-color:var(--color-primary-50);border-radius:var(--dss-radius-xs);padding:var(--dss-spacing-xxs)}.dss-accordion-title__checkbox{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs);font-size:14px}.dss-accordion-title__text{color:var(--color-neutral-700);font-size:14px;font-weight:var(--font-semibold)}.dss-accordion-results{margin-right:var(--dss-spacing-sm);font-weight:var(--font-semibold)}.dss-accordion-header__secondary-action{margin-right:var(--dss-spacing-sm);padding-right:var(--dss-spacing-xs);border-right:var(--dss-border-width-sm) solid var(--color-neutral-400)}.dss-accordion-panel{display:none;padding:0 var(--dss-spacing-sm) var(--dss-spacing-sm);color:var(--color-neutral-900);font-size:14px}.dss-accordion--open .dss-accordion-panel{display:block}.dss-accordion-notifications{padding:0 var(--dss-spacing-xs)}",g=l`dss-icon${h(p())}`,d=l`dss-icon-button${h(p())}`,v=l`dss-badge${h(p())}`,x=l`dss-notification-badge${h(p())}`,A=i=>{const s={"dss-accordion--open":i._isOpen,"dss-accordion--box":i._accordionStyle==="box","dss-accordion--inner":i._accordionStyle==="inner"};return r`
    <div class="dss-accordion ${f(s)}">
      <div class="dss-accordion-header">
        <div class="dss-accordion-header__info">
          <div class="dss-accordion-title">
            ${i._icon?r`
                  <div
                    class="dss-decorative-icon dss-decorative-icon--sm dss-decorative-icon--${i._iconStatus}"
                  >
                    <${g} icon="${i._icon}" size="sm"></${g}>
                  </div>
                `:null}
            ${i._hasCheckbox?r`
                  <div class="dss-accordion-title__checkbox dss-form-field">
                    <slot
                      name="checkbox"
                      @click=${i._dispatchCheckboxChange}
                    ></slot>
                    <slot name="checkboxLabel"></slot>
                  </div>
                `:r`
                  <div
                    class="dss-accordion-title__text"
                    aria-expanded="${i._isOpen}"
                    @click="${i._toggleAccordion}"
                  >
                    ${i._title?r` ${i._title} `:r` ${i._type} ${i._index} `}
                  </div>
                `}
          </div>
          ${i._results&&!i._hasSecondaryAction?r`
                <div class="dss-accordion-results">
                  <${v}
                    size="md"
                    state="${i._resultsState}"
                    outlined
                    hideIcon
                    text="${i._results} ${i._resultsText}"
                  ></${v}>
                </div>
              `:null}
          ${i._notifications&&!i._hasSecondaryAction?r`
                <div class="dss-accordion-notifications">
                  <${x}
                    state="${i._notificationsState}"
                    value="${i._notifications}"
                  >
                  </${x}>
                </div>
              `:null}
          ${i._hasSecondaryAction?r`
                <div class="dss-accordion-header__secondary-action">
                  <${d}
                    size="md"
                    icon="${i._secondaryActionIcon}"
                    type="${i._secondaryActionStatus}"
                    ?disabled=${i._secondaryActionDisabled}
                    @onClick=${i._dispatchSecondaryAction}
                  ></${d}>
                </div>
              `:null}
        </div>

        <div class="dss-accordion-header__action">
          <${d}
            aria-label="${i._title} accordion"
            aria-expanded="${i._isOpen}"
            size="md"
            icon="${i._isOpen?"expand_less":"expand_more"}"
            type="primary"
            @onClick=${i._toggleAccordion}
          ></${d}>
        </div>
      </div>

      <div class="dss-accordion-panel">
        <slot></slot>
      </div>
    </div>
  `};var $=Object.defineProperty,k=Object.getOwnPropertyDescriptor,o=(i,s,t,w)=>{for(var c=k(s,t),u=i.length-1,_;u>=0;u--)(_=i[u])&&(c=_(s,t,c)||c);return c&&$(s,t,c),c};class a extends b{constructor(){super(...arguments),this._icon="",this._iconStatus="default",this._type="",this._title="",this._index=void 0,this._isOpen=!1,this._results=void 0,this._resultsText="Resultats",this._resultsState="neutral",this._accordionStyle="box",this._hasCheckbox=!1,this._hasSecondaryAction=!1,this._secondaryActionIcon="add_box",this._secondaryActionStatus="primary",this._secondaryActionDisabled=!1,this._notificationsState="default",this._notifications=void 0}static get styles(){return[y(S),y(m)]}get _checkbox(){var t;const s=((t=this.shadowRoot)==null?void 0:t.querySelector('slot[name="checkbox"]'))||void 0;return this.requestUpdate(),s==null?void 0:s.assignedElements()[0]}set icon(s){const t=this._icon;this._icon=s,this.requestUpdate("icon",t)}set iconStatus(s){const t=this._iconStatus;this._iconStatus=s,this.requestUpdate("iconStatus",t)}set titleText(s){const t=this._title;this._title=s,this.requestUpdate("title",t)}set type(s){const t=this._type;this._type=s,this.requestUpdate("type",t)}set index(s){const t=this._index;this._index=s,this.requestUpdate("index",t)}set isOpen(s){const t=this._isOpen;this._isOpen=s,this.requestUpdate("disabled",t)}set accordionStyle(s){const t=this._accordionStyle;s==="inner"?this._accordionStyle=s:this._accordionStyle="box",this.requestUpdate("accordionStyle",t)}set results(s){const t=this._results;this._results=s,this.requestUpdate("results",t)}set resultsText(s){const t=this._resultsText;this._resultsText=s,this.requestUpdate("resultsText",t)}set hasCheckbox(s){const t=this._hasCheckbox;this._hasCheckbox=s,this.requestUpdate("hasCheckbox",t)}set hasSecondaryAction(s){const t=this._hasSecondaryAction;this._hasSecondaryAction=s,this.requestUpdate("hasSecondaryAction",t)}set secondaryActionIcon(s){const t=this._secondaryActionIcon;this._secondaryActionIcon=s,this.requestUpdate("secondaryActionIcon",t)}set secondaryActionStatus(s){const t=this._secondaryActionStatus;this._secondaryActionStatus=s,this.requestUpdate("secondaryActionStatus",t)}set secondaryActionDisabled(s){const t=this._secondaryActionDisabled;this._secondaryActionDisabled=s,this.requestUpdate("secondaryActionDisabled",t)}set resultsState(s){const t=this._resultsState;this._resultsState=s,this.requestUpdate("resultsState",t)}set notificationsState(s){const t=this._notificationsState;this._notificationsState=s,this.requestUpdate("notificationsState",t)}set notifications(s){const t=this._notificationsState;this._notifications=s,this.requestUpdate("notifications",t)}_toggleAccordion(){this._isOpen=!this._isOpen,this._dispatchToggleAccordion(),this.requestUpdate()}_dispatchCheckboxChange(){const s={detail:this._checkbox.checked,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAccordionCheckboxChange",s))}_dispatchSecondaryAction(){const s={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAccordionSecondaryAction",s))}_dispatchToggleAccordion(){const s={detail:this._isOpen,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onToggleAccordion",s))}render(){return A(this)}}o([e({type:String})],a.prototype,"icon");o([e({type:String})],a.prototype,"iconStatus");o([e({type:String})],a.prototype,"titleText");o([e({type:String})],a.prototype,"type");o([e({type:Number})],a.prototype,"index");o([e(n)],a.prototype,"isOpen");o([e({type:String})],a.prototype,"accordionStyle");o([e({type:Number})],a.prototype,"results");o([e({type:String})],a.prototype,"resultsText");o([e(n)],a.prototype,"hasCheckbox");o([e(n)],a.prototype,"hasSecondaryAction");o([e({type:String})],a.prototype,"secondaryActionIcon");o([e({type:String})],a.prototype,"secondaryActionStatus");o([e(n)],a.prototype,"secondaryActionDisabled");o([e({type:String})],a.prototype,"resultsState");o([e({type:String})],a.prototype,"notificationsState");o([e({type:Number})],a.prototype,"notifications");export{a as A,S as d};
