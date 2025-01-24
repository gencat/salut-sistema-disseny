import{j as s,M as o,T as i,C as a,a as r,S as n}from"./index-ghaj0TIE.js";import{useMDXComponents as l}from"./index-CbGprlAm.js";import{S as c,P as h}from"./modal.stories-DBvCYULf.js";import"./iframe-Bu7akYYt.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function d(t){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...t.components};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
   
  `}),`
`,s.jsx(o,{of:c}),`
`,s.jsxs("div",{className:"dss-sb-title",children:[s.jsx(i,{}),s.jsx("dss-badge",{text:"dss-modal",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,s.jsx(e.p,{children:`Els modals s'utilitzen per presentar informació crítica o sol·licitar
l'entrada de l'usuari necessària per completar el flux de treball d'un usuari.
Una modal és una finestra emergent o diàleg que apareix sobre la interfície
d'usuari principal d'una aplicació, amb l'objectiu d'obtenir informació o
realitzar una acció específica. Les modals solen bloquejar la interacció amb
la interfície principal fins que l'usuari ha completat la tasca o ha tancat la
finestra emergent.`}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"Per provar el component modal, si us plau, utilitzeu el playground."}),`
`]}),`
`,s.jsx(a,{of:h}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Nota"}),": si teniu problemes per fer scroll a la pàgina, assegureu-vos de marcar l'exemple del modal com a open = false (Obert)."]}),`
`,s.jsx(r,{}),`
`,s.jsxs(e.p,{children:["El component modal està compost per tres blocs: ",s.jsx(e.strong,{children:"header"}),", ",s.jsx(e.strong,{children:"body"})," i ",s.jsx(e.strong,{children:"footer"}),`. El header es construeix de manera dinàmica
a través de les propietats definides més endavant. El contingut del body i footer s'ha de construir manualment utilitzant els slots
relacionats, cosa que ens permet una major llibertat a l'hora de reutilitzar aquest component. També és possible afegir contingut extra
al header amb el seu propi slot, per exemple per afegir un content-switch.`]}),`
`,s.jsx(e.h3,{id:"propietats",children:"Propietats"}),`
`,s.jsx("div",{className:"dss-sb-properties",children:s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Name"}),s.jsx(e.th,{children:"Type"}),s.jsx(e.th,{children:"Default"}),s.jsx(e.th,{children:"Description"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsxs(e.strong,{children:["open",s.jsx("span",{children:"*"})]})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"boolean"})}),s.jsx(e.td,{children:"false"}),s.jsx(e.td,{children:"Defineix si el modal és visible o ocult."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsxs(e.strong,{children:["modalTitle",s.jsx("span",{children:"*"})]})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"-"}),s.jsx(e.td,{children:"Títol mostrat a la capçalera."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"size"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"'lg'"}),s.jsx(e.td,{children:"Mida del component. Pot ser: sm o lg."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"state"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"-"}),s.jsxs(e.td,{children:["Mostra una icona d'informació a la capçalera. Pot ser: '",s.jsx(e.strong,{children:"success"}),"', '",s.jsx(e.strong,{children:"info"}),"', '",s.jsx(e.strong,{children:"alert"}),"' o '",s.jsx(e.strong,{children:"error"}),"'"]})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"hasScroll"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"boolean"})}),s.jsx(e.td,{children:"false"}),s.jsx(e.td,{children:"Habilita el desplaçament vertical dins del body del modal. Important: l'aplicació de l'estil overflow pot afectar la manera com es renderitzen els components amb posició absoluta, passant de sortir fora del modal a incloure's en el propi desplaçament."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"hideCloseIcon"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"boolean"})}),s.jsx(e.td,{children:"false"}),s.jsx(e.td,{children:"Amagar icona de tancar."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"modalStyle"})}),s.jsx(e.td,{children:s.jsx(e.code,{children:"string"})}),s.jsx(e.td,{children:"-"}),s.jsx(e.td,{children:"Permet modificar l'estil per defecte del contenidor principal del modal per a casos d'ús molt específics."})]})]})]})}),`
`,s.jsx(e.p,{children:"(*) Propietat obligatòria"}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Name"}),s.jsx(e.th,{children:"Description"})]})}),s.jsx(e.tbody,{children:s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"onModalClosed"})}),s.jsx(e.td,{children:"Esdeveniment que notifica que el modal s'ha tancat internament des del component, fent clic a la icona de tancar o bé fent clic fora del contenidor del diàleg."})]})})]}),`
`,s.jsx(e.h2,{id:"source-code",children:"Source code"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#default",children:"Default"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#estats",children:"Estats"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#amb-divider",children:"Amb divider"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"#amb-content-switch",children:"Amb content switch"})}),`
`]}),`
`,s.jsx(e.h3,{id:"default",children:"Default"}),`
`,s.jsx(e.p,{children:"El contingut de cada modal es pot personalitzar individualment modificant l'interior dels slots body i footer."}),`
`,s.jsx(n,{code:`
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
`,s.jsx(e.p,{children:"Per activar el modal haurem de configurar a la nostra aplicació la lògica que afegeixi la propietat open al selector dss-modal. Un exemple en angular seria:"}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Component Template"})}),`
`,s.jsx(n,{code:`
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
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Component Controller"})}),`
`,s.jsx(n,{code:`
  isModalOpen = false;
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  closeModal() {
    this.isModalOpen = false;
  }
