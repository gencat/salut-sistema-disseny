import{ae as t,af as o,ag as i,ah as a,ai as r,ak as n}from"./index-D1S4L7aM.js";import{u as l}from"./index-uaZ61P-2.js";import{S as c,P as h}from"./modal.stories-DBvCYULf.js";import"./iframe-OmA8NNT4.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./lit-html-B2eaWknC.js";function d(e){const s={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
   
  `}),`
`,t.jsx(o,{of:c}),`
`,t.jsxs("div",{className:"dss-sb-title",children:[t.jsx(i,{}),t.jsx("dss-badge",{text:"dss-modal",size:"md",state:"info",outlined:!0,hideIcon:!0})]}),`
`,t.jsx(s.p,{children:`Els modals s'utilitzen per presentar informació crítica o sol·licitar
l'entrada de l'usuari necessària per completar el flux de treball d'un usuari.
Una modal és una finestra emergent o diàleg que apareix sobre la interfície
d'usuari principal d'una aplicació, amb l'objectiu d'obtenir informació o
realitzar una acció específica. Les modals solen bloquejar la interacció amb
la interfície principal fins que l'usuari ha completat la tasca o ha tancat la
finestra emergent.`}),`
`,t.jsxs(s.blockquote,{children:[`
`,t.jsx(s.p,{children:"Per provar el component modal, si us plau, utilitzeu el playground."}),`
`]}),`
`,t.jsx(a,{of:h}),`
`,t.jsx(r,{}),`
`,t.jsxs(s.p,{children:["El component modal està compost per tres blocs: ",t.jsx(s.strong,{children:"header"}),", ",t.jsx(s.strong,{children:"body"})," i ",t.jsx(s.strong,{children:"footer"}),`. El header es construeix de manera dinàmica
a través de les propietats definides més endavant. El contingut del body i footer s'ha de construir manualment utilitzant els slots
relacionats, cosa que ens permet una major llibertat a l'hora de reutilitzar aquest component. També és possible afegir contingut extra
al header amb el seu propi slot, per exemple per afegir un content-switch.`]}),`
`,t.jsx(s.h3,{id:"propietats",children:"Propietats"}),`
`,t.jsxs(s.table,{children:[t.jsx(s.thead,{children:t.jsxs(s.tr,{children:[t.jsx(s.th,{children:"Name"}),t.jsx(s.th,{children:"Àmbit"}),t.jsx(s.th,{children:"Condition"}),t.jsx(s.th,{children:"Type"}),t.jsx(s.th,{children:"Default"}),t.jsx(s.th,{children:"Description"})]})}),t.jsxs(s.tbody,{children:[t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"open"})}),t.jsx(s.td,{children:"Input"}),t.jsx(s.td,{children:"Requerida"}),t.jsx(s.td,{children:"boolean"}),t.jsx(s.td,{children:"false"}),t.jsx(s.td,{children:"Defineix si el modal és visible o ocult."})]}),t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"size"})}),t.jsx(s.td,{children:"Input"}),t.jsx(s.td,{children:"Opcional"}),t.jsx(s.td,{children:"string"}),t.jsx(s.td,{children:"'lg'"}),t.jsx(s.td,{children:"Mida del component. Pot ser: sm o lg."})]}),t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"modalTitle"})}),t.jsx(s.td,{children:"Input"}),t.jsx(s.td,{children:"Requerida"}),t.jsx(s.td,{children:"string"}),t.jsx(s.td,{children:"''"}),t.jsx(s.td,{children:"Títol mostrat a la capçalera."})]}),t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"state"})}),t.jsx(s.td,{children:"Input"}),t.jsx(s.td,{children:"Opcional"}),t.jsx(s.td,{children:"string"}),t.jsx(s.td,{children:"''"}),t.jsxs(s.td,{children:["Mostra una icona d'informació a la capçalera. Pot ser: '",t.jsx(s.strong,{children:"success"}),"', '",t.jsx(s.strong,{children:"info"}),"', '",t.jsx(s.strong,{children:"alert"}),"' o '",t.jsx(s.strong,{children:"error"}),"'"]})]}),t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"hasScroll"})}),t.jsx(s.td,{children:"Input"}),t.jsx(s.td,{children:"Opcional"}),t.jsx(s.td,{children:"boolean"}),t.jsx(s.td,{children:"false"}),t.jsx(s.td,{children:"Habilita el desplaçament vertical dins del body del modal. Important: l'aplicació de l'estil overflow pot afectar la manera com es renderitzen els components amb posició absoluta, passant de sortir fora del modal a incloure's en el propi desplaçament."})]}),t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"hideCloseIcon"})}),t.jsx(s.td,{children:"Input"}),t.jsx(s.td,{children:"Opcional"}),t.jsx(s.td,{children:"boolean"}),t.jsx(s.td,{children:"false"}),t.jsx(s.td,{children:"Amagar icona de tancar."})]}),t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"modalStyle"})}),t.jsx(s.td,{children:"Input"}),t.jsx(s.td,{children:"Opcional"}),t.jsx(s.td,{children:"string"}),t.jsx(s.td,{children:"-"}),t.jsx(s.td,{children:"Permet modificar l'estil per defecte del contenidor principal del modal per a casos d'ús molt específics."})]})]})]}),`
`,t.jsx(s.p,{children:"(*) Propietat obligatòria"}),`
`,t.jsx("br",{}),`
`,t.jsx(s.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,t.jsxs(s.table,{children:[t.jsx(s.thead,{children:t.jsxs(s.tr,{children:[t.jsx(s.th,{children:"Name"}),t.jsx(s.th,{children:"Àmbit"}),t.jsx(s.th,{children:"Condition"}),t.jsx(s.th,{children:"Type"}),t.jsx(s.th,{children:"Default"}),t.jsx(s.th,{children:"Description"})]})}),t.jsx(s.tbody,{children:t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"onModalClosed"})}),t.jsx(s.td,{children:"Output"}),t.jsx(s.td,{children:"Opcional"}),t.jsx(s.td,{children:"Event"}),t.jsx(s.td,{children:"-"}),t.jsx(s.td,{children:"Esdeveniment que notifica que el modal s'ha tancat internament des del component, fent clic a la icona de tancar o bé fent clic fora del contenidor del diàleg."})]})})]}),`
`,t.jsx(s.h2,{id:"source-code",children:"Source code"}),`
`,t.jsxs(s.ul,{children:[`
`,t.jsx(s.li,{children:t.jsx(s.a,{href:"#default",children:"Default"})}),`
`,t.jsx(s.li,{children:t.jsx(s.a,{href:"#estats",children:"Estats"})}),`
`,t.jsx(s.li,{children:t.jsx(s.a,{href:"#amb-divider",children:"Amb divider"})}),`
`,t.jsx(s.li,{children:t.jsx(s.a,{href:"#amb-content-switch",children:"Amb content switch"})}),`
`]}),`
`,t.jsx(s.h3,{id:"default",children:"Default"}),`
`,t.jsx(s.p,{children:"El contingut de cada modal es pot personalitzar individualment modificant l'interior dels slots body i footer."}),`
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
`,t.jsx(s.p,{children:"Per activar el modal haurem de configurar a la nostra aplicació la lògica que afegeixi la propietat open al selector dss-modal. Un exemple en angular seria:"}),`
`,t.jsx(s.p,{children:t.jsx(s.strong,{children:"Component Template"})}),`
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
`,t.jsx(s.p,{children:t.jsx(s.strong,{children:"Component Controller"})}),`
`,t.jsx(n,{code:`
  isModalOpen = false;
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  closeModal() {
    this.isModalOpen = false;
  }
`}),`
`,t.jsx(s.p,{children:"Pareu atenció a l'esdeveniment onModalClosed que hem d'utilitzar per modificar la nostra variable Angular quan el modal es tanca internament al ShadowRoot."}),`
`,t.jsx(s.h3,{id:"estats",children:"Estats"}),`
`,t.jsxs(s.p,{children:["Afegint la propietat ",t.jsx(s.strong,{children:"state"})," s'inclourà una icona informativa dins de la capçalera del body. Les opcions que podem definir són: '",t.jsx(s.strong,{children:"success"}),"', '",t.jsx(s.strong,{children:"info"}),"', '",t.jsx(s.strong,{children:"alert"}),"' o '",t.jsx(s.strong,{children:"error"}),"'."]}),`
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
`,t.jsx(s.h3,{id:"amb-divider",children:"Amb divider"}),`
`,t.jsxs(s.p,{children:["Afegint la propietat ",t.jsx(s.strong,{children:"hasDivider"})," s'inclouran línies divisòries entre les seccions header, body i footer."]}),`
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
`,t.jsx(s.h3,{id:"amb-content-switch",children:"Amb content switch"}),`
`,t.jsx(s.p,{children:'El slot "header" ens permet afegir un content-switch però la lògica per mostrar o amagar el contingut ha de ser implementada.'}),`
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
`,t.jsx(s.h4,{id:"changelog",children:"Changelog"}),`
`,t.jsxs(s.table,{children:[t.jsx(s.thead,{children:t.jsxs(s.tr,{children:[t.jsx(s.th,{children:"Versió"}),t.jsx(s.th,{children:"Canvis"})]})}),t.jsxs(s.tbody,{children:[t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"2.0.0"})}),t.jsx(s.td,{children:"Refactor v2."})]}),t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"1.9.0"})}),t.jsx(s.td,{children:"S'ha corregit un error pel qual, en estar actiu el modal, el contingut mostrat darrere de la capa overlay permetia fer scroll sobre aquest quan l'scroll hauria d'estar deshabilitat."})]}),t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"1.8.0"})}),t.jsx(s.td,{children:"S'ha redefinit l'ample del contenidor del modal, de manera que s'ajustarà automàticament al contingut d'aquest, al mateix temps que tindrà un ample mínim i màxim en funció dels breakpoints de la pantalla."})]}),t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"1.7.0"})}),t.jsx(s.td,{children:"S'ha afegit un slot a la capçalera del modal que permet afegir components interactius com el Content Switcher. S'ha afegit una opció per ocultar la icona de tancar l'espai per a aquells casos en què ja hi hagi un boton tancar al footer."})]}),t.jsxs(s.tr,{children:[t.jsx(s.td,{children:t.jsx(s.strong,{children:"1.6.0"})}),t.jsx(s.td,{children:"El component modal s'ha desenvolupat com a component Lit, afegint les funcionals d'obrir i tancar."})]})]})]})]})}function y(e={}){const{wrapper:s}={...l(),...e.components};return s?t.jsx(s,{...e,children:t.jsx(d,{...e})}):d(e)}export{y as default};
