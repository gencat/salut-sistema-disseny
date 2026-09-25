import{j as e,M as l,T as i,S as n}from"./blocks-B0kcQ3Dr.js";import{useMDXComponents as o}from"./index-IeeZE5S6.js";import{S as d}from"./modal.stories-QlKLDFj-.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CK9yflr1.js";function a(s){const t={a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(i,{}),e.jsx("component-title",{children:"dss-modal"})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Utilitzeu el ",e.jsx(t.a,{href:"/story/components-modal--playground",children:"playground"})," per provar el component modal"]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Nota"}),": si teniu problemes per fer scroll a la pàgina, assegureu-vos de marcar l'exemple del modal com a open = false (Obert)."]}),`
`,e.jsxs(t.p,{children:["El component modal està compost per tres blocs: ",e.jsx(t.strong,{children:"header"}),", ",e.jsx(t.strong,{children:"body"})," i ",e.jsx(t.strong,{children:"footer"}),`. El header es construeix de manera dinàmica
a través de les propietats definides més endavant. El contingut del body i footer s'ha de construir manualment utilitzant els slots
relacionats, cosa que ens permet una major llibertat a l'hora de reutilitzar aquest component. També és possible afegir contingut extra
al header amb el seu propi slot, per exemple per afegir un content-switch.`]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h3,{id:"source-code",children:"Source code"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#default",children:"Default"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#estats",children:"Estats"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#amb-content-switch",children:"Amb content switch"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#navegacio-per-teclat",children:"Navegació per teclat"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h4,{id:"default",children:"Default"}),`
`,e.jsx(t.p,{children:"El contingut de cada modal es pot personalitzar individualment modificant l'interior dels slots body i footer."}),`
`,e.jsx(n,{code:`
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
`,e.jsx(t.p,{children:"Per activar el modal haurem de configurar a la nostra aplicació la lògica que afegeixi la propietat open al selector dss-modal. Un exemple en angular seria:"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Component Template"})}),`
`,e.jsx(n,{code:`
<dss-button variant="primary" label="Open modal" size="md"(click)="toggleModal()"/>
<dss-modal modalTitle="Títol del modal" [open]="isModalOpen" (close)="closeModal()">
  <div slot="body">
    <p>This is the body of the dialog.</p>
  </div>
  <div class="dss-modal-footer" slot="footer">
    <dss-button variant="primary" label="Close" size="md" (click)="toggleModal()"/>
  </div>
</dss-modal>
`}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Component Controller"})}),`
`,e.jsx(n,{code:`
isModalOpen = false;
toggleModal() {
  this.isModalOpen = !this.isModalOpen;
}
closeModal() {
  this.isModalOpen = false;
}
`}),`
`,e.jsx(t.p,{children:"Pareu atenció a l'esdeveniment close que hem d'utilitzar per modificar la nostra variable Angular quan el modal es tanca internament al ShadowRoot."}),`
`,e.jsx(t.h4,{id:"estats",children:"Estats"}),`
`,e.jsxs(t.p,{children:["Afegint la propietat ",e.jsx(t.strong,{children:"state"}),` s'inclourà una icona informativa dins de la capçalera del body.
Les opcions que podem definir són: '`,e.jsx(t.strong,{children:"warning"}),"' o '",e.jsx(t.strong,{children:"danger"}),"'."]}),`
`,e.jsx(n,{code:`
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
`,e.jsx(t.h4,{id:"amb-content-switch",children:"Amb content switch"}),`
`,e.jsx(t.p,{children:'El slot "header" ens permet afegir un content-switch però la lògica per mostrar o amagar el contingut ha de ser implementada.'}),`
`,e.jsx(n,{code:`
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
`}),`
`,e.jsx(t.h4,{id:"navegació-per-teclat",children:"Navegació per teclat"}),`
`,e.jsxs(t.p,{children:[`El modal incorpora un focus trap perquè, un cop el focus entra dins del component, la navegació amb teclat no pugui sortir-ne fins que el modal es tanqui.
En prémer `,e.jsx(t.strong,{children:"Escape"}),", el modal es tanca i el focus torna a l'element que l'havia obert."]}),`
`,e.jsx(t.p,{children:"Per gestionar el focus inicial, les iniciatives tenen dues opcions:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Deixar que el component posicioni el focus al sentinel inicial quan el modal no tingui elements interactius."}),`
`,e.jsx(t.li,{children:"Forçar manualment el focus al primer element interactiu del contingut, tenint en compte un petit delay perquè acabi l'animació de visibilitat del modal."}),`
`]})]})}function x(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{x as default};
