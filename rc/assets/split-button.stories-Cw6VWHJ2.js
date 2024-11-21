import{x as e}from"./lit-html-paDGiEfB.js";const P={title:"Components/Split Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},type:{name:"Tipus",control:{type:"radio"},options:["primary","secondary"]},text:{name:"Text",control:{type:"text"}},iconClose:{name:"Icon per defecte",control:{type:"text"}},iconOpen:{name:"Icon actiú",control:{type:"text"}},isOpen:{name:"Actiú",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},hasMenu:{name:"Habilitar menú",control:{type:"boolean"}},dropdownPosition:{name:"Posición del menú",control:{type:"select"},options:["bottom-right","bottom-left","top-right","top-left"],if:{arg:"hasMenu"}}},parameters:{layout:"centered"}},n={args:{size:"lg",type:"primary",text:"Button",iconClose:"expand_more",iconOpen:"expand_less",isOpen:!1,disabled:!1,hasMenu:!1,dropdownPosition:"bottom-right"},render:t=>e`
    <dss-split-button 
        size="${t.size}" 
        type="${t.type}" 
        text="${t.text}"
        iconClose="${t.iconClose}"
        iconOpen="${t.iconOpen}"
        ?isOpen=${t.isOpen}
        ?disabled=${t.disabled}
        ?hasMenu=${t.hasMenu}
        dropdownPosition="${t.dropdownPosition}"
        >
      ${t.hasMenu?e`
        <dss-action-menu slot="menu">
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
        </dss-action-menu>
       `:null}
    </dss-split-button>
  `},s={tags:["!dev"],render:()=>e`
        <dss-split-button type="primary" text="Button" size="lg"></dss-split-button>
  <dss-split-button type="primary" text="Button" size="md"></dss-split-button>
  <dss-split-button type="primary" text="Button" size="sm"></dss-split-button>
    `},o={tags:["!dev"],render:()=>e`
        <dss-split-button type="primary" text="Button"></dss-split-button>
        <dss-split-button type="secondary" text="Button"></dss-split-button>
    `},i={tags:["!dev"],render:()=>e`
        <dss-split-button type="primary" text="Button" isOpen></dss-split-button>
        <dss-split-button type="secondary" text="Button" isOpen></dss-split-button>
    `},r={tags:["!dev"],render:()=>e`
        <dss-split-button type="primary" text="Button" disabled></dss-split-button>
        <dss-split-button type="secondary" text="Button" disabled></dss-split-button>
    `},a={tags:["!dev"],render:()=>e`
        <dss-split-button type="primary" text="Button" hasMenu dropdownPosition="bottom-right">
    <dss-action-menu slot="menu">
      <dss-action-menu-item label="Action menu"></dss-action-menu-item>
      <dss-action-menu-item label="Action menu"></dss-action-menu-item>
      <dss-action-menu-item label="Action menu"></dss-action-menu-item>
    </dss-action-menu>
  </dss-split-button>
    `};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    type: 'primary',
    text: 'Button',
    iconClose: 'expand_more',
    iconOpen: 'expand_less',
    isOpen: false,
    disabled: false,
    hasMenu: false,
    dropdownPosition: 'bottom-right'
  },
  render: (args: any) => {
    return html\`
    <dss-split-button 
        size="\${args.size}" 
        type="\${args.type}" 
        text="\${args.text}"
        iconClose="\${args.iconClose}"
        iconOpen="\${args.iconOpen}"
        ?isOpen=\${args.isOpen}
        ?disabled=\${args.disabled}
        ?hasMenu=\${args.hasMenu}
        dropdownPosition="\${args.dropdownPosition}"
        >
      \${args.hasMenu ? html\`
        <dss-action-menu slot="menu">
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
        </dss-action-menu>
       \` : null}
    </dss-split-button>
  \`;
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,m,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button type="primary" text="Button" size="lg"></dss-split-button>
  <dss-split-button type="primary" text="Button" size="md"></dss-split-button>
  <dss-split-button type="primary" text="Button" size="sm"></dss-split-button>
    \`;
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var b,y,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button type="primary" text="Button"></dss-split-button>
        <dss-split-button type="secondary" text="Button"></dss-split-button>
    \`;
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var g,h,B;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button type="primary" text="Button" isOpen></dss-split-button>
        <dss-split-button type="secondary" text="Button" isOpen></dss-split-button>
    \`;
  }
}`,...(B=(h=i.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var O,$,M;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button type="primary" text="Button" disabled></dss-split-button>
        <dss-split-button type="secondary" text="Button" disabled></dss-split-button>
    \`;
  }
}`,...(M=($=r.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var z,A,f;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button type="primary" text="Button" hasMenu dropdownPosition="bottom-right">
    <dss-action-menu slot="menu">
      <dss-action-menu-item label="Action menu"></dss-action-menu-item>
      <dss-action-menu-item label="Action menu"></dss-action-menu-item>
      <dss-action-menu-item label="Action menu"></dss-action-menu-item>
    </dss-action-menu>
  </dss-split-button>
    \`;
  }
}`,...(f=(A=a.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};const v=["Playground","Sizes","Types","Active","Disabled","Menu"],_=Object.freeze(Object.defineProperty({__proto__:null,Active:i,Disabled:r,Menu:a,Playground:n,Sizes:s,Types:o,__namedExportsOrder:v,default:P},Symbol.toStringTag,{value:"Module"}));export{i as A,r as D,a as M,n as P,_ as S,o as T,s as a};
