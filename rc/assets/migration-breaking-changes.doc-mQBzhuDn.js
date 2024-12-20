import{ae as e,af as a}from"./index-Da2BS-m_.js";import{u as s}from"./index-7D23P0E9.js";import"./chunk-NUUEMKO5-kxfnZ_X_.js";import"./iframe-BA9MAoLA.js";import"../sb-preview/runtime.js";import"./index-u5I_DdWt.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function i(o){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Migració V2/Breaking changes"}),`
`,e.jsx(n.h2,{id:"breaking-changes-a-tener-en-cuenta-para-la-migración-a-la-versión-2",children:"Breaking changes a tener en cuenta para la migración a la versión 2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tooltip",children:"Desplegables: Tooltip"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#action-menu",children:"Desplegables: Action Menu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#popover",children:"Desplegables: Popover"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"elementos-desplegables",children:"Elementos desplegables"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problema"})}),`
`,e.jsxs(n.p,{children:[`Hasta el momento, la mayoría de los elementos desplegables que forman parte de la librería se estaban mostrando
utilizando `,e.jsx(n.code,{children:"position: absolute"}),"."]}),`
`,e.jsx(n.p,{children:`Esto estaba generando problemas de renderizado en situaciones donde se aplicaban los despeglabes en conteneddores
con un espacio limitado con scroll o overflow:hidden, o bien en contenedores situados en los bordes de la ventana, donde
el contenido desplegable quedaba oculto o bien se desbordaba del contenedor creando un scroll no deseado.`}),`
`,e.jsx(n.p,{children:`Si bien todos estos componentes disponen de una propiedad de posicionamiento que permite cambiar el lugar donde se despliegan,
no se trataba de una solución 100% eficaz.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Solución"})}),`
`,e.jsx(n.p,{children:"La nueva funcionalidad incluye:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Manejo interno de la visibilidad del componente desplegable, ya sea a través de mouseenter/mouseleave o de un evento click."}),`
`,e.jsx(n.li,{children:"Posicionamiento dinámico respecto al contenedor padre pero fuera del flujo del mismo, evitando que sea afectado por la altura del contenedor o por los bordes de la ventana."}),`
`,e.jsx(n.li,{children:"Gestión dinámica del posicionamiento, de forma que en aquellas situaciones donde no haya suficiente espacio para desplegar el contenido en una dirección, el elemento modificará automáticamente su posición para estar siempre visible."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Refactor en iniciativas"})}),`
`,e.jsx(n.p,{children:"Los componentes afectados por este cambio, y que por tanto necesitan ser refactorizados desde las iniciativas, son: tooltips, action menu y popovers."}),`
`,e.jsx(n.p,{children:"Otros componenetes como input dropdown, datepicker o timepicker tambien han sido refactorizados pero al tratarse de un elemento interno no necesita ninguna adaptación externa."}),`
`,e.jsx(n.h3,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A eliminar:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Cualquier lógica CSS que oculte o muestre el componente con el uso del pseudo selector :hover."}),`
`,e.jsx(n.li,{children:"Cualquier atributo CSS position, ya sea relative o absolute, entre los elementos relacionados con el tooltip."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A tener en cuenta:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"El tooltip se mostrará u ocultará automáticamente al hacer mouseenter/mouseleave sobre el elemento principal que lo contiene, y no el elemento anterior como ocurría en CSS."}),`
`,e.jsx(n.li,{children:"De la misma forma el elemento que tomará como referencia para posicionarse será el contenedor padre del tooltip."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Ejemplo de uso:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`/* Tooltip que aparece al hacer hover sobre toda la celda y centrado con respecto al ancho de la misma */
...
<td>
  <dss-icon icon="add_box"/>
  <div class="td-content__value">Valor</div>
  <dss-tooltip>
    Lorem ipsum.
  </dss-tooltip>
</td>

/* Tooltip que aparece al hacer hover solo sobre el texto y centrado con respecto al ancho del mismo */
<td>
  <dss-icon icon="add_box"/>
  <div class="td-content__value">
    Valor
    <dss-tooltip>
      Lorem ipsum.
    </dss-tooltip>
  </div>
</td>
`})}),`
`,e.jsx(n.h3,{id:"action-menu",children:"Action Menu"}),`
`,e.jsx(n.p,{children:`De la misma forma que los tooltips, los componentes action-menu y popover también han pasado a controlar internamente su visibilidad y posición.
En este caso al hacer click sobre el elemento contenedor o hacer click fuera del mismo.`}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A eliminar:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Cualquier lógica externa que controle la visibilidad del componente usando variables o estados."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A tener en cuenta:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Podemos utilizar la propiedad disableParentClick junto con la propiedad open para manejar la visibilidad del componente desde fuera, bloqueando el control interno al hacer click en el contenedor padre."}),`
`,e.jsx(n.li,{children:"Podemos utilizar los eventos emitidos por el componente para modificar estados de otros elementos, por ejemplo si necesitaramos actualizar un icono expandido/colapsado"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Ejemplo de uso:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`  /* Gestion interna de la visibilidad */
  <div>
    <button>Click aquí</button>
    <dss-action-menu>
      <dss-action-menu-item label="Item 1" notifications="1"></dss-action-menu-item>
      <dss-action-menu-item label="Item 2"></dss-action-menu-item>
      <dss-action-menu-item label="Item 3"></dss-action-menu-item>
    </dss-action-menu>
  </div>

  /* Gestion externa de la visibilidad */
  toggleMenu = () => {
    isOpen = !isOpen;
  }
  <div>
    <button onClick={toggleMenu}>Click aquí</button>
    <dss-action-menu disableParentClick open={isOpen}>
      <dss-action-menu-item label="Item 1" notifications="1"></dss-action-menu-item>
      <dss-action-menu-item label="Item 2"></dss-action-menu-item>
      <dss-action-menu-item label="Item 3"></dss-action-menu-item>
    </dss-action-menu>
  </div>
`})}),`
`,e.jsx(n.h3,{id:"popover",children:"Popover"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A eliminar:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Por defecto, eliminaremos cualquier lógica externa que controle la visibilidad del componente usando variables o estados."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A tener en cuenta:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Podemos utilizar la propiedad disableParentClick junto con la propiedad open para manejar la visibilidad del componente desde fuera, bloqueando el control interno al hacer click en el contenedor padre."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Ejemplo de uso:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`  /* Gestion interna de la visibilidad */
  <div>
    <p>POPOVER CLICK HERE!!</p>
    <dss-popover title="Title" position="top">
      <dss-popover-body slot="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed
        vitae hendrerit lacus.
        <dss-button-link label="Button link" linkhref="https://google.com" icon="add_box"></dss-button-link>
      </dss-popover-body>
    </dss-popover>
  </div>


  /* Gestion externa de la visibilidad */
  const isPopoverOpen = false;
  togglePopover = (event: Event) => {
    event.stopPropagation();
    isPopoverOpen = !isPopoverOpen;
  }

  <div>
    <dss-input-action icon="add_box">
      <label slot="label" for="defaultText">Label</label>
      <input slot="input" id="defaultText" class="dss-input" type="text" />
      <dss-icon-button onClick="{togglePopover}" slot="action" type="primary" icon="file_upload"></dss-icon-button>
    </dss-input-action>
    <dss-popover title="Title" position="top" open={isPopoverOpen} disableParentClick>
      <dss-popover-body slot="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed
        vitae hendrerit lacus.
        <dss-button-link label="Button link" linkhref="https://google.com" icon="add_box"></dss-button-link>
      </dss-popover-body>
    </dss-popover>
  </div>

`})})]})}function h(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{h as default};
