import{ae as e,af as l,ag as i,ah as a,ai as o,ak as r}from"./index-Rj5sKnnY.js";import{u as d}from"./index-COmZ33MR.js";import{S as c,P as h}from"./drawer.stories-DT9q_I36.js";import"./iframe-B8zLdvo4.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function t(n){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   
  `}),`
`,e.jsx(l,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(i,{}),e.jsx("dss-badge",{text:"dss-drawer",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`El drawer és un element de la interfície d'usuari que llisca des d'un costat de la pantalla, generalment per mostrar un menú o
opcions addicionals sense ocupar espai permanent a la pantalla principal. En el nostre cas, s'usarà principalment per gestionar
els filtres que s'aplicaran sobre el contingut de l'aplicació.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Per provar el component drawer, si us plau, utilitzeu el playground."}),`
`]}),`
`,e.jsx(a,{of:h}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Nota"}),": si teniu problemes per fer scroll a la pàgina, assegureu-vos de marcar l'exemple del drawer com a open = false (Obert)."]}),`
`,e.jsx(o,{}),`
`,e.jsxs(s.p,{children:["El component drawer està compost per tres blocs: ",e.jsx(s.strong,{children:"header"}),", ",e.jsx(s.strong,{children:"body"})," i ",e.jsx(s.strong,{children:"footer"}),`. El header es construeix de manera dinàmica
a través de les propietats definides més endavant. El contingut del body i footer s'ha de construir manualment utilitzant els slots
relacionats, cosa que ens permet una major llibertat a l'hora de reutilitzar aquest component.`]}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["open",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Defineix si el modal és visible o ocult."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["title",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"''"}),e.jsx(s.td,{children:"Títol mostrat a la capçalera."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"size"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'md'"}),e.jsxs(s.td,{children:["Mida dels elements del drawer. Pot ser: '",e.jsx(s.strong,{children:"sm"}),"', '",e.jsx(s.strong,{children:"md"}),"' o '",e.jsx(s.strong,{children:"lg"}),"'"]})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onDrawerClosed"})}),e.jsx(s.td,{children:"Esdeveniment que notifica que el drawer s'ha tancat internament des del component, fent clic a la icona de tancar o bé fent clic fora del contenidor del diàleg."})]})})]}),`
`,e.jsx(s.h2,{id:"source-code",children:"Source code"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default",children:"Default"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#estats",children:"Estats"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-divider",children:"Amb divider"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-content-switch",children:"Amb content switch"})}),`
`]}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(s.p,{children:"El contingut de cada drawer es pot personalitzar individualment modificant l'interior dels slots body i footer."}),`
`,e.jsx(r,{code:`
   <dss-drawer title="Títol del modal">
      <div slot="drawer-body">
        <p>This is the body of the dialog.</p>
      </div>
      <div slot="drawer-footer">
        <button class="dss-button dss-button--subtle dss-button--lg">Button</button>
        <button class="dss-button dss-button--secondary dss-button--lg">Button</button>
        <button class="dss-button dss-button--primary dss-button--lg">Button</button>
      </div>
    </dss-drawer>
`}),`
`,e.jsxs(s.p,{children:["Per activar el drawer haurem de configurar a la nostra aplicació la lògica que afegeixi la propietat open al selector dss-drawer. Un ",e.jsx(s.strong,{children:"exemple en angular"})," seria:"]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Component Template"})}),`
`,e.jsx(r,{code:`
    <button type="button" class="dss-button dss-button--primary dss-button--md" (click)="toggleDrawer()">Open drawer</button>
    <dss-drawer title="Títol del modal" title="Títol del modal" [open]="isDrawerOpen" (onDrawerClosed)="closeDrawer()">
      <div slot="drawer-body">
        <p>This is the body of the drawer.</p>
      </div>
      <div slot="drawer-footer">
        <button class="dss-button dss-button--primary dss-button--lg" (click)="toggleDrawer()">Close</button>
      </div>
    </dss-drawer>
`}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Component Controller"})}),`
`,e.jsx(r,{code:`
  isDrawerOpen = false;
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
  closeModal() {
    this.isDrawerOpen = false;
  }
`}),`
`,e.jsx(s.p,{children:"Pareu atenció a l'esdeveniment onDrawerClosed que hem d'utilitzar per modificar la nostra variable Angular quan el modal es tanca internament al ShadowRoot."}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.9.1"})}),e.jsx(s.td,{children:"S'ha corregit un error en l'espaiat del Drawer."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.9.0"})}),e.jsx(s.td,{children:"S'ha creat el component drawer, amb un funcionament similar al modal, que es podrà utilitzar per afegir contingut addicional a les aplicacions, com per exemple la selecció de filtres."})]})]})]})]})}function v(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{v as default};