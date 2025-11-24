import{j as e,M as t,T as d,C as n,S as i}from"./index-B5EOGAvn.js";import{useMDXComponents as o}from"./index-BopZcbmZ.js";import{S as c,P as r,B as u,E as b,L as m,N as x,H as p,R as h}from"./side-menu.stories-Cktp9Y-L.js";import"./iframe-0sHXsm-F.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";import"./lit-html-D6cejpwM.js";import"./storybook-decorators-DSS85Rnr.js";function s(l){const a={a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...o(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsxs("div",{className:"dss-sb-title",children:[e.jsx(d,{}),e.jsx("dss-badge",{text:"dss-side-menu",size:"md",state:"info-alt",outlined:!0,hideIcon:!0})]}),`
`,e.jsx(a.p,{children:"La collection Side Menu és un element de l'interfície d'usuari que ofereix accés ràpid a funcions o seccions d'una aplicació, en aquest cas situat al marge esquerre de la pantalla."}),`
`,e.jsx(a.p,{children:"La Side Menu pot presentar-se en dos estats: plegat i desplegat. Aquesta capacitat de canviar d'estat permet una interfície més neta i flexible, adaptant-se a les necessitats de l'usuari en cada moment."}),`
`,e.jsx(a.p,{children:"Quan el Side Menu està plegat, ocupa menys espai i mostra només icones per evitar distraccions a l'usuari."}),`
`,e.jsx(a.p,{children:"Només al breakpoint de 1024px, la funcionalitat de desplegar el menú quedarà deshabilitada. En aquest format compacte, només es mostren les icones per donar prioritat al contingut."}),`
`,e.jsx(a.p,{children:"A més, cada vegada que l'usuari faci hover sobre un element del Side Menu, apareixerà un Tooltip que indicarà clarament a quina secció correspon."}),`
`,e.jsx(a.p,{children:"Aquesta funcionalitat d'expandir/col·lapsar el menú i de deshabilitar en resolucions petites és controlada internament pel component i no cal gestionar-la des de la iniciativa."}),`
`,e.jsx("br",{}),`
`,e.jsx(a.p,{children:"En aquesta nova versió del sidemenu, tots els menús es defineixen a través de les propietats en lloc dels slots HTML, de manera que la collection s'encarrega de gestionar totes les funcionalitats internament."}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"Aquest és el exemple que es troba al playground. Tota modificació es veurà reflectida al següent bloc."}),`
`]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(a.h3,{id:"variants",children:"Variants"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#default",children:"Default"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#expandit",children:"Expandit"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#menu-list-item-opcions",children:"Menu List Item Opcions"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amb-menu-niat",children:"Amb menú niat"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#amagar-axia",children:"Amagar Axia"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"#al%C3%A7ada-limitada",children:"Alçada limitada"})}),`
`]}),`
`,e.jsx(a.h4,{id:"default",children:"Default"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i,{code:`
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
`,e.jsx(a.p,{children:`Per a un funcionament adequat en aplicacions React, es recomana definir la llista d'elements de cada menú mitjançant variables d'estat (useState), de manera que es
puguin reflectir o desar fàcilment els canvis que s'hi facin.`}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h4,{id:"expandit",children:"Expandit"}),`
`,e.jsx(a.p,{children:"En pantalles amb una resolució de 1024px d'ample o inferior, el sidemenu es col·lapsarà de manera automàtica i el botó d'obrir o tancar quedarà deshabilitat."}),`
`,e.jsx(n,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h4,{id:"menu-list-item-opcions",children:"Menu List Item Opcions"}),`
`,e.jsx(a.p,{children:"Notificacions: Les notificacions seran visibles quan l'usuari no estigui a la pàgina relacionada amb l'element o si, en cas de tenir un menú niat, el menú està col·lapsat. Quan el menú niat es visualitza, les notificacions passaran a veure's en l'element corresponent."}),`
`,e.jsx(a.p,{children:"Seleccionat: Els elements del menú tenen la propietat selected per indicar que l'usuari es troba actualment a la pàgina relacionada amb aquest menú."}),`
`,e.jsx(a.p,{children:"Deshabilitat: Deshabilita l'element i totes les opcions que tingui definides."}),`
`,e.jsx(i,{code:`
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
`,e.jsx(n,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h4,{id:"amb-menú-niat",children:"Amb menú niat"}),`
`,e.jsx(a.p,{children:`Podem incloure menús niats tant a l'espai del botó de crear com en els diferents elements dins dels menús top o bottom.
Al mateix temps, també els podrem combinar amb elements action-menu amb contingut niat per construir un menú de diversos nivells.`}),`
`,e.jsx(a.p,{children:`Per als menús niats, caldrà tenir en compte la posició respecte al navegador per evitar que el contingut es talli, sent recomanable utilitzar
les propietats createMenuPosition o nestedMenuPosition en 'bottom' quan sigui necessari.`}),`
`,e.jsx(i,{code:`
    const roleMenuItems = [
			{ icon: 'add_box', label: 'Role Menu' },
			{
				icon: 'add_box',
				label: 'Role Menu',
				notifications: 3,
				nestedMenu: [
					{ icon: 'add_box', label: 'Role child 1', notifications: 1 },
					{ 
						icon: 'add_box', 
						label: 'Role child 2',
						nestedMenu: [
							{ icon: 'add_box', label: 'Role subchild 1' },
							{ icon: 'add_box', label: 'Role subchild 2' },
							{ icon: 'add_box', label: 'Role subchild 3' },
						]
					},
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
`,e.jsx(n,{of:x}),`
`,e.jsx(a.h4,{id:"amagar-axia",children:"Amagar Axia"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(a.h4,{id:"alçada-limitada",children:"Alçada limitada"}),`
`,e.jsx(a.p,{children:`S'ha afegit una nova funcionalitat a la col·lecció per evitar, en la mesura del possible, que aparegui una barra de desplaçament quan l'alçada
de la pantalla és reduïda. Així, els ítems del menú Rol s'ocultaran dinàmicament i s'agruparan en un nou element anomenat Altres, fins que només
quedi visible el primer ítem de l'array roleMenuItems.`}),`
`,e.jsx(n,{of:h})]})}function A(l={}){const{wrapper:a}={...o(),...l.components};return a?e.jsx(a,{...l,children:e.jsx(s,{...l})}):s(l)}export{A as default};
