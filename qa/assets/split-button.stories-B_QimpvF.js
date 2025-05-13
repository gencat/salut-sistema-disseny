import{x as s}from"./lit-html-D6a8R3xZ.js";const M={title:"Components/Split Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},variant:{name:"Variant",control:{type:"radio"},options:["primary","secondary"]},text:{name:"Text",control:{type:"text"}},iconClose:{name:"Icon per defecte",control:{type:"text"}},iconOpen:{name:"Icon actiú",control:{type:"text"}},isOpen:{name:"Actiú",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},hasMenu:{name:"Habilitar menú",control:{type:"boolean"}},dropdownPosition:{name:"Posición del menú",control:{type:"select"},options:["bottom-start","bottom-end","top-start","top-end"],if:{arg:"hasMenu"}}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1067-2312&m=dev"}},args:{size:"lg",variant:"primary",text:"Button",iconClose:"expand_more",iconOpen:"expand_less",isOpen:!1,disabled:!1,hasMenu:!1,dropdownPosition:"bottom-start"},render:t=>s`
    <dss-split-button 
        size="${t.size}" 
        variant="${t.variant}" 
        text="${t.text}"
        iconClose="${t.iconClose}"
        iconOpen="${t.iconOpen}"
        ?isOpen=${t.isOpen}
        ?disabled=${t.disabled}
        ?hasMenu=${t.hasMenu}
        >
      ${t.hasMenu?s`
        <dss-action-menu slot="menu" position="${t.dropdownPosition}">
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
        </dss-action-menu>
       `:null}
    </dss-split-button>
  `},e={tags:["!dev"],render:()=>s`
        <dss-split-button variant="primary" text="Button" size="lg"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="md"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="sm"></dss-split-button>
    `},o={tags:["!dev"],render:()=>s`
        <dss-split-button variant="primary" text="Button"></dss-split-button>
        <dss-split-button variant="secondary" text="Button"></dss-split-button>
    `},a={tags:["!dev"],render:()=>s`
        <dss-split-button variant="primary" text="Button" isOpen></dss-split-button>
        <dss-split-button variant="secondary" text="Button" isOpen></dss-split-button>
    `},i={tags:["!dev"],render:()=>s`
        <dss-split-button variant="primary" text="Button" disabled></dss-split-button>
        <dss-split-button variant="secondary" text="Button" disabled></dss-split-button>
    `},r={tags:["!dev"],render:()=>s`
        <dss-split-button variant="primary" text="Button" hasMenu>
                    <dss-action-menu slot="menu" position="bottom-start">
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                    </dss-action-menu>
                </dss-split-button>
    `};var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1067-2312&m=dev'
    }
  },
  args: {
    size: 'lg',
    variant: 'primary',
    text: 'Button',
    iconClose: 'expand_more',
    iconOpen: 'expand_less',
    isOpen: false,
    disabled: false,
    hasMenu: false,
    dropdownPosition: 'bottom-start'
  },
  render: (args: any) => {
    return html\`
    <dss-split-button 
        size="\${args.size}" 
        variant="\${args.variant}" 
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
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,p,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" size="lg"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="md"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="sm"></dss-split-button>
    \`;
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,y,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button"></dss-split-button>
        <dss-split-button variant="secondary" text="Button"></dss-split-button>
    \`;
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var g,x,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" isOpen></dss-split-button>
        <dss-split-button variant="secondary" text="Button" isOpen></dss-split-button>
    \`;
  }
}`,...(B=(x=a.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var h,O,$;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" disabled></dss-split-button>
        <dss-split-button variant="secondary" text="Button" disabled></dss-split-button>
    \`;
  }
}`,...($=(O=i.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var S,z,A;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" hasMenu>
                    <dss-action-menu slot="menu" position="bottom-start">
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                    </dss-action-menu>
                </dss-split-button>
    \`;
  }
}`,...(A=(z=r.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const f=["Playground","Sizes","Types","Active","Disabled","Menu"],P=Object.freeze(Object.defineProperty({__proto__:null,Active:a,Disabled:i,Menu:r,Playground:n,Sizes:e,Types:o,__namedExportsOrder:f,default:M},Symbol.toStringTag,{value:"Module"}));export{a as A,i as D,r as M,n as P,P as S,o as T,e as a};
