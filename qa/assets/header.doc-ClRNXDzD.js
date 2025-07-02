import{j as e,M as a,T as d,C as i,a as l}from"./index-jNgo2y0J.js";import{useMDXComponents as r}from"./index-D0MhK4jt.js";import{S as c,P as o,a as h,b as x,N as j,E as p,J as u}from"./header.stories-CWM5_U_e.js";import"./iframe-qOFCqYNz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function t(n){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .dss-layout-header {
      width: 1920px;
    }

   
    @media only screen and (max-width: 1024px) {
      .dss-layout-header {
        width: 1024px;
      }
    }

    @media only screen and (min-width: 1025px) and (max-width: 1280px) {
      .dss-layout-header {
        width: 1280px;
      }
    }

    @media only screen and (min-width: 1281px)  and (max-width: 1440px) {
      .dss-layout-header {
        width: 1440px;
      }
    }

    @media only screen and (min-width: 1920px) {
      .dss-layout-header {
        width: 1440px;
      }
    }

    
 
  `}),`
`,e.jsx(a,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-header",size:"md",state:"info-alt",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-header-menu-patient",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-header-links",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-header-menu-professional",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`El Header és essencial per a la interfície d'usuari d'un producte. És un element d'interfície d'usuari
disponible de manera coherent que conté funcionalitats per al producte així com per a tot el sistema.`}),`
`,e.jsx(s.p,{children:`En aquesta pàgina es defineixen els diferents tipus de casos d'ús per al capçal. Si necessiteu informació
més concreta de cadascun dels components utilitzats, ho podeu fer aquí:`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"/docs/components-header-links--exemple",children:"Header Links"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"/docs/components-header-menu-patient--exemple",children:"Header Menu Patient"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"/docs/components-header-menu-professional--exemple",children:"Header Menu Professional"})}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(l,{}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Nota:"})," el logotip de Salut s'està carregant des d'una ruta externa per un problema de configuració a Storybook. Si us plau, assegureu-vos d'utilitzar una ruta relativa a la imatge interna de la llibreria en la vostra iniciativa. Exemple Angular: ",e.jsx(s.code,{children:'logoSrc="/dss-assets/img/salut-logotip-default.svg"'})]}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["title",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Nom de la iniciativa."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"area"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'HES'"}),e.jsx(s.td,{children:"Nom de l'àrea."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["logoSrc",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Ruta de la imatge. Utilitzar la ruta configurada per obtenir la imatge interna de la llibreria."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"jcef"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Sobreescriu els breakpoints de cada component intern per l‟espai real disponible en iniciatives que es visualitzen dins de l‟ECAP a través de l‟aplicació JCEF."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx(s.p,{children:"La col·lecció header com a tal no té cap esdeveniment específic; aquests s’han de detectar individualment en els components que s’utilitzen dins d’aquesta."}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Component"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onCopyCIP"})}),e.jsx(s.td,{children:"Menu Pacient"}),e.jsx(s.td,{children:"Retorna el codi CIP del pacient. Utilitzar només en cas que la funcionalitat interna del component per capturar el CIP al porta-retalls no s'executi correctament."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onViewDetails"})}),e.jsx(s.td,{children:"Menu Pacient & Menu Professional"}),e.jsx(s.td,{children:"Notifica quan s'ha fet clic al botó de veure més detalls del pacient."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onExit"})}),e.jsx(s.td,{children:"Menu Professional"}),e.jsx(s.td,{children:"Notifica quan s'ha fet clic al botó de tancar sessió"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onLogout"})}),e.jsx(s.td,{children:"Menu Professional"}),e.jsx(s.td,{children:"Notifica quan s'ha fet clic al botó de tancar sessió"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onClickLink"})}),e.jsx(s.td,{children:"Links"}),e.jsx(s.td,{children:"Ntifica quan s'ha fet clic en algun dels elements."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onHelp"})}),e.jsx(s.td,{children:"Links"}),e.jsx(s.td,{children:"Notifica quan s'ha fet clic en l'element d'ajuda."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#Amb-pacient-assistencial",children:"Amb pacient: Assistencial"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-pacient-administratiu",children:"Amb pacient: Administratiu"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#sense-pacient",children:"Sense pacient"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#extern",children:"Extern"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#jcef",children:"JCEF"})}),`
`]}),`
`,e.jsx(s.p,{children:`Els exemples mostrats als canvas a continuació són només orientatius, ja que dins del canvas no es pot interactuar amb els diferents breakpoints.
Per veure el funcionament complet de la collection header, si us plau, seleccioneu la variant desitjada al playground.`}),`
`,e.jsx(s.h4,{id:"amb-pacient---assistencial",children:"Amb pacient - Assistencial"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h4,{id:"amb-pacient---administratiu",children:"Amb pacient - Administratiu"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h4,{id:"sense-patient",children:"Sense patient"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.h4,{id:"extern",children:"Extern"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(s.h4,{id:"jcef",children:"JCEF"}),`
`,e.jsxs(s.p,{children:["En aquelles iniciatives visualitzades a través de l'ECAP s'haurà de definir la propietat ",e.jsx(s.code,{children:"jcef"}),` amb l'objectiu de sobreescriure els breakpoints per defecte
pel espai real disponible a través d'aquesta aplicació.`]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsx(s.h4,{id:"el-divisor-vertical-no-apareix-davant-del-menú-de-pacient-en-utilitzar-lapi-suffix",children:"El divisor vertical no apareix davant del menú de pacient en utilitzar l'API suffix."}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Problema:"})}),`
`,e.jsxs(s.p,{children:["En utilitzar l'API suffix definint el menú de pacient com ",e.jsx(s.code,{children:"<dss-header-menu-patient-xyz>"}),`, el CSS intern del component
no és capaç de detectar el sufix del selector, de manera que la regla CSS que afegeix el divisor vertical davant
d'aquest deixa de complir-se.`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Solució:"})}),`
`,e.jsx(s.p,{children:"Per solucionar el problema, s'ha d'afegir la classe 'dss-header-menu-patient' al component."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.em,{children:"Original:"})," ",e.jsx(s.code,{children:"<dss-header-menu-patient></dss-header-menu-patient>"})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.em,{children:"Amb suffix:"})," ",e.jsx(s.code,{children:'<dss-header-menu-patient-xyz class="dss-header-menu-patient"></dss-header-menu-patient-xyz>'})]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.5.1"})}),e.jsxs(s.td,{children:["S'ha corregit el nom de l'slot per mostrar situacions de marca de criticality a ",e.jsx(s.code,{children:"situation-marks"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.4.0"})}),e.jsxs(s.td,{children:["S'ha afegit la propietat jcef, que modifica les mides estàndard definides per als breakpoints pel espai útil real que ocupen les aplicacions visualitzades a l'ECAP a través de JCEF.",e.jsx("br",{}),"S'ha corregit un error pel qual els divisors situats entre cada slot del header no es mostraven correctament."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.3.0"})}),e.jsx(s.td,{children:"S'han refactoritzat els components interns del header i s'han afegit els exemples per a les diferents variants del header."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.2.0"})}),e.jsx(s.td,{children:"S'ha corregit un error pel qual no apareixia el divisor davant del menú de pacient quan s'utilitzava l'API suffix."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.12.3"})}),e.jsx(s.td,{children:"S'ha corregit la propietat logoSrc que estava causant conflictes a l'hora de renderitzar la imatge a aplicacions Angular."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.12.0"})}),e.jsx(s.td,{children:"Nou web component."})]})]})]})]})}function C(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{C as default};
