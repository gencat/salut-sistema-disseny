import{j as e,M as l}from"./index-Cx1Uf6B2.js";import{useMDXComponents as i}from"./index--zWhLMxv.js";import"./DocsRenderer-CFRXHY34-BzUP3dzE.js";import"./iframe-CSvXUqhT.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";function s(a){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ul:"ul",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Documentació/Changelog v1/1.8.X"}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx("br",{}),`
`,e.jsx("div",{class:"dss-grid",children:e.jsx("div",{class:"dss-col--6 dss-col--sm-4 sb-changelog-col",children:e.jsx("dss-badge",{size:"lg",state:"ideal",text:"Versió: 1.8.X",hideIcon:!0})})}),`
`,e.jsx("br",{}),`
`,e.jsx("div",{class:"dss-grid",children:e.jsx("div",{class:"dss-col--8 dss-col--sm-5",children:e.jsx(n.h3,{id:"informe-de-registre-de-canvis",children:"Informe de registre de canvis"})})}),`
`,e.jsx("div",{class:"dss-grid",children:e.jsxs("div",{class:"dss-col--8 dss-col--sm-12",children:[e.jsx(n.h3,{id:"182",children:"1.8.2"}),e.jsx(n.h4,{id:"custom-table",children:"Custom table"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha corregit un error pel qual el navegador podia arribar a bloquejar-se si es feia click multitud de vegades en un checkbox per seleccionar una fila."}),`
`,e.jsx(n.li,{children:"S'ha millorat el funcionament del checkbox multiselect perquè s'actualitzi dinàmicament en cas que l'usuari seleccioni totes les files manualment o bé desmarqui una d'elles quan estaven totes seleccionades."}),`
`,e.jsx(n.li,{children:"S'ha modificat el missatge d'informació sobre les files seleccionades, que podia arribar a ser confús, ja que en el comptador es tenen en compte també les files seleccionades en altres pàgines de la taula."}),`
`,e.jsxs(n.li,{children:["S'ha afegit una propietat ",e.jsx(n.code,{children:"hideFooter"})," per a aquelles casuístiques especials on es necessiti ocultar per algun motiu tant el paginador com les opcions referents a les files seleccionades en la versió multiselect."]}),`
`]}),e.jsx(n.h4,{id:"datepicker",children:"Datepicker"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha afegit un espai al final del dropdown del calendari perquè la sobra no talli en els casos d'ús on el datepicker es mostra al final d'un component o pàgina."}),`
`]}),e.jsx(n.h4,{id:"input-dropdown",children:"Input dropdown"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha corregit un error per al cas d'ús de selecció simple sense tiquet i amb dropdown sempre obert, en la qual els elements es quedaven marcats encara després de seleccionar-ne un de diferent."}),`
`,e.jsx(n.li,{children:"S'ha corregit un error pel qual, en limitar l'altura del dropdown i tenir habilitat l'opció 'seleccionar tot', es produïa un bug visual en fer scroll en el qual tots els elements eren encara visibles per darrere de l'opció per seleccionar tot."}),`
`]}),e.jsx(n.h4,{id:"input-switch",children:"Input switch"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha creat una nova versió del component Switch, amb el nom Input Switch, que permet utilitzar el component anterior dins de formularis reactius d'Angular, seguint el mateix patró que en components prèviament adaptats, on input i label es defineixen a través de slots."}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h3,{id:"181",children:"1.8.1"}),e.jsx(n.h4,{id:"custom-table-1",children:"Custom table"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha corregit un error pel qual l'ordenació de les columnes no funcionava si n'hi havia algun camp sense valor."}),`
`,e.jsx(n.li,{children:"S'ha corregit un error pel qual la fila expandida amb classe 'tbody-row--expanded' tenia un background en estat 'hover'."}),`
`]}),e.jsx(n.h4,{id:"datepicker-1",children:"Datepicker"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha corregit un error pel qual, en el cas de tenir un selector d'hora, no s'habilitava el botó d'acceptar-la si l'hora o minuts definits eren '00'."}),`
`,e.jsxs(n.li,{children:["S'ha solucionat un error pel qual els estats ",e.jsx(n.code,{children:"disable"})," o ",e.jsx(n.code,{children:"readonly"})," no es tenien en compte en fer click a la label, cosa que permetia obrir el calendari."]}),`
`]}),e.jsx(n.h4,{id:"input-dropdown-1",children:"Input dropdown"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha corregit un error pel qual es resetejava el filtre de recerca dins l'input quan es recarregaven els elements del selector externament."}),`
`,e.jsx(n.li,{children:"S'ha afegit un canvi en la interfície per al cas en què el dropdown no té elements fins que l'usuari inicia el filtre de recerca. Ara el missatge de buscar apareixerà com a placeholder mentre que al dropdown es mostrarà un spinner de càrrega fins a obtenir els elements."}),`
`,e.jsx(n.li,{children:"S'ha modificat el comportament del filtre, perquè no afecti els elements que ja estan seleccionats, de manera que només es filtrin la resta d'opcions disponibles. D'aquesta manera tampoc s'aplica l'estil negreta que actualment es mostrava en tots els elements que tenien una coincidència amb el filtre."}),`
`]}),e.jsx(n.h4,{id:"pagination",children:"Pagination"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["S'ha corregit un error per la propietat ",e.jsx(n.code,{children:"pageSize"})," no sorgia efecte i en el seu lloc es prenia com a referència el primer valor de la propietat ",e.jsx(n.code,{children:"pageSizeOptions"}),". Ara el ",e.jsx(n.code,{children:"pageSize"}),", per defecte 10, tindrà més pes sempre que existeixi dins de les opcions, en cas contrari el ",e.jsx(n.code,{children:"pageSize"})," per defecte serà la primera opció disponible."]}),`
`]}),e.jsx(n.h4,{id:"tabs",children:"Tabs"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["S'ha corregit un error pel qual els elements amb ",e.jsx(n.code,{children:"position: absolute"})," que se sortien del component no eren visibles."]}),`
`,e.jsx(n.li,{children:"S'ha corregit un error pel qual la vora de la pestanya seleccionada no es mostrava correctament quan hi havia altres pestanyes amb una alçada més gran en tenir dues línies de text."}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h3,{id:"180",children:"1.8.0"}),e.jsx(n.h4,{id:"alert",children:"Alert"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["S'han afegit les mesures ",e.jsx(n.code,{children:"lg"}),", ",e.jsx(n.code,{children:"md"})," i ",e.jsx(n.code,{children:"sm"}),". Si no s'afegeixen les classes específiques de cada mesura el component seguirà apareixent igual que fins ara, per la qual cosa no és necessari readaptar-lo en iniciatives ja finalitzades."]}),`
`]}),e.jsx(n.h4,{id:"chat-message",children:"Chat message"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha afegit el component per a mostrar la conversa entre professionals i pacients, on tindrem el missatge i el seu metadata relacionat (autor, avatar, data i arxius adjunts si n'hi hagués)."}),`
`]}),e.jsx(n.h4,{id:"custom-table-2",children:"Custom table"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["S'ha corregit un error pel qual la propietat ",e.jsx(n.code,{children:"rowsPerPageLabel"})," no estava fent efecte."]}),`
`,e.jsxs(n.li,{children:["S'han afegit noves propietats que permeten ocultar o modificar l'aparença d'alguns elements per a poder adaptar el component a tots els dissenys de les iniciatives. Veure propietats: ",e.jsx(n.code,{children:"hidePaginationResults"}),", ",e.jsx(n.code,{children:"pageSizeOptionsDisabled"}),", ",e.jsx(n.code,{children:"hideHeaderTitleAndExpand"}),"."]}),`
`]}),e.jsx(n.h4,{id:"datepicker-2",children:"Datepicker"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha corregit un error en el font-family per a alguns elements mostrats al calendari, que no estaven alineats amb el disseny del mateix."}),`
`]}),e.jsx(n.h4,{id:"input-dropdown-2",children:"Input dropdown"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha corregit un error pel qual es reinicialitzava el filtre de cerca dins de l'input quan es recarregaven els elements del selector externament."}),`
`]}),e.jsx(n.h4,{id:"modal",children:"Modal"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha redefinit l'ample del contenidor del modal, de manera que s'ajustarà automàticament al contingut d'aquest, al mateix temps que tindrà un ample mínim i màxim en funció dels breakpoints de la pantalla."}),`
`]}),e.jsx(n.h4,{id:"tabs-1",children:"Tabs"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"S'ha corregit un error pel qual no s’afegia l'espaiat correcte entre els badges afegits via slot i el títol de la pestanya. Aquest marge s'assignarà automàticament quan s'afegeixi per slot els següents elements: badge, icon badge i notification badge. Per a qualsevol altre element el marge ha d'assignar-se manualment amb CSS."}),`
`]}),e.jsx(n.h4,{id:"upload-box",children:"Upload box"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Nou component que permet adjuntar arxius de manera manual o mitjançant Drag & Drop."}),`
`]})]})})]})}function m(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{m as default};
