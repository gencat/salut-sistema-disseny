import{j as e,M as l,T as d,S as o}from"./index-CrGc2ra4.js";import{useMDXComponents as n}from"./index-CZ3dOVhy.js";import{S as i}from"./modal.stories-Ddb4e7zD.js";import"./iframe-DmJd5wjr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function a(t){const s={a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("component-title",{children:"dss-modal"})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Utilitzeu el ",e.jsx(s.a,{href:"/story/components-modal--playground",children:"playground"})," per provar el component modal"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Nota"}),": si teniu problemes per fer scroll a la pàgina, assegureu-vos de marcar l'exemple del modal com a open = false (Obert)."]}),`
`,e.jsxs(s.p,{children:["El component modal està compost per tres blocs: ",e.jsx(s.strong,{children:"header"}),", ",e.jsx(s.strong,{children:"body"})," i ",e.jsx(s.strong,{children:"footer"}),`. El header es construeix de manera dinàmica
a través de les propietats definides més endavant. El contingut del body i footer s'ha de construir manualment utilitzant els slots
relacionats, cosa que ens permet una major llibertat a l'hora de reutilitzar aquest component. També és possible afegir contingut extra
al header amb el seu propi slot, per exemple per afegir un content-switch.`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"source-code",children:"Source code"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default",children:"Default"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#estats",children:"Estats"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-content-switch",children:"Amb content switch"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"default",children:"Default"}),`
`,e.jsx(s.p,{children:"El contingut de cada modal es pot personalitzar individualment modificant l'interior dels slots body i footer."}),`
`,e.jsx(o,{code:`
   <dss-modal modalTitle="Títol del modal">
      <div slot="body" style="text-align: center;">
	  		<dss-typography tag="p" variant="body-2" fontweight="regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </dss-typography>
      </div>
      <div class="dss-modal-footer" slot="footer">
        <dss-button variant="subtle" label="Button" size="md"/>
        <dss-button variant="secondary" label="Button" size="md"/>
        <dss-button variant="primary" label="Button" size="md"/>
      </div>
    </dss-modal>
`}),`
`,e.jsx(s.p,{children:"Per activar el modal haurem de configurar a la nostra aplicació la lògica que afegeixi la propietat open al selector dss-modal. Un exemple en angular seria:"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Component Template"})}),`
`,e.jsx(o,{code:`
  <dss-button variant="primary" label="Open modal" size="md"(click)="toggleModal()"/>
  <dss-modal modalTitle="Títol del modal" [open]="isModalOpen" (onModalClosed)="closeModal()">
    <div slot="body">
      <p>This is the body of the dialog.</p>
    </div>
    <div class="dss-modal-footer" slot="footer">
      <dss-button variant="primary" label="Close" size="md" (click)="toggleModal()"/>
    </div>
  </dss-modal>
`}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Component Controller"})}),`
`,e.jsx(o,{code:`
  isModalOpen = false;
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  closeModal() {
    this.isModalOpen = false;
  }
`}),`
`,e.jsx(s.p,{children:"Pareu atenció a l'esdeveniment onModalClosed que hem d'utilitzar per modificar la nostra variable Angular quan el modal es tanca internament al ShadowRoot."}),`
`,e.jsx(s.h4,{id:"estats",children:"Estats"}),`
`,e.jsxs(s.p,{children:["Afegint la propietat ",e.jsx(s.strong,{children:"state"}),` s'inclourà una icona informativa dins de la capçalera del body.
Les opcions que podem definir són: '`,e.jsx(s.strong,{children:"warning"}),"' o '",e.jsx(s.strong,{children:"danger"}),"'."]}),`
`,e.jsx(o,{code:`
   <dss-modal modalTitle="Títol del modal" state="danger">
      <div slot="body">
        <p>This is the body of the dialog.</p>
      </div>
      <div class="dss-modal-footer" slot="footer">
        <dss-button variant="subtle" label="Button" size="md"/>
        <dss-button variant="secondary" label="Button" size="md"/>
        <dss-button variant="danger" label="Button" size="md"/>
      </div>
    </dss-modal>
`}),`
`,e.jsx(s.h4,{id:"amb-content-switch",children:"Amb content switch"}),`
`,e.jsx(s.p,{children:'El slot "header" ens permet afegir un content-switch però la lògica per mostrar o amagar el contingut ha de ser implementada.'}),`
`,e.jsx(o,{code:`
   <dss-modal modalTitle="Títol del modal" state="warning">
      <div slot="header">
        <dss-content-switcher .tabs={myTabs} size="md"></dss-content-switcher>
      </div>
      <div slot="body">
        <div class="tab1">
          <p>This is the body of the dialog.</p>
        </div>
         <div class="tab2">
          <p>This is the body of the dialog.</p>
        </div>
      </div>
      <div class="dss-modal-footer" slot="footer">
      	<dss-button variant="subtle" label="Button" size="md"/>
        <dss-button variant="secondary" label="Button" size="md"/>
        <dss-button variant="warning" label="Button" size="md"/>
      </div>
    </dss-modal>
`})]})}function j(t={}){const{wrapper:s}={...n(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(a,{...t})}):a(t)}export{j as default};
