import{x as t}from"./lit-html-paDGiEfB.js";const _={title:"Components/Notification Badge",argTypes:{state:{name:"Estat",control:{type:"radio"},options:["success","error","alert","info"]},showIcon:{name:" Mostra icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},value:{name:"Valor",control:{type:"text"}},dot:{name:" Tipus dot",control:{type:"boolean"}},borderWhite:{name:" Habilitar vora: tipus blanc",control:{type:"boolean"}},borderMenu:{name:" Habilitar vora: tipus menu",control:{type:"boolean"}},type:{name:"Tipus",control:{type:"radio"},options:["default","brand"],if:{arg:"menu",truthy:!0}}},parameters:{layout:"centered"}},a={args:{state:"succes",showIcon:!1,icon:"add_box",value:"1",dot:!1,borderWhite:!1,borderMenu:!1,type:"default"},render:e=>t`
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
    `},n={tags:["!dev"],render:()=>t`
     <div class="wrapper">
  <dss-notification-badge state="error" icon="add_box"></dss-notification-badge>
  <dss-notification-badge state="success" icon="add_box"></dss-notification-badge>
  <dss-notification-badge state="alert" icon="add_box"></dss-notification-badge>
  <dss-notification-badge state="info" icon="add_box"></dss-notification-badge>
</div> 
    `},s={tags:["!dev"],render:()=>t`
      <div class="wrapper">
  <dss-notification-badge state="error" dot></dss-notification-badge>  
  <dss-notification-badge state="success" dot></dss-notification-badge>
  <dss-notification-badge state="alert" dot></dss-notification-badge>
  <dss-notification-badge state="info" dot></dss-notification-badge>
</div>
    `},i={tags:["!dev"],render:()=>t`
      <div class="wrapper">
  <dss-notification-badge borderMenu value="1"></dss-notification-badge>
  <dss-notification-badge borderMenu dot></dss-notification-badge>
  <dss-notification-badge borderMenu type="brand" value="1"></dss-notification-badge>
  <dss-notification-badge borderMenu type="brand" dot></dss-notification-badge>
</div>
    `};var d,r,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(r=a.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var b,f,u;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  }
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,l,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,v,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,$,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
  }
}`,...(M=($=i.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const x=["Playground","States","Icon","Dot","MenuStyle"],S=Object.freeze(Object.defineProperty({__proto__:null,Dot:s,Icon:n,MenuStyle:i,Playground:a,States:o,__namedExportsOrder:x,default:_},Symbol.toStringTag,{value:"Module"}));export{s as D,n as I,i as M,a as P,S,o as a};
