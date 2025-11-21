import{j as e,M as c,T as t,C as i}from"./index-B0o4jD7T.js";import{useMDXComponents as a}from"./index-CI2KCRmc.js";import{S as o,P as d,a as h,I as s,M as p,b as x,c as m,U as j,T as u,N as f,B as b,d as v,O as g,A as q}from"./form-select.stories-CVEPSEOI.js";import"./iframe-BHr_tuW3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function r(l){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(t,{}),e.jsx("component-title",{children:"dss-form-select"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#simple",children:"Simple"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-icona",children:"Amb icona"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#m%C3%BAltiple",children:"Múltiple"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#seleccionarTot",children:"Seleccionar-ho tot"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#valor-preseleccionat",children:"Valor preseleccionat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#desseleccionable",children:"Desseleccionable"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tipus",children:"Tipus"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#Sensetick",children:"Sense tick"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#box-style",children:"Box style"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#estats-input",children:"Estats de l'Input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#obrir-amb-cerca",children:"Obrir amb cerca"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#filtre-avan%C3%A7at",children:"Filtre avançat"})}),`
`]}),`
`,e.jsx(n.h3,{id:"simple",children:"Simple"}),`
`,e.jsx(n.p,{children:"Permet seleccionar un element."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"amb-icona",children:"Amb icona"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h3,{id:"múltiple",children:"Múltiple"}),`
`,e.jsx(n.p,{children:"Permet seleccionar més d'un element."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"seleccionar-ho-tot",children:"Seleccionar-ho tot"}),`
`,e.jsxs(n.p,{children:[`Permet seleccionar tots els elements.
Per indicar que el DropDown mostri l'input de seleccionar-ho tot, cal afegir la propietat
`,e.jsx(n.strong,{children:"selectAll"})," i que sigui de  selecció múltiple al component, també indicar el ",e.jsx(n.strong,{children:"labelSelectAll"}),` i el
`,e.jsx(n.strong,{children:"labelDeselectAll"}),` per canviar els valors per defecte dels inputs si cal. Per
defecte, els inputs mostren `,e.jsx(n.strong,{children:"Seleccionar-ho tot"})," i ",e.jsx(n.strong,{children:"Deseleccionar-ho tot"}),"."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"valor-preseleccionat",children:"Valor preseleccionat"}),`
`,e.jsx(n.p,{children:"Permet indicar quin element o elements estan seleccionats per defecte."}),`
`,e.jsxs(n.p,{children:["Aquest nou component permet assignar el valor predefinit mitjançant la propietat ",e.jsx(n.code,{children:"selectedValue"})," de tipus ",e.jsx(n.code,{children:"string[]"}),` i també mitjançant
la propietat `,e.jsx(n.code,{children:"value"})," de tipus ",e.jsx(n.code,{children:"string"}),", que s’ha habilitat per a l’ús del component en formularis reactius."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`selectedValue={['1','2']}  
value="1,2"
`})}),`
`,e.jsx(n.p,{children:`Si el component s’utilitza en un formulari de React Hook Form amb register, la propietat value és gestionada internament pel formulari,
de manera que no cal afegir-la manualment.`}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"desseleccionable",children:"Desseleccionable"}),`
`,e.jsx(n.p,{children:"Permet deseleccionar un element seleccionat si es torna a clicar sobre ell. (Només per selectors simples)"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"tipus",children:"Tipus"}),`
`,e.jsx(n.p,{children:"Hi ha el default i green. No afegir-ne un altre que no sigui un d'aquests dos."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"sense-tick",children:"Sense tick"}),`
`,e.jsx(n.p,{children:`Permet desactivar el tick que apareix a l'esquerra de cada element.
Llavors apareixerà un radi de selecció o un checkbox, depenent de si
és un selector simple o múltiple.`}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h3,{id:"modificar-icona",children:"Modificar icona"}),`
`,e.jsx(n.p,{children:"Permet modificar la icona principal del component afegint l'atribut icon i el valor corresponent de la llibreria Material Icons. En cas de no indicar-se el component prendrà per defecte el valor de la icona 'search'"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n.h3,{id:"box-style",children:"Box style"}),`
`,e.jsx(n.p,{children:"Permet canviar l'estil de la caixa."}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h3,{id:"estats-de-linput",children:"Estats de l'Input"}),`
`,e.jsx(n.p,{children:"Estats: required, disabled, readonly"}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(n.h3,{id:"obrir-amb-cerca",children:"Obrir amb cerca"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h3,{id:"filtre-avançat",children:"Filtre avançat"}),`
`,e.jsx(n.p,{children:`Nova cerca avançada que s’activa amb la propietat advancedFilter.
La propietat threshold s’aplica de manera individual a cada terme, de manera que si per defecte tenim un llindar de 2,
la cerca "diag cr" aplicarà tots dos termes, però la cerca "diag c" només aplicarà el terme "diag".`}),`
`,e.jsx(i,{of:q})]})}function N(l={}){const{wrapper:n}={...a(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(r,{...l})}):r(l)}export{N as default};