`}),`
`,s.jsx(e.p,{children:"Pareu atenció a l'esdeveniment onModalClosed que hem d'utilitzar per modificar la nostra variable Angular quan el modal es tanca internament al ShadowRoot."}),`
`,s.jsx(e.h3,{id:"estats",children:"Estats"}),`
`,s.jsxs(e.p,{children:["Afegint la propietat ",s.jsx(e.strong,{children:"state"})," s'inclourà una icona informativa dins de la capçalera del body. Les opcions que podem definir són: '",s.jsx(e.strong,{children:"success"}),"', '",s.jsx(e.strong,{children:"info"}),"', '",s.jsx(e.strong,{children:"alert"}),"' o '",s.jsx(e.strong,{children:"error"}),"'."]}),`
`,s.jsx(n,{code:`
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
`,s.jsx(e.h3,{id:"amb-divider",children:"Amb divider"}),`
`,s.jsxs(e.p,{children:["Afegint la propietat ",s.jsx(e.strong,{children:"hasDivider"})," s'inclouran línies divisòries entre les seccions header, body i footer."]}),`
`,s.jsx(n,{code:`
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
`,s.jsx(e.h3,{id:"amb-content-switch",children:"Amb content switch"}),`
`,s.jsx(e.p,{children:'El slot "header" ens permet afegir un content-switch però la lògica per mostrar o amagar el contingut ha de ser implementada.'}),`
`,s.jsx(n,{code:`
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
`,s.jsx("br",{}),`
`,s.jsx(e.h4,{id:"changelog",children:"Changelog"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Versió"}),s.jsx(e.th,{children:"Canvis"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"2.0.0"})}),s.jsx(e.td,{children:"Refactor v2."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"1.9.0"})}),s.jsx(e.td,{children:"S'ha corregit un error pel qual, en estar actiu el modal, el contingut mostrat darrere de la capa overlay permetia fer scroll sobre aquest quan l'scroll hauria d'estar deshabilitat."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"1.8.0"})}),s.jsx(e.td,{children:"S'ha redefinit l'ample del contenidor del modal, de manera que s'ajustarà automàticament al contingut d'aquest, al mateix temps que tindrà un ample mínim i màxim en funció dels breakpoints de la pantalla."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"1.7.0"})}),s.jsx(e.td,{children:"S'ha afegit un slot a la capçalera del modal que permet afegir components interactius com el Content Switcher. S'ha afegit una opció per ocultar la icona de tancar l'espai per a aquells casos en què ja hi hagi un boton tancar al footer."})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"1.6.0"})}),s.jsx(e.td,{children:"El component modal s'ha desenvolupat com a component Lit, afegint les funcionals d'obrir i tancar."})]})]})]})]})}function y(t={}){const{wrapper:e}={...l(),...t.components};return e?s.jsx(e,{...t,children:s.jsx(d,{...t})}):d(t)}export{y as default};
