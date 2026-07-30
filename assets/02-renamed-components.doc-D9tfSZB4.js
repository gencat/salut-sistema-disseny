import{j as s,M as a}from"./blocks-ogp1RL_x.js";import{useMDXComponents as t}from"./index-FsDOdGc5.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-PZmtbJSg.js";function e(d){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...d.components};return s.jsxs(s.Fragment,{children:[s.jsx(a,{title:"Documentació/Changelog v3/Breaking changes/2) Components renombrats"}),`
`,s.jsx(n.h2,{id:"migració-v3-components-renombrats",children:"Migració v3: Components renombrats"}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Problema"})}),`
`,s.jsx(n.p,{children:`Necessitat d’homogeneïtzar els noms dels components per millorar-ne la consistència i facilitar-ne l’ús,
reduint la complexitat i la confusió actuals, especialment en l’ús de components de tipus formulari.`}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Solució"})}),`
`,s.jsx(n.p,{children:`Seguint les recomanacions de l’equip d’arquitectura, s’ha donat prioritat als components orientats al seu ús en
React, en detriment dels anteriors components modificats per a la seva adaptació a formularis reactius d’Angular.`}),`
`,s.jsx(n.p,{children:`D’aquesta manera, els components principals de tipus formulari, que no necessiten l’ús de slots, seran els estàndard
dss-input, dss-datepicker i dss-timepicker. En canvi, els components anteriors adaptats per a formularis  reactius
d’Angular, que inclouen slots per a label i input, seran reanomenats amb el prefix -ng (dss-ng-input, dss-ng-datepicker, dss-ng-timepicker).`}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Refactor en iniciatives"})}),`
`,s.jsx(n.p,{children:"S’hauran de reanomenar els components llistats a continuació pel seu nou selector:"}),`
`,s.jsxs(n.table,{children:[s.jsx(n.thead,{children:s.jsxs(n.tr,{children:[s.jsx(n.th,{children:"Selector v2"}),s.jsx(n.th,{children:"Selector v3"})]})}),s.jsxs(n.tbody,{children:[s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-checkbox"}),s.jsx(n.td,{children:"dss-ng-checkbox"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-datepicker"}),s.jsx(n.td,{children:"dss-ng-datepicker"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-datepicker-range"}),s.jsx(n.td,{children:"dss-ng-datepicker-range"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-input"}),s.jsx(n.td,{children:"dss-ng-input"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-input-action"}),s.jsx(n.td,{children:"dss-ng-input-action"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-input-dropdown"}),s.jsx(n.td,{children:"dss-ng-input-dropdown"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-input-switch"}),s.jsx(n.td,{children:"dss-ng-input-switch"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-radio-button"}),s.jsx(n.td,{children:"dss-ng-radio-button"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-search-bar"}),s.jsx(n.td,{children:"dss-ng-search-bar"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-textarea"}),s.jsx(n.td,{children:"dss-ng-textarea"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-timepicker"}),s.jsx(n.td,{children:"dss-ng-timepicker"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-upload-box"}),s.jsx(n.td,{children:"dss-ng-upload-box"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-form-checkbox"}),s.jsx(n.td,{children:"dss-checkbox"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-form-checkbox-group"}),s.jsx(n.td,{children:"dss-checkbox-group"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-form-datepicker"}),s.jsx(n.td,{children:"dss-datepicker"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-form-datepicker-range"}),s.jsx(n.td,{children:"dss-datepicker-range"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-form-input"}),s.jsx(n.td,{children:"dss-input"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-form-textarea"}),s.jsx(n.td,{children:"dss-textarea"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-form-radio-button"}),s.jsx(n.td,{children:"dss-radio-button"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-form-radio-button-group"}),s.jsx(n.td,{children:"dss-radio-button-group"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-form-select"}),s.jsx(n.td,{children:"dss-select"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-form-timepicker"}),s.jsx(n.td,{children:"dss-timepicker"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-form-toggle"}),s.jsx(n.td,{children:"dss-toggle"})]}),s.jsxs(n.tr,{children:[s.jsx(n.td,{children:"dss-header-links"}),s.jsx(n.td,{children:"dss-header-navigation"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(n.h3,{id:"nova-llista-de-components--collections",children:"Nova llista de components / collections"}),`
`,s.jsx(n.p,{children:"A continuació compartim la nova llista de components per a la V3, per actualitzar el contingut dels fitxers de tipus custom.d.ts a les aplicacions React."}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{children:`import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dss-accordion': any;
      'dss-action-menu': any;
      'dss-action-menu-item': any;
      'dss-alert': any;
      'dss-avatar': any;
      'dss-badge': any;
      'dss-button': any;
      'dss-button-link': any;
      'dss-breadcrumb': any;
      'dss-breadcrumb-bar': any;
      'dss-calendar': any;
      'dss-chat-message': any;
      'dss-checkbox': any;
      'dss-chip': any;
      'dss-content-switcher': any;
      'dss-custom-table': any;
      'dss-datepicker': any;
      'dss-datepicker-range': any;
      'dss-divider': any;
      'dss-drawer': any;
      'dss-footer': any;
      'dss-header': any;
      'dss-header-navigation': any;
      'dss-header-menu-patient': any;
      'dss-header-menu-professional': any;
      'dss-icon': any;
      'dss-icon-badge': any;
      'dss-icon-button': any;
      'dss-input': any;
      'dss-input-action': any;
      'dss-input-dropdown': any;
      'dss-input-switch': any;
      'dss-item-list': any;
      'dss-item-list-base': any;
      'dss-legend': any;
      'dss-list-menu': any;
      'dss-modal': any;
      'dss-module-header': any;
      'dss-notification-badge': any;
      'dss-pagination': any;
      'dss-progress-indicator': any;
      'dss-search-bar': any;
      'dss-selector': any;
      'dss-sidemenu': any;
      'dss-sidemenu-list': any;
      'dss-sidemenu-list-item': any;
      'dss-slider': any;
      'dss-spinner': any;
      'dss-stepper': any;
      'dss-skeleton': any;
      'dss-tabs-list': any;
      'dss-tabs-panel': any;
      'dss-table-header': any;
      'dss-table-pagination': any;
      'dss-textarea': any;
      'dss-tile': any;
      'dss-timepicker': any;
      'dss-toast': any;
      'dss-tooltip': any;
      'dss-popover': any;
      'dss-popover-body': any;
      'dss-popover-footer': any;
      'dss-radio-button': any;
      'dss-split-button': any;
      'dss-user-feedback': any;
      'dss-upload-box': any;
      'dss-card': any;
      'dss-card-body': any;
      'dss-card-description': any;
      'dss-card-footer': any;
      'dss-card-form': any;
      'dss-card-header': any;
      'dss-card-highlights-item': any;
      'dss-card-highlights': any;
      'dss-card-image': any;
      'dss-card-info-item': any;
      'dss-card-info': any;
      'dss-card-menu': any;
      'dss-card-subtitle': any;
      'dss-card-tags': any;
      'dss-card-title': any;
      'dss-date-picker': any;
      'dss-dropdownlist': any;
      'dss-input-field': any;
      'dss-switch': any;
      'dss-preset-texts': any;
      'dss-typography': any;
      'dss-link': any;
      'dss-side-menu': any;
      'dss-widget': any;
      'dss-badge-button': any;
      'dss-table': any;
      'dss-table-grid': any;
      'dss-table-header': any;
      'dss-table-footer': any;
      'dss-thead': any;
      'dss-tbody': any;
      'dss-cell': any;
      'dss-row': any;
      'dss-input': any;
      'dss-input-action': any;
      'dss-select': any;
      'dss-datepicker': any;
      'dss-datepicker-range': any;
      'dss-timepicker': any;
      'dss-checkbox': any;
      'dss-checkbox-group': any;
      'dss-radio-button': any;
      'dss-radio-button-group': any;
      'dss-select': any;
      'dss-select-options': any;
      'dss-toggle': any;
      'dss-timepicker': any;
      'dss-searchbar': any;
      'dss-ng-input': any;
      'dss-ng-input-action': any;
      'dss-ng-input-dropdown': any;
      'dss-ng-input-switch': any;
      'dss-ng-textarea': any;
      'dss-ng-datepicker': any;
      'dss-ng-datepicker-range': any;
      'dss-ng-timepicker': any;
      'dss-ng-checkbox': any;
      'dss-ng-radio-button': any;
      'dss-ng-textarea': any;
      'dss-context-menu': any;
      'dss-context-menu-options': any;
      'dss-upload-file': any;
      'dss-sidebar': any;
      'dss-toast-manager': any;
    }
  }
}
`})})]})}function h(d={}){const{wrapper:n}={...t(),...d.components};return n?s.jsx(n,{...d,children:s.jsx(e,{...d})}):e(d)}export{h as default};
