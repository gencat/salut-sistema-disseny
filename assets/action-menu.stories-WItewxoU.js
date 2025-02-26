import"./lit-element-DhY7bShc.js";import{x as t}from"./lit-html-B2eaWknC.js";import"./action-menu-DOlW1ieP.js";const L={title:"Components/Action Menu",argTypes:{label:{name:"Text"},elements:{name:"Nombre de ítems",control:{type:"number",max:5,min:1}},type:{name:"Tipus",control:{type:"radio"},options:["primary","error"]},showLeftIcon:{name:"Mostrar icona esquerra",control:{type:"boolean"}},leftIcon:{name:"Icona esquerra",if:{arg:"showLeftIcon"}},showRightIcon:{name:"Mostrar icona dreta",control:{type:"boolean"}},rightIcon:{name:"Icona dreta",if:{arg:"showRightIcon"}},showActionIcon:{name:"Mostrar icona acció",control:{type:"boolean"}},actionIcon:{name:"Icona acció",if:{arg:"showActionIcon"}},actionState:{name:"Estat de la icona d'acció",control:{type:"select"},options:["default","white-default","primary","error","warning","success","info"],if:{arg:"showActionIcon"}},hasNestedMenu:{name:"Habilita menú niat",control:{type:"boolean"}},showNotifications:{name:"Mostrar notificacions",control:{type:"boolean"}},notifications:{name:"Notificacions",control:{type:"number",max:10,min:0},if:{arg:"showNotifications"}},notificationsState:{name:"Estat de la notificació",control:{type:"select"},options:["error","alert","success","info"],if:{arg:"showNotifications"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}}},parameters:{layout:"centered"}},e={render:n=>t`

            <div style="height: 250px;">
            <div style="width: fit-content;">
                <button style="padding: 4px;">CLIC AQUÍ</button>
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
            </div>
            </div>
    `,args:{label:"Action",elements:4,type:"primary",showLeftIcon:!0,leftIcon:"add_box",showRightIcon:!1,rightIcon:"add_box",showActionIcon:!1,actionIcon:"add_box",actionState:"primary",hasNestedMenu:!1,showNotifications:!1,notifications:1,notificationsState:"error",disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1409-9649&m=dev"}}},o={tags:["!dev"],render:()=>t`
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    `},i={tags:["!dev"],render:()=>t`
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" state="error"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    `},s={tags:["!dev"],render:()=>t`
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" disabled></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" state="error" disabled></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    `},a={tags:["!dev"],render:()=>t`
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" rightIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3" actionIcon="add_box"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    `},c={tags:["!dev"],render:()=>t`
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" notifications="1" notificationsState="alert"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" rightIcon="add_box" notifications="1" notificationsState="info"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3" actionIcon="add_box" notifications="1" notificationsState="success"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    `},d={tags:["!dev"],render:()=>t`
        <div class="only-demo-nested">
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
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
            </div>
        </div>
    `};var m,l,r;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return html\`

            <div style="height: 250px;">
            <div style="width: fit-content;">
                <button style="padding: 4px;">CLIC AQUÍ</button>
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
            </div>
            </div>
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
  } as Args,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1409-9649&m=dev'
    }
  }
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var u,b,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    \`;
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var I,p,A;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" state="error"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    \`;
  }
}`,...(A=(p=i.parameters)==null?void 0:p.docs)==null?void 0:A.source}}};var h,x,_;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" disabled></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" state="error" disabled></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    \`;
  }
}`,...(_=(x=s.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var g,y,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" rightIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3" actionIcon="add_box"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    \`;
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,S,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" actionIcon="add_box" notifications="1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" notifications="1" notificationsState="alert"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" rightIcon="add_box" notifications="1" notificationsState="info"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3" actionIcon="add_box" notifications="1" notificationsState="success"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    \`;
  }
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var N,$,M;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="only-demo-nested">
            <div class="only-demo-wrapper">
                <div class="only-demo-parent">
                    <button class="only-demo-button">CLIC AQUÍ</button>
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
            </div>
        </div>
    \`;
  }
}`,...(M=($=d.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const Q=["Playground","Primary","ErrorState","Disabled","IconOptions","Notifications","NestedMenu"],D=Object.freeze(Object.defineProperty({__proto__:null,Disabled:s,ErrorState:i,IconOptions:a,NestedMenu:d,Notifications:c,Playground:e,Primary:o,__namedExportsOrder:Q,default:L},Symbol.toStringTag,{value:"Module"}));export{D as A,s as D,i as E,a as I,c as N,e as P,o as a,d as b};
