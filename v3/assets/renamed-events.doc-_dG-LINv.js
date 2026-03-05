import{j as s,M as i}from"./blocks-BQe3t3mS.js";import{useMDXComponents as r}from"./index-D25yCQlW.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CdZ_4rdx.js";function n(d){const e={h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...d.components};return s.jsxs(s.Fragment,{children:[s.jsx(i,{title:"Documentació/Changelog v3/Breaking changes/Esdeveniments renombrats"}),`
`,s.jsx(e.h2,{id:"migració-a-la-v3-canvi-de-nom-dels-esdeveniments",children:"Migració a la v3: Canvi de nom dels esdeveniments"}),`
`,s.jsx("br",{}),`
`,s.jsx(e.p,{children:`Amb la finalitat de reduir la complexitat en l’ús dels esdeveniments personalitzats dels components, s’ha decidit
revisar-ne i modificar-ne el nom amb la idea d’alinear-los i evitar futurs problemes de solapament.`}),`
`,s.jsx(e.p,{children:`Per exemple, React afegeix el prefix “on” a tots els esdeveniments natius per detectar-los. En cas que una
futura versió de React afegeixi suport als esdeveniments personalitzats que té Angular, els esdeveniments
podrien anomenar-se com onOnToggle, ja que el DS també incorpora aquest prefix per defecte.`}),`
`,s.jsx(e.h2,{id:"components",children:"COMPONENTS"}),`
`,s.jsx(e.h3,{id:"dss-accordion",children:"dss-accordion"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onToggleAccordion"}),s.jsx(e.td,{children:"toggle"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onAccordionCheckboxChange"}),s.jsx(e.td,{children:"checkbox-changed"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onAccordionSecondaryAction"}),s.jsx(e.td,{children:"secondary-action"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onPrimaryAction"}),s.jsx(e.td,{children:"primary-action"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onWidgetNext"}),s.jsx(e.td,{children:"next"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onWidgetClose"}),s.jsx(e.td,{children:"close"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-action-menu",children:"dss-action-menu"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onCloseActionMenu"}),s.jsx(e.td,{children:"close"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onClick"}),s.jsx(e.td,{children:"item-click"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onAction"}),s.jsx(e.td,{children:"item-action"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-breadcrumb-bar",children:"dss-breadcrumb-bar"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onItemClick"}),s.jsx(e.td,{children:"item-click"})]})})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-chip",children:"dss-chip"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onToggle"}),s.jsx(e.td,{children:"toggle"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onDelete"}),s.jsx(e.td,{children:"delete"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-content-switcher",children:"dss-content-switcher"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onChange"}),s.jsx(e.td,{children:"change"})]})})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-drawer",children:"dss-drawer"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onDrawerClosed, onClose"}),s.jsx(e.td,{children:"close"})]})})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-header-links",children:"dss-header-links"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onClickItem"}),s.jsx(e.td,{children:"link-click"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onHelp"}),s.jsx(e.td,{children:"help"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-header-menu-patient",children:"dss-header-menu-patient"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onCopyCIP"}),s.jsx(e.td,{children:"copy-cip"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onViewDetails"}),s.jsx(e.td,{children:"view-details"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onEdit"}),s.jsx(e.td,{children:"edit"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-header-menu-professional",children:"dss-header-menu-professional"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onViewDetails"}),s.jsx(e.td,{children:"view-details"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onExit"}),s.jsx(e.td,{children:"exit"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onLogout"}),s.jsx(e.td,{children:"logout"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-modal",children:"dss-modal"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onModalClosed, onClose"}),s.jsx(e.td,{children:"close"})]})})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-pagination-dss-table-pagination",children:"dss-pagination, dss-table-pagination"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onChangePage"}),s.jsx(e.td,{children:"page-changed"})]})})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-popover",children:"dss-popover"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onAction"}),s.jsx(e.td,{children:"action"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onClose"}),s.jsx(e.td,{children:"close"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-slider",children:"dss-slider"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onDssSliderValueChange"}),s.jsx(e.td,{children:"value-changed"})]})})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-split-button",children:"dss-split-button"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onClick"}),s.jsx(e.td,{children:"main-click"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onSecondaryClick"}),s.jsx(e.td,{children:"icon-click"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-stepper",children:"dss-stepper"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onStepClick"}),s.jsx(e.td,{children:"step-click"})]})})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-tabs",children:"dss-tabs"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onChangeDssTab, onChange"}),s.jsx(e.td,{children:"change"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onAddDssTab"}),s.jsx(e.td,{children:"add-tab"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onOrder"}),s.jsx(e.td,{children:"order"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onEdit"}),s.jsx(e.td,{children:"edit"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onDelete"}),s.jsx(e.td,{children:"delete"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-toast",children:"dss-toast"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onClose"}),s.jsx(e.td,{children:"close"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onButtonClick"}),s.jsx(e.td,{children:"button-click"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-upload-box",children:"dss-upload-box"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onUploadFiles"}),s.jsx(e.td,{children:"upload-files"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onOpenFile"}),s.jsx(e.td,{children:"open-file"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h2,{id:"collections",children:"COLLECTIONS"}),`
`,s.jsx(e.h3,{id:"dss-card",children:"dss-card"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onClose"}),s.jsx(e.td,{children:"close"})]})})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-predefined-texts",children:"dss-predefined-texts"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onPredefinedTextsClosed"}),s.jsx(e.td,{children:"close"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onTextSelected"}),s.jsx(e.td,{children:"text-selected"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-sidemenu",children:"dss-sidemenu"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onSidemenuClick"}),s.jsx(e.td,{children:"menu-click"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onToggleAxia"}),s.jsx(e.td,{children:"toggle-axia"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"dss-widget",children:"dss-widget"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Nom v2"}),s.jsx(e.th,{children:"Nom v3"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onAction"}),s.jsx(e.td,{children:"action"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onNext"}),s.jsx(e.td,{children:"next"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:"onClose"}),s.jsx(e.td,{children:"close"})]})]})]})]})}function j(d={}){const{wrapper:e}={...r(),...d.components};return e?s.jsx(e,{...d,children:s.jsx(n,{...d})}):n(d)}export{j as default};
