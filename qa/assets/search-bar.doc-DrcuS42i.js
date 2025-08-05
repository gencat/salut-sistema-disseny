import{j as e,M as l,T as t,C as n}from"./index-Clk5vX7U.js";import{useMDXComponents as a}from"./index-DEUIWE5v.js";import{S as c,P as d,a as o,M as h,b as p,R as x,c as m,D as u,L as j,d as f,e as g,C as b}from"./search-bar.stories-CyM9_DEm.js";import"./iframe-rOuWfouE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function s(r){const i={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .css-1sqhzee {
      display:none
    }

    .innerZoomElementWrapper {
      flex-direction: row;
      align-items: center;
    }
    .demo {
      width: 80%;
    }
    .wrapper {
      min-height: 200px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 30px;
    }
    
    .wrapper--no-dropdown {
      min-height: 80px;
    }

    .wrapper {
      width: 600px;
    }

    .wrapper--md {
      width: 400px;
    }

    .wrapper--alignment {
      height: 240px;
    }
  `}),`
`,e.jsx(l,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(t,{}),e.jsx("component-title",{children:"dss-search-bar"})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.p,{children:`El cercador és un component que pot utilitzar-se tant per a realitzar filtres en el contingut
d'una pàgina com per a navegar dins de la mateixa en funció de la cerca. Sí el catàleg de termes o cerques
recents està definit, el component mostrarà un desplegable amb suggerències quan l'usuari escriu a l'input.`}),`
`,e.jsx("br",{}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#simple",children:"Simple"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#m%C3%BAltiple",children:"Múltiple"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#mides",children:"Mides"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#requerit",children:"Requerit"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#deshabilitat",children:"Deshabilitat"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#%C3%BAltimes-cerques",children:"Últimes cerques"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#amb-cerca-predefinida",children:"Amb cerca predefinida"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#cat%C3%A0leg-carregant",children:"Catàleg carregant"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#modificar-l%E2%80%99estil-del-desplegable",children:"Modificar l’estil del desplegable"})}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Cerca per diagnostics, settings o home per habilitar el cercador predictiu."}),`
`]}),`
`,e.jsx(i.h3,{id:"simple",children:"Simple"}),`
`,e.jsx(i.p,{children:`Permet realitzar una cerca escrivint el text en l’input, executant un esdeveniment per activar-la
quan es prem la tecla Enter. Si l’usuari fa clic en un dels resultats predictius, s’assignarà com
a valor de l'input i s’iniciarà la cerca.`}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(i.h3,{id:"múltiple",children:"Múltiple"}),`
`,e.jsx(i.p,{children:`Permet seleccionar diferents termes de cerca al mateix temps. Ja sigui escrivint a l’input i separant-los amb una coma per
tal d’afegir-los o bé fent clic en els resultats predictius. Cada cop que s’afegeixi un nou terme es llençarà un esdeveniment de cerca.`}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"mides",children:"Mides"}),`
`,e.jsx(i.p,{children:"Utilitzarem la mida (md | lg)."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"requerit",children:"Requerit"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"deshabilitat",children:"Deshabilitat"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"últimes-cerques",children:"Últimes cerques"}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Cerca per last, o term  per habilitar el cercador predictiu."}),`
`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"amb-cerca-predefinida",children:"Amb cerca predefinida"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h3,{id:"catàleg-carregant",children:"Catàleg carregant"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h3,{id:"modificar-lestil-del-desplegable",children:"Modificar l’estil del desplegable."}),`
`,e.jsx(n,{of:b}),`
`,e.jsx("br",{})]})}function z(r={}){const{wrapper:i}={...a(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(s,{...r})}):s(r)}export{z as default};
