import{i as S,r as v}from"./lit-element-Dloa6E9d.js";import"./lit-html-D6a8R3xZ.js";import{n as s}from"./property-BpSxuat7.js";import{b as l}from"./property-types-CkH-zh1n.js";import{e as $}from"./class-map-t53NE6z1.js";import{s as h,i as g,u as d}from"./static-BTPASdtP.js";import{g as p}from"./custom-element-scope-Dp4Dg8bo.js";const A=':host{display:block;width:100%;height:-moz-fit-content;height:fit-content}.dss-accordion{display:block;width:100%;max-width:100%;box-sizing:border-box}.dss-accordion--box{box-shadow:inset 0 0 0 var(--dss-border-width-sm) var(--color-neutral-100);border-radius:var(--dss-radius-sm);background-color:var(--color-white)}.dss-accordion--inner:not(.dss-accordion--widget){border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-100)}.dss-accordion-header{display:flex;height:56px;margin:0 var(--dss-spacing-md);gap:var(--dss-spacing-xs);align-items:center}.dss-accordion-header__info{flex:1;min-width:0;display:flex;justify-content:space-between;align-items:center}.dss-accordion-header__action{flex-shrink:0;display:flex;justify-content:flex-end;align-items:center}.dss-accordion-title{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs);overflow:hidden}.dss-accordion-title__icon{box-sizing:border-box;width:24px;height:24px;display:flex;justify-content:center;align-items:center;background-color:var(--color-primary-50);border-radius:var(--dss-radius-xs);padding:var(--dss-spacing-xxs)}.dss-accordion-title__checkbox{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs);font-size:14px}.dss-accordion-title__text{color:var(--color-neutral-900);font-size:16px;font-weight:var(--font-semibold);line-height:24px;max-height:24px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.dss-accordion-results{margin-right:var(--dss-spacing-sm);font-weight:var(--font-semibold)}.dss-accordion-header__secondary-action{margin-right:var(--dss-spacing-sm);padding-right:var(--dss-spacing-xs);border-right:var(--dss-border-width-sm) solid var(--color-neutral-400)}.dss-accordion-panel{color:var(--color-neutral-900);font-size:14px;width:100%;max-width:100%;box-sizing:border-box;padding-left:var(--dss-spacing-md);padding-right:var(--dss-spacing-md);transition:max-height var(--animation-delay) ease-in-out,padding var(--animation-delay) ease-in-out;max-height:0;overflow:hidden}.dss-accordion--open .dss-accordion-panel{padding-top:0;padding-bottom:var(--dss-spacing-md);max-height:2000px}.dss-accordion-notifications{padding:0 var(--dss-spacing-xs)}.dss-accordion--widget .dss-accordion-header{position:relative}.dss-accordion--widget .dss-accordion-header:after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:var(--dss-border-width-sm);background-color:var(--color-neutral-200);opacity:0;visibility:hidden;transition:opacity var(--animation-delay) ease-in-out,visibility var(--animation-delay) ease-in-out}.dss-accordion--widget.dss-accordion--open .dss-accordion-header:after{opacity:1;visibility:visible}.dss-accordion-widget{display:flex;align-items:center}.dss-accordion-widget__badge{display:flex;align-items:center;gap:var(--dss-spacing-md);margin-right:var(--dss-spacing-md)}.dss-accordion-widget__divider{display:block;height:24px;width:2px;background-color:var(--color-neutral-200)}.dss-accordion-widget__actions{display:flex;gap:var(--dss-spacing-xs);margin-right:var(--dss-spacing-xs)}.dss-accordion--widget .dss-accordion-panel ::slotted(*){max-width:100%}.dss-accordion--widget.dss-accordion--inner:not(.dss-accordion--open) .dss-accordion-header{padding-bottom:0;margin:0}.dss-accordion--widget.dss-accordion--inner .dss-accordion-header{padding-top:0;margin:0}.dss-accordion--widget.dss-accordion--inner .dss-accordion-panel{padding:0}.dss-accordion-header__config,.dss-accordion-header__config-info{display:flex;align-items:center;gap:var(--dss-spacing-xs)}.dss-accordion-header__config-actions{display:flex;align-items:center;gap:var(--dss-spacing-xs);min-height:32px}.dss-accordion-title__text .title-tooltip{display:none;white-space:wrap}.dss-accordion-title__text[data-truncated=true] .title-tooltip{display:block}',r=g`dss-icon-button${h(p())}`,f=g`dss-decorative-icon${h(p())}`,u=g`dss-badge${h(p())}`,w=g`dss-icon-badge${h(p())}`,_=g`dss-tooltip${h(p())}`,b=g`dss-notification-badge${h(p())}`,m=e=>{const t={"dss-accordion--open":e._isOpen,"dss-accordion--box":e._accordionStyle==="box","dss-accordion--inner":e._accordionStyle==="inner","dss-accordion--widget":e._widget};return d`
    <div class="dss-accordion ${$(t)}">
      <div class="dss-accordion-header">
        <div class="dss-accordion-header__info">
          <div class="dss-accordion-title">
            ${e._icon?d`
                  <${f} icon=${e._icon} state=${e._iconStatus} size="sm"></${f}>
                `:null}
            ${e._hasCheckbox?d`
                  <div class="dss-accordion-title__checkbox dss-form-field">
                    <slot
                      name="checkbox"
                      @click=${e._dispatchCheckboxChange}
                    ></slot>
                    <slot name="checkboxLabel"></slot>
                  </div>
                `:d`
                  <div
                    class="dss-accordion-title__text" @mouseenter=${e.checkTextTruncate}
                    @click="${e._toggleAccordion}"
                  >
                    ${e._title?d` ${e._title} `:d` ${e._type} ${e._index} `}
                    <${_} ?tooltipFixed="${e.tooltipFixed}" class="title-tooltip" aria-hidden="true">
                      ${e._title?d` ${e._title} `:d` ${e._type} ${e._index} `}
                    </${_}>


                  </div>
                `}
          </div>
        </div>

        <div class="dss-accordion-header__config">

            <div class="dss-accordion-header__config-info">
              ${e._widgetBadgeText?d`
                    <${u}
                      size="md"
                      state="${e._widgetBadgeState}"
                      outlined
                      hideIcon
                      text="${e._widgetBadgeText}"
                    ></${u}>
                  `:null}

              ${e._results?d`
                  <${u}
                    size="md"
                    state="${e._resultsState}"
                    outlined
                    hideIcon
                    text="${e._results} ${e._resultsText}"
                  ></${u}>
                `:null}

              ${e.info?d`
                  <${w}  size="md" state="${e.infoBadgeState}" icon="${e.infoBadgeIcon}" ?outlined="${e.infoBadgeOutlined}">
                    <${_} ?tooltipFixed="${e.tooltipFixed}" slot="tooltip">
                      <span>${e.info}</span>
                    </${_} >
                  </${w} >
                `:null}

              ${e._notifications?d`
                  <${b}
                    state="${e._notificationsState}"
                    value="${e._notifications}"
                  >
                  </${b}>
                `:null}

            </div>

            ${e._results||e._notifications||e.info||e._widgetBadgeText?d`
                <span class="dss-accordion-widget__divider"></span>
              `:null}

           

            <div class="dss-accordion-header__config-actions">
                ${e._hasSecondaryAction?d`
                    <${r}
                      size="md"
                      label="${e.secondaryActionLabel}"
                      icon="${e._secondaryActionIcon}"
                      variant="${e._secondaryActionStatus}"
                      ?disabled=${e._secondaryActionDisabled}
                      @onClick=${e._dispatchSecondaryAction}
                    ></${r}>
                  `:null}

              ${e._widgetShowNext?d`
                    <${r}
                      size="md"
                      variant="primary"
                      label="Següent"
                      icon="arrow_forward"
                      @onClick="${e._dispatchWidgetNext}"
                    >
                    </${r}>
                  `:null}
              ${e._widgetShowClose?d`
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
  `};var C=Object.defineProperty,B=Object.getOwnPropertyDescriptor,o=(e,t,i,c)=>{for(var n=c>1?void 0:c?B(t,i):t,y=e.length-1,x;y>=0;y--)(x=e[y])&&(n=(c?x(t,i,n):x(n))||n);return c&&n&&C(t,i,n),n};class a extends S{constructor(){super(...arguments),this.info=void 0,this.infoBadgeState="critic",this.infoBadgeIcon="",this.infoBadgeOutlined=!0,this.tooltipFixed=!1,this.secondaryActionLabel="",this._icon="",this._iconStatus="default",this._type="",this._title="",this._index=void 0,this._isOpen=!1,this._results=void 0,this._resultsText="Resultats",this._resultsState="neutral",this._accordionStyle="box",this._hasCheckbox=!1,this._hasSecondaryAction=!1,this._secondaryActionIcon="add_box",this._secondaryActionStatus="primary",this._secondaryActionDisabled=!1,this._notificationsState="default",this._notifications=void 0,this._widget=!1,this._widgetBadgeState="neutral",this._widgetBadgeText=void 0,this._widgetShowNext=!1,this._widgetShowClose=!1}static get styles(){return[v(A)]}get _checkbox(){var i;const t=((i=this.shadowRoot)==null?void 0:i.querySelector('slot[name="checkbox"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}set icon(t){const i=this._icon;this._icon=t,this.requestUpdate("icon",i)}get icon(){return this._icon}set iconStatus(t){const i=this._iconStatus;this._iconStatus=t,this.requestUpdate("iconStatus",i)}get iconStatus(){return this._iconStatus}set titleText(t){const i=this._title;this._title=t,this.requestUpdate("title",i)}get titleText(){return this._title}set type(t){const i=this._type;this._type=t,this.requestUpdate("type",i)}get type(){return this._type}set index(t){const i=this._index;this._index=t,this.requestUpdate("index",i)}get index(){return this._index||0}set isOpen(t){const i=this._isOpen;this._isOpen=t,this.requestUpdate("disabled",i)}get isOpen(){return this._isOpen}set accordionStyle(t){const i=this._accordionStyle;t==="inner"?this._accordionStyle=t:this._accordionStyle="box",this.requestUpdate("accordionStyle",i)}get accordionStyle(){return this._accordionStyle}set results(t){const i=this._results;this._results=t,this.requestUpdate("results",i)}get results(){return this._results||0}set resultsText(t){const i=this._resultsText;this._resultsText=t,this.requestUpdate("resultsText",i)}get resultsText(){return this._resultsText}set hasCheckbox(t){const i=this._hasCheckbox;this._hasCheckbox=t,this.requestUpdate("hasCheckbox",i)}get hasCheckbox(){return this._hasCheckbox}set hasSecondaryAction(t){const i=this._hasSecondaryAction;this._hasSecondaryAction=t,this.requestUpdate("hasSecondaryAction",i)}get hasSecondaryAction(){return this._hasSecondaryAction}set secondaryActionIcon(t){const i=this._secondaryActionIcon;this._secondaryActionIcon=t,this.requestUpdate("secondaryActionIcon",i)}get secondaryActionIcon(){return this._secondaryActionIcon}set secondaryActionStatus(t){const i=this._secondaryActionStatus;this._secondaryActionStatus=t,this.requestUpdate("secondaryActionStatus",i)}get secondaryActionStatus(){return this._secondaryActionStatus}set secondaryActionDisabled(t){const i=this._secondaryActionDisabled;this._secondaryActionDisabled=t,this.requestUpdate("secondaryActionDisabled",i)}get secondaryActionDisabled(){return this._secondaryActionDisabled}set resultsState(t){const i=this._resultsState;this._resultsState=t,this.requestUpdate("resultsState",i)}get resultsState(){return this._resultsState}set notificationsState(t){const i=this._notificationsState;this._notificationsState=t,this.requestUpdate("notificationsState",i)}get notificationsState(){return this._notificationsState}set notifications(t){const i=this._notificationsState;this._notifications=t,this.requestUpdate("notifications",i)}get notifications(){return this._notifications||0}set widget(t){const i=this._widget;this._widget=t,this.requestUpdate("widget",i)}get widget(){return this._widget}set widgetBadgeState(t){const i=this._widgetBadgeState;this._widgetBadgeState=t,this.requestUpdate("widgetBadgeState",i)}get widgetBadgeState(){return this._widgetBadgeState}set widgetBadgeText(t){const i=this._widgetBadgeText;this._widgetBadgeText=t,this.requestUpdate("widgetBadgeText",i)}get widgetBadgeText(){return this._widgetBadgeText||""}set widgetShowNext(t){const i=this._widgetShowNext;this._widgetShowNext=t,this.requestUpdate("widgetShowNext",i)}get widgetShowNext(){return this._widgetShowNext}set widgetShowClose(t){const i=this._widgetShowClose;this._widgetShowClose=t,this.requestUpdate("widgetShowClose",i)}get widgetShowClose(){return this._widgetShowClose}_toggleAccordion(){this._isOpen=!this._isOpen,this._dispatchToggleAccordion(),this.requestUpdate()}_dispatchCheckboxChange(){const t={detail:this._checkbox.checked,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAccordionCheckboxChange",t))}_dispatchSecondaryAction(){const t={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAccordionSecondaryAction",t))}_dispatchToggleAccordion(){const t={detail:this._isOpen,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onToggleAccordion",t))}_dispatchWidgetNext(){const t={detail:{},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onWidgetNext",t))}_dispatchWidgetClose(){const t={detail:{},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onWidgetClose",t))}checkTextTruncate(t){if(!t)return;const i=t.target,c=i.scrollWidth>i.offsetWidth;i.setAttribute("data-truncated",c.toString())}render(){return m(this)}}o([s({type:String})],a.prototype,"info",2);o([s({type:String})],a.prototype,"infoBadgeState",2);o([s({type:String})],a.prototype,"infoBadgeIcon",2);o([s(l)],a.prototype,"infoBadgeOutlined",2);o([s(l)],a.prototype,"tooltipFixed",2);o([s({type:String})],a.prototype,"secondaryActionLabel",2);o([s({type:String})],a.prototype,"icon",1);o([s({type:String})],a.prototype,"iconStatus",1);o([s({type:String})],a.prototype,"titleText",1);o([s({type:String})],a.prototype,"type",1);o([s({type:Number})],a.prototype,"index",1);o([s(l)],a.prototype,"isOpen",1);o([s({type:String})],a.prototype,"accordionStyle",1);o([s({type:Number})],a.prototype,"results",1);o([s({type:String})],a.prototype,"resultsText",1);o([s(l)],a.prototype,"hasCheckbox",1);o([s(l)],a.prototype,"hasSecondaryAction",1);o([s({type:String})],a.prototype,"secondaryActionIcon",1);o([s({type:String})],a.prototype,"secondaryActionStatus",1);o([s(l)],a.prototype,"secondaryActionDisabled",1);o([s({type:String})],a.prototype,"resultsState",1);o([s({type:String})],a.prototype,"notificationsState",1);o([s({type:Number})],a.prototype,"notifications",1);o([s({type:Boolean})],a.prototype,"widget",1);o([s({type:String})],a.prototype,"widgetBadgeState",1);o([s({type:String})],a.prototype,"widgetBadgeText",1);o([s({type:Boolean})],a.prototype,"widgetShowNext",1);o([s({type:Boolean})],a.prototype,"widgetShowClose",1);export{a as A};
