import{j as e,M as d,T as r,S as a,C as n}from"./index-B5jbTz7a.js";import{useMDXComponents as i}from"./index-ClAsjV62.js";import{S as o,a as c,N as x,A as h,b as p,c as u,d as j,H as m,e as b,f,g,T as _,I as v,C as T,h as q,i as y,D as w,j as C,k as A,l as k,B as E,R,m as P,n as L,o as S,p as B,P as z,q as H,r as M}from"./table-css.stories-0l6hVcUa.js";import"./iframe-DW66_DlR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-element-Dloa6E9d.js";import"./lit-html-D6a8R3xZ.js";function l(t){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`
    .innerZoomElementWrapper {
        display: block !important;
        width: 800px !important;
      }

      .dss-table-stretch-exemple{
          width: 500px;
      }

      .dss-table-exemple-auto{
        width: auto;
      }
    `,e.jsx(s.p,{children:"`}"})]}),`
`,e.jsx(d,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("dss-badge",{text:"HTML/CSS",size:"md",state:"moderate-high",outlined:!0,hideIcon:!0})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["IMPORTANT: Aquest component deixés de rebre actualitzacions des de la versió 1.6.0. Per favor, utilitza el component ",e.jsx(s.a,{href:"/docs/components-custom-table--page",children:"dss-custom-table"})," en el seu lloc."]}),`
`]}),`
`,e.jsx(s.p,{children:`Les Taules mostren informació en un format de quadrícula de files i columnes.
Organitzen la informació de manera que sigui fàcil d'escanejar perquè els
usuaris puguin buscar patrons i desenvolupar informació a partir de les dades.`}),`
`,e.jsx("h5",{}),`
`,e.jsxs(s.p,{children:["Utilitzarem la classe ",e.jsx(s.strong,{children:"dss-table"}),` com a classe base, i es té que utilitzar
amb les etiquetes HTML corresponents a una tabla. Es trata d'un element molt
variat en opcions, pero en general no es permet una tabla de més de 10
columnes i 10 files per vista.`]}),`
`,e.jsx("h5",{children:"Exemple basic de taula"}),`
`,e.jsx(a,{code:`
    <table class="dss-table">
    <thead>
      <tr>
        <th>
          <span class="dss-table__text">Title 1</span>
        </th>
        <th>
          <span class="dss-table__text">Title 2</span>
        </th>
        <th>
          <span class="dss-table__text">Title 3</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <span class="dss-table__text">Text 1</span>
        </td>
        <td>
          <span class="dss-table__text">Text 2</span>
        </td>
        <td>
          <span class="dss-table__text">Text 3</span>
        </td>
      </tr>
    </tbody>
  </table>`}),`
`,e.jsx("hr",{}),`
`,e.jsx("h3",{children:"Índex"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#tipus-de-taula",children:"Tipus de taula"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#alineaci%C3%B3",children:"Alineació"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#cap%C3%A7alera",children:"Capçalera"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#contingut",children:"Contingut"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#pagination",children:"Pagination"})}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"tipus-de-taula",children:"Tipus de taula"}),`
`,e.jsx(s.p,{children:`Ens referim a tipus de taula, quan es dona la circumstancia de que hi ha una
taula dins d'un altra taula. A aço es diu taula anidada.`}),`
`,e.jsxs(s.p,{children:["Per tant, la taula pot ser: ",e.jsx(s.strong,{children:"simple"})," o ",e.jsx(s.strong,{children:"aninada"}),"."]}),`
`,e.jsx("h5",{children:"Taula simple"}),`
`,e.jsx(n,{of:c}),`
`,e.jsx("h5",{children:"Taula anidada"}),`
`,e.jsxs(s.p,{children:[`La taula que es la que están dins de una taula, hi ha que afegir-li la classe
`,e.jsx(s.strong,{children:"dss-table--nested"})]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h3,{id:"alineació",children:"Alineació"}),`
`,e.jsx(s.p,{children:`La alineació pot ser tant de fila com de celda. Per defecte, la alineació es a
la esquerra.`}),`
`,e.jsx("h5",{children:"Centrat"}),`
`,e.jsx(s.p,{children:`Els elements que van centrats, son: els button, icon button, checkbox,
radiobutton.`}),`
`,e.jsx("h6",{children:"Alineació per files"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx("h6",{children:"Alineació per celda"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx("h5",{children:"A la dreta"}),`
`,e.jsx(s.p,{children:"Els elements que van centrats, son: números, dates, badge i review."}),`
`,e.jsx("h6",{children:"Alineació per files"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx("h6",{children:"Alineació per celda"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h3,{id:"capçalera",children:"Capçalera"}),`
`,e.jsxs(s.p,{children:["Els títols sempre van entre etiquetes (",e.jsx(s.code,{children:"span"}),", ",e.jsx(s.code,{children:"p"}),", ",e.jsx(s.code,{children:"h1"}),`, etc...) i amb la
clase `,e.jsx(s.strong,{children:"dss-table__text"}),". Com a màxim es permet 2 files de text."]}),`
`,e.jsxs(s.p,{children:["L'etiqueta ",e.jsx(s.code,{children:"thead"}),` en HTML és utilitzada per definir un bloc que conté les
cel·les de capçalera d'una taula. El contingut dins d'aquesta etiqueta es
considera una capçalera de taula i s'utilitza per descriure el contingut de
les columnes de la taula.`]}),`
`,e.jsx(a,{code:`
  <thead>
    <tr>
        <th>
          <span class="dss-table__text">Title 1</span>
        </th>
        <th>
          <span class="dss-table__text">Title 2</span>
        </th>
        <th>
          <span class="dss-table__text">Title 3</span>
        </th>
    </tr>
  </thead>`}),`
`,e.jsx(s.p,{children:"Hi han diferents opcions que es contemplem en les taules:"}),`
`,e.jsx("h5",{children:"Sense títol"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx("h5",{children:"Títol simple"}),`
`,e.jsx(n,{of:b}),`
`,e.jsx("h5",{children:"Títol en 2 línees"}),`
`,e.jsxs(s.p,{children:["Que el títol estiga en 2 línees, ",e.jsx(s.strong,{children:`depen del contingut de la columna i del
ample de la taula`}),`. El primer block mostra una taula amb l'ample 100% i la
segona, una taula amb l'ample reduït a 500px;`]}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Nota:"})," ignorar la clase ",e.jsx(s.code,{children:"dss-table-stretch-exemple"}),` es fa servir només per
mostrar l'exemple de com es veurà la taula amb una amplaria de 500px.`]})}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(n,{of:g}),`
`,e.jsx("h5",{children:"Amb títol i ordenació"}),`
`,e.jsxs(s.p,{children:["Hi ha que afegir al ",e.jsx(s.code,{children:"th"})," del ",e.jsx(s.code,{children:"thead"}),`, un contenidor amb la classe
`,e.jsx(s.strong,{children:"dss-table--order"}),`. El selector del ordre, que pot ser ascendent o
descendent, s'obté a través d'un input checkbox amb la classe
`,e.jsx(s.strong,{children:"dss-table__arrow-order"}),"."]}),`
`,e.jsx(a,{code:`
    <thead>
        <th>
            <div class="dss-table--order">
              <span>Title 1</span>
              <i class="dss-table__sort-icon dss-icon dss-icon--sm">swap_vert</i>
              <i class="dss-table__sort-icon dss-icon dss-icon--sm">swap_vert</i>
            </div>
        </th>
    </thead>`}),`
`,e.jsx(n,{of:_}),`
`,e.jsx("h5",{children:"Amb Icon Button"}),`
`,e.jsx(s.p,{children:"També tenim la opció de tindre un botó amb una icona."}),`
`,e.jsx(a,{code:`
    <thead>
        <th>
            <button type="button" class="dss-table__icon-button">
                <span class="material-symbols-rounded"> more_vert </span>
            </button>
        </th>
    </thead>`}),`
`,e.jsx(n,{of:v}),`
`,e.jsx("h5",{children:"Amb Checkbox"}),`
`,e.jsx(a,{code:`
    <thead>
        <th>
            <input type="checkbox" class="dss-table__checkbox" />
        </th>
    </thead>`}),`
`,e.jsx(n,{of:T}),`
`,e.jsx(s.h3,{id:"contingut",children:"Contingut"}),`
`,e.jsxs(s.p,{children:["L'element ",e.jsx(s.code,{children:"tbody"})," conté un bloc de files (",e.jsx(s.code,{children:"tr"}),`) que representa la secció del
cos d'una taula, i per tant tenim varies opcions disponibles com a contingut.`]}),`
`,e.jsx("h5",{}),`
`,e.jsxs(s.p,{children:[`Per norma general, la columna de tipus text serà sempre adaptable a l’ample
total de la taula. Quan per necessitats de producte sigui necessari fixar
l’amplada de les columnes de text, tindràn un `,e.jsx(s.code,{children:"min-width: 200px"}),` i un
`,e.jsx(s.code,{children:"max-width: 400px"}),"."]}),`
`,e.jsx("h5",{children:"Text"}),`
`,e.jsxs(s.p,{children:["El text sempre va entre etiquetes (",e.jsx(s.code,{children:"span"}),", ",e.jsx(s.code,{children:"p"}),", ",e.jsx(s.code,{children:"h1"}),`, etc...) i amb la clase
`,e.jsx(s.strong,{children:"dss-table__text"}),". Com a màxim es permet 2 files de text."]}),`
`,e.jsxs(s.p,{children:[`Té alineació justificada, i 3 pesos: regular, bold i black. Per defecte está
amb el pes regular, pero es pot canviar de pes afegint la classe
`,e.jsx(s.strong,{children:"dss-table--(bold | black)"})," en el ",e.jsx(s.code,{children:"td"}),", o en el ",e.jsx(s.code,{children:"tr"}),` per a aplicar-ho a tota
la fila.`]}),`
`,e.jsx(a,{code:`
    <tbody>
        <tr>
            <td>
              <span class="dss-table__text">Lorem ipsum</span>
            </td>
        </tr>
    </tbody>`}),`
