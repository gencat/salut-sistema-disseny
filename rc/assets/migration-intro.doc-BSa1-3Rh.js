import{ae as e,af as s}from"./index-Da2BS-m_.js";import{u as i}from"./index-7D23P0E9.js";import"./chunk-NUUEMKO5-kxfnZ_X_.js";import"./iframe-BA9MAoLA.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function o(a){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Migració V2/Intro"}),`
`,e.jsx(n.h2,{id:"migración-de-la-librería-design-system-salut-a-la-versión-2",children:"Migración de la librería Design System Salut a la versión 2"}),`
`,e.jsx(n.p,{children:"Bienvenido a la documentación sobre la migración de nuestra librería de Web Components de la versión 1 a la versión 2. Este cambio marca un paso importante en la evolución de nuestra biblioteca, diseñado para ofrecer mejoras significativas tanto en funcionalidad como en rendimiento técnico."}),`
`,e.jsx(n.p,{children:"En esta nueva versión, hemos introducido:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mejoras funcionales:"})," Nuevas características y capacidades en los componentes, que los hacen más versátiles y alineados con las necesidades actuales de desarrollo."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Optimización del rendimiento:"})," Una reestructuración interna que reduce significativamente los tiempos de carga y mejora el rendimiento general de la aplicación."]}),`
`]}),`
`,e.jsx(n.p,{children:"Nuestro objetivo principal con esta migración ha sido proporcionar una experiencia de usuario más fluida y una integración más eficiente de los componentes, sobre todo en entornos microfrontend."}),`
`,e.jsx(n.p,{children:"En esta documentación, encontrarás todo lo necesario para comprender las diferencias entre las versiones, cómo realizar la migración de manera sencilla y las mejoras específicas que aporta la versión 2."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#vite",children:"Restructuración: Vite"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#storybook-8",children:"Restructuración: Storybook"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#eliminaci%C3%B3n-de-dependencias",children:"Restructuración: Dependencias"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#iconos",children:"Mejoras: iconos"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#adaptaci%C3%B3n-de-tipados-para-react",children:"Mejoras: tipados React"})}),`
`]}),`
`,e.jsx(n.h3,{id:"restructuración-interna",children:"Restructuración interna"}),`
`,e.jsx(n.h4,{id:"vite",children:"Vite"}),`
`,e.jsx(n.p,{children:"La migración de Webpack a Vite representa un cambio significativo hacia un entorno de desarrollo más ágil y moderno. Vite aprovecha la carga basada en ESModules y un servidor de desarrollo ultrarrápido para ofrecer tiempos de inicio instantáneos y actualizaciones en caliente más eficientes. Además, su diseño optimizado para proyectos modernos reduce los tiempos de construcción en producción, lo que mejora significativamente la experiencia de desarrollo y el rendimiento general del proyecto."}),`
`,e.jsx(n.h4,{id:"storybook-8",children:"Storybook 8"}),`
`,e.jsx(n.p,{children:"La actualización a Storybook v8 trae consigo numerosas ventajas, como un mejor soporte para tecnologías modernas, incluyendo una integración más fluida con herramientas como Vite. Esta versión incluye mejoras en la estabilidad, rendimiento y flexibilidad, con una interfaz más intuitiva y opciones de personalización avanzadas. Estas actualizaciones no solo hacen que trabajar con Storybook sea más eficiente, sino que también ofrecen una experiencia más consistente para documentar y probar componentes."}),`
`,e.jsx(n.h4,{id:"eliminación-de-dependencias",children:"Eliminación de dependencias"}),`
`,e.jsx(n.p,{children:"La eliminación de dependencias innecesarias en el proyecto reduce significativamente el tamaño del paquete final y mejora la velocidad de instalación y compilación. Este proceso también minimiza los riesgos de vulnerabilidades de seguridad asociadas con dependencias obsoletas o no mantenidas, garantizando un ecosistema más limpio, confiable y eficiente para el desarrollo continuo."}),`
`,e.jsx(n.h3,{id:"mejoras-funcionales",children:"Mejoras funcionales"}),`
`,e.jsx(n.h4,{id:"iconos",children:"Iconos"}),`
`,e.jsxs(n.p,{children:["Se ha creado un nuevo Web Component ",e.jsx(n.code,{children:"dss-icon"})," para la gestión de los iconos que incluye dos nuevas funcionalidades importantes:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Gestión de la visibilidad de los iconos hasta que la fuente de iconos esté cargada"}),`. Esto eliminará el problema actual por el que,
hasta que la fuente de iconos no estaba cargada, en el navegador se visualizaban todos los nombres de los iconos. Ahora, mientras la fuente de iconos no esté cargada, el componente mostrará un espacio transparente con el tamaño del icono seleccionado, pasando a mostrar el icono una vez la fuente esté disponible.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Gestión de la traducción externa de los iconos"}),". Esto eliminará el problema actual por el que algunos usuarios, que utilizan traductores web externos, estaban visualizando incorrectamente el nombre de los iconos traducido en lugar del propio icono. Esto error se había solucionado temporalmente bloqueando la traducción de todo el html pero con el uso del nuevo componente ya no será necesario."]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"adaptación-de-tipados-para-react",children:"Adaptación de tipados para React"}),`
`,e.jsx(n.p,{children:`Al utilizar la v1 del Design System Salut en un proyecto React, es posible que hayas experimentado problemas con la gestión de las propiedades
enviadas desde React a los componentes de la librería. Hasta ahora la librería venía testeandose exclusivamente en Angular y no se habían
detectado estos problemas hasta que se ha intentado integrar en un proyecto React.`}),`
`,e.jsx(n.p,{children:`La causa de estos problemas radica en las diferencias en la forma de bindear las propiedades entre Angular y React. Mientras que Angular gestiona las propiedades internamente y las envia en el formato correcto, React envía las propiedades al Web Component de forma nativa,
por lo que ciertos tipos de propiedades como booleans o arrays no se bindean correctamente y el componente no llega a renderizarse como debería.`}),`
`,e.jsx(n.p,{children:"Esto no significa que el DS no funcione en React, sino que son necesarias ciertas adaptaciones para que funcione correctamente, lo que podría dar lugar a mayor complejidad en el código de las aplicaciones."}),`
`,e.jsx(n.p,{children:"Llegados a este punto, hemos añadido algunos ajustes internos a la hora de detectar estos tipos de propiedades para facilitar el uso de los componentes ya sea en React o en aplicaciones nativas sin ningún tipo de framework."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Booleans"}),":"]}),`
`,e.jsx(n.p,{children:"Se ha corregido el problema por el cual, al enviar desde React una variable booleana con valor 'false' el componente la interpretaba como 'true' por el mero hecho de estar definida"}),`
`,e.jsxs(n.p,{children:["Esto nos permite declarar variables boolbeans de forma sencilla ",e.jsx(n.code,{children:"<dss-modal open={isModalOpen} />"})," sin necesidad de declararlas de forma más compleja como ",e.jsx(n.code,{children:"{...(isModalOpen && { open: true })}"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Arrays Primarios"}),":"]}),`
`,e.jsx(n.p,{children:"Se ha corregido el problema por el cual se necesitaba enviar un array de datos primarios (string, number) como texto plano, lo que dificultaba la lectura del código y la comprensión de las propiedades enviadas."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const myItems = ['item1', 'item2', 'item3'];
<dss-component items="{myItems}">
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Arrays de Objetos"}),":"]}),`
`,e.jsx(n.p,{children:"Actualmente no se ha podido solucionar el problema anterior aplicado a arrays de objetos, ya que el valor de la propiedad que recibe el DS es una serialización de textos con object Object la cual no podemos reconstruir."}),`
`,e.jsx(n.p,{children:"Por este motivo se recomienda usar una de las dos siguientes alternativas para enviar propiedades de tipo array de objetos:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Usar un atributo serializado como JSON"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const myItems = [{label: 'item1', value: 'value1'}, {label: 'item2', value: 'value2'}, {label: 'item3', value: 'value3'}];
 
<dss-component items="{JSON.stringify(myItems)}">
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Utilizar una referencia REF de React"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`  const myItems = [{label: 'item1', value: 'value1'}, {label: 'item2', value: 'value2'}, {label: 'item3', value: 'value3'}];

  const webComponentRef = useRef(null);
 
  useEffect(() => {
    if (webComponentRef.current) {
      webComponentRef.current.items = myItems;
    }
  }, [myItems]);
 
  <dss-component ref={webComponentRef}></dss-component>;
`})})]})}function h(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(o,{...a})}):o(a)}export{h as default};
