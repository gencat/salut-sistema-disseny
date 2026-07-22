import{j as e,M as r,T as o,C as n}from"./blocks-D_zk3kjZ.js";import{useMDXComponents as l}from"./index-D0A3GcHo.js";import{S as t,P as d,B as c,D as p,R as u,a as h,C as m,b as x,F as j}from"./timepicker.stories-vadjq2eZ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DNLJd-HG.js";import"./storybook-decorators-DSS85Rnr.js";function a(i){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("component-title",{children:"dss-timepicker"})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default",children:"Default"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#nom%C3%A9s-lectura",children:"Només lectura"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#dropdown-list",children:"Dropdown List"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#dropdown-custom-list",children:"Dropdown Custom List"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#dropdown-manual",children:"Dropdown Manual"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#focus-manual",children:"Focus manual"})}),`
`]}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(s.p,{children:"Timepicker simple amb opcions de mida i text d’ajuda."}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s.p,{children:"Timepicker deshabilitat."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"només-lectura",children:"Només lectura"}),`
`,e.jsx(s.p,{children:"Només lectura amb valor predefinit."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"dropdown-list",children:"Dropdown List"}),`
`,e.jsx(s.p,{children:"Timepicker de tipus llista per defecte o amb opcions definides per delimitar el rang d’hores i minuts."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h3,{id:"dropdown-custom-list",children:"Dropdown Custom List"}),`
`,e.jsx(s.p,{children:"Timpicker de tipus llista amb llistat d’opcions personalitzar."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h3,{id:"dropdown-manual",children:"Dropdown Manual"}),`
`,e.jsx(s.p,{children:"Timepicker de tipus manual per defecte o amb opcions definides per a delimitar el rang d’hores i minuts."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"focus-manual",children:"Focus manual"}),`
`,e.jsxs(s.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,e.jsx(s.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,e.jsx(s.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // Timepicker | HTMLElement | any
  }
}
`})}),`
`,e.jsx(s.h3,{id:"navegació-per-teclat",children:"Navegació per teclat"}),`
`,e.jsxs(s.p,{children:["La navegació per teclat s'ha definit seguint els patrons de accessibilidad definits a ",e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/",rel:"nofollow",children:"WAI Patterns"}),`
per a elements de tipus combobox (dropdown) i radio buttons.`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Tab"})}),":  Si l'usuari està fora del timepicker, es navegarà entre els elements de la pàgina. Un cop s'entra al timepicker s'habilitarà l'estat focus de l'input. Si el dropdown està obert, mitjançant la tecla tab els usuaris es desplaçaran a l'opció seleccionada de la llista d'hores o a l'opció disponible per defecte."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Enter"})})," o ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Space"})}),": Si l'usuari està posicionat en l'input i el dropdown està habilitat utilitzant les tecles enter o espai aquest serà desplegat amb les llistes d'opcions. Si l'usuari està situat sobre una de les opcions disponibles en el dropdown en fer servir la tecla Enter aquesta, serà seleccionada i passarà a mostrar-se com el valor de l'input. En el moment que es fa la selecció el dropdown es tancarà."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Esc"})}),": Si l’usuari està posicionat en l’input i el dropdown està habilitat, aquest serà tancat."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Down Arrow"})}),": Si l'usuari està posicionat en eles opcions del dropdown, l'usuari anirà desplaçant-se cap a baix una a una. En el cas que s'arribi a l'última opció, el focus passarà a a la primera opció del desplegable."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Up Arrow"})}),":  Si l’usuari està posicionat sobre les opcions dins del dropdown, l'usuari anirà desplaçant-se cap amunt una a una. En el cas que l'opció amb focus sigui la primera, el focus passarà a l'última opció del desplegable."]}),`
`]})]})}function q(i={}){const{wrapper:s}={...l(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(a,{...i})}):a(i)}export{q as default};
