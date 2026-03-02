import{j as e,M as l,T as c,C as n}from"./index-Ci-QW8TK.js";import{useMDXComponents as a}from"./index-vWQxwATx.js";import{S as o,P as r,B as d,D as m,C as h,A as x,a as p,b as j,I as u,c as b,W as f}from"./item-list.stories-CXEUDUca.js";import"./iframe-Byxth8ye.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function t(s){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(c,{}),e.jsx("component-title",{children:"dss-item-list"}),e.jsx("component-title",{children:"dss-item-list-base"})]}),`
`,e.jsx("br",{}),`
`,e.jsx("dss-alert",{fullWidth:!0,state:"warning",message:"S’ha redissenyat la implementació d’aquest component per facilitar-ne l’ús i fer més flexible la gestió de totes les accions associades a cada ítem."}),`
`,e.jsxs(i.p,{children:["A partir de la ",e.jsx(i.strong,{children:"versió 2.12.2"}),", el contingut de l’item-list es gestionarà mitjançant slots, fent ús alhora del subcomponent ",e.jsx(i.code,{children:"dss-item-list-base"}),`, que conté les propietats
necessàries per mostrar tots els detalls a l’esquerra de l’element i un slot per afegir totes les accions a la zona dreta.`,e.jsx("br",{})]}),`
`,e.jsxs(i.p,{children:["Si voleu continuar utilitzant la versió anterior del component, si us plau, consulteu la ",e.jsx("a",{href:"https://codisisdisseny.salut.gencat.cat/legacy/2.12.0/?path=/docs/components-item-list--docs",children:"documentació de la v2.12.1"}),"."]}),`
`,e.jsx("br",{}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#defaul",children:"Default"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-decorative-icon",children:"Amb decorative icon"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-accions",children:"Amb accions"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#interactiu",children:"Interactiu"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#seleccionable",children:"Seleccionable"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#widget",children:"Widget"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h3,{id:"default",children:"Default"}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h3,{id:"amb-decorative-icon",children:"Amb decorative icon"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"amb-criticitat",children:"Amb criticitat"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"amb-accions",children:"Amb accions"}),`
`,e.jsx(i.p,{children:`La implementació del nou item-list-base permet afegir de manera flexible qualsevol tipus d’acció o element
informatiu extra, i cal configurar cadascun d’ells de manera individual perquè s’adapti al disseny proposat.`}),`
`,e.jsx(i.h5,{id:"amb-accions-icon-button",children:"Amb accions: icon-button"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h5,{id:"amb-accions-badge",children:"Amb accions: badge"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h5,{id:"amb-accions-chip",children:"Amb accions: chip"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"interactiu",children:"Interactiu"}),`
`,e.jsxs(i.p,{children:["La propietat ",e.jsx(i.code,{children:"interactive"})," a l’item-list-base converteix el títol en un botó clicable que retorna l’esdeveniment personalitzat item-click. Si la propietat disabled està inclosa a l’item-list-base, l’esdeveniment item-click també quedarà deshabilitat."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"seleccionable",children:"Seleccionable"}),`
`,e.jsxs(i.p,{children:["La propietat ",e.jsx(i.code,{children:"selectable"})," a l’item-list-base habilita un slot anomenat «selector» que permet afegir un element per seleccionar manualment l’ítem. Aquest element es col·loca a l’esquerra de l’ítem, abans de la icon-badge i la icona decorativa."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h3,{id:"widget",children:"Widget"}),`
`,e.jsxs(i.p,{children:["Per utilitzar la nova implementació de l’item-list en mode widget només cal aplicar la propietat ",e.jsx(i.code,{children:"widget"}),", que elimina els padding exteriors per evitar conflictes."]}),`
`,e.jsx(i.p,{children:"La resta d’accions ara és totalment configurable mitjançant les propietats i els slots disponibles."}),`
`,e.jsx(n,{of:f})]})}function M(s={}){const{wrapper:i}={...a(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(t,{...s})}):t(s)}export{M as default};
