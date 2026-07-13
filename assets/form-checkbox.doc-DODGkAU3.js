import{j as e,M as l,T as i,C as n,S as o}from"./index-DjDXKsxT.js";import{useMDXComponents as r}from"./index-BX3ucyr2.js";import{S as t,P as d,N as h,T as x,L as u,G as p,a as b,b as m,c as j,d as f,F as k}from"./form-checkbox.stories-CjakAPLK.js";import"./iframe-DtgDvq1Q.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function a(c){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(i,{}),e.jsx("component-title",{children:"dss-form-checkbox"})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"gestió-de-lestat-checked",children:"Gestió de l’estat checked"}),`
`,e.jsxs(s.p,{children:["El component dss-form-checkbox es pot utilitzar de manera individual ",e.jsx(s.strong,{children:"dss-forn-checkbox"})," o dins d’un ",e.jsx(s.strong,{children:"dss-form-checkbox-group"}),`.
Cada cas gestiona l’estat de selecció de forma diferent, i és important utilitzar les propietats correctes per evitar comportaments inesperats.`]}),`
`,e.jsx(s.h5,{id:"checkbox-individual-dss-form-checkbox",children:"Checkbox individual (dss-form-checkbox)"}),`
`,e.jsxs(s.p,{children:[`Quan s’utilitza fora d’un grup, el component no utilitza la propietat value per marcar-se.
En aquest cas, l’estat de selecció es controla exclusivament amb la propietat: `,e.jsx(s.code,{children:"checked"}),": boolean"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"checked = true → el checkbox apareix marcat."}),`
`,e.jsx(s.li,{children:"checked = false → el checkbox apareix desmarcat."}),`
`]}),`
`,e.jsx(o,{code:`
/* HTML */
<dss-form-checkbox name="example" label="Label" checked />

/* React */
<dss-form-checkbox name="example" label="Label" checked={true} />
`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"No enviïs un atribut value en aquest mode. El component gestionarà internament la selecció a partir de la propietat checked."}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h5,{id:"checkbox-dins-dun-grup-dss-form-checkbox-group",children:"Checkbox dins d’un grup (dss-form-checkbox-group)"}),`
`,e.jsx(s.p,{children:"Quan es fa servir dins d’un dss-checkbox-group, el comportament canvia:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"El grup és l’encarregat de gestionar la selecció."}),`
`,e.jsx(s.li,{children:"En aquest cas, NO s’utilitza checked a cada checkbox."}),`
`,e.jsxs(s.li,{children:["Cada checkbox ha de tenir un ",e.jsx(s.code,{children:"value"}),": string únic."]}),`
`,e.jsxs(s.li,{children:["El grup rep un array ",e.jsx(s.code,{children:"value"}),": string[] amb els valors seleccionats."]}),`
`]}),`
`,e.jsxs(s.p,{children:["El grup compara ",e.jsx(s.code,{children:"checkbox.value"})," amb els valors de l’array ",e.jsx(s.code,{children:"group.value"}),", si coincideixen aquell checkbox es marca automàticament."]}),`
`,e.jsx(o,{code:`
/* React */
<dss-form-checkbox-group  name="example" label="Selecciona els teus interessos" value={['jazz', 'rock']}>
  <dss-form-checkbox value="rock" label="Rock"></dss-form-checkbox>
  <dss-form-checkbox value="jazz" label="Jazz"></dss-form-checkbox>
  <dss-form-checkbox value="pop" label="Pop"></dss-form-checkbox>
</dss-form-checkbox-group>
`}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#sense-label",children:"Sense label"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#tipus-validacio",children:"Tipús validacio"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-label",children:"Amb label"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#checkbox-group-vertical",children:"Checkbox Group: vertical"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#checkbox-group-horizontal",children:"Checkbox Group: horizontal"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#checkbox-group-sense-label",children:"Checkbox Group: sense label"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#checkbox-group-value-seleccionat",children:"Checkbox Group: value seleccionat"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#checkbox-group-deshabilitat",children:"Checkbox Group: deshabilitat"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#focus-manual",children:"Focus manual"})}),`
`]}),`
`,e.jsx(s.h3,{id:"sense-label",children:"Sense label"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h3,{id:"tipús-validacio",children:"Tipús validacio"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"amb-label",children:"Amb label"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h4,{id:"checkbox-group-vertical",children:"Checkbox Group: vertical"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h4,{id:"checkbox-group-horizontal",children:"Checkbox Group: horizontal"}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(s.h4,{id:"checkbox-group-sense-label",children:"Checkbox Group: sense label"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h4,{id:"checkbox-group-value-seleccionat",children:"Checkbox Group: value seleccionat"}),`
`,e.jsx(s.p,{children:`Per marcar un valor seleccionat per defecte, s’ha de definir la propietat value amb un valor que existeixi en alguna de les opcions definides. Important: no definir
la propietat checked en el checkbox en qüestió, ja que el propi radio-button-group s’encarrega de gestionar-ho internament.`}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h4,{id:"checkbox-group-deshabilitat",children:"Checkbox Group: deshabilitat"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h3,{id:"focus-manual",children:"Focus manual"}),`
`,e.jsxs(s.p,{children:[`S'ha habilitat el mètode focus(options), que permet passar també les opcions del mètode natiu
`,e.jsx(s.a,{href:"https://www.w3api.com/HTMLDOM/HTMLElement/focus/#par%C3%A1metros",rel:"nofollow",children:"HTMLElement.focus()"}),"."]}),`
`,e.jsx(s.p,{children:`Aquest mètode força el focus sobre l'input intern per corregir problemes
amb la propietat autofocus en entorns complexos.`}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`const forceFocus = () => {
  const element = document.querySelector('#manual-focus-demo');
  if (element) {
    (element as HTMLElement).focus(); // FormCheckbox | HTMLElement | any
  }
}
`})})]})}function S(c={}){const{wrapper:s}={...r(),...c.components};return s?e.jsx(s,{...c,children:e.jsx(a,{...c})}):a(c)}export{S as default};