`,e.jsx(n,{of:q}),`
`,e.jsx(n,{of:y}),`
`,e.jsx("h5",{children:"Dates i números"}),`
`,e.jsxs(s.p,{children:["El text sempre va entre etiquetes (",e.jsx(s.code,{children:"span"}),", ",e.jsx(s.code,{children:"p"}),", ",e.jsx(s.code,{children:"h1"}),`, etc...) i amb la clase
`,e.jsx(s.strong,{children:"dss-table__text"}),". Com a màxim es permet 2 files de text."]}),`
`,e.jsxs(s.p,{children:[`Les dates i els números tenen justificació a la dreta, i 3 pesos: regular,
semibold i bold. Per defecte está amb el pes regular, pero es pot canviar de
pes afegint la classe `,e.jsx(s.strong,{children:"dss-table--(semibold | bold)"})," en el ",e.jsx(s.code,{children:"td"}),`, o en el
`,e.jsx(s.code,{children:"tr"})," per a aplicar-ho a tota la fila."]}),`
`,e.jsx(a,{code:`
    <tbody>
        <tr class="dss-table--align-right">
            <td>
              <span class="dss-table__text">01/01/2024</span>
            </td>
        </tr>
    </tbody>`}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(n,{of:C}),`
`,e.jsx("h5",{children:"Estats"}),`
`,e.jsx(s.p,{children:`Els estats son un text amb una icona que indica una situació i están
predefinides amb el tipus de icona i el misstage.`}),`
`,e.jsx(a,{code:`
    <td>
        <div class="dss-table__status">
        <i class="material-symbols-rounded">question_answer</i>
        <span>Respost</span>
        </div>
    </td>`}),`
