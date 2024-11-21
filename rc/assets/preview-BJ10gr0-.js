import{g as getCustomElementSuffix}from"./custom-element-scope-Dp4Dg8bo.js";import{r as r$1,a as r$2,i as i$1}from"./lit-element-vV9fql9z.js";import{x,B}from"./lit-html-paDGiEfB.js";import{n}from"./property-CzN8u98o.js";import{r as resetStyles}from"./reset.style-B0CQ8619.js";import{i as iconStyles}from"./icon.style-BFmaJcLw.js";import{e}from"./class-map-2iHk_WiG.js";import{d as decorativeIconStyles,A as Accordion}from"./accordion-wGXhMz48.js";import{A as ActionMenu}from"./action-menu-C54ww5C6.js";import{b as booleanType,s as selectedType}from"./property-types-CkH-zh1n.js";import{i,s,u}from"./static-DLZyqU8Z.js";import{A as Alert}from"./alert-Cs94cQBi.js";import{A as Avatar}from"./avatar-Cb1ARGpi.js";import{b as badgeStates,B as Badge}from"./badge-B2-WdLcZ.js";import{B as Button}from"./button-CeNEyja2.js";import{B as ButtonLink}from"./button-link-CCJAoxkm.js";import{b as buttonStyles}from"./button.style-2dqsCQot.js";import{s as scrollbarStyles,o,i as inputStyles,D as Datepicker_}from"./datepicker-BRwK53Kt.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(d){return n({...d,state:!0,attribute:!1})}function registerCustomElement(d,t){const a=getCustomElementSuffix(),c=`${d}${a}`;customElements.define(c,t)}const template$3=d=>x`

  ${d.fontLoaded?x`
      <i
        class=${e({"dss-icon":!0,[`dss-icon--${d.size}`]:!!d.size})}
        translate="no"
      >
        ${d.icon}
      </i>
    `:x`
      <span
        class=${e({"dss-icon-skeleton":!0,[`dss-icon-skeleton--${d.size}`]:!!d.size})}>
      </span>
    `}
`;var __defProp$X=Object.defineProperty,__decorateClass$X=(d,t,a,c)=>{for(var l=void 0,h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$X(t,a,l),l};class Icon extends r$1{constructor(){super(...arguments),this.size="md",this.icon="",this.fontLoaded=!1}static get styles(){return[r$2(resetStyles),r$2(iconStyles)]}firstUpdated(){document.fonts.load('1em "Material Symbols Rounded"').then(()=>{this.fontLoaded=!0})}render(){return template$3(this)}}__decorateClass$X([n({type:String})],Icon.prototype,"size");__decorateClass$X([n({type:String})],Icon.prototype,"icon");__decorateClass$X([r()],Icon.prototype,"fontLoaded");const styles$h=".dss-action-menu-item{position:relative;display:flex;align-items:center;padding:var(--dss-spacing-sm) var(--dss-spacing-md);gap:var(--dss-spacing-xs);background-color:var(--color-white);transition:all .3s ease-in-out;color:var(--color-neutral-900)}.dss-action-menu-item:focus-visible{outline:none;box-shadow:inset 0 0 0 var(--dss-border-width-lg) var(--color-blue-200)}.dss-action-menu-item:not(.dss-action-menu-item--disabled):hover{background-color:var(--color-primary-100)}.dss-action-menu-item:not(.dss-action-menu-item--disabled):active,.dss-action-menu-item:not(.dss-action-menu-item--disabled).dss-action-menu-item--selected{background-color:var(--color-primary-50)}.dss-action-menu-item.dss-action-menu-item--first{border-top-left-radius:var(--dss-radius-sm);border-top-right-radius:var(--dss-radius-sm)}.dss-action-menu-item.dss-action-menu-item--last{border-bottom-left-radius:var(--dss-radius-sm);border-bottom-right-radius:var(--dss-radius-sm)}.dss-action-menu-item .dss-icon{color:var(--color-neutral-900)}.dss-action-menu-item--error:not(.dss-action-menu-item--disabled){color:var(--color-red-500)}.dss-action-menu-item--error:not(.dss-action-menu-item--disabled):hover{background-color:var(--color-red-50)}.dss-action-menu-item--error:not(.dss-action-menu-item--disabled):active{background-color:var(--color-red-100)}.dss-action-menu-item--error:not(.dss-action-menu-item--disabled).dss-action-menu-item--selected{background-color:var(--color-primary-50)}.dss-action-menu-item--error:not(.dss-action-menu-item--disabled) .dss-action-menu-item-label,.dss-action-menu-item--error:not(.dss-action-menu-item--disabled) .dss-icon{color:var(--color-red-500)}.dss-action-menu-item-label{flex:1;font-size:16px;line-height:24px;font-weight:var(--font-regular);color:var(--color-neutral-900);min-width:92px}.dss-action-menu-item__nested-menu{position:absolute;left:calc(100% + var(--dss-spacing-xs));z-index:900}.dss-action-menu-item__nested-menu--top{top:0}.dss-action-menu-item__nested-menu--bottom{bottom:0}::slotted(dss-action-menu){display:none}.dss-action-menu-item--selected:not(.dss-action-menu-item--disabled) ::slotted(dss-action-menu){display:block}.dss-action-menu-item--disabled{color:var(--color-neutral-500);cursor:not-allowed}.dss-action-menu-item--disabled .dss-action-menu-item-label{color:var(--color-neutral-500)}",dssIcon$2=i`dss-icon${s(getCustomElementSuffix())}`,dssIconButton$1=i`dss-icon-button${s(getCustomElementSuffix())}`,dssNotificationBadge=i`dss-notification-badge${s(getCustomElementSuffix())}`,actionMenuItemTemplate=d=>u`
  <li
    class=${e({"dss-action-menu-item":!0,"dss-action-menu-item--selected":!!d._selected,"dss-action-menu-item--disabled":!!d._disabled,"dss-action-menu-item--first":!!d._first,"dss-action-menu-item--last":!!d._last,[`dss-action-menu-item--${d._state}`]:!!d._state})}
    tabindex="${d._disabled?-1:0}"
    @click=${d._handleItemClick}
    @keydown=${d._handleKeydown}
  >
    ${d._leftIcon?u`<${dssIcon$2} size="md" icon="${d._leftIcon}"></${dssIcon$2}>`:null}
    <span class="dss-action-menu-item-label">${d._label}</span>
    ${!d._selected&&d._notifications>0?u`
          <${dssNotificationBadge}
            state="${d._notificationsState}"
            value="${d._notifications}"
          ></${dssNotificationBadge}>
        `:null}
    ${d._rightIcon?u`<${dssIcon$2} size="md" icon="${d._rightIcon}"></${dssIcon$2}>`:null}
    ${d._actionIcon?u`
          <${dssIconButton$1}
            icon="${d._actionIcon}"
            type="${d._actionState}"
            @onClick="${d._handleAction}"
            ?disabled=${d._disabled}
          ></${dssIconButton$1}>
        `:null}
    ${d._hasNestedMenu?u`
          <${dssIcon$2} size="md" icon="chevron_right"></${dssIcon$2}>
          <div
            class=${e({"dss-action-menu-item__nested-menu":!0,[`dss-action-menu-item__nested-menu--${d._nestedMenuPosition}`]:!!d._nestedMenuPosition})}
          >
            <slot></slot>
          </div>
        `:null}
  </li>
`;var __defProp$W=Object.defineProperty,__getOwnPropDesc$W=Object.getOwnPropertyDescriptor,__decorateClass$W=(d,t,a,c)=>{for(var l=__getOwnPropDesc$W(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$W(t,a,l),l};class ActionMenuItem extends r$1{constructor(){super(...arguments),this._state="primary",this._label="Label",this._leftIcon=void 0,this._rightIcon=void 0,this._actionIcon=void 0,this._actionState="primary",this._notifications=0,this._notificationsState="error",this._selected=!1,this._disabled=!1,this._hasNestedMenu=!1,this._nestedMenuPosition="top",this._first=!1,this._last=!1}static get styles(){return[r$2(resetStyles),r$2(styles$h)]}set state(t){const a=this._state;this._state=t==="error"?t:"primary",this.requestUpdate("state",a)}set label(t){const a=this._label;this._label=t,this.requestUpdate("label",a)}set leftIcon(t){const a=this._leftIcon;this._leftIcon=t,this.requestUpdate("leftIcon",a)}set rightIcon(t){const a=this._rightIcon;this._rightIcon=t,this.requestUpdate("rightIcon",a)}set actionIcon(t){const a=this._actionIcon;this._actionIcon=t,this.requestUpdate("actionIcon",a)}set actionState(t){const a=this._actionState;this._actionState=t,this.requestUpdate("actionState",a)}set notifications(t){const a=this._notifications;this._notifications=t,this.requestUpdate("notifications",a)}set notificationsState(t){const a=this._notificationsState;this._notificationsState=t,this.requestUpdate("notificationsState",a)}set selected(t){const a=this._selected;this._selected=t,this.requestUpdate("selected",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set hasNestedMenu(t){const a=this._hasNestedMenu;this._hasNestedMenu=t,this.requestUpdate("hasNestedMenu",a)}set nestedMenuPosition(t){const a=this._nestedMenuPosition;this._nestedMenuPosition=t,this.requestUpdate("nestedMenuPosition",a)}set first(t){const a=this._first;this._first=t,this.requestUpdate("first",a)}set last(t){const a=this._last;this._last=t,this.requestUpdate("last",a)}_handleItemClick(){this._hasNestedMenu?(this._selected=!0,this.requestUpdate()):(this.dispatchEvent(new CustomEvent("onClick",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("onActionMenuItemClick",{bubbles:!0,composed:!0})))}_handleKeydown(t){const a=t.key;a==="Enter"||a==="Space"?this._handleItemClick():a==="Escape"&&this._selected&&this._unselectItem()}_handleAction(){this.dispatchEvent(new CustomEvent("onAction",{bubbles:!0,composed:!0}))}_clickOutside(){document.addEventListener("click",t=>{t.composedPath().includes(this)||this._selected&&this._unselectItem()})}_unselectItem(){this._selected=!1,this.requestUpdate()}async firstUpdated(){try{await this.updateComplete,this._clickOutside()}catch{console.error("ERROR OCURRED")}}render(){return actionMenuItemTemplate(this)}}__decorateClass$W([n({type:String})],ActionMenuItem.prototype,"state");__decorateClass$W([n({type:String})],ActionMenuItem.prototype,"label");__decorateClass$W([n({type:String})],ActionMenuItem.prototype,"leftIcon");__decorateClass$W([n({type:String})],ActionMenuItem.prototype,"rightIcon");__decorateClass$W([n({type:String})],ActionMenuItem.prototype,"actionIcon");__decorateClass$W([n({type:String})],ActionMenuItem.prototype,"actionState");__decorateClass$W([n({type:Number})],ActionMenuItem.prototype,"notifications");__decorateClass$W([n({type:String})],ActionMenuItem.prototype,"notificationsState");__decorateClass$W([n(booleanType)],ActionMenuItem.prototype,"selected");__decorateClass$W([n(booleanType)],ActionMenuItem.prototype,"disabled");__decorateClass$W([n(booleanType)],ActionMenuItem.prototype,"hasNestedMenu");__decorateClass$W([n({type:String})],ActionMenuItem.prototype,"nestedMenuPosition");__decorateClass$W([n(booleanType)],ActionMenuItem.prototype,"first");__decorateClass$W([n(booleanType)],ActionMenuItem.prototype,"last");function toDate(d){const t=Object.prototype.toString.call(d);return d instanceof Date||typeof d=="object"&&t==="[object Date]"?new d.constructor(+d):typeof d=="number"||t==="[object Number]"||typeof d=="string"||t==="[object String]"?new Date(d):new Date(NaN)}function endOfMonth(d){const t=toDate(d),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function eachDayOfInterval(d,t){const a=toDate(d.start),c=toDate(d.end);let l=+a>+c;const h=l?+a:+c,p=l?c:a;p.setHours(0,0,0,0);let b=1;const g=[];for(;+p<=h;)g.push(toDate(p)),p.setDate(p.getDate()+b),p.setHours(0,0,0,0);return l?g.reverse():g}function startOfMonth(d){const t=toDate(d);return t.setDate(1),t.setHours(0,0,0,0),t}function getDay(d){return toDate(d).getDay()}const iconButtonStyles=':host{display:inline-block;vertical-align:middle}.dss-icon-button{position:relative;background-color:transparent;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.3s all ease-in;width:24px;height:24px;font-size:var(--icon-size-md)}.dss-icon-button .dss-icon{z-index:1}.dss-icon-button:before{content:"";position:absolute;top:50%;left:50%;width:32px;height:32px;background-color:transparent;border-radius:100%;transform:translate(-50%,-50%);transition:.3s all ease-in;z-index:0}.dss-icon-button--sm{height:16px;width:16px;font-size:var(--icon-size-sm)}.dss-icon-button.dss-icon-button--sm:before{width:24px;height:24px}.dss-icon-button--lg{height:32px;width:32px;font-size:var(--icon-size-lg)}.dss-icon-button.dss-icon-button--lg:before{width:40px;height:40px}.dss-icon-button:disabled{cursor:not-allowed;color:var(--color-neutral-400)}.dss-icon-button[hidden]{display:none}.dss-icon-button:focus-visible:enabled{outline:0}.dss-icon-button:focus-visible:enabled:before{outline:var(--dss-spacing-xxs) solid var(--color-blue-200);transition:none}.dss-icon-button--default{color:var(--color-neutral-700)}.dss-icon-button--default:hover:enabled:before{background-color:var(--color-neutral-100)}.dss-icon-button--default:active:enabled:before{background-color:var(--color-neutral-50);transition:none}.dss-icon-button--white-default{color:var(--color-white)}.dss-icon-button--white-default:hover:enabled:before{background-color:var(--color-neutral-100)}.dss-icon-button--white-default:active:enabled:before{background-color:var(--color-neutral-50);transition:none}.dss-icon-button--white-default:disabled{opacity:.4;color:var(--color-white)}.dss-icon-button--primary{color:var(--color-primary-500)}.dss-icon-button--primary:hover:enabled:before{background-color:var(--color-primary-100)}.dss-icon-button--primary:active:enabled:before{background-color:var(--color-primary-50);transition:none}.dss-icon-button--error{color:var(--color-red-700)}.dss-icon-button--error:hover:enabled:before{background-color:var(--color-red-100)}.dss-icon-button--error:active:enabled:before{background-color:var(--color-red-50)}.dss-icon-button--warning{color:var(--color-yellow-800)}.dss-icon-button--warning:hover:enabled:before{background-color:var(--color-yellow-100)}.dss-icon-button--warning:active:enabled:before{background-color:var(--color-yellow-50)}.dss-icon-button--success{color:var(--color-green-700)}.dss-icon-button--success:hover:enabled:before{background-color:var(--color-green-100)}.dss-icon-button--success:active:enabled:before{background-color:var(--color-green-50)}.dss-icon-button--info{color:var(--color-blue-700)}.dss-icon-button--info:hover:enabled:before{background-color:var(--color-blue-100)}.dss-icon-button--info:active:enabled:before{background-color:var(--color-blue-50)}.dss-icon-button dss-icon{z-index:100}',styles$g=':host{display:inline-block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.calendar__container{position:relative;background:#fff;box-shadow:0 4px 8px 3px #0000000d,0 1px 3px #0000001a;margin-bottom:var(--dss-spacing-xxs);border-radius:var(--dss-radius-sm)}.calendar__content{padding:var(--dss-spacing-md);border-radius:8px 8px 0 0}.calendar__content--buttons{border-top:var(--dss-border-width-sm) solid var(--color-neutral-100)}.calendar__content:last-child{border-radius:0 0 8px 8px;box-shadow:none}.calendar__header{display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-xs);margin-bottom:16px}.calendar__header-item{display:flex;justify-content:center;align-items:center;gap:var(--dss-spacing-xxs)}.calendar__header-item--click{font-weight:var(--font-semibold);color:var(--color-neutral-900);border-radius:var(--dss-radius-xs);padding:var(--dss-spacing-xxs);cursor:pointer}.calendar__header-item--click:hover{background-color:var(--color-primary-50)}.calendar__header-item--click:active{background-color:var(--color-primary-100)}.calendar__header-item--click:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.calendar__header-item--click:disabled{cursor:not-allowed;color:var(--color-neutral-500)}.calendar__header-buttons .dss-icon-button.dss-icon-button--lg,.calendar-selector--year .dss-icon-button.dss-icon-button--lg{width:32px;height:32px;box-sizing:border-box}.calendar__header-title{margin:auto;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:16px;line-height:24px;color:#414141}.calendar__days-content{display:flex;flex-direction:column;gap:6px}.calendar__week-names,.calendar__days{list-style-type:none;padding:0;margin:0;gap:8px 6px;display:grid;grid-template-columns:repeat(7,1fr)}.calendar__week-names>li{text-align:center}.calendar__day-item{position:relative;height:32px;width:32px;display:flex;justify-content:center;align-items:center;background-color:transparent;border:none;z-index:999;border-radius:100%;cursor:pointer;font-size:14px;font-family:var(--font-family);font-weight:var(--font-semibold);line-height:24px;color:var(--color-neutral-900)}.calendar__day-item--weekend{font-weight:var(--font-regular)}.calendar__day-item--range:before{position:absolute;content:"";top:0;bottom:0;left:-6px;right:-6px;background:var(--color-primary-100);z-index:-2}.calendar__day-item--range:hover{color:#fff!important}.calendar__day-item--range:hover:after{position:absolute;content:"";width:100%;height:100%;border-radius:100%;background:var(--color-primary-500);color:#fff;z-index:-1}.calendar__day-item--active{color:#0073e6;box-shadow:inset 0 0 0 2px #0073e6}.calendar__day-item:hover:enabled,.calendar__day-item--selected{background:#0073e6!important;color:#fff}.calendar__day-item--selected-range-start,.calendar__day-item--selected-range-end{color:#fff}.calendar__day-item--selected-range-start:before,.calendar__day-item--selected-range-end:not(.calendar__day-item--selected-range-start):before{position:absolute;content:"";top:0;bottom:0;background:var(--color-primary-100);z-index:-2}.calendar__day-item--selected-range-start:after,.calendar__day-item--selected-range-end:not(.calendar__day-item--selected-range-start):after{position:absolute;content:"";width:100%;height:100%;border-radius:100%;background:var(--color-primary-500);color:#fff;z-index:-1}.calendar__day-item--selected-range-start:before{left:50%;right:-6px}.calendar__day-item--selected-range-end:not(.calendar__day-item--selected-range-start):before{left:-6px;right:50%}.calendar__day-item:not(.calendar__day-item--range-enabled):hover:enabled{transition:all .3s ease-in}.calendar__day-item.calendar__day-item--range-enabled:hover:enabled{transition:background .3s ease-in}.calendar__day-item:active:enabled{background:#308deb;transition:none}.calendar__day-item:disabled{pointer-events:none;opacity:.5}.calendar__time-container{display:flex;margin:auto;justify-content:center;align-items:center;gap:12px;font-weight:600;font-size:14px;line-height:24px;color:#1d1d1d}.calendar__time-content{display:flex;flex-direction:column;gap:8px;align-items:center}.calendar__buttons{display:flex;justify-content:center;align-items:center;gap:16px}.dss-datepicker__timepicker{position:relative;box-sizing:border-box;padding:var(--dss-spacing-xs) var(--dss-spacing-md) var(--dss-spacing-md)}.calendar-selector{position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;padding:var(--dss-spacing-md);background-color:var(--color-white);z-index:1000;border-radius:var(--dss-radius-sm)}.calendar-selector-title{font-size:16px;line-height:24px;font-weight:var(--font-semibold);margin-bottom:var(--dss-spacing-md)}.calendar-selector-title__actions{display:flex;justify-content:flex-end;align-items:center;gap:0}.calendar-selector-title--years{display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-xs)}.calendar-selector-options{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--dss-spacing-xs)}.calendar-selector-options--4col{grid-template-columns:repeat(4,1fr)}.calendar-selector-options__item{height:32px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;font-size:14px;font-weight:var(--font-semibold);text-transform:lowercase;text-align:center;color:var(--color-neutral-900);border-radius:var(--dss-radius-xs);overflow:hidden;cursor:pointer}.calendar-selector-options__item--current{color:var(--color-primary-700)}.calendar-selector-options__item--selected{background-color:var(--color-primary-500);color:var(--color-white)}.calendar-selector-options__item:hover{background-color:var(--color-primary-600);color:var(--color-white)}.calendar-selector-options__item:active{background-color:var(--color-primary-400);color:var(--color-white)}.calendar-selector-options__item:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.calendar-selector-options__item:disabled{cursor:not-allowed;color:var(--color-neutral-500)}',dssTimepicker=i`dss-timepicker${s(getCustomElementSuffix())}`,template$2=d=>{var t,a,c,l;return u`
  <div
        class="calendar__container"
        @keydown="${d._handleCalendarKeydown}"
      >
        <div class="calendar__content">
          <header class="calendar__header">
            <div class="calendar__header-item calendar__header-selector">
              <div
                id="firstCalendarElement"
                class="calendar__header-item calendar__header-item--click calendar__header-month"
                tabindex="0"
                role="button"
                @keydown="${d._onHeaderMonthKeyDown}"
                @click="${d._toggleMonthSelector}"
              >
                ${MONTH[d._currMonth]}
                <span class="dss-icon dss-icon--sm">expand_more</span>
              </div>
              <div
                class="calendar__header-item calendar__header-item--click calendar__header-year"
                tabindex="0"
                role="button"
                @keydown="${d._onHeaderYearKeyDown}"
                @click=${d._toggleYearSelector}
              >
                ${d._currYear}
                <span class="dss-icon dss-icon--sm">expand_more</span>
              </div>
            </div>
            <div class="calendar__header-item calendar__header-buttons">
              <button
                type="button"
                class="dss-icon-button dss-icon-button--primary dss-icon-button--lg"
                @click=${d._prev}
                ?disabled=${d._currMonth===((t=d._minDate)==null?void 0:t.getMonth())&&d._currYear===((a=d._minDate)==null?void 0:a.getFullYear())}
              >
                <span class="dss-icon">chevron_left</span>
              </button>
              <button
                type="button"
                class="dss-icon-button dss-icon-button--primary dss-icon-button--lg"
                @click=${d._next}
                ?disabled=${d._currMonth===((c=d._maxDate)==null?void 0:c.getMonth())&&d._currYear===((l=d._maxDate)==null?void 0:l.getFullYear())}
              >
                <span class="dss-icon">chevron_right</span>
              </button>
            </div>
          </header>

          <div class="calendar__days-content">
            <ul class="calendar__week-names">
              ${WEEK.map(h=>u`<li>${h}</li>`)}
            </ul>
            <div
              class="calendar__days"
              @mouseleave=${d._removeRangeOverDate}
            >
              ${d._days.map(h=>{const p={"calendar__day-item--active":d._isToday(h),"calendar__day-item--weekend":d._isWeekend(h),"calendar__day-item--selected":d._isSelected(h),"calendar__day-item--range":d._isBetweenRange(h)||d._isBetweenRangeOnMouseOver(h),"calendar__day-item--selected-range-start":d._isSelectedRangeStart(h),"calendar__day-item--selected-range-end":d._isSelectedRangeEnd(h)||d._isOverRangeDate(h),"calendar__day-item--range-enabled":d._range};return u`
                  <button
                    class="calendar__day-item ${e(p)}"
                    @click=${()=>d._selectDate(h)}
                    @mouseover=${()=>d._selectRangeOverDate(h)}
                    @focus=${()=>d._selectRangeOverDate(h)}
                    ?disabled=${d._isInactive(h)}
                  >
                    ${h||null}
                  </button>
                `})}
            </div>
          </div>
        </div>
        ${d._showMonthSelector?u`
              <div class="calendar-selector calendar-selector--month">
                <div class="calendar-selector-title">Selecciona un mes</div>
                <div class="calendar-selector-options">
                  ${d._generateMonthsOptions()}
                </div>
              </div>
            `:null}
        ${d._showYearSelector?u`
              <div class="calendar-selector calendar-selector--year">
                <div
                  class="calendar-selector-title calendar-selector-title--years"
                >
                  <div class="calendar-selector-title__years">
                    ${d._yearsRangeStart} - ${d._yearsRangeEnd}
                  </div>
                  <div class="calendar-selector-title__actions">
                    <button
                      type="button"
                      class="dss-icon-button dss-icon-button--primary dss-icon-button--lg"
                      @click=${d._onYearRangeStepDown}
                    >
                      <span class="dss-icon">chevron_left </span>
                    </button>
                    <button
                      type="button"
                      class="dss-icon-button dss-icon-button--primary dss-icon-button--lg"
                      @click=${d._onYearRangeStepUp}
                    >
                      <span class="dss-icon">chevron_right </span>
                    </button>
                  </div>
                </div>
                <div
                  class="calendar-selector-options calendar-selector-options--4col"
                >
                  ${d._generateYearsRangeOptions()}
                </div>
              </div>
            `:null}
        ${d._showTime?u`
              <div class="dss-datepicker__timepicker">
                <${dssTimepicker}
                  .dropdown="${d._timepicker}"
                  .customTimeListOptions=${d._customTimeListOptions}
                  .minutesRange=${d._minutesRange}
                  .minHour=${d._minHour}
                  .maxHour=${d._maxHour}
                  @onTimepickerChange=${d._onSelectTime}
                >
                  <label slot="label" for="innerTimepicker"
                    >${d._timepickerLabel}</label
                  >
                  <input
                    slot="input"
                    id="innerTimepicker"
                    type="text"
                    class="dss-input"
                    maxlength="5"
                    .value="${d._timepickerValue}"
                  />
                </${dssTimepicker}>
              </div>
            `:null}
        ${d._showButtons||d._showTime?u`
              <div class="calendar__content calendar__content--buttons">
                <div class="calendar__buttons">
                  <button
                    type="button"
                    class="dss-button dss-button--md dss-button--secondary"
                    @click=${d._onCancel}
                  >
                    ${d._leftLabel}
                  </button>
                  <button
                    type="button"
                    class="dss-button dss-button--md dss-button--primary"
                    @click=${d._onAccept}
                    ?disabled=${d._validateSelectedDate()}
                  >
                    ${d._rightLabel}
                  </button>
                </div>
              </div>
            `:null}
      </div>
  
`};var __defProp$V=Object.defineProperty,__getOwnPropDesc$V=Object.getOwnPropertyDescriptor,__decorateClass$V=(d,t,a,c)=>{for(var l=__getOwnPropDesc$V(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$V(t,a,l),l};const MONTH=["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],WEEK=["dl","dm","dc","dj","dv","ds","dg"];class Calendar extends r$1{constructor(){super(),this._range=!1,this._isRangeStartFocused=!1,this._isRangeEndFocused=!1,this._rangeStartDate=null,this._rangeEndDate=null,this._rangeOverDate=null,this._timepicker="",this._minutesRange=1,this._minHour=0,this._maxHour=24,this._customTimeListOptions=[],this._timepickerLabel="",this._date=new Date,this._currYear=this._date.getFullYear(),this._currMonth=this._date.getMonth(),this._currHour=void 0,this._currMin=void 0,this._days=this._getDays(),this._selectedDate=null,this._showTime=!1,this._showButtons=!0,this._leftLabel="Cancel·lar",this._rightLabel="Seleccionar",this._minDate=null,this._maxDate=null,this._timepickerValue="",this._showMonthSelector=!1,this._showYearSelector=!1,this._yearsRangeStart=new Date().getFullYear()-18,this._yearsRangeEnd=new Date().getFullYear()+1,this._isTimeFormatValid=!1,this._focusFirstElementHandler=this._focusFirstElement.bind(this)}static get styles(){return[r$2(iconStyles),r$2(buttonStyles),r$2(iconButtonStyles),r$2(styles$g)]}set range(t){const a=this._range;this._range=t,this.requestUpdate("range",a)}set isRangeStartFocused(t){const a=this._isRangeStartFocused;this._isRangeStartFocused=t,this.requestUpdate("isRangeStartFocused",a)}set isRangeEndFocused(t){const a=this._isRangeEndFocused;this._isRangeEndFocused=t,this.requestUpdate("isRangeStartFocused",a)}set selectedDate(t){const a=this._selectedDate;this._selectedDate=this._getDateString(t),this._updateCurrentDate(),this.requestUpdate("selectedDate",a)}set minDate(t){const a=this._minDate;this._minDate=this._getDateString(t),this.requestUpdate("minDate",a)}set maxDate(t){const a=this._maxDate;this._maxDate=this._getDateString(t),this.requestUpdate("maxDate",a)}set showTime(t){const a=this._showTime;this._showTime=t,this.requestUpdate("showTime",a)}set showButtons(t){const a=this._showButtons;this._showButtons=t,this.requestUpdate("showButtons",a)}set leftLabel(t){const a=this._leftLabel;this._leftLabel=t,this.requestUpdate("leftLabel",a)}set rightLabel(t){const a=this._rightLabel;this._rightLabel=t,this.requestUpdate("rightLabel",a)}set timepicker(t){const a=this._timepicker;this._timepicker=t,this.requestUpdate("timepicker",a)}set minutesRange(t){const a=this._minutesRange;this._minutesRange=t,this.requestUpdate("minutesRange",a)}set minHour(t){const a=this._minHour;this._minHour=t,this.requestUpdate("minHour",a)}set maxHour(t){const a=this._maxHour;this._maxHour=t,this.requestUpdate("maxHour",a)}set customTimeListOptions(t){const a=this._customTimeListOptions;this._customTimeListOptions=t,this.requestUpdate("customTimeListOptions",a)}set timepickerLabel(t){const a=this._timepickerLabel;this._timepickerLabel=t,this.requestUpdate("timepickerLabel",a)}set rangeStartDate(t){const a=this._rangeStartDate;this._rangeStartDate=this._getDateString(t),this.requestUpdate("rangeStartDate",a)}set rangeEndDate(t){const a=this._rangeEndDate;this._rangeEndDate=this._getDateString(t),this.requestUpdate("rangeEndDate",a)}connectedCallback(){super.connectedCallback(),this._range&&window.addEventListener("range-focus-calendar",this._focusFirstElementHandler)}disconnectedCallback(){super.disconnectedCallback(),this._range&&window.removeEventListener("range-focus-calendar",this._focusFirstElementHandler)}_focusFirstElement(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector("#firstCalendarElement");t==null||t.focus()}_prev(){this._currMonth-=1,this._update()}_next(){this._currMonth+=1,this._update()}_update(){(this._currMonth<0||this._currMonth>11)&&(this._date=new Date(this._currYear,this._currMonth,new Date().getDate()),this._currYear=this._date.getFullYear(),this._currMonth=this._date.getMonth()),this._days=this._getDays(),this.requestUpdate()}_getDays(){const t=[],a=startOfMonth(new Date(this._currYear,this._currMonth)),c=endOfMonth(new Date(this._currYear,this._currMonth)),l=eachDayOfInterval({start:a,end:c}),h=getDay(a);for(let p=h===0?6:h-1;p>0;p-=1)t.push(0);for(const p of l)t.push(p.getDate());return t}_isToday(t){const a=new Date;return t===a.getDate()&&this._currMonth===a.getMonth()&&this._currYear===a.getFullYear()}_isWeekend(t){const a=new Date(this._currYear,this._currMonth,t);return a.getDay()===0||a.getDay()===6}_isInactive(t){const a=new Date(this._currYear,this._currMonth,t);return t?this._minDate&&this._maxDate?!(a>=this._minDate&&a<=this._maxDate):this._minDate?!(a>=this._minDate):this._maxDate?!(a<=this._maxDate):!1:!0}_isSelected(t){var a,c,l,h,p,b;return this._range?t===((a=this._rangeStartDate)==null?void 0:a.getDate())&&this._currMonth===((c=this._rangeStartDate)==null?void 0:c.getMonth())&&this._currYear===((l=this._rangeStartDate)==null?void 0:l.getFullYear())||this._isSelectedRangeEnd(t):t===((h=this._selectedDate)==null?void 0:h.getDate())&&this._currMonth===((p=this._selectedDate)==null?void 0:p.getMonth())&&this._currYear===((b=this._selectedDate)==null?void 0:b.getFullYear())}_isSelectedRangeStart(t){var a,c,l,h,p,b,g,m;return this._range&&this._rangeStartDate&&this._rangeEndDate?!this._compareSelectedRangeDates()&&t===((a=this._rangeStartDate)==null?void 0:a.getDate())&&this._currMonth===((c=this._rangeStartDate)==null?void 0:c.getMonth())&&this._currYear===((l=this._rangeStartDate)==null?void 0:l.getFullYear()):this._range&&this._rangeStartDate&&!this._rangeEndDate?this._rangeOverDate!==null&&((h=this._rangeStartDate)==null?void 0:h.getTime())<((p=this._rangeOverDate)==null?void 0:p.getTime())&&t===((b=this._rangeStartDate)==null?void 0:b.getDate())&&this._currMonth===((g=this._rangeStartDate)==null?void 0:g.getMonth())&&this._currYear===((m=this._rangeStartDate)==null?void 0:m.getFullYear())&&(!this._isRangeStartFocused||this._showButtons)&&(this._isRangeEndFocused||this._rangeStartDate!==null):(this._range&&this._rangeStartDate===this._rangeEndDate,!1)}_isSelectedRangeEnd(t){var a,c,l;return!this._compareSelectedRangeDates()&&t===((a=this._rangeEndDate)==null?void 0:a.getDate())&&this._currMonth===((c=this._rangeEndDate)==null?void 0:c.getMonth())&&this._currYear===((l=this._rangeEndDate)==null?void 0:l.getFullYear())}_isOverRangeDate(t){var c,l,h;const a=t===((c=this._rangeOverDate)==null?void 0:c.getDate())&&this._currMonth===((l=this._rangeOverDate)==null?void 0:l.getMonth())&&this._currYear===((h=this._rangeOverDate)==null?void 0:h.getFullYear());return this._range&&this._rangeOverDate&&this._rangeStartDate&&!this._rangeEndDate?a&&this._rangeOverDate.getTime()>this._rangeStartDate.getTime()&&(!this._isRangeStartFocused||this._showButtons)&&(this._isRangeEndFocused||this._rangeStartDate!==null):!1}_compareSelectedRangeDates(){return this._rangeStartDate&&this._rangeEndDate?this._rangeStartDate.getFullYear()===this._rangeEndDate.getFullYear()&&this._rangeStartDate.getMonth()===this._rangeEndDate.getMonth()&&this._rangeStartDate.getDate()===this._rangeEndDate.getDate():!0}_isBetweenRange(t){const a=new Date(this._currYear,this._currMonth,t);return!this._isInactive(t)&&this._rangeStartDate&&this._rangeEndDate?a.getTime()>this._rangeStartDate.getTime()&&a.getTime()<this._rangeEndDate.getTime():!1}_isBetweenRangeOnMouseOver(t){const a=new Date(this._currYear,this._currMonth,t),c=this._isInactive(t);return!c&&this._rangeStartDate&&!this._rangeEndDate&&this._rangeOverDate?a.getTime()>this._rangeStartDate.getTime()&&a.getTime()<this._rangeOverDate.getTime()&&(!this._isRangeStartFocused||this._showButtons)&&(this._isRangeEndFocused||this._rangeStartDate!==null):!c&&this._rangeStartDate&&this._rangeEndDate&&this._rangeOverDate?a.getTime()>this._rangeStartDate.getTime()&&a.getTime()<this._rangeEndDate.getTime()&&a.getTime()<this._rangeOverDate.getTime()&&(!this._isRangeStartFocused||this._showButtons)&&(this._isRangeEndFocused||this._rangeStartDate!==null):!1}_selectDate(t){this._selectedDate=new Date(this._currYear,this._currMonth,t),this._range&&!this._showButtons&&(this._rangeStartDate&&this._rangeEndDate&&!this._isRangeEndFocused&&this._selectedDate.getTime()>=this._rangeEndDate.getTime()&&(this._rangeStartDate=null,this._rangeEndDate=null),this._isRangeStartFocused||!this._rangeStartDate||this._rangeStartDate.getTime()>this._selectedDate.getTime()?this._rangeStartDate=this._selectedDate:this._rangeEndDate=this._selectedDate),this._range&&this._showButtons&&(this._rangeStartDate&&this._rangeEndDate&&(this._rangeStartDate=null,this._rangeEndDate=null),!this._rangeStartDate||this._rangeStartDate.getTime()>this._selectedDate.getTime()?this._rangeStartDate=this._selectedDate:this._rangeEndDate=this._selectedDate),this.requestUpdate(),!this._showButtons&&(this._range?this._emitRange():this._emitDate())}_selectRangeOverDate(t){this._range&&(this._rangeOverDate=new Date(this._currYear,this._currMonth,t),this.requestUpdate())}_removeRangeOverDate(){this._rangeOverDate=null,this.requestUpdate()}_onCancel(){const t=new CustomEvent("onCancel",{bubbles:!0,composed:!0});this.dispatchEvent(t)}_onAccept(){this._range?this._emitRange():this._emitDate()}_emitDate(){var h,p,b,g;const t=(p=(h=this._selectedDate)==null?void 0:h.getDate())==null?void 0:p.toString().padStart(2,"0"),a=(this._currMonth+1).toString().padStart(2,"0");let c=`${t}/${a}/${this._currYear}`;if(this._showTime){const m=(b=this._currHour)==null?void 0:b.toString().padStart(2,"0"),w=(g=this._currMin)==null?void 0:g.toString().padStart(2,"0");c+=` ${m}:${w}`}const l=new CustomEvent("onDateChange",{detail:c,bubbles:!0,composed:!0});this.dispatchEvent(l)}_emitRange(){var l,h,p,b,g,m,w,v,f,y,k,$;let t=null;if((l=this._rangeStartDate)!=null&&l.getDate()&&((h=this._rangeStartDate)!=null&&h.getMonth())&&((p=this._rangeStartDate)!=null&&p.getFullYear())){const _=(b=this._rangeStartDate.getDate())==null?void 0:b.toString().padStart(2,"0"),C=(((g=this._rangeStartDate)==null?void 0:g.getMonth())+1).toString().padStart(2,"0");t=`${_}/${C}/${(m=this._rangeStartDate)==null?void 0:m.getFullYear()}`}let a=null;if((w=this._rangeEndDate)!=null&&w.getDate()&&((v=this._rangeEndDate)!=null&&v.getMonth())&&((f=this._rangeEndDate)!=null&&f.getFullYear())){const _=(y=this._rangeEndDate.getDate())==null?void 0:y.toString().padStart(2,"0"),C=(((k=this._rangeEndDate)==null?void 0:k.getMonth())+1).toString().padStart(2,"0");a=`${_}/${C}/${($=this._rangeEndDate)==null?void 0:$.getFullYear()}`}const c=new CustomEvent("onRangeChange",{detail:{rangeStart:t,rangeEnd:a},bubbles:!0,composed:!0});this.dispatchEvent(c)}_updateCurrentDate(){if(!this._selectedDate){this._currYear=this._date.getFullYear(),this._currMonth=this._date.getMonth();return}this._currMonth=this._selectedDate.getMonth(),this._currYear=this._selectedDate.getFullYear(),this._currHour=this._selectedDate.getHours(),this._currMin=this._selectedDate.getMinutes(),this._days=this._getDays(),this._currHour>=10?this._timepickerValue=`${this._currHour}:`:this._timepickerValue=`0${this._currHour}:`,this._currMin>=10?this._timepickerValue+=this._currMin:this._timepickerValue+=`0${this._currMin}`}_getDateString(t){const a=t==null?void 0:t.replace(/(\d+[/])(\d+[/])/,"$2$1"),c=this._showTime?14:8;return(a==null?void 0:a.length)>c?new Date(a):null}_onSelectTime(t){if(this._isTimeFormatValid=!1,t.detail.status==="VALID"){this._isTimeFormatValid=!0;const a=t.detail.value;this._currHour=+a.substring(0,2),this._currMin=+a.substring(3,5)}this.requestUpdate()}_toggleMonthSelector(){this._showMonthSelector=!0,this.requestUpdate()}_onMonthSelectorClick(t){const a=MONTH.indexOf(t);this._currMonth=a,this._update(),this._showMonthSelector=!1,this.requestUpdate()}_toggleYearSelector(){this._showYearSelector=!0,this.requestUpdate()}_onYearSelectorClick(t){this._currYear=t,this._update(),this._showYearSelector=!1,this.requestUpdate()}_generateYearsRangeOptions(){const t=[];for(let c=this._yearsRangeStart;c<=this._yearsRangeEnd;c+=1)t.push(c);return t.map(c=>{const l=v=>{v&&v.focus()},h=v=>{let f=0;const y=this.renderRoot.querySelectorAll(".calendar-selector-options__item--year"),k=y.length-1;v===y[0]?l(y[k]):(y.forEach(($,_)=>{$===v&&(f=_)}),l(y[f-1]))},p=v=>{let f=0;const y=this.renderRoot.querySelectorAll(".calendar-selector-options__item--year"),k=y.length-1;v===y[k]?l(y[0]):(y.forEach(($,_)=>{$===v&&(f=_)}),l(y[f+1]))},b=v=>{const f=v.currentTarget,y=v;let k=!1;switch(y.key){case"ArrowUp":case"ArrowLeft":h(f),k=!0;break;case"ArrowDown":case"ArrowRight":p(f),k=!0;break;case"Enter":const $=v.target,_=this.renderRoot.querySelector('.calendar-selector-options__item--year[tabindex="0"]');_==null||_.setAttribute("tabindex","-1"),v.target.setAttribute("tabindex","0"),$.click(),k=!0;break;case"Escape":this.renderRoot.querySelector(".calendar-selector-options__item--selected").click(),k=!0;break}k&&(v.stopPropagation(),v.preventDefault())},m=new Date().getFullYear(),w={"calendar-selector-options__item--current":c===m,"calendar-selector-options__item--selected":c===this._currYear};return u`
        <div
          class="calendar-selector-options__item calendar-selector-options__item--year ${e(w)}"
          tabindex="${c===this._currYear?0:-1}"
          role="button"
          @keydown=${b}
          @click=${()=>this._onYearSelectorClick(c)}
        >
          ${c}
        </div>
      `})}_generateMonthsOptions(){return MONTH.map(a=>{const c=w=>{w&&w.focus()},l=w=>{let v=0;const f=this.renderRoot.querySelectorAll(".calendar-selector-options__item--month"),y=f.length-1;w===f[0]?c(f[y]):(f.forEach((k,$)=>{k===w&&(v=$)}),c(f[v-1]))},h=w=>{let v=0;const f=this.renderRoot.querySelectorAll(".calendar-selector-options__item--month"),y=f.length-1;w===f[y]?c(f[0]):(f.forEach((k,$)=>{k===w&&(v=$)}),c(f[v+1]))},p=w=>{const v=w.currentTarget,f=w;let y=!1;switch(f.key){case"ArrowUp":case"ArrowLeft":l(v),y=!0;break;case"ArrowDown":case"ArrowRight":h(v),y=!0;break;case"Enter":const k=w.target,$=this.renderRoot.querySelector('.calendar-selector-options__item--month[tabindex="0"]');$==null||$.setAttribute("tabindex","-1"),w.target.setAttribute("tabindex","0"),k.click(),y=!0;break;case"Escape":this.renderRoot.querySelector(".calendar-selector-options__item--selected").click(),y=!0;break}y&&(w.stopPropagation(),w.preventDefault())},g=new Date().getMonth(),m={"calendar-selector-options__item--current":MONTH.indexOf(a)===g,"calendar-selector-options__item--selected":MONTH.indexOf(a)===this._currMonth};return u`
        <div
          class="calendar-selector-options__item calendar-selector-options__item--month ${e(m)}"
          tabindex="${MONTH.indexOf(a)===this._currMonth?0:-1}"
          role="button"
          @keydown=${p}
          @click=${()=>this._onMonthSelectorClick(a)}
        >
          ${a.length<=4?u`${a}`:u`${a.slice(0,3)}.`}
        </div>
      `})}_onYearRangeStepUp(){this._yearsRangeStart+=20,this._yearsRangeEnd+=20,this.requestUpdate()}_onYearRangeStepDown(){this._yearsRangeStart-=20,this._yearsRangeEnd-=20,this.requestUpdate()}_onHeaderMonthKeyDown(t){t.key==="Enter"&&(t.target.click(),setTimeout(()=>{this.renderRoot.querySelector('.calendar-selector-options__item--month[tabindex="0"]').focus()},50))}_onHeaderYearKeyDown(t){t.key==="Enter"&&(t.target.click(),setTimeout(()=>{this.renderRoot.querySelector('.calendar-selector-options__item--year[tabindex="0"]').focus()},50))}_validateSelectedDate(){return!!(!this._range&&!this._selectedDate||!this._range&&this._showTime&&!this._isTimeFormatValid||this._range&&(!this._rangeStartDate||!this._rangeEndDate))}_handleCalendarKeydown(t){(t==null?void 0:t.key)==="Escape"&&this._onCancel()}render(){return template$2(this)}}__decorateClass$V([n(booleanType)],Calendar.prototype,"range");__decorateClass$V([n(booleanType)],Calendar.prototype,"isRangeStartFocused");__decorateClass$V([n(booleanType)],Calendar.prototype,"isRangeEndFocused");__decorateClass$V([n({type:String})],Calendar.prototype,"selectedDate");__decorateClass$V([n({type:String})],Calendar.prototype,"minDate");__decorateClass$V([n({type:String})],Calendar.prototype,"maxDate");__decorateClass$V([n(booleanType)],Calendar.prototype,"showTime");__decorateClass$V([n(booleanType)],Calendar.prototype,"showButtons");__decorateClass$V([n({type:String})],Calendar.prototype,"leftLabel");__decorateClass$V([n({type:String})],Calendar.prototype,"rightLabel");__decorateClass$V([n({type:String})],Calendar.prototype,"timepicker");__decorateClass$V([n({type:Number})],Calendar.prototype,"minutesRange");__decorateClass$V([n({type:Number})],Calendar.prototype,"minHour");__decorateClass$V([n({type:Number})],Calendar.prototype,"maxHour");__decorateClass$V([n({type:Array})],Calendar.prototype,"customTimeListOptions");__decorateClass$V([n({type:String})],Calendar.prototype,"timepickerLabel");__decorateClass$V([n({type:String})],Calendar.prototype,"rangeStartDate");__decorateClass$V([n({type:String})],Calendar.prototype,"rangeEndDate");const chatMessageStyles=":host{display:block;width:100%}.chat-message{display:grid;grid-template-columns:40px 1fr 40px;gap:var(--dss-spacing-xs);padding:0 0 0 var(--dss-spacing-hg)}.chat-message-wrapper{display:grid;gap:var(--dss-spacing-xs)}.chat-message-wrapper__message{color:var(--color-neutral-900);display:grid;padding:var(--dss-spacing-sm);gap:var(--dss-spacing-xs);background-color:var(--color-white);border-radius:var(--dss-radius-sm)}.dss-chat-message--patient .chat-message-wrapper__message{border:var(--dss-border-width-sm) solid var(--color-neutral-200)}.dss-chat-message--doctor .chat-message-wrapper__message{background-color:var(--color-primary-50)}.message-username{font-size:12px;line-height:16px;font-weight:var(--font-semibold)}.message-text{font-size:14px;line-height:24px}.chat-message-wrapper__date{color:var(--color-neutral-500);font-size:12px;line-height:16px;padding:0 var(--dss-spacing-sm)}::slotted(div){display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;gap:var(--dss-spacing-md)}",dssAvatar=i`dss-avatar${s(getCustomElementSuffix())}`,template$1=d=>{const t={"dss-chat-message--patient":d._who==="patient","dss-chat-message--doctor":d._who==="doctor"},a=()=>u`
      <${dssAvatar}
        .size="${d._avatarSize}"
        .imageUrl="${d._avatarImageUrl}"
      >
      </${dssAvatar}>
    `,c=()=>u`
      <${dssAvatar}
        .size="${d._avatarSize}"
        .name="${d._avatarName}"
        .surname="${d._avatarSurname}"
      >
      </${dssAvatar}>
    `,l=()=>u` ${d._avatarImageUrl?u`${a()}`:u`${c()}`}`;return u`
    <div class="chat-message ${e(t)}">
      <div class="chat-message-avatar">
        ${d._who==="patient"?u`${l()}`:null}
      </div>

      <div class="chat-message-wrapper">
        <div class="chat-message-wrapper__message">
          <div class="message-username">${d._username}</div>
          <div class="message-text">${d._message}</div>
          <div class="message-attachments">
            <slot name="attachments"></slot>
          </div>
        </div>
        <div class="chat-message-wrapper__date">${d._date}</div>
      </div>

      <div class="chat-message-avatar chat-message-avatar--YYY">
        ${d._who==="doctor"?u`${l()}`:null}
      </div>
    </div>
  `};var __defProp$U=Object.defineProperty,__getOwnPropDesc$U=Object.getOwnPropertyDescriptor,__decorateClass$U=(d,t,a,c)=>{for(var l=__getOwnPropDesc$U(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$U(t,a,l),l};class ChatMessage extends r$1{constructor(){super(...arguments),this._username="",this._message="",this._date="",this._who="",this._avatarName="",this._avatarSurname="",this._avatarImageUrl="",this._avatarSize="md"}static get styles(){return[r$2(iconStyles),r$2(chatMessageStyles)]}set username(t){const a=this._username;this._username=t,this.requestUpdate("username",a)}set message(t){const a=this._message;this._message=t,this.requestUpdate("message",a)}set date(t){const a=this._date;this._date=t,this.requestUpdate("date",a)}set who(t){const a=this._who;this._who=t,this.requestUpdate("who",a)}set avatarName(t){const a=this._avatarName;this._avatarName=t,this.requestUpdate("avatarName",a)}set avatarSurname(t){const a=this._avatarSurname;this._avatarSurname=t,this.requestUpdate("avatarSurname",a)}set avatarImageUrl(t){const a=this._avatarImageUrl;this._avatarImageUrl=t,this.requestUpdate("avatarImageUrl",a)}set avatarSize(t){const a=this._avatarSize;this._avatarSize=t,this.requestUpdate("avatarSize",a)}render(){return template$1(this)}}__decorateClass$U([n({type:String})],ChatMessage.prototype,"username");__decorateClass$U([n({type:String})],ChatMessage.prototype,"message");__decorateClass$U([n({type:String})],ChatMessage.prototype,"date");__decorateClass$U([n({type:String})],ChatMessage.prototype,"who");__decorateClass$U([n({type:String})],ChatMessage.prototype,"avatarName");__decorateClass$U([n({type:String})],ChatMessage.prototype,"avatarSurname");__decorateClass$U([n({type:String})],ChatMessage.prototype,"avatarImageUrl");__decorateClass$U([n({type:String})],ChatMessage.prototype,"avatarSize");function moveFocusToTarget(d){d&&d.focus()}function moveFocusToPreviousTarget(d,t,a){let c=0;const l=d.querySelectorAll(a),h=l.length-1;t===l[0]?moveFocusToTarget(l[h]):(l.forEach((p,b)=>{p===t&&(c=b)}),moveFocusToTarget(l[c-1]))}function moveFocusToNextTarget(d,t,a){let c=0;const l=d.querySelectorAll(a),h=l.length-1;t===l[h]?moveFocusToTarget(l[0]):(l.forEach((p,b)=>{p===t&&(c=b)}),moveFocusToTarget(l[c+1]))}function onKeyboardEnter(d,t,a){const c=d.querySelector(`${a}[tabindex="0"]`);c==null||c.setAttribute("tabindex","-1"),t.setAttribute("tabindex","0"),t.click()}function compareNumbers(d,t,a){return d||(d=0),t||(t=0),a==="asc"?d-t:t-d}function compareDates(d,t,a){return d||(d=new Date("1900-01-01")),t||(t=new Date("1900-01-01")),a==="asc"?d.getTime()-t.getTime():t.getTime()-d.getTime()}function compareStrings(d,t,a){return d||(d=""),t||(t=""),a==="asc"?d.localeCompare(t):t.localeCompare(d)}function sort(d,t,a="asc",c){return[...d].sort((l,h)=>{switch(c){case"number":return compareNumbers(l[t],h[t],a);case"date":return compareDates(new Date(l[t]),new Date(h[t]),a);case"string":return compareStrings(l[t],h[t],a);default:return 0}})}const checkboxStyles='.dss-checkbox{border-radius:2px;width:20px!important;height:20px!important;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--dss-border-width-sm) solid var(--color-primary-500);position:relative;cursor:pointer;transition:.3s all linear;flex-shrink:0;margin:var(--dss-spacing-tiny)}.dss-checkbox:focus-visible:enabled{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-checkbox.dss-checkbox--validate{border-color:var(--color-neutral-700)}.dss-checkbox:hover{border-color:var(--color-primary-600);transition:.3s all linear}.dss-checkbox:hover.dss-checkbox--validate{border-color:var(--color-neutral-800)}.dss-checkbox:active{border-color:var(--color-primary-400);transition:.3s all linear}.dss-checkbox:active.dss-checkbox--validate{border-color:var(--color-neutral-500)}.dss-checkbox:checked{background-color:var(--color-primary-500)}.dss-checkbox:checked.dss-checkbox--validate{border-color:var(--color-green-500);background-color:var(--color-green-500)}.dss-checkbox:checked:before{font-family:var(--font-icons);content:"check";position:absolute;font-size:22px;color:var(--color-white);text-align:center;top:-4px;left:-2px}.dss-checkbox:checked:hover{border-color:var(--color-primary-600);background-color:var(--color-primary-600);transition:.3s all linear}.dss-checkbox:checked:hover.dss-checkbox--validate{border-color:var(--color-green-600);background-color:var(--color-green-600)}.dss-checkbox:checked:active{background-color:var(--color-primary-400);transition:.3s all linear}.dss-checkbox:checked:active.dss-checkbox--validate{border-color:var(--color-green-400);background-color:var(--color-green-400)}.dss-checkbox:indeterminate{background-color:var(--color-primary-500)}.dss-checkbox:indeterminate:before{font-family:Material Symbols Rounded;font-size:18px;content:"remove";color:var(--color-white);position:absolute;top:-1px}.dss-checkbox:indeterminate.dss-checkbox--validate{background-color:var(--color-green-500)}.dss-checkbox:disabled{cursor:not-allowed;color:var(--color-neutral-900);border-color:var(--color-neutral-400)}.dss-checkbox:disabled:checked{background-color:var(--color-neutral-300)}.dss-checkbox:disabled:checked:before{color:var(--color-neutral-900)}.dss-checkbox.dss-checkbox--validate:disabled:checked:hover{background-color:var(--color-neutral-300)}.dss-checkbox-label{cursor:pointer}',customTableStyles=":host{display:block;width:100%;height:100%}.dss-custom-table{display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}.dss-custom-table-header,.dss-custom-table-footer{flex:0 1 auto}.dss-custom-table-body{flex:1 1 auto;overflow:auto;position:relative}.table-footer{display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-xs);padding:var(--dss-spacing-md);border-top:var(--dss-border-width-sm) solid var(--color-neutral-100);margin-top:var(--dss-spacing-md)}.table-footer-description{color:var(--color-neutral-900);font-size:16px;font-weight:var(--font-bold)}::slotted(.table-footer-actions){display:flex;justify-content:flex-end;align-items:center;gap:var(--dss-spacing-xs)}";var __defProp$T=Object.defineProperty,__getOwnPropDesc$T=Object.getOwnPropertyDescriptor,__decorateClass$T=(d,t,a,c)=>{for(var l=c>1?void 0:c?__getOwnPropDesc$T(t,a):t,h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=(c?p(t,a,l):p(l))||l);return c&&l&&__defProp$T(t,a,l),l};const dssTableHeader=i`dss-table-header${s(getCustomElementSuffix())}`,dssTablePaginator=i`dss-table-pagination${s(getCustomElementSuffix())}`;class CustomTable extends r$1{constructor(){super(...arguments),this.internalSelectedCounter=0,this._hideHeader=!1,this._hidePaginator=!1,this._columnsHeader=[],this._data=void 0,this._paginatedData=void 0,this._currentSortColumn="",this._currentSortType="string",this._currentSortOrder="none",this._multiselect=!1,this._radioselect=!1,this._allRowsSelected=!1,this._selectedRowsLabel="files seleccionades",this._isFirstUpdate=!0,this._shouldUpdate=!1,this._table=void 0,this._currentRowsChecked=0,this._selectedRowsCounter=void 0,this._tableTitle="",this._filters=[],this._innerFilters=!1,this._expandTable=!1,this._expandLabel="Ampliar",this._collapseLabel="Reduir",this._filtersLabel="Selecció",this._cleanFiltersLabel="Netejar filtres",this._noFiltersLabel="No hi ha filtres seleccionats",this._isTableHeaderCreated=!1,this._hideHeaderTitleAndExpand=!1,this._disableSorting=!1,this._isPaginationStarted=!1,this._totalResults=void 0,this._currentIndex=1,this._pageSize=10,this._pageSizeOptions=[5,10,20],this._resultstext="Resultats",this._rowsperpagetext="Files per pàgina",this._paginationState=void 0,this._pageSizeOptionsDisabled=!1,this._hidePaginationResults=!1,this._hideFooter=!1}static get styles(){return[r$2(iconStyles),r$2(scrollbarStyles),r$2(checkboxStyles),r$2(customTableStyles)]}set hideHeader(t){const a=this._hideHeader;this._hideHeader=t,this.requestUpdate("hideHeader",a)}set hidePaginator(t){const a=this._hidePaginator;this._hidePaginator=t,this.requestUpdate("hidePaginator",a)}set columnsHeader(t){const a=this._columnsHeader;this._columnsHeader=t,this.requestUpdate("columnsHeader",a)}set data(t){const a=this._data;this._data=t,this.requestUpdate("data",a)}set multiselect(t){const a=this._multiselect;this._multiselect=t,this.requestUpdate("multiselect",a)}set radioselect(t){const a=this._radioselect;this._radioselect=t,this.requestUpdate("radioselect",a)}set selectedRowsLabel(t){const a=this._selectedRowsLabel;this._selectedRowsLabel=t,this.requestUpdate("selectedRowsLabel",a)}set selectedRowsCounter(t){const a=this._selectedRowsCounter;this._selectedRowsCounter=t,this.requestUpdate("selectedRowsCounter",a)}set tableTitle(t){const a=this._tableTitle;this._tableTitle=t,this.requestUpdate("tableTitle",a)}set filters(t){const a=this._filters;this._filters=t,this.requestUpdate("filters",a)}set innerFilters(t){const a=this._innerFilters;this._innerFilters=t,this.requestUpdate("innerFilters",a)}set expandTable(t){const a=this._expandTable;this._expandTable=t,this.requestUpdate("expandTable",a)}set expandLabel(t){const a=this._expandLabel;this._expandLabel=t,this.requestUpdate("expandLabel",a)}set collapseLabel(t){const a=this._collapseLabel;this._collapseLabel=t,this.requestUpdate("collapseLabel",a)}set filtersLabel(t){const a=this._filtersLabel;this._filtersLabel=t,this.requestUpdate("filtersLabel",a)}set cleanFiltersLabel(t){const a=this._cleanFiltersLabel;this._cleanFiltersLabel=t,this.requestUpdate("cleanFiltersLabel",a)}set noFiltersLabel(t){const a=this._noFiltersLabel;this._noFiltersLabel=t,this.requestUpdate("noFiltersLabel",a)}set hideHeaderTitleAndExpand(t){const a=this._hideHeaderTitleAndExpand;this._hideHeaderTitleAndExpand=t,this.requestUpdate("hideHeaderTitleAndExpand",a)}set disableSorting(t){const a=this._disableSorting;this._disableSorting=t,this.requestUpdate("disableSorting",a)}set totalResults(t){const a=this._totalResults;this._totalResults=t,this.requestUpdate("totalResults",a)}set currentIndex(t){const a=this._currentIndex;this._currentIndex=t,this.requestUpdate("currentIndex",a)}set pageSize(t){const a=this._pageSize;this._pageSize=t,this.requestUpdate("pageSize",a)}set pageSizeOptions(t){const a=this._pageSizeOptions;this._pageSizeOptions=t,this.requestUpdate("pageSizeOptions",a)}set resultsLabel(t){const a=this._resultstext;this._resultstext=t,this.requestUpdate("resultsLabel",a)}set rowsPerPageLabel(t){const a=this._rowsperpagetext;this._rowsperpagetext=t,this.requestUpdate("rowsperpageLabel",a)}set hidePaginationResults(t){const a=this._hidePaginationResults;this._hidePaginationResults=t,this.requestUpdate("hidePaginationResults",a)}set pageSizeOptionsDisabled(t){const a=this._pageSizeOptionsDisabled;this._pageSizeOptionsDisabled=t,this.requestUpdate("pageSizeOptionsDisabled",a)}set hideFooter(t){const a=this._hideFooter;this._hideFooter=t,this.requestUpdate("hideFooter",a)}_getDataLength(){let t=0;return this._totalResults!==void 0&&this._totalResults>=0?t=this._totalResults:this._data&&(t=this._data.length),t}_sortBy(t,a,c,l,h){this._currentSortColumn=a,this._currentSortType=c,l?l==="none"?this._currentSortOrder="asc":l==="asc"?this._currentSortOrder="desc":l==="desc"&&(this._currentSortOrder="none"):this._currentSortOrder="asc",this._updateColumnSortState();let p;return this._currentSortOrder==="none"?p=t:p=sort(t,this._currentSortColumn,this._currentSortOrder,c),p&&!h&&this._dispatchSort(p),p}_updateColumnSortState(){this._columnsHeader.forEach(t=>{t.column===this._currentSortColumn?t.sortOrder=this._currentSortOrder:t.sortOrder&&(t.sortOrder="none")})}_onSelectAll(){if(this._table){this._allRowsSelected=!this._allRowsSelected;let t=0,a=0;const c=this._table.querySelectorAll(".dss-checkbox--multiselect");c.forEach(l=>{l.disabled?a+=1:(l.checked||(t+=1),l.checked=this._allRowsSelected)}),this._allRowsSelected?this._currentRowsChecked+=t:this._currentRowsChecked-=c.length-a,this._updateTableFooterRowsChecked(),this._dispatchMultiselect()}}_rowsCheckedListener(t){this._table&&t.tagName==="INPUT"&&t.type==="checkbox"&&t.classList.contains("dss-checkbox")&&!t.classList.contains("dss-checkbox--thead")&&(t.checked?this._currentRowsChecked+=1:this._currentRowsChecked-=1,this._updateTableFooterRowsChecked())}_updateTableFooterRowsChecked(){this._selectedRowsCounter===void 0&&(this.internalSelectedCounter=this._currentRowsChecked)}_updateTableHeader(){if(this._table){const t=this._table.querySelector(".dss-custom-table");let a=t.querySelector("thead");a||(a=document.createElement("thead"),a.classList.add("dss-thead"),t.insertBefore(a,t.firstChild)),B(this._generateTableHeaderHTML(),a)}}_generateTableHeaderHTML(){let t=!0,a=u``,c=u``;this._multiselect&&(a=u`
        <th class="dss-th dss-th--select">
          <div class="dss-th-content dss-th-content--select">
            <input
              type="checkbox"
              class="dss-checkbox dss-checkbox--thead"
              aria-label="Seleccionar totes les files"
              .checked=${this._allRowsSelected}
              @change="${this._onSelectAll.bind(this)}"
            />
          </div>
        </th>
      `),this._radioselect&&(c=u`
        <th class="dss-th dss-th--select">
          <div class="dss-th-content dss-th-content--select"></div>
        </th>
      `);const l=this._columnsHeader.map(p=>{const b=()=>{p.sortType&&!this._disableSorting&&(this._paginatedData?this._sortBy(this._paginatedData,p.column,p.sortType,p==null?void 0:p.sortOrder):this._sortBy(this._data,p.column,p.sortType,p==null?void 0:p.sortOrder),this._updateTableHeaderIcons())},g=y=>{const k=y.currentTarget,$=y;let _=!1;switch($.key){case"ArrowLeft":this._table&&moveFocusToPreviousTarget(this._table,k,".dss-th-content--clickable"),_=!0;break;case"ArrowRight":this._table&&moveFocusToNextTarget(this._table,k,".dss-th-content--clickable"),_=!0;break;case"Enter":const S=y.target;this._table&&onKeyboardEnter(this._table,S,".dss-th-content--clickable"),_=!0;break}_&&(y.stopPropagation(),y.preventDefault())},m={"dss-th--align-center":p.align==="center","dss-th--align-right":p.align==="right"};let w=!1;p.sortType&&!this._disableSorting&&(w=!0);const v={"dss-th-content--clickable":w},f=u`
        <th
          class="dss-th ${e(m)}"
          style="${o(p.style)}"
        >
          <div
            class="dss-th-content ${e(v)}"
            tabindex="${t?0:-1}"
            @click=${b}
            @keydown=${g}
          >
            <span class="dss-th-content__label"> ${p.label} </span>

            ${p.sortType&&!this._disableSorting?u`${this._getTableHeaderSortIconHTML(p.column)}`:null}
          </div>
        </th>
      `;return t=!1,f});return u` <tr class="dss-thead-row ${e({})}">
      ${a} ${c} ${l}
    </tr>`}_getTableHeaderSortIconHTML(t){let a=u``;if(this._currentSortColumn===t)switch(this._currentSortOrder){case"asc":a=u`arrow_upward`;break;case"desc":a=u`arrow_downward`;break;default:a=u`swap_vert`;break}else a=u`swap_vert`;return u`
      <span
        class="dss-icon dss-icon--sm dss-th-content__icon"
        column="${t}"
      >
        ${a}
      </span>
    `}_updateTableHeaderIcons(){this._table&&this._table.querySelectorAll(".dss-th-content--clickable > .dss-icon").forEach(a=>{const c=a.getAttribute("column");let l="swap_vert";if(this._currentSortColumn===c)switch(this._currentSortOrder){case"asc":l="arrow_upward";break;case"desc":l="arrow_downward";break;default:l="swap_vert";break}a.innerHTML=l})}_paginate(t){const a=t.startIndex,c=t.endIndex;if(this._data){const l=c<=this._data.length?c:this._data.length;this._paginatedData=[...this._data.slice(a-1,l)]}if(t.pageSize&&(this._pageSize=t.pageSize),this._currentSortColumn&&this._currentSortOrder){let l="";this._currentSortOrder==="asc"?l="none":this._currentSortOrder==="desc"?l="asc":l="dsc",this._paginatedData=this._sortBy(this._paginatedData,this._currentSortColumn,this._currentSortType,l,!0)}return this._paginatedData}_rowKeydownListener(){if(this._table){let t=!0;this._table.querySelectorAll(".dss-tbody-row").forEach(c=>{t?c.setAttribute("tabindex","0"):c.setAttribute("tabindex","-1"),t=!1,c.addEventListener("keydown",l=>{let h=!1;switch(l.key){case"ArrowUp":this._table&&moveFocusToPreviousTarget(this._table,c,".dss-tbody-row"),h=!0;break;case"ArrowDown":this._table&&moveFocusToNextTarget(this._table,c,".dss-tbody-row"),h=!0;break;case"Enter":if(this._multiselect){const p=c.querySelector(".dss-checkbox--multiselect");p&&(p.checked=!(p!=null&&p.checked),this.requestUpdate()),h=!0}if(this._radioselect){const p=c.querySelector(".dss-radio");p&&(p.checked=!(p!=null&&p.checked),this.requestUpdate()),h=!0}break}h&&(l.stopPropagation(),l.preventDefault())})})}}_dispatchChangeFilters(t){this._filters=t.detail;const a={detail:this._filters,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onUpdateFilters",a))}_dispatchExpandTable(t){this._expandTable=t.detail;const a={detail:this._expandTable,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onExpandTable",a))}_dispatchOpenFilters(){const t={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onOpenDrawer",t))}_dispatchPagination(t){var a;if(!this._totalResults||this._isPaginationStarted){const c={detail:t.detail,bubbles:!0,composed:!0};if(this._paginationState=c.detail,this._data&&!this._totalResults&&(c.detail.data=this._paginate(this._paginationState)),this._totalResults&&(this._shouldUpdate=!0),this._allRowsSelected){this._allRowsSelected=!1;const l=(a=this._table)==null?void 0:a.querySelector(".dss-checkbox--thead");l&&(l.checked=!1)}this.dispatchEvent(new CustomEvent("onPaginate",c))}this._isPaginationStarted=!0}_dispatchSort(t){const a={detail:{currentSortColumn:this._currentSortColumn,currentSortOrder:this._currentSortOrder,currentSortType:this._currentSortType,columnsHeader:this._columnsHeader,data:t},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onSort",a))}_dispatchMultiselect(){const t={detail:this._allRowsSelected,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onMultiselect",t))}_initTable(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="table"]'))||void 0;this._table=t==null?void 0:t.assignedElements()[0],this._table&&(this._columnsHeader.length&&!this._isTableHeaderCreated&&(this._updateTableHeader(),this._isTableHeaderCreated=!0),this._rowKeydownListener(),new MutationObserver(l=>{l.forEach(h=>{h.type==="childList"&&h.addedNodes.length>0&&this._rowKeydownListener()}),this._checkAllRowsSelected()}).observe(this._table,{childList:!0,subtree:!0}))}_checkAllRowsSelected(){var t;if(this._table){const a=this._table.querySelectorAll(".dss-checkbox--multiselect");let c=!0;if(a.length===0&&(c=!1),a.forEach(l=>{!l.checked&&!l.disabled&&(c=!1)}),this._allRowsSelected!==c){this._allRowsSelected=c;const l=(t=this._table)==null?void 0:t.querySelector(".dss-checkbox--thead");l.checked=this._allRowsSelected}}}async firstUpdated(){await this.updateComplete,this._isFirstUpdate&&!this._table&&(this._initTable(),this.addEventListener("change",t=>{this._rowsCheckedListener(t.target),this._checkAllRowsSelected()})),this._isFirstUpdate=!1}willUpdate(t){const a=t.has("columnsHeader"),c=t.has("disableSorting"),l=t.has("data");if(c&&this._updateTableHeader(),a&&(this._columnsHeader.forEach(h=>{h.sortOrder&&(this._currentSortColumn=h.column,this._currentSortOrder=h.sortOrder,h.sortType&&(this._currentSortType=h.sortType))}),!this._isTableHeaderCreated&&this._table&&(this._updateTableHeader(),this._isTableHeaderCreated=!0)),l&&!this._isFirstUpdate)if(this._totalResults){if(this.internalSelectedCounter>this._totalResults&&(this.internalSelectedCounter=this._totalResults),this._shouldUpdate){if(this._currentSortColumn&&this._currentSortType&&this._currentSortOrder&&this._currentSortOrder!=="none"){const h=sort(this._data,this._currentSortColumn,this._currentSortOrder,this._currentSortType);this._dispatchSort(h)}this._shouldUpdate=!1}}else{const h=this._getDataLength();if(this.internalSelectedCounter>h&&(this.internalSelectedCounter=h,this._currentRowsChecked=h),this._paginationState){this._paginationState.endIndex<this._pageSize&&(this._paginationState.endIndex=this._pageSize);const p={detail:this._paginationState,bubbles:!0,composed:!0};this._dispatchPagination(p)}}}render(){return u`
      <div class="dss-custom-table">
        <div class="dss-custom-table-header">
          ${this._hideHeader?null:u`
                <${dssTableHeader}
                  .headerTitle=${this._tableTitle}
                  .filters=${this._filters}
                  .innerFilters=${this._innerFilters}
                  .expandTable=${this._expandTable}
                  .expandLabel=${this._expandLabel}
                  .collapseLabel=${this._collapseLabel}
                  .filtersLabel=${this._filtersLabel}
                  .cleanFiltersLabel=${this._cleanFiltersLabel}
                  .noFiltersLabel=${this._noFiltersLabel}
                  .hideHeaderTitleAndExpand=${this._hideHeaderTitleAndExpand}
                  @onChangeFilters=${this._dispatchChangeFilters}
                  @onExpand=${this._dispatchExpandTable}
                  @onOpenFilters=${this._dispatchOpenFilters}
                >
                  <slot name="filters" slot="filters"></slot>
                </${dssTableHeader}>
              `}
        </div>

        <div class="dss-custom-table-body">
          <slot name="table"></slot>
        </div>

        ${this._hideFooter?null:u`
              <div class="dss-custom-table-footer">
                ${this._hidePaginator?null:u`
                      <${dssTablePaginator}
                        .length=${this._getDataLength()}
                        pagesize="${this._pageSize}"
                        .pageSizeOptions=${this._pageSizeOptions}
                        .currentindex=${this._currentIndex}
                        .resultstext=${this._resultstext}
                        .rowsPerPageText=${this._rowsperpagetext}
                        ?pageSizeOptionsDisabled=${this._pageSizeOptionsDisabled}
                        ?hidePaginationResults=${this._hidePaginationResults}
                        @onChangePage=${this._dispatchPagination}
                      ></${dssTablePaginator}>
                    `}
                ${this._multiselect?u`
                      <div class="table-footer">
                        <div class="table-footer-description">
                          <span class="table-footer-description__counter">
                            ${this._selectedRowsCounter!==void 0?this._selectedRowsCounter:this.internalSelectedCounter}
                          </span>
                          de ${this._getDataLength()} ${this._selectedRowsLabel}
                        </div>
                        <slot name="footer-actions"></slot>
                      </div>
                    `:null}
              </div>
            `}
      </div>
    `}}__decorateClass$T([n({type:Number})],CustomTable.prototype,"internalSelectedCounter",2);__decorateClass$T([n(booleanType)],CustomTable.prototype,"hideHeader",1);__decorateClass$T([n(booleanType)],CustomTable.prototype,"hidePaginator",1);__decorateClass$T([n({type:Array})],CustomTable.prototype,"columnsHeader",1);__decorateClass$T([n({type:Array})],CustomTable.prototype,"data",1);__decorateClass$T([n(booleanType)],CustomTable.prototype,"multiselect",1);__decorateClass$T([n(booleanType)],CustomTable.prototype,"radioselect",1);__decorateClass$T([n({type:String})],CustomTable.prototype,"selectedRowsLabel",1);__decorateClass$T([n({type:Number})],CustomTable.prototype,"selectedRowsCounter",1);__decorateClass$T([n({type:String})],CustomTable.prototype,"tableTitle",1);__decorateClass$T([n({type:Array})],CustomTable.prototype,"filters",1);__decorateClass$T([n(booleanType)],CustomTable.prototype,"innerFilters",1);__decorateClass$T([n(booleanType)],CustomTable.prototype,"expandTable",1);__decorateClass$T([n({type:String})],CustomTable.prototype,"expandLabel",1);__decorateClass$T([n({type:String})],CustomTable.prototype,"collapseLabel",1);__decorateClass$T([n({type:String})],CustomTable.prototype,"filtersLabel",1);__decorateClass$T([n({type:String})],CustomTable.prototype,"cleanFiltersLabel",1);__decorateClass$T([n({type:String})],CustomTable.prototype,"noFiltersLabel",1);__decorateClass$T([n(booleanType)],CustomTable.prototype,"hideHeaderTitleAndExpand",1);__decorateClass$T([n(booleanType)],CustomTable.prototype,"disableSorting",1);__decorateClass$T([n({type:Number})],CustomTable.prototype,"totalResults",1);__decorateClass$T([n({type:Number})],CustomTable.prototype,"currentIndex",1);__decorateClass$T([n({type:Number})],CustomTable.prototype,"pageSize",1);__decorateClass$T([n({type:Array})],CustomTable.prototype,"pageSizeOptions",1);__decorateClass$T([n({type:String})],CustomTable.prototype,"resultsLabel",1);__decorateClass$T([n({type:String})],CustomTable.prototype,"rowsPerPageLabel",1);__decorateClass$T([n(booleanType)],CustomTable.prototype,"hidePaginationResults",1);__decorateClass$T([n(booleanType)],CustomTable.prototype,"pageSizeOptionsDisabled",1);__decorateClass$T([n(booleanType)],CustomTable.prototype,"hideFooter",1);const datepickerRangeStyles=":host{display:block;width:100%;min-width:257px}.dss-datepicker-range{position:relative;font-family:var(--font-family);height:48px}.dss-datepicker-range--sm{height:40px}.dss-datepicker-range-inputs{display:grid;grid-template-columns:1fr 1fr;gap:var(--dss-spacing-md)}.dss-datepicker-range-help{font-family:var(--font-family)}.dss-datepicker-range-help{font-family:inherit;font-size:12px;color:var(--color-neutral-700);padding:var(--dss-spacing-xxs) var(--dss-spacing-sm)}.dss-datepicker-range-help--disabled{color:var(--color-neutral-500)}.dss-datepicker-range-help--invalid{color:var(--color-red-500)}.dss-calendar{position:absolute;margin-top:var(--dss-spacing-xxs);top:48px;z-index:900;width:-moz-fit-content;width:fit-content}.dss-calendar--sm{margin-top:var(--dss-spacing-xxs);top:40px}";var __defProp$S=Object.defineProperty,__getOwnPropDesc$S=Object.getOwnPropertyDescriptor,__decorateClass$S=(d,t,a,c)=>{for(var l=__getOwnPropDesc$S(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$S(t,a,l),l};const dssCalendar=i`dss-calendar${s(getCustomElementSuffix())}`;class DatepickerRange extends r$1{constructor(){super(...arguments),this._iconRangeStart="calendar_month",this._iconRangeEnd="calendar_month",this._dateformatPlaceholder="dd/mm/yyyy",this._isStartFocused=!1,this._isEndFocused=!1,this._invalid=!1,this._showCalendar=!1,this._helpText="",this._minDate="",this._maxDate="",this._inputSize="md",this._calendarShowButtons=!1,this._calendarLeftButtonLabel="Cancel·lar",this._calendarRightButtonLabel="Seleccionar",this._copyInputRangeStartPlaceholder="",this._copyInputRangeEndPlaceholder="",this._isFirstInputsCheck=!0,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=t=>{for(const a of t)a.type==="attributes"&&this._checkInputAttributes()},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(iconStyles),r$2(resetStyles),r$2(inputStyles),r$2(datepickerRangeStyles)]}get _inputRangeStart(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="input-range-start"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}get _inputRangeEnd(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="input-range-end"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}set iconRangeStart(t){const a=this._iconRangeStart;this._iconRangeStart=t,this.requestUpdate("iconRangeStart",a)}set iconRangeEnd(t){const a=this._iconRangeEnd;this._iconRangeEnd=t,this.requestUpdate("iconRangeEnd",a)}set minDate(t){const a=this._minDate;this._minDate=t,this.requestUpdate("minDate",a)}set maxDate(t){const a=this._maxDate;this._maxDate=t,this.requestUpdate("maxDate",a)}set invalid(t){const a=this._invalid;this._invalid=t,this.requestUpdate("invalid",a)}set inputSize(t){const a=this._inputSize;t==="sm"?this._inputSize=t:this._inputSize="md",this.requestUpdate("inputSize",a)}set helpText(t){const a=this._helpText;this._helpText=t,this.requestUpdate("helpText",a)}set showButtons(t){const a=this._calendarShowButtons;this._calendarShowButtons=t,this.requestUpdate("calendarShowButtons",a)}set calendarLeftButtonLabel(t){const a=this._calendarLeftButtonLabel;this._calendarLeftButtonLabel=t,this.requestUpdate("calendarLeftButtonLabel",a)}set calendarRightButtonLabel(t){const a=this._calendarRightButtonLabel;this._calendarRightButtonLabel=t,this.requestUpdate("calendarRightButtonLabel",a)}_checkInputAttributes(){this._isFirstInputsCheck&&this._inputRangeStart&&(this._copyInputRangeStartPlaceholder=this._inputRangeStart.placeholder),this._isFirstInputsCheck&&this._inputRangeEnd&&(this._copyInputRangeEndPlaceholder=this._inputRangeEnd.placeholder),this._isFirstInputsCheck=!1}_updatePlaceholders(){this._isStartFocused&&!this._copyInputRangeStartPlaceholder&&(this._inputRangeStart.setAttribute("placeholder",this._dateformatPlaceholder),this.requestUpdate()),this._isEndFocused&&!this._copyInputRangeEndPlaceholder&&(this._inputRangeEnd.setAttribute("placeholder",this._dateformatPlaceholder),this.requestUpdate())}_removePlaceholders(){this._copyInputRangeStartPlaceholder||this._inputRangeStart.removeAttribute("placeholder"),this._copyInputRangeEndPlaceholder||this._inputRangeEnd.removeAttribute("placeholder")}_handleRangeStartInput(t){if(t.target){const c=t.target.value.replace(/\D/g,"");this._inputRangeStart.value=this._formatDate(c)}}_handleRangeEndInput(t){if(t.target){const c=t.target.value.replace(/\D/g,"");this._inputRangeEnd.value=this._formatDate(c)}}_handleRangeStartClick(){this._showCalendar=!0,this.requestUpdate()}_handleRangeEndClick(){this._showCalendar=!0,this.requestUpdate()}_handleRangeStartFocusIn(){this._isStartFocused||(this._isStartFocused=!0,this._isEndFocused=!1,this._copyInputRangeEndPlaceholder||this._inputRangeEnd.removeAttribute("placeholder"),this._updatePlaceholders(),this.requestUpdate())}_handleRangeEndFocusIn(){this._isEndFocused||(this._isStartFocused=!1,this._copyInputRangeStartPlaceholder||this._inputRangeStart.removeAttribute("placeholder"),this._isEndFocused=!0,this._updatePlaceholders(),this.requestUpdate())}_handleRangeKeydown(t){(t==null?void 0:t.key)==="Tab"?this._showCalendar&&this._isStartFocused&&(t.preventDefault(),this.dispatchEvent(new CustomEvent("range-focus-calendar",{bubbles:!0,composed:!0}))):(t==null?void 0:t.key)==="Enter"||(t==null?void 0:t.key)===" "?(this._showCalendar=!0,this.requestUpdate()):(t==null?void 0:t.key)==="Escape"&&(this._showCalendar=!1,this.requestUpdate())}_onCalendarChange(t){const a=t.detail;a.rangeStart&&(this._inputRangeStart.value=t.detail.rangeStart),a.rangeEnd?this._inputRangeEnd.value=t.detail.rangeEnd:this._inputRangeEnd.value="",this._inputRangeEnd.value||(this._inputRangeEnd.focus(),this._isStartFocused=!1,this._isEndFocused=!0),this._inputRangeStart.value&&this._inputRangeEnd.value&&(this._showCalendar=!1,this._isStartFocused=!1,this._isEndFocused=!1),this.requestUpdate()}_onCalendarCancel(){this._showCalendar=!1,this.requestUpdate()}_closeCalendar(){document.addEventListener("click",t=>{t.composedPath().includes(this)||this._showCalendar&&(this._removePlaceholders(),this._isStartFocused=!1,this._isEndFocused=!1,this._showCalendar=!1,this.requestUpdate())}),this.addEventListener("focusout",t=>{const a=t.relatedTarget;a!==null&&a!==this&&a!==this._inputRangeStart&&a!==this._inputRangeEnd&&this._showCalendar&&(this._removePlaceholders(),this._isStartFocused=!1,this._isEndFocused=!1,this._showCalendar=!1,this.requestUpdate())})}_formatDate(t){let a=t.substring(0,2),c=t.substring(2,4);const l=t.substring(4,8);return Number(a)>3&&(a=a==null?void 0:a.padStart(2,"0")),Number(c)>1&&(c=c==null?void 0:c.padStart(2,"0")),Number(a)>31&&(a="31"),Number(c)>12&&(c="12"),c==="02"&&Number(a)>28&&(l==null?void 0:l.length)===4&&(a=new Date(Number(l),1,29).getMonth()===1?"29":"28"),`${a}${c?`/${c}`:""}${l?`/${l}`:""}`}disconnectedCallback(){this.observer.disconnect()}async firstUpdated(){try{await this.updateComplete,this._inputRangeStart&&this._inputRangeEnd&&(this._checkInputAttributes(),this.observer.observe(this._inputRangeStart,this.observerConfig),this.observer.observe(this._inputRangeEnd,this.observerConfig)),this._closeCalendar()}catch{console.error("ERROR OCURRED")}}render(){var p,b,g,m,w,v,f,y,k,$,_,S,C,T,D,q,U,E,O,P,L,V,R,A,z;const t={"dss-datepicker-range--sm":this._inputSize==="sm"},a={"dss-datepicker-range-help--invalid":this._invalid||!((p=this._inputRangeStart)!=null&&p.validity.valid)&&((b=this._inputRangeStart)==null?void 0:b.value)!==""||!((g=this._inputRangeEnd)!=null&&g.validity.valid)&&((m=this._inputRangeEnd)==null?void 0:m.value)!=="","dss-datepicker-range-help--disabled":((w=this._inputRangeStart)==null?void 0:w.disabled)&&((v=this._inputRangeEnd)==null?void 0:v.disabled)},c={"dss-input-group--focused":((f=this._inputRangeStart)==null?void 0:f.value)||this._isStartFocused||this._copyInputRangeStartPlaceholder,"dss-input-group--lg":this._inputSize==="md","dss-input-group--md":this._inputSize==="sm","dss-input-group--invalid":this._invalid||!((y=this._inputRangeStart)!=null&&y.validity.valid)&&((k=this._inputRangeStart)==null?void 0:k.value)!=="","dss-input-group--disabled":($=this._inputRangeStart)==null?void 0:$.disabled,"dss-input-group--read-only":(_=this._inputRangeStart)==null?void 0:_.readOnly,"dss-input-group--required":(S=this._inputRangeStart)==null?void 0:S.required},l={"dss-input-group--focused":((C=this._inputRangeEnd)==null?void 0:C.value)||this._isEndFocused||this._copyInputRangeEndPlaceholder,"dss-input-group--lg":this._inputSize==="md","dss-input-group--md":this._inputSize==="sm","dss-input-group--invalid":this._invalid||!((T=this._inputRangeEnd)!=null&&T.validity.valid)&&((D=this._inputRangeEnd)==null?void 0:D.value)!=="","dss-input-group--disabled":(q=this._inputRangeEnd)==null?void 0:q.disabled,"dss-input-group--read-only":(U=this._inputRangeEnd)==null?void 0:U.readOnly,"dss-input-group--required":(E=this._inputRangeEnd)==null?void 0:E.required},h={"dss-calendar":!0,"dss-calendar--disabled":((O=this._inputRangeStart)==null?void 0:O.disabled)&&((P=this._inputRangeEnd)==null?void 0:P.disabled),"dss-calendar--sm":this._inputSize==="sm"};return u`
      <div class="dss-datepicker-range ${e(t)}">
        <div class="dss-datepicker-range-inputs">
          <div
            class="dss-datepicker-range-inputs__start dss-input-group dss-input-group--has-icon ${e(c)}"
            role="combobox"
            aria-controls="datepicker-range-calendar"
            aria-expanded=${o(this._showCalendar)}
          >
            <span class="dss-icon dss-icon--md dss-input-icon"
              >${this._iconRangeStart}</span
            >
            <slot
              name="input-range-start"
              @click=${this._handleRangeStartClick}
              @input=${this._handleRangeStartInput}
              @focusin=${this._handleRangeStartFocusIn}
              @keydown=${this._handleRangeKeydown}
            ></slot>
            <slot name="label-range-start"></slot>
          </div>

          <div
            class="dss-datepicker-range-inputs__end dss-input-group dss-input-group--has-icon ${e(l)}"
            role="combobox"
            aria-controls="datepicker-range-calendar"
            aria-expanded=${o(this._showCalendar)}
          >
            <span class="dss-icon dss-icon--md dss-input-icon"
              >${this._iconRangeEnd}</span
            >
            <slot
              name="input-range-end"
              @click=${this._handleRangeEndClick}
              @input=${this._handleRangeEndInput}
              @focusin=${this._handleRangeEndFocusIn}
              @keydown=${this._handleRangeKeydown}
            ></slot>
            <slot name="label-range-end"></slot>
          </div>
        </div>

        ${this._helpText?u`
              <div class="dss-datepicker-range-help ${e(a)}">
                ${this._helpText}
              </div>
            `:null}
        ${this._showCalendar&&!((L=this._inputRangeStart)!=null&&L.readOnly)&&!((V=this._inputRangeEnd)!=null&&V.readOnly)?u`
              <${dssCalendar}
                range
                .isRangeStartFocused=${this._isStartFocused}
                .isRangeEndFocused=${this._isEndFocused}
                role="listbox"
                aria-label="Datepicker Range Calendar"
                id="datepicker-range-calendar"
                class="${e(h)}"
                .selectedDate="${(R=this._inputRangeStart)==null?void 0:R.value}"
                .rangeStartDate="${(A=this._inputRangeStart)==null?void 0:A.value}"
                .rangeEndDate="${(z=this._inputRangeEnd)==null?void 0:z.value}"
                .showButtons=${this._calendarShowButtons}
                .leftLabel=${this._calendarLeftButtonLabel}
                .rightLabel=${this._calendarRightButtonLabel}
                .minDate=${this._minDate}
                .maxDate=${this._maxDate}
                @onRangeChange=${this._onCalendarChange}
                @onCancel=${this._onCalendarCancel}
              ></${dssCalendar}>
            `:null}
      </div>
    `}}__decorateClass$S([n({type:String})],DatepickerRange.prototype,"iconRangeStart");__decorateClass$S([n({type:String})],DatepickerRange.prototype,"iconRangeEnd");__decorateClass$S([n({type:String})],DatepickerRange.prototype,"minDate");__decorateClass$S([n({type:String})],DatepickerRange.prototype,"maxDate");__decorateClass$S([n(booleanType)],DatepickerRange.prototype,"invalid");__decorateClass$S([n({type:String})],DatepickerRange.prototype,"inputSize");__decorateClass$S([n({type:String})],DatepickerRange.prototype,"helpText");__decorateClass$S([n(booleanType)],DatepickerRange.prototype,"showButtons");__decorateClass$S([n({type:String})],DatepickerRange.prototype,"calendarLeftButtonLabel");__decorateClass$S([n({type:String})],DatepickerRange.prototype,"calendarRightButtonLabel");const drawerStyles=':host{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;visibility:hidden;opacity:0;display:flex;justify-content:flex-end;align-items:center;transition:opacity .25s;z-index:999}:host([open]){visibility:visible}:host(.show){opacity:1}:host(.hide){opacity:0}.drawer{position:relative;box-sizing:border-box;width:-moz-fit-content;width:fit-content;width:45%;height:100%;overflow-y:auto;background:var(--color-white);visibility:hidden;transform:translate(100%);transition:transform .25s ease-in-out;display:flex;flex-direction:column}:host(.show) .drawer{visibility:visible;transform:translate(0)}.drawer-header{position:sticky;top:0;left:0;height:84px;background-color:var(--color-white);padding:var(--dss-spacing-lg);display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-md);border-bottom:var(--color-white) solid var(--dss-border-width-sm);transition:all .25s ease-in-out;z-index:900}.drawer-header--scrolled{border-bottom-color:var(--color-neutral-100);box-shadow:0 1px 3px 1px #0000001a,0 1px 2px #0000000d}.drawer--sm .drawer-header{height:62px;padding:var(--dss-spacing-md)}.drawer--lg .drawer-header{height:100px;padding:var(--dss-spacing-xl)}.drawer-header-title{font-size:24px;font-weight:var(--font-bold);line-height:30px}.drawer--sm .drawer-header-title{font-size:20px}.drawer-body{padding:0 var(--dss-spacing-lg);flex:1}.drawer--sm .drawer-body{padding:0 var(--dss-spacing-md)}.drawer--lg .drawer-body{padding:0 var(--dss-spacing-xl)}.drawer-footer{position:sticky;bottom:0;left:0;height:80px;min-height:80px;background-color:var(--color-white);padding:var(--dss-spacing-lg);display:flex;justify-content:flex-end;gap:var(--dss-spacing-md);align-items:center;border-top:var(--color-white) solid var(--dss-border-width-sm);transition:border-top-color .25s ease-in-out;z-index:900}.drawer-footer--scrolled{border-top-color:var(--color-neutral-100)}.drawer--sm .drawer-footer{height:56px;min-height:56px;padding:var(--dss-spacing-md)}.drawer--lg .drawer-footer{height:104px;min-height:104px;padding:var(--dss-spacing-xl)}::slotted(div[slot="drawer-footer"]){display:flex;justify-content:flex-end;align-items:center;gap:var(--dss-spacing-md)}@media screen and (min-width: 1440px) and (max-width: 1919px){.drawer{width:50%}}@media only screen and (min-width: 1024px) and (max-width: 1439px){.drawer{width:60%}}@media only screen and (max-width: 1023px){.drawer{width:80%}}';var __defProp$R=Object.defineProperty,__getOwnPropDesc$R=Object.getOwnPropertyDescriptor,__decorateClass$R=(d,t,a,c)=>{for(var l=__getOwnPropDesc$R(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$R(t,a,l),l};const ANIMATION_DURATION$1=250;class Drawer extends r$1{constructor(){super(),this._open=!1,this._title="",this._size="md",this._drawerHeader=null,this._drawerFooter=null,this._handleKeydown=this._handleKeydown.bind(this),this._handleOutsideClick=this._handleOutsideClick.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(iconButtonStyles),r$2(drawerStyles)]}set open(t){const a=this._open;this._open=t,this.requestUpdate("open",a)}set title(t){const a=this._title;this._title=t,this.requestUpdate("who",a)}set size(t){const a=this._size;this._size=t,this.requestUpdate("size",a)}get open(){return this._open}get title(){return this._title}get size(){return this._size}_showDrawer(){this.classList.add("show"),this.classList.remove("hide"),setTimeout(()=>{this.classList.add("show"),this.style.visibility="visible"},0),document.body.style.overflow="hidden"}_hideDrawer(){this.classList.add("hide"),this.classList.remove("show"),setTimeout(()=>{this.classList.remove("hide"),this.style.visibility="hidden"},ANIMATION_DURATION$1),document.body.style.overflow=""}_closeDrawer(){this.open=!1,this._hideDrawer(),this.requestUpdate();const t=new Event("onDrawerClosed");this.dispatchEvent(t)}_handleKeydown(t){t.key==="Escape"&&this._closeDrawer()}_handleOutsideClick(t){var a;if(this._open){const c=(a=this.shadowRoot)==null?void 0:a.querySelector(".drawer"),l=t.composedPath();c&&l.includes(this)&&!l.includes(c)&&this._closeDrawer()}}_handleScroll(t){var c,l,h,p;const a=t.target;a&&(a.scrollTop>0?(c=this._drawerHeader)==null||c.classList.add("drawer-header--scrolled"):(l=this._drawerHeader)==null||l.classList.remove("drawer-header--scrolled"),a.scrollHeight-a.scrollTop!==a.clientHeight?(h=this._drawerFooter)==null||h.classList.add("drawer-footer--scrolled"):(p=this._drawerFooter)==null||p.classList.remove("drawer-footer--scrolled"))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}updated(t){t.has("open")&&(this._open?this._showDrawer():this._hideDrawer())}firstUpdated(){var a,c,l;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".drawer");t&&(t.addEventListener("scroll",this._handleScroll.bind(this)),this._drawerHeader=(c=this.shadowRoot)==null?void 0:c.querySelector(".drawer-header"),this._drawerFooter=(l=this.shadowRoot)==null?void 0:l.querySelector(".drawer-footer"),t.scrollHeight>t.clientHeight&&this._drawerFooter.classList.add("drawer-footer--scrolled"))}render(){const t={"drawer--sm":this._size==="sm","drawer--md":this._size==="md","drawer--lg":this._size==="lg"},a={"dss-icon-button--md":this._size==="sm","dss-icon-button--lg":this._size!=="sm"};return x`
      <div class="drawer ${e(t)}">
        <div class="drawer-header">
          <div class="drawer-header-title">${this._title}</div>
          <button
            type="button"
            class="dss-icon-button dss-icon-button--default ${e(a)}"
            @click=${this._closeDrawer}
          >
            <i class="dss-icon">close</i>
          </button>
        </div>
        <div class="drawer-body">
          <slot name="drawer-body"></slot>
        </div>
        <div class="drawer-footer">
          <slot name="drawer-footer"></slot>
        </div>
      </div>
    `}}__decorateClass$R([n(booleanType)],Drawer.prototype,"open");__decorateClass$R([n({type:String})],Drawer.prototype,"title");__decorateClass$R([n({type:String})],Drawer.prototype,"size");const headerStyles=':host{display:block}.dss-header{height:72px;display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-md);flex-shrink:0;background-color:var(--color-white);padding:var(--dss-spacing-sm) var(--dss-spacing-lg);box-shadow:0 1px 2px #0000000d,0 1px 3px 1px #0000001a}.dss-header-left{display:flex;align-items:center;gap:var(--dss-spacing-xl)}.dss-header-right{display:flex;justify-content:flex-end;align-items:center;gap:var(--dss-spacing-xl)}.dss-header-brand{display:flex;align-items:center;gap:var(--dss-spacing-md)}.dss-header-title{display:flex;align-items:center;gap:var(--dss-spacing-md);font-family:var(--font-family);font-size:20px;font-style:normal;font-weight:700;line-height:30px;color:var(--color-neutral-900)}.dss-header-title__area{position:relative}.dss-header-title__area:after{position:absolute;content:"";height:var(--dss-spacing-md);width:var(--dss-border-width-sm);background-color:var(--color-neutral-900);top:50%;right:calc(var(--dss-spacing-xs) * -1);transform:translateY(-50%)}.dss-header-section{position:relative;height:48px;display:flex;align-items:center}::slotted(dss-header-menu-patient){position:relative}::slotted(dss-header-menu-patient):before{content:"";position:absolute;top:0;left:calc(var(--dss-spacing-md) * -1);height:100%;border-left:var(--dss-border-width-sm) solid var(--color-neutral-100)}.dss-header-logo{height:24px}',headerTemplate=d=>x`
  <header
    class=${e({"dss-header":!0})}
  >
    <div class="dss-header-left">
      <div class="dss-header-brand">
        <img
          class="dss-header-logo"
          src="${d._logoSrc}"
          alt="Salut logotip"
        />
        ${d._title?x`
              <h1 class="dss-header-title">
                ${d._area?x`
                      <span class="dss-header-title__area"
                        >${d._area}</span
                      >
                    `:null}
                <span class="dss-header-title__name">${d._title}</span>
              </h1>
            `:null}
      </div>
      <slot name="patient-menu"></slot>
      <slot name="allergies"></slot>
    </div>
    <div class="dss-header-right">
      <slot name="links"></slot>
      <slot name="professional-menu"></slot>
    </div>
  </header>
`;var __defProp$Q=Object.defineProperty,__getOwnPropDesc$Q=Object.getOwnPropertyDescriptor,__decorateClass$Q=(d,t,a,c)=>{for(var l=__getOwnPropDesc$Q(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$Q(t,a,l),l};class Header extends r$1{constructor(){super(...arguments),this._title=void 0,this._area=void 0,this._logoSrc=""}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(headerStyles)]}set title(t){const a=this._title;this._title=t,this.requestUpdate("title",a)}set area(t){const a=this._area;this._area=t,this.requestUpdate("area",a)}set logoSrc(t){const a=this._logoSrc;this._logoSrc=t,this.requestUpdate("logoSrc",a)}_handleClick(){this.dispatchEvent(new CustomEvent("onClick",{bubbles:!0,composed:!0}))}render(){return headerTemplate(this)}}__decorateClass$Q([n({type:String})],Header.prototype,"title");__decorateClass$Q([n({type:String})],Header.prototype,"area");__decorateClass$Q([n({type:String})],Header.prototype,"logoSrc");const headerLinksStyles=":host{display:block}.dss-header-links{display:flex;align-items:center;gap:var(--dss-spacing-md)}.dss-header-links__button-link{all:unset;cursor:pointer;display:flex;align-items:center;gap:var(--dss-spacing-xs);vertical-align:middle;color:var(--color-primary-700);font-size:14px;font-style:normal;font-weight:600;line-height:24px;font-family:var(--font-family)}.dss-header-links__button-link:hover{color:var(--color-primary-900)}.dss-header-links__button-link:active{color:var(--color-primary-800)}.dss-header-links__button-link:disabled{color:var(--color-neutral-500);cursor:not-allowed}.dss-header-links__button-link:focus-visible{border-radius:var(--dss-radius-xs, 4px);outline:2px solid var(--system-feedback-blue-blue-200, #8ec7e5)}@media only screen and (max-width: 1024px){.dss-header-links__button-link__label{display:none}}",headerLinksTemplate=d=>x`
  <ul class="dss-header-links" role="menu">
    ${d._items.map(t=>x`
        <li class="dss-header-links__item" role="menuitem">
          <button
            class="dss-header-links__button-link"
            ?disabled=${t.disabled}
            @click=${()=>d._dispatchItemAction(t)}
          >
            ${t.icon?x` <i class="dss-icon dss-icon--md">${t.icon}</i> `:null}
            <span class="dss-header-links__button-link__label">
              ${t.label}
            </span>
          </button>
        </li>
      `)}
    ${d._hideHelp?null:x`
          <li class="dss-header-links__item" role="menuitem">
            <button
              class="dss-header-links__button-link"
              ?disabled=${d._disableHelp}
              @click="${d._handleHelp}"
            >
              <i class="dss-icon dss-icon--md">help_outline</i>
              <span class="dss-header-links__button-link__label">
                ${d._helpLabel}
              </span>
            </button>
          </li>
        `}
  </ul>
`;var __defProp$P=Object.defineProperty,__getOwnPropDesc$P=Object.getOwnPropertyDescriptor,__decorateClass$P=(d,t,a,c)=>{for(var l=__getOwnPropDesc$P(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$P(t,a,l),l};class HeaderLinks extends r$1{constructor(){super(...arguments),this._hideHelp=!1,this._disableHelp=!1,this._helpLabel="Ajuda",this._items=[]}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(headerLinksStyles)]}set hideHelp(t){const a=this._hideHelp;this._hideHelp=t,this.requestUpdate("hideHelp",a)}set disableHelp(t){const a=this._disableHelp;this._disableHelp=t,this.requestUpdate("disableHelp",a)}set helpLabel(t){const a=this._helpLabel;this._helpLabel=t,this.requestUpdate("helpLabel",a)}set items(t){const a=this._items;this._items=t,this.requestUpdate("items",a)}_dispatchItemAction(t){const a={detail:t,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onClickLink",a))}_handleHelp(){this.dispatchEvent(new CustomEvent("onHelp",{bubbles:!0,composed:!0}))}render(){return headerLinksTemplate(this)}}__decorateClass$P([n(booleanType)],HeaderLinks.prototype,"hideHelp");__decorateClass$P([n(booleanType)],HeaderLinks.prototype,"disableHelp");__decorateClass$P([n({type:String})],HeaderLinks.prototype,"helpLabel");__decorateClass$P([n({type:Array})],HeaderLinks.prototype,"items");const headerMenuPatientStyles=":host{display:block}.dss-header-menu-patient{position:relative;display:flex;align-items:center;gap:var(--dss-spacing-md);width:-moz-max-content;width:max-content}.dss-header-menu-patient--lg{max-width:360px}.dss-header-menu-patient--md{max-width:320px}.dss-header-menu-patient--sm{max-width:280px}.dss-header-menu-patient-details__name{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;align-self:stretch;overflow:hidden;color:var(--neutral-neutral-500, #656565);text-overflow:ellipsis;font-size:14px;font-weight:var(--font-semibold);line-height:24px;font-family:var(--font-family)}.dss-header-menu-patient-details__info{display:flex;align-items:center;gap:var(--dss-spacing-xs)}.dss-header-menu-patient-details__info-label{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;align-self:stretch;overflow:hidden;color:var(--neutral-neutral-500);text-overflow:ellipsis;font-family:var(--font-family);font-size:14px;font-weight:var(--font-regular);line-height:24px}.dss-header-menu-patient-dropdown{position:absolute;top:calc(100% + var(--dss-spacing-lg));right:0;width:240px;z-index:900}.breakpoint-small-only{display:none}.divider-v{width:var(--dss-border-width-sm);height:14px;background-color:var(--color-neutral-500)}@media only screen and (max-width: 1024px){.dss-header-menu-patient-details__info-label--cip,.divider-v--cip{display:none}.breakpoint-small-only{display:block}}",headerMenuPatientTemplate=d=>x`
  <div
    class=${e({"dss-header-menu-patient":!0,[`dss-header-menu-patient--${d._size}`]:!!d._size})}
  >
    <div class="dss-header-menu-patient-avatar">
      <slot name="avatar"></slot>
    </div>
    <div class="dss-header-menu-patient-details">
      <h3 class="dss-header-menu-patient-details__name">${d._name}</h3>
      <div class="dss-header-menu-patient-details__info">
        ${d._cip?x`
              <span
                class="dss-header-menu-patient-details__info-label dss-header-menu-patient-details__info-label--cip"
                >${d._cip}</span
              >
              <span class="divider-v divider-v--cip"></span>
            `:null}
        ${d._age?x`
              <span class="dss-header-menu-patient-details__info-label"
                >${d._age}</span
              >
              <span class="divider-v"></span>
            `:null}
        ${d._gender?x`
              <span class="dss-header-menu-patient-details__info-label"
                >${d._gender}</span
              >
            `:null}
      </div>
    </div>
    <dss-icon-button
      icon="${d._toggleIcon}"
      type="primary"
      @onClick="${d._toggleDropdown}"
      ?disabled=${d._disabled}
    ></dss-icon-button>
    ${d._showDropdown?x`
          <div
            class=${e({"dss-header-menu-patient-dropdown":!0,"dss-header-menu-patient-dropdown--expanded":!!d._showDropdown})}
          >
            <dss-action-menu fullWidth>
              <dss-action-menu-item
                leftIcon="person"
                label="Detalls del pacient"
                @onClick="${()=>d._handleActionClick("Detalls del pacient")}"
              ></dss-action-menu-item>
              <dss-action-menu-item
                class="breakpoint-small-only"
                leftIcon="medical_information"
                label="CIP"
                actionIcon="content_copy"
                @onAction="${d._handleCopyCIP}"
              ></dss-action-menu-item>
              <dss-action-menu-item
                leftIcon="content_paste_go"
                rightIcon="open_in_new"
                label="HCDSNS"
                @onClick="${()=>d._handleActionClick("HCDSNS")}"
              ></dss-action-menu-item>
              <dss-action-menu-item
                leftIcon="content_paste_go"
                rightIcon="open_in_new"
                label="Historial HC3"
                @onClick="${()=>d._handleActionClick("Historial HC3")}"
              ></dss-action-menu-item>
            </dss-action-menu>
          </div>
        `:null}
  </div>
`;var __defProp$O=Object.defineProperty,__getOwnPropDesc$O=Object.getOwnPropertyDescriptor,__decorateClass$O=(d,t,a,c)=>{for(var l=__getOwnPropDesc$O(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$O(t,a,l),l};class HeaderMenuPatient extends r$1{constructor(){super(),this._size="lg",this._name=void 0,this._cip=void 0,this._age=void 0,this._gender=void 0,this._disabled=!1,this._showDropdown=!1,this._toggleIcon="expand_more",this._handleDocumentClickBound=this._handleDocumentClick.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(headerMenuPatientStyles)]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleDocumentClickBound)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClickBound)}set size(t){const a=this._size;this._size=t==="md"||t==="sm"?t:"lg",this.requestUpdate("size",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set name(t){const a=this._name;this._name=t,this.requestUpdate("name",a)}set cip(t){const a=this._cip;this._cip=t,this.requestUpdate("cip",a)}set age(t){const a=this._age;this._age=t,this.requestUpdate("age",a)}set gender(t){const a=this._gender;this._gender=t,this.requestUpdate("gender",a)}_toggleDropdown(){this._showDropdown=!this._showDropdown,this._toggleIcon=this._showDropdown?"expand_less":"expand_more",this.requestUpdate()}_handleClick(){this.dispatchEvent(new CustomEvent("onClick",{bubbles:!0,composed:!0}))}_handleActionClick(t){this.dispatchEvent(new CustomEvent("onActionPatientClick",{detail:{action:t},bubbles:!0,composed:!0}))}_handleCopyCIP(){this._cip&&(navigator.clipboard.writeText(this._cip),this.dispatchEvent(new CustomEvent("onCopyCIP",{detail:{text:this._cip},bubbles:!0,composed:!0})))}_handleDocumentClick(t){this._clickedOutside(this,t)}_clickedOutside(t,a){a.composedPath().includes(t)||this._showDropdown&&this._toggleDropdown()}render(){return headerMenuPatientTemplate(this)}}__decorateClass$O([n({type:String})],HeaderMenuPatient.prototype,"size");__decorateClass$O([n(booleanType)],HeaderMenuPatient.prototype,"disabled");__decorateClass$O([n({type:String})],HeaderMenuPatient.prototype,"name");__decorateClass$O([n({type:String})],HeaderMenuPatient.prototype,"cip");__decorateClass$O([n({type:String})],HeaderMenuPatient.prototype,"age");__decorateClass$O([n({type:String})],HeaderMenuPatient.prototype,"gender");const headerMenuProfessionalStyles=":host{display:block}.dss-header-menu-professional{position:relative;display:flex;align-items:center;gap:var(--dss-spacing-md);width:-moz-max-content;width:max-content}.dss-header-menu-professional--lg{max-width:360px}.dss-header-menu-professional--md{max-width:320px}.dss-header-menu-professional--sm{max-width:280px}.dss-header-menu-professional-details__name,.dss-header-menu-professional-dropdown__details-title,.dss-header-menu-professional-dropdown__details-subtitle{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;align-self:stretch;overflow:hidden;color:var(--neutral-neutral-500, #656565);text-overflow:ellipsis;font-size:14px;font-weight:var(--font-semibold);line-height:24px;font-family:var(--font-family)}.dss-header-menu-professional-dropdown__details-title{color:var(--color-neutral-900)}.dss-header-menu-professional-details__info{display:flex;align-items:center}.dss-header-menu-professional-details__info-label{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;align-self:stretch;overflow:hidden;color:var(--neutral-neutral-500);text-overflow:ellipsis;font-family:var(--font-family);font-size:14px;font-weight:var(--font-regular);line-height:24px}.dss-header-menu-professional-details__info-label:not(:last-child){border-right:var(--dss-border-width-sm) solid var(--color-neutral-100);padding-right:var(--dss-spacing-xxs);margin-right:var(--dss-spacing-xxs)}.dss-header-menu-professional-dropdown{position:absolute;top:calc(100% + var(--dss-spacing-lg));right:0;width:280px;z-index:900;display:flex;padding:var(--dss-spacing-md);flex-direction:column;gap:var(--dss-spacing-lg);background-color:var(--color-white);border-radius:var(--dss-radius-sm);box-shadow:0 8px 12px 6px #0000000d,0 4px 4px #0000001a}.dss-header-menu-professional-dropdown__details{display:flex;flex-direction:column;align-items:flex-start;gap:var(--dss-spacing-xs);align-self:stretch}.dss-header-menu-professional-dropdown__info{display:flex;flex-direction:column;align-items:flex-start;gap:var(--dss-spacing-md);align-self:stretch}.dss-header-menu-professional-dropdown__details-content{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}.dss-header-menu-professional-dropdown__details-description{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;align-self:stretch;overflow:hidden;color:var(--neutral-neutral-500);text-overflow:ellipsis;font-family:var(--font-family);font-size:14px;font-weight:var(--font-regultar);line-height:24px}.dss-header-menu-professional__divider{width:100%;height:var(--dss-border-width-sm);background-color:var(--color-neutral-200)}.dss-header-menu-professional-dropdown__preferences__options{display:flex;flex-direction:column;gap:var(--dss-spacing-xs)}.breakpoint-only-sm{display:none}@media only screen and (max-width: 1024px){.dss-header-menu-professional-details{display:none}.breakpoint-only-sm{display:block}}@media only screen and (min-width: 1025px){.dss-header-menu-professional-dropdown--hide-details .dss-header-menu-professional-dropdown__info,.dss-header-menu-professional-dropdown--hide-details .dss-header-menu-professional__divider{display:none}}",headerMenuProfessionalTemplate=d=>x`
  <div
    class=${e({"dss-header-menu-professional":!0,[`dss-header-menu-professional--${d._size}`]:!!d._size})}
  >
    <div class="dss-header-menu-professional-avatar">
      <slot name="avatar"></slot>
    </div>
    <div class="dss-header-menu-professional-details">
      <h3 class="dss-header-menu-professional-details__name">
        ${d._name}
      </h3>
      <div class="dss-header-menu-professional-details__info">
        ${d._center?x`
              <span
                class="dss-header-menu-professional-details__info-label dss-header-menu-professional-details__info-label--center"
                >${d._center}</span
              >
            `:null}
      </div>
    </div>
    <dss-icon-button
      icon="${d._toggleIcon}"
      type="primary"
      @onClick="${d._toggleDropdown}"
      ?disabled=${d._disabled}
    ></dss-icon-button>
    ${d._showDropdown?x`
          <div
            class=${e({"dss-header-menu-professional-dropdown":!0,"dss-header-menu-professional-dropdown--expanded":!!d._showDropdown,"dss-header-menu-professional-dropdown--hide-details":!!d._hideDropdownDetails})}
          >
            <div class="dss-header-menu-professional-dropdown__info">
              <div class="dss-header-menu-professional-dropdown__details">
                <h3
                  class="dss-header-menu-professional-dropdown__details-title"
                >
                  ${d._infoLabel}
                </h3>

                <div
                  class="dss-header-menu-professional-dropdown__details-content"
                >
                  <h3
                    class="dss-header-menu-professional-dropdown__details-subtitle breakpoint-only-sm"
                  >
                    ${d._name}
                  </h3>

                  ${d._center?x`
                        <p
                          class="dss-header-menu-professional-dropdown__details-description breakpoint-only-sm"
                        >
                          ${d._center}
                        </p>
                      `:null}
                  ${d._collegiate?x`
                        <p
                          class="dss-header-menu-professional-dropdown__details-description"
                        >
                          ${d._collegiateLabel} ${d._collegiate}
                        </p>
                      `:null}
                </div>

                ${d._detailsHref?x`
                      ${d._detailsIcon?x`
                            <dss-button-link
                              label="${d._detailsLabel}"
                              linkHref="${d._detailsHref}"
                              icon="${d._detailsIcon}"
                              iconPosition="${d._detailsIconPosition}"
                            ></dss-button-link>
                          `:x`
                            <dss-button-link
                              label="${d._detailsLabel}"
                              linkHref="${d._detailsHref}"
                            ></dss-button-link>
                          `}
                    `:null}
              </div>

              <div class="dss-header-menu-professional__divider"></div>

              ${d._hideDropdownPreferences?null:x`
                    <div
                      class="dss-header-menu-professional-dropdown__preferences"
                    >
                      <h3
                        class="dss-header-menu-professional-dropdown__details-title"
                      >
                        ${d._preferencesLabel}
                      </h3>
                      <div
                        class="dss-header-menu-professional-dropdown__preferences__options"
                      >
                        <slot></slot>
                      </div>
                    </div>
                  `}
            </div>

            <dss-button
              label="${d._logoutLabel}"
              icon="${d._logoutIcon}"
              iconPosition="${d._logoutIconPosition}"
              fullWidth
              @onClick="${d._handleLogout}"
            ></dss-button>
          </div>
        `:null}
  </div>
`;var __defProp$N=Object.defineProperty,__getOwnPropDesc$N=Object.getOwnPropertyDescriptor,__decorateClass$N=(d,t,a,c)=>{for(var l=__getOwnPropDesc$N(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$N(t,a,l),l};class HeaderMenuProfessional extends r$1{constructor(){super(),this._hideDropdownDetails=!1,this._hideDropdownPreferences=!1,this._size="lg",this._name=void 0,this._center=void 0,this._collegiate=void 0,this._disabled=!1,this._showDropdown=!1,this._toggleIcon="expand_more",this._infoLabel="Les meves dades",this._collegiateLabel="Col·legiat nº",this._preferencesLabel="Preferences de treball",this._detailsLabel="Veure més detalls",this._detailsHref=void 0,this._detailsIconPosition="left",this._logoutLabel="Tancar sessió",this._logoutIcon="logout",this._logoutIconPosition="left",this._handleDocumentClickBound=this._handleDocumentClick.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(headerMenuProfessionalStyles)]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleDocumentClickBound)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClickBound)}set size(t){const a=this._size;this._size=t==="md"||t==="sm"?t:"lg",this.requestUpdate("size",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set name(t){const a=this._name;this._name=t,this.requestUpdate("name",a)}set center(t){const a=this._center;this._center=t,this.requestUpdate("center",a)}set collegiate(t){const a=this._collegiate;this._collegiate=t,this.requestUpdate("collegiate",a)}set infoLabel(t){const a=this._infoLabel;this._infoLabel=t,this.requestUpdate("infoLabel",a)}set collegiateLabel(t){const a=this._collegiateLabel;this._collegiateLabel=t,this.requestUpdate("collegiateLabel",a)}set preferencesLabel(t){const a=this._preferencesLabel;this._preferencesLabel=t,this.requestUpdate("preferencesLabel",a)}set detailsLabel(t){const a=this._detailsLabel;this._detailsLabel=t,this.requestUpdate("detailsLabel",a)}set detailsHref(t){const a=this._detailsHref;this._detailsHref=t,this.requestUpdate("detailsHref",a)}set detailsIcon(t){const a=this._detailsIcon;this._detailsIcon=t,this.requestUpdate("detailsIcon",a)}set detailsIconPosition(t){const a=this._detailsIconPosition;this._detailsIconPosition=t,this.requestUpdate("detailsIconPosition",a)}set logoutLabel(t){const a=this._logoutLabel;this._logoutLabel=t,this.requestUpdate("logoutLabel",a)}set logoutIcon(t){const a=this._logoutIcon;this._logoutIcon=t,this.requestUpdate("logoutIcon",a)}set logoutIconPosition(t){const a=this._logoutIconPosition;this._logoutIconPosition=t,this.requestUpdate("logoutIconPosition",a)}set hideDropdownDetails(t){const a=this._hideDropdownDetails;this._hideDropdownDetails=t,this.requestUpdate("hideDropdownDetails",a)}set hideDropdownPreferences(t){const a=this._hideDropdownPreferences;this._hideDropdownPreferences=t,this.requestUpdate("hideDropdownPreferences",a)}_toggleDropdown(){this._showDropdown=!this._showDropdown,this._toggleIcon=this._showDropdown?"expand_less":"expand_more",this.requestUpdate()}_handleLogout(){this.dispatchEvent(new CustomEvent("onLogout",{bubbles:!0,composed:!0}))}_handleDocumentClick(t){this._clickedOutside(this,t)}_clickedOutside(t,a){a.composedPath().includes(t)||this._showDropdown&&this._toggleDropdown()}render(){return headerMenuProfessionalTemplate(this)}}__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"size");__decorateClass$N([n(booleanType)],HeaderMenuProfessional.prototype,"disabled");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"name");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"center");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"collegiate");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"infoLabel");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"collegiateLabel");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"preferencesLabel");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"detailsLabel");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"detailsHref");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"detailsIcon");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"detailsIconPosition");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"logoutLabel");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"logoutIcon");__decorateClass$N([n({type:String})],HeaderMenuProfessional.prototype,"logoutIconPosition");__decorateClass$N([n(booleanType)],HeaderMenuProfessional.prototype,"hideDropdownDetails");__decorateClass$N([n(booleanType)],HeaderMenuProfessional.prototype,"hideDropdownPreferences");const styles$f=".dss-wrapper{position:relative}.dss-icon-badge{cursor:default;box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:20px;width:20px;border:var(--dss-border-width-sm) solid var(--color-neutral-500);padding:var(--dss-spacing-tiny);border-radius:var(--dss-radius-xs);font-size:16px;color:var(--color-neutral-500);background-color:var(--color-white)}.dss-icon-badge--bubble{border-radius:var(--dss-radius-full)}.dss-icon-badge--md{height:24px;width:32px;padding:var(--dss-spacing-xxs) var(--dss-spacing-xs)}.dss-icon-badge--lg{height:32px;width:40px;padding:var(--dss-spacing-xxs) var(--dss-spacing-xs);border-radius:var(--dss-radius-sm);font-size:24px}.dss-icon-badge--xl{height:40px;width:40px;padding:var(--dss-spacing-xxs) var(--dss-spacing-xs);border-radius:var(--dss-radius-sm);font-size:24px}::slotted(dss-tooltip){display:none}.dss-icon-badge:hover+::slotted(dss-tooltip){display:block}";var __defProp$M=Object.defineProperty,__getOwnPropDesc$M=Object.getOwnPropertyDescriptor,__decorateClass$M=(d,t,a,c)=>{for(var l=__getOwnPropDesc$M(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$M(t,a,l),l};class IconBadge extends r$1{constructor(){super(...arguments),this._icon="warning",this._size="sm",this._state="",this._disabled=!1,this._isIconDefined=!1,this._outlined=!1,this._bubble=!1}static get styles(){return[r$2(iconStyles),r$2(styles$f),r$2(badgeStates)]}set icon(t){const a=this._icon;this._icon=t,this._isIconDefined=!0,this.requestUpdate("icon",a)}set size(t){const a=this._size;this._size=t,this.requestUpdate("size",a)}set state(t){const a=this._state;this._state=t,t&&!this._isIconDefined&&(t.includes("danger")?this._icon="warning":t.includes("moderate")?this._icon="emergency_home":t.includes("slight")?this._icon="error":t.includes("correct")?this._icon="check_circle":t.includes("undeterminated")?this._icon="circle":t.includes("critic")?this._icon="cancel":t.includes("alert")?this._icon="report":t.includes("ideal")?this._icon="check_circle":t.includes("info")?this._icon="info":t.includes("neutral")&&(this._icon="circle")),this.requestUpdate("state",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set outlined(t){const a=this._outlined;this._outlined=t,this.requestUpdate("outlined",a)}set bubble(t){const a=this._bubble;this._bubble=t,this.requestUpdate("bubble",a)}render(){const t={"dss-icon-badge--xl":this._size==="xl","dss-icon-badge--lg":this._size==="lg","dss-icon-badge--md":this._size==="md","dss-icon-badge--sm":this._size==="sm","dss-badge--danger":this._state==="danger","dss-badge--danger-low":this._state==="danger-low","dss-badge--danger-high":this._state==="danger-high","dss-badge--moderate":this._state==="moderate","dss-badge--moderate-low":this._state==="moderate-low","dss-badge--moderate-high":this._state==="moderate-high","dss-badge--slight":this._state==="slight","dss-badge--slight-low":this._state==="slight-low","dss-badge--slight-high":this._state==="slight-high","dss-badge--correct":this._state==="correct","dss-badge--undeterminated":this._state==="undeterminated","dss-badge--critic":this._state==="critic"&&!this._outlined,"dss-badge--critic-outlined":this._state==="critic"&&this._outlined,"dss-badge--alert":this._state==="alert"&&!this._outlined,"dss-badge--alert-outlined":this._state==="alert"&&this._outlined,"dss-badge--ideal":this._state==="ideal"&&!this._outlined,"dss-badge--ideal-outlined":this._state==="ideal"&&this._outlined,"dss-badge--info":this._state==="info"&&!this._outlined,"dss-badge--info-outlined":this._state==="info"&&this._outlined,"dss-badge--info-alt":this._state==="info-alt"&&!this._outlined,"dss-badge--info-alt-outlined":this._state==="info-alt"&&this._outlined,"dss-badge--neutral":this._state==="neutral"&&!this._outlined,"dss-badge--neutral-outlined":this._state==="neutral"&&this._outlined,"dss-badge--disabled":this._disabled,"dss-icon-badge--bubble":this._bubble};return x`
      <div class="dss-wrapper">
        <span class="dss-icon-badge dss-icon ${e(t)}">
          ${this._icon}
        </span>
        <slot name="tooltip"></slot>
      </div>
    `}}__decorateClass$M([n({type:String})],IconBadge.prototype,"icon");__decorateClass$M([n({type:String})],IconBadge.prototype,"size");__decorateClass$M([n({type:String})],IconBadge.prototype,"state");__decorateClass$M([n(booleanType)],IconBadge.prototype,"disabled");__decorateClass$M([n(booleanType)],IconBadge.prototype,"outlined");__decorateClass$M([n(booleanType)],IconBadge.prototype,"bubble");const dssIcon$1=i`dss-icon${s(getCustomElementSuffix())}`,template=d=>u`
  <button
    class=${e({"dss-icon-button":!0,[`dss-icon-button--${d._type}`]:!!d._type,[`dss-icon-button--${d._size}`]:!!d._size})}
    ?disabled=${d._disabled}
    ?hidden=${d._hidden}
    @click=${d._handleClick}
  >
    <${dssIcon$1} icon="${d._icon}" size="${d._size}"></${dssIcon$1}>
  </button>
`;var __defProp$L=Object.defineProperty,__getOwnPropDesc$L=Object.getOwnPropertyDescriptor,__decorateClass$L=(d,t,a,c)=>{for(var l=__getOwnPropDesc$L(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$L(t,a,l),l};class IconButton extends r$1{constructor(){super(...arguments),this._type="default",this._size="md",this._icon=void 0,this._iconFill=!1,this._disabled=!1,this._hidden=!1}static get styles(){return[r$2(resetStyles),r$2(iconButtonStyles)]}set type(t){const a=this._type;this._type=t,this.requestUpdate("type",a)}set size(t){const a=this._size;this._size=t,this.requestUpdate("size",a)}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}set iconFill(t){const a=this._iconFill;this._iconFill=t,this.requestUpdate("iconFill",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set hidden(t){const a=this._hidden;this._hidden=t,this.requestUpdate("hidden",a)}_handleClick(){this.dispatchEvent(new CustomEvent("onClick",{bubbles:!0,composed:!0}))}render(){return template(this)}}__decorateClass$L([n({type:String})],IconButton.prototype,"type");__decorateClass$L([n({type:String})],IconButton.prototype,"size");__decorateClass$L([n({type:String})],IconButton.prototype,"icon");__decorateClass$L([n(booleanType)],IconButton.prototype,"iconFill");__decorateClass$L([n(booleanType)],IconButton.prototype,"disabled");__decorateClass$L([n(booleanType)],IconButton.prototype,"hidden");var __defProp$K=Object.defineProperty,__getOwnPropDesc$K=Object.getOwnPropertyDescriptor,__decorateClass$K=(d,t,a,c)=>{for(var l=__getOwnPropDesc$K(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$K(t,a,l),l};class Input extends r$1{constructor(){super(...arguments),this._label="Label",this._icon="add_box",this._placeholder="",this._inputSize="lg",this._maxLength=void 0,this._invalid=!1,this._helpText="",this._isFocused=!1,this._isTypeNumeric=!1,this._inputValidity=!0,this._removeMinWidth=!1,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=t=>{for(const a of t)a.type==="attributes"&&(this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(iconStyles),r$2(inputStyles),r$2(iconButtonStyles)]}get _input(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}get _labelSlot(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="label"]'))||void 0;return t==null?void 0:t.assignedElements()[0]}set label(t){const a=this._label;this._label=t,this.requestUpdate("label",a)}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}set inputSize(t){const a=this._inputSize;t==="md"?this._inputSize=t:this._inputSize="lg",this.requestUpdate("inputSize",a)}set helpText(t){const a=this._helpText;this._helpText=t,this.requestUpdate("helpText",a)}set invalid(t){const a=this._invalid;this._invalid=t,this.requestUpdate("invalid",a)}set removeMinWidth(t){const a=this._removeMinWidth;this._removeMinWidth=t,this.requestUpdate("removeMinWidth",a)}set value(t){t!==void 0&&this.requestUpdate()}disconnectedCallback(){this.observer.disconnect()}_handleClick(){this.requestUpdate()}_handleInput(){this._isTypeNumeric&&this._maxLength&&this._input&&(this._input.value=this._input.value.slice(0,this._maxLength)),this._handleValidity(),this.requestUpdate()}_handleFocusIn(){this._isFocused=!0,this.requestUpdate()}_handleFocusOut(){this._isFocused=!1,this.requestUpdate()}_focusInput(){var t;(t=this._input)==null||t.focus()}_handleValidity(){var a;const t=(a=this._input)==null?void 0:a.checkValidity();t!==void 0&&(this._inputValidity=t)}_stepUp(){var t;(t=this._input)==null||t.stepUp(),this._handleValidity(),this._dispatchValueChange(),this.requestUpdate()}_stepDown(){var t;(t=this._input)==null||t.stepDown(),this._handleValidity(),this._dispatchValueChange(),this.requestUpdate()}_dispatchValueChange(){if(this._input){const t={detail:this._input.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onInputChange",t))}}_checkInputAttributes(){var c,l,h,p,b;const t=(c=this._input)==null?void 0:c.getAttribute("placeholder");t&&(this._placeholder=t),((l=this._input)==null?void 0:l.getAttribute("type"))==="number"&&(this._isTypeNumeric=!0);const a=(h=this._input)==null?void 0:h.getAttribute("maxlength");this._maxLength=a?+a:void 0,(p=this._input)!=null&&p.value&&((b=this._input)==null?void 0:b.value)!==""&&this._handleValidity()}async firstUpdated(){try{await this.updateComplete,this._input&&(this._checkInputAttributes(),this.observer.observe(this._input,this.observerConfig)),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}render(){var c,l,h,p,b,g,m;const t={"dss-input-group--invalid":this._invalid||!this._inputValidity,"dss-input-group--disabled":(c=this._input)==null?void 0:c.disabled,"dss-input-group--required":(l=this._input)==null?void 0:l.required,"dss-input-group--read-only":(h=this._input)==null?void 0:h.readOnly,"dss-input-group--focused":((p=this._input)==null?void 0:p.value)||this._placeholder||this._isFocused,"dss-input-group--lg":this._inputSize==="lg","dss-input-group--md":this._inputSize==="md","dss-input-group--numeric":this._isTypeNumeric,"dss-input-group--has-icon":this._icon&&this._icon!=="","dss-input-group--no-min-width":this._removeMinWidth,"dss-input-group--no-label":!this._labelSlot},a={"dss-input-help--invalid":this._invalid,"dss-input-help--disabled":(b=this._input)==null?void 0:b.disabled};return x`
      <div class="dss-input-wrapper">
        <div class="dss-input-group ${e(t)}">
          ${this._icon?x`
                <span class="dss-icon dss-icon--md dss-input-icon">
                  ${this._icon}
                </span>
              `:null}

          <slot
            name="input"
            @click=${this._handleClick}
            @input=${this._handleInput}
            @focusin=${this._handleFocusIn}
            @focusout=${this._handleFocusOut}
          ></slot>

          <slot name="label" @click=${this._focusInput}></slot>

          ${this._isTypeNumeric?x`
                <div class="dss-input__numeric-buttons">
                  <button
                    type="button"
                    class="dss-icon-button dss-icon-button--primary "
                    @click=${this._stepUp}
                    ?disabled=${this._input.disabled||this._input.readOnly}
                    tabindex="-1"
                  >
                    <span class="dss-icon dss-icon--sm">keyboard_arrow_up</span>
                  </button>
                  <button
                    type="button"
                    class="dss-icon-button dss-icon-button--primary"
                    @click=${this._stepDown}
                    ?disabled=${this._input.disabled||this._input.readOnly}
                    tabindex="-1"
                  >
                    <span class="dss-icon dss-icon--sm">keyboard_arrow_down</span>
                  </button>
                </div>
              `:null}
        </div>
        ${this._helpText?x`
              <div class="dss-input-help ${e(a)}">
                <span>${this._helpText}</span>
                ${this._maxLength?x`<span>
                      ${(m=(g=this._input)==null?void 0:g.value)==null?void 0:m.length}/${this._maxLength}
                    </span>`:null}
              </div>
            `:null}
      </div>
    `}}__decorateClass$K([n({type:String})],Input.prototype,"label");__decorateClass$K([n({type:String})],Input.prototype,"icon");__decorateClass$K([n({type:String})],Input.prototype,"inputSize");__decorateClass$K([n({type:String})],Input.prototype,"helpText");__decorateClass$K([n(booleanType)],Input.prototype,"invalid");__decorateClass$K([n(booleanType)],Input.prototype,"removeMinWidth");__decorateClass$K([n({type:String})],Input.prototype,"value");const inputActionTemplate=d=>{var c,l,h,p,b,g,m;const t={"dss-input-group--invalid":d._invalid||!d._inputValidity,"dss-input-group--disabled":(c=d._input)==null?void 0:c.disabled,"dss-input-group--required":(l=d._input)==null?void 0:l.required,"dss-input-group--read-only":(h=d._input)==null?void 0:h.readOnly,"dss-input-group--focused":((p=d._input)==null?void 0:p.value)||d._placeholder||d._isFocused,"dss-input-group--lg":d._inputSize==="lg","dss-input-group--md":d._inputSize==="md","dss-input-group--numeric":d._isTypeNumeric,"dss-input-group--has-icon":d._icon&&d._icon!=="","dss-input-group--no-min-width":d._removeMinWidth,"dss-input-group--actions":!0,"dss-input-group--has-secondary-action":!!d._action&&!!d._secondaryAction,"dss-input-group--no-label":!d._labelSlot},a={"dss-input-help--invalid":d._invalid,"dss-input-help--disabled":(b=d._input)==null?void 0:b.disabled};return x`
    <div class="dss-input-wrapper">
      <div class="dss-input-group ${e(t)}">
        ${d._icon?x`
              <span class="dss-icon dss-icon--md dss-input-icon">
                ${d._icon}
              </span>
            `:null}

        <slot
          name="input"
          @click=${d._handleClick}
          @input=${d._handleInput}
          @focusin=${d._handleFocusIn}
          @focusout=${d._handleFocusOut}
        ></slot>

        <slot name="label" @click=${d._focusInput}></slot>

        <div class="dss-input-actions">
          <slot name="action"></slot>
          <slot name="secondaryAction"></slot>
        </div>

        ${d._isTypeNumeric?x`
              <div class="dss-input__numeric-buttons">
                <button
                  type="button"
                  class="dss-icon-button dss-icon-button--sm dss-icon-button--primary "
                  @click=${d._stepUp}
                  ?disabled=${d._input.disabled||d._input.readOnly}
                  tabindex="-1"
                >
                  <span class="dss-icon dss-icon--sm">keyboard_arrow_up</span>
                </button>
                <button
                  type="button"
                  class="dss-icon-button dss-icon-button--sm dss-icon-button--primary"
                  @click=${d._stepDown}
                  ?disabled=${d._input.disabled||d._input.readOnly}
                  tabindex="-1"
                >
                  <span class="dss-icon dss-icon--sm">keyboard_arrow_down</span>
                </button>
              </div>
            `:null}
      </div>
      ${d._helpText?x`
            <div class="dss-input-help ${e(a)}">
              <span>${d._helpText}</span>
              ${d._maxLength?x`<span>
                    ${(m=(g=d._input)==null?void 0:g.value)==null?void 0:m.length}/${d._maxLength}
                  </span>`:null}
            </div>
          `:null}
    </div>
  `},inputActionStyles='.dss-input-group ::slotted(input){padding-right:calc(var(--dss-spacing-lg) + var(--dss-spacing-md) + var(--dss-spacing-sm))!important}.dss-input-group ::slotted(input[type="number"]){padding-right:calc(var(--dss-spacing-lg) + var(--dss-spacing-lg) + var(--dss-spacing-lg))!important}.dss-input-group--actions .dss-input__numeric-buttons{right:calc(var(--dss-spacing-lg) + var(--dss-spacing-sm))}.dss-input-group--actions.dss-input-group--has-secondary-action ::slotted(input){padding-right:var(--dss-spacing-xxhg)!important}.dss-input-group--actions.dss-input-group--has-secondary-action ::slotted(input[type="number"]){padding-right:calc(var(--dss-spacing-xxhg) + var(--dss-spacing-md))!important}.dss-input-group--actions.dss-input-group--has-secondary-action .dss-input__numeric-buttons{right:var(--dss-spacing-xhg)}.dss-input-actions{position:absolute;top:50%;transform:translateY(-50%);right:0;z-index:900;padding-right:var(--dss-spacing-sm);padding-left:var(--dss-spacing-xs);border-left:var(--dss-border-width-sm) solid var(--color-neutral-100)}';var __defProp$J=Object.defineProperty,__getOwnPropDesc$J=Object.getOwnPropertyDescriptor,__decorateClass$J=(d,t,a,c)=>{for(var l=__getOwnPropDesc$J(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$J(t,a,l),l};class InputAction extends r$1{constructor(){super(...arguments),this._label="Label",this._icon="add_box",this._placeholder="",this._inputSize="lg",this._maxLength=void 0,this._invalid=!1,this._helpText="",this._isFocused=!1,this._isTypeNumeric=!1,this._inputValidity=!0,this._removeMinWidth=!1,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=t=>{for(const a of t)a.type==="attributes"&&(this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(iconStyles),r$2(iconButtonStyles),r$2(inputStyles),r$2(inputActionStyles)]}get _input(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}get _labelSlot(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="label"]'))||void 0;return t==null?void 0:t.assignedElements()[0]}get _action(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="action"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}get _secondaryAction(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="secondaryAction"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}set label(t){const a=this._label;this._label=t,this.requestUpdate("label",a)}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}set inputSize(t){const a=this._inputSize;t==="md"?this._inputSize=t:this._inputSize="lg",this.requestUpdate("inputSize",a)}set helpText(t){const a=this._helpText;this._helpText=t,this.requestUpdate("helpText",a)}set invalid(t){const a=this._invalid;this._invalid=t,this.requestUpdate("invalid",a)}set removeMinWidth(t){const a=this._removeMinWidth;this._removeMinWidth=t,this.requestUpdate("removeMinWidth",a)}set value(t){t!==void 0&&this.requestUpdate()}disconnectedCallback(){this.observer.disconnect()}_handleClick(){this.requestUpdate()}_handleInput(){this._isTypeNumeric&&this._maxLength&&this._input&&(this._input.value=this._input.value.slice(0,this._maxLength)),this._handleValidity(),this.requestUpdate()}_handleFocusIn(){this._isFocused=!0,this.requestUpdate()}_handleFocusOut(){this._isFocused=!1,this.requestUpdate()}_focusInput(){var t;(t=this._input)==null||t.focus()}_handleValidity(){var a;const t=(a=this._input)==null?void 0:a.checkValidity();t!==void 0&&(this._inputValidity=t)}_stepUp(){var t;(t=this._input)==null||t.stepUp(),this._handleValidity(),this._dispatchValueChange(),this.requestUpdate()}_stepDown(){var t;(t=this._input)==null||t.stepDown(),this._handleValidity(),this._dispatchValueChange(),this.requestUpdate()}_dispatchValueChange(){if(this._input){const t={detail:this._input.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onInputChange",t))}}_checkInputAttributes(){var c,l,h,p,b;const t=(c=this._input)==null?void 0:c.getAttribute("placeholder");t&&(this._placeholder=t),((l=this._input)==null?void 0:l.getAttribute("type"))==="number"&&(this._isTypeNumeric=!0);const a=(h=this._input)==null?void 0:h.getAttribute("maxlength");this._maxLength=a?+a:void 0,(p=this._input)!=null&&p.value&&((b=this._input)==null?void 0:b.value)!==""&&this._handleValidity()}async firstUpdated(){try{await this.updateComplete,this._input&&(this._checkInputAttributes(),this.observer.observe(this._input,this.observerConfig)),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}render(){return inputActionTemplate(this)}}__decorateClass$J([n({type:String})],InputAction.prototype,"label");__decorateClass$J([n({type:String})],InputAction.prototype,"icon");__decorateClass$J([n({type:String})],InputAction.prototype,"inputSize");__decorateClass$J([n({type:String})],InputAction.prototype,"helpText");__decorateClass$J([n(booleanType)],InputAction.prototype,"invalid");__decorateClass$J([n(booleanType)],InputAction.prototype,"removeMinWidth");__decorateClass$J([n({type:String})],InputAction.prototype,"value");const styles$e=".dss-wrapper{position:relative}.dss-icon-button{position:absolute;top:8px;right:var(--dss-spacing-xxs);z-index:800}.dss-selector{position:absolute;top:52px;z-index:900;width:100%}.dss-selector--md{top:44px}.dss-input-group__action-button--sm{top:var(--dss-spacing-sm)}";var __defProp$I=Object.defineProperty,__getOwnPropDesc$I=Object.getOwnPropertyDescriptor,__decorateClass$I=(d,t,a,c)=>{for(var l=__getOwnPropDesc$I(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$I(t,a,l),l};const dssSelector=i`dss-selector${s(getCustomElementSuffix())}`;class InputDropdown extends r$1{constructor(){super(...arguments),this._elements=null,this._copyElements=null,this._tick=!0,this._type="default",this._boxStyle=null,this._selectedValue=null,this._multiple=!1,this._openWithSearch=!1,this._deselectable=!1,this._icon="search",this._placeHolder="",this._showDropdown=!1,this._required=!1,this._disabled=!1,this._readonly=!1,this._labelSelectAll="Seleccionar-ho tot",this._labelDeselectAll="Deseleccionar-ho tot",this._selectAll=!1,this._selectElements=0,this._isFocused=!1,this._helpText="",this._invalid=!1,this._inputSize="lg",this._inputValidity=!0,this._filteredElements=[],this._dropdownPlaceholder="Seleccionar",this._selectorStyle="",this._isFiltering=!1,this._placeholderEmpty="Escriu per cercar",this._filterThreshold=1,this._unorder=!1,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=t=>{for(const a of t)a.type==="attributes"&&(this._input&&this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(iconStyles),r$2(iconButtonStyles),r$2(inputStyles),r$2(styles$e)]}get _input(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}get _label(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="label"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}set placeHolder(t){const a=this._placeHolder;this._placeHolder=t,this.requestUpdate("placeHolder",a)}set unorder(t){const a=this._unorder;this._unorder=t,this.requestUpdate("unorder",a)}set elements(t){const a=this._elements;if(this._unorder)this._elements=t;else{const c=sort(t,"label","asc","string");this._elements=c}t&&(this._input&&!this._isFiltering&&(this._input.value=""),this._filteredElements=this._getFilteredElements(),this._copyElements=[...this._elements],this._initElementsSelected(),this.requestUpdate()),this.requestUpdate("elements",a)}set multiple(t){const a=this._multiple;this._multiple=t,this.requestUpdate("multiple",a)}set tick(t){const a=this._tick;this._tick=t,this.requestUpdate("tick",a)}set openWithSearch(t){const a=this._openWithSearch;this._openWithSearch=t,t&&(this._showDropdown=t,this._isFocused=!0),this.requestUpdate("openWithSearch",a)}set showDropdown(t){const a=this._showDropdown;this._showDropdown=t,this.requestUpdate("showDropdown",a)}set deselectable(t){const a=this._deselectable;this._deselectable=t,this.requestUpdate("deselectable",a)}set selectedValue(t){const a=this._selectedValue;t&&(this._selectedValue=t),this._elements&&this._selectedValue&&(this._selectedValue.length>0&&(this._isFocused=!0),this._initElementsSelected()),this.requestUpdate("selectedValue",a)}set type(t){const a=this._type;t==="default"||t==="green"?this._type=t:this._type="default",this.requestUpdate("type",a)}set boxStyle(t){const a=this._boxStyle;this._boxStyle=t,this.requestUpdate("boxStyle",a)}set selectorStyle(t){const a=this._selectorStyle;this._selectorStyle=t,this.requestUpdate("selectorStyle",a)}set labelSelectAll(t){const a=this._labelSelectAll;t!==""&&(this._labelSelectAll=t),this.requestUpdate("labelSelectAll",a)}set labelDeselectAll(t){const a=this._labelDeselectAll;t!==""&&(this._labelDeselectAll=t),this.requestUpdate("labelDeselectAll",a)}set selectAll(t){const a=this._selectAll;this._selectAll=t,this.requestUpdate("selectAll",a)}set invalid(t){const a=this._invalid;this._invalid=t,this.requestUpdate("invalid",a)}set inputSize(t){const a=this._inputSize;t==="md"?this._inputSize=t:this._inputSize="lg",this.requestUpdate("inputSize",a)}set helpText(t){const a=this._helpText;this._helpText=t,this.requestUpdate("helpText",a)}set dropdownPlaceholder(t){const a=this._dropdownPlaceholder;this._dropdownPlaceholder=t,this.requestUpdate("dropdownPlaceholder",a)}set placeholderEmpty(t){const a=this._placeholderEmpty;this._placeholderEmpty=t,this.requestUpdate("placeholderEmpty",a)}set filterThreshold(t){const a=this._filterThreshold;this._filterThreshold=t,this.requestUpdate("filterThreshold",a)}disconnectedCallback(){this.observer.disconnect()}_getFilteredElements(){var a,c,l;const t=((a=this._elements)==null?void 0:a.filter(h=>{var p;return(p=this._selectedValue)==null?void 0:p.includes(h.value)}))||[];if(this._input&&this._input.value){const h=(c=this._input)==null?void 0:c.value.toLowerCase();if(h){const p=((l=this._elements)==null?void 0:l.filter(b=>{var g;return!((g=this._selectedValue)!=null&&g.includes(b.value))&&b.label.toLowerCase().includes(h)}))||[];return[...t,...p]}}else return this._elements}async firstUpdated(){var t;try{await this.updateComplete,this._input&&(this.observer.observe(this._input,this.observerConfig),this._checkInputAttributes()),this._elements&&(this._filteredElements=this._getFilteredElements(),this._initElementsSelected()),this._openWithSearch&&this._input&&(this._input.value="",(t=this._input)!=null&&t.getAttribute("placeholder")||this._input.setAttribute("placeholder",this._dropdownPlaceholder)),!this._openWithSearch&&!this._disabled&&document.addEventListener("click",a=>{this._clickedOutsideDropdown(this,a)}),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}_initElementsSelected(){this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[])}_clickedOutsideDropdown(t,a){var c,l,h;this._showDropdown&&(a.composedPath().includes(t)||(this._input&&(this._input.value=""),(c=this._elements)!=null&&c.length&&(this._initElementsSelected(),(!this._selectedValue||this._selectedValue.length<=0)&&(this._filteredElements=this._getFilteredElements())),(l=this._elements)!=null&&l.length||((h=this._input)==null||h.removeAttribute("placeholder"),this._placeHolder=""),this._hidePlaceholder(),this._showDropdown=!1,this._isFiltering=!1,this._isFocused=!1,this.requestUpdate()))}_handleInput(){this._isFiltering=!0,this._filteredElements=this._getFilteredElements(),this.requestUpdate()}_handleBlurEsc(){this._readonly||this._openWithSearch||(this._isFocused=!0,this._showDropdown=!1,this._isFiltering=!1,this.requestUpdate())}_handleBlurSelector(t,a){var c;if(t!==a.target){if(this._openWithSearch)return;(c=this._input)==null||c.focus(),this._handleBlurEsc(),this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[])}}_toggleDropdown(){var t,a,c,l,h;(t=this._elements)!=null&&t.length&&this._showDropdown&&this._input?(this._initElementsSelected(),(!this._selectedValue||this._selectedValue.length<=0)&&(this._filteredElements=this._getFilteredElements())):(a=this._elements)!=null&&a.length&&!this._showDropdown&&this._input&&(this._input.value="",this._showPlaceholder(),(c=this._input)==null||c.focus()),this._showDropdown=!this._showDropdown,!((l=this._elements)!=null&&l.length)&&!this._showDropdown&&((h=this._input)==null||h.removeAttribute("placeholder"),this._placeHolder="",this._isFiltering=!1,this._isFocused=!1),this.requestUpdate()}_dispatchValueChange(){if(this._input){const t={detail:{inputValue:this._input.value,selectedValue:this._selectedValue},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onInputDropdownChange",t))}}_onSelectorChanges(t){this._isFiltering=!1;const a=t.detail;this._selectedValue=typeof a=="string"?[t.detail]:t.detail,!this._multiple&&!this._disabled&&(this._openWithSearch||(this._showDropdown=!1,this._initElementsSelected()),this._handleValidity()),this._dispatchValueChange(),this.requestUpdate()}_showSelectValuesInInput(t){var l,h;!this._multiple&&Array.isArray(t)&&t.length>1&&t.splice(1);const a=(l=this._elements)==null?void 0:l.filter(p=>t.includes(p.value));if(this._elements=[...this._copyElements],this._openWithSearch?this._selectElements=0:this._selectElements=a!=null&&a.length?a.length:0,a&&a.length>0){const p=this._elements.filter(b=>a.includes(b));p.push(...this._elements.filter(b=>!a.includes(b))),this._elements=[...p],this._filteredElements=this._elements}if(!this._multiple&&this._input&&!this._isFiltering){this._input.value=((h=a==null?void 0:a[0])==null?void 0:h.label)??"",this._deselectable&&this._input.value===""&&(this._filteredElements=[...this._copyElements]);return}const c=a==null?void 0:a.map(p=>p.label);this._input&&!this._isFiltering&&(this._input.value=(c==null?void 0:c.join(", "))??"")}_checkInputAttributes(){var h,p,b,g,m,w;const t=(h=this._input)==null?void 0:h.getAttribute("placeholder");t&&(this._placeHolder=t);const a=(p=this._input)==null?void 0:p.getAttribute("readonly");this._readonly=a!==null;const c=(b=this._input)==null?void 0:b.getAttribute("disabled");this._disabled=c!==null;const l=(g=this._input)==null?void 0:g.getAttribute("required");this._required=l!==null,(m=this._input)!=null&&m.value&&((w=this._input)==null?void 0:w.value)!==""&&this._handleValidity(),this.requestUpdate()}_handleFocusIn(){this._isFocused=!0,this.requestUpdate()}_handleFocusOut(t){var h,p;const a=t.relatedTarget;if(a instanceof HTMLElement&&a.contains(this))return;const c=(h=this.shadowRoot)==null?void 0:h.querySelector("dss-selector"),l=(p=this.shadowRoot)==null?void 0:p.querySelector(".dss-input-group__action-button");a!==null&&a!==this._input&&a!==c&&a!==l&&(this._selectedValue&&this._initElementsSelected(),this._showDropdown=!1,this._isFocused=!1,this._isFiltering=!1,this._hidePlaceholder()),this.requestUpdate()}_handleKeyDown(t){(t==null?void 0:t.key)==="Enter"?this._handleClick():(t==null?void 0:t.key)==="Escape"?(this._isFiltering=!1,this._showDropdown=!1,this._initElementsSelected(),this._hidePlaceholder(),(!this._selectedValue||this._selectedValue.length<=0)&&(this._filteredElements=this._getFilteredElements())):this._showDropdown||this._handleClick(),this.requestUpdate()}_handleClick(){!this._disabled&&!this._readonly&&(this._input&&(!this._openWithSearch&&!this._isFiltering&&(this._input.value=""),this._showPlaceholder()),this._isFocused=!0,this._showDropdown=!0,this.requestUpdate())}_focusInput(){var t;(t=this._input)==null||t.focus(),this._handleClick()}_showPlaceholder(){var t,a,c,l;!this._placeHolder&&!((t=this._elements)!=null&&t.length)?(a=this._input)==null||a.setAttribute("placeholder",this._placeholderEmpty):!this._placeHolder&&((c=this._elements)!=null&&c.length)&&((l=this._input)==null||l.setAttribute("placeholder",this._dropdownPlaceholder))}_hidePlaceholder(){var t;this._placeHolder||(t=this._input)==null||t.removeAttribute("placeholder")}_handleValidity(){var a;const t=(a=this._input)==null?void 0:a.checkValidity();t!==void 0&&(this._inputValidity=t)}_cleanInput(){this._input&&(this._isFiltering=!1,this._input.value="",this._filteredElements=this._getFilteredElements(),this.requestUpdate())}render(){var l,h;const t={"dss-selector":!this._openWithSearch,"dss-selector--disabled":this._disabled,"dss-selector-dropdown":!0,"dss-selector--md":!this._openWithSearch&&this._inputSize==="md"},a={"dss-input-group--invalid":this._invalid||!this._inputValidity,"dss-input-group--required":this._required,"dss-input-group--disabled":this._disabled,"dss-input-group--focused":((l=this._input)==null?void 0:l.value)||this._placeHolder||this._isFocused,"dss-input-group--lg":this._inputSize==="lg","dss-input-group--md":this._inputSize==="md","dss-input-group--dropdown":!0,"dss-input-group--read-only":this._readonly,"dss-input-group--has-icon":this._icon&&this._icon!=="","dss-input-group--no-label":!this._label},c={"dss-input-help--invalid":this._invalid,"dss-input-help--disabled":this._disabled};return u` 
		<div class="dss-wrapper" style=${o(this._boxStyle??void 0)}>
      <div
        class="dss-input-group dss-input-group--dropdown ${e(a)}"
        role="combobox"
        aria-controls="dropdown-options"
        aria-expanded=${o(this._showDropdown)}
      >
        ${this._icon!==""?u`
              <span class="dss-icon dss-icon--md dss-input-icon"
                >${this._icon}</span
              >
            `:null}

        <slot
          name="input"
          @click=${this._handleClick}
          @input=${this._handleInput}
          @focusin=${this._handleFocusIn}
          @focusout=${this._handleFocusOut}
          @keydown=${this._handleKeyDown}
        ></slot>

        <slot name="label" @click=${this._focusInput}></slot>

        ${!this._openWithSearch&&!this._readonly?u`
              <button
                type="button"
                class="dss-icon-button dss-icon-button--primary dss-icon-button--md dss-input-group__action-button"
                @click=${this._toggleDropdown}
                ?disabled=${this._disabled}
                tabindex="-1"
              >
                <span class="dss-icon"
                  >${this._showDropdown?"keyboard_arrow_up":"keyboard_arrow_down"}</span
                >
              </button>
            `:this._openWithSearch?u`
              <button
                type="button"
                class="dss-icon-button dss-icon-button--primary dss-icon-button--sm dss-input-group__action-button dss-input-group__action-button--sm"
                @click=${this._cleanInput}
                ?disabled=${this._disabled||this._readonly}
                tabindex="-1"
              >
                <span class="dss-icon">close</span>
              </button>
            `:u``}
      </div>

      ${this._helpText&&!this._openWithSearch?u`
            <div class="dss-input-help ${e(c)}">
              <span>${this._helpText}</span>
            </div>
          `:null}
      ${this._showDropdown?u`
            <${dssSelector}
              ariaLabel="Llista d'elements"
              class="${e(t)}"
              .multiple=${this._multiple}
              .tick=${this._tick}
              .deselectable=${this._deselectable}
              .disabled=${this._disabled}
              .elements=${this._filteredElements}
              .filtre=${(h=this._input)==null?void 0:h.value}
              .filterThreshold=${this._filterThreshold}
              .selectedValue=${this._selectedValue}
              .type=${this._type}
              .labelSelectAll=${this._labelSelectAll}
              .labelDeselectAll=${this._labelDeselectAll}
              .selectAll=${this._selectAll}
              elementsSelected=${this._selectElements}
              boxStyle=${this._selectorStyle}
              @onValueChange="${this._onSelectorChanges}"
              @keydown="${p=>{p.key==="Escape"&&this._handleBlurSelector(this,p)}}"
              @focusout=${this._handleFocusOut}
            >
            </${dssSelector}>
          `:null}
    </div>`}}__decorateClass$I([n({type:String})],InputDropdown.prototype,"icon");__decorateClass$I([n({type:String})],InputDropdown.prototype,"placeHolder");__decorateClass$I([n(booleanType)],InputDropdown.prototype,"unorder");__decorateClass$I([n({type:Array})],InputDropdown.prototype,"elements");__decorateClass$I([n(booleanType)],InputDropdown.prototype,"multiple");__decorateClass$I([n(booleanType)],InputDropdown.prototype,"tick");__decorateClass$I([n(booleanType)],InputDropdown.prototype,"openWithSearch");__decorateClass$I([n(booleanType)],InputDropdown.prototype,"showDropdown");__decorateClass$I([n(booleanType)],InputDropdown.prototype,"deselectable");__decorateClass$I([n({type:Array})],InputDropdown.prototype,"selectedValue");__decorateClass$I([n({type:String})],InputDropdown.prototype,"type");__decorateClass$I([n({type:String})],InputDropdown.prototype,"boxStyle");__decorateClass$I([n({type:String})],InputDropdown.prototype,"selectorStyle");__decorateClass$I([n({type:String})],InputDropdown.prototype,"labelSelectAll");__decorateClass$I([n({type:String})],InputDropdown.prototype,"labelDeselectAll");__decorateClass$I([n(booleanType)],InputDropdown.prototype,"selectAll");__decorateClass$I([n(booleanType)],InputDropdown.prototype,"invalid");__decorateClass$I([n({type:String})],InputDropdown.prototype,"inputSize");__decorateClass$I([n({type:String})],InputDropdown.prototype,"helpText");__decorateClass$I([n({type:String})],InputDropdown.prototype,"dropdownPlaceholder");__decorateClass$I([n({type:String})],InputDropdown.prototype,"placeholderEmpty");__decorateClass$I([n({type:Number})],InputDropdown.prototype,"filterThreshold");const inputSwitchStyles=':host{display:inline-block;width:-moz-fit-content;width:fit-content}.dss-switch{display:flex;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;gap:.5rem;align-items:center;position:relative;transition:.3s all ease-in}.dss-switch--sm .dss-switch__slider{width:26px;height:16px}.dss-switch--md .dss-switch__slider{width:39px;height:24px}.dss-switch--lg .dss-switch__slider{width:52px;height:32px}::slotted(input[type="checkbox"]){display:none}.dss-switch .dss-switch__slider{position:relative;cursor:pointer;background-color:var(--color-neutral-500);border-radius:100px;transition:.3s all ease-in}.dss-switch .dss-switch__slider:focus-visible{outline:4px solid var(--color-blue-200)}.dss-switch .dss-switch__slider:before{position:absolute;content:"";display:flex;justify-content:center;align-items:center;background-color:#fff;border-radius:100%;box-shadow:0 1px 2px #0000000d,0 1px 3px 1px #0000001a;transition:.3s all ease-in}.dss-switch__slider:hover{background-color:var(--color-neutral-600)}.dss-switch__slider:active{background-color:var(--color-neutral-500);transition:none}.dss-switch--checked .dss-switch__slider{background-color:var(--color-primary-500)}.dss-switch--checked .dss-switch__slider:hover{background-color:var(--color-primary-600)}.dss-switch--checked .dss-switch__slider:active{background-color:var(--color-primary-400);transition:none}.dss-switch__slider:active:before{color:var(--color-neutral-500);transition:none}.dss-switch--checked .dss-switch__slider:active:before{color:var(--color-primary-400);transition:none}.dss-switch--disabled .dss-switch__slider{cursor:not-allowed;background-color:var(--color-neutral-200)}.dss-switch--disabled .dss-switch__slider:before{color:var(--color-neutral-500)}.dss-switch--disabled:not(.dss-switch--checked) .dss-switch__slider:before{background-color:var(--color-neutral-400);color:var(--color-neutral-100)}.dss-switch--disabled.dss-switch--checked .dss-switch__slider{background-color:var(--color-neutral-200)}.dss-switch--disabled.dss-switch--checked .dss-switch__slider:before{background-color:var(--color-neutral-400);color:var(--color-neutral-900)}.dss-switch--lg.dss-switch--disabled.dss-switch--checked .dss-switch__slider:before{background-color:var(--color-neutral-100)}.dss-switch--lg .dss-switch__slider:before{font-family:var(--font-icons);content:"close";color:var(--color-primary-500);font-size:16px;height:24px;width:24px;left:4px;bottom:4px}.dss-switch--md .dss-switch__slider:before{height:18px;width:18px;left:3px;bottom:3px}.dss-switch--sm .dss-switch__slider:before{height:12px;width:12px;left:2px;bottom:2px}.dss-switch--lg.dss-switch--checked .dss-switch__slider:before{transform:translate(20px);content:"done";color:var(--color-primary-500)}.dss-switch--md.dss-switch--checked .dss-switch__slider:before{transform:translate(15px)}.dss-switch--sm.dss-switch--checked .dss-switch__slider:before{transform:translate(10px)}::slotted(label){font-family:var(--font-family);font-style:normal;font-weight:400;font-size:14px;line-height:24px;color:var(--color-neutral-900)}.dss-switch--lg ::slotted(label){font-weight:600;font-size:16px}';var __defProp$H=Object.defineProperty,__getOwnPropDesc$H=Object.getOwnPropertyDescriptor,__decorateClass$H=(d,t,a,c)=>{for(var l=__getOwnPropDesc$H(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$H(t,a,l),l};class InputSwitch extends r$1{constructor(){super(...arguments),this._checked=!1,this._isCheckedPropDefined=!1,this._isFirstUpdate=!0,this._disabled=!1,this._readonly=!1,this._size="md",this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=t=>{for(const a of t)a.type==="attributes"&&(this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(iconStyles),r$2(inputSwitchStyles)]}get _input(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}set size(t){const a=this._size;this._size=t,this.requestUpdate("size",a)}set checked(t){const a=this._checked;this._checked=t,this._isCheckedPropDefined=!0,this._isFirstUpdate||this._dispatchChange(),this.requestUpdate("checked",a)}disconnectedCallback(){this.observer.disconnect()}_checkInputAttributes(){var c,l,h;if(!this._isCheckedPropDefined){const p=(c=this._input)==null?void 0:c.getAttribute("checked");this._checked=p!==null}const t=(l=this._input)==null?void 0:l.getAttribute("disabled");this._disabled=t!==null;const a=(h=this._input)==null?void 0:h.getAttribute("readonly");this._readonly=a!==null}_handleClick(){!this._disabled&&!this._readonly&&this._input&&(this._checked=!this._checked,this._checked?this._input.setAttribute("checked","true"):this._input.removeAttribute("checked"),this._dispatchChange())}_handleKeydown(t){(t.key==="Enter"||t.key===" ")&&this._handleClick()}_dispatchChange(){this.dispatchEvent(new CustomEvent("onChangeValue",{detail:this._checked,bubbles:!0,composed:!0}))}async firstUpdated(){try{await this.updateComplete,this._input&&(this._checkInputAttributes(),this.observer.observe(this._input,this.observerConfig)),this._isFirstUpdate=!1,this.requestUpdate()}catch{console.error("ERROR OCURRED")}}render(){const t={"dss-switch--sm":this._size==="sm","dss-switch--md":this._size==="md","dss-switch--lg":this._size==="lg","dss-switch--checked":this._checked,"dss-switch--disabled":this._disabled};return x`
      <div class="dss-switch ${e(t)}">
        <div
          class="dss-switch__slider"
          tabindex="${this._disabled?-1:0}"
          @keydown="${this._handleKeydown}"
          @click="${this._handleClick}"
        ></div>
        <slot name="input"></slot>
        <slot name="label" @click="${this._handleClick}"></slot>
      </div>
    `}}__decorateClass$H([n({type:String})],InputSwitch.prototype,"size");__decorateClass$H([n(booleanType)],InputSwitch.prototype,"checked");const dssBadge=i`dss-badge${s(getCustomElementSuffix())}`,itemListTemplate=d=>u`
  <div class="dss-item-list">
    ${d._items.map(t=>u`
        <div class="dss-item-list__item">
          <div class="item-details">
            <div class="item-details__title">
              ${t.decorativeIcon?u`
                    <div
                      class="dss-decorative-icon dss-decorative-icon--sm dss-decorative-icon--${t.decorativeIconType}"
                    >
                      <i class="dss-icon dss-icon--sm">${t.decorativeIcon}</i>
                    </div>
                  `:null}
              <span>${t.title}</span>
            </div>
            <div class="item-details__subtitle">${t.subtitle}</div>
          </div>

          ${t.badgeText?t.badgeIcon?u`
                  <div class="item-action">
                    <${dssBadge}
                      text="${t.badgeText}"
                      icon="${t.badgeIcon}"
                      size="${t.badgeSize?t.badgeSize:"sm"}"
                      state="${t.badgeState?t.badgeState:"undeterminated"}"
                    >
                    </${dssBadge}>
                  </div>
                `:u`
                  <div class="item-action">
                    <${dssBadge}
                      text="${t.badgeText}"
                      size="${t.badgeSize?t.badgeSize:"sm"}"
                      state="${t.badgeState?t.badgeState:"undeterminated"}"
                    >
                    </${dssBadge}>
                  </div>
                `:null}
          ${t.actionIcon?u`
                <div class="item-action">
                  <button
                    type="button"
                    class="dss-icon-button dss-icon-button--md dss-icon-button--primary dss-icon-button--${t.actionIconType}"
                    @click=${()=>d._dispatchItemAction(t)}
                  >
                    <span class="dss-icon">${t.actionIcon} </span>
                  </button>
                </div>
              `:null}
        </div>
      `)}
  </div>
`,itemListStyles=":host{display:block;width:100%;font-family:var(--font-family)}.dss-item-list{padding:0 var(--dss-spacing-md)}.dss-item-list__item{display:flex;align-items:center;gap:var(--dss-spacing-md);padding:var(--dss-spacing-xs) 0}.dss-item-list__item+.dss-item-list__item{border-top:var(--dss-border-width-sm) solid var(--color-neutral-200)}.item-details{flex:1;display:flex;flex-direction:column;gap:var(--dss-spacing-xxs)}.item-details__title{display:flex;align-items:center;gap:var(--dss-spacing-xs);font-size:14px;line-height:24px;color:var(--color-neutral-900);font-weight:var(--font-semibold)}.item-details__subtitle{font-size:14px;line-height:24px;color:var(--color-neutral-700);font-weight:var(--font-regular)}";var __defProp$G=Object.defineProperty,__getOwnPropDesc$G=Object.getOwnPropertyDescriptor,__decorateClass$G=(d,t,a,c)=>{for(var l=__getOwnPropDesc$G(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$G(t,a,l),l};class ItemList extends r$1{constructor(){super(...arguments),this._items=[]}static get styles(){return[r$2(iconStyles),r$2(iconButtonStyles),r$2(decorativeIconStyles),r$2(itemListStyles)]}set items(t){const a=this._items;this._items=t,this.requestUpdate("items",a)}_dispatchItemAction(t){const a={detail:t,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onClickItem",a))}render(){return itemListTemplate(this)}}__decorateClass$G([n({type:Array})],ItemList.prototype,"items");const modalStyles=":host{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;visibility:hidden;opacity:0;display:flex;justify-content:center;align-items:center;transition:opacity .25s;z-index:999}:host([open]){visibility:visible}:host(.show){opacity:1}:host(.hide){opacity:0}.dss-dialog{display:flex;flex-direction:column;box-sizing:border-box;width:-moz-fit-content;width:fit-content;min-width:400px;max-width:45%;max-height:80vh;background:var(--color-white);border-radius:var(--dss-radius-lg);box-shadow:0 8px 12px 6px #0000000d,0 4px 4px #0000001a;visibility:hidden}:host(.show) .dss-dialog{visibility:visible}.dss-dialog-header{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:var(--dss-spacing-lg);border-top-left-radius:var(--dss-radius-lg);border-top-right-radius:var(--dss-radius-lg)}.dss-dialog--sm .dss-dialog-header{padding:var(--dss-spacing-md)}.dss-dialog--has-header-slot .dss-dialog-header{gap:var(--dss-spacing-xs)}.dss-dialog-body{flex:1;padding:0 var(--dss-spacing-lg)}.dss-dialog.dss-dialog--has-scroll .dss-dialog-body{overflow-y:auto}.dss-dialog--footer-empty .dss-dialog-body{padding-bottom:var(--dss-spacing-lg)}.dss-dialog--sm .dss-dialog-body{padding:0 var(--dss-spacing-md)}.dss-dialog--sm.dss-dialog--footer-empty .dss-dialog-body{padding-bottom:var(--dss-spacing-md)}.dss-dialog-footer{display:flex;justify-content:center;align-items:center;gap:var(--dss-spacing-md);padding:var(--dss-spacing-lg);border-bottom-left-radius:var(--dss-radius-lg);border-bottom-right-radius:var(--dss-radius-lg)}.dss-dialog--sm .dss-dialog-footer{padding:var(--dss-spacing-md)}.dss-dialog--footer-empty .dss-dialog-footer{padding:0;border-top:0!important}::slotted(div.dss-modal-footer){display:flex;justify-content:center;align-items:center;gap:var(--dss-spacing-md)}.dss-dialog-header-state--success{color:var(--color-green-800)}.dss-dialog-header-state--error{color:var(--color-red-800)}.dss-dialog-header-state--alert{color:var(--color-yellow-800)}.dss-dialog-header-state--info{color:var(--color-blue-800)}.dss-dialog-header-title{font-size:20px;line-height:30px;font-weight:var(--font-bold)}.dss-dialog-header-close{position:absolute;top:50%;transform:translateY(-50%);right:calc(var(--dss-spacing-lg) - 4px)}.dss-dialog--sm .dss-dialog-header-close{right:calc(var(--dss-spacing-md) - 4px)}.dialog-header--extra{margin-top:var(--dss-spacing-sm)}.dss-dialog.dss-dialog--has-scroll .dss-dialog-header{background-color:var(--color-white);border-bottom:var(--color-white) solid var(--dss-border-width-sm);transition:border-top-color .25s ease-in-out}.dss-dialog.dss-dialog--has-scroll .dss-dialog-header.dss-dialog-header--scrolled{border-bottom-color:var(--color-neutral-100);box-shadow:0 1px 3px 1px #0000001a,0 1px 2px #0000000d}.dss-dialog.dss-dialog--has-scroll .dss-dialog-footer{background-color:var(--color-white);border-top:var(--color-white) solid var(--dss-border-width-sm);transition:border-top-color .25s ease-in-out;z-index:900}.dss-dialog.dss-dialog--has-scroll .dss-dialog-footer.dss-dialog-footer--scrolled{border-top-color:var(--color-neutral-100)}@media screen and (min-width: 1440px) and (max-width: 1919px){.dialog{max-width:50%}}@media only screen and (min-width: 1024px) and (max-width: 1439px){.dialog{max-width:60%}}@media only screen and (max-width: 1023px){.dialog{max-width:80%;min-width:300px}}",modalTemplate=d=>{const t={[`dss-dialog--${d._size}`]:!!d._size,"dss-dialog--has-header-slot":!!d._headerSlot,"dss-dialog--footer-empty":!d._footerSlot,"dss-dialog--has-scroll":d._hasScroll},a={"dss-dialog-header-state--success":d._state==="success","dss-dialog-header-state--error":d._state==="error","dss-dialog-header-state--alert":d._state==="alert","dss-dialog-header-state--info":d._state==="info"};return x`
    <div
      class="dss-dialog ${e(t)}"
      role="dialog"
      aria-labelledby="dss-dialog-title"
      aria-modal="true"
      style="${d._modalStyle}"
    >
      <div class="dss-dialog-header">
        ${d._hideCloseIcon?null:x`
              <button
                class="dss-icon-button dss-icon-button--default dss-icon-button--lg dss-dialog-header-close"
                @click="${d._close}"
              >
                <span class="dss-icon dss-icon--lg">close</span>
              </button>
            `}
        ${d._state?x`
              <div class="dss-dialog-header-state ${e(a)}">
                <i class="dss-icon dss-icon--fill dss-icon--xl "
                  >${d._getStateIcon()}</i
                >
              </div>
            `:null}
        <div id="dss-dialog-title" class="dss-dialog-header-title">
          ${d._modalTitle}
        </div>

        <div class="dss-dialog-header--extra">
          <slot name="header"></slot>
        </div>
      </div>

      <div class="dss-dialog-body">
        <slot name="body"></slot>
      </div>

      <div class="dss-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  `};var __defProp$F=Object.defineProperty,__getOwnPropDesc$F=Object.getOwnPropertyDescriptor,__decorateClass$F=(d,t,a,c)=>{for(var l=__getOwnPropDesc$F(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$F(t,a,l),l};const ANIMATION_DURATION=250;class Modal extends r$1{constructor(){super(),this._size="lg",this._open=!0,this._modalTitle="Title",this._state="",this._hasDivider=!1,this._hideCloseIcon=!1,this._hasScroll=!1,this._modalStyle=void 0,this._modalHeader=null,this._modalFooter=null,this._handleKeydown=this._handleKeydown.bind(this),this._handleOutsideClick=this._handleOutsideClick.bind(this)}static get styles(){return[r$2(iconStyles),r$2(buttonStyles),r$2(iconButtonStyles),r$2(modalStyles)]}set size(t){const a=this._size;this._size=t==="sm"?t:"lg",this.requestUpdate("size",a)}set open(t){const a=this._open;this._open=t,this.requestUpdate("open",a)}set modalTitle(t){const a=this._modalTitle;this._modalTitle=t,this.requestUpdate("modalTitle",a)}set state(t){const a=this._state;this._state=t,this.requestUpdate("state",a)}set hideCloseIcon(t){const a=this._hideCloseIcon;this._hideCloseIcon=t,this.requestUpdate("hideCloseIcon",a)}set hasScroll(t){const a=this._hasScroll;this._hasScroll=t,this.requestUpdate("hasScroll",a)}set modalStyle(t){const a=this._modalStyle;this._modalStyle=t,this.requestUpdate("modalStyle",a)}get _headerSlot(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="header"]'))||void 0;return t==null?void 0:t.assignedElements()[0]}get _footerSlot(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="footer"]'))||void 0;return t==null?void 0:t.assignedElements()[0]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}updated(t){t.has("open")&&(this._open?this._showDialog():this._hideDialog())}_showDialog(){this.classList.add("show"),this.classList.remove("hide"),setTimeout(()=>{this.classList.add("show"),this.style.visibility="visible"},0),document.addEventListener("keydown",this._handleKeydown),document.body.style.overflow="hidden"}_hideDialog(){this.classList.add("hide"),this.classList.remove("show"),setTimeout(()=>{this.classList.remove("hide"),this.style.visibility="hidden",document.removeEventListener("keydown",this._handleKeydown)},ANIMATION_DURATION),document.body.style.overflow=""}_close(){this.open=!1,this._hideDialog(),this.requestUpdate();const t=new Event("onModalClosed");this.dispatchEvent(t)}_getStateIcon(){let t="";switch(this._state){case"success":t="check_circle";break;case"error":t="cancel";break;case"alert":t="report";break;case"info":t="info";break;default:t=""}return t}_handleKeydown(t){t.key==="Escape"&&this._close()}_handleOutsideClick(t){var a;if(this._open){const c=(a=this.shadowRoot)==null?void 0:a.querySelector(".dss-dialog"),l=t.composedPath();c&&l.includes(this)&&!l.includes(c)&&this._close()}}fixEmptyFooter(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".dss-dialog");t!=null&&t.classList.contains("dss-dialog--footer-empty")&&this.requestUpdate()}_handleScroll(t){var c,l,h,p;const a=t.target;a&&(a.scrollTop>0?(c=this._modalHeader)==null||c.classList.add("dss-dialog-header--scrolled"):(l=this._modalHeader)==null||l.classList.remove("dss-dialog-header--scrolled"),a.scrollHeight-a.scrollTop!==a.clientHeight?(h=this._modalFooter)==null||h.classList.add("dss-dialog-footer--scrolled"):(p=this._modalFooter)==null||p.classList.remove("dss-dialog-footer--scrolled"))}async firstUpdated(){var a,c,l,h,p;await this.updateComplete,this._footerSlot&&this.fixEmptyFooter();const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".dss-dialog-body");if(this._hasScroll&&t){t.addEventListener("scroll",this._handleScroll.bind(this)),this._modalHeader=(c=this.shadowRoot)==null?void 0:c.querySelector(".dss-dialog-header"),this._modalFooter=(l=this.shadowRoot)==null?void 0:l.querySelector(".dss-dialog-footer");const b=this._modalHeader?this._modalHeader.clientHeight:0,g=this._modalFooter?this._modalFooter.clientHeight:0,w=(((p=(h=this.shadowRoot)==null?void 0:h.querySelector(".dss-dialog"))==null?void 0:p.clientHeight)||0)-b-g;t.scrollHeight>w&&this._modalFooter.classList.add("dss-dialog-footer--scrolled")}}render(){return modalTemplate(this)}}__decorateClass$F([n({type:String})],Modal.prototype,"size");__decorateClass$F([n(booleanType)],Modal.prototype,"open");__decorateClass$F([n({type:String})],Modal.prototype,"modalTitle");__decorateClass$F([n({type:String})],Modal.prototype,"state");__decorateClass$F([n(booleanType)],Modal.prototype,"hideCloseIcon");__decorateClass$F([n(booleanType)],Modal.prototype,"hasScroll");__decorateClass$F([n({type:String})],Modal.prototype,"modalStyle");const styles$d=".dss-notification-badge{height:20px;width:20px;border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:12px;font-weight:var(--font-semibold);color:var(--color-white);background-color:var(--color-red-500);transition:border-color .3s ease-in}.dss-notification-badge--dot{height:14px;width:14px}.dss-notification-badge--border-white{border:var(--dss-border-width-md) solid var(--color-white)}.dss-notification-badge--border-menu{border:var(--dss-border-width-md) solid var(--color-primary-700)}.dss-notification-badge--success{background-color:var(--color-green-500)}.dss-notification-badge--error{background-color:var(--color-red-500)}.dss-notification-badge--alert{background-color:var(--color-yellow-500);color:var(--color-neutral-900)}.dss-notification-badge--info{background-color:var(--color-blue-500)}.dss-notification-badge--brand{background-color:var(--color-primary-200);color:var(--color-neutral-900)}.dss-notification-badge--hover{border-color:var(--color-primary-900)}.dss-notification-badge--active{border-color:var(--color-primary-800)}";var __defProp$E=Object.defineProperty,__getOwnPropDesc$E=Object.getOwnPropertyDescriptor,__decorateClass$E=(d,t,a,c)=>{for(var l=__getOwnPropDesc$E(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$E(t,a,l),l};const dssIcon=i`dss-icon${s(getCustomElementSuffix())}`;class NotificationBadge extends r$1{constructor(){super(...arguments),this._icon=void 0,this._value="",this._state="default",this._type="default",this._dot=!1,this._borderMenu=!1,this._borderWhite=!1,this._isHover=!1,this._isActive=!1}static get styles(){return[r$2(styles$d)]}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}set value(t){const a=this._value;this._value=t,this.requestUpdate("value",a)}set state(t){const a=this._state;this._state=t,this.requestUpdate("state",a)}set dot(t){const a=this._dot;this._dot=t,this.requestUpdate("dot",a)}set type(t){const a=this._type;this._type=t,this.requestUpdate("type",a)}set menu(t){const a=this._borderMenu;this._borderMenu=t,this.requestUpdate("menu",a)}set borderMenu(t){const a=this._borderMenu;this._borderMenu=t,this.requestUpdate("borderMenu",a)}set borderWhite(t){const a=this._borderWhite;this._borderWhite=t,this.requestUpdate("borderWhite",a)}set isHover(t){const a=this._isHover;this._isHover=t,this.requestUpdate("isHover",a)}set isActive(t){const a=this._isActive;this._isActive=t,this.requestUpdate("isActive",a)}render(){const t={"dss-notification-badge--border-white":this._borderWhite,"dss-notification-badge--dot":this._dot,"dss-notification-badge--info":this._state==="info","dss-notification-badge--error":this._state==="error","dss-notification-badge--alert":this._state==="alert","dss-notification-badge--success":this._state==="success","dss-notification-badge--border-menu":this._borderMenu,"dss-notification-badge--hover":(this._borderMenu||this._borderWhite)&&this._isHover,"dss-notification-badge--active":(this._borderMenu||this._borderWhite)&&this._isActive,"dss-notification-badge--brand":this._type==="brand"};let a;return!this._dot&&this._icon?a=u`<${dssIcon} size="sm" icon="${this._icon}"></${dssIcon}>`:!this._dot&&this._value?a=u`<span class="dss-notification-badge-value"
        >${this._value}</span
      >`:a=null,u`
      <div class="dss-notification-badge ${e(t)}">
        ${a}
      </div>
    `}}__decorateClass$E([n({type:String})],NotificationBadge.prototype,"icon");__decorateClass$E([n({type:String})],NotificationBadge.prototype,"value");__decorateClass$E([n({type:String})],NotificationBadge.prototype,"state");__decorateClass$E([n(booleanType)],NotificationBadge.prototype,"dot");__decorateClass$E([n({type:String})],NotificationBadge.prototype,"type");__decorateClass$E([n(booleanType)],NotificationBadge.prototype,"menu");__decorateClass$E([n(booleanType)],NotificationBadge.prototype,"borderMenu");__decorateClass$E([n(booleanType)],NotificationBadge.prototype,"borderWhite");__decorateClass$E([n(booleanType)],NotificationBadge.prototype,"isHover");__decorateClass$E([n(booleanType)],NotificationBadge.prototype,"isActive");const styles$c=":host{width:100%;display:flex;justify-content:flex-end;height:-moz-fit-content;height:fit-content;font-family:var(--font-family);font-style:normal;box-shadow:0 -1px #d8d8d8}.pagination__container{display:flex;align-items:center;padding:.25rem .75rem;gap:.5rem}.pagination__container--md{padding:.25rem .75rem}.pagination__container--lg{padding:.5rem .75rem}.pagination__button{color:#0073e6;font-size:1rem;padding:0;align-items:center;background-color:transparent;border:none;border-radius:100%;cursor:pointer;display:flex;height:-moz-fit-content;height:fit-content;justify-content:center;transition:all .3s ease-in;width:-moz-fit-content;width:fit-content;font-family:var(--font-icons);width:1.5rem;height:1.5rem}.pagination__container--md .pagination__button{font-size:1rem;width:1.5rem;height:1.5rem}.pagination__container--lg .pagination__button{font-size:1.5rem;width:2rem;height:2rem}.pagination__button:hover:enabled{background-color:#bfddfa}.pagination__button:focus-visible:enabled{outline:.25rem solid #8fc2f5;transition:none}.pagination__button:active:enabled{background-color:#eff7ff;transition:none}.pagination__button:disabled{transition:none;opacity:.4;cursor:not-allowed}.pagination__item{display:flex;justify-content:center;align-items:center;background-color:transparent;border-radius:6.25rem;border:none;cursor:pointer;font-weight:600;color:#656565;font-family:var(--font-family);height:1.5rem;width:1.5rem;font-size:.75rem;line-height:1rem}.pagination__container--md .pagination__item{height:1.5rem;width:1.5rem;font-size:.75rem;line-height:1rem}.pagination__container--lg .pagination__item{height:2rem;width:2rem;font-size:1rem;line-height:1.5rem}.pagination__container--md .pagination__item--large{width:2rem}.pagination__container--lg .pagination__item--large{width:2.563rem}.pagination__item:hover:enabled,.pagination__item--selected{background:#bfddfa;color:#00356a}.pagination__item:hover:enabled{transition:all .3s ease-in}.pagination__item:active:enabled{background:#eff7ff;transition:none}.pagination__item:focus-visible:enabled{outline:.25rem solid #8fc2f5;transition:none}.pagination__item--dot{pointer-events:none}";var __defProp$D=Object.defineProperty,__getOwnPropDesc$D=Object.getOwnPropertyDescriptor,__decorateClass$D=(d,t,a,c)=>{for(var l=__getOwnPropDesc$D(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$D(t,a,l),l};class Pagination extends r$1{constructor(){super(...arguments),this._length=0,this._pageSize=0,this._totalPages=0,this._currentIndex=1,this._size="md",this._buttons=[]}static get styles(){return r$2(styles$c)}set length(t){const a=this._length;this._length=t,this.requestUpdate("length",a)}set pageSize(t){const a=this._pageSize;this._pageSize=t,this.requestUpdate("pageSize",a)}set size(t){const a=this._size;this._size=t,this.requestUpdate("size",a)}set currentIndex(t){const a=this._currentIndex;this._currentIndex=t,this.requestUpdate("currentIndex",a)}_next(){this._currentIndex++,this._updateButtons(),this._emitCurrentPage()}_prev(){this._currentIndex--,this._updateButtons(),this._emitCurrentPage()}_emitCurrentPage(){this.dispatchEvent(new CustomEvent("onChangePage",{detail:this._currentIndex,bubbles:!0,composed:!0}))}_updateButtons(){this._buttons=[];const t=1,a=Math.max(this._currentIndex-1,1),c=Math.min(this._currentIndex+1,this._totalPages),l=a>2,h=c<this._totalPages-2,p=this._getButtons(t,t),b=this._getButtons(this._totalPages,this._totalPages),g=x`
      <button class="pagination__item pagination__item--dot" tabindex="-1">
        ...
      </button>
    `;if(this._totalPages<=6){this._buttons=this._getButtons(t,this._totalPages),this.requestUpdate();return}if(!l&&h){const w=this._getButtons(t,4);this._buttons=[...w,g,b]}if(l&&!h){const w=this._getButtons(this._totalPages-3,this._totalPages);this._buttons=[p,g,...w]}if(l&&h){const m=this._getButtons(a+1,c);this._buttons=[p,g,...m,g,b]}this.requestUpdate()}_getButtons(t,a){const c=a-t+1;return Array(c).fill(0).map((l,h)=>{if(l){const p=h+t,b={"pagination__item--selected":this._currentIndex===p,"pagination__item--large":p>=10};return x`
            <button
              class="pagination__item ${e(b)}"
              @click=${()=>this._selectItem(p)}
              >
              ${p}
            </button>
          `}})}_selectItem(t){this._currentIndex=t,this._updateButtons()}async firstUpdated(){try{await this.updateComplete,this._totalPages=Math.ceil(this._length/this._pageSize),this._updateButtons()}catch{console.error("ERROR OCURRED")}}willUpdate(t){const a=t.has("length"),c=t.has("pageSize");(a||c)&&(this._totalPages=Math.ceil(this._length/this._pageSize),this._updateButtons())}render(){return x`
      <div class="pagination__container pagination__container--${this._size}">
        <button
          type="button"
          class="pagination__button"
          @click=${this._prev}
          ?disabled=${+this._currentIndex==1}
        >
          <span>keyboard_arrow_left</span>
        </button>
        ${this._buttons}
        <button
          type="button"
          class="pagination__button"
          @click=${this._next}
          ?disabled=${+this._currentIndex===this._totalPages}
        >
          <span>keyboard_arrow_right</span>
        </button>
      </div>
    `}}__decorateClass$D([n({type:Number})],Pagination.prototype,"length");__decorateClass$D([n({type:Number})],Pagination.prototype,"pageSize");__decorateClass$D([n({type:String})],Pagination.prototype,"size");__decorateClass$D([n({type:Number})],Pagination.prototype,"currentIndex");const styles$b=":host{display:inline-block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.dss-progress-indicator{display:flex;flex-direction:column;gap:8px;width:100%;font-family:var(--font-family)}.dss-progress-indicator.dss-progress-indicator--error .dss-progress-indicator__progress{background:#b60000}.dss-progress-indicator.dss-progress-indicator--error .dss-progress-indicator__description{color:#b60000}.dss-progress-indicator.dss-progress-indicator--success .dss-progress-indicator__progress{background:#00893d}.dss-progress-indicator.dss-progress-indicator--success .dss-progress-indicator__description{color:#00893d}.dss-progress-indicator__title{font-size:14px;font-weight:600;line-height:24px;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dss-progress-indicator__bar{background:#f5f5f5;border-radius:100px;height:2px}.dss-progress-indicator__progress{height:100%;background:#007cbe;transition:all .3s}.dss-progress-indicator__content{display:flex;font-size:14px;line-height:24px;font-style:normal}.dss-progress-indicator__description{font-weight:400;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .3s}.dss-progress-indicator__percentage{font-weight:600;margin-left:8px}";var __defProp$C=Object.defineProperty,__getOwnPropDesc$C=Object.getOwnPropertyDescriptor,__decorateClass$C=(d,t,a,c)=>{for(var l=__getOwnPropDesc$C(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$C(t,a,l),l};class ProgressIndicator extends r$1{constructor(){super(...arguments),this._hasFailed=!1,this._title="",this._description="",this._percentage=0}static get styles(){return r$2(styles$b)}set hasFailed(t){const a=this._hasFailed;this._hasFailed=t,this.requestUpdate("hasFailed",a)}set title(t){const a=this._title;this._title=t,this.requestUpdate("title",a)}set description(t){const a=this._description;this._description=t,this.requestUpdate("description",a)}set percentage(t){const a=Math.min(100,Math.max(0,t)),c=this._percentage;this._percentage=a,this.requestUpdate("percentage",c)}render(){const t={"dss-progress-indicator--error":this._hasFailed,"dss-progress-indicator--success":!this._hasFailed&&this._percentage===100};return x`
      <div class="dss-progress-indicator${e(t)}">
        ${this._title?x`<h2 class="dss-progress-indicator__title">${this._title}</h2>`:null}
        <div class="dss-progress-indicator__bar" id="bar">
          <div
            class="dss-progress-indicator__progress"
            style="width:${this._percentage}%"
          ></div>
        </div>
        <div class="dss-progress-indicator__content">
          <span class="dss-progress-indicator__description">
            ${this._description}
          </span>
          <span class="dss-progress-indicator__percentage">
            ${this._percentage}%
          </span>
        </div>
      </div>
    `}}__decorateClass$C([n(booleanType)],ProgressIndicator.prototype,"hasFailed");__decorateClass$C([n({type:String})],ProgressIndicator.prototype,"title");__decorateClass$C([n({type:String})],ProgressIndicator.prototype,"description");__decorateClass$C([n({type:Number})],ProgressIndicator.prototype,"percentage");const chipStyles=".dss-chip{box-sizing:border-box;padding:var(--dss-spacing-xxs) var(--dss-spacing-sm);font-size:14px;font-weight:var(--font-semibold);border-radius:var(--dss-radius-xl);border:var(--dss-border-width-sm) solid var(--color-primary-700);color:var(--color-primary-700);display:flex;align-items:center;line-height:var(--line-24);background-color:var(--color-white);transition:.3s all ease-in;gap:var(--dss-spacing-xxs);cursor:default;width:-moz-fit-content;width:fit-content;height:32px;overflow:hidden;text-wrap:nowrap}.dss-chip__icon{font-size:16px}.dss-chip.disabled{cursor:not-allowed;outline:none;border-color:var(--color-neutral-500);color:var(--color-neutral-500);background-color:var(--color-white)}.dss-chip.disabled .dss-chip__icon-button{pointer-events:none;color:var(--color-neutral-500)}.dss-chip.dss-chip--sm{height:24px;font-size:12px;padding:var(--dss-spacing-xxs) var(--dss-spacing-xs);line-height:var(--line-16);gap:var(--dss-spacing-xxs)}.dss-chip.dss-chip--sm:has(.dss-chip__icon-button){padding-right:var(--dss-spacing-xxs)}.dss-chip.dss-chip--sm:has(.dss-chip__icon){padding-left:var(--dss-spacing-xxs)}.dss-chip.dss-chip--selected,.dss-chip.dss-chip--active{box-shadow:none;background-color:var(--color-primary-100)}.dss-chip.dss-chip--selected.disabled,.dss-chip.dss-chip--active.disabled{background-color:var(--color-white)}.dss-chip:not(.disabled):focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200);transition:none;box-shadow:none}.dss-chip:not(.disabled):hover{box-shadow:none;background-color:var(--color-primary-50)}.dss-chip:not(.disabled):active{background-color:var(--color-primary-50);transition:none}.dss-chip:has(.dss-chip__icon-button){padding-right:var(--dss-spacing-xs)}.dss-chip:has(.dss-chip__icon){padding-left:var(--dss-spacing-sm)}",styles$a=':host{width:100%}.dss-search{position:relative}.dss-search-bar{position:relative;display:grid;grid-template-columns:30px 1fr;min-height:48px;height:auto;width:100%;box-sizing:border-box;padding:var(--dss-spacing-sm);padding-right:calc((var(--dss-spacing-sm) * 2) + var(--icon-size-md));background-color:var(--color-white);border-radius:var(--dss-radius-sm);border:var(--dss-border-width-sm) solid var(--color-neutral-100);font-size:14px;font-family:inherit}.dss-search-bar--md{min-height:40px;padding-top:var(--dss-spacing-tiny);padding-bottom:var(--dss-spacing-tiny)}.dss-search-bar--focused{border-color:var(--color-blue-200);outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-search-bar--read-only{border-top:0;border-left:0;border-right:0;border-radius:0}.dss-search-bar--invalid{background-color:var(--color-red-50);border-color:var(--color-red-500)}.dss-search-bar--disabled{cursor:not-allowed;background-color:var(--color-neutral-50);color:var(--color-neutral-500)}.dss-search-bar__icon{color:var(--color-neutral-700);box-sizing:border-box;display:flex;justify-content:flex-start;align-items:center}.dss-search-bar--default .dss-search-bar__container{display:block}.dss-search-bar--md.dss-search-bar--default .dss-search-bar__container ::slotted(input){min-height:40px}.dss-search-bar--multiple .dss-search-bar__container{display:grid;grid-template-columns:auto minmax(min-content,1fr);gap:var(--dss-spacing-xs)}.dss-search-bar--multiple .dss-search-bar__chips{display:flex;flex-wrap:wrap;align-items:center;gap:var(--dss-spacing-xs)}.dss-search-bar__chips .dss-chip{display:inline-flex}.dss-search-bar__input{min-width:200px}::slotted(label){display:none;visibility:hidden;width:0}::slotted(input){height:100%;width:100%;margin:0;border:0;border-radius:0;color:var(--color-neutral-900);box-sizing:border-box;background-color:transparent}::slotted(input:focus-visible){outline:0}.dss-search-bar__clear{display:none;position:absolute;top:0;right:var(--dss-spacing-sm);height:100%;justify-content:center;align-items:center;box-sizing:border-box}.dss-search-bar--has-value:not(.dss-search-bar--disabled):not(.dss-search-bar--read-only) .dss-search-bar__clear{display:flex}.dss-search-help{display:flex;justify-content:space-between;font-family:var(--font-family);font-size:12px;color:var(--color-neutral-700);padding:var(--dss-spacing-xxs) var(--dss-spacing-sm)}.dss-search-bar--invalid+.dss-search-help{color:var(--color-red-500)}.dss-search-dropdown{margin-top:8px;position:absolute;top:52px;left:0;background-color:var(--color-white);width:100%;border-radius:var(--dss-radius-sm);box-shadow:0 4px 8px 3px #0000000d,0 1px 3px #0000001a;z-index:800;overflow:hidden}.dss-search-catalog--empty{height:150px;display:flex;justify-content:center;align-items:center;gap:var(--dss-spacing-xs);color:var(--color-blue-800)}.dss-search-catalog--empty .text{font-size:14px}.dss-catalog-item{box-sizing:border-box;display:flex;justify-content:flex-start;align-items:center;padding:var(--dss-spacing-sm) var(--dss-spacing-md);gap:var(--dss-spacing-xs);cursor:pointer}.dss-catalog-item:hover{background-color:var(--color-neutral-50)}.dss-catalog-item--selected{background-color:var(--color-primary-50)}.dss-catalog-item:focus-visible{border:var(--dss-border-width-lg) solid var(--color-blue-200);outline:0}.dss-search-title{padding:var(--dss-spacing-sm) var(--dss-spacing-md) 0;font-weight:var(--font-semibold);font-size:14px;color:var(--color-black)}.dss-catalog-item__icon{color:var(--color-neutral-900)}.dss-catalog-item__text{color:var(--color-neutral-900);font-size:16px}.dss-search-bar:not(.dss-search-bar--show-chips) .dss-search-bar__chips .dss-chip.dss-chip--hide{display:none}.dss-search-bar__chips .dss-chip__counter{cursor:pointer;position:relative;box-sizing:border-box;font-weight:var(--font-semibold);border-radius:var(--dss-radius-xl);border:var(--dss-border-width-sm) solid var(--color-primary-700);box-shadow:none;background-color:var(--color-primary-100);transition:.3s all ease-in;height:24px;font-size:12px;padding:var(--dss-spacing-xxs) var(--dss-spacing-xs);line-height:var(--line-16)}.dss-search-bar__chips .dss-chip__counter:hover{background-color:var(--color-primary-50)}.dss-chip__tooltip{display:none}.dss-chip__tooltip-item{margin-right:var(--dss-spacing-xxs)}.dss-chip__tooltip-item:not(:last-child):after{content:","}.dss-search-bar__chips .dss-chip__counter:hover .dss-chip__tooltip{display:block}';var __defProp$B=Object.defineProperty,__getOwnPropDesc$B=Object.getOwnPropertyDescriptor,__decorateClass$B=(d,t,a,c)=>{for(var l=__getOwnPropDesc$B(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$B(t,a,l),l};class SearchBar extends r$1{constructor(){super(...arguments),this._multiple=!1,this._icon="search",this._placeholder="Escriu per cercar",this._inputSize="lg",this._invalid=!1,this._helpText="",this._isFocused=!1,this._showClearButton=!1,this._threshold=3,this._searchTerms=[],this._catalog=[],this._filteredCatalog=[],this._showDropdown=!1,this._isCatalogLoading=!1,this._emptyDropdownText="Sense resultats per",this._recentSearches=!1,this._recentSearchesText="Últimes cerques",this._dropdownStyle="",this._searchboxStyle="",this._showAllChips=!1,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=t=>{for(const a of t)a.type==="attributes"&&this.requestUpdate()},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(iconStyles),r$2(iconButtonStyles),r$2(chipStyles),r$2(styles$a)]}get _input(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}set multiple(t){const a=this._multiple;this._multiple=t,this.requestUpdate("multiple",a)}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}set inputSize(t){const a=this._inputSize;t==="md"?this._inputSize=t:this._inputSize="lg",this.requestUpdate("inputSize",a)}set helpText(t){const a=this._helpText;this._helpText=t,this.requestUpdate("helpText",a)}set invalid(t){const a=this._invalid;t?this._invalid=t:this._invalid=this._inputValidity?t:!0,this.requestUpdate("invalid",a)}set threshold(t){const a=this._threshold;this._threshold=t,this.requestUpdate("threshold",a)}set searchTerms(t){const a=this._searchTerms;this._searchTerms=t,this.requestUpdate("searchTerms",a)}set catalog(t){const a=this._catalog;this._catalog=t,this.requestUpdate("catalog",a)}set emptyDropdownText(t){const a=this._emptyDropdownText;this._emptyDropdownText=t,this.requestUpdate("emptyDropdownText",a)}set recentSearchesText(t){const a=this._recentSearchesText;this._recentSearchesText=t,this.requestUpdate("recentSearchesText",a)}set recentSearches(t){const a=this._recentSearches;this._recentSearches=t,this.requestUpdate("recentSearches",a)}set isCatalogLoading(t){const a=this._isCatalogLoading;this._isCatalogLoading=t,this.requestUpdate("isCatalogLoading",a)}set dropdownStyle(t){const a=this._dropdownStyle;this._dropdownStyle=t,this.requestUpdate("dropdownStyle",a)}_getSearchStyle(){return`top: ${this.renderRoot.querySelectorAll(".dss-search-bar")[0].offsetHeight+4}px; ${this._dropdownStyle}`}get _inputValidity(){var t;return this._input&&this._input.value!==""?(t=this._input)==null?void 0:t.checkValidity():!0}_handleClick(){this.requestUpdate()}_handleInput(){let t=this._input.value;t.length>=this._threshold?(this._showDropdown=!0,this._filteredCatalog=this._getFilterCatalog(t),this._multiple&&t.endsWith(",")&&(t=t.slice(0,-1),this._searchTerms.push(t),this._input.value="",this._searchTerms.length&&this._dispatchSearchChange()),this._searchboxStyle=this._getSearchStyle(),this.requestUpdate()):this._hideDropdown(),this.requestUpdate()}_handleFocusIn(){this._isFocused=!0,this._showClearButton=!0,this.requestUpdate()}_handleFocusOut(){this._isFocused=!1,this._showClearButton=!1,this.requestUpdate()}_handleKeyDown(t){(t==null?void 0:t.key)==="Enter"?(this._showDropdown=!0,!this._multiple&&this._input.value!==""&&(this._searchTerms=[],this._searchTerms.push(this._input.value),this._dispatchSearchChange(),this._showDropdown=!1),this._searchboxStyle=this._getSearchStyle()):(t==null?void 0:t.key)==="Escape"&&(this._showDropdown=!1),this.requestUpdate()}_focusInput(){var t;(t=this._input)==null||t.focus()}_clearSearch(){this._input&&(this._input.value="",this._input.focus()),this._searchTerms=[],this._dispatchSearchChange(),this._hideDropdown(),this.requestUpdate()}_hideDropdown(){this._showDropdown=!1,this._filteredCatalog=[]}_getFilterCatalog(t){return this._catalog.filter(a=>a.value.toLowerCase().includes(t.toLowerCase()))}_generateSearchChips(){let t=0;return this._searchTerms.map(c=>{var b,g,m,w,v;const l=f=>{const y=f.target.getAttribute("term");this._searchTerms=this._searchTerms.filter(k=>k!==y),this._dispatchSearchChange(),this.requestUpdate()};t+=1;const h={disabled:((b=this._input)==null?void 0:b.disabled)||((g=this._input)==null?void 0:g.readOnly),"dss-chip--selected":!((m=this._input)!=null&&m.disabled)&&!((w=this._input)!=null&&w.readOnly),"dss-chip--hide":t>5};return x`
        <span tabindex="0" class="dss-chip dss-chip--sm ${e(h)}">
          ${c}
          <button
            class="dss-chip__icon-button dss-icon-button dss-icon-button--primary dss-icon-button--sm"
            ?disabled=${(v=this._input)==null?void 0:v.disabled}
            @click="${l}"
          >
            <span class="dss-icon dss-icon--sm" term="${c}">cancel</span>
          </button>
        </span>
      `})}_generateFilterCatalog(){let t=!0;return this._filteredCatalog.map(c=>{const l=v=>{const f=v.target.getAttribute("value");f&&(this._multiple?this._searchTerms.includes(f)?this._searchTerms=this._searchTerms.filter(k=>k!==f):this._searchTerms.push(f):(this._input.value=f,this._showDropdown=!1,this._searchTerms=[],this._searchTerms.push(f)),this.requestUpdate(),this._dispatchSearchChange())},h=v=>{v&&v.focus()},p=v=>{let f=0;const y=this.renderRoot.querySelectorAll(".dss-catalog-item"),k=y.length-1;v===y[0]?h(y[k]):(y.forEach(($,_)=>{$===v&&(f=_)}),h(y[f-1]))},b=v=>{let f=0;const y=this.renderRoot.querySelectorAll(".dss-catalog-item"),k=y.length-1;v===y[k]?h(y[0]):(y.forEach(($,_)=>{$===v&&(f=_)}),h(y[f+1]))},g=v=>{const f=v.currentTarget,y=v;let k=!1;switch(y.key){case"ArrowUp":p(f),k=!0;break;case"ArrowDown":b(f),k=!0;break;case"Enter":const $=v.target,_=this.renderRoot.querySelector('.dss-catalog-item[tabindex="0"]');_==null||_.setAttribute("tabindex","-1"),v.target.setAttribute("tabindex","0"),$.click(),k=!0;break}k&&(v.stopPropagation(),v.preventDefault())},m={"dss-catalog-item--selected":this._searchTerms.includes(c.value)},w=x`
        <div
          class="dss-catalog-item ${e(m)}"
          value="${c.value}"
          tabindex="${t?0:-1}"
          @click="${l}"
          @keydown=${g}
        >
          ${c.icon?x`
                <span
                  class="dss-icon dss-icon--md dss-catalog-item__icon"
                  value="${c.value}"
                  >${c.icon}</span
                >
              `:null}
          <span class="dss-catalog-item__text" value="${c.value}"
            >${c.value}</span
          >
        </div>
      `;return t=!1,w})}_dispatchSearchChange(){const t={detail:this._searchTerms,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onSearchChange",t))}_closeDropdown(){document.addEventListener("click",t=>{t.target!==this&&t.target!==this._input&&(this._showDropdown=!1,this.requestUpdate())}),document.addEventListener("focusout",t=>{const a=t.relatedTarget;a!==null&&a!==this&&a!==this._input&&(this._showDropdown=!1,this.requestUpdate())})}disconnectedCallback(){this.observer.disconnect()}async firstUpdated(){var t,a;try{await this.updateComplete,this._input&&(this.observer.observe(this._input,this.observerConfig),(t=this._input)!=null&&t.getAttribute("placeholder")||(a=this._input)==null||a.setAttribute("placeholder",this._placeholder),this._closeDropdown(),this._searchboxStyle=this._getSearchStyle(),this.requestUpdate())}catch{console.error("ERROR OCURRED")}}render(){var l,h,p,b;const t={"dss-search-bar--invalid":this._invalid||!this._inputValidity,"dss-search-bar--disabled":(l=this._input)==null?void 0:l.disabled,"dss-search-bar--required":(h=this._input)==null?void 0:h.required,"dss-search-bar--read-only":(p=this._input)==null?void 0:p.readOnly,"dss-search-bar--focused":this._isFocused,"dss-search-bar--default":!this._multiple,"dss-search-bar--multiple":this._multiple,"dss-search-bar--show-chips":this._showAllChips,"dss-search-bar--md":this._inputSize==="md","dss-search-bar--has-value":this._showClearButton||((b=this._input)==null?void 0:b.value)||this._searchTerms.length>0},a={},c={};return x`
      <div class="dss-search">
        <div
          class="dss-search-bar ${e(t)}"
          role="combobox"
          aria-controls="search-catalog"
          aria-expanded=${o(this._showDropdown)}
        >
          <div class="dss-search-bar__icon">
            <span class="dss-icon dss-icon--md " @click=${this._focusInput}>
              ${this._icon}
            </span>
          </div>

          <div class="dss-search-bar__container">
            ${this._multiple?x`
                  <div class="dss-search-bar__chips">
                    ${x`${this._generateSearchChips()}`}
                    ${!this._showAllChips&&this._searchTerms.length>5?x`
                          <div class="dss-chip__counter">
                            +${this._searchTerms.length-5}
                            <dss-tooltip
                              class="dss-chip__tooltip"
                              position="bottom"
                              align="left"
                              noHeightLimit
                            >
                              ${this._searchTerms.slice(5,this._searchTerms.length).map(g=>x`<span class="dss-chip__tooltip-item">
                                      ${g}
                                    </span>`)}
                            </dss-tooltip>
                          </div>
                        `:null}
                  </div>
                `:null}

            <div class="dss-search-bar__input">
              <slot name="label" @click=${this._focusInput}></slot>
              <slot
                name="input"
                @click=${this._handleClick}
                @input=${this._handleInput}
                @keydown=${this._handleKeyDown}
                @focusin=${this._handleFocusIn}
                @focusout=${this._handleFocusOut}
              ></slot>
            </div>
          </div>

          <div class="dss-search-bar__clear">
            <button
              class="dss-icon-button dss-icon-button--primary dss-icon-button--md"
              @click="${this._clearSearch}"
            >
              <span class="dss-icon">cancel</span>
            </button>
          </div>
        </div>

        ${this._helpText?x`
              <div class="dss-search-help ${e(a)}">
                <span>${this._helpText}</span>
              </div>
            `:null}
        ${this._showDropdown&&this._catalog&&this._input.value.length>=this._threshold?x`
              <div
                id="search-catalog"
                class="dss-search-dropdown ${e(c)}"
                style=${o(this._searchboxStyle)}
                role="listbox"
                aria-label="Search Catalog"
              >
                ${this._isCatalogLoading?x`
                      <div class="dss-search-catalog--empty">
                        <dss-spinner size="md"></dss-spinner>
                      </div>
                    `:x`
                      ${this._filteredCatalog.length>0?x`
                            ${this._recentSearches?x`
                                  <div class="dss-search-title">
                                    ${this._recentSearchesText}
                                  </div>
                                `:null}
                            <div class="dss-search-catalog">
                              ${x`${this._generateFilterCatalog()}`}
                            </div>
                          `:x`
                            <div
                              class="dss-search-catalog dss-search-catalog--empty"
                            >
                              <span class="dss-icon dss-icon--sm">info</span>
                              <span class="text">
                                ${this._emptyDropdownText}: ${this._input.value}
                              </span>
                            </div>
                          `}
                    `}
              </div>
            `:null}
      </div>
    `}}__decorateClass$B([n(booleanType)],SearchBar.prototype,"multiple");__decorateClass$B([n({type:String})],SearchBar.prototype,"icon");__decorateClass$B([n({type:String})],SearchBar.prototype,"inputSize");__decorateClass$B([n({type:String})],SearchBar.prototype,"helpText");__decorateClass$B([n(booleanType)],SearchBar.prototype,"invalid");__decorateClass$B([n({type:Number})],SearchBar.prototype,"threshold");__decorateClass$B([n({type:Array})],SearchBar.prototype,"searchTerms");__decorateClass$B([n({type:Array})],SearchBar.prototype,"catalog");__decorateClass$B([n({type:String})],SearchBar.prototype,"emptyDropdownText");__decorateClass$B([n({type:String})],SearchBar.prototype,"recentSearchesText");__decorateClass$B([n(booleanType)],SearchBar.prototype,"recentSearches");__decorateClass$B([n(booleanType)],SearchBar.prototype,"isCatalogLoading");__decorateClass$B([n({type:String})],SearchBar.prototype,"dropdownStyle");const styles$9='.dss-icon--checked:before{content:"done";font-family:var(--font-icons);font-weight:400;color:var(--color-white);font-size:24px;vertical-align:middle}.dss-type--default.dss-selected{background-color:var(--color-primary-500)}.dss-type--green.dss-selected{background-color:var(--color-green-500)}.dss-selected label{color:var(--color-white)!important}.list{width:auto;border-radius:8px;margin-top:1px;background-color:#fff;color:var(--color-neutral-900);box-shadow:0 0 0 .063rem #d8d8d8,0 0 0 .063rem #d8d8d8}.list .dss-form-field:first-child{border-radius:8px 8px 0 0}.list .dss-form-field:last-child{border-radius:0 0 8px 8px}.list *{cursor:pointer}.list .disabled,.list .disabled *{cursor:inherit!important;color:var(--color-neutral-500)}.dss-disabled{opacity:.4;cursor:not-allowed}.hidden{opacity:0;position:absolute}.dss-checkbox,.dss-table .dss-table__checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.0625rem solid var(--color-neutral-500);border-radius:.125rem;cursor:pointer;flex-shrink:0;height:1.25rem!important;margin:.125rem;overflow:hidden;position:relative;transition:all .3s linear;width:1.25rem!important}.dss-checkbox:hover{border:.0625rem solid var(--color-neutral-600);transition:all .3s linear}.dss-checkbox:checked{background-color:var(--color-primary-500);border:.0625rem solid var(--color-primary-500)}.dss-checkbox:checked:before{position:absolute;top:-4px;left:-2px;color:var(--color-white);content:"check";font-family:var(--font-icons);font-size:1.375rem;text-align:center}.dss-checkbox:checked:hover{background-color:var(--color-primary-600);border:.0625rem solid var(--color-primary-600);transition:all .3s linear}.dss-checkbox:indeterminate:before{color:var(--color-white);content:"remove";font-family:var(--font-icons);font-size:1.125rem}.dss-checkbox:disabled{cursor:not-allowed;opacity:.4}.dss-form-field__focus{outline:.25rem solid var(--color-blue-200);outline-offset:-4px;transition:none}.dss-radio:focus-visible:enabled,.dss-checkbox:focus-visible:enabled{outline:none}.dss-radio,.dss-table .dss-table__radio{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--color-white);border:.0625rem solid var(--color-neutral-500);border-radius:50%;color:var(--color-primary-500);cursor:pointer;display:grid;flex-shrink:0;height:1.25rem;margin:4px .125rem 0;place-content:center;transform:translateY(-.075em);transition:all .3s linear;width:1.25rem}.dss-radio:before{background-color:var(--color-white);border-radius:50%;box-shadow:inset 1rem 1rem var(--color-primary-500);content:"";height:.625rem;transform:scale(0);transition:transform .3s ease-in-out;width:.625rem}.dss-radio:checked{border:.0625rem solid var(--color-primary-500)}.dss-radio:checked:before{box-shadow:inset 1rem 1rem var(--color-primary-500);transform:scale(1)}.dss-radio:checked:hover{border:.0625rem solid var(--color-primary-600);transition:all .3s linear}.dss-radio:checked:hover:before{box-shadow:inset 1rem 1rem var(--color-primary-600);transform:scale(1);transition:all .3s linear}.dss-radio:checked:disabled{cursor:not-allowed;opacity:.4}.dss-radio:hover{border:.0625rem solid var(--color-neutral-600);transition:all .3s linear}.dss-radio:disabled{cursor:not-allowed;opacity:.4}.dss-form-field{align-items:center;display:flex;gap:8px;cursor:pointer;min-height:24px;min-width:136px;padding:8px 12px;position:relative;word-break:break-word}.dss-form-field.dss-ticked{justify-content:space-between}.dss-form-field.dss-selectAll{background-color:var(--color-white);border-bottom:.8px solid #b1b1b1;position:sticky;top:0;z-index:1}.dss-form-field.dss-first-unselected{border-top:.8px solid #b1b1b1}.dss-type--default:hover{background-color:var(--color-primary-100)}.dss-type--green:hover{background-color:var(--color-green-100)}.dss-type--default.dss-selected:hover{background-color:var(--color-primary-400)}.dss-type--green.dss-selected:hover{background-color:var(--color-green-400)}.dss-form-field label{font-size:.875rem;line-height:var(--line-24)}.dss-form-field:not(.dss-form-field--selected) label span.bold{font-weight:var(--font-bold)}.dss-form-field .dss-check-overlay{width:24px;height:24px;position:absolute}.dss-selector-list-wrapper{overflow-y:auto;margin-bottom:var(--dss-spacing-xxs);width:100%}.dss-selector-empty{box-sizing:border-box;min-height:150px;width:100%;max-width:100%;display:flex;justify-content:center;align-items:center;padding:var(--dss-spacing-xs);gap:var(--dss-spacing-xs)}.dss-selector-empty .text{font-size:14px;color:var(--color-blue-800)}';var __defProp$A=Object.defineProperty,__getOwnPropDesc$A=Object.getOwnPropertyDescriptor,__decorateClass$A=(d,t,a,c)=>{for(var l=__getOwnPropDesc$A(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$A(t,a,l),l};class Selector extends r$1{constructor(){super(...arguments),this._elementId=`dss-selector-${new Date().getTime()}`,this._elements=null,this._elementSelectAll=[],this._selectedValue=null,this._multiple=!1,this._deselectable=!1,this._disabled=!1,this._tick=!0,this._type="default",this._style=null,this._filtre=null,this._labelSelectAll="Seleccionar-ho tot",this._labelDeselectAll="Deseleccionar-ho tot",this._selectAll=!1,this._isAllSelected=!1,this._elementsSelected=0,this._emptySelectorLabel="Sense resultats per",this._emptyFilterLabel="Escriu per cercar.",this._filterThreshold=1,this._ariaLabel=void 0}static get styles(){return[r$2(iconStyles),r$2(styles$9)]}set multiple(t){const a=this._multiple;this._multiple=t,this.requestUpdate("multiple",a)}set tick(t){const a=this._tick;this._tick=t,this.requestUpdate("tick",a)}set deselectable(t){const a=this._deselectable;this._deselectable=t,this.requestUpdate("deselectable",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set elements(t){const a=this._elements;this._elements=t,this.requestUpdate("elements",a)}set selectedValue(t){var l,h;const a=this._selectedValue;if(!t||t.length===0){this._selectedValue=null,this.requestUpdate("selectedValue",a);return}if(this._multiple){this._selectedValue=((l=this._elements)==null?void 0:l.filter(p=>t.includes(p.value)))||null,this.requestUpdate("selectedValue",a);return}const c=(h=this._elements)==null?void 0:h.find(p=>p.value===t[0]);this._selectedValue=c?[c]:null,this.requestUpdate("selectedValue",a)}set type(t){const a=this._type;t==="default"||t==="green"?this._type=t:this._type="default",this.requestUpdate("type",a)}set boxStyle(t){const a=this._style;this._style=t,this.requestUpdate("style",a)}set filtre(t){if(t){const a=this._filtre;this._filtre=t.toLowerCase(),this.requestUpdate("filtre",a)}else t===""&&(this._filtre=null)}set labelSelectAll(t){const a=this._labelSelectAll;t!==""&&(this._labelSelectAll=t),this.requestUpdate("labelSelectAll",a)}set labelDeselectAll(t){const a=this._labelDeselectAll;t!==""&&(this._labelDeselectAll=t),this.requestUpdate("labelDeselectAll",a)}set selectAll(t){const a=this._selectAll;this._selectAll=t,this.requestUpdate("selectAll",a)}set filterThreshold(t){const a=this._filterThreshold;this._filterThreshold=t,this.requestUpdate("filterThreshold",a)}set elementsSelected(t){const a=this._elementsSelected;this._elementsSelected=t,this.requestUpdate("elementsSelected",a)}set ariaLabel(t){const a=this._ariaLabel;this._ariaLabel=t,this.requestUpdate("ariaLabel",a)}_valueIsSelected(t){var a;return((a=this._selectedValue)==null?void 0:a.some(c=>c.value===t))||!1}_manuallySelect(t,a){if(t.preventDefault(),t.stopPropagation(),this._disabled)return;const c=this._valueIsSelected(a);if(!this._multiple&&!this._deselectable&&c)return;const l=t.target,h=l.className.includes("bold")?l.parentElement:l;h&&h.className.includes("dss-form-field")?h.querySelector("input").checked=!c:h&&(h.parentElement.querySelector("input").checked=!c),this._returnSelectedValues(a),this._areAllElementsSelected()}_manuallySelectAll(t){if(t.preventDefault(),t.stopPropagation(),this._disabled||!this._multiple&&!this._deselectable&&this._isAllSelected)return;const a=t.target;a.className.includes("dss-form-field")?(a.querySelector("input").checked=!a.querySelector("input").checked,this._returnSelecteAllValues(a.querySelector("input").checked)):(a.parentElement.querySelector("input").checked=!a.parentElement.querySelector("input").checked,this._returnSelecteAllValues(a.parentElement.querySelector("input").checked)),this._areAllElementsSelected()}_returnSelecteAllValues(t){var l,h;t?this._selectedValue=((l=this._elements)==null?void 0:l.filter(p=>p.value))||[]:this._selectedValue=[];const c={detail:((h=this._selectedValue)==null?void 0:h.map(p=>p.value))||null,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onValueChange",c)),this.requestUpdate()}_returnSelectedValues(t){var p,b;const a=Array.from(((p=this.shadowRoot)==null?void 0:p.querySelectorAll("input:checked"))||[]).map(g=>g.getAttribute("value")).filter(g=>g==null?!1:this._multiple?!0:g===t),c=a.indexOf(this._elementSelectAll[0]);c!==-1&&a.splice(c,1),this._selectedValue=((b=this._elements)==null?void 0:b.filter(g=>a.includes(g.value)))||[];let l;this._multiple?l=a:l=a[0]||null;const h={detail:l,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onValueChange",h)),this.requestUpdate()}_getIndexSubtext(t){if(!this._filtre)return[-1,-1];const a=t.toLowerCase();return[a.indexOf(this._filtre),a.indexOf(this._filtre)+this._filtre.length]}_focusEvent(t){const c=t.target.closest(".dss-form-field");c==null||c.classList.add("dss-form-field__focus")}_blurEvent(t){const c=t.target.closest(".dss-form-field");c==null||c.classList.remove("dss-form-field__focus")}async firstUpdated(){try{await this.updateComplete,this._elementSelectAll=[this._labelSelectAll],this._areAllElementsSelected(),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}_areAllElementsSelected(){if(!this._elements||!this._selectedValue){this._elementSelectAll=[this._labelSelectAll],this._isAllSelected=!1;return}const t=this._selectedValue.map(c=>c.value),a=this._elements.map(c=>c.value);this._isAllSelected=t.length===a.length&&t.every(c=>a.includes(c)),this._isAllSelected?this._elementSelectAll=[this._labelDeselectAll]:this._elementSelectAll=[this._labelSelectAll],this.requestUpdate()}generateListInputsElements(){var a;return(a=this._elements)==null?void 0:a.map((c,l)=>{const h=c.label.trim().replace(/\s+/g,"-"),p=c.value.trim().replace(/\s+/g,"-"),b=`selector-${h}-${p}`,g=this._valueIsSelected(c.value),m=this._tick&&!this._multiple,w=e({disabled:this._disabled,"dss-disabled":this._disabled,"dss-form-field":!0,"dss-type--default":this._type==="default","dss-type--green":this._type==="green","dss-ticked":m,"dss-selected":g&&m,"dss-form-field--selected":g,"dss-first-unselected":l&&l>0&&l===this._elementsSelected}),v=e({"dss-checkbox":this._multiple,"dss-radio":!this._multiple,"dss-disabled":this._disabled,hidden:m}),f=m&&g?"visible":"hidden",y=x`
        <input
          id="${b}"
          name="${b}"
          type="checkbox"
          class="${v}"
          .value="${c.value}"
          .checked="${g}"
          @focus="${this._focusEvent}"
          @blur="${this._blurEvent}"
        />
        <div class="dss-check-overlay"></div>
      `,k=x`<span
        class="dss-icon--checked"
        style="visibility: ${f}"
      ></span>`,$=D=>{this._manuallySelect(D,c.value)},_=D=>{var q,U,E,O;if(D.key==="Enter"||D.key===" ")this._manuallySelect(D,c.value);else if(D.key==="ArrowUp"){const P=D.target,L=(U=(q=P==null?void 0:P.closest(".dss-form-field"))==null?void 0:q.previousElementSibling)==null?void 0:U.querySelector("input");L==null||L.focus()}else if(D.key==="ArrowDown"){const P=D.target,L=(O=(E=P==null?void 0:P.closest(".dss-form-field"))==null?void 0:E.nextElementSibling)==null?void 0:O.querySelector("input");L==null||L.focus()}},[S,C]=this._getIndexSubtext(c.label);let T=x`${c.label}`;if(S!==-1&&C!==-1){const D=c.label.slice(0,S),q=c.label.slice(S,C),U=c.label.slice(C);T=x`${D}<span class="bold">${q}</span>${U}`}return x`
        <div
          class="${w}"
          @keyup="${_}"
          @click="${$}"
          role="option"
        >
          ${y}
          <label for=${b}>${T}</label>
          ${k}
        </div>
      `})}generatElementSelectAll(){var a;return(a=this._elementSelectAll)==null?void 0:a.map(c=>{const l=e({disabled:this._disabled,"dss-form-field":!0,"dss-type--default":this._type==="default","dss-type--green":this._type==="green","dss-selectAll":!0,"dss-disabled":this._disabled}),h=e({"dss-checkbox":this._multiple}),p=x`
        <input
          id="${this._elementId}"
          name="${this._elementId}"
          type="checkbox"
          class="${h}"
          .value="${c}"
          .checked="${this._isAllSelected}"
          @focus="${this._focusEvent}"
          @blur="${this._blurEvent}"
        />
        <div class="dss-check-overlay"></div>
      `;return x`
        <div
          class="${l}"
          @keyup="${m=>{var w,v,f,y;if(m.key==="Enter"||m.key===" ")this._manuallySelectAll(m);else if(m.key==="ArrowUp"){const k=m.target,$=(v=(w=k==null?void 0:k.closest(".dss-form-field"))==null?void 0:w.previousElementSibling)==null?void 0:v.querySelector("input");$==null||$.focus()}else if(m.key==="ArrowDown"){const k=m.target,$=(y=(f=k==null?void 0:k.closest(".dss-form-field"))==null?void 0:f.nextElementSibling)==null?void 0:y.querySelector("input");$==null||$.focus()}}}"
          @click="${m=>{this._manuallySelectAll(m)}}"
          role="option"
        >
          ${p}
          <label for="${this._elementId}">${c}</label>
        </div>
      `})}render(){let t=this.generateListInputsElements();const a=this.generatElementSelectAll();this._multiple&&this._selectAll&&(t==null||t.unshift(a[0]),t=(t==null?void 0:t.length)===1?[]:t);const c=l=>{(l.key==="ArrowDown"||l.key==="ArrowUp")&&l.preventDefault()};return x`
      ${this._elements&&this._elements.length>0?x`
            <div
              aria-label="${o(this._ariaLabel)}"
              role="listbox"
              part="selector"
              class="list dss-selector-list-wrapper"
              @keydown=${c}
              style="${this._style}"
            >
              ${t}
            </div>
          `:x`
            <div
              part="selector"
              class="list dss-selector-list-wrapper"
              @keydown=${c}
              style="${this._style}"
            >
              ${this._filtre&&this._filtre.length>=this._filterThreshold?x`
                    <div class="dss-selector-empty">
                      <span class="dss-icon dss-icon--sm">info</span>
                      <span class="text">
                        ${this._filtre||this._filtre===""?x` ${this._emptySelectorLabel}: ${this._filtre} `:x`${this._emptyFilterLabel}`}
                      </span>
                    </div>
                  `:x`
                    <div class="dss-selector-empty">
                      <dss-spinner size="md"></dss-spinner>
                    </div>
                  `}
            </div>
          `}
    `}}__decorateClass$A([n(booleanType)],Selector.prototype,"multiple");__decorateClass$A([n(booleanType)],Selector.prototype,"tick");__decorateClass$A([n(booleanType)],Selector.prototype,"deselectable");__decorateClass$A([n(booleanType)],Selector.prototype,"disabled");__decorateClass$A([n({type:Array})],Selector.prototype,"elements");__decorateClass$A([n(selectedType)],Selector.prototype,"selectedValue");__decorateClass$A([n({type:String})],Selector.prototype,"type");__decorateClass$A([n({type:String})],Selector.prototype,"boxStyle");__decorateClass$A([n({type:String})],Selector.prototype,"filtre");__decorateClass$A([n({type:String})],Selector.prototype,"labelSelectAll");__decorateClass$A([n({type:String})],Selector.prototype,"labelDeselectAll");__decorateClass$A([n(booleanType)],Selector.prototype,"selectAll");__decorateClass$A([n({type:Number})],Selector.prototype,"filterThreshold");__decorateClass$A([n({type:Number})],Selector.prototype,"elementsSelected");__decorateClass$A([n({type:String})],Selector.prototype,"ariaLabel");const styles$8='.dss-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;cursor:pointer;outline:none;border-radius:3px;height:4px;background:linear-gradient(to right,var(--color-primary-500) var(--progress),var(--color-neutral-100) var(--progress))}.dss-slider--vertical{transform:rotate(-90deg);transform-origin:center center}.dss-slider::-moz-range-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:20px;width:20px;background-color:var(--color-primary-500);border-radius:50%;border:var(--dss-border-width-md) solid var(--color-white);-moz-transition:.3s ease-in-out;transition:.3s ease-in-out;box-sizing:border-box}.dss-slider::-webkit-slider-thumb:hover{background-color:var(--color-primary-600);-webkit-transition:all .3s linear;transition:all .3s linear}.dss-slider::-moz-range-thumb:hover{background-color:var(--color-primary-600);-moz-transition:all .3s linear;transition:all .3s linear}.dss-slider:active::-webkit-slider-thumb{background-color:var(--color-primary-400);-webkit-transition:none;transition:none}.dss-slider:active::-moz-range-thumb{background-color:var(--color-primary-400);-moz-transition:none;transition:none}.dss-slider:focus-visible::-webkit-slider-thumb{background-color:var(--color-primary-500);border-color:var(--color-blue-200);outline:2px solid var(--color-blue-200);-webkit-transition:none;transition:none}.dss-slider:focus-visible::-moz-range-thumb{background-color:var(--color-primary-500);border-color:var(--color-blue-200);outline:2px solid var(--color-blue-200);-moz-transition:none;transition:none}.dss-slider:disabled{cursor:not-allowed;background:linear-gradient(to right,var(--color-neutral-400) var(--progress),var(--color-neutral-100) var(--progress))}.dss-slider:disabled::-webkit-slider-thumb{background-color:var(--color-neutral-500);-webkit-transition:none;transition:none}.dss-slider:disabled::-moz-range-thumb{background-color:var(--color-neutral-500);-moz-transition:none;transition:none}.dss-slider:disabled+.dss-slider-tooltip{display:none!important}.dss-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:20px;width:20px;background-color:var(--color-primary-500);border-radius:50%;border:var(--dss-border-width-md) solid var(--color-white);-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;box-sizing:border-box}.dss-slider:hover+.dss-slider-tooltip{display:block}.dss-slider:focus-visible+.dss-slider-tooltip{display:block}.dss-slider-wrapper{min-width:200px;width:100%;position:relative}.dss-slider-tooltip{display:none;position:absolute;top:-50%}.dss-slider-tooltip--active{display:block}.dss-slider-tooltip .tooltip-wrapper{width:var(--dss-spacing-hg);height:var(--dss-spacing-hg);line-height:24px;text-align:center;background:var(--color-black);color:var(--color-white);font-size:16px;display:flex;align-items:center;justify-content:center;position:absolute;top:-45px;left:calc(50% + 1px);transform:translate(-50%);border-radius:var(--dss-radius-sm);box-shadow:0 4px 8px 3px #0000000d,0 1px 3px #0000001a}.dss-slider-tooltip .tooltip-wrapper:before{content:"";position:absolute;width:0;height:0;border-top:24px solid var(--color-black);border-left:24px solid transparent;border-right:24px solid transparent;top:100%;left:50%;margin-left:-24px;margin-top:-15px}.dss-slider-info{position:absolute;top:calc(100% + 6px);font-size:12px;line-height:16px;color:var(--color-neutral-700)}.dss-slider-info--min{left:0}.dss-slider-info--medium{left:calc(50% - 5px)}.dss-slider-info--max{right:0}.dss-slider--vertical>.dss-slider-tooltip .tooltip-value{transform:rotate(90deg)}.dss-slider--vertical>.dss-slider-info{transform:rotate(90deg);transform-origin:center center;margin-right:-10px}';var __defProp$z=Object.defineProperty,__getOwnPropDesc$z=Object.getOwnPropertyDescriptor,__decorateClass$z=(d,t,a,c)=>{for(var l=__getOwnPropDesc$z(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$z(t,a,l),l};class Slider extends r$1{constructor(){super(...arguments),this._label="Input range",this._min=0,this._max=0,this._step=1,this._orient="horizontal",this._vertical=!1,this._value=0,this._progress=0,this._disabled=!1,this._isTooltipTouched=!1}static get styles(){return r$2(styles$8)}get _input(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("input")}get _tooltip(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#dss-slider-tooltip")}set min(t){const a=this._min;this._min=t,this.requestUpdate("min",a)}set max(t){const a=this._max;t>=this._value&&(this._max=t,this._setProgress(),this.requestUpdate("max",a))}set step(t){const a=this._step;this._step=t,this.requestUpdate("step",a)}set orient(t){const a=this._orient;this._orient=t,t==="vertical"?this._vertical=!0:this._vertical=!1,this.requestUpdate("orient",a)}set value(t){const a=this._value;this._max>=t&&(this._value=t,this._setProgress(),this.requestUpdate("value",a))}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set label(t){const a=this._label;this._label=t,this.requestUpdate("label",a)}render(){var c;const t={"dss-slider--vertical":this._vertical},a={"dss-slider-tooltip--active":this._isTooltipTouched};return x`
      <div class="dss-slider-wrapper ${e(t)}">
        <input
          id="dss-slider-input"
          aria-label="${this._label}"
          type="range"
          class="dss-slider"
          min=${this._min}
          max=${this._max}
          .value=${(c=this._value)==null?void 0:c.toString()}
          step=${this._step}
          direction="${this._orient}"
          @input="${this._handleInput}"
          style="--progress: ${`${this._progress}%`}"
          ?disabled="${this._disabled}"
        />
        <div
          class="dss-slider-tooltip ${e(a)}"
          id="dss-slider-tooltip"
        ></div>
        <div class="dss-slider-info dss-slider-info--min">${this._min}</div>
        <div class="dss-slider-info dss-slider-info--medium">
          ${Math.round((this._max+this._min)/2)}
        </div>
        <div class="dss-slider-info dss-slider-info--max">${this._max}</div>
        <div></div>
      </div>
    `}async firstUpdated(){try{await this.updateComplete,this._setProgress(),this.requestUpdate(),document.addEventListener("DOMContentLoaded",this._updateTooltip.bind(this)),this._input.addEventListener("input",this._updateTooltip.bind(this)),this._input.addEventListener("mouseup",this._dispatchValue.bind(this)),this._input.addEventListener("keyup",this._dispatchValue.bind(this)),this._input.addEventListener("touchstart",this._handleTouchStart.bind(this)),this._input.addEventListener("touchmove",this._handleTouchMove.bind(this)),this._input.addEventListener("touchend",this._handleTouchEnd.bind(this))}catch{console.error("ERROR OCURRED")}}_handleTouchStart(t){this._vertical&&t.preventDefault(),this._isTooltipTouched=!0}_handleTouchEnd(t){this._vertical&&t.preventDefault(),this._isTooltipTouched=!1,this.requestUpdate(),this._dispatchValue()}_handleTouchMove(t){if(this._vertical){if(!t.target)return;const a=t.target,c=Number.parseInt(a.max,10),l=Number.parseInt(a.min,10),h=t.touches[0],p=a.getBoundingClientRect(),b=(h.clientY-p.top)/p.height,g=Math.round(b*(c-l)+l);a.value=String(c-g+l),a.dispatchEvent(new Event("input"))}}_handleInput(){if(this._input){const t=Number.parseFloat(this._input.value);this._progress=Math.round((t-this._min)/(this._max-this._min)*100),this.requestUpdate()}}_setProgress(){this._input&&(this._input.value=this._value.toString()),this._progress=Math.round((this._value-this._min)/(this._max-this._min)*100),this.requestUpdate()}_updateTooltip(){if(this._tooltip){const t=Number((+this._input.value-+this._min)*100/(+this._max-+this._min)),a=10-t*.2;this._tooltip.innerHTML=`<span class="tooltip-wrapper"><span class="tooltip-value">${this._input.value}</span></span>`,this._tooltip.style.left=`calc(${t}% + (${a}px))`}}_dispatchValue(){const t={detail:this._input.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onDssSliderValueChange",t))}}__decorateClass$z([n({type:Number})],Slider.prototype,"min");__decorateClass$z([n({type:Number})],Slider.prototype,"max");__decorateClass$z([n({type:Number})],Slider.prototype,"step");__decorateClass$z([n({type:String})],Slider.prototype,"orient");__decorateClass$z([n({type:Number})],Slider.prototype,"value");__decorateClass$z([n(booleanType)],Slider.prototype,"disabled");__decorateClass$z([n({type:String})],Slider.prototype,"label");const styles$7=":host{display:inline-block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.dss-spinner{width:48px;height:48px;animation:rotate-animation 1s linear infinite;position:relative}.dss-spinner__item{width:100%;height:100%;left:0;top:0;position:absolute;transform:rotate(-90deg)}.dss-spinner__item:nth-child(1) circle{stroke:#eff7ff;stroke-dasharray:1,300;stroke-dashoffset:0;animation:stroke-animation 4s .2s ease infinite;transform-origin:center center}.dss-spinner__item:nth-child(2) circle{stroke:#bfddfa;stroke-dasharray:1,300;stroke-dashoffset:0;animation:stroke-animation 4s .4s ease infinite;transform-origin:center center}.dss-spinner__item:nth-child(3) circle{stroke:#60a8f0;stroke-dasharray:1,300;stroke-dashoffset:0;animation:stroke-animation 4s calc(.2s * (3)) ease infinite;transform-origin:center center}.dss-spinner__item:nth-child(4) circle{stroke:#0073e6;stroke-dasharray:1,300;stroke-dashoffset:0;animation:stroke-animation 4s .8s ease infinite;transform-origin:center center}.dss-spinner__item circle{fill:none;stroke-linecap:round;stroke-width:8px}.dss-spinner.dss-spinner--sm{width:24px;height:24px}.dss-spinner.dss-spinner--md{width:48px;height:48px}.dss-spinner.dss-spinner--lg{width:72px;height:72px}@keyframes stroke-animation{0%{stroke-dasharray:1,300;stroke-dashoffset:0}50%{stroke-dasharray:120,300;stroke-dashoffset:-59}to{stroke-dasharray:120,300;stroke-dashoffset:-175}}@keyframes rotate-animation{to{transform:rotate(360deg)}}";var __defProp$y=Object.defineProperty,__getOwnPropDesc$y=Object.getOwnPropertyDescriptor,__decorateClass$y=(d,t,a,c)=>{for(var l=__getOwnPropDesc$y(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$y(t,a,l),l};class Spinner extends r$1{constructor(){super(...arguments),this._size="md"}static get styles(){return r$2(styles$7)}set size(t){const a=this._size;this._size=t,this.requestUpdate("size",a)}render(){return x`
      <div class="dss-spinner dss-spinner--${this._size}">
        <svg
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
          class="dss-spinner__item"
        >
          <circle cx="33" cy="33" r="28"></circle>
        </svg>
        <svg
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
          class="dss-spinner__item"
        >
          <circle cx="33" cy="33" r="28"></circle>
        </svg>
        <svg
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
          class="dss-spinner__item"
        >
          <circle cx="33" cy="33" r="28"></circle>
        </svg>
        <svg
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
          class="dss-spinner__item"
        >
          <circle cx="33" cy="33" r="28"></circle>
        </svg>
      </div>
    `}}__decorateClass$y([n({type:String})],Spinner.prototype,"size");const styles$6=':host{display:inline-block;height:100%;width:100%;--circle: 32px;--circle-md: 24px;--circle-sm: 16px;--default-background: var(--color-white);--default-border-color: var(--color-neutral-500);--default-font-color: var(--color-neutral-900);--default-background-hover: var(--color-neutral-50);--default-font-color-active: var(--color-neutral-500);--active-background: var(--color-primary-500);--active-border-color: var(--color-primary-500);--active-font-color: var(--color-white);--completed-background: var(--color-primary-50);--disabled-background: var(--color-neutral-100);--disabled-border-color: var(--color-neutral-100);--disabled-font-color: var(--color-neutral-600);--line-width: 2px;--font-size: 18px;--font-size-md: 16px;--font-size-sm: 16px}.dss-circular-stepper{display:flex;gap:16px;align-items:center}.dss-circular-stepper__item{width:3rem;height:3rem;position:relative}.dss-circular-stepper__item svg{width:3rem;height:3rem;transform:rotate(-90deg)}.dss-circular-stepper__counter{position:absolute;font-size:.9rem;line-height:24px;left:0;top:0;width:3rem;height:3rem;display:flex;justify-content:center;align-items:center}.dss-circular-stepper__label,.dss-circular-stepper__counter b{font-weight:600;color:var(--color-neutral-700);font-size:.9rem;transition:.3s all ease-in;line-height:24px}.dss-circular-stepper circle{stroke:var(--color-neutral-200);stroke-dashoffset:0;fill:none;stroke-linecap:round;stroke-width:6px;stroke-dasharray:100,100;transition:.3s all ease-in}.dss-circular-stepper circle:last-of-type{stroke:var(--color-primary-500);stroke-dasharray:var(--percent),100;stroke-dashoffset:0}.dss-stepper{display:flex;list-style:none;justify-content:space-between;background:linear-gradient(var(--default-border-color) 0 0) no-repeat 50% calc((var(--circle) - var(--line-width)) / 2) / 100% var(--line-width);margin:var(--dss-spacing-xxs) 0 var(--dss-spacing-xl);padding:0;counter-reset:step}.dss-stepper--md{background:linear-gradient(var(--default-border-color) 0 0) no-repeat 50% calc((var(--circle-md) - var(--line-width)) / 2) / 100% var(--line-width)}.dss-stepper--sm{background:linear-gradient(var(--default-border-color) 0 0) no-repeat 50% calc((var(--circle-sm) - var(--line-width)) / 2) / 100% var(--line-width)}.dss-bubble{display:grid;place-items:center;gap:0;position:relative;border-radius:50%;transition:.3s outline ease-in}.dss-bubble:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-bubble:before{cursor:pointer;content:counter(step) " ";counter-increment:step;display:grid;place-content:center;aspect-ratio:1;height:var(--circle);box-sizing:border-box;border-radius:50%;font-size:var(--font-size);font-weight:var(--font-semibold);font-family:var(--font-family);z-index:100;background-color:var(--default-background);border:var(--line-width) solid var(--active-border-color);color:var(--default-font-color);transition:.3s all ease-in}.dss-bubble:not(.dss-bubble--active):not(:active):hover:before{background-color:var(--completed-background)}.dss-stepper--md .dss-bubble:before{height:var(--circle-md);font-size:var(--font-size-md)}.dss-stepper--sm .dss-bubble:before{content:"";height:var(--circle-sm);font-size:var(--font-size-sm);height:16px;width:16px}.dss-bubble--active:before{background-color:var(--active-background);border-color:var(--active-border-color);color:var(--active-font-color)}.dss-bubble--active~.dss-bubble:before{background-color:var(--default-background);border-color:var(--default-border-color);color:var(--default-font-color)}.dss-bubble--active~.dss-bubble:not(.dss-bubble--active):hover:before{background-color:var(--default-background-hover)}.dss-bubble--active~.dss-bubble:active:before{background-color:var(--default-background);color:var(--default-font-color-active)}.dss-bubble--icon:before{content:attr(icon);font-family:var(--font-icons);font-weight:400}.dss-bubble--checked:before{content:"done";font-family:var(--font-icons);font-weight:400;font-size:24px;color:var(--color-primary-500)!important}.dss-stepper--sm .dss-bubble--checked:before{content:"check_circle";background-color:var(--color-primary-500);color:var(--color-white)!important;border-width:1px!important}.dss-stepper--sm .dss-bubble--checked:hover:before{border-color:var(--color-white);color:var(--color-primary-500)!important}.dss-bubble--checked:active:before{background-color:var(--color-white);color:var(--color-primary-300)!important;border-color:var(--color-primary-500)!important}.dss-stepper--sm .dss-bubble--checked:active:before{border-color:var(--color-white)!important;color:var(--color-primary-300)!important}.dss-bubble--info:before,.dss-bubble--active~.dss-bubble.dss-bubble--info:before{content:"info_i";font-family:var(--font-icons);font-weight:400;background-color:var(--color-white);color:var(--color-blue-500);border-color:var(--color-blue-500)}.dss-bubble--info:hover:before,.dss-bubble--active~.dss-bubble.dss-bubble--info:hover:before{background-color:var(--color-blue-50)!important}.dss-bubble--info:active:before,.dss-bubble--active~.dss-bubble.dss-bubble--info:not(.dss-bubble--active):active:before{color:var(--color-blue-300)!important;background-color:var(--color-white)!important}.dss-stepper--sm .dss-bubble--info:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--info:before{content:"info";background-color:var(--color-blue-500);border-color:var(--color-blue-500);color:var(--color-white)!important;border-width:1px!important}.dss-stepper--sm .dss-bubble--info:hover:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--info:hover:before{background-color:var(--color-blue-50)!important;border-color:var(--color-white);color:var(--color-blue-500)!important}.dss-stepper--sm .dss-bubble--info:active:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--info:active:before{background-color:var(--color-white)!important;border-color:var(--color-white)!important;color:var(--color-blue-300)!important}.dss-bubble--alert:before,.dss-bubble--active~.dss-bubble.dss-bubble--alert:before{content:"priority_high";font-family:var(--font-icons);font-weight:400;background-color:var(--color-white);color:var(--color-yellow-800);border-color:var(--color-yellow-800)}.dss-bubble--alert:not(:active):hover:before{background-color:var(--color-yellow-50)!important}.dss-bubble--alert:active:before,.dss-bubble--active~.dss-bubble.dss-bubble--alert:active:before{color:var(--color-yellow-700)!important;background-color:var(--color-white)}.dss-stepper--sm .dss-bubble--alert:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--alert:before{content:"error";background-color:var(--color-yellow-800);border-color:var(--color-yellow-800);color:var(--color-white)!important;border-width:1px!important}.dss-stepper--sm .dss-bubble--alert:hover:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--alert:hover:before{background-color:var(--color-yellow-50)!important;border-color:var(--color-white);color:var(--color-yellow-800)!important}.dss-stepper--sm .dss-bubble--alert:active:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--alert:active:before{background-color:var(--color-white)!important;border-color:var(--color-white)!important;color:var(--color-yellow-700)!important}.dss-bubble--error:before,.dss-bubble--active~.dss-bubble.dss-bubble--error:before{content:"close";font-family:var(--font-icons);font-weight:400;background-color:var(--color-white);color:var(--color-red-500);border-color:var(--color-red-500)}.dss-bubble--error:active:before,.dss-bubble--active~.dss-bubble.dss-bubble--error:active:before{color:var(--color-red-300)!important;background-color:var(--color-white)}.dss-stepper--sm .dss-bubble--error:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--error:before{content:"cancel";background-color:var(--color-red-500);border-color:var(--color-red-500);color:var(--color-white)!important;border-width:1px!important}.dss-stepper--sm .dss-bubble--error:hover:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--error:hover:before{background-color:var(--color-red-50)!important;border-color:var(--color-white);color:var(--color-red-500)!important}.dss-stepper--sm .dss-bubble--error:active:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--error:active:before{background-color:var(--color-white)!important;border-color:var(--color-white)!important;color:var(--color-red-300)!important}.dss-bubble--disabled:before{cursor:not-allowed;background-color:var(--disabled-background)!important;border-color:var(--disabled-border-color)!important;color:var(--disabled-font-color)!important}.dss-stepper--vertical .dss-bubble:not(:first-child){margin-top:var(--dss-spacing-lg)}.dss-bubble--error:not(:active):hover:before{background-color:var(--color-red-50)!important}.dss-bubble--error:active:before{color:var(--color-red-300)!important}.dss-stepper--sm .dss-bubble--error:before{content:"cancel";background-color:var(--color-red-500);border-color:var(--color-red-500);color:var(--color-white)!important;border-width:1px!important}.dss-stepper--sm .dss-bubble--error:hover:before{background-color:var(--color-red-50)!important;border-color:var(--color-white);color:var(--color-red-500)!important}.dss-stepper--sm .dss-bubble--error:active:before{background-color:var(--color-white)!important;border-color:var(--color-white)!important;color:var(--color-red-300)!important}.dss-bubble--disabled:before{cursor:not-allowed;background:var(--disabled-background)!important;border-color:var(--disabled-border-color)!important;color:var(--disabled-font-color)!important}.dss-bubble--completed:not(:first-child):after{content:"";position:absolute;height:var(--line-width);right:0;top:calc((var(--circle) - var(--line-width)) / 2);width:var(--active-bar-width);background:var(--active-background)}.dss-bubble--active:not(:first-child):after{content:"";position:absolute;height:var(--line-width);right:0;top:calc((var(--circle) - var(--line-width)) / 2);width:var(--active-bar-width);background:var(--active-background);animation:animate .3s}.dss-stepper--md .dss-bubble--completed:not(:first-child):after{top:calc((var(--circle-md) - var(--line-width)) / 2)}.dss-stepper--md .dss-bubble--active:not(:first-child):after{top:calc((var(--circle-md) - var(--line-width)) / 2)}.dss-stepper--sm .dss-bubble--completed:not(:first-child):after{top:calc((var(--circle-sm) - var(--line-width)) / 2)}.dss-stepper--sm .dss-bubble--active:not(:first-child):after{top:calc((var(--circle-sm) - var(--line-width)) / 2)}.dss-stepper--vertical{height:100%;flex-direction:column;gap:0;background:linear-gradient(var(--default-border-color) 0 0) no-repeat calc((var(--circle) - var(--line-width)) / 2) 50% / var(--line-width) 100%}.dss-stepper--vertical .dss-bubble{display:flex;width:-moz-fit-content;width:fit-content}.dss-stepper--vertical .dss-bubble--completed:not(:first-child):after{content:"";position:absolute;width:var(--line-width);bottom:0;left:calc((var(--circle) - var(--line-width)) / 2);top:auto;right:auto;height:var(--active-bar-width);background:var(--active-background)}.dss-stepper--vertical .dss-bubble--active:not(:first-child):after{content:"";position:absolute;width:var(--line-width);bottom:0;left:calc((var(--circle) - var(--line-width)) / 2);top:auto;right:auto;height:var(--active-bar-width);background:var(--active-background);animation:column-animate .5s}.dss-stepper--md.dss-stepper--vertical{background:linear-gradient(var(--default-border-color) 0 0) no-repeat calc((var(--circle-md) - var(--line-width)) / 2) 50% / var(--line-width) 100%}.dss-stepper--sm.dss-stepper--vertical{background:linear-gradient(var(--default-border-color) 0 0) no-repeat calc((var(--circle-sm) - var(--line-width)) / 2) 50% / var(--line-width) 100%}.dss-stepper--md.dss-stepper--vertical .dss-bubble--completed:not(:first-child):after{left:calc((var(--circle-md) - var(--line-width)) / 2)}.dss-stepper--sm.dss-stepper--vertical .dss-bubble--completed:not(:first-child):after{left:calc((var(--circle-sm) - var(--line-width)) / 2)}.dss-stepper--md.dss-stepper--vertical .dss-bubble--active:not(:first-child):after{left:calc((var(--circle-md) - var(--line-width)) / 2)}.dss-stepper--sm.dss-stepper--vertical .dss-bubble--active:not(:first-child):after{left:calc((var(--circle-sm) - var(--line-width)) / 2)}.dss-stepper:not(.dss-stepper--vertical) .dss-bubble-label{position:absolute;top:calc(100% + var(--dss-spacing-xxs));left:50%;transform:translate(-50%)}.dss-bubble-label{width:-moz-max-content;width:max-content;font-weight:var(--font-regular);font-size:14px;color:var(--color-neutral-700)}.dss-bubble-label--disabled{color:var(--color-neutral-500)}.dss-bubble--active .dss-bubble-label{color:var(--color-neutral-700);font-weight:var(--font-semibold)}.dss-stepper--vertical .dss-bubble-label{position:absolute;left:calc(100% + var(--dss-spacing-xs));top:50%;transform:translateY(-50%)}.dss-bubble-label.hide-label{display:none}@keyframes animate{0%{width:0}to{width:100%}}@keyframes column-animate{0%{height:0}to{height:100%}}';var __defProp$x=Object.defineProperty,__getOwnPropDesc$x=Object.getOwnPropertyDescriptor,__decorateClass$x=(d,t,a,c)=>{for(var l=__getOwnPropDesc$x(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$x(t,a,l),l};class Stepper extends r$1{constructor(){super(...arguments),this._steps=[],this._currentStep=1,this._column=!1,this._circular=!1,this._hideLabel=!1,this._size="md",this._activeBarWidth="0",this._isFirstUpdate=!0}static get styles(){return r$2(styles$6)}set steps(steps){const oldValue=this._steps;this._steps=steps,typeof steps=="string"&&(this._steps=eval(`(${steps})`)),this.requestUpdate("steps",oldValue)}set currentStep(d){const t=this._currentStep;this._currentStep=d,this.requestUpdate("currentStep",t)}set column(d){const t=this._column;this._column=d,this.requestUpdate("column",t)}set circular(d){const t=this._circular;this._circular=d,this.requestUpdate("circular",t)}set hideLabel(d){const t=this._hideLabel;this._hideLabel=d,this.requestUpdate("hideLabel",t)}set size(d){const t=this._size;this._size=d,this.requestUpdate("size",t)}async firstUpdated(){await this.updateComplete,this._setActiveBarWidth(),this._isFirstUpdate=!1,this.requestUpdate()}willUpdate(d){this._isFirstUpdate||(d.has("currentStep")||d.has("steps")||d.has("column"))&&(this._setActiveBarWidth(),this.requestUpdate())}_setActiveBarWidth(){var l;const d=this._steps.length,t=(l=this.shadowRoot)==null?void 0:l.querySelector(".dss-stepper"),a=t==null?void 0:t.getBoundingClientRect(),c=this._column?a==null?void 0:a.height:a==null?void 0:a.width;if(c){const h=Math.floor(c/(d-1));this._activeBarWidth=`${h}px`}}_onStepClick(d,t){if(!(d.state==="disabled")){const c={detail:{step:d,stepNumber:t},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onStepClick",c))}}render(){var c,l;const d=(c=this._steps)==null?void 0:c.length,t=Math.round(this._currentStep/d*100),a={"dss-stepper--vertical":this._column,"dss-stepper--sm":this._size==="sm","dss-stepper--md":this._size==="md"};return x`
      ${this._circular?x`
            <div class="dss-circular-stepper">
              <div class="dss-circular-stepper__item">
                <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="33" cy="33" r="28" pathLength="100"></circle>
                  <circle
                    cx="33"
                    cy="33"
                    r="28"
                    style="--percent: ${t}"
                    pathLength="100"
                  ></circle>
                </svg>
                <span class="dss-circular-stepper__counter">
                  <b>${this._currentStep}</b>/${d}
                </span>
              </div>
              <span class="dss-circular-stepper__label">
                ${this._steps[this._currentStep-1].label}
              </span>
            </div>
          `:x`
            <style>
              :host {
                --active-bar-width: ${this._activeBarWidth};
              }
            </style>
            <ol class="dss-stepper ${e(a)}">
              ${(l=this._steps)==null?void 0:l.map((h,p)=>{const b=p+1,g=f=>{f.key==="Enter"&&this._onStepClick(h,b)},m=h.state==="disabled",w={"dss-bubble--active":b===this._currentStep,"dss-bubble--completed":b<this._currentStep,"dss-bubble--checked":h.state==="checked"&&b!==this._currentStep,"dss-bubble--error":h.state==="error"&&b!==this._currentStep,"dss-bubble--info":h.state==="info"&&b!==this._currentStep,"dss-bubble--alert":h.state==="alert"&&b!==this._currentStep,"dss-bubble--disabled":h.state==="disabled","dss-bubble--icon":!!(h!=null&&h.icon)&&this._size!=="sm"},v={"dss-bubble-label--disabled":h.state==="disabled","hide-label":this._hideLabel};return x`
                  <li
                    class="dss-bubble ${e(w)}"
                    icon="${(h==null?void 0:h.icon)||""}"
                    tabindex="${m?-1:0}"
                    aria-label="Step ${h==null?void 0:h.state}"
                    @click=${()=>this._onStepClick(h,b)}
                    @keydown=${g}
                  >
                    <span class="dss-bubble-label ${e(v)}"
                      >${h.label}</span
                    >
                  </li>
                `})}
            </ol>
          `}
    `}}__decorateClass$x([n({type:[]})],Stepper.prototype,"steps");__decorateClass$x([n({type:Number})],Stepper.prototype,"currentStep");__decorateClass$x([n(booleanType)],Stepper.prototype,"column");__decorateClass$x([n(booleanType)],Stepper.prototype,"circular");__decorateClass$x([n(booleanType)],Stepper.prototype,"hideLabel");__decorateClass$x([n({type:String})],Stepper.prototype,"size");const tabsListStyles=':host{width:100%;height:-moz-fit-content;height:fit-content}:not(:defined){display:none}.dss-tabs{width:100%;height:-moz-fit-content;height:fit-content}.dss-tabs-header{display:flex;align-items:center;position:relative;width:100%;overflow:hidden}.dss-tabs-scroll-button{all:unset;cursor:pointer;display:none;position:absolute;top:0;bottom:0;padding:0 var(--dss-spacing-sm);z-index:900}.dss-tabs-scroll-button:before{content:"";display:block;position:absolute;top:0;bottom:2px;width:220px;background-color:red;z-index:-1;pointer-events:none}.dss-tabs-scroll-button--prev{left:0;padding-right:var(--dss-spacing-lg)}.dss-tabs-scroll-button.dss-tabs-scroll-button--prev:before{left:0;background:linear-gradient(to right,white,transparent)}.dss-tabs-scroll-button--next{right:0;padding-left:var(--dss-spacing-lg)}.dss-tabs-scroll-button.dss-tabs-scroll-button--next:before{right:0;background:linear-gradient(to left,white,transparent)}.dss-tabs-menu{box-sizing:border-box;min-height:48px;min-width:100%;display:flex;overflow-x:auto;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none;border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-200)}.dss-tabs-menu::-webkit-scrollbar{display:none}.dss-tabs-item{position:relative;white-space:nowrap;box-sizing:border-box;min-height:48px;display:flex;align-items:center;font-family:var(--font-family);font-size:14px;font-weight:600;line-height:24px;background-color:transparent;border:0;cursor:pointer;padding:var(--dss-spacing-sm);transition:color .3s ease-in-out}.dss-tabs-item:focus-visible{outline:var(--color-primary-200) solid var(--dss-border-width-lg);border-radius:var(--dss-radius-xs)}.dss-tabs-item:not(.dss-tabs-item--selected):not(:disabled):hover{color:var(--color-primary-600)}.dss-tabs-item:active{color:var(--color-primary-700)}.dss-tabs-item:disabled{color:var(--color-neutral-500);cursor:not-allowed}.dss-tabs-item:before{position:absolute;content:"";display:block;width:100%;height:var(--dss-border-width-md);background-color:transparent;left:0;bottom:-1px;transition:background-color .3s ease-in-out;border-radius:var(--dss-border-width-md)}.dss-tabs-item.dss-tabs-item--selected:before{background-color:var(--color-primary-500)}.dss-tabs-button{margin:0}::slotted(dss-icon-badge),::slotted(dss-notification-badge),::slotted(dss-badge){display:inline;margin-right:var(--dss-spacing-xs)!important}',tabsListTemplate=d=>x`
  <div class="dss-tabs">
    <div class="dss-tabs-header">
      <button
        class="dss-tabs-scroll-button dss-tabs-scroll-button--prev"
        @click=${()=>d._scrollMenu(-1)}
      >
        <i class="dss-icon dss-icon--md">chevron_left</i>
      </button>

      <div
        role="tablist"
        aria-label="${d._label}"
        class="dss-tabs-menu"
      >
        ${d._tabs.map(t=>x`
              <button
                id="${t.id}"
                class="dss-tabs-item ${o(t.selected?"dss-tabs-item--selected":"")}"
                type="button"
                part="button"
                role="tab"
                aria-selected="${o(t.selected?t.selected:"false")}"
                tabindex="${o(t.selected?0:-1)}"
                @click=${()=>d.changeTab(t.panel)}
                ?disabled=${t.disabled}
              >
                <slot name="badge-${t.id}" class="tab-badge"></slot>
                <span class="tab-text focus"> ${t.text} </span>
              </button>
            `)}
        ${d._addTabEnabled?x`
              <div class="dss-tabs-item">
                <dss-button
                  size="md"
                  type="secondary"
                  icon="add"
                  label="${d._addTabText}"
                  @onClick="${d.addNewTab}"
                ></dss-button>
              </div>
            `:null}
      </div>

      <button
        class="dss-tabs-scroll-button dss-tabs-scroll-button--next"
        @click=${()=>d._scrollMenu(1)}
      >
        <i class="dss-icon dss-icon--md">chevron_right</i>
      </button>
    </div>

    <div class="dss-tabs-body">
      <slot></slot>
    </div>
  </div>
`;var __defProp$w=Object.defineProperty,__getOwnPropDesc$w=Object.getOwnPropertyDescriptor,__decorateClass$w=(d,t,a,c)=>{for(var l=__getOwnPropDesc$w(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$w(t,a,l),l};class TabsList extends r$1{constructor(){super(),this._dssTabsId="",this._label="Tabs component name",this._tabs=[],this._tabsElements=window.document.querySelectorAll("[role='tab']"),this._firstTab=document.createElement("div"),this._lastTab=document.createElement("div"),this._addTabEnabled=!1,this._addTabText="Afegir Tab",this._handleUpdateArrowsBound=this._updateArrows.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(tabsListStyles)]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleUpdateArrowsBound)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._menu)==null||t.removeEventListener("scroll",this._handleUpdateArrowsBound),window.removeEventListener("resize",this._handleUpdateArrowsBound)}set dssTabsId(t){const a=this._dssTabsId;this._dssTabsId=t,this.requestUpdate("dssTabsId",a)}set label(t){const a=this._label;this._label=t,this.requestUpdate("selectedTab",a)}set tabs(t){const a=this._tabs;this._tabs=t,this.requestUpdate("tabs",a)}set addTabText(t){const a=this._addTabText;this._addTabText=t,this.requestUpdate("addTabText",a)}set addTabEnabled(t){const a=this._addTabEnabled;this._addTabEnabled=t,this.requestUpdate("addTabEnabled",a)}get _header(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector(".dss-tabs-header"))||void 0}get _menu(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector(".dss-tabs-menu"))||void 0}get _prevScroll(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector(".dss-tabs-scroll-button--prev"))||void 0}get _nextScroll(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector(".dss-tabs-scroll-button--next"))||void 0}updated(t){t.has("tabs")&&this.changeTabWatch()}async changeTabWatch(){this._tabsElements=this.renderRoot.querySelectorAll("[role='tab']"),this._tabsElements.forEach(t=>{t.addEventListener("keydown",a=>{this._handleKeydown(a)}),t.addEventListener("click",a=>{this.setSelectedTab(a.currentTarget)})}),this.setFirstAndLastTabs()}setFirstAndLastTabs(){let t=!1;this._tabsElements.forEach(a=>{t||(this._firstTab=a,t=!0),this._lastTab=a})}changeTab(t){const a={detail:{selectedPanel:t},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onChangeDssTab",a)),this.updatePanels(t)}updatePanels(t){window.document.querySelectorAll("dss-tabs-panel").forEach(c=>{const l=c.getAttribute("panelId");c.getAttribute("linkedTo")===this._dssTabsId&&(l===t?c.setAttribute("selected","true"):c.removeAttribute("selected"))})}_handleKeydown(t){const a=t,c=t.currentTarget;let l=!1;switch(a.key){case"ArrowLeft":this.moveFocusToPreviousTab(c),l=!0;break;case"ArrowRight":this.moveFocusToNextTab(c),l=!0;break;case"Home":this.moveFocusToTab(this._firstTab),l=!0;break;case"End":this.moveFocusToTab(this._lastTab),l=!0;break}l&&(t.stopPropagation(),t.preventDefault())}moveFocusToTab(t){t&&t.focus()}moveFocusToPreviousTab(t){let a=0;t===this._firstTab?this.moveFocusToTab(this._lastTab):(this._tabsElements.forEach((c,l)=>{c===t&&(a=l)}),this.moveFocusToTab(this._tabsElements[a-1]))}moveFocusToNextTab(t){let a=0;t===this._lastTab?this.moveFocusToTab(this._firstTab):(this._tabsElements.forEach((c,l)=>{c===t&&(a=l)}),this.moveFocusToTab(this._tabsElements[a+1]))}setSelectedTab(t){for(let a=0;a<this._tabsElements.length;a+=1){const c=this._tabsElements[a];t===c?(c.setAttribute("aria-selected","true"),c.removeAttribute("tabindex"),c.classList.add("dss-tabs-item--selected"),c.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})):(c.setAttribute("aria-selected","false"),c.setAttribute("tabindex","-1"),c.classList.remove("dss-tabs-item--selected"))}}addNewTab(){const t={detail:{},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAddDssTab",t))}_updateArrows(){if(this._menu&&this._prevScroll&&this._nextScroll){const t=Math.ceil(this._menu.scrollLeft),a=Math.ceil(this._menu.scrollWidth-this._menu.clientWidth);this._prevScroll.style.display=t>0?"block":"none",this._nextScroll.style.display=t<a?"block":"none"}}_scrollMenu(t){this._menu&&this._menu.scrollBy({left:t*160,behavior:"smooth"})}async firstUpdated(){await this.updateComplete,this._menu&&this._menu.addEventListener("scroll",this._handleUpdateArrowsBound),this._updateArrows()}render(){return tabsListTemplate(this)}}__decorateClass$w([n({type:String})],TabsList.prototype,"dssTabsId");__decorateClass$w([n({type:String})],TabsList.prototype,"label");__decorateClass$w([n({type:Array})],TabsList.prototype,"tabs");__decorateClass$w([n({type:String})],TabsList.prototype,"addTabText");__decorateClass$w([n(booleanType)],TabsList.prototype,"addTabEnabled");const tabsPanelStyles=":host{width:100%;height:-moz-fit-content;height:fit-content}:not(:defined){display:none}[role=tabpanel]{width:100%;display:none}[role=tabpanel].has-scroll{overflow:auto}[role=tabpanel].selected{display:block}",tabsPanelTemplate=d=>{const t={selected:d._selected,"is-hidden":!d._selected,"has-scroll":d._hasScroll};return x`
    <div
      id="${d._panelId}"
      role="tabpanel"
      aria-label="${d._label}"
      linkedTo="${d._linkedTo}"
      class="${e(t)}"
    >
      <slot></slot>
    </div>
  `};var __defProp$v=Object.defineProperty,__getOwnPropDesc$v=Object.getOwnPropertyDescriptor,__decorateClass$v=(d,t,a,c)=>{for(var l=__getOwnPropDesc$v(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$v(t,a,l),l};class TabsPanel extends r$1{constructor(){super(...arguments),this._panelId="",this._label="",this._linkedTo="",this._selected=!1,this._hasScroll=!1}static get styles(){return r$2(tabsPanelStyles)}set panelId(t){const a=this._panelId;this._panelId=t,this.requestUpdate("panelId",a)}set label(t){const a=this._label;this._label=t,this.requestUpdate("label",a)}set linkedTo(t){const a=this._linkedTo;this._linkedTo=t,this.requestUpdate("linkedTo",a)}set selected(t){const a=this._selected;this._selected=t,this.requestUpdate("selected",a)}set hasScroll(t){const a=this._hasScroll;this._hasScroll=t,this.requestUpdate("hasScroll",a)}render(){return tabsPanelTemplate(this)}}__decorateClass$v([n({type:String})],TabsPanel.prototype,"panelId");__decorateClass$v([n({type:String})],TabsPanel.prototype,"label");__decorateClass$v([n({type:String})],TabsPanel.prototype,"linkedTo");__decorateClass$v([n(booleanType)],TabsPanel.prototype,"selected");__decorateClass$v([n(booleanType)],TabsPanel.prototype,"hasScroll");const radioStyles='.dss-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--color-white);margin:0;color:var(--color-primary-500);width:20px;height:20px;border:var(--dss-border-width-sm) solid var(--color-primary-500);border-radius:50%;transform:translateY(-.075em);display:grid;place-content:center;cursor:pointer;transition:.3s all linear;flex-shrink:0;margin:var(--dss-spacing-tiny)}.dss-radio:before{content:"";width:10px;height:10px;border-radius:50%;transform:scale(0);transition:.3s transform ease-in-out;box-shadow:inset 1rem 1rem var(--color-primary-500);background-color:var(--color-white)}.dss-radio:checked{border:var(--dss-border-width-sm) solid var(--color-primary-500)}.dss-radio:checked:before{transform:scale(1);box-shadow:inset 1rem 1rem var(--color-primary-500)}.dss-radio:checked:hover{border:var(--dss-border-width-sm) solid var(--color-primary-600);transition:.3s all linear}.dss-radio:checked:hover:before{transform:scale(1);box-shadow:inset 1rem 1rem var(--color-primary-600);transition:.3s all linear}.dss-radio:checked:disabled{cursor:not-allowed}.dss-radio:checked:disabled:before{box-shadow:inset 1rem 1rem var(--color-neutral-400)}.dss-radio:hover{border:var(--dss-border-width-sm) solid var(--color-neutral-600);transition:.3s all linear}.dss-radio:disabled{cursor:not-allowed;border:var(--dss-border-width-sm) solid var(--color-neutral-400)}.dss-radio:focus-visible:enabled{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}',styles$5=":host{display:block;width:100%}.dss-table-header{padding:var(--dss-spacing-md) 0}.dss-table-header-title{display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-xs);margin-bottom:var(--dss-spacing-md)}.dss-table-header-title__text{color:var(--color-neutral-900);font-weight:var(--font-bold);font-size:20px}.dss-table-header-title__action{display:flex;justify-content:flex-end;align-items:center;gap:var(--dss-spacing-xxs);font-size:14px;color:var(--color-primary-700);cursor:pointer;border-radius:var(--dss-radius-xs);font-weight:var(--font-semibold)}.dss-table-header-title__action:hover{color:var(--color-primary-600)}.dss-table-header-title__action:active{color:var(--color-primary-400)}.dss-table-header-title__action:focus-visible{outline:var(--dss-border-width-md) solid var(--color-blue-200)}.dss-table-header-filters{display:flex;justify-content:space-between;align-items:center}.dss-table-header-filters__filters{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-md);width:70%;box-sizing:border-box}.dss-table-header-filters--inner .dss-table-header-filters__filters{width:80%}.filters-label{font-size:14px;font-weight:var(--font-bold);color:var(--color-neutral-600)}.filters-list{display:flex;flex-wrap:wrap;max-width:60%;gap:var(--dss-spacing-xs)}.filters-list-empty{font-size:14px;color:var(--color-neutral-600)}.filters-clean{padding-left:var(--dss-spacing-md);border-left:var(--dss-border-width-sm) solid var(--color-neutral-100)}.dss-table-header-filters__actions{display:flex;justify-content:flex-end;align-items:center;gap:var(--dss-spacing-md);width:30%;box-sizing:border-box}.dss-table-header-filters--inner .dss-table-header-filters__actions{width:20%}::slotted(div.dss-table-filters){width:100%;display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs)}";var __defProp$u=Object.defineProperty,__getOwnPropDesc$u=Object.getOwnPropertyDescriptor,__decorateClass$u=(d,t,a,c)=>{for(var l=__getOwnPropDesc$u(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$u(t,a,l),l};class TableHeader extends r$1{constructor(){super(...arguments),this._filters=[],this._headerTitle="",this._innerFilters=!1,this._expandTable=!1,this._expandLabel="Ampliar",this._collapseLabel="Reduir",this._rowsOnCollapsed=5,this._filtersLabel="Selecció",this._cleanFiltersLabel="Netejar filtres",this._openFiltersLabel="Filtres",this._noFiltersLabel="No hi ha filtres seleccionats",this._hideHeaderTitleAndExpand=!1}static get styles(){return[r$2(iconStyles),r$2(buttonStyles),r$2(iconButtonStyles),r$2(chipStyles),r$2(checkboxStyles),r$2(radioStyles),r$2(styles$5),r$2(badgeStates)]}set filters(t){const a=this._filters;this._filters=t,this.requestUpdate("filters",a)}set headerTitle(t){const a=this._headerTitle;this._headerTitle=t,this.requestUpdate("headerTitle",a)}set hideHeaderTitleAndExpand(t){const a=this._hideHeaderTitleAndExpand;this._hideHeaderTitleAndExpand=t,this.requestUpdate("hideHeaderTitleAndExpand",a)}set innerFilters(t){const a=this._innerFilters;this._innerFilters=t,this.requestUpdate("innerFilters",a)}set expandTable(t){const a=this._expandTable;this._expandTable=t,this.requestUpdate("expandTable",a)}set expandLabel(t){const a=this._expandLabel;this._expandLabel=t,this.requestUpdate("expandLabel",a)}set collapseLabel(t){const a=this._collapseLabel;this._collapseLabel=t,this.requestUpdate("collapseLabel",a)}set rowsOnCollapsed(t){const a=this._rowsOnCollapsed;this._rowsOnCollapsed=t,this.requestUpdate("rowsOnCollapsed",a)}set filtersLabel(t){const a=this._filtersLabel;this._filtersLabel=t,this.requestUpdate("filtersLabel",a)}set cleanFiltersLabel(t){const a=this._cleanFiltersLabel;this._cleanFiltersLabel=t,this.requestUpdate("cleanFiltersLabel",a)}set noFiltersLabel(t){const a=this._noFiltersLabel;this._noFiltersLabel=t,this.requestUpdate("noFiltersLabel",a)}_generateFilterChips(){let t;return this._filters&&(t=this._filters.map(a=>{const c=p=>{const b=p.target.getAttribute("term");typeof a=="string"?this._filters=this._filters.filter(g=>g!==b):this._filters=this._filters.filter(g=>g.value.trim()!==(b==null?void 0:b.trim())),this._emitChangeFilters(),this.requestUpdate()};return x`
          <span tabindex="0" class="dss-chip dss-chip--sm dss-chip--selected">
            ${typeof a==="string"?x`
                  ${a}
                  <button
                    class="dss-chip__icon-button dss-icon-button dss-icon-button--primary dss-icon-button--sm"
                    @click="${c}"
                  >
                    <span class="dss-icon dss-icon--sm" term="${a}">cancel</span>
                  </button>
                `:x`
                  <span class="dss-icon">${a.icon}</span>
                  ${a.value}
                  <button
                    class="dss-chip__icon-button dss-icon-button dss-icon-button--primary dss-icon-button--sm"
                    @click="${c}"
                  >
                    <span class="dss-icon dss-icon--sm" term=" ${a.value}"
                      >cancel</span
                    >
                  </button>
                `}
          </span>
        `})),t}_clearFilters(){this._filters=[],this._emitChangeFilters(),this.requestUpdate()}_emitExpandAction(){this._expandTable=!this._expandTable;const t={detail:this._expandTable,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onExpand",t)),this.requestUpdate()}_emitOpenFilters(){const t={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onOpenFilters",t)),this.requestUpdate()}_emitChangeFilters(){const t={detail:this._filters,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onChangeFilters",t)),this.requestUpdate()}render(){return x`
      <div class="dss-table-header">
        ${this._hideHeaderTitleAndExpand?null:x`
              <div class="dss-table-header-title">
                <div class="dss-table-header-title__text">
                  ${this._headerTitle}
                </div>
                <div
                  class="dss-table-header-title__action"
                  role="button"
                  tabindex="0"
                  @click="${this._emitExpandAction}"
                >
                  ${this._expandTable?x`
                        <span class="dss-icon dss-icon--sm"
                          >fullscreen_exit</span
                        >
                        <span>${this._collapseLabel}</span>
                      `:x`
                        <span class="dss-icon dss-icon--sm">fullscreen</span>
                        <span>${this._expandLabel}</span>
                      `}
                </div>
              </div>
            `}
        ${this._innerFilters?x`
              <div
                class="dss-table-header-filters dss-table-header-filters--inner"
              >
                <div class="dss-table-header-filters__filters">
                  <slot name="filters"></slot>
                </div>
                <div class="dss-table-header-filters__actions"></div>
              </div>
            `:x`
              <div
                class="dss-table-header-filters dss-table-header-filters--outer"
              >
                <div class="dss-table-header-filters__filters">
                  <div class="filters-label">${this._filtersLabel}:</div>
                  <div class="filters-list">
                    ${this._filters.length>0?x` ${this._generateFilterChips()} `:x`
                          <span class="filters-list-empty">
                            ${this._noFiltersLabel}
                          </span>
                        `}
                  </div>
                  <div class="filters-clean">
                    ${this._filters.length>0?x`
                          <button
                            type="button"
                            class="dss-button dss-button--sm dss-button--secondary dss-button--icon-left"
                            @click=${this._clearFilters}
                          >
                            <span class="material-symbols-rounded">mop</span
                            >${this._cleanFiltersLabel}
                          </button>
                        `:null}
                  </div>
                </div>

                <div class="dss-table-header-filters__actions">
                  <button
                    type="button"
                    class="dss-button dss-button--md dss-button--secondary dss-button--icon-left"
                    @click=${this._emitOpenFilters}
                  >
                    <span class="material-symbols-rounded">filter_list</span>
                    ${this._openFiltersLabel}
                  </button>
                </div>
              </div>
            `}
      </div>
    `}}__decorateClass$u([n({type:Array})],TableHeader.prototype,"filters");__decorateClass$u([n({type:String})],TableHeader.prototype,"headerTitle");__decorateClass$u([n(booleanType)],TableHeader.prototype,"hideHeaderTitleAndExpand");__decorateClass$u([n(booleanType)],TableHeader.prototype,"innerFilters");__decorateClass$u([n(booleanType)],TableHeader.prototype,"expandTable");__decorateClass$u([n({type:String})],TableHeader.prototype,"expandLabel");__decorateClass$u([n({type:String})],TableHeader.prototype,"collapseLabel");__decorateClass$u([n({type:Number})],TableHeader.prototype,"rowsOnCollapsed");__decorateClass$u([n({type:String})],TableHeader.prototype,"filtersLabel");__decorateClass$u([n({type:String})],TableHeader.prototype,"cleanFiltersLabel");__decorateClass$u([n({type:String})],TableHeader.prototype,"noFiltersLabel");const styles$4=":host{width:100%;display:flex;justify-content:flex-end;height:-moz-fit-content;height:fit-content;font-family:var(--font-family);font-style:normal;border-top:2px solid var(--color-neutral-700)}.pagination__container{display:flex;align-items:center;padding:.5rem .75rem;gap:1rem}.pagination__results{font-weight:600;font-size:.875rem;line-height:1.5rem;color:#0073e6}.pagination__divider{height:1rem;border-left:1px solid rgb(216,216,216)}.pagination__text{font-weight:400;font-size:12px;line-height:1rem;color:#656565}.pagination__button{color:#0073e6;font-size:1.5rem;padding:0;align-items:center;background-color:transparent;border:none;border-radius:100%;cursor:pointer;display:flex;height:-moz-fit-content;height:fit-content;justify-content:center;transition:all .3s ease-in;width:-moz-fit-content;width:fit-content;font-family:var(--font-icons);width:2rem;height:2rem}.pagination__button:hover:enabled{background-color:#bfddfa}.pagination__button:focus-visible:enabled{outline:.25rem solid #8fc2f5;transition:none}.pagination__button:active:enabled{background-color:#eff7ff;transition:none}.pagination__button:disabled{transition:none;opacity:.4;cursor:not-allowed}.pagination__row-page{display:flex;align-items:center;gap:1rem}.pagination__buttons{display:flex;align-items:center}.pagination__select{background:#eff7ff;border-radius:4px;position:relative}.pagination__select select{border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;padding:7px 32px 7px 12px;color:#00356a;font-weight:400;font-size:12px;line-height:1rem;position:inherit;z-index:1;font-family:var(--font-family)}.pagination__select select:active,.pagination__select select:focus-visible{outline:none}.pagination__arrow-down{position:absolute;height:100%;display:flex;align-items:center;top:0;right:12px;color:#00356a}.pagination-select-options:disabled{background-color:var(--color-neutral-50);color:var(--color-neutral-500);cursor:not-allowed}";var __defProp$t=Object.defineProperty,__getOwnPropDesc$t=Object.getOwnPropertyDescriptor,__decorateClass$t=(d,t,a,c)=>{for(var l=__getOwnPropDesc$t(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$t(t,a,l),l};class TablePagination extends r$1{constructor(){super(...arguments),this._length=0,this._pageSizeOptions=[],this._pageSize=10,this._totalPages=0,this._currentIndex=1,this._startIndex=1,this._endIndex=this._pageSize,this._rowsPerPageText="Files per pàgina",this._resultsText="Resultats",this._pageSizeOptionsDisabled=!1,this._hidePaginationResults=!1}static get styles(){return[r$2(iconStyles),r$2(styles$4)]}set length(t){const a=this._length;this._length=t,this.requestUpdate("length",a)}set pageSize(t){const a=this._pageSize;this._pageSize=t,this.requestUpdate("pageSize",a)}set pageSizeOptions(t){const a=this._pageSizeOptions;this._pageSizeOptions=t,this.requestUpdate("pageSizeOptions",a)}set pageSizeOptionsDisabled(t){const a=this._pageSizeOptionsDisabled;this._pageSizeOptionsDisabled=t,this.requestUpdate("pageSizeOptionsDisabled",a)}set currentIndex(t){const a=this._currentIndex;this._currentIndex=t,this.requestUpdate("currentIndex",a)}set rowsPerPageText(t){const a=this._rowsPerPageText;this._rowsPerPageText=t,this.requestUpdate("rowsPerPageText",a)}set resultsText(t){const a=this._resultsText;this._resultsText=t,this.requestUpdate("resultsText",a)}set hidePaginationResults(t){const a=this._hidePaginationResults;this._hidePaginationResults=t,this.requestUpdate("hidePaginationResults",a)}_next(){this._currentIndex++,this._startIndex+=this._pageSize,this._endIndex+=this._pageSize,this._currentIndex===this._totalPages&&(this._endIndex=this._length),this._emitCurrentPage(),this.requestUpdate()}_prev(){const t=Math.abs(this._startIndex-this._endIndex)+1;this._startIndex-=this._pageSize,this._endIndex-=this._currentIndex===this._totalPages?t:this._pageSize,this._currentIndex--,this._emitCurrentPage(),this.requestUpdate()}_handleChange(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector("#pagination-select");this._pageSize=Number(t.value),this._reload(this._startIndex),this._emitCurrentPage(),this.requestUpdate()}_emitCurrentPage(){this.dispatchEvent(new CustomEvent("onChangePage",{detail:{currentIndex:this._currentIndex,startIndex:this._startIndex,endIndex:this._endIndex,pageSize:this._pageSize},bubbles:!0,composed:!0}))}_reload(t){this._currentIndex=Math.ceil(t/this._pageSize),this._reset(!0)}_reset(t){this._totalPages=Math.ceil(this._length/this._pageSize),t||(this._currentIndex<1?this._currentIndex=1:this._currentIndex>this._totalPages&&(this._currentIndex=this._totalPages)),this._startIndex=(this._currentIndex-1)*this._pageSize+1,this._endIndex=this._startIndex-1+this._pageSize,this._endIndex>this._length&&(this._endIndex=this._length)}_getDefaultPageSize(){var a;const t=this._pageSizeOptions.includes(this._pageSize);return(a=this._pageSizeOptions)!=null&&a.length?t?this._pageSize:this._pageSizeOptions[0]:this._pageSize}_printStartIndex(){return this._startIndex<=0||this._length<=0?"0":this._startIndex.toString()}async firstUpdated(){try{await this.updateComplete,this._pageSize=this._getDefaultPageSize(),this._reset(),this._emitCurrentPage(),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}willUpdate(t){const a=t.has("length"),c=t.has("pageSize"),l=t.has("pageSizeOptions");(a||c||l)&&(this._pageSize=this._getDefaultPageSize(),this._reset(),this.requestUpdate())}render(){var t;return x`
      <div class="pagination__container">
        ${this._hidePaginationResults?null:x`
              <span class="pagination__results"
                >${this._length} ${this._resultsText}</span
              >
              <div class="pagination__divider"></div>
            `}
        ${(t=this._pageSizeOptions)!=null&&t.length?x`
              <div class="pagination__row-page">
                <span class="pagination__text">${this._rowsPerPageText}</span>
                <div class="pagination__select">
                  <select
                    id="pagination-select"
                    class="pagination-select-options"
                    @change=${this._handleChange}
                    aria-label="Seleccionar la mida de la pàgina"
                    ?disabled=${this._pageSizeOptionsDisabled}
                  >
                    ${this._pageSizeOptions.map(a=>x`
                          <option
                            value="${a}"
                            .selected=${this._pageSize===a}
                          >
                            ${a}
                          </option>
                        `)}
                  </select>
                  <span class="material-symbols-rounded pagination__arrow-down">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
              <span class="pagination__text">
                ${this._printStartIndex()}-${this._endIndex.toString()} de
                ${this._length}
              </span>
              <div class="pagination__buttons">
                <button
                  type="button"
                  class="pagination__button ${this._currentIndex}"
                  @click=${this._prev}
                  ?disabled=${+this._currentIndex==1||+this._length<=0}
                >
                  <span>keyboard_arrow_left</span>
                </button>
                <button
                  type="button"
                  class="pagination__button"
                  @click=${this._next}
                  ?disabled=${+this._currentIndex==+this._totalPages||+this._length<=0}
                >
                  <span>keyboard_arrow_right</span>
                </button>
              </div>
            `:x`
              <button
                type="button"
                class="pagination__button"
                @click=${this._prev}
                ?disabled=${+this._currentIndex==1||+this._length<=0}
              >
                <span>keyboard_arrow_left</span>
              </button>
              <span class="pagination__text">
                ${this._printStartIndex()} - ${this._endIndex.toString()} de
                ${this._length.toString()}
              </span>
              <button
                type="button"
                class="pagination__button"
                @click=${this._next}
                ?disabled=${+this._currentIndex===this._totalPages||+this._length<=0}
              >
                <span>keyboard_arrow_right</span>
              </button>
            `}
      </div>
    `}}__decorateClass$t([n({type:Number})],TablePagination.prototype,"length");__decorateClass$t([n({type:Number})],TablePagination.prototype,"pageSize");__decorateClass$t([n({type:Array})],TablePagination.prototype,"pageSizeOptions");__decorateClass$t([n(booleanType)],TablePagination.prototype,"pageSizeOptionsDisabled");__decorateClass$t([n({type:String})],TablePagination.prototype,"currentIndex");__decorateClass$t([n({type:String})],TablePagination.prototype,"rowsPerPageText");__decorateClass$t([n({type:String})],TablePagination.prototype,"resultsText");__decorateClass$t([n(booleanType)],TablePagination.prototype,"hidePaginationResults");const styles$3='::slotted(label){font-style:normal;font-weight:400;font-size:14px;line-height:24px;cursor:text;position:absolute}::slotted(textarea){resize:vertical;outline:none;border:0;font-size:14px;line-height:24px;font-style:normal;color:#1d1d1d;width:100%;text-overflow:ellipsis;font-family:var(--font-family)}::slotted(textarea)::-moz-placeholder{color:#9f9f9f}::slotted(textarea)::placeholder{color:#9f9f9f}.dss-textarea{display:flex;flex-direction:column;color:#656565}.dss-textarea--disabled{opacity:.6}.dss-textarea--disabled .dss-textarea__group:after{background:#f5f5f5}.dss-textarea--gap{gap:4px}.dss-textarea__content{display:flex;align-items:flex-start;flex:1}.dss-textarea--disabled .dss-textarea__group,.dss-textarea--disabled ::slotted(textarea){background-color:#f5f5f5;cursor:not-allowed}.dss-textarea--disabled ::slotted(label),.dss-textarea--disabled ::slotted(textarea){cursor:not-allowed}.dss-textarea__group{position:relative;background:#fff;border:var(--dss-border-width-sm) solid var(--color-neutral-100);border-radius:8px;padding:12px;display:flex;gap:8px;min-height:24px}.dss-textarea__group:after{pointer-events:none;content:"height";font-family:var(--font-icons);font-size:0px;position:absolute;height:0px;width:0px;text-align:center;bottom:4px;right:3px;z-index:2;border-radius:8px;background:transparent}.dss-textarea__group--required ::slotted(label):before{content:"*"}.dss-textarea__group:focus-visible,.dss-textarea__group--focused-visible,.dss-textarea--invalid .dss-textarea__group:focus-visible{border-color:var(--color-blue-200);outline:var(--dss-border-width-lg) solid var(--color-blue-200);box-shadow:none;background-color:#fff}.dss-textarea__group--readOnly{border-top:0;border-left:0;border-right:0;border-radius:0}.dss-textarea--invalid .dss-textarea__group:focus-visible ::slotted(textarea){background-color:#fff}.dss-textarea__group--focused{padding:4px 12px}.dss-textarea__group--focused .dss-textarea__content ::slotted(label){font-size:12px;line-height:16px;transition:.3s;top:4px}.dss-textarea__group--focused .dss-textarea__content ::slotted(textarea){margin-top:16px!important}.dss-textarea--invalid ::slotted(textarea){background-color:#fff6f6;color:#1d1d1d}.dss-textarea--invalid ::slotted(textarea)::-moz-placeholder{color:#d36262}.dss-textarea--invalid ::slotted(textarea)::placeholder{color:#d36262}.dss-textarea--invalid .dss-textarea__group{box-shadow:inset 0 0 0 1px #b60000}.dss-textarea--invalid .dss-textarea__group,.dss-textarea--invalid .dss-textarea__group:after{background-color:#fff6f6;color:#b60000}.dss-textarea__help{font-style:normal;font-weight:400;font-size:12px;line-height:16px;display:flex;padding:0 12px;gap:8px}.dss-textarea__help .dss-textarea__description{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dss-textarea--invalid .dss-textarea__help,.dss-textarea--invalid .dss-textarea__help:after{color:#b60000}';var __defProp$s=Object.defineProperty,__getOwnPropDesc$s=Object.getOwnPropertyDescriptor,__decorateClass$s=(d,t,a,c)=>{for(var l=__getOwnPropDesc$s(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$s(t,a,l),l};class Textarea extends r$1{constructor(){super(...arguments),this._maxLength=0,this._isTextareaFocused=!1,this._isGroupFocusedVisible=!1,this._showError=!1}static get styles(){return r$2(styles$3)}set value(t){t!==void 0&&this.requestUpdate()}set showError(t){const a=this._showError;this._showError=t,this.requestUpdate("showError",a)}get _label(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="label"]'))||void 0;return t==null?void 0:t.assignedElements()[0]}get _textarea(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="textarea"]'))||void 0;return t==null?void 0:t.assignedElements()[0]}get _description(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="description"]'))||void 0;return t==null?void 0:t.assignedElements()[0]}async firstUpdated(){try{await this.updateComplete;const{maxLength:t}=this._textarea;this._maxLength=t>0?t:0,this._addEventListeners(),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}_addEventListeners(){this._textarea.addEventListener("input",this._handleInput.bind(this)),this._textarea.addEventListener("focus",this._handleFocus.bind(this)),this._textarea.addEventListener("focusout",this._handleFocusOut.bind(this)),this._textarea.addEventListener("blur",this._handleBlur.bind(this)),this._label.addEventListener("click",this._handelLabelClick.bind(this)),this._textarea.addEventListener("keyup",this._handleKeyup.bind(this))}_handleInput(){this.requestUpdate()}_handleKeyup(t){(t.keyCode?t.keyCode:t.which)===9&&this._handleFocus()}_handleFocus(){this._isGroupFocusedVisible=!0,this._isTextareaFocused=!0,this.requestUpdate()}_handleFocusOut(){this._handleBlur(),this._isGroupFocusedVisible=!1,this._isTextareaFocused=!1,this.requestUpdate()}_handleBlur(){this._isTextareaFocused=!1,this.requestUpdate()}_handelLabelClick(){this._textarea.focus(),this.requestUpdate()}_handleSlotChange(){this.requestUpdate()}render(){var c,l,h,p,b,g,m;const t={"dss-textarea--invalid":this._showError,"dss-textarea--disabled":(c=this._textarea)==null?void 0:c.disabled,"dss-textarea--gap":this._maxLength||!!this._description},a={"dss-textarea__group--focused":((l=this._textarea)==null?void 0:l.value)||this._isTextareaFocused||((h=this._textarea)==null?void 0:h.placeholder),"dss-textarea__group--focused-visible":this._isGroupFocusedVisible,"dss-textarea__group--required":(p=this._textarea)==null?void 0:p.required,"dss-textarea__group--readOnly":(b=this._textarea)==null?void 0:b.readOnly};return x`
      <div class="dss-textarea ${e(t)}">
        <div class="dss-textarea__group ${e(a)}">
          <div class="dss-textarea__content">
            <slot name="label"></slot>
            <slot
              name="textarea"
              @focusin=${this._handleFocus}
              @focusout=${this._handleFocusOut}
            ></slot>
          </div>
        </div>
        <div class="dss-textarea__help">
          <div class="dss-textarea__description">
            <slot
              name="description"
              @slotchange=${this._handleSlotChange}
            ></slot>
          </div>
          ${this._maxLength?x`<span
                >${(m=(g=this._textarea)==null?void 0:g.value)==null?void 0:m.length}/${this._maxLength}</span
              >`:null}
        </div>
      </div>
    `}}__decorateClass$s([n({type:String})],Textarea.prototype,"value");__decorateClass$s([n(booleanType)],Textarea.prototype,"showError");const styles$2=":host{display:block;height:104px;min-width:240px;width:100%}.dss-tile{box-sizing:border-box;height:104px;width:100%;overflow:hidden;background-color:var(--color-white);border-radius:var(--dss-radius-md);padding:var(--dss-spacing-md);display:flex;align-items:center;justify-content:flex-start;gap:var(--dss-spacing-md);border:var(--dss-border-width-sm) solid var(--color-neutral-100);transition:background-color .3s ease-in}.dss-tile-logo{display:flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:48px;width:48px;height:48px;margin:0;padding:0;overflow:hidden;border-radius:var(--dss-radius-xs)}.dss-tile-logo__image{width:100%;max-width:100%;margin:0;padding:0}.dss-tile-content{width:100%;display:flex;align-items:center;justify-content:space-between;gap:var(--dss-spacing-md);flex:1 1 100%;min-width:0}.dss-tile-content .dss-tile-content__text{overflow:hidden}.dss-tile-title{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;max-height:24px;line-height:24px;font-size:14px;font-weight:var(--font-semibold);color:var(--color-neutral-900);margin:0;overflow:hidden}.dss-tile--disabled .dss-tile-title{color:var(--color-neutral-600)}.dss-tile-description{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;max-height:48px;line-height:24px;font-size:14px;color:var(--color-neutral-600);margin:0}.dss-tile--button:not(.dss-tile--disabled){cursor:pointer;border-color:var(--color-primary-600)}.dss-tile--selected:not(.dss-tile--disabled),.dss-tile--button:not(.dss-tile--disabled):hover,.dss-tile--selector:not(.dss-tile--disabled):hover{border:var(--dss-border-width-md) solid var(--color-primary-500)}.dss-tile--button:not(.dss-tile--disabled):active,.dss-tile--selector:not(.dss-tile--disabled):active{background-color:var(--color-primary-50)}.dss-tile--button:not(.dss-tile--disabled):focus-visible,.dss-tile--selector:not(.dss-tile--disabled):focus-visible{border-color:transparent;outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-tile--disabled{cursor:not-allowed;background-color:var(--color-neutral-50)}.dss-tile--disabled .dss-tile__title{color:var(--color-neutral-500)}::slotted(.dss-tile-action-group){display:flex;justify-content:center;align-items:center;gap:var(--dss-spacing-md)}";var __defProp$r=Object.defineProperty,__getOwnPropDesc$r=Object.getOwnPropertyDescriptor,__decorateClass$r=(d,t,a,c)=>{for(var l=__getOwnPropDesc$r(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$r(t,a,l),l};class Tile extends r$1{constructor(){super(...arguments),this._type="default",this._icon="",this._tileTitle="Title",this._description="Lorem ipsum.",this._selected=!1,this._disabled=!1,this._hasLogo=!1,this._logoURL=""}static get styles(){return[r$2(iconStyles),r$2(decorativeIconStyles),r$2(styles$2)]}set type(t){const a=this._type;this._type=t,this.requestUpdate("type",a)}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}set tileTitle(t){const a=this._tileTitle;this._tileTitle=t,this.requestUpdate("tileTitle",a)}set description(t){const a=this._description;this._description=t,this.requestUpdate("description",a)}set selected(t){const a=this._selected;this._selected=t,this.requestUpdate("selected",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set hasLogo(t){const a=this._hasLogo;this._hasLogo=t,this.requestUpdate("hasLogo",a)}set logoURL(t){const a=this._logoURL;this._logoURL=t,this.requestUpdate("logoURL",a)}_generateTileIconHTML(){const t={"dss-decorative-icon--disabled":this._disabled};return x`
      <div
        class="dss-decorative-icon dss-decorative-icon--xl ${e(t)}"
      >
        <i class="dss-icon dss-icon--xl">${this._icon}</i>
      </div>
    `}_generateTileLogoHTML(){return x`
      <div class="dss-tile-logo">
        <img
          class="dss-tile-logo__image"
          src="${this._logoURL}"
          alt="Tile Logo"
        />
      </div>
    `}_generateTileContentHTML(){return x`
      <div class="dss-tile-content">
        <div class="dss-tile-content__text">
          <h4 class="dss-tile-title">${this._tileTitle}</h4>
          <p class="dss-tile-description">${this._description}</p>
        </div>
        ${this._type==="action"?x` <slot name="action"></slot> `:null}
      </div>
    `}_onClick(){this._type==="selector"&&(this._selected=!this._selected,this.requestUpdate());const t={detail:{title:this._tileTitle},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onTileClick",t))}render(){const t={"dss-tile--button":this._type==="button","dss-tile--selector":this._type==="selector","dss-tile--selected":this._type==="selector"&&this._selected,"dss-tile--action":this._type==="action","dss-tile--disabled":this._disabled};let a=x``;return this._type==="button"||this._type==="selector"?a=x`
        <div
          class="dss-tile ${e(t)}"
          tabindex="${this._disabled?-1:0}"
          role="button"
          @click=${this._onClick}
        >
          ${this._icon&&!this._hasLogo?this._generateTileIconHTML():null}
          ${this._hasLogo?this._generateTileLogoHTML():null}
          ${this._generateTileContentHTML()}
        </div>
      `:a=x`
        <div class="dss-tile ${e(t)}">
          ${this._icon&&!this._hasLogo?this._generateTileIconHTML():null}
          ${this._hasLogo?this._generateTileLogoHTML():null}
          ${this._generateTileContentHTML()}
        </div>
      `,a}}__decorateClass$r([n({type:String})],Tile.prototype,"type");__decorateClass$r([n({type:String})],Tile.prototype,"icon");__decorateClass$r([n({type:String})],Tile.prototype,"tileTitle");__decorateClass$r([n({type:String})],Tile.prototype,"description");__decorateClass$r([n(booleanType)],Tile.prototype,"selected");__decorateClass$r([n(booleanType)],Tile.prototype,"disabled");__decorateClass$r([n(booleanType)],Tile.prototype,"hasLogo");__decorateClass$r([n({type:String})],Tile.prototype,"logoURL");const styles$1=".dss-timepicker{position:relative}.dss-timepicker-help{font-family:var(--font-family)}.dss-timepicker-help{font-family:inherit;font-size:12px;color:var(--color-neutral-700);padding:var(--dss-spacing-xxs) var(--dss-spacing-sm)}.dss-timepicker-help--disabled{color:var(--color-neutral-500)}.dss-timepicker-help--invalid{color:var(--color-red-500)}.dss-timepicker-dropdown{display:none;margin-top:8px;position:absolute;top:52px;left:0;background-color:var(--color-white);width:100%;border-radius:var(--dss-radius-sm);box-shadow:0 4px 8px 3px #0000000d,0 1px 3px #0000001a;z-index:900;overflow:hidden}.dss-input-group--dropdown input{min-width:289px}.dss-timepicker-dropdown--manual{min-width:289px;left:50%;transform:translate(-50%)}.dss-timepicker-dropdown--open{display:block}.dss-timepicker-dropdown--md{top:44px}.dss-timepicker-dropdown--lg{top:52px}.dss-timepicker-dropdown__container{overflow:auto;min-height:70px;max-height:280px;width:100%}.dss-timepicker-dropdown__option{cursor:pointer;position:relative;width:100%}.dss-timepicker-dropdown__label{width:100%;height:40px;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;padding:var(--dss-spacing-xs) var(--dss-spacing-sm);font-size:14px;color:var(--color-neutral-900);cursor:pointer;background-color:var(--color-white)}.dss-timepicker-dropdown__label:hover{background-color:var(--color-primary-600);color:var(--color-white)}.dss-timepicker-dropdown__label:active{background-color:var(--color-primary-400);color:var(--color-white);transition:background-color .3s}.option--busy .dss-timepicker-dropdown__label{background-color:var(--color-red-50)}.option--busy .dss-timepicker-dropdown__label:hover{background-color:var(--color-red-600)}.option--busy .dss-timepicker-dropdown__label:active{background-color:var(--color-red-400)}.option--busy .dss-timepicker-dropdown__label .dss-timepicker-dropdown__icon{color:var(--color-neutral-900)}.dss-timepicker-dropdown__label:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-timepicker-dropdown__label:disabled{background-color:var(--color-neutral-50);color:var(--color-neutral-500);cursor:not-allowed}.dss-timepicker-dropdown__input-radio{display:none}.dss-timepicker-dropdown__input-radio:checked+.dss-timepicker-dropdown__icon{display:block}.dss-timepicker-dropdown__icon{display:none;color:var(--color-primary-500)}.dss-timepicker-dropdown__label:hover .dss-timepicker-dropdown__icon{color:var(--color-white)}.dss-timepicker-dropdown__label:focus-visible{box-shadow:inset 0 0 0 var(--dss-border-width-lg) var(--color-primary-200);border-radius:var(--dss-radius-xs);outline:none}.dss-timepicker-dropdown__manual{height:calc(220px - var(--dss-spacing-xs) - var(--dss-spacing-xs));display:flex;justify-content:center;gap:var(--dss-spacing-xs);overflow:hidden;padding:var(--dss-spacing-xs) 0}.dss-timepicker-dropdown__items{box-sizing:border-box;height:100%;width:55px;overflow-y:auto;scrollbar-width:none}.dss-timepicker-dropdown__items:hover{scrollbar-width:thin}.dss-timepicker-dropdown__actions{display:flex;justify-content:center;align-items:center;height:64px;gap:17px;border-top:var(--dss-border-width-sm) solid var(--color-neutral-200)}.dss-timepicker-manual-item__label{display:flex;justify-content:center;align-items:center;height:40px;width:40px;font-weight:var(--font-semibold);font-size:16px;color:var(--color-neutral-900);border-radius:var(--dss-radius-xs);background-color:var(--color-white);cursor:pointer}.dss-timepicker-manual-item__label:focus-visible{box-shadow:inset 0 0 0 var(--dss-border-width-lg) var(--color-primary-200);border-radius:var(--dss-radius-xs);outline:none}.dss-timepicker-manual-item__label:hover{color:var(--color-white);background-color:var(--color-primary-600)}.dss-timepicker-manual-item__label:active{color:var(--color-white);background-color:var(--color-primary-400);transition:background-color .3s}.dss-timepicker-manual-item__input-radio{display:none}.dss-timepicker-manual-item__input-radio:checked+.dss-timepicker-manual-item__label{color:var(--color-white);background-color:var(--color-primary-500)}";var __defProp$q=Object.defineProperty,__getOwnPropDesc$q=Object.getOwnPropertyDescriptor,__decorateClass$q=(d,t,a,c)=>{for(var l=__getOwnPropDesc$q(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$q(t,a,l),l};class Timepicker extends r$1{constructor(){super(...arguments),this._value="",this._placeholder="",this._inputSize="lg",this._dropdown="",this._required=!1,this._disabled=!1,this._readonly=!1,this._invalid=!1,this._showDropdown=!1,this._helpText="",this._oldHelpText="",this._errorTimeFormatText="Format d'hora no vàlid",this._errorTimeOptionText="Opció de temps no disponible",this._manualHourSelector="",this._manualMinuteSelector="",this._minutesRange=1,this._minHour=0,this._maxHour=24,this._timeListOptions=[],this._customTimeListOptions=[],this._timeManualHourOptions=[],this._timeManualMinutesOptions=[],this._icon="schedule",this._inputValidity=!0,this._isFirstUpdated=!0,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=t=>{for(const a of t)a.type==="attributes"&&(this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback),this._timePattern=/^\d{0,4}$/g,this._timeSeparator=":",this._timeInputOldValue=""}static get styles(){return[r$2(iconStyles),r$2(inputStyles),r$2(scrollbarStyles),r$2(buttonStyles),r$2(styles$1)]}get _input(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}get _label(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="label"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}set value(t){const a=this._value;this._value=t,this._input&&(this._input.value=t),this.requestUpdate("value",a)}set invalid(t){const a=this._invalid;this._invalid=t,this.requestUpdate("invalid",a)}set inputSize(t){const a=this._inputSize;t==="md"?this._inputSize=t:this._inputSize="lg",this.requestUpdate("inputSize",a)}set helpText(t){const a=this._helpText;this._helpText=t,this._oldHelpText=t,this.requestUpdate("helpText",a)}set errorTimeFormatText(t){const a=this._errorTimeFormatText;this._errorTimeFormatText=t,this.requestUpdate("errorTimeFormatText",a)}set errorTimeOptionText(t){const a=this._errorTimeOptionText;this._errorTimeOptionText=t,this.requestUpdate("errorTimeOptionText",a)}set dropdown(t){const a=this._dropdown;this._dropdown=t,this.requestUpdate("dropdown",a)}set showDropdown(t){const a=this._showDropdown;this._showDropdown=t,this.requestUpdate("showDropdown",a)}set minutesRange(t){const a=this._minutesRange;this._minutesRange=t,this._isFirstUpdated||this._updateTimeOptions(),this.requestUpdate("minutesRange",a)}set minHour(t){const a=this._minHour;this._minHour=t,this._isFirstUpdated||this._updateTimeOptions(),this.requestUpdate("minHour",a)}set maxHour(t){const a=this._maxHour;this._maxHour=t,this._isFirstUpdated||this._updateTimeOptions(),this.requestUpdate("maxHour",a)}set customTimeListOptions(t){const a=this._customTimeListOptions;this._customTimeListOptions=t,this.requestUpdate("customTimeListOptions",a)}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}disconnectedCallback(){this.observer.disconnect()}async firstUpdated(){try{await this.updateComplete,this._closeDropdown(),this._input&&(this._checkInputAttributes(),this.observer.observe(this._input,this.observerConfig)),this._updateTimeOptions(),this._isFirstUpdated=!1,this.requestUpdate()}catch{console.error("ERROR OCURRED")}}_updateTimeOptions(){this._dropdown&&(this._timeListOptions=this._generateTimeListOptions(),this._timeManualHourOptions=this._generateTimeManualHoursOptions(),this._timeManualMinutesOptions=this._generateTimeManualMinutesOptions())}_checkInputAttributes(){var p,b,g,m,w,v,f;const t=(p=this._input)==null?void 0:p.getAttribute("placeholder");t&&(this._placeholder=t),((b=this._input)==null?void 0:b.getAttribute("readonly"))!==null&&(this._readonly=!0),((g=this._input)==null?void 0:g.getAttribute("disabled"))!==null&&(this._disabled=!0),((m=this._input)==null?void 0:m.getAttribute("required"))!==null&&(this._required=!0);const h=(w=this._input)==null?void 0:w.getAttribute("value");h!==null&&(this._value=h),(v=this._input)!=null&&v.value&&((f=this._input)==null?void 0:f.value)!==""&&this._handleValidity(),this.requestUpdate()}_handleValidity(){var a;const t=(a=this._input)==null?void 0:a.checkValidity();t!==void 0&&(this._inputValidity=t)}_closeDropdown(){document.addEventListener("click",t=>{t.composedPath().includes(this)||this._showDropdown&&(this._showDropdown=!1,this.requestUpdate())}),this.addEventListener("focusout",t=>{const a=t.relatedTarget;a!==null&&a!==this&&a!==this._input&&a!==this._label&&(this._showDropdown&&(this._showDropdown=!1),this.requestUpdate())})}_timeMask(t,a,c){const l=[];for(let h=0;h<t.length;h+=1)h!==0&&h%a===0&&l.push(c),l.push(t[h]);return l.join("")}_timeUnmask(t){return t.replace(/[^\d]/g,"")}_timeValidate(t){const a=t.slice(0,2),c=t.slice(3,5);this._input&&+a>=0&&+a<=23&&+c>=0&&+c<=59?(this._invalid=!1,this._helpText=this._oldHelpText,this._dropdown&&this._dropdown==="list"&&!this._timeListOptions.includes(this._input.value)?(this._helpText=this._errorTimeOptionText,this._invalid=!0):this._dropdown&&this._dropdown==="manual"&&(!this._timeManualHourOptions.includes(a)||!this._timeManualMinutesOptions.includes(c))?(this._helpText=this._errorTimeOptionText,this._invalid=!0):this._showDropdown=!1):(this._helpText=this._errorTimeFormatText,this._invalid=!0),this._dispatchValueChange(),this.requestUpdate()}_dispatchValueChange(){if(this._input){const t={detail:{value:this._input.value,status:this._invalid?"INVALID":"VALID"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onTimepickerChange",t))}}_handleClick(){if(this._showDropdown=!0,this._value&&(this._dropdown&&this._dropdown==="list"&&this._timeListOptionsScrollTo(),this._dropdown&&this._dropdown==="manual")){const t=this._value.slice(0,2);this._timeManualOptionsScrollTo(t),setTimeout(()=>{this._timeManualOptionsScrollTo()},500)}this.requestUpdate()}_handleInput(){if(this._input){let t=this._input.value;t=this._timeUnmask(t),t.match(this._timePattern)?(t=this._timeMask(t,2,this._timeSeparator),this._input.value=t):this._input.value=this._timeInputOldValue,this._input.value.length===5&&(this._timeValidate(this._input.value),this._handleValidity()),this._dropdown&&this._dropdown==="list"&&this._timeListOptionsScrollTo(),this._dropdown&&this._dropdown==="manual"&&this._timeManualOptionsScrollTo()}}_handleKeyDown(t){this._input&&(this._timeInputOldValue=this._input.value,(t==null?void 0:t.key)==="Enter"||(t==null?void 0:t.key)===" "?(this._showDropdown=!0,this.requestUpdate()):(t==null?void 0:t.key)==="Escape"&&(this._showDropdown=!1,this.requestUpdate()))}_handleFocus(){this._placeholder="00:00",this._input&&this._input.setAttribute("placeholder",this._placeholder),this.requestUpdate()}_handleBlur(){this._placeholder="",this._input&&this._input.removeAttribute("placeholder"),this.requestUpdate()}_focusInput(){var t;(t=this._input)==null||t.focus(),this._handleClick()}_generateTimeListOptions(){const t=[];for(let a=this._minHour;a<this._maxHour;a+=1)for(let c=0;c<60;c+=this._minutesRange){const l=a.toString().padStart(2,"0"),h=c.toString().padStart(2,"0");t.push(`${l}:${h}`)}return t}_generateTimeListOptionsHTML(t,a){let c=!0;const l=a&&a.length>0;return(l?a:t).map(b=>{const g=$=>{$&&$.focus()},m=$=>{let _=0;const S=this.renderRoot.querySelectorAll(".dss-timepicker-dropdown__label"),C=S.length-1;$===S[0]?g(S[C]):(S.forEach((T,D)=>{T===$&&(_=D)}),g(S[_-1]))},w=$=>{let _=0;const S=this.renderRoot.querySelectorAll(".dss-timepicker-dropdown__label"),C=S.length-1;$===S[C]?g(S[0]):(S.forEach((T,D)=>{T===$&&(_=D)}),g(S[_+1]))},v=$=>{if(this._input){const _=$.target.getAttribute("value");_&&(this._input.value=_,this._helpText=this._oldHelpText,this._invalid=!1,this._showDropdown=!1,this._handleValidity(),this.requestUpdate(),this._dispatchValueChange())}},f=$=>{const _=$.currentTarget,S=$;let C=!1;switch(S.key){case"ArrowUp":m(_),C=!0;break;case"ArrowDown":w(_),C=!0;break;case"Enter":const T=$.target.querySelector("input"),D=this.renderRoot.querySelector('.dss-timepicker-dropdown__label[tabindex="0"]');D==null||D.setAttribute("tabindex","-1"),$.target.setAttribute("tabindex","0"),T==null||T.click(),C=!0;break}C&&($.stopPropagation(),$.preventDefault())},y={"option--busy":typeof b=="object"&&b.state==="ocupat"},k=x`
        <div class="dss-timepicker-dropdown__option ${e(y)}">
          <label
            class="dss-timepicker-dropdown__label"
            tabindex="${c?0:-1}"
            @keydown=${f}
          >
            ${l&&typeof b=="object"?b.value:b}

            <input
              class="dss-timepicker-dropdown__input-radio"
              name="timeList"
              type="radio"
              @click="${v}"
              .value="${l&&typeof b=="object"?b.value:b}"
            />
            <span class="dss-icon dss-icon--md dss-timepicker-dropdown__icon"
              >check</span
            >
          </label>
        </div>
      `;return c=!1,k})}_generateTimeManualHoursOptions(){const t=[];for(let a=this._minHour;a<this._maxHour;a+=1){const c=a.toString().padStart(2,"0");t.push(c)}return t}_generateTimeManualMinutesOptions(){const t=[];for(let a=0;a<60;a+=this._minutesRange){const c=a.toString().padStart(2,"0");t.push(c)}return t}_generateTimeManualOptionsHTML(t,a){let c=!0;return a.map(h=>{const p=m=>{const w=m.target.getAttribute("value");w&&(t==="timepickerManualHour"?this._manualHourSelector=w:t==="timepickerManualMinutes"&&(this._manualMinuteSelector=w),this.requestUpdate())},b=m=>{const w=m.currentTarget,v=m;let f=!1;const y=_=>{_&&_.focus()},k=_=>{let S=0;const C=this.renderRoot.querySelectorAll(`.dss-timepicker-manual-item__label.${t}`),T=C.length-1;_===C[0]?y(C[T]):(C.forEach((D,q)=>{D===_&&(S=q)}),y(C[S-1]))},$=_=>{let S=0;const C=this.renderRoot.querySelectorAll(`.dss-timepicker-manual-item__label.${t}`),T=C.length-1;_===C[T]?y(C[0]):(C.forEach((D,q)=>{D===_&&(S=q)}),y(C[S+1]))};switch(v.key){case"ArrowUp":k(w),f=!0;break;case"ArrowDown":$(w),f=!0;break;case"Enter":const _=m.target.parentElement,S=_==null?void 0:_.querySelector("input"),C=this.renderRoot.querySelector(`.dss-timepicker-manual-item__label[tabindex="0"].${t}`);if(C==null||C.setAttribute("tabindex","-1"),m.target.setAttribute("tabindex","0"),S==null||S.click(),t==="timepickerManualHour"){const T=this.renderRoot.querySelector('.dss-timepicker-manual-item__label[tabindex="0"].timepickerManualMinutes');y(T)}else if(t==="timepickerManualMinutes"){const T=this.renderRoot.querySelector(".dss-timepicker-dropdown__actions-select");setTimeout(()=>{T.focus()},0)}f=!0;break}f&&(m.stopPropagation(),m.preventDefault())},g=x`
        <div class="dss-timepicker-manual-item">
          <input
            id="${t+h}"
            class="dss-timepicker-manual-item__input-radio"
            name="${t}"
            type="radio"
            @click="${p}"
            .value="${h}"
          />
          <label
            for="${t+h}"
            class="dss-timepicker-manual-item__label ${t}"
            tabindex="${c?0:-1}"
            @keydown=${b}
          >
            ${h}
          </label>
        </div>
      `;return c=!1,g})}_checkDisableTimeManualSelector(){return this._manualHourSelector===""||this._manualMinuteSelector===""}_timeManualSelectorCancel(){const t=this.renderRoot.querySelectorAll(".dss-timepicker-manual-item__input-radio:checked");t.length&&t.forEach(a=>{a.checked=!1}),this._manualHourSelector="",this._manualMinuteSelector="",this._showDropdown=!1,this._handleValidity(),this.requestUpdate()}_timeManualSelectorAccept(){this._input&&(this._input.value=`${this._manualHourSelector}:${this._manualMinuteSelector}`,this._helpText=this._oldHelpText,this._invalid=!1,this._showDropdown=!1,this._handleValidity(),this.requestUpdate(),this._dispatchValueChange())}_timeListOptionsScrollTo(){if(this._input){const t=this._input.value.trim(),a=this.renderRoot.querySelectorAll(".dss-timepicker-dropdown__input-radio");let c=!1;a.forEach(l=>{const h=l.value;if(!c&&h.startsWith(t)){const p=l.closest("label");c=!0,p&&(setTimeout(()=>{p.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},0),h===t&&(l.checked=!0))}})}}_timeManualOptionsScrollTo(t){if(this._input){const a=t?t.trim():this._input.value.trim();if(a.length<=2){const c=this.renderRoot.querySelectorAll(".dss-timepicker-dropdown__items--hour .dss-timepicker-manual-item__label");let l=!1;c.forEach(h=>{const p=h.innerHTML.replace(/<!--[\s\S]*?-->/g,"").trim();!l&&p.startsWith(a)&&(l=!0,setTimeout(()=>{h.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},0),p===a&&h.click())})}else{const c=a.slice(3),l=this.renderRoot.querySelectorAll(".dss-timepicker-dropdown__items--minute .dss-timepicker-manual-item__label");let h=!1;l.forEach(p=>{const b=p.innerHTML.replace(/<!--[\s\S]*?-->/g,"").trim();!h&&b.startsWith(c)&&(h=!0,p.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),b===c&&p.click())})}}}render(){var l;const t={"dss-input-group--focused":((l=this._input)==null?void 0:l.value)||this._placeholder,"dss-input-group--lg":this._inputSize==="lg","dss-input-group--md":this._inputSize==="md","dss-input-group--dropdown":this._dropdown==="manual","dss-input-group--invalid":this._invalid||!this._inputValidity,"dss-input-group--required":this._required,"dss-input-group--disabled":this._disabled,"dss-input-group--read-only":this._readonly,"dss-input-group--no-label":!this._label},a={"dss-timepicker-help--invalid":this._invalid||!this._inputValidity,"dss-timepicker-help--disabled":this._disabled},c={"dss-timepicker-dropdown--open":this._showDropdown,"dss-timepicker-dropdown--lg":this._inputSize==="lg","dss-timepicker-dropdown--md":this._inputSize==="md"};return x`
      <div class="dss-timepicker">
        ${this._dropdown===""?x`
              <div
                class="dss-input-group dss-input-group--has-icon ${e(t)}"
              >
                <span class="dss-icon dss-icon--md dss-input-icon"
                  >${this._icon}</span
                >
                <slot
                  name="input"
                  @click=${this._handleClick}
                  @input=${this._handleInput}
                  @focusin=${this._handleFocus}
                  @focusout=${this._handleBlur}
                  @keydown=${this._handleKeyDown}
                ></slot>

                <slot name="label" @click=${this._focusInput}></slot>
              </div>
            `:x`
              <div
                class="dss-input-group dss-input-group--has-icon ${e(t)}"
                role="combobox"
                aria-controls="timepicker-options"
                aria-expanded=${o(this._showDropdown)}
              >
                <span class="dss-icon dss-icon--md dss-input-icon"
                  >${this._icon}</span
                >
                <slot
                  name="input"
                  @click=${this._handleClick}
                  @input=${this._handleInput}
                  @focusin=${this._handleFocus}
                  @focusout=${this._handleBlur}
                  @keydown=${this._handleKeyDown}
                ></slot>

                <slot name="label" @click=${this._focusInput}></slot>
              </div>
            `}
        ${this._helpText?x`
              <div class="dss-timepicker-help ${e(a)}">
                ${this._helpText}
              </div>
            `:null}
        ${this._dropdown&&this._dropdown==="list"?x`
              <div
                id="timepicker-options"
                class="dss-timepicker-dropdown dss-timepicker-dropdown--list ${e(c)}"
                role="listbox"
                aria-label="Timepicker Options"
              >
                <div class="dss-timepicker-dropdown__container">
                  ${x`${this._generateTimeListOptionsHTML(this._timeListOptions,this._customTimeListOptions)}`}
                </div>
              </div>
            `:null}
        ${this._dropdown&&this._dropdown==="manual"?x`
              <div
                id="timepicker-options"
                class="dss-timepicker-dropdown dss-timepicker-dropdown--manual ${e(c)}"
                role="listbox"
                aria-label="Timepicker Options"
              >
                <div class="dss-timepicker-dropdown__manual">
                  <div
                    class="dss-timepicker-dropdown__items dss-timepicker-dropdown__items--hour"
                  >
                    ${this._generateTimeManualOptionsHTML("timepickerManualHour",this._timeManualHourOptions)}
                  </div>
                  <div
                    class="dss-timepicker-dropdown__items dss-timepicker-dropdown__items--minute"
                  >
                    ${this._generateTimeManualOptionsHTML("timepickerManualMinutes",this._timeManualMinutesOptions)}
                  </div>
                </div>
                <div class="dss-timepicker-dropdown__actions">
                  <button
                    type="button"
                    class="dss-button dss-button--md dss-button--secondary dss-timepicker-dropdown__actions-cancel"
                    @click=${this._timeManualSelectorCancel}
                  >
                    Cancel-lar
                  </button>
                  <button
                    type="button"
                    class="dss-button dss-button--md dss-button--primary dss-timepicker-dropdown__actions-select"
                    ?disabled=${this._checkDisableTimeManualSelector()}
                    @click=${this._timeManualSelectorAccept}
                  >
                    Seleccionar
                  </button>
                </div>
              </div>
            `:null}
        <div></div>
      </div>
    `}}__decorateClass$q([n({type:String,attribute:!0})],Timepicker.prototype,"value");__decorateClass$q([n(booleanType)],Timepicker.prototype,"invalid");__decorateClass$q([n({type:String})],Timepicker.prototype,"inputSize");__decorateClass$q([n({type:String})],Timepicker.prototype,"helpText");__decorateClass$q([n({type:String})],Timepicker.prototype,"errorTimeFormatText");__decorateClass$q([n({type:String})],Timepicker.prototype,"errorTimeOptionText");__decorateClass$q([n({type:String})],Timepicker.prototype,"dropdown");__decorateClass$q([n(booleanType)],Timepicker.prototype,"showDropdown");__decorateClass$q([n({type:Number})],Timepicker.prototype,"minutesRange");__decorateClass$q([n({type:Number})],Timepicker.prototype,"minHour");__decorateClass$q([n({type:Number})],Timepicker.prototype,"maxHour");__decorateClass$q([n({type:Array})],Timepicker.prototype,"customTimeListOptions");__decorateClass$q([n({type:String})],Timepicker.prototype,"icon");const styles='.dss-tooltip{position:absolute;display:flex;width:264px;z-index:900}.dss-tooltip-box{position:relative;box-sizing:border-box;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;padding:var(--dss-spacing-xs) var(--dss-spacing-md);background-color:var(--color-neutral-800);border-radius:var(--dss-radius-sm);box-shadow:0 4px 8px 3px #0000000d,0 1px 3px #0000001a;font-size:14px;color:var(--color-white)}.dss-tooltip--top{justify-content:center;bottom:calc(100% + var(--dss-spacing-md));left:50%;transform:translate(-50%)}.dss-tooltip--right{justify-content:flex-start;left:calc(100% + var(--dss-spacing-md));top:50%;transform:translateY(-50%)}.dss-tooltip--bottom{justify-content:center;top:calc(100% + var(--dss-spacing-md));left:50%;transform:translate(-50%)}.dss-tooltip--left{justify-content:flex-end;right:calc(100% + var(--dss-spacing-md));top:50%;transform:translateY(-50%)}.dss-tooltip--right>.dss-tooltip-box:before{content:"";position:absolute;display:block;width:0px;left:0;top:50%;border:8px solid transparent;border-left:0;border-right:8px solid var(--color-neutral-800);transform:translate(-100%,-50%)}.dss-tooltip--bottom>.dss-tooltip-box:before{content:"";position:absolute;display:block;width:0px;left:50%;top:0;border:8px solid transparent;border-top:0;border-bottom:8px solid var(--color-neutral-800);transform:translate(-50%,-100%)}.dss-tooltip--left>.dss-tooltip-box:before{content:"";position:absolute;display:block;width:0px;right:0;top:50%;border:8px solid transparent;border-right:0;border-left:8px solid var(--color-neutral-800);transform:translate(100%,-50%)}.dss-tooltip--top>.dss-tooltip-box:before{content:"";position:absolute;display:block;width:0px;left:50%;bottom:0;border:8px solid transparent;border-bottom:0;border-top:8px solid var(--color-neutral-800);transform:translate(-50%,100%)}.dss-tooltip-container{max-width:232px;max-height:96px;overflow:hidden}.dss-tooltip--no-height-limit .dss-tooltip-container{max-height:-moz-max-content;max-height:max-content}.dss-tooltip--align-left{text-align:left}.dss-tooltip--align-right{text-align:right}.dss-tooltip--align-center{text-align:center}.dss-tooltip--align-justify{text-align:justify}.dss-tooltip--hidden{display:none}';var __defProp$p=Object.defineProperty,__getOwnPropDesc$p=Object.getOwnPropertyDescriptor,__decorateClass$p=(d,t,a,c)=>{for(var l=__getOwnPropDesc$p(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$p(t,a,l),l};class Tooltip extends r$1{constructor(){super(...arguments),this._position="top",this._align="left",this._hide=!1,this._noHeightLimit=!1}static get styles(){return[r$2(iconStyles),r$2(styles)]}set position(t){const a=this._position;this._position=t,this.requestUpdate("position",a)}set align(t){const a=this._align;this._align=t,this.requestUpdate("align",a)}set hide(t){const a=this._hide;this._hide=t,this.requestUpdate("hide",a)}set noHeightLimit(t){const a=this._noHeightLimit;this._noHeightLimit=t,this.requestUpdate("noHeightLimit",a)}render(){const t={"dss-tooltip--top":this._position==="top","dss-tooltip--right":this._position==="right","dss-tooltip--bottom":this._position==="bottom","dss-tooltip--left":this._position==="left","dss-tooltip--align-left":this._align==="left","dss-tooltip--align-right":this._align==="right","dss-tooltip--align-center":this._align==="center","dss-tooltip--align-justify":this._align==="justify","dss-tooltip--hidden":this._hide,"dss-tooltip--no-height-limit":this._noHeightLimit};return x`
      <div class="dss-tooltip ${e(t)}">
        <div class="dss-tooltip-box">
          <div class="dss-tooltip-container">
            <slot></slot>
          </div>
        </div>
      </div>
    `}}__decorateClass$p([n({type:String})],Tooltip.prototype,"position");__decorateClass$p([n({type:String})],Tooltip.prototype,"align");__decorateClass$p([n(booleanType)],Tooltip.prototype,"hide");__decorateClass$p([n(booleanType)],Tooltip.prototype,"noHeightLimit");const popoverStyles=':host{display:block}.dss-popover{position:absolute;display:none;z-index:900;min-width:356px;width:-moz-max-content;width:max-content;max-width:500px}.dss-popover--open{display:flex}.dss-popover-box{position:relative;box-sizing:border-box;min-width:356px;width:-moz-fit-content;width:fit-content;max-width:500px;height:-moz-fit-content;height:fit-content;background-color:var(--color-white);border-radius:var(--dss-radius-sm);box-shadow:0 1px 3px #0000001a,0 4px 8px 3px #0000000d;font-size:14px;line-height:24px;color:var(--color-neutral-900)}.dss-popover--top{justify-content:center;bottom:calc(100% + var(--dss-spacing-md));left:50%;transform:translate(-50%)}.dss-popover--right{justify-content:flex-start;left:calc(100% + var(--dss-spacing-md));top:50%;transform:translateY(-50%)}.dss-popover--bottom{justify-content:center;top:calc(100% + var(--dss-spacing-md));left:50%;transform:translate(-50%)}.dss-popover--left{justify-content:flex-end;right:calc(100% + var(--dss-spacing-md));top:50%;transform:translateY(-50%)}.dss-popover--right>.dss-popover-box:before{content:"";position:absolute;display:block;width:0px;left:0;top:50%;border:10px solid transparent;border-left:0;border-right:10px solid #efefef;transform:translate(-100%,-50%)}.dss-popover--right>.dss-popover-box:after{content:"";position:absolute;display:block;width:0px;left:0;top:50%;border:8px solid transparent;border-left:0;border-right:8px solid var(--color-white);transform:translate(-100%,-50%)}.dss-popover--bottom>.dss-popover-box:before{content:"";position:absolute;display:block;width:0px;left:50%;top:0;border:10px solid transparent;border-top:0;border-bottom:10px solid #efefef;transform:translate(-50%,-100%)}.dss-popover--bottom>.dss-popover-box:after{content:"";position:absolute;display:block;width:0px;left:50%;top:0;border:8px solid transparent;border-top:0;border-bottom:8px solid var(--color-white);transform:translate(-50%,-100%)}.dss-popover--left>.dss-popover-box:before{content:"";position:absolute;display:block;width:0px;right:0;top:50%;border:10px solid transparent;border-right:0;border-left:10px solid #efefef;transform:translate(100%,-50%)}.dss-popover--left>.dss-popover-box:after{content:"";position:absolute;display:block;width:0px;right:0;top:50%;border:8px solid transparent;border-right:0;border-left:8px solid var(--color-white);transform:translate(100%,-50%)}.dss-popover--top>.dss-popover-box:before{content:"";position:absolute;display:block;width:0px;left:50%;bottom:0;border:10px solid transparent;border-bottom:0;border-top:10px solid #efefef;transform:translate(-50%,100%)}.dss-popover--top>.dss-popover-box:after{content:"";position:absolute;display:block;width:0px;left:50%;bottom:0;border:8px solid transparent;border-bottom:0;border-top:8px solid var(--color-white);transform:translate(-50%,100%)}.dss-popover-header{display:flex;align-items:center;padding:var(--dss-spacing-md) 0 var(--dss-spacing-xs) 0;gap:var(--dss-spacing-xs);width:100%}.dss-popover--has-divider .dss-popover-header{border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-200);margin-bottom:var(--dss-spacing-xs)}.dss-popover-header-box{display:flex;justify-content:space-between;align-items:center;padding:0 var(--dss-spacing-md);gap:var(--dss-spacing-md);width:100%}.dss-popover-header__title{flex:1;font-size:18px;line-height:28px;font-weight:var(--font-semibold);color:var(--color-neutral-900)}::slotted(dss-popover-body),::slotted(dss-item-list){display:block;max-height:428px;overflow-y:auto}',dssIconButton=i`dss-icon-button${s(getCustomElementSuffix())}`,popoverTemplate=d=>u`
  <div
    class=${e({"dss-popover":!0,"dss-popover--open":!!d._open,"dss-popover--has-divider":!!d._hasDivider,[`dss-popover--${d._position}`]:!!d._position})}
  >
    <div class="dss-popover-box">
      <div class="dss-popover-header">
        <div class="dss-popover-header-box">
          <div class="dss-popover-header__title">${d._title}</div>
          ${d._actionIcon?u`
                <${dssIconButton}
                  icon="${d._actionIcon}"
                  size="md"
                  type="primary"
                  @onClick="${d._handleAction}"
                ></${dssIconButton}>
              `:null}
          ${d._hideCloseIcon?null:u`
                <${dssIconButton}
                  icon="close"
                  size="md"
                  type="default"
                  @onClick="${d._handleClose}"
                ></${dssIconButton}>
              `}
        </div>
      </div>
      <slot name="body"></slot>
      <slot name="item-list"></slot>
    </div>
  </div>
`;var __defProp$o=Object.defineProperty,__getOwnPropDesc$o=Object.getOwnPropertyDescriptor,__decorateClass$o=(d,t,a,c)=>{for(var l=__getOwnPropDesc$o(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$o(t,a,l),l};class Popover extends r$1{constructor(){super(...arguments),this._open=!1,this._hasDivider=!1,this._hideCloseIcon=!1,this._title="",this._position="top",this._actionIcon=void 0}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(popoverStyles)]}set open(t){const a=this._open;this._open=t,this.requestUpdate("open",a)}set hasDivider(t){const a=this._hasDivider;this._hasDivider=t,this.requestUpdate("hasDivider",a)}set hideCloseIcon(t){const a=this._hideCloseIcon;this._hideCloseIcon=t,this.requestUpdate("hideCloseIcon",a)}set title(t){const a=this._title;this._title=t,this.requestUpdate("title",a)}set actionIcon(t){const a=this._actionIcon;this._actionIcon=t,this.requestUpdate("actionIcon",a)}set position(t){const a=this._position;this._position=t,this.requestUpdate("position",a)}_handleAction(){this.dispatchEvent(new CustomEvent("onAction",{bubbles:!0,composed:!0}))}_handleClose(){this._open=!1,this.requestUpdate(),this.dispatchEvent(new CustomEvent("onClose",{bubbles:!0,composed:!0}))}render(){return popoverTemplate(this)}}__decorateClass$o([n(booleanType)],Popover.prototype,"open");__decorateClass$o([n(booleanType)],Popover.prototype,"hasDivider");__decorateClass$o([n(booleanType)],Popover.prototype,"hideCloseIcon");__decorateClass$o([n({type:String})],Popover.prototype,"title");__decorateClass$o([n({type:String})],Popover.prototype,"actionIcon");__decorateClass$o([n({type:String})],Popover.prototype,"position");class PopoverBody extends r$1{static get styles(){return[i$1`
        .dss-popover-body {
          display: flex;
          flex-direction: column;
          padding: 0 var(--dss-spacing-md) var(--dss-spacing-md)
            var(--dss-spacing-md);
          gap: var(--dss-spacing-xs);
          font-size: 14px;
          line-height: 24px;
          font-weight: var(--font-regular);
          color: var(--color-neutral-900);
        }

        ::slotted(p) {
          font-size: 14px;
          line-height: 24px;
          font-weight: var(--font-regular);
          color: var(--color-neutral-900);
        }
      `]}render(){return x`
      <div class="dss-popover-body">
        <slot></slot>
      </div>
    `}}const sidemenuStyles=":host{display:block;min-height:100%;height:100%;width:auto}.dss-sidemenu{min-height:100%;width:72px;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;background-color:var(--color-primary-700);padding:var(--dss-spacing-lg) var(--dss-spacing-md);color:var(--color-white);gap:var(--dss-spacing-lg)}.dss-sidemenu--expanded{width:252px;align-items:flex-start}.dss-sidemenu-top-menu{width:100%;flex:1}.dss-sidemenu-bottom-menu{width:100%}.dss-sidemenu-create{width:100%;position:relative}.dss-sidemenu-create__button__content{display:flex;align-items:center;justify-content:center;position:relative}.dss-sidemenu-create__notification{position:absolute;top:-4px;right:-4px;display:block}.dss-sidemenu-create__notification--expanded{top:-8px;right:-8px}.dss-sidemenu-create__dropdown{position:fixed;opacity:0;visibility:hidden}.dss-sidemenu-create__dropdown--open{opacity:1;visibility:visible}.dss-sidemenu-create__button{all:unset;cursor:pointer;box-sizing:border-box;height:40px;width:40px;display:flex;align-items:center;gap:var(--dss-spacing-xs);padding:var(--dss-spacing-xs);background-color:var(--color-white);color:var(--color-primary-700);border-radius:var(--dss-radius-sm);font-size:14px;line-height:24px;font-weight:var(--font-semibold);transition:background-color .3s ease-in}.dss-sidemenu-create__button:not(:disabled):hover{background-color:var(--color-primary-900);color:var(--color-white)}.dss-sidemenu-create__button:not(:disabled):active{background-color:var(--color-primary-800);color:var(--color-white)}.dss-sidemenu-create__button:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-sidemenu-create__button:disabled{color:var(--color-neutral-600);background-color:var(--color-neutral-100);cursor:not-allowed}.dss-sidemenu-toggle{all:unset;cursor:pointer;box-sizing:border-box;height:40px;width:40px;display:flex;align-items:center;gap:var(--dss-spacing-xs);padding:var(--dss-spacing-xs);background-color:var(--color-primary-700);border-radius:var(--dss-radius-sm);font-size:14px;line-height:24px;font-weight:var(--font-semibold);transition:background-color .3s ease-in-out}.dss-sidemenu-toggle:not(:disabled):hover{background-color:var(--color-primary-900)}.dss-sidemenu-toggle:not(:disabled):active{background-color:var(--color-primary-800)}.dss-sidemenu-toggle:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-sidemenu-toggle:disabled{color:var(--color-primary-200);cursor:not-allowed}.dss-sidemenu-toggle__icon{border-radius:100%;background-color:var(--color-white);color:var(--color-primary-700)}.dss-sidemenu--expanded button.dss-sidemenu-create__button,.dss-sidemenu--expanded button.dss-sidemenu-toggle{width:100%}.dss-sidemenu-toggle:disabled .dss-sidemenu-toggle__icon{background-color:var(--color-primary-200)}.dss-sidemenu-top-menu,.dss-sidemenu-bottom-menu{width:100%}.dss-sidemenu-bottom{width:100%;display:flex;flex-direction:inherit;align-items:inherit;justify-content:inherit;border-top:var(--dss-border-width-sm) solid var(--color-white);padding-top:var(--dss-spacing-md);gap:var(--dss-spacing-lg)}",sidemenuTemplate=d=>x`
  <aside
    class=${e({"dss-sidemenu":!0,"dss-sidemenu--expanded":!!d._expanded})}
  >
    <div class="dss-sidemenu-top-menu">
      <slot name="top-menu"></slot>
    </div>

    ${d._hideCreateMenu?null:x`
          <div
            class="dss-sidemenu-create"
            @focusout="${d._handleCreateFocusout}"
          >
            <button
              class="dss-sidemenu-create__button"
              ?disabled=${d._createDisabled}
              @click="${d._toggleCreateMenu}"
              @mouseenter="${d._handleCreateMouseEnter}"
              @mouseleave="${d._handleCreateMouseLeave}"
              @mousedown="${d._handleCreateMouseDown}"
              @mouseup="${d._handleCreateMouseUp}"
            >
              <span class="dss-sidemenu-create__button__content">
                <i class="dss-icon dss-icon--md dss-sidemenu-create__icon"
                  >add_circle_outline</i
                >
                ${d._createNotifications&&!d._showCreateDropdown?x`
                      <dss-notification-badge
                        class=${e({"dss-sidemenu-create__notification":!0,"dss-sidemenu-create__notification--expanded":!!d._expanded})}
                        ?dot=${!d._expanded}
                        value="${d._createNotifications}"
                        state="succes"
                        type="default"
                        borderWhite
                      >
                      </dss-notification-badge>
                    `:null}
              </span>
              ${d._expanded?x` ${d._createLabel} `:null}
            </button>
            <div
              class=${e({"dss-sidemenu-create__dropdown":!0,"dss-sidemenu-create__dropdown--open":!!d._showCreateDropdown,[`dss-sidemenu-create__dropdown--${d._createMenuPosition}`]:!!d._createMenuPosition})}
              @onActionMenuItemClick="${d._closeCreateDropdown}"
            >
              <slot name="create-action-menu"></slot>
            </div>
          </div>
        `}

    <div class="dss-sidemenu-bottom">
      <div class="dss-sidemenu-bottom-menu">
        <slot name="bottom-menu"></slot>
      </div>

      <button
        class="dss-sidemenu-toggle"
        ?disabled=${d._toggleDisabled}
        @click="${d._toggleSidemenu}"
      >
        ${d._expanded?x`
              <i class="dss-icon dss-icon--md dss-sidemenu-toggle__icon"
                >chevron_left</i
              >
            `:x`
              <i class="dss-icon dss-icon--md dss-sidemenu-toggle__icon"
                >chevron_right</i
              >
            `}
        ${d._expanded?x` ${d._toggleLabel} `:null}
      </button>
    </div>
  </aside>
`;var __defProp$n=Object.defineProperty,__getOwnPropDesc$n=Object.getOwnPropertyDescriptor,__decorateClass$n=(d,t,a,c)=>{for(var l=__getOwnPropDesc$n(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$n(t,a,l),l};class Sidemenu extends r$1{constructor(){super(),this._disabled=!1,this._expanded=!1,this._toggleDisabled=!1,this._toggleLabel="Tancar Menu",this._hideCreateMenu=!1,this._createDisabled=!1,this._createLabel="Crear",this._createMenuPosition="top",this._createNotifications=0,this._showCreateDropdown=!1,this._scrollContainerClass="dss-layout-sidebar",this._dropdown=null,this._handleDocumentClickBound=this._handleDocumentClick.bind(this),this._handleResizeBound=this._handleResize.bind(this),this._handleContainerScrollBound=this._handleContainerScroll.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(sidemenuStyles)]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResizeBound),document.addEventListener("click",this._handleDocumentClickBound),this._handleResize()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._handleResizeBound),document.removeEventListener("click",this._handleDocumentClickBound),this._scrollContainer&&this._scrollContainer.removeEventListener("scroll",this._handleContainerScrollBound)}set expanded(t){const a=this._expanded;this._expanded=t,this.requestUpdate("expanded",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set toggleLabel(t){const a=this._toggleLabel;this._toggleLabel=t,this.requestUpdate("toggleLabel",a)}set createLabel(t){const a=this._createLabel;this._createLabel=t,this.requestUpdate("createLabel",a)}set createMenuPosition(t){const a=this._createMenuPosition;this._createMenuPosition=t,this.requestUpdate("createMenuPosition",a)}set createNotifications(t){const a=this._createNotifications;this._createNotifications=t,this.requestUpdate("createNotifications",a)}set createDisabled(t){const a=this._createDisabled;this._createDisabled=t,this.requestUpdate("createDisabled",a)}set hideCreateMenu(t){const a=this._hideCreateMenu;this._hideCreateMenu=t,this.requestUpdate("hideCreateMenu",a)}set scrollContainerClass(t){const a=this._scrollContainerClass;this._scrollContainerClass=t,this.requestUpdate("scrollContainerClass",a)}get _createNotification(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector("dss-notification-badge"))||void 0}get _createSection(){var a;return(a=this.shadowRoot)==null?void 0:a.querySelector(".dss-sidemenu-create")}_propagateProperties(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelectorAll("slot");t&&t.forEach(c=>{c.assignedElements().forEach(h=>{this._expanded?h.setAttribute("expanded","true"):h.removeAttribute("expanded"),this._scrollContainerClass?h.setAttribute("scrollContainerClass",this._scrollContainerClass):h.removeAttribute("scrollContainerClass")})})}_handleResize(){window.innerWidth<1024?(this.removeAttribute("expanded"),this._toggleDisabled=!0):this._toggleDisabled=!1,this.requestUpdate()}_clickedOutsideCreateMenu(t,a){a.composedPath().includes(t)||this._closeCreateDropdown()}_closeCreateDropdown(){this._showCreateDropdown&&(this._showCreateDropdown=!1,this.requestUpdate())}_handleDocumentClick(t){this._createSection&&this._clickedOutsideCreateMenu(this._createSection,t)}_toggleCreateMenu(){this._showCreateDropdown=!this._showCreateDropdown,this.requestUpdate()}_toggleSidemenu(){this._expanded?this.removeAttribute("expanded"):this.setAttribute("expanded","true")}_handleCreateMouseEnter(){this._createNotification&&this._createNotification.setAttribute("isHover","true")}_handleCreateMouseLeave(){this._createNotification&&this._createNotification.removeAttribute("isHover")}_handleCreateMouseDown(){this._createNotification&&this._createNotification.setAttribute("isActive","true")}_handleCreateFocusout(t){if(this._showCreateDropdown){const a=t.relatedTarget;a===null&&this._closeCreateDropdown(),a&&!this._createSection.contains(a)&&a.tagName!=="DSS-ACTION-MENU-ITEM"&&this._closeCreateDropdown()}}_handleCreateMouseUp(){this._createNotification&&this._createNotification.removeAttribute("isActive")}get _scrollContainer(){return document.querySelector(`.${this._scrollContainerClass}`)}_getCreateDropdownFixedPosition(){var c;const a=((c=this.shadowRoot)==null?void 0:c.querySelector(".dss-sidemenu-create")).getBoundingClientRect();this._dropdown&&(this._dropdown.style.left=`${a.right+8}px`,this._dropdown.classList.contains("dss-sidemenu-create__dropdown--top")?this._dropdown.style.top=`${a.top}px`:this._dropdown.style.top=`${a.bottom-this._dropdown.offsetHeight}px`)}_handleContainerScroll(){this._getCreateDropdownFixedPosition()}async firstUpdated(){var a;await this.updateComplete,this._propagateProperties();const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".dss-sidemenu-create__dropdown");t&&(this._dropdown=t,this._getCreateDropdownFixedPosition()),this._scrollContainer&&this._scrollContainer.addEventListener("scroll",this._handleContainerScrollBound)}updated(t){super.updated(t),(t.has("expanded")||t.has("disabled"))&&(this._propagateProperties(),this._getCreateDropdownFixedPosition())}render(){return sidemenuTemplate(this)}}__decorateClass$n([n(booleanType)],Sidemenu.prototype,"expanded");__decorateClass$n([n(booleanType)],Sidemenu.prototype,"disabled");__decorateClass$n([n({type:String})],Sidemenu.prototype,"toggleLabel");__decorateClass$n([n({type:String})],Sidemenu.prototype,"createLabel");__decorateClass$n([n({type:String})],Sidemenu.prototype,"createMenuPosition");__decorateClass$n([n({type:Number})],Sidemenu.prototype,"createNotifications");__decorateClass$n([n(booleanType)],Sidemenu.prototype,"createDisabled");__decorateClass$n([n(booleanType)],Sidemenu.prototype,"hideCreateMenu");__decorateClass$n([n({type:String})],Sidemenu.prototype,"scrollContainerClass");const sidemenuListStyles=":host{display:block;width:100%}.dss-sidemenu-list{display:flex;align-items:center;flex-direction:column;gap:var(--dss-spacing-xxs)}.dss-sidemenu-list--expanded{width:100%}",sidemenuListTemplate=d=>x`
  <ul
    role="menu"
    class=${e({"dss-sidemenu-list":!0,"dss-sidemenu-list--expanded":!!d._expanded})}
    @navigate=${d._handleNavigate}
    @updateItemFocus=${d._handleItemFocus}
  >
    <slot></slot>
  </ul>
`;var __defProp$m=Object.defineProperty,__getOwnPropDesc$m=Object.getOwnPropertyDescriptor,__decorateClass$m=(d,t,a,c)=>{for(var l=__getOwnPropDesc$m(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$m(t,a,l),l};class SidemenuList extends r$1{constructor(){super(...arguments),this._disabled=!1,this._expanded=!1,this._scrollContainerClass="dss-layout-sidebar"}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(sidemenuListStyles)]}set expanded(t){const a=this._expanded;this._expanded=t,this.requestUpdate("expanded",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set scrollContainerClass(t){const a=this._scrollContainerClass;this._scrollContainerClass=t,this.requestUpdate("scrollContainerClass",a)}_propagateProperties(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelectorAll("slot");t&&t.forEach(c=>{c.assignedElements().forEach(h=>{this._expanded?h.setAttribute("expanded","true"):h.removeAttribute("expanded"),this._scrollContainerClass?h.setAttribute("scrollContainerClass",this._scrollContainerClass):h.removeAttribute("scrollContainerClass")})})}_handleItemFocus(t){var l;const a=t.target,c=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");if(c){const h=c.assignedElements({flatten:!0}).filter(b=>!b._disabled),p=h.findIndex(b=>b._focusEnabled);h[p]!==a&&(a.setAttribute("focusEnabled","true"),h[p].removeAttribute("focusEnabled"))}}_handleNavigate(t){var c;const a=(c=this.shadowRoot)==null?void 0:c.querySelector("slot");if(a){const l=a.assignedElements({flatten:!0}).filter(b=>!b._disabled),h=l.findIndex(b=>b._focusEnabled);let p=h;t.detail.direction==="next"?p=(h+1)%l.length:t.detail.direction==="previous"&&(p=(h-1+l.length)%l.length),h!==p&&(l[h].blurItem(),l[h].removeAttribute("focusEnabled"),l[p].focusItem(),l[p].setAttribute("focusEnabled","true"),this.dispatchEvent(new CustomEvent("onSlotFocus",{bubbles:!0,composed:!0})))}}async firstUpdated(){var a;await this.updateComplete;const t=(a=this.shadowRoot)==null?void 0:a.querySelector("slot");if(t){const l=t.assignedElements({flatten:!0}).find(h=>h.tagName.toLowerCase()==="dss-sidemenu-list-item");l&&l.setAttribute("focusEnabled","true"),this._propagateProperties()}}updated(t){super.updated(t),(t.has("expanded")||t.has("disabled"))&&this._propagateProperties()}render(){return sidemenuListTemplate(this)}}__decorateClass$m([n(booleanType)],SidemenuList.prototype,"expanded");__decorateClass$m([n(booleanType)],SidemenuList.prototype,"disabled");__decorateClass$m([n({type:String})],SidemenuList.prototype,"scrollContainerClass");const sidemenuListItemStyles=":host{display:block;width:100%}.dss-sidemenu-list-item{position:relative;cursor:pointer;box-sizing:border-box;height:40px;width:40px;display:flex;align-items:center;gap:var(--dss-spacing-xs);padding:var(--dss-spacing-xs);background-color:var(--color-primary-700);border-radius:var(--dss-radius-sm);font-size:14px;line-height:24px;font-weight:var(--font-semibold);transition:background-color .3s ease-in-out}.dss-sidemenu-list-item:not(:disabled):not(.dss-sidemenu-list-item--disabled):hover{background-color:var(--color-primary-900)}.dss-sidemenu-list-item:not(:disabled):not(.dss-sidemenu-list-item--disabled):active{background-color:var(--color-primary-800)}.dss-sidemenu-list-item:not(.dss-sidemenu-list-item--disabled):focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-sidemenu-list-item:disabled{color:var(--color-neutral-100);cursor:not-allowed}.dss-sidemenu-list-item--selected:not(.dss-sidemenu-list-item--disabled):not(:hover){box-shadow:inset 0 0 0 var(--dss-border-width-sm) var(--color-white)}.dss-sidemenu-list-item--disabled{cursor:not-allowed;color:var(--color-neutral-100)}.dss-sidemenu-list-item--expanded{width:100%}.dss-sidemenu-list-item__icon{position:relative;display:flex;align-items:center;justify-content:center}.dss-sidemenu-list-item__notification{position:absolute;top:-4px;right:-4px;display:block;z-index:999}.dss-sidemenu-list-item__notification--expanded{top:-8px;right:-8px}.dss-sidemenu-list-item__label{flex:1}.dss-sidemenu-list-item__dropdown{position:fixed;opacity:0;visibility:hidden;z-index:9999}.dss-sidemenu-list-item__dropdown--open{opacity:1;visibility:visible}.dss-sidemenu-list-item__tooltip{position:fixed;opacity:0;visibility:hidden;z-index:9999;transition:opacity .5s ease-in,visibility .5s ease-in}.dss-sidemenu-list-item--collapsed:focus-visible .dss-sidemenu-list-item__tooltip,.dss-sidemenu-list-item--collapsed:hover .dss-sidemenu-list-item__tooltip{animation:show-tooltip 1s forwards}@keyframes show-tooltip{0%{opacity:0;visibility:hidden}99%{visibility:hidden}to{opacity:1;visibility:visible}}",sidemenuListItemTemplate=d=>x`
  <li
    role="menuitem"
    class=${e({"dss-sidemenu-list-item":!0,"dss-sidemenu-list-item--expanded":!!d._expanded,"dss-sidemenu-list-item--collapsed":!d._expanded,"dss-sidemenu-list-item--selected":!!d._selected,"dss-sidemenu-list-item--disabled":!!d._disabled})}
    tabindex="${d._focusEnabled?"0":"-1"}"
    ?disabled=${d._disabled}
    @click="${d._handleClick}"
    @mouseenter="${d._handleMouseEnter}"
    @mouseleave="${d._handleMouseLeave}"
    @mousedown="${d._handleMouseDown}"
    @mouseup="${d._handleMouseUp}"
    @keydown="${d._handleKeyDown}"
    @onActionMenuItemClick="${d._handleActionMenuClick}"
    @focusout="${d._handleFocusout}"
  >
    <span class="dss-sidemenu-list-item__icon">
      <i class="dss-icon dss-icon--md ">${d._icon}</i>
      ${d._notifications&&!d._showItemDropdown&&!d._selected?x`
            <dss-notification-badge
              class=${e({"dss-sidemenu-list-item__notification":!0,"dss-sidemenu-list-item__notification--expanded":!!d._expanded})}
              ?dot=${!d._expanded}
              value="${d._notifications}"
              state="succes"
              type="default"
              borderMenu
            >
            </dss-notification-badge>
          `:null}
    </span>

    ${d._expanded?x`
          <span class="dss-sidemenu-list-item__label">
            ${d._label}
          </span>

          ${d._hasNestedMenu?x` <i class="dss-icon dss-icon--md">chevron_right</i> `:null}
        `:null}

    <dss-tooltip position="right" class="dss-sidemenu-list-item__tooltip">
      <span>${d._label}</span>
    </dss-tooltip>

    <div
      class=${e({"dss-sidemenu-list-item__dropdown":!0,"dss-sidemenu-list-item__dropdown--open":!!d._showItemDropdown,[`dss-sidemenu-list-item__dropdown--${d._nestedMenuPosition}`]:!!d._nestedMenuPosition})}
    >
      <slot></slot>
    </div>
  </li>
`;var __defProp$l=Object.defineProperty,__getOwnPropDesc$l=Object.getOwnPropertyDescriptor,__decorateClass$l=(d,t,a,c)=>{for(var l=__getOwnPropDesc$l(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$l(t,a,l),l};class SidemenuListItem extends r$1{constructor(){super(),this._label="Menu",this._icon="add_box",this._selected=!1,this._disabled=!1,this._expanded=!1,this._hasNestedMenu=!1,this._nestedMenuPosition="top",this._notifications=0,this._notificationsState="error",this._isHover=!1,this._isActive=!1,this._showItemDropdown=!1,this._isFocused=!1,this._focusEnabled=!1,this._scrollContainerClass="dss-layout-sidebar",this._tooltip=null,this._dropdown=null,this._handleDocumentClickBound=this._handleDocumentClick.bind(this),this._handleContainerScrollBound=this._handleContainerScroll.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(sidemenuListItemStyles)]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleDocumentClickBound)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClickBound),this._scrollContainer&&this._scrollContainer.removeEventListener("scroll",this._handleContainerScrollBound)}set label(t){const a=this._label;this._label=t,this.requestUpdate("label",a)}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}set selected(t){const a=this._selected;this._selected=t,this.requestUpdate("selected",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set hasNestedMenu(t){const a=this._hasNestedMenu;this._hasNestedMenu=t,this.requestUpdate("hasNestedMenu",a)}set expanded(t){const a=this._expanded;this._expanded=t,this.requestUpdate("expanded",a)}set notifications(t){const a=this._notifications;this._notifications=t,this.requestUpdate("notifications",a)}set notificationsState(t){const a=this._notificationsState;this._notificationsState=t,this.requestUpdate("notificationsState",a)}set nestedMenuPosition(t){const a=this._nestedMenuPosition;this._nestedMenuPosition=t,this.requestUpdate("nestedMenuPosition",a)}set focusEnabled(t){const a=this._focusEnabled;this._focusEnabled=t,this.requestUpdate("focusEnabled",a)}set scrollContainerClass(t){const a=this._scrollContainerClass;this._scrollContainerClass=t,this.requestUpdate("scrollContainerClass",a)}get _notificationBadge(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector("dss-notification-badge"))||void 0}_clickedOutsideItem(t,a){a.composedPath().includes(t)||this._showItemDropdown&&(this._showItemDropdown=!1,this.requestUpdate())}_handleDocumentClick(t){this._clickedOutsideItem(this,t)}_handleContainerScroll(){this._expanded||this._getTooltipFixedPosition(),this._showItemDropdown&&this._getDropdownFixedPosition()}_handleClick(){this._disabled||(this._hasNestedMenu?(this._showItemDropdown=!0,this.requestUpdate()):this.dispatchEvent(new CustomEvent("onClick",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("updateItemFocus",{detail:!0,bubbles:!0,composed:!0})))}_handleMouseEnter(){this._notificationBadge&&!this._disabled&&this._notificationBadge.setAttribute("isHover","true"),!this._expanded&&!this._disabled&&this._getTooltipFixedPosition(),this._hasNestedMenu&&this._getDropdownFixedPosition()}_handleMouseLeave(){this._notificationBadge&&!this._disabled&&this._notificationBadge.removeAttribute("isHover")}_handleMouseDown(){this._notificationBadge&&!this._disabled&&this._notificationBadge.setAttribute("isActive","true")}_handleMouseUp(){this._notificationBadge&&!this._disabled&&this._notificationBadge.removeAttribute("isActive")}_handleKeyDown(t){(t.key==="ArrowDown"||t.key==="ArrowUp")&&(t.preventDefault(),this.dispatchEvent(new CustomEvent("navigate",{detail:{direction:t.key==="ArrowDown"?"next":"previous"},bubbles:!0,composed:!0}))),(t.key==="Enter"||t.key===" ")&&this._handleClick(),t.key==="Escape"&&this._closeItemDropdown()}_handleActionMenuClick(){this._closeItemDropdown()}_handleFocusout(t){const a=t.relatedTarget;a===null&&this._closeItemDropdown(),a&&!this.contains(a)&&this._closeItemDropdown()}_closeItemDropdown(){this._showItemDropdown&&setTimeout(()=>{this._showItemDropdown=!1,this.requestUpdate()},0)}focusItem(){var t,a;this._isFocused=!0,(a=(t=this.shadowRoot)==null?void 0:t.querySelector("li"))==null||a.focus()}blurItem(){var t,a;this._isFocused=!1,(a=(t=this.shadowRoot)==null?void 0:t.querySelector("li"))==null||a.blur()}get _scrollContainer(){return document.querySelector(`.${this._scrollContainerClass}`)}_getDropdownFixedPosition(){const t=this.getBoundingClientRect();this._dropdown&&(this._dropdown.style.left=`${t.right+8}px`,this._dropdown.classList.contains("dss-sidemenu-list-item__dropdown--top")?this._dropdown.style.top=`${t.top}px`:this._dropdown.style.top=`${t.bottom-this._dropdown.offsetHeight}px`)}_getTooltipFixedPosition(){if(this._tooltip){const t=this.getBoundingClientRect();this._tooltip.style.top=`${t.top+t.height/2}px`,this._tooltip.style.left=`${t.right-4}px`}}async firstUpdated(){var a,c;await this.updateComplete;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".dss-sidemenu-list-item__tooltip");if(t&&(this._tooltip=t,this._getTooltipFixedPosition()),this._hasNestedMenu){const l=(c=this.shadowRoot)==null?void 0:c.querySelector(".dss-sidemenu-list-item__dropdown");l&&(this._dropdown=l,this._getDropdownFixedPosition())}this._scrollContainer&&this._scrollContainer.addEventListener("scroll",this._handleContainerScrollBound)}updated(t){super.updated(t),t.has("expanded")&&(this._getTooltipFixedPosition(),this._getDropdownFixedPosition())}render(){return sidemenuListItemTemplate(this)}}__decorateClass$l([n({type:String})],SidemenuListItem.prototype,"label");__decorateClass$l([n({type:String})],SidemenuListItem.prototype,"icon");__decorateClass$l([n(booleanType)],SidemenuListItem.prototype,"selected");__decorateClass$l([n(booleanType)],SidemenuListItem.prototype,"disabled");__decorateClass$l([n(booleanType)],SidemenuListItem.prototype,"hasNestedMenu");__decorateClass$l([n(booleanType)],SidemenuListItem.prototype,"expanded");__decorateClass$l([n({type:Number})],SidemenuListItem.prototype,"notifications");__decorateClass$l([n({type:String})],SidemenuListItem.prototype,"notificationsState");__decorateClass$l([n({type:String})],SidemenuListItem.prototype,"nestedMenuPosition");__decorateClass$l([n(booleanType)],SidemenuListItem.prototype,"focusEnabled");__decorateClass$l([n({type:String})],SidemenuListItem.prototype,"scrollContainerClass");const splitButtonStyles=".dss-split-button{position:relative;display:flex;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;font-family:var(--font-family)}.dss-split-button .dss-split-button-main:focus-visible,.dss-split-button .dss-split-button-icon:focus-visible{z-index:900}.dss-split-button-main{height:40px;padding-top:var(--dss-spacing-xs);padding-right:var(--dss-spacing-sm);padding-bottom:var(--dss-spacing-xs);padding-left:var(--dss-spacing-lg);box-sizing:border-box;border-radius:0;border-top-left-radius:var(--dss-radius-xl);border-bottom-left-radius:var(--dss-radius-xl);font-size:16px;line-height:24px;font-weight:var(--font-semibold)}.dss-split-button--primary .dss-split-button-main{border-right:var(--dss-border-width-sm) solid var(--color-white)}.dss-split-button--primary .dss-split-button-main:focus-visible{border-right:transparent}.dss-split-button--primary.dss-split-button--disabled .dss-split-button-main{border-right:var(--dss-border-width-sm) solid var(--color-neutral-500)}.dss-split-button-icon{height:40px;padding-top:var(--dss-spacing-xs);padding-right:var(--dss-spacing-md);padding-bottom:var(--dss-spacing-xs);padding-left:var(--dss-spacing-xs);box-sizing:border-box;border-radius:0;border-top-right-radius:var(--dss-radius-xl);border-bottom-right-radius:var(--dss-radius-xl);border-left:0}.dss-split-button-icon:hover:enabled{border-left:0}.dss-split-button--open.dss-split-button--primary .dss-split-button-icon:not(:disabled){background-color:var(--color-primary-700)}.dss-split-button--open.dss-split-button--secondary .dss-split-button-icon:not(:disabled){background-color:var(--color-primary-100)}.dss-split-button--md .dss-split-button-main{height:32px;font-size:14px;padding:var(--dds-spacing-xxs, 4px) var(--dds-spacing-xs, 8px) var(--dds-spacing-xxs, 4px) var(--dds-spacing-md, 16px)}.dss-split-button--md .dss-split-button-icon{height:32px;padding:var(--dds-spacing-xxs, 4px) var(--dds-spacing-xs, 8px) var(--dds-spacing-xxs, 4px) var(--dds-spacing-xxs, 4px)}.dss-split-button--sm .dss-split-button-main{height:24px;font-size:12px;padding:var(--dds-spacing-xxs, 4px) var(--dds-spacing-xs, 8px) var(--dds-spacing-xxs, 4px) var(--dds-spacing-sm, 12px);line-height:16px}.dss-split-button--sm .dss-split-button-icon{height:24px;padding:0px var(--dds-spacing-xxs, 4px) 0px var(--dss-spacing-tiny, 2px)}.dss-split-button-icon:disabled .dss-icon{color:var(--color-neutral-500)}.dss-split-button-action{position:relative}.dss-split-button-dropdown{position:absolute;display:none;z-index:900}.dss-split-button-dropdown--open{display:block}.dss-split-button-dropdown--bottom-right{top:calc(100% + var(--dss-spacing-xxs));left:0}.dss-split-button-dropdown--bottom-left{top:calc(100% + var(--dss-spacing-xxs));right:0}.dss-split-button-dropdown--top-right{bottom:calc(100% + var(--dss-spacing-xxs));left:0}.dss-split-button-dropdown--top-left{bottom:calc(100% + var(--dss-spacing-xxs));right:0}",splitButtonTemplate=d=>{const t={"dss-split-button--primary":d._type==="primary","dss-split-button--secondary":d._type==="secondary","dss-split-button--open":d._isOpen,"dss-split-button--disabled":d._disabled,[`dss-split-button--${d._size}`]:!!d._size},a={"dss-button--primary":d._type==="primary","dss-button--secondary":d._type==="secondary"},c={"dss-split-button-dropdown":!0,"dss-split-button-dropdown--open":d._isOpen,[`dss-split-button-dropdown--${d._dropdownPosition}`]:!!d._dropdownPosition};return x`
    <div class="dss-split-button ${e(t)}">
      <button
        class="dss-button ${e(a)} dss-split-button-main"
        ?disabled=${d._disabled}
        @click="${d._dispatchMainClick}"
      >
        ${d._text}
      </button>
      <div class="dss-split-button-action">
        <button
          class="dss-button ${e(a)} dss-button--only-icon dss-split-button-icon"
          ?disabled=${d._disabled}
          @click="${d._dispatchIconClick}"
        >
          <span class="dss-icon dss-icon--md">
            ${d._isOpen?x` ${d._iconOpen} `:x` ${d._iconClose} `}
          </span>
        </button>
        <div class="${e(c)}">
          <slot name="menu"></slot>
        </div>
      </div>
    </div>
  `};var __defProp$k=Object.defineProperty,__getOwnPropDesc$k=Object.getOwnPropertyDescriptor,__decorateClass$k=(d,t,a,c)=>{for(var l=__getOwnPropDesc$k(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$k(t,a,l),l};class SplitButton extends r$1{constructor(){super(),this._size="lg",this._iconClose="expand_more",this._iconOpen="expand_less",this._type="primary",this._text="",this._disabled=!1,this._isOpen=!1,this._dropdownPosition="bottom-right",this._hasMenu=!1,this._handleDocumentClickBound=this._handleDocumentClick.bind(this),this._handleActionMenuClickBound=this._handleActionMenuClick.bind(this)}static get styles(){return[r$2(iconStyles),r$2(buttonStyles),r$2(splitButtonStyles)]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleDocumentClickBound),this.addEventListener("onActionMenuItemClick",this._handleActionMenuClickBound)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClickBound),this.removeEventListener("onActionMenuItemClick",this._handleActionMenuClickBound)}set iconClose(t){const a=this._iconClose;this._iconClose=t,this.requestUpdate("iconClose",a)}set iconOpen(t){const a=this._iconOpen;this._iconOpen=t,this.requestUpdate("iconOpen",a)}set type(t){const a=this._type;this._type=t,this.requestUpdate("type",a)}set text(t){const a=this._text;this._text=t,this.requestUpdate("text",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set isOpen(t){const a=this._isOpen;this._isOpen=t,this.requestUpdate("disabled",a)}set size(t){const a=this._size;t==="md"||t==="sm"?this._size=t:this._size="lg",this.requestUpdate("size",a)}set dropdownPosition(t){const a=this._dropdownPosition;this._dropdownPosition=t,this.requestUpdate("dropdownPosition",a)}set hasMenu(t){const a=this._hasMenu;this._hasMenu=t,this.requestUpdate("hasMenu",a)}_dispatchMainClick(){const t={bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onSplitButtonMainClick",t))}_dispatchIconClick(){this._hasMenu&&this._toggleMenu();const t={bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onSplitButtonIconClick",t))}_toggleMenu(){this._isOpen=!this._isOpen,this.requestUpdate()}_handleActionMenuClick(){this._isOpen&&(this._isOpen=!1),this.requestUpdate()}_handleDocumentClick(t){this._clickedOutsideItem(this,t)}_clickedOutsideItem(t,a){a.composedPath().includes(t)||this._isOpen&&(this._isOpen=!1,this.requestUpdate())}render(){return splitButtonTemplate(this)}}__decorateClass$k([n({type:String})],SplitButton.prototype,"iconClose");__decorateClass$k([n({type:String})],SplitButton.prototype,"iconOpen");__decorateClass$k([n({type:String})],SplitButton.prototype,"type");__decorateClass$k([n({type:String})],SplitButton.prototype,"text");__decorateClass$k([n(booleanType)],SplitButton.prototype,"disabled");__decorateClass$k([n(booleanType)],SplitButton.prototype,"isOpen");__decorateClass$k([n({type:String})],SplitButton.prototype,"size");__decorateClass$k([n({type:String})],SplitButton.prototype,"dropdownPosition");__decorateClass$k([n(booleanType)],SplitButton.prototype,"hasMenu");const uploadBoxStyles=':host{display:grid;min-width:380px;width:100%;gap:var(--dss-spacing-xs)}.upload-box{display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-md);border-radius:var(--dss-radius-sm);padding:var(--dss-spacing-md);border:var(--dss-border-width-sm) dashed var(--color-neutral-100);transition:all .25s ease-in-out}.upload-box.dragover{background-color:var(--color-primary-50);border-color:var(--color-prim-salut)}::slotted(input),input[type=file]{display:none}.dss-decorative-icon{transition:all .25s ease-in-out}.upload-box-cta{flex:1;display:grid;gap:var(--dss-spacing-xs)}.upload-box-cta__message{font-size:16px;line-height:24px;color:var(--color-neutral-900)}.upload-box-cta__message .action{color:var(--color-primary-500);font-weight:var(--font-semibold);cursor:pointer}.upload-box-cta__requirements,.upload-box-message{font-size:12px;line-height:16px;color:var(--color-neutral-600)}.upload-box-message{padding:0 var(--dss-spacing-sm)}.upload-box-files .file-list{display:grid;gap:var(--dss-spacing-xs)}.upload-box--has-files .upload-box-files .file-list{width:100%}.upload-box-files .file{display:flex;min-height:40px;box-sizing:border-box;gap:var(--dss-spacing-sm);justify-content:space-between;align-items:center;border-radius:var(--dss-radius-sm);border:var(--dss-border-width-sm) solid var(--color-neutral-100);padding:0 var(--dss-spacing-sm);padding-top:0;padding-bottom:0;padding-left:var(--dss-spacing-xs);padding-right:var(--dss-spacing-sm);width:100%}.upload-box-files .file-actions{display:flex;gap:var(--dss-spacing-xs)}.upload-box-files .file-description{flex:1;padding-top:var(--dss-spacing-xs);padding-bottom:var(--dss-spacing-xs)}.upload-box-files .file-description__name{height:24px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;font-size:14px;line-height:24px;color:var(--color-neutral-900)}.file-description__error{font-size:12px;line-height:16px;color:var(--color-red-500)}.upload-box-button{text-wrap:nowrap}.upload-box--md{display:flex;justify-content:space-between;padding:var(--dss-spacing-xs) var(--dss-spacing-sm);min-height:56px}.upload-box--md .upload-box-cta{display:flex;justify-content:flex-start;align-items:center;height:100%}.upload-box--md .upload-box-cta__message{font-size:14px}.upload-box--md .upload-box-button{margin-top:var(--dss-spacing-xxs)}.upload-box--error{background-color:var(--color-red-50);border-color:var(--color-red-500)}.upload-box--error .upload-box-cta__requirements,.upload-box-message--error{color:var(--color-red-500)}.upload-box--md .upload-box-files{padding:var(--dss-spacing-xxs) 0}.upload-box--md .upload-box-files .file-list{display:grid;gap:var(--dss-spacing-xs)}.upload-box--md.upload-box--has-files .upload-box-files .file-list{grid-template-columns:1fr}.upload-box--md .upload-box-files .file{display:flex;justify-content:flex-start;align-items:center}.upload-box--disabled{cursor:not-allowed;background-color:var(--color-neutral-50)}.upload-box--disabled .upload-box-cta__requirements,.upload-box--disabled .upload-box-message{color:var(--color-neutral-500)!important}.upload-box--disabled .upload-box-cta__message,.upload-box--disabled .upload-box-cta__message .action{color:var(--color-neutral-400)!important;cursor:not-allowed}.dot-flashing{display:inline-block;position:relative;width:4px;height:4px;border-radius:50%;background-color:var(--color-neutral-900);color:var(--color-neutral-900);animation:dot-flashing 1s infinite linear alternate;animation-delay:.5s;margin-left:var(--dss-spacing-xs)}.dot-flashing:before,.dot-flashing:after{content:"";display:inline-block;position:absolute;top:0}.dot-flashing:before{left:-6px;width:4px;height:4px;border-radius:50%;background-color:var(--color-neutral-900);color:var(--color-neutral-900);animation:dot-flashing 1s infinite alternate;animation-delay:0s}.dot-flashing:after{left:6px;width:4px;height:4px;border-radius:50%;background-color:var(--color-neutral-900);color:var(--color-neutral-900);animation:dot-flashing 1s infinite alternate;animation-delay:1s}@keyframes dot-flashing{0%{background-color:var(--color-neutral-900)}50%,to{background-color:var(--color-neutral-50)}}';var __defProp$j=Object.defineProperty,__getOwnPropDesc$j=Object.getOwnPropertyDescriptor,__decorateClass$j=(d,t,a,c)=>{for(var l=__getOwnPropDesc$j(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$j(t,a,l),l};class UploadBox extends r$1{constructor(){super(...arguments),this._dragOver=!1,this._files=[],this._disabled=!1,this._dragAndDropIcon="file_upload",this._fileExplorerMessage="Clica per pujar",this._dragAndDropMessage="o arrossega arxius aquí",this._filesFormatMessage="PDF, JPEG o PNG de menys de 5MB",this._buttonLabel="Buscar arxius",this._filesFormat=["pdf","jpeg","png"],this._fileFormatErrorMessage="Format d’arxiu incorrecte",this._fileSizeErrorMessage="Mida d’arxiu incorrecte",this._fileFormatAndSizeErrorMessage="Format i mida d’arxiu incorrecte",this._maxFileSize=5242880,this._fileErrors={},this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=t=>{for(const a of t)a.type==="attributes"&&(this._input&&this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(buttonStyles),r$2(iconButtonStyles),r$2(decorativeIconStyles),r$2(uploadBoxStyles)]}set dragAndDropIcon(t){const a=this._dragAndDropIcon;this._dragAndDropIcon=t,this.requestUpdate("dragAndDropIcon",a)}set dragAndDropMessage(t){const a=this._dragAndDropMessage;this._dragAndDropMessage=t,this.requestUpdate("dragAndDropMessage",a)}set fileExplorerMessage(t){const a=this._fileExplorerMessage;this._fileExplorerMessage=t,this.requestUpdate("fileExplorerMessage",a)}set filesFormatMessage(t){const a=this._filesFormatMessage;this._filesFormatMessage=t,this.requestUpdate("filesFormatMessage",a)}set buttonLabel(t){const a=this._buttonLabel;this._buttonLabel=t,this.requestUpdate("buttonLabel",a)}set filesFormat(t){const a=this._filesFormat;this._filesFormat=t,this.requestUpdate("filesFormat",a)}set maxFileSize(t){const a=this._maxFileSize;this._maxFileSize=t,this.requestUpdate("maxFileSize",a)}get _input(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()[0]}disconnectedCallback(){this.observer.disconnect()}_checkInputAttributes(){var a;const t=(a=this._input)==null?void 0:a.getAttribute("disabled");this._disabled=t!==null,this.requestUpdate()}_onDragOver(t){t.preventDefault(),!this._dragOver&&!this._disabled&&(this._dragOver=!0,this.requestUpdate())}_onDragLeave(t){t.preventDefault(),this._dragOver&&!this._disabled&&(this._dragOver=!1,this.requestUpdate())}_onDrop(t){var a;if(t.preventDefault(),!this._disabled){this._dragOver&&(this._dragOver=!1,this.requestUpdate());const c=(a=t.dataTransfer)==null?void 0:a.files;c&&this._handleUploadedFiles(c)}}_onClick(){this._input&&!this._disabled&&this._input.click()}_onSlotInputChange(){this._input&&this._input.addEventListener("change",this._handleInputFileChange.bind(this))}_isValidFileFormat(t){var c;const a=(c=t.name.split(".").pop())==null?void 0:c.toLowerCase();return this._filesFormat.includes(a||"")}_isValidFileSize(t){return t.size<=this._maxFileSize}_validateFile(t){let a=!0,c="";return!this._isValidFileSize(t)&&!this._isValidFileFormat(t)?(a=!1,c=this._fileFormatAndSizeErrorMessage):this._isValidFileSize(t)&&!this._isValidFileFormat(t)?(a=!1,c=this._fileFormatErrorMessage):!this._isValidFileSize(t)&&this._isValidFileFormat(t)&&(a=!1,c=this._fileSizeErrorMessage),a||(this._fileErrors[t.name]=c),a}_isAlreadyUploaded(t){return this._files.some(a=>a.name===t.name)}_handleInputFileChange(t){const a=t.target;a.files&&this._handleUploadedFiles(a.files)}_handleUploadedFiles(t){if(t&&t.length>0){for(const a of Array.from(t))if(!this._isAlreadyUploaded(a)){const c=this._validateFile(a),l=a;l.status=c?"loading":"invalid",this._files.push(l),this.requestUpdate(),this._readFile(a,c)}}}_readFile(t,a){const c=new FileReader;c.onload=()=>{this._files.find(l=>l.name===t.name).status=a?"ready":"invalid",this.requestUpdate(),this._dispatchUploadFiles()},c.onerror=()=>{this._files.find(l=>l.name===t.name).status="error",c.error&&(this._fileErrors[t.name]=c.error.message),this.requestUpdate()},c.readAsDataURL(t)}_removeFile(t){this._files.splice(t,1),this._dispatchUploadFiles(),this._input&&(this._input.value=""),this.requestUpdate()}_reloadFile(t){this._files.find(a=>a.name===t.name).status="loading",this._fileErrors[t.name]="",this.requestUpdate(),this._readFile(t)}_dispatchUploadFiles(){const t={detail:this._files,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onUploadFiles",t))}async firstUpdated(){try{await this.updateComplete,this._input&&(this.observer.observe(this._input,this.observerConfig),this._checkInputAttributes(),this._onSlotInputChange())}catch{console.error("ERROR OCURRED")}}render(){const t={dragover:this._dragOver,"upload-box--disabled":this._disabled},a={"dss-decorative-icon--disabled":this._disabled};return x`
      <!-- Drag and drop -->
      <div
        class="upload-box ${e(t)}"
        @dragover="${this._onDragOver}"
        @dragleave="${this._onDragLeave}"
        @drop="${this._onDrop}"
      >
        <div
          class="dss-decorative-icon dss-decorative-icon--lg ${e(a)}"
        >
          <i class="dss-icon">${this._dragAndDropIcon}</i>
        </div>
        <div class="upload-box-cta">
          <div class="upload-box-cta__message">
            <span class="action" @click=${this._onClick}
              >${this._fileExplorerMessage}</span
            >
            ${this._dragAndDropMessage}
          </div>
          <div class="upload-box-cta__requirements">
            ${this._filesFormatMessage}
          </div>
        </div>
        <slot name="input"></slot>
      </div>

      <!--Uploaded files -->
      <div class="upload-box-files">
        <ul class="file-list">
          ${this._files.map((c,l)=>x`
              <li class="file">
                ${this._fileErrors[c.name]?x`
                      <div
                        class="dss-decorative-icon dss-decorative-icon--sm dss-decorative-icon--error"
                      >
                        <i class="dss-icon dss-icon--sm">error_outline</i>
                      </div>
                    `:c.status==="loading"?x`
                      <div
                        class="dss-decorative-icon dss-decorative-icon--sm dss-decorative-icon--info"
                      >
                        <i class="dss-icon dss-icon--sm">downloading</i>
                      </div>
                    `:x`
                      <div
                        class="dss-decorative-icon dss-decorative-icon--sm dss-decorative-icon--success"
                      >
                        <i class="dss-icon dss-icon--sm">check</i>
                      </div>
                    `}
                <div class="file-description">
                  <p class="file-description__name">
                    ${c.name}
                    ${c.status==="loading"?x` <span class="dot-flashing"></span> `:x``}
                  </p>
                  ${this._fileErrors[c.name]?x`
                        <p class="file-description__error">
                          ${this._fileErrors[c.name]}
                        </p>
                      `:""}
                </div>
                <div class="file-actions">
                  ${c.status==="loading"?x`
                        <button
                          class="dss-icon-button dss-icon-button--error dss-icon-button--sm"
                        >
                          <span class="dss-icon dss-icon--sm">block</span>
                        </button>
                      `:x`
                        ${c.status==="error"?x`
                              <button
                                class="dss-icon-button dss-icon-button--primary dss-icon-button--sm"
                                @click="${()=>this._reloadFile(c)}"
                              >
                                <span class="dss-icon dss-icon--sm">restart_alt</span>
                              </button>
                            `:x``}
                        <button
                          class="dss-icon-button dss-icon-button--error dss-icon-button--sm"
                          @click="${()=>this._removeFile(l)}"
                        >
                          <span class="dss-icon dss-icon--sm">delete</span>
                        </button>
                      `}
                </div>
              </li>
            `)}
        </ul>
      </div>
    `}}__decorateClass$j([n({type:String})],UploadBox.prototype,"dragAndDropIcon");__decorateClass$j([n({type:String})],UploadBox.prototype,"dragAndDropMessage");__decorateClass$j([n({type:String})],UploadBox.prototype,"fileExplorerMessage");__decorateClass$j([n({type:String})],UploadBox.prototype,"filesFormatMessage");__decorateClass$j([n({type:String})],UploadBox.prototype,"buttonLabel");__decorateClass$j([n({type:Array})],UploadBox.prototype,"filesFormat");__decorateClass$j([n({type:Number})],UploadBox.prototype,"maxFileSize");const userFeedbackStyles=":host{display:block;width:-moz-fit-content;width:fit-content}.dss-user-feedback{display:flex;align-items:center;flex-direction:column;gap:var(--dss-spacing-md);min-width:220px;width:-moz-fit-content;width:fit-content;max-width:100%;text-align:center}.dss-user-feedback__image{width:100%;max-width:220px;margin:auto;text-align:center}.dss-user-feedback__body{display:flex;flex-direction:column;gap:var(--dss-spacing-xxs);max-width:220px}.dss-user-feedback__title{color:var(--color-headline);font-weight:var(--font-bold);font-size:20px;line-height:var(--line-30)}.dss-user-feedback__description{font-size:14px;line-height:var(--line-24)}.dss-user-feedback__button-group{display:flex;align-items:center;justify-content:center;gap:var(--dss-spacing-md)}.dss-user-feedback__details-action{text-align:center}.dss-user-feedback__details-button{all:unset;display:inline-flex;align-items:center;gap:var(--dss-spacing-xxs);font-size:14px;line-height:24px;font-weight:var(--font-semibold);color:var(--color-primary-500);text-decoration:none;border-radius:var(--dss-radius-xs);transition:.2s all ease-in;vertical-align:middle;cursor:pointer}.dss-user-feedback__details-button:hover{color:var(--color-primary-600)}.dss-user-feedback__details-button:active{color:var(--color-primary-400)}.dss-user-feedback__details-button:focus-visible{outline:var(--dss-border-width-md) solid var(--color-blue-200)}.dss-user-feedback__details-button:disabled{cursor:not-allowed;color:var(--color-neutral-500)!important}.dss-user-feedback__details-button-text{text-decoration:underline}.dss-user-feedback__details-content ::slotted(div){font-size:14px;line-height:var(--line-24)}",userFeedbackTemplate=d=>x`
  <div class="dss-user-feedback">
    <img
      class="dss-user-feedback__image"
      src="${d._imageSrc}"
      alt="${d._imageAlt}"
    />
    <div class="dss-user-feedback__body">
      <h4 class="dss-user-feedback__title">${d._title}</h4>
      <p class="dss-user-feedback__description">${d._description}</p>
      ${d._hasDetails?x`
            <div class="dss-user-feedback__details-action">
              <button
                class="dss-user-feedback__details-button"
                @click="${d._handleDetailsClick}"
              >
                <span class="dss-user-feedback__details-button-text">
                  ${d._detailsLabel}
                </span>
                <i class="dss-icon dss-icon--sm">
                  ${d._detailsExpanded?"expand_less":"expand_more"}
                </i>
              </button>
            </div>

            ${d._detailsExpanded?x`
                  <div class="dss-user-feedback__details-content">
                    <slot name="details"></slot>
                  </div>
                `:null}
          `:null}
    </div>
    ${d._hideFooter?null:x`
          <div class="dss-user-feedback__button-group">
            <slot></slot>
          </div>
        `}
  </div>
`;var __defProp$i=Object.defineProperty,__getOwnPropDesc$i=Object.getOwnPropertyDescriptor,__decorateClass$i=(d,t,a,c)=>{for(var l=__getOwnPropDesc$i(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$i(t,a,l),l};class UserFeedback extends r$1{constructor(){super(...arguments),this._imageSrc="",this._imageAlt="",this._title="Title",this._description="Lorem ipsum.",this._hasDetails=!1,this._detailsLabel="Veure detalls",this._detailsExpanded=!1,this._hideFooter=!1}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(userFeedbackStyles)]}set imageSrc(t){const a=this._imageSrc;this._imageSrc=t,this.requestUpdate("imageSrc",a)}set imageAlt(t){const a=this._imageAlt;this._imageAlt=t,this.requestUpdate("imageAlt",a)}set title(t){const a=this._title;this._title=t,this.requestUpdate("title",a)}set description(t){const a=this._description;this._description=t,this.requestUpdate("description",a)}set hasDetails(t){const a=this._hasDetails;this._hasDetails=t,this.requestUpdate("hasDetails",a)}set detailsLabel(t){const a=this._detailsLabel;this._detailsLabel=t,this.requestUpdate("detailsLabel",a)}set hideFooter(t){const a=this._hideFooter;this._hideFooter=t,this.requestUpdate("hideFooter",a)}_handleDetailsClick(){this._detailsExpanded=!this._detailsExpanded,this.requestUpdate()}render(){return userFeedbackTemplate(this)}}__decorateClass$i([n({type:String})],UserFeedback.prototype,"imageSrc");__decorateClass$i([n({type:String})],UserFeedback.prototype,"imageAlt");__decorateClass$i([n({type:String})],UserFeedback.prototype,"title");__decorateClass$i([n({type:String})],UserFeedback.prototype,"description");__decorateClass$i([n(booleanType)],UserFeedback.prototype,"hasDetails");__decorateClass$i([n({type:String})],UserFeedback.prototype,"detailsLabel");__decorateClass$i([n(booleanType)],UserFeedback.prototype,"hideFooter");const cardStyles=i$1`
  :host {
    display: block;
    width: 100%;
  }

  .dss-card {
    display: flex;
    flex-direction: column;
    gap: var(--dss-spacing-xs);
    background-color: var(--color-white);
    border: var(--dss-border-width-sm) solid var(--color-neutral-100);
    border-radius: var(--dss-radius-lg);
    padding: var(--dss-spacing-md);
    transition: all 0.3s ease-in-out;

    &:hover:not(.dss-card--dragged):not(.dss-card--deleted):not(
        .dss-card--disabled
      ) {
      /* background-color: var(--color-primary-100); */
      border-color: var(--color-primary-500);
    }

    &:active:not(.dss-card--dragged):not(.dss-card--deleted):not(
        .dss-card--disabled
      ) {
      background-color: var(--color-primary-50);
    }

    &:focus-visible {
      border-color: var(--color-blue-200);
      outline: var(--dss-border-width-lg) solid var(--color-blue-200);
    }
  }

  .dss-card--selected {
    border-color: var(--color-primary-500);
    border-width: var(--dss-border-width-md);
  }

  .dss-card--dragged {
    /* border-color: var(--color-primary-500); */
    border-color: transparent !important;
    /* border-width: var(--dss-border-width-md); */
    box-shadow: 0px 4px 4px 0px #0000001a;
    box-shadow: 0px 8px 12px 6px #0000000d;
  }

  .dss-card--deleted {
    border-color: var(--color-red-500);
    border-width: var(--dss-border-width-md);
  }

  .dss-card--disabled {
    background-color: var(--color-neutral-50);
  }

  .dss-card-top {
    display: flex;
    align-items: center;
    gap: var(--dss-spacing-xs);
    padding-bottom: var(--dss-spacing-sm);
    border-bottom: var(--dss-border-width-sm) solid var(--color-neutral-50);
  }

  .dss-card-top__details {
    display: grid;
    grid-template-columns: auto minmax(min-content, 1fr);
    align-items: center;
    gap: var(--dss-spacing-lg);
    flex: 1;
  }
`;var __defProp$h=Object.defineProperty,__getOwnPropDesc$h=Object.getOwnPropertyDescriptor,__decorateClass$h=(d,t,a,c)=>{for(var l=__getOwnPropDesc$h(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$h(t,a,l),l};class Card extends r$1{constructor(){super(...arguments),this._dragged=!1,this._deleted=!1,this._selected=!1,this._disabled=!1,this._hasClose=!1,this._hasDetails=!1}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(iconButtonStyles),cardStyles]}set selected(t){const a=this._selected;this._selected=t,this.requestUpdate("selected",a)}set dragged(t){const a=this._dragged;this._dragged=t,this.requestUpdate("dragged",a)}set deleted(t){const a=this._deleted;this._deleted=t,this.requestUpdate("deleted",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set hasClose(t){const a=this._hasClose;this._hasClose=t,this.requestUpdate("hasClose",a)}set hasDetails(t){const a=this._hasDetails;this._hasDetails=t,this.requestUpdate("hasDetails",a)}_propagateProperties(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelectorAll("slot");t&&t.forEach(c=>{c.assignedElements().forEach(h=>{this._deleted?h.setAttribute("deleted","true"):h.removeAttribute("deleted"),this._disabled?h.setAttribute("disabled","true"):h.removeAttribute("disabled")})})}_dispatchClose(){this.dispatchEvent(new CustomEvent("onClose",{bubbles:!0}))}updated(t){super.updated(t),(t.has("deleted")||t.has("disabled"))&&this._propagateProperties()}render(){const t={"dss-card--selected":this._selected,"dss-card--dragged":this._dragged,"dss-card--deleted":this._deleted,"dss-card--disabled":this._disabled};return x`
      <div class="dss-card ${e(t)}" tabindex="0">
        ${this._hasClose||this._hasDetails?x`
              <div class="dss-card-top">
                <div class="dss-card-top__details">
                  <slot name="tags"></slot>
                  <slot name="info"></slot>
                </div>
                ${this._hasClose?x`
                      <div class="dss-card-top__close">
                        <button
                          type="button"
                          class="dss-icon-button dss-icon-button--md dss-icon-button--default"
                          @click=${this._dispatchClose}
                          ?disabled=${this._disabled}
                        >
                          <span class="dss-icon">close </span>
                        </button>
                      </div>
                    `:x``}
              </div>
            `:x``}

        <slot name="header"></slot>
        <slot name="form"></slot>
        <slot name="image"></slot>
        <slot name="body"></slot>
        <slot name="highlights"></slot>
        <slot name="footer"></slot>
      </div>
    `}}__decorateClass$h([n(booleanType)],Card.prototype,"selected");__decorateClass$h([n(booleanType)],Card.prototype,"dragged");__decorateClass$h([n(booleanType)],Card.prototype,"deleted");__decorateClass$h([n(booleanType)],Card.prototype,"disabled");__decorateClass$h([n(booleanType)],Card.prototype,"hasClose");__decorateClass$h([n(booleanType)],Card.prototype,"hasDetails");var __defProp$g=Object.defineProperty,__getOwnPropDesc$g=Object.getOwnPropertyDescriptor,__decorateClass$g=(d,t,a,c)=>{for(var l=__getOwnPropDesc$g(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$g(t,a,l),l};class CardBody extends r$1{constructor(){super(...arguments),this._deleted=!1,this._disabled=!1}static get styles(){return[r$2(iconStyles),i$1`
        :host {
          display: flex;
          flex-direction: column;
          gap: var(--dss-spacing-xxs);
        }
      `]}set deleted(t){const a=this._deleted;this._deleted=t,this.requestUpdate("deleted",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}_propagateProperties(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelectorAll("slot");t&&t.forEach(c=>{c.assignedElements().forEach(h=>{this._deleted?h.setAttribute("deleted","true"):h.removeAttribute("deleted"),this._disabled?h.setAttribute("disabled","true"):h.removeAttribute("disabled")})})}updated(t){super.updated(t),(t.has("deleted")||t.has("disabled"))&&this._propagateProperties()}render(){return x` <slot></slot> `}}__decorateClass$g([n(booleanType)],CardBody.prototype,"deleted");__decorateClass$g([n(booleanType)],CardBody.prototype,"disabled");var __defProp$f=Object.defineProperty,__getOwnPropDesc$f=Object.getOwnPropertyDescriptor,__decorateClass$f=(d,t,a,c)=>{for(var l=__getOwnPropDesc$f(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$f(t,a,l),l};class CardDescription extends r$1{constructor(){super(...arguments),this._deleted=!1,this._disabled=!1}static get styles(){return[r$2(resetStyles),i$1`
        .dss-card-description {
          font-size: 14px;
          line-height: 24px;
          color: var(--color-neutral-600);
        }

        .dss-card-description.deleted {
          color: var(--color-red-500);
        }
      `]}set deleted(t){const a=this._deleted;this._deleted=t,this.requestUpdate("deleted",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}render(){const t={deleted:this._deleted,disabled:this._disabled};return x`
      <p class="dss-card-description ${e(t)}">
        <slot></slot>
      </p>
    `}}__decorateClass$f([n(booleanType)],CardDescription.prototype,"deleted");__decorateClass$f([n(booleanType)],CardDescription.prototype,"disabled");var __defProp$e=Object.defineProperty,__getOwnPropDesc$e=Object.getOwnPropertyDescriptor,__decorateClass$e=(d,t,a,c)=>{for(var l=__getOwnPropDesc$e(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$e(t,a,l),l};class CardFooter extends r$1{constructor(){super(...arguments),this._deleted=!1,this._disabled=!1}static get styles(){return i$1`
      :host {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        gap: var(--dss-spacing-sm);
        padding-top: var(--dss-spacing-sm) !important;
        border-top: var(--dss-border-width-sm) solid var(--color-neutral-50);
      }
    `}get _footerContent(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector("slot"))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()}set deleted(t){const a=this._deleted;this._deleted=t,this.requestUpdate("deleted",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}_propagateProperties(){if(this._footerContent)for(const t of this._footerContent)this._disabled?t.setAttribute("disabled","true"):t.removeAttribute("disabled"),this._deleted?t.classList.contains("dss-button--primary")&&(t.classList.remove("dss-button--primary"),t.classList.add("dss-button--error")):t.classList.contains("dss-button--error")&&(t.classList.add("dss-button--primary"),t.classList.remove("dss-button--error"))}updated(t){super.updated(t),(t.has("deleted")||t.has("disabled"))&&this._propagateProperties()}render(){return x` <slot></slot> `}}__decorateClass$e([n(booleanType)],CardFooter.prototype,"deleted");__decorateClass$e([n(booleanType)],CardFooter.prototype,"disabled");var __defProp$d=Object.defineProperty,__getOwnPropDesc$d=Object.getOwnPropertyDescriptor,__decorateClass$d=(d,t,a,c)=>{for(var l=__getOwnPropDesc$d(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$d(t,a,l),l};class CardForm extends r$1{constructor(){super(...arguments),this._disabled=!1}static get styles(){return[r$2(iconStyles),i$1`
        :host {
          display: flex;
          flex-direction: column;
					align-items: flex-start;
          gap: var(--dss-spacing-xxs);
					width: 100%;
        }

				::slotted(*) {
					width: 100%;
				}
      `]}get _formContent(){var a;const t=((a=this.shadowRoot)==null?void 0:a.querySelector("slot"))||void 0;return this.requestUpdate(),t==null?void 0:t.assignedElements()}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}_propagateProperties(){if(this._formContent)for(const t of this._formContent)t.querySelectorAll("input").forEach(c=>{this._disabled?c.setAttribute("disabled","true"):c.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this._propagateProperties()}render(){return x` <slot></slot> `}}__decorateClass$d([n(booleanType)],CardForm.prototype,"disabled");var __defProp$c=Object.defineProperty,__getOwnPropDesc$c=Object.getOwnPropertyDescriptor,__decorateClass$c=(d,t,a,c)=>{for(var l=__getOwnPropDesc$c(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$c(t,a,l),l};class CardHeader extends r$1{constructor(){super(...arguments),this._flag=!1,this._hasMenu=!1,this._deleted=!1,this._disabled=!1}static get styles(){return[r$2(resetStyles),r$2(iconStyles),i$1`
        .dss-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--dss-spacing-lg);
					width: 100%;
        }

        .dss-card-header-title {
          flex: 1;
        }

        .dss-card-header-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--dss-spacing-xs);
        }

        .dss-card-header-actions__flag {
          color: var(--color-red-500);
        }
      `]}set flag(t){const a=this._flag;this._flag=t,this.requestUpdate("flag",a)}set hasMenu(t){const a=this._hasMenu;this._hasMenu=t,this.requestUpdate("hasMenu",a)}set deleted(t){const a=this._deleted;this._deleted=t,this.requestUpdate("deleted",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}_propagateProperties(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelectorAll("slot");t&&t.forEach(c=>{c.assignedElements().forEach(h=>{this._deleted?h.setAttribute("deleted","true"):h.removeAttribute("deleted"),this._disabled?h.setAttribute("disabled","true"):h.removeAttribute("disabled")})})}updated(t){super.updated(t),(t.has("deleted")||t.has("disabled"))&&this._propagateProperties()}render(){const t={deleted:this._deleted,disabled:this._disabled};return x`
      <div class="dss-card-header">
        <div class="dss-card-header-title ${e(t)}">
          <slot name="title"></slot>
        </div>
        ${this._flag||this._hasMenu?x`
              <div class="dss-card-header-actions">
                ${this._flag?x` <i
                      class="dss-icon dss-icon--md dss-icon--fill dss-card-header-actions__flag"
                      >flag</i
                    >`:""}
                ${this._hasMenu?x` <slot name="menu"></slot> `:x``}
              </div>
            `:x``}
      </div>
    `}}__decorateClass$c([n(booleanType)],CardHeader.prototype,"flag");__decorateClass$c([n(booleanType)],CardHeader.prototype,"hasMenu");__decorateClass$c([n(booleanType)],CardHeader.prototype,"deleted");__decorateClass$c([n(booleanType)],CardHeader.prototype,"disabled");var __defProp$b=Object.defineProperty,__getOwnPropDesc$b=Object.getOwnPropertyDescriptor,__decorateClass$b=(d,t,a,c)=>{for(var l=__getOwnPropDesc$b(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$b(t,a,l),l};class CardHighlightsItem extends r$1{constructor(){super(...arguments),this._deleted=!1,this._disabled=!1,this._title="Title",this._icon="",this._text="Item"}static get styles(){return[r$2(resetStyles),r$2(iconStyles),i$1`
        .dss-card-highligth {
					width: 100%;
          background-color: var(--color-blue-50);
          padding: var(--dss-spacing-xxs) var(--dss-spacing-xs);
          border-radius: var(--dss-radius-sm);
        }

        .dss-card-highligth__title {
          font-size: 14px;
          line-height: 24px;
          font-weight: var(--font-semibold);
          color: var(--color-blue-700);
        }

        .dss-card-highligth__item {
          display: flex;
          align-items: center;
          gap: var(--dss-spacing-xxs);
          font-size: 14px;
          line-height: 24px;
          color: var(--color-blue-700);
        }

        .dss-card-highligth.deleted {
          background-color: var(--color-red-50);
        }

        .dss-card-highligth.deleted .dss-card-highligth__title,
        .dss-card-highligth.deleted .dss-card-highligth__item {
          color: var(--color-red-700);
        }

        .dss-card-highligth.disabled {
          background-color: var(--color-neutral-50);
        }

        .dss-card-highligth.disabled .dss-card-highligth__title,
        .dss-card-highligth.disabled .dss-card-highligth__item {
          color: var(--color-neutral-700);
        }
      `]}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}set title(t){const a=this._title;this._title=t,this.requestUpdate("title",a)}set text(t){const a=this._text;this._text=t,this.requestUpdate("text",a)}set deleted(t){const a=this._deleted;this._deleted=t,this.requestUpdate("deleted",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}render(){const t={deleted:this._deleted,disabled:this._disabled};return x`
      <div class="dss-card-highligth ${e(t)}">
        <h5 class="dss-card-highligth__title">${this._title}</h5>
        <p class="dss-card-highligth__item">
          ${this._icon?x`<i class="dss-icon dss-icon--sm">${this._icon}</i>`:""}
          ${this._text}
        </p>
      </div>
    `}}__decorateClass$b([n({type:String})],CardHighlightsItem.prototype,"icon");__decorateClass$b([n({type:String})],CardHighlightsItem.prototype,"title");__decorateClass$b([n({type:String})],CardHighlightsItem.prototype,"text");__decorateClass$b([n(booleanType)],CardHighlightsItem.prototype,"deleted");__decorateClass$b([n(booleanType)],CardHighlightsItem.prototype,"disabled");var __defProp$a=Object.defineProperty,__getOwnPropDesc$a=Object.getOwnPropertyDescriptor,__decorateClass$a=(d,t,a,c)=>{for(var l=__getOwnPropDesc$a(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$a(t,a,l),l};class CardHighlights extends r$1{constructor(){super(...arguments),this._deleted=!1,this._disabled=!1}static get styles(){return i$1`
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
        gap: var(--dss-spacing-sm);
      }
    `}set deleted(t){const a=this._deleted;this._deleted=t,this.requestUpdate("deleted",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}_propagateProperties(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelectorAll("slot");t&&t.forEach(c=>{c.assignedElements().forEach(h=>{this._deleted?h.setAttribute("deleted","true"):h.removeAttribute("deleted"),this._disabled?h.setAttribute("disabled","true"):h.removeAttribute("disabled")})})}updated(t){super.updated(t),(t.has("deleted")||t.has("disabled"))&&this._propagateProperties()}render(){return x` <slot></slot> `}}__decorateClass$a([n(booleanType)],CardHighlights.prototype,"deleted");__decorateClass$a([n(booleanType)],CardHighlights.prototype,"disabled");var __defProp$9=Object.defineProperty,__getOwnPropDesc$9=Object.getOwnPropertyDescriptor,__decorateClass$9=(d,t,a,c)=>{for(var l=__getOwnPropDesc$9(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$9(t,a,l),l};class CardImage extends r$1{constructor(){super(...arguments),this._source="",this._alt=""}static get styles(){return[i$1`
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          max-height: 124px;
          overflow: hidden;
          border-radius: var(--dss-radius-sm);
        }

        img {
          width: 100%;
          max-width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: var(--dss-radius-sm);
        }
      `]}set source(t){const a=this._source;this._source=t,this.requestUpdate("source",a)}set alt(t){const a=this._alt;this._alt=t,this.requestUpdate("alt",a)}render(){return x` <img src="${this._source}" alt="${this._alt}" /> `}}__decorateClass$9([n({type:String})],CardImage.prototype,"source");__decorateClass$9([n({type:String})],CardImage.prototype,"alt");var __defProp$8=Object.defineProperty,__getOwnPropDesc$8=Object.getOwnPropertyDescriptor,__decorateClass$8=(d,t,a,c)=>{for(var l=__getOwnPropDesc$8(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$8(t,a,l),l};class CardInfoItem extends r$1{constructor(){super(...arguments),this._icon="add_box",this._text="Info",this._critic=!1}static get styles(){return[r$2(iconStyles),i$1`
        :host {
          display: inline-block;
        }

        .info {
          display: flex;
          align-items: center;
          gap: var(--dss-spacing-tiny);
          font-size: 12px;
          line-height: 16px;
          font-weight: var(--font-regular);
        }

        .info--critic {
          color: var(--color-red-500);
        }
      `]}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}set text(t){const a=this._text;this._text=t,this.requestUpdate("text",a)}set critic(t){const a=this._critic;this._critic=t,this.requestUpdate("text",a)}render(){const t={"info--critic":this._critic};return x`
      <div class="info ${e(t)}">
        ${this._icon?x`<i class="dss-icon dss-icon--sm">${this._icon}</i>`:""}
        <span>${this._text}</span>
      </div>
    `}}__decorateClass$8([n({type:String})],CardInfoItem.prototype,"icon");__decorateClass$8([n({type:String})],CardInfoItem.prototype,"text");__decorateClass$8([n(booleanType)],CardInfoItem.prototype,"critic");class CardInfo extends r$1{static get styles(){return i$1`
      :host {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        gap: var(--dss-spacing-sm);
        flex-wrap: wrap;
        min-width: 150px;
      }
    `}render(){return x` <slot></slot> `}}var __defProp$7=Object.defineProperty,__getOwnPropDesc$7=Object.getOwnPropertyDescriptor,__decorateClass$7=(d,t,a,c)=>{for(var l=__getOwnPropDesc$7(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$7(t,a,l),l};class CardMenu extends r$1{constructor(){super(...arguments),this._position="right",this._disabled=!1,this._showMenu=!1}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(iconButtonStyles),i$1`
        :host {
          display: block;
        }

        .dss-card-menu {
          position: relative;
        }

        .dss-card-menu-dropdown {
          position: absolute;
          top: 0;
          z-index: 900;
        }

        .dss-card-menu-dropdown--right {
          left: calc(100% + var(--dss-spacing-sm));
        }

        .dss-card-menu-dropdown--left {
          right: calc(100% + var(--dss-spacing-sm));
        }

        .dss-card-menu-dropdown.hidden {
          display: none;
        }
      `]}set position(t){const a=this._position;this._position=t,this.requestUpdate("position",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}_clickedOutsideDropdown(t,a){a.composedPath().includes(t)||this._showMenu&&(this._showMenu=!1,this.requestUpdate())}_openMenu(){this._showMenu=!0,this.requestUpdate()}async firstUpdated(){try{await this.updateComplete,this._disabled||document.addEventListener("click",t=>{this._clickedOutsideDropdown(this,t)}),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}render(){const t={hidden:!this._showMenu,"dss-card-menu-dropdown--left":this._position==="left","dss-card-menu-dropdown--right":this._position!=="left"};return x`
      <div class="dss-card-menu">
        <button
          type="button"
          class="dss-icon-button dss-icon-button--md dss-icon-button--primary"
          @click=${this._openMenu}
          ?disabled=${this._disabled}
        >
          <span class="dss-icon">more_vert </span>
        </button>
        <div class="dss-card-menu-dropdown ${e(t)}">
          <slot></slot>
        </div>
      </div>
    `}}__decorateClass$7([n({type:String})],CardMenu.prototype,"position");__decorateClass$7([n(booleanType)],CardMenu.prototype,"disabled");var __defProp$6=Object.defineProperty,__getOwnPropDesc$6=Object.getOwnPropertyDescriptor,__decorateClass$6=(d,t,a,c)=>{for(var l=__getOwnPropDesc$6(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$6(t,a,l),l};class CardSubitle extends r$1{constructor(){super(...arguments),this._deleted=!1,this._disabled=!1,this._hasLink=!1,this._linkHref="#",this._hasIcon=!1,this._icon="add_box"}static get styles(){return[r$2(resetStyles),r$2(iconStyles),i$1`
        :host {
					width: 100%;
					display: block;
        }
        .dss-card-subtitle {
          display: flex;
          align-items: center;
          font-size: 14px;
          line-height: 24px;
          font-weight: var(--font-semibold);
          color: var(--color-neutral-900);
          gap: var(--dss-spacing-xxs);
        }

        .dss-card-subtitle.deleted {
          color: var(--color-red-500);
        }

        .dss-card-subtitle__link {
          color: var(--color-primary-500);

          &:visited {
            color: var(--color-purple-700);
          }

          &:hover {
            color: var(--color-primary-600);
          }

          &:active {
            color: var(--color-primary-400);
          }

          &:focus-visible {
            outline: var(--dss-border-width-md) solid var(--color-blue-200);
          }
        }
      `]}set deleted(t){const a=this._deleted;this._deleted=t,this.requestUpdate("deleted",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set hasLink(t){const a=this._hasLink;this._hasLink=t,this.requestUpdate("hasLink",a)}set linkHref(t){const a=this._linkHref;this._linkHref=t,this.requestUpdate("linkHref",a)}set hasIcon(t){const a=this._hasIcon;this._hasIcon=t,this.requestUpdate("hasLhasIconink",a)}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}render(){const t={deleted:this._deleted,disabled:this._disabled};return x`
      <h4 class="dss-card-subtitle ${e(t)}">
        ${this._hasIcon?x` <i class="dss-icon dss-icon--sm">${this._icon}</i> `:null}
        ${this._hasLink?x`
              <a class="dss-card-subtitle__link" href="${this._linkHref}">
                <slot></slot>
              </a>
            `:x` <slot></slot> `}
      </h4>
    `}}__decorateClass$6([n(booleanType)],CardSubitle.prototype,"deleted");__decorateClass$6([n(booleanType)],CardSubitle.prototype,"disabled");__decorateClass$6([n(booleanType)],CardSubitle.prototype,"hasLink");__decorateClass$6([n({type:String})],CardSubitle.prototype,"linkHref");__decorateClass$6([n(booleanType)],CardSubitle.prototype,"hasIcon");__decorateClass$6([n({type:String})],CardSubitle.prototype,"icon");class CardTags extends r$1{static get styles(){return i$1`
      :host {
        display: flex;
        align-items: center;
        width: 100%;
        gap: var(--dss-spacing-xxs);
        flex-wrap: wrap;
        min-width: 150px;
      }
    `}render(){return x` <slot></slot> `}}var __defProp$5=Object.defineProperty,__getOwnPropDesc$5=Object.getOwnPropertyDescriptor,__decorateClass$5=(d,t,a,c)=>{for(var l=__getOwnPropDesc$5(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$5(t,a,l),l};class CardTitle extends r$1{constructor(){super(...arguments),this._deleted=!1,this._disabled=!1}static get styles(){return[r$2(resetStyles),i$1`
        :host {
          display: block;
        }
        .dss-card-title {
          font-size: 18px;
          line-height: 24px;
          font-weight: var(--font-semibold);
          color: var(--color-neutral-900);
        }

        .dss-card-title.deleted {
          color: var(--color-red-500);
        }
      `]}set deleted(t){const a=this._deleted;this._deleted=t,this.requestUpdate("deleted",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}render(){const t={deleted:this._deleted,disabled:this._disabled};return x`
      <h3 class="dss-card-title ${e(t)}">
        <slot></slot>
      </h3>
    `}}__decorateClass$5([n(booleanType)],CardTitle.prototype,"deleted");__decorateClass$5([n(booleanType)],CardTitle.prototype,"disabled");var __defProp$4=Object.defineProperty,__getOwnPropDesc$4=Object.getOwnPropertyDescriptor,__decorateClass$4=(d,t,a,c)=>{for(var l=__getOwnPropDesc$4(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$4(t,a,l),l};const I=class I extends r$1{constructor(){super(...arguments),this._value="",this._label="",this._placeHolder="",this._previousDate="",this._minDate="",this._maxDate="",this._showCalendar=!1,this._showTime=!1,this._invalid=!1,this._showButtons=!1,this._required=!1,this._disabled=!1,this._readonly=!1,this._leftLabel="Cancel·lar",this._rightLabel="Acceptar",this._isFocused=!1,this._internals=this.attachInternals()}static get styles(){return i$1`
      :host {
        display: flex;
        width: fit-content;
        height: fit-content;
        position: relative;
      }

      label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        cursor: text;
        position: absolute;
      }

      input {
        outline: none;
        border: 0;
        font-size: 14px;
        line-height: 24px;
        font-style: normal;
        color: #1d1d1d;
        width: 100%;
        text-overflow: ellipsis;
      }

      input::placeholder {
        color: #9f9f9f;
      }

      .dss-input {
        display: flex;
        flex-direction: column;
        color: #656565;
        position: relative;
        width: 100%;
      }

      .dss-input--disabled {
        opacity: 0.6;
      }

      .dss-input__content {
        display: flex;
        align-items: center;
        flex: 1;
      }

      .dss-input--disabled .dss-input__group,
      .dss-input--disabled input {
        background-color: #f5f5f5;
        cursor: not-allowed;
      }

      .dss-input--disabled label,
      .dss-input--disabled input {
        cursor: not-allowed;
      }

      .dss-input__group {
        position: relative;
        background: #ffffff;
        box-shadow: inset 0 0 0 1px #d8d8d8;
        border-radius: 8px;
        padding: 12px;
        display: flex;
        gap: 8px;
      }

      :host([small]) .dss-input__group {
        padding: 8px 12px;
      }

      .dss-input__group--required label::before {
        content: '*';
      }

      .dss-input--invalid .dss-input__group:focus-visible input {
        background-color: #ffffff;
      }

      .dss-input__group--focused {
        padding: 4px 12px;
      }

      :host([small]) .dss-input__group--focused {
        padding: 1px 12px;
      }

      .dss-input__group--focused .dss-input__content label {
        font-size: 12px;
        line-height: 16px;
        transition: 0.3s;
        top: 4px;
      }

      :host([small]) .dss-input__group--focused .dss-input__content label {
        top: 2px;
      }

      .dss-input__group--focused .dss-input__content input,
      .dss-input__group--focused .dss-input__content input {
        margin-top: 16px !important;
      }

      :host([small]) .dss-input__group--focused .dss-input__content input {
        margin-top: 14px !important;
      }

      .dss-input--invalid .dss-input__group {
        box-shadow: inset 0 0 0 1px #b60000;
      }

      .dss-input--invalid .dss-input__group,
      .dss-input--invalid .dss-icon-button,
      .dss-input--invalid .dss-input__group input,
      .dss-input--invalid .dss-input__group .dss-icon-button:hover span {
        background-color: #fff6f6;
        color: #b60000;
      }

      .dss-input--invalid .dss-input__group input {
        color: #1d1d1d;
      }

      .dss-input__group:focus-visible,
      .dss-input__group--active {
        box-shadow: 0 0 0 4px #8ec7e5;
        background-color: #ffffff;
        outline: none;
      }

      .dss-input--invalid .dss-input__group--active {
        box-shadow: 0 0 0 4px #8ec7e5;
      }

      .dss-input--invalid input::placeholder {
        color: #d36262;
      }

      .dss-input__icon {
        font-family: 'Material Symbols Rounded';
        display: flex;
        align-items: center;
        font-size: 24px;
      }

      dss-calendar {
        position: absolute;
        top: 56px;
        z-index: 900;
      }

      :host([small]) dss-Calendar {
        top: 48px;
      }
    `}get _input(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("input")}set value(t){const a=this._value;this._value=t,this._input&&(this._input.value=t),this.requestUpdate("value",a)}set label(t){const a=this._label;this._label=t,this.requestUpdate("label",a)}set placeHolder(t){const a=this._placeHolder;this._placeHolder=t,this.requestUpdate("placeHolder",a)}set required(t){const a=this._required;this._required=t,this.requestUpdate("required",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set readonly(t){const a=this._readonly;this._readonly=t,this.requestUpdate("readonly",a)}set showTime(t){const a=this._showTime;this._showTime=t,this.requestUpdate("showTime",a)}set showButtons(t){const a=this._showButtons;this._showButtons=t,this.requestUpdate("showButtons",a)}set leftLabel(t){const a=this._leftLabel;this._leftLabel=t,this.requestUpdate("leftLabel",a)}set rightLabel(t){const a=this._rightLabel;this._rightLabel=t,this.requestUpdate("rightLabel",a)}set minDate(t){const a=this._minDate;this._minDate=t,this.requestUpdate("minDate",a)}set maxDate(t){const a=this._maxDate;this._maxDate=t,this.requestUpdate("maxDate",a)}set invalid(t){const a=this._invalid;this._invalid=t,this.requestUpdate("invalid",a)}get value(){let t="";return this._input?t=this._input.value:t=this._value,t}get form(){return this._internals.form}get name(){return this.getAttribute("name")}get type(){return this.localName}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._input.value="",this.requestUpdate()}async firstUpdated(){try{await this.updateComplete,this._value&&(this._input.value=this._value),this._closeDropdown(),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}_closeDropdown(){document.addEventListener("click",t=>{t.target!==this&&(this._showCalendar=!1,this._isFocused=!1,this.requestUpdate())}),document.addEventListener("focusout",t=>{t.target===this&&(this._showCalendar=!1,this._isFocused=!1,this.requestUpdate())})}_handleKeyUp(t){var a,c,l,h,p;if((t==null?void 0:t.key)==="Tab"?(this._isFocused=!0,this._handleBlur()):(t==null?void 0:t.key)==="Enter"||(t==null?void 0:t.key)===" "?(this._showCalendar=!0,this._handleBlur()):(t==null?void 0:t.key)==="Escape"&&(this._isFocused=!0,this._showCalendar=!1,this._handleBlur()),t.key==="Enter"&&((a=this._input.value)==null?void 0:a.length)>7){const b=(c=this._input.value)==null?void 0:c.replace(/(\d+[/])(\d+[/])/,"$2$1"),g=new Date(b),m=(l=g.getDate())==null?void 0:l.toString().padStart(2,"0"),w=(g.getMonth()+1).toString().padStart(2,"0"),v=g.getFullYear(),f=(h=g.getHours())==null?void 0:h.toString().padStart(2,"0"),y=(p=g.getMinutes())==null?void 0:p.toString().padStart(2,"0");let k=`${m}/${w}/${v}`;this._showTime&&(k+=` ${f}:${y}`),this._input.value=k,this._dispatchValueChange(),this.requestUpdate()}}_handleInput(t){var c;const a=(c=t.target.value)==null?void 0:c.replace(/\D/g,"");this._input.value=this._formatDate(a),this._dispatchValueChange(),this.requestUpdate()}_formatDate(t){let a=t.substring(0,2),c=t.substring(2,4);const l=t.substring(4,8);let h=t.substring(8,10),p=t.substring(10,12);Number(a)>3&&(a=a==null?void 0:a.padStart(2,"0")),Number(c)>1&&(c=c==null?void 0:c.padStart(2,"0")),Number(a)>31&&(a="31"),Number(c)>12&&(c="12"),c==="02"&&Number(a)>28&&(l==null?void 0:l.length)===4&&(a=new Date(Number(l),1,29).getMonth()===1?"29":"28");let b=`${a}${c?`/${c}`:""}${l?`/${l}`:""}`;return this._showTime&&(Number(h)>2&&(h=h==null?void 0:h.padStart(2,"0")),Number(h)>23&&(h="23"),Number(p)>5&&(p=p==null?void 0:p.padStart(2,"0")),b=`${b}${h?` ${h}`:""}${p?`:${p}`:""}`),b}_handleFocus(){this._readonly||(this._placeHolder=this._showTime?"DD/MM/YYYY HH:MM":"DD/MM/YYYY",this.requestUpdate())}_handleBlur(){this.requestUpdate()}_handelLabelClick(){var t;(t=this._input)==null||t.focus(),this.requestUpdate()}_onDateChange(t){const a=t.detail;this._input.value=a,this._showCalendar=!1,this._dispatchValueChange(),this.requestUpdate()}_onCancel(){this._showCalendar=!1,this._input.value=this._previousDate||"",this.placeHolder="",this.requestUpdate()}_onclick(){var t,a;this._disabled||this._readonly||(this._showCalendar=!this._showCalendar,this._previousDate=this._input.value,this._showCalendar?(t=this._input)==null||t.focus():((a=this._input)==null||a.blur(),this._onCancel()),this.requestUpdate())}_dispatchValueChange(){const t={detail:this._input.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onValueChange",t))}render(){var c;const t={"dss-input--invalid":this._invalid,"dss-input--disabled":this._disabled},a={"dss-input__group--focused":((c=this._input)==null?void 0:c.value)||this._placeHolder||this._showCalendar||this._isFocused,"dss-input__group--required":this._required,"dss-input__group--active":this._showCalendar||this._isFocused};return x`
      <div
        class="dss-input ${e(t)}"
        @click=${this._onclick}
      >
        <div class="dss-input__group ${e(a)}">
          <span class="dss-input__icon">calendar_today</span>
          <div class="dss-input__content">
            <label @mouseup=${this._handelLabelClick}>${this._label}</label>
            <input
              ?disabled=${this._disabled}
              ?required=${this._required}
              ?readonly=${this._readonly}
              @input=${this._handleInput}
              @focus=${this._handleFocus}
              @blur=${this._handleBlur}
              @keyup=${this._handleKeyUp}
              placeholder=${o(this._placeHolder)}
              type="text"
            />
          </div>
        </div>
      </div>
      ${this._showCalendar?x`
            <dss-calendar
              .selectedDate=${this._input.value}
              .showTime=${this._showTime}
              .showButtons=${this._showButtons}
              .leftLabel=${this._leftLabel}
              .rightLabel=${this._rightLabel}
              .minDate=${this._minDate}
              .maxDate=${this._maxDate}
              @onDateChange=${this._onDateChange}
              @onCancel=${this._onCancel}
            ></dss-calendar>
          `:null}
    `}};I.formAssociated=!0,I.shadowRootOptions={...r$1.shadowRootOptions,delegatesFocus:!0};let DatePicker=I;__decorateClass$4([n({type:String,attribute:!0})],DatePicker.prototype,"value");__decorateClass$4([n({type:String})],DatePicker.prototype,"label");__decorateClass$4([n({type:String})],DatePicker.prototype,"placeHolder");__decorateClass$4([n(booleanType)],DatePicker.prototype,"required");__decorateClass$4([n(booleanType)],DatePicker.prototype,"disabled");__decorateClass$4([n(booleanType)],DatePicker.prototype,"readonly");__decorateClass$4([n(booleanType)],DatePicker.prototype,"showTime");__decorateClass$4([n(booleanType)],DatePicker.prototype,"showButtons");__decorateClass$4([n({type:String})],DatePicker.prototype,"leftLabel");__decorateClass$4([n({type:String})],DatePicker.prototype,"rightLabel");__decorateClass$4([n({type:String})],DatePicker.prototype,"minDate");__decorateClass$4([n({type:String})],DatePicker.prototype,"maxDate");__decorateClass$4([n(booleanType)],DatePicker.prototype,"invalid");var __defProp$3=Object.defineProperty,__getOwnPropDesc$3=Object.getOwnPropertyDescriptor,__decorateClass$3=(d,t,a,c)=>{for(var l=__getOwnPropDesc$3(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$3(t,a,l),l};class DropDownList extends r$1{constructor(){super(...arguments),this._elements=null,this._copyElements=null,this._tick=!0,this._type="default",this._style=null,this._boxStyle=null,this._inputStyle=null,this._selectedValue=null,this._multiple=!1,this._openWithSearch=!1,this._deselectable=!1,this._icon="search",this._label="",this._placeHolder="",this._showSelector=!1,this._required=!1,this._disabled=!1,this._readonly=!1,this._labelSelectAll="Seleccionar-ho tot",this._labelDeselectAll="Deseleccionar-ho tot",this._selectAll=!1,this._selectElements=0,this._isFocused=!1,this._isGroupFocusedVisible=!1}static get styles(){return i$1`
      :host {
        width: fit-content;
        height: fit-content;
        position: relative;
      }

      label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        cursor: text;
        position: absolute;
      }

      input {
        outline: none;
        border: 0;
        font-size: 14px;
        line-height: 24px;
        font-style: normal;
        color: #1d1d1d;
        width: 100%;
        text-overflow: ellipsis;
      }

      input::placeholder {
        color: #9f9f9f;
      }

      .dss-input {
        display: flex;
        flex-direction: column;
        color: #656565;
        position: relative;
      }

      .dss-input--disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .dss-input__content {
        display: flex;
        align-items: center;
        flex: 1;
        overflow: hidden;
        position: relative;
      }

      .dss-input--disabled .dss-input__group,
      .dss-input--disabled input {
        background-color: #f5f5f5;
        cursor: not-allowed;
      }

      .dss-input--disabled label,
      .dss-input--disabled input {
        cursor: not-allowed;
      }

      .dss-input__group {
        position: relative;
        background: #ffffff;
        box-shadow: inset 0 0 0 1px #d8d8d8;
        border-radius: 8px;
        padding: 12px;
        display: flex;
        gap: 8px;
      }

      :host([small]) .dss-input__group {
        padding: 8px 12px;
      }

      .dss-input__group--required label::before {
        content: '*';
      }

      .dss-input--invalid .dss-input__group:focus-visible input {
        background-color: #ffffff;
      }

      .dss-input__group--focused {
        padding: 4px 12px;
      }

      :host([small]) .dss-input__group--focused {
        padding: 1px 12px;
      }

      .dss-input__group--focused .dss-input__content label {
        font-size: 12px;
        line-height: 16px;
        transition: 0.3s;
        top: 4px;
      }

      :host([small]) .dss-input__group--focused .dss-input__content label {
        top: 2px;
      }

      .dss-input__group--focused .dss-input__content input,
      .dss-input__group--focused .dss-input__content input {
        margin-top: 16px !important;
        font-family: var(--font-family);
        padding-left: 0 !important;
      }

      :host([small]) .dss-input__group--focused .dss-input__content input {
        margin-top: 14px !important;
      }

      .dss-input--invalid .dss-input__group {
        box-shadow: inset 0 0 0 1px #b60000;
      }

      .dss-input--invalid .dss-input__group,
      .dss-input--invalid .dss-icon-button,
      .dss-input--invalid .dss-input__group input,
      .dss-input--invalid .dss-input__group .dss-icon-button:hover span {
        background-color: transparent;
        color: #b60000;
      }

      .dss-input--invalid .dss-input__group input {
        color: #1d1d1d;
      }

      .dss-input__group:focus-visible,
      .dss-input__group--active {
        box-shadow: 0 0 0 4px #8ec7e5;
        background-color: #ffffff;
        outline: none;
      }

      .dss-input--invalid .dss-input__group--active {
        box-shadow: 0 0 0 4px #8ec7e5;
      }

      .dss-input--invalid input::placeholder {
        color: #d36262;
      }

      .dss-input__icon {
        font-family: 'Material Symbols Rounded';
        display: flex;
        align-items: center;
        font-size: 24px;
      }

      .dss-selector {
        position: absolute;
        top: 50px;
        z-index: 100;
        display: contents;
      }

      .dss-input__group--disabled .dss-icon-button {
        pointer-events: none;
      }

      :host([small]) dss-selector {
        top: 40px;
      }

      .dss-icon-button {
        font-size: 1rem;
        font-family: 'Material Symbols Rounded';
        align-items: center;
        border: none;
        cursor: pointer;
        display: flex;
        background-color: transparent;
        color: #0073e6;
        padding: 0;
        height: fit-content;
        margin: auto;
        border-radius: 100%;
      }

      .dss-icon-button span {
        padding: 0.25rem;
        background-color: transparent;
        border-radius: 100%;
        transition: all 0.3s ease-in;
      }

      .dss-icon-button:hover:enabled span {
        background-color: #bfddfa;
      }

      .dss-icon-button:active:enabled span {
        background-color: #eff7ff;
        transition: none;
      }

      .dss-icon-button:disabled {
        cursor: not-allowed;
      }

      .dss-input__group--readOnly .dss-icon-button {
        pointer-events: none;
      }

      .dss-input__group--disabled .dss-icon-button {
        pointer-events: none;
      }

      .dss-icon-button:focus-visible:enabled {
        outline: none;
      }
    `}get _input(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("input")}get _DSSinput(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(".dss-input")}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("label",a)}set label(t){const a=this._label;this._label=t,this.requestUpdate("label",a)}set placeHolder(t){const a=this._placeHolder;this._placeHolder=t,this.requestUpdate("placeHolder",a)}set required(t){const a=this._required;this._required=t,this.requestUpdate("required",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set readonly(t){const a=this._readonly;this._readonly=t,this.requestUpdate("readonly",a)}set elements(t){const a=this._elements;this._elements=t,this.requestUpdate("elements",a)}set multiple(t){const a=this._multiple;this._multiple=t,this.requestUpdate("multiple",a)}set openWithSearch(t){const a=this._openWithSearch;this._openWithSearch=t,this.requestUpdate("openWithSearch",a)}set tick(t){const a=this._tick;this._tick=t,this.requestUpdate("tick",a)}set deselectable(t){const a=this._deselectable;this._deselectable=t,this.requestUpdate("deselectable",a)}set selectedValue(t){const a=this._selectedValue;this._selectedValue=t,this.requestUpdate("selectedValue",a)}set type(t){const a=this._type;t==="default"||t==="green"?this._type=t:this._type="default",this.requestUpdate("type",a)}set boxStyle(t){const a=this._boxStyle;this._boxStyle=t,this.requestUpdate("boxStyle",a)}set inputStyle(t){const a=this._inputStyle;this._inputStyle=t,this._inputStyle=`${this._inputStyle} box-sizing: border-box;`,this.requestUpdate("inputStyle",a)}set labelSelectAll(t){const a=this._labelSelectAll;t!==""&&(this._labelSelectAll=t),this.requestUpdate("labelSelectAll",a)}set labelDeselectAll(t){const a=this._labelDeselectAll;t!==""&&(this._labelDeselectAll=t),this.requestUpdate("labelDeselectAll",a)}set SelectAll(t){const a=this._selectAll;this._selectAll=t,this.requestUpdate("selectAll",a)}get _filteredElements(){var a;const t=this._input.value.toLowerCase();return(a=this._elements)==null?void 0:a.filter(c=>c.label.toLowerCase().includes(t))}get _showPlaceHolder(){return o(this._placeHolder)&&!this._showSelector?void 0:this._placeHolder}async firstUpdated(){try{await this.updateComplete,this._copyElements=JSON.parse(JSON.stringify(this._elements)),this._initElementsSelected(),!this._openWithSearch&&!this._disabled&&document.addEventListener("click",t=>{this._clickedOutsideDropdown(this,t)}),this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[]),this._openWithSearch&&this._onclick(!0),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}_initElementsSelected(){this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[])}_clickedOutsideDropdown(t,a){t!==a.target&&(this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[]),this._showSelector=!1,this.requestUpdate())}_handleInput(){this.requestUpdate()}_handleFocus(){this._readonly||(this._isFocused=!0,this._isGroupFocusedVisible=!0,this.requestUpdate())}_handleBlurEsc(){this._readonly||this._openWithSearch||(this._isFocused=!0,this._showSelector=!1,this.requestUpdate())}_handleBlur(){this._isFocused=!1,this._isGroupFocusedVisible=!1,this.requestUpdate()}_handleBlurComponent(t,a){var c;if(t!==a.target){if(this._openWithSearch)return;(c=this._input)==null||c.focus(),this._handleBlurEsc(),this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[])}}_onCancel(){this._showSelector=!1,this._isFocused=!1,this.requestUpdate()}_cleanInput(){this._input.value="",this.requestUpdate()}_onclick(t,a){var l,h;t||(this._isFocused=!0);let c="";this._boxStyle&&(c+=this._boxStyle,c.endsWith(";")||(c+=";")),this._style=`${c} overflow: auto;${this._openWithSearch?"":"box-shadow: 0 1px 3px 0 #0000001a, 0 4px 8px 3px #0000000d;"}`,this._openWithSearch?this._showSelector=!0:this._handleKeyInput(a),this._showSelector?(this._input.value="",t||(l=this._input)==null||l.focus()):(this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[]),(!a||a.key!=="Enter"&&a.key!==" "&&a.key!=="Escape")&&((h=this._input)==null||h.blur(),this._onCancel())),this.requestUpdate()}_handleKeyInput(t){(t==null?void 0:t.key)==="Enter"||(t==null?void 0:t.key)===" "?this._showSelector=!0:(t==null?void 0:t.key)==="Escape"?this._handleBlurEsc():this._showSelector=!this._showSelector}_dispatchValueChange(){if(this._input.value){const t={detail:this._input.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onValueChange",t))}}_onSelectorChanges(t){this._selectedValue=t.detail,this._dispatchValueChange(),!this._multiple&&!this._openWithSearch&&!this._disabled&&this._clickedOutsideDropdown(this,t),this.requestUpdate()}_showSelectValuesInInput(t){var l,h;!this._multiple&&Array.isArray(t)&&t.length>1&&t.splice(1);const a=(l=this._elements)==null?void 0:l.filter(p=>t.includes(p.value));if(this._elements=[...this._copyElements],this._openWithSearch?this._selectElements=0:this._selectElements=a!=null&&a.length?a.length:0,a&&a.length>0){const p=this._elements.filter(b=>a.includes(b));p.push(...this._elements.filter(b=>!a.includes(b))),this._elements=[...p]}if(!this._multiple){this._input.value=((h=a==null?void 0:a[0])==null?void 0:h.label)??"";return}const c=a==null?void 0:a.map(p=>p.label);this._input.value=(c==null?void 0:c.join(", "))??""}_evalueFocus(t){var a;((a=t.target)==null?void 0:a.id)!=="dss-dropdownlist"&&this._showSelector&&this._handleFocus()}_handleKeyup(t){(t.keyCode?t.keyCode:t.which)===9&&(this._isGroupFocusedVisible=!0,this._isFocused=!0,this._handelLabelClick())}_handelLabelClick(){var t;(t=this._input)==null||t.focus(),this.requestUpdate()}render(){var l,h,p,b;const t={"dss-input--disabled":this._disabled},a={"dss-selector":!this._openWithSearch,"dss-selector--disabled":this._disabled,"dss-selector-dropdown":!0},c={"dss-input__group--focused":((l=this._input)==null?void 0:l.value)||this._showPlaceHolder||this._showSelector,"dss-input__group--focused-visible":this._isGroupFocusedVisible,"dss-input__group--required":this._required,"dss-input__group--active":this._isFocused,"dss-input__group--readOnly":this._readonly,"dss-input__group--disabled":this._disabled};return x` <div
      id="previous-input"
      class="dss-input ${e(t)}"
      style=${o(this._inputStyle)}
    >
      <div
        class="dss-input__group ${e(c)}"
        tabindex="0"
        @keyup=${this._handleKeyup}
      >
        <span class="dss-input__icon">${this._icon}</span>
        <div class="dss-input__content">
          <label>${this._label}</label>
          <input
            aria-label="${this._label}"
            ?disabled=${this._disabled}
            ?required=${this._required}
            ?readonly=${this._readonly||!this._showSelector}
            @input=${this._handleInput}
            @focus="${this._evalueFocus}"
            @keydown="${g=>{(g.key==="Enter"||g.key===" "||g.key==="Escape")&&this._onclick(!1,g)}}"
            @blur=${this._handleBlur}
            placeholder=${this._showPlaceHolder}
            type="text"
          />
        </div>
        ${this._openWithSearch?x`
              <button
                type="button"
                class="dss-icon-button"
                @click=${this._cleanInput}
                ?disabled=${(p=this._input)==null?void 0:p.disabled}
                tabindex="-1"
              >
                <span>close</span>
              </button>
            `:x`
              <button
                type="button"
                class="dss-icon-button"
                @click=${this._onclick}
                ?disabled=${(h=this._input)==null?void 0:h.disabled}
                tabindex="-1"
              >
                <span
                  >${this._showSelector?"keyboard_arrow_up":"keyboard_arrow_down"}</span
                >
              </button>
            `}
      </div>
      ${this._showSelector&&this._filteredElements&&((b=this._filteredElements)==null?void 0:b.length)>0?x`
            <dss-selector
              class="${e(a)}"
              .multiple=${this._multiple}
              .tick=${this._tick}
              .deselectable=${this._deselectable}
              .disabled=${this._disabled}
              .elements=${this._filteredElements}
              .filtre=${this._input.value}
              .selectedValue=${this._selectedValue}
              .type=${this._type}
              .labelSelectAll=${this._labelSelectAll}
              .labelDeselectAll=${this._labelDeselectAll}
              .selectAll=${this._selectAll}
              boxStyle=${this._style}
              elementsSelected=${this._selectElements}
              @onValueChange="${this._onSelectorChanges}"
              @keydown="${g=>{g.key==="Escape"&&this._handleBlurComponent(this,g)}}"
            >
            </dss-selector>
          `:null}
    </div>`}}__decorateClass$3([n({type:String})],DropDownList.prototype,"icon");__decorateClass$3([n({type:String})],DropDownList.prototype,"label");__decorateClass$3([n({type:String})],DropDownList.prototype,"placeHolder");__decorateClass$3([n(booleanType)],DropDownList.prototype,"required");__decorateClass$3([n(booleanType)],DropDownList.prototype,"disabled");__decorateClass$3([n(booleanType)],DropDownList.prototype,"readonly");__decorateClass$3([n({type:Array})],DropDownList.prototype,"elements");__decorateClass$3([n(booleanType)],DropDownList.prototype,"multiple");__decorateClass$3([n(booleanType)],DropDownList.prototype,"openWithSearch");__decorateClass$3([n(booleanType)],DropDownList.prototype,"tick");__decorateClass$3([n(booleanType)],DropDownList.prototype,"deselectable");__decorateClass$3([n({type:Array})],DropDownList.prototype,"selectedValue");__decorateClass$3([n({type:String})],DropDownList.prototype,"type");__decorateClass$3([n({type:String})],DropDownList.prototype,"boxStyle");__decorateClass$3([n({type:String})],DropDownList.prototype,"inputStyle");__decorateClass$3([n({type:String})],DropDownList.prototype,"labelSelectAll");__decorateClass$3([n({type:String})],DropDownList.prototype,"labelDeselectAll");__decorateClass$3([n(booleanType)],DropDownList.prototype,"SelectAll");var __defProp$2=Object.defineProperty,__getOwnPropDesc$2=Object.getOwnPropertyDescriptor,__decorateClass$2=(d,t,a,c)=>{for(var l=__getOwnPropDesc$2(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$2(t,a,l),l};const INPUT_TYPE_NUMBER="number";class InputField extends r$1{constructor(){super(...arguments),this._type="text",this._value="",this._label="",this._description="",this._placeHolder="",this._icon="",this._maxLength=void 0,this._minLength=void 0,this._max=void 0,this._min=void 0,this._step=void 0,this._isInputFocused=!1,this._isGroupFocusedVisible=!1,this._isTypeNumeric=!1,this._clearable=!1,this._showError=!1,this._required=!1,this._disabled=!1,this._readonly=!1}static get styles(){return i$1`
      :host {
        width: 100%;
        height: fit-content;
      }

      label {
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.5rem;
        cursor: text;
        position: absolute;
        white-space: nowrap;
        background-color: #ffffff;
        width: 100%;
      }

      input {
        outline: none;
        border: 0;
        font-size: 0.875rem;
        line-height: 1.5rem;
        font-style: normal;
        color: #1d1d1d;
        width: 100%;
        text-overflow: ellipsis;
        margin: 0;
        padding: 0;
      }

      input::placeholder {
        color: #9f9f9f;
      }

      .dss-input--invalid input::placeholder {
        color: #d36262;
      }

      .dss-input--invalid label {
        background-color: #fff6f6;
      }

      .dss-input {
        display: flex;
        flex-direction: column;
        color: #656565;
        width: 100%;
      }

      .dss-input--disabled {
        opacity: 0.6;
      }

      .dss-input--gap {
        gap: 0.25rem;
      }

      .dss-input__content {
        display: flex;
        align-items: center;
        flex: 1;
        overflow: hidden;
        position: relative;
      }

      .dss-input--disabled .dss-input__group,
      .dss-input--disabled input,
      .dss-input--disabled label {
        background-color: #f5f5f5;
        cursor: not-allowed;
      }

      .dss-input__group {
        position: relative;
        background: #ffffff;
        box-shadow: inset 0 0 0 0.063rem #d8d8d8;
        border-radius: 0.5rem;
        padding: 0.75rem;
        display: flex;
        gap: 0.5rem;
      }

      :host([small]) .dss-input__group {
        padding: 0.5rem 0.75rem;
      }

      .dss-input__group--required label::before {
        content: '*';
      }

      .dss-input__group--readOnly .dss-icon-button {
        pointer-events: none;
      }

      .dss-input__group:focus-visible,
      .dss-input__group--focused-visible,
      .dss-input--invalid .dss-input__group:focus-visible {
        outline: 0.25rem solid #8ec7e5;
        box-shadow: none;
        background-color: #ffffff;
      }

      .dss-input--invalid .dss-input__group:focus-visible input {
        background-color: #ffffff;
      }

      .dss-input--invalid .dss-input__group:focus-visible .dss-icon-button {
        background-color: transparent;
      }

      .dss-input__group--focused {
        padding: 0.25rem 0.75rem;
      }

      :host([small]) .dss-input__group--focused {
        padding: 0.063rem 0.75rem;
      }

      .dss-input__group--focused .dss-input__content label {
        font-size: 0.75rem;
        line-height: 1rem;
        transition: 0.3s;
        top: 0.25rem;
      }

      :host([small]) .dss-input__group--focused .dss-input__content label {
        top: 0.125rem;
      }

      .dss-input__group--focused .dss-input__content input,
      .dss-input__group--focused .dss-input__content input {
        margin-top: 1rem !important;
      }

      :host([small]) .dss-input__group--focused .dss-input__content input {
        margin-top: 0.875rem !important;
      }

      :host([small]) .dss-input__group--focused .dss-input__content input {
        margin-top: 0.875rem !important;
      }

      .dss-input--invalid .dss-input__group .dss-icon-button {
        color: #b60000;
      }

      .dss-input--invalid .dss-input__group {
        box-shadow: inset 0 0 0 0.063rem #b60000;
      }

      .dss-input--invalid .dss-input__group input {
        background-color: #fff6f6;
        color: #1d1d1d;
      }

      .dss-input--invalid .dss-input__group,
      .dss-input--invalid .dss-icon-button,
      .dss-input--invalid .dss-input__group .dss-icon-button:hover span {
        background-color: #fff6f6;
        color: #b60000;
      }

      .dss-input__help {
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1rem;
        display: flex;
        padding: 0 0.75rem;
        gap: 0.5rem;
      }

      .dss-input__help .dss-input__description {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .dss-input--invalid .dss-input__help,
      .dss-input--invalid .dss-input__help::after {
        color: #b60000;
      }

      .dss-input__icon {
        font-family: 'Material Symbols Rounded';
        display: flex;
        align-items: center;
        font-size: 1.5rem;
      }

      :host([small]) .dss-input__group.dss-input__group--icon,
      :host([small]) .dss-input__group--focused.dss-input__group--icon,
      .dss-input__group.dss-input__group--icon,
      .dss-input__group--focused.dss-input__group--icon {
        padding-right: 0.375rem;
      }

      .dss-input__group.dss-input__group--numeric {
        padding: 0.25rem 0.5rem 0.25rem 0.75rem;
      }

      :host([small]) .dss-input__group.dss-input__group--numeric {
        padding: 0.063rem 0.625rem 0.063rem 0.75rem;
      }

      .dss-icon-button {
        font-size: 1rem;
        font-family: 'Material Symbols Rounded';
        align-items: center;
        border: none;
        cursor: pointer;
        display: flex;
        background-color: transparent;
        color: #0073e6;
        padding: 0;
        height: fit-content;
        margin: auto;
        border-radius: 100%;
      }

      .dss-icon-button span {
        padding: 0.25rem;
        background-color: transparent;
        border-radius: 100%;
        transition: all 0.3s ease-in;
      }

      .dss-icon-button:hover:enabled span {
        background-color: #bfddfa;
      }

      .dss-icon-button:active:enabled span {
        background-color: #eff7ff;
        transition: none;
      }

      .dss-icon-button:disabled {
        cursor: not-allowed;
      }

      .dss-icon-button:focus-visible:enabled {
        outline: none;
      }

      .dss-input__numeric-buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all 0.3s ease-in;
        height: 40px;
      }

      .dss-input__numeric-buttons .dss-icon-button span {
        padding: 0.063rem;
        display: flex;
        justify-content: center;
        text-align: center;
        width: 18px;
        height: 18px;
        align-items: center;
      }

      :host([small]) .dss-input__numeric-buttons {
        height: 38px;
      }

      :host([small])
        .dss-input__group.dss-input__group--numeric
        .dss-icon-button
        span {
        width: 16px;
        height: 16px;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      input[type='number'] {
        -moz-appearance: textfield;
      }
    `}set value(t){const a=this._value;this._value=t,this.requestUpdate("value",a)}set type(t){const a=this._type;this._type=t,this.requestUpdate("type",a)}set label(t){const a=this._label;this._label=t,this.requestUpdate("label",a)}set description(t){const a=this._description;this._description=t,this.requestUpdate("description",a)}set placeHolder(t){const a=this._placeHolder;this._placeHolder=t,this.requestUpdate("placeHolder",a)}set required(t){const a=this._required;this._required=t,this.requestUpdate("required",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set readonly(t){const a=this._readonly;this._readonly=t,this.requestUpdate("readonly",a)}set icon(t){const a=this._icon;this._icon=t,this.requestUpdate("icon",a)}set clearable(t){const a=this._clearable;this._clearable=t,this.requestUpdate("clearable",a)}set showError(t){const a=this._showError;this._showError=t,this.requestUpdate("showError",a)}set maxLength(t){const a=this._maxLength;this._maxLength=t,this.requestUpdate("maxLength",a)}set minLength(t){const a=this._minLength;this._minLength=t,this.requestUpdate("minLength",a)}set max(t){const a=this._max;this._max=t,this.requestUpdate("max",a)}set min(t){const a=this._min;this._min=t,this.requestUpdate("min",a)}set step(t){const a=this._step;this._step=t,this.requestUpdate("step",a)}get _input(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("input")}_handleInput(){this._dispatchValueChange(),this.requestUpdate()}_handleKeypress(t){t.keyCode<32&&t.preventDefault(),this._maxLength&&t.target.value.length>=this._maxLength&&t.preventDefault()}_handleKeyup(t){(t.keyCode?t.keyCode:t.which)===9&&(this._isGroupFocusedVisible=!0,this._isInputFocused=!0,this._handelLabelClick())}_handleFocus(){this._readonly||(this._isGroupFocusedVisible=!0,this._isInputFocused=!0,this.requestUpdate())}_handleFocusOut(){var t,a;this._handleBlur(),this._isGroupFocusedVisible=!1,this._isInputFocused=!1,((a=(t=this._input)==null?void 0:t.value)==null?void 0:a.length)===0&&(this._value="",this._input.value=this._value),this.requestUpdate()}_handleBlur(){this._isInputFocused=!1,this.requestUpdate()}_handelLabelClick(){var t;(t=this._input)==null||t.focus(),this.requestUpdate()}_cleanInput(){var t,a;(a=(t=this._input)==null?void 0:t.value)!=null&&a.length&&(this._value="",this._input.value=this._value),this._dispatchValueChange(),this.requestUpdate()}_stepUp(){var t,a;(t=this._input)==null||t.stepUp(),this._value=((a=this._input)==null?void 0:a.value)||"",this._dispatchValueChange(),this.requestUpdate()}_stepDown(){var t,a;(t=this._input)==null||t.stepDown(),this._value=((a=this._input)==null?void 0:a.value)||"",this._dispatchValueChange(),this.requestUpdate()}_dispatchValueChange(){var a,c;const t={detail:this._isTypeNumeric?Number((a=this._input)==null?void 0:a.value):(c=this._input)==null?void 0:c.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onValueChange",t))}async firstUpdated(){try{await this.updateComplete,this._isTypeNumeric=this._type===INPUT_TYPE_NUMBER,this.requestUpdate()}catch{console.error("ERROR OCURRED")}}render(){var c,l,h,p,b,g;const t={"dss-input--invalid":this._showError,"dss-input--disabled":this._disabled,"dss-input--gap":this._maxLength||!!this._description},a={"dss-input__group--focused":((c=this._input)==null?void 0:c.value)||this._isInputFocused||this._placeHolder,"dss-input__group--focused-visible":this._isGroupFocusedVisible,"dss-input__group--required":this._required,"dss-input__group--readOnly":this._readonly,"dss-input__group--numeric":this._isTypeNumeric,"dss-input__group--icon":this._clearable};return x`
      <div class="dss-input ${e(t)}">
        <div
          class="dss-input__group ${e(a)}"
          tabindex="0"
          @keyup=${this._handleKeyup}
        >
          ${this._icon?x`<span class="dss-input__icon">${this._icon}</span>`:null}
          <div class="dss-input__content">
            <label @mouseup=${this._handelLabelClick}>${this._label}</label>
            <input
              .value=${this._value}
              placeholder=${o(this._placeHolder)}
              maxlength=${o(this._maxLength)}
              minlength=${o(this._minLength)}
              min=${o(this._min)}
              max=${o(this._max)}
              step=${o(this._step)}
              ?disabled=${this._disabled}
              ?required=${this._required}
              ?readonly=${this._readonly}
              @keyup=${this._handleKeyup}
              @keypress=${this._handleKeypress}
              @input="${this._handleInput}"
              @focus=${this._handleFocus}
              @focusout=${this._handleFocusOut}
              @blur=${this._handleBlur}
              .type=${this._type}
            />
          </div>
          ${this._clearable&&!this._isTypeNumeric?x`
                <button
                  type="button"
                  class="dss-icon-button"
                  @click=${this._cleanInput}
                  ?disabled=${(l=this._input)==null?void 0:l.disabled}
                  tabindex="-1"
                >
                  <span>close</span>
                </button>
              `:null}
          ${this._isTypeNumeric?x`
                <div class="dss-input__numeric-buttons">
                  <button
                    type="button"
                    class="dss-icon-button"
                    @click=${this._stepUp}
                    ?disabled=${(h=this._input)==null?void 0:h.disabled}
                    tabindex="-1"
                  >
                    <span>keyboard_arrow_up</span>
                  </button>
                  <button
                    type="button"
                    class="dss-icon-button"
                    @click=${this._stepDown}
                    ?disabled=${(p=this._input)==null?void 0:p.disabled}
                    tabindex="-1"
                  >
                    <span>keyboard_arrow_down</span>
                  </button>
                </div>
              `:null}
        </div>
        <div class="dss-input__help">
          <div class="dss-input__description">
            <span>${this._description}</span>
          </div>
          ${this._maxLength?x`<span>
                ${(g=(b=this._input)==null?void 0:b.value)==null?void 0:g.length}/${this._maxLength}
              </span>`:null}
        </div>
      </div>
    `}}__decorateClass$2([n({type:String})],InputField.prototype,"value");__decorateClass$2([n({type:String})],InputField.prototype,"type");__decorateClass$2([n({type:String})],InputField.prototype,"label");__decorateClass$2([n({type:String})],InputField.prototype,"description");__decorateClass$2([n({type:String})],InputField.prototype,"placeHolder");__decorateClass$2([n(booleanType)],InputField.prototype,"required");__decorateClass$2([n(booleanType)],InputField.prototype,"disabled");__decorateClass$2([n(booleanType)],InputField.prototype,"readonly");__decorateClass$2([n({type:String})],InputField.prototype,"icon");__decorateClass$2([n(booleanType)],InputField.prototype,"clearable");__decorateClass$2([n(booleanType)],InputField.prototype,"showError");__decorateClass$2([n({type:Number})],InputField.prototype,"maxLength");__decorateClass$2([n({type:Number})],InputField.prototype,"minLength");__decorateClass$2([n({type:Number})],InputField.prototype,"max");__decorateClass$2([n({type:Number})],InputField.prototype,"min");__decorateClass$2([n({type:Number})],InputField.prototype,"step");var __defProp$1=Object.defineProperty,__getOwnPropDesc$1=Object.getOwnPropertyDescriptor,__decorateClass$1=(d,t,a,c)=>{for(var l=__getOwnPropDesc$1(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp$1(t,a,l),l};class Table extends r$1{constructor(){super(...arguments),this._valueMaxLength=60,this._data=[],this._customData=void 0,this._pipeData=[],this._customTableHeader=void 0,this._filters=[],this._tableHeader=[],this._tableHeaderSort={},this._hasPaginator=!1,this._currentIndex=1,this._pageSize=10,this._pageSizeOptions="[5,10,20]",this._resultstext="Resultats",this._rowsperpagetext="Files per pàgina",this._textAlign="left",this._headerTitle="",this._hideHeader=!1,this._hideColumnHeader=!1,this._innerFilters=!1,this._expandTable=!1,this._expandLabel="Ampliar",this._collapseLabel="Reduir",this._rowsOnCollapsed=5,this._filtersLabel="Selecció",this._cleanFiltersLabel="Netejar filtres",this._openFiltersLabel="Filtres",this._selectedRowsLabel="files seleccionades",this._selectAllRows=!0,this._noFiltersLabel="No hi ha filtres seleccionats",this._footerButtons=3,this._maxContentWidth=!1,this._stickyColumns=!1,this._multiselect=!1,this._radioselect=!1,this._hasRowButton=!1,this._rowButtonLabel="Button",this._hasRowActions=!1,this._rowActionsIcons=["add_box","add_box","add_box"],this._footerButtonPrimaryLabel="Primary",this._footerButtonSecondaryLabel="Secondary",this._footerButtonAlternativeLabel="Alternative",this._enableRowActionsOnDeleted=!1,this._enableRowActionsOnDisabled=!1,this._currentSortColumn="",this._currentSortType="",this._copyPipeData=[],this._isFirstUpdate=!0}static get styles(){return[r$2(iconStyles),r$2(buttonStyles),r$2(iconButtonStyles),r$2(chipStyles),r$2(checkboxStyles),r$2(radioStyles),i$1`
        :host {
          display: block;
          width: 100%;
        }

        .dss-table-header {
          padding: var(--dss-spacing-md) 0;
        }

        .dss-table-header-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--dss-spacing-xs);
          margin-bottom: var(--dss-spacing-md);
        }

        .dss-table-header-title__text {
          color: var(--color-neutral-900);
          font-weight: var(--font-bold);
          font-size: 20px;
        }

        .dss-table-header-title__action {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: var(--dss-spacing-xxs);
          font-size: 14px;
          color: var(--color-primary-700);
          cursor: pointer;
          border-radius: var(--dss-radius-xs);
          font-weight: var(--font-semibold);
        }

        .dss-table-header-title__action:hover {
          color: var(--color-primary-600);
        }

        .dss-table-header-title__action:active {
          color: var(--color-primary-400);
        }

        .dss-table-header-title__action:focus-visible {
          outline: var(--dss-border-width-md) solid var(--color-blue-200);
        }

        .dss-table-header-filters {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dss-table-header-filters__filters {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: var(--dss-spacing-md);
          width: 70%;
          box-sizing: border-box;
        }

        .dss-table-header-filters--inner .dss-table-header-filters__filters {
          width: 80%;
        }

        .filters-label {
          font-size: 14px;
          font-weight: var(--font-bold);
          color: var(--color-neutral-600);
        }

        .filters-list {
          display: flex;
          flex-wrap: wrap;
          max-width: 60%;
          gap: var(--dss-spacing-xs);
        }

        .filters-list-empty {
          font-size: 14px;
          color: var(--color-neutral-600);
        }

        .filters-clean {
          padding-left: var(--dss-spacing-md);
          border-left: var(--dss-border-width-sm) solid var(--color-neutral-100);
        }

        .dss-table-header-filters__actions {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: var(--dss-spacing-md);
          width: 30%;
          box-sizing: border-box;
        }

        .dss-table-header-filters--inner .dss-table-header-filters__actions {
          width: 20%;
        }

        .dss-table-main {
          background-color: var(--color-white);
          width: 100%;
          overflow-x: auto;
        }

        .dss-table-container {
          max-width: 100%;
          overflow: auto;
        }

        .dss-table-main .table {
          min-width: 100%;
          margin: 0;
          padding: 0;
          border-collapse: collapse;
          border-spacing: 0;
          table-layout: fixed;
        }

        .dss-table-main .table.table--max-content-width {
          width: max-content;
        }

        .dss-table-main .table.table--sticky-columns {
        }

        .dss-table-main .table-header {
          width: 100%;
          position: sticky;
          top: 0;
          background-color: var(--color-white);
          z-index: 100;
        }

        .dss-table-main .table.table--sticky-columns .table-header {
          position: relative;
        }

        .dss-table-main
          .table.table--sticky-columns
          .table-header
          .table-th:first-child,
        .dss-table-main
          .table.table--sticky-columns
          .table-body
          .table-td:first-child {
          position: sticky;
          left: 0;
          z-index: 100;
          background-color: var(--color-white);
        }

        .dss-table-main
          .table.table--sticky-columns
          .table-body-row:not(.table-body-row--disabled):not(
            .table-body-row--deleted
          ):hover
          .table-td:first-child,
        .dss-table-main
          .table.table--sticky-columns
          .table-body-row--selected:not(.table-body-row--disabled):not(
            .table-body-row--deleted
          )
          .table-td:first-child {
          background-color: var(--color-primary-50);
        }

        .dss-table-main
          .table.table--sticky-columns
          .table-body-row:not(.table-body-row--disabled):not(
            .table-body-row--deleted
          ):hover
          .table-td:last-child,
        .dss-table-main
          .table.table--sticky-columns
          .table-body-row--selected:not(.table-body-row--disabled):not(
            .table-body-row--deleted
          )
          .table-td:last-child {
          background-color: var(--color-primary-50);
        }

        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--multiselect
          .table-header
          .table-th:nth-child(2),
        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--multiselect
          .table-body
          .table-td:nth-child(2) {
          position: sticky;
          left: 52px;
          z-index: 100;
          background-color: var(--color-white);
        }

        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--multiselect
          .table-body-row:not(.table-body-row--disabled):not(
            .table-body-row--deleted
          ):hover
          .table-td:nth-child(2),
        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--multiselect
          .table-body-row--selected:not(.table-body-row--disabled):not(
            .table-body-row--deleted
          )
          .table-td:nth-child(2) {
          background-color: var(--color-primary-50);
        }

        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--multiselect
          .table-body
          .table-body-row--disabled
          .table-td:first-child,
        .dss-table-main
          .table.table--sticky-columns
          .table-body
          .table-body-row--disabled
          .table-td:nth-child(2) {
          background-color: var(--color-neutral-50);
        }

        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--multiselect
          .table-body
          .table-body-row--deleted
          .table-td:nth-child(2),
        .dss-table-main
          .table.table--sticky-columns
          .table-body
          .table-body-row--deleted
          .table-td:nth-child(2) {
          background-color: var(--color-red-50);
        }

        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--radioselect
          .table-header
          .table-th:nth-child(2),
        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--radioselect
          .table-body
          .table-td:nth-child(2) {
          position: sticky;
          left: 52px;
          z-index: 100;
          background-color: var(--color-white);
        }

        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--radioselect
          .table-body-row:not(.table-body-row--disabled):not(
            .table-body-row--deleted
          ):hover
          .table-td:nth-child(2),
        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--radioselect
          .table-body-row--selected:not(.table-body-row--disabled):not(
            .table-body-row--deleted
          )
          .table-td:nth-child(2) {
          background-color: var(--color-primary-50);
        }

        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--radioselect
          .table-body
          .table-body-row--disabled
          .table-td:first-child,
        .dss-table-main
          .table.table--sticky-columns
          .table-body
          .table-body-row--disabled
          .table-td:nth-child(2) {
          background-color: var(--color-neutral-50);
        }

        .dss-table-main
          .table.table--sticky-columns.table--sticky-columns--radioselect
          .table-body
          .table-body-row--deleted
          .table-td:nth-child(2),
        .dss-table-main
          .table.table--sticky-columns
          .table-body
          .table-body-row--deleted
          .table-td:nth-child(2) {
          background-color: var(--color-red-50);
        }

        .dss-table-main
          .table.table--sticky-columns
          .table-body
          .table-body-row--deleted
          .table-td:first-child,
        .dss-table-main
          .table.table--sticky-columns
          .table-body
          .table-body-row--deleted
          .table-td:last-child {
          background-color: var(--color-red-50);
        }

        .dss-table-main
          .table.table--sticky-columns
          .table-body
          .table-body-row--disabled
          .table-td:first-child,
        .dss-table-main
          .table.table--sticky-columns
          .table-body
          .table-body-row--disabled
          .table-td:last-child {
          background-color: var(--color-neutral-50);
        }

        .dss-table-main
          .table.table--sticky-columns
          .table-header
          .table-th:last-child,
        .dss-table-main
          .table.table--sticky-columns
          .table-body
          .table-td:last-child {
          position: sticky;
          right: 0;
          z-index: 100;
          background-color: var(--color-white);
        }

        .dss-table-main .table-header-row {
          width: 100%;
        }

        .dss-table-main .table-th {
          box-sizing: border-box;
          height: 56px;
        }

        .dss-table-main .table-th--checkbox {
          width: 52px;
        }

        .dss-table-main .table-th--radio {
          width: 52px;
        }

        .dss-table-main .table-th--review {
          width: 52px;
        }

        .dss-table-main .table-th--button {
        }

        .dss-table-main .table-th--actions {
          width: 140px;
          max-width: 140px;
        }

        .dss-table-main .table-th--icons-1 {
          width: 64px;
          max-width: 64px;
        }

        .dss-table-main .table-th--icons-2 {
          width: 100px;
          max-width: 100px;
        }

        .dss-table-main .table-header-column {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: var(--dss-spacing-xs);
          margin: 0;
          padding: 0 var(--dss-spacing-md);
          border-bottom: var(--dss-border-width-md) solid
            var(--color-neutral-700);
          box-sizing: border-box;
          height: 100%;
        }

        .dss-table-main .table-header-column--clickable {
          cursor: pointer;
        }

        .dss-table-main .table-header-column--not-clickable {
          cursor: default;
        }

        .dss-table-main
          .table-header-column--clickable
          .table-header-column__icon {
          box-sizing: border-box;
          padding: var(--dss-spacing-tiny);
          background-color: transparent;
          border-radius: var(--dss-radius-xs);
          transition: all 0.3s ease-in;
        }

        .dss-table-main .table-header-column--clickable:focus-visible {
          box-shadow: inset 0 0 0 var(--dss-border-width-lg)
            var(--color-blue-200);
          outline: 0;
        }

        .dss-table-main
          .table-header-column--clickable:focus-visible
          .table-header-column__icon,
        .dss-table-main
          .table-header-column--clickable:hover
          .table-header-column__icon {
          color: var(--color-white);
          background-color: var(--color-primary-500);
        }

        .dss-table-main .table-header-column__title {
          font-size: 14px;
          line-height: 24px;
          font-weight: var(--font-semibold);
          text-transform: capitalize;
        }

        .dss-table-main .table-header-column--checkbox {
          justify-content: center;
          max-width: 52px;
        }

        .dss-table-main .table-header-column--radio {
          max-width: 52px;
        }

        .dss-table-main .table-header-column--review {
          justify-content: center;
        }

        .dss-table-main .table-header-column--button {
        }

        .dss-table-main .table-header-column--actions {
        }

        .dss-table-main .table-header-column--number {
          justify-content: flex-end;
        }

        .dss-table-main .table-body {
        }

        .dss-table-main .table-body-row {
          // display: grid;
        }

        .dss-table-main .table-body-row + .table-body-row {
          border-top: var(--dss-border-width-sm) solid var(--color-neutral-100);
        }

        .dss-table-main
          .table-body-row:not(.table-body-row--disabled):not(
            .table-body-row--deleted
          ):hover,
        .dss-table-main
          .table-body-row--selected:not(.table-body-row--disabled):not(
            .table-body-row--deleted
          ) {
          background-color: var(--color-primary-50);
        }

        .dss-table-main .table-body-row--disabled {
          background-color: var(--color-neutral-50);
        }

        .dss-table-main .table-body-row--disabled .table-body-column {
          color: var(--color-neutral-500);
        }

        .dss-table-main .table-body-row--deleted {
          background-color: var(--color-red-50);
        }

        .dss-table-main .table-td {
          box-sizing: border-box;
          height: 56px;
          margin: 0;
          padding: 0;
        }

        .dss-table-main .table-body-column {
          margin: 0;
          padding: auto var(--dss-spacing-md);
          font-size: 14px;
          color: var(--color-neutral-700);
          height: 56px;
          box-sizing: border-box;
        }

        .dss-table-main .table-body-column--custom {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0 var(--dss-spacing-md);
          gap: var(--dss-spacing-xs);
          gap: var(--dss-spacing-xs);
        }

        .dss-table-main .table-body-column--text {
          justify-content: flex-start;
        }

        .dss-table-main .table-body-column--number {
          justify-content: flex-end;
        }

        .dss-table-main .table-td--actions {
          box-sizing: border-box;
          max-width: 140px;
        }

        .dss-table-main .table-body-column--actions {
          justify-content: flex-end;
          max-width: 140px;
          box-sizing: border-box;
        }

        .dss-table-main .table-body-column--result {
          font-weight: var(--font-bold);
        }

        .dss-table-main .table-body-column--checkbox {
          max-width: 52px;
          padding-left: 0;
          padding-right: 0;
          justify-content: center;
        }

        .dss-table-main .table-body-column--radio {
          max-width: 52px;
          padding-left: 0;
          padding-right: 0;
          justify-content: center;
        }

        .dss-table-main .table-body-column--button {
          justify-content: flex-end;
        }

        .dss-table-main .table-body-column--review {
          justify-content: center;
        }

        .dss-table-main .table-body-column--font-bold {
          font-weight: var(--font-bold);
        }

        .dss-table-main .table-body-column--font-black {
          font-weight: var(--font-bold);
          color: var(--color-neutral-900);
        }

        .dss-table-main .table-body-column--icon-right {
          flex-direction: row-reverse;
        }

        .dss-table-main .table-body-column--text.table-body-column--icon-right {
          justify-content: flex-end;
        }

        .dss-table-main
          .table-body-column--number.table-body-column--icon-right {
          justify-content: flex-start;
        }

        .table-body--align-center .table-body-column {
          text-align: center;
        }

        .table-body--align-right .table-body-column {
          text-align: right;
        }

        .table-body--align-justify .table-body-column {
          text-align: justify;
        }

        ::slotted(div.dss-table-filters) {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: var(--dss-spacing-xs);
        }

        .table-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--dss-spacing-xs);
          padding: var(--dss-spacing-md);
          border-top: var(--dss-border-width-sm) solid var(--color-neutral-100);
          margin-top: var(--dss-spacing-md);
        }

        .table-footer-description {
          color: var(--color-neutral-900);
          font-size: 16px;
          font-weight: var(--font-bold);
        }

        .table-footer-actions {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: var(--dss-spacing-xs);
        }

        .column-value {
          position: relative;
        }

        .column-value > .value {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .table-body-column--custom dss-tooltip {
          font-weight: var(--font-regular);
        }

        .column-value dss-tooltip {
          visibility: hidden;
        }

        .column-value:hover dss-tooltip {
          visibility: visible;
        }

        .column-value {
          position: relative;
        }

        .column-value > .value {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .table-body-column--custom dss-tooltip {
          font-weight: var(--font-regular);
        }

        .column-value dss-tooltip {
          visibility: hidden;
        }

        .column-value:hover dss-tooltip {
          visibility: visible;
        }

        .column-value--link {
          color: var(--color-primary-700);
          font-weight: 600;
          text-decoration: none;
        }

        .column-value--link:hover {
          color: var(--color-primary-900);
        }

        .column-value--link:active {
          color: var(--color-primary-800);
        }

        .column-value--link:disabled {
          color: var(--color-neutral-500);
          cursor: not-allowed;
        }

        .column-value--link:focus-visible {
          outline: var(--dss-border-width-md) solid var(--color-blue-200);
          border-radius: var(--dss-radius-xs);
        }

        .dss-table-main .table .table-body-row:focus-visible {
          box-shadow: inset 0 0 0 var(--dss-border-width-lg)
            var(--color-blue-200);
          outline: 0;
        }

        .table-header-row--hide,
        .table-header-row--hide .table-th,
        .table-header-row--hide .table-th * {
          height: 0;
          visibility: hidden;
        }
      `,r$2(badgeStates)]}set hasPaginator(t){const a=this._hasPaginator;this._hasPaginator=t,this.requestUpdate("hasPaginator",a)}set data(t){const a=this._data;this._data=t,this._createTableHeader(t),this._pipeData=this._data,this._copyPipeData=[...this._data],this.requestUpdate("data",a)}set customData(t){const a=this._customData;this._customData=t,this._createTableHeader(t),this._pipeData=this._customData,this._copyPipeData=[...this._customData],this.requestUpdate("data",a)}set customTableHeader(t){const a=this._customTableHeader;this._customTableHeader=t,this.requestUpdate("customTableHeader",a)}set filters(t){const a=this._filters;this._filters=t,this.requestUpdate("filters",a)}set currentIndex(t){const a=this._currentIndex;this._currentIndex=t,this.requestUpdate("currentIndex",a)}set pageSize(t){const a=this._pageSize;this._pageSize=t,this.requestUpdate("pageSize",a)}set pageSizeOptions(t){const a=this._pageSizeOptions;this._pageSizeOptions=t,this.requestUpdate("pageSizeOptions",a)}set resultstext(t){const a=this._resultstext;this._resultstext=t,this.requestUpdate("resultstext",a)}set rowsperpagetext(t){const a=this._rowsperpagetext;this._rowsperpagetext=t,this.requestUpdate("rowsperpagetext",a)}set textAlign(t){const a=this._textAlign;this._textAlign=t,this.requestUpdate("textAlign",a)}set headerTitle(t){const a=this._headerTitle;this._headerTitle=t,this.requestUpdate("headerTitle",a)}set hideHeader(t){const a=this._hideHeader;this._hideHeader=t,this.requestUpdate("hideHeader",a)}set hideColumnHeader(t){const a=this._hideColumnHeader;this._hideColumnHeader=t,this.requestUpdate("hideColumnHeader",a)}set innerFilters(t){const a=this._innerFilters;this._innerFilters=t,this.requestUpdate("innerFilters",a)}set expandTable(t){const a=this._expandTable;this._expandTable=t,this.requestUpdate("expandTable",a)}set expandLabel(t){const a=this._expandLabel;this._expandLabel=t,this.requestUpdate("expandLabel",a)}set collapseLabel(t){const a=this._collapseLabel;this._collapseLabel=t,this.requestUpdate("collapseLabel",a)}set rowsOnCollapsed(t){const a=this._rowsOnCollapsed;this._rowsOnCollapsed=t,this.requestUpdate("rowsOnCollapsed",a)}set filtersLabel(t){const a=this._filtersLabel;this._filtersLabel=t,this.requestUpdate("filtersLabel",a)}set cleanFiltersLabel(t){const a=this._cleanFiltersLabel;this._cleanFiltersLabel=t,this.requestUpdate("cleanFiltersLabel",a)}set selectedRowsLabel(t){const a=this._selectedRowsLabel;this._selectedRowsLabel=t,this.requestUpdate("selectedRowsLabel",a)}set footerButtons(t){const a=this._footerButtons;this._footerButtons=t,this.requestUpdate("footerButtons",a)}set maxContentWidth(t){const a=this._maxContentWidth;this._maxContentWidth=t,this.requestUpdate("maxContentWidth",a)}set stickyColumns(t){const a=this._stickyColumns;this._stickyColumns=t,this.requestUpdate("stickyColumns",a)}set multiselect(t){const a=this._multiselect;this._multiselect=t,this.requestUpdate("multiselect",a)}set radioselect(t){const a=this._radioselect;this._radioselect=t,this.requestUpdate("radioselect",a)}set hasRowButton(t){const a=this._hasRowButton;this._hasRowButton=t,this.requestUpdate("hasRowButton",a)}set rowButtonLabel(t){const a=this._rowButtonLabel;this._rowButtonLabel=t,this.requestUpdate("rowButtonLabel",a)}set hasRowActions(t){const a=this._hasRowActions;this._hasRowActions=t,this.requestUpdate("hasRowActions",a)}set rowActionsIcons(t){const a=this._rowActionsIcons;this._rowActionsIcons=t,this.requestUpdate("rowActionsIcons",a)}set footerButtonPrimaryLabel(t){const a=this._footerButtonPrimaryLabel;this._footerButtonPrimaryLabel=t,this.requestUpdate("footerButtonPrimaryLabel",a)}set footerButtonSecondaryLabel(t){const a=this._footerButtonSecondaryLabel;this._footerButtonSecondaryLabel=t,this.requestUpdate("footerButtonSecondaryLabel",a)}set footerButtonAlternativeLabel(t){const a=this._footerButtonAlternativeLabel;this._footerButtonAlternativeLabel=t,this.requestUpdate("footerButtonAlternativeLabel",a)}set enableRowActionsOnDisabled(t){const a=this._enableRowActionsOnDisabled;this._enableRowActionsOnDisabled=t,this.requestUpdate("enableRowActionsOnDisabled",a)}set enableRowActionsOnDeleted(t){const a=this._enableRowActionsOnDeleted;this._enableRowActionsOnDeleted=t,this.requestUpdate("enableRowActionsOnDeleted",a)}set valueMaxLength(t){const a=this._valueMaxLength;this._valueMaxLength=t,this.requestUpdate("valueMaxLength",a)}get _tableGridStyle(){return`grid-template-columns: repeat(${this._tableHeader.length}, 1fr)`}get _tableHeight(){let t="height:auto;";if(!this._expandTable){let a=this._rowsOnCollapsed*56;a+=56,t=`height:${a}px;`}return t}async firstUpdated(){try{await this.updateComplete,this._clickOutside()}catch{console.error("ERROR OCURRED")}}willUpdate(t){const a=t.has("data"),c=t.has("customData");if(!this._isFirstUpdate&&(a||c)){const l={detail:{startIndex:1,endIndex:this._pageSize}};this._paginateTable(l)}this._isFirstUpdate=!1}_clickOutside(){document.addEventListener("click",t=>{t.composedPath().includes(this)?t.composedPath().find(l=>l instanceof HTMLElement&&l.classList.contains("table-body"))||this._resetRowsTabIndex():this._resetRowsTabIndex()})}_createTableHeader(t){const a=Object.keys(t[0]);if(a.includes("disabled")){const c=a.indexOf("disabled");a.splice(c,1)}if(a.includes("deleted")){const c=a.indexOf("deleted");a.splice(c,1)}this._tableHeader=a,this._tableHeader.forEach(c=>{this._tableHeaderSort[c]="none"})}_sortBy(t,a){this._currentSortColumn=t,a==="none"?this._currentSortType="ASC":a==="ASC"?this._currentSortType="DSC":a==="DSC"&&(this._currentSortType="none"),this._currentSortType==="none"?this._pipeData=[...this._copyPipeData]:this._pipeData=this._pipeData.sort((l,h)=>{let p,b;return this._customData?(p=l[t].value,b=h[t].value):(p=l[t],b=h[t]),p<b?this._currentSortType==="ASC"?-1:1:p>b?this._currentSortType==="ASC"?1:-1:0}),this._tableHeaderSort[t]=this._currentSortType,Object.keys(this._tableHeaderSort).forEach(l=>{l!==t&&(this._tableHeaderSort[l]="none")}),this.requestUpdate()}_paginateTable(t){const a=t.detail.startIndex,c=t.detail.endIndex;if(this._customData&&c<=this._customData.length?this._pipeData=this._customData.slice(a-1,c):this._data&&c<=this._data.length&&(this._pipeData=this._data.slice(a-1,c)),t.detail.pageSize&&(this._pageSize=t.detail.pageSize),this._copyPipeData=[...this._pipeData],this._currentSortColumn&&this._currentSortType){let l="";this._currentSortType==="ASC"?l="none":this._currentSortType==="DSC"?l="ASC":l="DSC",this._sortBy(this._currentSortColumn,l)}this.requestUpdate()}_generateTableHeaderHTML(){let t=x``,a=x``,c=x``,l=x``;this._multiselect&&(t=x`
        <th class="table-th table-th--checkbox">
          <div class="table-header-column table-header-column--checkbox">
            <input
              type="checkbox"
              class="dss-checkbox"
              aria-label="Seleccionar totes les files"
              @change="${this._onSelectAllRows}"
            />
          </div>
        </th>
      `),this._radioselect&&(a=x`
        <th class="table-th table-th--radio">
          <div class="table-header-column table-header-column--radio"></div>
        </th>
      `),this._hasRowButton&&(c=x`
        <th class="table-th table-th--button">
          <div class="table-header-column table-header-column--button"></div>
        </th>
      `),this._hasRowActions&&(l=x`
        <th
          class="table-th table-th--actions table-th--icons-${this._rowActionsIcons.length}"
        >
          <div class="table-header-column table-header-column--actions"></div>
        </th>
      `);let h=!0;const p=this._tableHeader.map((g,m)=>{const w=()=>{this._customTableHeader?this._customTableHeader[m].sort&&this._sortBy(g,this._tableHeaderSort[g]):this._sortBy(g,this._tableHeaderSort[g]),this.requestUpdate()},v=C=>{const T=C.currentTarget,D=C;let q=!1;switch(D.key){case"ArrowLeft":moveFocusToPreviousTarget(this.renderRoot,T,".table-header-column--clickable"),q=!0;break;case"ArrowRight":moveFocusToNextTarget(this.renderRoot,T,".table-header-column--clickable"),q=!0;break;case"Enter":const U=C.target;onKeyboardEnter(this.renderRoot,U,".table-header-column--clickable"),q=!0;break}q&&(C.stopPropagation(),C.preventDefault())};let f="";this._customData&&this._customData.length>0?f=this._pipeData[0][g].type:this._data&&this._data.length>0&&(f=typeof this._pipeData[0][g]);const y={"table-th--review":f==="review","table-th--link":f==="link"};let k=!1;this._customTableHeader&&(this._customTableHeader[m].sort||(k=!0));const $={"table-header-column--review":f==="review","table-header-column--number":f==="number","table-header-column--link":f==="link","table-header-column--clickable":!k,"table-header-column--not-clickable":k},_=x`
        <span class="dss-icon dss-icon--sm table-header-column__icon">
          ${g===this._currentSortColumn?this._currentSortType==="ASC"?x`arrow_upward`:this._currentSortType==="DSC"?x`arrow_downward`:x`swap_vert`:x`swap_vert`}
        </span>
      `,S=x`
        <th class="table-th ${e(y)}">
          <div
            class="table-header-column ${e($)}"
            tabindex="${h?0:-1}"
            @keydown=${v}
            @click=${w}
          >
            <span class="table-header-column__title">
              ${this._customTableHeader?x`${this._customTableHeader[m].title}`:x`${g}`}
            </span>
            ${this._customTableHeader?this._customTableHeader[m].sort?x`${_}`:null:x`${_}`}
          </div>
        </th>
      `;return h=!1,S}),b={"table-header-row--hide":this._hideColumnHeader};return x` <tr
      class="table-header-row ${e(b)}"
    >
      ${t} ${a} ${p}
      ${c} ${l}
    </tr>`}_onRowCheckboxChange(t){this._radioselect&&this._uncheckRadioRows(),t.checked?t.checked=!t.checked:t.checked=!0,this.requestUpdate()}_onSelectAllRows(){this._pipeData.forEach(t=>{t.disabled?this._enableRowActionsOnDisabled&&(t.checked=this._selectAllRows):t.deleted?this._enableRowActionsOnDeleted&&(t.checked=this._selectAllRows):t.checked=this._selectAllRows}),this._selectAllRows=!this._selectAllRows,this.requestUpdate()}_onRowAction(t,a){const c={detail:{action:t,row:a},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onRowAction",c)),this.requestUpdate()}_onRowActionKeydown(t,a,c){t.key==="Enter"&&this._onRowAction(a,c)}_generateTableTdCheckbox(t,a,c,l){return this._enableRowActionsOnDeleted&&(l=!1),this._enableRowActionsOnDisabled&&(c=!1),x`
      <td class="table-td table-td--checkbox">
        <div
          class="table-body-column table-body-column--custom table-body-column--checkbox"
        >
          <input
            type="checkbox"
            class="dss-checkbox table-body-row__action"
            aria-label="Seleccionar la fila"
            @change="${()=>this._onRowCheckboxChange(t)}"
            .checked=${a}
            ?disabled=${c||l}
          />
        </div>
      </td>
    `}_generateTableTdRadio(t,a,c,l){return this._enableRowActionsOnDeleted&&(l=!1),this._enableRowActionsOnDisabled&&(c=!1),x`
      <td class="table-td table-td--radio">
        <div
          class="table-body-column table-body-column--custom table-body-column--radio"
        >
          <input
            type="radio"
            name="row-radio"
            class="dss-radio table-body-row__action"
            aria-label="Seleccionar la fila"
            @change="${()=>this._onRowCheckboxChange(t)}"
            .checked=${a}
            ?disabled=${c||l}
          />
        </div>
      </td>
    `}_generateTableTdButton(t,a,c){return this._enableRowActionsOnDeleted&&(c=!1),this._enableRowActionsOnDisabled&&(a=!1),x`
      <td class="table-td table-td--button">
        <div
          class="table-body-column table-body-column--custom table-body-column--button"
        >
          <button
            type="button"
            class="dss-button dss-button--sm dss-button--secondary table-body-row__action"
            @click="${()=>this._onRowAction(this._rowButtonLabel,t)}"
            @keydown="${l=>this._onRowActionKeydown(l,this._rowButtonLabel,t)}"
            ?disabled=${a||c}
          >
            ${this._rowButtonLabel}
          </button>
        </div>
      </td>
    `}_generateTableTdActions(t,a,c){return this._enableRowActionsOnDeleted&&(c=!1),this._enableRowActionsOnDisabled&&(a=!1),x`
      <td class="table-td table-td--custom table-td--actions">
        <div
          class="table-body-column table-body-column--custom table-body-column--actions"
        >
          ${this._rowActionsIcons.map((l,h)=>x`
                <button
                  class="dss-icon-button dss-icon-button--primary dss-icon-button--md dss-table-actions-icon table-body-row__action"
                  @click="${()=>this._onRowAction(`rowAction${h+1}`,t)}"
                  @keydown="${p=>this._onRowActionKeydown(p,this._rowButtonLabel,t)}"
                  aria-label="Row action ${h+1}"
                  ?disabled=${a||c}
                >
                  <span class="dss-icon">${l}</span>
                </button>
              `)}
        </div>
      </td>
    `}_generateTableTdSelfActions(t,a,c,l,h){return this._enableRowActionsOnDeleted&&(h=!1),this._enableRowActionsOnDisabled&&(l=!1),x`
      <td class="table-td table-td--custom table-td--actions">
        <div
          class="table-body-column table-body-column--custom table-body-column--actions"
        >
          ${c.icons.map((p,b)=>x`
                <button
                  class="dss-icon-button dss-icon-button--primary dss-icon-button--md dss-table-actions-icon table-body-row__action"
                  @click="${()=>this._onRowAction(`${a}Action${b+1}`,t)}"
                  @keydown="${g=>this._onRowActionKeydown(g,this._rowButtonLabel,t)}"
                  aria-label="Self action ${b+1}"
                  ?disabled=${l||h}
                >
                  <span class="dss-icon">${p}</span>
                </button>
              `)}
        </div>
      </td>
    `}_resetRowsTabIndex(){const t=this.renderRoot.querySelector('.table-body-row[tabindex="0"]');t==null||t.setAttribute("tabindex","-1"),this.renderRoot.querySelectorAll(".table-body-row")[0].setAttribute("tabindex","0")}_uncheckRadioRows(){this._data&&this._data.length>0&&this._pipeData.forEach(t=>{t.checked=!1})}_generateDefaultTableBody(){let t,a=!0;return this._data&&this._data.length>0&&(t=this._pipeData.map(c=>{const l=c.checked?c.checked:!1,h=c.deleted?c.deleted:!1,p=c.disabled?c.disabled:!1,b=_=>{const S=_.relatedTarget;S&&!S.className.includes("table-body-row")&&!S.className.includes("table-body-row__action")&&this._resetRowsTabIndex()},g=_=>{const S=_.currentTarget,C=_;let T=!1;switch(C.key){case"ArrowUp":moveFocusToPreviousTarget(this.renderRoot,S,".table-body-row"),T=!0;break;case"ArrowDown":moveFocusToNextTarget(this.renderRoot,S,".table-body-row"),T=!0;break;case"Enter":const D=_.target;D.tagName==="TR"&&(onKeyboardEnter(this.renderRoot,D,".table-body-row"),(this._multiselect||this._radioselect)&&(!h&&!p?(this._radioselect&&this._uncheckRadioRows(),c.checked?c.checked=!c.checked:c.checked=!0):this._enableRowActionsOnDeleted&&h?(this._radioselect&&this._uncheckRadioRows(),c.checked?c.checked=!c.checked:c.checked=!0):this._enableRowActionsOnDisabled&&p&&(this._radioselect&&this._uncheckRadioRows(),c.checked?c.checked=!c.checked:c.checked=!0),this.requestUpdate()),T=!0);break;case"Escape":const U=_.composedPath().find(E=>E instanceof HTMLElement&&E.classList.contains("table-body-row"));U&&U.focus();break}T&&(_.stopPropagation(),_.preventDefault())},m=this._multiselect?this._generateTableTdCheckbox(c,l,p,h):x``,w=this._radioselect?this._generateTableTdRadio(c,l,p,h):x``,v=this._hasRowButton?this._generateTableTdButton(c,p,h):x``,f=this._hasRowActions?this._generateTableTdActions(c,p,h):x``,y=this._tableHeader.map(_=>{const S={"table-body-column--number":typeof c[_]=="number"};return x`
            <td class="table-td">
              <div
                class="table-body-column table-body-column--custom ${e(S)}"
              >
                ${c[_]===""?x`<i class="dss-icon dss-icon--md">remove</i>`:null}
                ${c[_]===""?x`<i class="dss-icon dss-icon--md">remove</i>`:null}
                ${typeof c[_]=="number"?x` ${c[_]} `:c[_].length<=this._valueMaxLength?x`${c[_]}`:x`${c[_]}...`}
              </div>
            </td>
          `}),$=x` <tr
          class="table-body-row ${e({"table-body-row--selected":l,"table-body-row--deleted":h,"table-body-row--disabled":p})}"
          tabindex="${a?0:-1}"
          style=${o(this._tableGridStyle)}
          @keydown=${g}
          @focusout=${b}
        >
          ${m} ${w} ${y}
          ${v} ${f}
        </tr>`;return a=!1,$})),t}_generateCustomTableBody(){let t,a=!0;return this._customData&&(t=this._pipeData.map(c=>{let l=c.checked?c.checked:!1;const h=c.deleted?c.deleted:!1,p=c.disabled?c.disabled:!1,b=_=>{const S=_.relatedTarget;S&&!S.className.includes("table-body-row")&&!S.className.includes("table-body-row__action")&&this._resetRowsTabIndex()},g=_=>{const S=_.currentTarget,C=_;let T=!1;switch(C.key){case"ArrowUp":moveFocusToPreviousTarget(this.renderRoot,S,".table-body-row"),T=!0;break;case"ArrowDown":moveFocusToNextTarget(this.renderRoot,S,".table-body-row"),T=!0;break;case"Enter":const D=_.target;D.tagName==="TR"&&(onKeyboardEnter(this.renderRoot,D,".table-body-row"),(this._multiselect||this._radioselect)&&((!h&&!p||this._enableRowActionsOnDeleted&&h||this._enableRowActionsOnDisabled&&p)&&(c.checked?(c.checked=!c.checked,l=c.checked):(c.checked=!0,l=c.checked)),this.requestUpdate())),T=!0;break;case"Escape":const U=_.composedPath().find(E=>E instanceof HTMLElement&&E.classList.contains("table-body-row"));U&&U.focus();break}T&&(_.stopPropagation(),_.preventDefault())},m=this._multiselect?this._generateTableTdCheckbox(c,l,p,h):x``,w=this._radioselect?this._generateTableTdRadio(c,l,p,h):x``,v=this._hasRowButton?this._generateTableTdButton(c,p,h):x``,f=this._hasRowActions?this._generateTableTdActions(c,p,h):x``,y=this._tableHeader.map(_=>{const S=T=>{c[T].value=!c[T].value;const D={detail:{action:"review",row:c},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onRowAction",D)),this.requestUpdate()},C={"table-body-column--text":c[_].type==="text","table-body-column--number":c[_].type==="number","table-body-column--link":c[_].type==="link","table-body-column--badge":c[_].type==="badge","table-body-column--result":c[_].type==="result","table-body-column--review":c[_].type==="review","table-body-column--progress":c[_].type==="progress","table-body-column--font-bold":c[_].fontType==="bold","table-body-column--font-black":c[_].fontType==="black","table-body-column--icon-right":c[_].iconRight};return x`
            <td class="table-td" style="${o(c[_].style)}">
              <div
                class="table-body-column table-body-column--custom ${e(C)}"
              >
                ${c[_].type==="text"?x`
                      ${c[_].icon?x`
                            <span class="dss-icon dss-icon--sm column-icon"
                              >${c[_].icon}</span
                            >
                          `:null}
                      ${c[_].badgeBefore?x`
                            <dss-badge
                              size="md"
                              state="${p?"disabled":c[_].state}"
                              text="${c[_].badgeBefore}"
                              outlined
                              hideIcon
                            >
                              ${c[_].badgeTooltip?x`
                                    <dss-tooltip
                                      slot="tooltip"
                                      position="${c[_].badgeTooltipPosition?c[_].badgeTooltipPosition:"top"}"
                                    >
                                      <span>${c[_].badgeTooltip}</span>
                                    </dss-tooltip>
                                  `:null}
                            </dss-badge>
                          `:null}

                      <span class="column-value">
                        <span class="value">
                          ${c[_].value===""?x`<i class="dss-icon dss-icon--md">remove</i>`:null}
                          ${c[_].value.length<=this._valueMaxLength?x`${c[_].value}`:x`${c[_].value.slice(0,this._valueMaxLength)}...`}
                        </span>
                        ${c[_].valueTooltip?x`
                              <dss-tooltip
                                position="${c[_].valueTooltipPosition?c[_].valueTooltipPosition:"top"}"
                              >
                                <span>${c[_].valueTooltip}</span>
                              </dss-tooltip>
                            `:null}
                      </span>
                    `:c[_].type==="number"?x`
                      ${c[_].icon?x`
                            <span class="dss-icon dss-icon--sm column-icon"
                              >${c[_].icon}</span
                            >
                          `:null}
                      <span class="column-value">${c[_].value}</span>
                    `:c[_].type==="link"?x`
                      ${c[_].icon?x`
                            <span class="dss-icon dss-icon--sm column-icon"
                              >${c[_].icon}</span
                            >
                          `:null}
                      ${p?x`
                            <span class="column-value">${c[_].value}</span>
                          `:x`
                            <a
                              class="column-value column-value--link"
                              href="${c[_].href}"
                              ?disabled=${p}
                            >
                              <span class="value">
                                ${c[_].value.length<=this._valueMaxLength?x`${c[_].value}`:x`${c[_].value.slice(0,this._valueMaxLength)}...`}
                              </span>
                              ${c[_].valueTooltip?x`
                                    <dss-tooltip
                                      position="${c[_].valueTooltipPosition?c[_].valueTooltipPosition:"top"}"
                                    >
                                      <span>${c[_].valueTooltip}</span>
                                    </dss-tooltip>
                                  `:null}
                            </a>
                          `}
                    `:c[_].type==="badge"?x`
                      <dss-badge
                        size="${c[_].badgeSize?c[_].badgeSize:"md"}"
                        state="${p?"disabled":c[_].state}"
                        ?outlined=${c[_].outlined}
                        text="${c[_].value}"
                      ></dss-badge>
                    `:c[_].type==="result"?x`
                      <dss-icon-badge
                        size="sm"
                        state="${p?"disabled":c[_].state}"
                        icon="${c[_].icon}"
                        bubble
                      ></dss-icon-badge>
                      <span class="column-value">${c[_].value}</span>
                    `:c[_].type==="actions"?this._generateTableTdSelfActions(c,_,c[_],p,h):c[_].type==="review"?x`
                      <input
                        type="checkbox"
                        class="dss-checkbox dss-checkbox--validate"
                        ?checked="${c[_].value}"
                        @change="${()=>S(_)}"
                        ?disabled=${p&&!this._enableRowActionsOnDisabled||h&&!this._enableRowActionsOnDeleted}
                      />
                    `:c[_].type==="progress"?x`
                      ${c[_].icon?x`
                            <span class="dss-icon dss-icon--sm column-icon"
                              >${c[_].icon}</span
                            >
                          `:null}
                      <dss-progress-indicator
                        percentage="23"
                      ></dss-progress-indicator>
                    `:null}
              </div>
            </td>
          `}),$=x` <tr
          class="table-body-row ${e({"table-body-row--selected":l,"table-body-row--deleted":h,"table-body-row--disabled":p})}"
          tabindex="${a?0:-1}"
          style=${o(this._tableGridStyle)}
          @keydown=${g}
          @focusout=${b}
        >
          ${m} ${w} ${y}
          ${v} ${f}
        </tr>`;return a=!1,$})),t}_generateFilterChips(){let t;return this._filters&&(t=this._filters.map(a=>{const c=p=>{const b=p.target.getAttribute("term");typeof a=="string"?this._filters=this._filters.filter(g=>g!==b):this._filters=this._filters.filter(g=>g.value.trim()!==(b==null?void 0:b.trim())),this._emitChangeFilters(),this.requestUpdate()};return x`
          <span tabindex="0" class="dss-chip dss-chip--sm dss-chip--selected">
            ${typeof a==="string"?x`
                  ${a}
                  <button
                    class="dss-chip__icon-button dss-icon-button dss-icon-button--primary dss-icon-button--sm"
                    @click="${c}"
                  >
                    <span class="dss-icon" term="${a}">cancel</span>
                  </button>
                `:x`
                  <span class="dss-icon">${a.icon}</span>
                  ${a.value}
                  <button
                    class="dss-chip__icon-button dss-icon-button dss-icon-button--primary dss-icon-button--sm"
                    @click="${c}"
                  >
                    <span class="dss-icon" term=" ${a.value}"
                      >cancel</span
                    >
                  </button>
                `}
          </span>
        `})),t}_clearFilters(){this._filters=[],this._emitChangeFilters(),this.requestUpdate()}_countRowsChecked(){let t=0;for(const a of this._pipeData)a.checked&&(t+=1);return t}_getRowsSelected(){const t=[];return this._pipeData.forEach(a=>{if(a.checked){const c={...a};c.checked=void 0,t.push(c)}}),t}_emitExpandAction(){const t={detail:this._expandTable,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onExpandTable",t)),this._expandTable=!this._expandTable,this.requestUpdate()}_emitOpenFilters(){const t={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onOpenFilters",t)),this.requestUpdate()}_emitChangeFilters(){const t={detail:this._filters,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onChangeFilters",t)),this.requestUpdate()}_emitFooterAction(t){const a=this._getRowsSelected(),c={detail:{action:t,selectedRows:a},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onFooterAction",c)),this.requestUpdate()}render(){const t={"table--max-content-width":this._maxContentWidth,"table--sticky-columns":this._maxContentWidth&&this._stickyColumns,"table--sticky-columns--multiselect":this._maxContentWidth&&this._stickyColumns&&this._multiselect,"table--sticky-columns--radioselect":this._maxContentWidth&&this._stickyColumns&&this._radioselect},a={"table-body--align-left":this._data.length>0&&this._textAlign==="left","table-body--align-center":this._data.length>0&&this._textAlign==="center","table-body--align-right":this._data.length>0&&this._textAlign==="right","table-body--align-justify":this._data.length>0&&this._textAlign==="justify"};return x`
      <div class="dss-table">
        ${this._hideHeader?null:x`
              <div class="dss-table-header">
                <div class="dss-table-header-title">
                  <div class="dss-table-header-title__text">
                    ${this._headerTitle}
                  </div>
                  <div
                    class="dss-table-header-title__action"
                    role="button"
                    tabindex="0"
                    @click="${this._emitExpandAction}"
                  >
                    ${this._expandTable?x`
                          <span class="dss-icon dss-icon--sm">fullscreen</span>
                          <span>${this._collapseLabel}</span>
                        `:x`
                          <span class="dss-icon dss-icon--sm">fullscreen</span>
                          <span>${this._expandLabel}</span>
                        `}
                  </div>
                </div>

                ${this._innerFilters?x`
                      <div
                        class="dss-table-header-filters dss-table-header-filters--inner"
                      >
                        <div class="dss-table-header-filters__filters">
                          <slot name="filters"></slot>
                        </div>
                        <div class="dss-table-header-filters__actions"></div>
                      </div>
                    `:x`
                      <div
                        class="dss-table-header-filters dss-table-header-filters--outer"
                      >
                        <div class="dss-table-header-filters__filters">
                          <div class="filters-label">
                            ${this._filtersLabel}:
                          </div>
                          <div class="filters-list">
                            ${this._filters.length>0?x` ${this._generateFilterChips()} `:x`
                                  <span class="filters-list-empty">
                                    ${this._noFiltersLabel}
                                  </span>
                                `}
                          </div>
                          <div class="filters-clean">
                            ${this._filters.length>0?x`
                                  <button
                                    type="button"
                                    class="dss-button dss-button--sm dss-button--secondary dss-button--icon-left"
                                    @click=${this._clearFilters}
                                  >
                                    <span class="material-symbols-rounded"
                                      >mop</span
                                    >${this._cleanFiltersLabel}
                                  </button>
                                `:null}
                          </div>
                        </div>

                        <div class="dss-table-header-filters__actions">
                          <button
                            type="button"
                            class="dss-button dss-button--md dss-button--secondary dss-button--icon-left"
                            @click=${this._emitOpenFilters}
                          >
                            <span class="material-symbols-rounded"
                              >filter_list</span
                            >
                            ${this._openFiltersLabel}
                          </button>
                        </div>
                      </div>
                    `}
              </div>
            `}

        <div class="dss-table-main">
          <div
            class="dss-table-container"
            style="${o(this._tableHeight)}"
          >
            <table
              class="table ${e(t)}"
              cellspacing="0"
              cellpadding="0"
            >
              <thead
                class="table-header"
                style=${o(this._tableGridStyle)}
              >
                ${this._generateTableHeaderHTML()}
              </thead>
              <tbody class="table-body ${e(a)}">
                ${this._customData?this._generateCustomTableBody():this._generateDefaultTableBody()}
              </tbody>
            </table>
          </div>
          ${this._hasPaginator?x`
                <dss-table-pagination
                  length=${this._customData?this._customData.length:this._data.length}
                  pagesize=${this._pageSize}
                  pageSizeOptions=${this._pageSizeOptions}
                  currentindex=${this._currentIndex}
                  resultstext=${this._resultstext}
                  rowsperpagetext=${this._rowsperpagetext}
                  @onChangePage=${this._paginateTable}
                ></dss-table-pagination>
              `:null}
        </div>

        ${this._multiselect?x`
              <div class="table-footer">
                <div class="table-footer-description">
                  ${this._countRowsChecked()} ${this._selectedRowsLabel}
                </div>

                <div class="table-footer-actions">
                  ${this._footerButtons>=3?x`
                        <button
                          type="button"
                          class="dss-button dss-button--md dss-button--subtle"
                          ?disabled=${this._countRowsChecked()<=0}
                          @click=${()=>this._emitFooterAction("alternative")}
                        >
                          ${this._footerButtonAlternativeLabel}
                        </button>
                      `:null}
                  ${this._footerButtons>=2?x`
                        <button
                          type="button"
                          class="dss-button dss-button--md dss-button--secondary"
                          ?disabled=${this._countRowsChecked()<=0}
                          @click=${()=>this._emitFooterAction("secondary")}
                        >
                          ${this._footerButtonSecondaryLabel}
                        </button>
                      `:null}
                  ${this._footerButtons>=1?x`
                        <button
                          type="button"
                          class="dss-button dss-button--md dss-button--primary"
                          ?disabled=${this._countRowsChecked()<=0}
                          @click=${()=>this._emitFooterAction("primary")}
                        >
                          ${this._footerButtonPrimaryLabel}
                        </button>
                      `:null}
                </div>
              </div>
            `:null}
      </div>
    `}}__decorateClass$1([n(booleanType)],Table.prototype,"hasPaginator");__decorateClass$1([n({type:Array})],Table.prototype,"data");__decorateClass$1([n({type:Array})],Table.prototype,"customData");__decorateClass$1([n({type:Array})],Table.prototype,"customTableHeader");__decorateClass$1([n({type:Array})],Table.prototype,"filters");__decorateClass$1([n({type:Number})],Table.prototype,"currentIndex");__decorateClass$1([n({type:Number})],Table.prototype,"pageSize");__decorateClass$1([n({type:String})],Table.prototype,"pageSizeOptions");__decorateClass$1([n({type:String})],Table.prototype,"resultstext");__decorateClass$1([n({type:String})],Table.prototype,"rowsperpagetext");__decorateClass$1([n({type:String})],Table.prototype,"textAlign");__decorateClass$1([n({type:String})],Table.prototype,"headerTitle");__decorateClass$1([n(booleanType)],Table.prototype,"hideHeader");__decorateClass$1([n(booleanType)],Table.prototype,"hideColumnHeader");__decorateClass$1([n(booleanType)],Table.prototype,"innerFilters");__decorateClass$1([n(booleanType)],Table.prototype,"expandTable");__decorateClass$1([n({type:String})],Table.prototype,"expandLabel");__decorateClass$1([n({type:String})],Table.prototype,"collapseLabel");__decorateClass$1([n({type:Number})],Table.prototype,"rowsOnCollapsed");__decorateClass$1([n({type:String})],Table.prototype,"filtersLabel");__decorateClass$1([n({type:String})],Table.prototype,"cleanFiltersLabel");__decorateClass$1([n({type:String})],Table.prototype,"selectedRowsLabel");__decorateClass$1([n({type:Number})],Table.prototype,"footerButtons");__decorateClass$1([n(booleanType)],Table.prototype,"maxContentWidth");__decorateClass$1([n(booleanType)],Table.prototype,"stickyColumns");__decorateClass$1([n(booleanType)],Table.prototype,"multiselect");__decorateClass$1([n(booleanType)],Table.prototype,"radioselect");__decorateClass$1([n(booleanType)],Table.prototype,"hasRowButton");__decorateClass$1([n({type:String})],Table.prototype,"rowButtonLabel");__decorateClass$1([n(booleanType)],Table.prototype,"hasRowActions");__decorateClass$1([n({type:Array})],Table.prototype,"rowActionsIcons");__decorateClass$1([n({type:String})],Table.prototype,"footerButtonPrimaryLabel");__decorateClass$1([n({type:String})],Table.prototype,"footerButtonSecondaryLabel");__decorateClass$1([n({type:String})],Table.prototype,"footerButtonAlternativeLabel");__decorateClass$1([n(booleanType)],Table.prototype,"enableRowActionsOnDisabled");__decorateClass$1([n(booleanType)],Table.prototype,"enableRowActionsOnDeleted");__decorateClass$1([n({type:Number})],Table.prototype,"valueMaxLength");var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(d,t,a,c)=>{for(var l=__getOwnPropDesc(t,a),h=d.length-1,p;h>=0;h--)(p=d[h])&&(l=p(t,a,l)||l);return l&&__defProp(t,a,l),l};class Switch extends r$1{constructor(){super(...arguments),this._checked=!1,this._disabled=!1,this._label=null,this._size="md"}static get styles(){return i$1`
      :host {
        display: flex;
        width: fit-content;
        height: fit-content;
        gap: 0.5rem;
        align-items: center;
      }

      .dss-switch input[type='checkbox'] {
        opacity: 0;
      }

      .dss-switch {
        position: relative;
        display: flex;
        transition: 0.3s all ease-in;
      }

      .dss-switch .dss-switch__slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #656565;
        border-radius: 100px;
        transition: 0.3s all ease-in;
      }

      .dss-switch .dss-switch__slider:before {
        position: absolute;
        background-color: white;
        border-radius: 100%;
        content: '';
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
          0px 1px 3px 1px rgba(0, 0, 0, 0.1);
        transition: 0.3s all ease-in;
      }

      .dss-switch input[type='checkbox']:hover:enabled + .dss-switch__slider {
        background-color: #535353;
      }

      .dss-switch input[type='checkbox']:enabled + .dss-switch__slider:active {
        background-color: #828282;
        transition: none;
      }

      .dss-switch input[type='checkbox']:checked + .dss-switch__slider {
        background-color: #0073e6;
      }

      .dss-switch
        input[type='checkbox']:checked:hover:enabled
        + .dss-switch__slider {
        background-color: #0064c7;
      }

      .dss-switch
        input[type='checkbox']:checked:enabled
        + .dss-switch__slider:active {
        background-color: #308deb;
        transition: none;
      }

      .dss-switch
        input[type='checkbox']:checked:enabled
        + .dss-switch__slider:active:before {
        color: #308deb;
        transition: none;
      }

      .dss-switch
        input[type='checkbox']:enabled
        + .dss-switch__slider:active:before {
        color: #828282;
        transition: none;
      }

      .dss-switch input[type='checkbox']:disabled + .dss-switch__slider {
        cursor: not-allowed;
      }

      .dss-switch input[type='checkbox']:disabled + .dss-switch__slider:before {
        color: #828282 !important;
      }

      .dss-switch
        input[type='checkbox']:checked:disabled
        + .dss-switch__slider {
        background-color: #308deb;
      }

      .dss-switch
        input[type='checkbox']:checked:disabled
        + .dss-switch__slider:before {
        color: #308deb !important;
      }

      .dss-switch input[type='checkbox']:focus {
        outline: none;
        transition: none;
      }

      .dss-switch
        input[type='checkbox']:focus-visible:enabled
        + .dss-switch__slider {
        outline: 4px solid #8ec7e5;
        transition: none;
      }

      .dss-switch.dss-switch--lg {
        width: 52px;
        height: 32px;
      }

      .dss-switch.dss-switch--lg .dss-switch__slider:before {
        font-family: 'Material Symbols Rounded';
        content: 'close';
        color: var(--color-primary-500);
        font-size: 16px;
        height: 24px;
        width: 24px;
        left: 4px;
        bottom: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .dss-switch.dss-switch--lg
        input[type='checkbox']:checked
        + .dss-switch__slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
        content: 'done';
        color: var(--color-primary-500);
      }

      .dss-switch.dss-switch--md {
        width: 39px;
        height: 24px;
      }

      .dss-switch.dss-switch--md .dss-switch__slider:before {
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
      }

      .dss-switch.dss-switch--md
        input[type='checkbox']:checked
        + .dss-switch__slider:before {
        -webkit-transform: translateX(15px);
        -ms-transform: translateX(15px);
        transform: translateX(15px);
      }

      .dss-switch.dss-switch--sm {
        width: 26px;
        height: 16px;
      }

      .dss-switch.dss-switch--sm .dss-switch__slider:before {
        height: 12px;
        width: 12px;
        left: 2px;
        bottom: 2px;
      }

      .dss-switch.dss-switch--sm
        input[type='checkbox']:checked
        + .dss-switch__slider:before {
        -webkit-transform: translateX(10px);
        -ms-transform: translateX(10px);
        transform: translateX(10px);
      }

      .dss-switch__label {
        font-family: var(--font-family);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #1d1d1d;
      }

      .dss-switch.dss-switch--lg + .dss-switch__label {
        font-weight: 600;
        font-size: 16px;
      }

      .dss-switch--disabled .dss-switch__slider {
        background-color: var(--color-neutral-200);
      }

      .dss-switch
        input[type='checkbox']:checked:disabled
        + .dss-switch__slider {
        background-color: var(--color-neutral-200);
      }

      .dss-switch
        input[type='checkbox']:checked:disabled
        + .dss-switch__slider::before {
        background-color: var(--color-neutral-400);
        color: var(--color-neutral-900) !important;
      }

      .dss-switch.dss-switch--lg
        input[type='checkbox']:checked:disabled
        + .dss-switch__slider::before {
        background-color: var(--color-neutral-100);
      }

      .dss-switch
        input[type='checkbox']:not(:checked):disabled
        + .dss-switch__slider::before {
        background-color: var(--color-neutral-400);
        color: var(--color-neutral-100) !important;
      }
    `}set checked(t){const a=this._checked;this._checked=t,this.requestUpdate("checked",a)}set disabled(t){const a=this._disabled;this._disabled=t,this.requestUpdate("disabled",a)}set label(t){const a=this._label;this._label=t,this.requestUpdate("label",a)}set size(t){const a=this._size;this._size=t,this.requestUpdate("size",a)}handleClick(){this._checked=!this._checked,this.dispatchEvent(new CustomEvent("onChangeValue",{detail:this._checked,bubbles:!0,composed:!0}))}render(){const t={"dss-switch--sm":this._size==="sm","dss-switch--md":this._size==="md","dss-switch--lg":this._size==="lg","dss-switch--disabled":this._disabled};return x`
      <label class="dss-switch ${e(t)}">
        <input
          type="checkbox"
          ?checked="${this._checked}"
          ?disabled="${this._disabled}"
          @click="${this.handleClick}"
        />
        <div class="dss-switch__slider"></div>
      </label>
      ${this._label?x`<span class="dss-switch__label">${this._label}</span>`:null}
    `}}__decorateClass([n(booleanType)],Switch.prototype,"checked");__decorateClass([n(booleanType)],Switch.prototype,"disabled");__decorateClass([n({type:String})],Switch.prototype,"label");__decorateClass([n({type:String})],Switch.prototype,"size");registerCustomElement("dss-accordion",Accordion);registerCustomElement("dss-action-menu",ActionMenu);registerCustomElement("dss-action-menu-item",ActionMenuItem);registerCustomElement("dss-alert",Alert);registerCustomElement("dss-avatar",Avatar);registerCustomElement("dss-badge",Badge);registerCustomElement("dss-button",Button);registerCustomElement("dss-button-link",ButtonLink);registerCustomElement("dss-calendar",Calendar);registerCustomElement("dss-chat-message",ChatMessage);registerCustomElement("dss-custom-table",CustomTable);registerCustomElement("dss-datepicker",Datepicker_);registerCustomElement("dss-datepicker-range",DatepickerRange);registerCustomElement("dss-drawer",Drawer);registerCustomElement("dss-header",Header);registerCustomElement("dss-header-links",HeaderLinks);registerCustomElement("dss-header-menu-patient",HeaderMenuPatient);registerCustomElement("dss-header-menu-professional",HeaderMenuProfessional);registerCustomElement("dss-icon",Icon);registerCustomElement("dss-icon-badge",IconBadge);registerCustomElement("dss-icon-button",IconButton);registerCustomElement("dss-input",Input);registerCustomElement("dss-input-action",InputAction);registerCustomElement("dss-input-dropdown",InputDropdown);registerCustomElement("dss-input-switch",InputSwitch);registerCustomElement("dss-item-list",ItemList);registerCustomElement("dss-modal",Modal);registerCustomElement("dss-notification-badge",NotificationBadge);registerCustomElement("dss-pagination",Pagination);registerCustomElement("dss-progress-indicator",ProgressIndicator);registerCustomElement("dss-search-bar",SearchBar);registerCustomElement("dss-selector",Selector);registerCustomElement("dss-slider",Slider);registerCustomElement("dss-spinner",Spinner);registerCustomElement("dss-stepper",Stepper);registerCustomElement("dss-tabs-list",TabsList);registerCustomElement("dss-tabs-panel",TabsPanel);registerCustomElement("dss-table-header",TableHeader);registerCustomElement("dss-table-pagination",TablePagination);registerCustomElement("dss-textarea",Textarea);registerCustomElement("dss-tile",Tile);registerCustomElement("dss-timepicker",Timepicker);registerCustomElement("dss-tooltip",Tooltip);registerCustomElement("dss-popover",Popover);registerCustomElement("dss-popover-body",PopoverBody);registerCustomElement("dss-sidemenu",Sidemenu);registerCustomElement("dss-sidemenu-list",SidemenuList);registerCustomElement("dss-sidemenu-list-item",SidemenuListItem);registerCustomElement("dss-split-button",SplitButton);registerCustomElement("dss-user-feedback",UserFeedback);registerCustomElement("dss-upload-box",UploadBox);registerCustomElement("dss-card",Card);registerCustomElement("dss-card-body",CardBody);registerCustomElement("dss-card-description",CardDescription);registerCustomElement("dss-card-footer",CardFooter);registerCustomElement("dss-card-form",CardForm);registerCustomElement("dss-card-header",CardHeader);registerCustomElement("dss-card-highlights-item",CardHighlightsItem);registerCustomElement("dss-card-highlights",CardHighlights);registerCustomElement("dss-card-image",CardImage);registerCustomElement("dss-card-info-item",CardInfoItem);registerCustomElement("dss-card-info",CardInfo);registerCustomElement("dss-card-menu",CardMenu);registerCustomElement("dss-card-subtitle",CardSubitle);registerCustomElement("dss-card-tags",CardTags);registerCustomElement("dss-card-title",CardTitle);registerCustomElement("dss-date-picker",DatePicker);registerCustomElement("dss-dropdownlist",DropDownList);registerCustomElement("dss-input-field",InputField);registerCustomElement("dss-table",Table);registerCustomElement("dss-switch",Switch);const preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:{order:["Introducció","Versions","Foundations","Components","Collections","Discontinued"]}}}};export{preview as default};
