import{ae as e,af as t}from"./index-CDPkb5lb.js";import{u as a}from"./index-7kIC0twn.js";import"./chunk-NUUEMKO5-Dq2UhQGV.js";import"./iframe-F_M-3TUD.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function o(s){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"API Custom Suffix"}),`
`,e.jsx(n.h2,{id:"custom-elements-suffix",children:"Custom Elements Suffix"}),`
`,e.jsx(n.p,{children:`La versión 2 del Design System incluye una API que permite añadir un sufijo a los Web Componentes. Esta funcionalidad es necesaria
para evitar conflictos en entornos microfrontends donde pueden cooexistir diferentes versiones del Design System al mismo tiempo.`}),`
`,e.jsx(n.p,{children:`Este sistema de etiquetado de la librería facilita el mantenimiento y la escabilidad de dichos sistemas microfrontends al no
necesitar tener que actualizar todas las aplicaciones a la vez cada vez que haya una nueva versión del Design System, siendo solo
necesario actualizar las aplicaciones que lo necesiten para añadir una nueva funcionalidad o arreglar un bug en un componente específico.`}),`
`,e.jsxs(n.h3,{id:"como-se-utiliza-react",children:["Como se utiliza ",e.jsx(n.em,{children:"(React)"})]}),`
`,e.jsxs(n.p,{children:["La idea de la API es que se invoque siempre antes de realizar el ",e.jsx(n.code,{children:"import '@salut/design-system-salut'"})," que se detalla en la guía de integración."]}),`
`,e.jsx(n.p,{children:"De esta forma cuando el Design System realiza la definición de los Web Componentes en el navegador lo hará de forma dinámica incluyendo el nuevo sufijo detrás del selector estático básico."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Importante"}),`: La mayoría de los frameworks suelen ejecutar primero los imports de los módulos, por lo que será necesario definir una estrategia
en la que aseguremos que estos imports no se ejecutan hasta que se ha completado la invocación de la API.`]}),`
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
`,e.jsxs(n.p,{children:["Una ",e.jsx(n.strong,{children:"solución correcta"}),", siguiente el ejemplo erroneo anterior sobre una aplicación React, necesitaría añadir una lógica que detenga los imports hasta definir el sufijo:"]}),`
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
`,e.jsx(n.p,{children:"Finalmente, a la hora de utilizar los web componentes, deberemos introducir el sufijo en la etiqueta del componente:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`  <dss-avatar-xyz></dss-avatar-xyz>
`})}),`
`,e.jsxs(n.h3,{id:"como-se-utiliza-angular",children:["Como se utiliza ",e.jsx(n.em,{children:"(Angular)"})]}),`
`,e.jsx(n.p,{children:`De la misma forma, en Angular, necesitaremos crear este retardo en los imports, por ejemplo utilizando
un modulo específico con APP_INITIALIZER para gestionar la definición del sufijo:`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"custom-elements.module.ts"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { setCustomElementSuffix } from '@salut/design-system-salut/api/custom-element-scope';

export function initializeCustomElements(suffix: string): Function {
  return () => {
    console.log(\`Adding suffix to custom elements: \${suffix}\`);
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
`,e.jsxs(n.p,{children:["Una vez tenemos definido el modulo lo importamos en nuestro ",e.jsx(n.code,{children:"app.module.ts"})," principal."]}),`
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
`,e.jsx(n.p,{children:"A partir de aqui ya podríamos hacer el import de la librería en cualquier modulo de nuestra aplicación."})]})}function f(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{f as default};
