import{j as e,M as t,T as r,C as s,a as c,S as l}from"./index-E5f-sIfV.js";import{useMDXComponents as d}from"./index-Y2CEARYN.js";import{S as o,P as x,B as h,E as j,L as u,N as m,H as b,R as p}from"./side-menu.stories-Cj2samJi.js";import"./iframe-Ru67yHrZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C_pJYAGD.js";import"./index-DxHf6ONh.js";import"./index-DrFu-skq.js";import"./lit-html-D6a8R3xZ.js";function a(i){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    .wrapper {
      height: 900px;
    }
    .wrapper--reduced {
      height: 700px;
    }
  `}),`
`,e.jsx(t,{of:o}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(r,{}),e.jsx("dss-badge",{text:"dss-side-menu",size:"md",state:"info-alt",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(n.p,{children:"La collection Side Menu és un element de l'interfície d'usuari que ofereix accés ràpid a funcions o seccions d'una aplicació, en aquest cas situat al marge esquerre de la pantalla."}),`
`,e.jsx(n.p,{children:"La Side Menu pot presentar-se en dos estats: plegat i desplegat. Aquesta capacitat de canviar d'estat permet una interfície més neta i flexible, adaptant-se a les necessitats de l'usuari en cada moment."}),`
`,e.jsx(n.p,{children:"Quan el Side Menu està plegat, ocupa menys espai i mostra només icones per evitar distraccions a l'usuari."}),`
`,e.jsx(n.p,{children:"Només al breakpoint de 1024px, la funcionalitat de desplegar el menú quedarà deshabilitada. En aquest format compacte, només es mostren les icones per donar prioritat al contingut."}),`
`,e.jsx(n.p,{children:"A més, cada vegada que l'usuari faci hover sobre un element del Side Menu, apareixerà un Tooltip que indicarà clarament a quina secció correspon."}),`
`,e.jsx(n.p,{children:"Aquesta funcionalitat d'expandir/col·lapsar el menú i de deshabilitar en resolucions petites és controlada internament pel component i no cal gestionar-la des de la iniciativa."}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:"En aquesta nova versió del sidemenu, tots els menús es defineixen a través de les propietats en lloc dels slots HTML, de manera que la collection s'encarrega de gestionar totes les funcionalitats internament."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h3,{id:"propietats",children:"Propietats"}),`
`,e.jsx(n.h4,{id:"dss-side-menu",children:"dss-side-menu"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"createMenuItems"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"MenuItems[]"})}),e.jsx(n.td,{children:"[]"}),e.jsx(n.td,{children:"Elements mostrats en el menú de crear elements."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"roleMenuItems"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"MenuItems[]"})}),e.jsx(n.td,{children:"[]"}),e.jsx(n.td,{children:"Elements mostrats en el menú específic per al rol, situat a la part superior del sidemenu."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"globalMenuItems"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"MenuItems[]"})}),e.jsx(n.td,{children:"[]"}),e.jsx(n.td,{children:"Elements mostrats en el menú global, situat a la part inferior del sidemenu."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"expanded"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Mostra el menú obert per defecte."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Deshabilita el menú."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"toggleLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'Tancar menú'"}),e.jsx(n.td,{children:"Text mostrat al botó de tancar el menú."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"createLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'Crear'"}),e.jsx(n.td,{children:"Text mostrat al botó de crear."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"createMenuPosition"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'top'"}),e.jsx(n.td,{children:"Posició del menú desplegable de crear."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"createNotifications"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"Notificacions pendents per al menú de crear."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"createDisabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Deshabilitar el menú de crear."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"hideCreateMenu"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Amagar el menú de crear."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"axiaHidden"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Amagar botó de Axia."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"axiaDisabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Deshabil·litar botó de Axia."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"axiaLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'Axia'"}),e.jsx(n.td,{children:"Label botó de Axia."})]})]})]})}),`
`,e.jsx(n.h4,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsxs(n.strong,{children:["label",e.jsx("span",{children:"*"})]})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'Menu'"}),e.jsx(n.td,{children:"Text que es mostrarà quan el menú estigui expandit."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"icon"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"'add_box'"}),e.jsx(n.td,{children:"Icona mostrada dins de l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"selected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Marca l'element com a seleccionat per defecte."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"disabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Deshabilita  l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"external"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"Deshabilita la funcionalitat que marca l'ítem clicat com a selected, cosa que fa que es mantingui l'últim element seleccionat quan un menú et redirigeix ​​fora de la iniciativa."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"notifications"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"Quantitat de notificacions que té l'element."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"nestedMenu"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"MenuItems[]"})}),e.jsx(n.td,{children:"[]"}),e.jsx(n.td,{children:"Llista d'elements que es mostraran com un menú niat dins de cada ítem del menú. Aquesta propietat és recursiva, permetent afegir diferents nivells de menús niats."})]})]})]})}),`
`,e.jsx(n.p,{children:"(*) Propietat obligatòria"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"esdeveniments",children:"Esdeveniments"}),`
`,e.jsx(n.h4,{id:"dss-side-menu-1",children:"dss-side-menu"}),`
`,e.jsx("div",{className:"dss-sb-properties",children:e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onSidemenuClick"})}),e.jsx(n.td,{children:"Notifica quan s'ha fet clic en un element que no conté un menú niat."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"onToggleAxia"})}),e.jsx(n.td,{children:"Notifica quan s'ha fet clic al botó d'Axia perquè la iniciativa pugui gestionar la lògica de mostrar el component drawer associat."})]})]})]})}),`
`,e.jsx(n.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#default",children:"Default"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#expandit",children:"Expandit"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#menu-list-item-opcions",children:"Menu List Item Opcions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amb-menu-niat",children:"Amb menú niat"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#amagar-axia",children:"Amagar Axia"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#al%C3%A7ada-limitada",children:"Alçada limitada"})}),`
`]}),`
`,e.jsx(n.h4,{id:"default",children:"Default"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(l,{code:`
    const roleMenuItems = [
			{ icon: 'add_box', label: 'Role Menu' },
			{ icon: 'add_box', label: 'Role Menu' },
			{ icon: 'open_in_new', label: 'Role Menu', external: true},
			{ icon: 'add_box', label: 'Role Menu' },
		];
    const createMenuItems = [
			{ label: 'Curs clinic' },
			{ label: 'Informe' },
			{ label: 'PROM' },
			{ label: 'Visita' },
			{ label: 'Prescipció' },
		];
		const globalMenuItems = [
			{ icon: 'add_box', label: 'Global Menu' },
			{ icon: 'add_box', label: 'Global Menu' },
			{ icon: 'add_box', label: 'Global Menu' },
			{ icon: 'add_box', label: 'Global Menu' },
		];
    ...
    <dss-side-menu
      roleMenuItems=\${roleMenuItems}
      createMenuItems=\${createMenuItems}
      globalMenuItems=\${globalMenuItems}>
    </dss-side-menu>
    ...
  `}),`
`,e.jsx(n.p,{children:`Per a un funcionament adequat en aplicacions React, es recomana definir la llista d'elements de cada menú mitjançant variables d'estat (useState), de manera que es
puguin reflectir o desar fàcilment els canvis que s'hi facin.`}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"expandit",children:"Expandit"}),`
`,e.jsx(n.p,{children:"En pantalles amb una resolució de 1024px d'ample o inferior, el sidemenu es col·lapsarà de manera automàtica i el botó d'obrir o tancar quedarà deshabilitat."}),`
`,e.jsx(s,{of:j}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"menu-list-item-opcions",children:"Menu List Item Opcions"}),`
`,e.jsx(n.p,{children:"Notificacions: Les notificacions seran visibles quan l'usuari no estigui a la pàgina relacionada amb l'element o si, en cas de tenir un menú niat, el menú està col·lapsat. Quan el menú niat es visualitza, les notificacions passaran a veure's en l'element corresponent."}),`
`,e.jsx(n.p,{children:"Seleccionat: Els elements del menú tenen la propietat selected per indicar que l'usuari es troba actualment a la pàgina relacionada amb aquest menú."}),`
`,e.jsx(n.p,{children:"Deshabilitat: Deshabilita l'element i totes les opcions que tingui definides."}),`
`,e.jsx(l,{code:`
    const roleMenuItems = [
			{ icon: 'add_box', label: 'Role Menu' },
			{ icon: 'add_box', label: 'Role Menu', notifications: 1 },
			{ icon: 'star', label: 'Role Menu', selected: true },
			{ icon: 'block', label: 'Role Menu', disabled: true },
			{ icon: 'add_box', label: 'Role Menu' },
		];
    const createMenuItems = [
			{ label: 'Curs clinic', notifications: 3 },
			{ label: 'Informe' },
			{ label: 'PROM' },
			{ label: 'Visita' },
			{ label: 'Prescipció' },
		];
		const globalMenuItems = [
			{ icon: 'add_box', label: 'Global Menu', notifications: 2 },
			{ icon: 'add_box', label: 'Global Menu' },
			{ icon: 'add_box', label: 'Global Menu' },
			{ icon: 'add_box', label: 'Global Menu' },
		];
  `}),`
`,e.jsx(s,{of:u}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"amb-menú-niat",children:"Amb menú niat"}),`
`,e.jsx(n.p,{children:`Podem incloure menús niats tant a l'espai del botó de crear com en els diferents elements dins dels menús top o bottom.
Al mateix temps, també els podrem combinar amb elements action-menu amb contingut niat per construir un menú de diversos nivells.`}),`
`,e.jsx(n.p,{children:`Per als menús niats, caldrà tenir en compte la posició respecte al navegador per evitar que el contingut es talli, sent recomanable utilitzar
les propietats createMenuPosition o nestedMenuPosition en 'bottom' quan sigui necessari.`}),`
`,e.jsx(l,{code:`
    const roleMenuItems = [
			{ icon: 'add_box', label: 'Role Menu' },
			{
				icon: 'add_box',
				label: 'Role Menu',
				notifications: 3,
				nestedMenu: [
					{ icon: 'add_box', label: 'Role child 1', notifications: 1 },
					{ icon: 'add_box', label: 'Role child 2' },
					{
						icon: 'add_box',
						label: 'Role child 3',
						notifications: 2,
						nestedMenu: [
							{ icon: 'add_box', label: 'Role subchild 1', notifications: 1 },
							{ icon: 'add_box', label: 'Role subchild 2' },
							{ icon: 'add_box', label: 'Role subchild 3', notifications: 1 },
						],
					},
				],
			},
			{ icon: 'add_box', label: 'Role Menu' },
			{ icon: 'add_box', label: 'Role Menu' },
		];
    const globalMenuItems = [
			{
				icon: 'add_box',
				label: 'Global Menu',
				notifications: 2,
				nestedMenu: [
					{ icon: 'add_box', label: 'Global child 1', notifications: 1 },
					{ icon: 'add_box', label: 'Global child 2' },
					{
						icon: 'add_box',
						label: 'Global child 3',
						notifications: 1,
						nestedMenu: [
							{ icon: 'add_box', label: 'Global subchild 1', notifications: 1 },
							{ icon: 'add_box', label: 'Global subchild 2' },
							{ icon: 'add_box', label: 'Global subchild 3', notifications: 1 },
						],
					},
				],
			},
			{ icon: 'add_box', label: 'Global Menu' },
			{ icon: 'add_box', label: 'Global Menu' },
			{ icon: 'add_box', label: 'Global Menu' },
		];
  `}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h4,{id:"amagar-axia",children:"Amagar Axia"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h4,{id:"alçada-limitada",children:"Alçada limitada"}),`
`,e.jsx(n.p,{children:`S'ha afegit una nova funcionalitat a la col·lecció per evitar, en la mesura del possible, que aparegui una barra de desplaçament quan l'alçada
de la pantalla és reduïda. Així, els ítems del menú Rol s'ocultaran dinàmicament i s'agruparan en un nou element anomenat Altres, fins que només
quedi visible el primer ítem de l'array roleMenuItems.`}),`
`,e.jsx(s,{of:p}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Versió"}),e.jsx(n.th,{children:"Canvis"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.7.0"})}),e.jsx(n.td,{children:"El botó d’ampliar/collapsar el sidemenu ara s’oculta en resolucions de 1024 px o menys en lloc de deshabilitar-se."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.5.0"})}),e.jsxs(n.td,{children:["S'ha afegit una opció per marcar un element del menú com a enllaç extern, definint l'atribut ",e.jsx(n.code,{children:"external"})," a l'element dins del MenuItem[]"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.4.0"})}),e.jsx(n.td,{children:"S'ha corregit un error pel qual no es deshabilitava correctament el botó per expandir el menú en resolucions inferiors a 1024px."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"2.3.0"})}),e.jsx(n.td,{children:"Nou Collection. Transformada a partir del component anterior dss-sidemenu."})]})]})]})]})}function D(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{D as default};
