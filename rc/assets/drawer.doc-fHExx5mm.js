import{ae as e,af as i,ag as l,ah as a,ai as o,ak as s}from"./index-CQXi_Y6g.js";import{u as d}from"./index-CkYTJ7Ip.js";import{S as c,P as h}from"./drawer.stories-DT9q_I36.js";import"./iframe-i1QLOcry.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function r(n){const t={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   
  `}),`
`,e.jsx(i,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("dss-badge",{text:"dss-drawer",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(t.p,{children:`El drawer és un element de la interfície d'usuari que llisca des d'un costat de la pantalla, generalment per mostrar un menú o
opcions addicionals sense ocupar espai permanent a la pantalla principal. En el nostre cas, s'usarà principalment per gestionar
els filtres que s'aplicaran sobre el contingut de l'aplicació.`}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(o,{}),`
`,e.jsxs(t.p,{children:["El component drawer està compost per tres blocs: ",e.jsx(t.strong,{children:"header"}),", ",e.jsx(t.strong,{children:"body"})," i ",e.jsx(t.strong,{children:"footer"}),`. El header es construeix de manera dinàmica
a través de les propietats definides més endavant. El contingut del body i footer s'ha de construir manualment utilitzant els slots
relacionats, cosa que ens permet una major llibertat a l'hora de reutilitzar aquest component.`]}),`
`,e.jsx(t.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Àmbit"}),e.jsx(t.th,{children:"Condition"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"open"})}),e.jsx(t.td,{children:"Input"}),e.jsx(t.td,{children:"Requerida"}),e.jsx(t.td,{children:"boolean"}),e.jsx(t.td,{children:"false"}),e.jsx(t.td,{children:"Defineix si el modal és visible o ocult."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"title"})}),e.jsx(t.td,{children:"Input"}),e.jsx(t.td,{children:"Requerida"}),e.jsx(t.td,{children:"string"}),e.jsx(t.td,{children:"''"}),e.jsx(t.td,{children:"Títol mostrat a la capçalera."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"size"})}),e.jsx(t.td,{children:"Input"}),e.jsx(t.td,{children:"Opcional"}),e.jsx(t.td,{children:"string"}),e.jsx(t.td,{children:"''"}),e.jsxs(t.td,{children:["Mida dels elements del drawer. Pot ser: '",e.jsx(t.strong,{children:"sm"}),"', '",e.jsx(t.strong,{children:"md"}),"' o '",e.jsx(t.strong,{children:"lg"}),"'"]})]})]})]}),`
`,e.jsx(t.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Àmbit"}),e.jsx(t.th,{children:"Condition"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Description"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"onDrawerClosed"})}),e.jsx(t.td,{children:"Output"}),e.jsx(t.td,{children:"Opcional"}),e.jsx(t.td,{children:"Event"}),e.jsx(t.td,{children:"-"}),e.jsx(t.td,{children:"Esdeveniment que notifica que el drawer s'ha tancat internament des del component, fent clic a la icona de tancar o bé fent clic fora del contenidor del diàleg."})]})})]}),`
`,e.jsx(t.h2,{id:"source-code",children:"Source code"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#default",children:"Default"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#estats",children:"Estats"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#amb-divider",children:"Amb divider"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#amb-content-switch",children:"Amb content switch"})}),`
`]}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(t.p,{children:"El contingut de cada drawer es pot personalitzar individualment modificant l'interior dels slots body i footer."}),`
`,e.jsx(s,{code:`
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
`,e.jsxs(t.p,{children:["Per activar el drawer haurem de configurar a la nostra aplicació la lògica que afegeixi la propietat open al selector dss-drawer. Un ",e.jsx(t.strong,{children:"exemple en angular"})," seria:"]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Component Template"})}),`
`,e.jsx(s,{code:`
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
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Component Controller"})}),`
`,e.jsx(s,{code:`
  isDrawerOpen = false;
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
  closeModal() {
    this.isDrawerOpen = false;
  }
`}),`
`,e.jsx(t.p,{children:"Pareu atenció a l'esdeveniment onDrawerClosed que hem d'utilitzar per modificar la nostra variable Angular quan el modal es tanca internament al ShadowRoot."}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Versió"}),e.jsx(t.th,{children:"Canvis"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"2.0.0"})}),e.jsx(t.td,{children:"Refactor v2"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"1.9.1"})}),e.jsx(t.td,{children:"S'ha corregit un error en l'espaiat del Drawer."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"1.9.0"})}),e.jsx(t.td,{children:"S'ha creat el component drawer, amb un funcionament similar al modal, que es podrà utilitzar per afegir contingut addicional a les aplicacions, com per exemple la selecció de filtres."})]})]})]})]})}function v(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{v as default};
