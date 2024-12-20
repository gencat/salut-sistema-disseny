import{x as e}from"./lit-html-B2eaWknC.js";const S={title:"Components/Split Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},type:{name:"Tipus",control:{type:"radio"},options:["primary","secondary"]},text:{name:"Text",control:{type:"text"}},iconClose:{name:"Icon per defecte",control:{type:"text"}},iconOpen:{name:"Icon actiú",control:{type:"text"}},isOpen:{name:"Actiú",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},hasMenu:{name:"Habilitar menú",control:{type:"boolean"}},dropdownPosition:{name:"Posición del menú",control:{type:"select"},options:["bottom-start","bottom-end","top-start","top-end"],if:{arg:"hasMenu"}}},parameters:{layout:"centered"}},n={args:{size:"lg",type:"primary",text:"Button",iconClose:"expand_more",iconOpen:"expand_less",isOpen:!1,disabled:!1,hasMenu:!1,dropdownPosition:"bottom-right"},render:t=>e`
    <dss-split-button 
        size="${t.size}" 
        type="${t.type}" 
        text="${t.text}"
        iconClose="${t.iconClose}"
        iconOpen="${t.iconOpen}"
        ?isOpen=${t.isOpen}
        ?disabled=${t.disabled}
        ?hasMenu=${t.hasMenu}
        >
      ${t.hasMenu?e`
        <dss-action-menu slot="menu" position="${t.dropdownPosition}">
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
    `},a={tags:["!dev"],render:()=>e`
        <dss-split-button type="primary" text="Button" disabled></dss-split-button>
        <dss-split-button type="secondary" text="Button" disabled></dss-split-button>
    `},r={tags:["!dev"],render:()=>e`
        <dss-split-button type="primary" text="Button" hasMenu>
    <dss-action-menu slot="menu" position="bottom-start">
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
        >
      \${args.hasMenu ? html\`
        <dss-action-menu slot="menu" position="\${args.dropdownPosition}">
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
        </dss-action-menu>
       \` : null}
    </dss-split-button>
  \`;
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,l,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button type="primary" text="Button" size="lg"></dss-split-button>
  <dss-split-button type="primary" text="Button" size="md"></dss-split-button>
  <dss-split-button type="primary" text="Button" size="sm"></dss-split-button>
    \`;
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var b,y,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button type="primary" text="Button"></dss-split-button>
        <dss-split-button type="secondary" text="Button"></dss-split-button>
    \`;
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var g,B,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button type="primary" text="Button" isOpen></dss-split-button>
        <dss-split-button type="secondary" text="Button" isOpen></dss-split-button>
    \`;
  }
}`,...(h=(B=i.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var O,$,M;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button type="primary" text="Button" disabled></dss-split-button>
        <dss-split-button type="secondary" text="Button" disabled></dss-split-button>
    \`;
  }
}`,...(M=($=a.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var z,A,v;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button type="primary" text="Button" hasMenu>
    <dss-action-menu slot="menu" position="bottom-start">
      <dss-action-menu-item label="Action menu"></dss-action-menu-item>
      <dss-action-menu-item label="Action menu"></dss-action-menu-item>
      <dss-action-menu-item label="Action menu"></dss-action-menu-item>
    </dss-action-menu>
  </dss-split-button>
    \`;
  }
}`,...(v=(A=r.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};const f=["Playground","Sizes","Types","Active","Disabled","Menu"],P=Object.freeze(Object.defineProperty({__proto__:null,Active:i,Disabled:a,Menu:r,Playground:n,Sizes:s,Types:o,__namedExportsOrder:f,default:S},Symbol.toStringTag,{value:"Module"}));export{i as A,a as D,r as M,n as P,P as S,o as T,s as a};
