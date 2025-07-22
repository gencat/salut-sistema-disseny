import{j as e,M as d,T as c,C as i,a as l}from"./index-38zNK1Ms.js";import{useMDXComponents as r}from"./index-CYIFmVlv.js";import{S as a,P as o,T as h,a as x,b as j,A as p,c as m,d as b,L as u,D as g,e as f,f as A,g as q}from"./tile.stories-BXCoNpzQ.js";import"./iframe-B9pHa-5w.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function t(n){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper {
      display:block;
    }
    .innerZoomElementWrapper > div {
      display: block !important;
    }
    .tiles-wrapper {
      display: flex;
      gap: 20px;
    }
    .tile-wrapper {
      width: 320px;
    }
  `}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(c,{}),e.jsx("dss-badge",{text:"dss-tile",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Les Tiles són components que tenen com a finalitat ressaltar un contingut per
interactuar amb ell (o no) mitjançant Icon Buttons o Switchs. També poden
contenir una icona informativa del contingut.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["type",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsxs(s.td,{children:["Tipus de component. Pot ser: ",e.jsx(s.strong,{children:"button"}),", ",e.jsx(s.strong,{children:"selector"}),", ",e.jsx(s.strong,{children:"action"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"icon"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Icona mostrada a l'esquerra."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasLogo"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Sobreescriu la icona mostrada per una imatge."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"logoURL"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"URL de la imatge que es mostrarà en lloc de la icona."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"tileTitle"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Títol mostrat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"description"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Descripció mostrada."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"selected"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Assigna l'estil seleccionat per defecte."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"disabled"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Assigna l'estil deshabilitat per defecte."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"heightAuto"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Elimina l'altura per defecte del component per ajustar-se dinàmicament al contingut disponible."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"widget"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habiliteu l'opció del tile dins del widget, que afegeix un marge superior per alinear el component dins del contingut."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"marker"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Ressalta dins del títol i la descripció la part del text que coincideixi amb aquesta propietat."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#tipus",children:"Tipus"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#acci%C3%B3-amb-switch",children:"Acció amb switch"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#acci%C3%B3-amb-icon-button",children:"Acció amb icon-button"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#acci%C3%B3-amb-checkbox",children:"Acció amb checkbox"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-logo",children:"Amb logo"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#disabled",children:"Disabled"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"tipus",children:"Tipus"}),`
`,e.jsx(s.h4,{id:"tipus-botó",children:"Tipus: Botó"}),`
`,e.jsx(s.p,{children:"Assigna al tile l'aparença d'un botó, amb els estats corresponents: hover, active i focus."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h4,{id:"tipus-selector",children:"Tipus: Selector"}),`
`,e.jsx(s.p,{children:"A més dels estats del botó afegeix un nou estat seleccionat quan es fa clic al component."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h4,{id:"tipus-acció",children:"Tipus: Acció"}),`
`,e.jsx(s.p,{children:`Permet afegir diferents accions mitjançant l'ús del slot="action"`}),`
`,e.jsx(i,{of:j}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"acció-amb-switch",children:"Acció amb switch"}),`
`,e.jsx(s.p,{children:"Afegir el component dss-switch dins de l'slot:action."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"acció-amb-icon-button",children:"Acció amb icon-button"}),`
`,e.jsx(s.p,{children:"Afegir el component dss-icon-button dins de l'slot:action. Podem afegir un o dos botons."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"acció-amb-checkbox",children:"Acció amb checkbox"}),`
`,e.jsx(s.p,{children:"Afegir el component dss-checkbox dins de l'slot:action."}),`
`,e.jsx(i,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"amb-logo",children:"Amb logo"}),`
`,e.jsx(s.p,{children:"Sobreescriu la icona per una imatge. La mida de la imatge està limitada a la mateixa mida de la icona (48x48px)."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s.p,{children:`Per deshabilitar el component hem de definir la propietat disabled. Les accions (switch, icon button i checkbox) s'han de
deshabilitar al seu propi selector ja que es troben fora del component i s'inclouen mitjançant un slot.
D'aquesta manera podem combinar una tile habilitat però amb l'acció deshabilitat.`}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(i,{of:A}),`
`,e.jsx(i,{of:q}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.7.0"})}),e.jsx(s.td,{children:"S'ha afegit la propietat marker, que permet ressaltar una part del text que coincideixi amb algun dels filtres de cerca."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.2.1"})}),e.jsx(s.td,{children:"S'ha modificat l'estil dels estats hover i active per a les variants de tipus button i selector."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.12.6"})}),e.jsx(s.td,{children:"Afegides les propietats heightAuto i Widget per poder utilitzar el component a la col·lecció Widget."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.10.0"})}),e.jsx(s.td,{children:"S'han actualitzat els colors dels textos en el títol i la descripció per complir amb els requisits d'accessibilitat en totes les variants del component."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.9.0"})}),e.jsx(s.td,{children:"S'ha desactivat l'amplada mínima definida per a les tiles perquè es pugui ajustar als requisits de disseny de les iniciatives."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.6.0"})}),e.jsx(s.td,{children:"S'ha creat una versió Web Component que inclou els tipus: botó, selector i acció."})]})]})]})]})}function L(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{L as default};
