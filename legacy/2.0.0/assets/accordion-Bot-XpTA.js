import{r as v,a as y}from"./lit-element-DhY7bShc.js";import"./lit-html-B2eaWknC.js";import{n as i}from"./property-DnLABHHV.js";import{b as l}from"./property-types-CkH-zh1n.js";import{e as b}from"./class-map-BDeD7Kfm.js";import{i as h,s as g,u as a}from"./static-B9bHPl91.js";import{g as u}from"./custom-element-scope-Dp4Dg8bo.js";const S=":host{display:inline-block;vertical-align:middle}.dss-decorative-icon{height:24px;width:24px;min-width:24px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;background-color:var(--color-primary-50);color:var(--color-primary-500);border-radius:var(--dss-radius-xs);font-size:var(--icon-size-sm)}.dss-decorative-icon--info{background-color:var(--color-blue-50);color:var(--color-blue-500)}.dss-decorative-icon--success{background-color:var(--color-green-50);color:var(--color-green-500)}.dss-decorative-icon--error{background-color:var(--color-red-50);color:var(--color-red-500)}.dss-decorative-icon--disabled{background-color:var(--color-neutral-50);color:var(--color-neutral-500)}.dss-decorative-icon--md{height:32px;width:32px;min-width:32px;font-size:var(--icon-size-md);border-radius:var(--dss-radius-xs)}.dss-decorative-icon--lg{height:40px;width:40px;min-width:40px;font-size:var(--icon-size-lg);border-radius:var(--dss-radius-sm)}.dss-decorative-icon--xl{height:48px;width:48px;min-width:48px;font-size:var(--icon-size-xl);border-radius:var(--dss-radius-sm)}",f=":host{width:100%;height:-moz-fit-content;height:fit-content}.dss-accordion{width:100%;min-width:-moz-fit-content;min-width:fit-content}.dss-accordion--box{border:var(--dss-border-width-sm) solid var(--color-neutral-100);border-radius:var(--dss-radius-sm);background-color:var(--color-white)}.dss-accordion--inner:not(.dss-accordion--widget){border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-100)}.dss-accordion-header{display:grid;grid-template-columns:1fr var(--dss-spacing-lg);margin:0 var(--dss-spacing-md);padding:var(--dss-spacing-md) 0;gap:var(--dss-spacing-tiny);align-items:center}.dss-accordion-header__info{display:flex;justify-content:space-between;align-items:center}.dss-accordion-header__action{display:flex;justify-content:flex-end;align-items:center}.dss-accordion-title{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs)}.dss-accordion-title__icon{box-sizing:border-box;width:24px;height:24px;display:flex;justify-content:center;align-items:center;background-color:var(--color-primary-50);border-radius:var(--dss-radius-xs);padding:var(--dss-spacing-xxs)}.dss-accordion-title__checkbox{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs);font-size:14px}.dss-accordion-title__text{color:var(--color-neutral-900);font-size:18px;font-weight:var(--font-semibold);text-overflow:ellipsis;line-height:24px;max-height:24px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}.dss-accordion-results{margin-right:var(--dss-spacing-sm);font-weight:var(--font-semibold)}.dss-accordion-header__secondary-action{margin-right:var(--dss-spacing-sm);padding-right:var(--dss-spacing-xs);border-right:var(--dss-border-width-sm) solid var(--color-neutral-400)}.dss-accordion-panel{display:none;color:var(--color-neutral-900);font-size:14px;max-width:100%}.dss-accordion--open .dss-accordion-panel{display:block;padding:0 var(--dss-spacing-md) var(--dss-spacing-md)}.dss-accordion-notifications{padding:0 var(--dss-spacing-xs)}.dss-accordion--widget.dss-accordion--open .dss-accordion-header{border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-200)}.dss-accordion-widget{display:flex;align-items:center}.dss-accordion-widget__badge{display:flex;align-items:center;gap:var(--dss-spacing-md);margin-right:var(--dss-spacing-md)}.dss-accordion-widget__divider{display:block;height:24px;width:2px;background-color:var(--color-neutral-200)}.dss-accordion-widget__actions{display:flex;gap:var(--dss-spacing-xs);margin-right:var(--dss-spacing-xs)}.dss-accordion--widget .dss-accordion-panel ::slotted(*){max-width:100%}.dss-accordion--widget.dss-accordion--inner:not(.dss-accordion--open) .dss-accordion-header{padding-bottom:0;margin:0}.dss-accordion--widget.dss-accordion--inner .dss-accordion-header{padding-top:0;margin:0}.dss-accordion--widget.dss-accordion--inner .dss-accordion-panel{padding:0}",r=h`dss-icon-button${g(u())}`,x=h`dss-decorative-icon${g(u())}`,c=h`dss-badge${g(u())}`,w=h`dss-notification-badge${g(u())}`,m=s=>{const t={"dss-accordion--open":s._isOpen,"dss-accordion--box":s._accordionStyle==="box","dss-accordion--inner":s._accordionStyle==="inner","dss-accordion--widget":s._widget};return a`
    <div class="dss-accordion ${b(t)}">
      <div class="dss-accordion-header">
        <div class="dss-accordion-header__info">
          <div class="dss-accordion-title">
            ${s._icon?a`
                  <${x} icon=${s._icon} state=${s._iconStatus} size="md"></${x}>
                `:null}
            ${s._hasCheckbox?a`
                  <div class="dss-accordion-title__checkbox dss-form-field">
                    <slot
                      name="checkbox"
                      @click=${s._dispatchCheckboxChange}
                    ></slot>
                    <slot name="checkboxLabel"></slot>
                  </div>
                `:a`
                  <div
                    class="dss-accordion-title__text"
                    aria-expanded="${s._isOpen}"
                    @click="${s._toggleAccordion}"
                  >
                    ${s._title?a` ${s._title} `:a` ${s._type} ${s._index} `}
                  </div>
                `}
          </div>
          ${s._results&&!s._hasSecondaryAction&&!s._widget?a`
                <div class="dss-accordion-results">
                  <${c}
                    size="md"
                    state="${s._resultsState}"
                    outlined
                    hideIcon
                    text="${s._results} ${s._resultsText}"
                  ></${c}>
                </div>
              `:null}
          ${s._notifications&&!s._hasSecondaryAction&&!s._widget?a`
                <div class="dss-accordion-notifications">
                  <${w}
                    state="${s._notificationsState}"
                    value="${s._notifications}"
                  >
                  </${w}>
                </div>
              `:null}
          ${s._hasSecondaryAction&&!s._widget?a`
                <div class="dss-accordion-header__secondary-action">
                  <${r}
                    size="md"
                    icon="${s._secondaryActionIcon}"
                    variant="${s._secondaryActionStatus}"
                    ?disabled=${s._secondaryActionDisabled}
                    @onClick=${s._dispatchSecondaryAction}
                  ></${r}>
                </div>
              `:null}
          ${s._widget?a`
                  <div class="dss-accordion-widget">
                    ${s._widgetBadgeText?a`
                          <div class="dss-accordion-widget__badge">
                            <${c}
                              size="md"
                              state="${s._widgetBadgeState}"
                              outlined
                              hideIcon
                              text="${s._widgetBadgeText}"
                            ></${c}>
                            <span class="dss-accordion-widget__divider"></span>
                          </div>
                        `:null}

                    <div class="dss-accordion-widget__actions">
                      ${s._widgetShowNext?a`
                            <${r}
                              size="md"
                              variant="primary"
                              icon="arrow_forward"
                              @onClick="${s._dispatchWidgetNext}"
                            >
                            </${r}>
                          `:null}
                      ${s._widgetShowClose?a`
                            <${r}
                              size="md"
                              variant="default"
                              icon="close"
                              @onClick="${s._dispatchWidgetClose}"
                            >
                            </${r}>
                          `:null}
                    </div>
                  </div>
                `:null}
        </div>

        <div class="dss-accordion-header__action">
          <${r}
            aria-label="${s._title} accordion"
            aria-expanded="${s._isOpen}"
            size="md"
            icon="${s._isOpen?"expand_less":"expand_more"}"
            variant="primary"
            @onClick=${s._toggleAccordion}
          ></${r}>
        </div>
      </div>

      <div class="dss-accordion-panel">
        <slot></slot>
      </div>
    </div>
  `};var $=Object.defineProperty,A=Object.getOwnPropertyDescriptor,o=(s,t,e,C)=>{for(var n=A(t,e),p=s.length-1,_;p>=0;p--)(_=s[p])&&(n=_(t,e,n)||n);return n&&$(t,e,n),n};class d extends v{constructor(){super(...arguments),this._icon="",this._iconStatus="default",this._type="",this._title="",this._index=void 0,this._isOpen=!1,this._results=void 0,this._resultsText="Resultats",this._resultsState="neutral",this._accordionStyle="box",this._hasCheckbox=!1,this._hasSecondaryAction=!1,this._secondaryActionIcon="add_box",this._secondaryActionStatus="primary",this._secondaryActionDisabled=!1,this._notificationsState="default",this._notifications=void 0,this._widget=!1,this._widgetBadgeState="neutral",this._widgetBadgeText=void 0,this._widgetShowNext=!1,this._widgetShowClose=!1}static get styles(){return[y(S),y(f)]}get _checkbox(){var e;const t=((e=this.shadowRoot)==null?void 0:e.querySelector('slot[name="checkbox"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}set icon(t){const e=this._icon;this._icon=t,this.requestUpdate("icon",e)}get icon(){return this._icon}set iconStatus(t){const e=this._iconStatus;this._iconStatus=t,this.requestUpdate("iconStatus",e)}get iconStatus(){return this._iconStatus}set titleText(t){const e=this._title;this._title=t,this.requestUpdate("title",e)}get titleText(){return this._title}set type(t){const e=this._type;this._type=t,this.requestUpdate("type",e)}get type(){return this._type}set index(t){const e=this._index;this._index=t,this.requestUpdate("index",e)}get index(){return this._index||0}set isOpen(t){const e=this._isOpen;this._isOpen=t,this.requestUpdate("disabled",e)}get isOpen(){return this._isOpen}set accordionStyle(t){const e=this._accordionStyle;t==="inner"?this._accordionStyle=t:this._accordionStyle="box",this.requestUpdate("accordionStyle",e)}get accordionStyle(){return this._accordionStyle}set results(t){const e=this._results;this._results=t,this.requestUpdate("results",e)}get results(){return this._results||0}set resultsText(t){const e=this._resultsText;this._resultsText=t,this.requestUpdate("resultsText",e)}get resultsText(){return this._resultsText}set hasCheckbox(t){const e=this._hasCheckbox;this._hasCheckbox=t,this.requestUpdate("hasCheckbox",e)}get hasCheckbox(){return this._hasCheckbox}set hasSecondaryAction(t){const e=this._hasSecondaryAction;this._hasSecondaryAction=t,this.requestUpdate("hasSecondaryAction",e)}get hasSecondaryAction(){return this._hasSecondaryAction}set secondaryActionIcon(t){const e=this._secondaryActionIcon;this._secondaryActionIcon=t,this.requestUpdate("secondaryActionIcon",e)}get secondaryActionIcon(){return this._secondaryActionIcon}set secondaryActionStatus(t){const e=this._secondaryActionStatus;this._secondaryActionStatus=t,this.requestUpdate("secondaryActionStatus",e)}get secondaryActionStatus(){return this._secondaryActionStatus}set secondaryActionDisabled(t){const e=this._secondaryActionDisabled;this._secondaryActionDisabled=t,this.requestUpdate("secondaryActionDisabled",e)}get secondaryActionDisabled(){return this._secondaryActionDisabled}set resultsState(t){const e=this._resultsState;this._resultsState=t,this.requestUpdate("resultsState",e)}get resultsState(){return this._resultsState}set notificationsState(t){const e=this._notificationsState;this._notificationsState=t,this.requestUpdate("notificationsState",e)}get notificationsState(){return this._notificationsState}set notifications(t){const e=this._notificationsState;this._notifications=t,this.requestUpdate("notifications",e)}get notifications(){return this._notifications||0}set widget(t){const e=this._widget;this._widget=t,this.requestUpdate("widget",e)}get widget(){return this._widget}set widgetBadgeState(t){const e=this._widgetBadgeState;this._widgetBadgeState=t,this.requestUpdate("widgetBadgeState",e)}get widgetBadgeState(){return this._widgetBadgeState}set widgetBadgeText(t){const e=this._widgetBadgeText;this._widgetBadgeText=t,this.requestUpdate("widgetBadgeText",e)}get widgetBadgeText(){return this._widgetBadgeText||""}set widgetShowNext(t){const e=this._widgetShowNext;this._widgetShowNext=t,this.requestUpdate("widgetShowNext",e)}get widgetShowNext(){return this._widgetShowNext}set widgetShowClose(t){const e=this._widgetShowClose;this._widgetShowClose=t,this.requestUpdate("widgetShowClose",e)}get widgetShowClose(){return this._widgetShowClose}_toggleAccordion(){this._isOpen=!this._isOpen,this._dispatchToggleAccordion(),this.requestUpdate()}_dispatchCheckboxChange(){const t={detail:this._checkbox.checked,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAccordionCheckboxChange",t))}_dispatchSecondaryAction(){const t={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAccordionSecondaryAction",t))}_dispatchToggleAccordion(){const t={detail:this._isOpen,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onToggleAccordion",t))}_dispatchWidgetNext(){const t={detail:{},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onWidgetNext",t))}_dispatchWidgetClose(){const t={detail:{},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onWidgetClose",t))}render(){return m(this)}}o([i({type:String})],d.prototype,"icon");o([i({type:String})],d.prototype,"iconStatus");o([i({type:String})],d.prototype,"titleText");o([i({type:String})],d.prototype,"type");o([i({type:Number})],d.prototype,"index");o([i(l)],d.prototype,"isOpen");o([i({type:String})],d.prototype,"accordionStyle");o([i({type:Number})],d.prototype,"results");o([i({type:String})],d.prototype,"resultsText");o([i(l)],d.prototype,"hasCheckbox");o([i(l)],d.prototype,"hasSecondaryAction");o([i({type:String})],d.prototype,"secondaryActionIcon");o([i({type:String})],d.prototype,"secondaryActionStatus");o([i(l)],d.prototype,"secondaryActionDisabled");o([i({type:String})],d.prototype,"resultsState");o([i({type:String})],d.prototype,"notificationsState");o([i({type:Number})],d.prototype,"notifications");o([i({type:Boolean})],d.prototype,"widget");o([i({type:String})],d.prototype,"widgetBadgeState");o([i({type:String})],d.prototype,"widgetBadgeText");o([i({type:Boolean})],d.prototype,"widgetShowNext");o([i({type:Boolean})],d.prototype,"widgetShowClose");export{d as A,S as d};
