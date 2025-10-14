import{j as e,M as a,T as c,C as s}from"./index-DfM5zTQV.js";import{useMDXComponents as r}from"./index-DRdaJ3vx.js";import{S as t,P as o,a as d,M as h,b as x,c as p,U as j,T as m,N as u,I as f,B as b,d as g,O as v,A as q}from"./input-dropdown.stories-CLqAGe5d.js";import"./iframe-zTjM1nUE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function l(i){const n={a:"a",blockquote:"blockquote",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .container-dropdownlist {
      display: flex;
      gap: 20px;
      min-height: 220px;
    }
  `}),`
`,e.jsx(a,{of:t}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(c,{}),e.jsx("component-title",{children:"dss-input-dropdown"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:o}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#simple",children:"Simple"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#m%C3%BAltiple",children:"Múltiple"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#seleccionarTot",children:"Seleccionar-ho tot"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#valor-preseleccionat",children:"Valor preseleccionat"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#desseleccionable",children:"Desseleccionable"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#tipus",children:"Tipus"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#Sensetick",children:"Sense tick"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#box-style",children:"Box style"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#estats-input",children:"Estats de l'Input"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#obrir-amb-cerca",children:"Obrir amb cerca"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"#filtre-avan%C3%A7at",children:"Filtre avançat"})}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Nota:"})," El div amb la classe ",e.jsx(n.strong,{children:"container-dropdownlist"}),` es només per a mostrar-ho
amb un mínim de altura a la documentació. `,e.jsx(n.strong,{children:`No es te que fer servir fora de la
pàgina de documentació.`})]})}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"simple",children:"Simple"}),`
`,e.jsx(n.p,{children:"Permet seleccionar un element."}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"múltiple",children:"Múltiple"}),`
`,e.jsx(n.p,{children:"Permet seleccionar més d'un element."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"seleccionar-ho-tot",children:"Seleccionar-ho tot"}),`
`,e.jsxs(n.p,{children:[`Permet seleccionar tots els elements.
Per indicar que el DropDown mostri l'input de seleccionar-ho tot, cal afegir la propietat
`,e.jsx(n.strong,{children:"selectAll"})," i que sigui de  selecció múltiple al component, també indicar el ",e.jsx(n.strong,{children:"labelSelectAll"}),` i el
`,e.jsx(n.strong,{children:"labelDeselectAll"}),` per canviar els valors per defecte dels inputs si cal. Per
defecte, els inputs mostren `,e.jsx(n.strong,{children:"Seleccionar-ho tot"})," i ",e.jsx(n.strong,{children:"Deseleccionar-ho tot"}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"valor-preseleccionat",children:"Valor preseleccionat"}),`
`,e.jsx(n.p,{children:"Permet indicar quin element o elements estan seleccionats per defecte."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"desseleccionable",children:"Desseleccionable"}),`
`,e.jsx(n.p,{children:"Permet deseleccionar un element seleccionat si es torna a clicar sobre ell. (Només per selectors simples)"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"tipus",children:"Tipus"}),`
`,e.jsx(n.p,{children:"Hi ha el default i green. No afegir-ne un altre que no sigui un d'aquests dos."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"sense-tick",children:"Sense tick"}),`
`,e.jsx(n.p,{children:`Permet desactivar el tick que apareix a l'esquerra de cada element.
Llavors apareixerà un radi de selecció o un checkbox, depenent de si
és un selector simple o múltiple.`}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"modificar-icona",children:"Modificar icona"}),`
`,e.jsx(n.p,{children:"Permet modificar la icona principal del component afegint l'atribut icon i el valor corresponent de la llibreria Material Icons. En cas de no indicar-se el component prendrà per defecte el valor de la icona 'search'"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"box-style",children:"Box style"}),`
`,e.jsx(n.p,{children:"Permet canviar l'estil de la caixa."}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h3,{id:"estats-de-linput",children:"Estats de l'Input"}),`
`,e.jsx(n.p,{children:"Estats: required, disabled, readonly"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h3,{id:"obrir-amb-cerca",children:"Obrir amb cerca"}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h3,{id:"filtre-avançat",children:"Filtre avançat"}),`
`,e.jsx(n.p,{children:`Nova cerca avançada que s’activa amb la propietat advancedFilter.
La propietat threshold s’aplica de manera individual a cada terme, de manera que si per defecte tenim un llindar de 2,
la cerca "diag cr" aplicarà tots dos termes, però la cerca "diag c" només aplicarà el terme "diag".`}),`
`,e.jsx(s,{of:q})]})}function C(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{C as default};
