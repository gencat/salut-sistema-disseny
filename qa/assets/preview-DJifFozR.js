import{g as getCustomElementSuffix}from"./custom-element-scope-Dp4Dg8bo.js";import{r as r$1,a as r$2,i as i$2}from"./lit-element-DhY7bShc.js";import{x,E,T,B}from"./lit-html-B2eaWknC.js";import{n}from"./property-DnLABHHV.js";import{r as resetStyles}from"./reset.style-B0CQ8619.js";import{b as booleanType,s as selectedType}from"./property-types-CkH-zh1n.js";import{i as iconStyles}from"./icon.style-DPTab5RN.js";import{e as e$1,a as e$2,i as i$1,t}from"./class-map-BDeD7Kfm.js";import{A as Accordion}from"./accordion-DwsxMB2w.js";import{i,s,u as u$1}from"./static-B9bHPl91.js";import{A as ActionMenu}from"./action-menu-DOlW1ieP.js";import{A as Alert}from"./alert-DzPjPEry.js";import{A as Avatar}from"./avatar-qmcOoFp0.js";import{b as badgeStates,B as Badge}from"./badge-BRGiDstK.js";import{B as Breadcrumb}from"./breadcrumb-CiKTn8PY.js";import{B as ButtonLink}from"./button-link-DkjJh6Te.js";import{b as buttonStyles,B as Button}from"./button-CiWOLpoD.js";import{n as n$1}from"./when-BR7zwNJC.js";import{p,v,r as r$3,M,m}from"./directive-helpers-B8EPEUEV.js";import{s as scrollStyles,o as o$1,i as inputStyles,D as Datepicker_}from"./datepicker-CtXUBE37.js";import{c as createPopper}from"./popper-CMBiYTiD.js";import{o as o$2,S as Skeleton}from"./skeleton-XZvRwkjn.js";import{T as Toast}from"./toast-DQHJMGON.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(d){return n({...d,state:!0,attribute:!1})}function registerCustomElement(d,a){const l=getCustomElementSuffix(),_=`${d}${l}`;customElements.define(_,a)}const template$t=d=>x`

  ${d.fontLoaded?x`
      <i
        class=${e$1({"dss-icon":!0,"dss-icon--fill":d.fill,[`dss-icon--${d.size}`]:!!d.size})}
        aria-hidden="true"
        translate="no"
      >
        ${d.icon}
      </i>
    `:x`
      <span
        class=${e$1({"dss-icon-ghost":!0,[`dss-icon-ghost--${d.size}`]:!!d.size})}>
      </span>
    `}
`;var __defProp$16=Object.defineProperty,__decorateClass$16=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$16(a,l,h),h};class Icon extends r$1{constructor(){super(...arguments),this.size="md",this.icon="",this.fill=!1,this.fontLoaded=!1}static get styles(){return[r$2(resetStyles),r$2(iconStyles)]}firstUpdated(){document.fonts.load('1em "Material Symbols Rounded"').then(()=>{this.fontLoaded=!0})}render(){return template$t(this)}}__decorateClass$16([n({type:String})],Icon.prototype,"size");__decorateClass$16([n({type:String})],Icon.prototype,"icon");__decorateClass$16([n(booleanType)],Icon.prototype,"fill");__decorateClass$16([r()],Icon.prototype,"fontLoaded");const styles$o=".dss-action-menu-item{display:flex;align-items:center;padding:var(--dss-spacing-sm) var(--dss-spacing-md);gap:var(--dss-spacing-xs);background-color:var(--color-white);transition:all .3s ease-in-out;color:var(--color-neutral-900);cursor:pointer}.dss-action-menu-item:focus-visible{outline:none;box-shadow:inset 0 0 0 var(--dss-border-width-lg) var(--color-blue-200)}.dss-action-menu-item:not(.dss-action-menu-item--disabled):hover{background-color:var(--color-primary-100)}.dss-action-menu-item:not(.dss-action-menu-item--disabled):active,.dss-action-menu-item:not(.dss-action-menu-item--disabled).dss-action-menu-item--selected{background-color:var(--color-primary-50)}.dss-action-menu-item.dss-action-menu-item--first{border-top-left-radius:var(--dss-radius-sm);border-top-right-radius:var(--dss-radius-sm)}.dss-action-menu-item.dss-action-menu-item--last{border-bottom-left-radius:var(--dss-radius-sm);border-bottom-right-radius:var(--dss-radius-sm)}.dss-action-menu-item .dss-icon{color:var(--color-neutral-900)}.dss-action-menu-item--error:not(.dss-action-menu-item--disabled){color:var(--color-red-500)}.dss-action-menu-item--error:not(.dss-action-menu-item--disabled):hover{background-color:var(--color-red-50)}.dss-action-menu-item--error:not(.dss-action-menu-item--disabled):active{background-color:var(--color-red-100)}.dss-action-menu-item--error:not(.dss-action-menu-item--disabled).dss-action-menu-item--selected{background-color:var(--color-primary-50)}.dss-action-menu-item--error:not(.dss-action-menu-item--disabled) .dss-action-menu-item-label,.dss-action-menu-item--error:not(.dss-action-menu-item--disabled) .dss-icon{color:var(--color-red-500)}.dss-action-menu-item-label{flex:1;font-size:16px;line-height:24px;font-weight:var(--font-regular);color:var(--color-neutral-900);min-width:92px}.dss-action-menu-item--disabled{color:var(--color-neutral-500);background-color:var(--color-neutral-50);cursor:not-allowed}.dss-action-menu-item--disabled .dss-action-menu-item-label{color:var(--color-neutral-500)}",dssIcon$t=i`dss-icon${s(getCustomElementSuffix())}`,dssIconButton$e=i`dss-icon-button${s(getCustomElementSuffix())}`,dssNotificationBadge$3=i`dss-notification-badge${s(getCustomElementSuffix())}`,actionMenuItemTemplate=d=>u$1`
  <li
    class=${e$1({"dss-action-menu-item":!0,"dss-action-menu-item--selected":!!d._selected,"dss-action-menu-item--disabled":!!d._disabled,"dss-action-menu-item--first":!!d._first,"dss-action-menu-item--last":!!d._last,[`dss-action-menu-item--${d._state}`]:!!d._state})}
    tabindex="${d._disabled?-1:0}"
    role="menuitem"
    aria-disabled=${d._disabled?"true":"false"}
    @click=${d._handleItemClick}
    @keydown=${d._handleKeydown}
  >
    ${d._leftIcon?u$1`<${dssIcon$t} size="md" icon="${d._leftIcon}" ?fill="${d.leftIconFill}"></${dssIcon$t}>`:null}
    <p class="dss-action-menu-item-label">${d._label}</p>
    ${!d._selected&&d._notifications>0?u$1`
          <${dssNotificationBadge$3}
            state="${d._notificationsState}"
            value="${d._notifications}"
          ></${dssNotificationBadge$3}>
        `:null}
    ${d._rightIcon?u$1`<${dssIcon$t} size="md" icon="${d._rightIcon}" ?fill="${d.rightIconFill}"></${dssIcon$t}>`:null}
    ${d._actionIcon?u$1`
          <${dssIconButton$e}
            icon="${d._actionIcon}"
            variant="${d._actionState}"
            @click="${d._handleAction}"
            ?disabled=${d._disabled}
          ></${dssIconButton$e}>
        `:null}
    ${d._hasNestedMenu?u$1`
          <${dssIcon$t} size="md" icon="chevron_right"></${dssIcon$t}>
          <slot></slot>
        `:null}
  </li>
`;var __defProp$15=Object.defineProperty,__getOwnPropDesc$A=Object.getOwnPropertyDescriptor,__decorateClass$15=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$A(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$15(a,l,h),h};class ActionMenuItem extends r$1{constructor(){super(...arguments),this.leftIconFill=!1,this.rightIconFill=!1,this._state="primary",this._label="Label",this._leftIcon=void 0,this._rightIcon=void 0,this._actionIcon=void 0,this._actionState="primary",this._notifications=0,this._notificationsState="error",this._selected=!1,this._disabled=!1,this._hasNestedMenu=!1,this._nestedMenuPosition="top",this._first=!1,this._last=!1}static get styles(){return[r$2(resetStyles),r$2(styles$o)]}set state(a){const l=this._state;this._state=a==="error"?a:"primary",this.requestUpdate("state",l)}get state(){return this._state}set label(a){const l=this._label;this._label=a,this.requestUpdate("label",l)}get label(){return this._label}set leftIcon(a){const l=this._leftIcon;this._leftIcon=a,this.requestUpdate("leftIcon",l)}get leftIcon(){return this._leftIcon||""}set rightIcon(a){const l=this._rightIcon;this._rightIcon=a,this.requestUpdate("rightIcon",l)}get rightIcon(){return this._rightIcon||""}set actionIcon(a){const l=this._actionIcon;this._actionIcon=a,this.requestUpdate("actionIcon",l)}get actionIcon(){return this._actionIcon||""}set actionState(a){const l=this._actionState;this._actionState=a,this.requestUpdate("actionState",l)}get actionState(){return this._actionState}set notifications(a){const l=this._notifications;this._notifications=a,this.requestUpdate("notifications",l)}get notifications(){return this._notifications}set notificationsState(a){const l=this._notificationsState;this._notificationsState=a,this.requestUpdate("notificationsState",l)}get notificationsState(){return this._notificationsState}set selected(a){const l=this._selected;this._selected=a,this.requestUpdate("selected",l)}get selected(){return this._selected}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set hasNestedMenu(a){const l=this._hasNestedMenu;this._hasNestedMenu=a,this.requestUpdate("hasNestedMenu",l)}get hasNestedMenu(){return this._hasNestedMenu}set nestedMenuPosition(a){const l=this._nestedMenuPosition;this._nestedMenuPosition=a,this.requestUpdate("nestedMenuPosition",l)}get nestedMenuPosition(){return this._nestedMenuPosition}set first(a){const l=this._first;this._first=a,this.requestUpdate("first",l)}get first(){return this._first}set last(a){const l=this._last;this._last=a,this.requestUpdate("last",l)}get last(){return this._last}_handleItemClick(){this._hasNestedMenu?(this._selected=!0,this.requestUpdate()):(this.dispatchEvent(new CustomEvent("onClick",{bubbles:!1,composed:!1})),this.dispatchEvent(new CustomEvent("onClose",{bubbles:!0,composed:!0})))}_handleKeydown(a){const l=a.key;l==="Enter"||l==="Space"?this._handleItemClick():l==="Escape"&&this._selected&&this._unselectItem()}_handleAction(a){a.stopPropagation(),this.dispatchEvent(new CustomEvent("onAction",{detail:this._label}))}_clickOutside(){document.addEventListener("click",a=>{a.composedPath().includes(this)||this._selected&&this._unselectItem()})}_unselectItem(){this._selected=!1,this.requestUpdate()}async firstUpdated(){try{await this.updateComplete,this._clickOutside()}catch{console.error("ERROR OCURRED")}}render(){return actionMenuItemTemplate(this)}}__decorateClass$15([n({type:String})],ActionMenuItem.prototype,"state",1);__decorateClass$15([n({type:String})],ActionMenuItem.prototype,"label",1);__decorateClass$15([n({type:String})],ActionMenuItem.prototype,"leftIcon",1);__decorateClass$15([n(booleanType)],ActionMenuItem.prototype,"leftIconFill",2);__decorateClass$15([n(booleanType)],ActionMenuItem.prototype,"rightIconFill",2);__decorateClass$15([n({type:String})],ActionMenuItem.prototype,"rightIcon",1);__decorateClass$15([n({type:String})],ActionMenuItem.prototype,"actionIcon",1);__decorateClass$15([n({type:String})],ActionMenuItem.prototype,"actionState",1);__decorateClass$15([n({type:Number})],ActionMenuItem.prototype,"notifications",1);__decorateClass$15([n({type:String})],ActionMenuItem.prototype,"notificationsState",1);__decorateClass$15([n(booleanType)],ActionMenuItem.prototype,"selected",1);__decorateClass$15([n(booleanType)],ActionMenuItem.prototype,"disabled",1);__decorateClass$15([n(booleanType)],ActionMenuItem.prototype,"hasNestedMenu",1);__decorateClass$15([n({type:String})],ActionMenuItem.prototype,"nestedMenuPosition",1);__decorateClass$15([n(booleanType)],ActionMenuItem.prototype,"first",1);__decorateClass$15([n(booleanType)],ActionMenuItem.prototype,"last",1);function toDate(d){const a=Object.prototype.toString.call(d);return d instanceof Date||typeof d=="object"&&a==="[object Date]"?new d.constructor(+d):typeof d=="number"||a==="[object Number]"||typeof d=="string"||a==="[object String]"?new Date(d):new Date(NaN)}function endOfMonth(d){const a=toDate(d),l=a.getMonth();return a.setFullYear(a.getFullYear(),l+1,0),a.setHours(23,59,59,999),a}function eachDayOfInterval(d,a){const l=toDate(d.start),_=toDate(d.end);let h=+l>+_;const b=h?+l:+_,g=h?_:l;g.setHours(0,0,0,0);let f=1;const $=[];for(;+g<=b;)$.push(toDate(g)),g.setDate(g.getDate()+f),g.setHours(0,0,0,0);return h?$.reverse():$}function startOfMonth(d){const a=toDate(d);return a.setDate(1),a.setHours(0,0,0,0),a}function getDay(d){return toDate(d).getDay()}const iconButtonStyles=':host{display:inline-block;vertical-align:middle}.dss-icon-button{position:relative;background-color:transparent;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.3s all ease-in;width:24px;height:24px;font-size:var(--icon-size-md)}.dss-icon-button .dss-icon{z-index:1}.dss-icon-button:before{content:"";position:absolute;top:50%;left:50%;width:32px;height:32px;background-color:transparent;border-radius:100%;transform:translate(-50%,-50%);transition:.3s all ease-in;z-index:0}.dss-icon-button--sm{height:16px;width:16px;font-size:var(--icon-size-sm)}.dss-icon-button.dss-icon-button--sm:before{width:24px;height:24px}.dss-icon-button--lg{height:32px;width:32px;font-size:var(--icon-size-lg)}.dss-icon-button.dss-icon-button--lg:before{width:40px;height:40px}.dss-icon-button:disabled{cursor:not-allowed;color:var(--color-neutral-400)}.dss-icon-button[hidden]{display:none}.dss-icon-button:focus-visible:enabled{outline:0}.dss-icon-button:focus-visible:enabled:before{outline:var(--dss-spacing-xxs) solid var(--color-blue-200);transition:none}.dss-icon-button--neutral,.dss-icon-button--default{color:var(--color-neutral-700)}.dss-icon-button--neutral:hover:enabled:before,.dss-icon-button--default:hover:enabled:before{background-color:var(--color-neutral-100)}.dss-icon-button--neutral:active:enabled:before,.dss-icon-button--default:active:enabled:before{background-color:var(--color-neutral-50);transition:none}.dss-icon-button--white-default,.dss-icon-button--ghost{color:var(--color-white);transition:none}.dss-icon-button--white-default:hover:enabled:before,.dss-icon-button--ghost:hover:enabled:before{background-color:var(--color-white);opacity:.4}.dss-icon-button--white-default:active:enabled:before,.dss-icon-button--ghost:active:enabled:before{background-color:var(--color-white);opacity:.2}.dss-icon-button--ghost:disabled,.dss-icon-button--white-default:disabled{opacity:.7;color:var(--color-white)}.dss-icon-button--primary{color:var(--color-primary-700)}.dss-icon-button--primary:hover:enabled:before{background-color:var(--color-primary-100)}.dss-icon-button--primary:active:enabled:before{background-color:var(--color-primary-50);transition:none}.dss-icon-button--error{color:var(--color-red-700)}.dss-icon-button--error:hover:enabled:before{background-color:var(--color-red-100)}.dss-icon-button--error:active:enabled:before{background-color:var(--color-red-50)}.dss-icon-button--warning{color:var(--color-yellow-800)}.dss-icon-button--warning:hover:enabled:before{background-color:var(--color-yellow-100)}.dss-icon-button--warning:active:enabled:before{background-color:var(--color-yellow-50)}.dss-icon-button--success{color:var(--color-green-700)}.dss-icon-button--success:hover:enabled:before{background-color:var(--color-green-100)}.dss-icon-button--success:active:enabled:before{background-color:var(--color-green-50)}.dss-icon-button--info{color:var(--color-blue-700)}.dss-icon-button--info:hover:enabled:before{background-color:var(--color-blue-100)}.dss-icon-button--info:active:enabled:before{background-color:var(--color-blue-50)}.dss-icon-button--orange{color:var(--color-orange-700)}.dss-icon-button--orange:hover:enabled:before{background-color:var(--color-orange-100)}.dss-icon-button--orange:active:enabled:before{background-color:var(--color-orange-50)}.dss-icon-button.dss-icon-button--orange:focus-visible:enabled:before{outline:var(--dss-spacing-xxs) solid var(--color-orange-200)}.dss-icon-button--purple{color:var(--color-purple-500)}.dss-icon-button--purple:hover:enabled:before{background-color:var(--color-purple-100)}.dss-icon-button--purple:active:enabled:before{background-color:var(--color-purple-50)}.dss-icon-button.dss-icon-button--purple:focus-visible:enabled:before{outline:var(--dss-spacing-xxs) solid var(--color-purple-200)}.dss-icon-button dss-icon{z-index:100}',styles$n=':host{display:inline-block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.calendar__container{position:relative;background:#fff;box-shadow:0 4px 8px 3px #0000000d,0 1px 3px #0000001a;margin-bottom:var(--dss-spacing-xxs);border-radius:var(--dss-radius-sm)}.calendar__content{padding:var(--dss-spacing-md);border-radius:8px 8px 0 0}.calendar__content--buttons{border-top:var(--dss-border-width-sm) solid var(--color-neutral-100)}.calendar__content:last-child{border-radius:0 0 8px 8px;box-shadow:none}.calendar__header{display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-xs);margin-bottom:16px}.calendar__header-item{display:flex;justify-content:center;align-items:center;gap:var(--dss-spacing-xxs)}.calendar__header-item--click{font-weight:var(--font-semibold);color:var(--color-neutral-900);border-radius:var(--dss-radius-xs);padding:var(--dss-spacing-xxs);cursor:pointer}.calendar__header-item--click:hover{background-color:var(--color-primary-50)}.calendar__header-item--click:active{background-color:var(--color-primary-100)}.calendar__header-item--click:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.calendar__header-item--click:disabled{cursor:not-allowed;color:var(--color-neutral-500)}.calendar__header-buttons .dss-icon-button.dss-icon-button--lg,.calendar-selector--year .dss-icon-button.dss-icon-button--lg{width:32px;height:32px;box-sizing:border-box}.calendar__header-title{margin:auto;font-family:var(--font-family);font-style:normal;font-weight:600;font-size:16px;line-height:24px;color:#414141}.calendar__days-content{display:flex;flex-direction:column;gap:6px}.calendar__week-names,.calendar__days{list-style-type:none;padding:0;margin:0;gap:8px 6px;display:grid;grid-template-columns:repeat(7,1fr)}.calendar__week-names>li{text-align:center}.calendar__day-item{position:relative;height:32px;width:32px;display:flex;justify-content:center;align-items:center;background-color:transparent;border:none;z-index:999;border-radius:100%;cursor:pointer;font-size:14px;font-family:var(--font-family);font-weight:var(--font-semibold);line-height:24px;color:var(--color-neutral-900)}.calendar__day-item--weekend{font-weight:var(--font-regular)}.calendar__day-item--range:before{position:absolute;content:"";top:0;bottom:0;left:-6px;right:-6px;background:var(--color-primary-100);z-index:-2}.calendar__day-item--range:hover{color:#fff!important}.calendar__day-item--range:hover:after{position:absolute;content:"";width:100%;height:100%;border-radius:100%;background:var(--color-primary-500);color:#fff;z-index:-1}.calendar__day-item--active{color:#0073e6;box-shadow:inset 0 0 0 2px #0073e6}.calendar__day-item:hover:enabled,.calendar__day-item--selected{background:#0073e6!important;color:#fff}.calendar__day-item--selected-range-start,.calendar__day-item--selected-range-end{color:#fff}.calendar__day-item--selected-range-start:before,.calendar__day-item--selected-range-end:not(.calendar__day-item--selected-range-start):before{position:absolute;content:"";top:0;bottom:0;background:var(--color-primary-100);z-index:-2}.calendar__day-item--selected-range-start:after,.calendar__day-item--selected-range-end:not(.calendar__day-item--selected-range-start):after{position:absolute;content:"";width:100%;height:100%;border-radius:100%;background:var(--color-primary-500);color:#fff;z-index:-1}.calendar__day-item--selected-range-start:before{left:50%;right:-6px}.calendar__day-item--selected-range-end:not(.calendar__day-item--selected-range-start):before{left:-6px;right:50%}.calendar__day-item:not(.calendar__day-item--range-enabled):hover:enabled{transition:all .3s ease-in}.calendar__day-item.calendar__day-item--range-enabled:hover:enabled{transition:background .3s ease-in}.calendar__day-item:active:enabled{background:#308deb;transition:none}.calendar__day-item:disabled{pointer-events:none;opacity:.5}.calendar__time-container{display:flex;margin:auto;justify-content:center;align-items:center;gap:12px;font-weight:600;font-size:14px;line-height:24px;color:#1d1d1d}.calendar__time-content{display:flex;flex-direction:column;gap:8px;align-items:center}.calendar__buttons{display:flex;justify-content:center;align-items:center;gap:16px}.dss-datepicker__timepicker{position:relative;box-sizing:border-box;padding:var(--dss-spacing-xs) var(--dss-spacing-md) var(--dss-spacing-md)}.calendar-selector{position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;padding:var(--dss-spacing-md);background-color:var(--color-white);z-index:1000;border-radius:var(--dss-radius-sm)}.calendar-selector-title{font-size:16px;line-height:24px;font-weight:var(--font-semibold);margin-bottom:var(--dss-spacing-md)}.calendar-selector-title__actions{display:flex;justify-content:flex-end;align-items:center;gap:0}.calendar-selector-title--years{display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-xs)}.calendar-selector-options{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--dss-spacing-xs) var(--dss-spacing-xxs)}.calendar-selector-options--4col{grid-template-columns:repeat(4,1fr)}.calendar-selector-options__item{height:32px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;font-size:14px;font-weight:var(--font-semibold);text-transform:lowercase;text-align:center;color:var(--color-neutral-900);border-radius:var(--dss-radius-xs);overflow:hidden;cursor:pointer;padding:var(--dss-spacing-xxs) var(--dss-spacing-xs)}.calendar-selector-options__item--current{color:var(--color-primary-700)}.calendar-selector-options__item--selected{background-color:var(--color-primary-500);color:var(--color-white)}.calendar-selector-options__item:hover{background-color:var(--color-primary-600);color:var(--color-white)}.calendar-selector-options__item:active{background-color:var(--color-primary-400);color:var(--color-white)}.calendar-selector-options__item:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.calendar-selector-options__item:disabled{cursor:not-allowed;color:var(--color-neutral-500)}',dssTimepicker=i`dss-timepicker${s(getCustomElementSuffix())}`,dssIcon$s=i`dss-icon${s(getCustomElementSuffix())}`,dssIconButton$d=i`dss-icon-button${s(getCustomElementSuffix())}`,dssButton$5=i`dss-button${s(getCustomElementSuffix())}`,template$s=d=>{var a,l,_,h;return u$1`
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
                aria-label="selecciona el mes, actualment ${MONTH[d._currMonth]}"
              >
                ${MONTH[d._currMonth]}
                <${dssIcon$s} icon="expand_more" size="sm"></${dssIcon$s}>
              </div>
              <div
                class="calendar__header-item calendar__header-item--click calendar__header-year"
                tabindex="0"
                role="button"
                @keydown="${d._onHeaderYearKeyDown}"
                @click=${d._toggleYearSelector}
                aria-label="selecciona l'any, actualment ${d._currYear}"
              >
                ${d._currYear}
                <${dssIcon$s} icon="expand_more" size="sm"></${dssIcon$s}>
              </div>
            </div>
            <div class="calendar__header-item calendar__header-buttons">
              <${dssIconButton$d} variant="primary" icon="chevron_left" @click=${d._prev}
                ?disabled=${d._currMonth===((a=d._minDate)==null?void 0:a.getMonth())&&d._currYear===((l=d._minDate)==null?void 0:l.getFullYear())}>
              </${dssIconButton$d}>
              <${dssIconButton$d} variant="primary" icon="chevron_right" @click=${d._next}
                ?disabled=${d._currMonth===((_=d._minDate)==null?void 0:_.getMonth())&&d._currYear===((h=d._minDate)==null?void 0:h.getFullYear())}>
              </${dssIconButton$d}>
            </div>
          </header>

          <div class="calendar__days-content">
            <ul class="calendar__week-names">
              ${WEEK.map(b=>u$1`<li>${b}</li>`)}
            </ul>
            <div
              class="calendar__days"
              @mouseleave=${d._removeRangeOverDate}
            >
              ${d._days.map(b=>{const g={"calendar__day-item--active":d._isToday(b),"calendar__day-item--weekend":d._isWeekend(b),"calendar__day-item--selected":d._isSelected(b),"calendar__day-item--range":d._isBetweenRange(b)||d._isBetweenRangeOnMouseOver(b),"calendar__day-item--selected-range-start":d._isSelectedRangeStart(b),"calendar__day-item--selected-range-end":d._isSelectedRangeEnd(b)||d._isOverRangeDate(b),"calendar__day-item--range-enabled":d._range};return u$1`
                  <button
                    class="calendar__day-item ${e$1(g)}"
                    @click=${()=>d._selectDate(b)}
                    @mouseover=${()=>d._selectRangeOverDate(b)}
                    @focus=${()=>d._selectRangeOverDate(b)}
                    ?disabled=${d._isInactive(b)}
                  >
                    ${b||null}
                  </button>
                `})}
            </div>
          </div>
        </div>
        ${d._showMonthSelector?u$1`
              <div class="calendar-selector calendar-selector--month">
                <div class="calendar-selector-title">Selecciona un mes</div>
                <div class="calendar-selector-options">
                  ${d._generateMonthsOptions()}
                </div>
              </div>
            `:null}
        ${d._showYearSelector?u$1`
              <div class="calendar-selector calendar-selector--year">
                <div
                  class="calendar-selector-title calendar-selector-title--years"
                >
                  <div class="calendar-selector-title__years">
                    ${d._yearsRangeStart} - ${d._yearsRangeEnd}
                  </div>
                  <div class="calendar-selector-title__actions">
                    <${dssIconButton$d}
                      variant="primary" icon="chevron_left"
                      @click=${d._onYearRangeStepDown}
                    ></${dssIconButton$d}>
                    <${dssIconButton$d}
                      variant="primary" icon="chevron_right"
                      @click=${d._onYearRangeStepUp}
                    ></${dssIconButton$d}>
                  </div>
                </div>
                <div
                  class="calendar-selector-options calendar-selector-options--4col"
                >
                  ${d._generateYearsRangeOptions()}
                </div>
              </div>
            `:null}
        ${d._showTime?u$1`
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
                    maxlength="5"
                    .value="${d._timepickerValue}"
                  />
                </${dssTimepicker}>
              </div>
            `:null}
        ${d._showButtons||d._showTime?u$1`
              <div class="calendar__content calendar__content--buttons">
                <div class="calendar__buttons">
                  <${dssButton$5}
                    variant="secondary"
                    label=${d._leftLabel}
                    @click=${d._onCancel}
                  >
                  </${dssButton$5}>
                  <${dssButton$5}
                    variant="primary"
                    label=${d._rightLabel}

                    @click=${d._onAccept}
                    ?disabled=${d._validateSelectedDate()}
                  >
                  </${dssButton$5}>
                </div>
              </div>
            `:null}
      </div>

`};var __defProp$14=Object.defineProperty,__getOwnPropDesc$z=Object.getOwnPropertyDescriptor,__decorateClass$14=(d,a,l,_)=>{for(var h=__getOwnPropDesc$z(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$14(a,l,h),h};const MONTH=["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],WEEK=["dl","dm","dc","dj","dv","ds","dg"];class Calendar extends r$1{constructor(){super(),this._range=!1,this._isRangeStartFocused=!1,this._isRangeEndFocused=!1,this._rangeStartDate=null,this._rangeEndDate=null,this._rangeOverDate=null,this._timepicker="",this._minutesRange=1,this._minHour=0,this._maxHour=24,this._customTimeListOptions=[],this._timepickerLabel="",this._date=new Date,this._currYear=this._date.getFullYear(),this._currMonth=this._date.getMonth(),this._currHour=void 0,this._currMin=void 0,this._days=this._getDays(),this._selectedDate=null,this._showTime=!1,this._showButtons=!0,this._leftLabel="Cancel·lar",this._rightLabel="Seleccionar",this._minDate=null,this._maxDate=null,this._timepickerValue="",this._showMonthSelector=!1,this._showYearSelector=!1,this._yearsRangeStart=new Date().getFullYear()-18,this._yearsRangeEnd=new Date().getFullYear()+1,this._isTimeFormatValid=!1,this._focusFirstElementHandler=this._focusFirstElement.bind(this)}static get styles(){return[r$2(iconStyles),r$2(buttonStyles),r$2(iconButtonStyles),r$2(styles$n)]}set range(a){const l=this._range;this._range=a,this.requestUpdate("range",l)}get range(){return this._range}set isRangeStartFocused(a){const l=this._isRangeStartFocused;this._isRangeStartFocused=a,this.requestUpdate("isRangeStartFocused",l)}get isRangeStartFocused(){return this._isRangeStartFocused}set isRangeEndFocused(a){const l=this._isRangeEndFocused;this._isRangeEndFocused=a,this.requestUpdate("isRangeStartFocused",l)}get isRangeEndFocused(){return this._isRangeEndFocused}set selectedDate(a){const l=this._selectedDate;this._selectedDate=this._getDateString(a),this._updateCurrentDate(),this.requestUpdate("selectedDate",l)}get selectedDate(){var a;return((a=this._selectedDate)==null?void 0:a.toString())||""}set minDate(a){const l=this._minDate;this._minDate=this._getDateString(a),this.requestUpdate("minDate",l)}get minDate(){var a;return((a=this._minDate)==null?void 0:a.toString())||""}set maxDate(a){const l=this._maxDate;this._maxDate=this._getDateString(a),this.requestUpdate("maxDate",l)}get maxDate(){var a;return((a=this._maxDate)==null?void 0:a.toString())||""}set showTime(a){const l=this._showTime;this._showTime=a,this.requestUpdate("showTime",l)}get showTime(){return this._showTime}set showButtons(a){const l=this._showButtons;this._showButtons=a,this.requestUpdate("showButtons",l)}get showButtons(){return this._showButtons}set leftLabel(a){const l=this._leftLabel;this._leftLabel=a,this.requestUpdate("leftLabel",l)}get leftLabel(){return this._leftLabel}set rightLabel(a){const l=this._rightLabel;this._rightLabel=a,this.requestUpdate("rightLabel",l)}get rightLabel(){return this._rightLabel}set timepicker(a){const l=this._timepicker;this._timepicker=a,this.requestUpdate("timepicker",l)}get timepicker(){return this._timepicker}set minutesRange(a){const l=this._minutesRange;this._minutesRange=a,this.requestUpdate("minutesRange",l)}get minutesRange(){return this._minutesRange}set minHour(a){const l=this._minHour;this._minHour=a,this.requestUpdate("minHour",l)}get minHour(){return this._minHour}set maxHour(a){const l=this._maxHour;this._maxHour=a,this.requestUpdate("maxHour",l)}get maxHour(){return this._maxHour}set customTimeListOptions(a){const l=this._customTimeListOptions;this._customTimeListOptions=a,this.requestUpdate("customTimeListOptions",l)}get customTimeListOptions(){return this._customTimeListOptions}set timepickerLabel(a){const l=this._timepickerLabel;this._timepickerLabel=a,this.requestUpdate("timepickerLabel",l)}get timepickerLabel(){return this._timepickerLabel}set rangeStartDate(a){const l=this._rangeStartDate;this._rangeStartDate=this._getDateString(a),this.requestUpdate("rangeStartDate",l)}get rangeStartDate(){var a;return((a=this._rangeStartDate)==null?void 0:a.toString())||""}set rangeEndDate(a){const l=this._rangeEndDate;this._rangeEndDate=this._getDateString(a),this.requestUpdate("rangeEndDate",l)}get rangeEndDate(){var a;return((a=this._rangeEndDate)==null?void 0:a.toString())||""}connectedCallback(){super.connectedCallback(),this._range&&window.addEventListener("range-focus-calendar",this._focusFirstElementHandler)}disconnectedCallback(){super.disconnectedCallback(),this._range&&window.removeEventListener("range-focus-calendar",this._focusFirstElementHandler)}_focusFirstElement(){var l;const a=(l=this.shadowRoot)==null?void 0:l.querySelector("#firstCalendarElement");a==null||a.focus()}_prev(){this._currMonth-=1,this._update()}_next(){this._currMonth+=1,this._update()}_update(){(this._currMonth<0||this._currMonth>11)&&(this._date=new Date(this._currYear,this._currMonth,new Date().getDate()),this._currYear=this._date.getFullYear(),this._currMonth=this._date.getMonth()),this._days=this._getDays(),this.requestUpdate()}_getDays(){const a=[],l=startOfMonth(new Date(this._currYear,this._currMonth)),_=endOfMonth(new Date(this._currYear,this._currMonth)),h=eachDayOfInterval({start:l,end:_}),b=getDay(l);for(let g=b===0?6:b-1;g>0;g-=1)a.push(0);for(const g of h)a.push(g.getDate());return a}_isToday(a){const l=new Date;return a===l.getDate()&&this._currMonth===l.getMonth()&&this._currYear===l.getFullYear()}_isWeekend(a){const l=new Date(this._currYear,this._currMonth,a);return l.getDay()===0||l.getDay()===6}_isInactive(a){const l=new Date(this._currYear,this._currMonth,a);return a?this._minDate&&this._maxDate?!(l>=this._minDate&&l<=this._maxDate):this._minDate?!(l>=this._minDate):this._maxDate?!(l<=this._maxDate):!1:!0}_isSelected(a){var l,_,h,b,g,f;return this._range?a===((l=this._rangeStartDate)==null?void 0:l.getDate())&&this._currMonth===((_=this._rangeStartDate)==null?void 0:_.getMonth())&&this._currYear===((h=this._rangeStartDate)==null?void 0:h.getFullYear())||this._isSelectedRangeEnd(a):a===((b=this._selectedDate)==null?void 0:b.getDate())&&this._currMonth===((g=this._selectedDate)==null?void 0:g.getMonth())&&this._currYear===((f=this._selectedDate)==null?void 0:f.getFullYear())}_isSelectedRangeStart(a){var l,_,h,b,g,f,$,k;return this._range&&this._rangeStartDate&&this._rangeEndDate?!this._compareSelectedRangeDates()&&a===((l=this._rangeStartDate)==null?void 0:l.getDate())&&this._currMonth===((_=this._rangeStartDate)==null?void 0:_.getMonth())&&this._currYear===((h=this._rangeStartDate)==null?void 0:h.getFullYear()):this._range&&this._rangeStartDate&&!this._rangeEndDate?this._rangeOverDate!==null&&((b=this._rangeStartDate)==null?void 0:b.getTime())<((g=this._rangeOverDate)==null?void 0:g.getTime())&&a===((f=this._rangeStartDate)==null?void 0:f.getDate())&&this._currMonth===(($=this._rangeStartDate)==null?void 0:$.getMonth())&&this._currYear===((k=this._rangeStartDate)==null?void 0:k.getFullYear())&&(!this._isRangeStartFocused||this._showButtons)&&(this._isRangeEndFocused||this._rangeStartDate!==null):(this._range&&this._rangeStartDate===this._rangeEndDate,!1)}_isSelectedRangeEnd(a){var l,_,h;return!this._compareSelectedRangeDates()&&a===((l=this._rangeEndDate)==null?void 0:l.getDate())&&this._currMonth===((_=this._rangeEndDate)==null?void 0:_.getMonth())&&this._currYear===((h=this._rangeEndDate)==null?void 0:h.getFullYear())}_isOverRangeDate(a){var _,h,b;const l=a===((_=this._rangeOverDate)==null?void 0:_.getDate())&&this._currMonth===((h=this._rangeOverDate)==null?void 0:h.getMonth())&&this._currYear===((b=this._rangeOverDate)==null?void 0:b.getFullYear());return this._range&&this._rangeOverDate&&this._rangeStartDate&&!this._rangeEndDate?l&&this._rangeOverDate.getTime()>this._rangeStartDate.getTime()&&(!this._isRangeStartFocused||this._showButtons)&&(this._isRangeEndFocused||this._rangeStartDate!==null):!1}_compareSelectedRangeDates(){return this._rangeStartDate&&this._rangeEndDate?this._rangeStartDate.getFullYear()===this._rangeEndDate.getFullYear()&&this._rangeStartDate.getMonth()===this._rangeEndDate.getMonth()&&this._rangeStartDate.getDate()===this._rangeEndDate.getDate():!0}_isBetweenRange(a){const l=new Date(this._currYear,this._currMonth,a);return!this._isInactive(a)&&this._rangeStartDate&&this._rangeEndDate?l.getTime()>this._rangeStartDate.getTime()&&l.getTime()<this._rangeEndDate.getTime():!1}_isBetweenRangeOnMouseOver(a){const l=new Date(this._currYear,this._currMonth,a),_=this._isInactive(a);return!_&&this._rangeStartDate&&!this._rangeEndDate&&this._rangeOverDate?l.getTime()>this._rangeStartDate.getTime()&&l.getTime()<this._rangeOverDate.getTime()&&(!this._isRangeStartFocused||this._showButtons)&&(this._isRangeEndFocused||this._rangeStartDate!==null):!_&&this._rangeStartDate&&this._rangeEndDate&&this._rangeOverDate?l.getTime()>this._rangeStartDate.getTime()&&l.getTime()<this._rangeEndDate.getTime()&&l.getTime()<this._rangeOverDate.getTime()&&(!this._isRangeStartFocused||this._showButtons)&&(this._isRangeEndFocused||this._rangeStartDate!==null):!1}_selectDate(a){this._selectedDate=new Date(this._currYear,this._currMonth,a),this._range&&!this._showButtons&&(this._rangeStartDate&&this._rangeEndDate&&!this._isRangeEndFocused&&this._selectedDate.getTime()>=this._rangeEndDate.getTime()&&(this._rangeStartDate=null,this._rangeEndDate=null),this._isRangeStartFocused||!this._rangeStartDate||this._rangeStartDate.getTime()>this._selectedDate.getTime()?this._rangeStartDate=this._selectedDate:this._rangeEndDate=this._selectedDate),this._range&&this._showButtons&&(this._rangeStartDate&&this._rangeEndDate&&(this._rangeStartDate=null,this._rangeEndDate=null),!this._rangeStartDate||this._rangeStartDate.getTime()>this._selectedDate.getTime()?this._rangeStartDate=this._selectedDate:this._rangeEndDate=this._selectedDate),this.requestUpdate(),!this._showButtons&&(this._range?this._emitRange():this._emitDate())}_selectRangeOverDate(a){this._range&&(this._rangeOverDate=new Date(this._currYear,this._currMonth,a),this.requestUpdate())}_removeRangeOverDate(){this._rangeOverDate=null,this.requestUpdate()}_onCancel(){const a=new CustomEvent("onCancel",{bubbles:!0,composed:!0});this.dispatchEvent(a)}_onAccept(){this._range?this._emitRange():this._emitDate()}_emitDate(){var b,g,f,$;const a=(g=(b=this._selectedDate)==null?void 0:b.getDate())==null?void 0:g.toString().padStart(2,"0"),l=(this._currMonth+1).toString().padStart(2,"0");let _=`${a}/${l}/${this._currYear}`;if(this._showTime){const k=(f=this._currHour)==null?void 0:f.toString().padStart(2,"0"),D=($=this._currMin)==null?void 0:$.toString().padStart(2,"0");_+=` ${k}:${D}`}const h=new CustomEvent("onDateChange",{detail:_,bubbles:!0,composed:!0});this.dispatchEvent(h)}_emitRange(){var h,b,g,f,$,k,D,C,w,S,I,L;let a=null;if(((h=this._rangeStartDate)==null?void 0:h.getDate())!=null&&((b=this._rangeStartDate)==null?void 0:b.getMonth())!=null&&((g=this._rangeStartDate)==null?void 0:g.getFullYear())!=null){const y=(f=this._rangeStartDate.getDate())==null?void 0:f.toString().padStart(2,"0"),q=((($=this._rangeStartDate)==null?void 0:$.getMonth())+1).toString().padStart(2,"0");a=`${y}/${q}/${(k=this._rangeStartDate)==null?void 0:k.getFullYear()}`}let l=null;if(((D=this._rangeEndDate)==null?void 0:D.getDate())!=null&&((C=this._rangeEndDate)==null?void 0:C.getMonth())!=null&&((w=this._rangeEndDate)!=null&&w.getFullYear())){const y=(S=this._rangeEndDate.getDate())==null?void 0:S.toString().padStart(2,"0"),q=(((I=this._rangeEndDate)==null?void 0:I.getMonth())+1).toString().padStart(2,"0");l=`${y}/${q}/${(L=this._rangeEndDate)==null?void 0:L.getFullYear()}`}const _=new CustomEvent("onRangeChange",{detail:{rangeStart:a,rangeEnd:l},bubbles:!0,composed:!0});this.dispatchEvent(_)}_updateCurrentDate(){if(!this._selectedDate){this._currYear=this._date.getFullYear(),this._currMonth=this._date.getMonth();return}this._currMonth=this._selectedDate.getMonth(),this._currYear=this._selectedDate.getFullYear(),this._currHour=this._selectedDate.getHours(),this._currMin=this._selectedDate.getMinutes(),this._days=this._getDays(),this._currHour>=10?this._timepickerValue=`${this._currHour}:`:this._timepickerValue=`0${this._currHour}:`,this._currMin>=10?this._timepickerValue+=this._currMin:this._timepickerValue+=`0${this._currMin}`}_getDateString(a){const l=a==null?void 0:a.replace(/(\d+[/])(\d+[/])/,"$2$1"),_=this._showTime?14:8;return(l==null?void 0:l.length)>_?new Date(l):null}_onSelectTime(a){if(this._isTimeFormatValid=!1,a.detail.status==="VALID"){this._isTimeFormatValid=!0;const l=a.detail.value;this._currHour=+l.substring(0,2),this._currMin=+l.substring(3,5)}this.requestUpdate()}_toggleMonthSelector(){this._showMonthSelector=!0,this.requestUpdate()}_onMonthSelectorClick(a){const l=MONTH.indexOf(a);this._currMonth=l,this._update(),this._showMonthSelector=!1,this.requestUpdate()}_toggleYearSelector(){this._showYearSelector=!0,this.requestUpdate()}_onYearSelectorClick(a){this._currYear=a,this._update(),this._showYearSelector=!1,this.requestUpdate()}_generateYearsRangeOptions(){const a=[];for(let _=this._yearsRangeStart;_<=this._yearsRangeEnd;_+=1)a.push(_);return a.map(_=>{const h=C=>{C&&C.focus()},b=C=>{let w=0;const S=this.renderRoot.querySelectorAll(".calendar-selector-options__item--year"),I=S.length-1;C===S[0]?h(S[I]):(S.forEach((L,y)=>{L===C&&(w=y)}),h(S[w-1]))},g=C=>{let w=0;const S=this.renderRoot.querySelectorAll(".calendar-selector-options__item--year"),I=S.length-1;C===S[I]?h(S[0]):(S.forEach((L,y)=>{L===C&&(w=y)}),h(S[w+1]))},f=C=>{const w=C.currentTarget,S=C;let I=!1;switch(S.key){case"ArrowUp":case"ArrowLeft":b(w),I=!0;break;case"ArrowDown":case"ArrowRight":g(w),I=!0;break;case"Enter":const L=C.target,y=this.renderRoot.querySelector('.calendar-selector-options__item--year[tabindex="0"]');y==null||y.setAttribute("tabindex","-1"),C.target.setAttribute("tabindex","0"),L.click(),I=!0;break;case"Escape":this.renderRoot.querySelector(".calendar-selector-options__item--selected").click(),I=!0;break}I&&(C.stopPropagation(),C.preventDefault())},k=new Date().getFullYear(),D={"calendar-selector-options__item--current":_===k,"calendar-selector-options__item--selected":_===this._currYear};return u$1`
        <div
          class="calendar-selector-options__item calendar-selector-options__item--year ${e$1(D)}"
          tabindex="${_===this._currYear?0:-1}"
          role="button"
          @keydown=${f}
          @click=${()=>this._onYearSelectorClick(_)}
        >
          ${_}
        </div>
      `})}_generateMonthsOptions(){return MONTH.map(l=>{const _=D=>{D&&D.focus()},h=D=>{let C=0;const w=this.renderRoot.querySelectorAll(".calendar-selector-options__item--month"),S=w.length-1;D===w[0]?_(w[S]):(w.forEach((I,L)=>{I===D&&(C=L)}),_(w[C-1]))},b=D=>{let C=0;const w=this.renderRoot.querySelectorAll(".calendar-selector-options__item--month"),S=w.length-1;D===w[S]?_(w[0]):(w.forEach((I,L)=>{I===D&&(C=L)}),_(w[C+1]))},g=D=>{const C=D.currentTarget,w=D;let S=!1;switch(w.key){case"ArrowUp":case"ArrowLeft":h(C),S=!0;break;case"ArrowDown":case"ArrowRight":b(C),S=!0;break;case"Enter":const I=D.target,L=this.renderRoot.querySelector('.calendar-selector-options__item--month[tabindex="0"]');L==null||L.setAttribute("tabindex","-1"),D.target.setAttribute("tabindex","0"),I.click(),S=!0;break;case"Escape":this.renderRoot.querySelector(".calendar-selector-options__item--selected").click(),S=!0;break}S&&(D.stopPropagation(),D.preventDefault())},$=new Date().getMonth(),k={"calendar-selector-options__item--current":MONTH.indexOf(l)===$,"calendar-selector-options__item--selected":MONTH.indexOf(l)===this._currMonth};return u$1`
        <div
          class="calendar-selector-options__item calendar-selector-options__item--month ${e$1(k)}"
          tabindex="${MONTH.indexOf(l)===this._currMonth?0:-1}"
          role="button"
          @keydown=${g}
          @click=${()=>this._onMonthSelectorClick(l)}
        >
          ${l.length<=4?u$1`${l}`:u$1`${l.slice(0,3)}.`}
        </div>
      `})}_onYearRangeStepUp(){this._yearsRangeStart+=20,this._yearsRangeEnd+=20,this.requestUpdate()}_onYearRangeStepDown(){this._yearsRangeStart-=20,this._yearsRangeEnd-=20,this.requestUpdate()}_onHeaderMonthKeyDown(a){a.key==="Enter"&&(a.target.click(),setTimeout(()=>{this.renderRoot.querySelector('.calendar-selector-options__item--month[tabindex="0"]').focus()},50))}_onHeaderYearKeyDown(a){a.key==="Enter"&&(a.target.click(),setTimeout(()=>{this.renderRoot.querySelector('.calendar-selector-options__item--year[tabindex="0"]').focus()},50))}_validateSelectedDate(){return!!(!this._range&&!this._selectedDate||!this._range&&this._showTime&&!this._isTimeFormatValid||this._range&&(!this._rangeStartDate||!this._rangeEndDate))}_handleCalendarKeydown(a){(a==null?void 0:a.key)==="Escape"&&this._onCancel()}render(){return template$s(this)}}__decorateClass$14([n(booleanType)],Calendar.prototype,"range");__decorateClass$14([n(booleanType)],Calendar.prototype,"isRangeStartFocused");__decorateClass$14([n(booleanType)],Calendar.prototype,"isRangeEndFocused");__decorateClass$14([n({type:String})],Calendar.prototype,"selectedDate");__decorateClass$14([n({type:String})],Calendar.prototype,"minDate");__decorateClass$14([n({type:String})],Calendar.prototype,"maxDate");__decorateClass$14([n(booleanType)],Calendar.prototype,"showTime");__decorateClass$14([n(booleanType)],Calendar.prototype,"showButtons");__decorateClass$14([n({type:String})],Calendar.prototype,"leftLabel");__decorateClass$14([n({type:String})],Calendar.prototype,"rightLabel");__decorateClass$14([n({type:String})],Calendar.prototype,"timepicker");__decorateClass$14([n({type:Number})],Calendar.prototype,"minutesRange");__decorateClass$14([n({type:Number})],Calendar.prototype,"minHour");__decorateClass$14([n({type:Number})],Calendar.prototype,"maxHour");__decorateClass$14([n({type:Array})],Calendar.prototype,"customTimeListOptions");__decorateClass$14([n({type:String})],Calendar.prototype,"timepickerLabel");__decorateClass$14([n({type:String})],Calendar.prototype,"rangeStartDate");__decorateClass$14([n({type:String})],Calendar.prototype,"rangeEndDate");const chatMessageStyles=":host{display:block;width:100%}.chat-message{display:grid;grid-template-columns:40px 1fr 40px;gap:var(--dss-spacing-xs);padding:0 0 0 var(--dss-spacing-hg)}.chat-message-wrapper{display:grid;gap:var(--dss-spacing-xs)}.chat-message-wrapper__message{color:var(--color-neutral-900);display:grid;padding:var(--dss-spacing-sm);gap:var(--dss-spacing-xs);background-color:var(--color-white);border-radius:var(--dss-radius-sm)}.dss-chat-message--patient .chat-message-wrapper__message{border:var(--dss-border-width-sm) solid var(--color-neutral-200)}.dss-chat-message--doctor .chat-message-wrapper__message{background-color:var(--color-primary-50)}.message-username{font-size:12px;line-height:16px;font-weight:var(--font-semibold)}.message-text{font-size:14px;line-height:24px}.chat-message-wrapper__date{color:var(--color-neutral-500);font-size:12px;line-height:16px;padding:0 var(--dss-spacing-sm)}::slotted(div){display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;gap:var(--dss-spacing-md)}",dssAvatar=i`dss-avatar${s(getCustomElementSuffix())}`,template$r=d=>{const a={"dss-chat-message--patient":d.who==="patient","dss-chat-message--doctor":d.who==="doctor"},l=()=>u$1`
      <${dssAvatar}
        .size="${d.avatarSize}"
        .imageUrl="${d.avatarImageUrl}"
      >
      </${dssAvatar}>
    `,_=()=>u$1`
      <${dssAvatar}
        .size="${d.avatarSize}"
        .name="${d.avatarName}"
        .surname="${d.avatarSurname}"
      >
      </${dssAvatar}>
    `,h=()=>u$1` ${d.avatarImageUrl?u$1`${l()}`:u$1`${_()}`}`;return u$1`
    <div class="chat-message ${e$1(a)}">
      <div class="chat-message-avatar">
        ${d.who==="patient"?u$1`${h()}`:null}
      </div>

      <div class="chat-message-wrapper">
        <div class="chat-message-wrapper__message">
          <div class="message-username">${d.username}</div>
          <div class="message-text">${d.message}</div>
          <div class="message-attachments">
            <slot name="attachments"></slot>
          </div>
        </div>
        <div class="chat-message-wrapper__date">${d.date}</div>
      </div>

      <div class="chat-message-avatar chat-message-avatar--YYY">
        ${d.who==="doctor"?u$1`${h()}`:null}
      </div>
    </div>
  `};var __defProp$13=Object.defineProperty,__decorateClass$13=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$13(a,l,h),h};class ChatMessage extends r$1{constructor(){super(...arguments),this.username="",this.message="",this.date="",this.who="",this.avatarName="",this.avatarSurname="",this.avatarImageUrl="",this.avatarSize="md"}static get styles(){return[r$2(iconStyles),r$2(chatMessageStyles)]}render(){return template$r(this)}}__decorateClass$13([n({type:String})],ChatMessage.prototype,"username");__decorateClass$13([n({type:String})],ChatMessage.prototype,"message");__decorateClass$13([n({type:String})],ChatMessage.prototype,"date");__decorateClass$13([n({type:String})],ChatMessage.prototype,"who");__decorateClass$13([n({type:String})],ChatMessage.prototype,"avatarName");__decorateClass$13([n({type:String})],ChatMessage.prototype,"avatarSurname");__decorateClass$13([n({type:String})],ChatMessage.prototype,"avatarImageUrl");__decorateClass$13([n({type:String})],ChatMessage.prototype,"avatarSize");const checkboxStyles='.dss-checkbox-wrapper{display:flex;align-items:center}.dss-checkbox-wrapper--has-label{gap:var(--dss-spacing-xs)}.dss-checkbox,::slotted(input[type="checkbox"]){position:relative;border-radius:2px;width:20px!important;height:20px!important;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--dss-border-width-sm) solid var(--color-primary-500);cursor:pointer;transition:.3s all linear;flex-shrink:0;margin:var(--dss-spacing-tiny)}.dss-checkbox:focus-visible:enabled,::slotted(input[type="checkbox"]:focus-visible:enabled){outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-checkbox.dss-checkbox--validate,.dss-checkbox-wrapper--validate ::slotted(input[type="checkbox"]){border-color:var(--color-neutral-700)}.dss-checkbox:hover,::slotted(input[type="checkbox"]:hover){border-color:var(--color-primary-600);transition:.3s all linear}.dss-checkbox:hover.dss-checkbox--validate,.dss-checkbox-wrapper--validate ::slotted(input[type="checkbox"]:hover){border-color:var(--color-neutral-800)}.dss-checkbox:active,::slotted(input[type="checkbox"]:active){border-color:var(--color-primary-400);transition:.3s all linear}.dss-checkbox:active.dss-checkbox--validate,.dss-checkbox-wrapper--validate ::slotted(input[type="checkbox"]:active){border-color:var(--color-neutral-500)}.dss-checkbox:checked,::slotted(input[type="checkbox"]:checked){background-color:var(--color-primary-500)}.dss-checkbox:checked.dss-checkbox--validate,.dss-checkbox-wrapper--validate ::slotted(input[type="checkbox"]:checked){border-color:var(--color-green-500);background-color:var(--color-green-500)}.dss-checkbox:checked:before,::slotted(input[type="checkbox"]:checked):before{font-family:var(--font-icons)!important;content:"check";position:absolute;font-size:22px;color:var(--color-white);text-align:center;top:-4px;left:-2px;z-index:100}.dss-checkbox:checked:hover,::slotted(input[type="checkbox"]:checked:hover){border-color:var(--color-primary-600);background-color:var(--color-primary-600);transition:.3s all linear}.dss-checkbox:checked:hover.dss-checkbox--validate,.dss-checkbox-wrapper--validate ::slotted(input[type="checkbox"]:checked:hover){border-color:var(--color-green-600);background-color:var(--color-green-600)}.dss-checkbox:checked:active,::slotted(input[type="checkbox"]:checked:active){background-color:var(--color-primary-400);transition:.3s all linear}.dss-checkbox:checked:active.dss-checkbox--validate,.dss-checkbox-wrapper--validate ::slotted(input[type="checkbox"]:checked:active){border-color:var(--color-green-400);background-color:var(--color-green-400)}.dss-checkbox:indeterminate,::slotted(input[type="checkbox"]:indeterminate){background-color:var(--color-primary-500)}.dss-checkbox:indeterminate:before,::slotted(input[type="checkbox"]:indeterminate):before{font-family:var(--font-icons)!important;font-size:18px;content:"remove";color:var(--color-white);position:absolute;top:-1px}.dss-checkbox:indeterminate.dss-checkbox--validate,.dss-checkbox-wrapper--validate ::slotted(input[type="checkbox"]:indeterminate){background-color:var(--color-green-500)}.dss-checkbox:disabled,::slotted(input[type="checkbox"]:disabled){cursor:not-allowed;color:var(--color-neutral-900);border-color:var(--color-neutral-400)}.dss-checkbox:disabled:checked,::slotted(input[type="checkbox"]:checked:disabled),::slotted(input[type="checkbox"]:indeterminate:disabled){background-color:var(--color-neutral-400);border-color:var(--color-neutral-400)}.dss-checkbox:disabled:checked:before,::slotted(input[type="checkbox"]:checked:disabled):before,::slotted(input[type="checkbox"]:indeterminate:disabled):before{color:var(--color-neutral-900)}.dss-checkbox.dss-checkbox--validate:disabled:checked:hover,.dss-checkbox-wrapper--validate ::slotted(input[type="checkbox"]:disabled:checked:hover){background-color:var(--color-neutral-400)}.dss-checkbox-label,::slotted(label){cursor:pointer;font-size:14px;font-style:normal;font-weight:400;line-height:24px;color:var(--color-neutral-900)}.dss-checkbox-wrapper--disabled ::slotted(label){color:var(--color-neutral-500);cursor:not-allowed}',template$q=d=>{const a={"dss-checkbox-wrapper--checked":d._checked,"dss-checkbox-wrapper--disabled":d._disabled,"dss-checkbox-wrapper--has-label":!!d._label,"dss-checkbox-wrapper--validate":d.variant==="validation"};return u$1`
    <div class="dss-checkbox-wrapper ${e$1(a)}">
      <slot name="input"></slot>
      <slot name="label" @click="${d._handleClick}"></slot>
    </div>
  `};var __defProp$12=Object.defineProperty,__getOwnPropDesc$y=Object.getOwnPropertyDescriptor,__decorateClass$12=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$y(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$12(a,l,h),h};class Checkbox extends r$1{constructor(){super(...arguments),this.variant="default",this.indeterminate=!1,this._checked=!1,this._isCheckedPropDefined=!1,this._isFirstUpdate=!0,this._disabled=!1,this._readonly=!1,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)l.type==="attributes"&&(this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(iconStyles),r$2(checkboxStyles)]}get _input(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}get _label(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="label"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}set checked(a){const l=this._checked;this._checked=a,this._isCheckedPropDefined=!0,this._isFirstUpdate||this._dispatchChange(),this.requestUpdate("checked",l)}get checked(){return this._checked}disconnectedCallback(){this.observer.disconnect()}_checkInputAttributes(){var _,h,b;if(!this._isCheckedPropDefined){const g=(_=this._input)==null?void 0:_.getAttribute("checked");this._checked=g!==null}const a=(h=this._input)==null?void 0:h.getAttribute("disabled");this._disabled=a!==null;const l=(b=this._input)==null?void 0:b.getAttribute("readonly");this._readonly=l!==null}_handleClick(){!this._disabled&&!this._readonly&&this._input&&(this._checked=!this._checked,this._isCheckedPropDefined&&(this._input.checked=this._checked),this._dispatchChange())}_handleKeydown(a){(a.key==="Enter"||a.key===" ")&&this._handleClick()}_dispatchChange(){this.dispatchEvent(new CustomEvent("onChange",{detail:this._checked,bubbles:!0,composed:!0}))}async firstUpdated(){try{await this.updateComplete,this._input&&(this._checked&&(this._input.checked=!0),this.indeterminate&&(this._input.indeterminate=!0),this._checkInputAttributes(),this.observer.observe(this._input,this.observerConfig)),this._isFirstUpdate=!1,this.requestUpdate()}catch{console.error("ERROR OCURRED")}}willUpdate(a){const l=a.has("indeterminate");this._input&&l&&(this._input.indeterminate=this.indeterminate)}render(){return template$q(this)}}__decorateClass$12([n({type:String})],Checkbox.prototype,"variant",2);__decorateClass$12([n(booleanType)],Checkbox.prototype,"indeterminate",2);__decorateClass$12([n(booleanType)],Checkbox.prototype,"checked",1);const chipStyles=".dss-chip{display:inline-flex;align-items:center;box-sizing:border-box;padding:var(--dss-spacing-xxs) var(--dss-spacing-sm);font-size:14px;font-weight:var(--font-semibold);border-radius:var(--dss-radius-xl);border:var(--dss-border-width-sm) solid var(--color-blue-700);color:var(--color-blue-700);line-height:var(--line-24);background-color:var(--color-white);transition:.3s all ease-in;gap:var(--dss-spacing-xxs);cursor:default;width:-moz-fit-content;width:fit-content;max-width:240px;height:32px;overflow:hidden}.dss-chip__icon{font-size:16px}.dss-chip--has-icons:not(.dss-chip--sm):not(.dss-chip--only-icon){padding:var(--dss-spacing-xxs) var(--dss-spacing-xs) var(--dss-spacing-xxs) var(--dss-spacing-sm)}.dss-chip--disabled{cursor:not-allowed;outline:none;border-color:var(--color-neutral-500);color:var(--color-neutral-500);background-color:var(--color-white)}.dss-chip:not(.dss-chip--disabled):not(.dss-chip--not-clickable):hover{cursor:pointer}.dss-chip:not(.dss-chip--disabled):hover{box-shadow:none;background-color:var(--color-blue-50)}.dss-chip:not(.dss-chip--disabled):not(.dss-chip--not-clickable):active{background-color:var(--color-blue-100);transition:none}.dss-chip.dss-chip--sm{height:24px;font-size:12px;padding:var(--dss-spacing-xxs) var(--dss-spacing-xs);line-height:var(--line-16);gap:var(--dss-spacing-xxs)}.dss-chip.dss-chip--selected{box-shadow:none;background-color:var(--color-blue-100)}.dss-chip.dss-chip--selected.dss-chip--disabled{background-color:var(--color-white)}.dss-chip:not(.dss-chip--disabled):focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200);transition:none;box-shadow:none}.dss-chip__icon{flex-shrink:0}.dss-chip__label{flex-grow:1;flex-shrink:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dss-chip__delete{flex-shrink:0;display:flex;align-items:center}",dssIcon$r=i`dss-icon${s(getCustomElementSuffix())}`,dssIconButton$c=i`dss-icon-button${s(getCustomElementSuffix())}`,dssTooltip$3=i`dss-tooltip${s(getCustomElementSuffix())}`,template$p=d=>u$1`
  <div
    class=${e$1({"dss-chip":!0,"dss-chip--disabled":d.disabled,"dss-chip--not-clickable":d.disableSelect,"dss-chip--selected":d.selected,"dss-chip--has-icons":!!d.icon||d.hasDelete,"dss-chip--only-icon":!!(d.icon&&!d.label)&&!d.hasDelete,[`dss-chip--${d.size}`]:!!d.size})}
    role="button"
    aria-pressed=${d.selected}
    tabindex="0"
    @click=${d.handleToggle}
    >

    ${n$1(d.icon,()=>u$1`
      <div class="dss-chip__icon">
        <${dssIcon$r}
          icon="${d.icon}"
          size="${d.size==="sm"?"sm":"md"}">
        </${dssIcon$r}>
      </div>
    `,()=>E)}

    ${n$1(d.label,()=>u$1`
        <div class="dss-chip__label">
          ${d.label}
        </div>
      `,()=>E)}

    ${n$1(d.hasDelete,()=>u$1`
      <div class="dss-chip__delete">
        <${dssIconButton$c}
          variant="info"
          icon="cancel"
          size="${d.size==="sm"?"sm":"md"}"
          ?disabled=${d.disabled}
          @click=${d.handleDelete}>
          aria-label="Esborrar"
        </${dssIconButton$c}>
      </div>
      `,()=>E)}

    ${n$1(d._isLabelTruncated,()=>u$1`
        <${dssTooltip$3}>
          ${d.label}
        </${dssTooltip$3}>
      `,()=>E)}
  </div>
`;var __defProp$11=Object.defineProperty,__decorateClass$11=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$11(a,l,h),h};class Chip extends r$1{constructor(){super(...arguments),this.size="lg",this.icon="",this.label="",this.hasDelete=!1,this.disabled=!1,this.selected=!1,this.disableSelect=!1,this._isLabelTruncated=!1,this._isFirstUpdated=!0}static get styles(){return[r$2(resetStyles),r$2(chipStyles)]}handleToggle(){this.disableSelect||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new CustomEvent("onToggle",{detail:{text:this.label,selected:this.selected}})))}handleDelete(a){a.stopPropagation(),this.dispatchEvent(new CustomEvent("onDelete",{detail:{text:this.label}}))}async firstUpdated(){await this.updateComplete,this._checkLabelTruncated(),this._isFirstUpdated=!1}willUpdate(a){!this._isFirstUpdated&&a.has("label")&&this._checkLabelTruncated()}_checkLabelTruncated(){var l;const a=(l=this.shadowRoot)==null?void 0:l.querySelector(".dss-chip__label");a&&(this._isLabelTruncated=a.scrollWidth>a.offsetWidth,this.requestUpdate())}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeyDown)}onKeyDown(a){(a.code==="Enter"||a.code==="NumpadEnter"||a.code==="Space")&&this.handleToggle(),(a.code==="Backspace"&&this.hasDelete||a.code==="Delete"&&this.hasDelete)&&this.handleDelete(a)}render(){return template$p(this)}}__decorateClass$11([n({type:String})],Chip.prototype,"size");__decorateClass$11([n({type:String})],Chip.prototype,"icon");__decorateClass$11([n({type:String})],Chip.prototype,"label");__decorateClass$11([n(booleanType)],Chip.prototype,"hasDelete");__decorateClass$11([n(booleanType)],Chip.prototype,"disabled");__decorateClass$11([n(booleanType)],Chip.prototype,"selected");__decorateClass$11([n(booleanType)],Chip.prototype,"disableSelect");const styles$m=".dss-content-switcher{border-radius:var(--dss-radius-xl);background-color:var(--color-neutral-50);display:flex;gap:var(--dss-spacing-xxs);padding:var(--dss-spacing-xxs);width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.dss-content-switcher__item{box-sizing:border-box;border-radius:var(--dss-radius-xl);position:relative;transition:.3s all ease-in;width:-moz-fit-content;width:fit-content;display:flex}.dss-content-switcher__item.dss-content-switcher__item--sm{width:auto;min-width:48px}.dss-content-switcher__item.dss-content-switcher__item--sm label{padding:0 var(--dss-spacing-xs)}.dss-content-switcher__item.dss-content-switcher__item--md{width:auto;min-width:64px}.dss-content-switcher__item.dss-content-switcher__item--md label{padding:var(--dss-spacing-xxs) var(--dss-spacing-xs)}.dss-content-switcher__item.dss-content-switcher__item--lg{width:auto;min-width:80px}.dss-content-switcher__item.dss-content-switcher__item--lg label{padding:var(--dss-spacing-xs)}.dss-content-switcher__item input[type=radio]{height:100%;position:absolute;width:100%;opacity:0;cursor:pointer;border-radius:var(--dss-radius-xl)}.dss-content-switcher__item input[type=radio]:checked+label{background-color:var(--color-white);box-shadow:0 1px 2px #0000000d,0 1px 3px 1px #0000001a}.dss-content-switcher__item input[type=radio]:hover:not(:checked):not(:disabled)+label{color:var(--color-primary-600)}.dss-content-switcher__item input[type=radio]:active+label{color:var(--color-neutral-900)}.dss-content-switcher__item input[type=radio]:disabled{cursor:not-allowed}.dss-content-switcher__item input[type=radio]:disabled label{color:var(--color-neutral-500);cursor:not-allowed}.dss-content-switcher__item input[type=radio]:focus-visible:enabled+label{outline:var(--dss-border-width-lg) solid var(--color-blue-200);color:var(--color-neutral-700)}.dss-content-switcher__item label{box-sizing:border-box;font-size:var(--dss-font-size-xs);line-height:var(--line-16);font-weight:var(--font-semibold);border-radius:var(--dss-radius-xl);height:100%;width:100%;padding:var(--dss-spacing-xs);display:flex;justify-content:center;align-items:center;transition:.3s all ease-in;color:var(--color-neutral-700)}";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(d,a,l)=>{const _=new Map;for(let h=a;h<=l;h++)_.set(d[h],h);return _},c=e$2(class extends i$1{constructor(d){if(super(d),d.type!==t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(d,a,l){let _;l===void 0?l=a:a!==void 0&&(_=a);const h=[],b=[];let g=0;for(const f of d)h[g]=_?_(f,g):g,b[g]=l(f,g),g++;return{values:b,keys:h}}render(d,a,l){return this.dt(d,a,l).values}update(d,[a,l,_]){const h=p(d),{values:b,keys:g}=this.dt(a,l,_);if(!Array.isArray(h))return this.ut=g,b;const f=this.ut??(this.ut=[]),$=[];let k,D,C=0,w=h.length-1,S=0,I=b.length-1;for(;C<=w&&S<=I;)if(h[C]===null)C++;else if(h[w]===null)w--;else if(f[C]===g[S])$[S]=v(h[C],b[S]),C++,S++;else if(f[w]===g[I])$[I]=v(h[w],b[I]),w--,I--;else if(f[C]===g[I])$[I]=v(h[C],b[I]),r$3(d,$[I+1],h[C]),C++,I--;else if(f[w]===g[S])$[S]=v(h[w],b[S]),r$3(d,h[C],h[w]),w--,S++;else if(k===void 0&&(k=u(g,S,I),D=u(f,C,w)),k.has(f[C]))if(k.has(f[w])){const L=D.get(g[S]),y=L!==void 0?h[L]:null;if(y===null){const z=r$3(d,h[C]);v(z,b[S]),$[S]=z}else $[S]=v(y,b[S]),r$3(d,h[C],y),h[L]=null;S++}else M(h[w]),w--;else M(h[C]),C++;for(;S<=I;){const L=r$3(d,$[I+1]);v(L,b[S]),$[S++]=L}for(;C<=w;){const L=h[C++];L!==null&&M(L)}return this.ut=g,m(d,$),T}}),template$o=d=>x`
  <div class="dss-content-switcher" role="radiogroup" aria-orientation="horizontal">
    ${c(d.tabs,a=>a.label,(a,l)=>{var b,g;const _={"dss-elevation--sm":!!a.selected},h={"dss-content-switcher__item":!0,"dss-content-switcher__item--sm":d.size==="sm","dss-content-switcher__item--md":d.size==="md","dss-content-switcher__item--lg":d.size==="lg"};return x`
          <div class=${e$1(h)}>
            <input
              id="radio-${l}"
              type="radio"
              tabindex=${a.selected||a.label===((b=d.tabSelected)==null?void 0:b.label)?"0":"-1"}
              name="tab"
              ?checked=${a.selected||a.label===((g=d.tabSelected)==null?void 0:g.label)}
              ?disabled=${a.disabled}
              @change=${()=>d._onSelect(a)}
              aria-labelledby="label-${l}"
            />
            <label id="label-${l}" class=${e$1(_)}>${a.label}</label>
          </div>
        `})}
  </div>
`;var __defProp$10=Object.defineProperty,__decorateClass$10=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$10(a,l,h),h};class ContentSwitcher extends r$1{constructor(){super(...arguments),this.size="md",this.tabs=[]}connectedCallback(){super.connectedCallback(),this._initializeSelectedTab()}static get styles(){return[r$2(resetStyles),r$2(styles$m)]}_onSelect(a){this.tabSelected=a,this.tabs=this.tabs.map(l=>{var _;return{...l,selected:l.label===((_=this.tabSelected)==null?void 0:_.label)}}),this.dispatchEvent(new CustomEvent("onChange",{detail:this.tabSelected.label}))}_initializeSelectedTab(){this.tabSelected=this.tabs.find(a=>a.selected)||this.tabs.find(a=>!a.disabled)}render(){return template$o(this)}}__decorateClass$10([n({type:String})],ContentSwitcher.prototype,"size");__decorateClass$10([n({type:Array})],ContentSwitcher.prototype,"tabs");__decorateClass$10([r()],ContentSwitcher.prototype,"tabSelected");function moveFocusToTarget(d){d&&d.focus()}function moveFocusToPreviousTarget(d,a,l){let _=0;const h=d.querySelectorAll(l),b=h.length-1;a===h[0]?moveFocusToTarget(h[b]):(h.forEach((g,f)=>{g===a&&(_=f)}),moveFocusToTarget(h[_-1]))}function moveFocusToNextTarget(d,a,l){let _=0;const h=d.querySelectorAll(l),b=h.length-1;a===h[b]?moveFocusToTarget(h[0]):(h.forEach((g,f)=>{g===a&&(_=f)}),moveFocusToTarget(h[_+1]))}function onKeyboardEnter(d,a,l){const _=d.querySelector(`${l}[tabindex="0"]`);_==null||_.setAttribute("tabindex","-1"),a.setAttribute("tabindex","0"),a.click()}function compareNumbers(d,a,l){return d||(d=0),a||(a=0),l==="asc"?d-a:a-d}function compareDates(d,a,l){return d||(d=new Date("1900-01-01")),a||(a=new Date("1900-01-01")),l==="asc"?d.getTime()-a.getTime():a.getTime()-d.getTime()}function compareStrings(d,a,l){return d||(d=""),a||(a=""),l==="asc"?d.localeCompare(a):a.localeCompare(d)}function sort(d,a,l="asc",_){return[...d].sort((h,b)=>{switch(_){case"number":return compareNumbers(h[a],b[a],l);case"date":return compareDates(new Date(h[a]),new Date(b[a]),l);case"string":return compareStrings(h[a],b[a],l);default:return 0}})}const customTableStyles=":host{display:block;width:100%;height:100%}.dss-custom-table{display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}.dss-custom-table-header{position:relative;z-index:300;background-color:var(--color-white)}.dss-custom-table-header,.dss-custom-table-footer{flex:0 1 auto}.dss-custom-table-body{flex:1 1 auto;overflow:auto}.table-footer{display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-xs);padding:var(--dss-spacing-md);border-top:var(--dss-border-width-sm) solid var(--color-neutral-100);margin-top:var(--dss-spacing-md)}.table-footer-description{color:var(--color-neutral-900);font-size:16px;font-weight:var(--font-bold)}::slotted(.table-footer-actions){display:flex;justify-content:flex-end;align-items:center;gap:var(--dss-spacing-xs)}";var __defProp$$=Object.defineProperty,__getOwnPropDesc$x=Object.getOwnPropertyDescriptor,__decorateClass$$=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$x(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$$(a,l,h),h};const dssIcon$q=i`dss-icon${s(getCustomElementSuffix())}`,dssTableHeader=i`dss-table-header${s(getCustomElementSuffix())}`,dssTablePaginator=i`dss-table-pagination${s(getCustomElementSuffix())}`;class CustomTable extends r$1{constructor(){super(...arguments),this.internalSelectedCounter=0,this.showConfig=!1,this.configTableLabel="Configurar taula",this._hideHeader=!1,this._hidePaginator=!1,this._columnsHeader=[],this._data=void 0,this._paginatedData=void 0,this._currentSortColumn="",this._currentSortType="string",this._currentSortOrder="none",this._multiselect=!1,this._radioselect=!1,this._allRowsSelected=!1,this._selectedRowsLabel="files seleccionades",this._isFirstUpdate=!0,this._shouldUpdate=!1,this._table=void 0,this._currentRowsChecked=0,this._selectedRowsCounter=void 0,this._tableTitle="",this._filters=[],this._innerFilters=!1,this._expandTable=!1,this._expandLabel="Ampliar",this._collapseLabel="Reduir",this._filtersLabel="Selecció",this._cleanFiltersLabel="Netejar filtres",this._noFiltersLabel="No hi ha filtres seleccionats",this._isTableHeaderCreated=!1,this._hideHeaderTitleAndExpand=!1,this._disableSorting=!1,this._isPaginationStarted=!1,this._totalResults=void 0,this._currentIndex=1,this._pageSize=10,this._pageSizeOptions=[5,10,20],this._resultstext="Resultats",this._rowsperpagetext="Files per pàgina",this._paginationState=void 0,this._pageSizeOptionsDisabled=!1,this._hidePaginationResults=!1,this._hideFooter=!1,this.fixedColumnsBefore=void 0,this.fixedColumnsAfter=void 0,this.tableInfo=void 0}static get styles(){return[r$2(iconStyles),r$2(scrollStyles),r$2(checkboxStyles),r$2(customTableStyles)]}set hideHeader(a){const l=this._hideHeader;this._hideHeader=a,this.requestUpdate("hideHeader",l)}get hideHeader(){return this._hideHeader}set hidePaginator(a){const l=this._hidePaginator;this._hidePaginator=a,this.requestUpdate("hidePaginator",l)}get hidePaginator(){return this._hidePaginator}set columnsHeader(a){const l=this._columnsHeader;this._columnsHeader=a,this.requestUpdate("columnsHeader",l)}get columnsHeader(){return this._columnsHeader}set data(a){const l=this._data;this._data=a,this.requestUpdate("data",l)}get data(){return this._data||[]}set multiselect(a){const l=this._multiselect;this._multiselect=a,this.requestUpdate("multiselect",l)}get multiselect(){return this._multiselect}set radioselect(a){const l=this._radioselect;this._radioselect=a,this.requestUpdate("radioselect",l)}get radioselect(){return this._radioselect}set selectedRowsLabel(a){const l=this._selectedRowsLabel;this._selectedRowsLabel=a,this.requestUpdate("selectedRowsLabel",l)}get selectedRowsLabel(){return this._selectedRowsLabel}set selectedRowsCounter(a){const l=this._selectedRowsCounter;this._selectedRowsCounter=a,this.requestUpdate("selectedRowsCounter",l)}get selectedRowsCounter(){return this._selectedRowsCounter||0}set tableTitle(a){const l=this._tableTitle;this._tableTitle=a,this.requestUpdate("tableTitle",l)}get tableTitle(){return this._tableTitle}set filters(a){const l=this._filters;this._filters=a,this.requestUpdate("filters",l)}get filters(){return this._filters}set innerFilters(a){const l=this._innerFilters;this._innerFilters=a,this.requestUpdate("innerFilters",l)}get innerFilters(){return this._innerFilters}set expandTable(a){const l=this._expandTable;this._expandTable=a,this.requestUpdate("expandTable",l)}get expandTable(){return this._expandTable}set expandLabel(a){const l=this._expandLabel;this._expandLabel=a,this.requestUpdate("expandLabel",l)}get expandLabel(){return this._expandLabel}set collapseLabel(a){const l=this._collapseLabel;this._collapseLabel=a,this.requestUpdate("collapseLabel",l)}get collapseLabel(){return this._collapseLabel}set filtersLabel(a){const l=this._filtersLabel;this._filtersLabel=a,this.requestUpdate("filtersLabel",l)}get filtersLabel(){return this._filtersLabel}set cleanFiltersLabel(a){const l=this._cleanFiltersLabel;this._cleanFiltersLabel=a,this.requestUpdate("cleanFiltersLabel",l)}get cleanFiltersLabel(){return this._cleanFiltersLabel}set noFiltersLabel(a){const l=this._noFiltersLabel;this._noFiltersLabel=a,this.requestUpdate("noFiltersLabel",l)}get noFiltersLabel(){return this._noFiltersLabel}set hideHeaderTitleAndExpand(a){const l=this._hideHeaderTitleAndExpand;this._hideHeaderTitleAndExpand=a,this.requestUpdate("hideHeaderTitleAndExpand",l)}get hideHeaderTitleAndExpand(){return this._hideHeaderTitleAndExpand}set disableSorting(a){const l=this._disableSorting;this._disableSorting=a,this.requestUpdate("disableSorting",l)}get disableSorting(){return this._disableSorting}set totalResults(a){const l=this._totalResults;this._totalResults=a,this.requestUpdate("totalResults",l)}get totalResults(){return this._totalResults||0}set currentIndex(a){const l=this._currentIndex;this._currentIndex=a,this.requestUpdate("currentIndex",l)}get currentIndex(){return this._currentIndex}set pageSize(a){const l=this._pageSize;this._pageSize=a,this.requestUpdate("pageSize",l)}get pageSize(){return this._pageSize}set pageSizeOptions(a){const l=this._pageSizeOptions;this._pageSizeOptions=a,this.requestUpdate("pageSizeOptions",l)}get pageSizeOptions(){return this._pageSizeOptions}set resultsLabel(a){const l=this._resultstext;this._resultstext=a,this.requestUpdate("resultsLabel",l)}get resultsLabel(){return this._resultstext}set rowsPerPageLabel(a){const l=this._rowsperpagetext;this._rowsperpagetext=a,this.requestUpdate("rowsperpageLabel",l)}get rowsPerPageLabel(){return this._rowsperpagetext}set hidePaginationResults(a){const l=this._hidePaginationResults;this._hidePaginationResults=a,this.requestUpdate("hidePaginationResults",l)}get hidePaginationResults(){return this._hidePaginationResults}set pageSizeOptionsDisabled(a){const l=this._pageSizeOptionsDisabled;this._pageSizeOptionsDisabled=a,this.requestUpdate("pageSizeOptionsDisabled",l)}get pageSizeOptionsDisabled(){return this._pageSizeOptionsDisabled}set hideFooter(a){const l=this._hideFooter;this._hideFooter=a,this.requestUpdate("hideFooter",l)}get hideFooter(){return this._hideFooter}_getDataLength(){let a=0;return this._totalResults!==void 0&&this._totalResults>=0?a=this._totalResults:this._data&&(a=this._data.length),a}_sortBy(a,l,_,h,b){this._currentSortColumn=l,this._currentSortType=_,h?h==="none"?this._currentSortOrder="asc":h==="asc"?this._currentSortOrder="desc":h==="desc"&&(this._currentSortOrder="none"):this._currentSortOrder="asc",this._updateColumnSortState();let g;return this._currentSortOrder==="none"?g=a:g=sort(a,this._currentSortColumn,this._currentSortOrder,_),g&&!b&&this._dispatchSort(g),g}_updateColumnSortState(){this._columnsHeader.forEach(a=>{a.column===this._currentSortColumn?a.sortOrder=this._currentSortOrder:a.sortOrder&&(a.sortOrder="none")})}_onSelectAll(){if(this._table){this._allRowsSelected=!this._allRowsSelected;let a=0,l=0;const _=this._table.querySelectorAll(".dss-checkbox--multiselect");_.forEach(h=>{h.disabled?l+=1:(h.checked||(a+=1),h.checked=this._allRowsSelected)}),this._allRowsSelected?this._currentRowsChecked+=a:this._currentRowsChecked-=_.length-l,this._updateTableFooterRowsChecked(),this._dispatchMultiselect()}}_rowsCheckedListener(a){this._table&&a.tagName==="INPUT"&&a.type==="checkbox"&&a.classList.contains("dss-checkbox")&&!a.classList.contains("dss-checkbox--thead")&&(a.checked?this._currentRowsChecked+=1:this._currentRowsChecked-=1,this._updateTableFooterRowsChecked())}_updateTableFooterRowsChecked(){this._selectedRowsCounter===void 0&&(this.internalSelectedCounter=this._currentRowsChecked)}_updateTableHeader(){if(this._table){const a=this._table.querySelector(".dss-custom-table");let l=a.querySelector("thead");l||(l=document.createElement("thead"),l.classList.add("dss-thead"),a.insertBefore(l,a.firstChild)),B(this._generateTableHeaderHTML(),l)}}_generateTableHeaderHTML(){let a=!0,l=u$1``,_=u$1``;this._multiselect&&(l=u$1`
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
      `),this._radioselect&&(_=u$1`
        <th class="dss-th dss-th--select">
          <div class="dss-th-content dss-th-content--select"></div>
        </th>
      `);const h=this._columnsHeader.map(g=>{const f=()=>{g.sortType&&!this._disableSorting&&(this._paginatedData?this._sortBy(this._paginatedData,g.column,g.sortType,g==null?void 0:g.sortOrder):this._sortBy(this._data,g.column,g.sortType,g==null?void 0:g.sortOrder),this._updateTableHeaderIcons())},$=S=>{const I=S.currentTarget,L=S;let y=!1;switch(L.key){case"ArrowLeft":this._table&&moveFocusToPreviousTarget(this._table,I,".dss-th-content--clickable"),y=!0;break;case"ArrowRight":this._table&&moveFocusToNextTarget(this._table,I,".dss-th-content--clickable"),y=!0;break;case"Enter":{const z=S.target;this._table&&onKeyboardEnter(this._table,z,".dss-th-content--clickable"),y=!0;break}}y&&(S.stopPropagation(),S.preventDefault())},k={"dss-th--align-center":g.align==="center","dss-th--align-right":g.align==="right"};let D=!1;g.sortType&&!this._disableSorting&&(D=!0);const C={"dss-th-content--clickable":D},w=u$1`
        <th
          class="dss-th ${e$1(k)}"
          style="${o$1(g.style)}"
        >
          <div
            class="dss-th-content ${e$1(C)}"
            tabindex="${a?0:-1}"
            @click=${f}
            @keydown=${$}
          >
            <span class="dss-th-content__label"> ${g.label} </span>

            ${g.sortType&&!this._disableSorting?u$1`${this._getTableHeaderSortIconHTML(g.column)}`:null}
          </div>
        </th>
      `;return a=!1,w});return u$1` <tr class="dss-thead-row ${e$1({})}">
      ${l} ${_} ${h}
    </tr>`}_getTableHeaderSortIconHTML(a){let l="swap_vert";if(this._currentSortColumn===a)switch(this._currentSortOrder){case"asc":l="arrow_upward";break;case"desc":l="arrow_downward";break;default:l="swap_vert";break}return u$1`
			<${dssIcon$q} 
				class="dss-th-content__icon dss-icon--column-sort"
				column="${a}" 
				icon="${l}" 
				size="sm">
			</${dssIcon$q}>
    `}_updateTableHeaderIcons(){this._table&&this._table.querySelectorAll(".dss-th-content--clickable > .dss-icon--column-sort").forEach(l=>{const _=l.getAttribute("column");let h="swap_vert";if(this._currentSortColumn===_)switch(this._currentSortOrder){case"asc":h="arrow_upward";break;case"desc":h="arrow_downward";break;default:h="swap_vert";break}l.setAttribute("icon",h)})}_paginate(a){const l=a.startIndex,_=a.endIndex;if(this._data){const h=_<=this._data.length?_:this._data.length;this._paginatedData=[...this._data.slice(l-1,h)]}if(a.pageSize&&(this._pageSize=a.pageSize),this._currentSortColumn&&this._currentSortOrder){let h="";this._currentSortOrder==="asc"?h="none":this._currentSortOrder==="desc"?h="asc":h="dsc",this._paginatedData=this._sortBy(this._paginatedData,this._currentSortColumn,this._currentSortType,h,!0)}return this._paginatedData}_rowKeydownListener(){if(this._table){let a=!0;this._table.querySelectorAll(".dss-tbody-row").forEach(_=>{a?_.setAttribute("tabindex","0"):_.setAttribute("tabindex","-1"),a=!1,_.addEventListener("keydown",h=>{let b=!1;switch(h.key){case"ArrowUp":this._table&&moveFocusToPreviousTarget(this._table,_,".dss-tbody-row"),b=!0;break;case"ArrowDown":this._table&&moveFocusToNextTarget(this._table,_,".dss-tbody-row"),b=!0;break;case"Enter":if(this._multiselect){const g=_.querySelector(".dss-checkbox--multiselect");g&&(g.checked=!(g!=null&&g.checked),this.requestUpdate()),b=!0}if(this._radioselect){const g=_.querySelector(".dss-radio");g&&(g.checked=!(g!=null&&g.checked),this.requestUpdate()),b=!0}break}b&&(h.stopPropagation(),h.preventDefault())})})}}_dispatchChangeFilters(a){this._filters=a.detail;const l={detail:this._filters,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onUpdateFilters",l))}_dispatchExpandTable(a){this._expandTable=a.detail;const l={detail:this._expandTable,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onExpandTable",l))}_dispatchOpenFilters(){const a={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onOpenDrawer",a))}_dispatchPagination(a){var l;if(!this._totalResults||this._isPaginationStarted){const _={detail:a.detail,bubbles:!0,composed:!0};if(this._paginationState=_.detail,this._data&&!this._totalResults&&(_.detail.data=this._paginate(this._paginationState)),this._totalResults&&(this._shouldUpdate=!0),this._allRowsSelected){this._allRowsSelected=!1;const h=(l=this._table)==null?void 0:l.querySelector(".dss-checkbox--thead");h&&(h.checked=!1)}this.dispatchEvent(new CustomEvent("onPaginate",_))}this._isPaginationStarted=!0}_dispatchSort(a){const l={detail:{currentSortColumn:this._currentSortColumn,currentSortOrder:this._currentSortOrder,currentSortType:this._currentSortType,columnsHeader:this._columnsHeader,data:a},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onSort",l))}_dispatchMultiselect(){const a={detail:this._allRowsSelected,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onMultiselect",a))}_initTable(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="table"]'))||void 0;this._table=a==null?void 0:a.assignedElements()[0],this._table&&(this._columnsHeader.length&&!this._isTableHeaderCreated&&(this._updateTableHeader(),this._isTableHeaderCreated=!0),this._rowKeydownListener(),new MutationObserver(h=>{h.forEach(b=>{b.type==="childList"&&b.addedNodes.length>0&&this._rowKeydownListener()}),this._checkAllRowsSelected()}).observe(this._table,{childList:!0,subtree:!0}))}_checkAllRowsSelected(){var a;if(this._table){const l=this._table.querySelectorAll(".dss-checkbox--multiselect");let _=!0;if(l.length===0&&(_=!1),l.forEach(h=>{!h.checked&&!h.disabled&&(_=!1)}),this._allRowsSelected!==_){this._allRowsSelected=_;const h=(a=this._table)==null?void 0:a.querySelector(".dss-checkbox--thead");h.checked=this._allRowsSelected}}}_fixColumns(){if(this._table&&(this.fixedColumnsBefore||this.fixedColumnsAfter)){const a=this._table.querySelector("table"),l=a==null?void 0:a.querySelector("thead"),_=a==null?void 0:a.querySelector("tbody"),h=l==null?void 0:l.querySelectorAll("th"),b=_==null?void 0:_.querySelectorAll("tr");if(a==null||a.classList.add("dss-custom-table--max-content-width"),a==null||a.classList.add("dss-custom-table--sticky-columns-lit"),this.fixedColumnsBefore){const g=Array.from(h||[]).slice(0,this.fixedColumnsBefore);this._cellsToSticky(g,"left");for(const f of Array.from(b||[])){const $=f.querySelectorAll("td"),k=Array.from($).slice(0,this.fixedColumnsBefore);this._cellsToSticky(k,"left")}}if(this.fixedColumnsAfter){const g=Array.from(h||[]).slice(-this.fixedColumnsAfter).reverse();this._cellsToSticky(g,"right");for(const f of Array.from(b||[])){const $=f.querySelectorAll("td"),k=Array.from($).slice(-this.fixedColumnsAfter).reverse();this._cellsToSticky(k,"right")}}}}_cellsToSticky(a,l){for(const[_,h]of Array.from(a||[]).entries()){const b=h;b.classList.add("dss-sticky-column");let g=0;_>0&&(g=g+a[_-1].offsetWidth),l==="left"?b.style.left=`${g}px`:b.style.right=`${g}px`,_===a.length-1&&(l==="left"?b.classList.add("dss-sticky-column--before-last"):b.classList.add("dss-sticky-column--after-first"))}}async firstUpdated(){await this.updateComplete,this._isFirstUpdate&&!this._table&&(this._initTable(),this.addEventListener("change",a=>{this._rowsCheckedListener(a.target),this._checkAllRowsSelected()}),this._fixColumns()),this._isFirstUpdate=!1}willUpdate(a){const l=a.has("columnsHeader"),_=a.has("disableSorting"),h=a.has("data"),b=a.has("currentIndex");if(_&&this._updateTableHeader(),l&&(this._columnsHeader.forEach(g=>{g.sortOrder&&(this._currentSortColumn=g.column,this._currentSortOrder=g.sortOrder,g.sortType&&(this._currentSortType=g.sortType))}),!this._isTableHeaderCreated&&this._table&&(this._updateTableHeader(),this._isTableHeaderCreated=!0),this._fixColumns()),h&&!this._isFirstUpdate){if(this._totalResults){if(this.internalSelectedCounter>this._totalResults&&(this.internalSelectedCounter=this._totalResults),this._shouldUpdate){if(this._currentSortColumn&&this._currentSortType&&this._currentSortOrder&&this._currentSortOrder!=="none"){const g=sort(this._data,this._currentSortColumn,this._currentSortOrder,this._currentSortType);this._dispatchSort(g)}this._shouldUpdate=!1}}else{const g=this._getDataLength();if(this.internalSelectedCounter>g&&(this.internalSelectedCounter=g,this._currentRowsChecked=g),this._paginationState){this._paginationState.endIndex<this._pageSize&&(this._paginationState.endIndex=this._pageSize);const f={detail:this._paginationState,bubbles:!0,composed:!0};this._dispatchPagination(f)}}this._fixColumns()}b&&!this._isFirstUpdate&&(this._fixColumns(),this.requestUpdate())}render(){return u$1`
      <div class="dss-custom-table">
        <div class="dss-custom-table-header">
          ${this._hideHeader?null:u$1`
                <${dssTableHeader}
									?showConfig=${this.showConfig}
									.tableInfo=${this.tableInfo}
									.configTableLabel=${this.configTableLabel}
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

        ${this._hideFooter?null:u$1`
              <div class="dss-custom-table-footer">
                ${this._hidePaginator?null:u$1`
                      <${dssTablePaginator}
                        .length=${this._getDataLength()}
                        pagesize="${this._pageSize}"
                        .pageSizeOptions=${this._pageSizeOptions}
                        currentindex=${this._currentIndex}
                        .resultstext=${this._resultstext}
                        .rowsPerPageText=${this._rowsperpagetext}
                        ?pageSizeOptionsDisabled=${this._pageSizeOptionsDisabled}
                        ?hidePaginationResults=${this._hidePaginationResults}
                        @onChangePage=${this._dispatchPagination}
                      ></${dssTablePaginator}>
                    `}
                ${this._multiselect?u$1`
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
    `}}__decorateClass$$([n({type:Number})],CustomTable.prototype,"internalSelectedCounter",2);__decorateClass$$([n(booleanType)],CustomTable.prototype,"hideHeader",1);__decorateClass$$([n(booleanType)],CustomTable.prototype,"hidePaginator",1);__decorateClass$$([n({type:Array})],CustomTable.prototype,"columnsHeader",1);__decorateClass$$([n({type:Array})],CustomTable.prototype,"data",1);__decorateClass$$([n(booleanType)],CustomTable.prototype,"multiselect",1);__decorateClass$$([n(booleanType)],CustomTable.prototype,"radioselect",1);__decorateClass$$([n({type:String})],CustomTable.prototype,"selectedRowsLabel",1);__decorateClass$$([n({type:Number})],CustomTable.prototype,"selectedRowsCounter",1);__decorateClass$$([n(booleanType)],CustomTable.prototype,"showConfig",2);__decorateClass$$([n({type:String})],CustomTable.prototype,"configTableLabel",2);__decorateClass$$([n({type:String})],CustomTable.prototype,"tableTitle",1);__decorateClass$$([n({type:Array})],CustomTable.prototype,"filters",1);__decorateClass$$([n(booleanType)],CustomTable.prototype,"innerFilters",1);__decorateClass$$([n(booleanType)],CustomTable.prototype,"expandTable",1);__decorateClass$$([n({type:String})],CustomTable.prototype,"expandLabel",1);__decorateClass$$([n({type:String})],CustomTable.prototype,"collapseLabel",1);__decorateClass$$([n({type:String})],CustomTable.prototype,"filtersLabel",1);__decorateClass$$([n({type:String})],CustomTable.prototype,"cleanFiltersLabel",1);__decorateClass$$([n({type:String})],CustomTable.prototype,"noFiltersLabel",1);__decorateClass$$([n(booleanType)],CustomTable.prototype,"hideHeaderTitleAndExpand",1);__decorateClass$$([n(booleanType)],CustomTable.prototype,"disableSorting",1);__decorateClass$$([n({type:Number})],CustomTable.prototype,"totalResults",1);__decorateClass$$([n({type:Number})],CustomTable.prototype,"currentIndex",1);__decorateClass$$([n({type:Number})],CustomTable.prototype,"pageSize",1);__decorateClass$$([n({type:Array})],CustomTable.prototype,"pageSizeOptions",1);__decorateClass$$([n({type:String})],CustomTable.prototype,"resultsLabel",1);__decorateClass$$([n({type:String})],CustomTable.prototype,"rowsPerPageLabel",1);__decorateClass$$([n(booleanType)],CustomTable.prototype,"hidePaginationResults",1);__decorateClass$$([n(booleanType)],CustomTable.prototype,"pageSizeOptionsDisabled",1);__decorateClass$$([n(booleanType)],CustomTable.prototype,"hideFooter",1);__decorateClass$$([n({type:Number})],CustomTable.prototype,"fixedColumnsBefore",2);__decorateClass$$([n({type:Number})],CustomTable.prototype,"fixedColumnsAfter",2);__decorateClass$$([n({type:String})],CustomTable.prototype,"tableInfo",2);const dssCalendar=i`dss-calendar${s(getCustomElementSuffix())}`,dssIcon$p=i`dss-icon${s(getCustomElementSuffix())}`,template$n=d=>{var g,f,$,k,D,C,w,S,I,L,y,z,q,P,O,U,A,R,H,F,V,N,W,Y,K;const a={"dss-datepicker-range--sm":d._inputSize==="sm"},l={"dss-datepicker-range-help--invalid":d._invalid||!((g=d._inputRangeStart)!=null&&g.validity.valid)&&((f=d._inputRangeStart)==null?void 0:f.value)!==""||!(($=d._inputRangeEnd)!=null&&$.validity.valid)&&((k=d._inputRangeEnd)==null?void 0:k.value)!=="","dss-datepicker-range-help--disabled":((D=d._inputRangeStart)==null?void 0:D.disabled)&&((C=d._inputRangeEnd)==null?void 0:C.disabled)},_={"dss-input-group--focused":((w=d._inputRangeStart)==null?void 0:w.value)||d._isStartFocused||d._copyInputRangeStartPlaceholder,"dss-input-group--lg":d._inputSize==="md","dss-input-group--md":d._inputSize==="sm","dss-input-group--invalid":d._invalid||!((S=d._inputRangeStart)!=null&&S.validity.valid)&&((I=d._inputRangeStart)==null?void 0:I.value)!=="","dss-input-group--disabled":(L=d._inputRangeStart)==null?void 0:L.disabled,"dss-input-group--read-only":(y=d._inputRangeStart)==null?void 0:y.readOnly,"dss-input-group--required":(z=d._inputRangeStart)==null?void 0:z.required},h={"dss-input-group--focused":((q=d._inputRangeEnd)==null?void 0:q.value)||d._isEndFocused||d._copyInputRangeEndPlaceholder,"dss-input-group--lg":d._inputSize==="md","dss-input-group--md":d._inputSize==="sm","dss-input-group--invalid":d._invalid||!((P=d._inputRangeEnd)!=null&&P.validity.valid)&&((O=d._inputRangeEnd)==null?void 0:O.value)!=="","dss-input-group--disabled":(U=d._inputRangeEnd)==null?void 0:U.disabled,"dss-input-group--read-only":(A=d._inputRangeEnd)==null?void 0:A.readOnly,"dss-input-group--required":(R=d._inputRangeEnd)==null?void 0:R.required},b={"dss-calendar":!0,"dss-calendar--visible":d._showCalendar&&!((H=d._inputRangeStart)!=null&&H.readOnly)&&!((F=d._inputRangeEnd)!=null&&F.readOnly),"dss-calendar--disabled":((V=d._inputRangeStart)==null?void 0:V.disabled)&&((N=d._inputRangeEnd)==null?void 0:N.disabled),"dss-calendar--sm":d._inputSize==="sm"};return u$1`
      <div class="dss-datepicker-range ${e$1(a)}">
        <div class="dss-datepicker-range-inputs">
          <div
            class="dss-datepicker-range-inputs__start dss-input-group dss-input-group--has-icon ${e$1(_)}"
            role="combobox"
            aria-controls="datepicker-range-calendar"
            aria-expanded=${o$1(d._showCalendar)}
          >
            <${dssIcon$p} class="dss-input-icon" size="md" icon="${d._iconRangeStart}"></${dssIcon$p}>
            
            <slot
              name="input-range-start"
              @click=${d._handleRangeStartClick}
              @input=${d._handleRangeStartInput}
              @focusin=${d._handleRangeStartFocusIn}
              @keydown=${d._handleRangeKeydown}
            ></slot>
            <slot name="label-range-start"></slot>
          </div>

          <div
            class="dss-datepicker-range-inputs__end dss-input-group dss-input-group--has-icon ${e$1(h)}"
            role="combobox"
            aria-controls="datepicker-range-calendar"
            aria-expanded=${o$1(d._showCalendar)}
          >
            <${dssIcon$p} class="dss-input-icon" size="md" icon="${d._iconRangeEnd}"></${dssIcon$p}>
          
            <slot
              name="input-range-end"
              @click=${d._handleRangeEndClick}
              @input=${d._handleRangeEndInput}
              @focusin=${d._handleRangeEndFocusIn}
              @keydown=${d._handleRangeKeydown}
            ></slot>
            <slot name="label-range-end"></slot>
          </div>
        </div>

        ${d._helpText?u$1`
              <div class="dss-datepicker-range-help ${e$1(l)}">
                ${d._helpText}
              </div>
            `:null}
       
        <${dssCalendar}
          range
          .isRangeStartFocused=${d._isStartFocused}
          .isRangeEndFocused=${d._isEndFocused}
          role="listbox"
          aria-label="Datepicker Range Calendar"
          id="datepicker-range-calendar"
          class="${e$1(b)}"
          .selectedDate="${(W=d._inputRangeStart)==null?void 0:W.value}"
          .rangeStartDate="${(Y=d._inputRangeStart)==null?void 0:Y.value}"
          .rangeEndDate="${(K=d._inputRangeEnd)==null?void 0:K.value}"
          .showButtons=${d._calendarShowButtons}
          .leftLabel=${d._calendarLeftButtonLabel}
          .rightLabel=${d._calendarRightButtonLabel}
          .minDate=${d._minDate}
          .maxDate=${d._maxDate}
          @onRangeChange=${d._onCalendarChange}
          @onCancel=${d._onCalendarCancel}
        ></${dssCalendar}>
      </div>
    `},datepickerRangeStyles=":host{display:block;width:100%;min-width:257px}.dss-datepicker-range{font-family:var(--font-family)}.dss-datepicker-range-inputs{display:grid;grid-template-columns:1fr 1fr;gap:var(--dss-spacing-md)}.dss-datepicker-range-help{font-family:var(--font-family)}.dss-datepicker-range-help{font-family:inherit;font-size:12px;color:var(--color-neutral-700);padding:var(--dss-spacing-xxs) var(--dss-spacing-sm)}.dss-datepicker-range-help--disabled{color:var(--color-neutral-500)}.dss-datepicker-range-help--invalid{color:var(--color-red-500)}.dss-calendar{z-index:999;width:-moz-fit-content;width:fit-content;opacity:0;visibility:hidden}.dss-calendar--visible{opacity:1;visibility:visible}";var __defProp$_=Object.defineProperty,__getOwnPropDesc$w=Object.getOwnPropertyDescriptor,__decorateClass$_=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$w(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$_(a,l,h),h};class DatepickerRange extends r$1{constructor(){super(),this.dropdownPlacement="bottom-start",this.dropdownFixed=!1,this._iconRangeStart="calendar_month",this._iconRangeEnd="calendar_month",this._dateformatPlaceholder="DD/MM/AAAA",this._isStartFocused=!1,this._isEndFocused=!1,this._invalid=!1,this._showCalendar=!1,this._helpText="",this._minDate="",this._maxDate="",this._inputSize="md",this._calendarShowButtons=!1,this._calendarLeftButtonLabel="Cancel·lar",this._calendarRightButtonLabel="Seleccionar",this._copyInputRangeStartPlaceholder="",this._copyInputRangeEndPlaceholder="",this._isFirstInputsCheck=!0,this._popperInstance=null,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)l.type==="attributes"&&this._checkInputAttributes()},this.observer=new MutationObserver(this.callback),this.visibleObserver=new IntersectionObserver(([a])=>{a.isIntersecting||this._showCalendar&&this._closeCalendar()},{root:null,threshold:0}),this._handleOutsideClick=this._handleOutsideClick.bind(this),this._handleFocusOut=this._handleFocusOut.bind(this)}static get styles(){return[r$2(resetStyles),r$2(inputStyles),r$2(datepickerRangeStyles)]}get _inputRangeStart(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="input-range-start"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}get _inputRangeEnd(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="input-range-end"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}set iconRangeStart(a){const l=this._iconRangeStart;this._iconRangeStart=a,this.requestUpdate("iconRangeStart",l)}get iconRangeStart(){return this._iconRangeStart}set iconRangeEnd(a){const l=this._iconRangeEnd;this._iconRangeEnd=a,this.requestUpdate("iconRangeEnd",l)}get iconRangeEnd(){return this._iconRangeEnd}set minDate(a){const l=this._minDate;this._minDate=a,this.requestUpdate("minDate",l)}get minDate(){return this._minDate}set maxDate(a){const l=this._maxDate;this._maxDate=a,this.requestUpdate("maxDate",l)}get maxDate(){return this._maxDate}set invalid(a){const l=this._invalid;this._invalid=a,this.requestUpdate("invalid",l)}get invalid(){return this._invalid}set inputSize(a){const l=this._inputSize;a==="sm"?this._inputSize=a:this._inputSize="md",this.requestUpdate("inputSize",l)}get inputSize(){return this._inputSize}set helpText(a){const l=this._helpText;this._helpText=a,this.requestUpdate("helpText",l)}get helpText(){return this._helpText}set showButtons(a){const l=this._calendarShowButtons;this._calendarShowButtons=a,this.requestUpdate("calendarShowButtons",l)}get showButtons(){return this._calendarShowButtons}set calendarLeftButtonLabel(a){const l=this._calendarLeftButtonLabel;this._calendarLeftButtonLabel=a,this.requestUpdate("calendarLeftButtonLabel",l)}get calendarLeftButtonLabel(){return this._calendarLeftButtonLabel}set calendarRightButtonLabel(a){const l=this._calendarRightButtonLabel;this._calendarRightButtonLabel=a,this.requestUpdate("calendarRightButtonLabel",l)}get calendarRightButtonLabel(){return this._calendarRightButtonLabel}disconnectedCallback(){this._removeCalendarListener(),this.observer.disconnect(),this.visibleObserver.disconnect()}_addCalendarListener(){document.addEventListener("click",this._handleOutsideClick),this.addEventListener("focusout",this._handleFocusOut)}_removeCalendarListener(){document.removeEventListener("click",this._handleOutsideClick),this.removeEventListener("focusout",this._handleFocusOut)}_handleOutsideClick(a){this._checkClickOutside(a)}_handleFocusOut(a){this._checkFocusOut(a)}_checkInputAttributes(){this._isFirstInputsCheck&&this._inputRangeStart&&(this._copyInputRangeStartPlaceholder=this._inputRangeStart.placeholder),this._isFirstInputsCheck&&this._inputRangeEnd&&(this._copyInputRangeEndPlaceholder=this._inputRangeEnd.placeholder),this._isFirstInputsCheck=!1}_updatePlaceholders(){this._isStartFocused&&!this._copyInputRangeStartPlaceholder&&(this._inputRangeStart.setAttribute("placeholder",this._dateformatPlaceholder),this.requestUpdate()),this._isEndFocused&&!this._copyInputRangeEndPlaceholder&&(this._inputRangeEnd.setAttribute("placeholder",this._dateformatPlaceholder),this.requestUpdate())}_removePlaceholders(){this._copyInputRangeStartPlaceholder||this._inputRangeStart.removeAttribute("placeholder"),this._copyInputRangeEndPlaceholder||this._inputRangeEnd.removeAttribute("placeholder")}_handleRangeStartInput(a){if(a.target){const _=a.target.value.replace(/\D/g,"");this._inputRangeStart.value=this._formatDate(_)}}_handleRangeEndInput(a){if(a.target){const _=a.target.value.replace(/\D/g,"");this._inputRangeEnd.value=this._formatDate(_)}}_handleRangeStartClick(){this._showCalendar=!0,this._popperInstance.update(),this._addCalendarListener(),this.requestUpdate()}_handleRangeEndClick(){this._showCalendar=!0,this._popperInstance.update(),this._addCalendarListener(),this.requestUpdate()}_handleRangeStartFocusIn(){this._isStartFocused||(this._isStartFocused=!0,this._isEndFocused=!1,this._copyInputRangeEndPlaceholder||this._inputRangeEnd.removeAttribute("placeholder"),this._updatePlaceholders(),this.requestUpdate())}_handleRangeEndFocusIn(){this._isEndFocused||(this._isStartFocused=!1,this._copyInputRangeStartPlaceholder||this._inputRangeStart.removeAttribute("placeholder"),this._isEndFocused=!0,this._updatePlaceholders(),this.requestUpdate())}_handleRangeKeydown(a){(a==null?void 0:a.key)==="Tab"?this._showCalendar&&this._isStartFocused&&(a.preventDefault(),this.dispatchEvent(new CustomEvent("range-focus-calendar",{bubbles:!0,composed:!0}))):(a==null?void 0:a.key)==="Enter"||(a==null?void 0:a.key)===" "?(this._showCalendar=!0,this._popperInstance.update(),this._addCalendarListener(),this.requestUpdate()):(a==null?void 0:a.key)==="Escape"&&(this._showCalendar=!1,this._popperInstance.update(),this._removeCalendarListener(),this.requestUpdate())}_onCalendarChange(a){const l=a.detail;l.rangeStart&&(this._inputRangeStart.value=a.detail.rangeStart),l.rangeEnd?this._inputRangeEnd.value=a.detail.rangeEnd:this._inputRangeEnd.value="",this._inputRangeEnd.value||(this._inputRangeEnd.focus(),this._isStartFocused=!1,this._isEndFocused=!0),this._inputRangeStart.value&&this._inputRangeEnd.value&&(this._showCalendar=!1,this._isStartFocused=!1,this._isEndFocused=!1,this._removeCalendarListener()),this.requestUpdate()}_onCalendarCancel(){this._showCalendar=!1,this._removeCalendarListener(),this.requestUpdate()}_checkClickOutside(a){a.composedPath().includes(this)||this._showCalendar&&this._closeCalendar()}_checkFocusOut(a){const l=a.relatedTarget;l!==null&&l!==this&&l!==this._inputRangeStart&&l!==this._inputRangeEnd&&this._showCalendar&&this._closeCalendar()}_closeCalendar(){var a,l;this._removePlaceholders(),this._isStartFocused=!1,this._isEndFocused=!1,this._showCalendar=!1,(a=this._inputRangeStart)==null||a.blur(),(l=this._inputRangeEnd)==null||l.blur(),this._removeCalendarListener(),this.requestUpdate()}_formatDate(a){let l=a.substring(0,2),_=a.substring(2,4);const h=a.substring(4,8);return Number(l)>3&&(l=l==null?void 0:l.padStart(2,"0")),Number(_)>1&&(_=_==null?void 0:_.padStart(2,"0")),Number(l)>31&&(l="31"),Number(_)>12&&(_="12"),_==="02"&&Number(l)>28&&(h==null?void 0:h.length)===4&&(l=new Date(Number(h),1,29).getMonth()===1?"29":"28"),`${l}${_?`/${_}`:""}${h?`/${h}`:""}`}_createPopperCalendar(){var _,h;const a=(_=this.shadowRoot)==null?void 0:_.querySelector(".dss-datepicker-range-inputs__start"),l=(h=this.shadowRoot)==null?void 0:h.querySelector(".dss-calendar");a&&l&&(this._popperInstance=createPopper(a,l,{placement:this.dropdownPlacement,strategy:this.dropdownFixed?"fixed":"absolute",modifiers:[{name:"offset",options:{offset:[0,4]}}]}))}async firstUpdated(){try{await this.updateComplete,this._createPopperCalendar(),this._inputRangeStart&&this._inputRangeEnd&&(this._checkInputAttributes(),this.observer.observe(this._inputRangeStart,this.observerConfig),this.observer.observe(this._inputRangeEnd,this.observerConfig),this.visibleObserver.observe(this._inputRangeStart))}catch{console.error("ERROR OCURRED")}}render(){return template$n(this)}}__decorateClass$_([n({type:String})],DatepickerRange.prototype,"iconRangeStart",1);__decorateClass$_([n({type:String})],DatepickerRange.prototype,"iconRangeEnd",1);__decorateClass$_([n({type:String})],DatepickerRange.prototype,"minDate",1);__decorateClass$_([n({type:String})],DatepickerRange.prototype,"maxDate",1);__decorateClass$_([n(booleanType)],DatepickerRange.prototype,"invalid",1);__decorateClass$_([n({type:String})],DatepickerRange.prototype,"inputSize",1);__decorateClass$_([n({type:String})],DatepickerRange.prototype,"helpText",1);__decorateClass$_([n(booleanType)],DatepickerRange.prototype,"showButtons",1);__decorateClass$_([n({type:String})],DatepickerRange.prototype,"calendarLeftButtonLabel",1);__decorateClass$_([n({type:String})],DatepickerRange.prototype,"calendarRightButtonLabel",1);__decorateClass$_([n({type:String})],DatepickerRange.prototype,"dropdownPlacement",2);__decorateClass$_([n(booleanType)],DatepickerRange.prototype,"dropdownFixed",2);const decorativeIconStyles=":host{display:inline-block;vertical-align:middle}.dss-decorative-icon{height:24px;width:24px;min-width:24px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;background-color:var(--color-primary-50);color:var(--color-primary-500);border-radius:var(--dss-radius-xs);font-size:var(--icon-size-sm)}.dss-decorative-icon--info{background-color:var(--color-blue-50);color:var(--color-blue-500)}.dss-decorative-icon--success{background-color:var(--color-green-50);color:var(--color-green-500)}.dss-decorative-icon--error{background-color:var(--color-red-50);color:var(--color-red-500)}.dss-decorative-icon--disabled{background-color:var(--color-neutral-50);color:var(--color-neutral-500)}.dss-decorative-icon--md{height:32px;width:32px;min-width:32px;font-size:var(--icon-size-md);border-radius:var(--dss-radius-xs)}.dss-decorative-icon--lg{height:40px;width:40px;min-width:40px;font-size:var(--icon-size-lg);border-radius:var(--dss-radius-sm)}.dss-decorative-icon--xl{height:48px;width:48px;min-width:48px;font-size:var(--icon-size-xl);border-radius:var(--dss-radius-sm)}.dss-decorative-icon--sm.dss-decorative-icon{color:var(--color-primary-700)}.dss-decorative-icon--sm.dss-decorative-icon--info{color:var(--color-blue-700)}.dss-decorative-icon--sm.dss-decorative-icon--success{color:var(--color-green-700)}.dss-decorative-icon--sm.dss-decorative-icon--error{color:var(--color-red-700)}.dss-decorative-icon--sm.dss-decorative-icon--disabled{color:var(--color-neutral-700)}",dssIcon$o=i`dss-icon${s(getCustomElementSuffix())}`,template$m=d=>{const a={"dss-decorative-icon":!0,[`dss-decorative-icon--${d.size}`]:!!d.size,[`dss-decorative-icon--${d.state}`]:d.state!=="default","dss-decorative-icon--disabled":d.disabled};return u$1`
    <div class="${e$1(a)}" aria-hidden="true">
      <${dssIcon$o} icon="${d.icon}" size="${d.size}"></${dssIcon$o}>
    </div>
  `};var __defProp$Z=Object.defineProperty,__decorateClass$Z=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$Z(a,l,h),h};class DecorativeIcon extends r$1{constructor(){super(...arguments),this.icon=void 0,this.state="default",this.size="md",this.disabled=!1}static get styles(){return[r$2(resetStyles),r$2(decorativeIconStyles)]}render(){return template$m(this)}}__decorateClass$Z([n({type:String})],DecorativeIcon.prototype,"icon");__decorateClass$Z([n({type:String})],DecorativeIcon.prototype,"state");__decorateClass$Z([n({type:String})],DecorativeIcon.prototype,"size");__decorateClass$Z([n(booleanType)],DecorativeIcon.prototype,"disabled");const styles$l=".dss-divider{margin-top:var(--dss-spacing-xl);margin-bottom:var(--dss-spacing-xl);border-width:var(--dss-border-width-sm);border-style:solid;border-color:var(--color-neutral-200)}.dss-divider--bold{border-width:var(--dss-border-width-md)}";var __defProp$Y=Object.defineProperty,__decorateClass$Y=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$Y(a,l,h),h};class Divider extends r$1{constructor(){super(...arguments),this.size="sm"}static get styles(){return[r$2(resetStyles),r$2(styles$l)]}render(){const a={"dss-divider":!0,"dss-divider--bold":this.size==="md"};return u$1`<hr class=${e$1(a)} />`}}__decorateClass$Y([n({type:String})],Divider.prototype,"size");const drawerStyles=':host{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;visibility:hidden;opacity:0;display:flex;justify-content:flex-end;align-items:center;transition:opacity .25s;z-index:999}:host([open]){visibility:visible}:host(.show){opacity:1}:host(.hide){opacity:0}.drawer{box-sizing:border-box;width:-moz-fit-content;width:fit-content;width:45%;height:100%;overflow-y:auto;background:var(--color-white);visibility:hidden;transform:translate(100%);transition:transform .25s ease-in-out;display:flex;flex-direction:column}.drawer--filter{min-width:500px;max-width:500px}:host(.show) .drawer{visibility:visible;transform:none}.drawer-header{position:sticky;top:0;left:0;height:84px;background-color:var(--color-white);padding:var(--dss-spacing-lg);display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-md);border-bottom:var(--color-white) solid var(--dss-border-width-sm);transition:all .25s ease-in-out;z-index:900}.drawer-header--scrolled{border-bottom-color:var(--color-neutral-100);box-shadow:0 1px 3px 1px #0000001a,0 1px 2px #0000000d}.drawer--sm .drawer-header{height:62px;padding:var(--dss-spacing-md)}.drawer--lg .drawer-header{height:100px;padding:var(--dss-spacing-xl)}.drawer-header-title{font-size:24px;font-weight:var(--font-bold);line-height:30px}.drawer--sm .drawer-header-title{font-size:20px}.drawer-body{padding:0 var(--dss-spacing-lg);flex:1}.drawer--sm .drawer-body{padding:0 var(--dss-spacing-md)}.drawer--lg .drawer-body{padding:0 var(--dss-spacing-xl)}.drawer-footer{position:sticky;bottom:0;left:0;height:80px;min-height:80px;background-color:var(--color-white);padding:var(--dss-spacing-lg);display:flex;justify-content:flex-end;gap:var(--dss-spacing-md);align-items:center;border-top:var(--color-white) solid var(--dss-border-width-sm);transition:border-top-color .25s ease-in-out;z-index:900}.drawer-footer--scrolled{border-top-color:var(--color-neutral-100)}.drawer--sm .drawer-footer{height:56px;min-height:56px;padding:var(--dss-spacing-md)}.drawer--lg .drawer-footer{height:104px;min-height:104px;padding:var(--dss-spacing-xl)}::slotted(div[slot="drawer-footer"]){display:flex;justify-content:flex-end;align-items:center;gap:var(--dss-spacing-md)}@media screen and (min-width: 1440px) and (max-width: 1919px){.drawer{width:50%}}@media only screen and (min-width: 1024px) and (max-width: 1439px){.drawer{width:60%}}@media only screen and (max-width: 1023px){.drawer{width:80%}}',dssIconButton$b=i`dss-icon-button${s(getCustomElementSuffix())}`,template$l=d=>{const a={"drawer--sm":d._size==="sm","drawer--md":d._size==="md","drawer--lg":d._size==="lg","drawer--filter":d.variant==="filter"};return u$1`
    <div class="drawer ${e$1(a)}">
      <div class="drawer-header">
        <div class="drawer-header-title">${d._title}</div>
        <${dssIconButton$b}
          variant="default"
          icon="close"
          size=${d._size}
          @click=${d._closeDrawer}
        >
        </${dssIconButton$b}>
      </div>
      <div class="drawer-body">
        <slot name="drawer-body"></slot>
      </div>
      <div class="drawer-footer">
        <slot name="drawer-footer"></slot>
      </div>
    </div>
  `};var __defProp$X=Object.defineProperty,__getOwnPropDesc$v=Object.getOwnPropertyDescriptor,__decorateClass$X=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$v(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$X(a,l,h),h};const ANIMATION_DURATION$1=250;class Drawer extends r$1{constructor(){super(),this.variant="default",this._open=!1,this._title="",this._size="md",this._drawerHeader=null,this._drawerFooter=null,this._handleKeydown=this._handleKeydown.bind(this),this._handleOutsideClick=this._handleOutsideClick.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(iconButtonStyles),r$2(drawerStyles)]}set open(a){const l=this._open;this._open=a,this.requestUpdate("open",l)}set title(a){const l=this._title;this._title=a,this.requestUpdate("who",l)}set size(a){const l=this._size;this._size=a,this.requestUpdate("size",l)}get open(){return this._open}get title(){return this._title}get size(){return this._size}_showDrawer(){this.classList.add("show"),this.classList.remove("hide"),setTimeout(()=>{this.classList.add("show"),this.style.visibility="visible"},0),document.body.style.overflow="hidden"}_hideDrawer(){this.classList.add("hide"),this.classList.remove("show"),setTimeout(()=>{this.classList.remove("hide"),this.style.visibility="hidden"},ANIMATION_DURATION$1),document.body.style.overflow=""}_closeDrawer(){this.open=!1,this._hideDrawer(),this.requestUpdate();const a=new Event("onDrawerClosed");this.dispatchEvent(a)}_handleKeydown(a){a.key==="Escape"&&this._closeDrawer()}_handleOutsideClick(a){var l;if(this._open){const _=(l=this.shadowRoot)==null?void 0:l.querySelector(".drawer"),h=a.composedPath();_&&h.includes(this)&&!h.includes(_)&&this._closeDrawer()}}_handleScroll(a){var _,h,b,g;const l=a.target;l&&(l.scrollTop>0?(_=this._drawerHeader)==null||_.classList.add("drawer-header--scrolled"):(h=this._drawerHeader)==null||h.classList.remove("drawer-header--scrolled"),l.scrollHeight-l.scrollTop!==l.clientHeight?(b=this._drawerFooter)==null||b.classList.add("drawer-footer--scrolled"):(g=this._drawerFooter)==null||g.classList.remove("drawer-footer--scrolled"))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}updated(a){a.has("open")&&(this._open?this._showDrawer():this._hideDrawer())}firstUpdated(){var l,_,h;const a=(l=this.shadowRoot)==null?void 0:l.querySelector(".drawer");a&&(a.addEventListener("scroll",this._handleScroll.bind(this)),this._drawerHeader=(_=this.shadowRoot)==null?void 0:_.querySelector(".drawer-header"),this._drawerFooter=(h=this.shadowRoot)==null?void 0:h.querySelector(".drawer-footer"),a.scrollHeight>a.clientHeight&&this._drawerFooter.classList.add("drawer-footer--scrolled"))}render(){return template$l(this)}}__decorateClass$X([n({type:String})],Drawer.prototype,"variant",2);__decorateClass$X([n(booleanType)],Drawer.prototype,"open",1);__decorateClass$X([n({type:String})],Drawer.prototype,"title",1);__decorateClass$X([n({type:String})],Drawer.prototype,"size",1);const typographyStyles=".dss-headline--xl,h1{color:var(--color-headline);font-weight:var(--font-bold);font-size:var(--dss-font-size-xhg);line-height:var(--line-52)}.dss-headline--lg,h2{color:var(--color-headline);font-weight:var(--font-bold);font-size:var(--dss-font-size-hg);line-height:var(--line-44)}.dss-headline--md,h3{color:var(--color-headline);font-weight:var(--font-bold);font-size:var(--dss-font-size-xxl);line-height:var(--line-36)}.dss-headline--sm,h4{color:var(--color-headline);font-weight:var(--font-bold);font-size:var(--dss-font-size-xl);line-height:var(--line-30)}.dss-subtitle--xl{font-weight:var(--font-semibold);font-size:var(--dss-font-size-xl);line-height:var(--line-32);color:var(--color-neutral-700)}.dss-subtitle--lg{font-weight:var(--font-semibold);font-size:var(--dss-font-size-lg);line-height:var(--line-24);color:var(--color-neutral-700)}.dss-subtitle--md{font-weight:var(--font-semibold);font-size:var(--dss-font-size-md);line-height:var(--line-24);color:var(--color-neutral-700)}.dss-subtitle--sm{font-weight:var(--font-semibold);font-size:var(--dss-font-size-sm);line-height:var(--line-24);color:var(--color-neutral-700)}.dss-legend--lg{font-weight:var(--font-regular);font-size:var(--dss-font-size-md);line-height:var(--line-28)}.dss-legend--md{font-weight:var(--font-regular);font-size:var(--dss-font-size-sm);line-height:var(--line-24)}.dss-legend--sm{font-weight:var(--font-regular);font-size:var(--dss-font-size-xs);line-height:var(--line-16)}.dss-headings--spacing-top-md{padding-top:var(--dss-spacing-md)}",styles$k=':host{display:block;min-width:-moz-fit-content;min-width:fit-content}.dss-footer__container{align-items:center;padding:24px;display:flex;flex-direction:row;box-shadow:0 1px 2px #0000000d,0 1px 3px 1px #0000001a}.dss-footer__logo-content{height:24px;display:flex;margin-bottom:24px}.dss-footer__content{display:flex;align-items:center;justify-content:center;width:100%}.dss-footer__content p{display:none}@media (min-width: 768px){.dss-footer__container{padding:16px 24px;flex-direction:row;width:100%}.dss-footer__logo-content{margin-bottom:0}.dss-footer__content{justify-content:space-between}.dss-footer__content p{display:block;position:relative;margin-left:32px}.dss-footer__content p:before{content:"";width:1px;height:24px;background-color:var(--color-neutral-100);position:absolute;left:-16px;top:-4px;margin:auto}}@media only screen and (max-height: 808px){.dss-footer__container{display:none}}',template$k=d=>u$1`
  <footer class="dss-footer__container">
    <div class="dss-footer__logo-content">
      <img src="${d.logo}" alt="Logo"/>
    </div>
    <div class="dss-footer__content">
      <p class="dss-legend--sm">${d.description}</p>
    </div>
  </footer>
`;var __defProp$W=Object.defineProperty,__decorateClass$W=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$W(a,l,h),h};class Footer extends r$1{constructor(){super(...arguments),this.logo="",this.description=""}static get styles(){return[r$2(resetStyles),r$2(styles$k),r$2(typographyStyles)]}render(){return template$k(this)}}__decorateClass$W([n({type:String})],Footer.prototype,"logo");__decorateClass$W([n({type:String})],Footer.prototype,"description");const headerLinksStyles=":host{display:block}.dss-header-links{display:flex;align-items:center;gap:var(--dss-spacing-md)}.dss-header-links__button-link{all:unset;cursor:pointer;display:flex;align-items:center;gap:var(--dss-spacing-xs);vertical-align:middle;color:var(--color-primary-700);font-size:14px;font-style:normal;font-weight:600;line-height:24px;font-family:var(--font-family)}.dss-header-links__button-link:hover{color:var(--color-primary-900)}.dss-header-links__button-link:active{color:var(--color-primary-800)}.dss-header-links__button-link:disabled{color:var(--color-neutral-500);cursor:not-allowed}.dss-header-links__button-link:focus-visible{border-radius:var(--dss-radius-xs, 4px);outline:2px solid var(--system-feedback-blue-blue-200, #8ec7e5)}@media only screen and (max-width: 1024px){.dss-header-links__button-link__label{display:none}}",dssIcon$n=i`dss-icon${s(getCustomElementSuffix())}`,headerLinksTemplate=d=>u$1`
  <ul class="dss-header-links" role="menu">
    ${d._items.map(a=>u$1`
        <li class="dss-header-links__item" role="menuitem">
          <button
            class="dss-header-links__button-link"
            ?disabled=${a.disabled}
            @click=${()=>d._dispatchItemAction(a)}
            aria-label="${a.label}"
          >
            ${a.icon?u$1`<${dssIcon$n} size="md" icon="${a.icon}"></${dssIcon$n}>`:null}
            <span class="dss-header-links__button-link__label">
              ${a.label}
            </span>
          </button>
        </li>
      `)}
    ${d._hideHelp?null:u$1`
          <li class="dss-header-links__item" role="menuitem">
            <button
              class="dss-header-links__button-link"
              ?disabled=${d._disableHelp}
              @click="${d._handleHelp}"
              aria-label="${d._helpLabel}"
            >
              <${dssIcon$n} size="md" icon="help_outline"></${dssIcon$n}>
              <span class="dss-header-links__button-link__label">
                ${d._helpLabel}
              </span>
            </button>
          </li>
        `}
  </ul>
`;var __defProp$V=Object.defineProperty,__getOwnPropDesc$u=Object.getOwnPropertyDescriptor,__decorateClass$V=(d,a,l,_)=>{for(var h=__getOwnPropDesc$u(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$V(a,l,h),h};class HeaderLinks extends r$1{constructor(){super(...arguments),this._hideHelp=!1,this._disableHelp=!1,this._helpLabel="Ajuda",this._items=[]}static get styles(){return[r$2(resetStyles),r$2(headerLinksStyles)]}set hideHelp(a){const l=this._hideHelp;this._hideHelp=a,this.requestUpdate("hideHelp",l)}get hideHelp(){return this._hideHelp}set disableHelp(a){const l=this._disableHelp;this._disableHelp=a,this.requestUpdate("disableHelp",l)}get disableHelp(){return this._disableHelp}set helpLabel(a){const l=this._helpLabel;this._helpLabel=a,this.requestUpdate("helpLabel",l)}get helpLabel(){return this._helpLabel}set items(a){const l=this._items;this._items=a,this.requestUpdate("items",l)}get items(){return this._items}_dispatchItemAction(a){const l={detail:a,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onClickLink",l))}_handleHelp(){this.dispatchEvent(new CustomEvent("onHelp",{bubbles:!0,composed:!0}))}render(){return headerLinksTemplate(this)}}__decorateClass$V([n(booleanType)],HeaderLinks.prototype,"hideHelp");__decorateClass$V([n(booleanType)],HeaderLinks.prototype,"disableHelp");__decorateClass$V([n({type:String})],HeaderLinks.prototype,"helpLabel");__decorateClass$V([n({type:Array})],HeaderLinks.prototype,"items");const headerMenuPatientStyles=":host{display:block}.dss-header-menu-patient{position:relative;display:flex;align-items:center;gap:var(--dss-spacing-md);width:-moz-max-content;width:max-content}.dss-header-menu-patient--lg{max-width:360px}.dss-header-menu-patient--md{max-width:320px}.dss-header-menu-patient--sm{max-width:280px}.dss-header-menu-patient-details__name{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;align-self:stretch;overflow:hidden;color:var(--neutral-neutral-500, #656565);text-overflow:ellipsis;font-size:14px;font-weight:var(--font-semibold);line-height:24px;font-family:var(--font-family)}.dss-header-menu-patient-details__info{display:flex;align-items:center;gap:var(--dss-spacing-xs)}.dss-header-menu-patient-details__info-label{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;align-self:stretch;overflow:hidden;color:var(--neutral-neutral-500);text-overflow:ellipsis;font-family:var(--font-family);font-size:14px;font-weight:var(--font-regular);line-height:24px}.dss-header-menu-patient-dropdown{position:absolute;top:calc(100% + var(--dss-spacing-lg));right:0;width:240px;z-index:900}.breakpoint-small-only{display:none}.divider-v{width:var(--dss-border-width-sm);height:14px;background-color:var(--color-neutral-500)}.dss-header-patient__action-menu{width:100%}@media only screen and (max-width: 1024px){.dss-header-menu-patient-details__info-label--cip,.divider-v--cip{display:none}.breakpoint-small-only{display:block}}",dssIconButton$a=i`dss-icon-button${s(getCustomElementSuffix())}`,dssActionMenu=i`dss-action-menu${s(getCustomElementSuffix())}`,dssActionMenuItem=i`dss-action-menu-item${s(getCustomElementSuffix())}`,headerMenuPatientTemplate=d=>u$1`
  <div
    class=${e$1({"dss-header-menu-patient":!0,[`dss-header-menu-patient--${d._size}`]:!!d._size})}
  >
    <div class="dss-header-menu-patient-avatar">
      <slot name="avatar"></slot>
    </div>
    <div class="dss-header-menu-patient-details">
      <div class="dss-header-menu-patient-details__name">${d._name}</div>
      <div class="dss-header-menu-patient-details__info">
        ${d._cip?u$1`
              <span
                class="dss-header-menu-patient-details__info-label dss-header-menu-patient-details__info-label--cip"
                >${d._cip}</span
              >
              <span class="divider-v divider-v--cip"></span>
            `:null}
        ${d._age?u$1`
              <span class="dss-header-menu-patient-details__info-label"
                >${d._age}</span
              >
              <span class="divider-v"></span>
            `:null}
        ${d._gender?u$1`
              <span class="dss-header-menu-patient-details__info-label"
                >${d._gender}</span
              >
            `:null}
      </div>
    </div>
    <${dssIconButton$a}
      icon="${d._toggleIcon}"
      label="${d._toggleLabel}"
      variant="primary"
      @onClick="${d._toggleDropdown}"
      ?disabled=${d._disabled}
    ></${dssIconButton$a}>
    ${d._showDropdown?u$1`
          <div
            class=${e$1({"dss-header-menu-patient-dropdown":!0,"dss-header-menu-patient-dropdown--expanded":!!d._showDropdown})}
          >
            <${dssActionMenu} class="dss-header-patient__action-menu" fullWidth disablePopper>
              <${dssActionMenuItem} 
                leftIcon="person"
                label="Detalls del pacient"
                @onClick="${()=>d._handleActionClick("Detalls del pacient")}">
              </${dssActionMenuItem}>
              <${dssActionMenuItem} 
                class="breakpoint-small-only"
                leftIcon="medical_information"
                label="CIP"
                actionIcon="content_copy"
                @onClick="${d._handleACIPClick}"
                @onAction="${d._handleCopyCIP}">
              </${dssActionMenuItem}>
              <${dssActionMenuItem} 
                leftIcon="content_paste_go"
                rightIcon="open_in_new"
                label="HCDSNS"
                @onClick="${()=>d._handleActionClick("HCDSNS")}">
              </${dssActionMenuItem}>
              <${dssActionMenuItem} 
                leftIcon="content_paste_go"
                rightIcon="open_in_new"
                label="Historial HC3"
                @onClick="${()=>d._handleActionClick("Historial HC3")}">
              </${dssActionMenuItem}>
            </${dssActionMenu}>
          </div>
        `:null}
  </div>
`;var __defProp$U=Object.defineProperty,__getOwnPropDesc$t=Object.getOwnPropertyDescriptor,__decorateClass$U=(d,a,l,_)=>{for(var h=__getOwnPropDesc$t(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$U(a,l,h),h};class HeaderMenuPatient extends r$1{constructor(){super(),this._size="lg",this._name=void 0,this._cip=void 0,this._age=void 0,this._gender=void 0,this._disabled=!1,this._showDropdown=!1,this._toggleIcon="expand_more",this._toggleLabel="Tancar menú",this._handleDocumentClickBound=this._handleDocumentClick.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(headerMenuPatientStyles)]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleDocumentClickBound)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClickBound)}set size(a){const l=this._size;this._size=a==="md"||a==="sm"?a:"lg",this.requestUpdate("size",l)}get size(){return this._size}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set name(a){const l=this._name;this._name=a,this.requestUpdate("name",l)}get name(){return this._name||""}set cip(a){const l=this._cip;this._cip=a,this.requestUpdate("cip",l)}get cip(){return this._cip||""}set age(a){const l=this._age;this._age=a,this.requestUpdate("age",l)}get age(){return this._age||""}set gender(a){const l=this._gender;this._gender=a,this.requestUpdate("gender",l)}get gender(){return this._gender||""}_toggleDropdown(){this._showDropdown=!this._showDropdown,this._toggleIcon=this._showDropdown?"expand_less":"expand_more",this._toggleLabel=this._showDropdown?"Obrir menú del pacient":"Tancar menú del pacient",this.requestUpdate()}_handleClick(){this.dispatchEvent(new CustomEvent("onClick",{bubbles:!0,composed:!0}))}_handleActionClick(a){this.dispatchEvent(new CustomEvent("onActionPatientClick",{detail:{action:a},bubbles:!0,composed:!0})),this._toggleDropdown()}_handleACIPClick(a){this._handleCopyCIP(a),this._toggleDropdown()}_handleCopyCIP(a){a.stopPropagation(),this._cip&&(navigator.clipboard.writeText(this._cip),this.dispatchEvent(new CustomEvent("onCopyCIP",{detail:{text:this._cip},bubbles:!0,composed:!0})))}_handleDocumentClick(a){this._clickedOutside(this,a)}_clickedOutside(a,l){l.composedPath().includes(a)||this._showDropdown&&this._toggleDropdown()}render(){return headerMenuPatientTemplate(this)}}__decorateClass$U([n({type:String})],HeaderMenuPatient.prototype,"size");__decorateClass$U([n(booleanType)],HeaderMenuPatient.prototype,"disabled");__decorateClass$U([n({type:String})],HeaderMenuPatient.prototype,"name");__decorateClass$U([n({type:String})],HeaderMenuPatient.prototype,"cip");__decorateClass$U([n({type:String})],HeaderMenuPatient.prototype,"age");__decorateClass$U([n({type:String})],HeaderMenuPatient.prototype,"gender");const headerMenuProfessionalStyles=":host{display:block}.dss-header-menu-professional{position:relative;display:flex;align-items:center;gap:var(--dss-spacing-md);width:-moz-max-content;width:max-content}.dss-header-menu-professional--lg{max-width:360px}.dss-header-menu-professional--md{max-width:320px}.dss-header-menu-professional--sm{max-width:280px}.dss-header-menu-professional-details__name,.dss-header-menu-professional-dropdown__details-title,.dss-header-menu-professional-dropdown__details-subtitle{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;align-self:stretch;overflow:hidden;color:var(--neutral-neutral-500, #656565);text-overflow:ellipsis;font-size:14px;font-weight:var(--font-semibold);line-height:24px;font-family:var(--font-family)}.dss-header-menu-professional-dropdown__details-title{color:var(--color-neutral-900)}.dss-header-menu-professional-details__info{display:flex;align-items:center}.dss-header-menu-professional-details__info-label{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;align-self:stretch;overflow:hidden;color:var(--neutral-neutral-500);text-overflow:ellipsis;font-family:var(--font-family);font-size:14px;font-weight:var(--font-regular);line-height:24px}.dss-header-menu-professional-details__info-label:not(:last-child){border-right:var(--dss-border-width-sm) solid var(--color-neutral-100);padding-right:var(--dss-spacing-xxs);margin-right:var(--dss-spacing-xxs)}.dss-header-menu-professional-dropdown{opacity:0;visibility:hidden;position:absolute;top:calc(100% + var(--dss-spacing-lg));right:0;width:280px;z-index:900;display:flex;padding:var(--dss-spacing-md);flex-direction:column;gap:var(--dss-spacing-lg);background-color:var(--color-white);border-radius:var(--dss-radius-sm);box-shadow:0 8px 12px 6px #0000000d,0 4px 4px #0000001a}.dss-header-menu-professional-dropdown--expanded{opacity:1;visibility:visible}.dss-header-menu-professional-dropdown__details{display:flex;flex-direction:column;align-items:flex-start;gap:var(--dss-spacing-xs);align-self:stretch}.dss-header-menu-professional-dropdown__info{display:flex;flex-direction:column;align-items:flex-start;gap:var(--dss-spacing-md);align-self:stretch}.dss-header-menu-professional-dropdown__details-content{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}.dss-header-menu-professional-dropdown__details-description{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;align-self:stretch;overflow:hidden;color:var(--neutral-neutral-500);text-overflow:ellipsis;font-family:var(--font-family);font-size:14px;font-weight:var(--font-regultar);line-height:24px}.dss-header-menu-professional__divider{width:100%;height:var(--dss-border-width-sm);background-color:var(--color-neutral-200)}.dss-header-menu-professional-dropdown__preferences__options{display:flex;flex-direction:column;gap:var(--dss-spacing-xs)}.breakpoint-only-sm{display:none}@media only screen and (max-width: 1024px){.dss-header-menu-professional-details{display:none}.breakpoint-only-sm{display:block}}@media only screen and (min-width: 1025px){.dss-header-menu-professional-dropdown--hide-details .dss-header-menu-professional-dropdown__info,.dss-header-menu-professional-dropdown--hide-details .dss-header-menu-professional__divider{display:none}}",dssIconButton$9=i`dss-icon-button${s(getCustomElementSuffix())}`,dssButtonLink=i`dss-button-link${s(getCustomElementSuffix())}`,dssButton$4=i`dss-button${s(getCustomElementSuffix())}`,headerMenuProfessionalTemplate=d=>u$1`
  <div
    class=${e$1({"dss-header-menu-professional":!0,[`dss-header-menu-professional--${d._size}`]:!!d._size})}
  >
    <div class="dss-header-menu-professional-avatar">
      <slot name="avatar"></slot>
    </div>
    <div class="dss-header-menu-professional-details">
      <div class="dss-header-menu-professional-details__name">
        ${d._name}
      </div>
      <div class="dss-header-menu-professional-details__info">
        ${d._center?u$1`
              <span
                class="dss-header-menu-professional-details__info-label dss-header-menu-professional-details__info-label--center"
                >${d._center}</span
              >
            `:null}
      </div>
    </div>
    <${dssIconButton$9} 
      icon="${d._toggleIcon}"
      label="${d._toggleLabel}"
      variant="primary"
      @onClick="${d._toggleDropdown}"
      ?disabled=${d._disabled}>
    </${dssIconButton$9}>
   
    <div
      class=${e$1({"dss-header-menu-professional-dropdown":!0,"dss-header-menu-professional-dropdown--expanded":!!d._showDropdown,"dss-header-menu-professional-dropdown--hide-details":!!d._hideDropdownDetails})}
    >
      <div class="dss-header-menu-professional-dropdown__info">
        <div class="dss-header-menu-professional-dropdown__details">
          <div
            class="dss-header-menu-professional-dropdown__details-title"
          >
            ${d._infoLabel}
          </div>

          <div
            class="dss-header-menu-professional-dropdown__details-content"
          >
            <div
              class="dss-header-menu-professional-dropdown__details-subtitle breakpoint-only-sm"
            >
              ${d._name}
            </div>

            ${d._center?u$1`
                  <p
                    class="dss-header-menu-professional-dropdown__details-description breakpoint-only-sm"
                  >
                    ${d._center}
                  </p>
                `:null}
            ${d._collegiate?u$1`
                  <p
                    class="dss-header-menu-professional-dropdown__details-description"
                  >
                    ${d._collegiateLabel} ${d._collegiate}
                  </p>
                `:null}
          </div>

          ${d._detailsHref?u$1`
                ${d._detailsIcon?u$1`
                      <${dssButtonLink}
                        label="${d._detailsLabel}"
                        linkHref="${d._detailsHref}"
                        icon="${d._detailsIcon}"
                        iconPosition="${d._detailsIconPosition}">
                      </${dssButtonLink}>
                    `:u$1`
                      <${dssButtonLink}
                        label="${d._detailsLabel}"
                        linkHref="${d._detailsHref}">
                      </${dssButtonLink}>
                    `}
              `:null}
        </div>

        <div class="dss-header-menu-professional__divider"></div>

        ${d._hideDropdownPreferences?null:u$1`
              <div
                class="dss-header-menu-professional-dropdown__preferences"
              >
                <div
                  class="dss-header-menu-professional-dropdown__details-title"
                >
                  ${d._preferencesLabel}
                </div>
                <div
                  class="dss-header-menu-professional-dropdown__preferences__options"
                >
                  <slot></slot>
                </div>
              </div>
            `}
      </div>

      <${dssButton$4}
        label="${d._logoutLabel}"
        icon="${d._logoutIcon}"
        iconPosition="${d._logoutIconPosition}"
        fullWidth
        @onClick="${d._handleLogout}"
      ></${dssButton$4}>
    </div>
    
  </div>
`;var __defProp$T=Object.defineProperty,__getOwnPropDesc$s=Object.getOwnPropertyDescriptor,__decorateClass$T=(d,a,l,_)=>{for(var h=__getOwnPropDesc$s(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$T(a,l,h),h};class HeaderMenuProfessional extends r$1{constructor(){super(),this._hideDropdownDetails=!1,this._hideDropdownPreferences=!1,this._size="lg",this._name=void 0,this._center=void 0,this._collegiate=void 0,this._disabled=!1,this._showDropdown=!1,this._toggleIcon="expand_more",this._infoLabel="Les meves dades",this._collegiateLabel="Col·legiat nº",this._preferencesLabel="Preferences de treball",this._detailsLabel="Veure més detalls",this._detailsHref=void 0,this._detailsIconPosition="left",this._logoutLabel="Tancar sessió",this._logoutIcon="logout",this._logoutIconPosition="left",this._toggleLabel="Tancar menú",this._handleDocumentClickBound=this._handleDocumentClick.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(headerMenuProfessionalStyles)]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleDocumentClickBound)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClickBound)}set size(a){const l=this._size;this._size=a==="md"||a==="sm"?a:"lg",this.requestUpdate("size",l)}get size(){return this._size}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set name(a){const l=this._name;this._name=a,this.requestUpdate("name",l)}get name(){return this._name||""}set center(a){const l=this._center;this._center=a,this.requestUpdate("center",l)}get center(){return this._center||""}set collegiate(a){const l=this._collegiate;this._collegiate=a,this.requestUpdate("collegiate",l)}get collegiate(){return this._collegiate||""}set infoLabel(a){const l=this._infoLabel;this._infoLabel=a,this.requestUpdate("infoLabel",l)}get infoLabel(){return this._infoLabel}set collegiateLabel(a){const l=this._collegiateLabel;this._collegiateLabel=a,this.requestUpdate("collegiateLabel",l)}get collegiateLabel(){return this._collegiateLabel}set preferencesLabel(a){const l=this._preferencesLabel;this._preferencesLabel=a,this.requestUpdate("preferencesLabel",l)}get preferencesLabel(){return this._preferencesLabel}set detailsLabel(a){const l=this._detailsLabel;this._detailsLabel=a,this.requestUpdate("detailsLabel",l)}get detailsLabel(){return this._detailsLabel}set detailsHref(a){const l=this._detailsHref;this._detailsHref=a,this.requestUpdate("detailsHref",l)}get detailsHref(){return this._detailsHref||""}set detailsIcon(a){const l=this._detailsIcon;this._detailsIcon=a,this.requestUpdate("detailsIcon",l)}get detailsIcon(){return this._detailsIcon||"info"}set detailsIconPosition(a){const l=this._detailsIconPosition;this._detailsIconPosition=a,this.requestUpdate("detailsIconPosition",l)}get detailsIconPosition(){return this._detailsIconPosition}set logoutLabel(a){const l=this._logoutLabel;this._logoutLabel=a,this.requestUpdate("logoutLabel",l)}get logoutLabel(){return this._logoutLabel}set logoutIcon(a){const l=this._logoutIcon;this._logoutIcon=a,this.requestUpdate("logoutIcon",l)}get logoutIcon(){return this._logoutIcon}set logoutIconPosition(a){const l=this._logoutIconPosition;this._logoutIconPosition=a,this.requestUpdate("logoutIconPosition",l)}get logoutIconPosition(){return this._logoutIconPosition}set hideDropdownDetails(a){const l=this._hideDropdownDetails;this._hideDropdownDetails=a,this.requestUpdate("hideDropdownDetails",l)}get hideDropdownDetails(){return this._hideDropdownDetails}set hideDropdownPreferences(a){const l=this._hideDropdownPreferences;this._hideDropdownPreferences=a,this.requestUpdate("hideDropdownPreferences",l)}get hideDropdownPreferences(){return this._hideDropdownPreferences}_toggleDropdown(){this._showDropdown=!this._showDropdown,this._toggleIcon=this._showDropdown?"expand_less":"expand_more",this._toggleLabel=this._showDropdown?"Obrir menú del professional":"Tancar menú del professional",this._showDropdown&&setTimeout(()=>{this._updatePreferencesDropdownPosition()},100),this.requestUpdate()}_handleLogout(){this.dispatchEvent(new CustomEvent("onLogout",{bubbles:!0,composed:!0}))}_handleDocumentClick(a){this._clickedOutside(this,a)}_clickedOutside(a,l){l.composedPath().includes(a)||this._showDropdown&&this._toggleDropdown()}_updatePreferencesDropdownPosition(){var h,b;const a=(h=this.shadowRoot)==null?void 0:h.querySelector(".dss-header-menu-professional-dropdown"),l=(b=this.shadowRoot)==null?void 0:b.querySelector(".dss-header-menu-professional-dropdown__preferences__options"),_=l==null?void 0:l.querySelector("slot");if(l&&_){const g=_.assignedElements({flatten:!0});for(const f of g){const $=l.offsetLeft,k=a.offsetTop,D=f.offsetTop-k+44;f.setAttribute("dropdownOffsetX",$.toString()),f.setAttribute("dropdownOffsetY",D.toString())}}}render(){return headerMenuProfessionalTemplate(this)}}__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"size");__decorateClass$T([n(booleanType)],HeaderMenuProfessional.prototype,"disabled");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"name");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"center");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"collegiate");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"infoLabel");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"collegiateLabel");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"preferencesLabel");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"detailsLabel");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"detailsHref");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"detailsIcon");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"detailsIconPosition");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"logoutLabel");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"logoutIcon");__decorateClass$T([n({type:String})],HeaderMenuProfessional.prototype,"logoutIconPosition");__decorateClass$T([n(booleanType)],HeaderMenuProfessional.prototype,"hideDropdownDetails");__decorateClass$T([n(booleanType)],HeaderMenuProfessional.prototype,"hideDropdownPreferences");const headerStyles=':host{display:block}.dss-header{height:72px;display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-md);flex-shrink:0;background-color:var(--color-white);padding:var(--dss-spacing-sm) var(--dss-spacing-lg);box-shadow:0 1px 2px #0000000d,0 1px 3px 1px #0000001a}.dss-header-left{display:flex;align-items:center;gap:var(--dss-spacing-xl)}.dss-header-right{display:flex;justify-content:flex-end;align-items:center;gap:var(--dss-spacing-xl)}.dss-header-brand{display:flex;align-items:center;gap:var(--dss-spacing-md)}.dss-header-title{display:flex;align-items:center;gap:var(--dss-spacing-md);font-family:var(--font-family);font-size:20px;font-style:normal;font-weight:700;line-height:30px;color:var(--color-neutral-900)}.dss-header-title__area{position:relative}.dss-header-title__area:after{position:absolute;content:"";height:var(--dss-spacing-md);width:var(--dss-border-width-sm);background-color:var(--color-neutral-900);top:50%;right:calc(var(--dss-spacing-xs) * -1);transform:translateY(-50%)}.dss-header-section{position:relative;height:48px;display:flex;align-items:center}::slotted(dss-header-menu-patient){position:relative}::slotted(dss-header-menu-patient):before{content:"";position:absolute;top:0;left:calc(var(--dss-spacing-md) * -1);height:100%;border-left:var(--dss-border-width-sm) solid var(--color-neutral-100)}.dss-header-logo{height:24px}',headerTemplate=d=>x`
  <header
    class=${e$1({"dss-header":!0})}
  >
    <div class="dss-header-left">
      <div class="dss-header-brand">
        <img
          class="dss-header-logo"
          src="${d.logoSrc}"
          alt="Salut logotip"
        />
        ${d.title?x`
              <div class="dss-header-title">
                ${d.area?x`
                      <span class="dss-header-title__area"
                        >${d.area}</span
                      >
                    `:null}
                <span class="dss-header-title__name">${d.title}</span>
              </div>
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
`;var __defProp$S=Object.defineProperty,__decorateClass$S=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$S(a,l,h),h};class Header extends r$1{constructor(){super(...arguments),this.title="",this.area=void 0,this.logoSrc=""}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(headerStyles)]}render(){return headerTemplate(this)}}__decorateClass$S([n({type:String})],Header.prototype,"title");__decorateClass$S([n({type:String})],Header.prototype,"area");__decorateClass$S([n({type:String})],Header.prototype,"logoSrc");const template$j=d=>{const a={"dss-icon-badge--xl":d._size==="xl","dss-icon-badge--lg":d._size==="lg","dss-icon-badge--md":d._size==="md","dss-icon-badge--sm":d._size==="sm","dss-badge--danger":d._state==="danger","dss-badge--danger-low":d._state==="danger-low","dss-badge--danger-high":d._state==="danger-high","dss-badge--moderate":d._state==="moderate","dss-badge--moderate-low":d._state==="moderate-low","dss-badge--moderate-high":d._state==="moderate-high","dss-badge--slight":d._state==="slight","dss-badge--slight-low":d._state==="slight-low","dss-badge--slight-high":d._state==="slight-high","dss-badge--correct":d._state==="correct","dss-badge--undeterminated":d._state==="undeterminated","dss-badge--critic":d._state==="critic"&&!d._outlined,"dss-badge--critic-outlined":d._state==="critic"&&d._outlined,"dss-badge--alert":d._state==="alert"&&!d._outlined,"dss-badge--alert-outlined":d._state==="alert"&&d._outlined,"dss-badge--ideal":d._state==="ideal"&&!d._outlined,"dss-badge--ideal-outlined":d._state==="ideal"&&d._outlined,"dss-badge--info":d._state==="info"&&!d._outlined,"dss-badge--info-outlined":d._state==="info"&&d._outlined,"dss-badge--info-alt":d._state==="info-alt"&&!d._outlined,"dss-badge--info-alt-outlined":d._state==="info-alt"&&d._outlined,"dss-badge--neutral":d._state==="neutral"&&!d._outlined,"dss-badge--neutral-outlined":d._state==="neutral"&&d._outlined,"dss-badge--disabled":d._disabled,"dss-icon-badge--bubble":d._bubble};return u$1`
    <div class="dss-wrapper">
      <span class="dss-icon-badge dss-icon ${e$1(a)}">
        ${d._icon}
      </span>
      <slot name="tooltip"></slot>
    </div>
  `},styles$j=".dss-icon-badge{cursor:default;box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:20px;width:20px;border:var(--dss-border-width-sm) solid var(--color-neutral-500);padding:var(--dss-spacing-tiny);border-radius:var(--dss-radius-xs);font-size:16px;color:var(--color-neutral-500);background-color:var(--color-white)}.dss-icon-badge--bubble{border-radius:var(--dss-radius-full)}.dss-icon-badge--md{height:24px;width:32px;padding:var(--dss-spacing-xxs) var(--dss-spacing-xs)}.dss-icon-badge--lg{height:32px;width:40px;padding:var(--dss-spacing-xxs) var(--dss-spacing-xs);border-radius:var(--dss-radius-sm);font-size:24px}.dss-icon-badge--xl{height:40px;width:40px;padding:var(--dss-spacing-xxs) var(--dss-spacing-xs);border-radius:var(--dss-radius-sm);font-size:24px}";var __defProp$R=Object.defineProperty,__getOwnPropDesc$r=Object.getOwnPropertyDescriptor,__decorateClass$R=(d,a,l,_)=>{for(var h=__getOwnPropDesc$r(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$R(a,l,h),h};class IconBadge extends r$1{constructor(){super(...arguments),this._icon="warning",this._size="sm",this._state="",this._disabled=!1,this._isIconDefined=!1,this._outlined=!1,this._bubble=!1}static get styles(){return[r$2(iconStyles),r$2(styles$j),r$2(badgeStates)]}set icon(a){const l=this._icon;this._icon=a,this._isIconDefined=!0,this.requestUpdate("icon",l)}get icon(){return this._icon}set size(a){const l=this._size;this._size=a,this.requestUpdate("size",l)}get size(){return this._size}set state(a){const l=this._state;this._state=a,a&&!this._isIconDefined&&(a.includes("danger")?this._icon="warning":a.includes("moderate")?this._icon="emergency_home":a.includes("slight")?this._icon="error":a.includes("correct")?this._icon="check_circle":a.includes("undeterminated")?this._icon="circle":a.includes("critic")?this._icon="cancel":a.includes("alert")?this._icon="report":a.includes("ideal")?this._icon="check_circle":a.includes("info")?this._icon="info":a.includes("neutral")&&(this._icon="circle")),this.requestUpdate("state",l)}get state(){return this._state}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set outlined(a){const l=this._outlined;this._outlined=a,this.requestUpdate("outlined",l)}get outlined(){return this._outlined}set bubble(a){const l=this._bubble;this._bubble=a,this.requestUpdate("bubble",l)}get bubble(){return this._bubble}render(){return template$j(this)}}__decorateClass$R([n({type:String})],IconBadge.prototype,"icon");__decorateClass$R([n({type:String})],IconBadge.prototype,"size");__decorateClass$R([n({type:String})],IconBadge.prototype,"state");__decorateClass$R([n(booleanType)],IconBadge.prototype,"disabled");__decorateClass$R([n(booleanType)],IconBadge.prototype,"outlined");__decorateClass$R([n(booleanType)],IconBadge.prototype,"bubble");const dssIcon$m=i`dss-icon${s(getCustomElementSuffix())}`,template$i=d=>u$1`
  ${n$1(d.ariaExpanded!==void 0,()=>u$1`
    <button
      type=${d.type}
      class=${e$1({"dss-icon-button":!0,[`dss-icon-button--${d.variant}`]:!!d.variant,[`dss-icon-button--${d.size}`]:!!d.size})}
      ?disabled=${d.disabled}
      ?hidden=${d.hidden}
      aria-expanded=${d.ariaExpanded}
      aria-label="${d.label}"
      tabindex="${d.disableTabindex?"-1":"0"}"
      @click=${d._handleClick}
    >
      <${dssIcon$m} icon="${d.icon}" size="${d.size}"></${dssIcon$m}>
    </button>
  `,()=>u$1`
      <button
        type=${d.type}
        class=${e$1({"dss-icon-button":!0,[`dss-icon-button--${d.variant}`]:!!d.variant,[`dss-icon-button--${d.size}`]:!!d.size})}
        ?disabled=${d.disabled}
        ?hidden=${d.hidden}
        aria-label="${d.label}"
        tabindex="${d.disableTabindex?"-1":"0"}"
        @click=${d._handleClick}
      >
        <${dssIcon$m} icon="${d.icon}" size="${d.size}"></${dssIcon$m}>
      </button>
    `)}
`;var __defProp$Q=Object.defineProperty,__decorateClass$Q=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$Q(a,l,h),h};class IconButton extends r$1{constructor(){super(...arguments),this.type="button",this.variant="primary",this.size="md",this.label="",this.icon=void 0,this.disabled=!1,this.hidden=!1,this.disableTabindex=!1,this.ariaExpanded=void 0}static get styles(){return[r$2(resetStyles),r$2(iconButtonStyles)]}_handleClick(){this.dispatchEvent(new CustomEvent("onClick",{bubbles:!0,composed:!0}))}render(){return template$i(this)}}__decorateClass$Q([n({type:String})],IconButton.prototype,"type");__decorateClass$Q([n({type:String})],IconButton.prototype,"variant");__decorateClass$Q([n({type:String})],IconButton.prototype,"size");__decorateClass$Q([n({type:String})],IconButton.prototype,"label");__decorateClass$Q([n({type:String})],IconButton.prototype,"icon");__decorateClass$Q([n(booleanType)],IconButton.prototype,"disabled");__decorateClass$Q([n(booleanType)],IconButton.prototype,"hidden");__decorateClass$Q([n(booleanType)],IconButton.prototype,"disableTabindex");__decorateClass$Q([n(booleanType)],IconButton.prototype,"ariaExpanded");const dssIcon$l=i`dss-icon${s(getCustomElementSuffix())}`,dssIconButton$8=i`dss-icon-button${s(getCustomElementSuffix())}`,inputActionTemplate=d=>{var _,h,b,g,f,$,k;const a={"dss-input-group--invalid":d._invalid||!d._inputValidity,"dss-input-group--disabled":(_=d._input)==null?void 0:_.disabled,"dss-input-group--required":(h=d._input)==null?void 0:h.required,"dss-input-group--read-only":(b=d._input)==null?void 0:b.readOnly,"dss-input-group--focused":((g=d._input)==null?void 0:g.value)||d._placeholder||d._isFocused,"dss-input-group--lg":d._inputSize==="lg","dss-input-group--md":d._inputSize==="md","dss-input-group--numeric":d._isTypeNumeric,"dss-input-group--has-icon":d._icon&&d._icon!=="","dss-input-group--no-min-width":d._removeMinWidth,"dss-input-group--actions":!0,"dss-input-group--has-secondary-action":!!d._action&&!!d._secondaryAction,"dss-input-group--no-label":!d._labelSlot},l={"dss-input-help--invalid":d._invalid,"dss-input-help--disabled":(f=d._input)==null?void 0:f.disabled};return u$1`
    <div class="dss-input-wrapper">
      <div class="dss-input-group ${e$1(a)}">
        ${d._icon?u$1`
              <${dssIcon$l} class="dss-input-icon" size="md" icon="${d._icon}"></${dssIcon$l}>
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

        ${d._isTypeNumeric?u$1`
              <div class="dss-input__numeric-buttons">
                <${dssIconButton$8}
                  label="augmentar"
                  size="sm"
                  icon="keyboard_arrow_up"
                  variant="primary"
                  ?disabled=${d._input.disabled||d._input.readOnly}
                  disableTabindex
                  @onClick=${d._stepUp}
                ></${dssIconButton$8}>
                <${dssIconButton$8}
                  label="disminuir"
                  size="sm"
                  icon="keyboard_arrow_down"
                  variant="primary"
                  ?disabled=${d._input.disabled||d._input.readOnly}
                  disableTabindex
                  @onClick=${d._stepDown}
                ></${dssIconButton$8}>
              </div>
            `:null}
      </div>
      ${d._helpText?u$1`
            <div class="dss-input-help ${e$1(l)}">
              <span>${d._helpText}</span>
              ${d._maxLength?u$1`<span>
                    ${(k=($=d._input)==null?void 0:$.value)==null?void 0:k.length}/${d._maxLength}
                  </span>`:null}
            </div>
          `:null}
    </div>
  `},inputActionStyles='.dss-input-group ::slotted(input){padding-right:calc(var(--dss-spacing-lg) + var(--dss-spacing-md) + var(--dss-spacing-sm))!important}.dss-input-group ::slotted(input[type="number"]){padding-right:calc(var(--dss-spacing-lg) + var(--dss-spacing-lg) + var(--dss-spacing-lg))!important}.dss-input-group--actions .dss-input__numeric-buttons{right:calc(var(--dss-spacing-lg) + var(--dss-spacing-sm))}.dss-input-group--actions.dss-input-group--has-secondary-action ::slotted(input){padding-right:var(--dss-spacing-xxhg)!important}.dss-input-group--actions.dss-input-group--has-secondary-action ::slotted(input[type="number"]){padding-right:calc(var(--dss-spacing-xxhg) + var(--dss-spacing-md))!important}.dss-input-group--actions.dss-input-group--has-secondary-action .dss-input__numeric-buttons{right:var(--dss-spacing-xhg)}.dss-input-actions{position:absolute;top:50%;transform:translateY(-50%);right:0;z-index:800;padding-right:var(--dss-spacing-sm);padding-left:var(--dss-spacing-xs);border-left:var(--dss-border-width-sm) solid var(--color-neutral-100)}';var __defProp$P=Object.defineProperty,__getOwnPropDesc$q=Object.getOwnPropertyDescriptor,__decorateClass$P=(d,a,l,_)=>{for(var h=__getOwnPropDesc$q(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$P(a,l,h),h};class InputAction extends r$1{constructor(){super(...arguments),this._label="Label",this._icon="add_box",this._placeholder="",this._inputSize="lg",this._maxLength=void 0,this._invalid=!1,this._helpText="",this._isFocused=!1,this._isTypeNumeric=!1,this._inputValidity=!0,this._removeMinWidth=!1,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)l.type==="attributes"&&(this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(inputStyles),r$2(inputActionStyles)]}get _input(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}get _labelSlot(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="label"]'))||void 0;return a==null?void 0:a.assignedElements()[0]}get _action(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="action"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}get _secondaryAction(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="secondaryAction"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}set label(a){const l=this._label;this._label=a,this.requestUpdate("label",l)}get label(){return this._label}set icon(a){const l=this._icon;this._icon=a,this.requestUpdate("icon",l)}get icon(){return this._icon}set inputSize(a){const l=this._inputSize;a==="md"?this._inputSize=a:this._inputSize="lg",this.requestUpdate("inputSize",l)}get inputSize(){return this._inputSize}set helpText(a){const l=this._helpText;this._helpText=a,this.requestUpdate("helpText",l)}get helpText(){return this._helpText}set invalid(a){const l=this._invalid;this._invalid=a,this.requestUpdate("invalid",l)}get invalid(){return this._invalid}set removeMinWidth(a){const l=this._removeMinWidth;this._removeMinWidth=a,this.requestUpdate("removeMinWidth",l)}get removeMinWidth(){return this._removeMinWidth}set value(a){a!==void 0&&this.requestUpdate()}get value(){var a;return((a=this._input)==null?void 0:a.value)||""}disconnectedCallback(){this.observer.disconnect()}_handleClick(){this.requestUpdate()}_handleInput(){this._isTypeNumeric&&this._maxLength&&this._input&&(this._input.value=this._input.value.slice(0,this._maxLength)),this._handleValidity(),this.requestUpdate()}_handleFocusIn(){this._isFocused=!0,this.requestUpdate()}_handleFocusOut(){this._isFocused=!1,this.requestUpdate()}_focusInput(){var a;(a=this._input)==null||a.focus()}_handleValidity(){var l;const a=(l=this._input)==null?void 0:l.checkValidity();a!==void 0&&(this._inputValidity=a)}_stepUp(){var a;(a=this._input)==null||a.stepUp(),this._handleValidity(),this._dispatchValueChange(),this.requestUpdate()}_stepDown(){var a;(a=this._input)==null||a.stepDown(),this._handleValidity(),this._dispatchValueChange(),this.requestUpdate()}_dispatchValueChange(){if(this._input){const a={detail:this._input.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onInputChange",a))}}_checkInputAttributes(){var _,h,b,g,f;const a=(_=this._input)==null?void 0:_.getAttribute("placeholder");a&&(this._placeholder=a),((h=this._input)==null?void 0:h.getAttribute("type"))==="number"&&(this._isTypeNumeric=!0);const l=(b=this._input)==null?void 0:b.getAttribute("maxlength");this._maxLength=l?+l:void 0,(g=this._input)!=null&&g.value&&((f=this._input)==null?void 0:f.value)!==""&&this._handleValidity()}async firstUpdated(){try{await this.updateComplete,this._input&&(this._checkInputAttributes(),this.observer.observe(this._input,this.observerConfig)),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}render(){return inputActionTemplate(this)}}__decorateClass$P([n({type:String})],InputAction.prototype,"label");__decorateClass$P([n({type:String})],InputAction.prototype,"icon");__decorateClass$P([n({type:String})],InputAction.prototype,"inputSize");__decorateClass$P([n({type:String})],InputAction.prototype,"helpText");__decorateClass$P([n(booleanType)],InputAction.prototype,"invalid");__decorateClass$P([n(booleanType)],InputAction.prototype,"removeMinWidth");__decorateClass$P([n({type:String})],InputAction.prototype,"value");const styles$i=".dss-icon-button{position:absolute;top:50%;transform:translateY(-50%);right:var(--dss-spacing-sm);z-index:800}.dss-selector{opacity:0;visibility:hidden;z-index:999}.dss-selector--visible{opacity:1;visibility:visible}.dss-selector--open-with-search{display:block;margin-top:var(--dss-spacing-xxs)}.dss-selector--md{top:44px}.dss-input-group__action-button--sm{top:var(--dss-spacing-sm)}";var __defProp$O=Object.defineProperty,__getOwnPropDesc$p=Object.getOwnPropertyDescriptor,__decorateClass$O=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$p(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$O(a,l,h),h};const dssIcon$k=i`dss-icon${s(getCustomElementSuffix())}`,dssIconButton$7=i`dss-icon-button${s(getCustomElementSuffix())}`,dssSelector=i`dss-selector${s(getCustomElementSuffix())}`;class InputDropdown extends r$1{constructor(){super(),this.dropdownOffsetX=void 0,this.dropdownOffsetY=void 0,this.dropdownPlacement="bottom-start",this.dropdownFixed=!1,this._elements=null,this._copyElements=null,this._tick=!0,this._type="default",this._boxStyle=null,this._selectedValue=null,this._multiple=!1,this._openWithSearch=!1,this._deselectable=!1,this._icon="search",this._placeHolder="",this._showDropdown=!1,this._required=!1,this._disabled=!1,this._readonly=!1,this._labelSelectAll="Seleccionar-ho tot",this._labelDeselectAll="Deseleccionar-ho tot",this._selectAll=!1,this._selectElements=0,this._isFocused=!1,this._helpText="",this._invalid=!1,this._inputSize="lg",this._inputValidity=!0,this._filteredElements=[],this._dropdownPlaceholder="Seleccionar",this._selectorStyle="",this._isFiltering=!1,this._placeholderEmpty="Escriu per cercar",this._filterThreshold=1,this._searchThreshold=1,this._unorder=!1,this._popperInstance=null,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)l.type==="attributes"&&(this._input&&this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback),this.visibleObserver=new IntersectionObserver(([a])=>{a.isIntersecting||this._showDropdown&&this._closeDropdown()},{root:null,threshold:0}),this._handleOutsideClick=this._handleOutsideClick.bind(this)}static get styles(){return[r$2(inputStyles),r$2(styles$i)]}get _input(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}get _label(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="label"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}set icon(a){const l=this._icon;this._icon=a,this.requestUpdate("icon",l)}get icon(){return this._icon}set placeHolder(a){const l=this._placeHolder;this._placeHolder=a,this.requestUpdate("placeHolder",l)}get placeHolder(){return this._placeHolder}set unorder(a){const l=this._unorder;this._unorder=a,this.requestUpdate("unorder",l)}get unorder(){return this._unorder}set elements(a){const l=this._elements;if(this._unorder)this._elements=a;else{const _=sort(a,"label","asc","string");this._elements=_}a&&(this._input&&!this._isFiltering&&(this._input.value=""),this._filteredElements=this._getFilteredElements(),this._copyElements=[...this._elements],this._initElementsSelected(),this.requestUpdate()),this.requestUpdate("elements",l)}get elements(){return this._elements||[]}set multiple(a){const l=this._multiple;this._multiple=a,this.requestUpdate("multiple",l)}get multiple(){return this._multiple}set tick(a){const l=this._tick;this._tick=a,this.requestUpdate("tick",l)}get tick(){return this._tick}set openWithSearch(a){var _;const l=this._openWithSearch;this._openWithSearch=a,a&&(this._showDropdown=a,(_=this._popperInstance)==null||_.update(),this._isFocused=!0),this.requestUpdate("openWithSearch",l)}get openWithSearch(){return this._openWithSearch}set showDropdown(a){const l=this._showDropdown;this._showDropdown=a,this.requestUpdate("showDropdown",l)}get showDropdown(){return this._showDropdown}set deselectable(a){const l=this._deselectable;this._deselectable=a,this.requestUpdate("deselectable",l)}get deselectable(){return this._deselectable}set selectedValue(a){const l=this._selectedValue;a&&(this._selectedValue=a),this._elements&&this._selectedValue&&(this._selectedValue.length>0&&(this._isFocused=!0),this._initElementsSelected()),this.requestUpdate("selectedValue",l)}get selectedValue(){return this._selectedValue||[]}set type(a){const l=this._type;a==="default"||a==="green"?this._type=a:this._type="default",this.requestUpdate("type",l)}get type(){return this._type}set boxStyle(a){const l=this._boxStyle;this._boxStyle=a,this.requestUpdate("boxStyle",l)}get boxStyle(){return this._boxStyle||""}set selectorStyle(a){const l=this._selectorStyle;this._selectorStyle=a,this.requestUpdate("selectorStyle",l)}get selectorStyle(){return this._selectorStyle||""}set labelSelectAll(a){const l=this._labelSelectAll;a!==""&&(this._labelSelectAll=a),this.requestUpdate("labelSelectAll",l)}get labelSelectAll(){return this._labelSelectAll}set labelDeselectAll(a){const l=this._labelDeselectAll;a!==""&&(this._labelDeselectAll=a),this.requestUpdate("labelDeselectAll",l)}get labelDeselectAll(){return this._labelDeselectAll}set selectAll(a){const l=this._selectAll;this._selectAll=a,this.requestUpdate("selectAll",l)}get selectAll(){return this._selectAll}set invalid(a){const l=this._invalid;this._invalid=a,this.requestUpdate("invalid",l)}get invalid(){return this._invalid}set inputSize(a){const l=this._inputSize;a==="md"?this._inputSize=a:this._inputSize="lg",this.requestUpdate("inputSize",l)}get inputSize(){return this._inputSize}set helpText(a){const l=this._helpText;this._helpText=a,this.requestUpdate("helpText",l)}get helpText(){return this._helpText}set dropdownPlaceholder(a){const l=this._dropdownPlaceholder;this._dropdownPlaceholder=a,this.requestUpdate("dropdownPlaceholder",l)}get dropdownPlaceholder(){return this._dropdownPlaceholder}set placeholderEmpty(a){const l=this._placeholderEmpty;this._placeholderEmpty=a,this.requestUpdate("placeholderEmpty",l)}get placeholderEmpty(){return this._placeholderEmpty}set filterThreshold(a){const l=this._filterThreshold;this._filterThreshold=a,this.requestUpdate("filterThreshold",l)}get filterThreshold(){return this._filterThreshold}set searchThreshold(a){const l=this._searchThreshold;this._searchThreshold=a,this.requestUpdate("searchThreshold",l)}get searchThreshold(){return this._searchThreshold}set value(a){a!==void 0&&this.requestUpdate()}get value(){var a;return((a=this._input)==null?void 0:a.value)||""}disconnectedCallback(){this._removeOutsideClickListener(),this.observer.disconnect(),this.visibleObserver.disconnect()}_addOutsideClickListener(){document.addEventListener("click",this._handleOutsideClick)}_removeOutsideClickListener(){document.removeEventListener("click",this._handleOutsideClick)}_handleOutsideClick(a){this._clickedOutsideDropdown(this,a)}_closeDropdown(){var a;this._removeOutsideClickListener(),this._showDropdown=!1,this._isFiltering=!1,this._isFocused=!1,(a=this._input)==null||a.blur(),this.requestUpdate()}_getFilteredElements(){var l,_,h,b;const a=((l=this._elements)==null?void 0:l.filter(g=>{var f;return(f=this._selectedValue)==null?void 0:f.includes(g.value)}))||[];if((_=this._input)!=null&&_.value&&this._input.value.length>=this._searchThreshold){const g=(h=this._input)==null?void 0:h.value.toLowerCase();if(g){const f=((b=this._elements)==null?void 0:b.filter($=>{var k;return!((k=this._selectedValue)!=null&&k.includes($.value))&&$.label.toLowerCase().includes(g)}))||[];return[...a,...f]}}else return this._elements}async firstUpdated(){var a;try{await this.updateComplete,this._createPopperDropdown(),this._input&&(this.observer.observe(this._input,this.observerConfig),this.visibleObserver.observe(this._input),this._checkInputAttributes()),this._elements&&(this._filteredElements=this._getFilteredElements(),this._initElementsSelected()),this._openWithSearch&&this._input&&(this._input.value="",(a=this._input)!=null&&a.getAttribute("placeholder")||this._input.setAttribute("placeholder",this._dropdownPlaceholder)),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}_initElementsSelected(){this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[])}_clickedOutsideDropdown(a,l){var _,h,b;this._showDropdown&&!this._disabled&&(l.composedPath().includes(a)||(this._input&&(this._input.value=""),(_=this._elements)!=null&&_.length&&(this._initElementsSelected(),(!this._selectedValue||this._selectedValue.length<=0)&&(this._filteredElements=this._getFilteredElements())),(h=this._elements)!=null&&h.length||((b=this._input)==null||b.removeAttribute("placeholder"),this._placeHolder=""),this._hidePlaceholder(),this._closeDropdown()))}_handleInput(){this._isFiltering=!0,this._filteredElements=this._getFilteredElements(),this.requestUpdate()}_handleBlurEsc(){this._readonly||this._openWithSearch||this._closeDropdown()}_handleBlurSelector(a,l){var _;if(a!==l.target){if(this._openWithSearch)return;(_=this._input)==null||_.focus(),this._handleBlurEsc(),this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[])}}_toggleDropdown(){var a,l,_,h,b;(a=this._elements)!=null&&a.length&&this._showDropdown&&this._input?(this._initElementsSelected(),(!this._selectedValue||this._selectedValue.length<=0)&&(this._filteredElements=this._getFilteredElements())):(l=this._elements)!=null&&l.length&&!this._showDropdown&&this._input&&(this._input.value="",this._showPlaceholder(),(_=this._input)==null||_.focus()),this._showDropdown=!this._showDropdown,this._showDropdown&&(this._updatePopperDropdown(),this._addOutsideClickListener()),!((h=this._elements)!=null&&h.length)&&!this._showDropdown&&((b=this._input)==null||b.removeAttribute("placeholder"),this._placeHolder="",this._isFiltering=!1,this._isFocused=!1),this.requestUpdate()}_dispatchValueChange(){if(this._input){const a={detail:{inputValue:this._input.value,selectedValue:this._selectedValue},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onInputDropdownChange",a))}}_onSelectorChanges(a){this._isFiltering=!1;const l=a.detail;this._selectedValue=typeof l=="string"?[a.detail]:a.detail,!this._multiple&&!this._disabled&&(this._openWithSearch||(this._closeDropdown(),this._initElementsSelected()),this._handleValidity()),this._dispatchValueChange(),this.requestUpdate()}_showSelectValuesInInput(a){var h,b;!this._multiple&&Array.isArray(a)&&a.length>1&&a.splice(1);const l=(h=this._elements)==null?void 0:h.filter(g=>a.includes(g.value));if(this._elements=[...this._copyElements],this._openWithSearch?this._selectElements=0:this._selectElements=l!=null&&l.length?l.length:0,l&&l.length>0){const g=this._elements.filter(f=>l.includes(f));g.push(...this._elements.filter(f=>!l.includes(f))),this._elements=[...g],this._filteredElements=this._elements}if(!this._multiple&&this._input&&!this._isFiltering){this._input.value=((b=l==null?void 0:l[0])==null?void 0:b.label)??"",this._deselectable&&this._input.value===""&&(this._filteredElements=[...this._copyElements]);return}const _=l==null?void 0:l.map(g=>g.label);this._input&&!this._isFiltering&&(this._input.value=(_==null?void 0:_.join(", "))??"")}_checkInputAttributes(){var b,g,f,$,k,D;const a=(b=this._input)==null?void 0:b.getAttribute("placeholder");a&&(this._placeHolder=a);const l=(g=this._input)==null?void 0:g.getAttribute("readonly");this._readonly=l!==null;const _=(f=this._input)==null?void 0:f.getAttribute("disabled");this._disabled=_!==null;const h=($=this._input)==null?void 0:$.getAttribute("required");this._required=h!==null,(k=this._input)!=null&&k.value&&((D=this._input)==null?void 0:D.value)!==""&&this._handleValidity(),this.requestUpdate()}_handleFocusIn(){this._isFocused=!0,this.requestUpdate()}_handleFocusOut(a){var b,g;const l=a.relatedTarget;if(l instanceof HTMLElement&&l.contains(this))return;const _=(b=this.shadowRoot)==null?void 0:b.querySelector("dss-selector"),h=(g=this.shadowRoot)==null?void 0:g.querySelector(".dss-input-dropdown__toggle");l!==null&&l!==this._input&&l!==_&&l!==h&&(this._selectedValue&&this._initElementsSelected(),this._hidePlaceholder(),this._closeDropdown()),this.requestUpdate()}_handleKeyDown(a){(a==null?void 0:a.key)==="Enter"?this._handleClick():(a==null?void 0:a.key)==="Escape"?(this._closeDropdown(),this._initElementsSelected(),this._hidePlaceholder(),(!this._selectedValue||this._selectedValue.length<=0)&&(this._filteredElements=this._getFilteredElements())):this._showDropdown||this._handleClick(),this.requestUpdate()}_handleClick(){!this._disabled&&!this._readonly&&(this._input&&(!this._openWithSearch&&!this._isFiltering&&(this._input.value=""),this._showPlaceholder()),this._isFocused=!0,this._showDropdown=!0,this._updatePopperDropdown(),this._addOutsideClickListener(),this.requestUpdate())}_focusInput(){var a;(a=this._input)==null||a.focus(),this._handleClick()}_showPlaceholder(){var a,l,_,h;!this._placeHolder&&!((a=this._elements)!=null&&a.length)?(l=this._input)==null||l.setAttribute("placeholder",this._placeholderEmpty):!this._placeHolder&&((_=this._elements)!=null&&_.length)&&((h=this._input)==null||h.setAttribute("placeholder",this._dropdownPlaceholder))}_hidePlaceholder(){var a;this._placeHolder||(a=this._input)==null||a.removeAttribute("placeholder")}_handleValidity(){var l;const a=(l=this._input)==null?void 0:l.checkValidity();a!==void 0&&(this._inputValidity=a)}_cleanInput(){this._input&&(this._isFiltering=!1,this._input.value="",this._filteredElements=this._getFilteredElements(),this.requestUpdate())}_createPopperDropdown(){var _,h;if(this._openWithSearch)return;const a=(_=this.shadowRoot)==null?void 0:_.querySelector(".dss-input-group"),l=(h=this.shadowRoot)==null?void 0:h.querySelector(".dss-selector");a&&l&&(this._popperInstance=createPopper(a,l,{placement:this.dropdownPlacement,strategy:this.dropdownFixed?"fixed":"absolute",modifiers:[{name:"offset",options:{offset:[0,4]}},{name:"matchWidth",enabled:!0,phase:"beforeWrite",fn({state:b}){b.elements.popper.style.width=`${a.offsetWidth}px`},effect:({state:b})=>{b.elements.popper.style.width=`${a.offsetWidth}px`}}]}))}_updatePopperDropdown(){if(this.dropdownOffsetX&&this.dropdownOffsetY){const a=this.dropdownOffsetX,l=this.dropdownOffsetY;this._popperInstance.setOptions({modifiers:[{name:"popperOffsets",phase:"write",fn({state:_}){_.modifiersData.popperOffsets={x:a,y:l}}},{name:"applyStyles",phase:"write",fn({state:_}){var h,b,g,f;Object.assign(_.elements.popper.style,{position:_.options.strategy,left:`${(b=(h=_==null?void 0:_.modifiersData)==null?void 0:h.popperOffsets)==null?void 0:b.x}px`,top:`${(f=(g=_==null?void 0:_.modifiersData)==null?void 0:g.popperOffsets)==null?void 0:f.y}px`,transform:"none"})}}]})}else this._popperInstance.update()}render(){var h,b;const a={"dss-selector":!this._openWithSearch,"dss-selector--visible":this._showDropdown,"dss-selector--open-with-search":this._openWithSearch,"dss-selector--disabled":this._disabled,"dss-selector-dropdown":!0,"dss-selector--md":!this._openWithSearch&&this._inputSize==="md"},l={"dss-input-group--invalid":this._invalid||!this._inputValidity,"dss-input-group--required":this._required,"dss-input-group--disabled":this._disabled,"dss-input-group--focused":((h=this._input)==null?void 0:h.value)||this._placeHolder||this._isFocused,"dss-input-group--lg":this._inputSize==="lg","dss-input-group--md":this._inputSize==="md","dss-input-group--dropdown":!0,"dss-input-group--read-only":this._readonly,"dss-input-group--has-icon":this._icon&&this._icon!=="","dss-input-group--no-label":!this._label},_={"dss-input-help--invalid":this._invalid,"dss-input-help--disabled":this._disabled};return u$1` 
		<div class="dss-wrapper" style=${o$1(this._boxStyle??void 0)}>
      <div
        class="dss-input-group dss-input-group--dropdown ${e$1(l)}"
        role="combobox"
        aria-controls="dropdown-options"
        aria-expanded=${o$1(this._showDropdown)}
      >
        ${this._icon!==""?u$1`
							<${dssIcon$k} class="dss-input-icon" size="md" icon="${this._icon}"></${dssIcon$k}>
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

        ${!this._openWithSearch&&!this._readonly?u$1`
							<${dssIconButton$7}
								class="dss-icon-button dss-input-dropdown__toggle"
								size="md"
								icon="${this._showDropdown?"keyboard_arrow_up":"keyboard_arrow_down"}"
								label="${this._showDropdown?"Tancar dropdown":"Obrir dropdown"}"
								ariaExpanded="${this._showDropdown}"
								variant="primary"
								?disabled=${this._disabled}
								disableTabindex
								@onClick=${this._toggleDropdown}
							></${dssIconButton$7}>
            `:this._openWithSearch?u$1`
							<${dssIconButton$7}
								class="dss-icon-button dss-input-dropdown__toggle"
								size="md"
								label="esborra la selecció"
								icon="close"
								variant="primary"
								?disabled=${this._disabled||this._readonly}
								disableTabindex
								@onClick=${this._cleanInput}
							></${dssIconButton$7}>
            `:u$1``}
      </div>

      ${this._helpText&&!this._openWithSearch?u$1`
            <div class="dss-input-help ${e$1(_)}">
              <span>${this._helpText}</span>
            </div>
          `:null}
			<${dssSelector}
				ariaLabel="Llista d'elements"
				class="${e$1(a)}"
				.multiple=${this._multiple}
				.tick=${this._tick}
				.deselectable=${this._deselectable}
				.disabled=${this._disabled}
				.elements=${this._filteredElements}
				.filtre=${(b=this._input)==null?void 0:b.value}
				.filterThreshold=${this._filterThreshold}
				.selectedValue=${this._selectedValue}
				.type=${this._type}
				.labelSelectAll=${this._labelSelectAll}
				.labelDeselectAll=${this._labelDeselectAll}
				.selectAll=${this._selectAll}
				isDisplayed=${this._showDropdown}
				elementsSelected=${this._selectElements}
				boxStyle=${this._selectorStyle}
				@onValueChange="${this._onSelectorChanges}"
				@keydown="${g=>{g.key==="Escape"&&this._handleBlurSelector(this,g)}}"
				@focusout=${this._handleFocusOut}
			>
			</${dssSelector}>
    </div>`}}__decorateClass$O([n({type:Number})],InputDropdown.prototype,"dropdownOffsetX",2);__decorateClass$O([n({type:Number})],InputDropdown.prototype,"dropdownOffsetY",2);__decorateClass$O([n({type:String})],InputDropdown.prototype,"icon",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"placeHolder",1);__decorateClass$O([n(booleanType)],InputDropdown.prototype,"unorder",1);__decorateClass$O([n({type:Array})],InputDropdown.prototype,"elements",1);__decorateClass$O([n(booleanType)],InputDropdown.prototype,"multiple",1);__decorateClass$O([n(booleanType)],InputDropdown.prototype,"tick",1);__decorateClass$O([n(booleanType)],InputDropdown.prototype,"openWithSearch",1);__decorateClass$O([n(booleanType)],InputDropdown.prototype,"showDropdown",1);__decorateClass$O([n(booleanType)],InputDropdown.prototype,"deselectable",1);__decorateClass$O([n({type:Array})],InputDropdown.prototype,"selectedValue",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"type",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"boxStyle",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"selectorStyle",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"labelSelectAll",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"labelDeselectAll",1);__decorateClass$O([n(booleanType)],InputDropdown.prototype,"selectAll",1);__decorateClass$O([n(booleanType)],InputDropdown.prototype,"invalid",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"inputSize",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"helpText",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"dropdownPlaceholder",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"placeholderEmpty",1);__decorateClass$O([n({type:Number})],InputDropdown.prototype,"filterThreshold",1);__decorateClass$O([n({type:Number})],InputDropdown.prototype,"searchThreshold",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"value",1);__decorateClass$O([n({type:String})],InputDropdown.prototype,"dropdownPlacement",2);__decorateClass$O([n(booleanType)],InputDropdown.prototype,"dropdownFixed",2);const inputSwitchStyles=':host{display:inline-block;width:-moz-fit-content;width:fit-content}.dss-switch{display:flex;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;gap:.5rem;align-items:center;position:relative;transition:.3s all ease-in}.dss-switch--sm .dss-switch__slider{width:26px;height:16px}.dss-switch--md .dss-switch__slider{width:39px;height:24px}.dss-switch--lg .dss-switch__slider{width:52px;height:32px}::slotted(input[type="checkbox"]){display:none}.dss-switch .dss-switch__slider{position:relative;cursor:pointer;background-color:var(--color-neutral-500);border-radius:100px;transition:.3s all ease-in}.dss-switch .dss-switch__slider:focus-visible{outline:4px solid var(--color-blue-200)}.dss-switch .dss-switch__slider:before{position:absolute;content:"";display:flex;justify-content:center;align-items:center;background-color:#fff;border-radius:100%;box-shadow:0 1px 2px #0000000d,0 1px 3px 1px #0000001a;transition:.3s all ease-in}.dss-switch__slider:hover{background-color:var(--color-neutral-600)}.dss-switch__slider:active{background-color:var(--color-neutral-500);transition:none}.dss-switch--checked .dss-switch__slider{background-color:var(--color-primary-500)}.dss-switch--checked .dss-switch__slider:hover{background-color:var(--color-primary-600)}.dss-switch--checked .dss-switch__slider:active{background-color:var(--color-primary-400);transition:none}.dss-switch__slider:active:before{color:var(--color-neutral-500);transition:none}.dss-switch--checked .dss-switch__slider:active:before{color:var(--color-primary-400);transition:none}.dss-switch--disabled .dss-switch__slider{cursor:not-allowed;background-color:var(--color-neutral-200)}.dss-switch--disabled .dss-switch__slider:before{color:var(--color-neutral-500)}.dss-switch--disabled:not(.dss-switch--checked) .dss-switch__slider:before{background-color:var(--color-neutral-400);color:var(--color-neutral-100)}.dss-switch--disabled.dss-switch--checked .dss-switch__slider{background-color:var(--color-neutral-200)}.dss-switch--disabled.dss-switch--checked .dss-switch__slider:before{background-color:var(--color-neutral-400);color:var(--color-neutral-900)}.dss-switch--lg.dss-switch--disabled.dss-switch--checked .dss-switch__slider:before{background-color:var(--color-neutral-100)}.dss-switch--lg .dss-switch__slider:before{font-family:var(--font-icons);content:"close";color:var(--color-primary-500);font-size:16px;height:24px;width:24px;left:4px;bottom:4px}.dss-switch--md .dss-switch__slider:before{height:18px;width:18px;left:3px;bottom:3px}.dss-switch--sm .dss-switch__slider:before{height:12px;width:12px;left:2px;bottom:2px}.dss-switch--lg.dss-switch--checked .dss-switch__slider:before{transform:translate(20px);content:"done";color:var(--color-primary-500)}.dss-switch--md.dss-switch--checked .dss-switch__slider:before{transform:translate(15px)}.dss-switch--sm.dss-switch--checked .dss-switch__slider:before{transform:translate(10px)}::slotted(label){font-family:var(--font-family);font-style:normal;font-weight:400;font-size:14px;line-height:24px;color:var(--color-neutral-900)}.dss-switch--lg ::slotted(label){font-weight:600;font-size:16px}',template$h=d=>{const a={"dss-switch--sm":d._size==="sm","dss-switch--md":d._size==="md","dss-switch--lg":d._size==="lg","dss-switch--checked":d._checked,"dss-switch--disabled":d._disabled};return u$1`
    <div class="dss-switch ${e$1(a)}">
      <div
        class="dss-switch__slider"
        tabindex="${d._disabled?-1:0}"
        @keydown="${d._handleKeydown}"
        @click="${d._handleClick}"
      ></div>
      <slot name="input"></slot>
      <slot name="label" @click="${d._handleClick}"></slot>
    </div>
  `};var __defProp$N=Object.defineProperty,__getOwnPropDesc$o=Object.getOwnPropertyDescriptor,__decorateClass$N=(d,a,l,_)=>{for(var h=__getOwnPropDesc$o(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$N(a,l,h),h};class InputSwitch extends r$1{constructor(){super(...arguments),this._checked=!1,this._isCheckedPropDefined=!1,this._isFirstUpdate=!0,this._disabled=!1,this._readonly=!1,this._size="md",this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)l.type==="attributes"&&(this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(iconStyles),r$2(inputSwitchStyles)]}get _input(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}set size(a){const l=this._size;this._size=a,this.requestUpdate("size",l)}get size(){return this._size}set checked(a){const l=this._checked;this._checked=a,this._isCheckedPropDefined=!0,this._isFirstUpdate||this._dispatchChange(),this.requestUpdate("checked",l)}get checked(){return this._checked}disconnectedCallback(){this.observer.disconnect()}_checkInputAttributes(){var _,h,b;if(!this._isCheckedPropDefined){const g=(_=this._input)==null?void 0:_.getAttribute("checked");this._checked=g!==null}const a=(h=this._input)==null?void 0:h.getAttribute("disabled");this._disabled=a!==null;const l=(b=this._input)==null?void 0:b.getAttribute("readonly");this._readonly=l!==null}_handleClick(){!this._disabled&&!this._readonly&&this._input&&(this._checked=!this._checked,this._checked?this._input.setAttribute("checked","true"):this._input.removeAttribute("checked"),this._dispatchChange())}_handleKeydown(a){(a.key==="Enter"||a.key===" ")&&this._handleClick()}_dispatchChange(){this.dispatchEvent(new CustomEvent("onChangeValue",{detail:this._checked,bubbles:!0,composed:!0}))}async firstUpdated(){try{await this.updateComplete,this._input&&(this._checkInputAttributes(),this.observer.observe(this._input,this.observerConfig)),this._isFirstUpdate=!1,this.requestUpdate()}catch{console.error("ERROR OCURRED")}}render(){return template$h(this)}}__decorateClass$N([n({type:String})],InputSwitch.prototype,"size");__decorateClass$N([n(booleanType)],InputSwitch.prototype,"checked");const dssIcon$j=i`dss-icon${s(getCustomElementSuffix())}`,dssIconButton$6=i`dss-icon-button${s(getCustomElementSuffix())}`,template$g=d=>{var _,h,b,g,f,$,k;const a={"dss-input-group--invalid":d._invalid||!d._inputValidity,"dss-input-group--disabled":(_=d._input)==null?void 0:_.disabled,"dss-input-group--required":(h=d._input)==null?void 0:h.required,"dss-input-group--read-only":(b=d._input)==null?void 0:b.readOnly,"dss-input-group--focused":((g=d._input)==null?void 0:g.value)||d._placeholder||d._isFocused,"dss-input-group--lg":d._inputSize==="lg","dss-input-group--md":d._inputSize==="md","dss-input-group--numeric":d._isTypeNumeric,"dss-input-group--has-icon":d._icon&&d._icon!=="","dss-input-group--no-min-width":d._removeMinWidth,"dss-input-group--no-label":!d._labelSlot},l={"dss-input-help--invalid":d._invalid,"dss-input-help--disabled":(f=d._input)==null?void 0:f.disabled};return u$1`
    <div class="dss-input-wrapper">
        <div class="dss-input-group ${e$1(a)}">
          ${d._icon?u$1`
                <${dssIcon$j} class="dss-input-icon" size="md" icon="${d._icon}"></${dssIcon$j}>
              `:null}

          <slot
            name="input"
            @click=${d._handleClick}
            @input=${d._handleInput}
            @focusin=${d._handleFocusIn}
            @focusout=${d._handleFocusOut}
          ></slot>

          <slot name="label" @click=${d._focusInput}></slot>

          ${d._isTypeNumeric?u$1`
                <div class="dss-input__numeric-buttons">
                  <${dssIconButton$6}
                    label="augmentar"
                    size="sm"
                    icon="keyboard_arrow_up"
                    variant="primary"
                    ?disabled=${d._input.disabled||d._input.readOnly}
                    disableTabindex
                    @onClick=${d._stepUp}
                  ></${dssIconButton$6}>
                  <${dssIconButton$6}
                    label="disminuir"
                    size="sm"
                    icon="keyboard_arrow_down"
                    variant="primary"
                    ?disabled=${d._input.disabled||d._input.readOnly}
                    disableTabindex
                    @onClick=${d._stepDown}
                  ></${dssIconButton$6}>
                </div>
              `:null}
        </div>
        ${d._helpText?u$1`
              <div class="dss-input-help ${e$1(l)}">
                <span>${d._helpText}</span>
                ${d._maxLength?u$1`<span>
                      ${(k=($=d._input)==null?void 0:$.value)==null?void 0:k.length}/${d._maxLength}
                    </span>`:null}
              </div>
            `:null}
      </div>
  `};var __defProp$M=Object.defineProperty,__getOwnPropDesc$n=Object.getOwnPropertyDescriptor,__decorateClass$M=(d,a,l,_)=>{for(var h=__getOwnPropDesc$n(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$M(a,l,h),h};class Input extends r$1{constructor(){super(...arguments),this._label="Label",this._icon="add_box",this._placeholder="",this._inputSize="lg",this._maxLength=void 0,this._invalid=!1,this._helpText="",this._isFocused=!1,this._isTypeNumeric=!1,this._inputValidity=!0,this._removeMinWidth=!1,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)l.type==="attributes"&&(this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(inputStyles)]}get _input(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}get _labelSlot(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="label"]'))||void 0;return a==null?void 0:a.assignedElements()[0]}set label(a){const l=this._label;this._label=a,this.requestUpdate("label",l)}get label(){return this._label}set icon(a){const l=this._icon;this._icon=a,this.requestUpdate("icon",l)}get icon(){return this._icon}set inputSize(a){const l=this._inputSize;a==="md"?this._inputSize=a:this._inputSize="lg",this.requestUpdate("inputSize",l)}get inputSize(){return this._inputSize}set helpText(a){const l=this._helpText;this._helpText=a,this.requestUpdate("helpText",l)}get helpText(){return this._helpText}set invalid(a){const l=this._invalid;this._invalid=a,this.requestUpdate("invalid",l)}get invalid(){return this._invalid}set removeMinWidth(a){const l=this._removeMinWidth;this._removeMinWidth=a,this.requestUpdate("removeMinWidth",l)}get removeMinWidth(){return this._removeMinWidth}set value(a){a!==void 0&&this.requestUpdate()}get value(){var a;return((a=this._input)==null?void 0:a.value)||""}disconnectedCallback(){this.observer.disconnect()}_handleClick(){this.requestUpdate()}_handleInput(){this._isTypeNumeric&&this._maxLength&&this._input&&(this._input.value=this._input.value.slice(0,this._maxLength)),this._handleValidity(),this.requestUpdate()}_handleFocusIn(){this._isFocused=!0,this.requestUpdate()}_handleFocusOut(){this._isFocused=!1,this.requestUpdate()}_focusInput(){var a;(a=this._input)==null||a.focus()}_handleValidity(){var l;const a=(l=this._input)==null?void 0:l.checkValidity();a!==void 0&&(this._inputValidity=a)}_stepUp(){var a;(a=this._input)==null||a.stepUp(),this._handleValidity(),this._dispatchValueChange(),this.requestUpdate()}_stepDown(){var a;(a=this._input)==null||a.stepDown(),this._handleValidity(),this._dispatchValueChange(),this.requestUpdate()}_dispatchValueChange(){if(this._input){const a={detail:this._input.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onInputChange",a))}}_checkInputAttributes(){var _,h,b,g,f;const a=(_=this._input)==null?void 0:_.getAttribute("placeholder");a&&(this._placeholder=a),((h=this._input)==null?void 0:h.getAttribute("type"))==="number"&&(this._isTypeNumeric=!0);const l=(b=this._input)==null?void 0:b.getAttribute("maxlength");this._maxLength=l?+l:void 0,(g=this._input)!=null&&g.value&&((f=this._input)==null?void 0:f.value)!==""&&this._handleValidity()}async firstUpdated(){try{await this.updateComplete,this._input&&(this._checkInputAttributes(),this.observer.observe(this._input,this.observerConfig)),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}render(){return template$g(this)}}__decorateClass$M([n({type:String})],Input.prototype,"label");__decorateClass$M([n({type:String})],Input.prototype,"icon");__decorateClass$M([n({type:String})],Input.prototype,"inputSize");__decorateClass$M([n({type:String})],Input.prototype,"helpText");__decorateClass$M([n(booleanType)],Input.prototype,"invalid");__decorateClass$M([n(booleanType)],Input.prototype,"removeMinWidth");__decorateClass$M([n({type:String})],Input.prototype,"value");const dssBadge=i`dss-badge${s(getCustomElementSuffix())}`,dssIconBadge=i`dss-icon-badge${s(getCustomElementSuffix())}`,dssTooltip$2=i`dss-tooltip${s(getCustomElementSuffix())}`,dssIcon$i=i`dss-icon${s(getCustomElementSuffix())}`,dssIconButton$5=i`dss-icon-button${s(getCustomElementSuffix())}`,dssDecorativeIcon$3=i`dss-decorative-icon${s(getCustomElementSuffix())}`,itemListTemplate=d=>u$1`
  <div
    class=${e$1({"dss-item-list":!0,"dss-item-list--widget":d._widget})}
  >
    ${d._items.map(a=>{var _,h;const l=b=>{const g=b.target,f=g.scrollWidth>g.offsetWidth;g.setAttribute("data-truncated",f.toString())};return u$1`
        <div class="dss-item-list__item">
          ${d._widget?u$1`
                <div class="item-widget-badge">
                  <${dssIconBadge} size="sm"
                    state="${o$1(a.iconBadgeLeftState)}"
                    icon="${o$1(a.iconBadgeLeftIcon)}"
                    aria-label="${a.iconBadgeLabel}"
                  > 
                    ${a.iconBadgeLabel?u$1`<${dssTooltip$2} slot="tooltip" aria-hidden="true" hideArrow>${a.iconBadgeLabel}</${dssTooltip$2}>`:null}
                  </${dssIconBadge}>  
                </div>
              `:null}

          <div class="item-details">
            ${d._widget&&a.date?u$1`
                  <div class="item-details__date">
                    <span>${a.date}</span>
                  </div>
                `:null}
            <div class="item-details__title">
              ${a.decorativeIcon&&!d._widget?u$1`
                    <${dssDecorativeIcon$3} icon=${a.decorativeIcon} size="sm" state=${o$1(a.decorativeIconType)}
                    >
                    </${dssDecorativeIcon$3}>
                  `:null}
              <div class="item-details__title-text" @mouseenter=${l}>
                ${a.title}
                <${dssTooltip$2} hideArrow class="title-tooltip" slot="tooltip" aria-hidden="true">${a.title}</${dssTooltip$2}>
              </div>
            </div>
            <div class="item-details__subtitle" @mouseenter=${l}>
              ${a.subtitle}
              <${dssTooltip$2} hideArrow class="title-tooltip" slot="tooltip" aria-hidden="true">${a.subtitle}</${dssTooltip$2}>
            </div>
          </div>

          ${a.id?u$1`
            <slot name="item-custom-${a.id}"></slot>
          `:u$1`
            ${a.badgeText&&!d._widget?a.badgeIcon?u$1`
                    <div class="item-action">
                      <${dssBadge}
                        text="${a.badgeText}"
                        icon="${a.badgeIcon}"
                        size="${a.badgeSize?a.badgeSize:"sm"}"
                        state="${a.badgeState?a.badgeState:"undeterminated"}"
                      >
                      </${dssBadge}>
                    </div>
                  `:u$1`
                    <div class="item-action">
                      <${dssBadge}
                        text="${a.badgeText}"
                        size="${a.badgeSize?a.badgeSize:"sm"}"
                        state="${a.badgeState?a.badgeState:"undeterminated"}"
                      >
                      </${dssBadge}>
                    </div>
                  `:null}
            ${a.actionIcon&&!d._widget?u$1`
                  <div class="item-action">
                    <${dssIconButton$5} size="md" icon=${a.actionIcon} label="${a.actionLabel}" variant=${a.actionIconType?a.actionIconType:"primary"} @click=${()=>d._dispatchItemAction(a)}></${dssIconButton$5}>
                  </div>
                `:null}
            ${d._widget?u$1`
                  <div class="item-widget">
                    ${a.description?u$1`
                          <div class="item-widget-description">
                            ${a.description}
                          </div>
                        `:null}
                    ${(_=a.icons)!=null&&_.length?u$1`
                          ${a.icons.map(b=>u$1`
                              <${dssIcon$i} size="md" icon="${b.icon}"></${dssIcon$i}>
                            `)}
                        `:null}
                    ${a.iconBadgeRightState?u$1`
                          <${dssIconBadge}
                            size="sm"
                            state="${o$1(a.iconBadgeRightState)}"
                            icon="${o$1(a.iconBadgeRightIcon)}"
                          />
                        `:null}
                    ${(h=a.actions)!=null&&h.length?u$1`
                          ${a.actions.map(b=>u$1`
                              <${dssIconButton$5}
                                label="${b.label}"
                                icon="${b.icon}"
                                variant="${b.type}"
                                @onClick=${()=>d._dispatchWidgetAction(a,b.action)}
                              />
                            `)}
                        `:null}
                  </div>
                `:null}
          `}
        </div>
      `})}
  </div>
`,itemListStyles=":host{display:block;width:100%;max-width:100%;font-family:var(--font-family)}.dss-item-list{padding:0 var(--dss-spacing-md)}.dss-item-list__item{display:flex;align-items:center;gap:var(--dss-spacing-xs);padding:var(--dss-spacing-xs) 0;max-width:100%}.dss-item-list__item+.dss-item-list__item{border-top:var(--dss-border-width-sm) solid var(--color-neutral-200)}.item-details{flex:1;min-width:0;display:flex;flex-direction:column;gap:var(--dss-spacing-xxs)}.item-details__date,.item-widget-description{font-size:14px;line-height:24px;color:var(--color-neutral-500);font-weight:var(--font-regular)}.item-details__title{display:flex;align-items:center;gap:var(--dss-spacing-xs);font-size:14px;line-height:24px;color:var(--color-neutral-900);font-weight:var(--font-semibold);flex:1}.item-details__title-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;min-width:0;flex:1}.item-details__title-text .title-tooltip{display:none;white-space:wrap}.item-details__title-text[data-truncated=true] .title-tooltip{display:block}.item-details__subtitle{font-size:14px;line-height:24px;color:var(--color-neutral-700);font-weight:var(--font-regular);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;min-width:0;flex:1}.item-details__subtitle .title-tooltip{display:none}.item-details__subtitle[data-truncated=true] .title-tooltip{display:inline-block}.item-widget{display:flex;align-items:center;gap:var(--dss-spacing-xs);flex-shrink:0}.dss-item-list--widget{padding:0}.dss-item-list--widget .item-details{gap:0}::slotted(div){display:flex;align-items:center;gap:var(--dss-spacing-xs)}";var __defProp$L=Object.defineProperty,__getOwnPropDesc$m=Object.getOwnPropertyDescriptor,__decorateClass$L=(d,a,l,_)=>{for(var h=__getOwnPropDesc$m(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$L(a,l,h),h};class ItemList extends r$1{constructor(){super(...arguments),this._items=[],this._widget=!1,this._widgetActions=[],this._widgetIcons=[]}static get styles(){return[r$2(iconStyles),r$2(decorativeIconStyles),r$2(itemListStyles)]}set items(a){const l=this._items;this._items=a,this.requestUpdate("items",l)}get items(){return this._items}set widget(a){const l=this._widget;this._widget=a,this.requestUpdate("widget",l)}get widget(){return this._widget}set widgetActions(a){const l=this._widgetActions;this._widgetActions=a,this.requestUpdate("widgetActions",l)}get widgetActions(){return this._widgetActions}set widgetIcons(a){const l=this._widgetIcons;this._widgetIcons=a,this.requestUpdate("widgetIcons",l)}get widgetIcons(){return this._widgetIcons}_dispatchItemAction(a){const l={detail:a,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onClickItem",l))}_dispatchWidgetAction(a,l){const _={detail:{item:a,action:l},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onClickWidgetAction",_))}render(){return itemListTemplate(this)}}__decorateClass$L([n({type:Array})],ItemList.prototype,"items");__decorateClass$L([n({type:Boolean})],ItemList.prototype,"widget");__decorateClass$L([n({type:Array})],ItemList.prototype,"widgetActions");__decorateClass$L([n({type:Array})],ItemList.prototype,"widgetIcons");const styles$h=':root{--legend-bg-color: var(--color-neutral-100)}.dss-legend{display:flex;flex-direction:row;gap:8px;height:-moz-fit-content;height:fit-content;font-weight:400;font-size:12px;line-height:16px}.dss-legend--column{flex-direction:column;gap:8px}.dss-legend__item{list-style:none;display:flex;align-items:center}.dss-legend__icon{display:flex;align-items:center;gap:8px;height:-moz-fit-content;height:fit-content;font-weight:400;font-size:12px;line-height:16px}.dss-legend__item:before{content:"";display:inline-block;background-color:var(--legend-bg-color);width:16px;height:16px;border-radius:4px;margin-right:8px}',dssIcon$h=i`dss-icon${s(getCustomElementSuffix())}`,renderIconItem=d=>u$1`
  <li class="dss-legend__icon" aria-label=${d.label}>
    <${dssIcon$h} style="color: var(--color-${d.color}-${d.shade});" icon="${d.icon||""}"></${dssIcon$h}>
    ${d.label}
  </li>
`,renderColorItem=d=>u$1`
  <li
    class="dss-legend__item"
    style="--legend-bg-color: var(--color-${d.color}-${d.shade});"
    aria-label=${d.label}
  >
    ${d.label}
  </li>
`,template$f=d=>{const l=Array.isArray(d.items)?d.items.slice(0,Math.min(d.itemsPerRowOrColumn,5)):[];return u$1`
    <div aria-label="Legenda informativa del gràfic">
      <ul
        class="dss-legend ${d.orientation==="column"?"dss-legend--column":""}"
      >
        ${l.map(_=>d.type==="icon"?renderIconItem(_):renderColorItem(_))}
      </ul>
    </div>
  `};var __defProp$K=Object.defineProperty,__decorateClass$K=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$K(a,l,h),h};class Legend extends r$1{constructor(){super(...arguments),this.orientation="row",this.items=[],this.itemsPerRowOrColumn=5,this.type="color"}static get styles(){return[r$2(resetStyles),r$2(styles$h)]}render(){return template$f(this)}}__decorateClass$K([n({type:String})],Legend.prototype,"orientation");__decorateClass$K([n({type:Array})],Legend.prototype,"items");__decorateClass$K([n({type:Number})],Legend.prototype,"itemsPerRowOrColumn");__decorateClass$K([n({type:String})],Legend.prototype,"type");const styles$g=".dss-list-menu{display:flex;min-width:200px;justify-content:flex-start;flex-direction:column;min-width:160px;width:100%;color:var(--color-neutral-900);gap:var(--dss-spacing-xxs)}.dss-list-menu-header{display:flex;justify-content:flex-start;flex-direction:column;padding:0 var(--dss-spacing-md) var(--dss-spacing-md) var(--dss-spacing-sm);gap:var(--dss-spacing-xxs)}.dss-list-menu-header-title{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs);box-sizing:border-box;color:var(--color-neutral-900);font-size:1.25rem;line-height:1.875rem;font-weight:var(--font-bold);padding:0;overflow:hidden}.dss-list-menu-header-description{box-sizing:border-box;padding:0;font-size:.875rem;line-height:1.5rem}.dss-list-menu-title{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs);box-sizing:border-box;font-size:1.25rem;line-height:1.875rem;font-weight:var(--font-bold);padding:var(--dss-spacing-sm) var(--dss-spacing-md);height:40px;overflow:hidden}.dss-list-menu-description{box-sizing:border-box;padding:0 var(--dss-spacing-md);font-size:.875rem;line-height:1.5rem}.dss-list-menu-nav{display:flex;justify-content:flex-start;flex-direction:column;gap:var(--dss-spacing-xxs);margin:0;padding:0;list-style:none}.dss-list-menu-item{position:relative;display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-xs);min-width:10rem;box-sizing:border-box;width:100%;max-width:100%;height:40px;overflow:hidden;font-size:.875rem;line-height:1.5rem;font-weight:var(--font-semibold);color:var(--color-neutral-900);border-radius:var(--dss-radius-sm);padding:var(--dss-spacing-sm) var(--dss-spacing-xs) var(--dss-spacing-sm) var(--dss-spacing-md);background-color:transparent;transition:background-color .3s ease-in-out,color .3s ease-in-out;cursor:pointer}.dss-list-menu-item:not(.dss-list-menu-item.disabled):hover{background-color:var(--color-primary-100)}.dss-list-menu-item:not(.dss-list-menu-item.disabled):active{background-color:var(--color-primary-50)}.dss-list-menu-item:not(.dss-list-menu-item.disabled):focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-list-menu-item.dss-list-menu-item.disabled{cursor:not-allowed;background-color:var(--color-neutral-50);color:var(--color-neutral-500);font-weight:var(--font-regular)}.dss-list-menu-item.selected{background-color:var(--color-primary-50)}.dss-list-menu-item__content{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs)}.dss-list-menu-item__content-text{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;height:24px;overflow:hidden}.dss-list-menu-item__action{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs)}.notification-placeholder{display:flex;align-items:center;justify-content:center;width:24px;height:24px}",dssIcon$g=i`dss-icon${s(getCustomElementSuffix())}`,dssNotificationBadge$2=i`dss-notification-badge${s(getCustomElementSuffix())}`,dssDecorativeIcon$2=i`dss-decorative-icon${s(getCustomElementSuffix())}`,template$e=d=>{var a;return u$1`
  <div class="dss-list-menu">
    <div class="dss-list-menu-header">
      <h4 class="dss-list-menu-header-title" id="menu-title">
        ${d.icon?u$1`<${dssDecorativeIcon$2} icon="${d.icon}" state="default" size="md" />`:""}
        ${d.title}
      </h4>
      <p class="dss-list-menu-header-description" id="menu-description">
        ${d.description}
      </p>
    </div>
    <ul class="dss-list-menu-nav" role="menu" aria-labelledby="menu-title" aria-describedby="menu-description">
      ${(a=d.items)==null?void 0:a.map((l,_)=>{const b={"dss-list-menu-item":!0,selected:d.selectedItemIndex===_,disabled:!!l.disabled};return u$1`
          <li
            class="${e$1(b)}"
            role="menuitem"
            aria-disabled="${l.disabled?"true":"false"}"
            tabindex="${l.disabled?-1:0}"
            @click="${()=>d.handleItemClick(_)}"
          >
            <div class="dss-list-menu-item__content">
              <${dssIcon$g} icon="${l.icon}"></${dssIcon$g}>
              <span class="dss-list-menu-item__content-text">${l.label}</span>
              <div class="notification-placeholder">
                ${l.hasNotification?u$1`<${dssNotificationBadge$2} dot state="succes" type="default" />`:E}
              </div>
              ${l.hasAction?u$1`<${dssIcon$g} icon="chevron_right"></${dssIcon$g}>`:E}
            </div>
          </li>
        `})}
    </ul>
  </div>
`};var __defProp$J=Object.defineProperty,__decorateClass$J=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$J(a,l,h),h};class ListMenu extends r$1{constructor(){super(...arguments),this.title="",this.description="",this.icon=null,this.items=[],this.disabled=!1,this.selectedItemIndex=null}static get styles(){return[r$2(resetStyles),r$2(styles$g)]}handleItemClick(a){const l=this.items[a];l.disabled||(this.selectedItemIndex=a,this.dispatchEvent(new CustomEvent("item-clicked",{detail:{label:l.label},bubbles:!0,composed:!0})))}onKeyDown(a){a.code==="ArrowDown"?(a.preventDefault(),this.moveFocus(1)):a.code==="ArrowUp"?(a.preventDefault(),this.moveFocus(-1)):(a.code==="Enter"||a.code==="Space"||a.code==="NumpadEnter")&&(a.preventDefault(),this.selectedItemIndex!==null&&this.handleItemClick(this.selectedItemIndex))}moveFocus(a){var h,b;const l=((h=this.shadowRoot)==null?void 0:h.querySelectorAll(".dss-list-menu-item:not(.disabled)"))||[];if(l.length===0)return;let _=(this.selectedItemIndex??-1)+a;_<0&&(_=l.length-1),_>=l.length&&(_=0),this.selectedItemIndex=Array.from(l).findIndex((g,f)=>f===_),(b=l[_])==null||b.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeyDown)}render(){return template$e(this)}}__decorateClass$J([n({type:String})],ListMenu.prototype,"title");__decorateClass$J([n({type:String})],ListMenu.prototype,"description");__decorateClass$J([n({type:String})],ListMenu.prototype,"icon");__decorateClass$J([n({type:Array})],ListMenu.prototype,"items");__decorateClass$J([n({type:String})],ListMenu.prototype,"disabled");__decorateClass$J([r()],ListMenu.prototype,"selectedItemIndex");const modalStyles=":host{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;visibility:hidden;opacity:0;display:flex;justify-content:center;align-items:center;transition:opacity .25s;z-index:999}:host([open]){visibility:visible}:host(.show){opacity:1}:host(.hide){opacity:0}.dss-dialog{display:flex;flex-direction:column;box-sizing:border-box;width:-moz-fit-content;width:fit-content;min-width:400px;max-width:45%;max-height:80vh;background:var(--color-white);border-radius:var(--dss-radius-lg);box-shadow:0 8px 12px 6px #0000000d,0 4px 4px #0000001a;visibility:hidden}.dss-dialog.dss-dialog--full-height{height:100%}.dss-dialog.dss-dialog--full-width{width:45%}:host(.show) .dss-dialog{visibility:visible}.dss-dialog-header{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:var(--dss-spacing-lg);border-top-left-radius:var(--dss-radius-lg);border-top-right-radius:var(--dss-radius-lg)}.dss-dialog--sm .dss-dialog-header{padding:var(--dss-spacing-md)}.dss-dialog--has-header-slot .dss-dialog-header{gap:var(--dss-spacing-md)}.dss-dialog-body{flex:1;padding:0 var(--dss-spacing-lg)}.dss-dialog--no-body-padding .dss-dialog-body{padding:0}.dss-dialog.dss-dialog--has-scroll .dss-dialog-body{overflow-y:auto;max-height:100%}.dss-dialog--flex-body .dss-dialog-body{display:flex}.dss-dialog--footer-empty .dss-dialog-body{padding-bottom:var(--dss-spacing-lg)}.dss-dialog--sm .dss-dialog-body{padding:0 var(--dss-spacing-md)}.dss-dialog--sm.dss-dialog--footer-empty .dss-dialog-body{padding-bottom:var(--dss-spacing-md)}.dss-dialog-footer{display:flex;justify-content:center;align-items:center;gap:var(--dss-spacing-md);padding:var(--dss-spacing-lg);border-bottom-left-radius:var(--dss-radius-lg);border-bottom-right-radius:var(--dss-radius-lg)}.dss-dialog--sm .dss-dialog-footer{padding:var(--dss-spacing-md)}.dss-dialog--footer-empty .dss-dialog-footer{padding:0;border-top:0!important}::slotted(div.dss-modal-footer){display:flex;justify-content:center;align-items:center;gap:var(--dss-spacing-md)}.dss-dialog-header-state--success{color:var(--color-green-800)}.dss-dialog-header-state--error{color:var(--color-red-800)}.dss-dialog-header-state--alert{color:var(--color-yellow-800)}.dss-dialog-header-state--info{color:var(--color-blue-800)}.dss-dialog-header-title{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:var(--dss-spacing-xs);font-size:20px;line-height:30px;font-weight:var(--font-bold);color:var(--color-neutral-900)}.dss-dialog-header-close{position:absolute;top:var(--dss-spacing-lg);right:calc(var(--dss-spacing-lg) - 4px)}.dss-dialog--sm .dss-dialog-header-close{top:var(--dss-spacing-md);right:calc(var(--dss-spacing-md) - 4px)}.dss-dialog.dss-dialog--has-scroll .dss-dialog-header{background-color:var(--color-white);border-bottom:var(--color-white) solid var(--dss-border-width-sm);transition:border-top-color .25s ease-in-out}.dss-dialog.dss-dialog--has-scroll .dss-dialog-header.dss-dialog-header--scrolled{border-bottom-color:var(--color-neutral-100);box-shadow:0 1px 3px 1px #0000001a,0 1px 2px #0000000d}.dss-dialog.dss-dialog--has-scroll .dss-dialog-footer{background-color:var(--color-white);border-top:var(--color-white) solid var(--dss-border-width-sm);transition:border-top-color .25s ease-in-out;z-index:900}.dss-dialog.dss-dialog--has-scroll .dss-dialog-footer.dss-dialog-footer--scrolled{border-top-color:var(--color-neutral-100)}@media screen and (min-width: 1440px) and (max-width: 1919px){.dss-dialog{max-width:50%}.dss-dss-dialog.dss-dialog--full-width{width:50%}}@media only screen and (min-width: 1024px) and (max-width: 1439px){.dss-dialog{max-width:60%}.dss-dialog.dss-dialog--full-width{width:60%}}@media only screen and (max-width: 1023px){.dss-dialog{max-width:80%;min-width:300px}.dss-dialog.dss-dialog--full-width{width:80%}}",dssIcon$f=i`dss-icon${s(getCustomElementSuffix())}`,modalTemplate=d=>{const a={[`dss-dialog--${d._size}`]:!!d._size,"dss-dialog--has-header-slot":!!d._headerSlot,"dss-dialog--footer-empty":!d._footerSlot,"dss-dialog--has-scroll":d._hasScroll,"dss-dialog--full-width":d.fullWidth,"dss-dialog--full-height":d.fullHeight,"dss-dialog--flex-body":d.flexBody,"dss-dialog--no-body-padding":d.removeBodyPadding},l={"dss-dialog-header-state--success":d._state==="success","dss-dialog-header-state--error":d._state==="error","dss-dialog-header-state--alert":d._state==="alert","dss-dialog-header-state--info":d._state==="info"};return u$1`
    <div
      class="dss-dialog ${e$1(a)}"
      role="dialog"
      aria-labelledby="dss-dialog-title"
      aria-modal="true"
      style="${d._modalStyle}"
    >
      <div class="dss-dialog-header">
        ${d._hideCloseIcon?null:u$1`
              <button
                class="dss-icon-button dss-icon-button--default dss-icon-button--lg dss-dialog-header-close"
                @click="${d._close}"
                aria-label="Tancar modal"
              >
                <${dssIcon$f} size="lg" icon="close"></${dssIcon$f}>
              </button>
            `}
        
        <div id="dss-dialog-title" class="dss-dialog-header-title">
          ${d._state?u$1`
                <${dssIcon$f} 
                  class="dss-dialog-header-state ${e$1(l)}"
                  size="xl" 
                  icon="${d._getStateIcon()}" 
                  fill>
                </${dssIcon$f}>
              `:null}
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
  `};var __defProp$I=Object.defineProperty,__getOwnPropDesc$l=Object.getOwnPropertyDescriptor,__decorateClass$I=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$l(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$I(a,l,h),h};const ANIMATION_DURATION=250;class Modal extends r$1{constructor(){super(),this.fullHeight=!1,this.fullWidth=!1,this.flexBody=!1,this.removeBodyPadding=!1,this._size="lg",this._open=!1,this._modalTitle="Title",this._state="",this._hasDivider=!1,this._hideCloseIcon=!1,this._hasScroll=!1,this._modalStyle=void 0,this._modalHeader=null,this._modalFooter=null,this._handleKeydown=this._handleKeydown.bind(this),this._handleOutsideClick=this._handleOutsideClick.bind(this)}static get styles(){return[r$2(iconStyles),r$2(buttonStyles),r$2(iconButtonStyles),r$2(modalStyles)]}set size(a){const l=this._size;this._size=a==="sm"?a:"lg",this.requestUpdate("size",l)}get size(){return this._size}set open(a){const l=this._open;this._open=a,this.requestUpdate("open",l)}get open(){return this._open}set modalTitle(a){const l=this._modalTitle;this._modalTitle=a,this.requestUpdate("modalTitle",l)}get modalTitle(){return this._modalTitle}set state(a){const l=this._state;this._state=a,this.requestUpdate("state",l)}get state(){return this._state}set hideCloseIcon(a){const l=this._hideCloseIcon;this._hideCloseIcon=a,this.requestUpdate("hideCloseIcon",l)}get hideCloseIcon(){return this._hideCloseIcon}set hasScroll(a){const l=this._hasScroll;this._hasScroll=a,this.requestUpdate("hasScroll",l)}get hasScroll(){return this._hasScroll}set modalStyle(a){const l=this._modalStyle;this._modalStyle=a,this.requestUpdate("modalStyle",l)}get modalStyle(){return this._modalStyle||""}get _headerSlot(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="header"]'))||void 0;return a==null?void 0:a.assignedElements()[0]}get _footerSlot(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="footer"]'))||void 0;return a==null?void 0:a.assignedElements()[0]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}updated(a){a.has("open")&&(this._open?this._showDialog():this._hideDialog())}_showDialog(){this.classList.add("show"),this.classList.remove("hide"),setTimeout(()=>{this.classList.add("show"),this.style.visibility="visible"},0),document.addEventListener("keydown",this._handleKeydown),document.body.style.overflow="hidden"}_hideDialog(){this.classList.add("hide"),this.classList.remove("show"),setTimeout(()=>{this.classList.remove("hide"),this.style.visibility="hidden",document.removeEventListener("keydown",this._handleKeydown)},ANIMATION_DURATION),document.body.style.overflow=""}_close(){this.open=!1,this._hideDialog(),this.requestUpdate();const a=new Event("onModalClosed");this.dispatchEvent(a)}_getStateIcon(){let a="";switch(this._state){case"success":a="check_circle";break;case"error":a="cancel";break;case"alert":a="report";break;case"info":a="info";break;default:a=""}return a}_handleKeydown(a){a.key==="Escape"&&this._close()}_handleOutsideClick(a){var l;if(this._open){const _=(l=this.shadowRoot)==null?void 0:l.querySelector(".dss-dialog"),h=a.composedPath();_&&h.includes(this)&&!h.includes(_)&&this._close()}}fixEmptyFooter(){var l;const a=(l=this.shadowRoot)==null?void 0:l.querySelector(".dss-dialog");a!=null&&a.classList.contains("dss-dialog--footer-empty")&&this.requestUpdate()}_handleScroll(a){var _,h,b,g;const l=a.target;l&&(l.scrollTop>0?(_=this._modalHeader)==null||_.classList.add("dss-dialog-header--scrolled"):(h=this._modalHeader)==null||h.classList.remove("dss-dialog-header--scrolled"),l.scrollHeight-l.scrollTop!==l.clientHeight?(b=this._modalFooter)==null||b.classList.add("dss-dialog-footer--scrolled"):(g=this._modalFooter)==null||g.classList.remove("dss-dialog-footer--scrolled"))}async firstUpdated(){var l,_,h,b,g;await this.updateComplete,this._footerSlot&&this.fixEmptyFooter();const a=(l=this.shadowRoot)==null?void 0:l.querySelector(".dss-dialog-body");if(this._hasScroll&&a){a.addEventListener("scroll",this._handleScroll.bind(this)),this._modalHeader=(_=this.shadowRoot)==null?void 0:_.querySelector(".dss-dialog-header"),this._modalFooter=(h=this.shadowRoot)==null?void 0:h.querySelector(".dss-dialog-footer");const f=this._modalHeader?this._modalHeader.clientHeight:0,$=this._modalFooter?this._modalFooter.clientHeight:0,D=(((g=(b=this.shadowRoot)==null?void 0:b.querySelector(".dss-dialog"))==null?void 0:g.clientHeight)||0)-f-$;a.scrollHeight>D&&this._modalFooter.classList.add("dss-dialog-footer--scrolled")}}render(){return modalTemplate(this)}}__decorateClass$I([n({type:String})],Modal.prototype,"size",1);__decorateClass$I([n(booleanType)],Modal.prototype,"open",1);__decorateClass$I([n({type:String})],Modal.prototype,"modalTitle",1);__decorateClass$I([n({type:String})],Modal.prototype,"state",1);__decorateClass$I([n(booleanType)],Modal.prototype,"hideCloseIcon",1);__decorateClass$I([n(booleanType)],Modal.prototype,"hasScroll",1);__decorateClass$I([n({type:String})],Modal.prototype,"modalStyle",1);__decorateClass$I([n(booleanType)],Modal.prototype,"fullHeight",2);__decorateClass$I([n(booleanType)],Modal.prototype,"fullWidth",2);__decorateClass$I([n(booleanType)],Modal.prototype,"flexBody",2);__decorateClass$I([n(booleanType)],Modal.prototype,"removeBodyPadding",2);const styles$f=":host{width:100%}.dss-module-header{display:flex;align-items:center;justify-content:space-between;gap:var(--dss-spacing-md)}.dss-module-header :first-child{flex:1}.dss-module-header .dss-module-header__child-container{display:inline-flex;align-items:center;flex-wrap:wrap;flex-shrink:0;gap:var(--dss-spacing-md)}",template$d=d=>u$1`
  <header class='dss-module-header'>
    <h2 class='dss-headline--sm'>${d.title}</h2>
    <div class='dss-module-header__child-container'>
      <p class='dss-legend--sm'>${d.legend}</p>
      <slot></slot>
    </div>
  </header>
`;var __defProp$H=Object.defineProperty,__decorateClass$H=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$H(a,l,h),h};class ModuleHeader extends r$1{constructor(){super(...arguments),this.title="",this.legend=""}static get styles(){return[r$2(resetStyles),r$2(styles$f),r$2(typographyStyles)]}render(){return template$d(this)}}__decorateClass$H([n({type:String})],ModuleHeader.prototype,"title");__decorateClass$H([n({type:String})],ModuleHeader.prototype,"legend");const styles$e=".dss-notification-badge{height:20px;width:20px;border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:12px;font-weight:var(--font-semibold);color:var(--color-white);background-color:var(--color-red-500);transition:border-color .3s ease-in}.dss-notification-badge--dot{height:14px;width:14px}.dss-notification-badge--border-white{border:var(--dss-border-width-md) solid var(--color-white)}.dss-notification-badge--border-menu{border:var(--dss-border-width-md) solid var(--color-primary-700)}.dss-notification-badge--success{background-color:var(--color-green-500)}.dss-notification-badge--error{background-color:var(--color-red-500)}.dss-notification-badge--alert{background-color:var(--color-yellow-500);color:var(--color-neutral-900)}.dss-notification-badge--info{background-color:var(--color-blue-500)}.dss-notification-badge--brand{background-color:var(--color-primary-200);color:var(--color-neutral-900)}.dss-notification-badge--hover{border-color:var(--color-primary-900)}.dss-notification-badge--active{border-color:var(--color-primary-800)}",dssIcon$e=i`dss-icon${s(getCustomElementSuffix())}`,template$c=d=>{const a={"dss-notification-badge--border-white":d.borderWhite,"dss-notification-badge--dot":d.dot,"dss-notification-badge--info":d.state==="info","dss-notification-badge--error":d.state==="error","dss-notification-badge--alert":d.state==="alert","dss-notification-badge--success":d.state==="success","dss-notification-badge--border-menu":d.borderMenu,"dss-notification-badge--hover":(d.borderMenu||d.borderWhite)&&d.isHover,"dss-notification-badge--active":(d.borderMenu||d.borderWhite)&&d.isActive,"dss-notification-badge--brand":d.type==="brand"};let l;return!d.dot&&d.icon?l=u$1`<${dssIcon$e} size="sm" icon="${d.icon}"></${dssIcon$e}>`:!d.dot&&d.value?l=u$1`<span class="dss-notification-badge-value"
      >${d.value}</span
    >`:l=null,u$1`
    <div class="dss-notification-badge ${e$1(a)}">
      ${l}
    </div>
  `};var __defProp$G=Object.defineProperty,__decorateClass$G=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$G(a,l,h),h};class NotificationBadge extends r$1{constructor(){super(...arguments),this.icon=void 0,this.value="",this.state="default",this.type="default",this.dot=!1,this.menu=!1,this.borderMenu=!1,this.borderWhite=!1,this.isHover=!1,this.isActive=!1}static get styles(){return[r$2(styles$e)]}render(){return template$c(this)}}__decorateClass$G([n({type:String})],NotificationBadge.prototype,"icon");__decorateClass$G([n({type:String})],NotificationBadge.prototype,"value");__decorateClass$G([n({type:String})],NotificationBadge.prototype,"state");__decorateClass$G([n({type:String})],NotificationBadge.prototype,"type");__decorateClass$G([n(booleanType)],NotificationBadge.prototype,"dot");__decorateClass$G([n(booleanType)],NotificationBadge.prototype,"menu");__decorateClass$G([n(booleanType)],NotificationBadge.prototype,"borderMenu");__decorateClass$G([n(booleanType)],NotificationBadge.prototype,"borderWhite");__decorateClass$G([n(booleanType)],NotificationBadge.prototype,"isHover");__decorateClass$G([n(booleanType)],NotificationBadge.prototype,"isActive");const styles$d=":host{width:100%;display:flex;justify-content:flex-end;height:-moz-fit-content;height:fit-content;font-family:var(--font-family);font-style:normal;box-shadow:0 -1px #d8d8d8}.pagination__container{display:flex;align-items:center;padding:.25rem .75rem;gap:.5rem}.pagination__container--md{padding:.25rem .75rem}.pagination__container--lg{padding:.5rem .75rem}.pagination__button{color:#0073e6;font-size:1rem;padding:0;align-items:center;background-color:transparent;border:none;border-radius:100%;cursor:pointer;display:flex;height:-moz-fit-content;height:fit-content;justify-content:center;transition:all .3s ease-in;width:-moz-fit-content;width:fit-content;font-family:var(--font-icons);width:1.5rem;height:1.5rem}.pagination__container--md .pagination__button{font-size:1rem;width:1.5rem;height:1.5rem}.pagination__container--lg .pagination__button{font-size:1.5rem;width:2rem;height:2rem}.pagination__button:hover:enabled{background-color:#bfddfa}.pagination__button:focus-visible:enabled{outline:.25rem solid #8fc2f5;transition:none}.pagination__button:active:enabled{background-color:#eff7ff;transition:none}.pagination__button:disabled{transition:none;opacity:.4;cursor:not-allowed}.pagination__item{display:flex;justify-content:center;align-items:center;background-color:transparent;border-radius:6.25rem;border:none;cursor:pointer;font-weight:600;color:#656565;font-family:var(--font-family);height:1.5rem;width:1.5rem;font-size:.75rem;line-height:1rem}.pagination__container--md .pagination__item{height:1.5rem;width:1.5rem;font-size:.75rem;line-height:1rem}.pagination__container--lg .pagination__item{height:2rem;width:2rem;font-size:1rem;line-height:1.5rem}.pagination__container--md .pagination__item--large{width:2rem}.pagination__container--lg .pagination__item--large{width:2.563rem}.pagination__item:hover:enabled,.pagination__item--selected{background:#bfddfa;color:#00356a}.pagination__item:hover:enabled{transition:all .3s ease-in}.pagination__item:active:enabled{background:#eff7ff;transition:none}.pagination__item:focus-visible:enabled{outline:.25rem solid #8fc2f5;transition:none}.pagination__item--dot{pointer-events:none}",template$b=d=>u$1`
  <div class="pagination__container pagination__container--${d._size}">
      <button
        type="button"
        class="pagination__button"
        @click=${d._prev}
        ?disabled=${+d._currentIndex==1}
      >
        <span>keyboard_arrow_left</span>
      </button>
      ${d._buttons}
      <button
        type="button"
        class="pagination__button"
        @click=${d._next}
        ?disabled=${+d._currentIndex===d._totalPages}
      >
        <span>keyboard_arrow_right</span>
      </button>
    </div>
  
`;var __defProp$F=Object.defineProperty,__getOwnPropDesc$k=Object.getOwnPropertyDescriptor,__decorateClass$F=(d,a,l,_)=>{for(var h=__getOwnPropDesc$k(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$F(a,l,h),h};class Pagination extends r$1{constructor(){super(...arguments),this._length=0,this._pageSize=0,this._totalPages=0,this._currentIndex=1,this._size="md",this._buttons=[]}static get styles(){return r$2(styles$d)}set length(a){const l=this._length;this._length=a,this.requestUpdate("length",l)}get length(){return this._length}set pageSize(a){const l=this._pageSize;this._pageSize=a,this.requestUpdate("pageSize",l)}get pageSize(){return this._pageSize}set size(a){const l=this._size;this._size=a,this.requestUpdate("size",l)}get size(){return this._size}set currentIndex(a){const l=this._currentIndex;this._currentIndex=a,this.requestUpdate("currentIndex",l)}get currentIndex(){return this._currentIndex}_next(){this._currentIndex++,this._updateButtons(),this._emitCurrentPage()}_prev(){this._currentIndex--,this._updateButtons(),this._emitCurrentPage()}_emitCurrentPage(){this.dispatchEvent(new CustomEvent("onChangePage",{detail:this._currentIndex,bubbles:!0,composed:!0}))}_updateButtons(){this._buttons=[];const a=1,l=Math.max(this._currentIndex-1,1),_=Math.min(this._currentIndex+1,this._totalPages),h=l>2,b=_<this._totalPages-2,g=this._getButtons(a,a),f=this._getButtons(this._totalPages,this._totalPages),$=x`
      <button class="pagination__item pagination__item--dot" tabindex="-1">
        ...
      </button>
    `;if(this._totalPages<=6){this._buttons=this._getButtons(a,this._totalPages),this.requestUpdate();return}if(!h&&b){const D=this._getButtons(a,4);this._buttons=[...D,$,f]}if(h&&!b){const D=this._getButtons(this._totalPages-3,this._totalPages);this._buttons=[g,$,...D]}if(h&&b){const k=this._getButtons(l+1,_);this._buttons=[g,$,...k,$,f]}this.requestUpdate()}_getButtons(a,l){const _=l-a+1;return Array(_).fill(0).map((h,b)=>{if(h){const g=b+a,f={"pagination__item--selected":this._currentIndex===g,"pagination__item--large":g>=10};return x`
            <button
              class="pagination__item ${e$1(f)}"
              @click=${()=>this._selectItem(g)}
              >
              ${g}
            </button>
          `}})}_selectItem(a){this._currentIndex=a,this._updateButtons()}async firstUpdated(){try{await this.updateComplete,this._totalPages=Math.ceil(this._length/this._pageSize),this._updateButtons()}catch{console.error("ERROR OCURRED")}}willUpdate(a){const l=a.has("length"),_=a.has("pageSize");(l||_)&&(this._totalPages=Math.ceil(this._length/this._pageSize),this._updateButtons())}render(){return template$b(this)}}__decorateClass$F([n({type:Number})],Pagination.prototype,"length");__decorateClass$F([n({type:Number})],Pagination.prototype,"pageSize");__decorateClass$F([n({type:String})],Pagination.prototype,"size");__decorateClass$F([n({type:Number})],Pagination.prototype,"currentIndex");const popoverStyles=':host{display:block;width:auto;opacity:0;visibility:hidden;z-index:999}:host(.visible){opacity:1;visibility:visible}.dss-popover{display:flex;min-width:356px;width:-moz-max-content;width:max-content;max-width:500px}.dss-popover--open{opacity:1;visibility:visible}.dss-popover-box{position:relative;box-sizing:border-box;min-width:356px;width:-moz-fit-content;width:fit-content;max-width:500px;height:-moz-fit-content;height:fit-content;background-color:var(--color-white);border-radius:var(--dss-radius-sm);box-shadow:0 1px 3px #0000001a,0 4px 8px 3px #0000000d;font-size:14px;line-height:24px;color:var(--color-neutral-900);z-index:999}.dss-popover-header{display:flex;align-items:center;padding:var(--dss-spacing-md) 0 var(--dss-spacing-xs) 0;gap:var(--dss-spacing-xs);width:100%}.dss-popover--has-divider .dss-popover-header{border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-200);margin-bottom:var(--dss-spacing-xs)}.dss-popover-header-box{display:flex;justify-content:space-between;align-items:center;padding:0 var(--dss-spacing-md);gap:var(--dss-spacing-md);width:100%}.dss-popover-header__title{flex:1;font-size:18px;line-height:28px;font-weight:var(--font-semibold);color:var(--color-neutral-900)}::slotted(dss-popover-body),::slotted(dss-item-list){display:block;max-height:428px;overflow-y:auto}.dss-popover--header-empty .dss-popover-header{padding-bottom:0}.dss-popover-arrow{width:12px;height:12px;z-index:999}.dss-popover-arrow:before{content:"";width:12px;height:12px;position:absolute;background-color:var(--color-white);transform:rotate(45deg)}.dss-popover-arrow:after{content:"";width:14px;height:14px;position:absolute;transform:translate(-50%) rotate(45deg);background-color:#00000008;z-index:-1}.dss-popover[data-popper-placement^=top] .dss-popover-arrow{bottom:-6px}.dss-popover[data-popper-placement^=top] .dss-popover-arrow:before{bottom:1px;left:0}.dss-popover[data-popper-placement^=top] .dss-popover-arrow:after{bottom:-2px;left:50%}.dss-popover[data-popper-placement^=bottom] .dss-popover-arrow{top:-6px}.dss-popover[data-popper-placement^=bottom] .dss-popover-arrow:before{top:1px;left:0}.dss-popover[data-popper-placement^=bottom] .dss-popover-arrow:after{top:-2px;left:50%}.dss-popover[data-popper-placement^=left] .dss-popover-arrow{right:-6px}.dss-popover[data-popper-placement^=left] .dss-popover-arrow:before{right:2px;top:0}.dss-popover[data-popper-placement^=left] .dss-popover-arrow:after{right:-8px;top:0}.dss-popover[data-popper-placement^=right] .dss-popover-arrow{left:-6px}.dss-popover[data-popper-placement^=right] .dss-popover-arrow:before{left:2px;top:0}.dss-popover[data-popper-placement^=right] .dss-popover-arrow:after{left:6px;top:0}',dssIconButton$4=i`dss-icon-button${s(getCustomElementSuffix())}`,popoverTemplate=d=>u$1`
  <div
    class=${e$1({"dss-popover":!0,"dss-popover--open":!!d.open,"dss-popover--has-divider":!!d.hasDivider,"dss-popover--header-empty":d.title===""&&!!d.hideCloseIcon,[`dss-popover--${d.position}`]:!!d.position})}
  >
    <div class="dss-popover-box">
      <div class="dss-popover-header">
        <div class="dss-popover-header-box">
          <div class="dss-popover-header__title">${d.title}</div>
          ${d.actionIcon?u$1`
                <${dssIconButton$4}
                  icon="${d.actionIcon}"
                  size="md"
                  variant="primary"
                  @onClick="${d._handleAction}"
                ></${dssIconButton$4}>
              `:null}
          ${d.hideCloseIcon?null:u$1`
                <${dssIconButton$4}
                  icon="close"
                  size="md"
                  variant="default"
                  @onClick="${d._handleClose}"
                ></${dssIconButton$4}>
              `}
        </div>
      </div>
      <slot name="body"></slot>
      <slot name="item-list"></slot>
    </div>
    <div class="dss-popover-arrow" data-popper-arrow></div>
  </div>
`;var __defProp$E=Object.defineProperty,__decorateClass$E=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$E(a,l,h),h};class Popover extends r$1{constructor(){super(),this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)if(l.type==="attributes"&&l.attributeName==="data-popper-placement"){const _=this.getAttribute("data-popper-placement");_&&this._propagatePlacement(_)}},this.observer=new MutationObserver(this.callback),this.visibleObserver=new IntersectionObserver(([a])=>{a.isIntersecting||this._closePopover()},{root:null,threshold:0}),this.open=!1,this.hasDivider=!1,this.hideCloseIcon=!1,this.disableParentClick=!1,this.title="",this.actionIcon=void 0,this.position="top",this.popoverFixed=!1,this._popperInstance=null,this._parent=null,this._disableClickOutside=!0,this._isFirstUpdate=!0,this._handleOutsideClick=this._handleOutsideClick.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(popoverStyles)]}connectedCallback(){super.connectedCallback(),this._handleConnectedCallback()}disconnectedCallback(){this._removeDropdownListener(),this.observer.disconnect(),this.visibleObserver.disconnect(),this._popperInstance&&(this._popperInstance.destroy(),this._popperInstance=null)}_addDropdownListener(){document.addEventListener("click",this._handleOutsideClick)}_removeDropdownListener(){document.removeEventListener("click",this._handleOutsideClick)}_handleOutsideClick(a){this._checkClickOutside(a)}_handleConnectedCallback(){if(this._isFirstUpdate)return;const a=this.style.position;a!=="absolute"&&a!=="fixed"&&a!=="relative"&&(this._popperInstance?this._popperInstance.update():this._initPopover())}_handleAction(){this.dispatchEvent(new CustomEvent("onAction",{bubbles:!0,composed:!0}))}_handleClose(){this._closePopover()}_checkClickOutside(a){if(this.disableParentClick&&this._disableClickOutside)return;const l=a.composedPath(),_=l.includes(this._parent);!l.includes(this)&&!_&&this._closePopover()}_closePopover(){setTimeout(()=>{this.classList.contains("visible")&&(this.classList.remove("visible"),this.open=!1,this._removeDropdownListener(),this.dispatchEvent(new CustomEvent("onClose",{bubbles:!1,composed:!1})))},0)}createPopperInstance(a){var _;const l=(_=this.shadowRoot)==null?void 0:_.querySelector(".dss-popover-arrow");this._popperInstance=createPopper(a,this,{placement:this.position,strategy:this.popoverFixed?"fixed":"absolute",modifiers:[{name:"arrow",options:{element:l}},{name:"offset",options:{offset:[0,12]}}],onFirstUpdate:h=>{this._propagatePlacement(h.placement)}}),this.visibleObserver.observe(a),a.addEventListener("click",()=>{!this.open&&!this.disableParentClick&&(this.open=!0,this.classList.add("visible"),this._disableClickOutside=!1,this._popperInstance&&this._popperInstance.update(),this._addDropdownListener())})}_propagatePlacement(a){const l=this.renderRoot.querySelector(".dss-popover");l&&l.setAttribute("data-popper-placement",a)}_initPopover(){const a=this.assignedSlot;this._parent=a?a.parentElement:this.parentElement,this._parent&&this.createPopperInstance(this._parent),this.observer.observe(this,this.observerConfig),setTimeout(()=>{this.open&&(this.classList.add("visible"),this._popperInstance.update(),this.requestUpdate(),this._addDropdownListener())},0)}async firstUpdated(){await this.updateComplete,this._initPopover(),this._isFirstUpdate=!1}updated(a){super.updated(a),a.has("position")&&this._popperInstance&&this._popperInstance.setOptions({placement:this.position}),a.has("open")&&(this.open?(this.classList.add("visible"),this._popperInstance.update(),this._addDropdownListener(),this.disableParentClick&&setTimeout(()=>{this._disableClickOutside=!1},100)):(this.classList.remove("visible"),this._removeDropdownListener(),this.disableParentClick&&(this._disableClickOutside=!0)))}render(){return popoverTemplate(this)}}__decorateClass$E([n(booleanType)],Popover.prototype,"open");__decorateClass$E([n(booleanType)],Popover.prototype,"hasDivider");__decorateClass$E([n(booleanType)],Popover.prototype,"hideCloseIcon");__decorateClass$E([n(booleanType)],Popover.prototype,"disableParentClick");__decorateClass$E([n({type:String})],Popover.prototype,"title");__decorateClass$E([n({type:String})],Popover.prototype,"actionIcon");__decorateClass$E([n({type:String})],Popover.prototype,"position");__decorateClass$E([n(booleanType)],Popover.prototype,"popoverFixed");class PopoverBody extends r$1{static get styles(){return[i$2`
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
    `}}const styles$c=":host{display:inline-block;width:100%;height:-moz-fit-content;height:fit-content}.dss-progress-indicator{display:flex;flex-direction:column;width:100%;font-family:var(--font-family)}.dss-progress-indicator .dss-progress-indicator__progress{background:var(--color-neutral-500)}.dss-progress-indicator.dss-progress-indicator--info .dss-progress-indicator__progress{background:var(--color-blue-500)}.dss-progress-indicator.dss-progress-indicator--success .dss-progress-indicator__progress{background:var(--color-green-600)}.dss-progress-indicator.dss-progress-indicator--success .dss-progress-indicator__description{color:var(--color-green-600)}.dss-progress-indicator.dss-progress-indicator--warning .dss-progress-indicator__progress{background:var(--color-yellow-500)}.dss-progress-indicator.dss-progress-indicator--error .dss-progress-indicator__progress{background:#b60000}.dss-progress-indicator.dss-progress-indicator--error .dss-progress-indicator__description{color:#b60000}.dss-progress-indicator__title{color:var(--color-neutral-700);font-size:var(--dss-font-size-md);font-weight:600;line-height:24px;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dss-progress-indicator__bar-wrapper{display:flex;align-items:center;gap:8px}.dss-progress-indicator__bar{flex:1;background:var(--color-neutral-200);border-radius:100px;height:4px}.dss-progress-indicator__percentage{width:35px;color:var(--color-neutral-700);font-size:var(--dss-font-size-sm);font-weight:var(--font-semibold)}.dss-progress-indicator__progress{height:100%;border-radius:100px;transition:all .3s}.dss-progress-indicator__content{display:flex;font-size:var(--dss-font-size-sm);line-height:var(--line-24);font-style:normal}.dss-progress-indicator__description{color:var(--color-neutral-500);font-weight:400;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .3s}",template$a=d=>{const a={"dss-progress-indicator":!0,"dss-progress-indicator--error":d.hasFailed,[`dss-progress-indicator--${d.state}`]:d.state!=="default"},l={width:`${d.percentage}%`};return u$1`
    <div 
      class="${e$1(a)}" 
      role="progressbar"
      aria-label="${d._label}"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="${d.percentage}">
    ${n$1(d.title,()=>u$1`<h2 class="dss-progress-indicator__title">${d.title}</h2>`,()=>E)}
    <div class="dss-progress-indicator__bar-wrapper">
      <div class="dss-progress-indicator__bar">
        <div
          class="dss-progress-indicator__progress"
          style="${o$2(l)}">
        </div>
      </div>
      <span class="dss-progress-indicator__percentage">
        ${d.percentage}%
      </span>
    </div>
    <div class="dss-progress-indicator__content">
      <span class="dss-progress-indicator__description">
        ${d.description}
      </span>
    </div>
  </div>
  `};var __defProp$D=Object.defineProperty,__getOwnPropDesc$j=Object.getOwnPropertyDescriptor,__decorateClass$D=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$j(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$D(a,l,h),h};class ProgressIndicator extends r$1{constructor(){super(...arguments),this.description="",this.state="default",this.percentage=0,this.hasFailed=!1,this._title=void 0,this._label="Barra de progrés"}static get styles(){return r$2(styles$c)}set title(a){const l=this._title;this._title=a,this._label=`Barra de progrés ${a}`,this.requestUpdate("title",l)}get title(){return this._title??""}updated(a){a.has("hasFailed")&&this.hasFailed&&(this.state="error")}render(){return template$a(this)}}__decorateClass$D([n({type:String})],ProgressIndicator.prototype,"description",2);__decorateClass$D([n({type:String})],ProgressIndicator.prototype,"state",2);__decorateClass$D([n({type:Number})],ProgressIndicator.prototype,"percentage",2);__decorateClass$D([n(booleanType)],ProgressIndicator.prototype,"hasFailed",2);__decorateClass$D([n({type:String})],ProgressIndicator.prototype,"title",1);const radioStyles=':host{display:flex;gap:8px;align-items:center}.dss-radio-wrapper{display:flex;align-items:center;gap:8px}::slotted([slot="input"]){-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--color-white);margin:0;color:var(--color-primary-500);width:20px;height:20px;border:var(--dss-border-width-sm) solid var(--color-primary-500);border-radius:50%;transform:translateY(-.075em);display:grid;place-content:center;cursor:pointer;transition:.3s all linear;flex-shrink:0;margin:var(--dss-spacing-tiny)}::slotted([slot="input"]):before{content:"";width:10px;height:10px;border-radius:50%;transform:scale(0);transition:.3s transform ease-in-out;box-shadow:inset 1rem 1rem var(--color-primary-500);background-color:var(--color-white)}::slotted([slot="input"]:checked){border:var(--dss-border-width-sm) solid var(--color-primary-500)}::slotted([slot="input"]:checked):before{transform:scale(1);box-shadow:inset 1rem 1rem var(--color-primary-500)}::slotted([slot="input"]:checked:hover){border:var(--dss-border-width-sm) solid var(--color-primary-600);transition:.3s all linear}::slotted([slot="input"]:checked:hover::before){transform:scale(1);box-shadow:inset 1rem 1rem var(--color-primary-600);transition:.3s all linear}::slotted([slot="input"]:disabled){cursor:not-allowed;border:var(--dss-border-width-sm) solid var(--color-neutral-400)}::slotted([slot="input"]:hover){border:var(--dss-border-width-sm) solid var(--color-neutral-600);transition:.3s all linear}::slotted([slot="input"]:checked:disabled):before{box-shadow:inset 1rem 1rem var(--color-neutral-400)!important}.dss-radio-wrapper:focus-within ::slotted([slot="input"]){outline:var(--dss-border-width-lg) solid var(--color-blue-200)}::slotted([slot="label"]){color:var(--color-neutral-900);font-size:14px;cursor:pointer}.dss-radio-wrapper--disabled ::slotted([slot="label"]){cursor:not-allowed;color:var(--color-neutral-500)}::slotted([slot="input"]:disabled:hover){border:var(--dss-border-width-sm) solid var(--color-neutral-500);transition:.3s all linear}::slotted([slot="input"]:disabled:hover::before){transform:scale(1);box-shadow:inset 1rem 1rem var(--color-neutral-500);transition:.3s all linear}',template$9=d=>{const a={"dss-radio-wrapper--disabled":d.disabled};return u$1`
    <div class="dss-radio-wrapper ${e$1(a)}">
      <slot name="input" @click="${d.handleInput}"></slot>
      <slot name="label"></slot>
    </div>
  `};var __defProp$C=Object.defineProperty,__decorateClass$C=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$C(a,l,h),h};class RadioButton extends r$1{constructor(){super(...arguments),this.label="",this.value=!1,this.checked=!1,this.disabled=!1}static get styles(){return[r$2(resetStyles),r$2(radioStyles)]}handleInput(a){const l=a.target;this.checked=l.checked,this.value=l.checked,this.dispatchEvent(new CustomEvent("onChange",{detail:{value:this.value,checked:this.checked},bubbles:!0,composed:!0}))}render(){return template$9(this)}}__decorateClass$C([n({type:String})],RadioButton.prototype,"label");__decorateClass$C([n(booleanType)],RadioButton.prototype,"value");__decorateClass$C([n(booleanType)],RadioButton.prototype,"checked");__decorateClass$C([n(booleanType)],RadioButton.prototype,"disabled");const styles$b=':host{width:100%}.dss-search{position:relative}.dss-search-bar{position:relative;display:grid;grid-template-columns:30px 1fr;min-height:48px;height:auto;width:100%;box-sizing:border-box;padding:var(--dss-spacing-sm);padding-right:calc((var(--dss-spacing-sm) * 2) + var(--icon-size-md));background-color:var(--color-white);border-radius:var(--dss-radius-sm);border:var(--dss-border-width-sm) solid var(--color-neutral-100);font-size:14px;font-family:inherit}.dss-search-bar--md{min-height:40px;padding-top:var(--dss-spacing-tiny);padding-bottom:var(--dss-spacing-tiny)}.dss-search-bar--focused{border-color:var(--color-blue-200);outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-search-bar--read-only{border-top:0;border-left:0;border-right:0;border-radius:0}.dss-search-bar--invalid{background-color:var(--color-red-50);border-color:var(--color-red-500)}.dss-search-bar--disabled{cursor:not-allowed;background-color:var(--color-neutral-50);color:var(--color-neutral-500)}.dss-search-bar__icon{color:var(--color-neutral-700);box-sizing:border-box;display:flex;justify-content:flex-start;align-items:center}.dss-search-bar--default .dss-search-bar__container{display:block}.dss-search-bar--md.dss-search-bar--default .dss-search-bar__container ::slotted(input){min-height:40px}.dss-search-bar--multiple .dss-search-bar__container{display:grid;grid-template-columns:auto minmax(min-content,1fr);gap:var(--dss-spacing-xs)}.dss-search-bar--multiple .dss-search-bar__chips{display:flex;flex-wrap:wrap;align-items:center;gap:var(--dss-spacing-xs)}.dss-search-bar__chips .dss-chip{display:inline-flex}.dss-search-bar__input{min-width:200px}::slotted(label){display:none;visibility:hidden;width:0}::slotted(input){height:100%;width:100%;margin:0;border:0;border-radius:0;color:var(--color-neutral-900);box-sizing:border-box;background-color:transparent}::slotted(input:focus-visible){outline:0}.dss-search-bar__clear{display:none;position:absolute;top:0;right:var(--dss-spacing-sm);height:100%;justify-content:center;align-items:center;box-sizing:border-box}.dss-search-bar--has-value:not(.dss-search-bar--disabled):not(.dss-search-bar--read-only) .dss-search-bar__clear{display:flex}.dss-search-help{display:flex;justify-content:space-between;font-family:var(--font-family);font-size:12px;color:var(--color-neutral-700);padding:var(--dss-spacing-xxs) var(--dss-spacing-sm)}.dss-search-bar--invalid+.dss-search-help{color:var(--color-red-500)}.dss-search-dropdown{margin-top:8px;position:absolute;top:52px;left:0;background-color:var(--color-white);width:100%;border-radius:var(--dss-radius-sm);box-shadow:0 4px 8px 3px #0000000d,0 1px 3px #0000001a;z-index:800;overflow:hidden}.dss-search-catalog--empty{height:150px;display:flex;justify-content:center;align-items:center;gap:var(--dss-spacing-xs);color:var(--color-blue-800)}.dss-search-catalog--empty .text{font-size:14px}.dss-catalog-item{box-sizing:border-box;display:flex;justify-content:flex-start;align-items:center;padding:var(--dss-spacing-sm) var(--dss-spacing-md);gap:var(--dss-spacing-xs);cursor:pointer}.dss-catalog-item:hover{background-color:var(--color-neutral-50)}.dss-catalog-item--selected{background-color:var(--color-primary-50)}.dss-catalog-item:focus-visible{border:var(--dss-border-width-lg) solid var(--color-blue-200);outline:0}.dss-search-title{padding:var(--dss-spacing-sm) var(--dss-spacing-md) 0;font-weight:var(--font-semibold);font-size:14px;color:var(--color-black)}.dss-catalog-item__icon{color:var(--color-neutral-900)}.dss-catalog-item__text{color:var(--color-neutral-900);font-size:16px}.dss-search-bar:not(.dss-search-bar--show-chips) .dss-search-bar__chips dss-chip.dss-chip--hide{display:none}.dss-search-bar__chips .dss-chip__counter{cursor:pointer;position:relative;box-sizing:border-box;font-weight:var(--font-semibold);border-radius:var(--dss-radius-xl);border:var(--dss-border-width-sm) solid var(--color-primary-700);box-shadow:none;background-color:var(--color-primary-100);transition:.3s all ease-in;height:24px;font-size:12px;padding:var(--dss-spacing-xxs) var(--dss-spacing-xs);line-height:var(--line-16)}.dss-search-bar__chips .dss-chip__counter:hover{background-color:var(--color-primary-50)}.dss-chip__tooltip{display:none}.dss-chip__tooltip-item{margin-right:var(--dss-spacing-xxs)}.dss-chip__tooltip-item:not(:last-child):after{content:","}.dss-search-bar__chips .dss-chip__counter:hover .dss-chip__tooltip{display:block}',dssIcon$d=i`dss-icon${s(getCustomElementSuffix())}`,dssSpinner$1=i`dss-spinner${s(getCustomElementSuffix())}`,dssTooltip$1=i`dss-tooltip${s(getCustomElementSuffix())}`,dssIconButton$3=i`dss-icon-button${s(getCustomElementSuffix())}`,template$8=d=>{var h,b,g,f;const a={"dss-search-bar--invalid":d._invalid||!d._inputValidity,"dss-search-bar--disabled":(h=d._input)==null?void 0:h.disabled,"dss-search-bar--required":(b=d._input)==null?void 0:b.required,"dss-search-bar--read-only":(g=d._input)==null?void 0:g.readOnly,"dss-search-bar--focused":d._isFocused,"dss-search-bar--default":!d._multiple,"dss-search-bar--multiple":d._multiple,"dss-search-bar--show-chips":d._showAllChips,"dss-search-bar--md":d._inputSize==="md","dss-search-bar--has-value":d._showClearButton||((f=d._input)==null?void 0:f.value)||d._searchTerms.length>0},l={},_={};return u$1`
    <div class="dss-search">
        <div
          class="dss-search-bar ${e$1(a)}"
          role="combobox"
          aria-controls="search-catalog"
          aria-expanded=${o$1(d._showDropdown)}
        >
          <div class="dss-search-bar__icon">
            <${dssIcon$d} size="md" icon="${d._icon}"  @click=${d._focusInput}></${dssIcon$d}>
          </div>

          <div class="dss-search-bar__container">
            ${d._multiple?u$1`
                  <div class="dss-search-bar__chips">
                    ${u$1`${d._generateSearchChips()}`}
                    ${!d._showAllChips&&d._searchTerms.length>5?u$1`
                          <div class="dss-chip__counter">
                            +${d._searchTerms.length-5}
                            <${dssTooltip$1}
                              class="dss-chip__tooltip"
                              position="bottom"
                              align="left"
                              noHeightLimit
                            >
                              ${d._searchTerms.slice(5,d._searchTerms.length).map($=>u$1`<span class="dss-chip__tooltip-item">
                                        ${$}
                                      </span>`)}
                            </${dssTooltip$1}>
                          </div>
                        `:null}
                  </div>
                `:null}

            <div class="dss-search-bar__input">
              <slot name="label" @click=${d._focusInput}></slot>
              <slot
                name="input"
                @click=${d._handleClick}
                @input=${d._handleInput}
                @keydown=${d._handleKeyDown}
                @focusin=${d._handleFocusIn}
                @focusout=${d._handleFocusOut}
              ></slot>
            </div>
          </div>

          <div class="dss-search-bar__clear">
            <${dssIconButton$3} icon="cancel" variant="primary" size="md" @click=${d._clearSearch}></${dssIconButton$3}>
          </div>
        </div>

        ${d._helpText?u$1`
              <div class="dss-search-help ${e$1(l)}">
                <span>${d._helpText}</span>
              </div>
            `:null}
        ${d._showDropdown&&d._catalog&&d._input.value.length>=d._threshold?u$1`
              <div
                id="search-catalog"
                class="dss-search-dropdown ${e$1(_)}"
                style=${o$1(d._searchboxStyle)}
                role="listbox"
                aria-label="Search Catalog"
              >
                ${d._isCatalogLoading?u$1`
                      <div class="dss-search-catalog--empty">
											  <${dssSpinner$1} size="md"/>
                      </div>
                    `:u$1`
                      ${d._filteredCatalog.length>0?u$1`
                            ${d._recentSearches?u$1`
                                  <div class="dss-search-title">
                                    ${d._recentSearchesText}
                                  </div>
                                `:null}
                            <div class="dss-search-catalog">
                              ${u$1`${d._generateFilterCatalog()}`}
                            </div>
                          `:u$1`
                            <div
                              class="dss-search-catalog dss-search-catalog--empty"
                            >
                              <${dssIcon$d} size="sm" icon="info"></${dssIcon$d}>
                              <span class="text">
                                ${d._emptyDropdownText}: ${d._input.value}
                              </span>
                            </div>
                          `}
                    `}
              </div>
            `:null}
      </div>
  `};var __defProp$B=Object.defineProperty,__getOwnPropDesc$i=Object.getOwnPropertyDescriptor,__decorateClass$B=(d,a,l,_)=>{for(var h=__getOwnPropDesc$i(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$B(a,l,h),h};const dssIcon$c=i`dss-icon${s(getCustomElementSuffix())}`,dssChip$1=i`dss-chip${s(getCustomElementSuffix())}`;class SearchBar extends r$1{constructor(){super(...arguments),this._multiple=!1,this._icon="search",this._placeholder="Escriu per cercar",this._inputSize="lg",this._invalid=!1,this._helpText="",this._isFocused=!1,this._showClearButton=!1,this._threshold=3,this._searchTerms=[],this._catalog=[],this._filteredCatalog=[],this._showDropdown=!1,this._isCatalogLoading=!1,this._emptyDropdownText="Sense resultats per",this._recentSearches=!1,this._recentSearchesText="Últimes cerques",this._dropdownStyle="",this._searchboxStyle="",this._showAllChips=!1,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)l.type==="attributes"&&this.requestUpdate()},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(styles$b)]}get _input(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}set multiple(a){const l=this._multiple;this._multiple=a,this.requestUpdate("multiple",l)}get multiple(){return this._multiple}set icon(a){const l=this._icon;this._icon=a,this.requestUpdate("icon",l)}get icon(){return this._icon}set inputSize(a){const l=this._inputSize;a==="md"?this._inputSize=a:this._inputSize="lg",this.requestUpdate("inputSize",l)}get inputSize(){return this._inputSize}set helpText(a){const l=this._helpText;this._helpText=a,this.requestUpdate("helpText",l)}get helpText(){return this._helpText}set invalid(a){const l=this._invalid;a?this._invalid=a:this._invalid=this._inputValidity?a:!0,this.requestUpdate("invalid",l)}get invalid(){return this._invalid}set threshold(a){const l=this._threshold;this._threshold=a,this.requestUpdate("threshold",l)}get threshold(){return this._threshold}set searchTerms(a){const l=this._searchTerms;this._searchTerms=a,this.requestUpdate("searchTerms",l)}get searchTerms(){return this._searchTerms}set catalog(a){const l=this._catalog;this._catalog=a,this.requestUpdate("catalog",l)}get catalog(){return this._catalog}set emptyDropdownText(a){const l=this._emptyDropdownText;this._emptyDropdownText=a,this.requestUpdate("emptyDropdownText",l)}get emptyDropdownText(){return this._emptyDropdownText}set recentSearchesText(a){const l=this._recentSearchesText;this._recentSearchesText=a,this.requestUpdate("recentSearchesText",l)}get recentSearchesText(){return this._recentSearchesText}set recentSearches(a){const l=this._recentSearches;this._recentSearches=a,this.requestUpdate("recentSearches",l)}get recentSearches(){return this._recentSearches}set isCatalogLoading(a){const l=this._isCatalogLoading;this._isCatalogLoading=a,this.requestUpdate("isCatalogLoading",l)}get isCatalogLoading(){return this._isCatalogLoading}set dropdownStyle(a){const l=this._dropdownStyle;this._dropdownStyle=a,this.requestUpdate("dropdownStyle",l)}get dropdownStyle(){return this._dropdownStyle}_getSearchStyle(){return`top: ${this.renderRoot.querySelectorAll(".dss-search-bar")[0].offsetHeight+4}px; ${this._dropdownStyle}`}get _inputValidity(){var a;return this._input&&this._input.value!==""?(a=this._input)==null?void 0:a.checkValidity():!0}_handleClick(){this.requestUpdate()}_handleInput(){let a=this._input.value;a.length>=this._threshold?(this._showDropdown=!0,this._filteredCatalog=this._getFilterCatalog(a),this._multiple&&a.endsWith(",")&&(a=a.slice(0,-1),this._searchTerms.push(a),this._input.value="",this._searchTerms.length&&this._dispatchSearchChange()),this._searchboxStyle=this._getSearchStyle(),this.requestUpdate()):this._hideDropdown(),this.requestUpdate()}_handleFocusIn(){this._isFocused=!0,this._showClearButton=!0,this.requestUpdate()}_handleFocusOut(){this._isFocused=!1,this._showClearButton=!1,this.requestUpdate()}_handleKeyDown(a){(a==null?void 0:a.key)==="Enter"?(this._showDropdown=!0,!this._multiple&&this._input.value!==""&&(this._searchTerms=[],this._searchTerms.push(this._input.value),this._dispatchSearchChange(),this._showDropdown=!1),this._searchboxStyle=this._getSearchStyle()):(a==null?void 0:a.key)==="Escape"&&(this._showDropdown=!1),this.requestUpdate()}_focusInput(){var a;(a=this._input)==null||a.focus()}_clearSearch(){this._input&&(this._input.value="",this._input.focus()),this._searchTerms=[],this._dispatchSearchChange(),this._hideDropdown(),this.requestUpdate()}_hideDropdown(){this._showDropdown=!1,this._filteredCatalog=[]}_getFilterCatalog(a){return this._catalog.filter(l=>l.value.toLowerCase().includes(a.toLowerCase()))}_generateSearchChips(){let a=0;return this._searchTerms.map(_=>{var f,$,k,D,C;const h=w=>{const S=w.detail.text;this._searchTerms=this._searchTerms.filter(I=>I!==S),this._dispatchSearchChange(),this.requestUpdate()};a+=1;const b={disabled:((f=this._input)==null?void 0:f.disabled)||(($=this._input)==null?void 0:$.readOnly),"dss-chip--selected":!((k=this._input)!=null&&k.disabled)&&!((D=this._input)!=null&&D.readOnly),"dss-chip--hide":a>5};return u$1`
				<${dssChip$1}
 					class="${e$1(b)}"
					size="sm" 
					label="${_}" 
					selected 
					hasdelete 
					?disabled=${(C=this._input)==null?void 0:C.disabled}
					@onDelete="${h}">
				</${dssChip$1}>
      `})}_generateFilterCatalog(){let a=!0;return this._filteredCatalog.map(_=>{const h=C=>{const w=C.target.getAttribute("value");w&&(this._multiple?this._searchTerms.includes(w)?this._searchTerms=this._searchTerms.filter(I=>I!==w):this._searchTerms.push(w):(this._input.value=w,this._showDropdown=!1,this._searchTerms=[],this._searchTerms.push(w)),this.requestUpdate(),this._dispatchSearchChange())},b=C=>{C&&C.focus()},g=C=>{let w=0;const S=this.renderRoot.querySelectorAll(".dss-catalog-item"),I=S.length-1;C===S[0]?b(S[I]):(S.forEach((L,y)=>{L===C&&(w=y)}),b(S[w-1]))},f=C=>{let w=0;const S=this.renderRoot.querySelectorAll(".dss-catalog-item"),I=S.length-1;C===S[I]?b(S[0]):(S.forEach((L,y)=>{L===C&&(w=y)}),b(S[w+1]))},$=C=>{const w=C.currentTarget,S=C;let I=!1;switch(S.key){case"ArrowUp":g(w),I=!0;break;case"ArrowDown":f(w),I=!0;break;case"Enter":{const L=C.target,y=this.renderRoot.querySelector('.dss-catalog-item[tabindex="0"]');y==null||y.setAttribute("tabindex","-1"),C.target.setAttribute("tabindex","0"),L.click(),I=!0;break}}I&&(C.stopPropagation(),C.preventDefault())},k={"dss-catalog-item--selected":this._searchTerms.includes(_.value)},D=u$1`
        <div
          class="dss-catalog-item ${e$1(k)}"
          value="${_.value}"
          tabindex="${a?0:-1}"
          @click="${h}"
          @keydown=${$}
        >
          ${_.icon?u$1`
								<${dssIcon$c}
									class="dss-catalog-item__icon"
									icon="${_.icon}"
									size="md"
									value="${_.value}"
								></${dssIcon$c}>
              `:null}
          <span class="dss-catalog-item__text" value="${_.value}"
            >${_.value}</span
          >
        </div>
      `;return a=!1,D})}_dispatchSearchChange(){const a={detail:this._searchTerms,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onSearchChange",a))}_closeDropdown(){document.addEventListener("click",a=>{a.target!==this&&a.target!==this._input&&(this._showDropdown=!1,this.requestUpdate())}),document.addEventListener("focusout",a=>{const l=a.relatedTarget;l!==null&&l!==this&&l!==this._input&&(this._showDropdown=!1,this.requestUpdate())})}disconnectedCallback(){this.observer.disconnect()}async firstUpdated(){var a,l;try{await this.updateComplete,this._input&&(this.observer.observe(this._input,this.observerConfig),(a=this._input)!=null&&a.getAttribute("placeholder")||(l=this._input)==null||l.setAttribute("placeholder",this._placeholder),this._closeDropdown(),this._searchboxStyle=this._getSearchStyle(),this.requestUpdate())}catch{console.error("ERROR OCURRED")}}render(){return template$8(this)}}__decorateClass$B([n(booleanType)],SearchBar.prototype,"multiple");__decorateClass$B([n({type:String})],SearchBar.prototype,"icon");__decorateClass$B([n({type:String})],SearchBar.prototype,"inputSize");__decorateClass$B([n({type:String})],SearchBar.prototype,"helpText");__decorateClass$B([n(booleanType)],SearchBar.prototype,"invalid");__decorateClass$B([n({type:Number})],SearchBar.prototype,"threshold");__decorateClass$B([n({type:Array})],SearchBar.prototype,"searchTerms");__decorateClass$B([n({type:Array})],SearchBar.prototype,"catalog");__decorateClass$B([n({type:String})],SearchBar.prototype,"emptyDropdownText");__decorateClass$B([n({type:String})],SearchBar.prototype,"recentSearchesText");__decorateClass$B([n(booleanType)],SearchBar.prototype,"recentSearches");__decorateClass$B([n(booleanType)],SearchBar.prototype,"isCatalogLoading");__decorateClass$B([n({type:String})],SearchBar.prototype,"dropdownStyle");const styles$a='.dss-icon--checked:before{content:"done";font-family:var(--font-icons);font-weight:400;color:var(--color-primary-500);font-size:24px;vertical-align:middle}.dss-selected.dss-disabled .dss-icon--checked:before{color:var(--color-neutral-500)}.dss-type--default.dss-selected:not(.dss-disabled):hover .dss-icon--checked:before,.dss-type--green.dss-selected:not(.dss-disabled):hover .dss-icon--checked:before{color:var(--color-white)}.dss-type--default.dss-selected.dss-disabled,.dss-type--green.dss-selected.dss-disabled{background-color:var(--color-neutral-50)}.dss-type--green.dss-selected:not(.dss-disabled) .dss-icon--checked:before{color:var(--color-green-500)}.list{width:auto;border-radius:8px;margin-top:1px;background-color:#fff;color:var(--color-neutral-900);box-shadow:0 0 0 .063rem #d8d8d8,0 0 0 .063rem #d8d8d8}.list .dss-form-field:first-child{border-radius:8px 8px 0 0}.list .dss-form-field:last-child{border-radius:0 0 8px 8px}.list *{cursor:pointer}.list .disabled,.list .disabled *{cursor:inherit!important;color:var(--color-neutral-500)}.dss-disabled{cursor:not-allowed;background-color:var(--color-neutral-50)}.hidden{opacity:0;position:absolute}.dss-checkbox,.dss-table .dss-table__checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.0625rem solid var(--color-primary-500);border-radius:.125rem;cursor:pointer;flex-shrink:0;height:1.25rem!important;margin:.125rem;overflow:hidden;position:relative;transition:all .3s linear;width:1.25rem!important}.dss-checkbox:hover{border:.0625rem solid var(--color-neutral-600);transition:all .3s linear}.dss-checkbox:checked{background-color:var(--color-primary-500);border:.0625rem solid var(--color-primary-500)}.dss-checkbox:checked:before{position:absolute;top:-4px;left:-2px;color:var(--color-white);content:"check";font-family:var(--font-icons);font-size:1.375rem;text-align:center}.dss-checkbox:checked:hover{background-color:var(--color-primary-600);border:.0625rem solid var(--color-primary-600);transition:all .3s linear}.dss-checkbox:indeterminate:before{color:var(--color-white);content:"remove";font-family:var(--font-icons);font-size:1.125rem}.dss-checkbox:disabled{cursor:not-allowed;color:var(--color-neutral-900);border-color:var(--color-neutral-400)}.dss-checkbox:checked:disabled{cursor:not-allowed;background-color:var(--color-neutral-300)}.dss-checkbox:disabled:before{cursor:not-allowed;color:var(--color-neutral-900)}.dss-form-field__focus{outline:.25rem solid var(--color-blue-200);outline-offset:-4px;transition:none}.dss-radio:focus-visible:enabled,.dss-checkbox:focus-visible:enabled{outline:none}.dss-radio,.dss-table .dss-table__radio{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--color-white);border:.0625rem solid var(--color-primary-500);border-radius:50%;color:var(--color-primary-500);cursor:pointer;display:grid;flex-shrink:0;height:1.25rem;margin:4px .125rem 0;place-content:center;transform:translateY(-.075em);transition:all .3s linear;width:1.25rem}.dss-radio:before{background-color:var(--color-white);border-radius:50%;box-shadow:inset 1rem 1rem var(--color-primary-500);content:"";height:.625rem;transform:scale(0);transition:transform .3s ease-in-out;width:.625rem}.dss-radio:checked{border:.0625rem solid var(--color-primary-500)}.dss-radio:checked:before{box-shadow:inset 1rem 1rem var(--color-primary-500);transform:scale(1)}.dss-radio:checked:hover{border:.0625rem solid var(--color-primary-600);transition:all .3s linear}.dss-radio:checked:hover:before{box-shadow:inset 1rem 1rem var(--color-primary-600);transform:scale(1);transition:all .3s linear}.dss-radio:hover{border:.0625rem solid var(--color-primary-600);transition:all .3s linear}.dss-radio:disabled{cursor:not-allowed;background-color:var(--color-neutral-50);border-color:var(--color-neutral-400)}.dss-radio:checked:disabled{cursor:not-allowed;border-color:var(--color-neutral-400);color:var(--color-neutral-400)}.dss-radio:checked:disabled:before{box-shadow:inset 1rem 1rem var(--color-neutral-400)!important}.dss-form-field{align-items:center;display:flex;gap:8px;cursor:pointer;min-height:24px;min-width:136px;padding:8px 12px;position:relative;word-break:break-word}.dss-form-field.dss-ticked{justify-content:space-between}.dss-form-field.dss-selectAll{background-color:var(--color-white);border-bottom:.8px solid #b1b1b1;position:sticky;top:0;z-index:1}.dss-form-field.dss-first-unselected{border-top:.8px solid #b1b1b1}.dss-form-field--simple.dss-type--default:not(.dss-disabled):hover{background-color:var(--color-primary-600)}.dss-form-field--simple.dss-type--default:not(.dss-disabled):hover label{color:var(--color-white)}.dss-form-field--simple.dss-type--default:not(.dss-disabled):active{background-color:var(--color-primary-400)}.dss-form-field--no-tick.dss-type--default:not(.dss-disabled):hover,.dss-form-field--multiple.dss-type--default:not(.dss-disabled):hover{box-shadow:inset 0 0 0 2px var(--color-primary-600)}.dss-form-field--simple.dss-type--green:not(.dss-disabled):hover{background-color:var(--color-green-600)}.dss-form-field--simple.dss-type--green:not(.dss-disabled):hover label{color:var(--color-white)}.dss-form-field--simple.dss-type--green:not(.dss-disabled):active{background-color:var(--color-green-400)}.dss-form-field--no-tick.dss-type--green:not(.dss-disabled):hover,.dss-form-field--multiple.dss-type--green:not(.dss-disabled):hover{box-shadow:inset 0 0 0 2px var(--color-green-600)}.dss-type--default.dss-disabled{cursor:not-allowed!important}.dss-form-field label{font-size:.875rem;line-height:var(--line-24)}.dss-form-field:not(.dss-form-field--selected) label span.bold{font-weight:var(--font-bold)}.dss-form-field .dss-check-overlay{width:24px;height:24px;position:absolute}.dss-selector-list-wrapper{overflow-y:auto;margin-bottom:var(--dss-spacing-xxs);width:100%}.dss-selector-empty{box-sizing:border-box;min-height:150px;width:100%;max-width:100%;display:flex;justify-content:center;align-items:center;padding:var(--dss-spacing-xs);gap:var(--dss-spacing-xs)}.dss-selector-empty .text{font-size:14px;color:var(--color-blue-800)}';var __defProp$A=Object.defineProperty,__getOwnPropDesc$h=Object.getOwnPropertyDescriptor,__decorateClass$A=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$h(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$A(a,l,h),h};const dssSpinner=i`dss-spinner${s(getCustomElementSuffix())}`;class Selector extends r$1{constructor(){super(...arguments),this.isDisplayed=void 0,this._elementId=`dss-selector-${new Date().getTime()}`,this._elements=null,this._elementSelectAll=[],this._selectedValue=null,this._multiple=!1,this._deselectable=!1,this._disabled=!1,this._tick=!0,this._type="default",this._style=null,this._filtre=null,this._labelSelectAll="Seleccionar-ho tot",this._labelDeselectAll="Deseleccionar-ho tot",this._selectAll=!1,this._isAllSelected=!1,this._elementsSelected=0,this._emptySelectorLabel="Sense resultats per",this._emptyFilterLabel="Escriu per cercar.",this._filterThreshold=1,this._ariaLabel=void 0}static get styles(){return[r$2(iconStyles),r$2(styles$a)]}set multiple(a){const l=this._multiple;this._multiple=a,this.requestUpdate("multiple",l)}get multiple(){return this._multiple}set tick(a){const l=this._tick;this._tick=a,this.requestUpdate("tick",l)}get tick(){return this._tick}set deselectable(a){const l=this._deselectable;this._deselectable=a,this.requestUpdate("deselectable",l)}get deselectable(){return this._deselectable}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set elements(a){const l=this._elements;this._elements=a,this.requestUpdate("elements",l)}get elements(){return this._elements||[]}set selectedValue(a){var h,b;const l=this._selectedValue;if(!a||a.length===0){this._selectedValue=null,this.requestUpdate("selectedValue",l);return}if(this._multiple){this._selectedValue=((h=this._elements)==null?void 0:h.filter(g=>a.includes(g.value)))||null,this.requestUpdate("selectedValue",l);return}const _=(b=this._elements)==null?void 0:b.find(g=>g.value===a[0]);this._selectedValue=_?[_]:null,this.requestUpdate("selectedValue",l)}get selectedValue(){var a;return((a=this._selectedValue)==null?void 0:a.map(l=>l.value))||[]}set type(a){const l=this._type;a==="default"||a==="green"?this._type=a:this._type="default",this.requestUpdate("type",l)}get type(){return this._type}set boxStyle(a){const l=this._style;this._style=a,this.requestUpdate("style",l)}get boxStyle(){return this._style||""}set filtre(a){if(a){const l=this._filtre;this._filtre=a.toLowerCase(),this.requestUpdate("filtre",l)}else a===""&&(this._filtre=null)}get filtre(){return this._filtre||""}set labelSelectAll(a){const l=this._labelSelectAll;a!==""&&(this._labelSelectAll=a),this.requestUpdate("labelSelectAll",l)}get labelSelectAll(){return this._labelSelectAll}set labelDeselectAll(a){const l=this._labelDeselectAll;a!==""&&(this._labelDeselectAll=a),this.requestUpdate("labelDeselectAll",l)}get labelDeselectAll(){return this._labelDeselectAll}set selectAll(a){const l=this._selectAll;this._selectAll=a,this.requestUpdate("selectAll",l)}get selectAll(){return this._selectAll}set filterThreshold(a){const l=this._filterThreshold;this._filterThreshold=a,this.requestUpdate("filterThreshold",l)}get filterThreshold(){return this._filterThreshold}set elementsSelected(a){const l=this._elementsSelected;this._elementsSelected=a,this.requestUpdate("elementsSelected",l)}get elementsSelected(){return this._elementsSelected}set ariaLabel(a){const l=this._ariaLabel;this._ariaLabel=a,this.requestUpdate("ariaLabel",l)}get ariaLabel(){return this._ariaLabel||""}_valueIsSelected(a){var l;return((l=this._selectedValue)==null?void 0:l.some(_=>_.value===a))||!1}_manuallySelect(a,l){if(a.preventDefault(),a.stopPropagation(),this._disabled)return;const _=this._valueIsSelected(l);if(!this._multiple&&!this._deselectable&&_)return;const h=a.target,b=h.className.includes("bold")?h.parentElement:h;b&&b.className.includes("dss-form-field")?b.querySelector("input").checked=!_:b&&(b.parentElement.querySelector("input").checked=!_),this._returnSelectedValues(l),this._areAllElementsSelected()}_manuallySelectAll(a){if(a.preventDefault(),a.stopPropagation(),this._disabled||!this._multiple&&!this._deselectable&&this._isAllSelected)return;const l=a.target;l.className.includes("dss-form-field")?(l.querySelector("input").checked=!l.querySelector("input").checked,this._returnSelecteAllValues(l.querySelector("input").checked)):(l.parentElement.querySelector("input").checked=!l.parentElement.querySelector("input").checked,this._returnSelecteAllValues(l.parentElement.querySelector("input").checked)),this._areAllElementsSelected()}_returnSelecteAllValues(a){var h,b;a?this._selectedValue=((h=this._elements)==null?void 0:h.filter(g=>g.value))||[]:this._selectedValue=[];const _={detail:((b=this._selectedValue)==null?void 0:b.map(g=>g.value))||null,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onValueChange",_)),this.requestUpdate()}_returnSelectedValues(a){var g,f;const l=Array.from(((g=this.shadowRoot)==null?void 0:g.querySelectorAll("input:checked"))||[]).map($=>$.getAttribute("value")).filter($=>$==null?!1:this._multiple?!0:$===a),_=l.indexOf(this._elementSelectAll[0]);_!==-1&&l.splice(_,1),this._selectedValue=((f=this._elements)==null?void 0:f.filter($=>l.includes($.value)))||[];let h;this._multiple?h=l:h=l[0]||null;const b={detail:h,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onValueChange",b)),this.requestUpdate()}_getIndexSubtext(a){if(!this._filtre)return[-1,-1];const l=a.toLowerCase();return[l.indexOf(this._filtre),l.indexOf(this._filtre)+this._filtre.length]}_focusEvent(a){const _=a.target.closest(".dss-form-field");_==null||_.classList.add("dss-form-field__focus")}_blurEvent(a){const _=a.target.closest(".dss-form-field");_==null||_.classList.remove("dss-form-field__focus")}async firstUpdated(){try{await this.updateComplete,this._elementSelectAll=[this._labelSelectAll],this._areAllElementsSelected(),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}_areAllElementsSelected(){if(!this._elements||!this._selectedValue){this._elementSelectAll=[this._labelSelectAll],this._isAllSelected=!1;return}const a=this._selectedValue.map(_=>_.value),l=this._elements.map(_=>_.value);this._isAllSelected=a.length===l.length&&a.every(_=>l.includes(_)),this._isAllSelected?this._elementSelectAll=[this._labelDeselectAll]:this._elementSelectAll=[this._labelSelectAll],this.requestUpdate()}generateListInputsElements(){var l;return(l=this._elements)==null?void 0:l.map((_,h)=>{const b=_.label.trim().replace(/\s+/g,"-"),g=_.value.trim().replace(/\s+/g,"-"),f=`selector-${b}-${g}`,$=this._valueIsSelected(_.value),k=this._tick&&!this._multiple,D=e$1({disabled:this._disabled,"dss-disabled":this._disabled,"dss-form-field":!0,"dss-form-field--simple":this._tick&&!this._multiple,"dss-form-field--multiple":this._multiple,"dss-form-field--no-tick":!this._tick,"dss-type--default":this._type==="default","dss-type--green":this._type==="green","dss-ticked":k,"dss-selected":$&&k,"dss-form-field--selected":$,"dss-first-unselected":h&&h>0&&h===this._elementsSelected}),C=e$1({"dss-checkbox":this._multiple,"dss-radio":!this._multiple,"dss-disabled":this._disabled,hidden:k});let w=k&&$?"visible":"hidden";this.isDisplayed!==void 0&&!this.isDisplayed&&(w="hidden");const S=u$1`
        <input
          id="${f}"
          name="${f}"
          type="checkbox"
          class="${C}"
          .value="${_.value}"
          .checked="${$}"
          @focus="${this._focusEvent}"
          @blur="${this._blurEvent}"
				 ?disabled="${this._disabled}"
        />
        <div class="dss-check-overlay"></div>
      `,I=u$1`<span
        class="dss-icon--checked"
        style="visibility: ${w}"
      ></span>`,L=O=>{this._manuallySelect(O,_.value)},y=O=>{var U,A,R,H;if(O.key==="Enter"||O.key===" ")this._manuallySelect(O,_.value);else if(O.key==="ArrowUp"){const F=O.target,V=(A=(U=F==null?void 0:F.closest(".dss-form-field"))==null?void 0:U.previousElementSibling)==null?void 0:A.querySelector("input");V==null||V.focus()}else if(O.key==="ArrowDown"){const F=O.target,V=(H=(R=F==null?void 0:F.closest(".dss-form-field"))==null?void 0:R.nextElementSibling)==null?void 0:H.querySelector("input");V==null||V.focus()}},[z,q]=this._getIndexSubtext(_.label);let P=u$1`${_.label}`;if(z!==-1&&q!==-1){const O=_.label.slice(0,z),U=_.label.slice(z,q),A=_.label.slice(q);P=u$1`${O}<span class="bold">${U}</span>${A}`}return u$1`
        <div
          class="${D}"
          @keyup="${y}"
          @click="${L}"
          
        >
          ${S}
          <label for=${f}>${P}</label>
          ${I}
        </div>
      `})}generatElementSelectAll(){var l;return(l=this._elementSelectAll)==null?void 0:l.map(_=>{const h=e$1({disabled:this._disabled,"dss-form-field":!0,"dss-type--default":this._type==="default","dss-type--green":this._type==="green","dss-selectAll":!0,"dss-disabled":this._disabled}),b=e$1({"dss-checkbox":this._multiple}),g=u$1`
        <input
          id="${this._elementId}"
          name="${this._elementId}"
          type="checkbox"
          class="${b}"
          .value="${_}"
          .checked="${this._isAllSelected}"
          @focus="${this._focusEvent}"
          @blur="${this._blurEvent}"
					?disabled="${this._disabled}"
        />
        <div class="dss-check-overlay"></div>
      `;return u$1`
        <div
          class="${h}"
          @keyup="${k=>{var D,C,w,S;if(k.key==="Enter"||k.key===" ")this._manuallySelectAll(k);else if(k.key==="ArrowUp"){const I=k.target,L=(C=(D=I==null?void 0:I.closest(".dss-form-field"))==null?void 0:D.previousElementSibling)==null?void 0:C.querySelector("input");L==null||L.focus()}else if(k.key==="ArrowDown"){const I=k.target,L=(S=(w=I==null?void 0:I.closest(".dss-form-field"))==null?void 0:w.nextElementSibling)==null?void 0:S.querySelector("input");L==null||L.focus()}}}"
          @click="${k=>{this._manuallySelectAll(k)}}"
        >
          ${g}
          <label for="${this._elementId}">${_}</label>
        </div>
      `})}render(){let a=this.generateListInputsElements();const l=this.generatElementSelectAll();this._multiple&&this._selectAll&&(a==null||a.unshift(l[0]),a=(a==null?void 0:a.length)===1?[]:a);const _=h=>{(h.key==="ArrowDown"||h.key==="ArrowUp")&&h.preventDefault()};return u$1`
      ${this._elements&&this._elements.length>0?u$1`
            <div
              aria-label="${o$1(this._ariaLabel)}"
              part="selector"
              class="list dss-selector-list-wrapper"
              @keydown=${_}
              style="${this._style}"
            >
              ${a}
            </div>
          `:u$1`
            <div
              part="selector"
              class="list dss-selector-list-wrapper"
              @keydown=${_}
              style="${this._style}"
            >
              ${this._filtre&&this._filtre.length>=this._filterThreshold?u$1`
                    <div class="dss-selector-empty">
                      <span class="dss-icon dss-icon--sm">info</span>
                      <span class="text">
                        ${this._filtre||this._filtre===""?u$1` ${this._emptySelectorLabel}: ${this._filtre} `:u$1`${this._emptyFilterLabel}`}
                      </span>
                    </div>
                  `:u$1`
                    <div class="dss-selector-empty">
											<${dssSpinner} size="md"/>
                    </div>
                  `}
            </div>
          `}
    `}}__decorateClass$A([n(booleanType)],Selector.prototype,"multiple",1);__decorateClass$A([n(booleanType)],Selector.prototype,"tick",1);__decorateClass$A([n(booleanType)],Selector.prototype,"deselectable",1);__decorateClass$A([n(booleanType)],Selector.prototype,"disabled",1);__decorateClass$A([n({type:Array})],Selector.prototype,"elements",1);__decorateClass$A([n(selectedType)],Selector.prototype,"selectedValue",1);__decorateClass$A([n({type:String})],Selector.prototype,"type",1);__decorateClass$A([n({type:String})],Selector.prototype,"boxStyle",1);__decorateClass$A([n({type:String})],Selector.prototype,"filtre",1);__decorateClass$A([n({type:String})],Selector.prototype,"labelSelectAll",1);__decorateClass$A([n({type:String})],Selector.prototype,"labelDeselectAll",1);__decorateClass$A([n(booleanType)],Selector.prototype,"selectAll",1);__decorateClass$A([n({type:Number})],Selector.prototype,"filterThreshold",1);__decorateClass$A([n({type:Number})],Selector.prototype,"elementsSelected",1);__decorateClass$A([n({type:String})],Selector.prototype,"ariaLabel",1);__decorateClass$A([n(booleanType)],Selector.prototype,"isDisplayed",2);const sidemenuListItemStyles=":host{display:block;width:100%}.dss-sidemenu-list-item{cursor:pointer;box-sizing:border-box;height:40px;width:40px;display:flex;align-items:center;gap:var(--dss-spacing-xs);padding:var(--dss-spacing-xs);background-color:var(--color-primary-700);border-radius:var(--dss-radius-sm);font-size:14px;line-height:24px;font-weight:var(--font-semibold);transition:background-color .3s ease-in-out}.dss-sidemenu-list-item:not(:disabled):not(.dss-sidemenu-list-item--disabled):hover{background-color:var(--color-primary-900)}.dss-sidemenu-list-item:not(:disabled):not(.dss-sidemenu-list-item--disabled):active{background-color:var(--color-primary-800)}.dss-sidemenu-list-item:not(.dss-sidemenu-list-item--disabled):focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-sidemenu-list-item:disabled{color:var(--color-neutral-100);cursor:not-allowed}.dss-sidemenu-list-item--selected:not(.dss-sidemenu-list-item--disabled):not(:hover){box-shadow:inset 0 0 0 var(--dss-border-width-sm) var(--color-white)}.dss-sidemenu-list-item--disabled{cursor:not-allowed;color:var(--color-neutral-100)}.dss-sidemenu-list-item--expanded{width:100%}.dss-sidemenu-list-item__icon{position:relative;display:flex;align-items:center;justify-content:center}.dss-sidemenu-list-item__notification{position:absolute;top:-4px;right:-4px;display:block;z-index:800}.dss-sidemenu-list-item__notification--expanded{top:-8px;right:-8px}.dss-sidemenu-list-item__label{flex:1}.dss-sidemenu-list-item__tooltip{opacity:0;visibility:hidden;transition:opacity .5s ease-in,visibility .5s ease-in}.dss-sidemenu-list-item--collapsed:focus-visible .dss-sidemenu-list-item__tooltip,.dss-sidemenu-list-item--collapsed:hover .dss-sidemenu-list-item__tooltip{animation:show-tooltip 1s forwards}@keyframes show-tooltip{0%{opacity:0;visibility:hidden}99%{visibility:hidden}to{opacity:1;visibility:visible}}",dssIcon$b=i`dss-icon${s(getCustomElementSuffix())}`,dssTooltip=i`dss-tooltip${s(getCustomElementSuffix())}`,dssNotificationBadge$1=i`dss-notification-badge${s(getCustomElementSuffix())}`,sidemenuListItemTemplate=d=>u$1`
  <li
    role="menuitem"
    aria-label="${d._label}"
    class=${e$1({"dss-sidemenu-list-item":!0,"dss-sidemenu-list-item--expanded":!!d._expanded,"dss-sidemenu-list-item--collapsed":!d._expanded,"dss-sidemenu-list-item--selected":!!d._selected,"dss-sidemenu-list-item--disabled":!!d._disabled})}
    tabindex="${d._focusEnabled?"0":"-1"}"
    ?disabled=${d._disabled}
    @click="${d._handleClick}"
    @mouseenter="${d._handleMouseEnter}"
    @mouseleave="${d._handleMouseLeave}"
    @mousedown="${d._handleMouseDown}"
    @mouseup="${d._handleMouseUp}"
    @keydown="${d._handleKeyDown}"
    @focusout="${d._handleFocusout}"
  >
    <span class="dss-sidemenu-list-item__icon">
      <${dssIcon$b} icon="${d._icon}" size="md"></${dssIcon$b}>
      ${d._notifications&&!d._showItemDropdown&&!d._selected?u$1`
            <${dssNotificationBadge$1}
              class=${e$1({"dss-sidemenu-list-item__notification":!0,"dss-sidemenu-list-item__notification--expanded":!0})}
              value="${d._notifications}"
              state="succes"
              type="default"
              borderMenu
            >
            </${dssNotificationBadge$1}>
          `:null}
    </span>

    ${d._expanded?u$1`
          <span class="dss-sidemenu-list-item__label">
            ${d._label}
          </span>

          ${d._hasNestedMenu?u$1`
            <${dssIcon$b} icon="chevron_right" size="md"></${dssIcon$b}>
          `:null}
        `:null}

    <${dssTooltip} position="right" class="dss-sidemenu-list-item__tooltip">
      <span>${d._label}</span>
    </${dssTooltip}>

    <slot></slot>
  </li>
`;var __defProp$z=Object.defineProperty,__getOwnPropDesc$g=Object.getOwnPropertyDescriptor,__decorateClass$z=(d,a,l,_)=>{for(var h=__getOwnPropDesc$g(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$z(a,l,h),h};class SidemenuListItem extends r$1{constructor(){super(),this._label="Menu",this._icon="add_box",this._selected=!1,this._disabled=!1,this._expanded=!1,this._hasNestedMenu=!1,this._nestedMenuPosition="top",this._notifications=0,this._notificationsState="error",this._isHover=!1,this._isActive=!1,this._showItemDropdown=!1,this._isFocused=!1,this._focusEnabled=!1,this._scrollContainerClass="dss-layout-sidebar",this._tooltip=null,this._dropdown=null,this._handleDocumentClickBound=this._handleDocumentClick.bind(this),this._handleContainerScrollBound=this._handleContainerScroll.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(sidemenuListItemStyles)]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleDocumentClickBound)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClickBound),this._scrollContainer&&this._scrollContainer.removeEventListener("scroll",this._handleContainerScrollBound)}set label(a){const l=this._label;this._label=a,this.requestUpdate("label",l)}get label(){return this._label}set icon(a){const l=this._icon;this._icon=a,this.requestUpdate("icon",l)}get icon(){return this._icon||""}set selected(a){const l=this._selected;this._selected=a,this.requestUpdate("selected",l)}get selected(){return this._selected}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set hasNestedMenu(a){const l=this._hasNestedMenu;this._hasNestedMenu=a,this.requestUpdate("hasNestedMenu",l)}get hasNestedMenu(){return this._hasNestedMenu}set expanded(a){const l=this._expanded;this._expanded=a,this.requestUpdate("expanded",l)}get expanded(){return this._expanded}set notifications(a){const l=this._notifications;this._notifications=a,this.requestUpdate("notifications",l)}get notifications(){return this._notifications}set notificationsState(a){const l=this._notificationsState;this._notificationsState=a,this.requestUpdate("notificationsState",l)}get notificationsState(){return this._notificationsState}set nestedMenuPosition(a){const l=this._nestedMenuPosition;this._nestedMenuPosition=a,this.requestUpdate("nestedMenuPosition",l)}get nestedMenuPosition(){return this._nestedMenuPosition}set focusEnabled(a){const l=this._focusEnabled;this._focusEnabled=a,this.requestUpdate("focusEnabled",l)}get focusEnabled(){return this._focusEnabled}set scrollContainerClass(a){const l=this._scrollContainerClass;this._scrollContainerClass=a,this.requestUpdate("scrollContainerClass",l)}get scrollContainerClass(){return this._scrollContainerClass}get _notificationBadge(){var a;return((a=this.shadowRoot)==null?void 0:a.querySelector("dss-notification-badge"))||void 0}_clickedOutsideItem(a,l){l.composedPath().includes(a)||this._showItemDropdown&&(this._showItemDropdown=!1,this.requestUpdate())}_handleDocumentClick(a){this._clickedOutsideItem(this,a)}_handleContainerScroll(){}_handleClick(){this._disabled||(this._hasNestedMenu?(this._showItemDropdown=!0,this.requestUpdate()):this.dispatchEvent(new CustomEvent("onClick",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("updateItemFocus",{detail:!0,bubbles:!0,composed:!0})))}_handleMouseEnter(){this._notificationBadge&&!this._disabled&&this._notificationBadge.setAttribute("isHover","true")}_handleMouseLeave(){this._notificationBadge&&!this._disabled&&this._notificationBadge.removeAttribute("isHover")}_handleMouseDown(){this._notificationBadge&&!this._disabled&&this._notificationBadge.setAttribute("isActive","true")}_handleMouseUp(){this._notificationBadge&&!this._disabled&&this._notificationBadge.removeAttribute("isActive")}_handleKeyDown(a){(a.key==="ArrowDown"||a.key==="ArrowUp")&&(a.preventDefault(),this.dispatchEvent(new CustomEvent("navigate",{detail:{direction:a.key==="ArrowDown"?"next":"previous"},bubbles:!0,composed:!0}))),(a.key==="Enter"||a.key===" ")&&this._handleClick(),a.key==="Escape"&&this._closeItemDropdown()}_handleFocusout(a){const l=a.relatedTarget;l===null&&this._closeItemDropdown(),l&&!this.contains(l)&&this._closeItemDropdown()}_closeItemDropdown(){this._showItemDropdown&&setTimeout(()=>{this._showItemDropdown=!1,this.requestUpdate()},0)}focusItem(){var a,l;this._isFocused=!0,(l=(a=this.shadowRoot)==null?void 0:a.querySelector("li"))==null||l.focus()}blurItem(){var a,l;this._isFocused=!1,(l=(a=this.shadowRoot)==null?void 0:a.querySelector("li"))==null||l.blur()}get _scrollContainer(){return document.querySelector(`.${this._scrollContainerClass}`)}_getDropdownFixedPosition(){const a=this.getBoundingClientRect();this._dropdown&&(this._dropdown.style.left=`${a.right+8}px`,this._dropdown.classList.contains("dss-sidemenu-list-item__dropdown--top")?this._dropdown.style.top=`${a.top}px`:this._dropdown.style.top=`${a.bottom-this._dropdown.offsetHeight}px`)}_getTooltipFixedPosition(){if(this._tooltip){const a=this.getBoundingClientRect();this._tooltip.style.top=`${a.top+a.height/2}px`,this._tooltip.style.left=`${a.right-4}px`}}async firstUpdated(){var l,_;await this.updateComplete;const a=(l=this.shadowRoot)==null?void 0:l.querySelector(".dss-sidemenu-list-item__tooltip");if(a&&(this._tooltip=a),this._hasNestedMenu){const h=(_=this.shadowRoot)==null?void 0:_.querySelector(".dss-sidemenu-list-item__dropdown");h&&(this._dropdown=h)}this._scrollContainer&&this._scrollContainer.addEventListener("scroll",this._handleContainerScrollBound)}updated(a){super.updated(a),a.has("expanded")}render(){return sidemenuListItemTemplate(this)}}__decorateClass$z([n({type:String})],SidemenuListItem.prototype,"label");__decorateClass$z([n({type:String})],SidemenuListItem.prototype,"icon");__decorateClass$z([n(booleanType)],SidemenuListItem.prototype,"selected");__decorateClass$z([n(booleanType)],SidemenuListItem.prototype,"disabled");__decorateClass$z([n(booleanType)],SidemenuListItem.prototype,"hasNestedMenu");__decorateClass$z([n(booleanType)],SidemenuListItem.prototype,"expanded");__decorateClass$z([n({type:Number})],SidemenuListItem.prototype,"notifications");__decorateClass$z([n({type:String})],SidemenuListItem.prototype,"notificationsState");__decorateClass$z([n({type:String})],SidemenuListItem.prototype,"nestedMenuPosition");__decorateClass$z([n(booleanType)],SidemenuListItem.prototype,"focusEnabled");__decorateClass$z([n({type:String})],SidemenuListItem.prototype,"scrollContainerClass");const sidemenuListStyles=":host{display:block;width:100%}.dss-sidemenu-list{display:flex;align-items:center;flex-direction:column;gap:var(--dss-spacing-xxs)}.dss-sidemenu-list--expanded{width:100%}",sidemenuListTemplate=d=>x`
  <ul
    role="menu"
    class=${e$1({"dss-sidemenu-list":!0,"dss-sidemenu-list--expanded":!!d._expanded})}
    @navigate=${d._handleNavigate}
    @updateItemFocus=${d._handleItemFocus}
  >
    <slot></slot>
  </ul>
`;var __defProp$y=Object.defineProperty,__getOwnPropDesc$f=Object.getOwnPropertyDescriptor,__decorateClass$y=(d,a,l,_)=>{for(var h=__getOwnPropDesc$f(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$y(a,l,h),h};class SidemenuList extends r$1{constructor(){super(...arguments),this._disabled=!1,this._expanded=!1,this._scrollContainerClass="dss-layout-sidebar"}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(sidemenuListStyles)]}set expanded(a){const l=this._expanded;this._expanded=a,this.requestUpdate("expanded",l)}get expanded(){return this._expanded}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set scrollContainerClass(a){const l=this._scrollContainerClass;this._scrollContainerClass=a,this.requestUpdate("scrollContainerClass",l)}get scrollContainerClass(){return this._scrollContainerClass}_propagateProperties(){var l;const a=(l=this.shadowRoot)==null?void 0:l.querySelectorAll("slot");a&&a.forEach(_=>{_.assignedElements().forEach(b=>{this._expanded?b.setAttribute("expanded","true"):b.removeAttribute("expanded"),this._scrollContainerClass?b.setAttribute("scrollContainerClass",this._scrollContainerClass):b.removeAttribute("scrollContainerClass")})})}_handleItemFocus(a){var h;const l=a.target,_=(h=this.shadowRoot)==null?void 0:h.querySelector("slot");if(_){const b=_.assignedElements({flatten:!0}).filter(f=>!f._disabled),g=b.findIndex(f=>f._focusEnabled);b[g]!==l&&(l.setAttribute("focusEnabled","true"),b[g].removeAttribute("focusEnabled"))}}_handleNavigate(a){var _;const l=(_=this.shadowRoot)==null?void 0:_.querySelector("slot");if(l){const h=l.assignedElements({flatten:!0}).filter(f=>!f._disabled),b=h.findIndex(f=>f._focusEnabled);let g=b;a.detail.direction==="next"?g=(b+1)%h.length:a.detail.direction==="previous"&&(g=(b-1+h.length)%h.length),b!==g&&(h[b].blurItem(),h[b].removeAttribute("focusEnabled"),h[g].focusItem(),h[g].setAttribute("focusEnabled","true"),this.dispatchEvent(new CustomEvent("onSlotFocus",{bubbles:!0,composed:!0})))}}async firstUpdated(){var l;await this.updateComplete;const a=(l=this.shadowRoot)==null?void 0:l.querySelector("slot");if(a){const h=a.assignedElements({flatten:!0}).find(b=>b.tagName.toLowerCase()==="dss-sidemenu-list-item");h&&h.setAttribute("focusEnabled","true"),this._propagateProperties()}}updated(a){super.updated(a),(a.has("expanded")||a.has("disabled"))&&this._propagateProperties()}render(){return sidemenuListTemplate(this)}}__decorateClass$y([n(booleanType)],SidemenuList.prototype,"expanded");__decorateClass$y([n(booleanType)],SidemenuList.prototype,"disabled");__decorateClass$y([n({type:String})],SidemenuList.prototype,"scrollContainerClass");const sidemenuStyles=":host{display:block;min-height:100%;height:100%;width:auto}.dss-sidemenu{min-height:100%;width:72px;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;background-color:var(--color-primary-700);padding:var(--dss-spacing-lg) var(--dss-spacing-md);color:var(--color-white);gap:var(--dss-spacing-lg)}.dss-sidemenu--expanded{width:252px;align-items:flex-start}.dss-sidemenu-top-menu{width:100%;flex:1}.dss-sidemenu-bottom-menu,.dss-sidemenu-create{width:100%}.dss-sidemenu-create__button__content{display:flex;align-items:center;justify-content:center;position:relative}.dss-sidemenu-create__notification{position:absolute;top:-4px;right:-4px;display:block}.dss-sidemenu-create__notification--expanded{top:-8px;right:-8px}.dss-sidemenu-create__button{all:unset;cursor:pointer;box-sizing:border-box;height:40px;width:40px;display:flex;align-items:center;gap:var(--dss-spacing-xs);padding:var(--dss-spacing-xs);background-color:var(--color-white);color:var(--color-primary-700);border-radius:var(--dss-radius-sm);font-size:14px;line-height:24px;font-weight:var(--font-semibold);transition:background-color .3s ease-in}.dss-sidemenu-create__button:not(:disabled):hover{background-color:var(--color-primary-900);color:var(--color-white)}.dss-sidemenu-create__button:not(:disabled):active{background-color:var(--color-primary-800);color:var(--color-white)}.dss-sidemenu-create__button:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-sidemenu-create__button:disabled{color:var(--color-neutral-600);background-color:var(--color-neutral-100);cursor:not-allowed}.dss-sidemenu-toggle{all:unset;cursor:pointer;box-sizing:border-box;height:40px;width:40px;display:flex;align-items:center;gap:var(--dss-spacing-xs);padding:var(--dss-spacing-xs);background-color:var(--color-primary-700);border-radius:var(--dss-radius-sm);font-size:14px;line-height:24px;font-weight:var(--font-semibold);transition:background-color .3s ease-in-out}.dss-sidemenu-toggle:not(:disabled):hover{background-color:var(--color-primary-900)}.dss-sidemenu-toggle:not(:disabled):active{background-color:var(--color-primary-800)}.dss-sidemenu-toggle:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-sidemenu-toggle:disabled{color:var(--color-primary-200);cursor:not-allowed}.dss-sidemenu-toggle__icon{border-radius:100%;background-color:var(--color-white);color:var(--color-primary-700)}.dss-sidemenu--expanded button.dss-sidemenu-create__button,.dss-sidemenu--expanded button.dss-sidemenu-toggle{width:100%}.dss-sidemenu-toggle:disabled .dss-sidemenu-toggle__icon{background-color:var(--color-primary-200)}.dss-sidemenu-top-menu,.dss-sidemenu-bottom-menu{width:100%}.dss-sidemenu-bottom{width:100%;display:flex;flex-direction:inherit;align-items:inherit;justify-content:inherit;border-top:var(--dss-border-width-sm) solid var(--color-white);padding-top:var(--dss-spacing-md);gap:var(--dss-spacing-lg)}",dssIcon$a=i`dss-icon${s(getCustomElementSuffix())}`,dssNotificationBadge=i`dss-notification-badge${s(getCustomElementSuffix())}`,sidemenuTemplate=d=>u$1`
  <aside
    class=${e$1({"dss-sidemenu":!0,"dss-sidemenu--expanded":!!d._expanded})}
  >
    <div class="dss-sidemenu-top-menu">
      <slot name="top-menu"></slot>
    </div>

    ${d._hideCreateMenu?null:u$1`
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
              aria-label="${d._createLabel}"
            >
              <span class="dss-sidemenu-create__button__content">
                <${dssIcon$a} class="dss-sidemenu-create__icon" size="md" icon="add_circle_outline"></${dssIcon$a}>
                ${d._createNotifications&&!d._showCreateDropdown?u$1`
                      <${dssNotificationBadge}
                        class=${e$1({"dss-sidemenu-create__notification":!0,"dss-sidemenu-create__notification--expanded":!!d._expanded})}
                        ?dot=${!d._expanded}
                        value="${d._createNotifications}"
                        state="success"
                        type="default"
                        borderWhite
                      />
                    `:null}
              </span>
              ${d._expanded?u$1` ${d._createLabel} `:null}
            </button>
            <slot name="create-action-menu"></slot>
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
        aria-label="${d._expanded?"col·lapsar menú":"expandir menú"}"
      >
        ${d._expanded?u$1`
              <${dssIcon$a} class="dss-sidemenu-toggle__icon" size="md" icon="chevron_left"></${dssIcon$a}>
            `:u$1`
              <${dssIcon$a} class="dss-sidemenu-toggle__icon" size="md" icon="chevron_right"></${dssIcon$a}>
            `}
        ${d._expanded?u$1` ${d._toggleLabel} `:null}
      </button>
    </div>
  </aside>
`;var __defProp$x=Object.defineProperty,__getOwnPropDesc$e=Object.getOwnPropertyDescriptor,__decorateClass$x=(d,a,l,_)=>{for(var h=__getOwnPropDesc$e(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$x(a,l,h),h};class Sidemenu extends r$1{constructor(){super(),this._disabled=!1,this._expanded=!1,this._toggleDisabled=!1,this._toggleLabel="Tancar Menu",this._hideCreateMenu=!1,this._createDisabled=!1,this._createLabel="Crear",this._createMenuPosition="top",this._createNotifications=0,this._showCreateDropdown=!1,this._scrollContainerClass="dss-layout-sidebar",this._dropdown=null,this._handleDocumentClickBound=this._handleDocumentClick.bind(this),this._handleResizeBound=this._handleResize.bind(this),this._handleContainerScrollBound=this._handleContainerScroll.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(sidemenuStyles)]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResizeBound),document.addEventListener("click",this._handleDocumentClickBound),this._handleResize()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._handleResizeBound),document.removeEventListener("click",this._handleDocumentClickBound),this._scrollContainer&&this._scrollContainer.removeEventListener("scroll",this._handleContainerScrollBound)}set expanded(a){const l=this._expanded;this._expanded=a,this.requestUpdate("expanded",l)}get expanded(){return this._expanded}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set toggleLabel(a){const l=this._toggleLabel;this._toggleLabel=a,this.requestUpdate("toggleLabel",l)}get toggleLabel(){return this._toggleLabel}set createLabel(a){const l=this._createLabel;this._createLabel=a,this.requestUpdate("createLabel",l)}get createLabel(){return this._createLabel}set createMenuPosition(a){const l=this._createMenuPosition;this._createMenuPosition=a,this.requestUpdate("createMenuPosition",l)}get createMenuPosition(){return this._createMenuPosition}set createNotifications(a){const l=this._createNotifications;this._createNotifications=a,this.requestUpdate("createNotifications",l)}get createNotifications(){return this._createNotifications}set createDisabled(a){const l=this._createDisabled;this._createDisabled=a,this.requestUpdate("createDisabled",l)}get createDisabled(){return this._createDisabled}set hideCreateMenu(a){const l=this._hideCreateMenu;this._hideCreateMenu=a,this.requestUpdate("hideCreateMenu",l)}get hideCreateMenu(){return this._hideCreateMenu}set scrollContainerClass(a){const l=this._scrollContainerClass;this._scrollContainerClass=a,this.requestUpdate("scrollContainerClass",l)}get scrollContainerClass(){return this._scrollContainerClass}get _createNotification(){var a;return((a=this.shadowRoot)==null?void 0:a.querySelector("dss-notification-badge"))||void 0}get _createSection(){var l;return(l=this.shadowRoot)==null?void 0:l.querySelector(".dss-sidemenu-create")}_propagateProperties(){var l;const a=(l=this.shadowRoot)==null?void 0:l.querySelectorAll("slot");a&&a.forEach(_=>{_.assignedElements().forEach(b=>{this._expanded?b.setAttribute("expanded","true"):b.removeAttribute("expanded"),this._scrollContainerClass?b.setAttribute("scrollContainerClass",this._scrollContainerClass):b.removeAttribute("scrollContainerClass")})})}_handleResize(){window.innerWidth<1024?(this.removeAttribute("expanded"),this._toggleDisabled=!0):this._toggleDisabled=!1,this.requestUpdate()}_clickedOutsideCreateMenu(a,l){l.composedPath().includes(a)||this._closeCreateDropdown()}_closeCreateDropdown(){this._showCreateDropdown&&(this._showCreateDropdown=!1,this.requestUpdate())}_handleDocumentClick(a){this._createSection&&this._clickedOutsideCreateMenu(this._createSection,a)}_toggleCreateMenu(){this._showCreateDropdown=!this._showCreateDropdown,this.requestUpdate()}_toggleSidemenu(){this._expanded?this.removeAttribute("expanded"):this.setAttribute("expanded","true")}_handleCreateMouseEnter(){this._createNotification&&this._createNotification.setAttribute("isHover","true")}_handleCreateMouseLeave(){this._createNotification&&this._createNotification.removeAttribute("isHover")}_handleCreateMouseDown(){this._createNotification&&this._createNotification.setAttribute("isActive","true")}_handleCreateFocusout(a){if(this._showCreateDropdown){const l=a.relatedTarget;l===null&&this._closeCreateDropdown(),l&&!this._createSection.contains(l)&&l.tagName!=="DSS-ACTION-MENU-ITEM"&&this._closeCreateDropdown()}}_handleCreateMouseUp(){this._createNotification&&this._createNotification.removeAttribute("isActive")}get _scrollContainer(){return document.querySelector(`.${this._scrollContainerClass}`)}_getCreateDropdownFixedPosition(){var _;const l=((_=this.shadowRoot)==null?void 0:_.querySelector(".dss-sidemenu-create")).getBoundingClientRect();this._dropdown&&(this._dropdown.style.left=`${l.right+8}px`,this._dropdown.classList.contains("dss-sidemenu-create__dropdown--top")?this._dropdown.style.top=`${l.top}px`:this._dropdown.style.top=`${l.bottom-this._dropdown.offsetHeight}px`)}_handleContainerScroll(){this._getCreateDropdownFixedPosition()}async firstUpdated(){var l;await this.updateComplete,this._propagateProperties();const a=(l=this.shadowRoot)==null?void 0:l.querySelector(".dss-sidemenu-create__dropdown");a&&(this._dropdown=a,this._getCreateDropdownFixedPosition()),this._scrollContainer&&this._scrollContainer.addEventListener("scroll",this._handleContainerScrollBound)}updated(a){super.updated(a),(a.has("expanded")||a.has("disabled"))&&(this._propagateProperties(),this._getCreateDropdownFixedPosition())}render(){return sidemenuTemplate(this)}}__decorateClass$x([n(booleanType)],Sidemenu.prototype,"expanded");__decorateClass$x([n(booleanType)],Sidemenu.prototype,"disabled");__decorateClass$x([n({type:String})],Sidemenu.prototype,"toggleLabel");__decorateClass$x([n({type:String})],Sidemenu.prototype,"createLabel");__decorateClass$x([n({type:String})],Sidemenu.prototype,"createMenuPosition");__decorateClass$x([n({type:Number})],Sidemenu.prototype,"createNotifications");__decorateClass$x([n(booleanType)],Sidemenu.prototype,"createDisabled");__decorateClass$x([n(booleanType)],Sidemenu.prototype,"hideCreateMenu");__decorateClass$x([n({type:String})],Sidemenu.prototype,"scrollContainerClass");const styles$9='.dss-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;cursor:pointer;outline:none;border-radius:3px;height:4px;background:linear-gradient(to right,var(--color-primary-500) var(--progress),var(--color-neutral-100) var(--progress))}.dss-slider--vertical{transform:rotate(-90deg);transform-origin:center center}.dss-slider::-moz-range-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:20px;width:20px;background-color:var(--color-primary-500);border-radius:50%;border:var(--dss-border-width-md) solid var(--color-white);-moz-transition:.3s ease-in-out;transition:.3s ease-in-out;box-sizing:border-box}.dss-slider::-webkit-slider-thumb:hover{background-color:var(--color-primary-600);-webkit-transition:all .3s linear;transition:all .3s linear}.dss-slider::-moz-range-thumb:hover{background-color:var(--color-primary-600);-moz-transition:all .3s linear;transition:all .3s linear}.dss-slider:active::-webkit-slider-thumb{background-color:var(--color-primary-400);-webkit-transition:none;transition:none}.dss-slider:active::-moz-range-thumb{background-color:var(--color-primary-400);-moz-transition:none;transition:none}.dss-slider:focus-visible::-webkit-slider-thumb{background-color:var(--color-primary-500);border-color:var(--color-blue-200);outline:2px solid var(--color-blue-200);-webkit-transition:none;transition:none}.dss-slider:focus-visible::-moz-range-thumb{background-color:var(--color-primary-500);border-color:var(--color-blue-200);outline:2px solid var(--color-blue-200);-moz-transition:none;transition:none}.dss-slider:disabled{cursor:not-allowed;background:linear-gradient(to right,var(--color-neutral-400) var(--progress),var(--color-neutral-100) var(--progress))}.dss-slider:disabled::-webkit-slider-thumb{background-color:var(--color-neutral-500);-webkit-transition:none;transition:none}.dss-slider:disabled::-moz-range-thumb{background-color:var(--color-neutral-500);-moz-transition:none;transition:none}.dss-slider:disabled+.dss-slider-tooltip{display:none!important}.dss-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:20px;width:20px;background-color:var(--color-primary-500);border-radius:50%;border:var(--dss-border-width-md) solid var(--color-white);-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;box-sizing:border-box}.dss-slider:hover+.dss-slider-tooltip{display:block}.dss-slider:focus-visible+.dss-slider-tooltip{display:block}.dss-slider-wrapper{min-width:200px;width:100%;position:relative}.dss-slider-tooltip{display:none;position:absolute;top:-50%}.dss-slider-tooltip--active{display:block}.dss-slider-tooltip .tooltip-wrapper{width:var(--dss-spacing-hg);height:var(--dss-spacing-hg);line-height:24px;text-align:center;background:var(--color-black);color:var(--color-white);font-size:16px;display:flex;align-items:center;justify-content:center;position:absolute;top:-45px;left:calc(50% + 1px);transform:translate(-50%);border-radius:var(--dss-radius-sm);box-shadow:0 4px 8px 3px #0000000d,0 1px 3px #0000001a}.dss-slider-tooltip .tooltip-wrapper:before{content:"";position:absolute;width:0;height:0;border-top:24px solid var(--color-black);border-left:24px solid transparent;border-right:24px solid transparent;top:100%;left:50%;margin-left:-24px;margin-top:-15px}.dss-slider-info{position:absolute;top:calc(100% + 6px);font-size:12px;line-height:16px;color:var(--color-neutral-700)}.dss-slider-info--min{left:0}.dss-slider-info--medium{left:calc(50% - 5px)}.dss-slider-info--max{right:0}.dss-slider--vertical>.dss-slider-tooltip .tooltip-value{transform:rotate(90deg)}.dss-slider--vertical>.dss-slider-info{transform:rotate(90deg);transform-origin:center center;margin-right:-10px}',template$7=d=>{var _;const a={"dss-slider--vertical":d._vertical},l={"dss-slider-tooltip--active":d._isTooltipTouched};return u$1`
    <div class="dss-slider-wrapper ${e$1(a)}">
      <input
        id="dss-slider-input"
        aria-label="${d._label}"
        type="range"
        class="dss-slider"
        min=${d._min}
        max=${d._max}
        .value=${(_=d._value)==null?void 0:_.toString()}
        step=${d._step}
        direction="${d._orient}"
        @input="${d._handleInput}"
        style="--progress: ${`${d._progress}%`}"
        ?disabled="${d._disabled}"
      />
      <div
        class="dss-slider-tooltip ${e$1(l)}"
        id="dss-slider-tooltip"
      ></div>
      <div class="dss-slider-info dss-slider-info--min">${d._min}</div>
      <div class="dss-slider-info dss-slider-info--medium">
        ${Math.round((d._max+d._min)/2)}
      </div>
      <div class="dss-slider-info dss-slider-info--max">${d._max}</div>
      <div></div>
    </div>
  `};var __defProp$w=Object.defineProperty,__getOwnPropDesc$d=Object.getOwnPropertyDescriptor,__decorateClass$w=(d,a,l,_)=>{for(var h=__getOwnPropDesc$d(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$w(a,l,h),h};class Slider extends r$1{constructor(){super(...arguments),this._label="Input range",this._min=0,this._max=0,this._step=1,this._orient="horizontal",this._vertical=!1,this._value=0,this._progress=0,this._disabled=!1,this._isTooltipTouched=!1}static get styles(){return r$2(styles$9)}get _input(){var a;return(a=this.shadowRoot)==null?void 0:a.querySelector("input")}get _tooltip(){var a;return(a=this.shadowRoot)==null?void 0:a.querySelector("#dss-slider-tooltip")}set min(a){const l=this._min;this._min=a,this.requestUpdate("min",l)}get min(){return this._min}set max(a){const l=this._max;a>=this._value&&(this._max=a,this._setProgress(),this.requestUpdate("max",l))}get max(){return this._max}set step(a){const l=this._step;this._step=a,this.requestUpdate("step",l)}get step(){return this._step}set orient(a){const l=this._orient;this._orient=a,a==="vertical"?this._vertical=!0:this._vertical=!1,this.requestUpdate("orient",l)}get orient(){return this._orient}set value(a){const l=this._value;this._max>=a&&(this._value=a,this._setProgress(),this.requestUpdate("value",l))}get value(){return this._value}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set label(a){const l=this._label;this._label=a,this.requestUpdate("label",l)}get label(){return this._label}async firstUpdated(){try{await this.updateComplete,this._setProgress(),this.requestUpdate(),document.addEventListener("DOMContentLoaded",this._updateTooltip.bind(this)),this._input.addEventListener("input",this._updateTooltip.bind(this)),this._input.addEventListener("mouseup",this._dispatchValue.bind(this)),this._input.addEventListener("keyup",this._dispatchValue.bind(this)),this._input.addEventListener("touchstart",this._handleTouchStart.bind(this)),this._input.addEventListener("touchmove",this._handleTouchMove.bind(this)),this._input.addEventListener("touchend",this._handleTouchEnd.bind(this))}catch{console.error("ERROR OCURRED")}}_handleTouchStart(a){this._vertical&&a.preventDefault(),this._isTooltipTouched=!0}_handleTouchEnd(a){this._vertical&&a.preventDefault(),this._isTooltipTouched=!1,this.requestUpdate(),this._dispatchValue()}_handleTouchMove(a){if(this._vertical){if(!a.target)return;const l=a.target,_=Number.parseInt(l.max,10),h=Number.parseInt(l.min,10),b=a.touches[0],g=l.getBoundingClientRect(),f=(b.clientY-g.top)/g.height,$=Math.round(f*(_-h)+h);l.value=String(_-$+h),l.dispatchEvent(new Event("input"))}}_handleInput(){if(this._input){const a=Number.parseFloat(this._input.value);this._progress=Math.round((a-this._min)/(this._max-this._min)*100),this.requestUpdate()}}_setProgress(){this._input&&(this._input.value=this._value.toString()),this._progress=Math.round((this._value-this._min)/(this._max-this._min)*100),this.requestUpdate()}_updateTooltip(){if(this._tooltip){const a=Number((+this._input.value-+this._min)*100/(+this._max-+this._min)),l=10-a*.2;this._tooltip.innerHTML=`<span class="tooltip-wrapper"><span class="tooltip-value">${this._input.value}</span></span>`,this._tooltip.style.left=`calc(${a}% + (${l}px))`}}_dispatchValue(){const a={detail:this._input.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onDssSliderValueChange",a))}render(){return template$7(this)}}__decorateClass$w([n({type:Number})],Slider.prototype,"min");__decorateClass$w([n({type:Number})],Slider.prototype,"max");__decorateClass$w([n({type:Number})],Slider.prototype,"step");__decorateClass$w([n({type:String})],Slider.prototype,"orient");__decorateClass$w([n({type:Number})],Slider.prototype,"value");__decorateClass$w([n(booleanType)],Slider.prototype,"disabled");__decorateClass$w([n({type:String})],Slider.prototype,"label");const styles$8=":host{display:inline-block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.dss-spinner{width:48px;height:48px;animation:rotate-animation 1s linear infinite;position:relative}.dss-spinner__item{width:100%;height:100%;left:0;top:0;position:absolute;transform:rotate(-90deg)}.dss-spinner__item:nth-child(1) circle{stroke:#eff7ff;stroke-dasharray:1,300;stroke-dashoffset:0;animation:stroke-animation 4s .2s ease infinite;transform-origin:center center}.dss-spinner__item:nth-child(2) circle{stroke:#bfddfa;stroke-dasharray:1,300;stroke-dashoffset:0;animation:stroke-animation 4s .4s ease infinite;transform-origin:center center}.dss-spinner__item:nth-child(3) circle{stroke:#60a8f0;stroke-dasharray:1,300;stroke-dashoffset:0;animation:stroke-animation 4s calc(.2s * (3)) ease infinite;transform-origin:center center}.dss-spinner__item:nth-child(4) circle{stroke:#0073e6;stroke-dasharray:1,300;stroke-dashoffset:0;animation:stroke-animation 4s .8s ease infinite;transform-origin:center center}.dss-spinner__item circle{fill:none;stroke-linecap:round;stroke-width:8px}.dss-spinner.dss-spinner--sm{width:24px;height:24px}.dss-spinner.dss-spinner--md{width:48px;height:48px}.dss-spinner.dss-spinner--lg{width:72px;height:72px}@keyframes stroke-animation{0%{stroke-dasharray:1,300;stroke-dashoffset:0}50%{stroke-dasharray:120,300;stroke-dashoffset:-59}to{stroke-dasharray:120,300;stroke-dashoffset:-175}}@keyframes rotate-animation{to{transform:rotate(360deg)}}",template$6=d=>u$1`
  <div class="dss-spinner dss-spinner--${d.size}">
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
`;var __defProp$v=Object.defineProperty,__decorateClass$v=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$v(a,l,h),h};class Spinner extends r$1{constructor(){super(...arguments),this.size="md"}static get styles(){return r$2(styles$8)}render(){return template$6(this)}}__decorateClass$v([n({type:String})],Spinner.prototype,"size");const splitButtonStyles=".dss-split-button{display:flex;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;font-family:var(--font-family)}.dss-split-button .dss-split-button-main:focus-visible,.dss-split-button .dss-split-button-icon:focus-visible{z-index:900}.dss-split-button-main{height:40px;padding-top:var(--dss-spacing-xs);padding-right:var(--dss-spacing-sm);padding-bottom:var(--dss-spacing-xs);padding-left:var(--dss-spacing-lg);box-sizing:border-box;border-radius:0;border-top-left-radius:var(--dss-radius-xl);border-bottom-left-radius:var(--dss-radius-xl);font-size:16px;line-height:24px;font-weight:var(--font-semibold)}.dss-split-button--primary .dss-split-button-main{border-right:var(--dss-border-width-sm) solid var(--color-white)}.dss-split-button--primary .dss-split-button-main:focus-visible{border-right:transparent}.dss-split-button--primary.dss-split-button--disabled .dss-split-button-main{border-right:var(--dss-border-width-sm) solid var(--color-neutral-500)}.dss-split-button-icon{height:40px;padding-top:var(--dss-spacing-xs);padding-right:var(--dss-spacing-md);padding-bottom:var(--dss-spacing-xs);padding-left:var(--dss-spacing-xs);box-sizing:border-box;border-radius:0;border-top-right-radius:var(--dss-radius-xl);border-bottom-right-radius:var(--dss-radius-xl);border-left:0}.dss-split-button-icon:hover:enabled{border-left:0}.dss-split-button--open.dss-split-button--primary .dss-split-button-icon:not(:disabled){background-color:var(--color-primary-700)}.dss-split-button--open.dss-split-button--secondary .dss-split-button-icon:not(:disabled){background-color:var(--color-primary-100)}.dss-split-button--md .dss-split-button-main{height:32px;font-size:14px;padding:var(--dds-spacing-xxs, 4px) var(--dds-spacing-xs, 8px) var(--dds-spacing-xxs, 4px) var(--dds-spacing-md, 16px)}.dss-split-button--md .dss-split-button-icon{height:32px;padding:var(--dds-spacing-xxs, 4px) var(--dds-spacing-xs, 8px) var(--dds-spacing-xxs, 4px) var(--dds-spacing-xxs, 4px)}.dss-split-button--sm .dss-split-button-main{height:24px;font-size:12px;padding:var(--dds-spacing-xxs, 4px) var(--dds-spacing-xs, 8px) var(--dds-spacing-xxs, 4px) var(--dds-spacing-sm, 12px);line-height:16px}.dss-split-button--sm .dss-split-button-icon{height:24px;padding:0px var(--dds-spacing-xxs, 4px) 0px var(--dss-spacing-tiny, 2px)}.dss-split-button-icon:disabled .dss-icon{color:var(--color-neutral-500)}",dssIcon$9=i`dss-icon${s(getCustomElementSuffix())}`,splitButtonTemplate=d=>{const a={"dss-split-button--primary":d._variant==="primary","dss-split-button--secondary":d._variant==="secondary","dss-split-button--open":d._isOpen,"dss-split-button--disabled":d._disabled,[`dss-split-button--${d._size}`]:!!d._size},l={"dss-button--primary":d._variant==="primary","dss-button--secondary":d._variant==="secondary"};return u$1`
    <div class="dss-split-button ${e$1(a)}">
      <button
        type="button"
        class="dss-button ${e$1(l)} dss-split-button-main"
        ?disabled=${d._disabled}
        @click="${d._dispatchMainClick}"
      >
        ${d._text}
      </button>
      <div class="dss-split-button-action" data-expanded="${d._isOpen}">
        <button
          aria-label="${d._isOpen?d.secondaryLabelClose:d.secondaryLabelOpen}"
          type="button" 
          class="dss-button ${e$1(l)} dss-button--only-icon dss-split-button-icon"
          ?disabled=${d._disabled}
          @click="${d._dispatchIconClick}"
        >
          <${dssIcon$9} 
            icon="${d._isOpen?d._iconOpen:d._iconClose}"
            size="md">
          </${dssIcon$9}>
        </button>
        <slot name="menu"></slot>
      </div>
    </div>
  `};var __defProp$u=Object.defineProperty,__getOwnPropDesc$c=Object.getOwnPropertyDescriptor,__decorateClass$u=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$c(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$u(a,l,h),h};class SplitButton extends r$1{constructor(){super(),this.secondaryLabelOpen="Obrir",this.secondaryLabelClose="Tamcar",this._size="lg",this._iconClose="expand_more",this._iconOpen="expand_less",this._variant="primary",this._text="",this._disabled=!1,this._isOpen=!1,this._dropdownPosition="bottom-right",this._hasMenu=!1,this._handleDocumentClickBound=this._handleDocumentClick.bind(this)}static get styles(){return[r$2(iconStyles),r$2(buttonStyles),r$2(splitButtonStyles)]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleDocumentClickBound)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClickBound)}get _actionMenu(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="menu"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}set iconClose(a){const l=this._iconClose;this._iconClose=a,this.requestUpdate("iconClose",l)}get iconClose(){return this._iconClose}set iconOpen(a){const l=this._iconOpen;this._iconOpen=a,this.requestUpdate("iconOpen",l)}get iconOpen(){return this._iconOpen}set variant(a){const l=this._variant;this._variant=a,this.requestUpdate("variant",l)}get variant(){return this._variant}set text(a){const l=this._text;this._text=a,this.requestUpdate("text",l)}get text(){return this._text}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set isOpen(a){const l=this._isOpen;this._isOpen=a,this.requestUpdate("disabled",l)}get isOpen(){return this._isOpen}set size(a){const l=this._size;a==="md"||a==="sm"?this._size=a:this._size="lg",this.requestUpdate("size",l)}get size(){return this._size}set dropdownPosition(a){const l=this._dropdownPosition;this._dropdownPosition=a,this.requestUpdate("dropdownPosition",l)}get dropdownPosition(){return this._dropdownPosition}set hasMenu(a){const l=this._hasMenu;this._hasMenu=a,this.requestUpdate("hasMenu",l)}get hasMenu(){return this._hasMenu}_dispatchMainClick(){const a={bubbles:!1,composed:!1};this.dispatchEvent(new CustomEvent("onClick",a))}_dispatchIconClick(){this._hasMenu&&this._toggleMenu();const a={bubbles:!1,composed:!1};this.dispatchEvent(new CustomEvent("onSecondaryClick",a))}_toggleMenu(){this._isOpen=!this._isOpen,this.requestUpdate()}_handleActionMenuClosed(){this._isOpen=!1,this._actionMenu&&!this._isOpen&&this._actionMenu._closeMenu()}_handleDocumentClick(a){this._clickedOutsideItem(this,a)}_clickedOutsideItem(a,l){l.composedPath().includes(a)||this._isOpen&&(this._isOpen=!1,this.requestUpdate())}async firstUpdated(){await this.updateComplete,this._actionMenu&&this._actionMenu.addEventListener("onCloseActionMenu",()=>{this._handleActionMenuClosed()})}render(){return splitButtonTemplate(this)}}__decorateClass$u([n({type:String})],SplitButton.prototype,"iconClose",1);__decorateClass$u([n({type:String})],SplitButton.prototype,"iconOpen",1);__decorateClass$u([n({type:String})],SplitButton.prototype,"variant",1);__decorateClass$u([n({type:String})],SplitButton.prototype,"text",1);__decorateClass$u([n(booleanType)],SplitButton.prototype,"disabled",1);__decorateClass$u([n(booleanType)],SplitButton.prototype,"isOpen",1);__decorateClass$u([n({type:String})],SplitButton.prototype,"size",1);__decorateClass$u([n({type:String})],SplitButton.prototype,"dropdownPosition",1);__decorateClass$u([n(booleanType)],SplitButton.prototype,"hasMenu",1);__decorateClass$u([n(booleanType)],SplitButton.prototype,"secondaryLabelOpen",2);__decorateClass$u([n(booleanType)],SplitButton.prototype,"secondaryLabelClose",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i$1{constructor(a){if(super(a),this.it=E,a.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(a){if(a===E||a==null)return this._t=void 0,this.it=a;if(a===T)return a;if(typeof a!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(a===this.it)return this._t;this.it=a;const l=[a];return l.raw=l,this._t={_$litType$:this.constructor.resultType,strings:l,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$2(e),styles$7=':host{display:inline-block;height:100%;width:100%;--circle: 32px;--circle-md: 24px;--circle-sm: 16px;--default-background: var(--color-white);--default-border-color: var(--color-neutral-500);--default-font-color: var(--color-neutral-900);--default-background-hover: var(--color-neutral-50);--default-font-color-active: var(--color-neutral-500);--active-background: var(--color-primary-500);--active-border-color: var(--color-primary-500);--active-font-color: var(--color-white);--completed-background: var(--color-primary-50);--disabled-background: var(--color-neutral-100);--disabled-border-color: var(--color-neutral-100);--disabled-font-color: var(--color-neutral-600);--line-width: 2px;--font-size: 18px;--font-size-md: 16px;--font-size-sm: 16px}.dss-circular-stepper{display:flex;gap:16px;align-items:center}.dss-circular-stepper__item{width:3rem;height:3rem;position:relative}.dss-circular-stepper__item svg{width:3rem;height:3rem;transform:rotate(-90deg)}.dss-circular-stepper__counter{position:absolute;font-size:.9rem;line-height:24px;left:0;top:0;width:3rem;height:3rem;display:flex;justify-content:center;align-items:center}.dss-circular-stepper__label,.dss-circular-stepper__counter b{font-weight:600;color:var(--color-neutral-700);font-size:.9rem;transition:.3s all ease-in;line-height:24px}.dss-circular-stepper circle{stroke:var(--color-neutral-200);stroke-dashoffset:0;fill:none;stroke-linecap:round;stroke-width:6px;stroke-dasharray:100,100;transition:.3s all ease-in}.dss-circular-stepper circle:last-of-type{stroke:var(--color-primary-500);stroke-dasharray:var(--percent),100;stroke-dashoffset:0}.dss-stepper{display:flex;list-style:none;justify-content:space-between;background:linear-gradient(var(--default-border-color) 0 0) no-repeat 50% calc((var(--circle) - var(--line-width)) / 2) / 100% var(--line-width);margin:var(--dss-spacing-xxs) 0 var(--dss-spacing-xl);padding:0;counter-reset:step}.dss-stepper--md{background:linear-gradient(var(--default-border-color) 0 0) no-repeat 50% calc((var(--circle-md) - var(--line-width)) / 2) / 100% var(--line-width)}.dss-stepper--sm{background:linear-gradient(var(--default-border-color) 0 0) no-repeat 50% calc((var(--circle-sm) - var(--line-width)) / 2) / 100% var(--line-width)}.dss-bubble{display:grid;place-items:center;gap:0;position:relative;border-radius:50%;transition:.3s outline ease-in}.dss-bubble:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-bubble:before{cursor:pointer;content:counter(step) " ";counter-increment:step;display:grid;place-content:center;aspect-ratio:1;height:var(--circle);box-sizing:border-box;border-radius:50%;font-size:var(--font-size);font-weight:var(--font-semibold);font-family:var(--font-family);z-index:100;background-color:var(--default-background);border:var(--line-width) solid var(--active-border-color);color:var(--default-font-color);transition:.3s all ease-in}.dss-bubble:not(.dss-bubble--active):not(:active):hover:before{background-color:var(--completed-background)}.dss-stepper--md .dss-bubble:before{height:var(--circle-md);font-size:var(--font-size-md)}.dss-stepper--sm .dss-bubble:before{content:"";height:var(--circle-sm);font-size:var(--font-size-sm);height:16px;width:16px}.dss-bubble--active:before{background-color:var(--active-background);border-color:var(--active-border-color);color:var(--active-font-color)}.dss-bubble--active~.dss-bubble:before{background-color:var(--default-background);border-color:var(--default-border-color);color:var(--default-font-color)}.dss-bubble--active~.dss-bubble:not(.dss-bubble--active):hover:before{background-color:var(--default-background-hover)}.dss-bubble--active~.dss-bubble:active:before{background-color:var(--default-background);color:var(--default-font-color-active)}.dss-bubble--icon:before{content:attr(icon);font-family:var(--font-icons);font-weight:400}.dss-bubble--checked:before{content:"done";font-family:var(--font-icons);font-weight:400;font-size:24px;color:var(--color-primary-500)!important}.dss-stepper--sm .dss-bubble--checked:before{content:"check_circle";background-color:var(--color-primary-500);color:var(--color-white)!important;border-width:1px!important}.dss-stepper--sm .dss-bubble--checked:hover:before{border-color:var(--color-white);color:var(--color-primary-500)!important}.dss-bubble--checked:active:before{background-color:var(--color-white);color:var(--color-primary-300)!important;border-color:var(--color-primary-500)!important}.dss-stepper--sm .dss-bubble--checked:active:before{border-color:var(--color-white)!important;color:var(--color-primary-300)!important}.dss-bubble--info:before,.dss-bubble--active~.dss-bubble.dss-bubble--info:before{content:"info_i";font-family:var(--font-icons);font-weight:400;background-color:var(--color-white);color:var(--color-blue-500);border-color:var(--color-blue-500)}.dss-bubble--info:hover:before,.dss-bubble--active~.dss-bubble.dss-bubble--info:hover:before{background-color:var(--color-blue-50)!important}.dss-bubble--info:active:before,.dss-bubble--active~.dss-bubble.dss-bubble--info:not(.dss-bubble--active):active:before{color:var(--color-blue-300)!important;background-color:var(--color-white)!important}.dss-stepper--sm .dss-bubble--info:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--info:before{content:"info";background-color:var(--color-blue-500);border-color:var(--color-blue-500);color:var(--color-white)!important;border-width:1px!important}.dss-stepper--sm .dss-bubble--info:hover:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--info:hover:before{background-color:var(--color-blue-50)!important;border-color:var(--color-white);color:var(--color-blue-500)!important}.dss-stepper--sm .dss-bubble--info:active:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--info:active:before{background-color:var(--color-white)!important;border-color:var(--color-white)!important;color:var(--color-blue-300)!important}.dss-bubble--alert:before,.dss-bubble--active~.dss-bubble.dss-bubble--alert:before{content:"priority_high";font-family:var(--font-icons);font-weight:400;background-color:var(--color-white);color:var(--color-yellow-800);border-color:var(--color-yellow-800)}.dss-bubble--alert:not(:active):hover:before{background-color:var(--color-yellow-50)!important}.dss-bubble--alert:active:before,.dss-bubble--active~.dss-bubble.dss-bubble--alert:active:before{color:var(--color-yellow-700)!important;background-color:var(--color-white)}.dss-stepper--sm .dss-bubble--alert:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--alert:before{content:"error";background-color:var(--color-yellow-800);border-color:var(--color-yellow-800);color:var(--color-white)!important;border-width:1px!important}.dss-stepper--sm .dss-bubble--alert:hover:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--alert:hover:before{background-color:var(--color-yellow-50)!important;border-color:var(--color-white);color:var(--color-yellow-800)!important}.dss-stepper--sm .dss-bubble--alert:active:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--alert:active:before{background-color:var(--color-white)!important;border-color:var(--color-white)!important;color:var(--color-yellow-700)!important}.dss-bubble--error:before,.dss-bubble--active~.dss-bubble.dss-bubble--error:before{content:"close";font-family:var(--font-icons);font-weight:400;background-color:var(--color-white);color:var(--color-red-500);border-color:var(--color-red-500)}.dss-bubble--error:active:before,.dss-bubble--active~.dss-bubble.dss-bubble--error:active:before{color:var(--color-red-300)!important;background-color:var(--color-white)}.dss-stepper--sm .dss-bubble--error:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--error:before{content:"cancel";background-color:var(--color-red-500);border-color:var(--color-red-500);color:var(--color-white)!important;border-width:1px!important}.dss-stepper--sm .dss-bubble--error:hover:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--error:hover:before{background-color:var(--color-red-50)!important;border-color:var(--color-white);color:var(--color-red-500)!important}.dss-stepper--sm .dss-bubble--error:active:before,.dss-stepper--sm .dss-bubble--active~.dss-bubble.dss-bubble--error:active:before{background-color:var(--color-white)!important;border-color:var(--color-white)!important;color:var(--color-red-300)!important}.dss-bubble--disabled:before{cursor:not-allowed;background-color:var(--disabled-background)!important;border-color:var(--disabled-border-color)!important;color:var(--disabled-font-color)!important}.dss-stepper--vertical .dss-bubble:not(:first-child){margin-top:var(--dss-spacing-lg)}.dss-bubble--error:not(:active):hover:before{background-color:var(--color-red-50)!important}.dss-bubble--error:active:before{color:var(--color-red-300)!important}.dss-stepper--sm .dss-bubble--error:before{content:"cancel";background-color:var(--color-red-500);border-color:var(--color-red-500);color:var(--color-white)!important;border-width:1px!important}.dss-stepper--sm .dss-bubble--error:hover:before{background-color:var(--color-red-50)!important;border-color:var(--color-white);color:var(--color-red-500)!important}.dss-stepper--sm .dss-bubble--error:active:before{background-color:var(--color-white)!important;border-color:var(--color-white)!important;color:var(--color-red-300)!important}.dss-bubble--disabled:before{cursor:not-allowed;background:var(--disabled-background)!important;border-color:var(--disabled-border-color)!important;color:var(--disabled-font-color)!important}.dss-bubble--completed:not(:first-child):after{content:"";position:absolute;height:var(--line-width);right:0;top:calc((var(--circle) - var(--line-width)) / 2);width:var(--active-bar-width);background:var(--active-background)}.dss-bubble--active:not(:first-child):after{content:"";position:absolute;height:var(--line-width);right:0;top:calc((var(--circle) - var(--line-width)) / 2);width:var(--active-bar-width);background:var(--active-background);animation:animate .3s}.dss-stepper--md .dss-bubble--completed:not(:first-child):after{top:calc((var(--circle-md) - var(--line-width)) / 2)}.dss-stepper--md .dss-bubble--active:not(:first-child):after{top:calc((var(--circle-md) - var(--line-width)) / 2)}.dss-stepper--sm .dss-bubble--completed:not(:first-child):after{top:calc((var(--circle-sm) - var(--line-width)) / 2)}.dss-stepper--sm .dss-bubble--active:not(:first-child):after{top:calc((var(--circle-sm) - var(--line-width)) / 2)}.dss-stepper--vertical{height:100%;flex-direction:column;gap:0;background:linear-gradient(var(--default-border-color) 0 0) no-repeat calc((var(--circle) - var(--line-width)) / 2) 50% / var(--line-width) 100%}.dss-stepper--vertical .dss-bubble{display:flex;width:-moz-fit-content;width:fit-content}.dss-stepper--vertical .dss-bubble--completed:not(:first-child):after{content:"";position:absolute;width:var(--line-width);bottom:0;left:calc((var(--circle) - var(--line-width)) / 2);top:auto;right:auto;height:var(--active-bar-width);background:var(--active-background)}.dss-stepper--vertical .dss-bubble--active:not(:first-child):after{content:"";position:absolute;width:var(--line-width);bottom:0;left:calc((var(--circle) - var(--line-width)) / 2);top:auto;right:auto;height:var(--active-bar-width);background:var(--active-background);animation:column-animate .5s}.dss-stepper--md.dss-stepper--vertical{background:linear-gradient(var(--default-border-color) 0 0) no-repeat calc((var(--circle-md) - var(--line-width)) / 2) 50% / var(--line-width) 100%}.dss-stepper--sm.dss-stepper--vertical{background:linear-gradient(var(--default-border-color) 0 0) no-repeat calc((var(--circle-sm) - var(--line-width)) / 2) 50% / var(--line-width) 100%}.dss-stepper--md.dss-stepper--vertical .dss-bubble--completed:not(:first-child):after{left:calc((var(--circle-md) - var(--line-width)) / 2)}.dss-stepper--sm.dss-stepper--vertical .dss-bubble--completed:not(:first-child):after{left:calc((var(--circle-sm) - var(--line-width)) / 2)}.dss-stepper--md.dss-stepper--vertical .dss-bubble--active:not(:first-child):after{left:calc((var(--circle-md) - var(--line-width)) / 2)}.dss-stepper--sm.dss-stepper--vertical .dss-bubble--active:not(:first-child):after{left:calc((var(--circle-sm) - var(--line-width)) / 2)}.dss-stepper:not(.dss-stepper--vertical) .dss-bubble-label{position:absolute;top:calc(100% + var(--dss-spacing-xxs));left:50%;transform:translate(-50%)}.dss-bubble-label{width:-moz-max-content;width:max-content;font-weight:var(--font-regular);font-size:14px;color:var(--color-neutral-700)}.dss-bubble-label--disabled{color:var(--color-neutral-500)}.dss-bubble--active .dss-bubble-label{color:var(--color-neutral-700);font-weight:var(--font-semibold)}.dss-stepper--vertical .dss-bubble-label{position:absolute;left:calc(100% + var(--dss-spacing-xs));top:50%;transform:translateY(-50%)}.dss-bubble-label.hide-label{display:none}@keyframes animate{0%{width:0}to{width:100%}}@keyframes column-animate{0%{height:0}to{height:100%}}';var __defProp$t=Object.defineProperty,__getOwnPropDesc$b=Object.getOwnPropertyDescriptor,__decorateClass$t=(d,a,l,_)=>{for(var h=__getOwnPropDesc$b(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$t(a,l,h),h};class Stepper extends r$1{constructor(){super(...arguments),this._steps=[],this._currentStep=1,this._column=!1,this._circular=!1,this._hideLabel=!1,this._size="md",this._activeBarWidth="0",this._isFirstUpdate=!0}static get styles(){return r$2(styles$7)}set steps(steps){const oldValue=this._steps;this._steps=steps,typeof steps=="string"&&(this._steps=eval(`(${steps})`)),this.requestUpdate("steps",oldValue)}get steps(){return this._steps}set currentStep(d){const a=this._currentStep;this._currentStep=d,this.requestUpdate("currentStep",a)}get currentStep(){return this._currentStep}set column(d){const a=this._column;this._column=d,this.requestUpdate("column",a)}get column(){return this._column}set circular(d){const a=this._circular;this._circular=d,this.requestUpdate("circular",a)}get circular(){return this._circular}set hideLabel(d){const a=this._hideLabel;this._hideLabel=d,this.requestUpdate("hideLabel",a)}get hideLabel(){return this._hideLabel}set size(d){const a=this._size;this._size=d,this.requestUpdate("size",a)}get size(){return this._size}async firstUpdated(){await this.updateComplete,this._setActiveBarWidth(),this._isFirstUpdate=!1,this.requestUpdate()}willUpdate(d){this._isFirstUpdate||(d.has("currentStep")||d.has("steps")||d.has("column"))&&(this._setActiveBarWidth(),this.requestUpdate())}_setActiveBarWidth(){var h;const d=this._steps.length,a=(h=this.shadowRoot)==null?void 0:h.querySelector(".dss-stepper"),l=a==null?void 0:a.getBoundingClientRect(),_=this._column?l==null?void 0:l.height:l==null?void 0:l.width;if(_){const b=Math.floor(_/(d-1));this._activeBarWidth=`${b}px`}}_onStepClick(d,a){if(!(d.state==="disabled")){const _={detail:{step:d,stepNumber:a},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onStepClick",_))}}render(){var _,h;const d=(_=this._steps)==null?void 0:_.length,a=Math.round(this._currentStep/d*100),l={"dss-stepper--vertical":this._column,"dss-stepper--sm":this._size==="sm","dss-stepper--md":this._size==="md"};return x`
      ${this._circular?x`
            <div class="dss-circular-stepper">
              <div class="dss-circular-stepper__item">
                <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="33" cy="33" r="28" pathLength="100"></circle>
                  <circle
                    cx="33"
                    cy="33"
                    r="28"
                    style="--percent: ${a}"
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
            <ol class="dss-stepper ${e$1(l)}">
              ${(h=this._steps)==null?void 0:h.map((b,g)=>{const f=g+1,$=w=>{w.key==="Enter"&&this._onStepClick(b,f)},k=b.state==="disabled",D={"dss-bubble--active":f===this._currentStep,"dss-bubble--completed":f<this._currentStep,"dss-bubble--checked":b.state==="checked"&&f!==this._currentStep,"dss-bubble--error":b.state==="error"&&f!==this._currentStep,"dss-bubble--info":b.state==="info"&&f!==this._currentStep,"dss-bubble--alert":b.state==="alert"&&f!==this._currentStep,"dss-bubble--disabled":b.state==="disabled","dss-bubble--icon":!!(b!=null&&b.icon)&&this._size!=="sm"},C={"dss-bubble-label--disabled":b.state==="disabled","hide-label":this._hideLabel};return x`
                  <li
                    class="dss-bubble ${e$1(D)}"
                    icon="${(b==null?void 0:b.icon)||""}"
                    tabindex="${k?-1:0}"
                    aria-label="Step ${b==null?void 0:b.state}"
                    @click=${()=>this._onStepClick(b,f)}
                    @keydown=${$}
                  >
                    <span class="dss-bubble-label ${e$1(C)}"
                      >${o(b.label)}</span
                    >
                  </li>
                `})}
            </ol>
          `}
    `}}__decorateClass$t([n({type:[]})],Stepper.prototype,"steps");__decorateClass$t([n({type:Number})],Stepper.prototype,"currentStep");__decorateClass$t([n(booleanType)],Stepper.prototype,"column");__decorateClass$t([n(booleanType)],Stepper.prototype,"circular");__decorateClass$t([n(booleanType)],Stepper.prototype,"hideLabel");__decorateClass$t([n({type:String})],Stepper.prototype,"size");const styles$6=":host{display:block;width:100%}.dss-table-header{padding:var(--dss-spacing-md) 0}.dss-table-header-title{display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-lg);margin-bottom:var(--dss-spacing-md)}.dss-table-header-title__text{flex:1;color:var(--color-neutral-900);font-weight:var(--font-bold);font-size:20px}.dss-table-header-title__info{font-size:14px;font-style:normal;font-weight:400;line-height:24px;color:var(--color-neutral-500)}.dss-table-header-title__action{display:flex;justify-content:flex-end;align-items:center;gap:var(--dss-spacing-xxs);font-size:14px;color:var(--color-primary-700);cursor:pointer;border-radius:var(--dss-radius-xs);font-weight:var(--font-semibold)}.dss-table-header-title__action:hover{color:var(--color-primary-600)}.dss-table-header-title__action:active{color:var(--color-primary-400)}.dss-table-header-title__action:focus-visible{outline:var(--dss-border-width-md) solid var(--color-blue-200)}.dss-table-header-filters{display:flex;justify-content:space-between;align-items:center}.dss-table-header-filters__filters{display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-md);width:70%;box-sizing:border-box}.dss-table-header-filters--inner .dss-table-header-filters__filters{width:80%}.filters-label{font-size:14px;font-weight:var(--font-bold);color:var(--color-neutral-600)}.filters-list{display:flex;flex-wrap:wrap;max-width:60%;gap:var(--dss-spacing-xs)}.filters-list-empty{font-size:14px;color:var(--color-neutral-600)}.filters-clean{padding-left:var(--dss-spacing-md);border-left:var(--dss-border-width-sm) solid var(--color-neutral-100)}.dss-table-header-filters__actions{display:flex;justify-content:flex-end;align-items:center;gap:var(--dss-spacing-md);width:30%;box-sizing:border-box}.dss-table-header-filters--inner .dss-table-header-filters__actions{width:20%}::slotted(div.dss-table-filters){width:100%;display:flex;justify-content:flex-start;align-items:center;gap:var(--dss-spacing-xs)}";var __defProp$s=Object.defineProperty,__getOwnPropDesc$a=Object.getOwnPropertyDescriptor,__decorateClass$s=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$a(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$s(a,l,h),h};const dssButton$3=i`dss-button${s(getCustomElementSuffix())}`,dssIcon$8=i`dss-icon${s(getCustomElementSuffix())}`,dssChip=i`dss-chip${s(getCustomElementSuffix())}`;class TableHeader extends r$1{constructor(){super(...arguments),this.tableInfo=void 0,this.showConfig=!1,this.configTableLabel="Configurar taula",this._filters=[],this._headerTitle="",this._innerFilters=!1,this._expandTable=!1,this._expandLabel="Ampliar",this._collapseLabel="Reduir",this._rowsOnCollapsed=5,this._filtersLabel="Selecció",this._cleanFiltersLabel="Netejar filtres",this._openFiltersLabel="Filtres",this._noFiltersLabel="No hi ha filtres seleccionats",this._hideHeaderTitleAndExpand=!1}static get styles(){return[r$2(iconStyles),r$2(buttonStyles),r$2(iconButtonStyles),r$2(chipStyles),r$2(checkboxStyles),r$2(radioStyles),r$2(styles$6),r$2(badgeStates)]}set filters(a){const l=this._filters;this._filters=a,this.requestUpdate("filters",l)}get filters(){return this._filters}set headerTitle(a){const l=this._headerTitle;this._headerTitle=a,this.requestUpdate("headerTitle",l)}get headerTitle(){return this._headerTitle}set hideHeaderTitleAndExpand(a){const l=this._hideHeaderTitleAndExpand;this._hideHeaderTitleAndExpand=a,this.requestUpdate("hideHeaderTitleAndExpand",l)}get hideHeaderTitleAndExpand(){return this._hideHeaderTitleAndExpand}set innerFilters(a){const l=this._innerFilters;this._innerFilters=a,this.requestUpdate("innerFilters",l)}get innerFilters(){return this._innerFilters}set expandTable(a){const l=this._expandTable;this._expandTable=a,this.requestUpdate("expandTable",l)}get expandTable(){return this._expandTable}set expandLabel(a){const l=this._expandLabel;this._expandLabel=a,this.requestUpdate("expandLabel",l)}get expandLabel(){return this._expandLabel}set collapseLabel(a){const l=this._collapseLabel;this._collapseLabel=a,this.requestUpdate("collapseLabel",l)}get collapseLabel(){return this._collapseLabel}set rowsOnCollapsed(a){const l=this._rowsOnCollapsed;this._rowsOnCollapsed=a,this.requestUpdate("rowsOnCollapsed",l)}get rowsOnCollapsed(){return this._rowsOnCollapsed}set filtersLabel(a){const l=this._filtersLabel;this._filtersLabel=a,this.requestUpdate("filtersLabel",l)}get filtersLabel(){return this._filtersLabel}set cleanFiltersLabel(a){const l=this._cleanFiltersLabel;this._cleanFiltersLabel=a,this.requestUpdate("cleanFiltersLabel",l)}get cleanFiltersLabel(){return this._cleanFiltersLabel}set noFiltersLabel(a){const l=this._noFiltersLabel;this._noFiltersLabel=a,this.requestUpdate("noFiltersLabel",l)}get noFiltersLabel(){return this._noFiltersLabel}_generateFilterChips(){let a;return this._filters&&(a=this._filters.map(l=>{const _=g=>{const f=g.detail.text;typeof l=="string"?this._filters=this._filters.filter($=>$!==f):this._filters=this._filters.filter($=>$.value.trim()!==(f==null?void 0:f.trim())),this._emitChangeFilters(),this.requestUpdate()};return u$1`
					<${dssChip} 
						label="${typeof l==="string"?l:l.value}" 
						size="sm" 
						selected 
						disableSelect
						hasDelete
						@onDelete="${_}">
					</${dssChip}>
        `})),a}_clearFilters(){this._filters=[],this._emitChangeFilters(),this.requestUpdate()}_emitExpandAction(){this._expandTable=!this._expandTable;const a={detail:this._expandTable,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onExpand",a)),this.requestUpdate()}_emitOpenFilters(){const a={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onOpenFilters",a)),this.requestUpdate()}_emitConfigTable(){const a={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onConfigTable",a)),this.requestUpdate()}_emitChangeFilters(){const a={detail:this._filters,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onChangeFilters",a)),this.requestUpdate()}render(){return u$1`
      <div class="dss-table-header">
        ${this._hideHeaderTitleAndExpand?null:u$1`
              <div class="dss-table-header-title">
                <div class="dss-table-header-title__text">
                  ${this._headerTitle}
                </div>
								${this.tableInfo?u$1`
									<div class="dss-table-header-title__info">
										${this.tableInfo}
									</div>
								`:E}
                <div
                  class="dss-table-header-title__action"
                  role="button"
                  tabindex="0"
                  @click="${this._emitExpandAction}"
                >
                  ${this._expandTable?u$1`
												<${dssIcon$8} size="sm" icon="fullscreen_exit"></${dssIcon$8}>
                        <span>${this._collapseLabel}</span>
                      `:u$1`
												<${dssIcon$8} size="sm" icon="fullscreen"></${dssIcon$8}>
                        <span>${this._expandLabel}</span>
                      `}
                </div>
              </div>
            `}
        ${this._innerFilters?u$1`
              <div
                class="dss-table-header-filters dss-table-header-filters--inner"
              >
                <div class="dss-table-header-filters__filters">
                  <slot name="filters"></slot>
                </div>
                <div class="dss-table-header-filters__actions">
									${this.showConfig?u$1`
										<${dssButton$3}
											variant="subtle"
											size="md"
											icon="settings"
											label="${this.configTableLabel}"
											@onClick=${this._emitConfigTable}
										></${dssButton$3}>
									`:E}
								</div>
              </div>
            `:u$1`
              <div
                class="dss-table-header-filters dss-table-header-filters--outer"
              >
                <div class="dss-table-header-filters__filters">
                  <div class="filters-label">${this._filtersLabel}:</div>
                  <div class="filters-list">
                    ${this._filters.length>0?u$1` ${this._generateFilterChips()} `:u$1`
                          <span class="filters-list-empty">
                            ${this._noFiltersLabel}
                          </span>
                        `}
                  </div>
                  <div class="filters-clean">
                    ${this._filters.length>0?u$1`
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

									${this.showConfig?u$1`
										<${dssButton$3}
											variant="subtle"
											size="md"
											icon="settings"
											label="${this.configTableLabel}"
											@onClick=${this._emitConfigTable}
										></${dssButton$3}>
									`:E}

									<${dssButton$3}
										variant="secondary"
										size="md"
										icon="filter_list"
										label="${this._openFiltersLabel}"
										@onClick=${this._emitOpenFilters}
									></${dssButton$3}>
                </div>
              </div>
            `}
      </div>
    `}}__decorateClass$s([n({type:String})],TableHeader.prototype,"tableInfo",2);__decorateClass$s([n(booleanType)],TableHeader.prototype,"showConfig",2);__decorateClass$s([n({type:String})],TableHeader.prototype,"configTableLabel",2);__decorateClass$s([n({type:Array})],TableHeader.prototype,"filters",1);__decorateClass$s([n({type:String})],TableHeader.prototype,"headerTitle",1);__decorateClass$s([n(booleanType)],TableHeader.prototype,"hideHeaderTitleAndExpand",1);__decorateClass$s([n(booleanType)],TableHeader.prototype,"innerFilters",1);__decorateClass$s([n(booleanType)],TableHeader.prototype,"expandTable",1);__decorateClass$s([n({type:String})],TableHeader.prototype,"expandLabel",1);__decorateClass$s([n({type:String})],TableHeader.prototype,"collapseLabel",1);__decorateClass$s([n({type:Number})],TableHeader.prototype,"rowsOnCollapsed",1);__decorateClass$s([n({type:String})],TableHeader.prototype,"filtersLabel",1);__decorateClass$s([n({type:String})],TableHeader.prototype,"cleanFiltersLabel",1);__decorateClass$s([n({type:String})],TableHeader.prototype,"noFiltersLabel",1);const styles$5=":host{width:100%;display:flex;justify-content:flex-end;height:-moz-fit-content;height:fit-content;font-family:var(--font-family);font-style:normal;border-top:2px solid var(--color-neutral-700)}.pagination__container{display:flex;align-items:center;padding:.5rem .75rem;gap:1rem}.pagination__results{font-weight:600;font-size:.875rem;line-height:1.5rem;color:#0073e6}.pagination__divider{height:1rem;border-left:1px solid rgb(216,216,216)}.pagination__text{font-weight:400;font-size:12px;line-height:1rem;color:#656565}.pagination__button{color:#0073e6;font-size:1.5rem;padding:0;align-items:center;background-color:transparent;border:none;border-radius:100%;cursor:pointer;display:flex;height:-moz-fit-content;height:fit-content;justify-content:center;transition:all .3s ease-in;width:-moz-fit-content;width:fit-content;font-family:var(--font-icons);width:2rem;height:2rem}.pagination__button:hover:enabled{background-color:#bfddfa}.pagination__button:focus-visible:enabled{outline:.25rem solid #8fc2f5;transition:none}.pagination__button:active:enabled{background-color:#eff7ff;transition:none}.pagination__button:disabled{transition:none;opacity:.4;cursor:not-allowed}.pagination__row-page{display:flex;align-items:center;gap:1rem}.pagination__buttons{display:flex;align-items:center}.pagination__select{background:#eff7ff;border-radius:4px;position:relative}.pagination__select select{border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;padding:7px 32px 7px 12px;color:#00356a;font-weight:400;font-size:12px;line-height:1rem;position:inherit;z-index:1;font-family:var(--font-family)}.pagination__select select:active,.pagination__select select:focus-visible{outline:none}.pagination__arrow-down{position:absolute;height:100%;display:flex;align-items:center;top:0;right:12px;color:#00356a}.pagination-select-options:disabled{background-color:var(--color-neutral-50);color:var(--color-neutral-500);cursor:not-allowed}";var __defProp$r=Object.defineProperty,__getOwnPropDesc$9=Object.getOwnPropertyDescriptor,__decorateClass$r=(d,a,l,_)=>{for(var h=__getOwnPropDesc$9(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$r(a,l,h),h};class TablePagination extends r$1{constructor(){super(...arguments),this._length=0,this._pageSizeOptions=[],this._pageSize=10,this._totalPages=0,this._currentIndex=1,this._startIndex=1,this._endIndex=this._pageSize,this._rowsPerPageText="Files per pàgina",this._resultsText="Resultats",this._pageSizeOptionsDisabled=!1,this._hidePaginationResults=!1}static get styles(){return[r$2(iconStyles),r$2(styles$5)]}set length(a){const l=this._length;this._length=a,this.requestUpdate("length",l)}get length(){return this._length}set pageSize(a){const l=this._pageSize;this._pageSize=a,this.requestUpdate("pageSize",l)}get pageSize(){return this._pageSize}set pageSizeOptions(a){const l=this._pageSizeOptions;this._pageSizeOptions=a,this.requestUpdate("pageSizeOptions",l)}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptionsDisabled(a){const l=this._pageSizeOptionsDisabled;this._pageSizeOptionsDisabled=a,this.requestUpdate("pageSizeOptionsDisabled",l)}get pageSizeOptionsDisabled(){return this._pageSizeOptionsDisabled}set currentIndex(a){const l=this._currentIndex;this._currentIndex=a,this.requestUpdate("currentIndex",l)}get currentIndex(){return this._currentIndex}set rowsPerPageText(a){const l=this._rowsPerPageText;this._rowsPerPageText=a,this.requestUpdate("rowsPerPageText",l)}get rowsPerPageText(){return this._rowsPerPageText}set resultsText(a){const l=this._resultsText;this._resultsText=a,this.requestUpdate("resultsText",l)}get resultsText(){return this._resultsText}set hidePaginationResults(a){const l=this._hidePaginationResults;this._hidePaginationResults=a,this.requestUpdate("hidePaginationResults",l)}get hidePaginationResults(){return this._hidePaginationResults}_next(){this._currentIndex++,this._startIndex+=this._pageSize,this._endIndex+=this._pageSize,this._currentIndex===this._totalPages&&(this._endIndex=this._length),this._emitCurrentPage(),this.requestUpdate()}_prev(){const a=Math.abs(this._startIndex-this._endIndex)+1;this._startIndex-=this._pageSize,this._endIndex-=this._currentIndex===this._totalPages?a:this._pageSize,this._currentIndex--,this._emitCurrentPage(),this.requestUpdate()}_handleChange(){var l;const a=(l=this.shadowRoot)==null?void 0:l.querySelector("#pagination-select");this._pageSize=Number(a.value),this._reload(this._startIndex),this._emitCurrentPage(),this.requestUpdate()}_emitCurrentPage(){this.dispatchEvent(new CustomEvent("onChangePage",{detail:{currentIndex:this._currentIndex,startIndex:this._startIndex,endIndex:this._endIndex,pageSize:this._pageSize},bubbles:!0,composed:!0}))}_reload(a){this._currentIndex=Math.ceil(a/this._pageSize),this._reset(!0)}_reset(a){this._totalPages=Math.ceil(this._length/this._pageSize),a||(this._currentIndex<1?this._currentIndex=1:this._currentIndex>this._totalPages&&(this._currentIndex=this._totalPages)),this._startIndex=(this._currentIndex-1)*this._pageSize+1,this._endIndex=this._startIndex-1+this._pageSize,this._endIndex>this._length&&(this._endIndex=this._length)}_getDefaultPageSize(){var l;const a=this._pageSizeOptions.includes(this._pageSize);return(l=this._pageSizeOptions)!=null&&l.length?a?this._pageSize:this._pageSizeOptions[0]:this._pageSize}_printStartIndex(){return this._startIndex<=0||this._length<=0?"0":this._startIndex.toString()}async firstUpdated(){try{await this.updateComplete,this._pageSize=this._getDefaultPageSize(),this._reset(),this._emitCurrentPage(),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}willUpdate(a){const l=a.has("length"),_=a.has("pageSize"),h=a.has("pageSizeOptions"),b=a.has("currentIndex");(l||_||h||b)&&(this._pageSize=this._getDefaultPageSize(),this._reset(),b&&this._emitCurrentPage(),this.requestUpdate())}render(){var a;return x`
      <div class="pagination__container">
        ${this._hidePaginationResults?null:x`
              <span class="pagination__results"
                >${this._length} ${this._resultsText}</span
              >
              <div class="pagination__divider"></div>
            `}
        ${(a=this._pageSizeOptions)!=null&&a.length?x`
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
                    ${this._pageSizeOptions.map(l=>x`
                          <option
                            value="${l}"
                            .selected=${this._pageSize===l}
                          >
                            ${l}
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
    `}}__decorateClass$r([n({type:Number})],TablePagination.prototype,"length");__decorateClass$r([n({type:Number})],TablePagination.prototype,"pageSize");__decorateClass$r([n({type:Array})],TablePagination.prototype,"pageSizeOptions");__decorateClass$r([n(booleanType)],TablePagination.prototype,"pageSizeOptionsDisabled");__decorateClass$r([n({type:String})],TablePagination.prototype,"currentIndex");__decorateClass$r([n({type:String})],TablePagination.prototype,"rowsPerPageText");__decorateClass$r([n({type:String})],TablePagination.prototype,"resultsText");__decorateClass$r([n(booleanType)],TablePagination.prototype,"hidePaginationResults");const tabsListStyles=':host{width:100%;height:-moz-fit-content;height:fit-content}:not(:defined){display:none}.dss-tabs{width:100%;height:-moz-fit-content;height:fit-content}.dss-tabs-header{display:flex;align-items:center;position:relative;width:100%;overflow:hidden}.dss-tabs-scroll-button{all:unset;cursor:pointer;display:none;position:absolute;top:0;bottom:0;padding:0 var(--dss-spacing-sm);z-index:900}.dss-tabs-scroll-button:before{content:"";display:block;position:absolute;top:0;bottom:2px;width:220px;z-index:-1;pointer-events:none}.dss-tabs-scroll-button--prev{left:0;padding-right:var(--dss-spacing-lg)}.dss-tabs-scroll-button.dss-tabs-scroll-button--prev:before{left:0;background:linear-gradient(to right,white,transparent)}.dss-tabs-scroll-button--next{right:0;padding-left:var(--dss-spacing-lg)}.dss-tabs-scroll-button.dss-tabs-scroll-button--next:before{right:0;background:linear-gradient(to left,white,transparent)}.dss-tabs-menu{box-sizing:border-box;min-height:48px;min-width:100%;display:flex;overflow-x:auto;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none}.dss-tabs-menu:before{position:absolute;content:"";display:block;width:100%;height:var(--dss-border-width-sm);background-color:var(--color-neutral-200);left:0;bottom:0;z-index:50}.dss-tabs-menu::-webkit-scrollbar{display:none}.dss-tabs-item{position:relative;white-space:nowrap;box-sizing:border-box;min-height:48px;display:flex;align-items:center;font-family:var(--font-family);font-size:14px;font-weight:600;line-height:24px;background-color:transparent;border:0;cursor:pointer;padding:var(--dss-spacing-sm);transition:color .3s ease-in-out}.dss-tabs-item:focus-visible{outline:var(--color-primary-200) solid var(--dss-border-width-lg);border-radius:var(--dss-radius-xs)}.dss-tabs-item:not(.dss-tabs-item--selected):not(:disabled):hover{color:var(--color-primary-600)}.dss-tabs-item:active{color:var(--color-primary-700)}.dss-tabs-item:disabled{color:var(--color-neutral-500);cursor:not-allowed}.dss-tabs-item:before{position:absolute;content:"";display:block;width:100%;height:var(--dss-border-width-md);background-color:transparent;left:0;bottom:0;transition:background-color .3s ease-in-out;border-radius:var(--dss-border-width-md);z-index:100}.dss-tabs-item.dss-tabs-item--selected:before{background-color:var(--color-primary-500)}.dss-tabs-button{margin:0}::slotted(dss-icon-badge),::slotted(dss-notification-badge),::slotted(dss-badge){display:inline;margin-right:var(--dss-spacing-xs)!important}',dssIcon$7=i`dss-icon${s(getCustomElementSuffix())}`,dssButton$2=i`dss-button${s(getCustomElementSuffix())}`,tabsListTemplate=d=>u$1`
  <div class="dss-tabs">
    <div class="dss-tabs-header">
      <button
        class="dss-tabs-scroll-button dss-tabs-scroll-button--prev"
        @click=${()=>d._scrollMenu(-1)}
      >
        <${dssIcon$7} icon="chevron_left" size="md"></${dssIcon$7}>
      </button>

      <div
        role="tablist"
        aria-label="${d._label}"
        class="dss-tabs-menu"
      >
        ${d._tabs.map(a=>u$1`
              <button
                id="${a.id}"
                class="dss-tabs-item ${o$1(a.selected?"dss-tabs-item--selected":"")}"
                type="button"
                part="button"
                role="tab"
                aria-selected="${o$1(a.selected?a.selected:"false")}"
                tabindex="${o$1(a.selected?0:-1)}"
                @click=${()=>d.changeTab(a.panel)}
                ?disabled=${a.disabled}
              >
                <slot name="badge-${a.id}" class="tab-badge"></slot>
                <span class="tab-text focus"> ${a.text} </span>
              </button>
            `)}
        ${d._addTabEnabled?u$1`
              <div class="dss-tabs-item">
                <${dssButton$2}
                  size="md"
                  variant="secondary"
                  icon="add"
                  label="${d._addTabText}"
                  @onClick="${d.addNewTab}"
                ></${dssButton$2}>
              </div>
            `:null}
      </div>

      <button
        class="dss-tabs-scroll-button dss-tabs-scroll-button--next"
        @click=${()=>d._scrollMenu(1)}
      >
        <${dssIcon$7} icon="chevron_right" size="md"></${dssIcon$7}>
      </button>
    </div>

    <div class="dss-tabs-body">
      <slot></slot>
    </div>
  </div>
`;var __defProp$q=Object.defineProperty,__getOwnPropDesc$8=Object.getOwnPropertyDescriptor,__decorateClass$q=(d,a,l,_)=>{for(var h=__getOwnPropDesc$8(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$q(a,l,h),h};class TabsList extends r$1{constructor(){super(),this._dssTabsId="",this._label="Tabs component name",this._tabs=[],this._tabsElements=window.document.querySelectorAll("[role='tab']"),this._firstTab=document.createElement("div"),this._lastTab=document.createElement("div"),this._addTabEnabled=!1,this._addTabText="Afegir Tab",this._handleUpdateArrowsBound=this._updateArrows.bind(this)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(tabsListStyles)]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleUpdateArrowsBound)}disconnectedCallback(){var a;super.disconnectedCallback(),(a=this._menu)==null||a.removeEventListener("scroll",this._handleUpdateArrowsBound),window.removeEventListener("resize",this._handleUpdateArrowsBound)}set dssTabsId(a){const l=this._dssTabsId;this._dssTabsId=a,this.requestUpdate("dssTabsId",l)}get dssTabsId(){return this._dssTabsId}set label(a){const l=this._label;this._label=a,this.requestUpdate("selectedTab",l)}get label(){return this._label}set tabs(a){const l=this._tabs;this._tabs=a,this.requestUpdate("tabs",l)}get tabs(){return this._tabs}set addTabText(a){const l=this._addTabText;this._addTabText=a,this.requestUpdate("addTabText",l)}get addTabText(){return this._addTabText}set addTabEnabled(a){const l=this._addTabEnabled;this._addTabEnabled=a,this.requestUpdate("addTabEnabled",l)}get addTabEnabled(){return this._addTabEnabled}get _header(){var a;return((a=this.shadowRoot)==null?void 0:a.querySelector(".dss-tabs-header"))||void 0}get _menu(){var a;return((a=this.shadowRoot)==null?void 0:a.querySelector(".dss-tabs-menu"))||void 0}get _prevScroll(){var a;return((a=this.shadowRoot)==null?void 0:a.querySelector(".dss-tabs-scroll-button--prev"))||void 0}get _nextScroll(){var a;return((a=this.shadowRoot)==null?void 0:a.querySelector(".dss-tabs-scroll-button--next"))||void 0}updated(a){a.has("tabs")&&this.changeTabWatch()}async changeTabWatch(){this._tabsElements=this.renderRoot.querySelectorAll("[role='tab']"),this._tabsElements.forEach(a=>{a.addEventListener("keydown",l=>{this._handleKeydown(l)}),a.addEventListener("click",l=>{this.setSelectedTab(l.currentTarget)})}),this.setFirstAndLastTabs()}setFirstAndLastTabs(){let a=!1;this._tabsElements.forEach(l=>{a||(this._firstTab=l,a=!0),this._lastTab=l})}changeTab(a){const l={detail:{selectedPanel:a},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onChangeDssTab",l)),this.updatePanels(a)}updatePanels(a){window.document.querySelectorAll("dss-tabs-panel").forEach(_=>{const h=_.getAttribute("panelId");_.getAttribute("linkedTo")===this._dssTabsId&&(h===a?_.setAttribute("selected","true"):_.removeAttribute("selected"))})}_handleKeydown(a){const l=a,_=a.currentTarget;let h=!1;switch(l.key){case"ArrowLeft":this.moveFocusToPreviousTab(_),h=!0;break;case"ArrowRight":this.moveFocusToNextTab(_),h=!0;break;case"Home":this.moveFocusToTab(this._firstTab),h=!0;break;case"End":this.moveFocusToTab(this._lastTab),h=!0;break}h&&(a.stopPropagation(),a.preventDefault())}moveFocusToTab(a){a&&a.focus()}moveFocusToPreviousTab(a){let l=0;a===this._firstTab?this.moveFocusToTab(this._lastTab):(this._tabsElements.forEach((_,h)=>{_===a&&(l=h)}),this.moveFocusToTab(this._tabsElements[l-1]))}moveFocusToNextTab(a){let l=0;a===this._lastTab?this.moveFocusToTab(this._firstTab):(this._tabsElements.forEach((_,h)=>{_===a&&(l=h)}),this.moveFocusToTab(this._tabsElements[l+1]))}setSelectedTab(a){for(let l=0;l<this._tabsElements.length;l+=1){const _=this._tabsElements[l];a===_?(_.setAttribute("aria-selected","true"),_.removeAttribute("tabindex"),_.classList.add("dss-tabs-item--selected"),_.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})):(_.setAttribute("aria-selected","false"),_.setAttribute("tabindex","-1"),_.classList.remove("dss-tabs-item--selected"))}}addNewTab(){const a={detail:{},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onAddDssTab",a))}_updateArrows(){if(this._menu&&this._prevScroll&&this._nextScroll){const a=Math.ceil(this._menu.scrollLeft),l=Math.ceil(this._menu.scrollWidth-this._menu.clientWidth);this._prevScroll.style.display=a>0?"block":"none",this._nextScroll.style.display=a<l?"block":"none"}}_scrollMenu(a){this._menu&&this._menu.scrollBy({left:a*160,behavior:"smooth"})}async firstUpdated(){await this.updateComplete,this._menu&&this._menu.addEventListener("scroll",this._handleUpdateArrowsBound),this._updateArrows()}render(){return tabsListTemplate(this)}}__decorateClass$q([n({type:String})],TabsList.prototype,"dssTabsId");__decorateClass$q([n({type:String})],TabsList.prototype,"label");__decorateClass$q([n({type:Array})],TabsList.prototype,"tabs");__decorateClass$q([n({type:String})],TabsList.prototype,"addTabText");__decorateClass$q([n(booleanType)],TabsList.prototype,"addTabEnabled");const tabsPanelStyles=":host{width:100%;height:-moz-fit-content;height:fit-content}:not(:defined){display:none}[role=tabpanel]{width:100%;display:none}[role=tabpanel].has-scroll{overflow:auto}[role=tabpanel].selected{display:block}",tabsPanelTemplate=d=>{const a={selected:d._selected,"is-hidden":!d._selected,"has-scroll":d._hasScroll};return x`
    <div
      id="${d._panelId}"
      role="tabpanel"
      aria-label="${d._label}"
      linkedTo="${d._linkedTo}"
      class="${e$1(a)}"
    >
      <slot></slot>
    </div>
  `};var __defProp$p=Object.defineProperty,__getOwnPropDesc$7=Object.getOwnPropertyDescriptor,__decorateClass$p=(d,a,l,_)=>{for(var h=__getOwnPropDesc$7(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$p(a,l,h),h};class TabsPanel extends r$1{constructor(){super(...arguments),this._panelId="",this._label="",this._linkedTo="",this._selected=!1,this._hasScroll=!1}static get styles(){return r$2(tabsPanelStyles)}set panelId(a){const l=this._panelId;this._panelId=a,this.requestUpdate("panelId",l)}get panelId(){return this._panelId}set label(a){const l=this._label;this._label=a,this.requestUpdate("label",l)}get label(){return this._label}set linkedTo(a){const l=this._linkedTo;this._linkedTo=a,this.requestUpdate("linkedTo",l)}get linkedTo(){return this._linkedTo}set selected(a){const l=this._selected;this._selected=a,this.requestUpdate("selected",l)}get selected(){return this._selected}set hasScroll(a){const l=this._hasScroll;this._hasScroll=a,this.requestUpdate("hasScroll",l)}get hasScroll(){return this._hasScroll}render(){return tabsPanelTemplate(this)}}__decorateClass$p([n({type:String})],TabsPanel.prototype,"panelId");__decorateClass$p([n({type:String})],TabsPanel.prototype,"label");__decorateClass$p([n({type:String})],TabsPanel.prototype,"linkedTo");__decorateClass$p([n(booleanType)],TabsPanel.prototype,"selected");__decorateClass$p([n(booleanType)],TabsPanel.prototype,"hasScroll");const styles$4='::slotted(label){font-style:normal;font-weight:400;font-size:14px;line-height:24px;cursor:text;position:absolute;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;width:calc(100% - 24px)}::slotted(textarea){resize:vertical;outline:none;border:0;font-size:14px;line-height:24px;font-style:normal;color:#1d1d1d;width:100%;text-overflow:ellipsis;font-family:var(--font-family)}::slotted(textarea)::-moz-placeholder{color:#9f9f9f}::slotted(textarea)::placeholder{color:#9f9f9f}.dss-textarea{display:flex;flex-direction:column;color:#656565}.dss-textarea--disabled .dss-textarea__group:after{background:#f5f5f5}.dss-textarea--gap{gap:4px}.dss-textarea__content{display:flex;align-items:flex-start;flex:1}.dss-textarea--disabled .dss-textarea__group,.dss-textarea--disabled ::slotted(textarea){background-color:#f5f5f5;cursor:not-allowed}.dss-textarea--disabled ::slotted(label),.dss-textarea--disabled ::slotted(textarea){cursor:not-allowed;color:var(--color-neutral-500)}.dss-textarea__group{position:relative;background:#fff;border:var(--dss-border-width-sm) solid var(--color-neutral-100);border-radius:8px;padding:12px;display:flex;gap:8px;min-height:24px}.dss-textarea__group:after{pointer-events:none;content:"height";font-family:var(--font-icons);font-size:0px;position:absolute;height:0px;width:0px;text-align:center;bottom:4px;right:3px;z-index:2;border-radius:8px;background:transparent}.dss-textarea__group--required ::slotted(label):before{content:"*"}.dss-textarea__group:focus-visible,.dss-textarea__group--focused-visible,.dss-textarea--invalid .dss-textarea__group:focus-visible{border-color:var(--color-blue-200);outline:var(--dss-border-width-lg) solid var(--color-blue-200);box-shadow:none;background-color:#fff}.dss-textarea__group--readOnly{border-top:0;border-left:0;border-right:0;border-radius:0}.dss-textarea--invalid .dss-textarea__group:focus-visible ::slotted(textarea){background-color:#fff}.dss-textarea__group--focused{padding:4px 12px}.dss-textarea__group--focused .dss-textarea__content ::slotted(label){font-size:12px;line-height:16px;transition:.3s;top:4px}.dss-textarea__group--focused.dss-textarea__group--has-label .dss-textarea__content ::slotted(textarea){margin-top:16px!important}.dss-textarea--invalid ::slotted(textarea){background-color:#fff6f6;color:#1d1d1d}.dss-textarea--invalid ::slotted(textarea)::-moz-placeholder{color:#d36262}.dss-textarea--invalid ::slotted(textarea)::placeholder{color:#d36262}.dss-textarea--invalid .dss-textarea__group{box-shadow:inset 0 0 0 1px #b60000}.dss-textarea--invalid .dss-textarea__group,.dss-textarea--invalid .dss-textarea__group:after{background-color:#fff6f6;color:#b60000}.dss-textarea__help{font-style:normal;font-weight:400;font-size:12px;line-height:16px;display:flex;padding:0 12px;gap:8px;color:var(--color-neutral-700)}.dss-textarea__help .dss-textarea__description{flex:1}.dss-textarea--invalid .dss-textarea__help,.dss-textarea--invalid .dss-textarea__help:after{color:#b60000}.dss-textarea--auto-height .dss-textarea__content ::slotted(textarea){resize:none;overflow:hidden}',template$5=d=>{var _,h,b,g,f,$,k;const a={"dss-textarea--invalid":d._showError,"dss-textarea--auto-height":d.autoHeight,"dss-textarea--disabled":(_=d._textarea)==null?void 0:_.disabled,"dss-textarea--gap":d._maxLength||!!d._description},l={"dss-textarea__group--focused":((h=d._textarea)==null?void 0:h.value)||d._isTextareaFocused||((b=d._textarea)==null?void 0:b.placeholder),"dss-textarea__group--focused-visible":d._isGroupFocusedVisible,"dss-textarea__group--has-label":!!d._label,"dss-textarea__group--required":(g=d._textarea)==null?void 0:g.required,"dss-textarea__group--readOnly":(f=d._textarea)==null?void 0:f.readOnly};return u$1`
    <div class="dss-textarea ${e$1(a)}">
      <div class="dss-textarea__group ${e$1(l)}">
        <div class="dss-textarea__content">
          <slot name="label"></slot>
          <slot
            name="textarea"
            @focusin=${d._handleFocus}
            @focusout=${d._handleFocusOut}
          ></slot>
        </div>
      </div>
      <div class="dss-textarea__help">
        <div class="dss-textarea__description">
          <slot
            name="description"
            @slotchange=${d._handleSlotChange}
          ></slot>
        </div>
        ${d._maxLength?u$1`<span
              >${(k=($=d._textarea)==null?void 0:$.value)==null?void 0:k.length}/${d._maxLength}</span
            >`:null}
      </div>
    </div>
  `};var __defProp$o=Object.defineProperty,__getOwnPropDesc$6=Object.getOwnPropertyDescriptor,__decorateClass$o=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$6(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$o(a,l,h),h};class Textarea extends r$1{constructor(){super(...arguments),this.autoHeight=!1,this._maxLength=0,this._isTextareaFocused=!1,this._isGroupFocusedVisible=!1,this._showError=!1,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)l.type==="attributes"&&this._checkAttributes();this.requestUpdate()},this.observer=new MutationObserver(this.callback)}static get styles(){return r$2(styles$4)}set value(a){a!==void 0&&this.requestUpdate()}get value(){return this._textarea?this._textarea.value:""}set showError(a){const l=this._showError;this._showError=a,this.requestUpdate("showError",l)}get showError(){return this._showError}get _label(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="label"]'))||void 0;return a==null?void 0:a.assignedElements()[0]}get _textarea(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="textarea"]'))||void 0;return a==null?void 0:a.assignedElements()[0]}get _description(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="description"]'))||void 0;return a==null?void 0:a.assignedElements()[0]}disconnectedCallback(){this.observer.disconnect()}_checkAttributes(){if(this._textarea){const{maxLength:a}=this._textarea;this._maxLength=a>0?a:0}}async firstUpdated(){try{await this.updateComplete,this._checkAttributes(),this._addEventListeners(),this.autoHeight&&this._updateHeight(),this.requestUpdate(),this.observer.observe(this._textarea,this.observerConfig)}catch(a){console.error("ERROR OCURRED",a)}}_addEventListeners(){var a;this._textarea.addEventListener("input",this._handleInput.bind(this)),this._textarea.addEventListener("focus",this._handleFocus.bind(this)),this._textarea.addEventListener("focusout",this._handleFocusOut.bind(this)),this._textarea.addEventListener("blur",this._handleBlur.bind(this)),(a=this._label)==null||a.addEventListener("click",this._handelLabelClick.bind(this)),this._textarea.addEventListener("keyup",this._handleKeyup.bind(this))}_updateHeight(){this._textarea.style.height="auto",this._textarea.style.height=`${this._textarea.scrollHeight}px`}_handleInput(){this.autoHeight&&this._updateHeight(),this.requestUpdate()}_handleKeyup(a){(a.keyCode?a.keyCode:a.which)===9&&this._handleFocus()}_handleFocus(){this._isGroupFocusedVisible=!0,this._isTextareaFocused=!0,this.requestUpdate()}_handleFocusOut(){this._handleBlur(),this._isGroupFocusedVisible=!1,this._isTextareaFocused=!1,this.requestUpdate()}_handleBlur(){this._isTextareaFocused=!1,this.requestUpdate()}_handelLabelClick(){this._textarea.focus(),this.requestUpdate()}_handleSlotChange(){this.requestUpdate()}render(){return template$5(this)}}__decorateClass$o([n({type:String})],Textarea.prototype,"value",1);__decorateClass$o([n(booleanType)],Textarea.prototype,"showError",1);__decorateClass$o([n(booleanType)],Textarea.prototype,"autoHeight",2);const styles$3=":host{display:block;height:-moz-fit-content;height:fit-content;min-width:240px;width:100%}.dss-tile{box-sizing:border-box;height:104px;width:100%;overflow:hidden;background-color:var(--color-white);border-radius:var(--dss-radius-md);padding:var(--dss-spacing-md);display:flex;align-items:center;justify-content:flex-start;gap:var(--dss-spacing-md);border:var(--dss-border-width-sm) solid var(--color-neutral-100);transition:background-color .3s ease-in}.dss-tile-logo{display:flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:48px;width:48px;height:48px;margin:0;padding:0;overflow:hidden;border-radius:var(--dss-radius-xs)}.dss-tile-logo__image{width:100%;max-width:100%;margin:0;padding:0}.dss-tile-content{width:100%;display:flex;align-items:center;justify-content:space-between;gap:var(--dss-spacing-md);flex:1 1 100%;min-width:0}.dss-tile-content .dss-tile-content__text{overflow:hidden}.dss-tile-title{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;max-height:24px;line-height:24px;font-size:14px;font-weight:var(--font-semibold);color:var(--color-neutral-900);margin:0;overflow:hidden}.dss-tile--disabled .dss-tile-title{color:var(--color-neutral-600)}.dss-tile-description{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;max-height:48px;line-height:24px;font-size:14px;color:var(--color-neutral-600);margin:0}.dss-tile--button:not(.dss-tile--disabled){cursor:pointer;border-color:var(--color-primary-600)}.dss-tile--selected:not(.dss-tile--disabled),.dss-tile--button:not(.dss-tile--disabled):hover,.dss-tile--selector:not(.dss-tile--disabled):hover{box-shadow:inset 0 0 0 var(--dss-border-width-md) var(--color-primary-500);border-color:transparent}.dss-tile--button:not(.dss-tile--disabled):active,.dss-tile--selector:not(.dss-tile--disabled):active{background-color:var(--color-primary-50)}.dss-tile--button:not(.dss-tile--disabled):focus-visible,.dss-tile--selector:not(.dss-tile--disabled):focus-visible{border-color:transparent;outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-tile--disabled{cursor:not-allowed;background-color:var(--color-neutral-50)}.dss-tile--disabled .dss-tile__title{color:var(--color-neutral-500)}::slotted(.dss-tile-action-group){display:flex;justify-content:center;align-items:center;gap:var(--dss-spacing-md)}.dss-tile--height-auto{height:auto}.dss-tile--widget{margin-top:var(--dss-spacing-xs)}",dssDecorativeIcon$1=i`dss-decorative-icon${s(getCustomElementSuffix())}`,template$4=d=>{const a={"dss-tile--button":d.type==="button","dss-tile--selector":d.type==="selector","dss-tile--selected":d.type==="selector"&&d.selected,"dss-tile--action":d.type==="action","dss-tile--disabled":d.disabled,"dss-tile--height-auto":d.heightAuto,"dss-tile--widget":d.widget},l=()=>u$1`
      <${dssDecorativeIcon$1} 
        icon="${d.icon}" 
        state="default" 
        size="xl"
        ?disabled=${d.disabled}
      ></${dssDecorativeIcon$1}>
    `,_=()=>u$1`
      <div class="dss-tile-logo">
        <img
          class="dss-tile-logo__image"
          src="${d.logoURL}"
          alt="Tile Logo"
        />
      </div>
    `,h=()=>u$1`
      <div class="dss-tile-content">
        <div class="dss-tile-content__text">
          <h4 class="dss-tile-title">${d.tileTitle}</h4>
          <p class="dss-tile-description">${d.description}</p>
        </div>
        ${d.type==="action"?u$1` <slot name="action"></slot> `:null}
      </div>
    `;let b=u$1``;return d.type==="button"||d.type==="selector"?b=u$1`
      <div
        class="dss-tile ${e$1(a)}"
        tabindex="${d.disabled?-1:0}"
        role="button"
        @click=${d._onClick}
      >
        ${d.icon&&!d.hasLogo?l():null}
        ${d.hasLogo?_():null}
        ${h()}
      </div>
    `:b=u$1`
      <div class="dss-tile ${e$1(a)}">
        ${d.icon&&!d.hasLogo?l():null}
        ${d.hasLogo?_():null}
        ${h()}
      </div>
    `,b};var __defProp$n=Object.defineProperty,__decorateClass$n=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$n(a,l,h),h};class Tile extends r$1{constructor(){super(...arguments),this.type="default",this.icon="",this.tileTitle="",this.description="",this.selected=!1,this.disabled=!1,this.hasLogo=!1,this.logoURL="",this.heightAuto=!1,this.widget=!1}static get styles(){return[r$2(iconStyles),r$2(decorativeIconStyles),r$2(styles$3)]}_onClick(){this.type==="selector"&&(this.selected=!this.selected,this.requestUpdate());const a={detail:{title:this.tileTitle},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onTileClick",a))}render(){return template$4(this)}}__decorateClass$n([n({type:String})],Tile.prototype,"type");__decorateClass$n([n({type:String})],Tile.prototype,"icon");__decorateClass$n([n({type:String})],Tile.prototype,"tileTitle");__decorateClass$n([n({type:String})],Tile.prototype,"description");__decorateClass$n([n(booleanType)],Tile.prototype,"selected");__decorateClass$n([n(booleanType)],Tile.prototype,"disabled");__decorateClass$n([n(booleanType)],Tile.prototype,"hasLogo");__decorateClass$n([n({type:String})],Tile.prototype,"logoURL");__decorateClass$n([n(booleanType)],Tile.prototype,"heightAuto");__decorateClass$n([n(booleanType)],Tile.prototype,"widget");const dssIcon$6=i`dss-icon${s(getCustomElementSuffix())}`,dssButton$1=i`dss-button${s(getCustomElementSuffix())}`,template$3=d=>{var b;const a={"dss-input-group--focused":((b=d._input)==null?void 0:b.value)||d._placeholder,"dss-input-group--lg":d._inputSize==="lg","dss-input-group--md":d._inputSize==="md","dss-input-group--dropdown":d._dropdown==="manual","dss-input-group--invalid":d._invalid||!d._inputValidity,"dss-input-group--required":d._required,"dss-input-group--disabled":d._disabled,"dss-input-group--read-only":d._readonly,"dss-input-group--no-label":!d._label},l={"dss-timepicker-help--invalid":d._invalid||!d._inputValidity,"dss-timepicker-help--disabled":d._disabled},_={"dss-timepicker-dropdown--open":d._showDropdown,"dss-timepicker-dropdown--lg":d._inputSize==="lg","dss-timepicker-dropdown--md":d._inputSize==="md","dss-timepicker-dropdown--list--visible":d._showDropdown&&d._dropdown==="list"},h={"dss-timepicker-dropdown--open":d._showDropdown,"dss-timepicker-dropdown--lg":d._inputSize==="lg","dss-timepicker-dropdown--md":d._inputSize==="md","dss-timepicker-dropdown--manual--visible":d._showDropdown&&d._dropdown==="manual"};return u$1`
    <div class="dss-timepicker">
      ${d._dropdown===""?u$1`
            <div
              class="dss-input-group dss-input-group--has-icon ${e$1(a)}"
            >
              <${dssIcon$6} class="dss-input-icon" size="md" icon="${d._icon}"></${dssIcon$6}>

              <slot
                name="input"
                @click=${d._handleClick}
                @input=${d._handleInput}
                @focusin=${d._handleFocus}
                @focusout=${d._handleBlur}
                @keydown=${d._handleKeyDown}
              ></slot>

              <slot name="label" @click=${d._focusInput}></slot>
            </div>
          `:u$1`
            <div
              class="dss-input-group dss-input-group--has-icon ${e$1(a)}"
              role="combobox"
              aria-controls="timepicker-options"
              aria-expanded=${o$1(d._showDropdown)}
            >
              <${dssIcon$6} class="dss-input-icon" size="md" icon="${d._icon}"></${dssIcon$6}>

              <slot
                name="input"
                @click=${d._handleClick}
                @input=${d._handleInput}
                @focusin=${d._handleFocus}
                @focusout=${d._handleBlur}
                @keydown=${d._handleKeyDown}
              ></slot>

              <slot name="label" @click=${d._focusInput}></slot>
            </div>
          `}
      ${d._helpText?u$1`
            <div class="dss-timepicker-help ${e$1(l)}">
              ${d._helpText}
            </div>
          `:null}
     
      <div
        id="timepicker-options"
        class="dss-timepicker-dropdown dss-timepicker-dropdown--list ${e$1(_)}"
        role="listbox"
        aria-label="Timepicker Options"
      >
        <div class="dss-timepicker-dropdown__container">
          ${u$1`${d._generateTimeListOptionsHTML(d._timeListOptions,d._customTimeListOptions)}`}
        </div>
      </div>
         
      <div
        id="timepicker-options"
        class="dss-timepicker-dropdown dss-timepicker-dropdown--manual ${e$1(h)}"
        role="listbox"
        aria-label="Timepicker Options"
      >
        <div class="dss-timepicker-dropdown__manual">
          <div
            class="dss-timepicker-dropdown__items dss-timepicker-dropdown__items--hour"
          >
            ${d._generateTimeManualOptionsHTML("timepickerManualHour",d._timeManualHourOptions)}
          </div>
          <div
            class="dss-timepicker-dropdown__items dss-timepicker-dropdown__items--minute"
          >
            ${d._generateTimeManualOptionsHTML("timepickerManualMinutes",d._timeManualMinutesOptions)}
          </div>
        </div>
        <div class="dss-timepicker-dropdown__actions">
          <${dssButton$1} 
            label="Cancel-lar"
            size="md"
            variant="secondary"
            @onClick=${d._timeManualSelectorCancel}
          ></${dssButton$1}>
          <${dssButton$1}
            label="Seleccionar"
            size="md"
            variant="primary"
            ?disabled=${d._checkDisableTimeManualSelector()}
            @onClick=${d._timeManualSelectorAccept}
          ></${dssButton$1}>
        </div>
      </div>
    </div>
  `},styles$2=".dss-timepicker-help{font-family:var(--font-family)}.dss-timepicker-help{font-family:inherit;font-size:12px;color:var(--color-neutral-700);padding:var(--dss-spacing-xxs) var(--dss-spacing-sm)}.dss-timepicker-help--disabled{color:var(--color-neutral-500)}.dss-timepicker-help--invalid{color:var(--color-red-500)}.dss-timepicker-dropdown{background-color:var(--color-white);width:-moz-fit-content;width:fit-content;border-radius:var(--dss-radius-sm);box-shadow:0 4px 8px 3px #0000000d,0 1px 3px #0000001a;z-index:999;overflow:hidden;opacity:0;visibility:hidden}.dss-timepicker-dropdown--list--visible,.dss-timepicker-dropdown--manual--visible{opacity:1;visibility:visible}.dss-input-group--dropdown input,.dss-timepicker-dropdown--manual{min-width:289px}.dss-timepicker-dropdown__container{overflow:auto;min-height:70px;max-height:280px;width:100%}.dss-timepicker-dropdown__option{cursor:pointer;position:relative;width:100%}.dss-timepicker-dropdown__label{width:100%;height:40px;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;padding:var(--dss-spacing-xs) var(--dss-spacing-sm);font-size:14px;color:var(--color-neutral-900);cursor:pointer;background-color:var(--color-white)}.dss-timepicker-dropdown__label:hover{background-color:var(--color-primary-600);color:var(--color-white)}.dss-timepicker-dropdown__label:active{background-color:var(--color-primary-400);color:var(--color-white);transition:background-color .3s}.option--busy .dss-timepicker-dropdown__label{background-color:var(--color-red-50)}.option--busy .dss-timepicker-dropdown__label:hover{background-color:var(--color-red-600)}.option--busy .dss-timepicker-dropdown__label:active{background-color:var(--color-red-400)}.option--busy .dss-timepicker-dropdown__label .dss-timepicker-dropdown__icon{color:var(--color-neutral-900)}.dss-timepicker-dropdown__label:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-timepicker-dropdown__label:disabled{background-color:var(--color-neutral-50);color:var(--color-neutral-500);cursor:not-allowed}.dss-timepicker-dropdown__input-radio{display:none}.dss-timepicker-dropdown__input-radio:checked+.dss-timepicker-dropdown__icon{display:flex}.dss-timepicker-dropdown__icon{display:none;color:var(--color-primary-500)}.dss-timepicker-dropdown__label:hover .dss-timepicker-dropdown__icon{color:var(--color-white)}.dss-timepicker-dropdown__label:focus-visible{box-shadow:inset 0 0 0 var(--dss-border-width-lg) var(--color-primary-200);border-radius:var(--dss-radius-xs);outline:none}.dss-timepicker-dropdown__manual{width:100%;height:calc(220px - var(--dss-spacing-xs) - var(--dss-spacing-xs));display:flex;justify-content:center;gap:var(--dss-spacing-xs);overflow:hidden;padding:var(--dss-spacing-xs) 0}.dss-timepicker-dropdown__items{box-sizing:border-box;height:100%;width:55px;overflow-y:auto;scrollbar-width:none}.dss-timepicker-dropdown__items:hover{scrollbar-width:thin}.dss-timepicker-dropdown__actions{display:flex;justify-content:center;align-items:center;height:64px;gap:17px;border-top:var(--dss-border-width-sm) solid var(--color-neutral-200)}.dss-timepicker-manual-item__label{display:flex;justify-content:center;align-items:center;height:40px;width:40px;font-weight:var(--font-semibold);font-size:16px;color:var(--color-neutral-900);border-radius:var(--dss-radius-xs);background-color:var(--color-white);cursor:pointer}.dss-timepicker-manual-item__label:focus-visible{box-shadow:inset 0 0 0 var(--dss-border-width-lg) var(--color-primary-200);border-radius:var(--dss-radius-xs);outline:none}.dss-timepicker-manual-item__label:hover{color:var(--color-white);background-color:var(--color-primary-600)}.dss-timepicker-manual-item__label:active{color:var(--color-white);background-color:var(--color-primary-400);transition:background-color .3s}.dss-timepicker-manual-item__input-radio{display:none}.dss-timepicker-manual-item__input-radio:checked+.dss-timepicker-manual-item__label{color:var(--color-white);background-color:var(--color-primary-500)}";var __defProp$m=Object.defineProperty,__getOwnPropDesc$5=Object.getOwnPropertyDescriptor,__decorateClass$m=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$5(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$m(a,l,h),h};const dssIcon$5=i`dss-icon${s(getCustomElementSuffix())}`;class Timepicker extends r$1{constructor(){super(),this.dropdownPlacement="bottom-start",this.dropdownFixed=!1,this._value="",this._placeholder="",this._inputSize="lg",this._dropdown="",this._required=!1,this._disabled=!1,this._readonly=!1,this._invalid=!1,this._showDropdown=!1,this._helpText="",this._oldHelpText="",this._errorTimeFormatText="Format d'hora no vàlid",this._errorTimeOptionText="Opció de temps no disponible",this._manualHourSelector="",this._manualMinuteSelector="",this._minutesRange=1,this._minHour=0,this._maxHour=24,this._timeListOptions=[],this._customTimeListOptions=[],this._timeManualHourOptions=[],this._timeManualMinutesOptions=[],this._icon="schedule",this._inputValidity=!0,this._isFirstUpdated=!0,this._popperInstanceList=null,this._popperInstanceManual=null,this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)l.type==="attributes"&&(this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback),this.visibleObserver=new IntersectionObserver(([a])=>{a.isIntersecting||this._showDropdown&&this._closeDropdown()},{root:null,threshold:0}),this._timePattern=/^\d{0,4}$/g,this._timeSeparator=":",this._timeInputOldValue="",this._handleOutsideClick=this._handleOutsideClick.bind(this),this._handleFocusOut=this._handleFocusOut.bind(this)}static get styles(){return[r$2(inputStyles),r$2(scrollStyles),r$2(styles$2)]}get _input(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}get _label(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="label"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}set value(a){const l=this._value;this._value=a,this._input&&(this._input.value=a),this.requestUpdate("value",l)}get value(){return this._value}set invalid(a){const l=this._invalid;this._invalid=a,this.requestUpdate("invalid",l)}get invalid(){return this._invalid}set inputSize(a){const l=this._inputSize;a==="md"?this._inputSize=a:this._inputSize="lg",this.requestUpdate("inputSize",l)}get inputSize(){return this._inputSize}set helpText(a){const l=this._helpText;this._helpText=a,this._oldHelpText=a,this.requestUpdate("helpText",l)}get helpText(){return this._helpText}set errorTimeFormatText(a){const l=this._errorTimeFormatText;this._errorTimeFormatText=a,this.requestUpdate("errorTimeFormatText",l)}get errorTimeFormatText(){return this._errorTimeFormatText}set errorTimeOptionText(a){const l=this._errorTimeOptionText;this._errorTimeOptionText=a,this.requestUpdate("errorTimeOptionText",l)}get errorTimeOptionText(){return this._errorTimeOptionText}set dropdown(a){const l=this._dropdown;this._dropdown=a,this.requestUpdate("dropdown",l)}get dropdown(){return this._dropdown}set showDropdown(a){const l=this._showDropdown;this._showDropdown=a,this.requestUpdate("showDropdown",l)}get showDropdown(){return this._showDropdown}set minutesRange(a){const l=this._minutesRange;this._minutesRange=a,this._isFirstUpdated||this._updateTimeOptions(),this.requestUpdate("minutesRange",l)}get minutesRange(){return this._minutesRange}set minHour(a){const l=this._minHour;this._minHour=a,this._isFirstUpdated||this._updateTimeOptions(),this.requestUpdate("minHour",l)}get minHour(){return this._minHour}set maxHour(a){const l=this._maxHour;this._maxHour=a,this._isFirstUpdated||this._updateTimeOptions(),this.requestUpdate("maxHour",l)}get maxHour(){return this._maxHour}set customTimeListOptions(a){const l=this._customTimeListOptions;this._customTimeListOptions=a,this.requestUpdate("customTimeListOptions",l)}get customTimeListOptions(){return this._customTimeListOptions}set icon(a){const l=this._icon;this._icon=a,this.requestUpdate("icon",l)}get icon(){return this._icon}disconnectedCallback(){this._removeDropdownListener(),this.observer.disconnect(),this.visibleObserver.disconnect()}_addDropdownListener(){document.addEventListener("click",this._handleOutsideClick),this.addEventListener("focusout",this._handleFocusOut)}_removeDropdownListener(){document.removeEventListener("click",this._handleOutsideClick),this.removeEventListener("focusout",this._handleFocusOut)}_handleOutsideClick(a){this._checkClickOutside(a)}_handleFocusOut(a){this._checkFocusOut(a)}async firstUpdated(){try{await this.updateComplete,this._createPopperList(),this._createPopperManual(),this._input&&(this._checkInputAttributes(),this.observer.observe(this._input,this.observerConfig),this.visibleObserver.observe(this._input)),this._updateTimeOptions(),this._isFirstUpdated=!1,this.requestUpdate()}catch{console.error("ERROR OCURRED")}}_createPopperList(){var _,h;const a=(_=this.shadowRoot)==null?void 0:_.querySelector(".dss-input-group"),l=(h=this.shadowRoot)==null?void 0:h.querySelector(".dss-timepicker-dropdown--list");a&&l&&(this._popperInstanceList=createPopper(a,l,{placement:this.dropdownPlacement,strategy:this.dropdownFixed?"fixed":"absolute",modifiers:[{name:"offset",options:{offset:[0,4]}},{name:"flip",enabled:!0,options:{boundary:"viewport",rootBoundary:"viewport"}},{name:"preventOverflow",enabled:!0,options:{boundary:"viewport"}},{name:"matchWidth",enabled:!0,phase:"write",fn({state:b}){b.elements.popper.style.width=`${a.offsetWidth}px`},effect:({state:b})=>{b.elements.popper.style.width=`${a.offsetWidth}px`}}]}))}_createPopperManual(){var _,h;const a=(_=this.shadowRoot)==null?void 0:_.querySelector(".dss-input-group"),l=(h=this.shadowRoot)==null?void 0:h.querySelector(".dss-timepicker-dropdown--manual");a&&l&&(this._popperInstanceManual=createPopper(a,l,{placement:"bottom",modifiers:[{name:"offset",options:{offset:[0,4]}},{name:"flip",enabled:!0,options:{boundary:"viewport",rootBoundary:"viewport"}},{name:"preventOverflow",enabled:!0,options:{boundary:"viewport"}}]}))}_updateTimeOptions(){this._dropdown&&(this._timeListOptions=this._generateTimeListOptions(),this._timeManualHourOptions=this._generateTimeManualHoursOptions(),this._timeManualMinutesOptions=this._generateTimeManualMinutesOptions())}_checkInputAttributes(){var g,f,$,k,D,C,w;const a=(g=this._input)==null?void 0:g.getAttribute("placeholder");a&&(this._placeholder=a),((f=this._input)==null?void 0:f.getAttribute("readonly"))!==null&&(this._readonly=!0),(($=this._input)==null?void 0:$.getAttribute("disabled"))!==null&&(this._disabled=!0),((k=this._input)==null?void 0:k.getAttribute("required"))!==null&&(this._required=!0);const b=(D=this._input)==null?void 0:D.getAttribute("value");b!==null&&(this._value=b),(C=this._input)!=null&&C.value&&((w=this._input)==null?void 0:w.value)!==""&&this._handleValidity(),this.requestUpdate()}_handleValidity(){var l;const a=(l=this._input)==null?void 0:l.checkValidity();a!==void 0&&(this._inputValidity=a)}_checkClickOutside(a){a.composedPath().includes(this)||this._showDropdown&&this._closeDropdown()}_checkFocusOut(a){const l=a.relatedTarget;l!==null&&l!==this&&l!==this._input&&l!==this._label&&(this._showDropdown&&this._closeDropdown(),this.requestUpdate())}_closeDropdown(){var a;this._removeDropdownListener(),this._showDropdown=!1,(a=this._input)==null||a.blur(),this.requestUpdate()}_timeMask(a,l,_){const h=[];for(let b=0;b<a.length;b+=1)b!==0&&b%l===0&&h.push(_),h.push(a[b]);return h.join("")}_timeUnmask(a){return a.replace(/[^\d]/g,"")}_timeValidate(a){const l=a.slice(0,2),_=a.slice(3,5);this._input&&+l>=0&&+l<=23&&+_>=0&&+_<=59?(this._invalid=!1,this._helpText=this._oldHelpText,this._dropdown&&this._dropdown==="list"&&!this._timeListOptions.includes(this._input.value)?(this._helpText=this._errorTimeOptionText,this._invalid=!0):this._dropdown&&this._dropdown==="manual"&&(!this._timeManualHourOptions.includes(l)||!this._timeManualMinutesOptions.includes(_))?(this._helpText=this._errorTimeOptionText,this._invalid=!0):this._closeDropdown()):(this._helpText=this._errorTimeFormatText,this._invalid=!0),this._dispatchValueChange(),this.requestUpdate()}_dispatchValueChange(){if(this._input){const a={detail:{value:this._input.value,status:this._invalid?"INVALID":"VALID"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onTimepickerChange",a))}}_handleClick(){if(this._showDropdown=!0,this._addDropdownListener(),this._popperInstanceList&&this._popperInstanceList.update(),this._popperInstanceManual&&this._popperInstanceManual.update(),this._value&&(this._dropdown&&this._dropdown==="list"&&this._timeListOptionsScrollTo(),this._dropdown&&this._dropdown==="manual")){const a=this._value.slice(0,2);this._timeManualOptionsScrollTo(a),setTimeout(()=>{this._timeManualOptionsScrollTo()},500)}this.requestUpdate()}_handleInput(){if(this._input){let a=this._input.value;a=this._timeUnmask(a),a.match(this._timePattern)?(a=this._timeMask(a,2,this._timeSeparator),this._input.value=a):this._input.value=this._timeInputOldValue,this._input.value.length===5&&(this._timeValidate(this._input.value),this._handleValidity()),this._dropdown&&this._dropdown==="list"&&this._timeListOptionsScrollTo(),this._dropdown&&this._dropdown==="manual"&&this._timeManualOptionsScrollTo()}}_handleKeyDown(a){this._input&&(this._timeInputOldValue=this._input.value,(a==null?void 0:a.key)==="Enter"||(a==null?void 0:a.key)===" "?(this._showDropdown=!0,this._addDropdownListener(),this._popperInstanceList&&this._popperInstanceList.update(),this._popperInstanceManual&&this._popperInstanceManual.update(),this.requestUpdate()):(a==null?void 0:a.key)==="Escape"&&this._closeDropdown())}_handleFocus(){this._placeholder="00:00",this._input&&this._input.setAttribute("placeholder",this._placeholder),this.requestUpdate()}_handleBlur(){this._placeholder="",this._input&&this._input.removeAttribute("placeholder"),this.requestUpdate()}_focusInput(){var a;(a=this._input)==null||a.focus(),this._handleClick()}_generateTimeListOptions(){const a=[];for(let l=this._minHour;l<this._maxHour;l+=1)for(let _=0;_<60;_+=this._minutesRange){const h=l.toString().padStart(2,"0"),b=_.toString().padStart(2,"0");a.push(`${h}:${b}`)}return a}_generateTimeListOptionsHTML(a,l){let _=!0;const h=l&&l.length>0;return(h?l:a).map(f=>{const $=L=>{L&&L.focus()},k=L=>{let y=0;const z=this.renderRoot.querySelectorAll(".dss-timepicker-dropdown__label"),q=z.length-1;L===z[0]?$(z[q]):(z.forEach((P,O)=>{P===L&&(y=O)}),$(z[y-1]))},D=L=>{let y=0;const z=this.renderRoot.querySelectorAll(".dss-timepicker-dropdown__label"),q=z.length-1;L===z[q]?$(z[0]):(z.forEach((P,O)=>{P===L&&(y=O)}),$(z[y+1]))},C=L=>{if(this._input){const y=L.target.getAttribute("value");y&&(this._input.value=y,this._helpText=this._oldHelpText,this._invalid=!1,this._handleValidity(),this._closeDropdown(),this._dispatchValueChange())}},w=L=>{const y=L.currentTarget,z=L;let q=!1;switch(z.key){case"ArrowUp":k(y),q=!0;break;case"ArrowDown":D(y),q=!0;break;case"Enter":{const P=L.target.querySelector("input"),O=this.renderRoot.querySelector('.dss-timepicker-dropdown__label[tabindex="0"]');O==null||O.setAttribute("tabindex","-1"),L.target.setAttribute("tabindex","0"),P==null||P.click(),q=!0;break}}q&&(L.stopPropagation(),L.preventDefault())},S={"option--busy":typeof f=="object"&&f.state==="ocupat"},I=u$1`
        <div class="dss-timepicker-dropdown__option ${e$1(S)}">
          <label
            class="dss-timepicker-dropdown__label"
            tabindex="${_?0:-1}"
            @keydown=${w}
          >
            ${h&&typeof f=="object"?f.value:f}

            <input
              class="dss-timepicker-dropdown__input-radio"
              name="timeList"
              type="radio"
              @click="${C}"
              .value="${h&&typeof f=="object"?f.value:f}"
            />
						<${dssIcon$5} class="dss-timepicker-dropdown__icon" size="md" icon="check"></${dssIcon$5}>
          </label>
        </div>
      `;return _=!1,I})}_generateTimeManualHoursOptions(){const a=[];for(let l=this._minHour;l<this._maxHour;l+=1){const _=l.toString().padStart(2,"0");a.push(_)}return a}_generateTimeManualMinutesOptions(){const a=[];for(let l=0;l<60;l+=this._minutesRange){const _=l.toString().padStart(2,"0");a.push(_)}return a}_generateTimeManualOptionsHTML(a,l){let _=!0;return l.map(b=>{const g=k=>{const D=k.target.getAttribute("value");D&&(a==="timepickerManualHour"?this._manualHourSelector=D:a==="timepickerManualMinutes"&&(this._manualMinuteSelector=D),this.requestUpdate())},f=k=>{const D=k.currentTarget,C=k;let w=!1;const S=y=>{y&&y.focus()},I=y=>{let z=0;const q=this.renderRoot.querySelectorAll(`.dss-timepicker-manual-item__label.${a}`),P=q.length-1;y===q[0]?S(q[P]):(q.forEach((O,U)=>{O===y&&(z=U)}),S(q[z-1]))},L=y=>{let z=0;const q=this.renderRoot.querySelectorAll(`.dss-timepicker-manual-item__label.${a}`),P=q.length-1;y===q[P]?S(q[0]):(q.forEach((O,U)=>{O===y&&(z=U)}),S(q[z+1]))};switch(C.key){case"ArrowUp":I(D),w=!0;break;case"ArrowDown":L(D),w=!0;break;case"Enter":{const y=k.target.parentElement,z=y==null?void 0:y.querySelector("input"),q=this.renderRoot.querySelector(`.dss-timepicker-manual-item__label[tabindex="0"].${a}`);if(q==null||q.setAttribute("tabindex","-1"),k.target.setAttribute("tabindex","0"),z==null||z.click(),a==="timepickerManualHour"){const P=this.renderRoot.querySelector('.dss-timepicker-manual-item__label[tabindex="0"].timepickerManualMinutes');S(P)}else if(a==="timepickerManualMinutes"){const P=this.renderRoot.querySelector(".dss-timepicker-dropdown__actions-select");setTimeout(()=>{P.focus()},0)}w=!0;break}}w&&(k.stopPropagation(),k.preventDefault())},$=u$1`
        <div class="dss-timepicker-manual-item">
          <input
            id="${a+b}"
            class="dss-timepicker-manual-item__input-radio"
            name="${a}"
            type="radio"
            @click="${g}"
            .value="${b}"
          />
          <label
            for="${a+b}"
            class="dss-timepicker-manual-item__label ${a}"
            tabindex="${_?0:-1}"
            @keydown=${f}
          >
            ${b}
          </label>
        </div>
      `;return _=!1,$})}_checkDisableTimeManualSelector(){return this._manualHourSelector===""||this._manualMinuteSelector===""}_timeManualSelectorCancel(){const a=this.renderRoot.querySelectorAll(".dss-timepicker-manual-item__input-radio:checked");a.length&&a.forEach(l=>{l.checked=!1}),this._manualHourSelector="",this._manualMinuteSelector="",this._handleValidity(),this._closeDropdown()}_timeManualSelectorAccept(){this._input&&(this._input.value=`${this._manualHourSelector}:${this._manualMinuteSelector}`,this._helpText=this._oldHelpText,this._invalid=!1,this._handleValidity(),this._closeDropdown(),this._dispatchValueChange())}_timeListOptionsScrollTo(){if(this._input){const a=this._input.value.trim(),l=this.renderRoot.querySelectorAll(".dss-timepicker-dropdown__input-radio");let _=!1;l.forEach(h=>{const b=h.value;if(!_&&b.startsWith(a)){const g=h.closest("label");_=!0,g&&(setTimeout(()=>{g.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},0),b===a&&(h.checked=!0))}})}}_timeManualOptionsScrollTo(a){if(this._input){const l=a?a.trim():this._input.value.trim();if(l.length<=2){const _=this.renderRoot.querySelectorAll(".dss-timepicker-dropdown__items--hour .dss-timepicker-manual-item__label");let h=!1;_.forEach(b=>{const g=b.innerHTML.replace(/<!--[\s\S]*?-->/g,"").trim();!h&&g.startsWith(l)&&(h=!0,setTimeout(()=>{b.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},0),g===l&&b.click())})}else{const _=l.slice(3),h=this.renderRoot.querySelectorAll(".dss-timepicker-dropdown__items--minute .dss-timepicker-manual-item__label");let b=!1;h.forEach(g=>{const f=g.innerHTML.replace(/<!--[\s\S]*?-->/g,"").trim();!b&&f.startsWith(_)&&(b=!0,g.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),f===_&&g.click())})}}}render(){return template$3(this)}}__decorateClass$m([n({type:String,attribute:!0})],Timepicker.prototype,"value",1);__decorateClass$m([n(booleanType)],Timepicker.prototype,"invalid",1);__decorateClass$m([n({type:String})],Timepicker.prototype,"inputSize",1);__decorateClass$m([n({type:String})],Timepicker.prototype,"helpText",1);__decorateClass$m([n({type:String})],Timepicker.prototype,"errorTimeFormatText",1);__decorateClass$m([n({type:String})],Timepicker.prototype,"errorTimeOptionText",1);__decorateClass$m([n({type:String})],Timepicker.prototype,"dropdown",1);__decorateClass$m([n(booleanType)],Timepicker.prototype,"showDropdown",1);__decorateClass$m([n({type:Number})],Timepicker.prototype,"minutesRange",1);__decorateClass$m([n({type:Number})],Timepicker.prototype,"minHour",1);__decorateClass$m([n({type:Number})],Timepicker.prototype,"maxHour",1);__decorateClass$m([n({type:Array})],Timepicker.prototype,"customTimeListOptions",1);__decorateClass$m([n({type:String})],Timepicker.prototype,"icon",1);__decorateClass$m([n({type:String})],Timepicker.prototype,"dropdownPlacement",2);__decorateClass$m([n(booleanType)],Timepicker.prototype,"dropdownFixed",2);const styles$1=":host{opacity:0;visibility:hidden;z-index:999}:host(.visible){opacity:1;visibility:visible}.dss-tooltip{max-width:264px;box-sizing:border-box;width:-moz-max-content;width:max-content;height:-moz-fit-content;height:fit-content;padding:var(--dss-spacing-tiny) var(--dss-spacing-xs);background-color:var(--color-neutral-800);border-radius:var(--dss-radius-sm);box-shadow:0 4px 8px 3px #0000000d,0 1px 3px #0000001a;font-size:14px;font-weight:var(--font-regular);color:var(--color-white);white-space:normal;word-wrap:break-word}.dss-tooltip--align-left{text-align:left}.dss-tooltip--align-right{text-align:right}.dss-tooltip--align-center{text-align:center}.dss-tooltip--align-justify{text-align:justify}.dss-tooltip--no-height-limit{max-height:-moz-max-content;max-height:max-content}.dss-tooltip--hidden{display:none}",template$2=d=>{const a={"dss-tooltip":!0,[`dss-tooltip--${d.position}`]:!!d.position,[`dss-tooltip--align-${d.align}`]:!!d.align,"dss-tooltip--hidden":d.hide,"dss-tooltip--no-height-limit":d.noHeightLimit};return u$1`
    <div class="${e$1(a)}">
      <slot></slot>
    </div>
  `};var __defProp$l=Object.defineProperty,__decorateClass$l=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$l(a,l,h),h};class Tooltip extends r$1{constructor(){super(...arguments),this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)if(l.type==="attributes"&&l.attributeName==="data-popper-placement"){const _=this.getAttribute("data-popper-placement");_&&this._propagatePlacement(_)}},this.observer=new MutationObserver(this.callback),this.position="top",this.align="left",this.hide=!1,this.noHeightLimit=!1,this._popperInstance=null}static get styles(){return[r$2(iconStyles),r$2(styles$1)]}connectedCallback(){super.connectedCallback();const a=this.parentElement;a&&this.createPopperInstance(a)}disconnectedCallback(){this.observer.disconnect(),this._popperInstance&&(this._popperInstance.destroy(),this._popperInstance=null)}async firstUpdated(){try{await this.updateComplete,this.observer.observe(this,this.observerConfig)}catch{console.error("ERROR OCURRED")}}updated(a){super.updated(a),a.has("position")&&this._popperInstance&&this._popperInstance.setOptions({placement:this.position})}createPopperInstance(a){this._popperInstance=createPopper(a,this,{placement:this.position,modifiers:[{name:"arrow",options:{element:this.querySelector(".dss-tooltip-arrow")}},{name:"offset",options:{offset:[0,4]}}],onFirstUpdate:l=>{this._propagatePlacement(l.placement)}}),a.addEventListener("mouseenter",()=>{var l;(l=this._popperInstance)==null||l.update(),this.classList.add("visible")}),a.addEventListener("mouseleave",()=>{this.classList.remove("visible")})}_propagatePlacement(a){const l=this.renderRoot.querySelector(".dss-tooltip-box");l&&l.setAttribute("data-popper-placement",a)}updateTooltip(){this._popperInstance.update()}render(){return template$2(this)}}__decorateClass$l([n({type:String})],Tooltip.prototype,"position");__decorateClass$l([n({type:String})],Tooltip.prototype,"align");__decorateClass$l([n(booleanType)],Tooltip.prototype,"hide");__decorateClass$l([n(booleanType)],Tooltip.prototype,"noHeightLimit");const uploadBoxStyles=':host{display:grid;min-width:380px;width:100%;gap:var(--dss-spacing-xs)}.upload-box{display:flex;justify-content:space-between;align-items:center;gap:var(--dss-spacing-md);border-radius:var(--dss-radius-sm);padding:var(--dss-spacing-md);border:var(--dss-border-width-sm) dashed var(--color-neutral-100);transition:all .25s ease-in-out}.upload-box.dragover{background-color:var(--color-primary-50);border-color:var(--color-prim-salut)}::slotted(input),input[type=file]{display:none}.dss-decorative-icon{transition:all .25s ease-in-out}.upload-box-cta{flex:1;display:grid;gap:var(--dss-spacing-xs)}.upload-box-cta__message{font-size:16px;line-height:24px;color:var(--color-neutral-900)}.upload-box-cta__message .action{color:var(--color-primary-500);font-weight:var(--font-semibold);cursor:pointer}.upload-box-cta__requirements,.upload-box-message{font-size:12px;line-height:16px;color:var(--color-neutral-600)}.upload-box-message{padding:0 var(--dss-spacing-sm)}.upload-box-files .file-list{display:grid;gap:var(--dss-spacing-xs)}.upload-box--has-files .upload-box-files .file-list{width:100%}.upload-box-files .file{display:flex;min-height:40px;box-sizing:border-box;gap:var(--dss-spacing-sm);justify-content:space-between;align-items:center;border-radius:var(--dss-radius-sm);border:var(--dss-border-width-sm) solid var(--color-neutral-100);padding:0 var(--dss-spacing-sm);padding-top:0;padding-bottom:0;padding-left:var(--dss-spacing-xs);padding-right:var(--dss-spacing-sm);width:100%}.upload-box-files .file-actions{display:flex;gap:var(--dss-spacing-xs)}.upload-box-files .file-description{flex:1;padding-top:var(--dss-spacing-xs);padding-bottom:var(--dss-spacing-xs)}.upload-box-files .file-description__name{height:24px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;font-size:14px;line-height:24px;color:var(--color-neutral-900)}.file-description__error{font-size:12px;line-height:16px;color:var(--color-red-500)}.upload-box-button{text-wrap:nowrap}.upload-box--md{display:flex;justify-content:space-between;padding:var(--dss-spacing-xs) var(--dss-spacing-sm);min-height:56px}.upload-box--md .upload-box-cta{display:flex;justify-content:flex-start;align-items:center;height:100%}.upload-box--md .upload-box-cta__message{font-size:14px}.upload-box--md .upload-box-button{margin-top:var(--dss-spacing-xxs)}.upload-box--error{background-color:var(--color-red-50);border-color:var(--color-red-500)}.upload-box--error .upload-box-cta__requirements,.upload-box-message--error{color:var(--color-red-500)}.upload-box--md .upload-box-files{padding:var(--dss-spacing-xxs) 0}.upload-box--md .upload-box-files .file-list{display:grid;gap:var(--dss-spacing-xs)}.upload-box--md.upload-box--has-files .upload-box-files .file-list{grid-template-columns:1fr}.upload-box--md .upload-box-files .file{display:flex;justify-content:flex-start;align-items:center}.upload-box--disabled{cursor:not-allowed;background-color:var(--color-neutral-50)}.upload-box--disabled .upload-box-cta__requirements,.upload-box--disabled .upload-box-message{color:var(--color-neutral-500)!important}.upload-box--disabled .upload-box-cta__message,.upload-box--disabled .upload-box-cta__message .action{color:var(--color-neutral-400)!important;cursor:not-allowed}.upload-box__file-link{cursor:pointer;font-size:14px;font-weight:400;line-height:24px;text-decoration:underline;text-decoration-style:solid;color:var(--color-primary-500)}.upload-box__file-link:hover{color:var(--color-primary-600)}.upload-box__file-link:active{color:var(--color-primary-400)}.dot-flashing{display:inline-block;position:relative;width:4px;height:4px;border-radius:50%;background-color:var(--color-neutral-900);color:var(--color-neutral-900);animation:dot-flashing 1s infinite linear alternate;animation-delay:.5s;margin-left:var(--dss-spacing-xs)}.dot-flashing:before,.dot-flashing:after{content:"";display:inline-block;position:absolute;top:0}.dot-flashing:before{left:-6px;width:4px;height:4px;border-radius:50%;background-color:var(--color-neutral-900);color:var(--color-neutral-900);animation:dot-flashing 1s infinite alternate;animation-delay:0s}.dot-flashing:after{left:6px;width:4px;height:4px;border-radius:50%;background-color:var(--color-neutral-900);color:var(--color-neutral-900);animation:dot-flashing 1s infinite alternate;animation-delay:1s}@keyframes dot-flashing{0%{background-color:var(--color-neutral-900)}50%,to{background-color:var(--color-neutral-50)}}',dssDecorativeIcon=i`dss-decorative-icon${s(getCustomElementSuffix())}`,dssIconButton$2=i`dss-icon-button${s(getCustomElementSuffix())}`,template$1=d=>{const a={dragover:d._dragOver,"upload-box--disabled":d._disabled};return u$1`
    <!-- Drag and drop -->
    <div
        class="upload-box ${e$1(a)}"
        @dragover="${d._onDragOver}"
        @dragleave="${d._onDragLeave}"
        @drop="${d._onDrop}"
      >
        <${dssDecorativeIcon} icon=${d.dragAndDropIcon} size="lg" disabled=${d._disabled}></${dssDecorativeIcon}>
        <div class="upload-box-cta">
          <div class="upload-box-cta__message">
            <span class="action" @click=${d._onClick}
              >${d.fileExplorerMessage}</span
            >
            ${d.dragAndDropMessage}
          </div>
          <div class="upload-box-cta__requirements">
            ${d.filesFormatMessage}
          </div>
        </div>
        <slot name="input"></slot>
      </div>

      <!--Uploaded files -->
      <div class="upload-box-files">
        <ul class="file-list">
          ${d._files.map((l,_)=>u$1`
              <li class="file">
                ${d._fileErrors[l.name]?u$1`
                      <${dssDecorativeIcon} icon="error_outline" size="sm" state="error"></${dssDecorativeIcon}>
                    `:l.status==="loading"?u$1`
                      <${dssDecorativeIcon} icon="downloading" size="sm" state="info"></${dssDecorativeIcon}>
                    `:u$1`
                      <${dssDecorativeIcon} icon="check" size="sm" state="success"></${dssDecorativeIcon}>
                    `}
                <div class="file-description">
                  <p class="file-description__name">

                    ${d._fileErrors[l.name]?u$1`
                        ${l.name}
                      `:l.status==="loading"?u$1`${l.name} <span class="dot-flashing"></span>`:d.disableOpenFile?u$1`
                            ${l.name}
                          `:u$1`
                            <span class="upload-box__file-link" @click="${()=>d._dispatchOpenFile(l)}">
                              ${l.name}
                            </span>
                          `}

                   
                  </p>
                  ${d._fileErrors[l.name]?u$1`
                        <p class="file-description__error">
                          ${d._fileErrors[l.name]}
                        </p>
                      `:""}
                </div>
                <div class="file-actions">
                  ${l.status==="loading"?u$1`
                        <${dssIconButton$2}
                        size="sm"
                        icon="block"
                        variant="error"
                        ></${dssIconButton$2}>
                      `:u$1`
                        ${l.status==="error"?u$1`
                              <${dssIconButton$2}
                              size="sm"
                              icon="restart_alt"
                              variant="primary"
                              @click="${()=>d._reloadFile(l)}"
                              ></${dssIconButton$2}>
                            `:u$1``}
                        <${dssIconButton$2}
                        size="sm"
                        icon="delete"
                        variant="error"
                        @click="${()=>d._removeFile(_)}"
                        ></${dssIconButton$2}>
                      `}
                </div>
              </li>
            `)}
        </ul>
      </div>
  `};var __defProp$k=Object.defineProperty,__decorateClass$k=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$k(a,l,h),h};class UploadBox extends r$1{constructor(){super(...arguments),this.fileExplorerMessage="Clica per pujar",this.dragAndDropMessage="o arrossega arxius aquí",this.dragAndDropIcon="file_upload",this.filesFormatMessage="PDF, JPEG o PNG de menys de 5MB",this.buttonLabel="Buscar arxius",this.filesFormat=["pdf","jpeg","png"],this.maxFileSize=5242880,this.disableOpenFile=!1,this._dragOver=!1,this._files=[],this._disabled=!1,this._fileFormatErrorMessage="Format d’arxiu incorrecte",this._fileSizeErrorMessage="Mida d’arxiu incorrecte",this._fileFormatAndSizeErrorMessage="Format i mida d’arxiu incorrecte",this._fileErrors={},this.observerConfig={attributes:!0,childList:!0,subtree:!0},this.callback=a=>{for(const l of a)l.type==="attributes"&&(this._input&&this._checkInputAttributes(),this.requestUpdate())},this.observer=new MutationObserver(this.callback)}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(buttonStyles),r$2(decorativeIconStyles),r$2(uploadBoxStyles)]}get _input(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector('slot[name="input"]'))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()[0]}disconnectedCallback(){this.observer.disconnect()}_checkInputAttributes(){var l;const a=(l=this._input)==null?void 0:l.getAttribute("disabled");this._disabled=a!==null,this.requestUpdate()}_onDragOver(a){a.preventDefault(),!this._dragOver&&!this._disabled&&(this._dragOver=!0,this.requestUpdate())}_onDragLeave(a){a.preventDefault(),this._dragOver&&!this._disabled&&(this._dragOver=!1,this.requestUpdate())}_onDrop(a){var l;if(a.preventDefault(),!this._disabled){this._dragOver&&(this._dragOver=!1,this.requestUpdate());const _=(l=a.dataTransfer)==null?void 0:l.files;_&&this._handleUploadedFiles(_)}}_onClick(){this._input&&!this._disabled&&this._input.click()}_onSlotInputChange(){this._input&&this._input.addEventListener("change",this._handleInputFileChange.bind(this))}_isValidFileFormat(a){var _;const l=(_=a.name.split(".").pop())==null?void 0:_.toLowerCase();return this.filesFormat.includes(l||"")}_isValidFileSize(a){return a.size<=this.maxFileSize}_validateFile(a){let l=!0,_="";return!this._isValidFileSize(a)&&!this._isValidFileFormat(a)?(l=!1,_=this._fileFormatAndSizeErrorMessage):this._isValidFileSize(a)&&!this._isValidFileFormat(a)?(l=!1,_=this._fileFormatErrorMessage):!this._isValidFileSize(a)&&this._isValidFileFormat(a)&&(l=!1,_=this._fileSizeErrorMessage),l||(this._fileErrors[a.name]=_),l}_isAlreadyUploaded(a){return this._files.some(l=>l.name===a.name)}_handleInputFileChange(a){const l=a.target;l.files&&this._handleUploadedFiles(l.files)}_handleUploadedFiles(a){if(a&&a.length>0){for(const l of Array.from(a))if(!this._isAlreadyUploaded(l)){const _=this._validateFile(l),h=l;h.status=_?"loading":"invalid",this._files.push(h),this.requestUpdate(),this._readFile(l,_)}}}_readFile(a,l){const _=new FileReader;_.onload=()=>{this._files.find(h=>h.name===a.name).status=l?"ready":"invalid",this.requestUpdate(),this._dispatchUploadFiles()},_.onerror=()=>{this._files.find(h=>h.name===a.name).status="error",_.error&&(this._fileErrors[a.name]=_.error.message),this.requestUpdate()},_.readAsDataURL(a)}_removeFile(a){this._files.splice(a,1),this._dispatchUploadFiles(),this._input&&(this._input.value=""),this.requestUpdate()}_reloadFile(a){this._files.find(l=>l.name===a.name).status="loading",this._fileErrors[a.name]="",this.requestUpdate(),this._readFile(a)}resetFiles(){this._files=[],this.requestUpdate()}_dispatchUploadFiles(){const a={detail:this._files,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onUploadFiles",a))}_dispatchOpenFile(a){const l={detail:{file:a},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onOpenFile",l))}async firstUpdated(){try{await this.updateComplete,this._input&&(this.observer.observe(this._input,this.observerConfig),this._checkInputAttributes(),this._onSlotInputChange())}catch{console.error("ERROR OCURRED")}}render(){return template$1(this)}}__decorateClass$k([n({type:String})],UploadBox.prototype,"fileExplorerMessage");__decorateClass$k([n({type:String})],UploadBox.prototype,"dragAndDropMessage");__decorateClass$k([n({type:String})],UploadBox.prototype,"dragAndDropIcon");__decorateClass$k([n({type:String})],UploadBox.prototype,"filesFormatMessage");__decorateClass$k([n({type:String})],UploadBox.prototype,"buttonLabel");__decorateClass$k([n({type:Array})],UploadBox.prototype,"filesFormat");__decorateClass$k([n({type:Number})],UploadBox.prototype,"maxFileSize");__decorateClass$k([n(booleanType)],UploadBox.prototype,"disableOpenFile");const userFeedbackStyles=":host{display:block;width:-moz-fit-content;width:fit-content}.dss-user-feedback{display:flex;align-items:center;flex-direction:column;gap:var(--dss-spacing-md);min-width:220px;width:-moz-fit-content;width:fit-content;max-width:100%;text-align:center}.dss-user-feedback__image{width:100%;max-width:220px;margin:auto;text-align:center}.dss-user-feedback__body{display:flex;flex-direction:column;gap:var(--dss-spacing-xxs);max-width:220px}.dss-user-feedback__title{color:var(--color-headline);font-weight:var(--font-bold);font-size:20px;line-height:var(--line-30)}.dss-user-feedback__description{font-size:14px;line-height:var(--line-24)}.dss-user-feedback__button-group{display:flex;align-items:center;justify-content:center;gap:var(--dss-spacing-md)}.dss-user-feedback__details-action{text-align:center}.dss-user-feedback__details-button{all:unset;display:inline-flex;align-items:center;gap:var(--dss-spacing-xxs);font-size:14px;line-height:24px;font-weight:var(--font-semibold);color:var(--color-primary-500);text-decoration:none;border-radius:var(--dss-radius-xs);transition:.2s all ease-in;vertical-align:middle;cursor:pointer}.dss-user-feedback__details-button:hover{color:var(--color-primary-600)}.dss-user-feedback__details-button:active{color:var(--color-primary-400)}.dss-user-feedback__details-button:focus-visible{outline:var(--dss-border-width-md) solid var(--color-blue-200)}.dss-user-feedback__details-button:disabled{cursor:not-allowed;color:var(--color-neutral-500)!important}.dss-user-feedback__details-button-text{text-decoration:underline}.dss-user-feedback__details-content ::slotted(div){font-size:14px;line-height:var(--line-24)}",dssIcon$4=i`dss-icon${s(getCustomElementSuffix())}`,userFeedbackTemplate=d=>u$1`
  <div class="dss-user-feedback">
    <img
      class="dss-user-feedback__image"
      src="${d.imageSrc}"
      alt="${d.imageAlt}"
    />
    <div class="dss-user-feedback__body">
      <h4 class="dss-user-feedback__title">${d.title}</h4>
      <p class="dss-user-feedback__description">${d.description}</p>
      ${d.hasDetails?u$1`
            <div class="dss-user-feedback__details-action">
              <button
                class="dss-user-feedback__details-button"
                @click="${d._handleDetailsClick}"
              >
                <span class="dss-user-feedback__details-button-text">
                  ${d.detailsLabel}
                </span>
                <${dssIcon$4} icon="${d._detailsExpanded?"expand_less":"expand_more"}" size="sm"></${dssIcon$4}>
              </button>
            </div>

            ${d._detailsExpanded?u$1`
                  <div class="dss-user-feedback__details-content">
                    <slot name="details"></slot>
                  </div>
                `:null}
          `:null}
    </div>
    ${d.hideFooter?null:u$1`
          <div class="dss-user-feedback__button-group">
            <slot></slot>
          </div>
        `}
  </div>
`;var __defProp$j=Object.defineProperty,__decorateClass$j=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$j(a,l,h),h};class UserFeedback extends r$1{constructor(){super(...arguments),this.imageSrc="",this.imageAlt="",this.title="",this.description="",this.hasDetails=!1,this.detailsLabel="Veure detalls",this.hideFooter=!1,this._detailsExpanded=!1}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(userFeedbackStyles)]}_handleDetailsClick(){this._detailsExpanded=!this._detailsExpanded,this.requestUpdate()}render(){return userFeedbackTemplate(this)}}__decorateClass$j([n({type:String})],UserFeedback.prototype,"imageSrc");__decorateClass$j([n({type:String})],UserFeedback.prototype,"imageAlt");__decorateClass$j([n({type:String})],UserFeedback.prototype,"title");__decorateClass$j([n({type:String})],UserFeedback.prototype,"description");__decorateClass$j([n(booleanType)],UserFeedback.prototype,"hasDetails");__decorateClass$j([n({type:String})],UserFeedback.prototype,"detailsLabel");__decorateClass$j([n(booleanType)],UserFeedback.prototype,"hideFooter");const cardStyles=i$2`
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
`;var __defProp$i=Object.defineProperty,__decorateClass$i=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$i(a,l,h),h};const dssIconButton$1=i`dss-icon-button${s(getCustomElementSuffix())}`;class Card extends r$1{constructor(){super(...arguments),this.selected=!1,this.dragged=!1,this.deleted=!1,this.disabled=!1,this.hasClose=!1,this.hasDetails=!1}static get styles(){return[r$2(resetStyles),r$2(iconStyles),cardStyles]}_propagateProperties(){var l;const a=(l=this.shadowRoot)==null?void 0:l.querySelectorAll("slot");a&&a.forEach(_=>{_.assignedElements().forEach(b=>{this.deleted?b.setAttribute("deleted","true"):b.removeAttribute("deleted"),this.disabled?b.setAttribute("disabled","true"):b.removeAttribute("disabled")})})}_dispatchClose(){this.dispatchEvent(new CustomEvent("onClose",{bubbles:!0}))}updated(a){super.updated(a),(a.has("deleted")||a.has("disabled"))&&this._propagateProperties()}render(){const a={"dss-card--selected":this.selected,"dss-card--dragged":this.dragged,"dss-card--deleted":this.deleted,"dss-card--disabled":this.disabled};return u$1`
      <div class="dss-card ${e$1(a)}" tabindex="0">
        ${this.hasClose||this.hasDetails?u$1`
              <div class="dss-card-top">
                <div class="dss-card-top__details">
                  <slot name="tags"></slot>
                  <slot name="info"></slot>
                </div>
                ${this.hasClose?u$1`
                      <div class="dss-card-top__close">
												<${dssIconButton$1}
													size="md"
													label="Tancar"
													icon="close"
													variant="default"
													?disabled=${this.disabled}
													@onClick=${this._dispatchClose}
												></${dssIconButton$1}>
                      </div>
                    `:u$1``}
              </div>
            `:u$1``}

        <slot name="header"></slot>
        <slot name="form"></slot>
        <slot name="image"></slot>
        <slot name="body"></slot>
        <slot name="highlights"></slot>
        <slot name="footer"></slot>
      </div>
    `}}__decorateClass$i([n(booleanType)],Card.prototype,"selected");__decorateClass$i([n(booleanType)],Card.prototype,"dragged");__decorateClass$i([n(booleanType)],Card.prototype,"deleted");__decorateClass$i([n(booleanType)],Card.prototype,"disabled");__decorateClass$i([n(booleanType)],Card.prototype,"hasClose");__decorateClass$i([n(booleanType)],Card.prototype,"hasDetails");var __defProp$h=Object.defineProperty,__decorateClass$h=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$h(a,l,h),h};class CardBody extends r$1{constructor(){super(...arguments),this.deleted=!1,this.disabled=!1}static get styles(){return[r$2(iconStyles),i$2`
        :host {
          display: flex;
          flex-direction: column;
          gap: var(--dss-spacing-xxs);
        }
      `]}_propagateProperties(){var l;const a=(l=this.shadowRoot)==null?void 0:l.querySelectorAll("slot");a&&a.forEach(_=>{_.assignedElements().forEach(b=>{this.deleted?b.setAttribute("deleted","true"):b.removeAttribute("deleted"),this.disabled?b.setAttribute("disabled","true"):b.removeAttribute("disabled")})})}updated(a){super.updated(a),(a.has("deleted")||a.has("disabled"))&&this._propagateProperties()}render(){return x` <slot></slot> `}}__decorateClass$h([n(booleanType)],CardBody.prototype,"deleted");__decorateClass$h([n(booleanType)],CardBody.prototype,"disabled");var __defProp$g=Object.defineProperty,__decorateClass$g=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$g(a,l,h),h};class CardDescription extends r$1{constructor(){super(...arguments),this.deleted=!1,this.disabled=!1}static get styles(){return[r$2(resetStyles),i$2`
        .dss-card-description {
          font-size: 14px;
          line-height: 24px;
          color: var(--color-neutral-600);
        }

        .dss-card-description.deleted {
          color: var(--color-red-500);
        }
      `]}render(){const a={deleted:this.deleted,disabled:this.disabled};return x`
      <p class="dss-card-description ${e$1(a)}">
        <slot></slot>
      </p>
    `}}__decorateClass$g([n(booleanType)],CardDescription.prototype,"deleted");__decorateClass$g([n(booleanType)],CardDescription.prototype,"disabled");var __defProp$f=Object.defineProperty,__decorateClass$f=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$f(a,l,h),h};class CardFooter extends r$1{constructor(){super(...arguments),this.deleted=!1,this.disabled=!1}static get styles(){return i$2`
      :host {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        gap: var(--dss-spacing-sm);
        padding-top: var(--dss-spacing-sm) !important;
        border-top: var(--dss-border-width-sm) solid var(--color-neutral-50);
      }
    `}get _footerContent(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector("slot"))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()}_propagateProperties(){if(this._footerContent)for(const a of this._footerContent)this.disabled?a.setAttribute("disabled","true"):a.removeAttribute("disabled"),this.deleted?a.classList.contains("dss-button--primary")&&(a.classList.remove("dss-button--primary"),a.classList.add("dss-button--error")):a.classList.contains("dss-button--error")&&(a.classList.add("dss-button--primary"),a.classList.remove("dss-button--error"))}updated(a){super.updated(a),(a.has("deleted")||a.has("disabled"))&&this._propagateProperties()}render(){return x` <slot></slot> `}}__decorateClass$f([n(booleanType)],CardFooter.prototype,"deleted");__decorateClass$f([n(booleanType)],CardFooter.prototype,"disabled");var __defProp$e=Object.defineProperty,__decorateClass$e=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$e(a,l,h),h};class CardForm extends r$1{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[r$2(iconStyles),i$2`
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
      `]}get _formContent(){var l;const a=((l=this.shadowRoot)==null?void 0:l.querySelector("slot"))||void 0;return this.requestUpdate(),a==null?void 0:a.assignedElements()}_propagateProperties(){if(this._formContent)for(const a of this._formContent)a.querySelectorAll("input").forEach(_=>{this.disabled?_.setAttribute("disabled","true"):_.removeAttribute("disabled")})}updated(a){super.updated(a),a.has("disabled")&&this._propagateProperties()}render(){return x` <slot></slot> `}}__decorateClass$e([n(booleanType)],CardForm.prototype,"disabled");var __defProp$d=Object.defineProperty,__decorateClass$d=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$d(a,l,h),h};const dssIcon$3=i`dss-icon${s(getCustomElementSuffix())}`;class CardHeader extends r$1{constructor(){super(...arguments),this.flag=!1,this.hasMenu=!1,this.deleted=!1,this.disabled=!1}static get styles(){return[r$2(resetStyles),r$2(iconStyles),i$2`
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
      `]}_propagateProperties(){var l;const a=(l=this.shadowRoot)==null?void 0:l.querySelectorAll("slot");a&&a.forEach(_=>{_.assignedElements().forEach(b=>{this.deleted?b.setAttribute("deleted","true"):b.removeAttribute("deleted"),this.disabled?b.setAttribute("disabled","true"):b.removeAttribute("disabled")})})}updated(a){super.updated(a),(a.has("deleted")||a.has("disabled"))&&this._propagateProperties()}render(){const a={deleted:this.deleted,disabled:this.disabled};return u$1`
      <div class="dss-card-header">
        <div class="dss-card-header-title ${e$1(a)}">
          <slot name="title"></slot>
        </div>
        ${this.flag||this.hasMenu?u$1`
              <div class="dss-card-header-actions">
                ${this.flag?u$1`<${dssIcon$3} icon="flag" size="md" fill class="dss-card-header-actions__flag"></${dssIcon$3}>`:""}
                ${this.hasMenu?u$1` <slot name="menu"></slot> `:u$1``}
              </div>
            `:u$1``}
      </div>
    `}}__decorateClass$d([n(booleanType)],CardHeader.prototype,"flag");__decorateClass$d([n(booleanType)],CardHeader.prototype,"hasMenu");__decorateClass$d([n(booleanType)],CardHeader.prototype,"deleted");__decorateClass$d([n(booleanType)],CardHeader.prototype,"disabled");var __defProp$c=Object.defineProperty,__decorateClass$c=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$c(a,l,h),h};class CardHighlights extends r$1{constructor(){super(...arguments),this.deleted=!1,this.disabled=!1}static get styles(){return i$2`
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
        gap: var(--dss-spacing-sm);
      }
    `}_propagateProperties(){var l;const a=(l=this.shadowRoot)==null?void 0:l.querySelectorAll("slot");a&&a.forEach(_=>{_.assignedElements().forEach(b=>{this.deleted?b.setAttribute("deleted","true"):b.removeAttribute("deleted"),this.disabled?b.setAttribute("disabled","true"):b.removeAttribute("disabled")})})}updated(a){super.updated(a),(a.has("deleted")||a.has("disabled"))&&this._propagateProperties()}render(){return x` <slot></slot> `}}__decorateClass$c([n(booleanType)],CardHighlights.prototype,"deleted");__decorateClass$c([n(booleanType)],CardHighlights.prototype,"disabled");var __defProp$b=Object.defineProperty,__decorateClass$b=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$b(a,l,h),h};const dssIcon$2=i`dss-icon${s(getCustomElementSuffix())}`;class CardHighlightsItem extends r$1{constructor(){super(...arguments),this.deleted=!1,this.disabled=!1,this.icon="",this.title="Title",this.text="Item"}static get styles(){return[r$2(resetStyles),r$2(iconStyles),i$2`
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
      `]}render(){const a={deleted:this.deleted,disabled:this.disabled};return u$1`
      <div class="dss-card-highligth ${e$1(a)}">
        <h5 class="dss-card-highligth__title">${this.title}</h5>
        <p class="dss-card-highligth__item">
          ${this.icon?u$1`
            <${dssIcon$2} size="sm" icon="${this.icon}"></${dssIcon$2}>
            `:""}
          ${this.text}
        </p>
      </div>
    `}}__decorateClass$b([n(booleanType)],CardHighlightsItem.prototype,"deleted");__decorateClass$b([n(booleanType)],CardHighlightsItem.prototype,"disabled");__decorateClass$b([n({type:String})],CardHighlightsItem.prototype,"icon");__decorateClass$b([n({type:String})],CardHighlightsItem.prototype,"title");__decorateClass$b([n({type:String})],CardHighlightsItem.prototype,"text");var __defProp$a=Object.defineProperty,__decorateClass$a=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$a(a,l,h),h};class CardImage extends r$1{constructor(){super(...arguments),this.source="",this.alt=""}static get styles(){return[i$2`
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
      `]}render(){return x` <img src="${this.source}" alt="${this.alt}" /> `}}__decorateClass$a([n({type:String})],CardImage.prototype,"source");__decorateClass$a([n({type:String})],CardImage.prototype,"alt");class CardInfo extends r$1{static get styles(){return i$2`
      :host {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        gap: var(--dss-spacing-sm);
        flex-wrap: wrap;
        min-width: 150px;
      }
    `}render(){return x` <slot></slot> `}}var __defProp$9=Object.defineProperty,__decorateClass$9=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$9(a,l,h),h};const dssIcon$1=i`dss-icon${s(getCustomElementSuffix())}`;class CardInfoItem extends r$1{constructor(){super(...arguments),this.icon="add_box",this.text="Info",this.critic=!1}static get styles(){return[r$2(iconStyles),i$2`
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
      `]}render(){const a={"info--critic":this.critic};return u$1`
      <div class="info ${e$1(a)}">
        ${this.icon?u$1`
           <${dssIcon$1} size="sm" icon="${this.icon}"></${dssIcon$1}>
          `:""}
        <span>${this.text}</span>
      </div>
    `}}__decorateClass$9([n({type:String})],CardInfoItem.prototype,"icon");__decorateClass$9([n({type:String})],CardInfoItem.prototype,"text");__decorateClass$9([n(booleanType)],CardInfoItem.prototype,"critic");var __defProp$8=Object.defineProperty,__decorateClass$8=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$8(a,l,h),h};const dssIconButton=i`dss-icon-button${s(getCustomElementSuffix())}`;class CardMenu extends r$1{constructor(){super(...arguments),this.position="right",this.disabled=!1}static get styles(){return[r$2(resetStyles),r$2(iconStyles),r$2(iconButtonStyles),i$2`
        :host {
          display: block;
        }
      `]}render(){return u$1`
      <div class="dss-card-menu">
				<${dssIconButton}
					size="md"
					label="Menú"
					icon="more_vert"
					variant="primary"
					?disabled=${this.disabled}
				></${dssIconButton}>
				<slot></slot>
      </div>
    `}}__decorateClass$8([n({type:String})],CardMenu.prototype,"position");__decorateClass$8([n(booleanType)],CardMenu.prototype,"disabled");var __defProp$7=Object.defineProperty,__decorateClass$7=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$7(a,l,h),h};const dssIcon=i`dss-icon${s(getCustomElementSuffix())}`;class CardSubitle extends r$1{constructor(){super(...arguments),this.deleted=!1,this.disabled=!1,this.hasLink=!1,this.hasIcon=!1,this.linkHref="#",this.icon="add_box"}static get styles(){return[r$2(resetStyles),r$2(iconStyles),i$2`
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
      `]}render(){const a={deleted:this.deleted,disabled:this.disabled};return u$1`
      <h4 class="dss-card-subtitle ${e$1(a)}">
        ${this.hasIcon?u$1`
          <${dssIcon} size="sm" icon="${this.icon}"></${dssIcon}>
          `:null}
        ${this.hasLink?u$1`
              <a class="dss-card-subtitle__link" href="${this.linkHref}">
                <slot></slot>
              </a>
            `:u$1` <slot></slot> `}
      </h4>
    `}}__decorateClass$7([n(booleanType)],CardSubitle.prototype,"deleted");__decorateClass$7([n(booleanType)],CardSubitle.prototype,"disabled");__decorateClass$7([n(booleanType)],CardSubitle.prototype,"hasLink");__decorateClass$7([n(booleanType)],CardSubitle.prototype,"hasIcon");__decorateClass$7([n({type:String})],CardSubitle.prototype,"linkHref");__decorateClass$7([n({type:String})],CardSubitle.prototype,"icon");class CardTags extends r$1{static get styles(){return i$2`
      :host {
        display: flex;
        align-items: center;
        width: 100%;
        gap: var(--dss-spacing-xxs);
        flex-wrap: wrap;
        min-width: 150px;
      }
    `}render(){return x` <slot></slot> `}}var __defProp$6=Object.defineProperty,__decorateClass$6=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$6(a,l,h),h};class CardTitle extends r$1{constructor(){super(...arguments),this.deleted=!1,this.disabled=!1}static get styles(){return[r$2(resetStyles),i$2`
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
      `]}render(){const a={deleted:this.deleted,disabled:this.disabled};return x`
      <h3 class="dss-card-title ${e$1(a)}">
        <slot></slot>
      </h3>
    `}}__decorateClass$6([n(booleanType)],CardTitle.prototype,"deleted");__decorateClass$6([n(booleanType)],CardTitle.prototype,"disabled");const styles=".dss-predefined-texts-wrapper{display:flex;flex-direction:column;gap:var(--dss-spacing-md);flex:1;max-height:100%;overflow-y:auto}.dss-predefined-texts-switcher{padding-left:var(--dss-spacing-lg);padding-right:var(--dss-spacing-lg)}.dss-predefined-texts-content{flex:1;max-height:100%;overflow-y:hidden;display:flex;gap:var(--dss-spacing-md);padding-left:var(--dss-spacing-lg);padding-right:var(--dss-spacing-lg);border-top:var(--dss-border-width-sm) solid var(--color-white)}.dss-predefined-texts-content--scrolled-top{border-top-color:var(--color-neutral-100)}.dss-predefined-texts-content--scrolled-bottom{border-bottom:var(--dss-border-width-sm) solid var(--color-neutral-100)}.dss-predefined-texts-options{width:260px;max-height:100%;overflow-y:auto;display:flex;flex-direction:column;gap:var(--dss-spacing-xs);padding-top:var(--dss-spacing-xxs)}.dss-predefined-texts-value{flex:1;padding-top:var(--dss-spacing-xxs);max-height:100%;overflow-y:auto}.dss-predefined-texts-content--scrolled-top .dss-predefined-texts-options,.dss-predefined-texts-content--scrolled-bottom .dss-predefined-texts-options{padding-right:var(--dss-spacing-tiny)}",dssModal=i`dss-modal${s(getCustomElementSuffix())}`,dssContentSwitcher=i`dss-content-switcher${s(getCustomElementSuffix())}`,dssTile=i`dss-tile${s(getCustomElementSuffix())}`,dssTextarea=i`dss-textarea${s(getCustomElementSuffix())}`,dssButton=i`dss-button${s(getCustomElementSuffix())}`,template=d=>u$1`

  <${dssModal} 
    modalTitle="${d.title}" 
    ?open=${d.open}
    hideCloseIcon
    hasScroll
    fullHeight
    fullWidth
    flexBody
    removeBodyPadding
    @onModalClosed=${d._onClose}>
    
    <div slot="body" class="dss-predefined-texts-wrapper">

      <div class="dss-predefined-texts-switcher">
        <${dssContentSwitcher}
        size="lg"
        .tabs="${d._categories}"
        @onChange=${d._handleTabChange}
        ></${dssContentSwitcher}>
      </div>

      <div class="dss-predefined-texts-content">

        <div class="dss-predefined-texts-options">

          ${c(d.items.filter(a=>a.category===d._currentCategory),a=>u$1`
              <${dssTile} 
                type="selector" 
                tiletitle="${a.title}" 
                description="${a.text}"
                selected=${a.text===d._selectedText}
                @onTileClick=${()=>d._onSelectText(a.text)}
              >
              </${dssTile} >
          `)}
      
        </div>

        <div class="dss-predefined-texts-value">

          <${dssTextarea} autoHeight>
            <textarea 
              aria-label="Text seleccionat" 
              slot="textarea" 
              disabled>${d._selectedText}</textarea>
            <span slot="description">${d.descriptionLabel}</span>
          </${dssTextarea}>

        </div>
      </div>
    </div>
    <div class="dss-modal-footer" slot="footer">
      <${dssButton} 
        variant="secondary" 
        size="lg" 
        label="${d.buttonLabelCancel}"
        @onClick=${d._handleCancel}
      ></${dssButton}>
      <${dssButton} 
        size="lg" 
        label="${d.buttonLabelSelect}"
        @onClick=${d._handleSelect}
      ></${dssButton}>
    </div>
  </${dssModal}>


`;var __defProp$5=Object.defineProperty,__decorateClass$5=(d,a,l,_)=>{for(var h=void 0,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$5(a,l,h),h};class PresetTexts extends r$1{constructor(){super(...arguments),this.title="Textos predefinits",this.buttonLabelCancel="Cancel-lar",this.buttonLabelSelect="Seleccionar text",this.descriptionLabel="Des del centre de configuració pots editar o eliminar aquest text.",this.items=[],this.open=!1,this._categories=[],this._currentCategory="",this._selectedText="",this._isFirstUpdate=!0}static get styles(){return[r$2(resetStyles),r$2(scrollStyles),r$2(styles)]}_handleTabChange(a){this._currentCategory=a.detail,this._getDefaultSelectedText(this._currentCategory),this.requestUpdate(),setTimeout(()=>{this._handleScroll()},500)}_handleCancel(){this._onClose()}_handleSelect(){this._onClose(),this._dispatchSelectText()}_onClose(){this.open=!1,this.requestUpdate();const a=new Event("onPredefinedTextsClosed");this.dispatchEvent(a)}_onSelectText(a){this._selectedText=a,this.requestUpdate()}_dispatchSelectText(){const a={detail:this._selectedText,bubbles:!1,composed:!1};this.dispatchEvent(new CustomEvent("onTextSelected",a))}_setCategories(){const a=Array.from(new Set(this.items.map(l=>l.category)));this._categories=a.map(l=>({label:l})),this._isFirstUpdate&&(this._categories[0].selected=!0,this._currentCategory=this._categories[0].label,this._getDefaultSelectedText(this._currentCategory)),this.requestUpdate()}_getDefaultSelectedText(a){const l=this.items.filter(_=>_.category===a);this._selectedText=l[0].text||""}_checkScroll(){var _,h;const a=(_=this.shadowRoot)==null?void 0:_.querySelector(".dss-predefined-texts-content"),l=(h=this.shadowRoot)==null?void 0:h.querySelector(".dss-predefined-texts-options");!a||!l||(l.scrollHeight>l.clientHeight&&a.classList.add("dss-predefined-texts-content--scrolled-bottom"),l.addEventListener("scroll",this._handleScroll.bind(this)))}_handleScroll(){var _,h;const a=(_=this.shadowRoot)==null?void 0:_.querySelector(".dss-predefined-texts-content"),l=(h=this.shadowRoot)==null?void 0:h.querySelector(".dss-predefined-texts-options");!a||!l||(l.scrollHeight<=l.clientHeight&&(a.classList.remove("dss-predefined-texts-content--scrolled-top"),a.classList.remove("dss-predefined-texts-content--scrolled-bottom")),l.scrollTop>0?a.classList.add("dss-predefined-texts-content--scrolled-top"):a.classList.remove("dss-predefined-texts-content--scrolled-top"),l.scrollHeight-l.scrollTop!==l.clientHeight?a.classList.add("dss-predefined-texts-content--scrolled-bottom"):a.classList.remove("dss-predefined-texts-content--scrolled-bottom"))}async firstUpdated(){await this.updateComplete,this.items&&(this._checkScroll(),this._setCategories(),this._isFirstUpdate=!1)}willUpdate(a){a.has("items")&&this._setCategories()}render(){return template(this)}}__decorateClass$5([n({type:String})],PresetTexts.prototype,"title");__decorateClass$5([n({type:String})],PresetTexts.prototype,"buttonLabelCancel");__decorateClass$5([n({type:String})],PresetTexts.prototype,"buttonLabelSelect");__decorateClass$5([n({type:String})],PresetTexts.prototype,"descriptionLabel");__decorateClass$5([n({type:Array})],PresetTexts.prototype,"items");__decorateClass$5([n(booleanType)],PresetTexts.prototype,"open");var __defProp$4=Object.defineProperty,__getOwnPropDesc$4=Object.getOwnPropertyDescriptor,__decorateClass$4=(d,a,l,_)=>{for(var h=__getOwnPropDesc$4(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$4(a,l,h),h};const j=class j extends r$1{constructor(){super(...arguments),this._value="",this._label="",this._placeHolder="",this._previousDate="",this._minDate="",this._maxDate="",this._showCalendar=!1,this._showTime=!1,this._invalid=!1,this._showButtons=!1,this._required=!1,this._disabled=!1,this._readonly=!1,this._leftLabel="Cancel·lar",this._rightLabel="Acceptar",this._isFocused=!1,this._internals=this.attachInternals()}static get styles(){return i$2`
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
    `}get _input(){var a;return(a=this.shadowRoot)==null?void 0:a.querySelector("input")}set value(a){const l=this._value;this._value=a,this._input&&(this._input.value=a),this.requestUpdate("value",l)}set label(a){const l=this._label;this._label=a,this.requestUpdate("label",l)}get label(){return this._label}set placeHolder(a){const l=this._placeHolder;this._placeHolder=a,this.requestUpdate("placeHolder",l)}get placeHolder(){return this._placeHolder}set required(a){const l=this._required;this._required=a,this.requestUpdate("required",l)}get required(){return this._required}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set readonly(a){const l=this._readonly;this._readonly=a,this.requestUpdate("readonly",l)}get readonly(){return this._readonly}set showTime(a){const l=this._showTime;this._showTime=a,this.requestUpdate("showTime",l)}get showTime(){return this._showTime}set showButtons(a){const l=this._showButtons;this._showButtons=a,this.requestUpdate("showButtons",l)}get showButtons(){return this._showButtons}set leftLabel(a){const l=this._leftLabel;this._leftLabel=a,this.requestUpdate("leftLabel",l)}get leftLabel(){return this._leftLabel}set rightLabel(a){const l=this._rightLabel;this._rightLabel=a,this.requestUpdate("rightLabel",l)}get rightLabel(){return this._rightLabel}set minDate(a){const l=this._minDate;this._minDate=a,this.requestUpdate("minDate",l)}get minDate(){return this._minDate}set maxDate(a){const l=this._maxDate;this._maxDate=a,this.requestUpdate("maxDate",l)}get maxDate(){return this._maxDate}set invalid(a){const l=this._invalid;this._invalid=a,this.requestUpdate("invalid",l)}get invalid(){return this._invalid}get value(){let a="";return this._input?a=this._input.value:a=this._value,a}get form(){return this._internals.form}get name(){return this.getAttribute("name")}get type(){return this.localName}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._input.value="",this.requestUpdate()}async firstUpdated(){try{await this.updateComplete,this._value&&(this._input.value=this._value),this._closeDropdown(),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}_closeDropdown(){document.addEventListener("click",a=>{a.target!==this&&(this._showCalendar=!1,this._isFocused=!1,this.requestUpdate())}),document.addEventListener("focusout",a=>{a.target===this&&(this._showCalendar=!1,this._isFocused=!1,this.requestUpdate())})}_handleKeyUp(a){var l,_,h,b,g;if((a==null?void 0:a.key)==="Tab"?(this._isFocused=!0,this._handleBlur()):(a==null?void 0:a.key)==="Enter"||(a==null?void 0:a.key)===" "?(this._showCalendar=!0,this._handleBlur()):(a==null?void 0:a.key)==="Escape"&&(this._isFocused=!0,this._showCalendar=!1,this._handleBlur()),a.key==="Enter"&&((l=this._input.value)==null?void 0:l.length)>7){const f=(_=this._input.value)==null?void 0:_.replace(/(\d+[/])(\d+[/])/,"$2$1"),$=new Date(f),k=(h=$.getDate())==null?void 0:h.toString().padStart(2,"0"),D=($.getMonth()+1).toString().padStart(2,"0"),C=$.getFullYear(),w=(b=$.getHours())==null?void 0:b.toString().padStart(2,"0"),S=(g=$.getMinutes())==null?void 0:g.toString().padStart(2,"0");let I=`${k}/${D}/${C}`;this._showTime&&(I+=` ${w}:${S}`),this._input.value=I,this._dispatchValueChange(),this.requestUpdate()}}_handleInput(a){var _;const l=(_=a.target.value)==null?void 0:_.replace(/\D/g,"");this._input.value=this._formatDate(l),this._dispatchValueChange(),this.requestUpdate()}_formatDate(a){let l=a.substring(0,2),_=a.substring(2,4);const h=a.substring(4,8);let b=a.substring(8,10),g=a.substring(10,12);Number(l)>3&&(l=l==null?void 0:l.padStart(2,"0")),Number(_)>1&&(_=_==null?void 0:_.padStart(2,"0")),Number(l)>31&&(l="31"),Number(_)>12&&(_="12"),_==="02"&&Number(l)>28&&(h==null?void 0:h.length)===4&&(l=new Date(Number(h),1,29).getMonth()===1?"29":"28");let f=`${l}${_?`/${_}`:""}${h?`/${h}`:""}`;return this._showTime&&(Number(b)>2&&(b=b==null?void 0:b.padStart(2,"0")),Number(b)>23&&(b="23"),Number(g)>5&&(g=g==null?void 0:g.padStart(2,"0")),f=`${f}${b?` ${b}`:""}${g?`:${g}`:""}`),f}_handleFocus(){this._readonly||(this._placeHolder=this._showTime?"DD/MM/YYYY HH:MM":"DD/MM/YYYY",this.requestUpdate())}_handleBlur(){this.requestUpdate()}_handelLabelClick(){var a;(a=this._input)==null||a.focus(),this.requestUpdate()}_onDateChange(a){const l=a.detail;this._input.value=l,this._showCalendar=!1,this._dispatchValueChange(),this.requestUpdate()}_onCancel(){this._showCalendar=!1,this._input.value=this._previousDate||"",this.placeHolder="",this.requestUpdate()}_onclick(){var a,l;this._disabled||this._readonly||(this._showCalendar=!this._showCalendar,this._previousDate=this._input.value,this._showCalendar?(a=this._input)==null||a.focus():((l=this._input)==null||l.blur(),this._onCancel()),this.requestUpdate())}_dispatchValueChange(){const a={detail:this._input.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onValueChange",a))}render(){var _;const a={"dss-input--invalid":this._invalid,"dss-input--disabled":this._disabled},l={"dss-input__group--focused":((_=this._input)==null?void 0:_.value)||this._placeHolder||this._showCalendar||this._isFocused,"dss-input__group--required":this._required,"dss-input__group--active":this._showCalendar||this._isFocused};return x`
      <div
        class="dss-input ${e$1(a)}"
        @click=${this._onclick}
      >
        <div class="dss-input__group ${e$1(l)}">
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
              placeholder=${o$1(this._placeHolder)}
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
    `}};j.formAssociated=!0,j.shadowRootOptions={...r$1.shadowRootOptions,delegatesFocus:!0};let DatePicker=j;__decorateClass$4([n({type:String,attribute:!0})],DatePicker.prototype,"value");__decorateClass$4([n({type:String})],DatePicker.prototype,"label");__decorateClass$4([n({type:String})],DatePicker.prototype,"placeHolder");__decorateClass$4([n(booleanType)],DatePicker.prototype,"required");__decorateClass$4([n(booleanType)],DatePicker.prototype,"disabled");__decorateClass$4([n(booleanType)],DatePicker.prototype,"readonly");__decorateClass$4([n(booleanType)],DatePicker.prototype,"showTime");__decorateClass$4([n(booleanType)],DatePicker.prototype,"showButtons");__decorateClass$4([n({type:String})],DatePicker.prototype,"leftLabel");__decorateClass$4([n({type:String})],DatePicker.prototype,"rightLabel");__decorateClass$4([n({type:String})],DatePicker.prototype,"minDate");__decorateClass$4([n({type:String})],DatePicker.prototype,"maxDate");__decorateClass$4([n(booleanType)],DatePicker.prototype,"invalid");var __defProp$3=Object.defineProperty,__getOwnPropDesc$3=Object.getOwnPropertyDescriptor,__decorateClass$3=(d,a,l,_)=>{for(var h=__getOwnPropDesc$3(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$3(a,l,h),h};class DropDownList extends r$1{constructor(){super(...arguments),this._elements=null,this._copyElements=null,this._tick=!0,this._type="default",this._style=null,this._boxStyle=null,this._inputStyle=null,this._selectedValue=null,this._multiple=!1,this._openWithSearch=!1,this._deselectable=!1,this._icon="search",this._label="",this._placeHolder="",this._showSelector=!1,this._required=!1,this._disabled=!1,this._readonly=!1,this._labelSelectAll="Seleccionar-ho tot",this._labelDeselectAll="Deseleccionar-ho tot",this._selectAll=!1,this._selectElements=0,this._isFocused=!1,this._isGroupFocusedVisible=!1}static get styles(){return i$2`
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
    `}get _input(){var a;return(a=this.shadowRoot)==null?void 0:a.querySelector("input")}get _DSSinput(){var a;return(a=this.shadowRoot)==null?void 0:a.querySelector(".dss-input")}set icon(a){const l=this._icon;this._icon=a,this.requestUpdate("label",l)}get icon(){return this._icon}set label(a){const l=this._label;this._label=a,this.requestUpdate("label",l)}get label(){return this._label}set placeHolder(a){const l=this._placeHolder;this._placeHolder=a,this.requestUpdate("placeHolder",l)}get placeHolder(){return this._placeHolder}set required(a){const l=this._required;this._required=a,this.requestUpdate("required",l)}get required(){return this._required}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set readonly(a){const l=this._readonly;this._readonly=a,this.requestUpdate("readonly",l)}get readonly(){return this._readonly}set elements(a){const l=this._elements;this._elements=a,this.requestUpdate("elements",l)}get elements(){return this._elements||[]}set multiple(a){const l=this._multiple;this._multiple=a,this.requestUpdate("multiple",l)}get multiple(){return this._multiple}set openWithSearch(a){const l=this._openWithSearch;this._openWithSearch=a,this.requestUpdate("openWithSearch",l)}get openWithSearch(){return this._openWithSearch}set tick(a){const l=this._tick;this._tick=a,this.requestUpdate("tick",l)}get tick(){return this._tick}set deselectable(a){const l=this._deselectable;this._deselectable=a,this.requestUpdate("deselectable",l)}get deselectable(){return this._deselectable}set selectedValue(a){const l=this._selectedValue;this._selectedValue=a,this.requestUpdate("selectedValue",l)}get selectedValue(){return this._selectedValue||[]}set type(a){const l=this._type;a==="default"||a==="green"?this._type=a:this._type="default",this.requestUpdate("type",l)}get type(){return this._type}set boxStyle(a){const l=this._boxStyle;this._boxStyle=a,this.requestUpdate("boxStyle",l)}get boxStyle(){return this._boxStyle||""}set inputStyle(a){const l=this._inputStyle;this._inputStyle=a,this._inputStyle=`${this._inputStyle} box-sizing: border-box;`,this.requestUpdate("inputStyle",l)}get inputStyle(){return this._inputStyle||""}set labelSelectAll(a){const l=this._labelSelectAll;a!==""&&(this._labelSelectAll=a),this.requestUpdate("labelSelectAll",l)}get labelSelectAll(){return this._labelSelectAll}set labelDeselectAll(a){const l=this._labelDeselectAll;a!==""&&(this._labelDeselectAll=a),this.requestUpdate("labelDeselectAll",l)}get labelDeselectAll(){return this._labelDeselectAll}set SelectAll(a){const l=this._selectAll;this._selectAll=a,this.requestUpdate("selectAll",l)}get SelectAll(){return this._selectAll}get _filteredElements(){var l;const a=this._input.value.toLowerCase();return(l=this._elements)==null?void 0:l.filter(_=>_.label.toLowerCase().includes(a))}get _showPlaceHolder(){return o$1(this._placeHolder)&&!this._showSelector?void 0:this._placeHolder}async firstUpdated(){try{await this.updateComplete,this._copyElements=JSON.parse(JSON.stringify(this._elements)),this._initElementsSelected(),!this._openWithSearch&&!this._disabled&&document.addEventListener("click",a=>{this._clickedOutsideDropdown(this,a)}),this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[]),this._openWithSearch&&this._onclick(!0),this.requestUpdate()}catch{console.error("ERROR OCURRED")}}_initElementsSelected(){this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[])}_clickedOutsideDropdown(a,l){a!==l.target&&(this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[]),this._showSelector=!1,this.requestUpdate())}_handleInput(){this.requestUpdate()}_handleFocus(){this._readonly||(this._isFocused=!0,this._isGroupFocusedVisible=!0,this.requestUpdate())}_handleBlurEsc(){this._readonly||this._openWithSearch||(this._isFocused=!0,this._showSelector=!1,this.requestUpdate())}_handleBlur(){this._isFocused=!1,this._isGroupFocusedVisible=!1,this.requestUpdate()}_handleBlurComponent(a,l){var _;if(a!==l.target){if(this._openWithSearch)return;(_=this._input)==null||_.focus(),this._handleBlurEsc(),this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[])}}_onCancel(){this._showSelector=!1,this._isFocused=!1,this.requestUpdate()}_cleanInput(){this._input.value="",this.requestUpdate()}_onclick(a,l){var h,b;a||(this._isFocused=!0);let _="";this._boxStyle&&(_+=this._boxStyle,_.endsWith(";")||(_+=";")),this._style=`${_} overflow: auto;${this._openWithSearch?"":"box-shadow: 0 1px 3px 0 #0000001a, 0 4px 8px 3px #0000000d;"}`,this._openWithSearch?this._showSelector=!0:this._handleKeyInput(l),this._showSelector?(this._input.value="",a||(h=this._input)==null||h.focus()):(this._showSelectValuesInInput(this._selectedValue?this._selectedValue:[]),(!l||l.key!=="Enter"&&l.key!==" "&&l.key!=="Escape")&&((b=this._input)==null||b.blur(),this._onCancel())),this.requestUpdate()}_handleKeyInput(a){(a==null?void 0:a.key)==="Enter"||(a==null?void 0:a.key)===" "?this._showSelector=!0:(a==null?void 0:a.key)==="Escape"?this._handleBlurEsc():this._showSelector=!this._showSelector}_dispatchValueChange(){if(this._input.value){const a={detail:this._input.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onValueChange",a))}}_onSelectorChanges(a){this._selectedValue=a.detail,this._dispatchValueChange(),!this._multiple&&!this._openWithSearch&&!this._disabled&&this._clickedOutsideDropdown(this,a),this.requestUpdate()}_showSelectValuesInInput(a){var h,b;!this._multiple&&Array.isArray(a)&&a.length>1&&a.splice(1);const l=(h=this._elements)==null?void 0:h.filter(g=>a.includes(g.value));if(this._elements=[...this._copyElements],this._openWithSearch?this._selectElements=0:this._selectElements=l!=null&&l.length?l.length:0,l&&l.length>0){const g=this._elements.filter(f=>l.includes(f));g.push(...this._elements.filter(f=>!l.includes(f))),this._elements=[...g]}if(!this._multiple){this._input.value=((b=l==null?void 0:l[0])==null?void 0:b.label)??"";return}const _=l==null?void 0:l.map(g=>g.label);this._input.value=(_==null?void 0:_.join(", "))??""}_evalueFocus(a){var l;((l=a.target)==null?void 0:l.id)!=="dss-dropdownlist"&&this._showSelector&&this._handleFocus()}_handleKeyup(a){(a.keyCode?a.keyCode:a.which)===9&&(this._isGroupFocusedVisible=!0,this._isFocused=!0,this._handelLabelClick())}_handelLabelClick(){var a;(a=this._input)==null||a.focus(),this.requestUpdate()}render(){var h,b,g,f;const a={"dss-input--disabled":this._disabled},l={"dss-selector":!this._openWithSearch,"dss-selector--disabled":this._disabled,"dss-selector-dropdown":!0},_={"dss-input__group--focused":((h=this._input)==null?void 0:h.value)||this._showPlaceHolder||this._showSelector,"dss-input__group--focused-visible":this._isGroupFocusedVisible,"dss-input__group--required":this._required,"dss-input__group--active":this._isFocused,"dss-input__group--readOnly":this._readonly,"dss-input__group--disabled":this._disabled};return x` <div
      id="previous-input"
      class="dss-input ${e$1(a)}"
      style=${o$1(this._inputStyle)}
    >
      <div
        class="dss-input__group ${e$1(_)}"
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
            @keydown="${$=>{($.key==="Enter"||$.key===" "||$.key==="Escape")&&this._onclick(!1,$)}}"
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
                ?disabled=${(g=this._input)==null?void 0:g.disabled}
                tabindex="-1"
              >
                <span>close</span>
              </button>
            `:x`
              <button
                type="button"
                class="dss-icon-button"
                @click=${this._onclick}
                ?disabled=${(b=this._input)==null?void 0:b.disabled}
                tabindex="-1"
              >
                <span
                  >${this._showSelector?"keyboard_arrow_up":"keyboard_arrow_down"}</span
                >
              </button>
            `}
      </div>
      ${this._showSelector&&this._filteredElements&&((f=this._filteredElements)==null?void 0:f.length)>0?x`
            <dss-selector
              class="${e$1(l)}"
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
              @keydown="${$=>{$.key==="Escape"&&this._handleBlurComponent(this,$)}}"
            >
            </dss-selector>
          `:null}
    </div>`}}__decorateClass$3([n({type:String})],DropDownList.prototype,"icon");__decorateClass$3([n({type:String})],DropDownList.prototype,"label");__decorateClass$3([n({type:String})],DropDownList.prototype,"placeHolder");__decorateClass$3([n(booleanType)],DropDownList.prototype,"required");__decorateClass$3([n(booleanType)],DropDownList.prototype,"disabled");__decorateClass$3([n(booleanType)],DropDownList.prototype,"readonly");__decorateClass$3([n({type:Array})],DropDownList.prototype,"elements");__decorateClass$3([n(booleanType)],DropDownList.prototype,"multiple");__decorateClass$3([n(booleanType)],DropDownList.prototype,"openWithSearch");__decorateClass$3([n(booleanType)],DropDownList.prototype,"tick");__decorateClass$3([n(booleanType)],DropDownList.prototype,"deselectable");__decorateClass$3([n({type:Array})],DropDownList.prototype,"selectedValue");__decorateClass$3([n({type:String})],DropDownList.prototype,"type");__decorateClass$3([n({type:String})],DropDownList.prototype,"boxStyle");__decorateClass$3([n({type:String})],DropDownList.prototype,"inputStyle");__decorateClass$3([n({type:String})],DropDownList.prototype,"labelSelectAll");__decorateClass$3([n({type:String})],DropDownList.prototype,"labelDeselectAll");__decorateClass$3([n(booleanType)],DropDownList.prototype,"SelectAll");var __defProp$2=Object.defineProperty,__getOwnPropDesc$2=Object.getOwnPropertyDescriptor,__decorateClass$2=(d,a,l,_)=>{for(var h=__getOwnPropDesc$2(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp$2(a,l,h),h};const INPUT_TYPE_NUMBER="number";class InputField extends r$1{constructor(){super(...arguments),this._type="text",this._value="",this._label="",this._description="",this._placeHolder="",this._icon="",this._maxLength=void 0,this._minLength=void 0,this._max=void 0,this._min=void 0,this._step=void 0,this._isInputFocused=!1,this._isGroupFocusedVisible=!1,this._isTypeNumeric=!1,this._clearable=!1,this._showError=!1,this._required=!1,this._disabled=!1,this._readonly=!1}static get styles(){return i$2`
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
    `}set value(a){const l=this._value;this._value=a,this.requestUpdate("value",l)}get value(){return this._value}set type(a){const l=this._type;this._type=a,this.requestUpdate("type",l)}get type(){return this._type}set label(a){const l=this._label;this._label=a,this.requestUpdate("label",l)}get label(){return this._label}set description(a){const l=this._description;this._description=a,this.requestUpdate("description",l)}get description(){return this._description}set placeHolder(a){const l=this._placeHolder;this._placeHolder=a,this.requestUpdate("placeHolder",l)}get placeHolder(){return this._placeHolder}set required(a){const l=this._required;this._required=a,this.requestUpdate("required",l)}get required(){return this._required}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set readonly(a){const l=this._readonly;this._readonly=a,this.requestUpdate("readonly",l)}get readonly(){return this._readonly}set icon(a){const l=this._icon;this._icon=a,this.requestUpdate("icon",l)}get icon(){return this._icon}set clearable(a){const l=this._clearable;this._clearable=a,this.requestUpdate("clearable",l)}get clearable(){return this._clearable}set showError(a){const l=this._showError;this._showError=a,this.requestUpdate("showError",l)}get showError(){return this._showError}set maxLength(a){const l=this._maxLength;this._maxLength=a,this.requestUpdate("maxLength",l)}get maxLength(){return this._maxLength||0}set minLength(a){const l=this._minLength;this._minLength=a,this.requestUpdate("minLength",l)}get minLength(){return this._minLength||0}set max(a){const l=this._max;this._max=a,this.requestUpdate("max",l)}get max(){return this._max||0}set min(a){const l=this._min;this._min=a,this.requestUpdate("min",l)}get min(){return this._min||0}set step(a){const l=this._step;this._step=a,this.requestUpdate("step",l)}get step(){return this._step||0}get _input(){var a;return(a=this.shadowRoot)==null?void 0:a.querySelector("input")}_handleInput(){this._dispatchValueChange(),this.requestUpdate()}_handleKeypress(a){a.keyCode<32&&a.preventDefault(),this._maxLength&&a.target.value.length>=this._maxLength&&a.preventDefault()}_handleKeyup(a){(a.keyCode?a.keyCode:a.which)===9&&(this._isGroupFocusedVisible=!0,this._isInputFocused=!0,this._handelLabelClick())}_handleFocus(){this._readonly||(this._isGroupFocusedVisible=!0,this._isInputFocused=!0,this.requestUpdate())}_handleFocusOut(){var a,l;this._handleBlur(),this._isGroupFocusedVisible=!1,this._isInputFocused=!1,((l=(a=this._input)==null?void 0:a.value)==null?void 0:l.length)===0&&(this._value="",this._input.value=this._value),this.requestUpdate()}_handleBlur(){this._isInputFocused=!1,this.requestUpdate()}_handelLabelClick(){var a;(a=this._input)==null||a.focus(),this.requestUpdate()}_cleanInput(){var a,l;(l=(a=this._input)==null?void 0:a.value)!=null&&l.length&&(this._value="",this._input.value=this._value),this._dispatchValueChange(),this.requestUpdate()}_stepUp(){var a,l;(a=this._input)==null||a.stepUp(),this._value=((l=this._input)==null?void 0:l.value)||"",this._dispatchValueChange(),this.requestUpdate()}_stepDown(){var a,l;(a=this._input)==null||a.stepDown(),this._value=((l=this._input)==null?void 0:l.value)||"",this._dispatchValueChange(),this.requestUpdate()}_dispatchValueChange(){var l,_;const a={detail:this._isTypeNumeric?Number((l=this._input)==null?void 0:l.value):(_=this._input)==null?void 0:_.value,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onValueChange",a))}async firstUpdated(){try{await this.updateComplete,this._isTypeNumeric=this._type===INPUT_TYPE_NUMBER,this.requestUpdate()}catch{console.error("ERROR OCURRED")}}render(){var _,h,b,g,f,$;const a={"dss-input--invalid":this._showError,"dss-input--disabled":this._disabled,"dss-input--gap":this._maxLength||!!this._description},l={"dss-input__group--focused":((_=this._input)==null?void 0:_.value)||this._isInputFocused||this._placeHolder,"dss-input__group--focused-visible":this._isGroupFocusedVisible,"dss-input__group--required":this._required,"dss-input__group--readOnly":this._readonly,"dss-input__group--numeric":this._isTypeNumeric,"dss-input__group--icon":this._clearable};return x`
      <div class="dss-input ${e$1(a)}">
        <div
          class="dss-input__group ${e$1(l)}"
          tabindex="0"
          @keyup=${this._handleKeyup}
        >
          ${this._icon?x`<span class="dss-input__icon">${this._icon}</span>`:null}
          <div class="dss-input__content">
            <label @mouseup=${this._handelLabelClick}>${this._label}</label>
            <input
              .value=${this._value}
              placeholder=${o$1(this._placeHolder)}
              maxlength=${o$1(this._maxLength)}
              minlength=${o$1(this._minLength)}
              min=${o$1(this._min)}
              max=${o$1(this._max)}
              step=${o$1(this._step)}
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
                  ?disabled=${(h=this._input)==null?void 0:h.disabled}
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
                    ?disabled=${(b=this._input)==null?void 0:b.disabled}
                    tabindex="-1"
                  >
                    <span>keyboard_arrow_up</span>
                  </button>
                  <button
                    type="button"
                    class="dss-icon-button"
                    @click=${this._stepDown}
                    ?disabled=${(g=this._input)==null?void 0:g.disabled}
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
                ${($=(f=this._input)==null?void 0:f.value)==null?void 0:$.length}/${this._maxLength}
              </span>`:null}
        </div>
      </div>
    `}}__decorateClass$2([n({type:String})],InputField.prototype,"value");__decorateClass$2([n({type:String})],InputField.prototype,"type");__decorateClass$2([n({type:String})],InputField.prototype,"label");__decorateClass$2([n({type:String})],InputField.prototype,"description");__decorateClass$2([n({type:String})],InputField.prototype,"placeHolder");__decorateClass$2([n(booleanType)],InputField.prototype,"required");__decorateClass$2([n(booleanType)],InputField.prototype,"disabled");__decorateClass$2([n(booleanType)],InputField.prototype,"readonly");__decorateClass$2([n({type:String})],InputField.prototype,"icon");__decorateClass$2([n(booleanType)],InputField.prototype,"clearable");__decorateClass$2([n(booleanType)],InputField.prototype,"showError");__decorateClass$2([n({type:Number})],InputField.prototype,"maxLength");__decorateClass$2([n({type:Number})],InputField.prototype,"minLength");__decorateClass$2([n({type:Number})],InputField.prototype,"max");__decorateClass$2([n({type:Number})],InputField.prototype,"min");__decorateClass$2([n({type:Number})],InputField.prototype,"step");var __defProp$1=Object.defineProperty,__getOwnPropDesc$1=Object.getOwnPropertyDescriptor,__decorateClass$1=(d,a,l,_)=>{for(var h=_>1?void 0:_?__getOwnPropDesc$1(a,l):a,b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=(_?g(a,l,h):g(h))||h);return _&&h&&__defProp$1(a,l,h),h};class Switch extends r$1{constructor(){super(...arguments),this.ariaLabel="Switch",this._checked=!1,this._disabled=!1,this._label=null,this._size="md"}static get styles(){return i$2`
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
    `}set checked(a){const l=this._checked;this._checked=a,this.requestUpdate("checked",l)}get checked(){return this._checked}set disabled(a){const l=this._disabled;this._disabled=a,this.requestUpdate("disabled",l)}get disabled(){return this._disabled}set label(a){const l=this._label;this._label=a,this.requestUpdate("label",l)}get label(){return this._label||""}set size(a){const l=this._size;this._size=a,this.requestUpdate("size",l)}get size(){return this._size}handleClick(){this._checked=!this._checked,this.dispatchEvent(new CustomEvent("onChangeValue",{detail:this._checked,bubbles:!0,composed:!0}))}render(){const a={"dss-switch--sm":this._size==="sm","dss-switch--md":this._size==="md","dss-switch--lg":this._size==="lg","dss-switch--disabled":this._disabled};return x`
      <label class="dss-switch ${e$1(a)}">
        <input
          type="checkbox"
          ?checked="${this._checked}"
          ?disabled="${this._disabled}"
          @click="${this.handleClick}"
          aria-label="${this._label?this._label:this.ariaLabel}"
        />
        <div class="dss-switch__slider"></div>
      </label>
      ${this._label?x`<span class="dss-switch__label">${this._label}</span>`:null}
    `}}__decorateClass$1([n(booleanType)],Switch.prototype,"checked",1);__decorateClass$1([n(booleanType)],Switch.prototype,"disabled",1);__decorateClass$1([n({type:String})],Switch.prototype,"label",1);__decorateClass$1([n({type:String})],Switch.prototype,"size",1);__decorateClass$1([n({type:String})],Switch.prototype,"ariaLabel",2);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(d,a,l,_)=>{for(var h=__getOwnPropDesc(a,l),b=d.length-1,g;b>=0;b--)(g=d[b])&&(h=g(a,l,h)||h);return h&&__defProp(a,l,h),h};class Table extends r$1{constructor(){super(...arguments),this._valueMaxLength=60,this._data=[],this._customData=void 0,this._pipeData=[],this._customTableHeader=void 0,this._filters=[],this._tableHeader=[],this._tableHeaderSort={},this._hasPaginator=!1,this._currentIndex=1,this._pageSize=10,this._pageSizeOptions="[5,10,20]",this._resultstext="Resultats",this._rowsperpagetext="Files per pàgina",this._textAlign="left",this._headerTitle="",this._hideHeader=!1,this._hideColumnHeader=!1,this._innerFilters=!1,this._expandTable=!1,this._expandLabel="Ampliar",this._collapseLabel="Reduir",this._rowsOnCollapsed=5,this._filtersLabel="Selecció",this._cleanFiltersLabel="Netejar filtres",this._openFiltersLabel="Filtres",this._selectedRowsLabel="files seleccionades",this._selectAllRows=!0,this._noFiltersLabel="No hi ha filtres seleccionats",this._footerButtons=3,this._maxContentWidth=!1,this._stickyColumns=!1,this._multiselect=!1,this._radioselect=!1,this._hasRowButton=!1,this._rowButtonLabel="Button",this._hasRowActions=!1,this._rowActionsIcons=["add_box","add_box","add_box"],this._footerButtonPrimaryLabel="Primary",this._footerButtonSecondaryLabel="Secondary",this._footerButtonAlternativeLabel="Alternative",this._enableRowActionsOnDeleted=!1,this._enableRowActionsOnDisabled=!1,this._currentSortColumn="",this._currentSortType="",this._copyPipeData=[],this._isFirstUpdate=!0}static get styles(){return[r$2(iconStyles),r$2(buttonStyles),r$2(iconButtonStyles),r$2(chipStyles),r$2(checkboxStyles),r$2(radioStyles),i$2`
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
      `,r$2(badgeStates)]}set hasPaginator(a){const l=this._hasPaginator;this._hasPaginator=a,this.requestUpdate("hasPaginator",l)}get hasPaginator(){return this._hasPaginator}set data(a){const l=this._data;this._data=a,this._createTableHeader(a),this._pipeData=this._data,this._copyPipeData=[...this._data],this.requestUpdate("data",l)}get data(){return this._data}set customData(a){const l=this._customData;this._customData=a,this._createTableHeader(a),this._pipeData=this._customData,this._copyPipeData=[...this._customData],this.requestUpdate("data",l)}get customData(){return this._customData||[]}set customTableHeader(a){const l=this._customTableHeader;this._customTableHeader=a,this.requestUpdate("customTableHeader",l)}get customTableHeader(){return this._customTableHeader||[]}set filters(a){const l=this._filters;this._filters=a,this.requestUpdate("filters",l)}get filters(){return this._filters}set currentIndex(a){const l=this._currentIndex;this._currentIndex=a,this.requestUpdate("currentIndex",l)}get currentIndex(){return this._currentIndex}set pageSize(a){const l=this._pageSize;this._pageSize=a,this.requestUpdate("pageSize",l)}get pageSize(){return this._pageSize}set pageSizeOptions(a){const l=this._pageSizeOptions;this._pageSizeOptions=a,this.requestUpdate("pageSizeOptions",l)}get pageSizeOptions(){return this._pageSizeOptions}set resultstext(a){const l=this._resultstext;this._resultstext=a,this.requestUpdate("resultstext",l)}get resultstext(){return this._resultstext}set rowsperpagetext(a){const l=this._rowsperpagetext;this._rowsperpagetext=a,this.requestUpdate("rowsperpagetext",l)}get rowsperpagetext(){return this._rowsperpagetext}set textAlign(a){const l=this._textAlign;this._textAlign=a,this.requestUpdate("textAlign",l)}get textAlign(){return this._textAlign}set headerTitle(a){const l=this._headerTitle;this._headerTitle=a,this.requestUpdate("headerTitle",l)}get headerTitle(){return this._headerTitle}set hideHeader(a){const l=this._hideHeader;this._hideHeader=a,this.requestUpdate("hideHeader",l)}get hideHeader(){return this._hideHeader}set hideColumnHeader(a){const l=this._hideColumnHeader;this._hideColumnHeader=a,this.requestUpdate("hideColumnHeader",l)}get hideColumnHeader(){return this._hideColumnHeader}set innerFilters(a){const l=this._innerFilters;this._innerFilters=a,this.requestUpdate("innerFilters",l)}get innerFilters(){return this._innerFilters}set expandTable(a){const l=this._expandTable;this._expandTable=a,this.requestUpdate("expandTable",l)}get expandTable(){return this._expandTable}set expandLabel(a){const l=this._expandLabel;this._expandLabel=a,this.requestUpdate("expandLabel",l)}get expandLabel(){return this._expandLabel}set collapseLabel(a){const l=this._collapseLabel;this._collapseLabel=a,this.requestUpdate("collapseLabel",l)}get collapseLabel(){return this._collapseLabel}set rowsOnCollapsed(a){const l=this._rowsOnCollapsed;this._rowsOnCollapsed=a,this.requestUpdate("rowsOnCollapsed",l)}get rowsOnCollapsed(){return this._rowsOnCollapsed}set filtersLabel(a){const l=this._filtersLabel;this._filtersLabel=a,this.requestUpdate("filtersLabel",l)}get filtersLabel(){return this._filtersLabel}set cleanFiltersLabel(a){const l=this._cleanFiltersLabel;this._cleanFiltersLabel=a,this.requestUpdate("cleanFiltersLabel",l)}get cleanFiltersLabel(){return this._cleanFiltersLabel}set selectedRowsLabel(a){const l=this._selectedRowsLabel;this._selectedRowsLabel=a,this.requestUpdate("selectedRowsLabel",l)}get selectedRowsLabel(){return this._selectedRowsLabel}set footerButtons(a){const l=this._footerButtons;this._footerButtons=a,this.requestUpdate("footerButtons",l)}get footerButtons(){return this._footerButtons}set maxContentWidth(a){const l=this._maxContentWidth;this._maxContentWidth=a,this.requestUpdate("maxContentWidth",l)}get maxContentWidth(){return this._maxContentWidth}set stickyColumns(a){const l=this._stickyColumns;this._stickyColumns=a,this.requestUpdate("stickyColumns",l)}get stickyColumns(){return this._stickyColumns}set multiselect(a){const l=this._multiselect;this._multiselect=a,this.requestUpdate("multiselect",l)}get multiselect(){return this._multiselect}set radioselect(a){const l=this._radioselect;this._radioselect=a,this.requestUpdate("radioselect",l)}get radioselect(){return this._radioselect}set hasRowButton(a){const l=this._hasRowButton;this._hasRowButton=a,this.requestUpdate("hasRowButton",l)}get hasRowButton(){return this._hasRowButton}set rowButtonLabel(a){const l=this._rowButtonLabel;this._rowButtonLabel=a,this.requestUpdate("rowButtonLabel",l)}get rowButtonLabel(){return this._rowButtonLabel}set hasRowActions(a){const l=this._hasRowActions;this._hasRowActions=a,this.requestUpdate("hasRowActions",l)}get hasRowActions(){return this._hasRowActions}set rowActionsIcons(a){const l=this._rowActionsIcons;this._rowActionsIcons=a,this.requestUpdate("rowActionsIcons",l)}get rowActionsIcons(){return this._rowActionsIcons}set footerButtonPrimaryLabel(a){const l=this._footerButtonPrimaryLabel;this._footerButtonPrimaryLabel=a,this.requestUpdate("footerButtonPrimaryLabel",l)}get footerButtonPrimaryLabel(){return this._footerButtonPrimaryLabel}set footerButtonSecondaryLabel(a){const l=this._footerButtonSecondaryLabel;this._footerButtonSecondaryLabel=a,this.requestUpdate("footerButtonSecondaryLabel",l)}get footerButtonSecondaryLabel(){return this._footerButtonSecondaryLabel}set footerButtonAlternativeLabel(a){const l=this._footerButtonAlternativeLabel;this._footerButtonAlternativeLabel=a,this.requestUpdate("footerButtonAlternativeLabel",l)}get footerButtonAlternativeLabel(){return this._footerButtonAlternativeLabel}set enableRowActionsOnDisabled(a){const l=this._enableRowActionsOnDisabled;this._enableRowActionsOnDisabled=a,this.requestUpdate("enableRowActionsOnDisabled",l)}get enableRowActionsOnDisabled(){return this._enableRowActionsOnDisabled}set enableRowActionsOnDeleted(a){const l=this._enableRowActionsOnDeleted;this._enableRowActionsOnDeleted=a,this.requestUpdate("enableRowActionsOnDeleted",l)}get enableRowActionsOnDeleted(){return this._enableRowActionsOnDeleted}set valueMaxLength(a){const l=this._valueMaxLength;this._valueMaxLength=a,this.requestUpdate("valueMaxLength",l)}get valueMaxLength(){return this._valueMaxLength}get _tableGridStyle(){return`grid-template-columns: repeat(${this._tableHeader.length}, 1fr)`}get _tableHeight(){let a="height:auto;";if(!this._expandTable){let l=this._rowsOnCollapsed*56;l+=56,a=`height:${l}px;`}return a}async firstUpdated(){try{await this.updateComplete,this._clickOutside()}catch{console.error("ERROR OCURRED")}}willUpdate(a){const l=a.has("data"),_=a.has("customData");if(!this._isFirstUpdate&&(l||_)){const h={detail:{startIndex:1,endIndex:this._pageSize}};this._paginateTable(h)}this._isFirstUpdate=!1}_clickOutside(){document.addEventListener("click",a=>{a.composedPath().includes(this)?a.composedPath().find(h=>h instanceof HTMLElement&&h.classList.contains("table-body"))||this._resetRowsTabIndex():this._resetRowsTabIndex()})}_createTableHeader(a){const l=Object.keys(a[0]);if(l.includes("disabled")){const _=l.indexOf("disabled");l.splice(_,1)}if(l.includes("deleted")){const _=l.indexOf("deleted");l.splice(_,1)}this._tableHeader=l,this._tableHeader.forEach(_=>{this._tableHeaderSort[_]="none"})}_sortBy(a,l){this._currentSortColumn=a,l==="none"?this._currentSortType="ASC":l==="ASC"?this._currentSortType="DSC":l==="DSC"&&(this._currentSortType="none"),this._currentSortType==="none"?this._pipeData=[...this._copyPipeData]:this._pipeData=this._pipeData.sort((h,b)=>{let g,f;return this._customData?(g=h[a].value,f=b[a].value):(g=h[a],f=b[a]),g<f?this._currentSortType==="ASC"?-1:1:g>f?this._currentSortType==="ASC"?1:-1:0}),this._tableHeaderSort[a]=this._currentSortType,Object.keys(this._tableHeaderSort).forEach(h=>{h!==a&&(this._tableHeaderSort[h]="none")}),this.requestUpdate()}_paginateTable(a){const l=a.detail.startIndex,_=a.detail.endIndex;if(this._customData&&_<=this._customData.length?this._pipeData=this._customData.slice(l-1,_):this._data&&_<=this._data.length&&(this._pipeData=this._data.slice(l-1,_)),a.detail.pageSize&&(this._pageSize=a.detail.pageSize),this._copyPipeData=[...this._pipeData],this._currentSortColumn&&this._currentSortType){let h="";this._currentSortType==="ASC"?h="none":this._currentSortType==="DSC"?h="ASC":h="DSC",this._sortBy(this._currentSortColumn,h)}this.requestUpdate()}_generateTableHeaderHTML(){let a=x``,l=x``,_=x``,h=x``;this._multiselect&&(a=x`
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
      `),this._radioselect&&(l=x`
        <th class="table-th table-th--radio">
          <div class="table-header-column table-header-column--radio"></div>
        </th>
      `),this._hasRowButton&&(_=x`
        <th class="table-th table-th--button">
          <div class="table-header-column table-header-column--button"></div>
        </th>
      `),this._hasRowActions&&(h=x`
        <th
          class="table-th table-th--actions table-th--icons-${this._rowActionsIcons.length}"
        >
          <div class="table-header-column table-header-column--actions"></div>
        </th>
      `);let b=!0;const g=this._tableHeader.map(($,k)=>{const D=()=>{this._customTableHeader?this._customTableHeader[k].sort&&this._sortBy($,this._tableHeaderSort[$]):this._sortBy($,this._tableHeaderSort[$]),this.requestUpdate()},C=q=>{const P=q.currentTarget,O=q;let U=!1;switch(O.key){case"ArrowLeft":moveFocusToPreviousTarget(this.renderRoot,P,".table-header-column--clickable"),U=!0;break;case"ArrowRight":moveFocusToNextTarget(this.renderRoot,P,".table-header-column--clickable"),U=!0;break;case"Enter":const A=q.target;onKeyboardEnter(this.renderRoot,A,".table-header-column--clickable"),U=!0;break}U&&(q.stopPropagation(),q.preventDefault())};let w="";this._customData&&this._customData.length>0?w=this._pipeData[0][$].type:this._data&&this._data.length>0&&(w=typeof this._pipeData[0][$]);const S={"table-th--review":w==="review","table-th--link":w==="link"};let I=!1;this._customTableHeader&&(this._customTableHeader[k].sort||(I=!0));const L={"table-header-column--review":w==="review","table-header-column--number":w==="number","table-header-column--link":w==="link","table-header-column--clickable":!I,"table-header-column--not-clickable":I},y=x`
        <span class="dss-icon dss-icon--sm table-header-column__icon">
          ${$===this._currentSortColumn?this._currentSortType==="ASC"?x`arrow_upward`:this._currentSortType==="DSC"?x`arrow_downward`:x`swap_vert`:x`swap_vert`}
        </span>
      `,z=x`
        <th class="table-th ${e$1(S)}">
          <div
            class="table-header-column ${e$1(L)}"
            tabindex="${b?0:-1}"
            @keydown=${C}
            @click=${D}
          >
            <span class="table-header-column__title">
              ${this._customTableHeader?x`${this._customTableHeader[k].title}`:x`${$}`}
            </span>
            ${this._customTableHeader?this._customTableHeader[k].sort?x`${y}`:null:x`${y}`}
          </div>
        </th>
      `;return b=!1,z}),f={"table-header-row--hide":this._hideColumnHeader};return x` <tr
      class="table-header-row ${e$1(f)}"
    >
      ${a} ${l} ${g}
      ${_} ${h}
    </tr>`}_onRowCheckboxChange(a){this._radioselect&&this._uncheckRadioRows(),a.checked?a.checked=!a.checked:a.checked=!0,this.requestUpdate()}_onSelectAllRows(){this._pipeData.forEach(a=>{a.disabled?this._enableRowActionsOnDisabled&&(a.checked=this._selectAllRows):a.deleted?this._enableRowActionsOnDeleted&&(a.checked=this._selectAllRows):a.checked=this._selectAllRows}),this._selectAllRows=!this._selectAllRows,this.requestUpdate()}_onRowAction(a,l){const _={detail:{action:a,row:l},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onRowAction",_)),this.requestUpdate()}_onRowActionKeydown(a,l,_){a.key==="Enter"&&this._onRowAction(l,_)}_generateTableTdCheckbox(a,l,_,h){return this._enableRowActionsOnDeleted&&(h=!1),this._enableRowActionsOnDisabled&&(_=!1),x`
      <td class="table-td table-td--checkbox">
        <div
          class="table-body-column table-body-column--custom table-body-column--checkbox"
        >
          <input
            type="checkbox"
            class="dss-checkbox table-body-row__action"
            aria-label="Seleccionar la fila"
            @change="${()=>this._onRowCheckboxChange(a)}"
            .checked=${l}
            ?disabled=${_||h}
          />
        </div>
      </td>
    `}_generateTableTdRadio(a,l,_,h){return this._enableRowActionsOnDeleted&&(h=!1),this._enableRowActionsOnDisabled&&(_=!1),x`
      <td class="table-td table-td--radio">
        <div
          class="table-body-column table-body-column--custom table-body-column--radio"
        >
          <input
            type="radio"
            name="row-radio"
            class="dss-radio table-body-row__action"
            aria-label="Seleccionar la fila"
            @change="${()=>this._onRowCheckboxChange(a)}"
            .checked=${l}
            ?disabled=${_||h}
          />
        </div>
      </td>
    `}_generateTableTdButton(a,l,_){return this._enableRowActionsOnDeleted&&(_=!1),this._enableRowActionsOnDisabled&&(l=!1),x`
      <td class="table-td table-td--button">
        <div
          class="table-body-column table-body-column--custom table-body-column--button"
        >
          <button
            type="button"
            class="dss-button dss-button--sm dss-button--secondary table-body-row__action"
            @click="${()=>this._onRowAction(this._rowButtonLabel,a)}"
            @keydown="${h=>this._onRowActionKeydown(h,this._rowButtonLabel,a)}"
            ?disabled=${l||_}
          >
            ${this._rowButtonLabel}
          </button>
        </div>
      </td>
    `}_generateTableTdActions(a,l,_){return this._enableRowActionsOnDeleted&&(_=!1),this._enableRowActionsOnDisabled&&(l=!1),x`
      <td class="table-td table-td--custom table-td--actions">
        <div
          class="table-body-column table-body-column--custom table-body-column--actions"
        >
          ${this._rowActionsIcons.map((h,b)=>x`
                <button
                  class="dss-icon-button dss-icon-button--primary dss-icon-button--md dss-table-actions-icon table-body-row__action"
                  @click="${()=>this._onRowAction(`rowAction${b+1}`,a)}"
                  @keydown="${g=>this._onRowActionKeydown(g,this._rowButtonLabel,a)}"
                  aria-label="Row action ${b+1}"
                  ?disabled=${l||_}
                >
                  <span class="dss-icon">${h}</span>
                </button>
              `)}
        </div>
      </td>
    `}_generateTableTdSelfActions(a,l,_,h,b){return this._enableRowActionsOnDeleted&&(b=!1),this._enableRowActionsOnDisabled&&(h=!1),x`
      <td class="table-td table-td--custom table-td--actions">
        <div
          class="table-body-column table-body-column--custom table-body-column--actions"
        >
          ${_.icons.map((g,f)=>x`
                <button
                  class="dss-icon-button dss-icon-button--primary dss-icon-button--md dss-table-actions-icon table-body-row__action"
                  @click="${()=>this._onRowAction(`${l}Action${f+1}`,a)}"
                  @keydown="${$=>this._onRowActionKeydown($,this._rowButtonLabel,a)}"
                  aria-label="Self action ${f+1}"
                  ?disabled=${h||b}
                >
                  <span class="dss-icon">${g}</span>
                </button>
              `)}
        </div>
      </td>
    `}_resetRowsTabIndex(){const a=this.renderRoot.querySelector('.table-body-row[tabindex="0"]');a==null||a.setAttribute("tabindex","-1"),this.renderRoot.querySelectorAll(".table-body-row")[0].setAttribute("tabindex","0")}_uncheckRadioRows(){this._data&&this._data.length>0&&this._pipeData.forEach(a=>{a.checked=!1})}_generateDefaultTableBody(){let a,l=!0;return this._data&&this._data.length>0&&(a=this._pipeData.map(_=>{const h=_.checked?_.checked:!1,b=_.deleted?_.deleted:!1,g=_.disabled?_.disabled:!1,f=y=>{const z=y.relatedTarget;z&&!z.className.includes("table-body-row")&&!z.className.includes("table-body-row__action")&&this._resetRowsTabIndex()},$=y=>{const z=y.currentTarget,q=y;let P=!1;switch(q.key){case"ArrowUp":moveFocusToPreviousTarget(this.renderRoot,z,".table-body-row"),P=!0;break;case"ArrowDown":moveFocusToNextTarget(this.renderRoot,z,".table-body-row"),P=!0;break;case"Enter":const O=y.target;O.tagName==="TR"&&(onKeyboardEnter(this.renderRoot,O,".table-body-row"),(this._multiselect||this._radioselect)&&(!b&&!g?(this._radioselect&&this._uncheckRadioRows(),_.checked?_.checked=!_.checked:_.checked=!0):this._enableRowActionsOnDeleted&&b?(this._radioselect&&this._uncheckRadioRows(),_.checked?_.checked=!_.checked:_.checked=!0):this._enableRowActionsOnDisabled&&g&&(this._radioselect&&this._uncheckRadioRows(),_.checked?_.checked=!_.checked:_.checked=!0),this.requestUpdate()),P=!0);break;case"Escape":const A=y.composedPath().find(R=>R instanceof HTMLElement&&R.classList.contains("table-body-row"));A&&A.focus();break}P&&(y.stopPropagation(),y.preventDefault())},k=this._multiselect?this._generateTableTdCheckbox(_,h,g,b):x``,D=this._radioselect?this._generateTableTdRadio(_,h,g,b):x``,C=this._hasRowButton?this._generateTableTdButton(_,g,b):x``,w=this._hasRowActions?this._generateTableTdActions(_,g,b):x``,S=this._tableHeader.map(y=>{const z={"table-body-column--number":typeof _[y]=="number"};return x`
            <td class="table-td">
              <div
                class="table-body-column table-body-column--custom ${e$1(z)}"
              >
                ${_[y]===""?x`<i class="dss-icon dss-icon--md">remove</i>`:null}
                ${_[y]===""?x`<i class="dss-icon dss-icon--md">remove</i>`:null}
                ${typeof _[y]=="number"?x` ${_[y]} `:_[y].length<=this._valueMaxLength?x`${_[y]}`:x`${_[y]}...`}
              </div>
            </td>
          `}),L=x` <tr
          class="table-body-row ${e$1({"table-body-row--selected":h,"table-body-row--deleted":b,"table-body-row--disabled":g})}"
          tabindex="${l?0:-1}"
          style=${o$1(this._tableGridStyle)}
          @keydown=${$}
          @focusout=${f}
        >
          ${k} ${D} ${S}
          ${C} ${w}
        </tr>`;return l=!1,L})),a}_generateCustomTableBody(){let a,l=!0;return this._customData&&(a=this._pipeData.map(_=>{let h=_.checked?_.checked:!1;const b=_.deleted?_.deleted:!1,g=_.disabled?_.disabled:!1,f=y=>{const z=y.relatedTarget;z&&!z.className.includes("table-body-row")&&!z.className.includes("table-body-row__action")&&this._resetRowsTabIndex()},$=y=>{const z=y.currentTarget,q=y;let P=!1;switch(q.key){case"ArrowUp":moveFocusToPreviousTarget(this.renderRoot,z,".table-body-row"),P=!0;break;case"ArrowDown":moveFocusToNextTarget(this.renderRoot,z,".table-body-row"),P=!0;break;case"Enter":const O=y.target;O.tagName==="TR"&&(onKeyboardEnter(this.renderRoot,O,".table-body-row"),(this._multiselect||this._radioselect)&&((!b&&!g||this._enableRowActionsOnDeleted&&b||this._enableRowActionsOnDisabled&&g)&&(_.checked?(_.checked=!_.checked,h=_.checked):(_.checked=!0,h=_.checked)),this.requestUpdate())),P=!0;break;case"Escape":const A=y.composedPath().find(R=>R instanceof HTMLElement&&R.classList.contains("table-body-row"));A&&A.focus();break}P&&(y.stopPropagation(),y.preventDefault())},k=this._multiselect?this._generateTableTdCheckbox(_,h,g,b):x``,D=this._radioselect?this._generateTableTdRadio(_,h,g,b):x``,C=this._hasRowButton?this._generateTableTdButton(_,g,b):x``,w=this._hasRowActions?this._generateTableTdActions(_,g,b):x``,S=this._tableHeader.map(y=>{const z=P=>{_[P].value=!_[P].value;const O={detail:{action:"review",row:_},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onRowAction",O)),this.requestUpdate()},q={"table-body-column--text":_[y].type==="text","table-body-column--number":_[y].type==="number","table-body-column--link":_[y].type==="link","table-body-column--badge":_[y].type==="badge","table-body-column--result":_[y].type==="result","table-body-column--review":_[y].type==="review","table-body-column--progress":_[y].type==="progress","table-body-column--font-bold":_[y].fontType==="bold","table-body-column--font-black":_[y].fontType==="black","table-body-column--icon-right":_[y].iconRight};return x`
            <td class="table-td" style="${o$1(_[y].style)}">
              <div
                class="table-body-column table-body-column--custom ${e$1(q)}"
              >
                ${_[y].type==="text"?x`
                      ${_[y].icon?x`
                            <span class="dss-icon dss-icon--sm column-icon"
                              >${_[y].icon}</span
                            >
                          `:null}
                      ${_[y].badgeBefore?x`
                            <dss-badge
                              size="md"
                              state="${g?"disabled":_[y].state}"
                              text="${_[y].badgeBefore}"
                              outlined
                              hideIcon
                            >
                              ${_[y].badgeTooltip?x`
                                    <dss-tooltip
                                      slot="tooltip"
                                      position="${_[y].badgeTooltipPosition?_[y].badgeTooltipPosition:"top"}"
                                    >
                                      <span>${_[y].badgeTooltip}</span>
                                    </dss-tooltip>
                                  `:null}
                            </dss-badge>
                          `:null}

                      <span class="column-value">
                        <span class="value">
                          ${_[y].value===""?x`<i class="dss-icon dss-icon--md">remove</i>`:null}
                          ${_[y].value.length<=this._valueMaxLength?x`${_[y].value}`:x`${_[y].value.slice(0,this._valueMaxLength)}...`}
                        </span>
                        ${_[y].valueTooltip?x`
                              <dss-tooltip
                                position="${_[y].valueTooltipPosition?_[y].valueTooltipPosition:"top"}"
                              >
                                <span>${_[y].valueTooltip}</span>
                              </dss-tooltip>
                            `:null}
                      </span>
                    `:_[y].type==="number"?x`
                      ${_[y].icon?x`
                            <span class="dss-icon dss-icon--sm column-icon"
                              >${_[y].icon}</span
                            >
                          `:null}
                      <span class="column-value">${_[y].value}</span>
                    `:_[y].type==="link"?x`
                      ${_[y].icon?x`
                            <span class="dss-icon dss-icon--sm column-icon"
                              >${_[y].icon}</span
                            >
                          `:null}
                      ${g?x`
                            <span class="column-value">${_[y].value}</span>
                          `:x`
                            <a
                              class="column-value column-value--link"
                              href="${_[y].href}"
                              ?disabled=${g}
                            >
                              <span class="value">
                                ${_[y].value.length<=this._valueMaxLength?x`${_[y].value}`:x`${_[y].value.slice(0,this._valueMaxLength)}...`}
                              </span>
                              ${_[y].valueTooltip?x`
                                    <dss-tooltip
                                      position="${_[y].valueTooltipPosition?_[y].valueTooltipPosition:"top"}"
                                    >
                                      <span>${_[y].valueTooltip}</span>
                                    </dss-tooltip>
                                  `:null}
                            </a>
                          `}
                    `:_[y].type==="badge"?x`
                      <dss-badge
                        size="${_[y].badgeSize?_[y].badgeSize:"md"}"
                        state="${g?"disabled":_[y].state}"
                        ?outlined=${_[y].outlined}
                        text="${_[y].value}"
                      ></dss-badge>
                    `:_[y].type==="result"?x`
                      <dss-icon-badge
                        size="sm"
                        state="${g?"disabled":_[y].state}"
                        icon="${_[y].icon}"
                        bubble
                      ></dss-icon-badge>
                      <span class="column-value">${_[y].value}</span>
                    `:_[y].type==="actions"?this._generateTableTdSelfActions(_,y,_[y],g,b):_[y].type==="review"?x`
                      <input
                        type="checkbox"
                        class="dss-checkbox dss-checkbox--validate"
                        ?checked="${_[y].value}"
                        @change="${()=>z(y)}"
                        ?disabled=${g&&!this._enableRowActionsOnDisabled||b&&!this._enableRowActionsOnDeleted}
                      />
                    `:_[y].type==="progress"?x`
                      ${_[y].icon?x`
                            <span class="dss-icon dss-icon--sm column-icon"
                              >${_[y].icon}</span
                            >
                          `:null}
                      <dss-progress-indicator
                        percentage="23"
                      ></dss-progress-indicator>
                    `:null}
              </div>
            </td>
          `}),L=x` <tr
          class="table-body-row ${e$1({"table-body-row--selected":h,"table-body-row--deleted":b,"table-body-row--disabled":g})}"
          tabindex="${l?0:-1}"
          style=${o$1(this._tableGridStyle)}
          @keydown=${$}
          @focusout=${f}
        >
          ${k} ${D} ${S}
          ${C} ${w}
        </tr>`;return l=!1,L})),a}_generateFilterChips(){let a;return this._filters&&(a=this._filters.map(l=>{const _=g=>{const f=g.target.getAttribute("term");typeof l=="string"?this._filters=this._filters.filter($=>$!==f):this._filters=this._filters.filter($=>$.value.trim()!==(f==null?void 0:f.trim())),this._emitChangeFilters(),this.requestUpdate()};return x`
          <span tabindex="0" class="dss-chip dss-chip--sm dss-chip--selected">
            ${typeof l==="string"?x`
                  ${l}
                  <button
                    class="dss-chip__icon-button dss-icon-button dss-icon-button--primary dss-icon-button--sm"
                    @click="${_}"
                  >
                    <span class="dss-icon" term="${l}">cancel</span>
                  </button>
                `:x`
                  <span class="dss-icon">${l.icon}</span>
                  ${l.value}
                  <button
                    class="dss-chip__icon-button dss-icon-button dss-icon-button--primary dss-icon-button--sm"
                    @click="${_}"
                  >
                    <span class="dss-icon" term=" ${l.value}"
                      >cancel</span
                    >
                  </button>
                `}
          </span>
        `})),a}_clearFilters(){this._filters=[],this._emitChangeFilters(),this.requestUpdate()}_countRowsChecked(){let a=0;for(const l of this._pipeData)l.checked&&(a+=1);return a}_getRowsSelected(){const a=[];return this._pipeData.forEach(l=>{if(l.checked){const _={...l};_.checked=void 0,a.push(_)}}),a}_emitExpandAction(){const a={detail:this._expandTable,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onExpandTable",a)),this._expandTable=!this._expandTable,this.requestUpdate()}_emitOpenFilters(){const a={detail:!0,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onOpenFilters",a)),this.requestUpdate()}_emitChangeFilters(){const a={detail:this._filters,bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onChangeFilters",a)),this.requestUpdate()}_emitFooterAction(a){const l=this._getRowsSelected(),_={detail:{action:a,selectedRows:l},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("onFooterAction",_)),this.requestUpdate()}render(){const a={"table--max-content-width":this._maxContentWidth,"table--sticky-columns":this._maxContentWidth&&this._stickyColumns,"table--sticky-columns--multiselect":this._maxContentWidth&&this._stickyColumns&&this._multiselect,"table--sticky-columns--radioselect":this._maxContentWidth&&this._stickyColumns&&this._radioselect},l={"table-body--align-left":this._data.length>0&&this._textAlign==="left","table-body--align-center":this._data.length>0&&this._textAlign==="center","table-body--align-right":this._data.length>0&&this._textAlign==="right","table-body--align-justify":this._data.length>0&&this._textAlign==="justify"};return x`
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
            style="${o$1(this._tableHeight)}"
          >
            <table
              class="table ${e$1(a)}"
              cellspacing="0"
              cellpadding="0"
            >
              <thead
                class="table-header"
                style=${o$1(this._tableGridStyle)}
              >
                ${this._generateTableHeaderHTML()}
              </thead>
              <tbody class="table-body ${e$1(l)}">
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
    `}}__decorateClass([n(booleanType)],Table.prototype,"hasPaginator");__decorateClass([n({type:Array})],Table.prototype,"data");__decorateClass([n({type:Array})],Table.prototype,"customData");__decorateClass([n({type:Array})],Table.prototype,"customTableHeader");__decorateClass([n({type:Array})],Table.prototype,"filters");__decorateClass([n({type:Number})],Table.prototype,"currentIndex");__decorateClass([n({type:Number})],Table.prototype,"pageSize");__decorateClass([n({type:String})],Table.prototype,"pageSizeOptions");__decorateClass([n({type:String})],Table.prototype,"resultstext");__decorateClass([n({type:String})],Table.prototype,"rowsperpagetext");__decorateClass([n({type:String})],Table.prototype,"textAlign");__decorateClass([n({type:String})],Table.prototype,"headerTitle");__decorateClass([n(booleanType)],Table.prototype,"hideHeader");__decorateClass([n(booleanType)],Table.prototype,"hideColumnHeader");__decorateClass([n(booleanType)],Table.prototype,"innerFilters");__decorateClass([n(booleanType)],Table.prototype,"expandTable");__decorateClass([n({type:String})],Table.prototype,"expandLabel");__decorateClass([n({type:String})],Table.prototype,"collapseLabel");__decorateClass([n({type:Number})],Table.prototype,"rowsOnCollapsed");__decorateClass([n({type:String})],Table.prototype,"filtersLabel");__decorateClass([n({type:String})],Table.prototype,"cleanFiltersLabel");__decorateClass([n({type:String})],Table.prototype,"selectedRowsLabel");__decorateClass([n({type:Number})],Table.prototype,"footerButtons");__decorateClass([n(booleanType)],Table.prototype,"maxContentWidth");__decorateClass([n(booleanType)],Table.prototype,"stickyColumns");__decorateClass([n(booleanType)],Table.prototype,"multiselect");__decorateClass([n(booleanType)],Table.prototype,"radioselect");__decorateClass([n(booleanType)],Table.prototype,"hasRowButton");__decorateClass([n({type:String})],Table.prototype,"rowButtonLabel");__decorateClass([n(booleanType)],Table.prototype,"hasRowActions");__decorateClass([n({type:Array})],Table.prototype,"rowActionsIcons");__decorateClass([n({type:String})],Table.prototype,"footerButtonPrimaryLabel");__decorateClass([n({type:String})],Table.prototype,"footerButtonSecondaryLabel");__decorateClass([n({type:String})],Table.prototype,"footerButtonAlternativeLabel");__decorateClass([n(booleanType)],Table.prototype,"enableRowActionsOnDisabled");__decorateClass([n(booleanType)],Table.prototype,"enableRowActionsOnDeleted");__decorateClass([n({type:Number})],Table.prototype,"valueMaxLength");registerCustomElement("dss-accordion",Accordion);registerCustomElement("dss-action-menu",ActionMenu);registerCustomElement("dss-action-menu-item",ActionMenuItem);registerCustomElement("dss-alert",Alert);registerCustomElement("dss-avatar",Avatar);registerCustomElement("dss-badge",Badge);registerCustomElement("dss-button",Button);registerCustomElement("dss-button-link",ButtonLink);registerCustomElement("dss-breadcrumb",Breadcrumb);registerCustomElement("dss-calendar",Calendar);registerCustomElement("dss-chat-message",ChatMessage);registerCustomElement("dss-checkbox",Checkbox);registerCustomElement("dss-chip",Chip);registerCustomElement("dss-content-switcher",ContentSwitcher);registerCustomElement("dss-custom-table",CustomTable);registerCustomElement("dss-datepicker",Datepicker_);registerCustomElement("dss-datepicker-range",DatepickerRange);registerCustomElement("dss-decorative-icon",DecorativeIcon);registerCustomElement("dss-divider",Divider);registerCustomElement("dss-drawer",Drawer);registerCustomElement("dss-footer",Footer);registerCustomElement("dss-header",Header);registerCustomElement("dss-header-links",HeaderLinks);registerCustomElement("dss-header-menu-patient",HeaderMenuPatient);registerCustomElement("dss-header-menu-professional",HeaderMenuProfessional);registerCustomElement("dss-icon",Icon);registerCustomElement("dss-icon-badge",IconBadge);registerCustomElement("dss-icon-button",IconButton);registerCustomElement("dss-input",Input);registerCustomElement("dss-input-action",InputAction);registerCustomElement("dss-input-dropdown",InputDropdown);registerCustomElement("dss-input-switch",InputSwitch);registerCustomElement("dss-item-list",ItemList);registerCustomElement("dss-list-menu",ListMenu);registerCustomElement("dss-legend",Legend);registerCustomElement("dss-modal",Modal);registerCustomElement("dss-module-header",ModuleHeader);registerCustomElement("dss-notification-badge",NotificationBadge);registerCustomElement("dss-pagination",Pagination);registerCustomElement("dss-progress-indicator",ProgressIndicator);registerCustomElement("dss-radio-button",RadioButton);registerCustomElement("dss-search-bar",SearchBar);registerCustomElement("dss-selector",Selector);registerCustomElement("dss-slider",Slider);registerCustomElement("dss-spinner",Spinner);registerCustomElement("dss-stepper",Stepper);registerCustomElement("dss-skeleton",Skeleton);registerCustomElement("dss-tabs-list",TabsList);registerCustomElement("dss-tabs-panel",TabsPanel);registerCustomElement("dss-table-header",TableHeader);registerCustomElement("dss-table-pagination",TablePagination);registerCustomElement("dss-textarea",Textarea);registerCustomElement("dss-tile",Tile);registerCustomElement("dss-timepicker",Timepicker);registerCustomElement("dss-toast",Toast);registerCustomElement("dss-tooltip",Tooltip);registerCustomElement("dss-popover",Popover);registerCustomElement("dss-popover-body",PopoverBody);registerCustomElement("dss-sidemenu",Sidemenu);registerCustomElement("dss-sidemenu-list",SidemenuList);registerCustomElement("dss-sidemenu-list-item",SidemenuListItem);registerCustomElement("dss-split-button",SplitButton);registerCustomElement("dss-user-feedback",UserFeedback);registerCustomElement("dss-upload-box",UploadBox);registerCustomElement("dss-card",Card);registerCustomElement("dss-card-body",CardBody);registerCustomElement("dss-card-description",CardDescription);registerCustomElement("dss-card-footer",CardFooter);registerCustomElement("dss-card-form",CardForm);registerCustomElement("dss-card-header",CardHeader);registerCustomElement("dss-card-highlights-item",CardHighlightsItem);registerCustomElement("dss-card-highlights",CardHighlights);registerCustomElement("dss-card-image",CardImage);registerCustomElement("dss-card-info-item",CardInfoItem);registerCustomElement("dss-card-info",CardInfo);registerCustomElement("dss-card-menu",CardMenu);registerCustomElement("dss-card-subtitle",CardSubitle);registerCustomElement("dss-card-tags",CardTags);registerCustomElement("dss-card-title",CardTitle);registerCustomElement("dss-preset-texts",PresetTexts);registerCustomElement("dss-date-picker",DatePicker);registerCustomElement("dss-dropdownlist",DropDownList);registerCustomElement("dss-input-field",InputField);registerCustomElement("dss-table",Table);registerCustomElement("dss-switch",Switch);const preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:{order:["Introducció","Versions","Migració V2","Foundations","Components","Collections","Discontinued"]}}}};export{preview as default};
