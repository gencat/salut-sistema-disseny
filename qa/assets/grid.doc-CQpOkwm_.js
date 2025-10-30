import{j as s,M as l,S as i}from"./index-CRXZcEuw.js";import{useMDXComponents as r}from"./index-DfI6Iev8.js";import"./DocsRenderer-CFRXHY34-2bGhzGM6.js";import"./iframe-nUu_t3LE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";function n(d){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...d.components};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
      .primary-50 {
          background-color: #eff7ff;
          align-items: center;
      }

      .primary-500 {
          background-color: #0073e6;
          height: 50px;
          display: flex;
          align-items:center;
          justify-content: center;
          font-size: 14px;
          color: white;
      }

      .primary-600 {
          background-color: #0064c7;
          height: 50px;
          display: flex;
          align-items:center;
          justify-content: center;
          font-size: 14px;
          color: white;
      }

      .innerZoomElementWrapper, .innerZoomElementWrapper > div {
          display: block !important;
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
`,s.jsx(e.h3,{id:"ús",children:"Ús"}),`
`,s.jsxs(e.p,{children:["El contenidor del grid es definirà amb la classe ",s.jsx(e.code,{children:"dss-grid"})]}),`
`,s.jsx(e.p,{children:"La base del grid per defecte és de 12 columnes i, si no es defineix el nombre de columnes que ocuparà un ítem, aquest ocuparà una columna per defecte."}),`
`,s.jsxs(e.p,{children:["Per definir el nombre de columnes que ocuparà un ítem, es pot utilitzar la classe ",s.jsx(e.code,{children:"dss-col--columns"}),` on columns seria el número que defineix l'espai que
ha d'ocupar l'ítem dins del grid.`]}),`
`,s.jsx(e.p,{children:`Tanmateix, aquesta classe estàndard assigna el mateix nombre de columnes per a tots els breakpoints, cosa que pot funcionar en els breakpoints MD i LG,
però crearia un problema en el breakpoint SM, ja que en aquesta mida el nombre de columnes canvia a 8.`}),`
`,s.jsxs(e.p,{children:["Per aquest motiu, es recomana establir el nombre de columnes que ocuparà cada ítem per a cada breakpoint utilitzant la classe ",s.jsx(e.code,{children:"dss-col--size-columns"}),`,
on size seria `,s.jsx(e.em,{children:"sm, md o lg"}),", i columns el nombre de columnes que ocuparà l'ítem."]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"exemples",children:"Exemples"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"Tots els exemples que es mostren, tenen el contengut centrat i amb colors de fons per a la documentació."}),`
`]}),`
`,s.jsx(e.h4,{id:"columnes-no-definides",children:"Columnes no definides"}),`
`,s.jsxs("div",{class:"dss-grid primary-50",children:[s.jsx("div",{class:"primary-500",children:"1"}),s.jsx("div",{class:"primary-500",children:"2"}),s.jsx("div",{class:"primary-500",children:"3"}),s.jsx("div",{class:"primary-500",children:"4"}),s.jsx("div",{class:"primary-500",children:"5"}),s.jsx("div",{class:"primary-500",children:"6"}),s.jsx("div",{class:"primary-500",children:"7"}),s.jsx("div",{class:"primary-500",children:"8"}),s.jsx("div",{class:"primary-500",children:"9"}),s.jsx("div",{class:"primary-500",children:"9"}),s.jsx("div",{class:"primary-500",children:"11"}),s.jsx("div",{class:"primary-500",children:"12"})]}),`
`,s.jsx(i,{code:`
    <div class="dss-grid">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
    </div>
  `}),`
`,s.jsx(e.h4,{id:"columnes-estàndard",children:"Columnes estàndard"}),`
`,s.jsx(e.p,{children:"En el següent exemple es pot comprovar com el grid no encaixaria de manera correcta en el breakpoint SM."}),`
`,s.jsxs("div",{class:"dss-grid primary-50",children:[s.jsx("div",{class:"dss-col--6 primary-500",children:"col-6"}),s.jsx("div",{class:"dss-col--3 primary-500",children:"col-3"}),s.jsx("div",{class:"dss-col--3 primary-500",children:"col-3"})]}),`
`,s.jsx(i,{code:`
    <div class="dss-grid">
      <div class="dss-col--6">Content</div>
      <div class="dss-col--3">Content</div>
      <div class="dss-col--3">Content</div>
    </div>
  `}),`
`,s.jsx(e.h4,{id:"columnes-estàndard-per-a-md-i-lg-i-específiques-per-a-sm",children:"Columnes estàndard per a MD i LG i específiques per a SM"}),`
`,s.jsx(e.p,{children:"Seguint l'exemple anterior, es podria solucionar afegint una definició específica per al breakpoint SM."}),`
`,s.jsxs("div",{class:"dss-grid primary-50",children:[s.jsx("div",{class:"dss-col--6 dss-col--sm-4 primary-500",children:"col-6 // col-sm-4"}),s.jsx("div",{class:"dss-col--3 dss-col--sm-2 primary-500",children:"col-3 // col-sm-2"}),s.jsx("div",{class:"dss-col--3 dss-col--sm-2 primary-500",children:"col-3 // col-sm-2"})]}),`
`,s.jsx(i,{code:`
    <div class="dss-grid">
      <div class="dss-col--6 dss-col--sm-4">Content</div>
      <div class="dss-col--3 dss-col--sm-2">Content</div>
      <div class="dss-col--3 dss-col--sm-2">Content</div>
    </div>
  `}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h4,{id:"columnes-específiques-per-a-cada-breakpoint",children:"Columnes específiques per a cada breakpoint"}),`
`,s.jsx(e.p,{children:"En el cas que necessitem diferents mides segons el breakpoint, substituiríem la classe estàndard pels breakpoints restants."}),`
`,s.jsxs("div",{class:"dss-grid primary-50",children:[s.jsx("div",{class:"dss-col--sm-8 dss-col--md-6 dss-col--lg-4 primary-500",children:"sm-8 // md-6 // lg-4"}),s.jsx("div",{class:"dss-col--sm-4 dss-col--md-3 dss-col--lg-4 primary-500",children:"sm-4 // md-3 // lg-4"}),s.jsx("div",{class:"dss-col--sm-4 dss-col--md-3 dss-col--lg-4 primary-500",children:"sm-4 // md-3 // lg-4"})]}),`
`,s.jsx(i,{code:`
    <div class="dss-grid">
      <div class="dss-col--sm-8 dss-col--md-6 dss-col--lg-4">Content</div>
      <div class="dss-col--sm-4 dss-col--md-3 dss-col--lg-4">Content</div>
      <div class="dss-col--sm-4 dss-col--md-3 dss-col--lg-4">Content</div>
    </div>
  `}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h4,{id:"jcef-grid-modifier",children:"JCEF Grid Modifier"}),`
`,s.jsx(e.p,{children:`Per donar cobertura a la casuística generada en aplicacions incrustades en JCEF, s'ha creat un modificador
especial per al grid, que ajusta els breakpoints a l'espai útil real disponible dins del navegador mostrat en JCEF.`}),`
`,s.jsxs(e.p,{children:["La recomanació en aquest cas és que aquest modificador ",s.jsx(e.code,{children:"dss-grid--jcef"}),` s'afegeixi de manera dinàmica a cada grid, de tal
manera que l'aplicació sigui capaç de detectar si l'usuari l'està reproduint des de JCEF o des d'un navegador convencional.`]}),`
`,s.jsx(e.p,{children:`Seguint aquesta recomanació, una mateixa aplicació ha de tenir el mateix rendiment i visualització dels grids tant en
JCEF com en un navegador, evitant salts de breakpoints no desitjats.`}),`
`,s.jsxs("div",{class:"dss-grid dss-grid--jcef primary-50",children:[s.jsx("div",{class:"dss-col--sm-8 dss-col--md-6 dss-col--lg-4 primary-500",children:"sm-8 // md-6 // lg-4"}),s.jsx("div",{class:"dss-col--sm-4 dss-col--md-3 dss-col--lg-4 primary-500",children:"sm-4 // md-3 // lg-4"}),s.jsx("div",{class:"dss-col--sm-4 dss-col--md-3 dss-col--lg-4 primary-500",children:"sm-4 // md-3 // lg-4"})]}),`
`,s.jsx(i,{code:`
    <div class="dss-grid dss-grid--jcef">
      <div class="dss-col--sm-8 dss-col--md-6 dss-col--lg-4">Content</div>
      <div class="dss-col--sm-4 dss-col--md-3 dss-col--lg-4">Content</div>
      <div class="dss-col--sm-4 dss-col--md-3 dss-col--lg-4">Content</div>
    </div>
  `}),`
`,s.jsx("br",{}),`
`,s.jsx(e.p,{children:"Per obtenir més informació sobre com utilitzar el grid, podeu visitar les pàgines relacionades al nostre Zeroheight."}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://zeroheight.com/12913d2f0/p/739e80-grid",rel:"nofollow",children:"Grid"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://zeroheight.com/12913d2f0/p/12755e-sistema-de-blocs",rel:"nofollow",children:"Sistema de Blocs"})}),`
`]})]})}function j(d={}){const{wrapper:e}={...r(),...d.components};return e?s.jsx(e,{...d,children:s.jsx(n,{...d})}):n(d)}export{j as default};
