import{j as e,M as r,T as i,C as a,a as d}from"./index-B4qL_GYS.js";import{useMDXComponents as l}from"./index-C3eNySlS.js";import{S as c,P as o,D as h,A as x,I as j,a as p,F as u}from"./tabs.stories-CYWXErpS.js";import"./iframe-CxgvReJW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function t(n){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .innerZoomElementWrapper {
      display: block !important;
    }
    .innerZoomElementWrapper div {
      width: 100% !important;
    }
    .css-10skpf4 > * {
      zoom: 0 !important;
    }
  `}),`
`,e.jsx(r,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(i,{}),e.jsx("dss-badge",{text:"dss-tabs-list",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-tabs-panel",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`El component Tab és un element d'interfície d'usuari utilitzat per organitzar i presentar contingut de manera estructurada i accessible.
Apareix com una barra horitzontal amb múltiples pestanyes, cadascuna representant una vista o secció de contingut rellevant per a l'usuari.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al canvas. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(d,{}),`
`,e.jsx(s.p,{children:"Per tal d'implementar les tabs hem d'utilitzar dos tipus de components:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"dss-tabs-list"})}),": Conté la capçalera del component amb tots els ítems interactius que faran visibles les pestanyes corresponents. Només s’ha de definir una vegada."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"dss-tabs-panel"})}),": És el contenidor que s’activarà quan es faci clic en una tab. S’ha de definir un contenidor per cada pestanya disponible."]}),`
`]}),`
`,e.jsx(s.p,{children:"Les propietats definides en cada un dels components han d’estar relacionades per permetre el correcte funcionament de les tabs."}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx(s.h4,{id:"dss-tabs-list",children:"dss-tabs-list"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["label",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:`Label utilitzat pel que fa a accessibilitat per a lectors de pantalla. Intenteu situar l'usuari en context adequat, per exemple "Tabs de perfil del pacient".`})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["dssTabsId",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"ID global del component. S'utilitza per evitar un mal funcionament de les tabs en el cas que es vulgui utilitzar més d'un component per pantalla."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["tabs",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"tabs[]"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Llista de tabs que han de mostrar-se en el component. En cas d'obtenir errors a l'inserir una variable interna tipus angular, intenteu passar el contingut d'aquesta utilitzant un JSON.stringify()"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"addTabEnabled"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsxs(s.td,{children:[`Opció per habilitat el botó d'"Afegir tab" dins del component. En tractar-se d'un atribut de tipus booleà només és necessari declarar-lo dins del selector sense donar-li valor. `,e.jsx("br",{}),"DO:",e.jsx(s.code,{children:"<dss-tabs-list addTabEnabled>"}),e.jsx("br",{}),"DON'T: ",e.jsx(s.code,{children:'<dss-tabs-list addTabEnabled="true">'}),e.jsx("br",{}),"DO:",e.jsx(s.code,{children:"<dss-tabs-list>"}),e.jsx("br",{}),"DON'T: ",e.jsx(s.code,{children:'<dss-tabs-list addTabEnabled="false">'})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"addTabText"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"Afegir tabs"}),e.jsx(s.td,{children:'Utilitzada per a modificar el text del botó "Afegir tab" en cas que fos necessari'})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"fullHeight"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Ajusta l'alçada del component a la del seu contenidor, la qual cosa permet tenir un scroll intern dins del component a la part dels panells, fent que la llista de pestanyes sigui sempre visible."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(s.h4,{id:"tabs",children:"tabs"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["id",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"ID que se li assignarà al botó generat"}),e.jsx(s.td,{}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["text",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"."}),e.jsx(s.td,{children:"Text mostrat dins del botó"}),e.jsx(s.td,{}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["panel",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"ID del panell que habilitarà el botó. Assegurar-se de què aquest valor es correspon amb dels panelID definits als components dss-tabs-panel."}),e.jsx(s.td,{}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"selected"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Assigna la tab marcada com seleccionat a l'iniciar el component. Es pot utilitzar aquests valor per tornar a carregar l'últim estat del component si aquest s'ha emmagatzemat amb l'esdeveniment onChangeDssTab"}),e.jsx(s.td,{}),e.jsx(s.td,{})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx(s.h4,{id:"dss-tabs-panel",children:"dss-tabs-panel"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Àmbit"}),e.jsx(s.th,{children:"Condition"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["panelId",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"ID del panell. Cal assegurar-se d'assignar el mateix valor tant en el panell com en la seva tab corresponent."}),e.jsx(s.td,{}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["label",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Idealment, podríem utilitzar l'atribut aria-labelledby juntament amb el tab.id definit en el component anterior. De totes maneres, el fet de tractar amb dos components diferents provoca que el panell no sigui capaç de trobar l'ID en el seu shadow-root, això provoca un error d'accessibilitat. S'ha optat per una solució directa on podem assignar directament el label per cada panell. Suggerència: En lloc d'assignar un text manualment, cal assignar una lògica que, donat un id, trobi la tab corresponent entre les tabs i torni el valor del paràmetre del text, assegurant així que la tab i el label del panel tinguin el mateix contingut."}),e.jsx(s.td,{}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["linkedTo",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"ID global del component. Cal assegurar-se què és el mateix definit a les dss-tabs-list."}),e.jsx(s.td,{}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"selected"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Declara que el panell s'ha de mostrar en iniciar el component. Cal assegurar-se que només es declara un panell selected al codi."}),e.jsx(s.td,{}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasScroll"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita l'scroll dins del panell per a aquells casos en què cal delimitar una alçada màxima."}),e.jsx(s.td,{}),e.jsx(s.td,{})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onChangeDssTab"})}),e.jsx(s.td,{children:"Esdeveniment llançat en seleccionar-se una nova tab. No influeix en el comportament del component, però pot utilitzar-se per estendre la funcionalitat d'aquest. Per exemple, per guardar l'última tab seleccionada en l'estat de l'aplicació."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onAddDssTab"})}),e.jsx(s.td,{children:"Esdeveniment llançat en fer clic en el botó d'afegir tab. S'haurà d'afegir un EventListener a les diferents aplicacions per tal de gestionar el procés de crear una nova tab."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"funcionalitats",children:"Funcionalitats"}),`
`,e.jsx(s.h4,{id:"seleccionar-tab",children:"Seleccionar Tab"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Mètode:"})," selectTab",e.jsx("br",{}),`
`,e.jsx(s.strong,{children:"Paràmetres:"})," id ",e.jsx(s.code,{children:"string"})," - id definit per a la pestanya a la llista de tabs enviada al component com a propietat.",e.jsx("br",{}),`
`,e.jsx(s.strong,{children:"Descripció:"})," permet seleccionar una pestanya de forma externa sense haver de fer clic al component.",e.jsx("br",{}),`
`,e.jsx(s.strong,{children:"Exemple React:"})]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`/* Controller */
const tabs = [
  ...
  { id: 'tab-103', text: 'Last tab', panel: 'tabpanel-103' },
  ...
];  
const tabsRef = useRef(null);
const forceChangeTab = () => {
  const tabList = tabsRef.current as any;
  if (!tabList) return;
  tabList.selectTab('tab-103');
}

/* Template */
<dss-button label="Change Tab" onClick={forceChangeTab}></dss-button>
<dss-tabs-list ref={tabsRef} tabs={options} ...>

`})}),`
`,e.jsx(s.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default",children:"Default"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-afegir-tab",children:"Amb afegir tab"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-icon-badge",children:"Amb icon badge"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-scroll-horitzontal",children:"Amb scroll horitzontal"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-al%C3%A7ada-completa",children:"Amb alçada completa"})}),`
`]}),`
`,e.jsx(s.h4,{id:"default",children:"Default"}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(s.h4,{id:"amb-afegir-tab",children:"Amb afegir tab"}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(s.h4,{id:"amb-icon-badge",children:"Amb Icon Badge"}),`
`,e.jsxs(s.p,{children:[`S'ha afegit un slot dins del component per tal de poder afegir un badge dins de cada pestanya.
Per a implementar aquesta funcionalitat s'ha d'afegir el codi HTML dins del component `,e.jsx(s.code,{children:"dss-tabs-list"}),`
afegint la propietat `,e.jsx(s.em,{children:'slot="badge-tabID"'}),`, on tabID serà el mateix valor que s'ha definit prèviament
per a cada tab en la propietat tabs.`]}),`
`,e.jsx(a,{of:j}),`
`,e.jsx(s.h4,{id:"amb-scroll-horitzontal",children:"Amb scroll horitzontal"}),`
`,e.jsx(s.p,{children:"S'ha modificat el comportament del component quan les pestanyes no caben en l'amplada del contenidor, afegint una funcionalitat de desplaçament mitjançant dos botons que apareixeran dinàmicament a l'esquerra o a la dreta de la llista de pestanyes."}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(s.h4,{id:"amb-alçada-completa",children:"Amb alçada completa"}),`
`,e.jsxs(s.p,{children:["La propietat ",e.jsx(s.code,{children:"fullHeight"})," ajusta l'alçada del component a la del seu contenidor, la qual cosa permet tenir un scroll intern dins del component a la part dels panells, fent que la llista de pestanyes sigui sempre visible."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Per utilitzar aquesta variant és obligatori que el contenidor pare tingui una alçada definida, ja sigui mitjançant el height de CSS o un display flex:1"}),`
`]}),`
`,e.jsx(a,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Problema: Panells visibles a l'iniciar el component"}),e.jsx("br",{}),`
S'ha detectat que en alguns navegadors pot donar-se el cas que els panells es mostrin durant un instat abans que el component Lit apliqui les seves fulles d'estil.`,e.jsx("br",{}),`
`,e.jsx(s.strong,{children:"Solució:"}),e.jsx("br",{}),`
Afegir a la fulla d'estils de la seva pròpia pàgina/aplicació el següent codi CSS:`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`  :not(:defined) {
    display: none;
  }
`})}),`
`,e.jsx(s.h3,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.7.0"})}),e.jsx(s.td,{children:"S'ha afegit la propietat fullHeight que ajusta l'alçada del component a la del seu contenidor, la qual cosa permet tenir un scroll intern dins del component a la part dels panells, fent que la llista de pestanyes sigui sempre visible."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.4.1"})}),e.jsxs(s.td,{children:["Nova funcionalitat ",e.jsx(s.code,{children:"selectTab"})," que permet seleccionar una de les pestanyes des de fora del component."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.4.0"})}),e.jsx(s.td,{children:"S'ha corregit un error pel qual, en seleccionar una nova pestanya, es produïa un desplaçament horitzontal no desitjat a nivell del navegador. Ara el desplaçament només s'aplicarà al contenidor del propi menú de pestanyes."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.12.4"})}),e.jsx(s.td,{children:"S'ha modificat el comportament del component quan les pestanyes no caben en l'amplada del contenidor, afegint una funcionalitat de desplaçament mitjançant dos botons que apareixeran dinàmicament a l'esquerra o a la dreta de la llista de pestanyes."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.10.0"})}),e.jsx(s.td,{children:"S'ha modificat la manera en què es visualitza la pestanya seleccionada per corregir un error pel qual la vora inferior de la pestanya seleccionada no es mostrava correctament en alguns navegadors. S'han afegit estils per als estats hover i active per alinear-los amb el disseny del DS."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.8.1"})}),e.jsx(s.td,{children:"S'ha corregit un error pel qual els elements amb 'position: absolute' que se sortien del component no eren visibles.S' ha corregit un error pel qual la vora de la pestanya seleccionada no es mostrava correctament quan hi havia altres pestanyes amb una alçada més gran en tenir dues línies de text."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.8.0"})}),e.jsx(s.td,{children:"S'ha corregit un error pel qual no es añadia l'espaiat correcte entre els badges afegits via slot i el títol de la pestanya. Aquest marge s'assignarà automàticament quan s'afegeixi per slot els següents elements: badge, icon badge i notification badge. Per a qualsevol altre element el marge ha d'assignar-se manualment amb CSS."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.5.0"})}),e.jsx(s.td,{children:"S'ha corregit un error pel qual, en afegir noves tabs o navegar per diferents pàgines i tornar enrere, la tab activa no es marcava correctament en la capçalera."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.4.1"})}),e.jsx(s.td,{children:"S'ha afegit la possibilitat d'incloure un badge dins de cada pestanya."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.2.1"})}),e.jsx(s.td,{children:"Creat nou component que reemplaça a l'anterior per a complir amb requisits d'accessibilitat i solucionar els problemes en navegadors Firefox."})]})]})]})]})}function T(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{T as default};
