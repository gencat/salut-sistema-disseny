import{j as e,M as o,T as i,C as r,a,S as n}from"./index-DnwHoa8y.js";import{useMDXComponents as l}from"./index-HCSrvbvd.js";import{S as c,P as h}from"./modal.stories-D2aWRjTk.js";import"./iframe-iUUSEfPX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function d(t){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
   
  `}),`
`,e.jsx(o,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(i,{}),e.jsx("dss-badge",{text:"dss-modal",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(s.p,{children:`Els modals s'utilitzen per presentar informació crítica o sol·licitar
l'entrada de l'usuari necessària per completar el flux de treball d'un usuari.
Una modal és una finestra emergent o diàleg que apareix sobre la interfície
d'usuari principal d'una aplicació, amb l'objectiu d'obtenir informació o
realitzar una acció específica. Les modals solen bloquejar la interacció amb
la interfície principal fins que l'usuari ha completat la tasca o ha tancat la
finestra emergent.`}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Per provar el component modal, si us plau, utilitzeu el playground."}),`
`]}),`
`,e.jsx(r,{of:h}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Nota"}),": si teniu problemes per fer scroll a la pàgina, assegureu-vos de marcar l'exemple del modal com a open = false (Obert)."]}),`
`,e.jsx(a,{}),`
`,e.jsxs(s.p,{children:["El component modal està compost per tres blocs: ",e.jsx(s.strong,{children:"header"}),", ",e.jsx(s.strong,{children:"body"})," i ",e.jsx(s.strong,{children:"footer"}),`. El header es construeix de manera dinàmica
a través de les propietats definides més endavant. El contingut del body i footer s'ha de construir manualment utilitzant els slots
relacionats, cosa que ens permet una major llibertat a l'hora de reutilitzar aquest component. També és possible afegir contingut extra
al header amb el seu propi slot, per exemple per afegir un content-switch.`]}),`
`,e.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Default"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["open",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Defineix si el modal és visible o ocult."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["modalTitle",e.jsx("span",{children:"*"})]})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Títol mostrat a la capçalera."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"size"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"'lg'"}),e.jsx(s.td,{children:"Mida del component. Pot ser: sm o lg."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"state"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsxs(s.td,{children:["Mostra una icona d'informació a la capçalera. Pot ser: '",e.jsx(s.strong,{children:"success"}),"', '",e.jsx(s.strong,{children:"info"}),"', '",e.jsx(s.strong,{children:"alert"}),"' o '",e.jsx(s.strong,{children:"error"}),"'"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hasScroll"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Habilita el desplaçament vertical dins del body del modal. Important: l'aplicació de l'estil overflow pot afectar la manera com es renderitzen els components amb posició absoluta, passant de sortir fora del modal a incloure's en el propi desplaçament."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"hideCloseIcon"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Amagar icona de tancar."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"modalStyle"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"string"})}),e.jsx(s.td,{children:"-"}),e.jsx(s.td,{children:"Permet modificar l'estil per defecte del contenidor principal del modal per a casos d'ús molt específics."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"fullWidth"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Canvia l'amplada del modal perquè ocupi el màxim espai permès en lloc d'ajustar-se al contingut."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"flexBody"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"boolean"})}),e.jsx(s.td,{children:"false"}),e.jsx(s.td,{children:"Assigna al contenidor del slot body un display: flex, cosa que permet gestionar el desplaçament des de dins del contingut inserit en lloc de tenir un desplaçament general per a tot el body, per exemple, si tens dues columnes."})]})]})]})}),`
`,e.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Name"}),e.jsx(s.th,{children:"Description"})]})}),e.jsx(s.tbody,{children:e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"onModalClosed"})}),e.jsx(s.td,{children:"Esdeveniment que notifica que el modal s'ha tancat internament des del component, fent clic a la icona de tancar o bé fent clic fora del contenidor del diàleg."})]})})]}),`
`,e.jsx(s.h2,{id:"source-code",children:"Source code"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#default",children:"Default"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#estats",children:"Estats"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-divider",children:"Amb divider"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#amb-content-switch",children:"Amb content switch"})}),`
`]}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(s.p,{children:"El contingut de cada modal es pot personalitzar individualment modificant l'interior dels slots body i footer."}),`
`,e.jsx(n,{code:`
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
`,e.jsx(s.p,{children:"Per activar el modal haurem de configurar a la nostra aplicació la lògica que afegeixi la propietat open al selector dss-modal. Un exemple en angular seria:"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Component Template"})}),`
`,e.jsx(n,{code:`
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
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Component Controller"})}),`
`,e.jsx(n,{code:`
  isModalOpen = false;
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  closeModal() {
    this.isModalOpen = false;
  }
`}),`
`,e.jsx(s.p,{children:"Pareu atenció a l'esdeveniment onModalClosed que hem d'utilitzar per modificar la nostra variable Angular quan el modal es tanca internament al ShadowRoot."}),`
`,e.jsx(s.h3,{id:"estats",children:"Estats"}),`
`,e.jsxs(s.p,{children:["Afegint la propietat ",e.jsx(s.strong,{children:"state"})," s'inclourà una icona informativa dins de la capçalera del body. Les opcions que podem definir són: '",e.jsx(s.strong,{children:"success"}),"', '",e.jsx(s.strong,{children:"info"}),"', '",e.jsx(s.strong,{children:"alert"}),"' o '",e.jsx(s.strong,{children:"error"}),"'."]}),`
`,e.jsx(n,{code:`
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
`,e.jsx(s.h3,{id:"amb-divider",children:"Amb divider"}),`
`,e.jsxs(s.p,{children:["Afegint la propietat ",e.jsx(s.strong,{children:"hasDivider"})," s'inclouran línies divisòries entre les seccions header, body i footer."]}),`
`,e.jsx(n,{code:`
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
`,e.jsx(s.h3,{id:"amb-content-switch",children:"Amb content switch"}),`
`,e.jsx(s.p,{children:'El slot "header" ens permet afegir un content-switch però la lògica per mostrar o amagar el contingut ha de ser implementada.'}),`
`,e.jsx(n,{code:`
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
`}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Versió"}),e.jsx(s.th,{children:"Canvis"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.1.0"})}),e.jsx(s.td,{children:"S'ha afegit la propietat fullWidth y flexBody."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2.0.0"})}),e.jsx(s.td,{children:"Refactor v2."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.9.0"})}),e.jsx(s.td,{children:"S'ha corregit un error pel qual, en estar actiu el modal, el contingut mostrat darrere de la capa overlay permetia fer scroll sobre aquest quan l'scroll hauria d'estar deshabilitat."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.8.0"})}),e.jsx(s.td,{children:"S'ha redefinit l'ample del contenidor del modal, de manera que s'ajustarà automàticament al contingut d'aquest, al mateix temps que tindrà un ample mínim i màxim en funció dels breakpoints de la pantalla."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.7.0"})}),e.jsx(s.td,{children:"S'ha afegit un slot a la capçalera del modal que permet afegir components interactius com el Content Switcher. S'ha afegit una opció per ocultar la icona de tancar l'espai per a aquells casos en què ja hi hagi un boton tancar al footer."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1.6.0"})}),e.jsx(s.td,{children:"El component modal s'ha desenvolupat com a component Lit, afegint les funcionals d'obrir i tancar."})]})]})]})]})}function y(t={}){const{wrapper:s}={...l(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(d,{...t})}):d(t)}export{y as default};
