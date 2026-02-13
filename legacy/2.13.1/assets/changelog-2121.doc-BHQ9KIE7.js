import{j as e,M as t}from"./index-DUfndpW3.js";import{useMDXComponents as r}from"./index-B6StXAgI.js";import"./DocsRenderer-CFRXHY34-Btxh05KD.js";import"./iframe-BNAj4L5S.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";function i(n){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Documentació/Changelog v2/2.12.1"}),`
`,e.jsx(s.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx("br",{}),`
`,e.jsxs("div",{class:"dss-grid",children:[e.jsx("div",{class:"dss-col--6 dss-col--sm-4 sb-changelog-col",children:e.jsx("dss-badge",{size:"lg",state:"ideal",text:"Versió: 2.12.1",hideIcon:!0})}),e.jsx("div",{class:"dss-col--6 dss-col--sm-4 sb-changelog-col sb-changelog-col--right",children:e.jsx("changelog-release",{date:"23/12/2025"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsxs("div",{class:"dss-grid",children:[e.jsx("div",{class:"dss-col--8 dss-col--sm-5",children:e.jsx(s.h3,{id:"informe-de-registre-de-canvis",children:"Informe de registre de canvis"})}),e.jsx("div",{class:"dss-col--4 dss-col--sm-3 sb-changelog-col sb-changelog-col--right sb-changelog-col---legend",children:e.jsx("changelog-legend",{})})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("div",{class:"dss-grid",children:e.jsxs("div",{class:"dss-col--12 dss-col--sm-8",children:[e.jsx("dss-alert",{fullWidth:!0,state:"warning",message:`Des de la versió 2.12.0, totes les noves releases del DS es publiquen al repositori JFrog en lloc de l’anterior Nexus.<br/>
Podeu consultar el <a href='https://codisisdisseny.salut.gencat.cat/?path=/docs/documentaci%C3%B3-changelog-v2-2-12-0--docs'>changelog corresponent</a> per a més informació.`}),e.jsx("br",{}),e.jsx(s.h4,{id:"fix-per-al-posicionament-de-tooltips-en-diferents-components",children:"Fix per al posicionament de tooltips en diferents components"}),e.jsxs("changelog-item",{status:"bug",children:[e.jsx(s.p,{children:`Després de la versió 2.11.0, en què es van activar els tooltips per al component icon-button, s’ha detectat que aquests
tooltips presenten un funcionament incorrecte en components i collections que tenen un icon-button dins d’elements amb
position o overflow definit per CSS.`}),e.jsx("br",{}),e.jsxs(s.p,{children:["Per donar una solució ràpida a aquest problema, s’han habilitat les propietats ",e.jsx(s.code,{children:"tooltipFixed"})," i ",e.jsx(s.code,{children:"tooltipPosition"}),` en els
components següents:`]}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Header Menu Professional"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Header Menu Patient"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Action Menu Item"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Widget"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Item List"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Popover"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Accordion"})}),`
`]}),e.jsx("br",{}),e.jsx(s.p,{children:`Això ens permet ajustar el posicionament del tooltip per poder visualitzar-lo correctament, però no és una solució
100 % robusta. Per aquest motiu, de manera paral·lela estem treballant a sobreescriure tota la funcionalitat dels
tooltips perquè es visualitzin a través d’un Portal fora de tot el flux HTML, de manera que mai es vegin afectats
pels layouts de cada iniciativa.`}),e.jsx("br",{}),e.jsxs(s.p,{children:[`Aquesta solució final requereix actualitzacions de diverses llibreries, fet que pot suposar un breaking change en el
funcionament de diferents components, i per això s’inclourà en la propera versió del `,e.jsx(s.strong,{children:"Design System v3"}),"."]})]}),e.jsx("br",{}),e.jsx(s.h4,{id:"reducció-dels-espaiats-interns-dels-components",children:"Reducció dels espaiats interns dels components"}),e.jsxs("changelog-item",{status:"design",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Header"}),": padding-left/right: 12px > 8px, height: 72px > 64px"]}),e.jsx("br",{}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Footer"}),": padding-top/bottom: 12px > 8px"]}),e.jsx("br",{}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Breadcrumb Bar"}),": padding-top/bottom: 8px > 4px"]}),e.jsx("br",{}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Modal Footer"}),": gap: 16px > 8px"]}),e.jsx("br",{}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tabs"}),": padding-left/right: 12px > 8px, height: 40px > 32px"]}),e.jsx("br",{}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tile"}),": padding/gap: 16px > 12px"]})]})]})})]})}function g(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{g as default};
