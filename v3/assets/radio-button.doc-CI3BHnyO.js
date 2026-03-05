import{j as e,M as o,T as r,C as a,S as i}from"./blocks-BQe3t3mS.js";import{useMDXComponents as d}from"./index-D25yCQlW.js";import{S as l,P as c,D as u,C as h,a as p,H as x,G as b,L as j,N as m}from"./radio-button.stories-BkO4RMeP.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CdZ_4rdx.js";import"./storybook-decorators-DSS85Rnr.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("component-title",{children:"dss-radio-button"}),e.jsx("component-title",{children:"dss-radio-button-group"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(a,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"gestió-de-lestat-checked",children:"Gestió de l’estat checked"}),`
`,e.jsx(n.p,{children:`El component dss-radio-button està pensat per utilitzar-se principalment dins d’un dss-radio-group, ja que segueix el comportament natiu dels radio buttons HTML:
només una opció pot estar seleccionada dins d’un mateix grup i no es poden desmarcar manualment un cop seleccionats.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Un dss-radio-button no té sentit utilitzar-lo de manera individual, perquè no es pot desmarcar. Si necessites un element seleccionable de forma independent, que es pugui activar i desactivar, s’ha d’utilitzar un checkbox (dss-checkbox) en lloc d’un radio-button."}),`
`]}),`
`,e.jsx(n.h5,{id:"radio-button-dins-dun-grup-dss-radio-button-group",children:"Radio button dins d’un grup (dss-radio-button-group)"}),`
`,e.jsx(n.p,{children:"Quan es fa servir dins d’un dss-radio-button-group, el comportament canvia:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"El grup és l’encarregat de gestionar la selecció."}),`
`,e.jsx(n.li,{children:"En aquest cas, NO s’utilitza checked a cada radio button."}),`
`,e.jsxs(n.li,{children:["Cada radio button ha de tenir un ",e.jsx(n.code,{children:"value"}),": string únic."]}),`
`,e.jsxs(n.li,{children:["El grup rep un array ",e.jsx(n.code,{children:"value"}),": string amb els valors seleccionats."]}),`
`]}),`
`,e.jsxs(n.p,{children:["El grup compara ",e.jsx(n.code,{children:"radio-button.value"})," amb els valors de l’array ",e.jsx(n.code,{children:"group.value"}),", si coincideixen aquell radio button es marca automàticament."]}),`
`,e.jsx(i,{code:`
/* React */
<dss-radio-button-group  name="example" label="Selecciona els teus interessos" value="jazz">
<dss-radio-button value="rock" label="Rock"></dss-radio-button>
<dss-radio-button value="jazz" label="Jazz"></dss-radio-button>
<dss-radio-button value="pop" label="Pop"></dss-radio-button>
</dss-radio-button-group>
`}),`
`,e.jsx(n.h5,{id:"radio-button-individual-dss-radio-button",children:"Radio button individual (dss-radio-button)"}),`
`,e.jsxs(n.p,{children:["Tot i que no és l’ús recomanat, per si per algun motiu concret necessites utilitzar-lo de manera individual, el component permet marcar-se directament mitjançant la propietat: ",e.jsx(n.code,{children:"checked"}),": boolean"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"checked = true → el radio button apareix marcat."}),`
`,e.jsx(n.li,{children:"checked = false → el radio button apareix desmarcat."}),`
`]}),`
`,e.jsx(i,{code:`
/* HTML */
<dss-radio-button name="example" label="Label" checked />

/* React */
<dss-radio-button name="example" label="Label" checked={true} />
`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"No enviïs un atribut value en aquest mode. El component gestionarà internament la selecció a partir de la propietat checked."}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default",children:"Default"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#checked",children:"Checked"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#disabled",children:"Disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#orientaci%C3%B3-horizontal",children:"Orientació horizontal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sense-label",children:"Sense label"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#radio-button-independent-default",children:"Radio button independent: default"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#radio-button-independent-sense-label",children:"Radio button independent: sense label"})}),`
`]}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.p,{children:"Aquest nou component no permet l’associació directa a través de la propietat name amb altres radio-button, ja que l’input es troba dins del shadow DOM."}),`
`,e.jsxs(n.p,{children:["Per aquest motiu, ",e.jsx(n.strong,{children:"s’ha creat un nou component radio-button-group que gestiona internament la interacció entre tots els radio-buttons definits dins del slot"}),`,
habilitant un esdeveniment `,e.jsx(n.code,{children:"value-changed"}),` que retorna el valor seleccionat i implementant tota la lògica per a la navegació per teclat amb un únic element
focusable i la resta accessibles mitjançant la navegació amb les fletxes de direcció.`]}),`
`,e.jsxs(n.p,{children:["En cas d’utilitzar el component group, el canvi de valor s’ha de detectar a través d’un event listener de l’esdeveniment ",e.jsx(n.code,{children:"value-changed"}),`, evitant així haver de
recórrer tots els radio-buttons un per un per comprovar l’estat checked.`]}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(n.h3,{id:"checked",children:"Checked"}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h3,{id:"orientació-horizontal",children:"Orientació horizontal"}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(n.h3,{id:"sense-label",children:"Sense label"}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(n.h3,{id:"radio-button-independent-default",children:"Radio button independent: default"}),`
`,e.jsx(a,{of:j}),`
`,e.jsx(n.h3,{id:"radio-button-independent-sense-label",children:"Radio button independent: sense label"}),`
`,e.jsx(a,{of:m})]})}function D(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{D as default};
