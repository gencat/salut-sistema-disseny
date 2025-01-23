import{j as t,M as o,T as i,C as r,a,S as n}from"./index-Bqq7-PG9.js";import{useMDXComponents as l}from"./index-CR9MyhlS.js";import{S as c,P as h}from"./modal.stories-NLsJm67X.js";import"./iframe-B4D8hHrS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function d(s){const e={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
   
  `}),`
`,t.jsx(o,{of:c}),`
`,t.jsxs("div",{className:"dss-sb-title",children:[t.jsx(i,{}),t.jsx("dss-badge",{text:"dss-modal",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,t.jsx(e.p,{children:`Els modals s'utilitzen per presentar informació crítica o sol·licitar
l'entrada de l'usuari necessària per completar el flux de treball d'un usuari.
Una modal és una finestra emergent o diàleg que apareix sobre la interfície
d'usuari principal d'una aplicació, amb l'objectiu d'obtenir informació o
realitzar una acció específica. Les modals solen bloquejar la interacció amb
la interfície principal fins que l'usuari ha completat la tasca o ha tancat la
finestra emergent.`}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"Per provar el component modal, si us plau, utilitzeu el playground."}),`
`]}),`
`,t.jsx(r,{of:h}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Nota"}),": si teniu problemes per fer scroll a la pàgina, assegureu-vos de marcar l'exemple del modal com a open = false (Obert)."]}),`
`,t.jsx(a,{}),`
`,t.jsxs(e.p,{children:["El component modal està compost per tres blocs: ",t.jsx(e.strong,{children:"header"}),", ",t.jsx(e.strong,{children:"body"})," i ",t.jsx(e.strong,{children:"footer"}),`. El header es construeix de manera dinàmica
a través de les propietats definides més endavant. El contingut del body i footer s'ha de construir manualment utilitzant els slots
relacionats, cosa que ens permet una major llibertat a l'hora de reutilitzar aquest component. També és possible afegir contingut extra
al header amb el seu propi slot, per exemple per afegir un content-switch.`]}),`
`,t.jsx(e.h3,{id:"propietats",children:"Propietats"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Name"}),t.jsx(e.th,{children:"Àmbit"}),t.jsx(e.th,{children:"Condition"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Default"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"open"})}),t.jsx(e.td,{children:"Input"}),t.jsx(e.td,{children:"Requerida"}),t.jsx(e.td,{children:"boolean"}),t.jsx(e.td,{children:"false"}),t.jsx(e.td,{children:"Defineix si el modal és visible o ocult."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"size"})}),t.jsx(e.td,{children:"Input"}),t.jsx(e.td,{children:"Opcional"}),t.jsx(e.td,{children:"string"}),t.jsx(e.td,{children:"'lg'"}),t.jsx(e.td,{children:"Mida del component. Pot ser: sm o lg."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"modalTitle"})}),t.jsx(e.td,{children:"Input"}),t.jsx(e.td,{children:"Requerida"}),t.jsx(e.td,{children:"string"}),t.jsx(e.td,{children:"''"}),t.jsx(e.td,{children:"Títol mostrat a la capçalera."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"state"})}),t.jsx(e.td,{children:"Input"}),t.jsx(e.td,{children:"Opcional"}),t.jsx(e.td,{children:"string"}),t.jsx(e.td,{children:"''"}),t.jsxs(e.td,{children:["Mostra una icona d'informació a la capçalera. Pot ser: '",t.jsx(e.strong,{children:"success"}),"', '",t.jsx(e.strong,{children:"info"}),"', '",t.jsx(e.strong,{children:"alert"}),"' o '",t.jsx(e.strong,{children:"error"}),"'"]})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"hasScroll"})}),t.jsx(e.td,{children:"Input"}),t.jsx(e.td,{children:"Opcional"}),t.jsx(e.td,{children:"boolean"}),t.jsx(e.td,{children:"false"}),t.jsx(e.td,{children:"Habilita el desplaçament vertical dins del body del modal. Important: l'aplicació de l'estil overflow pot afectar la manera com es renderitzen els components amb posició absoluta, passant de sortir fora del modal a incloure's en el propi desplaçament."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"hideCloseIcon"})}),t.jsx(e.td,{children:"Input"}),t.jsx(e.td,{children:"Opcional"}),t.jsx(e.td,{children:"boolean"}),t.jsx(e.td,{children:"false"}),t.jsx(e.td,{children:"Amagar icona de tancar."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"modalStyle"})}),t.jsx(e.td,{children:"Input"}),t.jsx(e.td,{children:"Opcional"}),t.jsx(e.td,{children:"string"}),t.jsx(e.td,{children:"-"}),t.jsx(e.td,{children:"Permet modificar l'estil per defecte del contenidor principal del modal per a casos d'ús molt específics."})]})]})]}),`
`,t.jsx(e.p,{children:"(*) Propietat obligatòria"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Name"}),t.jsx(e.th,{children:"Àmbit"}),t.jsx(e.th,{children:"Condition"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Default"}),t.jsx(e.th,{children:"Description"})]})}),t.jsx(e.tbody,{children:t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"onModalClosed"})}),t.jsx(e.td,{children:"Output"}),t.jsx(e.td,{children:"Opcional"}),t.jsx(e.td,{children:"Event"}),t.jsx(e.td,{children:"-"}),t.jsx(e.td,{children:"Esdeveniment que notifica que el modal s'ha tancat internament des del component, fent clic a la icona de tancar o bé fent clic fora del contenidor del diàleg."})]})})]}),`
`,t.jsx(e.h2,{id:"source-code",children:"Source code"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#default",children:"Default"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#estats",children:"Estats"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#amb-divider",children:"Amb divider"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#amb-content-switch",children:"Amb content switch"})}),`
`]}),`
`,t.jsx(e.h3,{id:"default",children:"Default"}),`
`,t.jsx(e.p,{children:"El contingut de cada modal es pot personalitzar individualment modificant l'interior dels slots body i footer."}),`
`,t.jsx(n,{code:`
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
`,t.jsx(e.p,{children:"Per activar el modal haurem de configurar a la nostra aplicació la lògica que afegeixi la propietat open al selector dss-modal. Un exemple en angular seria:"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Component Template"})}),`
`,t.jsx(n,{code:`
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
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Component Controller"})}),`
`,t.jsx(n,{code:`
  isModalOpen = false;
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  closeModal() {
    this.isModalOpen = false;
  }
