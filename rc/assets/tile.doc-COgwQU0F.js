import{ae as e,af as l,ag as r,ah as i,ai as c}from"./index-D51CeFyD.js";import{u as d}from"./index-Dvvi2AU9.js";import{S as a,P as o,T as h,a as x,b as j,A as p,c as u,d as b,L as m,D as g,e as f,f as A,g as q}from"./tile.stories-ZKctoWct.js";import"./iframe-C-plfy9T.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function t(s){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`,e.jsx(l,{of:a}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("dss-badge",{text:"dss-tile",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:`Les Tiles són components que tenen com a finalitat ressaltar un contingut per
interactuar amb ell (o no) mitjançant Icon Buttons o Switchs. També poden
contenir una icona informativa del contingut.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"type"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Requerida"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:["Tipus de component. Pot ser: ",e.jsx(n.strong,{children:"button"}),", ",e.jsx(n.strong,{children:"selector"}),", ",e.jsx(n.strong,{children:"action"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"icon"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Icona mostrada a l'esquerra."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hasLogo"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Sobreescriu la icona mostrada per una imatge."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"logoURL"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"URL de la imatge que es mostrarà en lloc de la icona."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"tileTitle"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Títol mostrat."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"description"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Descripció mostrada."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"selected"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Assigna l'estil seleccionat per defecte."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disabled"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Assigna l'estil deshabilitat per defecte."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"heightAuto"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Elimina l'altura per defecte del component per ajustar-se dinàmicament al contingut disponible."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"widget"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Habiliteu l'opció del tile dins del widget, que afegeix un marge superior per alinear el component dins del contingut."})]})]})]}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tipus",children:"Tipus"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#acci%C3%B3-amb-switch",children:"Acció amb switch"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#acci%C3%B3-amb-icon-button",children:"Acció amb icon-button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#acci%C3%B3-amb-checkbox",children:"Acció amb checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-logo",children:"Amb logo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#disabled",children:"Disabled"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"tipus",children:"Tipus"}),`
`,e.jsx(n.h4,{id:"tipus-botó",children:"Tipus: Botó"}),`
`,e.jsx(n.p,{children:"Assigna al tile l'aparença d'un botó, amb els estats corresponents: hover, active i focus."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h4,{id:"tipus-selector",children:"Tipus: Selector"}),`
`,e.jsx(n.p,{children:"A més dels estats del botó afegeix un nou estat seleccionat quan es fa clic al component."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h4,{id:"tipus-acció",children:"Tipus: Acció"}),`
`,e.jsx(n.p,{children:`Permet afegir diferents accions mitjançant l'ús del slot="action"`}),`
`,e.jsx(i,{of:j}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"acció-amb-switch",children:"Acció amb switch"}),`
`,e.jsx(n.p,{children:"Afegir el component dss-switch dins de l'slot:action."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"acció-amb-icon-button",children:"Acció amb icon-button"}),`
`,e.jsx(n.p,{children:"Afegir el component dss-icon-button dins de l'slot:action. Podem afegir un o dos botons."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"acció-amb-checkbox",children:"Acció amb checkbox"}),`
`,e.jsx(n.p,{children:"Afegir el component dss-checkbox dins de l'slot:action."}),`
`,e.jsx(i,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"amb-logo",children:"Amb logo"}),`
`,e.jsx(n.p,{children:"Sobreescriu la icona per una imatge. La mida de la imatge està limitada a la mateixa mida de la icona (48x48px)."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:`Per deshabilitar el component hem de definir la propietat disabled. Les accions (switch, icon button i checkbox) s'han de
deshabilitar al seu propi selector ja que es troben fora del component i s'inclouen mitjançant un slot.
D'aquesta manera podem combinar una tile habilitat però amb l'acció deshabilitat.`}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(i,{of:A}),`
`,e.jsx(i,{of:q}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.0.0"})}),e.jsx(n.td,{children:"Refactor v2."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.12.6"})}),e.jsx(n.td,{children:"Afegides les propietats heightAuto i Widget per poder utilitzar el component a la col·lecció Widget."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.10.0"})}),e.jsx(n.td,{children:"S'han actualitzat els colors dels textos en el títol i la descripció per complir amb els requisits d'accessibilitat en totes les variants del component."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.9.0"})}),e.jsx(n.td,{children:"S'ha desactivat l'amplada mínima definida per a les tiles perquè es pugui ajustar als requisits de disseny de les iniciatives."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.6.0"})}),e.jsx(n.td,{children:"S'ha creat una versió Web Component que inclou els tipus: botó, selector i acció."})]})]})]})]})}function B(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{B as default};