`,e.jsx(n,{of:A}),`
`,e.jsx("h5",{children:"Icon button"}),`
`,e.jsx(a,{code:`
    <tbody>
        <tr>
            <td>
              <div class="dss-table__icon-button-container">
                <button type="button" class="dss-table__icon-button">
                  <span class="material-symbols-rounded">add_box</span>
                </button>
              </div
            </td>
        </tr>
    </tbody>`}),`
`,e.jsx(n,{of:k}),`
`,e.jsx("h5",{children:"Botó"}),`
`,e.jsx(a,{code:`
    <tbody>
        <tr>
            <td>
              <button type="button" class="dss-table__button dss-table__button--primary">
                Button
              </button>
            </td>
        </tr>
    </tbody>`}),`
`,e.jsx(n,{of:E}),`
`,e.jsx("h5",{children:"Radiobutton"}),`
`,e.jsx(a,{code:`
<tbody>
    <tr>
        <td>
        <input
          type="radio"
          class="dss-table__radiobutton"
        />
        </td>
    </tr>
</tbody>`}),`
`,e.jsx(n,{of:R}),`
`,e.jsx("h5",{children:"Checkbox"}),`
`,e.jsx(a,{code:`
<tbody>
    <tr>
        <td>
            <input
              type="checkbox"
              class="dss-table__checkbox"
            />
        </td>
    </tr>
</tbody>`}),`
`,e.jsx(n,{of:P}),`
`,e.jsx("h5",{children:"Review"}),`
`,e.jsx(s.p,{children:"Son elements de confirmació d'estat, i tenim el success i el error."}),`
`,e.jsx(a,{code:`
<tbody>
    <tr>
        <td>
          <div class="dss-table__review-container">        
            <input
              type="checkbox"
              class="dss-table__review dss-table__review--check"
            />
          </div>
        </td>
        <td>
          <div class="dss-table__review-container">        
            <input
              type="checkbox"
              class="dss-table__review dss-table__review--error"
            />
          </div>
        </td>
    </tr>
</tbody>`}),`
`,e.jsx(n,{of:L}),`
`,e.jsx("h5",{children:"Badge"}),`
`,e.jsx(s.p,{children:`El badge es un element que ens transmet informació, amb la opció de incorporar
una acció. Té tres estats, i pot tindre misstage o no.`}),`
`,e.jsx(n,{of:S}),`
`,e.jsx(s.p,{children:"També está la opció del badge amb una icona extra"}),`
`,e.jsx(n,{of:B}),`
`,e.jsx(s.h3,{id:"pagination",children:"Pagination"}),`
`,e.jsx(s.p,{children:`S'utilitza per a organitzar la taula en diferents pàgines, amb un nombre fix
de files a cada pàgina.`}),`
`,e.jsx(s.p,{children:`Por tindre la opció del mòdul "Rows per page" o no. Aquest modul indica
quantes files per pàgina es mostren.`}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Nota:"})," ignorar la clase ",e.jsx(s.code,{children:"dss-table-container-exemple"}),` es fa servir només
per mostrar l'exemple de com es veurà el pagination.`]})}),`
`,e.jsx(n,{of:z}),`
`,e.jsx("h5",{children:'Amb el mòdul "Rows per page"'}),`
`,e.jsx(n,{of:H}),`
`,e.jsx("h5",{children:'Sense el mòdul "Rows per page"'}),`
`,e.jsx(n,{of:M})]})}function G(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l(t)}export{G as default};
