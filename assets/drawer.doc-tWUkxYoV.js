import{j as e,M as a,T as l,S as t}from"./index-DfM5zTQV.js";import{useMDXComponents as n}from"./index-DRdaJ3vx.js";import{S as d}from"./drawer.stories-LQbkHh1a.js";import"./iframe-zTjM1nUE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function o(s){const r={a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",p:"p",strong:"strong",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(l,{}),e.jsx("component-title",{children:"dss-drawer"})]}),`
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
`,e.jsx(t,{code:`
  <dss-drawer title="Títol del modal">
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
`,e.jsx(t,{code:`
    <dss-button label="Open drawer" size="md" (click)="toggleDrawer()"/>
    <dss-drawer title="Títol del modal" title="Títol del modal" [open]="isDrawerOpen" (onClose)="closeDrawer()">
      <div slot="drawer-body">
        <p>This is the body of the drawer.</p>
      </div>
      <div slot="drawer-footer">
        <dss-button label="Close" size="md" (click)="toggleDrawer()"/>
      </div>
    </dss-drawer>
`}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Component Controller"})}),`
`,e.jsx(t,{code:`
  isDrawerOpen = false;
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
  closeModal() {
    this.isDrawerOpen = false;
  }
`})]})}function w(s={}){const{wrapper:r}={...n(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(o,{...s})}):o(s)}export{w as default};
