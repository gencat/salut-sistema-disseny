import{j as t,M as l,T as a,S as e}from"./index-B5jbTz7a.js";import{useMDXComponents as d}from"./index-ClAsjV62.js";import{S as i}from"./modal.stories-DrDtZ8Uf.js";import"./iframe-DW66_DlR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function n(o){const s={a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:i}),`
`,t.jsxs("div",{className:"dss-sb-title",children:[t.jsx(a,{}),t.jsx("component-title",{children:"dss-modal"})]}),`
`,t.jsx("br",{}),`
`,t.jsxs(s.blockquote,{children:[`
`,t.jsxs(s.p,{children:["Utilitzeu el ",t.jsx(s.a,{href:"/story/components-modal--playground",children:"playground"})," per provar el component modal"]}),`
`]}),`
`,t.jsxs(s.p,{children:[t.jsx(s.strong,{children:"Nota"}),": si teniu problemes per fer scroll a la pàgina, assegureu-vos de marcar l'exemple del modal com a open = false (Obert)."]}),`
`,t.jsxs(s.p,{children:["El component modal està compost per tres blocs: ",t.jsx(s.strong,{children:"header"}),", ",t.jsx(s.strong,{children:"body"})," i ",t.jsx(s.strong,{children:"footer"}),`. El header es construeix de manera dinàmica
a través de les propietats definides més endavant. El contingut del body i footer s'ha de construir manualment utilitzant els slots
relacionats, cosa que ens permet una major llibertat a l'hora de reutilitzar aquest component. També és possible afegir contingut extra
al header amb el seu propi slot, per exemple per afegir un content-switch.`]}),`
`,t.jsx("br",{}),`
`,t.jsx(s.h3,{id:"source-code",children:"Source code"}),`
`,t.jsxs(s.ul,{children:[`
`,t.jsx(s.li,{children:t.jsx(s.a,{href:"#default",children:"Default"})}),`
`,t.jsx(s.li,{children:t.jsx(s.a,{href:"#estats",children:"Estats"})}),`
`,t.jsx(s.li,{children:t.jsx(s.a,{href:"#amb-divider",children:"Amb divider"})}),`
`,t.jsx(s.li,{children:t.jsx(s.a,{href:"#amb-content-switch",children:"Amb content switch"})}),`
`]}),`
`,t.jsx("br",{}),`
`,t.jsx(s.h4,{id:"default",children:"Default"}),`
`,t.jsx(s.p,{children:"El contingut de cada modal es pot personalitzar individualment modificant l'interior dels slots body i footer."}),`
`,t.jsx(e,{code:`
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
`,t.jsx(s.p,{children:"Per activar el modal haurem de configurar a la nostra aplicació la lògica que afegeixi la propietat open al selector dss-modal. Un exemple en angular seria:"}),`
`,t.jsx(s.p,{children:t.jsx(s.strong,{children:"Component Template"})}),`
`,t.jsx(e,{code:`
   <button type="button" class="dss-button dss-button--primary dss-button--md" (click)="toggleModal()">Open modal</button>
   <dss-modal modalTitle="Títol del modal" [open]="isModalOpen" (onModalClosed)="closeModal()">
      <div slot="body">
        <p>This is the body of the dialog.</p>
      </div>
      <div class="dss-modal-footer" slot="footer">
        <button class="dss-button dss-button--primary dss-button--lg" (click)="toggleModal()">Close</button>
      </div>
    </dss-modal>
`}),`
`,t.jsx(s.p,{children:t.jsx(s.strong,{children:"Component Controller"})}),`
`,t.jsx(e,{code:`
  isModalOpen = false;
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  closeModal() {
    this.isModalOpen = false;
  }
`}),`
`,t.jsx(s.p,{children:"Pareu atenció a l'esdeveniment onModalClosed que hem d'utilitzar per modificar la nostra variable Angular quan el modal es tanca internament al ShadowRoot."}),`
`,t.jsx(s.h4,{id:"estats",children:"Estats"}),`
`,t.jsxs(s.p,{children:["Afegint la propietat ",t.jsx(s.strong,{children:"state"})," s'inclourà una icona informativa dins de la capçalera del body. Les opcions que podem definir són: '",t.jsx(s.strong,{children:"success"}),"', '",t.jsx(s.strong,{children:"info"}),"', '",t.jsx(s.strong,{children:"alert"}),"' o '",t.jsx(s.strong,{children:"error"}),"'."]}),`
`,t.jsx(e,{code:`
   <dss-modal modalTitle="Títol del modal" state="success">
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
`,t.jsx(s.h4,{id:"amb-divider",children:"Amb divider"}),`
`,t.jsxs(s.p,{children:["Afegint la propietat ",t.jsx(s.strong,{children:"hasDivider"})," s'inclouran línies divisòries entre les seccions header, body i footer."]}),`
`,t.jsx(e,{code:`
   <dss-modal modalTitle="Títol del modal" state="info" hasDivider>
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
`,t.jsx(s.h4,{id:"amb-content-switch",children:"Amb content switch"}),`
`,t.jsx(s.p,{children:'El slot "header" ens permet afegir un content-switch però la lògica per mostrar o amagar el contingut ha de ser implementada.'}),`
`,t.jsx(e,{code:`
   <dss-modal modalTitle="Títol del modal" state="info" hasDivider>
      <div slot="header">
        <div class="dss-content-switcher">
          <div class="dss-content-switcher__item">
            <input type="radio" name="radiogroup" checked="">
            <label>Tab 1</label>
          </div>
          <div class="dss-content-switcher__item">
              <input type="radio" name="radiogroup">
              <label>Tab 2</label>
            </div>
        </div>
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
        <button class="dss-button dss-button--subtle dss-button--lg">Button</button>
        <button class="dss-button dss-button--secondary dss-button--lg">Button</button>
        <button class="dss-button dss-button--primary dss-button--lg">Button</button>
      </div>
    </dss-modal>
`})]})}function j(o={}){const{wrapper:s}={...d(),...o.components};return s?t.jsx(s,{...o,children:t.jsx(n,{...o})}):n(o)}export{j as default};
