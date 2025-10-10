import{x as s}from"./lit-html-D6cejpwM.js";const M={title:"Components/Split Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},variant:{name:"Variant",control:{type:"radio"},options:["primary","secondary"]},text:{name:"Text",control:{type:"text"}},showIcon:{name:"Mostra icona",control:{type:"boolean"}},mainIcon:{name:"Icon principal",control:{type:"text"},if:{arg:"showIcon"}},iconClose:{name:"Icona de acció per defecte (obrir)",control:{type:"text"}},iconOpen:{name:"Icona de acció secundària (tancar)",control:{type:"text"}},isOpen:{name:"Actiú",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},hasMenu:{name:"Habilitar menú",control:{type:"boolean"}},dropdownPosition:{name:"Posición del menú",control:{type:"select"},options:["bottom-start","bottom-end","top-start","top-end"],if:{arg:"hasMenu"}}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1067-2312&m=dev"}},args:{size:"lg",variant:"primary",text:"Button",showIcon:!1,mainIcon:"add_box",iconClose:"expand_more",iconOpen:"expand_less",isOpen:!1,disabled:!1,hasMenu:!1,dropdownPosition:"bottom-start"},render:t=>s`
    <dss-split-button 
        size="${t.size}" 
        variant="${t.variant}" 
        text="${t.text}"
                icon="${t.showIcon?t.mainIcon:void 0}"
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
            <div style="height:250px">
                <dss-split-button variant="primary" text="Button" hasMenu>
                    <dss-action-menu slot="menu" position="bottom-start">
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                    </dss-action-menu>
                </dss-split-button>
            </div>
    `},d={tags:["!dev"],render:()=>s`
        <dss-split-button variant="primary" text="Button" size="lg" icon="add_box"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="md" icon="add_box"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="sm" icon="add_box"></dss-split-button>
    `};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    showIcon: false,
    mainIcon: 'add_box',
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
                icon="\${args.showIcon ? args.mainIcon : undefined}"
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,c,b;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" size="lg"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="md"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="sm"></dss-split-button>
    \`;
  }
}`,...(b=(c=e.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var x,y,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button"></dss-split-button>
        <dss-split-button variant="secondary" text="Button"></dss-split-button>
    \`;
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var g,h,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" isOpen></dss-split-button>
        <dss-split-button variant="secondary" text="Button" isOpen></dss-split-button>
    \`;
  }
}`,...(B=(h=a.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var z,$,O;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" disabled></dss-split-button>
        <dss-split-button variant="secondary" text="Button" disabled></dss-split-button>
    \`;
  }
}`,...(O=($=i.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var f,S,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div style="height:250px">
                <dss-split-button variant="primary" text="Button" hasMenu>
                    <dss-action-menu slot="menu" position="bottom-start">
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                    </dss-action-menu>
                </dss-split-button>
            </div>
    \`;
  }
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var I,_,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" size="lg" icon="add_box"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="md" icon="add_box"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="sm" icon="add_box"></dss-split-button>
    \`;
  }
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const P=["Playground","Sizes","Types","Active","Disabled","Menu","Icons"],T=Object.freeze(Object.defineProperty({__proto__:null,Active:a,Disabled:i,Icons:d,Menu:r,Playground:n,Sizes:e,Types:o,__namedExportsOrder:P,default:M},Symbol.toStringTag,{value:"Module"}));export{a as A,i as D,d as I,r as M,n as P,T as S,o as T,e as a};
