import{j as e,M as o,T as r,C as s}from"./blocks-9y1j4S7m.js";import{useMDXComponents as n}from"./index-rk25-Jzu.js";import{S as t,P as c,A as d,a as u,b as m}from"./table-grid.stories-DAqL5dIB.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-PL0KlCAr.js";import"./storybook-decorators-DSS85Rnr.js";function i(a){const l={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h5:"h5",li:"li",p:"p",ul:"ul",...n(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("dss-badge",{text:"dss-table-grid",size:"md",state:"info-alt",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-table-thead",size:"md",state:"info-alt",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-table-tbody",size:"md",state:"info-alt",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(l.p,{children:"Aquest component és el contenidor principal del grid de dades de la taula i es compon de dues peces (dss-table-thead i dss-table-tbody), on s’hauran d’incloure les files (dss-row) i les cel·les (dss-cell) corresponents."}),`
`,e.jsxs(l.blockquote,{children:[`
`,e.jsx(l.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(l.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#grid-autoajustable",children:"Grid autoajustable"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#grid-amb-scroll-horitzontal",children:"Grid amb scroll horitzontal"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#columnes-fixes",children:"Columnes fixes"})}),`
`]}),`
`,e.jsx(l.h5,{id:"grid-autoajustable",children:"Grid autoajustable."}),`
`,e.jsx(l.p,{children:e.jsx(l.code,{children:"config.gridTemplateColumns"})}),`
`,e.jsx(l.p,{children:"Utilitzant les possibilitats i mesures de CSS Grid podem simular el comportament d’una taula nativa, assignant a les columnes una mesura dinàmica amb fr perquè s’ajustin en funció de l’espai disponible."}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(l.h5,{id:"grid-amb-scroll-horitzontal",children:"Grid amb scroll horitzontal"}),`
`,e.jsx(l.p,{children:e.jsx(l.code,{children:"config.scrollable"})}),`
`,e.jsx(l.p,{children:"Perquè la taula mostri un scroll horitzontal serà necessari que la suma de l’amplada de totes les columnes superi l’amplada total permesa del contenidor on es troba. Així mateix, serà important establir una amplada mínima dinàmica per a alguna de les columnes en pantalles on aquesta suma pugui resultar inferior, i evitar tenir un espai en blanc dins del component. Podem utilitzar això, per exemple, perquè la taula només tingui scroll en resolucions més petites."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(l.h5,{id:"columnes-fixes",children:"Columnes fixes."}),`
`,e.jsxs(l.p,{children:[e.jsx(l.code,{children:"config.leftStickyColumns"})," ",e.jsx(l.code,{children:"config.rightStickyColumns"})]}),`
`,e.jsx(l.p,{children:"Per a taules amb el scroll horitzontal activat és possible definir si volem que hi hagi un nombre de columnes fixes tant a l’esquerra com a la dreta de la taula."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(l.h3,{id:"navegació-amb-el-teclat",children:"Navegació amb el teclat"}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"Fletxa dreta"}),": mou el focus una cel·la cap a la dreta. Si el focus és a la cel·la més a la dreta de la fila, no es mou."]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"Fletxa esquerra"}),": mou el focus una cel·la cap a l'esquerra. Si el focus és a la cel·la més a l'esquerra de la fila, es mou a la fila completa."]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"Fletxa avall"}),": mou el focus una fila o una cel·la cap avall. Si el focus és a la cel·la inferior de la columna, no es mou."]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"Fletxa amunt"}),": mou el focus una fila o una cel·la cap amunt. Si el focus és a la cel·la superior de la columna, no es mou."]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"Pàgina avall"}),": mou el focus cap avall fins a l'última fila. Si el focus ja és a l'última fila de la graella, no es mou."]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"Pàgina amunt"}),": mou el focus cap amunt fins a la primera fila. Si el focus ja és a la primera fila de la graella, no es mou."]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"Inici"}),": mou el focus a la primera cel·la de la fila que conté el focus."]}),`
`,e.jsxs(l.li,{children:[e.jsx(l.code,{children:"Fi"}),": mou el focus a l'última cel·la de la fila que conté el focus."]}),`
`]})]})}function q(a={}){const{wrapper:l}={...n(),...a.components};return l?e.jsx(l,{...a,children:e.jsx(i,{...a})}):i(a)}export{q as default};
