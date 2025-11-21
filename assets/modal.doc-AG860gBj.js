import{j as s,M as a,T as d,S as o}from"./index-CXNEF6Ou.js";import{useMDXComponents as l}from"./index-eHRSTGpG.js";import{S as i}from"./modal.stories-CF2RYXUP.js";import"./iframe-CIo2Z1b8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";function n(e){const t={a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a,{of:i}),`
`,s.jsxs("div",{className:"dss-sb-title",children:[s.jsx(d,{}),s.jsx("component-title",{children:"dss-modal"})]}),`
`,s.jsx("br",{}),`
`,s.jsxs(t.blockquote,{children:[`
`,s.jsxs(t.p,{children:["Utilitzeu el ",s.jsx(t.a,{href:"/story/components-modal--playground",children:"playground"})," per provar el component modal"]}),`
`]}),`
`,s.jsxs(t.p,{children:[s.jsx(t.strong,{children:"Nota"}),": si teniu problemes per fer scroll a la pàgina, assegureu-vos de marcar l'exemple del modal com a open = false (Obert)."]}),`
`,s.jsxs(t.p,{children:["El component modal està compost per tres blocs: ",s.jsx(t.strong,{children:"header"}),", ",s.jsx(t.strong,{children:"body"})," i ",s.jsx(t.strong,{children:"footer"}),`. El header es construeix de manera dinàmica
a través de les propietats definides més endavant. El contingut del body i footer s'ha de construir manualment utilitzant els slots
relacionats, cosa que ens permet una major llibertat a l'hora de reutilitzar aquest component. També és possible afegir contingut extra
al header amb el seu propi slot, per exemple per afegir un content-switch.`]}),`
`,s.jsx("br",{}),`
`,s.jsx(t.h3,{id:"source-code",children:"Source code"}),`
`,s.jsxs(t.ul,{children:[`
`,s.jsx(t.li,{children:s.jsx(t.a,{href:"#default",children:"Default"})}),`
`,s.jsx(t.li,{children:s.jsx(t.a,{href:"#estats",children:"Estats"})}),`
`,s.jsx(t.li,{children:s.jsx(t.a,{href:"#amb-content-switch",children:"Amb content switch"})}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(t.h4,{id:"default",children:"Default"}),`
`,s.jsx(t.p,{children:"El contingut de cada modal es pot personalitzar individualment modificant l'interior dels slots body i footer."}),`
`,s.jsx(o,{code:`
   <dss-modal modalTitle="Títol del modal">
      <div slot="body">
        <p>This is the body of the dialog.</p>
      </div>
      <div class="dss-modal-footer" slot="footer">
        <button class="dss-button dss-button--subtle dss-button--lg">Button</button>
        <button class="dss-button dss-button--secondary dss-button--lg">Button</button>
        <button class="dss-button dss-button--primary dss-button--lg">Button</button>
      </div>
    </dss-modal>
`}),`
`,s.jsx(t.p,{children:"Per activar el modal haurem de configurar a la nostra aplicació la lògica que afegeixi la propietat open al selector dss-modal. Un exemple en angular seria:"}),`
`,s.jsx(t.p,{children:s.jsx(t.strong,{children:"Component Template"})}),`
`,s.jsx(o,{code:`
   <button type="button" class="dss-button dss-button--primary dss-button--md" (click)="toggleModal()">Open modal</button>
   <dss-modal modalTitle="Títol del modal" [open]="isModalOpen" (onModalClosed)="closeModal()">
      <div slot="body">
        <p>This is the body of the dialog.</p>
      </div>
      <div class="dss-modal-footer" slot="footer">
        <dss-button variant="primary" label="Close" (click)="toggleModal()"/>
      </div>
    </dss-modal>
`}),`
`,s.jsx(t.p,{children:s.jsx(t.strong,{children:"Component Controller"})}),`
`,s.jsx(o,{code:`
  isModalOpen = false;
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  closeModal() {
    this.isModalOpen = false;
  }
`}),`
`,s.jsx(t.p,{children:"Pareu atenció a l'esdeveniment onModalClosed que hem d'utilitzar per modificar la nostra variable Angular quan el modal es tanca internament al ShadowRoot."}),`
`,s.jsx(t.h4,{id:"estats",children:"Estats"}),`
`,s.jsxs(t.p,{children:["Afegint la propietat ",s.jsx(t.strong,{children:"state"})," s'inclourà una icona informativa dins de la capçalera del body. Les opcions que podem definir són: '",s.jsx(t.strong,{children:"success"}),"', '",s.jsx(t.strong,{children:"info"}),"', '",s.jsx(t.strong,{children:"alert"}),"' o '",s.jsx(t.strong,{children:"error"}),"'."]}),`
`,s.jsx(o,{code:`
   <dss-modal modalTitle="Títol del modal" state="success">
      <div slot="body">
        <p>This is the body of the dialog.</p>
      </div>
      <div class="dss-modal-footer" slot="footer">
        <dss-button variant="subtle" label="Button" size="md"/>
        <dss-button variant="secondary" label="Button" size="md"/>
        <dss-button variant="primary" label="Button" size="md"/>
      </div>
    </dss-modal>
`}),`
`,s.jsx(t.h4,{id:"amb-content-switch",children:"Amb content switch"}),`
`,s.jsx(t.p,{children:'El slot "header" ens permet afegir un content-switch però la lògica per mostrar o amagar el contingut ha de ser implementada.'}),`
`,s.jsx(o,{code:`
   <dss-modal modalTitle="Títol del modal" state="info">
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
				<dss-button label="Button" size="md"/>
      </div>
    </dss-modal>
`})]})}function f(e={}){const{wrapper:t}={...l(),...e.components};return t?s.jsx(t,{...e,children:s.jsx(n,{...e})}):n(e)}export{f as default};
