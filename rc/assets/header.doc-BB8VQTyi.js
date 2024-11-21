import{ae as e,af as i,ag as d,ah as l,ai as a}from"./index-CcF9BsMG.js";import{u as t}from"./index-BlEr_OIe.js";import{S as c,P as o}from"./header.stories-Cox9PV2S.js";import"./iframe-BLrvpHse.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-paDGiEfB.js";function r(s){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   
  `}),`
`,e.jsx(i,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-header",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:`El Header és essencial per a la interfície d'usuari d'un producte. És un
element d'interfície d'usuari disponible de manera coherent que conté
funcionalitats per al producte així com per a tot el sistema. Per veure com
quedaria en mòbil i tauleta hem d'accedir al canvas i modificar el viewport.`}),`
`,e.jsxs(n.p,{children:["El selector per poder utilitzar el component és ",e.jsx(n.code,{children:"dss-header"}),"."]}),`
`,e.jsx(n.p,{children:"A més, a través dels diferents slots, podrem fer ús dels subcomponents:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"dss-links"}),`
`,e.jsx(n.li,{children:"dss-menu-pacient"}),`
`,e.jsx(n.li,{children:"dss-menu-professional"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(a,{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Nota:"})," el logotip de Salut s'està carregant des d'una ruta externa per un problema de configuració a Storybook. Si us plau, assegureu-vos d'utilitzar una ruta relativa a la imatge interna de la llibreria en la vostra iniciativa. Exemple Angular: ",e.jsx(n.code,{children:'logoSrc="/dss-assets/img/salut-logotip-default.svg"'})]}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Àmbit"}),e.jsx(n.th,{children:"Condition"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"title"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Requerida"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Nom de la iniciativa."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"area"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Opcional"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"'HES'"}),e.jsx(n.td,{children:"Nom de l'àrea."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"logoSrc"})}),e.jsx(n.td,{children:"Input"}),e.jsx(n.td,{children:"Requerida"}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Ruta de la imatge. Utilitzar la ruta configurada per obtenir la imatge interna de la llibreria."})]})]})]}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:"Les diferents variants del header dependran dels slots activats en el component. Si us plau, per"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-header-links--exemple",children:"Header Links"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-header-menu-patient--exemple",children:"Header Menu Patient"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-header-menu-professional--exemple",children:"Header Menu Professional"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.12.3"})}),e.jsx(n.td,{children:"S'ha corregit la propietat logoSrc que estava causant conflictes a l'hora de renderitzar la imatge a aplicacions Angular."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.12.0"})}),e.jsx(n.td,{children:"Nou web component."})]})]})]})]})}function v(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{v as default};
