import{j as e,M as o,T as r,C as s,S as a}from"./blocks-BQe3t3mS.js";import{useMDXComponents as i}from"./index-D25yCQlW.js";import{S as d,P as t,N as h,T as x,L as u,G as p,a as b,b as j,c as k,d as m}from"./checkbox.stories-BUG4mV03.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CdZ_4rdx.js";import"./storybook-decorators-DSS85Rnr.js";function l(n){const c={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("component-title",{children:"dss-checkbox"})]}),`
`,e.jsxs(c.blockquote,{children:[`
`,e.jsx(c.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:t}),`
`,e.jsx("br",{}),`
`,e.jsx(c.h3,{id:"gestió-de-lestat-checked",children:"Gestió de l’estat checked"}),`
`,e.jsxs(c.p,{children:["El component dss-checkbox es pot utilitzar de manera individual ",e.jsx(c.strong,{children:"dss-checkbox"})," o dins d’un ",e.jsx(c.strong,{children:"dss-checkbox-group"}),`.
Cada cas gestiona l’estat de selecció de forma diferent, i és important utilitzar les propietats correctes per evitar comportaments inesperats.`]}),`
`,e.jsx(c.h5,{id:"checkbox-individual-dss-checkbox",children:"Checkbox individual (dss-checkbox)"}),`
`,e.jsxs(c.p,{children:[`Quan s’utilitza fora d’un grup, el component no utilitza la propietat value per marcar-se.
En aquest cas, l’estat de selecció es controla exclusivament amb la propietat: `,e.jsx(c.code,{children:"checked"}),": boolean"]}),`
`,e.jsxs(c.ul,{children:[`
`,e.jsx(c.li,{children:"checked = true → el checkbox apareix marcat."}),`
`,e.jsx(c.li,{children:"checked = false → el checkbox apareix desmarcat."}),`
`]}),`
`,e.jsx(a,{code:`
/* HTML */
<dss-checkbox name="example" label="Label" checked />

/* React */
<dss-checkbox name="example" label="Label" checked={true} />
`}),`
`,e.jsxs(c.blockquote,{children:[`
`,e.jsx(c.p,{children:"No enviïs un atribut value en aquest mode. El component gestionarà internament la selecció a partir de la propietat checked."}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(c.h5,{id:"checkbox-dins-dun-grup-dss-checkbox-group",children:"Checkbox dins d’un grup (dss-checkbox-group)"}),`
`,e.jsx(c.p,{children:"Quan es fa servir dins d’un dss-checkbox-group, el comportament canvia:"}),`
`,e.jsxs(c.ul,{children:[`
`,e.jsx(c.li,{children:"El grup és l’encarregat de gestionar la selecció."}),`
`,e.jsx(c.li,{children:"En aquest cas, NO s’utilitza checked a cada checkbox."}),`
`,e.jsxs(c.li,{children:["Cada checkbox ha de tenir un ",e.jsx(c.code,{children:"value"}),": string únic."]}),`
`,e.jsxs(c.li,{children:["El grup rep un array ",e.jsx(c.code,{children:"value"}),": string[] amb els valors seleccionats."]}),`
`]}),`
`,e.jsxs(c.p,{children:["El grup compara ",e.jsx(c.code,{children:"checkbox.value"})," amb els valors de l’array ",e.jsx(c.code,{children:"group.value"}),", si coincideixen aquell checkbox es marca automàticament."]}),`
`,e.jsx(a,{code:`
/* React */
<dss-checkbox-group  name="example" label="Selecciona els teus interessos" value={['jazz', 'rock']}>
<dss-checkbox value="rock" label="Rock"></dss-checkbox>
<dss-checkbox value="jazz" label="Jazz"></dss-checkbox>
<dss-checkbox value="pop" label="Pop"></dss-checkbox>
</dss-checkbox-group>
`}),`
`,e.jsx("br",{}),`
`,e.jsx(c.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(c.ul,{children:[`
`,e.jsx(c.li,{children:e.jsx(c.a,{href:"#sense-label",children:"Sense label"})}),`
`,e.jsx(c.li,{children:e.jsx(c.a,{href:"#tipus-validacio",children:"Tipús validacio"})}),`
`,e.jsx(c.li,{children:e.jsx(c.a,{href:"#amb-label",children:"Amb label"})}),`
`,e.jsx(c.li,{children:e.jsx(c.a,{href:"#checkbox-group-vertical",children:"Checkbox Group: vertical"})}),`
`,e.jsx(c.li,{children:e.jsx(c.a,{href:"#checkbox-group-horizontal",children:"Checkbox Group: horizontal"})}),`
`,e.jsx(c.li,{children:e.jsx(c.a,{href:"#checkbox-group-sense-label",children:"Checkbox Group: sense label"})}),`
`,e.jsx(c.li,{children:e.jsx(c.a,{href:"#checkbox-group-value-seleccionat",children:"Checkbox Group: value seleccionat"})}),`
`,e.jsx(c.li,{children:e.jsx(c.a,{href:"#checkbox-group-deshabilitat",children:"Checkbox Group: deshabilitat"})}),`
`]}),`
`,e.jsx(c.h3,{id:"sense-label",children:"Sense label"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(c.h3,{id:"tipús-validacio",children:"Tipús validacio"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(c.h3,{id:"amb-label",children:"Amb label"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(c.h4,{id:"checkbox-group-vertical",children:"Checkbox Group: vertical"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(c.h4,{id:"checkbox-group-horizontal",children:"Checkbox Group: horizontal"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(c.h4,{id:"checkbox-group-sense-label",children:"Checkbox Group: sense label"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(c.h4,{id:"checkbox-group-value-seleccionat",children:"Checkbox Group: value seleccionat"}),`
`,e.jsx(c.p,{children:`Per marcar un valor seleccionat per defecte, s’ha de definir la propietat value amb un valor que existeixi en alguna de les opcions definides. Important: no definir
la propietat checked en el checkbox en qüestió, ja que el propi radio-button-group s’encarrega de gestionar-ho internament.`}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(c.h4,{id:"checkbox-group-deshabilitat",children:"Checkbox Group: deshabilitat"}),`
`,e.jsx(s,{of:m})]})}function E(n={}){const{wrapper:c}={...i(),...n.components};return c?e.jsx(c,{...n,children:e.jsx(l,{...n})}):l(n)}export{E as default};
