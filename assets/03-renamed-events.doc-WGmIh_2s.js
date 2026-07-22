import{j as e,M as i}from"./blocks-D_zk3kjZ.js";import{useMDXComponents as r}from"./index-D0A3GcHo.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DNLJd-HG.js";function n(d){const s={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentació/Changelog v3/Breaking changes/3) Esdeveniments renombrats"}),`
`,e.jsx(s.h2,{id:"migració-v3-canvi-de-nom-dels-esdeveniments",children:"Migració v3: Canvi de nom dels esdeveniments"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.p,{children:`Amb la finalitat de reduir la complexitat en l’ús dels esdeveniments personalitzats dels components, s’ha decidit
revisar-ne i modificar-ne el nom amb la idea d’alinear-los i evitar futurs problemes de solapament.`}),`
`,e.jsx(s.p,{children:`Per exemple, React afegeix el prefix “on” a tots els esdeveniments natius per detectar-los. En cas que una
futura versió de React afegeixi suport als esdeveniments personalitzats que té Angular, els esdeveniments
podrien anomenar-se com onOnToggle, ja que el DS també incorpora aquest prefix per defecte.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Els components de formulari reanomenats a ",e.jsx(s.code,{children:"dss-ng-*"})," mantenen el mateix nom dels esdeveniments. Els canvis detallats a continuació s’apliquen als components i a les col·leccions després de completar-ne el reanomenament."]}),`
`]}),`
`,e.jsx(s.h2,{id:"components",children:"COMPONENTS"}),`
`,e.jsx(s.h3,{id:"dss-calendar",children:"dss-calendar"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onDateChange"}),e.jsx(s.td,{children:"date-changed"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onRangeChange"}),e.jsx(s.td,{children:"range-changed"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onCancel"}),e.jsx(s.td,{children:"cancel"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-chip",children:"dss-chip"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onToggle"}),e.jsx(s.td,{children:"toggle"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onDelete"}),e.jsx(s.td,{children:"delete"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-content-switcher",children:"dss-content-switcher"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onChange"}),e.jsx(s.td,{children:"change"})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-slider",children:"dss-slider"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onDssSliderValueChange"}),e.jsx(s.td,{children:"value-changed"})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-stepper",children:"dss-stepper"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onStepClick"}),e.jsx(s.td,{children:"step-click"})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"collections",children:"COLLECTIONS"}),`
`,e.jsx(s.h3,{id:"dss-accordion",children:"dss-accordion"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onToggleAccordion"}),e.jsx(s.td,{children:"toggle"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onClose"}),e.jsx(s.td,{children:"close"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onAccordionCheckboxChange"}),e.jsx(s.td,{children:"checkbox-changed"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onAccordionSecondaryAction"}),e.jsx(s.td,{children:"secondary-action"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onPrimaryAction"}),e.jsx(s.td,{children:"primary-action"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onWidgetClose"}),e.jsx(s.td,{children:"close"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onWidgetNext"}),e.jsx(s.td,{children:"next"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-action-menu",children:"dss-action-menu"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onCloseActionMenu"}),e.jsx(s.td,{children:"close"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onClick"}),e.jsx(s.td,{children:"item-click"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onAction"}),e.jsx(s.td,{children:"item-action"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-breadcrumb-bar",children:"dss-breadcrumb-bar"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onItemClick"}),e.jsx(s.td,{children:"item-click"})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-card",children:"dss-card"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onClose"}),e.jsx(s.td,{children:"close"})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-drawer",children:"dss-drawer"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onDrawerClosed, onClose"}),e.jsx(s.td,{children:"close"})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-header-navigation",children:"dss-header-navigation"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onClickItem"}),e.jsx(s.td,{children:"link-click"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onHelp"}),e.jsx(s.td,{children:"help"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-header-menu-patient",children:"dss-header-menu-patient"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onCopyCIP"}),e.jsx(s.td,{children:"copy-cip"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onViewDetails"}),e.jsx(s.td,{children:"x eliminat x"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onEdit"}),e.jsx(s.td,{children:"x eliminat x"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-header-menu-professional",children:"dss-header-menu-professional"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onExit"}),e.jsx(s.td,{children:"primary-action"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onLogout"}),e.jsx(s.td,{children:"secondary-action"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onViewDetails"}),e.jsx(s.td,{children:"x eliminat x"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-modal",children:"dss-modal"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onModalClosed, onClose"}),e.jsx(s.td,{children:"close"})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-pagination-dss-table-pagination",children:"dss-pagination, dss-table-pagination"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onChangePage"}),e.jsx(s.td,{children:"page-changed"})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-popover",children:"dss-popover"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onAction"}),e.jsx(s.td,{children:"action"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onClose"}),e.jsx(s.td,{children:"close"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-predefined-texts",children:"dss-predefined-texts"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onPredefinedTextsClosed"}),e.jsx(s.td,{children:"close"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onTextSelected"}),e.jsx(s.td,{children:"text-selected"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-sidemenu",children:"dss-sidemenu"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onSidemenuClick"}),e.jsx(s.td,{children:"menu-click"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onToggleAxia"}),e.jsx(s.td,{children:"toggle-axia"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-split-button",children:"dss-split-button"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onClick"}),e.jsx(s.td,{children:"main-click"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onSecondaryClick"}),e.jsx(s.td,{children:"icon-click"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-tabs-list",children:"dss-tabs-list"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onChangeDssTab, onChange"}),e.jsx(s.td,{children:"change"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onAddDssTab"}),e.jsx(s.td,{children:"add-tab"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onOrder"}),e.jsx(s.td,{children:"order"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onEdit"}),e.jsx(s.td,{children:"edit"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onDelete"}),e.jsx(s.td,{children:"delete"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-toast",children:"dss-toast"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onClose"}),e.jsx(s.td,{children:"close"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onButtonClick"}),e.jsx(s.td,{children:"button-click"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-upload-box",children:"dss-upload-box"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onUploadFiles"}),e.jsx(s.td,{children:"upload-files"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onOpenFile"}),e.jsx(s.td,{children:"open-file"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"dss-widget",children:"dss-widget"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Nom v2"}),e.jsx(s.th,{children:"Nom v3"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onAction"}),e.jsx(s.td,{children:"action"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onNext"}),e.jsx(s.td,{children:"next"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"onClose"}),e.jsx(s.td,{children:"close"})]})]})]})]})}function j(d={}){const{wrapper:s}={...r(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(n,{...d})}):n(d)}export{j as default};
