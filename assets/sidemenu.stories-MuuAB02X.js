import{x as s}from"./lit-html-B2eaWknC.js";const P={title:"Discontinuat/Sidemenu ⚠️",argTypes:{hideCreate:{name:"Amagar botó de crear ",control:{type:"boolean"}},createNotifications:{name:"Quantitat de notificacions per botó de crear",control:{type:"number",max:10,min:0}},topMenuItems:{name:"Quantitat de ítems Top Menu",control:{type:"number",max:6,min:1}},bottomMenuItems:{name:"Quantitat de ítems Bottom Menu",control:{type:"number",max:6,min:1}},firstItemIcon:{name:"Icona primer item",control:{type:"text"}},firstItemLabel:{name:"Label primer item",control:{type:"text"}},firstItemNotifications:{name:"Notificacions primer item",control:{type:"number",max:6,min:0}},firstItemSelected:{name:"Primer item seleccionat",control:{type:"boolean"}},firstItemDisabled:{name:"Deshabil·litar primer item",control:{type:"boolean"}},showNestedMenu:{name:"Mostrar menú niat.",control:{type:"boolean"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5627&m=dev"}},args:{hideCreate:!1,createNotifications:0,topMenuItems:4,bottomMenuItems:4,firstItemIcon:"add_box",firstItemLabel:"Menu",firstItemNotifications:0,firstItemSelected:!1,firstItemDisabled:!1,showNestedMenu:!1},render:e=>s`
    <div style="height:850px">
      <dss-sidemenu createNotifications="${e.createNotifications}" ?hideCreateMenu=${e.hideCreate}>
        <dss-action-menu slot="create-action-menu" >
          <dss-action-menu-item label="Curs clinic" notifications="${e.createNotifications}"></dss-action-menu-item>
          <dss-action-menu-item label="Informe"></dss-action-menu-item>
          <dss-action-menu-item label="PROM"></dss-action-menu-item>
          <dss-action-menu-item label="Visita"></dss-action-menu-item>
          <dss-action-menu-item label="Prescipció"></dss-action-menu-item>
        </dss-action-menu>
        <dss-sidemenu-list slot="top-menu">
          <dss-sidemenu-list-item 
            icon="${e.firstItemIcon}" 
            label="${e.firstItemLabel}" 
            notifications="${e.firstItemNotifications}" 
            ?hasNestedMenu=${e.showNestedMenu} 
            ?selected=${e.firstItemSelected}
            ?disabled=${e.firstItemDisabled}>
            ${e.showNestedMenu?s`
                <dss-action-menu>
                  <dss-action-menu-item label="Action menu" notifications="${e.firstItemNotifications}"></dss-action-menu-item>
                  <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                  <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                </dss-action-menu>
              `:null}
          </dss-sidemenu-list-item>
          ${Array.from({length:e.topMenuItems-1},()=>s`
                <dss-sidemenu-list-item icon="add_box" label="Menu"></dss-sidemenu-list-item>
              `)}
        </dss-sidemenu-list>
        <dss-sidemenu-list slot="bottom-menu">
          ${Array.from({length:e.bottomMenuItems-1},()=>s`
                <dss-sidemenu-list-item icon="add_box" label="Menu"></dss-sidemenu-list-item>
              `)}
          <dss-sidemenu-list-item ?hasNestedMenu=${e.showNestedMenu} nestedMenuPosition="bottom">
            ${e.showNestedMenu?s`
                <dss-action-menu>
                  <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                  <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                  <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                </dss-action-menu>
              `:null}
          </dss-sidemenu-list-item>
        </dss-sidemenu-list>
      </dss-sidemenu>
    </div>
  `},t={tags:["!dev"],render:()=>s`
      <aside class="wrapper">
    <dss-sidemenu>
      <dss-action-menu slot="create-action-menu" >
        <dss-action-menu-item label="Curs clinic"></dss-action-menu-item>
        <dss-action-menu-item label="Informe"></dss-action-menu-item>
        <dss-action-menu-item label="PROM"></dss-action-menu-item>
        <dss-action-menu-item label="Visita"></dss-action-menu-item>
        <dss-action-menu-item label="Prescipció"></dss-action-menu-item>
      </dss-action-menu>
      <dss-sidemenu-list slot="top-menu">
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
      <dss-sidemenu-list slot="bottom-menu">
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
    </dss-sidemenu>
  </aside>
    `},n={tags:["!dev"],render:()=>s`
      <aside class="wrapper">
    <dss-sidemenu expanded>
      <dss-action-menu slot="create-action-menu" >
        <dss-action-menu-item label="Curs clinic"></dss-action-menu-item>
        <dss-action-menu-item label="Informe"></dss-action-menu-item>
        <dss-action-menu-item label="PROM"></dss-action-menu-item>
        <dss-action-menu-item label="Visita"></dss-action-menu-item>
        <dss-action-menu-item label="Prescipció"></dss-action-menu-item>
      </dss-action-menu>
      <dss-sidemenu-list slot="top-menu">
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
      <dss-sidemenu-list slot="bottom-menu">
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
    </dss-sidemenu>
  </aside>
    `},m={tags:["!dev"],render:()=>s`
     <aside class="wrapper">
    <dss-sidemenu createNotifications="2">
      <dss-action-menu slot="create-action-menu" >
        <dss-action-menu-item label="Curs clinic" notifications="1"></dss-action-menu-item>
        <dss-action-menu-item label="Informe"></dss-action-menu-item>
        <dss-action-menu-item label="PROM"></dss-action-menu-item>
        <dss-action-menu-item label="Visita"></dss-action-menu-item>
        <dss-action-menu-item label="Prescipció"></dss-action-menu-item>
      </dss-action-menu>
      <dss-sidemenu-list slot="top-menu">
        <dss-sidemenu-list-item notifications="1"></dss-sidemenu-list-item>
        <dss-sidemenu-list-item selected></dss-sidemenu-list-item>
        <dss-sidemenu-list-item disabled></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
      <dss-sidemenu-list slot="bottom-menu">
        <dss-sidemenu-list-item notifications="2"></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
    </dss-sidemenu>
  </aside> 
    `},d={tags:["!dev"],render:()=>s`
      <aside class="wrapper">
    <dss-sidemenu createNotifications="2" createMenuPosition="bottom">
      <dss-action-menu slot="create-action-menu" >
        <dss-action-menu-item label="Curs clinic" notifications="1"></dss-action-menu-item>
        <dss-action-menu-item label="Informe"></dss-action-menu-item>
        <dss-action-menu-item label="PROM"></dss-action-menu-item>
        <dss-action-menu-item label="Visita"></dss-action-menu-item>
        <dss-action-menu-item label="Prescipció"></dss-action-menu-item>
      </dss-action-menu>
      <dss-sidemenu-list slot="top-menu">
        <dss-sidemenu-list-item icon="home" label="Home"></dss-sidemenu-list-item>
        <dss-sidemenu-list-item icon="star" label="Star"></dss-sidemenu-list-item>
        <dss-sidemenu-list-item icon="person" label="Profile" notifications="1" hasNestedMenu>
          <dss-action-menu>
            <dss-action-menu-item label="Action menu"></dss-action-menu-item>
            <dss-action-menu-item label="Action menu" notifications="1" hasNestedMenu>
              <dss-action-menu>
                <dss-action-menu-item label="Action menu" notifications="1">
                </dss-action-menu-item>
                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
              </dss-action-menu>
            </dss-action-menu-item>
            <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          </dss-action-menu>
        </dss-sidemenu-list-item>
        <dss-sidemenu-list-item icon="stacks" label="Stacks"></dss-sidemenu-list-item>
      </dss-sidemenu-list>
      <dss-sidemenu-list slot="bottom-menu">
        <dss-sidemenu-list-item notifications="7"></dss-sidemenu-list-item>
        <dss-sidemenu-list-item hasNestedMenu nestedMenuPosition="bottom">
          <dss-action-menu>
            <dss-action-menu-item label="Action menu"></dss-action-menu-item>
            <dss-action-menu-item label="Action menu"></dss-action-menu-item>
            <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          </dss-action-menu>
        </dss-sidemenu-list-item>
      </dss-sidemenu-list>
    </dss-sidemenu>
  </aside>
    `};var a,o,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5627&m=dev'
    }
  },
  args: {
    hideCreate: false,
    createNotifications: 0,
    topMenuItems: 4,
    bottomMenuItems: 4,
    firstItemIcon: 'add_box',
    firstItemLabel: 'Menu',
    firstItemNotifications: 0,
    firstItemSelected: false,
    firstItemDisabled: false,
    showNestedMenu: false
  },
  render: (args: any) => {
    return html\`
    <div style="height:850px">
      <dss-sidemenu createNotifications="\${args.createNotifications}" ?hideCreateMenu=\${args.hideCreate}>
        <dss-action-menu slot="create-action-menu" >
          <dss-action-menu-item label="Curs clinic" notifications="\${args.createNotifications}"></dss-action-menu-item>
          <dss-action-menu-item label="Informe"></dss-action-menu-item>
          <dss-action-menu-item label="PROM"></dss-action-menu-item>
          <dss-action-menu-item label="Visita"></dss-action-menu-item>
          <dss-action-menu-item label="Prescipció"></dss-action-menu-item>
        </dss-action-menu>
        <dss-sidemenu-list slot="top-menu">
          <dss-sidemenu-list-item 
            icon="\${args.firstItemIcon}" 
            label="\${args.firstItemLabel}" 
            notifications="\${args.firstItemNotifications}" 
            ?hasNestedMenu=\${args.showNestedMenu} 
            ?selected=\${args.firstItemSelected}
            ?disabled=\${args.firstItemDisabled}>
            \${args.showNestedMenu ? html\`
                <dss-action-menu>
                  <dss-action-menu-item label="Action menu" notifications="\${args.firstItemNotifications}"></dss-action-menu-item>
                  <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                  <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                </dss-action-menu>
              \` : null}
          </dss-sidemenu-list-item>
          \${Array.from({
      length: args.topMenuItems - 1
    }, () => html\`
                <dss-sidemenu-list-item icon="add_box" label="Menu"></dss-sidemenu-list-item>
              \`)}
        </dss-sidemenu-list>
        <dss-sidemenu-list slot="bottom-menu">
          \${Array.from({
      length: args.bottomMenuItems - 1
    }, () => html\`
                <dss-sidemenu-list-item icon="add_box" label="Menu"></dss-sidemenu-list-item>
              \`)}
          <dss-sidemenu-list-item ?hasNestedMenu=\${args.showNestedMenu} nestedMenuPosition="bottom">
            \${args.showNestedMenu ? html\`
                <dss-action-menu>
                  <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                  <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                  <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                </dss-action-menu>
              \` : null}
          </dss-sidemenu-list-item>
        </dss-sidemenu-list>
      </dss-sidemenu>
    </div>
  \`;
  }
}`,...(u=(o=i.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var l,c,r;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <aside class="wrapper">
    <dss-sidemenu>
      <dss-action-menu slot="create-action-menu" >
        <dss-action-menu-item label="Curs clinic"></dss-action-menu-item>
        <dss-action-menu-item label="Informe"></dss-action-menu-item>
        <dss-action-menu-item label="PROM"></dss-action-menu-item>
        <dss-action-menu-item label="Visita"></dss-action-menu-item>
        <dss-action-menu-item label="Prescipció"></dss-action-menu-item>
      </dss-action-menu>
      <dss-sidemenu-list slot="top-menu">
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
      <dss-sidemenu-list slot="bottom-menu">
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
    </dss-sidemenu>
  </aside>
    \`;
  }
}`,...(r=(c=t.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};var b,f,p;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <aside class="wrapper">
    <dss-sidemenu expanded>
      <dss-action-menu slot="create-action-menu" >
        <dss-action-menu-item label="Curs clinic"></dss-action-menu-item>
        <dss-action-menu-item label="Informe"></dss-action-menu-item>
        <dss-action-menu-item label="PROM"></dss-action-menu-item>
        <dss-action-menu-item label="Visita"></dss-action-menu-item>
        <dss-action-menu-item label="Prescipció"></dss-action-menu-item>
      </dss-action-menu>
      <dss-sidemenu-list slot="top-menu">
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
      <dss-sidemenu-list slot="bottom-menu">
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
    </dss-sidemenu>
  </aside>
    \`;
  }
}`,...(p=(f=n.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var M,I,h;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <aside class="wrapper">
    <dss-sidemenu createNotifications="2">
      <dss-action-menu slot="create-action-menu" >
        <dss-action-menu-item label="Curs clinic" notifications="1"></dss-action-menu-item>
        <dss-action-menu-item label="Informe"></dss-action-menu-item>
        <dss-action-menu-item label="PROM"></dss-action-menu-item>
        <dss-action-menu-item label="Visita"></dss-action-menu-item>
        <dss-action-menu-item label="Prescipció"></dss-action-menu-item>
      </dss-action-menu>
      <dss-sidemenu-list slot="top-menu">
        <dss-sidemenu-list-item notifications="1"></dss-sidemenu-list-item>
        <dss-sidemenu-list-item selected></dss-sidemenu-list-item>
        <dss-sidemenu-list-item disabled></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
      <dss-sidemenu-list slot="bottom-menu">
        <dss-sidemenu-list-item notifications="2"></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
        <dss-sidemenu-list-item></dss-sidemenu-list-item>
      </dss-sidemenu-list>
    </dss-sidemenu>
  </aside> 
    \`;
  }
}`,...(h=(I=m.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var N,g,A;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <aside class="wrapper">
    <dss-sidemenu createNotifications="2" createMenuPosition="bottom">
      <dss-action-menu slot="create-action-menu" >
        <dss-action-menu-item label="Curs clinic" notifications="1"></dss-action-menu-item>
        <dss-action-menu-item label="Informe"></dss-action-menu-item>
        <dss-action-menu-item label="PROM"></dss-action-menu-item>
        <dss-action-menu-item label="Visita"></dss-action-menu-item>
        <dss-action-menu-item label="Prescipció"></dss-action-menu-item>
      </dss-action-menu>
      <dss-sidemenu-list slot="top-menu">
        <dss-sidemenu-list-item icon="home" label="Home"></dss-sidemenu-list-item>
        <dss-sidemenu-list-item icon="star" label="Star"></dss-sidemenu-list-item>
        <dss-sidemenu-list-item icon="person" label="Profile" notifications="1" hasNestedMenu>
          <dss-action-menu>
            <dss-action-menu-item label="Action menu"></dss-action-menu-item>
            <dss-action-menu-item label="Action menu" notifications="1" hasNestedMenu>
              <dss-action-menu>
                <dss-action-menu-item label="Action menu" notifications="1">
                </dss-action-menu-item>
                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
              </dss-action-menu>
            </dss-action-menu-item>
            <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          </dss-action-menu>
        </dss-sidemenu-list-item>
        <dss-sidemenu-list-item icon="stacks" label="Stacks"></dss-sidemenu-list-item>
      </dss-sidemenu-list>
      <dss-sidemenu-list slot="bottom-menu">
        <dss-sidemenu-list-item notifications="7"></dss-sidemenu-list-item>
        <dss-sidemenu-list-item hasNestedMenu nestedMenuPosition="bottom">
          <dss-action-menu>
            <dss-action-menu-item label="Action menu"></dss-action-menu-item>
            <dss-action-menu-item label="Action menu"></dss-action-menu-item>
            <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          </dss-action-menu>
        </dss-sidemenu-list-item>
      </dss-sidemenu-list>
    </dss-sidemenu>
  </aside>
    \`;
  }
}`,...(A=(g=d.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};const $=["Playground","ByDefault","Expanded","ListItemOptions","NestedMenu"],w=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:t,Expanded:n,ListItemOptions:m,NestedMenu:d,Playground:i,__namedExportsOrder:$,default:P},Symbol.toStringTag,{value:"Module"}));export{t as B,n as E,m as L,d as N,i as P,w as S};
