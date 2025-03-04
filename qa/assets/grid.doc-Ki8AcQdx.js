import{j as s,M as l,S as r}from"./index-CVfZ8Ezd.js";import{useMDXComponents as n}from"./index-DJet-Jsx.js";import"./DocsRenderer-CFRXHY34-B7U4udg_.js";import"./iframe-D5I3AWop.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";function i(d){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n(),...d.components};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
      .dss-grid {
          background-color: #BFDDFA;
          align-items: center;
      }
      .dss-grid > div {
          background-color: #EFF7FF;
          height: 50px;
          display: flex;
          align-items:center;
          justify-content: center;
          font-size: 14px;
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
`,s.jsx(l,{title:"Foundations/Grid",parameters:{previewTabs:{canvas:{hidden:!0}}}}),`
`,s.jsx(e.h1,{id:"grid",children:"Grid"}),`
`,s.jsx(e.p,{children:"La grid és la base fonamental per ubicar elements visuals a la UI. Alhora, les columnes són els elements constructius d'una grid i indiquen on han de ser situats els elements."}),`
`,s.jsx(e.p,{children:"En el nostre cas en funció del breakpoint trobarem grids de 12 o 8 columnes."}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Mida"}),s.jsx(e.th,{children:"Breakpoint"}),s.jsx(e.th,{children:"Media Query"}),s.jsx(e.th,{children:"Columnes"}),s.jsx(e.th,{children:"Gutter"}),s.jsx(e.th,{children:"Margin"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"sm"})}),s.jsx(e.td,{children:"1024px"}),s.jsx(e.td,{children:"0 a 1439px"}),s.jsx(e.td,{children:"8"}),s.jsx(e.td,{children:"24px"}),s.jsx(e.td,{children:"24px"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"md"})}),s.jsx(e.td,{children:"1440px"}),s.jsx(e.td,{children:"1440px a 1919px"}),s.jsx(e.td,{children:"12"}),s.jsx(e.td,{children:"24px"}),s.jsx(e.td,{children:"24px"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"lg"})}),s.jsx(e.td,{children:"1920px"}),s.jsx(e.td,{children:"1920px en endavant"}),s.jsx(e.td,{children:"12"}),s.jsx(e.td,{children:"24px"}),s.jsx(e.td,{children:"24px"})]})]})]}),`
`,s.jsx(e.p,{children:"** 24px = --dss-spacing-lg"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"La media query per a la mida SM seria de 1024px a 1439px"}),", però volem incloure aquí qualsevol breakpoint per sota d’aquesta, perquè, encara que no es doni suport, es pugui posicionar a la pantalla de la millor manera possible."]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h2,{id:"ús",children:"Ús"}),`
`,s.jsx(e.p,{children:"Para utilizar el grid se debe utilizar las siguientes clases:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"dss-grid"}),": Definirá el contenedor y el número de columnas segun el breakpoint."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"dss-col--columnes"}),": Donde columnes define el número de columnas que debe ocupar el item."]}),`
`]}),`
`,s.jsx(e.p,{children:"La base del grid es de 12 columnas, por lo que si no se define el número de columnas que debe ocupar un item, por defecto ocupará 12 columnas."}),`
`,s.jsx(e.p,{children:"BREAKPPOINT POR DEFECTO???"}),`
`,s.jsx(e.h3,{id:"midas",children:"Midas"}),`
`,s.jsx(e.p,{children:`Dado que el número de columnas entre los breakpoints es distinto, recomendamos definir para cada item del grid el número de colummnas
que ocupará por cada breakpoint, de forma que nos aseguremenos que la interfeza se posiciona siempre de la mejor manera.
Para ello ademas del número de columnas debe definirse el tamaño del breakpoint:`}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"dss-col--mida-columnes"}),": Por ejemplo dss-col--sm-8, dss-col--md-6, dss-col--lg-4"]}),`
`]}),`
`,s.jsxs("div",{class:"dss-grid",children:[s.jsx("div",{class:"dss-col--sm-8 dss-col--md-6 dss-col--lg-4",children:"sm-8 // md-6 // lg-4"}),s.jsx("div",{class:"dss-col--sm-4 dss-col--md-3 dss-col--lg-4",children:"sm-4 // md-3 // lg-4"}),s.jsx("div",{class:"dss-col--sm-4 dss-col--md-3 dss-col--lg-4",children:"sm-4 // md-3 // lg-4"})]}),`
`,s.jsx(r,{code:`
    <div class="dss-grid">
      <div class="dss-col--sm-8 dss-col--md-6 dss-col--lg-4">Content</div>
      <div class="dss-col--sm-4 dss-col--md-3 dss-col--lg-4">Content</div>
      <div class="dss-col--sm-4 dss-col--md-3 dss-col--lg-4">Content</div>
    </div>
  `}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"Tots els exemples que es mostren, tenen el contengut centrat i amb colors de fons per a la documentació."}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"Important: Aquesta documentació està pendent dactualització."}),`
`]}),`
`,s.jsx(e.p,{children:`La maquetació ajuda a tenir una plantilla estructural que admet la coherència
entre les aplicacions mitjançant la definició de quadrícules visuals, espaiat
i punts d'interrupció.`}),`
`,s.jsx(e.p,{children:`Dissenyar amb una bona distribució de columnes ajuda a crear experiències
d’usuari fluides i fàcils de seguir.`}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"grid-per-defecte",children:"Grid per defecte"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#grid-segons-resoluci%C3%B3",children:"Grid segons resolució"})}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"grid-per-defecte",children:"Grid per defecte"}),`
`,s.jsxs(e.p,{children:["Si no s'especifica res, el grid es de 12 col·lumnes, ",s.jsx(e.code,{children:"grid-template-columns:     repeat(12, 1fr);"}),`. Si no s'especifica, sempre es 12 col·lumnes siga quina siga
la resolució.`]}),`
`,s.jsxs("div",{class:"dss-grid",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"}),s.jsx("div",{children:"9"}),s.jsx("div",{children:"10"}),s.jsx("div",{children:"11"}),s.jsx("div",{children:"12"})]}),`
`,s.jsxs(e.p,{children:[`Podem indicar el nº de co·lumnes que s'aplicará a totes les resolucions, en
aquest exemple, serà 3 i per tant s'aplica la propietat
`,s.jsx(e.code,{children:"grid-template-columns: repeat(3, minmax(0, 1fr));"}),"."]}),`
`,s.jsx("br",{}),`
`,s.jsxs("p",{class:"description",children:["Ejemple de 3 columnes, sense resolució definida: ",s.jsx("code",{children:"dss-grid__cols-3"})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols-3",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"}),s.jsx("div",{children:"9"}),s.jsx("div",{children:"10"}),s.jsx("div",{children:"11"}),s.jsx("div",{children:"12"})]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"grid-segons-resolució",children:"Grid segons resolució"}),`
`,s.jsx(e.p,{children:"Hi han 4 punts d'interrupció:"}),`
`,s.jsxs("table",{class:"sb-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Mida"}),s.jsx("th",{children:"Classe"}),s.jsx("th",{children:"@media screen"}),s.jsx("th",{children:"Columnes"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"Mòbils (small)"}),s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--sm-(nº col·lumnes)"})}),s.jsx("td",{children:"max-width: 320px;"}),s.jsx("td",{children:"4"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Tablets (medium)"}),s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--md-(nº col·lumnes)"})}),s.jsx("td",{children:"max-width: 768px;"}),s.jsx("td",{children:"8"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Ordinador (lg)"}),s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--lg-(nº col·lumnes)"})}),s.jsx("td",{children:s.jsxs(e.p,{children:["min-width: 768px;",s.jsx("br",{}),`
max-width: 1280px;`]})}),s.jsx("td",{children:"12"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Ordinador gran (xl)"}),s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--xl-(nº col·lumnes)"})}),s.jsx("td",{children:"min-width: 1280px;"}),s.jsx("td",{children:"12"})]})]})]}),`
`,s.jsx(e.p,{children:`Aquestes classes es poden combinar amb el grid per defecte. Aquelles
resolucions que no estiguen definides es comportarán com el grid per defecte.`}),`
`,s.jsx(e.p,{children:s.jsxs(e.em,{children:[s.jsx(e.strong,{children:"Nota:"}),` per a visualitzar el resultat dels grids d'aquesta secció, només es
pot amb el dispositiu correcte o amb el inspeccionador del navegador.`]})}),`
`,s.jsx("p",{class:"description",children:s.jsx(e.p,{children:"Ejemple complet amb totes les resolucions:"})}),`
`,s.jsxs("ul",{class:"description",children:[s.jsx("li",{children:s.jsxs("small",{children:["Per defecte, 6 columnes ",s.jsx("code",{children:"dss-grid__cols-6"})]})}),s.jsx("li",{children:s.jsxs("small",{children:["Ordinador gran, 5 columnes ",s.jsx("code",{children:"dss-grid__cols--xl-5"})]})}),s.jsx("li",{children:s.jsxs("small",{children:["Ordinador normal, 4 columnes ",s.jsx("code",{children:"dss-grid__cols--lg-4"})]})}),s.jsx("li",{children:s.jsxs("small",{children:["Tablet, 3 columnes ",s.jsx("code",{children:"dss-grid__cols--md-3"})]})}),s.jsx("li",{children:s.jsxs("small",{children:["Mòbil, 2 columnes ",s.jsx("code",{children:"dss-grid__cols--sm-2"})]})})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols-6 dss-grid__cols--xl-5 dss-grid__cols--lg-4 dss-grid__cols--md-3 dss-grid__cols--sm-2",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"}),s.jsx("div",{children:"9"}),s.jsx("div",{children:"10"}),s.jsx("div",{children:"11"}),s.jsx("div",{children:"12"})]}),`
`,s.jsx("br",{}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h4,{id:"mòbil",children:"Mòbil"}),`
`,s.jsxs("table",{class:"sb-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Classe"}),s.jsx("th",{children:"Propietats"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid"})}),s.jsx("td",{children:"grid-template-columns: repeat(4, 1fr);"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--sm-(nº col·lumnes)"})}),s.jsx("td",{children:"grid-template-columns: repeat((nº col·lumnes), minmax(0, 1fr));"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("h6",{children:"Exemple"}),`
`,s.jsxs("p",{class:"description",children:["Ejemple de 2 columnes: ",s.jsx("code",{children:"dss-grid__cols--sm-2"})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols--sm-2",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h4,{id:"tablet",children:"Tablet"}),`
`,s.jsxs("table",{class:"sb-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Classe"}),s.jsx("th",{children:"Propietats"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid"})}),s.jsx("td",{children:"grid-template-columns: repeat(8, 1fr);"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--md-(nº col·lumnes)"})}),s.jsx("td",{children:"grid-template-columns: repeat((nº col·lumnes), minmax(0, 1fr));"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("h6",{children:"Exemple"}),`
`,s.jsxs("p",{class:"description",children:["Ejemple de 4 columnes: ",s.jsx("code",{children:"dss-grid__cols--md-4"})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols--md-4",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h4,{id:"ordinador",children:"Ordinador"}),`
`,s.jsxs("table",{class:"sb-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Classe"}),s.jsx("th",{children:"Propietats"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid"})}),s.jsx("td",{children:"grid-template-columns: repeat(12, 1fr);"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--lg-(nº col·lumnes)"})}),s.jsx("td",{children:"grid-template-columns: repeat((nº col·lumnes), minmax(0, 1fr));"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("h6",{children:"Exemple"}),`
`,s.jsxs("p",{class:"description",children:["Ejemple de 6 columnes: ",s.jsx("code",{children:"dss-grid__cols--lg-6"})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols--lg-6",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"}),s.jsx("div",{children:"9"}),s.jsx("div",{children:"10"}),s.jsx("div",{children:"11"}),s.jsx("div",{children:"12"})]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h4,{id:"ordinador-gran",children:"Ordinador gran"}),`
`,s.jsxs("table",{class:"sb-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Classe"}),s.jsx("th",{children:"Propietats"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid"})}),s.jsx("td",{children:"grid-template-columns: repeat(12, 1fr);"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"dss-grid__cols--xl-(nº col·lumnes)"})}),s.jsx("td",{children:"grid-template-columns: repeat((nº col·lumnes), minmax(0, 1fr));"})]})]})]}),`
`,s.jsx("br",{}),`
`,s.jsx("h6",{children:"Exemple"}),`
`,s.jsxs("p",{class:"description",children:["Ejemple de 4 columnes: ",s.jsx("code",{children:"dss-grid__cols--xl-4"})]}),`
`,s.jsxs("div",{class:"dss-grid dss-grid__cols--xl-4",children:[s.jsx("div",{children:"1"}),s.jsx("div",{children:"2"}),s.jsx("div",{children:"3"}),s.jsx("div",{children:"4"}),s.jsx("div",{children:"5"}),s.jsx("div",{children:"6"}),s.jsx("div",{children:"7"}),s.jsx("div",{children:"8"}),s.jsx("div",{children:"9"}),s.jsx("div",{children:"10"}),s.jsx("div",{children:"11"}),s.jsx("div",{children:"12"})]})]})}function p(d={}){const{wrapper:e}={...n(),...d.components};return e?s.jsx(e,{...d,children:s.jsx(i,{...d})}):i(d)}export{p as default};
