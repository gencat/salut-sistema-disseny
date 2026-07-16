import{j as e,M as a,T as c,C as l}from"./blocks-C0Hy_QiU.js";import{useMDXComponents as r}from"./index-CYcGtXlX.js";import{S as t,P as o,a as d,M as p,b as h,c as m,U as x,T as j,N as u,I as f,B as b,d as g,O as v,A as q,F as M}from"./select.stories-Czy2OLWL.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-_r7gOCbv.js";import"./storybook-decorators-DSS85Rnr.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:t}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(c,{}),e.jsx("component-title",{children:"dss-select"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(l,{of:o}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#simple",children:"Simple"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#m%C3%BAltiple",children:"Múltiple"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#seleccionarTot",children:"Seleccionar-ho tot"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#valor-preseleccionat",children:"Valor preseleccionat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#desseleccionable",children:"Desseleccionable"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tipus",children:"Tipus"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#Sensetick",children:"Sense tick"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#modificar-icona",children:"Modificar icona"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#dropdown-style",children:"Dropdown style"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#estats-input",children:"Estats de l'Input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#obrir-amb-cerca",children:"Obrir amb cerca"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#filtre-avan%C3%A7at",children:"Filtre avançat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#focus-manual",children:"Focus manual"})}),`
`]}),`
`,e.jsx(n.h3,{id:"simple",children:"Simple"}),`
`,e.jsx(n.p,{children:"Permet seleccionar un element."}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h3,{id:"múltiple",children:"Múltiple"}),`
`,e.jsx(n.p,{children:"Permet seleccionar més d'un element."}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h3,{id:"seleccionar-ho-tot",children:"Seleccionar-ho tot"}),`
`,e.jsxs(n.p,{children:[`Permet seleccionar tots els elements.
Per indicar que el DropDown mostri l'input de seleccionar-ho tot, cal afegir la propietat
`,e.jsx(n.strong,{children:"selectAll"})," i que sigui de  selecció múltiple al component, també indicar el ",e.jsx(n.strong,{children:"labelSelectAll"}),` i el
`,e.jsx(n.strong,{children:"labelDeselectAll"}),` per canviar els valors per defecte dels inputs si cal. Per
defecte, els inputs mostren `,e.jsx(n.strong,{children:"Seleccionar-ho tot"})," i ",e.jsx(n.strong,{children:"Deseleccionar-ho tot"}),"."]}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h3,{id:"valor-preseleccionat",children:"Valor preseleccionat"}),`
`,e.jsx(n.p,{children:"Permet indicar quin element o elements estan seleccionats per defecte."}),`
`,e.jsxs(n.p,{children:["Aquest nou component permet assignar el valor predefinit mitjançant la propietat ",e.jsx(n.code,{children:"selectedValue"})," de tipus ",e.jsx(n.code,{children:"string[]"}),` i també mitjançant
la propietat `,e.jsx(n.code,{children:"value"})," de tipus ",e.jsx(n.code,{children:"string"}),", que s’ha habilitat per a l’ús del component en formularis reactius."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`selectedValue={['1','2']}  
value="1,2"
`})}),`
`,e.jsx(n.p,{children:`Si el component s’utilitza en un formulari de React Hook Form amb register, la propietat value és gestionada internament pel formulari,
de manera que no cal afegir-la manualment.`}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(n.h3,{id:"desseleccionable",children:"Desseleccionable"}),`
`,e.jsx(n.p,{children:"Permet deseleccionar un element seleccionat si es torna a clicar sobre ell. (Només per selectors simples)"}),`
`,e.jsx(l,{of:x}),`
`,e.jsx(n.h3,{id:"tipus",children:"Tipus"}),`
`,e.jsx(n.p,{children:"Hi ha el default i green. No afegir-ne un altre que no sigui un d'aquests dos."}),`
`,e.jsx(l,{of:j}),`
`,e.jsx(n.h3,{id:"sense-tick",children:"Sense tick"}),`
`,e.jsx(n.p,{children:`Permet desactivar el tick que apareix a l'esquerra de cada element.
Llavors apareixerà un radi de selecció o un checkbox, depenent de si
és un selector simple o múltiple.`}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(n.h3,{id:"modificar-icona",children:"Modificar icona"}),`
`,e.jsx(n.p,{children:"Permet modificar la icona principal del component afegint l'atribut icon i el valor corresponent de la llibreria Material Icons. En cas de no indicar-se el component prendrà per defecte el valor de la icona 'search'"}),`
`,e.jsx(l,{of:f}),`
`,e.jsx(n.h3,{id:"dropdown-style",children:"Dropdown style"}),`
`,e.jsx(n.p,{children:"Permet canviar l'estil del dropdown."}),`
`,e.jsx(l,{of:b}),`
`,e.jsx(n.h3,{id:"estats-de-linput",children:"Estats de l'Input"}),`
`,e.jsx(n.p,{children:"Estats: required, disabled, readonly"}),`
`,e.jsx(l,{of:g}),`
`,e.jsx(n.h3,{id:"obrir-amb-cerca",children:"Obrir amb cerca"}),`
`,e.jsx(l,{of:v}),`
`,e.jsx(n.h3,{id:"filtre-avançat",children:"Filtre avançat"}),`
`,e.jsx(n.p,{children:`Nova cerca avançada que s’activa amb la propietat advancedFilter.
La propietat threshold s’aplica de manera individual a cada terme, de manera que si per defecte tenim un llindar de 2,
la cerca "diag cr" aplicarà tots dos termes, però la cerca "diag c" només aplicarà el terme "diag".`}),`
`,e.jsx(l,{of:q}),`
`,e.jsx(n.h3,{id:"focus-manual",children:"Focus manual"}),`
`,e.jsxs(n.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,e.jsx(n.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,e.jsx(n.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,e.jsx(l,{of:M}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const forceFocus = () => {
  const select = document.querySelector('#manual-focus-demo');
  if (select) 
    (select as HTMLElement).focus(); // Select | HTMLElement | any
  
}
`})})]})}function k(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{k as default};
