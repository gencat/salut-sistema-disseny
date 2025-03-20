import{j as e,M as d,T as l,C as i,a}from"./index-BauLvQ7S.js";import{useMDXComponents as t}from"./index-DL_N9JPE.js";import{S as c,P as o,T as h,a as x}from"./header.stories-BwgpeB_4.js";import"./iframe-Bg6vOPaM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function r(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .dss-layout-header {
      width: 930px;
    }
  `}),`
`,e.jsx(d,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-header",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
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
`,e.jsx(i,{of:o}),`
`,e.jsx(a,{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Nota:"})," el logotip de Salut s'està carregant des d'una ruta externa per un problema de configuració a Storybook. Si us plau, assegureu-vos d'utilitzar una ruta relativa a la imatge interna de la llibreria en la vostra iniciativa. Exemple Angular: ",e.jsx(n.code,{children:'logoSrc="/dss-assets/img/salut-logotip-default.svg"'})]}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsxs(n.strong,{children:["title",e.jsx("span",{children:"*"})]})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Nom de la iniciativa."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"area"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'HES'"}),e.jsx(n.td,{children:"Nom de l'àrea."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsxs(n.strong,{children:["logoSrc",e.jsx("span",{children:"*"})]})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Ruta de la imatge. Utilitzar la ruta configurada per obtenir la imatge interna de la llibreria."})]})]})]})}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:"Les diferents variants del header dependran dels slots activats en el component. Si us plau, per"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-header-links--exemple",children:"Header Links"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-header-menu-patient--exemple",children:"Header Menu Patient"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-header-menu-professional--exemple",children:"Header Menu Professional"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-titol",children:"Amb títol"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-menu-patient",children:"Amb Menú Patient"})}),`
`]}),`
`,e.jsx(n.h4,{id:"amb-títol",children:"Amb títol"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h4,{id:"amb-menú-patient",children:"Amb Menú Patient"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsx(n.h4,{id:"el-divisor-vertical-no-apareix-davant-del-menú-de-pacient-en-utilitzar-lapi-suffix",children:"El divisor vertical no apareix davant del menú de pacient en utilitzar l'API suffix."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problema:"})}),`
`,e.jsxs(n.p,{children:["En utilitzar l'API suffix definint el menú de pacient com ",e.jsx(n.code,{children:"<dss-header-menu-patient-xyz>"}),`, el CSS intern del component
no és capaç de detectar el sufix del selector, de manera que la regla CSS que afegeix el divisor vertical davant
d'aquest deixa de complir-se.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Solució:"})}),`
`,e.jsx(n.p,{children:"Per solucionar el problema, s'ha d'afegir la classe 'dss-header-menu-patient' al component."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Original:"})," ",e.jsx(n.code,{children:"<dss-header-menu-patient></dss-header-menu-patient>"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Amb suffix:"})," ",e.jsx(n.code,{children:'<dss-header-menu-patient-xyz class="dss-header-menu-patient"></dss-header-menu-patient-xyz>'})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.2.0"})}),e.jsx(n.td,{children:"S'ha corregit un error pel qual no apareixia el divisor davant del menú de pacient quan s'utilitzava l'API suffix."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.12.3"})}),e.jsx(n.td,{children:"S'ha corregit la propietat logoSrc que estava causant conflictes a l'hora de renderitzar la imatge a aplicacions Angular."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"1.12.0"})}),e.jsx(n.td,{children:"Nou web component."})]})]})]})]})}function P(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{P as default};
