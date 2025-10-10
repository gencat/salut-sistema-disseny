import{j as e,M as d,T as r,C as i}from"./index-C-EK6EWO.js";import{useMDXComponents as t}from"./index-4JXzRKeq.js";import{S as l,P as c,a as o,b as x,N as h,E as p,J as u}from"./header.stories-Dq43irvL.js";import"./iframe-Bj0FHVdQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function a(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`,e.jsx(d,{of:l}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("dss-badge",{text:"dss-header",size:"md",state:"info-alt",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-header-menu-patient",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-header-links",size:"md",state:"info",outlined:!0,hideIcon:!0}),e.jsx("dss-badge",{text:"dss-header-menu-professional",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:`El Header és essencial per a la interfície d'usuari d'un producte. És un element d'interfície d'usuari
disponible de manera coherent que conté funcionalitats per al producte així com per a tot el sistema.`}),`
`,e.jsx(n.p,{children:`En aquesta pàgina es defineixen els diferents tipus de casos d'ús per al capçal. Si necessiteu informació
més concreta de cadascun dels components utilitzats, ho podeu fer aquí:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-header-links--exemple",children:"Header Links"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-header-menu-patient--exemple",children:"Header Menu Patient"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-header-menu-professional--exemple",children:"Header Menu Professional"})}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#Amb-pacient-assistencial",children:"Amb pacient: Assistencial"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-pacient-administratiu",children:"Amb pacient: Administratiu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#sense-pacient",children:"Sense pacient"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#extern",children:"Extern"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#jcef",children:"JCEF"})}),`
`]}),`
`,e.jsx(n.p,{children:`Els exemples mostrats als canvas a continuació són només orientatius, ja que dins del canvas no es pot interactuar amb els diferents breakpoints.
Per veure el funcionament complet de la collection header, si us plau, seleccioneu la variant desitjada al playground.`}),`
`,e.jsx(n.h4,{id:"amb-pacient---assistencial",children:"Amb pacient - Assistencial"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h4,{id:"amb-pacient---administratiu",children:"Amb pacient - Administratiu"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h4,{id:"sense-patient",children:"Sense patient"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h4,{id:"extern",children:"Extern"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h4,{id:"jcef",children:"JCEF"}),`
`,e.jsxs(n.p,{children:["En aquelles iniciatives visualitzades a través de l'ECAP s'haurà de definir la propietat ",e.jsx(n.code,{children:"jcef"}),` amb l'objectiu de sobreescriure els breakpoints per defecte
pel espai real disponible a través d'aquesta aplicació.`]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"resolució-de-problemes",children:"Resolució de problemes"}),`
`,e.jsx(n.h4,{id:"el-divisor-vertical-no-apareix-davant-del-menú-de-pacient-en-utilitzar-lapi-suffix",children:"El divisor vertical no apareix davant del menú de pacient en utilitzar l'API suffix."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problema:"})}),`
`,e.jsxs(n.p,{children:["En utilitzar l'API suffix definint el menú de pacient com ",e.jsx(n.code,{children:"<dss-header-menu-patient-xyz>"}),`, el CSS intern del component
no és capaç de detectar el sufix del selector, de manera que la regla CSS que afegeix el divisor vertical davant
d'aquest deixa de complir-se.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Solució:"})}),`
`,e.jsx(n.p,{children:"Per solucionar el problema, s'ha d'afegir la classe 'dss-header-menu-patient' al component."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Original:"})," ",e.jsx(n.code,{children:"<dss-header-menu-patient></dss-header-menu-patient>"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Amb suffix:"})," ",e.jsx(n.code,{children:'<dss-header-menu-patient-xyz class="dss-header-menu-patient"></dss-header-menu-patient-xyz>'})]}),`
`,e.jsx("br",{})]})}function q(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{q as default};
