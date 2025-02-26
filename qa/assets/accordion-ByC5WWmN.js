import{r as b,a as v}from"./lit-element-DhY7bShc.js";import"./lit-html-B2eaWknC.js";import{n as i}from"./property-DnLABHHV.js";import{b as u}from"./property-types-CkH-zh1n.js";import{e as $}from"./class-map-BDeD7Kfm.js";import{i as c,s as l,u as a}from"./static-B9bHPl91.js";import{g as h}from"./custom-element-scope-Dp4Dg8bo.js";const A=":host{display:block;width:100%;height:-moz-fit-content;height:fit-content}.dss-accordion{display:block;width:100%;max-width:100%;box-sizing:border-box}.dss-accordion--box{border:var(--dss-border-width-sm) solid var(--color-neutral-100);border-radius:var(--dss-radius-sm);background-color:var(--color-white)}.dss-accordion--inner:not(.dss-accordion--widget){border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-100)}.dss-accordion-header{display:flex;margin:0 var(--dss-spacing-md);padding:var(--dss-spacing-md) 0;gap:var(--dss-spacing-xs);align-items:center}.dss-accordion-header__info{display:flex;flex:1;justify-content:space-between;align-items:center}.dss-accordion-header__action{display:flex;justify-content:flex-end;align-items:center}.dss-accordion-title{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs)}.dss-accordion-title__icon{box-sizing:border-box;width:24px;height:24px;display:flex;justify-content:center;align-items:center;background-color:var(--color-primary-50);border-radius:var(--dss-radius-xs);padding:var(--dss-spacing-xxs)}.dss-accordion-title__checkbox{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs);font-size:14px}.dss-accordion-title__text{color:var(--color-neutral-900);font-size:14px;font-weight:var(--font-semibold);text-overflow:ellipsis;line-height:24px;max-height:24px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}.dss-accordion--title-md .dss-accordion-title__text{font-size:16px}.dss-accordion-results{margin-right:var(--dss-spacing-sm);font-weight:var(--font-semibold)}.dss-accordion-header__secondary-action{margin-right:var(--dss-spacing-sm);padding-right:var(--dss-spacing-xs);border-right:var(--dss-border-width-sm) solid var(--color-neutral-400)}.dss-accordion-panel{display:none;color:var(--color-neutral-900);font-size:14px;width:100%;max-width:100%;box-sizing:border-box}.dss-accordion--open .dss-accordion-panel{display:block;padding:0 var(--dss-spacing-md) var(--dss-spacing-md)}.dss-accordion-notifications{padding:0 var(--dss-spacing-xs)}.dss-accordion--widget.dss-accordion--open .dss-accordion-header{border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-200)}.dss-accordion-widget{display:flex;align-items:center}.dss-accordion-widget__badge{display:flex;align-items:center;gap:var(--dss-spacing-md);margin-right:var(--dss-spacing-md)}.dss-accordion-widget__divider{display:block;height:24px;width:2px;background-color:var(--color-neutral-200)}.dss-accordion-widget__actions{display:flex;gap:var(--dss-spacing-xs);margin-right:var(--dss-spacing-xs)}.dss-accordion--widget .dss-accordion-panel ::slotted(*){max-width:100%}.dss-accordion--widget.dss-accordion--inner:not(.dss-accordion--open) .dss-accordion-header{padding-bottom:0;margin:0}.dss-accordion--widget.dss-accordion--inner .dss-accordion-header{padding-top:0;margin:0}.dss-accordion--widget.dss-accordion--inner .dss-accordion-panel{padding:0}.dss-accordion-header__config,.dss-accordion-header__config-info,.dss-accordion-header__config-actions{display:flex;align-items:center;gap:var(--dss-spacing-xs)}",r=c`dss-icon-button${l(h())}`,x=c`dss-decorative-icon${l(h())}`,p=c`dss-badge${l(h())}`,S=c`dss-icon-badge${l(h())}`,w=c`dss-tooltip${l(h())}`,f=c`dss-notification-badge${l(h())}`,m=e=>{const t={"dss-accordion--open":e._isOpen,"dss-accordion--box":e._accordionStyle==="box","dss-accordion--inner":e._accordionStyle==="inner","dss-accordion--widget":e._widget,"dss-accordion--title-md":e.titleSize==="md"};return a`
    <div class="dss-accordion ${$(t)}">
      <div class="dss-accordion-header">
        <div class="dss-accordion-header__info">
          <div class="dss-accordion-title">
            ${e._icon?a`
                  <${x} icon=${e._icon} state=${e._iconStatus} size="${e.titleSize}"></${x}>
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
                    @click="${e._toggleAccordion}"
                  >
                    ${e._title?a` ${e._title} `:a` ${e._type} ${e._index} `}
                  </div>
                `}
          </div>
        </div>

        <div class="dss-accordion-header__config">

            <div class="dss-accordion-header__config-info">
              ${e._widgetBadgeText?a`
                    <${p}
                      size="md"
                      state="${e._widgetBadgeState}"
                      outlined
                      hideIcon
                      text="${e._widgetBadgeText}"
                    ></${p}>
                  `:null}

              ${e._results?a`
                  <${p}
                    size="md"
                    state="${e._resultsState}"
                    outlined
                    hideIcon
                    text="${e._results} ${e._resultsText}"
                  ></${p}>
                `:null}

              ${e.info?a`
                  <${S}  size="md" state="${e.infoBadgeState}" icon="${e.infoBadgeIcon}" ?outlined="${e.infoBadgeOutlined}">
                    <${w} hideArrow slot="tooltip">
                      <span>${e.info}</span>
                    </${w} >
                  </${S} >
                `:null}

              ${e._notifications?a`
                  <${f}
                    state="${e._notificationsState}"
                    value="${e._notifications}"
                  >
                  </${f}>
                `:null}

            </div>

            ${e._results||e._notifications||e.info||e._widgetBadgeText?a`
                <span class="dss-accordion-widget__divider"></span>
              `:null}

           

            <div class="dss-accordion-header__config-actions">
                ${e._hasSecondaryAction?a`
                    <${r}
                      size="md"
                      icon="${e._secondaryActionIcon}"
                      variant="${e._secondaryActionStatus}"
                      ?disabled=${e._secondaryActionDisabled}
                      @onClick=${e._dispatchSecondaryAction}
                    ></${r}>
                  `:null}

              ${e._widgetShowNext?a`
                    <${r}
                      size="md"
                      variant="primary"
                      label="Següent"
                      icon="arrow_forward"
                      @onClick="${e._dispatchWidgetNext}"
                    >
                    </${r}>
                  `:null}
              ${e._widgetShowClose?a`
                    <${r}
                      size="md"
                      variant="default"
                      icon="close"
                      label="Tancar"
                      @onClick="${e._dispatchWidgetClose}"
                    >
                    </${r}>
                  `:null}
              <${r}
                label="${e._isOpen?`Obrir ${e._title} acordió`:`Tancar ${e._title} acordió`}"
                ariaExpanded="${e._isOpen}"
                size="md"
                icon="${e._isOpen?"expand_less":"expand_more"}"
                variant="primary"
                @onClick=${e._toggleAccordion}
              ></${r}>
            </div>
        </div>
      </div>

      <div class="dss-accordion-panel">
        <slot></slot>
      </div>
    </div>
  `};var C=Object.defineProperty,B=Object.getOwnPropertyDescriptor,o=(e,t,s,g)=>{for(var n=g>1?void 0:g?B(t,s):t,_=e.length-1,y;_>=0;_--)(y=e[_])&&(n=(g?y(t,s,n):y(n))||n);return g&&n&&C(t,s,n),n};class d extends b{constructor(){super(...arguments),this.titleSize="sm",this.info=void 0,this.infoBadgeState="critic",this.infoBadgeIcon="",this.infoBadgeOutlined=!0,this._icon="",this._iconStatus="default",this._type="",this._title="",this._index=void 0,this._isOpen=!1,this._results=void 0,this._resultsText="Resultats",this._resultsState="neutral",this._accordionStyle="box",this._hasCheckbox=!1,this._hasSecondaryAction=!1,this._secondaryActionIcon="add_box",this._secondaryActionStatus="primary",this._secondaryActionDisabled=!1,this._notificationsState="default",this._notifications=void 0,this._widget=!1,this._widgetBadgeState="neutral",this._widgetBadgeText=void 0,this._widgetShowNext=!1,this._widgetShowClose=!1}static get styles(){return[v(A)]}get _checkbox(){var s;const t=((s=this.shadowRoot)==null?void 0:s.querySelector('slot[name="checkbox"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}set icon(t){const s=this._icon;this._icon=t,this.requestUpdate("icon",s)}get icon(){return this._icon}set iconStatus(t){const s=this._iconStatus;this._iconStatus=t,this.requestUpdate("iconStatus",s)}get iconStatus(){return this._iconStatus}set titleText(t){const s=this._title;this._title=t,this.requestUpdate("title",s)}get titleText(){return this._title}set type(t){const s=this._type;this._type=t,this.requestUpdate("type",s)}get type(){return this._type}set index(t){const s=this._index;this._index=t,this.requestUpdate("index",s)}get index(){return this._index||0}set isOpen(t){const s=this._isOpen;this._isOpen=t,this.requestUpdate("disabled",s)}get isOpen(){return this._isOpen}set accordionStyle(t){const s=this._accordionStyle;t==="inner"?this._accordionStyle=t:this._accordionStyle="box",this.requestUpdate("accordionStyle",s)}get accordionStyle(){return this._accordionStyle}set results(t){const s=this._results;this._results=t,this.requestUpdate("results",s)}get results(){return this._results||0}set resultsText(t){const s=this._resultsText;this._resultsText=t,this.requestUpdate("resultsText",s)}get resultsText(){return this._resultsText}set hasCheckbox(t){const s=this._hasCheckbox;this._hasCheckbox=t,this.requestUpdate("hasCheckbox",s)}get hasCheckbox(){return this._hasCheckbox}set hasSecondaryAction(t){const s=this._hasSecondaryAction;this._hasSecondaryAction=t,this.requestUpdate("hasSecondaryAction",s)}get hasSecondaryAction(){return this._hasSecondaryAction}set secondaryActionIcon(t){const s=this._secondaryActionIcon;this._secondaryActionIcon=t,this.requestUpdate("secondaryActionIcon",s)}get secondaryActionIcon(){return this._secondaryActionIcon}set secondaryActionStatus(t){const s=this._secondaryActionStatus;this._secondaryActionStatus=t,this.requestUpdate("secondaryActionStatus",s)}get secondaryActionStatus(){return this._secondaryActionStatus}set secondaryActionDisabled(t){const s=this._secondaryActionDisabled;this._secondaryActionDisabled=t,this.requestUpdate("secondaryActionDisabled",s)}get secondaryActionDisabled(){return this._secondaryActionDisabled}set resultsState(t){const s=this._resultsState;this._resultsState=t,this.requestUpdate("resultsState",s)}get resultsState(){return this._resultsState}set notificationsState(t){const s=this._notificationsState;this._notificationsState=t,this.requestUpdate("notificationsState",s)}get notificationsState(){return this._notificationsState}set notifications(t){const s=this._notificationsState;this._notifications=t,this.requestUpdate("notifications",s)}get notifications(){return this._notifications||0}set widget(t){const s=this._widget;this._widget=t,this.requestUpdate("widget",s)}get widget(){return this._widget}set widgetBadgeState(t){const s=this._widgetBadgeState;this._widgetBadgeState=t,this.requestUpdate("widgetBadgeState",s)}get widgetBadgeState(){return this._widgetBadgeState}set widgetBadgeText(t){const s=this._widgetBadgeText;this._widgetBadgeText=t,this.requestUpdate("widgetBadgeText",s)}get widgetBadgeText(){return this._widgetBadgeText||""}set widgetShowNext(t){const s=this._widgetShowNext;this._widgetShowNext=t,this.requestUpdate("widgetShowNext",s)}get widgetShowNext(){return this._widgetShowNext}set widgetShowClose(t){const s=this._widgetShowClose;this._widgetShowClose=t,this.requestUpdate("widgetShowClose",s)}get widgetShowClose(){return this._widgetShowClose}_toggleAccordion(){this._isOpen=!this._isOpen,this._dispatchToggleAccordion(),this.requestUpdate()}_dispatchCheckboxChange(){const t={detail:this._checkbox.checked,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAccordionCheckboxChange",t))}_dispatchSecondaryAction(){const t={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAccordionSecondaryAction",t))}_dispatchToggleAccordion(){const t={detail:this._isOpen,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onToggleAccordion",t))}_dispatchWidgetNext(){const t={detail:{},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onWidgetNext",t))}_dispatchWidgetClose(){const t={detail:{},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onWidgetClose",t))}render(){return m(this)}}o([i({type:String})],d.prototype,"titleSize",2);o([i({type:String})],d.prototype,"info",2);o([i({type:String})],d.prototype,"infoBadgeState",2);o([i({type:String})],d.prototype,"infoBadgeIcon",2);o([i({type:String})],d.prototype,"infoBadgeOutlined",2);o([i({type:String})],d.prototype,"icon",1);o([i({type:String})],d.prototype,"iconStatus",1);o([i({type:String})],d.prototype,"titleText",1);o([i({type:String})],d.prototype,"type",1);o([i({type:Number})],d.prototype,"index",1);o([i(u)],d.prototype,"isOpen",1);o([i({type:String})],d.prototype,"accordionStyle",1);o([i({type:Number})],d.prototype,"results",1);o([i({type:String})],d.prototype,"resultsText",1);o([i(u)],d.prototype,"hasCheckbox",1);o([i(u)],d.prototype,"hasSecondaryAction",1);o([i({type:String})],d.prototype,"secondaryActionIcon",1);o([i({type:String})],d.prototype,"secondaryActionStatus",1);o([i(u)],d.prototype,"secondaryActionDisabled",1);o([i({type:String})],d.prototype,"resultsState",1);o([i({type:String})],d.prototype,"notificationsState",1);o([i({type:Number})],d.prototype,"notifications",1);o([i({type:Boolean})],d.prototype,"widget",1);o([i({type:String})],d.prototype,"widgetBadgeState",1);o([i({type:String})],d.prototype,"widgetBadgeText",1);o([i({type:Boolean})],d.prototype,"widgetShowNext",1);o([i({type:Boolean})],d.prototype,"widgetShowClose",1);export{d as A};
