import{j as s,M as r}from"./index-uk_aGwjk.js";import{useMDXComponents as n}from"./index-DNjVFplD.js";import"./DocsRenderer-CFRXHY34-ByZNQxlw.js";import"./iframe-B4wcjDtv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";function i(e){const d={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
      .dss-grid {
          background-color: rgb(245,245,245);
          align-items: center;
      }
      .dss-grid > div{
          width: 100%;
          height: 50px;
          background-color: rgba(216,216,216,.5);
          display: flex;
          align-items:center;
          justify-content: center;
      }

      .innerZoomElementWrapper, .innerZoomElementWrapper > div{
          display: block !important;
      }

      .description{
        font-size: 0.75rem;
        opacity: 0.7;
      }

      .description > code {
        background-color: rgb(245,245,245);
        padding: 5px;
      }
    `}),`
`,s.jsx(r,{title:"Foundations/Grid",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,s.jsx(d.h1,{id:"grid",children:"Grid"}),`
`,s.jsxs(d.blockquote,{children:[`
`,s.jsx(d.p,{children:"Important: Aquesta documentació està pendent dactualització."}),`
`]}),`
`,s.jsx(d.p,{children:`La maquetació ajuda a tenir una plantilla estructural que admet la coherència
entre les aplicacions mitjançant la definició de quadrícules visuals, espaiat
i punts d'interrupció.`}),`
`,s.jsx(d.p,{children:`Dissenyar amb una bona distribució de columnes ajuda a crear experiències
d’usuari fluides i fàcils de seguir.`}),`
`,s.jsxs(d.p,{children:["_",s.jsx(d.strong,{children:"Nota:"}),` tots els exemples que es mostren a continuació, tenen el contengut
centrat i amb colors de fons per a la documentació. _`]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(d.h2,{id:"variants",children:"Variants"}),`
`,s.jsxs(d.ul,{children:[`
`,s.jsx(d.li,{children:s.jsx(d.a,{href:"grid-per-defecte",children:"Grid per defecte"})}),`
`,s.jsx(d.li,{children:s.jsx(d.a,{href:"#grid-segons-resoluci%C3%B3",children:"Grid segons resolució"})}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(d.h3,{id:"grid-per-defecte",children:"Grid per defecte"}),`
`,s.jsxs(d.p,{children:["Si no s'especifica res, el grid es de 12 col·lumnes, ",s.jsx(d.code,{children:"grid-template-columns:     repeat(12, 1fr);"}),`. Si no s'especifica, sempre es 12 col·lumnes siga quina siga
la resolució.`]}),`
`,s.jsxs("div",{class:"dss-grid",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"}),s.jsx("div",{children:"9"}),s.jsx("div",{children:"10"}),s.jsx("div",{children:"11"}),s.jsx("div",{children:"12"})]}),`
`,s.jsxs(d.p,{children:[`Podem indicar el nº de co·lumnes que s'aplicará a totes les resolucions, en
aquest exemple, serà 3 i per tant s'aplica la propietat
`,s.jsx(d.code,{children:"grid-template-columns: repeat(3, minmax(0, 1fr));"}),"."]}),`
`,s.jsx("br",{}),`
`,s.jsxs("p",{class:"description",children:["Ejemple de 3 columnes, sense resolució definida: ",s.jsx("code",{children:"dss-grid__cols-3"})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols-3",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"}),s.jsx("div",{children:"9"}),s.jsx("div",{children:"10"}),s.jsx("div",{children:"11"}),s.jsx("div",{children:"12"})]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(d.h3,{id:"grid-segons-resolució",children:"Grid segons resolució"}),`
`,s.jsx(d.p,{children:"Hi han 4 punts d'interrupció:"}),`
`,s.jsxs("table",{class:"sb-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Mida"}),s.jsx("th",{children:"Classe"}),s.jsx("th",{children:"@media screen"}),s.jsx("th",{children:"Columnes"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"Mòbils (small)"}),s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--sm-(nº col·lumnes)"})}),s.jsx("td",{children:"max-width: 320px;"}),s.jsx("td",{children:"4"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Tablets (medium)"}),s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--md-(nº col·lumnes)"})}),s.jsx("td",{children:"max-width: 768px;"}),s.jsx("td",{children:"8"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Ordinador (lg)"}),s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--lg-(nº col·lumnes)"})}),s.jsx("td",{children:s.jsxs(d.p,{children:["min-width: 768px;",s.jsx("br",{}),`
max-width: 1280px;`]})}),s.jsx("td",{children:"12"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Ordinador gran (xl)"}),s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--xl-(nº col·lumnes)"})}),s.jsx("td",{children:"min-width: 1280px;"}),s.jsx("td",{children:"12"})]})]})]}),`
`,s.jsx(d.p,{children:`Aquestes classes es poden combinar amb el grid per defecte. Aquelles
resolucions que no estiguen definides es comportarán com el grid per defecte.`}),`
`,s.jsx(d.p,{children:s.jsxs(d.em,{children:[s.jsx(d.strong,{children:"Nota:"}),` per a visualitzar el resultat dels grids d'aquesta secció, només es
pot amb el dispositiu correcte o amb el inspeccionador del navegador.`]})}),`
`,s.jsx("p",{class:"description",children:s.jsx(d.p,{children:"Ejemple complet amb totes les resolucions:"})}),`
`,s.jsxs("ul",{class:"description",children:[s.jsx("li",{children:s.jsxs("small",{children:["Per defecte, 6 columnes ",s.jsx("code",{children:"dss-grid__cols-6"})]})}),s.jsx("li",{children:s.jsxs("small",{children:["Ordinador gran, 5 columnes ",s.jsx("code",{children:"dss-grid__cols--xl-5"})]})}),s.jsx("li",{children:s.jsxs("small",{children:["Ordinador normal, 4 columnes ",s.jsx("code",{children:"dss-grid__cols--lg-4"})]})}),s.jsx("li",{children:s.jsxs("small",{children:["Tablet, 3 columnes ",s.jsx("code",{children:"dss-grid__cols--md-3"})]})}),s.jsx("li",{children:s.jsxs("small",{children:["Mòbil, 2 columnes ",s.jsx("code",{children:"dss-grid__cols--sm-2"})]})})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols-6 dss-grid__cols--xl-5 dss-grid__cols--lg-4 dss-grid__cols--md-3 dss-grid__cols--sm-2",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"}),s.jsx("div",{children:"9"}),s.jsx("div",{children:"10"}),s.jsx("div",{children:"11"}),s.jsx("div",{children:"12"})]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(d.h4,{id:"mòbil",children:"Mòbil"}),`
`,s.jsxs("table",{class:"sb-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Classe"}),s.jsx("th",{children:"Propietats"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid"})}),s.jsx("td",{children:"grid-template-columns: repeat(4, 1fr);"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--sm-(nº col·lumnes)"})}),s.jsx("td",{children:"grid-template-columns: repeat((nº col·lumnes), minmax(0, 1fr));"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("h6",{children:"Exemple"}),`
`,s.jsxs("p",{class:"description",children:["Ejemple de 2 columnes: ",s.jsx("code",{children:"dss-grid__cols--sm-2"})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols--sm-2",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"})]}),`
`,s.jsx("br",{}),`
`,s.jsx(d.h4,{id:"tablet",children:"Tablet"}),`
`,s.jsxs("table",{class:"sb-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Classe"}),s.jsx("th",{children:"Propietats"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid"})}),s.jsx("td",{children:"grid-template-columns: repeat(8, 1fr);"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--md-(nº col·lumnes)"})}),s.jsx("td",{children:"grid-template-columns: repeat((nº col·lumnes), minmax(0, 1fr));"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("h6",{children:"Exemple"}),`
`,s.jsxs("p",{class:"description",children:["Ejemple de 4 columnes: ",s.jsx("code",{children:"dss-grid__cols--md-4"})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols--md-4",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"})]}),`
`,s.jsx("br",{}),`
`,s.jsx(d.h4,{id:"ordinador",children:"Ordinador"}),`
`,s.jsxs("table",{class:"sb-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Classe"}),s.jsx("th",{children:"Propietats"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid"})}),s.jsx("td",{children:"grid-template-columns: repeat(12, 1fr);"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--lg-(nº col·lumnes)"})}),s.jsx("td",{children:"grid-template-columns: repeat((nº col·lumnes), minmax(0, 1fr));"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("h6",{children:"Exemple"}),`
`,s.jsxs("p",{class:"description",children:["Ejemple de 6 columnes: ",s.jsx("code",{children:"dss-grid__cols--lg-6"})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols--lg-6",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"}),s.jsx("div",{children:"9"}),s.jsx("div",{children:"10"}),s.jsx("div",{children:"11"}),s.jsx("div",{children:"12"})]}),`
`,s.jsx("br",{}),`
`,s.jsx(d.h4,{id:"ordinador-gran",children:"Ordinador gran"}),`
`,s.jsxs("table",{class:"sb-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Classe"}),s.jsx("th",{children:"Propietats"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid"})}),s.jsx("td",{children:"grid-template-columns: repeat(12, 1fr);"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--xl-(nº col·lumnes)"})}),s.jsx("td",{children:"grid-template-columns: repeat((nº col·lumnes), minmax(0, 1fr));"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("h6",{children:"Exemple"}),`
`,s.jsxs("p",{class:"description",children:["Ejemple de 4 columnes: ",s.jsx("code",{children:"dss-grid__cols--xl-4"})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols--xl-4",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"}),s.jsx("div",{children:"9"}),s.jsx("div",{children:"10"}),s.jsx("div",{children:"11"}),s.jsx("div",{children:"12"})]})]})}function m(e={}){const{wrapper:d}={...n(),...e.components};return d?s.jsx(d,{...e,children:s.jsx(i,{...e})}):i(e)}export{m as default};
