import{j as e,M as r,T as o,C as i}from"./index-D6OjdqE2.js";import{useMDXComponents as l}from"./index-Cs_-3dnX.js";import{S as t,P as d,B as c,D as p,R as u,a as h,C as x,b as j}from"./timepicker.stories-W7VPlsZ9.js";import"./iframe-Cp4mteJF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-element-BL4lq474.js";import"./lit-html-D6cejpwM.js";function a(n){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .container--flex {
        display: flex;
        justify-content: flex-start;
        align-items: end;
        gap: 30px;
    }
    .container--dropdown {
        height: 330px;
    }
  `}),`
`,e.jsx(r,{of:t}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("component-title",{children:"dss-timepicker"})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default",children:"Default"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#dropdown-list",children:"Dropdown List"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#dropdown-custom-list",children:"Dropdown Custom List"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#dropdown-manual",children:"Dropdown Manual"})}),`
`]}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(s.p,{children:"Timepicker simple amb opcions de mida i text d’ajuda."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s.p,{children:"Timepicker deshabilitat."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(s.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsx(s.p,{children:"Només lectura amb valor predefinit."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(s.h3,{id:"dropdown-list",children:"Dropdown List"}),`
`,e.jsx(s.p,{children:"Timepicker de tipus llista per defecte o amb opcions definides per delimitar el rang d’hores i minuts."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h3,{id:"dropdown-custom-list",children:"Dropdown Custom List"}),`
`,e.jsx(s.p,{children:"Timpicker de tipus llista amb llistat d’opcions personalitzar."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h3,{id:"dropdown-manual",children:"Dropdown Manual"}),`
`,e.jsx(s.p,{children:"Timepicker de tipus manual per defecte o amb opcions definides per a delimitar el rang d’hores i minuts."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.h3,{id:"navegació-per-teclat",children:"Navegació per teclat"}),`
`,e.jsxs(s.p,{children:["La navegació per teclat s'ha definit seguint els patrons de accessibilidad definits a ",e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/",rel:"nofollow",children:"WAI Patterns"}),`
per a elements de tipus combobox (dropdown) i radio buttons.`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Tab"})}),":  Si l'usuari està fora del timepicker, es navegarà entre els elements de la pàgina. Un cop s'entra al timepicker s'habilitarà l'estat focus de l'input. Si el dropdown està obert, mitjançant la tecla tab els usuaris es desplaçaran a l'opció seleccionada de la llista d'hores o a l'opció disponible per defecte."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Enter"})})," o ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Space"})}),": Si l'usuari està posicionat en l'input i el dropdown està habilitat utilitzant les tecles enter o espai aquest serà desplegat amb les llistes d'opcions. Si l'usuari està situat sobre una de les opcions disponibles en el dropdown en fer servir la tecla Enter aquesta, serà seleccionada i passarà a mostrar-se com el valor de l'input. En el moment que es fa la selecció el dropdown es tancarà."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Esc"})}),": Si l’usuari està posicionat en l’input i el dropdown està habilitat, aquest serà tancat."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Down Arrow"})}),": Si l'usuari està posicionat en eles opcions del dropdown, l'usuari anirà desplaçant-se cap a baix una a una. En el cas que s'arribi a l'última opció, el focus passarà a a la primera opció del desplegable."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Up Arrow"})}),":  Si l’usuari està posicionat sobre les opcions dins del dropdown, l'usuari anirà desplaçant-se cap amunt una a una. En el cas que l'opció amb focus sigui la primera, el focus passarà a l'última opció del desplegable."]}),`
`]})]})}function S(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{S as default};
