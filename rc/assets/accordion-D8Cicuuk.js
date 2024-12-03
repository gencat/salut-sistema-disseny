import{r as b,a as _}from"./lit-element-vV9fql9z.js";import"./lit-html-paDGiEfB.js";import{n as i}from"./property-CzN8u98o.js";import{b as n}from"./property-types-CkH-zh1n.js";import{e as w}from"./class-map-2iHk_WiG.js";import{i as l,s as h,g,u as a}from"./custom-element-scope-KJWplpvx.js";const S=".dss-decorative-icon{height:24px;width:24px;min-width:24px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;border-radius:var(--dss-radius-xs);background-color:var(--color-primary-50);color:var(--color-primary-500);font-size:var(--icon-size-sm)}.dss-decorative-icon--md{height:32px;width:32px;min-width:32px;font-size:var(--icon-size-md);border-radius:var(--dss-radius-xs)}.dss-decorative-icon--lg{height:40px;width:40px;min-width:40px;font-size:var(--icon-size-lg);border-radius:var(--dss-radius-sm)}.dss-decorative-icon--xl{height:48px;width:48px;min-width:48px;font-size:var(--icon-size-xl);border-radius:var(--dss-radius-sm)}.dss-decorative-icon--disabled{background-color:var(--color-neutral-50);color:var(--color-neutral-500)}.dss-decorative-icon--success{background-color:var(--color-green-50);color:var(--color-green-500)}.dss-decorative-icon--error{background-color:var(--color-red-50);color:var(--color-red-500)}.dss-decorative-icon--info{background-color:var(--color-blue-50);color:var(--color-blue-500)}",f=":host{width:100%;height:-moz-fit-content;height:fit-content}.dss-accordion{width:100%;min-width:-moz-fit-content;min-width:fit-content}.dss-accordion--box{border:var(--dss-border-width-sm) solid var(--color-neutral-100);border-radius:var(--dss-radius-sm);background-color:var(--color-white)}.dss-accordion--inner:not(.dss-accordion--widget){border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-100)}.dss-accordion-header{display:grid;grid-template-columns:1fr var(--dss-spacing-lg);margin:0 var(--dss-spacing-md);padding:var(--dss-spacing-md) 0;gap:var(--dss-spacing-tiny);align-items:center}.dss-accordion-header__info{display:flex;justify-content:space-between;align-items:center}.dss-accordion-header__action{display:flex;justify-content:flex-end;align-items:center}.dss-accordion-title{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs)}.dss-accordion-title__icon{box-sizing:border-box;width:24px;height:24px;display:flex;justify-content:center;align-items:center;background-color:var(--color-primary-50);border-radius:var(--dss-radius-xs);padding:var(--dss-spacing-xxs)}.dss-accordion-title__checkbox{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs);font-size:14px}.dss-accordion-title__text{color:var(--color-neutral-900);font-size:18px;font-weight:var(--font-semibold);text-overflow:ellipsis;line-height:24px;max-height:24px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}.dss-accordion-results{margin-right:var(--dss-spacing-sm);font-weight:var(--font-semibold)}.dss-accordion-header__secondary-action{margin-right:var(--dss-spacing-sm);padding-right:var(--dss-spacing-xs);border-right:var(--dss-border-width-sm) solid var(--color-neutral-400)}.dss-accordion-panel{display:none;color:var(--color-neutral-900);font-size:14px;max-width:100%}.dss-accordion--open .dss-accordion-panel{display:block;padding:0 var(--dss-spacing-md) var(--dss-spacing-md)}.dss-accordion-notifications{padding:0 var(--dss-spacing-xs)}.dss-accordion--widget.dss-accordion--open .dss-accordion-header{border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-200)}.dss-accordion-widget{display:flex;align-items:center}.dss-accordion-widget__badge{display:flex;align-items:center;gap:var(--dss-spacing-md);margin-right:var(--dss-spacing-md)}.dss-accordion-widget__divider{display:block;height:24px;width:2px;background-color:var(--color-neutral-200)}.dss-accordion-widget__actions{display:flex;gap:var(--dss-spacing-xs);margin-right:var(--dss-spacing-xs)}.dss-accordion--widget .dss-accordion-panel ::slotted(*){max-width:100%}.dss-accordion--widget.dss-accordion--inner:not(.dss-accordion--open) .dss-accordion-header{padding-bottom:0;margin:0}.dss-accordion--widget.dss-accordion--inner .dss-accordion-header{padding-top:0;margin:0}.dss-accordion--widget.dss-accordion--inner .dss-accordion-panel{padding:0}",y=l`dss-icon${h(g())}`,c=l`dss-icon-button${h(g())}`,x=l`dss-badge${h(g())}`,v=l`dss-notification-badge${h(g())}`,m=e=>{const t={"dss-accordion--open":e._isOpen,"dss-accordion--box":e._accordionStyle==="box","dss-accordion--inner":e._accordionStyle==="inner","dss-accordion--widget":e._widget};return a`
    <div class="dss-accordion ${w(t)}">
      <div class="dss-accordion-header">
        <div class="dss-accordion-header__info">
          <div class="dss-accordion-title">
            ${e._icon?a`
                  <div
                    class="dss-decorative-icon dss-decorative-icon--md dss-decorative-icon--${e._iconStatus}"
                  >
                    <${y} icon="${e._icon}" size="md"></${y}>
                  </div>
                `:null}
            ${e._hasCheckbox?a`
                  <div class="dss-accordion-title__checkbox dss-form-field">
                    <slot
                      name="checkbox"
                      @click=${e._dispatchCheckboxChange}
                    ></slot>
                    <slot name="checkboxLabel"></slot>
                  </div>
                `:a`
                  <div
                    class="dss-accordion-title__text"
                    aria-expanded="${e._isOpen}"
                    @click="${e._toggleAccordion}"
                  >
                    ${e._title?a` ${e._title} `:a` ${e._type} ${e._index} `}
                  </div>
                `}
          </div>
          ${e._results&&!e._hasSecondaryAction&&!e._widget?a`
                <div class="dss-accordion-results">
                  <${x}
                    size="md"
                    state="${e._resultsState}"
                    outlined
                    hideIcon
                    text="${e._results} ${e._resultsText}"
                  ></${x}>
                </div>
              `:null}
          ${e._notifications&&!e._hasSecondaryAction&&!e._widget?a`
                <div class="dss-accordion-notifications">
                  <${v}
                    state="${e._notificationsState}"
                    value="${e._notifications}"
                  >
                  </${v}>
                </div>
              `:null}
          ${e._hasSecondaryAction&&!e._widget?a`
                <div class="dss-accordion-header__secondary-action">
                  <${c}
                    size="md"
                    icon="${e._secondaryActionIcon}"
                    type="${e._secondaryActionStatus}"
                    ?disabled=${e._secondaryActionDisabled}
                    @onClick=${e._dispatchSecondaryAction}
                  ></${c}>
                </div>
              `:null}
          ${e._widget?a`
                  <div class="dss-accordion-widget">
                    ${e._widgetBadgeText?a`
                          <div class="dss-accordion-widget__badge">
                            <dss-badge
                              size="md"
                              state="${e._widgetBadgeState}"
                              outlined
                              hideIcon
                              text="${e._widgetBadgeText}"
                            ></dss-badge>
                            <span class="dss-accordion-widget__divider"></span>
                          </div>
                        `:null}

                    <div class="dss-accordion-widget__actions">
                      ${e._widgetShowNext?a`
                            <dss-icon-button
                              size="md"
                              type="primary"
                              icon="arrow_forward"
                              @onClick="${e._dispatchWidgetNext}"
                            >
                            </dss-icon-button>
                          `:null}
                      ${e._widgetShowClose?a`
                            <dss-icon-button
                              size="md"
                              type="default"
                              icon="close"
                              @onClick="${e._dispatchWidgetClose}"
                            >
                            </dss-icon-button>
                          `:null}
                    </div>
                  </div>
                `:null}
        </div>

        <div class="dss-accordion-header__action">
          <${c}
            aria-label="${e._title} accordion"
            aria-expanded="${e._isOpen}"
            size="md"
            icon="${e._isOpen?"expand_less":"expand_more"}"
            type="primary"
            @onClick=${e._toggleAccordion}
          ></${c}>
        </div>
      </div>

      <div class="dss-accordion-panel">
        <slot></slot>
      </div>
    </div>
  `};var $=Object.defineProperty,A=Object.getOwnPropertyDescriptor,o=(e,t,s,k)=>{for(var r=A(t,s),p=e.length-1,u;p>=0;p--)(u=e[p])&&(r=u(t,s,r)||r);return r&&$(t,s,r),r};class d extends b{constructor(){super(...arguments),this._icon="",this._iconStatus="default",this._type="",this._title="",this._index=void 0,this._isOpen=!1,this._results=void 0,this._resultsText="Resultats",this._resultsState="neutral",this._accordionStyle="box",this._hasCheckbox=!1,this._hasSecondaryAction=!1,this._secondaryActionIcon="add_box",this._secondaryActionStatus="primary",this._secondaryActionDisabled=!1,this._notificationsState="default",this._notifications=void 0,this._widget=!1,this._widgetBadgeState="neutral",this._widgetBadgeText=void 0,this._widgetShowNext=!1,this._widgetShowClose=!1}static get styles(){return[_(S),_(f)]}get _checkbox(){var s;const t=((s=this.shadowRoot)==null?void 0:s.querySelector('slot[name="checkbox"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}set icon(t){const s=this._icon;this._icon=t,this.requestUpdate("icon",s)}set iconStatus(t){const s=this._iconStatus;this._iconStatus=t,this.requestUpdate("iconStatus",s)}set titleText(t){const s=this._title;this._title=t,this.requestUpdate("title",s)}set type(t){const s=this._type;this._type=t,this.requestUpdate("type",s)}set index(t){const s=this._index;this._index=t,this.requestUpdate("index",s)}set isOpen(t){const s=this._isOpen;this._isOpen=t,this.requestUpdate("disabled",s)}set accordionStyle(t){const s=this._accordionStyle;t==="inner"?this._accordionStyle=t:this._accordionStyle="box",this.requestUpdate("accordionStyle",s)}set results(t){const s=this._results;this._results=t,this.requestUpdate("results",s)}set resultsText(t){const s=this._resultsText;this._resultsText=t,this.requestUpdate("resultsText",s)}set hasCheckbox(t){const s=this._hasCheckbox;this._hasCheckbox=t,this.requestUpdate("hasCheckbox",s)}set hasSecondaryAction(t){const s=this._hasSecondaryAction;this._hasSecondaryAction=t,this.requestUpdate("hasSecondaryAction",s)}set secondaryActionIcon(t){const s=this._secondaryActionIcon;this._secondaryActionIcon=t,this.requestUpdate("secondaryActionIcon",s)}set secondaryActionStatus(t){const s=this._secondaryActionStatus;this._secondaryActionStatus=t,this.requestUpdate("secondaryActionStatus",s)}set secondaryActionDisabled(t){const s=this._secondaryActionDisabled;this._secondaryActionDisabled=t,this.requestUpdate("secondaryActionDisabled",s)}set resultsState(t){const s=this._resultsState;this._resultsState=t,this.requestUpdate("resultsState",s)}set notificationsState(t){const s=this._notificationsState;this._notificationsState=t,this.requestUpdate("notificationsState",s)}set notifications(t){const s=this._notificationsState;this._notifications=t,this.requestUpdate("notifications",s)}set widget(t){const s=this._widget;this._widget=t,this.requestUpdate("widget",s)}set widgetBadgeState(t){const s=this._widgetBadgeState;this._widgetBadgeState=t,this.requestUpdate("widgetBadgeState",s)}set widgetBadgeText(t){const s=this._widgetBadgeText;this._widgetBadgeText=t,this.requestUpdate("widgetBadgeText",s)}set widgetShowNext(t){const s=this._widgetShowNext;this._widgetShowNext=t,this.requestUpdate("widgetShowNext",s)}set widgetShowClose(t){const s=this._widgetShowClose;this._widgetShowClose=t,this.requestUpdate("widgetShowClose",s)}_toggleAccordion(){this._isOpen=!this._isOpen,this._dispatchToggleAccordion(),this.requestUpdate()}_dispatchCheckboxChange(){const t={detail:this._checkbox.checked,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAccordionCheckboxChange",t))}_dispatchSecondaryAction(){const t={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAccordionSecondaryAction",t))}_dispatchToggleAccordion(){const t={detail:this._isOpen,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onToggleAccordion",t))}_dispatchWidgetNext(){const t={detail:{},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onWidgetNext",t))}_dispatchWidgetClose(){const t={detail:{},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onWidgetClose",t))}render(){return m(this)}}o([i({type:String})],d.prototype,"icon");o([i({type:String})],d.prototype,"iconStatus");o([i({type:String})],d.prototype,"titleText");o([i({type:String})],d.prototype,"type");o([i({type:Number})],d.prototype,"index");o([i(n)],d.prototype,"isOpen");o([i({type:String})],d.prototype,"accordionStyle");o([i({type:Number})],d.prototype,"results");o([i({type:String})],d.prototype,"resultsText");o([i(n)],d.prototype,"hasCheckbox");o([i(n)],d.prototype,"hasSecondaryAction");o([i({type:String})],d.prototype,"secondaryActionIcon");o([i({type:String})],d.prototype,"secondaryActionStatus");o([i(n)],d.prototype,"secondaryActionDisabled");o([i({type:String})],d.prototype,"resultsState");o([i({type:String})],d.prototype,"notificationsState");o([i({type:Number})],d.prototype,"notifications");o([i({type:Boolean})],d.prototype,"widget");o([i({type:String})],d.prototype,"widgetBadgeState");o([i({type:String})],d.prototype,"widgetBadgeText");o([i({type:Boolean})],d.prototype,"widgetShowNext");o([i({type:Boolean})],d.prototype,"widgetShowClose");export{d as A,S as d};
