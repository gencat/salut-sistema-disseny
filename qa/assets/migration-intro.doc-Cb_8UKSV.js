import{j as e,M as t}from"./index-C6REoxga.js";import{useMDXComponents as s}from"./index-Bcw9cYpG.js";import"./DocsRenderer-CFRXHY34-pn6PrnYf.js";import"./iframe-DwujomfX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";function a(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Documentació/ Migració V2 Introducció"}),`
`,e.jsx(n.h2,{id:"migració-de-la-llibreria-design-system-salut-a-la-versió-2",children:"Migració de la llibreria Design System Salut a la versió 2"}),`
`,e.jsx(n.p,{children:"Benvingut a la documentació sobre la migració de la nostra llibreria de Web Components de la versió 1 a la versió 2. Aquest canvi marca un pas important en l'evolució de la nostra biblioteca, dissenyat per oferir millores significatives tant en funcionalitat com en rendiment tècnic."}),`
`,e.jsx(n.p,{children:"En aquesta nova versió, hem introduït:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Millores funcionals:"})," Noves característiques i capacitats als components, que els fan més versàtils i alineats amb les necessitats actuals de desenvolupament."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Optimització del rendiment:"})," Una reestructuració interna que redueix significativament els temps de càrrega i millora el rendiment general de l'aplicació."]}),`
`]}),`
`,e.jsx(n.p,{children:"El nostre objectiu principal amb aquesta migració ha estat proporcionar una experiència d'usuari més fluida i una integració més eficient dels components, sobretot en entorns microfrontend."}),`
`,e.jsx(n.p,{children:"En aquesta documentació, trobaràs tot el necessari per comprendre les diferències entre les versions, com realitzar la migració de manera senzilla i les millores específiques que aporta la versió 2."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#vite",children:"Reestructuració: Vite"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#storybook-8",children:"Reestructuració: Storybook"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#eliminaci%C3%B3-de-depend%C3%A8ncies",children:"Reestructuració: Dependències"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#icones",children:"Millores: icones"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#adaptaci%C3%B3-de-tipatges-per-a-react",children:"Millores: tipatges React"})}),`
`]}),`
`,e.jsx(n.h3,{id:"reestructuració-interna",children:"Reestructuració interna"}),`
`,e.jsx(n.h4,{id:"vite",children:"Vite"}),`
`,e.jsx(n.p,{children:"La migració de Webpack a Vite representa un canvi significatiu cap a un entorn de desenvolupament més àgil i modern. Vite aprofita la càrrega basada en ESModules i un servidor de desenvolupament ultraràpid per oferir temps d'inici instantanis i actualitzacions en calent més eficients. A més, el seu disseny optimitzat per a projectes moderns redueix els temps de construcció en producció, millorant significativament l'experiència de desenvolupament i el rendiment general del projecte."}),`
`,e.jsx(n.h4,{id:"storybook-8",children:"Storybook 8"}),`
`,e.jsx(n.p,{children:"L'actualització a Storybook v8 aporta nombrosos avantatges, com un millor suport per a tecnologies modernes, incloent-hi una integració més fluida amb eines com Vite. Aquesta versió inclou millores en l'estabilitat, rendiment i flexibilitat, amb una interfície més intuïtiva i opcions de personalització avançades. Aquestes actualitzacions no només fan que treballar amb Storybook sigui més eficient, sinó que també ofereixen una experiència més consistent per documentar i provar components."}),`
`,e.jsx(n.h4,{id:"eliminació-de-dependències",children:"Eliminació de dependències"}),`
`,e.jsx(n.p,{children:"L'eliminació de dependències innecessàries en el projecte redueix significativament la mida del paquet final i millora la velocitat d'instal·lació i compilació. Aquest procés també minimitza els riscos de vulnerabilitats de seguretat associades amb dependències obsoletes o no mantingudes, garantint un ecosistema més net, fiable i eficient per al desenvolupament continu."}),`
`,e.jsx(n.h3,{id:"millores-funcionals",children:"Millores funcionals"}),`
`,e.jsx(n.h4,{id:"icones",children:"Icones"}),`
`,e.jsxs(n.p,{children:["S'ha creat un nou Web Component ",e.jsx(n.code,{children:"dss-icon"})," per a la gestió de les icones que inclou dues noves funcionalitats importants:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Gestió de la visibilitat de les icones fins que la font d'icones estigui carregada."})," Això eliminarà el problema actual pel qual, fins que la font d'icones no estava carregada, al navegador es visualitzaven tots els noms de les icones. Ara, mentre la font d'icones no estigui carregada, el component mostrarà un espai transparent amb la mida de la icona seleccionada, passant a mostrar la icona un cop la font estigui disponible."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Gestió de la traducció externa de les icones."})," Això eliminarà el problema actual pel qual alguns usuaris, que utilitzen traductors web externs, visualitzaven incorrectament el nom de les icones traduït en lloc de la pròpia icona. Aquest error s'havia solucionat temporalment bloquejant la traducció de tot l'HTML, però amb l'ús del nou component ja no serà necessari."]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"adaptació-de-tipatges-per-a-react",children:"Adaptació de tipatges per a React"}),`
`,e.jsx(n.p,{children:"En utilitzar la v1 del Design System Salut en un projecte React, és possible que hagis experimentat problemes amb la gestió de les propietats enviades des de React als components de la llibreria. Fins ara la llibreria es testava exclusivament en Angular i no s'havien detectat aquests problemes fins que s'ha intentat integrar en un projecte React."}),`
`,e.jsx(n.p,{children:"La causa d'aquests problemes rau en les diferències en la manera de bindejar les propietats entre Angular i React. Mentre que Angular gestiona les propietats internament i les envia en el format correcte, React envia les propietats al Web Component de forma nativa, per la qual cosa certs tipus de propietats com booleans o arrays no es bindejen correctament i el component no arriba a renderitzar-se com cal."}),`
`,e.jsx(n.p,{children:"Això no significa que el DS no funcioni en React, sinó que són necessàries certes adaptacions perquè funcioni correctament, la qual cosa podria donar lloc a una major complexitat en el codi de les aplicacions."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Booleans"}),":"]}),`
`,e.jsx(n.p,{children:"S'ha corregit el problema pel qual, en enviar des de React una variable booleana amb valor 'false', el component la interpretava com 'true' pel simple fet d'estar definida."}),`
`,e.jsxs(n.p,{children:["Això ens permet declarar variables booleans de manera senzilla ",e.jsx(n.code,{children:"<dss-modal open={isModalOpen} />"})," sense necessitat de declarar-les de manera més complexa com ",e.jsx(n.code,{children:"{...(isModalOpen && { open: true })}"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Arrays Primaris"}),":"]}),`
`,e.jsx(n.p,{children:"Per a versions React 18 o anteriors, s'ha corregit el problema pel qual calia enviar un array de dades primàries (string, number) com a text pla, cosa que dificultava la lectura del codi i la comprensió de les propietats enviades."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const myItems = ['item1', 'item2', 'item3'];
<dss-component items="{myItems}">
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Arrays d'Objectes"}),":"]}),`
`,e.jsx(n.p,{children:"La versió React 19 inclou millores per a la integració de Web Components a l'aplicació que solucionen problemes com el descrit a continuació. Si és possible, recomanem actualitzar a aquesta versió de React, en cas contrari, tingues en compte el que es detalla a continuació."}),`
`,e.jsx(n.p,{children:"Per a versions React 18 o anteriors, actualment no s'ha pogut solucionar el problema anterior aplicat a arrays d'objectes, ja que el valor de la propietat que rep el DS és una serialització de textos amb object Object que no podem reconstruir."}),`
`,e.jsx(n.p,{children:"Per aquest motiu es recomana utilitzar una de les dues següents alternatives per enviar propietats de tipus array d'objectes:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Utilitzar un atribut serialitzat com JSON"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const myItems = [{label: 'item1', value: 'value1'}, {label: 'item2', value: 'value2'}, {label: 'item3', value: 'value3'}];
 
<dss-component items="{JSON.stringify(myItems)}">
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Utilitzar una referència REF de React"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`  const myItems = [{label: 'item1', value: 'value1'}, {label: 'item2', value: 'value2'}, {label: 'item3', value: 'value3'}];

  const webComponentRef = useRef(null);
 
  useEffect(() => {
    if (webComponentRef.current) {
      webComponentRef.current.items = myItems;
    }
  }, [myItems]);
 
  <dss-component ref={webComponentRef}></dss-component>;
`})})]})}function h(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{h as default};
