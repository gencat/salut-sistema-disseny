import{x as t}from"./lit-html-D6a8R3xZ.js";import{w as d}from"./storybook-decorators-DSS85Rnr.js";const r=`
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
`,x={title:"Components/Notification Badge",argTypes:{state:{name:"Estat",control:{type:"radio"},options:["success","error","alert","info"]},showIcon:{name:" Mostra icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},value:{name:"Valor",control:{type:"text"}},dot:{name:" Tipus dot",control:{type:"boolean"}},borderWhite:{name:" Habilitar vora: tipus blanc",control:{type:"boolean"}},borderMenu:{name:" Habilitar vora: tipus menu",control:{type:"boolean"}},type:{name:"Tipus",control:{type:"radio"},options:["default","brand"],if:{arg:"menu",truthy:!0}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=248-2945&m=dev"}},args:{state:"succes",showIcon:!1,icon:"add_box",value:"1",dot:!1,borderWhite:!1,borderMenu:!1,type:"default"},render:e=>t`
    ${e.showIcon?t`
            <dss-notification-badge icon="${e.icon}" state="${e.state}" ?borderWhite=${e.borderWhite} ?borderMenu=${e.borderMenu} type="${e.menu?e.type:"default"}" ?dot=${e.dot}></dss-notification-badge>
          `:t`
            <dss-notification-badge value="${e.value}" state="${e.state}" ?borderWhite=${e.borderWhite} ?borderMenu=${e.borderMenu} type="${e.menu?e.type:"default"}" ?dot=${e.dot}></dss-notification-badge>
          `}
    `},o={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-notification-badge state="error" value="1"></dss-notification-badge>
                <dss-notification-badge state="success" value="1"></dss-notification-badge>
                <dss-notification-badge state="alert" value="1"></dss-notification-badge>
                <dss-notification-badge state="info" value="1"></dss-notification-badge>
            </div>
    `,decorators:[d(r,"notification-badge-states-style")]},s={tags:["!dev"],render:()=>t`
     <div class="wrapper">
                <dss-notification-badge state="error" icon="add_box"></dss-notification-badge>
                <dss-notification-badge state="success" icon="add_box"></dss-notification-badge>
                <dss-notification-badge state="alert" icon="add_box"></dss-notification-badge>
                <dss-notification-badge state="info" icon="add_box"></dss-notification-badge>
            </div> 
    `,decorators:[d(r,"notification-badge-icon-style")]},i={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-notification-badge state="error" dot></dss-notification-badge>  
                <dss-notification-badge state="success" dot></dss-notification-badge>
                <dss-notification-badge state="alert" dot></dss-notification-badge>
                <dss-notification-badge state="info" dot></dss-notification-badge>
            </div>
    `,decorators:[d(r,"notification-badge-dot-style")]},n={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-notification-badge borderMenu value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu dot></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" dot></dss-notification-badge>
            </div>
    `,decorators:[d(r,"notification-badge-menu-style")]};var c,b,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=248-2945&m=dev'
    }
  },
  args: {
    state: 'succes',
    showIcon: false,
    icon: 'add_box',
    value: '1',
    dot: false,
    borderWhite: false,
    borderMenu: false,
    type: 'default'
  },
  render: (args: any) => {
    return html\`
    \${args.showIcon ? html\`
            <dss-notification-badge icon="\${args.icon}" state="\${args.state}" ?borderWhite=\${args.borderWhite} ?borderMenu=\${args.borderMenu} type="\${args.menu ? args.type : 'default'}" ?dot=\${args.dot}></dss-notification-badge>
          \` : html\`
            <dss-notification-badge value="\${args.value}" state="\${args.state}" ?borderWhite=\${args.borderWhite} ?borderMenu=\${args.borderMenu} type="\${args.menu ? args.type : 'default'}" ?dot=\${args.dot}></dss-notification-badge>
          \`}
    \`;
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,l,u;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-notification-badge state="error" value="1"></dss-notification-badge>
                <dss-notification-badge state="success" value="1"></dss-notification-badge>
                <dss-notification-badge state="alert" value="1"></dss-notification-badge>
                <dss-notification-badge state="info" value="1"></dss-notification-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-states-style')]
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,m,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="wrapper">
                <dss-notification-badge state="error" icon="add_box"></dss-notification-badge>
                <dss-notification-badge state="success" icon="add_box"></dss-notification-badge>
                <dss-notification-badge state="alert" icon="add_box"></dss-notification-badge>
                <dss-notification-badge state="info" icon="add_box"></dss-notification-badge>
            </div> 
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-icon-style')]
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var v,w,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-notification-badge state="error" dot></dss-notification-badge>  
                <dss-notification-badge state="success" dot></dss-notification-badge>
                <dss-notification-badge state="alert" dot></dss-notification-badge>
                <dss-notification-badge state="info" dot></dss-notification-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-dot-style')]
}`,...(h=(w=i.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var S,$,M;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-notification-badge borderMenu value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu dot></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" dot></dss-notification-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-menu-style')]
}`,...(M=($=n.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const _=["Playground","States","Icon","Dot","MenuStyle"],P=Object.freeze(Object.defineProperty({__proto__:null,Dot:i,Icon:s,MenuStyle:n,Playground:a,States:o,__namedExportsOrder:_,default:x},Symbol.toStringTag,{value:"Module"}));export{i as D,s as I,n as M,a as P,P as S,o as a};
