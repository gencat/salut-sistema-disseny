import{j as e,M as o,T as i,S as s}from"./blocks-B0kcQ3Dr.js";import{useMDXComponents as a}from"./index-IeeZE5S6.js";import{S as l}from"./drawer.stories-CwCT67YF.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CK9yflr1.js";function t(n){const r={a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(i,{}),e.jsx("component-title",{children:"dss-drawer"})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["Utilitzeu el ",e.jsx(r.a,{href:"/story/components-drawer--playground",children:"playground"})," per provar el component drawer"]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("dss-alert",{message:"Si teniu problemes per fer scroll a la pàgina, assegureu-vos de marcar l'exemple del drawer com a open = false (Obert).",state:"warning"}),`
`,e.jsx("br",{}),`
`,e.jsxs(r.p,{children:["El component drawer està compost per tres blocs: ",e.jsx(r.strong,{children:"header"}),", ",e.jsx(r.strong,{children:"body"})," i ",e.jsx(r.strong,{children:"footer"}),`. El header es construeix de manera dinàmica
a través de les propietats definides més endavant. El contingut del body i footer s'ha de construir manualment utilitzant els slots
relacionats, cosa que ens permet una major llibertat a l'hora de reutilitzar aquest component.`]}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h3,{id:"source-code",children:"Source code"}),`
`,e.jsx(r.p,{children:"El contingut de cada drawer es pot personalitzar individualment modificant l'interior dels slots body i footer."}),`
`,e.jsx(s,{code:`
<dss-drawer titleText="Títol del modal">
  <div slot="drawer-body">
    <p>This is the body of the dialog.</p>
  </div>
  <div slot="drawer-footer">
    <dss-button variant="subtle" label="Button" size="md" />
    <dss-button variant="secondary" label="Button" size="md" />
    <dss-button label="Button" size="md" />
  </div>
</dss-drawer>
`}),`
`,e.jsx(r.p,{children:"Per activar el drawer haurem de configurar a la nostra aplicació la lògica que afegeixi la propietat open al selector dss-drawer."}),`
`,e.jsx(r.h4,{id:"exemple-en-angular",children:"Exemple en angular"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Component Template"})}),`
`,e.jsx(s,{code:`
  <dss-button label="Open drawer" size="md" (click)="toggleDrawer()"/>
  <dss-drawer titleText="Títol del modal" [open]="isDrawerOpen" (close)="closeDrawer()">
    <div slot="drawer-body">
      <p>This is the body of the drawer.</p>
    </div>
    <div slot="drawer-footer">
      <dss-button label="Close" size="md" (click)="toggleDrawer()"/>
    </div>
  </dss-drawer>
`}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Component Controller"})}),`
`,e.jsx(s,{code:`
isDrawerOpen = false;
toggleDrawer() {
  this.isDrawerOpen = !this.isDrawerOpen;
}
closeModal() {
  this.isDrawerOpen = false;
}
`}),`
`,e.jsx(r.h4,{id:"navegació-per-teclat",children:"Navegació per teclat"}),`
`,e.jsxs(r.p,{children:[`El drawer incorpora un focus trap perquè, un cop el focus entra dins del component, la navegació amb teclat no pugui sortir-ne fins que el drawer es tanqui.
En prémer `,e.jsx(r.strong,{children:"Escape"}),", el drawer es tanca i el focus torna a l'element que l'havia obert."]}),`
`,e.jsx(r.p,{children:"Per gestionar el focus inicial, les iniciatives tenen dues opcions:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Deixar que el component posicioni el focus al sentinel inicial quan el drawer no tingui elements interactius."}),`
`,e.jsx(r.li,{children:"Forçar manualment el focus al primer element interactiu del contingut, tenint en compte un petit delay perquè acabi l'animació de visibilitat del drawer."}),`
`]})]})}function x(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{x as default};
