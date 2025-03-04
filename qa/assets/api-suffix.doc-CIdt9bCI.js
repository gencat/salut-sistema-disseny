import{j as e,M as a}from"./index-dTKq_4YY.js";import{useMDXComponents as i}from"./index-yKfuAlf6.js";import"./DocsRenderer-CFRXHY34-DQDic_7Z.js";import"./iframe-O_l3oZBA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";function t(s){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"API Custom Suffix"}),`
`,e.jsx(n.h2,{id:"custom-elements-suffix",children:"Custom Elements Suffix"}),`
`,e.jsx(n.p,{children:`La versió 2 del Design System inclou una API que permet afegir un sufix als Web Components. Aquesta funcionalitat és necessària
per evitar conflictes en entorns microfrontends on poden coexistir diferents versions del Design System al mateix temps.`}),`
`,e.jsx(n.p,{children:`Aquest sistema d’etiquetatge de la biblioteca facilita el manteniment i l’escalabilitat d’aquests sistemes microfrontends,
ja que no cal actualitzar totes les aplicacions alhora cada vegada que hi hagi una nova versió del Design System. Només
serà necessari actualitzar les aplicacions que ho requereixin per afegir una nova funcionalitat o arreglar un error en un component específic.`}),`
`,e.jsxs(n.h3,{id:"com-sutilitza-react",children:["Com s’utilitza ",e.jsx(n.em,{children:"(React)"})]}),`
`,e.jsx(n.p,{children:"La idea de l’API és que es cridi sempre abans de fer l’import '@salut/design-system-salut', tal com s’explica a la guia d’integració."}),`
`,e.jsx(n.p,{children:"D’aquesta manera, quan el Design System realitzi la definició dels Web Components al navegador, ho farà de forma dinàmica incloent el nou sufix darrere del selector estàtic bàsic."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important"}),`: La majoria de frameworks solen executar primer els imports dels mòduls, per la qual cosa serà necessari definir una estratègia
que asseguri que aquests imports no s’executen fins que s’hagi completat la invocació de l’API.`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`/* Este código ejecutará antes el import de la librería que la API */
import { setCustomElementSuffix } from '@salut/design-system-salut/api/custom-element-scope';
setCustomElementSuffix('xyz');
import('@salut/design-system-salut');

function App() {
  return (
    /* Template */
  );
}

`})}),`
`,e.jsxs(n.p,{children:["Una ",e.jsx(n.strong,{children:"solució correcta"}),", seguint l’exemple erroni anterior sobre una aplicació React, necessitaria afegir una lògica que aturi els imports fins a definir el sufix."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`/* Movemos los imports a una función dinámica dentro del componente */
import { useEffect, useState } from 'react';

import { setCustomElementSuffix } from '@salut/design-system-salut/api/custom-element-scope';

function App() {
  const [isLibraryLoaded, setIsLibraryLoaded] = useState(false);

  useEffect(() => {
    const loadLibrary = async () => {
      setCustomElementSuffix('xyz');

      await import('@salut/design-system-salut');
      await import('@salut/design-system-salut/css/main.css'); // CSS no se ve afectado por el sufijo, podría importarse fuera si se necesita

      setIsLibraryLoaded(true);
    };

    loadLibrary();
  }, []);

  if (!isLibraryLoaded) {
    return <div>Loading...</div>;
  }

  return (
    /* Template */
  );
}
`})}),`
`,e.jsx(n.p,{children:"Finalment, a l’hora d’utilitzar els Web Components, haurem d’introduir el sufix a l’etiqueta del component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`  <dss-avatar-xyz></dss-avatar-xyz>
`})}),`
`,e.jsxs(n.h3,{id:"com-sutilitza-angular",children:["Com s’utilitza ",e.jsx(n.em,{children:"(Angular)"})]}),`
`,e.jsx(n.p,{children:`e la mateixa manera, a Angular, serà necessari crear aquest retard als imports, per exemple, utilitzant un mòdul
específic amb APP_INITIALIZER per gestionar la definició del sufix:`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"custom-elements.module.ts"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { setCustomElementSuffix } from '@salut/design-system-salut/api/custom-element-scope';

export function initializeCustomElements(suffix: string): Function {
  return () => {
    setCustomElementSuffix(\`\${suffix}\`);
  };
}

@NgModule({})
export class CustomElementsModule {
  static withSuffix(suffix: string): ModuleWithProviders<CustomElementsModule> {
    return {
      ngModule: CustomElementsModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: () => initializeCustomElements(suffix),
          multi: true,
        },
      ],
    };
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Un cop tinguem definit el mòdul, l’importem al nostre ",e.jsx(n.code,{children:"app.module.ts"})," principal."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"app.module.ts"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`...
import { CustomElementsModule } from './custom-elements.module';
...

@NgModule({
  declarations: [
   ...
  ],
  imports: [
    ...
    CustomElementsModule.withSuffix('xyz'),
    ...
  ],
  providers: [
    ...
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

`})}),`
`,e.jsx(n.p,{children:"A partir d’aquí, ja podríem fer l’import de la biblioteca en qualsevol mòdul de la nostra aplicació."})]})}function f(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{f as default};
