import"./lit-element-vV9fql9z.js";import{x as t}from"./lit-html-paDGiEfB.js";import"./action-menu-i5ox-tYM.js";const L={title:"Components/Action Menu",argTypes:{label:{name:"Text"},elements:{name:"Nombre de ítems",control:{type:"number",max:5,min:1}},type:{name:"Tipus",control:{type:"radio"},options:["primary","error"]},showLeftIcon:{name:"Mostrar icona esquerra",control:{type:"boolean"}},leftIcon:{name:"Icona esquerra",if:{arg:"showLeftIcon"}},showRightIcon:{name:"Mostrar icona dreta",control:{type:"boolean"}},rightIcon:{name:"Icona dreta",if:{arg:"showRightIcon"}},showActionIcon:{name:"Mostrar icona acció",control:{type:"boolean"}},actionIcon:{name:"Icona acció",if:{arg:"showActionIcon"}},actionState:{name:"Estat de la icona d'acció",control:{type:"select"},options:["default","white-default","primary","error","warning","success","info"],if:{arg:"showActionIcon"}},hasNestedMenu:{name:"Habilita menú niat",control:{type:"boolean"}},showNotifications:{name:"Mostrar notificacions",control:{type:"boolean"}},notifications:{name:"Notificacions",control:{type:"number",max:10,min:0},if:{arg:"showNotifications"}},notificationsState:{name:"Estat de la notificació",control:{type:"select"},options:["error","alert","success","info"],if:{arg:"showNotifications"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}}},parameters:{layout:"centered"}},e={render:n=>t`
      <dss-action-menu>
        <dss-action-menu-item 
          state="${n.type}"
          label="${n.label}" 
          .leftIcon="${n.showLeftIcon?n.leftIcon:void 0}" 
          .rightIcon="${n.showRightIcon?n.rightIcon:void 0}" 
          .actionIcon="${n.showActionIcon?n.actionIcon:void 0}" 
          actionState="${n.actionState}"
          ?hasNestedMenu=${n.hasNestedMenu}
          notifications="${n.showNotifications?n.notifications:0}"
          notificationsState="${n.notificationsState}"
          ?disabled=${n.disabled}
          >
            ${n.hasNestedMenu?t`
              <dss-action-menu>
                <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
              </dss-action-menu>
              `:null}
          </dss-action-menu-item>
        ${Array.from({length:n.elements-1},()=>t`
              <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
            `)}
      </dss-action-menu>
    `,args:{label:"Action",elements:4,type:"primary",showLeftIcon:!0,leftIcon:"add_box",showRightIcon:!1,rightIcon:"add_box",showActionIcon:!1,actionIcon:"add_box",actionState:"primary",hasNestedMenu:!1,showNotifications:!1,notifications:1,notificationsState:"error",disabled:!1}},o={tags:["!dev"],render:()=>t`
     <dss-action-menu>
      <dss-action-menu-item label="Action 1"></dss-action-menu-item>
      <dss-action-menu-item label="Action 2"></dss-action-menu-item>
      <dss-action-menu-item label="Action 3"></dss-action-menu-item>
    </dss-action-menu>
    `},i={tags:["!dev"],render:()=>t`
     <dss-action-menu>
      <dss-action-menu-item label="Action 1"></dss-action-menu-item>
      <dss-action-menu-item label="Action 2" state="error"></dss-action-menu-item>
      <dss-action-menu-item label="Action 3"></dss-action-menu-item>
    </dss-action-menu>
    `},a={tags:["!dev"],render:()=>t`
      <dss-action-menu>
        <dss-action-menu-item label="Action 1" disabled></dss-action-menu-item>
        <dss-action-menu-item label="Action 2" state="error" disabled></dss-action-menu-item>
        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
      </dss-action-menu>
    `},s={tags:["!dev"],render:()=>t`
     <dss-action-menu>
        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box"></dss-action-menu-item>
        <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
        <dss-action-menu-item label="Action 2" rightIcon="add_box"></dss-action-menu-item>
        <dss-action-menu-item label="Action 3" actionIcon="add_box"></dss-action-menu-item>
      </dss-action-menu>
    `},c={tags:["!dev"],render:()=>t`
     <dss-action-menu>
      <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
      <dss-action-menu-item label="Action 1" leftIcon="add_box" notifications="1" notificationsState="alert"></dss-action-menu-item>
      <dss-action-menu-item label="Action 2" rightIcon="add_box" notifications="1" notificationsState="info"></dss-action-menu-item>
      <dss-action-menu-item label="Action 3" actionIcon="add_box" notifications="1" notificationsState="success"></dss-action-menu-item>
    </dss-action-menu>
    `},d={tags:["!dev"],render:()=>t`
     <div class="demo-wrapper">
    <dss-action-menu>
      <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
      <dss-action-menu-item label="Action 1" leftIcon="add_box" hasNestedMenu>
        <dss-action-menu>
          <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1" hasNestedMenu>
            <dss-action-menu>
              <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
              <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
              <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
              <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
            </dss-action-menu>
          </dss-action-menu-item>
          <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
          <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
          <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
        </dss-action-menu>
      </dss-action-menu-item>
      <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
      <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
    </dss-action-menu>
    </div>
    `};var m,r,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return html\`
      <dss-action-menu>
        <dss-action-menu-item 
          state="\${args.type}"
          label="\${args.label}" 
          .leftIcon="\${args.showLeftIcon ? args.leftIcon : undefined}" 
          .rightIcon="\${args.showRightIcon ? args.rightIcon : undefined}" 
          .actionIcon="\${args.showActionIcon ? args.actionIcon : undefined}" 
          actionState="\${args.actionState}"
          ?hasNestedMenu=\${args.hasNestedMenu}
          notifications="\${args.showNotifications ? args.notifications : 0}"
          notificationsState="\${args.notificationsState}"
          ?disabled=\${args.disabled}
          >
            \${args.hasNestedMenu ? html\`
              <dss-action-menu>
                <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
              </dss-action-menu>
              \` : null}
          </dss-action-menu-item>
        \${Array.from({
      length: args.elements - 1
    }, () => html\`
              <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
            \`)}
      </dss-action-menu>
    \`;
  },
  args: {
    label: 'Action',
    elements: 4,
    type: 'primary',
    showLeftIcon: true,
    leftIcon: 'add_box',
    showRightIcon: false,
    rightIcon: 'add_box',
    showActionIcon: false,
    actionIcon: 'add_box',
    actionState: 'primary',
    hasNestedMenu: false,
    showNotifications: false,
    notifications: 1,
    notificationsState: 'error',
    disabled: false
  } as Args
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var u,b,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-action-menu>
      <dss-action-menu-item label="Action 1"></dss-action-menu-item>
      <dss-action-menu-item label="Action 2"></dss-action-menu-item>
      <dss-action-menu-item label="Action 3"></dss-action-menu-item>
    </dss-action-menu>
    \`;
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var I,A,_;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-action-menu>
      <dss-action-menu-item label="Action 1"></dss-action-menu-item>
      <dss-action-menu-item label="Action 2" state="error"></dss-action-menu-item>
      <dss-action-menu-item label="Action 3"></dss-action-menu-item>
    </dss-action-menu>
    \`;
  }
}`,...(_=(A=i.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var x,h,p;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-action-menu>
        <dss-action-menu-item label="Action 1" disabled></dss-action-menu-item>
        <dss-action-menu-item label="Action 2" state="error" disabled></dss-action-menu-item>
        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
      </dss-action-menu>
    \`;
  }
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,y,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-action-menu>
        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box"></dss-action-menu-item>
        <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
        <dss-action-menu-item label="Action 2" rightIcon="add_box"></dss-action-menu-item>
        <dss-action-menu-item label="Action 3" actionIcon="add_box"></dss-action-menu-item>
      </dss-action-menu>
    \`;
  }
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var w,N,$;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-action-menu>
      <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
      <dss-action-menu-item label="Action 1" leftIcon="add_box" notifications="1" notificationsState="alert"></dss-action-menu-item>
      <dss-action-menu-item label="Action 2" rightIcon="add_box" notifications="1" notificationsState="info"></dss-action-menu-item>
      <dss-action-menu-item label="Action 3" actionIcon="add_box" notifications="1" notificationsState="success"></dss-action-menu-item>
    </dss-action-menu>
    \`;
  }
}`,...($=(N=c.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var M,v,E;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
    <dss-action-menu>
      <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
      <dss-action-menu-item label="Action 1" leftIcon="add_box" hasNestedMenu>
        <dss-action-menu>
          <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1" hasNestedMenu>
            <dss-action-menu>
              <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
              <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
              <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
              <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
            </dss-action-menu>
          </dss-action-menu-item>
          <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
          <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
          <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
        </dss-action-menu>
      </dss-action-menu-item>
      <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
      <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
    </dss-action-menu>
    </div>
    \`;
  }
}`,...(E=(v=d.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const P=["Playground","Primary","ErrorState","Disabled","IconOptions","Notifications","NestedMenu"],T=Object.freeze(Object.defineProperty({__proto__:null,Disabled:a,ErrorState:i,IconOptions:s,NestedMenu:d,Notifications:c,Playground:e,Primary:o,__namedExportsOrder:P,default:L},Symbol.toStringTag,{value:"Module"}));export{T as A,a as D,i as E,s as I,c as N,e as P,o as a,d as b};
