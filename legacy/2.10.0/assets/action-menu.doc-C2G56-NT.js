import{j as e,M as o,T as l,C as i}from"./index-B0o4jD7T.js";import{useMDXComponents as t}from"./index-CI2KCRmc.js";import{S as r,P as c,a as d,E as p,D as m,I as x,N as h,b as u,c as j}from"./action-menu.stories-CaoJsHWA.js";import"./iframe-BHr_tuW3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-element-BL4lq474.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function s(a){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:r}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("component-title",{children:"dss-action-menu"}),e.jsx("component-title",{children:"dss-action-menu-item"})]}),`
`,e.jsx(n.p,{children:`L'Action Menu s'utilitza quan hi ha opcions addicionals disponibles per a
l'usuari i hi ha una restricció d'espai. El menú d'accions manté les accions
clau a prop en un menú net i discret.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Breaking change:"})}),`
`,e.jsx(n.p,{children:`La lògica per mostrar o amagar el component s’ha implementat dins del component per facilitar-ne l’ús, de manera que és el mateix component
qui gestiona els esdeveniments click i click-out sobre l’element pare per mostrar el action-menu a la posició indicada.`}),`
`,e.jsx(n.p,{children:"Per aquest motiu, és imprescindible que s’elimini en les iniciatives qualsevol lògica afegida anteriorment, incloent qualsevol position:relative o position:absolute."}),`
`,e.jsx(n.p,{children:`Aquesta nova funcionalitat s’ha implementat de manera que els action-menus no es vegin afectats pel flux de la resta de components, corregint així el problema que
trobàvem fins ara quan un element apareixia retallat a causa d’un contenidor amb la propietat overflow definida.`}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default",children:"Defaul"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#opcions-dicones",children:"Opcions d'icones"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#nested-menu",children:"Nested Menu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#posici%C3%B3",children:"Posició"})}),`
`]}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.h5,{id:"estat-primary",children:"Estat primary"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h5,{id:"estat-error",children:"Estat error"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h5,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"opcions-dicones",children:"Opcions d'icones"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"notificacions",children:"Notificacions"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"nested-menu",children:"Nested Menu"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"posició",children:"Posició"}),`
`,e.jsx(n.p,{children:"La propietat position permet definir diferents tipus de combinacions per visualitzar el menú desplegable."}),`
`,e.jsx(n.p,{children:"Per defecte, les opcions 'top', 'bottom', 'left' o 'right' col·locaran el desplegable just en aquesta posició i centrat respecte a l’element de referència."}),`
`,e.jsx(n.p,{children:"Si cal desactivar el desplegable centrat, s'ha d'afegir la combinació 'xxx-start' o 'xxx-end'. Això farà que el desplegable se situï des de l'inici del component cap avall o cap a la dreta (-start), o cap amunt o cap a l'esquerra (-end), segons si es tracta de top/bottom o left/right."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"ús",children:"Ús"}),`
`,e.jsx(n.h5,{id:"mida-màxima-amplada-i-alçada",children:"Mida màxima: amplada i alçada"}),`
`,e.jsx(n.p,{children:"Mínima amplada 160px i màxima amplada 280px, tenint en compte que a partir de 160px s'adaptarà l'amplada del modal fins a 280px."})]})}function E(a={}){const{wrapper:n}={...t(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{E as default};