`}),`
`,t.jsx(e.p,{children:"Pareu atenció a l'esdeveniment onModalClosed que hem d'utilitzar per modificar la nostra variable Angular quan el modal es tanca internament al ShadowRoot."}),`
`,t.jsx(e.h3,{id:"estats",children:"Estats"}),`
`,t.jsxs(e.p,{children:["Afegint la propietat ",t.jsx(e.strong,{children:"state"})," s'inclourà una icona informativa dins de la capçalera del body. Les opcions que podem definir són: '",t.jsx(e.strong,{children:"success"}),"', '",t.jsx(e.strong,{children:"info"}),"', '",t.jsx(e.strong,{children:"alert"}),"' o '",t.jsx(e.strong,{children:"error"}),"'."]}),`
`,t.jsx(n,{code:`
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
`,t.jsx(e.h3,{id:"amb-divider",children:"Amb divider"}),`
`,t.jsxs(e.p,{children:["Afegint la propietat ",t.jsx(e.strong,{children:"hasDivider"})," s'inclouran línies divisòries entre les seccions header, body i footer."]}),`
`,t.jsx(n,{code:`
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
`,t.jsx(e.h3,{id:"amb-content-switch",children:"Amb content switch"}),`
`,t.jsx(e.p,{children:'El slot "header" ens permet afegir un content-switch però la lògica per mostrar o amagar el contingut ha de ser implementada.'}),`
`,t.jsx(n,{code:`
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
`,t.jsx("br",{}),`
`,t.jsx(e.h4,{id:"changelog",children:"Changelog"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Versió"}),t.jsx(e.th,{children:"Canvis"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"2.0.0"})}),t.jsx(e.td,{children:"Refactor v2."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"1.9.0"})}),t.jsx(e.td,{children:"S'ha corregit un error pel qual, en estar actiu el modal, el contingut mostrat darrere de la capa overlay permetia fer scroll sobre aquest quan l'scroll hauria d'estar deshabilitat."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"1.8.0"})}),t.jsx(e.td,{children:"S'ha redefinit l'ample del contenidor del modal, de manera que s'ajustarà automàticament al contingut d'aquest, al mateix temps que tindrà un ample mínim i màxim en funció dels breakpoints de la pantalla."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"1.7.0"})}),t.jsx(e.td,{children:"S'ha afegit un slot a la capçalera del modal que permet afegir components interactius com el Content Switcher. S'ha afegit una opció per ocultar la icona de tancar l'espai per a aquells casos en què ja hi hagi un boton tancar al footer."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"1.6.0"})}),t.jsx(e.td,{children:"El component modal s'ha desenvolupat com a component Lit, afegint les funcionals d'obrir i tancar."})]})]})]})]})}function y(s={}){const{wrapper:e}={...l(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(d,{...s})}):d(s)}export{y as default};
