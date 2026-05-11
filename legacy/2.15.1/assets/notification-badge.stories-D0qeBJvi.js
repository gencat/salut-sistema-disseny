import{x as e}from"./lit-html-D6cejpwM.js";import{w as d}from"./storybook-decorators-DSS85Rnr.js";const r=`
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    .wrapper + .wrapper {
        margin-top: 16px;
    }
`,x={title:"Components/Notification Badge",argTypes:{state:{name:"Estat",control:{type:"radio"},options:["success","error","alert","info"]},showIcon:{name:" Mostra icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},value:{name:"Valor",control:{type:"text"}},dot:{name:" Tipus dot",control:{type:"boolean"}},borderWhite:{name:" Habilitar vora: tipus blanc",control:{type:"boolean"}},borderMenu:{name:" Habilitar vora: tipus menu",control:{type:"boolean"}},type:{name:"Tipus",control:{type:"radio"},options:["default","brand"],if:{arg:"menu",truthy:!0}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=248-2945&m=dev"}},args:{state:"succes",showIcon:!1,icon:"add_box",value:"1",dot:!1,borderWhite:!1,borderMenu:!1,type:"default"},render:t=>e`
    ${t.showIcon?e`
            <dss-notification-badge icon="${t.icon}" state="${t.state}" ?borderWhite=${t.borderWhite} ?borderMenu=${t.borderMenu} type="${t.menu?t.type:"default"}" ?dot=${t.dot}></dss-notification-badge>
          `:e`
            <dss-notification-badge value="${t.value}" state="${t.state}" ?borderWhite=${t.borderWhite} ?borderMenu=${t.borderMenu} type="${t.menu?t.type:"default"}" ?dot=${t.dot}></dss-notification-badge>
          `}
    `},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-notification-badge state="error" value="1"></dss-notification-badge>
                <dss-notification-badge state="success" value="1"></dss-notification-badge>
                <dss-notification-badge state="alert" value="1"></dss-notification-badge>
                <dss-notification-badge state="info" value="1"></dss-notification-badge>
            </div>
    `,decorators:[d(r,"notification-badge-states-style")]},i={tags:["!dev"],render:()=>e`
     <div class="wrapper">
                <dss-notification-badge state="error" icon="add_box"></dss-notification-badge>
                <dss-notification-badge state="success" icon="add_box"></dss-notification-badge>
                <dss-notification-badge state="alert" icon="add_box"></dss-notification-badge>
                <dss-notification-badge state="info" icon="add_box"></dss-notification-badge>
            </div> 
    `,decorators:[d(r,"notification-badge-icon-style")]},s={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-notification-badge state="error" dot></dss-notification-badge>  
                <dss-notification-badge state="success" dot></dss-notification-badge>
                <dss-notification-badge state="alert" dot></dss-notification-badge>
                <dss-notification-badge state="info" dot></dss-notification-badge>
            </div>
    `,decorators:[d(r,"notification-badge-dot-style")]},n={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-notification-badge borderMenu value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu dot></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" dot></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge borderWhite value="1"></dss-notification-badge>
                <dss-notification-badge borderWhite dot></dss-notification-badge>
                <dss-notification-badge borderWhite type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge borderWhite type="brand" dot></dss-notification-badge>
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
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,l,p;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,m,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(m=i.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var v,h,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var S,$,M;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-notification-badge borderMenu value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu dot></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" dot></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge borderWhite value="1"></dss-notification-badge>
                <dss-notification-badge borderWhite dot></dss-notification-badge>
                <dss-notification-badge borderWhite type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge borderWhite type="brand" dot></dss-notification-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-menu-style')]
}`,...(M=($=n.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const W=["Playground","States","Icon","Dot","MenuStyle"],P=Object.freeze(Object.defineProperty({__proto__:null,Dot:s,Icon:i,MenuStyle:n,Playground:a,States:o,__namedExportsOrder:W,default:x},Symbol.toStringTag,{value:"Module"}));export{s as D,i as I,n as M,a as P,P as S,o as a};
