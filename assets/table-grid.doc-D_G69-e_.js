import{j as e,M as t,T as r,C as l}from"./blocks-C0Hy_QiU.js";import{useMDXComponents as i}from"./index-CYcGtXlX.js";import{S as c,P as o,A as d,a as u,b as m}from"./table-grid.stories-Dd4U9SiU.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-_r7gOCbv.js";import"./storybook-decorators-DSS85Rnr.js";function s(n){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("dss-badge",{text:"dss-table-grid",size:"md",state:"info-alt",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-table-thead",size:"md",state:"info-alt",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-table-tbody",size:"md",state:"info-alt",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(a.p,{children:"Aquest component és el contenidor principal del grid de dades de la taula i es compon de dues peces (dss-table-thead i dss-table-tbody), on s’hauran d’incloure les files (dss-row) i les cel·les (dss-cell) corresponents."}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(l,{of:o}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#grid-autoajustable",children:"Grid autoajustable"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#grid-amb-scroll-horitzontal",children:"Grid amb scroll horitzontal"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#columnes-fixes",children:"Columnes fixes"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#ordenaci%C3%B3-de-columnes",children:"Ordenació de columnes"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#navegaci%C3%B3-amb-el-teclat",children:"Navegació amb el teclat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#navegaci%C3%B3-amb-el-teclat-avan%C3%A7ada",children:"Navegació amb el teclat avançada"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h4,{id:"grid-autoajustable",children:"Grid autoajustable."}),`
`,e.jsx(a.p,{children:e.jsx(a.code,{children:"config.gridTemplateColumns"})}),`
`,e.jsx(a.p,{children:"Utilitzant les possibilitats i mesures de CSS Grid podem simular el comportament d’una taula nativa, assignant a les columnes una mesura dinàmica amb fr perquè s’ajustin en funció de l’espai disponible."}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(a.h4,{id:"grid-amb-scroll-horitzontal",children:"Grid amb scroll horitzontal"}),`
`,e.jsx(a.p,{children:e.jsx(a.code,{children:"config.scrollable"})}),`
`,e.jsx(a.p,{children:"Perquè la taula mostri un scroll horitzontal serà necessari que la suma de l’amplada de totes les columnes superi l’amplada total permesa del contenidor on es troba. Així mateix, serà important establir una amplada mínima dinàmica per a alguna de les columnes en pantalles on aquesta suma pugui resultar inferior, i evitar tenir un espai en blanc dins del component. Podem utilitzar això, per exemple, perquè la taula només tingui scroll en resolucions més petites."}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(a.h4,{id:"columnes-fixes",children:"Columnes fixes."}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:"config.leftStickyColumns"})," ",e.jsx(a.code,{children:"config.rightStickyColumns"})]}),`
`,e.jsx(a.p,{children:"Per a taules amb el scroll horitzontal activat és possible definir si volem que hi hagi un nombre de columnes fixes tant a l’esquerra com a la dreta de la taula."}),`
`,e.jsx(l,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h4,{id:"ordenació-de-columnes",children:"Ordenació de columnes"}),`
`,e.jsx(a.p,{children:`A causa de conflictes en diferents casos d’ús, en què les iniciatives disposen de la seva pròpia
ordenació o necessiten segmentar les dades des del backend, s’ha decidit separar la funcionalitat
de sorting de la nova collection table.`}),`
`,e.jsx(a.p,{children:`En lloc d’ordenar les dades de la columna seleccionada, des de la cel·la que conté la capçalera
s’emetrà un esdeveniment per gestionar-ho des de la iniciativa.`}),`
`,e.jsx(a.p,{children:`Així mateix, l’anterior funcionalitat de sorting del component custom-table s’ha posat a disposició
mitjançant un fitxer d’utilitats (utils) que es pot utilitzar externament per evitar haver d’implementar
aquesta lògica.`}),`
`,e.jsx(a.p,{children:"D’aquesta manera, el flux seria el següent:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{children:`
// React Exemple

// Detectar l’esdeveniment 'sort' a la cel·la: React >> onsort.

<dss-cell 
  variant="header"
  id={column.column}
  value={column.label} 
  sortable
  sortState={column.sortOrder || 'none'}
  currentSortedColumn={currentSortedColumn}
  onsort={handleColumnSort}
>
</dss-cell>


// Importar la utilitat de sorting.
import { sort } from '@salut/design-system-salut-rc/utils/sorting';


// Aplicar l’ordenació sobre les dades segons la lògica requerida.

const handleColumnSort = (event: CustomEvent) => {
    const { id, value, sortState } = event.detail;

    setCurrentSortedColumn(sortState === 'none' ? '' : id);

    setColumnsHeader((prev) =>
      prev.map((col) =>
        col.column === id
          ? { ...col, sortOrder: sortState }
          : { ...col, sortOrder: 'none' }
      )
    );
    
    const nextData = getFilteredData(); // Funció que retorna les dades filtrades segons la lògica requerida.

    if (sortState === 'none') {
      setDisplayData(nextData.slice(0, pageSize));
      return;
    }

    const sortType = columnsHeader.find((col) => col.column === id)?.sortType; // Obtenir el tipus de sorting definit a la capçalera de la columna. string | number | date

    const sortedData = sort(nextData, id, sortState, sortType || 'string');

    // Actualitzar les dades i la pàgina actual.
    setData(sortedData); // Actualitzar les dades ordenades a l’estat de la col·lecció.
    setDisplayData(sortedData.slice(0, pageSize)); // Actualitzar les dades a mostrar segons la pàgina actual.
    setCurrentPage(1); // Reiniciar la pàgina actual a 1 després de l’ordenació.
  }


`})}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h4,{id:"navegació-amb-el-teclat",children:"Navegació amb el teclat"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"Fletxa dreta"}),": mou el focus una cel·la cap a la dreta. Si el focus és a la cel·la més a la dreta de la fila, no es mou."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"Fletxa esquerra"}),": mou el focus una cel·la cap a l'esquerra. Si el focus és a la cel·la més a l'esquerra de la fila, es mou a la fila completa."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"Fletxa avall"}),": mou el focus una fila o una cel·la cap avall. Si el focus és a la cel·la inferior de la columna, no es mou."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"Fletxa amunt"}),": mou el focus una fila o una cel·la cap amunt. Si el focus és a la cel·la superior de la columna, no es mou."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"Pàgina avall"}),": mou el focus cap avall fins a l'última fila. Si el focus ja és a l'última fila de la graella, no es mou."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"Pàgina amunt"}),": mou el focus cap amunt fins a la primera fila. Si el focus ja és a la primera fila de la graella, no es mou."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"Inici"}),": mou el focus a la primera cel·la de la fila que conté el focus."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"Fi"}),": mou el focus a l'última cel·la de la fila que conté el focus."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h4,{id:"navegació-amb-el-teclat-avançada",children:"Navegació amb el teclat avançada"}),`
`,e.jsx(a.p,{children:`Atès que el contingut interactiu de les cel·les s’injecta mitjançant slots, no podem controlar des del component
el flux complet de navegació des de la graella (grid) fins a l’últim element de la cel·la.`}),`
`,e.jsx(a.p,{children:`Per complir els requisits d’accessibilitat, s’ha configurat el funcionament de la navegació de manera que permeti
a l’usuari desplaçar-se des de la cel·la activa fins al seu contingut interactiu fent servir la tecla Tab.
Tanmateix, això implica que l’usuari ha de prémer Tab dues vegades per situar-se a l’element i, posteriorment,
fer una tercera interacció per activar el contingut interactiu, ja sigui amb Enter o amb la barra espaiadora.`}),`
`,e.jsx(a.p,{children:`En aquest cas d’ús concret, oferim dues recomanacions per millorar l’experiència d’usuari, que s’han d’implementar
des del costat de la iniciativa:`}),`
`,e.jsxs(a.ol,{children:[`
`,e.jsxs(a.li,{children:["Implementar un ",e.jsxs(a.strong,{children:["event listener de ",e.jsx(a.code,{children:"focusin"})]})," a la cel·la que conté elements interactius. D’aquesta manera, quan la cel·la rebi el focus des del component, el focus es traslladarà automàticament al primer element interactiu de la cel·la, evitant la necessitat de fer doble Tab."]}),`
`,e.jsxs(a.li,{children:["En funció del tipus de contingut interactiu que s’injecti a la cel·la, es pot implementar un ",e.jsxs(a.strong,{children:["event listener de ",e.jsx(a.code,{children:"keydown"})]})," sobre la mateixa cel·la per executar la interacció sobre l’element corresponent quan l’usuari premi Enter o la barra espaiadora. Per exemple, si es tracta d’un botó o d’una casella de selecció (checkbox), s’evita la tercera interacció necessària per activar el contingut."]}),`
`]})]})}function v(n={}){const{wrapper:a}={...i(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(s,{...n})}):s(n)}export{v as default};
