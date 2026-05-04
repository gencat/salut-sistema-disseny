import{j as e,M as t,T as o,C as a}from"./blocks-BkZO9fI4.js";import{useMDXComponents as i}from"./index-0zFPf0Xu.js";import{S as r,P as d,A as c,a as u,b as m}from"./table-main.stories-l1Exna14.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DIl293iJ.js";import"./storybook-decorators-DSS85Rnr.js";function l(n){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h5:"h5",li:"li",p:"p",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:r}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(o,{}),e.jsx("dss-badge",{text:"dss-table-main",size:"md",state:"info-alt",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-table-thead",size:"md",state:"info-alt",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-table-tbody",size:"md",state:"info-alt",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:"Aquest component és el contenidor principal del grid de dades de la taula i es compon de dues peces (dss-table-thead i dss-table-tbody), on s’hauran d’incloure les files (dss-row) i les cel·les (dss-cell) corresponents."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(a,{of:d}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#grid-autoajustable",children:"Grid autoajustable"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#grid-amb-scroll-horitzontal",children:"Grid amb scroll horitzontal"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#columnes-fixes",children:"Columnes fixes"})}),`
`]}),`
`,e.jsx(s.h5,{id:"grid-autoajustable",children:"Grid autoajustable."}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"config.gridTemplateColumns"})}),`
`,e.jsx(s.p,{children:"Utilitzant les possibilitats i mesures de CSS Grid podem simular el comportament d’una taula nativa, assignant a les columnes una mesura dinàmica amb fr perquè s’ajustin en funció de l’espai disponible."}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(s.h5,{id:"grid-amb-scroll-horitzontal",children:"Grid amb scroll horitzontal"}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"config.scrollable"})}),`
`,e.jsx(s.p,{children:"Perquè la taula mostri un scroll horitzontal serà necessari que la suma de l’amplada de totes les columnes superi l’amplada total permesa del contenidor on es troba. Així mateix, serà important establir una amplada mínima dinàmica per a alguna de les columnes en pantalles on aquesta suma pugui resultar inferior, i evitar tenir un espai en blanc dins del component. Podem utilitzar això, per exemple, perquè la taula només tingui scroll en resolucions més petites."}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(s.h5,{id:"columnes-fixes",children:"Columnes fixes."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"config.leftStickyColumns"})," ",e.jsx(s.code,{children:"config.rightStickyColumns"})]}),`
`,e.jsx(s.p,{children:"Per a taules amb el scroll horitzontal activat és possible definir si volem que hi hagi un nombre de columnes fixes tant a l’esquerra com a la dreta de la taula."}),`
`,e.jsx(a,{of:m})]})}function q(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{q as default};
